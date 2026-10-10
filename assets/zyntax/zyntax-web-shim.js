/* zyntax-web-shim.js
 * Thay ShellPlugin + ExecutionPlugin (plugin native Android) bằng bản chạy trên trình duyệt.
 * - Hệ file ảo lưu trong IndexedDB (còn sau khi tắt trình duyệt).
 * - Nhập project: file .zip hoặc thư mục. Xuất project: tải .zip.
 * - KHÔNG chạy được lệnh shell / terminal (trình duyệt không cho phép).
 */
;(function () {
  'use strict'
  var root = typeof window !== 'undefined' ? window : globalThis
  if (root.__ZyntaxWeb) return

  var enc = new TextEncoder(),
    dec = new TextDecoder()
  var ENV = {
    projects: '/zyntax/projects',
    basePath: '/zyntax',
    filesDir: '/zyntax/files',
    cacheDir: '/zyntax/cache',
    platform: 'web'
  }
  var EXCLUDED_DIRS = new Set([
    'node_modules',
    '.git',
    'dist',
    'build',
    '.gradle',
    '__pycache__',
    '.venv',
    'target'
  ])

  /* ---------- tiện ích ---------- */
  function err(code, msg) {
    var e = new Error(msg)
    e.code = code
    return e
  }
  function norm(p) {
    var parts = [],
      segs = String(p == null ? '' : p)
        .replace(/\\/g, '/')
        .split('/')
    for (var i = 0; i < segs.length; i++) {
      var s = segs[i]
      if (!s || s === '.') continue
      if (s === '..') {
        parts.pop()
        continue
      }
      parts.push(s)
    }
    return '/' + parts.join('/')
  }
  function parentOf(p) {
    var i = p.lastIndexOf('/')
    return i <= 0 ? '/' : p.slice(0, i)
  }
  function nameOf(p) {
    return p.slice(p.lastIndexOf('/') + 1)
  }
  function concat(a, b) {
    var o = new Uint8Array(a.length + b.length)
    o.set(a, 0)
    o.set(b, a.length)
    return o
  }
  function toB64(bytes) {
    var s = ''
    for (var i = 0; i < bytes.length; i += 0x8000)
      s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000))
    return btoa(s)
  }
  function fromB64(b64) {
    var s = atob(b64 || ''),
      o = new Uint8Array(s.length)
    for (var i = 0; i < s.length; i++) o[i] = s.charCodeAt(i)
    return o
  }
  function uuid() {
    if (root.crypto && root.crypto.randomUUID) return root.crypto.randomUUID()
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0
      return (c === 'x' ? r : (r & 3) | 8).toString(16)
    })
  }
  function fnv(bytes) {
    var h = 0x811c9dc5
    for (var i = 0; i < bytes.length; i++) {
      h ^= bytes[i]
      h = Math.imul(h, 0x01000193) >>> 0
    }
    return h.toString(16)
  }

  /* ---------- lưu trữ IndexedDB (nếu có) + bộ nhớ ---------- */
  var nodes = new Map(),
    nextIno = 1,
    db = null
  function openDB() {
    return new Promise(function (res) {
      if (typeof indexedDB === 'undefined') return res(null)
      try {
        var r = indexedDB.open('zyntax-web-fs', 1)
        r.onupgradeneeded = function () {
          r.result.createObjectStore('nodes', { keyPath: 'path' })
        }
        r.onsuccess = function () {
          res(r.result)
        }
        r.onerror = function () {
          res(null)
        }
      } catch (e) {
        res(null)
      }
    })
  }
  function idbAll() {
    return new Promise(function (res) {
      var q = db.transaction('nodes', 'readonly').objectStore('nodes').getAll()
      q.onsuccess = function () {
        res(q.result || [])
      }
      q.onerror = function () {
        res([])
      }
    })
  }
  function idbPut(n) {
    return new Promise(function (res) {
      if (!db) return res()
      try {
        var tx = db.transaction('nodes', 'readwrite')
        tx.objectStore('nodes').put({
          path: n.path,
          kind: n.kind,
          data: n.data || null,
          mtime: n.mtime,
          ino: n.ino
        })
        tx.oncomplete =
          tx.onerror =
          tx.onabort =
            function () {
              res()
            }
      } catch (e) {
        res()
      }
    })
  }
  function idbDel(paths) {
    return new Promise(function (res) {
      if (!db || !paths.length) return res()
      try {
        var tx = db.transaction('nodes', 'readwrite'),
          st = tx.objectStore('nodes')
        paths.forEach(function (p) {
          st.delete(p)
        })
        tx.oncomplete =
          tx.onerror =
          tx.onabort =
            function () {
              res()
            }
      } catch (e) {
        res()
      }
    })
  }

  /* ---------- theo dõi thay đổi thư mục ---------- */
  var watchers = new Map(),
    watchSeq = 1
  function notify(event, p) {
    watchers.forEach(function (w) {
      if (p === w.path || p.indexOf(w.path + '/') === 0) {
        try {
          w.cb({ event: event, path: p, name: nameOf(p) })
        } catch (e) {
          /* bỏ qua */
        }
      }
    })
  }

  /* ---------- thao tác cây thư mục ---------- */
  function get(p) {
    return nodes.get(norm(p))
  }
  async function mkdirp(p) {
    p = norm(p)
    var chain = [],
      c = p
    while (c !== '/' && !nodes.has(c)) {
      chain.unshift(c)
      c = parentOf(c)
    }
    var par = nodes.get(c)
    if (par && par.kind !== 'directory') throw err('ENOTDIR', 'Không phải thư mục: ' + c)
    for (var i = 0; i < chain.length; i++) {
      var n = { path: chain[i], kind: 'directory', data: null, mtime: Date.now(), ino: nextIno++ }
      nodes.set(n.path, n)
      await idbPut(n)
      notify('created', n.path)
    }
  }
  async function putFile(p, bytes, append) {
    p = norm(p)
    if (p === '/') throw err('EISDIR', 'Không thể ghi vào thư mục gốc')
    await mkdirp(parentOf(p))
    var ex = nodes.get(p)
    if (ex && ex.kind === 'directory') throw err('EISDIR', 'Đây là thư mục: ' + p)
    var data = append && ex && ex.data ? concat(ex.data, bytes) : bytes
    var n = { path: p, kind: 'file', data: data, mtime: Date.now(), ino: ex ? ex.ino : nextIno++ }
    nodes.set(p, n)
    await idbPut(n)
    notify(ex ? 'modified' : 'created', p)
  }
  function children(p) {
    p = norm(p)
    var pre = p === '/' ? '/' : p + '/',
      out = []
    nodes.forEach(function (n, k) {
      if (k !== p && k.indexOf(pre) === 0 && k.indexOf('/', pre.length) === -1) out.push(n)
    })
    return out
  }
  function subtree(p) {
    p = norm(p)
    var pre = p === '/' ? '/' : p + '/',
      out = []
    nodes.forEach(function (n, k) {
      if (k === p || k.indexOf(pre) === 0) out.push(n)
    })
    out.sort(function (a, b) {
      return a.path < b.path ? -1 : a.path > b.path ? 1 : 0
    })
    return out
  }
  async function removeTree(p) {
    p = norm(p)
    if (p === '/') throw err('EPERM', 'Không thể xóa thư mục gốc')
    var list = subtree(p),
      keys = list.map(function (n) {
        return n.path
      })
    keys.forEach(function (k) {
      nodes.delete(k)
    })
    await idbDel(keys)
    if (keys.length) notify('deleted', p)
  }
  async function copyTree(src, dst, move) {
    src = norm(src)
    dst = norm(dst)
    var s = nodes.get(src)
    if (!s) throw err('ENOENT', 'Không tìm thấy: ' + src)
    if (dst === src) return
    if (dst.indexOf(src + '/') === 0) throw err('EINVAL', 'Không thể chép thư mục vào chính nó')
    await mkdirp(parentOf(dst))
    var old = nodes.get(dst)
    if (old) {
      if (old.kind === 'directory' && s.kind !== 'directory')
        throw err('EISDIR', 'Đích là thư mục: ' + dst)
      if (old.kind !== 'directory' && s.kind === 'directory')
        throw err('ENOTDIR', 'Đích là tệp: ' + dst)
      if (old.kind === 'file') await removeTree(dst)
    }
    var list = subtree(src),
      pre = src
    for (var i = 0; i < list.length; i++) {
      var n = list[i],
        np = dst + n.path.slice(pre.length)
      var c = {
        path: np,
        kind: n.kind,
        data: n.data,
        mtime: move ? n.mtime : Date.now(),
        ino: move ? n.ino : nextIno++
      }
      nodes.set(np, c)
      await idbPut(c)
    }
    if (move) {
      var keys = list.map(function (n) {
        return n.path
      })
      keys.forEach(function (k) {
        nodes.delete(k)
      })
      await idbDel(keys)
      notify('deleted', src)
    }
    notify('created', dst)
  }
  function meta(n) {
    var size = n.kind === 'file' ? n.data.length : 0,
      mt = Math.floor(n.mtime)
    return {
      name: nameOf(n.path),
      path: n.path,
      isDirectory: n.kind === 'directory',
      isFile: n.kind === 'file',
      size: size,
      lastModified: mt,
      mtime: mt,
      modified: mt,
      canRead: true,
      canWrite: true
    }
  }
  function needNode(p) {
    var n = nodes.get(norm(p))
    if (!n) throw err('ENOENT', 'Không tìm thấy: ' + norm(p))
    return n
  }
  function needFile(p) {
    var n = needNode(p)
    if (n.kind !== 'file') throw err('EISDIR', 'Đây là thư mục: ' + n.path)
    return n
  }

  /* ---------- ZIP (đọc/ghi, không cần thư viện ngoài) ---------- */
  var crcTable = (function () {
    var t = new Uint32Array(256)
    for (var n = 0; n < 256; n++) {
      var c = n
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
      t[n] = c >>> 0
    }
    return t
  })()
  function crc32(b) {
    var c = 0xffffffff
    for (var i = 0; i < b.length; i++) c = crcTable[(c ^ b[i]) & 0xff] ^ (c >>> 8)
    return (c ^ 0xffffffff) >>> 0
  }
  async function pipeThrough(bytes, stream) {
    var w = stream.writable.getWriter()
    w.write(bytes)
    w.close()
    return new Uint8Array(await new Response(stream.readable).arrayBuffer())
  }
  async function deflateRaw(b) {
    return typeof CompressionStream === 'undefined'
      ? null
      : pipeThrough(b, new CompressionStream('deflate-raw'))
  }
  async function inflateRaw(b) {
    if (typeof DecompressionStream === 'undefined')
      throw err('EUNSUPPORTED', 'Trình duyệt không hỗ trợ giải nén zip (cần Chrome 80+).')
    return pipeThrough(b, new DecompressionStream('deflate-raw'))
  }
  async function makeZip(entries) {
    // entries: [{name, data|null}] — data null = thư mục
    var parts = [],
      central = [],
      offset = 0,
      d = new Date()
    var dt = ((d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1)) & 0xffff
    var dd = (((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate()) & 0xffff
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i],
        isDir = e.data == null,
        data = isDir ? new Uint8Array(0) : e.data
      var nameB = enc.encode(e.name + (isDir ? '/' : '')),
        crc = crc32(data),
        method = 0,
        comp = data
      if (!isDir && data.length > 64) {
        var z = await deflateRaw(data)
        if (z && z.length < data.length) {
          method = 8
          comp = z
        }
      }
      var lh = new DataView(new ArrayBuffer(30))
      lh.setUint32(0, 0x04034b50, true)
      lh.setUint16(4, 20, true)
      lh.setUint16(6, 0x0800, true)
      lh.setUint16(8, method, true)
      lh.setUint16(10, dt, true)
      lh.setUint16(12, dd, true)
      lh.setUint32(14, crc, true)
      lh.setUint32(18, comp.length, true)
      lh.setUint32(22, data.length, true)
      lh.setUint16(26, nameB.length, true)
      lh.setUint16(28, 0, true)
      parts.push(new Uint8Array(lh.buffer), nameB, comp)
      var ch = new DataView(new ArrayBuffer(46))
      ch.setUint32(0, 0x02014b50, true)
      ch.setUint16(4, 20, true)
      ch.setUint16(6, 20, true)
      ch.setUint16(8, 0x0800, true)
      ch.setUint16(10, method, true)
      ch.setUint16(12, dt, true)
      ch.setUint16(14, dd, true)
      ch.setUint32(16, crc, true)
      ch.setUint32(20, comp.length, true)
      ch.setUint32(24, data.length, true)
      ch.setUint16(28, nameB.length, true)
      ch.setUint32(38, isDir ? 0x10 : 0, true)
      ch.setUint32(42, offset, true)
      central.push(new Uint8Array(ch.buffer), nameB)
      offset += 30 + nameB.length + comp.length
    }
    var cdSize = central.reduce(function (a, b) {
      return a + b.length
    }, 0)
    var eocd = new DataView(new ArrayBuffer(22))
    eocd.setUint32(0, 0x06054b50, true)
    eocd.setUint16(8, entries.length, true)
    eocd.setUint16(10, entries.length, true)
    eocd.setUint32(12, cdSize, true)
    eocd.setUint32(16, offset, true)
    var all = parts.concat(central, [new Uint8Array(eocd.buffer)])
    var total = all.reduce(function (a, b) {
        return a + b.length
      }, 0),
      out = new Uint8Array(total),
      pos = 0
    all.forEach(function (b) {
      out.set(b, pos)
      pos += b.length
    })
    return out
  }
  function readZip(bytes) {
    var dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength),
      eo = -1
    for (var i = bytes.length - 22; i >= Math.max(0, bytes.length - 65557); i--) {
      if (dv.getUint32(i, true) === 0x06054b50) {
        eo = i
        break
      }
    }
    if (eo < 0) throw err('EZIP', 'Không phải file zip hợp lệ.')
    var count = dv.getUint16(eo + 10, true),
      p = dv.getUint32(eo + 16, true),
      list = []
    for (var k = 0; k < count; k++) {
      if (dv.getUint32(p, true) !== 0x02014b50) throw err('EZIP', 'Danh mục zip bị hỏng.')
      var flags = dv.getUint16(p + 8, true),
        method = dv.getUint16(p + 10, true)
      var csize = dv.getUint32(p + 20, true),
        usize = dv.getUint32(p + 24, true)
      var nl = dv.getUint16(p + 28, true),
        el = dv.getUint16(p + 30, true),
        cl = dv.getUint16(p + 32, true),
        lo = dv.getUint32(p + 42, true)
      var rawName = bytes.subarray(p + 46, p + 46 + nl)
      var name = flags & 0x0800 ? dec.decode(rawName) : String.fromCharCode.apply(null, rawName)
      list.push({ name: name, method: method, csize: csize, size: usize, lo: lo })
      p += 46 + nl + el + cl
    }
    return list.map(function (e) {
      var isDir = /\/$/.test(e.name)
      return {
        name: e.name.replace(/\/+$/, ''),
        isDirectory: isDir,
        size: e.size,
        data: async function () {
          var ls = e.lo,
            nl2 = dv.getUint16(ls + 26, true),
            el2 = dv.getUint16(ls + 28, true),
            st = ls + 30 + nl2 + el2
          var raw = bytes.subarray(st, st + e.csize)
          if (e.method === 0) return raw.slice()
          if (e.method === 8) return inflateRaw(raw)
          throw err('EZIP', 'Kiểu nén zip chưa hỗ trợ: ' + e.method)
        }
      }
    })
  }
  function safeRel(name) {
    var segs = String(name)
      .replace(/\\/g, '/')
      .split('/')
      .filter(function (s) {
        return s && s !== '.'
      })
    if (
      segs.some(function (s) {
        return s === '..'
      })
    )
      return null
    if (segs[0] === '__MACOSX') return null
    return segs
  }
  async function extractInto(entries, destDir, stripRoot) {
    var files = 0,
      bytes = 0
    await mkdirp(destDir)
    for (var i = 0; i < entries.length; i++) {
      var segs = safeRel(entries[i].name)
      if (!segs || !segs.length) continue
      if (stripRoot) segs = segs.slice(1)
      if (!segs.length) continue
      var target = norm(destDir + '/' + segs.join('/'))
      if (target.indexOf(norm(destDir) + '/') !== 0) continue
      if (entries[i].isDirectory) {
        await mkdirp(target)
        continue
      }
      var data = await entries[i].data()
      await putFile(target, data, false)
      files++
      bytes += data.length
    }
    return { files: files, bytes: bytes }
  }
  function commonRoot(entries) {
    var first = null
    for (var i = 0; i < entries.length; i++) {
      var segs = safeRel(entries[i].name)
      if (!segs || !segs.length) continue
      if (segs.length === 1 && !entries[i].isDirectory) return null
      if (first === null) first = segs[0]
      else if (first !== segs[0]) return null
    }
    return first
  }

  /* ---------- chọn file / thư mục từ trình duyệt ---------- */
  function pickFiles(opts) {
    return new Promise(function (resolve, reject) {
      if (typeof document === 'undefined')
        return reject(err('EUNSUPPORTED', 'Không có giao diện trình duyệt.'))
      var inp = document.createElement('input')
      inp.type = 'file'
      inp.style.display = 'none'
      if (opts.accept) inp.accept = opts.accept
      if (opts.directory) {
        inp.webkitdirectory = true
        inp.multiple = true
      }
      function done() {
        setTimeout(function () {
          if (inp.parentNode) inp.parentNode.removeChild(inp)
        }, 0)
      }
      inp.onchange = function () {
        var f = Array.prototype.slice.call(inp.files || [])
        done()
        f.length ? resolve(f) : reject(err('PROJECT_PICKER_CANCELLED', 'cancelled'))
      }
      inp.oncancel = function () {
        done()
        reject(err('PROJECT_PICKER_CANCELLED', 'cancelled'))
      }
      document.body.appendChild(inp)
      inp.click()
    })
  }
  function download(name, bytes) {
    var url = URL.createObjectURL(new Blob([bytes], { type: 'application/zip' }))
    var a = document.createElement('a')
    a.href = url
    a.download = name
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    setTimeout(function () {
      URL.revokeObjectURL(url)
      a.remove()
    }, 4000)
  }
  function cleanName(s) {
    s = String(s || '')
      .replace(/[\/\\\u0000-\u001f\u007f-\u009f]/g, '_')
      .trim()
    return !s || s === '.' || s === '..' ? 'project' : s.slice(0, 120)
  }
  function uniqueProjectName(base) {
    var name = cleanName(base),
      i = 2
    while (nodes.has(norm(ENV.projects + '/' + name))) name = cleanName(base) + ' ' + i++
    return name
  }

  /* ---------- bản ghi Transfers (khớp bộ kiểm tra schema v5 của app) ---------- */
  var transfers = new Map(),
    listeners = {}
  function emit(event, payload) {
    ;(listeners[event] || []).slice().forEach(function (cb) {
      try {
        cb(payload)
      } catch (e) {
        /* bỏ qua */
      }
    })
  }
  function record(type, o) {
    var now = Date.now()
    var r = {
      schemaVersion: 5,
      id: uuid(),
      type: type,
      status: 'completed',
      destinationName: o.destinationName == null ? null : o.destinationName,
      projectPath: o.projectPath == null ? null : o.projectPath,
      format: o.format,
      revision: 1,
      generation: 1,
      createdAt: now,
      updatedAt: now,
      bytesProcessed: o.bytes || 0,
      filesProcessed: o.files || 0,
      phase: 'completed',
      error: null,
      blockedReason: null,
      attempt: 1,
      exportSelection: o.exportSelection == null ? null : o.exportSelection
    }
    transfers.set(r.id, r)
    emit('projectTransferProgress', r)
    return r
  }
  function failedRecord(type, o, message) {
    var r = record(type, o)
    r.status = 'failed'
    r.phase = 'failed'
    r.error = String(message).slice(0, 2000)
    return r
  }

  /* ---------- export: chọn thành phần ---------- */
  function exclusionOf(name, isDir) {
    if (isDir) return EXCLUDED_DIRS.has(name) ? 'recommended-directory:' + name : null
    if (name === '.DS_Store' || name === 'Thumbs.db') return 'operating-system-metadata'
    if (/\.log$/i.test(name)) return 'log-file'
    if (/^\.env(\.|$)/.test(name)) return 'environment-secret'
    return null
  }
  function included(sel, parts, isDir) {
    var res = true
    if (sel.preset === 'recommended') {
      for (var i = 0; i < parts.length; i++) {
        if (exclusionOf(parts[i], i < parts.length - 1 || isDir) !== null) {
          res = false
          break
        }
      }
    }
    var best = -1
    ;(sel.rules || []).forEach(function (r) {
      var p = r.path,
        ok = p.length <= parts.length
      for (var i = 0; ok && i < p.length; i++) if (p[i] !== parts[i]) ok = false
      if (ok && p.length > best) {
        best = p.length
        res = r.included
      }
    })
    return res
  }

  /* ---------- ShellPlugin ---------- */
  var ready = (async function () {
    db = await openDB()
    if (db) {
      var all = await idbAll()
      all.forEach(function (n) {
        nodes.set(n.path, n)
        if (n.ino >= nextIno) nextIno = n.ino + 1
      })
    }
    if (!nodes.has('/'))
      nodes.set('/', { path: '/', kind: 'directory', data: null, mtime: Date.now(), ino: 0 })
    await mkdirp(ENV.projects)
    await mkdirp(ENV.filesDir)
    await mkdirp(ENV.cacheDir)
  })()
  function api(fn) {
    return async function () {
      await ready
      return fn.apply(null, arguments)
    }
  }

  var ShellPlugin = {
    initialize: api(async function () {
      return { success: true }
    }),
    listDir: api(async function (o) {
      var n = needNode(o.path)
      if (n.kind !== 'directory') throw err('ENOTDIR', 'Không phải thư mục: ' + n.path)
      return { entries: children(n.path).map(meta) }
    }),
    listDirRecursive: api(async function (o) {
      var base = norm(o.path),
        max = o.maxDepth == null ? 10 : o.maxDepth,
        out = []
      needNode(base)
      subtree(base).forEach(function (n) {
        if (n.path === base) return
        var rel = n.path.slice(base === '/' ? 1 : base.length + 1),
          depth = rel.split('/').length
        if (depth > max) return
        var m = meta(n)
        m.relativePath = rel
        m.depth = depth
        out.push(m)
      })
      return { entries: out }
    }),
    mkdir: api(async function (o) {
      await mkdirp(o.path)
      return { success: true }
    }),
    ensureDirectoryDurable: api(async function (o) {
      await mkdirp(o.path)
      return { success: true }
    }),
    delete: api(async function (o) {
      var n = get(o.path)
      if (!n) return { success: true }
      if (n.kind === 'directory' && !o.recursive && children(n.path).length)
        throw err('ENOTEMPTY', 'Thư mục không rỗng: ' + n.path)
      await removeTree(n.path)
      return { success: true }
    }),
    deleteProjectTree: api(async function (o) {
      await removeTree(o.path)
      return { success: true }
    }),
    deleteFileOperationTree: api(async function (o) {
      if (get(o.path)) await removeTree(o.path)
      return { success: true }
    }),
    purgeProjectManagerHistory: api(async function () {
      transfers.clear()
      return { success: true }
    }),
    exists: api(async function (o) {
      return { exists: !!get(o.path) }
    }),
    existsNoFollowPrivate: api(async function (o) {
      return { exists: !!get(o.path) }
    }),
    stat: api(async function (o) {
      return meta(needNode(o.path))
    }),
    statPathNoFollow: api(async function (o) {
      var n = needNode(o.path),
        m = meta(n)
      m.kind = n.kind
      m.identity = n.ino + ':' + Math.floor(n.mtime) + ':' + m.size
      return m
    }),
    hashPath: api(async function (o) {
      var n = needNode(o.path),
        m = meta(n)
      m.kind = n.kind
      m.hash =
        n.kind === 'file'
          ? fnv(n.data) + ':' + m.size
          : 'dir:' + n.ino + ':' + children(n.path).length
      m.identity = m.hash
      return m
    }),
    readFile: api(async function (o) {
      return { content: dec.decode(needFile(o.path).data) }
    }),
    readUtf8NoFollowPrivate: api(async function (o) {
      return { content: dec.decode(needFile(o.path).data) }
    }),
    writeFile: api(async function (o) {
      await putFile(o.path, enc.encode(o.content == null ? '' : String(o.content)), false)
      return { success: true }
    }),
    atomicWriteUtf8: api(async function (o) {
      await putFile(o.path, enc.encode(o.content == null ? '' : String(o.content)), false)
      return { success: true }
    }),
    readFileChunked: api(async function (o) {
      var n = needFile(o.path),
        off = o.offset || 0,
        size = o.chunkSize || 65536
      var slice = n.data.subarray(off, Math.min(n.data.length, off + size))
      return {
        chunk: toB64(slice),
        bytesRead: slice.length,
        totalSize: n.data.length,
        hasMore: off + slice.length < n.data.length
      }
    }),
    writeFileChunked: api(async function (o) {
      await putFile(o.path, fromB64(o.chunk), !!o.append)
      return { success: true }
    }),
    rename: api(async function (o) {
      await copyTree(o.oldPath, o.newPath, true)
      return { success: true }
    }),
    atomicMoveNoReplace: api(async function (o) {
      if (get(o.destination)) throw err('EEXIST', 'Đã tồn tại: ' + norm(o.destination))
      await copyTree(o.source, o.destination, true)
      return { success: true }
    }),
    copy: api(async function (o) {
      await copyTree(o.src, o.dest, false)
      return { success: true }
    }),
    copyPathDurableNoFollow: api(async function (o) {
      if (get(o.destination)) throw err('EEXIST', 'Đã tồn tại: ' + norm(o.destination))
      await copyTree(o.source, o.destination, false)
      return { success: true }
    }),
    createEmptyStaged: api(async function (o) {
      if (get(o.path)) throw err('EEXIST', 'Đã tồn tại: ' + norm(o.path))
      if (o.kind === 'directory') await mkdirp(o.path)
      else await putFile(o.path, new Uint8Array(0), false)
      return { success: true }
    }),
    searchInFiles: api(async function (o) {
      var results = [],
        max = o.maxResults || 100,
        re,
        flags = o.caseSensitive ? 'g' : 'gi'
      try {
        re = new RegExp(
          o.useRegex ? o.query : String(o.query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
          flags
        )
      } catch (e) {
        throw err('EINVAL', 'Biểu thức tìm kiếm không hợp lệ')
      }
      var pat = null
      if (o.filePattern) {
        pat = String(o.filePattern)
          .split(',')
          .map(function (g) {
            g = g.trim()
            if (!g) return null
            return new RegExp(
              '^' +
                g
                  .replace(/[.+^${}()|[\]\\]/g, '\\$&')
                  .replace(/\*/g, '.*')
                  .replace(/\?/g, '.') +
                '$',
              'i'
            )
          })
          .filter(Boolean)
      }
      var base = norm(o.path),
        list = subtree(base)
      for (var i = 0; i < list.length && results.length < max; i++) {
        var n = list[i]
        if (n.kind !== 'file' || /(^|\/)(node_modules|\.git)\//.test(n.path)) continue
        var nm = nameOf(n.path)
        if (
          pat &&
          pat.length &&
          !pat.some(function (r) {
            return r.test(nm)
          })
        )
          continue
        if (n.data.length > 2e6) continue
        var text = dec.decode(n.data)
        if (text.indexOf('\0') !== -1) continue
        var lines = text.split('\n')
        for (var l = 0; l < lines.length && results.length < max; l++) {
          re.lastIndex = 0
          var m = re.exec(lines[l])
          if (m)
            results.push({
              path: n.path,
              name: nm,
              line: l + 1,
              lineNumber: l + 1,
              column: m.index + 1,
              text: lines[l].slice(0, 500),
              match: m[0],
              preview: lines[l].slice(0, 500)
            })
        }
      }
      return { results: results }
    }),
    batch: api(async function (o) {
      var out = [],
        ops = o.ops || []
      for (var i = 0; i < ops.length; i++) {
        var op = ops[i]
        try {
          if (op.action === 'read')
            out.push({ success: true, path: op.path, content: dec.decode(needFile(op.path).data) })
          else if (op.action === 'write') {
            await putFile(op.path, enc.encode(op.content == null ? '' : String(op.content)), false)
            out.push({ success: true, path: op.path })
          } else if (op.action === 'exists')
            out.push({ success: true, path: op.path, exists: !!get(op.path) })
          else out.push({ success: false, error: 'Không hỗ trợ: ' + op.action })
        } catch (e) {
          out.push({ success: false, path: op.path, error: e.message })
        }
      }
      return { results: out }
    }),
    watchDir: api(async function (o, cb) {
      var id = 'w' + watchSeq++
      if (typeof cb === 'function') watchers.set(id, { path: norm(o.path), cb: cb })
      return id
    }),
    unwatchDir: api(async function (o) {
      var p = norm(o.path)
      Array.from(watchers.keys()).forEach(function (k) {
        if (watchers.get(k).path === p) watchers.delete(k)
      })
      return { success: true }
    }),
    unwatchAll: api(async function () {
      watchers.clear()
      return { success: true }
    }),
    zip: api(async function (o) {
      var src = norm(o.source),
        s = needNode(src),
        entries = []
      if (s.kind === 'file') entries.push({ name: nameOf(src), data: s.data })
      else
        subtree(src).forEach(function (n) {
          if (n.path === src) return
          var rel = n.path.slice(src === '/' ? 1 : src.length + 1)
          entries.push({ name: rel, data: n.kind === 'file' ? n.data : null })
        })
      await putFile(o.dest, await makeZip(entries), false)
      return { success: true }
    }),
    unzip: api(async function (o) {
      var entries = readZip(needFile(o.source).data)
      var r = await extractInto(entries, o.dest, false)
      return { success: true, files: r.files }
    }),
    listZip: api(async function (o) {
      var entries = readZip(needFile(o.path).data)
      return {
        entries: entries.map(function (e) {
          return { name: e.name, path: e.name, size: e.size, isDirectory: e.isDirectory }
        })
      }
    }),
    clipboardCopy: api(async function (o) {
      ShellPlugin._clip = o.text == null ? '' : String(o.text)
      try {
        if (navigator.clipboard) await navigator.clipboard.writeText(ShellPlugin._clip)
      } catch (e) {
        /* bỏ qua */
      }
      return { success: true }
    }),
    clipboardPaste: api(async function () {
      var t = ShellPlugin._clip || ''
      try {
        if (navigator.clipboard && navigator.clipboard.readText)
          t = await navigator.clipboard.readText()
      } catch (e) {
        /* dùng bản nội bộ */
      }
      return { text: t, value: t, hasText: !!t }
    }),
    clipboardHasText: api(async function () {
      return { hasText: !!ShellPlugin._clip, value: !!ShellPlugin._clip }
    }),
    clipboardClear: api(async function () {
      ShellPlugin._clip = ''
      return { success: true }
    }),
    preview: api(async function (o) {
      if (o && o.action === 'open' && o.url && typeof window !== 'undefined')
        window.open(o.url, '_blank', 'noopener')
      return { success: true }
    }),

    /* --- Transfers --- */
    listProjectTransfers: api(async function () {
      return { transfers: Array.from(transfers.values()) }
    }),
    getProjectTransfer: api(async function (o) {
      var r = transfers.get(o.jobId)
      if (!r) throw err('ENOENT', 'Không tìm thấy tiến trình: ' + o.jobId)
      return r
    }),
    cancelProjectTransfer: api(async function (o) {
      return ShellPlugin.getProjectTransfer(o)
    }),
    retryProjectTransfer: api(async function (o) {
      return ShellPlugin.getProjectTransfer(o)
    }),
    resolveProjectImportConflict: api(async function (o) {
      return ShellPlugin.getProjectTransfer(o)
    }),
    cleanupProjectTransfer: api(async function (o) {
      transfers.delete(o.jobId)
      return { jobId: o.jobId, cleaned: true }
    }),
    pickProjectArchiveImport: api(async function (o) {
      var files = await pickFiles({ accept: '.zip,application/zip,application/x-zip-compressed' }),
        f = files[0]
      var base = (o && o.destinationName) || f.name.replace(/\.zip$/i, '')
      var name = uniqueProjectName(base),
        meta0 = { destinationName: name, format: 'zip' }
      try {
        var entries = readZip(new Uint8Array(await f.arrayBuffer()))
        var strip = commonRoot(entries) !== null
        var res = await extractInto(entries, ENV.projects + '/' + name, strip)
        meta0.files = res.files
        meta0.bytes = res.bytes
        return record('archive-import', meta0)
      } catch (e) {
        try {
          if (get(ENV.projects + '/' + name)) await removeTree(ENV.projects + '/' + name)
        } catch (x) {
          /* bỏ qua */
        }
        return failedRecord('archive-import', meta0, e.message || 'Nhập zip thất bại')
      }
    }),
    pickProjectDirectoryImport: api(async function (o) {
      var files = await pickFiles({ directory: true })
      var rootName = (files[0].webkitRelativePath || '').split('/')[0] || 'project'
      var name = uniqueProjectName((o && o.destinationName) || rootName),
        meta0 = { destinationName: name, format: 'directory' }
      try {
        var total = 0,
          count = 0,
          dest = ENV.projects + '/' + name
        await mkdirp(dest)
        for (var i = 0; i < files.length; i++) {
          var segs = safeRel(files[i].webkitRelativePath || files[i].name)
          if (!segs) continue
          if (segs.length > 1) segs = segs.slice(1)
          var data = new Uint8Array(await files[i].arrayBuffer())
          await putFile(dest + '/' + segs.join('/'), data, false)
          total += data.length
          count++
        }
        meta0.files = count
        meta0.bytes = total
        return record('directory-import', meta0)
      } catch (e) {
        try {
          if (get(ENV.projects + '/' + name)) await removeTree(ENV.projects + '/' + name)
        } catch (x) {
          /* bỏ qua */
        }
        return failedRecord('directory-import', meta0, e.message || 'Nhập thư mục thất bại')
      }
    }),
    listProjectExportChildren: api(async function (o) {
      var dir = o.directory || [],
        base = norm(o.projectPath + (dir.length ? '/' + dir.join('/') : ''))
      var kids = children(base).map(function (n) {
        var name = nameOf(n.path),
          isDir = n.kind === 'directory',
          reason = exclusionOf(name, isDir)
        return {
          name: name,
          path: dir.concat([name]),
          kind: isDir ? 'directory' : 'file',
          size: isDir ? 0 : n.data.length,
          modified: Math.floor(n.mtime),
          recommendedIncluded: reason === null,
          exclusionReason: reason,
          selectable: true
        }
      })
      kids.sort(function (a, b) {
        var d = (a.kind !== 'directory') - (b.kind !== 'directory')
        return d || (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
      })
      return { children: kids }
    }),
    pickProjectExportDestination: api(async function (o) {
      var pp = norm(o.projectPath),
        sel = o.exportSelection,
        meta0 = { projectPath: pp, format: 'zip', exportSelection: sel }
      try {
        needNode(pp)
        var entries = [],
          bytes = 0,
          files = 0
        subtree(pp).forEach(function (n) {
          if (n.path === pp) return
          var parts = n.path.slice(pp.length + 1).split('/')
          if (!included(sel, parts, n.kind === 'directory')) return
          entries.push({ name: parts.join('/'), data: n.kind === 'file' ? n.data : null })
          if (n.kind === 'file') {
            bytes += n.data.length
            files++
          }
        })
        // bỏ mục nằm dưới thư mục bị loại (rules có thể loại thư mục cha)
        var dirsOut = new Set()
        subtree(pp).forEach(function (n) {
          if (
            n.kind === 'directory' &&
            n.path !== pp &&
            !included(sel, n.path.slice(pp.length + 1).split('/'), true)
          )
            dirsOut.add(n.path + '/')
        })
        entries = entries.filter(function (e) {
          var full = pp + '/' + e.name,
            out = false
          dirsOut.forEach(function (d) {
            if (full.indexOf(d) === 0) out = true
          })
          return !out
        })
        var zipBytes = await makeZip(entries)
        download(nameOf(pp) + '.zip', zipBytes)
        meta0.files = files
        meta0.bytes = bytes
        return record('export', meta0)
      } catch (e) {
        return failedRecord('export', meta0, e.message || 'Xuất zip thất bại')
      }
    }),

    /* --- sự kiện --- */
    addListener: function (event, cb) {
      ;(listeners[event] = listeners[event] || []).push(cb)
      var handle = {
        remove: function () {
          var a = listeners[event] || [],
            i = a.indexOf(cb)
          if (i >= 0) a.splice(i, 1)
          return Promise.resolve()
        }
      }
      var p = Promise.resolve(handle)
      p.remove = handle.remove
      return p
    },
    removeAllListeners: function () {
      listeners = {}
      return Promise.resolve()
    }
  }

  /* ---------- ExecutionPlugin (không chạy được lệnh trên web) ---------- */
  var NO_EXEC = 'Bản web không chạy được lệnh shell/terminal. Hãy dùng app Android (APK) nếu cần.'
  var ExecutionPlugin = {
    getEnvironment: api(async function () {
      return Object.assign({}, ENV)
    }),
    executableCheck: api(async function () {
      return { available: false }
    }),
    execute: api(async function () {
      throw err('UNSUPPORTED', NO_EXEC)
    }),
    jobStart: api(async function () {
      throw err('UNSUPPORTED', NO_EXEC)
    }),
    jobGet: api(async function () {
      throw err('UNSUPPORTED', NO_EXEC)
    }),
    jobCancel: api(async function () {
      return { success: true }
    }),
    jobList: api(async function () {
      return { jobs: [] }
    }),
    ptyCreate: api(async function () {
      throw err('UNSUPPORTED', NO_EXEC)
    }),
    ptyWrite: api(async function () {
      throw err('UNSUPPORTED', NO_EXEC)
    }),
    ptyResize: api(async function () {
      return { success: true }
    }),
    ptyKill: api(async function () {
      return { success: true }
    }),
    ptyKillAll: api(async function () {
      return { success: true }
    }),
    ptyList: api(async function () {
      return { sessions: [], ptys: [] }
    }),
    addListener: function (event, cb) {
      return ShellPlugin.addListener('exec:' + event, cb)
    },
    removeAllListeners: function () {
      return Promise.resolve()
    }
  }

  root.__ZyntaxWeb = {
    ShellPlugin: ShellPlugin,
    ExecutionPlugin: ExecutionPlugin,
    env: ENV,
    _internals: { makeZip: makeZip, readZip: readZip, nodes: nodes }
  }
})()
