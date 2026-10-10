import {
	aj as Rp,
	ak as Np,
	a as ko,
	al as Pp,
	ab as cl
} from "./index-B8iKdPjo.js";
const Cn = ["openrouter", "anthropic", "openai", "gemini", "kimi", "zai", "deepseek", "ollama"],
	xt = {
		openrouter: {
			id: "openrouter",
			name: "OpenRouter",
			shortName: "OR",
			description: "One key for models from many providers.",
			credentialLabel: "OpenRouter API key",
			credentialPlaceholder: "sk-or-v1-…",
			requiresApiKey: !0,
			defaultBaseUrl: "https://openrouter.ai/api/v1",
			configurableBaseUrl: !1,
			supportsManualModel: !0
		},
		anthropic: {
			id: "anthropic",
			name: "Anthropic",
			shortName: "AN",
			description: "Direct access to Claude models.",
			credentialLabel: "Anthropic API key",
			credentialPlaceholder: "sk-ant-…",
			requiresApiKey: !0,
			defaultBaseUrl: "https://api.anthropic.com/v1",
			configurableBaseUrl: !1,
			supportsManualModel: !0
		},
		openai: {
			id: "openai",
			name: "OpenAI",
			shortName: "OA",
			description: "Direct access to OpenAI models.",
			credentialLabel: "OpenAI API key",
			credentialPlaceholder: "sk-…",
			requiresApiKey: !0,
			defaultBaseUrl: "https://api.openai.com/v1",
			configurableBaseUrl: !1,
			supportsManualModel: !0
		},
		gemini: {
			id: "gemini",
			name: "Google Gemini",
			shortName: "GE",
			description: "Google Generative Language models.",
			credentialLabel: "Gemini API key",
			credentialPlaceholder: "AIza…",
			requiresApiKey: !0,
			defaultBaseUrl: "https://generativelanguage.googleapis.com/v1beta",
			configurableBaseUrl: !1,
			supportsManualModel: !0
		},
		kimi: {
			id: "kimi",
			name: "Kimi",
			shortName: "KI",
			description: "Moonshot AI models through its native endpoint.",
			credentialLabel: "Kimi API key",
			credentialPlaceholder: "sk-…",
			requiresApiKey: !0,
			defaultBaseUrl: "https://api.moonshot.ai/v1",
			configurableBaseUrl: !0,
			supportsManualModel: !0
		},
		zai: {
			id: "zai",
			name: "Z.ai",
			shortName: "Z",
			description: "GLM models through the Z.ai API.",
			credentialLabel: "Z.ai API key",
			credentialPlaceholder: "Enter API key",
			requiresApiKey: !0,
			defaultBaseUrl: "https://api.z.ai/api/paas/v4",
			configurableBaseUrl: !0,
			supportsManualModel: !0
		},
		deepseek: {
			id: "deepseek",
			name: "DeepSeek",
			shortName: "DS",
			description: "Direct access to DeepSeek models.",
			credentialLabel: "DeepSeek API key",
			credentialPlaceholder: "sk-…",
			requiresApiKey: !0,
			defaultBaseUrl: "https://api.deepseek.com",
			configurableBaseUrl: !0,
			supportsManualModel: !0
		},
		ollama: {
			id: "ollama",
			name: "Local (Ollama)",
			shortName: "OL",
			description: "Models installed on your device or local network.",
			requiresApiKey: !1,
			defaultBaseUrl: "http://localhost:11434",
			configurableBaseUrl: !0,
			supportsManualModel: !0
		}
	},
	Mp = Object.values(xt);
var dl = "vercel.ai.error",
	zp = Symbol.for(dl),
	gi, yi, Ie = class pl extends(yi = Error, gi = zp, yi) {
		constructor({
			name: t,
			message: n,
			cause: o
		}) {
			super(n), this[gi] = !0, this.name = t, this.cause = o
		}
		static isInstance(t) {
			return pl.hasMarker(t, dl)
		}
		static hasMarker(t, n) {
			const o = Symbol.for(n);
			return t != null && typeof t == "object" && o in t && typeof t[o] == "boolean" && t[o] === !0
		}
	},
	ml = "AI_APICallError",
	hl = `vercel.ai.error.${ml}`,
	Dp = Symbol.for(hl),
	vi, bi, He = class extends(bi = Ie, vi = Dp, bi) {
		constructor({
			message: t,
			url: n,
			requestBodyValues: o,
			statusCode: r,
			responseHeaders: i,
			responseBody: s,
			cause: l,
			isRetryable: d = r != null && (r === 408 || r === 409 || r === 429 || r >= 500),
			data: c
		}) {
			super({
				name: ml,
				message: t,
				cause: l
			}), this[vi] = !0, this.url = n, this.requestBodyValues = o, this.statusCode = r, this.responseHeaders = i, this.responseBody = s, this.isRetryable = d, this.data = c
		}
		static isInstance(t) {
			return Ie.hasMarker(t, hl)
		}
	},
	fl = "AI_EmptyResponseBodyError",
	_l = `vercel.ai.error.${fl}`,
	qp = Symbol.for(_l),
	wi, ki, Up = class extends(ki = Ie, wi = qp, ki) {
		constructor({
			message: t = "Empty response body"
		} = {}) {
			super({
				name: fl,
				message: t
			}), this[wi] = !0
		}
		static isInstance(t) {
			return Ie.hasMarker(t, _l)
		}
	};

function $r(e) {
	return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.toString() : JSON.stringify(e)
}
var gl = "AI_InvalidArgumentError",
	yl = `vercel.ai.error.${gl}`,
	jp = Symbol.for(yl),
	xi, Ii, xo = class extends(Ii = Ie, xi = jp, Ii) {
		constructor({
			message: t,
			cause: n,
			argument: o
		}) {
			super({
				name: gl,
				message: t,
				cause: n
			}), this[xi] = !0, this.argument = o
		}
		static isInstance(t) {
			return Ie.hasMarker(t, yl)
		}
	},
	vl = "AI_InvalidPromptError",
	bl = `vercel.ai.error.${vl}`,
	Lp = Symbol.for(bl),
	Ti, Si, wl = class extends(Si = Ie, Ti = Lp, Si) {
		constructor({
			prompt: t,
			message: n,
			cause: o
		}) {
			super({
				name: vl,
				message: `Invalid prompt: ${n}`,
				cause: o
			}), this[Ti] = !0, this.prompt = t
		}
		static isInstance(t) {
			return Ie.hasMarker(t, bl)
		}
	},
	kl = "AI_InvalidResponseDataError",
	xl = `vercel.ai.error.${kl}`,
	Zp = Symbol.for(xl),
	Ci, Oi, Hn = class extends(Oi = Ie, Ci = Zp, Oi) {
		constructor({
			data: t,
			message: n = `Invalid response data: ${JSON.stringify(t)}.`
		}) {
			super({
				name: kl,
				message: n
			}), this[Ci] = !0, this.data = t
		}
		static isInstance(t) {
			return Ie.hasMarker(t, xl)
		}
	},
	Il = "AI_JSONParseError",
	Tl = `vercel.ai.error.${Il}`,
	Fp = Symbol.for(Tl),
	Ai, $i, ao = class extends($i = Ie, Ai = Fp, $i) {
		constructor({
			text: t,
			cause: n
		}) {
			super({
				name: Il,
				message: `JSON parsing failed: Text: ${t}.
Error message: ${$r(n)}`,
				cause: n
			}), this[Ai] = !0, this.text = t
		}
		static isInstance(t) {
			return Ie.hasMarker(t, Tl)
		}
	},
	Sl = "AI_LoadAPIKeyError",
	Cl = `vercel.ai.error.${Sl}`,
	Bp = Symbol.for(Cl),
	Ei, Ri, Gn = class extends(Ri = Ie, Ei = Bp, Ri) {
		constructor({
			message: t
		}) {
			super({
				name: Sl,
				message: t
			}), this[Ei] = !0
		}
		static isInstance(t) {
			return Ie.hasMarker(t, Cl)
		}
	},
	Ol = "AI_NoSuchModelError",
	Al = `vercel.ai.error.${Ol}`,
	Vp = Symbol.for(Al),
	Ni, Pi, Mi = class extends(Pi = Ie, Ni = Vp, Pi) {
		constructor({
			errorName: e = Ol,
			modelId: t,
			modelType: n,
			message: o = `No such ${n}: ${t}`
		}) {
			super({
				name: e,
				message: o
			}), this[Ni] = !0, this.modelId = t, this.modelType = n
		}
		static isInstance(e) {
			return Ie.hasMarker(e, Al)
		}
	},
	$l = "AI_NoSuchProviderReferenceError",
	El = `vercel.ai.error.${$l}`,
	Hp = Symbol.for(El),
	zi, Di, Gp = class extends(Di = Ie, zi = Hp, Di) {
		constructor({
			provider: e,
			reference: t,
			message: n = `No provider reference found for provider '${e}'. Available providers: ${Object.keys(t).join(", ")}`
		}) {
			super({
				name: $l,
				message: n
			}), this[zi] = !0, this.provider = e, this.reference = t
		}
		static isInstance(e) {
			return Ie.hasMarker(e, El)
		}
	},
	Rl = "AI_TooManyEmbeddingValuesForCallError",
	Nl = `vercel.ai.error.${Rl}`,
	Jp = Symbol.for(Nl),
	qi, Ui, Er = class extends(Ui = Ie, qi = Jp, Ui) {
		constructor(e) {
			super({
				name: Rl,
				message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
			}), this[qi] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values
		}
		static isInstance(e) {
			return Ie.hasMarker(e, Nl)
		}
	},
	Pl = "AI_TypeValidationError",
	Ml = `vercel.ai.error.${Pl}`,
	Wp = Symbol.for(Ml),
	ji, Li, On = class ir extends(Li = Ie, ji = Wp, Li) {
		constructor({
			value: t,
			cause: n,
			context: o
		}) {
			let r = "Type validation failed";
			if (o != null && o.field && (r += ` for ${o.field}`), o != null && o.entityName || o != null && o.entityId) {
				r += " (";
				const i = [];
				o.entityName && i.push(o.entityName), o.entityId && i.push(`id: "${o.entityId}"`), r += i.join(", "), r += ")"
			}
			super({
				name: Pl,
				message: `${r}: Value: ${JSON.stringify(t)}.
Error message: ${$r(n)}`,
				cause: n
			}), this[ji] = !0, this.value = t, this.context = o
		}
		static isInstance(t) {
			return Ie.hasMarker(t, Ml)
		}
		static wrap({
			value: t,
			cause: n,
			context: o
		}) {
			var r, i, s;
			return ir.isInstance(n) && n.value === t && ((r = n.context) == null ? void 0 : r.field) === (o == null ? void 0 : o.field) && ((i = n.context) == null ? void 0 : i.entityName) === (o == null ? void 0 : o.entityName) && ((s = n.context) == null ? void 0 : s.entityId) === (o == null ? void 0 : o.entityId) ? n : new ir({
				value: t,
				cause: n,
				context: o
			})
		}
	},
	zl = "AI_UnsupportedFunctionalityError",
	Dl = `vercel.ai.error.${zl}`,
	Kp = Symbol.for(Dl),
	Zi, Fi, Oe = class extends(Fi = Ie, Zi = Kp, Fi) {
		constructor({
			functionality: t,
			message: n = `'${t}' functionality not supported.`
		}) {
			super({
				name: zl,
				message: n
			}), this[Zi] = !0, this.functionality = t
		}
		static isInstance(t) {
			return Ie.hasMarker(t, Dl)
		}
	},
	Bi;

function K(e, t, n) {
	function o(l, d) {
		if (l._zod || Object.defineProperty(l, "_zod", {
				value: {
					def: d,
					constr: s,
					traits: new Set
				},
				enumerable: !1
			}), l._zod.traits.has(e)) return;
		l._zod.traits.add(e), t(l, d);
		const c = s.prototype,
			p = Object.keys(c);
		for (let m = 0; m < p.length; m++) {
			const h = p[m];
			h in l || (l[h] = c[h].bind(l))
		}
	}
	const r = (n == null ? void 0 : n.Parent) ?? Object;
	class i extends r {}
	Object.defineProperty(i, "name", {
		value: e
	});

	function s(l) {
		var d;
		const c = n != null && n.Parent ? new i : this;
		o(c, l), (d = c._zod).deferred ?? (d.deferred = []);
		for (const p of c._zod.deferred) p();
		return c
	}
	return Object.defineProperty(s, "init", {
		value: o
	}), Object.defineProperty(s, Symbol.hasInstance, {
		value: l => {
			var d, c;
			return n != null && n.Parent && l instanceof n.Parent ? !0 : (c = (d = l == null ? void 0 : l._zod) == null ? void 0 : d.traits) == null ? void 0 : c.has(e)
		}
	}), Object.defineProperty(s, "name", {
		value: e
	}), s
}
class dn extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
	}
}
class ql extends Error {
	constructor(t) {
		super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError"
	}
}(Bi = globalThis).__zod_globalConfig ?? (Bi.__zod_globalConfig = {});
const Rr = globalThis.__zod_globalConfig;

function Nt(e) {
	return Rr
}

function Ul(e) {
	const t = Object.values(e).filter(o => typeof o == "number");
	return Object.entries(e).filter(([o, r]) => t.indexOf(+o) === -1).map(([o, r]) => r)
}

function ar(e, t) {
	return typeof t == "bigint" ? t.toString() : t
}

function Io(e) {
	return {
		get value() {
			{
				const t = e();
				return Object.defineProperty(this, "value", {
					value: t
				}), t
			}
		}
	}
}

function Nr(e) {
	return e == null
}

function Pr(e) {
	const t = e.startsWith("^") ? 1 : 0,
		n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n)
}

function Yp(e, t) {
	const n = e / t,
		o = Math.round(n),
		r = Number.EPSILON * Math.max(Math.abs(n), 1);
	return Math.abs(n - o) < r ? 0 : n - o
}
const Vi = Symbol("evaluating");

function Ae(e, t, n) {
	let o;
	Object.defineProperty(e, t, {
		get() {
			if (o !== Vi) return o === void 0 && (o = Vi, o = n()), o
		},
		set(r) {
			Object.defineProperty(e, t, {
				value: r
			})
		},
		configurable: !0
	})
}

function an(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	})
}

function Ht(...e) {
	const t = {};
	for (const n of e) {
		const o = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, o)
	}
	return Object.defineProperties({}, t)
}

function Hi(e) {
	return JSON.stringify(e)
}

function Xp(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "")
}
const jl = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};

function An(e) {
	return typeof e == "object" && e !== null && !Array.isArray(e)
}
const Qp = Io(() => {
	var e;
	if (Rr.jitless || typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) != null && e.includes("Cloudflare"))) return !1;
	try {
		const t = Function;
		return new t(""), !0
	} catch {
		return !1
	}
});

function mn(e) {
	if (An(e) === !1) return !1;
	const t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	const n = t.prototype;
	return !(An(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1)
}

function Ll(e) {
	return mn(e) ? {
		...e
	} : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e
}
const em = new Set(["string", "number", "symbol"]);

function hn(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function Gt(e, t, n) {
	const o = new e._zod.constr(t ?? e._zod.def);
	return (!t || n != null && n.parent) && (o._zod.parent = e), o
}

function he(e) {
	const t = e;
	if (!t) return {};
	if (typeof t == "string") return {
		error: () => t
	};
	if ((t == null ? void 0 : t.message) !== void 0) {
		if ((t == null ? void 0 : t.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
		t.error = t.message
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t
}

function tm(e) {
	return Object.keys(e).filter(t => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional")
}
const nm = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};

function om(e, t) {
	const n = e._zod.def,
		o = n.checks;
	if (o && o.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	const i = Ht(e._zod.def, {
		get shape() {
			const s = {};
			for (const l in t) {
				if (!(l in n.shape)) throw new Error(`Unrecognized key: "${l}"`);
				t[l] && (s[l] = n.shape[l])
			}
			return an(this, "shape", s), s
		},
		checks: []
	});
	return Gt(e, i)
}

function rm(e, t) {
	const n = e._zod.def,
		o = n.checks;
	if (o && o.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	const i = Ht(e._zod.def, {
		get shape() {
			const s = {
				...e._zod.def.shape
			};
			for (const l in t) {
				if (!(l in n.shape)) throw new Error(`Unrecognized key: "${l}"`);
				t[l] && delete s[l]
			}
			return an(this, "shape", s), s
		},
		checks: []
	});
	return Gt(e, i)
}

function im(e, t) {
	if (!mn(t)) throw new Error("Invalid input to extend: expected a plain object");
	const n = e._zod.def.checks;
	if (n && n.length > 0) {
		const i = e._zod.def.shape;
		for (const s in t)
			if (Object.getOwnPropertyDescriptor(i, s) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")
	}
	const r = Ht(e._zod.def, {
		get shape() {
			const i = {
				...e._zod.def.shape,
				...t
			};
			return an(this, "shape", i), i
		}
	});
	return Gt(e, r)
}

function am(e, t) {
	if (!mn(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
	const n = Ht(e._zod.def, {
		get shape() {
			const o = {
				...e._zod.def.shape,
				...t
			};
			return an(this, "shape", o), o
		}
	});
	return Gt(e, n)
}

function sm(e, t) {
	var o;
	if ((o = e._zod.def.checks) != null && o.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	const n = Ht(e._zod.def, {
		get shape() {
			const r = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return an(this, "shape", r), r
		},
		get catchall() {
			return t._zod.def.catchall
		},
		checks: t._zod.def.checks ?? []
	});
	return Gt(e, n)
}

function lm(e, t, n) {
	const r = t._zod.def.checks;
	if (r && r.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
	const s = Ht(t._zod.def, {
		get shape() {
			const l = t._zod.def.shape,
				d = {
					...l
				};
			if (n)
				for (const c in n) {
					if (!(c in l)) throw new Error(`Unrecognized key: "${c}"`);
					n[c] && (d[c] = e ? new e({
						type: "optional",
						innerType: l[c]
					}) : l[c])
				} else
					for (const c in l) d[c] = e ? new e({
						type: "optional",
						innerType: l[c]
					}) : l[c];
			return an(this, "shape", d), d
		},
		checks: []
	});
	return Gt(t, s)
}

function um(e, t, n) {
	const o = Ht(t._zod.def, {
		get shape() {
			const r = t._zod.def.shape,
				i = {
					...r
				};
			if (n)
				for (const s in n) {
					if (!(s in i)) throw new Error(`Unrecognized key: "${s}"`);
					n[s] && (i[s] = new e({
						type: "nonoptional",
						innerType: r[s]
					}))
				} else
					for (const s in r) i[s] = new e({
						type: "nonoptional",
						innerType: r[s]
					});
			return an(this, "shape", i), i
		}
	});
	return Gt(t, o)
}

function cn(e, t = 0) {
	var n;
	if (e.aborted === !0) return !0;
	for (let o = t; o < e.issues.length; o++)
		if (((n = e.issues[o]) == null ? void 0 : n.continue) !== !0) return !0;
	return !1
}

function cm(e, t = 0) {
	var n;
	if (e.aborted === !0) return !0;
	for (let o = t; o < e.issues.length; o++)
		if (((n = e.issues[o]) == null ? void 0 : n.continue) === !1) return !0;
	return !1
}

function jt(e, t) {
	return t.map(n => {
		var o;
		return (o = n).path ?? (o.path = []), n.path.unshift(e), n
	})
}

function Jn(e) {
	return typeof e == "string" ? e : e == null ? void 0 : e.message
}

function Pt(e, t, n) {
	var d, c, p, m, h, g;
	const o = e.message ? e.message : Jn((p = (c = (d = e.inst) == null ? void 0 : d._zod.def) == null ? void 0 : c.error) == null ? void 0 : p.call(c, e)) ?? Jn((m = t == null ? void 0 : t.error) == null ? void 0 : m.call(t, e)) ?? Jn((h = n.customError) == null ? void 0 : h.call(n, e)) ?? Jn((g = n.localeError) == null ? void 0 : g.call(n, e)) ?? "Invalid input",
		{
			inst: r,
			continue: i,
			input: s,
			...l
		} = e;
	return l.path ?? (l.path = []), l.message = o, t != null && t.reportInput && (l.input = s), l
}

function Mr(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown"
}

function $n(...e) {
	const [t, n, o] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: o
	} : {
		...t
	}
}
const Zl = (e, t) => {
		e.name = "$ZodError", Object.defineProperty(e, "_zod", {
			value: e._zod,
			enumerable: !1
		}), Object.defineProperty(e, "issues", {
			value: t,
			enumerable: !1
		}), e.message = JSON.stringify(t, ar, 2), Object.defineProperty(e, "toString", {
			value: () => e.message,
			enumerable: !1
		})
	},
	Fl = K("$ZodError", Zl),
	Bl = K("$ZodError", Zl, {
		Parent: Error
	});

function dm(e, t = n => n.message) {
	const n = {},
		o = [];
	for (const r of e.issues) r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [], n[r.path[0]].push(t(r))) : o.push(t(r));
	return {
		formErrors: o,
		fieldErrors: n
	}
}

function pm(e, t = n => n.message) {
	const n = {
			_errors: []
		},
		o = (r, i = []) => {
			for (const s of r.issues)
				if (s.code === "invalid_union" && s.errors.length) s.errors.map(l => o({
					issues: l
				}, [...i, ...s.path]));
				else if (s.code === "invalid_key") o({
				issues: s.issues
			}, [...i, ...s.path]);
			else if (s.code === "invalid_element") o({
				issues: s.issues
			}, [...i, ...s.path]);
			else {
				const l = [...i, ...s.path];
				if (l.length === 0) n._errors.push(t(s));
				else {
					let d = n,
						c = 0;
					for (; c < l.length;) {
						const p = l[c];
						c === l.length - 1 ? (d[p] = d[p] || {
							_errors: []
						}, d[p]._errors.push(t(s))) : d[p] = d[p] || {
							_errors: []
						}, d = d[p], c++
					}
				}
			}
		};
	return o(e), n
}
const zr = e => (t, n, o, r) => {
		const i = o ? {
				...o,
				async: !1
			} : {
				async: !1
			},
			s = t._zod.run({
				value: n,
				issues: []
			}, i);
		if (s instanceof Promise) throw new dn;
		if (s.issues.length) {
			const l = new((r == null ? void 0 : r.Err) ?? e)(s.issues.map(d => Pt(d, i, Nt())));
			throw jl(l, r == null ? void 0 : r.callee), l
		}
		return s.value
	},
	Dr = e => async (t, n, o, r) => {
		const i = o ? {
			...o,
			async: !0
		} : {
			async: !0
		};
		let s = t._zod.run({
			value: n,
			issues: []
		}, i);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			const l = new((r == null ? void 0 : r.Err) ?? e)(s.issues.map(d => Pt(d, i, Nt())));
			throw jl(l, r == null ? void 0 : r.callee), l
		}
		return s.value
	}, To = e => (t, n, o) => {
		const r = o ? {
				...o,
				async: !1
			} : {
				async: !1
			},
			i = t._zod.run({
				value: n,
				issues: []
			}, r);
		if (i instanceof Promise) throw new dn;
		return i.issues.length ? {
			success: !1,
			error: new(e ?? Fl)(i.issues.map(s => Pt(s, r, Nt())))
		} : {
			success: !0,
			data: i.value
		}
	}, mm = To(Bl), So = e => async (t, n, o) => {
		const r = o ? {
			...o,
			async: !0
		} : {
			async: !0
		};
		let i = t._zod.run({
			value: n,
			issues: []
		}, r);
		return i instanceof Promise && (i = await i), i.issues.length ? {
			success: !1,
			error: new e(i.issues.map(s => Pt(s, r, Nt())))
		} : {
			success: !0,
			data: i.value
		}
	}, hm = So(Bl), fm = e => (t, n, o) => {
		const r = o ? {
			...o,
			direction: "backward"
		} : {
			direction: "backward"
		};
		return zr(e)(t, n, r)
	}, _m = e => (t, n, o) => zr(e)(t, n, o), gm = e => async (t, n, o) => {
		const r = o ? {
			...o,
			direction: "backward"
		} : {
			direction: "backward"
		};
		return Dr(e)(t, n, r)
	}, ym = e => async (t, n, o) => Dr(e)(t, n, o), vm = e => (t, n, o) => {
		const r = o ? {
			...o,
			direction: "backward"
		} : {
			direction: "backward"
		};
		return To(e)(t, n, r)
	}, bm = e => (t, n, o) => To(e)(t, n, o), wm = e => async (t, n, o) => {
		const r = o ? {
			...o,
			direction: "backward"
		} : {
			direction: "backward"
		};
		return So(e)(t, n, r)
	}, km = e => async (t, n, o) => So(e)(t, n, o), xm = /^[cC][0-9a-z]{6,}$/, Im = /^[0-9a-z]+$/, Tm = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Sm = /^[0-9a-vA-V]{20}$/, Cm = /^[A-Za-z0-9]{27}$/, Om = /^[a-zA-Z0-9_-]{21}$/, Am = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, $m = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Gi = e => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Em = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Rm = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";

function Nm() {
	return new RegExp(Rm, "u")
}
const Pm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	Mm = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
	zm = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
	Dm = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	qm = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
	Vl = /^[A-Za-z0-9_-]*$/,
	Um = /^https?$/,
	jm = /^\+[1-9]\d{6,14}$/,
	Hl = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
	Lm = new RegExp(`^${Hl}$`);

function Gl(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`
}

function Zm(e) {
	return new RegExp(`^${Gl(e)}$`)
}

function Fm(e) {
	const t = Gl({
			precision: e.precision
		}),
		n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	const o = `${t}(?:${n.join("|")})`;
	return new RegExp(`^${Hl}T(?:${o})$`)
}
const Bm = e => {
		const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
		return new RegExp(`^${t}$`)
	},
	Vm = /^-?\d+$/,
	Jl = /^-?\d+(?:\.\d+)?$/,
	Hm = /^(?:true|false)$/i,
	Gm = /^null$/i,
	Jm = /^[^A-Z]*$/,
	Wm = /^[^a-z]*$/,
	st = K("$ZodCheck", (e, t) => {
		var n;
		e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = [])
	}),
	Wl = {
		number: "number",
		bigint: "bigint",
		object: "date"
	},
	Kl = K("$ZodCheckLessThan", (e, t) => {
		st.init(e, t);
		const n = Wl[typeof t.value];
		e._zod.onattach.push(o => {
			const r = o._zod.bag,
				i = (t.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
			t.value < i && (t.inclusive ? r.maximum = t.value : r.exclusiveMaximum = t.value)
		}), e._zod.check = o => {
			(t.inclusive ? o.value <= t.value : o.value < t.value) || o.issues.push({
				origin: n,
				code: "too_big",
				maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: o.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	Yl = K("$ZodCheckGreaterThan", (e, t) => {
		st.init(e, t);
		const n = Wl[typeof t.value];
		e._zod.onattach.push(o => {
			const r = o._zod.bag,
				i = (t.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
			t.value > i && (t.inclusive ? r.minimum = t.value : r.exclusiveMinimum = t.value)
		}), e._zod.check = o => {
			(t.inclusive ? o.value >= t.value : o.value > t.value) || o.issues.push({
				origin: n,
				code: "too_small",
				minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: o.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	Km = K("$ZodCheckMultipleOf", (e, t) => {
		st.init(e, t), e._zod.onattach.push(n => {
			var o;
			(o = n._zod.bag).multipleOf ?? (o.multipleOf = t.value)
		}), e._zod.check = n => {
			if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
			(typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : Yp(n.value, t.value) === 0) || n.issues.push({
				origin: typeof n.value,
				code: "not_multiple_of",
				divisor: t.value,
				input: n.value,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	Ym = K("$ZodCheckNumberFormat", (e, t) => {
		var s;
		st.init(e, t), t.format = t.format || "float64";
		const n = (s = t.format) == null ? void 0 : s.includes("int"),
			o = n ? "int" : "number",
			[r, i] = nm[t.format];
		e._zod.onattach.push(l => {
			const d = l._zod.bag;
			d.format = t.format, d.minimum = r, d.maximum = i, n && (d.pattern = Vm)
		}), e._zod.check = l => {
			const d = l.value;
			if (n) {
				if (!Number.isInteger(d)) {
					l.issues.push({
						expected: o,
						format: t.format,
						code: "invalid_type",
						continue: !1,
						input: d,
						inst: e
					});
					return
				}
				if (!Number.isSafeInteger(d)) {
					d > 0 ? l.issues.push({
						input: d,
						code: "too_big",
						maximum: Number.MAX_SAFE_INTEGER,
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: o,
						inclusive: !0,
						continue: !t.abort
					}) : l.issues.push({
						input: d,
						code: "too_small",
						minimum: Number.MIN_SAFE_INTEGER,
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: o,
						inclusive: !0,
						continue: !t.abort
					});
					return
				}
			}
			d < r && l.issues.push({
				origin: "number",
				input: d,
				code: "too_small",
				minimum: r,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			}), d > i && l.issues.push({
				origin: "number",
				input: d,
				code: "too_big",
				maximum: i,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	Xm = K("$ZodCheckMaxLength", (e, t) => {
		var n;
		st.init(e, t), (n = e._zod.def).when ?? (n.when = o => {
			const r = o.value;
			return !Nr(r) && r.length !== void 0
		}), e._zod.onattach.push(o => {
			const r = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
			t.maximum < r && (o._zod.bag.maximum = t.maximum)
		}), e._zod.check = o => {
			const r = o.value;
			if (r.length <= t.maximum) return;
			const s = Mr(r);
			o.issues.push({
				origin: s,
				code: "too_big",
				maximum: t.maximum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	Qm = K("$ZodCheckMinLength", (e, t) => {
		var n;
		st.init(e, t), (n = e._zod.def).when ?? (n.when = o => {
			const r = o.value;
			return !Nr(r) && r.length !== void 0
		}), e._zod.onattach.push(o => {
			const r = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
			t.minimum > r && (o._zod.bag.minimum = t.minimum)
		}), e._zod.check = o => {
			const r = o.value;
			if (r.length >= t.minimum) return;
			const s = Mr(r);
			o.issues.push({
				origin: s,
				code: "too_small",
				minimum: t.minimum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	eh = K("$ZodCheckLengthEquals", (e, t) => {
		var n;
		st.init(e, t), (n = e._zod.def).when ?? (n.when = o => {
			const r = o.value;
			return !Nr(r) && r.length !== void 0
		}), e._zod.onattach.push(o => {
			const r = o._zod.bag;
			r.minimum = t.length, r.maximum = t.length, r.length = t.length
		}), e._zod.check = o => {
			const r = o.value,
				i = r.length;
			if (i === t.length) return;
			const s = Mr(r),
				l = i > t.length;
			o.issues.push({
				origin: s,
				...l ? {
					code: "too_big",
					maximum: t.length
				} : {
					code: "too_small",
					minimum: t.length
				},
				inclusive: !0,
				exact: !0,
				input: o.value,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	Co = K("$ZodCheckStringFormat", (e, t) => {
		var n, o;
		st.init(e, t), e._zod.onattach.push(r => {
			const i = r._zod.bag;
			i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = new Set), i.patterns.add(t.pattern))
		}), t.pattern ? (n = e._zod).check ?? (n.check = r => {
			t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
				origin: "string",
				code: "invalid_format",
				format: t.format,
				input: r.value,
				...t.pattern ? {
					pattern: t.pattern.toString()
				} : {},
				inst: e,
				continue: !t.abort
			})
		}) : (o = e._zod).check ?? (o.check = () => {})
	}),
	th = K("$ZodCheckRegex", (e, t) => {
		Co.init(e, t), e._zod.check = n => {
			t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "regex",
				input: n.value,
				pattern: t.pattern.toString(),
				inst: e,
				continue: !t.abort
			})
		}
	}),
	nh = K("$ZodCheckLowerCase", (e, t) => {
		t.pattern ?? (t.pattern = Jm), Co.init(e, t)
	}),
	oh = K("$ZodCheckUpperCase", (e, t) => {
		t.pattern ?? (t.pattern = Wm), Co.init(e, t)
	}),
	rh = K("$ZodCheckIncludes", (e, t) => {
		st.init(e, t);
		const n = hn(t.includes),
			o = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
		t.pattern = o, e._zod.onattach.push(r => {
			const i = r._zod.bag;
			i.patterns ?? (i.patterns = new Set), i.patterns.add(o)
		}), e._zod.check = r => {
			r.value.includes(t.includes, t.position) || r.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "includes",
				includes: t.includes,
				input: r.value,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	ih = K("$ZodCheckStartsWith", (e, t) => {
		st.init(e, t);
		const n = new RegExp(`^${hn(t.prefix)}.*`);
		t.pattern ?? (t.pattern = n), e._zod.onattach.push(o => {
			const r = o._zod.bag;
			r.patterns ?? (r.patterns = new Set), r.patterns.add(n)
		}), e._zod.check = o => {
			o.value.startsWith(t.prefix) || o.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "starts_with",
				prefix: t.prefix,
				input: o.value,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	ah = K("$ZodCheckEndsWith", (e, t) => {
		st.init(e, t);
		const n = new RegExp(`.*${hn(t.suffix)}$`);
		t.pattern ?? (t.pattern = n), e._zod.onattach.push(o => {
			const r = o._zod.bag;
			r.patterns ?? (r.patterns = new Set), r.patterns.add(n)
		}), e._zod.check = o => {
			o.value.endsWith(t.suffix) || o.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "ends_with",
				suffix: t.suffix,
				input: o.value,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	sh = K("$ZodCheckOverwrite", (e, t) => {
		st.init(e, t), e._zod.check = n => {
			n.value = t.tx(n.value)
		}
	});
class lh {
	constructor(t = []) {
		this.content = [], this.indent = 0, this && (this.args = t)
	}
	indented(t) {
		this.indent += 1, t(this), this.indent -= 1
	}
	write(t) {
		if (typeof t == "function") {
			t(this, {
				execution: "sync"
			}), t(this, {
				execution: "async"
			});
			return
		}
		const o = t.split(`
`).filter(s => s),
			r = Math.min(...o.map(s => s.length - s.trimStart().length)),
			i = o.map(s => s.slice(r)).map(s => " ".repeat(this.indent * 2) + s);
		for (const s of i) this.content.push(s)
	}
	compile() {
		const t = Function,
			n = this == null ? void 0 : this.args,
			r = [...((this == null ? void 0 : this.content) ?? [""]).map(i => `  ${i}`)];
		return new t(...n, r.join(`
`))
	}
}
const uh = {
		major: 4,
		minor: 4,
		patch: 3
	},
	qe = K("$ZodType", (e, t) => {
		var r;
		var n;
		e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = uh;
		const o = [...e._zod.def.checks ?? []];
		e._zod.traits.has("$ZodCheck") && o.unshift(e);
		for (const i of o)
			for (const s of i._zod.onattach) s(e);
		if (o.length === 0)(n = e._zod).deferred ?? (n.deferred = []), (r = e._zod.deferred) == null || r.push(() => {
			e._zod.run = e._zod.parse
		});
		else {
			const i = (l, d, c) => {
					let p = cn(l),
						m;
					for (const h of d) {
						if (h._zod.def.when) {
							if (cm(l) || !h._zod.def.when(l)) continue
						} else if (p) continue;
						const g = l.issues.length,
							_ = h._zod.check(l);
						if (_ instanceof Promise && (c == null ? void 0 : c.async) === !1) throw new dn;
						if (m || _ instanceof Promise) m = (m ?? Promise.resolve()).then(async () => {
							await _, l.issues.length !== g && (p || (p = cn(l, g)))
						});
						else {
							if (l.issues.length === g) continue;
							p || (p = cn(l, g))
						}
					}
					return m ? m.then(() => l) : l
				},
				s = (l, d, c) => {
					if (cn(l)) return l.aborted = !0, l;
					const p = i(d, o, c);
					if (p instanceof Promise) {
						if (c.async === !1) throw new dn;
						return p.then(m => e._zod.parse(m, c))
					}
					return e._zod.parse(p, c)
				};
			e._zod.run = (l, d) => {
				if (d.skipChecks) return e._zod.parse(l, d);
				if (d.direction === "backward") {
					const p = e._zod.parse({
						value: l.value,
						issues: []
					}, {
						...d,
						skipChecks: !0
					});
					return p instanceof Promise ? p.then(m => s(m, l, d)) : s(p, l, d)
				}
				const c = e._zod.parse(l, d);
				if (c instanceof Promise) {
					if (d.async === !1) throw new dn;
					return c.then(p => i(p, o, d))
				}
				return i(c, o, d)
			}
		}
		Ae(e, "~standard", () => ({
			validate: i => {
				var s;
				try {
					const l = mm(e, i);
					return l.success ? {
						value: l.data
					} : {
						issues: (s = l.error) == null ? void 0 : s.issues
					}
				} catch {
					return hm(e, i).then(d => {
						var c;
						return d.success ? {
							value: d.data
						} : {
							issues: (c = d.error) == null ? void 0 : c.issues
						}
					})
				}
			},
			vendor: "zod",
			version: 1
		}))
	}),
	qr = K("$ZodString", (e, t) => {
		var n;
		qe.init(e, t), e._zod.pattern = [...((n = e == null ? void 0 : e._zod.bag) == null ? void 0 : n.patterns) ?? []].pop() ?? Bm(e._zod.bag), e._zod.parse = (o, r) => {
			if (t.coerce) try {
				o.value = String(o.value)
			} catch {}
			return typeof o.value == "string" || o.issues.push({
				expected: "string",
				code: "invalid_type",
				input: o.value,
				inst: e
			}), o
		}
	}),
	Ze = K("$ZodStringFormat", (e, t) => {
		Co.init(e, t), qr.init(e, t)
	}),
	ch = K("$ZodGUID", (e, t) => {
		t.pattern ?? (t.pattern = $m), Ze.init(e, t)
	}),
	dh = K("$ZodUUID", (e, t) => {
		if (t.version) {
			const o = {
				v1: 1,
				v2: 2,
				v3: 3,
				v4: 4,
				v5: 5,
				v6: 6,
				v7: 7,
				v8: 8
			} [t.version];
			if (o === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
			t.pattern ?? (t.pattern = Gi(o))
		} else t.pattern ?? (t.pattern = Gi());
		Ze.init(e, t)
	}),
	ph = K("$ZodEmail", (e, t) => {
		t.pattern ?? (t.pattern = Em), Ze.init(e, t)
	}),
	mh = K("$ZodURL", (e, t) => {
		Ze.init(e, t), e._zod.check = n => {
			var o;
			try {
				const r = n.value.trim();
				if (!t.normalize && ((o = t.protocol) == null ? void 0 : o.source) === Um.source && !/^https?:\/\//i.test(r)) {
					n.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid URL format",
						input: n.value,
						inst: e,
						continue: !t.abort
					});
					return
				}
				const i = new URL(r);
				t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(i.hostname) || n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: t.hostname.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				})), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: t.protocol.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				})), t.normalize ? n.value = i.href : n.value = r;
				return
			} catch {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				})
			}
		}
	}),
	hh = K("$ZodEmoji", (e, t) => {
		t.pattern ?? (t.pattern = Nm()), Ze.init(e, t)
	}),
	fh = K("$ZodNanoID", (e, t) => {
		t.pattern ?? (t.pattern = Om), Ze.init(e, t)
	}),
	_h = K("$ZodCUID", (e, t) => {
		t.pattern ?? (t.pattern = xm), Ze.init(e, t)
	}),
	gh = K("$ZodCUID2", (e, t) => {
		t.pattern ?? (t.pattern = Im), Ze.init(e, t)
	}),
	yh = K("$ZodULID", (e, t) => {
		t.pattern ?? (t.pattern = Tm), Ze.init(e, t)
	}),
	vh = K("$ZodXID", (e, t) => {
		t.pattern ?? (t.pattern = Sm), Ze.init(e, t)
	}),
	bh = K("$ZodKSUID", (e, t) => {
		t.pattern ?? (t.pattern = Cm), Ze.init(e, t)
	}),
	wh = K("$ZodISODateTime", (e, t) => {
		t.pattern ?? (t.pattern = Fm(t)), Ze.init(e, t)
	}),
	kh = K("$ZodISODate", (e, t) => {
		t.pattern ?? (t.pattern = Lm), Ze.init(e, t)
	}),
	xh = K("$ZodISOTime", (e, t) => {
		t.pattern ?? (t.pattern = Zm(t)), Ze.init(e, t)
	}),
	Ih = K("$ZodISODuration", (e, t) => {
		t.pattern ?? (t.pattern = Am), Ze.init(e, t)
	}),
	Th = K("$ZodIPv4", (e, t) => {
		t.pattern ?? (t.pattern = Pm), Ze.init(e, t), e._zod.bag.format = "ipv4"
	}),
	Sh = K("$ZodIPv6", (e, t) => {
		t.pattern ?? (t.pattern = Mm), Ze.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = n => {
			try {
				new URL(`http://[${n.value}]`)
			} catch {
				n.issues.push({
					code: "invalid_format",
					format: "ipv6",
					input: n.value,
					inst: e,
					continue: !t.abort
				})
			}
		}
	}),
	Ch = K("$ZodCIDRv4", (e, t) => {
		t.pattern ?? (t.pattern = zm), Ze.init(e, t)
	}),
	Oh = K("$ZodCIDRv6", (e, t) => {
		t.pattern ?? (t.pattern = Dm), Ze.init(e, t), e._zod.check = n => {
			const o = n.value.split("/");
			try {
				if (o.length !== 2) throw new Error;
				const [r, i] = o;
				if (!i) throw new Error;
				const s = Number(i);
				if (`${s}` !== i) throw new Error;
				if (s < 0 || s > 128) throw new Error;
				new URL(`http://[${r}]`)
			} catch {
				n.issues.push({
					code: "invalid_format",
					format: "cidrv6",
					input: n.value,
					inst: e,
					continue: !t.abort
				})
			}
		}
	});

function Xl(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 !== 0) return !1;
	try {
		return atob(e), !0
	} catch {
		return !1
	}
}
const Ah = K("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = qm), Ze.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = n => {
		Xl(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		})
	}
});

function $h(e) {
	if (!Vl.test(e)) return !1;
	const t = e.replace(/[-_]/g, o => o === "-" ? "+" : "/"),
		n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
	return Xl(n)
}
const Eh = K("$ZodBase64URL", (e, t) => {
		t.pattern ?? (t.pattern = Vl), Ze.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = n => {
			$h(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64url",
				input: n.value,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	Rh = K("$ZodE164", (e, t) => {
		t.pattern ?? (t.pattern = jm), Ze.init(e, t)
	});

function Nh(e, t = null) {
	try {
		const n = e.split(".");
		if (n.length !== 3) return !1;
		const [o] = n;
		if (!o) return !1;
		const r = JSON.parse(atob(o));
		return !("typ" in r && (r == null ? void 0 : r.typ) !== "JWT" || !r.alg || t && (!("alg" in r) || r.alg !== t))
	} catch {
		return !1
	}
}
const Ph = K("$ZodJWT", (e, t) => {
		Ze.init(e, t), e._zod.check = n => {
			Nh(n.value, t.alg) || n.issues.push({
				code: "invalid_format",
				format: "jwt",
				input: n.value,
				inst: e,
				continue: !t.abort
			})
		}
	}),
	Ql = K("$ZodNumber", (e, t) => {
		qe.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Jl, e._zod.parse = (n, o) => {
			if (t.coerce) try {
				n.value = Number(n.value)
			} catch {}
			const r = n.value;
			if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r)) return n;
			const i = typeof r == "number" ? Number.isNaN(r) ? "NaN" : Number.isFinite(r) ? void 0 : "Infinity" : void 0;
			return n.issues.push({
				expected: "number",
				code: "invalid_type",
				input: r,
				inst: e,
				...i ? {
					received: i
				} : {}
			}), n
		}
	}),
	Mh = K("$ZodNumberFormat", (e, t) => {
		Ym.init(e, t), Ql.init(e, t)
	}),
	zh = K("$ZodBoolean", (e, t) => {
		qe.init(e, t), e._zod.pattern = Hm, e._zod.parse = (n, o) => {
			if (t.coerce) try {
				n.value = !!n.value
			} catch {}
			const r = n.value;
			return typeof r == "boolean" || n.issues.push({
				expected: "boolean",
				code: "invalid_type",
				input: r,
				inst: e
			}), n
		}
	}),
	Dh = K("$ZodNull", (e, t) => {
		qe.init(e, t), e._zod.pattern = Gm, e._zod.values = new Set([null]), e._zod.parse = (n, o) => {
			const r = n.value;
			return r === null || n.issues.push({
				expected: "null",
				code: "invalid_type",
				input: r,
				inst: e
			}), n
		}
	}),
	qh = K("$ZodAny", (e, t) => {
		qe.init(e, t), e._zod.parse = n => n
	}),
	Uh = K("$ZodUnknown", (e, t) => {
		qe.init(e, t), e._zod.parse = n => n
	}),
	jh = K("$ZodNever", (e, t) => {
		qe.init(e, t), e._zod.parse = (n, o) => (n.issues.push({
			expected: "never",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n)
	});

function Ji(e, t, n) {
	e.issues.length && t.issues.push(...jt(n, e.issues)), t.value[n] = e.value
}
const Lh = K("$ZodArray", (e, t) => {
	qe.init(e, t), e._zod.parse = (n, o) => {
		const r = n.value;
		if (!Array.isArray(r)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: r,
			inst: e
		}), n;
		n.value = Array(r.length);
		const i = [];
		for (let s = 0; s < r.length; s++) {
			const l = r[s],
				d = t.element._zod.run({
					value: l,
					issues: []
				}, o);
			d instanceof Promise ? i.push(d.then(c => Ji(c, n, s))) : Ji(d, n, s)
		}
		return i.length ? Promise.all(i).then(() => n) : n
	}
});

function so(e, t, n, o, r, i) {
	const s = n in o;
	if (e.issues.length) {
		if (r && i && !s) return;
		t.issues.push(...jt(n, e.issues))
	}
	if (!s && !r) {
		e.issues.length || t.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [n]
		});
		return
	}
	e.value === void 0 ? s && (t.value[n] = void 0) : t.value[n] = e.value
}

function eu(e) {
	var o, r, i, s;
	const t = Object.keys(e.shape);
	for (const l of t)
		if (!((s = (i = (r = (o = e.shape) == null ? void 0 : o[l]) == null ? void 0 : r._zod) == null ? void 0 : i.traits) != null && s.has("$ZodType"))) throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
	const n = tm(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	}
}

function tu(e, t, n, o, r, i) {
	const s = [],
		l = r.keySet,
		d = r.catchall._zod,
		c = d.def.type,
		p = d.optin === "optional",
		m = d.optout === "optional";
	for (const h in t) {
		if (h === "__proto__" || l.has(h)) continue;
		if (c === "never") {
			s.push(h);
			continue
		}
		const g = d.run({
			value: t[h],
			issues: []
		}, o);
		g instanceof Promise ? e.push(g.then(_ => so(_, n, h, t, p, m))) : so(g, n, h, t, p, m)
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: i
	}), e.length ? Promise.all(e).then(() => n) : n
}
const Zh = K("$ZodObject", (e, t) => {
		qe.init(e, t);
		const n = Object.getOwnPropertyDescriptor(t, "shape");
		if (!(n != null && n.get)) {
			const l = t.shape;
			Object.defineProperty(t, "shape", {
				get: () => {
					const d = {
						...l
					};
					return Object.defineProperty(t, "shape", {
						value: d
					}), d
				}
			})
		}
		const o = Io(() => eu(t));
		Ae(e._zod, "propValues", () => {
			const l = t.shape,
				d = {};
			for (const c in l) {
				const p = l[c]._zod;
				if (p.values) {
					d[c] ?? (d[c] = new Set);
					for (const m of p.values) d[c].add(m)
				}
			}
			return d
		});
		const r = An,
			i = t.catchall;
		let s;
		e._zod.parse = (l, d) => {
			s ?? (s = o.value);
			const c = l.value;
			if (!r(c)) return l.issues.push({
				expected: "object",
				code: "invalid_type",
				input: c,
				inst: e
			}), l;
			l.value = {};
			const p = [],
				m = s.shape;
			for (const h of s.keys) {
				const g = m[h],
					_ = g._zod.optin === "optional",
					w = g._zod.optout === "optional",
					k = g._zod.run({
						value: c[h],
						issues: []
					}, d);
				k instanceof Promise ? p.push(k.then(A => so(A, l, h, c, _, w))) : so(k, l, h, c, _, w)
			}
			return i ? tu(p, c, l, d, o.value, e) : p.length ? Promise.all(p).then(() => l) : l
		}
	}),
	Fh = K("$ZodObjectJIT", (e, t) => {
		Zh.init(e, t);
		const n = e._zod.parse,
			o = Io(() => eu(t)),
			r = h => {
				var E, S;
				const g = new lh(["shape", "payload", "ctx"]),
					_ = o.value,
					w = v => {
						const b = Hi(v);
						return `shape[${b}]._zod.run({ value: input[${b}], issues: [] }, ctx)`
					};
				g.write("const input = payload.value;");
				const k = Object.create(null);
				let A = 0;
				for (const v of _.keys) k[v] = `key_${A++}`;
				g.write("const newResult = {};");
				for (const v of _.keys) {
					const b = k[v],
						T = Hi(v),
						q = h[v],
						L = ((E = q == null ? void 0 : q._zod) == null ? void 0 : E.optin) === "optional",
						O = ((S = q == null ? void 0 : q._zod) == null ? void 0 : S.optout) === "optional";
					g.write(`const ${b} = ${w(v)};`), L && O ? g.write(`
        if (${b}.issues.length) {
          if (${T} in input) {
            payload.issues = payload.issues.concat(${b}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${T}, ...iss.path] : [${T}]
            })));
          }
        }
        
        if (${b}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${b}.value;
        }
        
      `) : L ? g.write(`
        if (${b}.issues.length) {
          payload.issues = payload.issues.concat(${b}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        
        if (${b}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${b}.value;
        }
        
      `) : g.write(`
        const ${b}_present = ${T} in input;
        if (${b}.issues.length) {
          payload.issues = payload.issues.concat(${b}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        if (!${b}_present && !${b}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${T}]
          });
        }

        if (${b}_present) {
          if (${b}.value === undefined) {
            newResult[${T}] = undefined;
          } else {
            newResult[${T}] = ${b}.value;
          }
        }

      `)
				}
				g.write("payload.value = newResult;"), g.write("return payload;");
				const I = g.compile();
				return (v, b) => I(h, v, b)
			};
		let i;
		const s = An,
			l = !Rr.jitless,
			c = l && Qp.value,
			p = t.catchall;
		let m;
		e._zod.parse = (h, g) => {
			m ?? (m = o.value);
			const _ = h.value;
			return s(_) ? l && c && (g == null ? void 0 : g.async) === !1 && g.jitless !== !0 ? (i || (i = r(t.shape)), h = i(h, g), p ? tu([], _, h, g, m, e) : h) : n(h, g) : (h.issues.push({
				expected: "object",
				code: "invalid_type",
				input: _,
				inst: e
			}), h)
		}
	});

function Wi(e, t, n, o) {
	for (const i of e)
		if (i.issues.length === 0) return t.value = i.value, t;
	const r = e.filter(i => !cn(i));
	return r.length === 1 ? (t.value = r[0].value, r[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map(i => i.issues.map(s => Pt(s, o, Nt())))
	}), t)
}
const nu = K("$ZodUnion", (e, t) => {
		qe.init(e, t), Ae(e._zod, "optin", () => t.options.some(o => o._zod.optin === "optional") ? "optional" : void 0), Ae(e._zod, "optout", () => t.options.some(o => o._zod.optout === "optional") ? "optional" : void 0), Ae(e._zod, "values", () => {
			if (t.options.every(o => o._zod.values)) return new Set(t.options.flatMap(o => Array.from(o._zod.values)))
		}), Ae(e._zod, "pattern", () => {
			if (t.options.every(o => o._zod.pattern)) {
				const o = t.options.map(r => r._zod.pattern);
				return new RegExp(`^(${o.map(r => Pr(r.source)).join("|")})$`)
			}
		});
		const n = t.options.length === 1 ? t.options[0]._zod.run : null;
		e._zod.parse = (o, r) => {
			if (n) return n(o, r);
			let i = !1;
			const s = [];
			for (const l of t.options) {
				const d = l._zod.run({
					value: o.value,
					issues: []
				}, r);
				if (d instanceof Promise) s.push(d), i = !0;
				else {
					if (d.issues.length === 0) return d;
					s.push(d)
				}
			}
			return i ? Promise.all(s).then(l => Wi(l, o, e, r)) : Wi(s, o, e, r)
		}
	}),
	Bh = K("$ZodDiscriminatedUnion", (e, t) => {
		t.inclusive = !1, nu.init(e, t);
		const n = e._zod.parse;
		Ae(e._zod, "propValues", () => {
			const r = {};
			for (const i of t.options) {
				const s = i._zod.propValues;
				if (!s || Object.keys(s).length === 0) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
				for (const [l, d] of Object.entries(s)) {
					r[l] || (r[l] = new Set);
					for (const c of d) r[l].add(c)
				}
			}
			return r
		});
		const o = Io(() => {
			var s;
			const r = t.options,
				i = new Map;
			for (const l of r) {
				const d = (s = l._zod.propValues) == null ? void 0 : s[t.discriminator];
				if (!d || d.size === 0) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(l)}"`);
				for (const c of d) {
					if (i.has(c)) throw new Error(`Duplicate discriminator value "${String(c)}"`);
					i.set(c, l)
				}
			}
			return i
		});
		e._zod.parse = (r, i) => {
			const s = r.value;
			if (!An(s)) return r.issues.push({
				code: "invalid_type",
				expected: "object",
				input: s,
				inst: e
			}), r;
			const l = o.value.get(s == null ? void 0 : s[t.discriminator]);
			return l ? l._zod.run(r, i) : t.unionFallback || i.direction === "backward" ? n(r, i) : (r.issues.push({
				code: "invalid_union",
				errors: [],
				note: "No matching discriminator",
				discriminator: t.discriminator,
				options: Array.from(o.value.keys()),
				input: s,
				path: [t.discriminator],
				inst: e
			}), r)
		}
	}),
	Vh = K("$ZodIntersection", (e, t) => {
		qe.init(e, t), e._zod.parse = (n, o) => {
			const r = n.value,
				i = t.left._zod.run({
					value: r,
					issues: []
				}, o),
				s = t.right._zod.run({
					value: r,
					issues: []
				}, o);
			return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([d, c]) => Ki(n, d, c)) : Ki(n, i, s)
		}
	});

function sr(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (mn(e) && mn(t)) {
		const n = Object.keys(t),
			o = Object.keys(e).filter(i => n.indexOf(i) !== -1),
			r = {
				...e,
				...t
			};
		for (const i of o) {
			const s = sr(e[i], t[i]);
			if (!s.valid) return {
				valid: !1,
				mergeErrorPath: [i, ...s.mergeErrorPath]
			};
			r[i] = s.data
		}
		return {
			valid: !0,
			data: r
		}
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		const n = [];
		for (let o = 0; o < e.length; o++) {
			const r = e[o],
				i = t[o],
				s = sr(r, i);
			if (!s.valid) return {
				valid: !1,
				mergeErrorPath: [o, ...s.mergeErrorPath]
			};
			n.push(s.data)
		}
		return {
			valid: !0,
			data: n
		}
	}
	return {
		valid: !1,
		mergeErrorPath: []
	}
}

function Ki(e, t, n) {
	const o = new Map;
	let r;
	for (const l of t.issues)
		if (l.code === "unrecognized_keys") {
			r ?? (r = l);
			for (const d of l.keys) o.has(d) || o.set(d, {}), o.get(d).l = !0
		} else e.issues.push(l);
	for (const l of n.issues)
		if (l.code === "unrecognized_keys")
			for (const d of l.keys) o.has(d) || o.set(d, {}), o.get(d).r = !0;
		else e.issues.push(l);
	const i = [...o].filter(([, l]) => l.l && l.r).map(([l]) => l);
	if (i.length && r && e.issues.push({
			...r,
			keys: i
		}), cn(e)) return e;
	const s = sr(t.value, n.value);
	if (!s.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
	return e.value = s.data, e
}
const Hh = K("$ZodTuple", (e, t) => {
	qe.init(e, t);
	const n = t.items;
	e._zod.parse = (o, r) => {
		const i = o.value;
		if (!Array.isArray(i)) return o.issues.push({
			input: i,
			inst: e,
			expected: "tuple",
			code: "invalid_type"
		}), o;
		o.value = [];
		const s = [],
			l = Yi(n, "optin"),
			d = Yi(n, "optout");
		if (!t.rest) {
			if (i.length < l) return o.issues.push({
				code: "too_small",
				minimum: l,
				inclusive: !0,
				input: i,
				inst: e,
				origin: "array"
			}), o;
			i.length > n.length && o.issues.push({
				code: "too_big",
				maximum: n.length,
				inclusive: !0,
				input: i,
				inst: e,
				origin: "array"
			})
		}
		const c = new Array(n.length);
		for (let p = 0; p < n.length; p++) {
			const m = n[p]._zod.run({
				value: i[p],
				issues: []
			}, r);
			m instanceof Promise ? s.push(m.then(h => {
				c[p] = h
			})) : c[p] = m
		}
		if (t.rest) {
			let p = n.length - 1;
			const m = i.slice(n.length);
			for (const h of m) {
				p++;
				const g = t.rest._zod.run({
					value: h,
					issues: []
				}, r);
				g instanceof Promise ? s.push(g.then(_ => Xi(_, o, p))) : Xi(g, o, p)
			}
		}
		return s.length ? Promise.all(s).then(() => Qi(c, o, n, i, d)) : Qi(c, o, n, i, d)
	}
});

function Yi(e, t) {
	for (let n = e.length - 1; n >= 0; n--)
		if (e[n]._zod[t] !== "optional") return n + 1;
	return 0
}

function Xi(e, t, n) {
	e.issues.length && t.issues.push(...jt(n, e.issues)), t.value[n] = e.value
}

function Qi(e, t, n, o, r) {
	for (let i = 0; i < n.length; i++) {
		const s = e[i],
			l = i < o.length;
		if (s.issues.length) {
			if (!l && i >= r) {
				t.value.length = i;
				break
			}
			t.issues.push(...jt(i, s.issues))
		}
		t.value[i] = s.value
	}
	for (let i = t.value.length - 1; i >= o.length && (n[i]._zod.optout === "optional" && t.value[i] === void 0); i--) t.value.length = i;
	return t
}
const Gh = K("$ZodRecord", (e, t) => {
		qe.init(e, t), e._zod.parse = (n, o) => {
			const r = n.value;
			if (!mn(r)) return n.issues.push({
				expected: "record",
				code: "invalid_type",
				input: r,
				inst: e
			}), n;
			const i = [],
				s = t.keyType._zod.values;
			if (s) {
				n.value = {};
				const l = new Set;
				for (const c of s)
					if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
						l.add(typeof c == "number" ? c.toString() : c);
						const p = t.keyType._zod.run({
							value: c,
							issues: []
						}, o);
						if (p instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
						if (p.issues.length) {
							n.issues.push({
								code: "invalid_key",
								origin: "record",
								issues: p.issues.map(g => Pt(g, o, Nt())),
								input: c,
								path: [c],
								inst: e
							});
							continue
						}
						const m = p.value,
							h = t.valueType._zod.run({
								value: r[c],
								issues: []
							}, o);
						h instanceof Promise ? i.push(h.then(g => {
							g.issues.length && n.issues.push(...jt(c, g.issues)), n.value[m] = g.value
						})) : (h.issues.length && n.issues.push(...jt(c, h.issues)), n.value[m] = h.value)
					} let d;
				for (const c in r) l.has(c) || (d = d ?? [], d.push(c));
				d && d.length > 0 && n.issues.push({
					code: "unrecognized_keys",
					input: r,
					inst: e,
					keys: d
				})
			} else {
				n.value = {};
				for (const l of Reflect.ownKeys(r)) {
					if (l === "__proto__" || !Object.prototype.propertyIsEnumerable.call(r, l)) continue;
					let d = t.keyType._zod.run({
						value: l,
						issues: []
					}, o);
					if (d instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					if (typeof l == "string" && Jl.test(l) && d.issues.length) {
						const m = t.keyType._zod.run({
							value: Number(l),
							issues: []
						}, o);
						if (m instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
						m.issues.length === 0 && (d = m)
					}
					if (d.issues.length) {
						t.mode === "loose" ? n.value[l] = r[l] : n.issues.push({
							code: "invalid_key",
							origin: "record",
							issues: d.issues.map(m => Pt(m, o, Nt())),
							input: l,
							path: [l],
							inst: e
						});
						continue
					}
					const p = t.valueType._zod.run({
						value: r[l],
						issues: []
					}, o);
					p instanceof Promise ? i.push(p.then(m => {
						m.issues.length && n.issues.push(...jt(l, m.issues)), n.value[d.value] = m.value
					})) : (p.issues.length && n.issues.push(...jt(l, p.issues)), n.value[d.value] = p.value)
				}
			}
			return i.length ? Promise.all(i).then(() => n) : n
		}
	}),
	Jh = K("$ZodEnum", (e, t) => {
		qe.init(e, t);
		const n = Ul(t.entries),
			o = new Set(n);
		e._zod.values = o, e._zod.pattern = new RegExp(`^(${n.filter(r => em.has(typeof r)).map(r => typeof r == "string" ? hn(r) : r.toString()).join("|")})$`), e._zod.parse = (r, i) => {
			const s = r.value;
			return o.has(s) || r.issues.push({
				code: "invalid_value",
				values: n,
				input: s,
				inst: e
			}), r
		}
	}),
	Wh = K("$ZodLiteral", (e, t) => {
		if (qe.init(e, t), t.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
		const n = new Set(t.values);
		e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map(o => typeof o == "string" ? hn(o) : o ? hn(o.toString()) : String(o)).join("|")})$`), e._zod.parse = (o, r) => {
			const i = o.value;
			return n.has(i) || o.issues.push({
				code: "invalid_value",
				values: t.values,
				input: i,
				inst: e
			}), o
		}
	}),
	Kh = K("$ZodTransform", (e, t) => {
		qe.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, o) => {
			if (o.direction === "backward") throw new ql(e.constructor.name);
			const r = t.transform(n.value, n);
			if (o.async) return (r instanceof Promise ? r : Promise.resolve(r)).then(s => (n.value = s, n.fallback = !0, n));
			if (r instanceof Promise) throw new dn;
			return n.value = r, n.fallback = !0, n
		}
	});

function ea(e, t) {
	return t === void 0 && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e
}
const ou = K("$ZodOptional", (e, t) => {
		qe.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Ae(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), Ae(e._zod, "pattern", () => {
			const n = t.innerType._zod.pattern;
			return n ? new RegExp(`^(${Pr(n.source)})?$`) : void 0
		}), e._zod.parse = (n, o) => {
			if (t.innerType._zod.optin === "optional") {
				const r = n.value,
					i = t.innerType._zod.run(n, o);
				return i instanceof Promise ? i.then(s => ea(s, r)) : ea(i, r)
			}
			return n.value === void 0 ? n : t.innerType._zod.run(n, o)
		}
	}),
	Yh = K("$ZodExactOptional", (e, t) => {
		ou.init(e, t), Ae(e._zod, "values", () => t.innerType._zod.values), Ae(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, o) => t.innerType._zod.run(n, o)
	}),
	Xh = K("$ZodNullable", (e, t) => {
		qe.init(e, t), Ae(e._zod, "optin", () => t.innerType._zod.optin), Ae(e._zod, "optout", () => t.innerType._zod.optout), Ae(e._zod, "pattern", () => {
			const n = t.innerType._zod.pattern;
			return n ? new RegExp(`^(${Pr(n.source)}|null)$`) : void 0
		}), Ae(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, o) => n.value === null ? n : t.innerType._zod.run(n, o)
	}),
	Qh = K("$ZodDefault", (e, t) => {
		qe.init(e, t), e._zod.optin = "optional", Ae(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
			if (o.direction === "backward") return t.innerType._zod.run(n, o);
			if (n.value === void 0) return n.value = t.defaultValue, n;
			const r = t.innerType._zod.run(n, o);
			return r instanceof Promise ? r.then(i => ta(i, t)) : ta(r, t)
		}
	});

function ta(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e
}
const ef = K("$ZodPrefault", (e, t) => {
		qe.init(e, t), e._zod.optin = "optional", Ae(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => (o.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, o))
	}),
	tf = K("$ZodNonOptional", (e, t) => {
		qe.init(e, t), Ae(e._zod, "values", () => {
			const n = t.innerType._zod.values;
			return n ? new Set([...n].filter(o => o !== void 0)) : void 0
		}), e._zod.parse = (n, o) => {
			const r = t.innerType._zod.run(n, o);
			return r instanceof Promise ? r.then(i => na(i, e)) : na(r, e)
		}
	});

function na(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e
}
const nf = K("$ZodCatch", (e, t) => {
		qe.init(e, t), e._zod.optin = "optional", Ae(e._zod, "optout", () => t.innerType._zod.optout), Ae(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
			if (o.direction === "backward") return t.innerType._zod.run(n, o);
			const r = t.innerType._zod.run(n, o);
			return r instanceof Promise ? r.then(i => (n.value = i.value, i.issues.length && (n.value = t.catchValue({
				...n,
				error: {
					issues: i.issues.map(s => Pt(s, o, Nt()))
				},
				input: n.value
			}), n.issues = [], n.fallback = !0), n)) : (n.value = r.value, r.issues.length && (n.value = t.catchValue({
				...n,
				error: {
					issues: r.issues.map(i => Pt(i, o, Nt()))
				},
				input: n.value
			}), n.issues = [], n.fallback = !0), n)
		}
	}),
	of = K("$ZodPipe", (e, t) => {
		qe.init(e, t), Ae(e._zod, "values", () => t.in._zod.values), Ae(e._zod, "optin", () => t.in._zod.optin), Ae(e._zod, "optout", () => t.out._zod.optout), Ae(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, o) => {
			if (o.direction === "backward") {
				const i = t.out._zod.run(n, o);
				return i instanceof Promise ? i.then(s => Wn(s, t.in, o)) : Wn(i, t.in, o)
			}
			const r = t.in._zod.run(n, o);
			return r instanceof Promise ? r.then(i => Wn(i, t.out, o)) : Wn(r, t.out, o)
		}
	});

function Wn(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n)
}
const rf = K("$ZodReadonly", (e, t) => {
	qe.init(e, t), Ae(e._zod, "propValues", () => t.innerType._zod.propValues), Ae(e._zod, "values", () => t.innerType._zod.values), Ae(e._zod, "optin", () => {
		var n, o;
		return (o = (n = t.innerType) == null ? void 0 : n._zod) == null ? void 0 : o.optin
	}), Ae(e._zod, "optout", () => {
		var n, o;
		return (o = (n = t.innerType) == null ? void 0 : n._zod) == null ? void 0 : o.optout
	}), e._zod.parse = (n, o) => {
		if (o.direction === "backward") return t.innerType._zod.run(n, o);
		const r = t.innerType._zod.run(n, o);
		return r instanceof Promise ? r.then(oa) : oa(r)
	}
});

function oa(e) {
	return e.value = Object.freeze(e.value), e
}
const af = K("$ZodLazy", (e, t) => {
		qe.init(e, t), Ae(e._zod, "innerType", () => {
			const n = t;
			return n._cachedInner || (n._cachedInner = t.getter()), n._cachedInner
		}), Ae(e._zod, "pattern", () => {
			var n, o;
			return (o = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : o.pattern
		}), Ae(e._zod, "propValues", () => {
			var n, o;
			return (o = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : o.propValues
		}), Ae(e._zod, "optin", () => {
			var n, o;
			return ((o = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : o.optin) ?? void 0
		}), Ae(e._zod, "optout", () => {
			var n, o;
			return ((o = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : o.optout) ?? void 0
		}), e._zod.parse = (n, o) => e._zod.innerType._zod.run(n, o)
	}),
	sf = K("$ZodCustom", (e, t) => {
		st.init(e, t), qe.init(e, t), e._zod.parse = (n, o) => n, e._zod.check = n => {
			const o = n.value,
				r = t.fn(o);
			if (r instanceof Promise) return r.then(i => ra(i, n, o, e));
			ra(r, n, o, e)
		}
	});

function ra(e, t, n, o) {
	if (!e) {
		const r = {
			code: "custom",
			input: n,
			inst: o,
			path: [...o._zod.def.path ?? []],
			continue: !o._zod.def.abort
		};
		o._zod.def.params && (r.params = o._zod.def.params), t.issues.push($n(r))
	}
}
var ia;
class lf {
	constructor() {
		this._map = new WeakMap, this._idmap = new Map
	}
	add(t, ...n) {
		const o = n[0];
		return this._map.set(t, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, t), this
	}
	clear() {
		return this._map = new WeakMap, this._idmap = new Map, this
	}
	remove(t) {
		const n = this._map.get(t);
		return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this
	}
	get(t) {
		const n = t._zod.parent;
		if (n) {
			const o = {
				...this.get(n) ?? {}
			};
			delete o.id;
			const r = {
				...o,
				...this._map.get(t)
			};
			return Object.keys(r).length ? r : void 0
		}
		return this._map.get(t)
	}
	has(t) {
		return this._map.has(t)
	}
}

function uf() {
	return new lf
}(ia = globalThis).__zod_globalRegistry ?? (ia.__zod_globalRegistry = uf());
const Tn = globalThis.__zod_globalRegistry;

function cf(e, t) {
	return new e({
		type: "string",
		...he(t)
	})
}

function df(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function aa(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function pf(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function mf(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...he(t)
	})
}

function hf(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...he(t)
	})
}

function ff(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...he(t)
	})
}

function _f(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function gf(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function yf(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function vf(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function bf(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function wf(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function kf(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function xf(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function If(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function Tf(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function Sf(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function Cf(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function Of(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function Af(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function $f(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function Ef(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...he(t)
	})
}

function Rf(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...he(t)
	})
}

function Nf(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...he(t)
	})
}

function Pf(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...he(t)
	})
}

function Mf(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...he(t)
	})
}

function zf(e, t) {
	return new e({
		type: "number",
		checks: [],
		...he(t)
	})
}

function Df(e, t) {
	return new e({
		type: "number",
		coerce: !0,
		checks: [],
		...he(t)
	})
}

function qf(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...he(t)
	})
}

function Uf(e, t) {
	return new e({
		type: "boolean",
		...he(t)
	})
}

function jf(e, t) {
	return new e({
		type: "null",
		...he(t)
	})
}

function Lf(e) {
	return new e({
		type: "any"
	})
}

function Zf(e) {
	return new e({
		type: "unknown"
	})
}

function Ff(e, t) {
	return new e({
		type: "never",
		...he(t)
	})
}

function sa(e, t) {
	return new Kl({
		check: "less_than",
		...he(t),
		value: e,
		inclusive: !1
	})
}

function Lo(e, t) {
	return new Kl({
		check: "less_than",
		...he(t),
		value: e,
		inclusive: !0
	})
}

function la(e, t) {
	return new Yl({
		check: "greater_than",
		...he(t),
		value: e,
		inclusive: !1
	})
}

function Zo(e, t) {
	return new Yl({
		check: "greater_than",
		...he(t),
		value: e,
		inclusive: !0
	})
}

function ua(e, t) {
	return new Km({
		check: "multiple_of",
		...he(t),
		value: e
	})
}

function ru(e, t) {
	return new Xm({
		check: "max_length",
		...he(t),
		maximum: e
	})
}

function lo(e, t) {
	return new Qm({
		check: "min_length",
		...he(t),
		minimum: e
	})
}

function iu(e, t) {
	return new eh({
		check: "length_equals",
		...he(t),
		length: e
	})
}

function Bf(e, t) {
	return new th({
		check: "string_format",
		format: "regex",
		...he(t),
		pattern: e
	})
}

function Vf(e) {
	return new nh({
		check: "string_format",
		format: "lowercase",
		...he(e)
	})
}

function Hf(e) {
	return new oh({
		check: "string_format",
		format: "uppercase",
		...he(e)
	})
}

function Gf(e, t) {
	return new rh({
		check: "string_format",
		format: "includes",
		...he(t),
		includes: e
	})
}

function Jf(e, t) {
	return new ih({
		check: "string_format",
		format: "starts_with",
		...he(t),
		prefix: e
	})
}

function Wf(e, t) {
	return new ah({
		check: "string_format",
		format: "ends_with",
		...he(t),
		suffix: e
	})
}

function gn(e) {
	return new sh({
		check: "overwrite",
		tx: e
	})
}

function Kf(e) {
	return gn(t => t.normalize(e))
}

function Yf() {
	return gn(e => e.trim())
}

function Xf() {
	return gn(e => e.toLowerCase())
}

function Qf() {
	return gn(e => e.toUpperCase())
}

function e_() {
	return gn(e => Xp(e))
}

function t_(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...he(n)
	})
}

function n_(e, t, n) {
	const o = he(n);
	return o.abort ?? (o.abort = !0), new e({
		type: "custom",
		check: "custom",
		fn: t,
		...o
	})
}

function o_(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...he(n)
	})
}

function r_(e, t) {
	const n = i_(o => (o.addIssue = r => {
		if (typeof r == "string") o.issues.push($n(r, o.value, n._zod.def));
		else {
			const i = r;
			i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = o.value), i.inst ?? (i.inst = n), i.continue ?? (i.continue = !n._zod.def.abort), o.issues.push($n(i))
		}
	}, e(o.value, o)), t);
	return n
}

function i_(e, t) {
	const n = new st({
		check: "custom",
		...he(t)
	});
	return n._zod.check = e, n
}

function uo(e) {
	let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: (e == null ? void 0 : e.metadata) ?? Tn,
		target: t,
		unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
		override: (e == null ? void 0 : e.override) ?? (() => {}),
		io: (e == null ? void 0 : e.io) ?? "output",
		counter: 0,
		seen: new Map,
		cycles: (e == null ? void 0 : e.cycles) ?? "ref",
		reused: (e == null ? void 0 : e.reused) ?? "inline",
		external: (e == null ? void 0 : e.external) ?? void 0
	}
}

function Le(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var p, m;
	var o;
	const r = e._zod.def,
		i = t.seen.get(e);
	if (i) return i.count++, n.schemaPath.includes(e) && (i.cycle = n.path), i.schema;
	const s = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, s);
	const l = (m = (p = e._zod).toJSONSchema) == null ? void 0 : m.call(p);
	if (l) s.schema = l;
	else {
		const h = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, s.schema, h);
		else {
			const _ = s.schema,
				w = t.processors[r.type];
			if (!w) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
			w(e, t, _, h)
		}
		const g = e._zod.parent;
		g && (s.ref || (s.ref = g), Le(g, t, h), t.seen.get(g).isParent = !0)
	}
	const d = t.metadataRegistry.get(e);
	return d && Object.assign(s.schema, d), t.io === "input" && it(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && "_prefault" in s.schema && ((o = s.schema).default ?? (o.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema
}

function co(e, t) {
	var s, l, d, c;
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const o = new Map;
	for (const p of e.seen.entries()) {
		const m = (s = e.metadataRegistry.get(p[0])) == null ? void 0 : s.id;
		if (m) {
			const h = o.get(m);
			if (h && h !== p[0]) throw new Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			o.set(m, p[0])
		}
	}
	const r = p => {
			var w;
			const m = e.target === "draft-2020-12" ? "$defs" : "definitions";
			if (e.external) {
				const k = (w = e.external.registry.get(p[0])) == null ? void 0 : w.id,
					A = e.external.uri ?? (E => E);
				if (k) return {
					ref: A(k)
				};
				const I = p[1].defId ?? p[1].schema.id ?? `schema${e.counter++}`;
				return p[1].defId = I, {
					defId: I,
					ref: `${A("__shared")}#/${m}/${I}`
				}
			}
			if (p[1] === n) return {
				ref: "#"
			};
			const g = `#/${m}/`,
				_ = p[1].schema.id ?? `__schema${e.counter++}`;
			return {
				defId: _,
				ref: g + _
			}
		},
		i = p => {
			if (p[1].schema.$ref) return;
			const m = p[1],
				{
					ref: h,
					defId: g
				} = r(p);
			m.def = {
				...m.schema
			}, g && (m.defId = g);
			const _ = m.schema;
			for (const w in _) delete _[w];
			_.$ref = h
		};
	if (e.cycles === "throw")
		for (const p of e.seen.entries()) {
			const m = p[1];
			if (m.cycle) throw new Error(`Cycle detected: #/${(l = m.cycle) == null ? void 0 : l.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)
		}
	for (const p of e.seen.entries()) {
		const m = p[1];
		if (t === p[0]) {
			i(p);
			continue
		}
		if (e.external) {
			const g = (d = e.external.registry.get(p[0])) == null ? void 0 : d.id;
			if (t !== p[0] && g) {
				i(p);
				continue
			}
		}
		if ((c = e.metadataRegistry.get(p[0])) == null ? void 0 : c.id) {
			i(p);
			continue
		}
		if (m.cycle) {
			i(p);
			continue
		}
		if (m.count > 1 && e.reused === "ref") {
			i(p);
			continue
		}
	}
}

function po(e, t) {
	var l, d, c, p;
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const o = m => {
		const h = e.seen.get(m);
		if (h.ref === null) return;
		const g = h.def ?? h.schema,
			_ = {
				...g
			},
			w = h.ref;
		if (h.ref = null, w) {
			o(w);
			const A = e.seen.get(w),
				I = A.schema;
			if (I.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(I)) : Object.assign(g, I), Object.assign(g, _), m._zod.parent === w)
				for (const S in g) S === "$ref" || S === "allOf" || S in _ || delete g[S];
			if (I.$ref && A.def)
				for (const S in g) S === "$ref" || S === "allOf" || S in A.def && JSON.stringify(g[S]) === JSON.stringify(A.def[S]) && delete g[S]
		}
		const k = m._zod.parent;
		if (k && k !== w) {
			o(k);
			const A = e.seen.get(k);
			if (A != null && A.schema.$ref && (g.$ref = A.schema.$ref, A.def))
				for (const I in g) I === "$ref" || I === "allOf" || I in A.def && JSON.stringify(g[I]) === JSON.stringify(A.def[I]) && delete g[I]
		}
		e.override({
			zodSchema: m,
			jsonSchema: g,
			path: h.path ?? []
		})
	};
	for (const m of [...e.seen.entries()].reverse()) o(m[0]);
	const r = {};
	if (e.target === "draft-2020-12" ? r.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? r.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? r.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (l = e.external) != null && l.uri) {
		const m = (d = e.external.registry.get(t)) == null ? void 0 : d.id;
		if (!m) throw new Error("Schema is missing an `id` property");
		r.$id = e.external.uri(m)
	}
	Object.assign(r, n.def ?? n.schema);
	const i = (c = e.metadataRegistry.get(t)) == null ? void 0 : c.id;
	i !== void 0 && r.id === i && delete r.id;
	const s = ((p = e.external) == null ? void 0 : p.defs) ?? {};
	for (const m of e.seen.entries()) {
		const h = m[1];
		h.def && h.defId && (h.def.id === h.defId && delete h.def.id, s[h.defId] = h.def)
	}
	e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? r.$defs = s : r.definitions = s);
	try {
		const m = JSON.parse(JSON.stringify(r));
		return Object.defineProperty(m, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: mo(t, "input", e.processors),
					output: mo(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), m
	} catch {
		throw new Error("Error converting schema to JSON.")
	}
}

function it(e, t) {
	const n = t ?? {
		seen: new Set
	};
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const o = e._zod.def;
	if (o.type === "transform") return !0;
	if (o.type === "array") return it(o.element, n);
	if (o.type === "set") return it(o.valueType, n);
	if (o.type === "lazy") return it(o.getter(), n);
	if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault") return it(o.innerType, n);
	if (o.type === "intersection") return it(o.left, n) || it(o.right, n);
	if (o.type === "record" || o.type === "map") return it(o.keyType, n) || it(o.valueType, n);
	if (o.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : it(o.in, n) || it(o.out, n);
	if (o.type === "object") {
		for (const r in o.shape)
			if (it(o.shape[r], n)) return !0;
		return !1
	}
	if (o.type === "union") {
		for (const r of o.options)
			if (it(r, n)) return !0;
		return !1
	}
	if (o.type === "tuple") {
		for (const r of o.items)
			if (it(r, n)) return !0;
		return !!(o.rest && it(o.rest, n))
	}
	return !1
}
const a_ = (e, t = {}) => n => {
		const o = uo({
			...n,
			processors: t
		});
		return Le(e, o), co(o, e), po(o, e)
	},
	mo = (e, t, n = {}) => o => {
		const {
			libraryOptions: r,
			target: i
		} = o ?? {}, s = uo({
			...r ?? {},
			target: i,
			io: t,
			processors: n
		});
		return Le(e, s), co(s, e), po(s, e)
	},
	s_ = {
		guid: "uuid",
		url: "uri",
		datetime: "date-time",
		json_string: "json-string",
		regex: ""
	},
	au = (e, t, n, o) => {
		const r = n;
		r.type = "string";
		const {
			minimum: i,
			maximum: s,
			format: l,
			patterns: d,
			contentEncoding: c
		} = e._zod.bag;
		if (typeof i == "number" && (r.minLength = i), typeof s == "number" && (r.maxLength = s), l && (r.format = s_[l] ?? l, r.format === "" && delete r.format, l === "time" && delete r.format), c && (r.contentEncoding = c), d && d.size > 0) {
			const p = [...d];
			p.length === 1 ? r.pattern = p[0].source : p.length > 1 && (r.allOf = [...p.map(m => ({
				...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? {
					type: "string"
				} : {},
				pattern: m.source
			}))])
		}
	},
	su = (e, t, n, o) => {
		const r = n,
			{
				minimum: i,
				maximum: s,
				format: l,
				multipleOf: d,
				exclusiveMaximum: c,
				exclusiveMinimum: p
			} = e._zod.bag;
		typeof l == "string" && l.includes("int") ? r.type = "integer" : r.type = "number";
		const m = typeof p == "number" && p >= (i ?? Number.NEGATIVE_INFINITY),
			h = typeof c == "number" && c <= (s ?? Number.POSITIVE_INFINITY),
			g = t.target === "draft-04" || t.target === "openapi-3.0";
		m ? g ? (r.minimum = p, r.exclusiveMinimum = !0) : r.exclusiveMinimum = p : typeof i == "number" && (r.minimum = i), h ? g ? (r.maximum = c, r.exclusiveMaximum = !0) : r.exclusiveMaximum = c : typeof s == "number" && (r.maximum = s), typeof d == "number" && (r.multipleOf = d)
	},
	lu = (e, t, n, o) => {
		n.type = "boolean"
	},
	l_ = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema")
	},
	u_ = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema")
	},
	uu = (e, t, n, o) => {
		t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null"
	},
	c_ = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema")
	},
	d_ = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema")
	},
	cu = (e, t, n, o) => {
		n.not = {}
	},
	du = (e, t, n, o) => {},
	pu = (e, t, n, o) => {},
	p_ = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema")
	},
	mu = (e, t, n, o) => {
		const r = e._zod.def,
			i = Ul(r.entries);
		i.every(s => typeof s == "number") && (n.type = "number"), i.every(s => typeof s == "string") && (n.type = "string"), n.enum = i
	},
	hu = (e, t, n, o) => {
		const r = e._zod.def,
			i = [];
		for (const s of r.values)
			if (s === void 0) {
				if (t.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema")
			} else if (typeof s == "bigint") {
			if (t.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
			i.push(Number(s))
		} else i.push(s);
		if (i.length !== 0)
			if (i.length === 1) {
				const s = i[0];
				n.type = s === null ? "null" : typeof s, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [s] : n.const = s
			} else i.every(s => typeof s == "number") && (n.type = "number"), i.every(s => typeof s == "string") && (n.type = "string"), i.every(s => typeof s == "boolean") && (n.type = "boolean"), i.every(s => s === null) && (n.type = "null"), n.enum = i
	},
	m_ = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema")
	},
	h_ = (e, t, n, o) => {
		const r = n,
			i = e._zod.pattern;
		if (!i) throw new Error("Pattern not found in template literal");
		r.type = "string", r.pattern = i.source
	},
	f_ = (e, t, n, o) => {
		const r = n,
			i = {
				type: "string",
				format: "binary",
				contentEncoding: "binary"
			},
			{
				minimum: s,
				maximum: l,
				mime: d
			} = e._zod.bag;
		s !== void 0 && (i.minLength = s), l !== void 0 && (i.maxLength = l), d ? d.length === 1 ? (i.contentMediaType = d[0], Object.assign(r, i)) : (Object.assign(r, i), r.anyOf = d.map(c => ({
			contentMediaType: c
		}))) : Object.assign(r, i)
	},
	__ = (e, t, n, o) => {
		n.type = "boolean"
	},
	fu = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema")
	},
	g_ = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema")
	},
	_u = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema")
	},
	y_ = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema")
	},
	v_ = (e, t, n, o) => {
		if (t.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema")
	},
	gu = (e, t, n, o) => {
		const r = n,
			i = e._zod.def,
			{
				minimum: s,
				maximum: l
			} = e._zod.bag;
		typeof s == "number" && (r.minItems = s), typeof l == "number" && (r.maxItems = l), r.type = "array", r.items = Le(i.element, t, {
			...o,
			path: [...o.path, "items"]
		})
	},
	yu = (e, t, n, o) => {
		var c;
		const r = n,
			i = e._zod.def;
		r.type = "object", r.properties = {};
		const s = i.shape;
		for (const p in s) r.properties[p] = Le(s[p], t, {
			...o,
			path: [...o.path, "properties", p]
		});
		const l = new Set(Object.keys(s)),
			d = new Set([...l].filter(p => {
				const m = i.shape[p]._zod;
				return t.io === "input" ? m.optin === void 0 : m.optout === void 0
			}));
		d.size > 0 && (r.required = Array.from(d)), ((c = i.catchall) == null ? void 0 : c._zod.def.type) === "never" ? r.additionalProperties = !1 : i.catchall ? i.catchall && (r.additionalProperties = Le(i.catchall, t, {
			...o,
			path: [...o.path, "additionalProperties"]
		})) : t.io === "output" && (r.additionalProperties = !1)
	},
	vu = (e, t, n, o) => {
		const r = e._zod.def,
			i = r.inclusive === !1,
			s = r.options.map((l, d) => Le(l, t, {
				...o,
				path: [...o.path, i ? "oneOf" : "anyOf", d]
			}));
		i ? n.oneOf = s : n.anyOf = s
	},
	bu = (e, t, n, o) => {
		const r = e._zod.def,
			i = Le(r.left, t, {
				...o,
				path: [...o.path, "allOf", 0]
			}),
			s = Le(r.right, t, {
				...o,
				path: [...o.path, "allOf", 1]
			}),
			l = c => "allOf" in c && Object.keys(c).length === 1,
			d = [...l(i) ? i.allOf : [i], ...l(s) ? s.allOf : [s]];
		n.allOf = d
	},
	wu = (e, t, n, o) => {
		const r = n,
			i = e._zod.def;
		r.type = "array";
		const s = t.target === "draft-2020-12" ? "prefixItems" : "items",
			l = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems",
			d = i.items.map((h, g) => Le(h, t, {
				...o,
				path: [...o.path, s, g]
			})),
			c = i.rest ? Le(i.rest, t, {
				...o,
				path: [...o.path, l, ...t.target === "openapi-3.0" ? [i.items.length] : []]
			}) : null;
		t.target === "draft-2020-12" ? (r.prefixItems = d, c && (r.items = c)) : t.target === "openapi-3.0" ? (r.items = {
			anyOf: d
		}, c && r.items.anyOf.push(c), r.minItems = d.length, c || (r.maxItems = d.length)) : (r.items = d, c && (r.additionalItems = c));
		const {
			minimum: p,
			maximum: m
		} = e._zod.bag;
		typeof p == "number" && (r.minItems = p), typeof m == "number" && (r.maxItems = m)
	},
	ku = (e, t, n, o) => {
		const r = n,
			i = e._zod.def;
		r.type = "object";
		const s = i.keyType,
			l = s._zod.bag,
			d = l == null ? void 0 : l.patterns;
		if (i.mode === "loose" && d && d.size > 0) {
			const p = Le(i.valueType, t, {
				...o,
				path: [...o.path, "patternProperties", "*"]
			});
			r.patternProperties = {};
			for (const m of d) r.patternProperties[m.source] = p
		} else(t.target === "draft-07" || t.target === "draft-2020-12") && (r.propertyNames = Le(i.keyType, t, {
			...o,
			path: [...o.path, "propertyNames"]
		})), r.additionalProperties = Le(i.valueType, t, {
			...o,
			path: [...o.path, "additionalProperties"]
		});
		const c = s._zod.values;
		if (c) {
			const p = [...c].filter(m => typeof m == "string" || typeof m == "number");
			p.length > 0 && (r.required = p)
		}
	},
	xu = (e, t, n, o) => {
		const r = e._zod.def,
			i = Le(r.innerType, t, o),
			s = t.seen.get(e);
		t.target === "openapi-3.0" ? (s.ref = r.innerType, n.nullable = !0) : n.anyOf = [i, {
			type: "null"
		}]
	},
	Iu = (e, t, n, o) => {
		const r = e._zod.def;
		Le(r.innerType, t, o);
		const i = t.seen.get(e);
		i.ref = r.innerType
	},
	Tu = (e, t, n, o) => {
		const r = e._zod.def;
		Le(r.innerType, t, o);
		const i = t.seen.get(e);
		i.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue))
	},
	Su = (e, t, n, o) => {
		const r = e._zod.def;
		Le(r.innerType, t, o);
		const i = t.seen.get(e);
		i.ref = r.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)))
	},
	Cu = (e, t, n, o) => {
		const r = e._zod.def;
		Le(r.innerType, t, o);
		const i = t.seen.get(e);
		i.ref = r.innerType;
		let s;
		try {
			s = r.catchValue(void 0)
		} catch {
			throw new Error("Dynamic catch values are not supported in JSON Schema")
		}
		n.default = s
	},
	Ou = (e, t, n, o) => {
		const r = e._zod.def,
			i = r.in._zod.traits.has("$ZodTransform"),
			s = t.io === "input" ? i ? r.out : r.in : r.out;
		Le(s, t, o);
		const l = t.seen.get(e);
		l.ref = s
	},
	Au = (e, t, n, o) => {
		const r = e._zod.def;
		Le(r.innerType, t, o);
		const i = t.seen.get(e);
		i.ref = r.innerType, n.readOnly = !0
	},
	b_ = (e, t, n, o) => {
		const r = e._zod.def;
		Le(r.innerType, t, o);
		const i = t.seen.get(e);
		i.ref = r.innerType
	},
	Ur = (e, t, n, o) => {
		const r = e._zod.def;
		Le(r.innerType, t, o);
		const i = t.seen.get(e);
		i.ref = r.innerType
	},
	$u = (e, t, n, o) => {
		const r = e._zod.innerType;
		Le(r, t, o);
		const i = t.seen.get(e);
		i.ref = r
	},
	ca = {
		string: au,
		number: su,
		boolean: lu,
		bigint: l_,
		symbol: u_,
		null: uu,
		undefined: c_,
		void: d_,
		never: cu,
		any: du,
		unknown: pu,
		date: p_,
		enum: mu,
		literal: hu,
		nan: m_,
		template_literal: h_,
		file: f_,
		success: __,
		custom: fu,
		function: g_,
		transform: _u,
		map: y_,
		set: v_,
		array: gu,
		object: yu,
		union: vu,
		intersection: bu,
		tuple: wu,
		record: ku,
		nullable: xu,
		nonoptional: Iu,
		default: Tu,
		prefault: Su,
		catch: Cu,
		pipe: Ou,
		readonly: Au,
		promise: b_,
		optional: Ur,
		lazy: $u
	};

function Eu(e, t) {
	if ("_idmap" in e) {
		const o = e,
			r = uo({
				...t,
				processors: ca
			}),
			i = {};
		for (const d of o._idmap.entries()) {
			const [c, p] = d;
			Le(p, r)
		}
		const s = {},
			l = {
				registry: o,
				uri: t == null ? void 0 : t.uri,
				defs: i
			};
		r.external = l;
		for (const d of o._idmap.entries()) {
			const [c, p] = d;
			co(r, p), s[c] = po(r, p)
		}
		if (Object.keys(i).length > 0) {
			const d = r.target === "draft-2020-12" ? "$defs" : "definitions";
			s.__shared = {
				[d]: i
			}
		}
		return {
			schemas: s
		}
	}
	const n = uo({
		...t,
		processors: ca
	});
	return Le(e, n), co(n, e), po(n, e)
}
const w_ = K("ZodISODateTime", (e, t) => {
	wh.init(e, t), Fe.init(e, t)
});

function k_(e) {
	return Rf(w_, e)
}
const x_ = K("ZodISODate", (e, t) => {
	kh.init(e, t), Fe.init(e, t)
});

function I_(e) {
	return Nf(x_, e)
}
const T_ = K("ZodISOTime", (e, t) => {
	xh.init(e, t), Fe.init(e, t)
});

function S_(e) {
	return Pf(T_, e)
}
const C_ = K("ZodISODuration", (e, t) => {
	Ih.init(e, t), Fe.init(e, t)
});

function O_(e) {
	return Mf(C_, e)
}
const A_ = (e, t) => {
		Fl.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
			format: {
				value: n => pm(e, n)
			},
			flatten: {
				value: n => dm(e, n)
			},
			addIssue: {
				value: n => {
					e.issues.push(n), e.message = JSON.stringify(e.issues, ar, 2)
				}
			},
			addIssues: {
				value: n => {
					e.issues.push(...n), e.message = JSON.stringify(e.issues, ar, 2)
				}
			},
			isEmpty: {
				get() {
					return e.issues.length === 0
				}
			}
		})
	},
	gt = K("ZodError", A_, {
		Parent: Error
	}),
	$_ = zr(gt),
	E_ = Dr(gt),
	R_ = To(gt),
	jr = So(gt),
	N_ = fm(gt),
	P_ = _m(gt),
	M_ = gm(gt),
	z_ = ym(gt),
	D_ = vm(gt),
	q_ = bm(gt),
	U_ = wm(gt),
	j_ = km(gt),
	da = new WeakMap;

function zn(e, t, n) {
	const o = Object.getPrototypeOf(e);
	let r = da.get(o);
	if (r || (r = new Set, da.set(o, r)), !r.has(t)) {
		r.add(t);
		for (const i in n) {
			const s = n[i];
			Object.defineProperty(o, i, {
				configurable: !0,
				enumerable: !1,
				get() {
					const l = s.bind(this);
					return Object.defineProperty(this, i, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: l
					}), l
				},
				set(l) {
					Object.defineProperty(this, i, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: l
					})
				}
			})
		}
	}
}
const je = K("ZodType", (e, t) => (qe.init(e, t), Object.assign(e["~standard"], {
		jsonSchema: {
			input: mo(e, "input"),
			output: mo(e, "output")
		}
	}), e.toJSONSchema = a_(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", {
		value: t
	}), e.parse = (n, o) => $_(e, n, o, {
		callee: e.parse
	}), e.safeParse = (n, o) => R_(e, n, o), e.parseAsync = async (n, o) => E_(e, n, o, {
		callee: e.parseAsync
	}), e.safeParseAsync = async (n, o) => jr(e, n, o), e.spa = e.safeParseAsync, e.encode = (n, o) => N_(e, n, o), e.decode = (n, o) => P_(e, n, o), e.encodeAsync = async (n, o) => M_(e, n, o), e.decodeAsync = async (n, o) => z_(e, n, o), e.safeEncode = (n, o) => D_(e, n, o), e.safeDecode = (n, o) => q_(e, n, o), e.safeEncodeAsync = async (n, o) => U_(e, n, o), e.safeDecodeAsync = async (n, o) => j_(e, n, o), zn(e, "ZodType", {
		check(...n) {
			const o = this.def;
			return this.clone(Ht(o, {
				checks: [...o.checks ?? [], ...n.map(r => typeof r == "function" ? {
					_zod: {
						check: r,
						def: {
							check: "custom"
						},
						onattach: []
					}
				} : r)]
			}), {
				parent: !0
			})
		},
		with(...n) {
			return this.check(...n)
		},
		clone(n, o) {
			return Gt(this, n, o)
		},
		brand() {
			return this
		},
		register(n, o) {
			return n.add(this, o), this
		},
		refine(n, o) {
			return this.check(Ng(n, o))
		},
		superRefine(n, o) {
			return this.check(Pg(n, o))
		},
		overwrite(n) {
			return this.check(gn(n))
		},
		optional() {
			return fa(this)
		},
		exactOptional() {
			return bg(this)
		},
		nullable() {
			return _a(this)
		},
		nullish() {
			return fa(_a(this))
		},
		nonoptional(n) {
			return Sg(this, n)
		},
		array() {
			return R(this)
		},
		or(n) {
			return le([this, n])
		},
		and(n) {
			return hg(this, n)
		},
		transform(n) {
			return ga(this, yg(n))
		},
		default (n) {
			return xg(this, n)
		},
		prefault(n) {
			return Tg(this, n)
		},
		catch (n) {
			return Og(this, n)
		},
		pipe(n) {
			return ga(this, n)
		},
		readonly() {
			return Eg(this)
		},
		describe(n) {
			const o = this.clone();
			return Tn.add(o, {
				description: n
			}), o
		},
		meta(...n) {
			if (n.length === 0) return Tn.get(this);
			const o = this.clone();
			return Tn.add(o, n[0]), o
		},
		isOptional() {
			return this.safeParse(void 0).success
		},
		isNullable() {
			return this.safeParse(null).success
		},
		apply(n) {
			return n(this)
		}
	}), Object.defineProperty(e, "description", {
		get() {
			var n;
			return (n = Tn.get(e)) == null ? void 0 : n.description
		},
		configurable: !0
	}), e)),
	Ru = K("_ZodString", (e, t) => {
		qr.init(e, t), je.init(e, t), e._zod.processJSONSchema = (o, r, i) => au(e, o, r);
		const n = e._zod.bag;
		e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, zn(e, "_ZodString", {
			regex(...o) {
				return this.check(Bf(...o))
			},
			includes(...o) {
				return this.check(Gf(...o))
			},
			startsWith(...o) {
				return this.check(Jf(...o))
			},
			endsWith(...o) {
				return this.check(Wf(...o))
			},
			min(...o) {
				return this.check(lo(...o))
			},
			max(...o) {
				return this.check(ru(...o))
			},
			length(...o) {
				return this.check(iu(...o))
			},
			nonempty(...o) {
				return this.check(lo(1, ...o))
			},
			lowercase(o) {
				return this.check(Vf(o))
			},
			uppercase(o) {
				return this.check(Hf(o))
			},
			trim() {
				return this.check(Yf())
			},
			normalize(...o) {
				return this.check(Kf(...o))
			},
			toLowerCase() {
				return this.check(Xf())
			},
			toUpperCase() {
				return this.check(Qf())
			},
			slugify() {
				return this.check(e_())
			}
		})
	}),
	L_ = K("ZodString", (e, t) => {
		qr.init(e, t), Ru.init(e, t), e.email = n => e.check(df(Z_, n)), e.url = n => e.check(_f(F_, n)), e.jwt = n => e.check(Ef(rg, n)), e.emoji = n => e.check(gf(B_, n)), e.guid = n => e.check(aa(pa, n)), e.uuid = n => e.check(pf(Kn, n)), e.uuidv4 = n => e.check(mf(Kn, n)), e.uuidv6 = n => e.check(hf(Kn, n)), e.uuidv7 = n => e.check(ff(Kn, n)), e.nanoid = n => e.check(yf(V_, n)), e.guid = n => e.check(aa(pa, n)), e.cuid = n => e.check(vf(H_, n)), e.cuid2 = n => e.check(bf(G_, n)), e.ulid = n => e.check(wf(J_, n)), e.base64 = n => e.check(Of(tg, n)), e.base64url = n => e.check(Af(ng, n)), e.xid = n => e.check(kf(W_, n)), e.ksuid = n => e.check(xf(K_, n)), e.ipv4 = n => e.check(If(Y_, n)), e.ipv6 = n => e.check(Tf(X_, n)), e.cidrv4 = n => e.check(Sf(Q_, n)), e.cidrv6 = n => e.check(Cf(eg, n)), e.e164 = n => e.check($f(og, n)), e.datetime = n => e.check(k_(n)), e.date = n => e.check(I_(n)), e.time = n => e.check(S_(n)), e.duration = n => e.check(O_(n))
	});

function a(e) {
	return cf(L_, e)
}
const Fe = K("ZodStringFormat", (e, t) => {
		Ze.init(e, t), Ru.init(e, t)
	}),
	Z_ = K("ZodEmail", (e, t) => {
		ph.init(e, t), Fe.init(e, t)
	}),
	pa = K("ZodGUID", (e, t) => {
		ch.init(e, t), Fe.init(e, t)
	}),
	Kn = K("ZodUUID", (e, t) => {
		dh.init(e, t), Fe.init(e, t)
	}),
	F_ = K("ZodURL", (e, t) => {
		mh.init(e, t), Fe.init(e, t)
	}),
	B_ = K("ZodEmoji", (e, t) => {
		hh.init(e, t), Fe.init(e, t)
	}),
	V_ = K("ZodNanoID", (e, t) => {
		fh.init(e, t), Fe.init(e, t)
	}),
	H_ = K("ZodCUID", (e, t) => {
		_h.init(e, t), Fe.init(e, t)
	}),
	G_ = K("ZodCUID2", (e, t) => {
		gh.init(e, t), Fe.init(e, t)
	}),
	J_ = K("ZodULID", (e, t) => {
		yh.init(e, t), Fe.init(e, t)
	}),
	W_ = K("ZodXID", (e, t) => {
		vh.init(e, t), Fe.init(e, t)
	}),
	K_ = K("ZodKSUID", (e, t) => {
		bh.init(e, t), Fe.init(e, t)
	}),
	Y_ = K("ZodIPv4", (e, t) => {
		Th.init(e, t), Fe.init(e, t)
	}),
	X_ = K("ZodIPv6", (e, t) => {
		Sh.init(e, t), Fe.init(e, t)
	}),
	Q_ = K("ZodCIDRv4", (e, t) => {
		Ch.init(e, t), Fe.init(e, t)
	}),
	eg = K("ZodCIDRv6", (e, t) => {
		Oh.init(e, t), Fe.init(e, t)
	}),
	tg = K("ZodBase64", (e, t) => {
		Ah.init(e, t), Fe.init(e, t)
	}),
	ng = K("ZodBase64URL", (e, t) => {
		Eh.init(e, t), Fe.init(e, t)
	}),
	og = K("ZodE164", (e, t) => {
		Rh.init(e, t), Fe.init(e, t)
	}),
	rg = K("ZodJWT", (e, t) => {
		Ph.init(e, t), Fe.init(e, t)
	}),
	Lr = K("ZodNumber", (e, t) => {
		Ql.init(e, t), je.init(e, t), e._zod.processJSONSchema = (o, r, i) => su(e, o, r), zn(e, "ZodNumber", {
			gt(o, r) {
				return this.check(la(o, r))
			},
			gte(o, r) {
				return this.check(Zo(o, r))
			},
			min(o, r) {
				return this.check(Zo(o, r))
			},
			lt(o, r) {
				return this.check(sa(o, r))
			},
			lte(o, r) {
				return this.check(Lo(o, r))
			},
			max(o, r) {
				return this.check(Lo(o, r))
			},
			int(o) {
				return this.check(ma(o))
			},
			safe(o) {
				return this.check(ma(o))
			},
			positive(o) {
				return this.check(la(0, o))
			},
			nonnegative(o) {
				return this.check(Zo(0, o))
			},
			negative(o) {
				return this.check(sa(0, o))
			},
			nonpositive(o) {
				return this.check(Lo(0, o))
			},
			multipleOf(o, r) {
				return this.check(ua(o, r))
			},
			step(o, r) {
				return this.check(ua(o, r))
			},
			finite() {
				return this
			}
		});
		const n = e._zod.bag;
		e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null
	});

function y(e) {
	return zf(Lr, e)
}
const ig = K("ZodNumberFormat", (e, t) => {
	Mh.init(e, t), Lr.init(e, t)
});

function ma(e) {
	return qf(ig, e)
}
const ag = K("ZodBoolean", (e, t) => {
	zh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => lu(e, n, o)
});

function _e(e) {
	return Uf(ag, e)
}
const sg = K("ZodNull", (e, t) => {
	Dh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => uu(e, n, o)
});

function Nu(e) {
	return jf(sg, e)
}
const lg = K("ZodAny", (e, t) => {
	qh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => du()
});

function nt() {
	return Lf(lg)
}
const ug = K("ZodUnknown", (e, t) => {
	Uh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => pu()
});

function Se() {
	return Zf(ug)
}
const cg = K("ZodNever", (e, t) => {
	jh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => cu(e, n, o)
});

function Pu(e) {
	return Ff(cg, e)
}
const dg = K("ZodArray", (e, t) => {
	Lh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => gu(e, n, o, r), e.element = t.element, zn(e, "ZodArray", {
		min(n, o) {
			return this.check(lo(n, o))
		},
		nonempty(n) {
			return this.check(lo(1, n))
		},
		max(n, o) {
			return this.check(ru(n, o))
		},
		length(n, o) {
			return this.check(iu(n, o))
		},
		unwrap() {
			return this.element
		}
	})
});

function R(e, t) {
	return t_(dg, e, t)
}
const Zr = K("ZodObject", (e, t) => {
	Fh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => yu(e, n, o, r), Ae(e, "shape", () => t.shape), zn(e, "ZodObject", {
		keyof() {
			return Y(Object.keys(this._zod.def.shape))
		},
		catchall(n) {
			return this.clone({
				...this._zod.def,
				catchall: n
			})
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: Se()
			})
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: Se()
			})
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: Pu()
			})
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			})
		},
		extend(n) {
			return im(this, n)
		},
		safeExtend(n) {
			return am(this, n)
		},
		merge(n) {
			return sm(this, n)
		},
		pick(n) {
			return om(this, n)
		},
		omit(n) {
			return rm(this, n)
		},
		partial(...n) {
			return lm(zu, this, n[0])
		},
		required(...n) {
			return um(Du, this, n[0])
		}
	})
});

function u(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...he(t)
	};
	return new Zr(n)
}

function KC(e, t) {
	return new Zr({
		type: "object",
		shape: e,
		catchall: Pu(),
		...he(t)
	})
}

function St(e, t) {
	return new Zr({
		type: "object",
		shape: e,
		catchall: Se(),
		...he(t)
	})
}
const Mu = K("ZodUnion", (e, t) => {
	nu.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => vu(e, n, o, r), e.options = t.options
});

function le(e, t) {
	return new Mu({
		type: "union",
		options: e,
		...he(t)
	})
}
const pg = K("ZodDiscriminatedUnion", (e, t) => {
	Mu.init(e, t), Bh.init(e, t)
});

function ye(e, t, n) {
	return new pg({
		type: "union",
		options: t,
		discriminator: e,
		...he(n)
	})
}
const mg = K("ZodIntersection", (e, t) => {
	Vh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => bu(e, n, o, r)
});

function hg(e, t) {
	return new mg({
		type: "intersection",
		left: e,
		right: t
	})
}
const fg = K("ZodTuple", (e, t) => {
	Hh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => wu(e, n, o, r), e.rest = n => e.clone({
		...e._zod.def,
		rest: n
	})
});

function pn(e, t, n) {
	const o = t instanceof qe,
		r = o ? n : t,
		i = o ? t : null;
	return new fg({
		type: "tuple",
		items: e,
		rest: i,
		...he(r)
	})
}
const ha = K("ZodRecord", (e, t) => {
	Gh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => ku(e, n, o, r), e.keyType = t.keyType, e.valueType = t.valueType
});

function ke(e, t, n) {
	return !t || !t._zod ? new ha({
		type: "record",
		keyType: a(),
		valueType: e,
		...he(t)
	}) : new ha({
		type: "record",
		keyType: e,
		valueType: t,
		...he(n)
	})
}
const lr = K("ZodEnum", (e, t) => {
	Jh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (o, r, i) => mu(e, o, r), e.enum = t.entries, e.options = Object.values(t.entries);
	const n = new Set(Object.keys(t.entries));
	e.extract = (o, r) => {
		const i = {};
		for (const s of o)
			if (n.has(s)) i[s] = t.entries[s];
			else throw new Error(`Key ${s} not found in enum`);
		return new lr({
			...t,
			checks: [],
			...he(r),
			entries: i
		})
	}, e.exclude = (o, r) => {
		const i = {
			...t.entries
		};
		for (const s of o)
			if (n.has(s)) delete i[s];
			else throw new Error(`Key ${s} not found in enum`);
		return new lr({
			...t,
			checks: [],
			...he(r),
			entries: i
		})
	}
});

function Y(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map(o => [o, o])) : e;
	return new lr({
		type: "enum",
		entries: n,
		...he(t)
	})
}
const _g = K("ZodLiteral", (e, t) => {
	Wh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => hu(e, n, o), e.values = new Set(t.values), Object.defineProperty(e, "value", {
		get() {
			if (t.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
			return t.values[0]
		}
	})
});

function f(e, t) {
	return new _g({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...he(t)
	})
}
const gg = K("ZodTransform", (e, t) => {
	Kh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => _u(e, n), e._zod.parse = (n, o) => {
		if (o.direction === "backward") throw new ql(e.constructor.name);
		n.addIssue = i => {
			if (typeof i == "string") n.issues.push($n(i, n.value, t));
			else {
				const s = i;
				s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = e), n.issues.push($n(s))
			}
		};
		const r = t.transform(n.value, n);
		return r instanceof Promise ? r.then(i => (n.value = i, n.fallback = !0, n)) : (n.value = r, n.fallback = !0, n)
	}
});

function yg(e) {
	return new gg({
		type: "transform",
		transform: e
	})
}
const zu = K("ZodOptional", (e, t) => {
	ou.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ur(e, n, o, r), e.unwrap = () => e._zod.def.innerType
});

function fa(e) {
	return new zu({
		type: "optional",
		innerType: e
	})
}
const vg = K("ZodExactOptional", (e, t) => {
	Yh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ur(e, n, o, r), e.unwrap = () => e._zod.def.innerType
});

function bg(e) {
	return new vg({
		type: "optional",
		innerType: e
	})
}
const wg = K("ZodNullable", (e, t) => {
	Xh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => xu(e, n, o, r), e.unwrap = () => e._zod.def.innerType
});

function _a(e) {
	return new wg({
		type: "nullable",
		innerType: e
	})
}
const kg = K("ZodDefault", (e, t) => {
	Qh.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => Tu(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap
});

function xg(e, t) {
	return new kg({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ll(t)
		}
	})
}
const Ig = K("ZodPrefault", (e, t) => {
	ef.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => Su(e, n, o, r), e.unwrap = () => e._zod.def.innerType
});

function Tg(e, t) {
	return new Ig({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ll(t)
		}
	})
}
const Du = K("ZodNonOptional", (e, t) => {
	tf.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => Iu(e, n, o, r), e.unwrap = () => e._zod.def.innerType
});

function Sg(e, t) {
	return new Du({
		type: "nonoptional",
		innerType: e,
		...he(t)
	})
}
const Cg = K("ZodCatch", (e, t) => {
	nf.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => Cu(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap
});

function Og(e, t) {
	return new Cg({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	})
}
const Ag = K("ZodPipe", (e, t) => {
	of.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ou(e, n, o, r), e.in = t.in, e.out = t.out
});

function ga(e, t) {
	return new Ag({
		type: "pipe",
		in: e,
		out: t
	})
}
const $g = K("ZodReadonly", (e, t) => {
	rf.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => Au(e, n, o, r), e.unwrap = () => e._zod.def.innerType
});

function Eg(e) {
	return new $g({
		type: "readonly",
		innerType: e
	})
}
const Rg = K("ZodLazy", (e, t) => {
	af.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => $u(e, n, o, r), e.unwrap = () => e._zod.def.getter()
});

function Fr(e) {
	return new Rg({
		type: "lazy",
		getter: e
	})
}
const Br = K("ZodCustom", (e, t) => {
	sf.init(e, t), je.init(e, t), e._zod.processJSONSchema = (n, o, r) => fu(e, n)
});

function YC(e, t) {
	return n_(Br, e ?? (() => !0), t)
}

function Ng(e, t = {}) {
	return o_(Br, e, t)
}

function Pg(e, t) {
	return r_(e, t)
}

function XC(e, t = {}) {
	const n = new Br({
		type: "custom",
		check: "custom",
		fn: o => o instanceof e,
		abort: !0,
		...he(t)
	});
	return n._zod.bag.Class = e, n._zod.check = o => {
		o.value instanceof e || o.issues.push({
			code: "invalid_type",
			expected: e.name,
			input: o.value,
			inst: n,
			path: [...n._zod.def.path ?? []]
		})
	}, n
}

function Mg(e) {
	return Df(Lr, e)
}
var ue;
(function(e) {
	e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly"
})(ue || (ue = {}));
let Fo = class extends Error {
	constructor(t, n) {
		super(t), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line
	}
};
const ya = 10,
	zg = 13,
	Wt = 32;

function Bo(e) {}

function Dg(e) {
	if (typeof e == "function") throw new TypeError("`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?");
	const {
		onEvent: t = Bo,
		onError: n = Bo,
		onRetry: o = Bo,
		onComment: r,
		maxBufferSize: i
	} = e, s = [];
	let l = 0,
		d = !0,
		c, p = "",
		m = 0,
		h, g = !1;

	function _(v) {
		if (g) throw new Error("Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing.");
		if (d && (d = !1, v.charCodeAt(0) === 239 && v.charCodeAt(1) === 187 && v.charCodeAt(2) === 191 && (v = v.slice(3))), s.length === 0) {
			const q = k(v);
			q !== "" && (s.push(q), l = q.length), w();
			return
		}
		if (v.indexOf(`
`) === -1 && v.indexOf("\r") === -1) {
			s.push(v), l += v.length, w();
			return
		}
		s.push(v);
		const b = s.join("");
		s.length = 0, l = 0;
		const T = k(b);
		T !== "" && (s.push(T), l = T.length), w()
	}

	function w() {
		i !== void 0 && (l + p.length <= i || (g = !0, s.length = 0, l = 0, c = void 0, p = "", m = 0, h = void 0, n(new Fo(`Buffered data exceeded max buffer size of ${i} characters`, {
			type: "max-buffer-size-exceeded"
		}))))
	}

	function k(v) {
		let b = 0;
		if (v.indexOf("\r") === -1) {
			let T = v.indexOf(`
`, b);
			for (; T !== -1;) {
				if (b === T) {
					m > 0 && t({
						id: c,
						event: h,
						data: p
					}), c = void 0, p = "", m = 0, h = void 0, b = T + 1, T = v.indexOf(`
`, b);
					continue
				}
				const q = v.charCodeAt(b);
				if (va(v, b, q)) {
					const L = v.charCodeAt(b + 5) === Wt ? b + 6 : b + 5,
						O = v.slice(L, T);
					if (m === 0 && v.charCodeAt(T + 1) === ya) {
						t({
							id: c,
							event: h,
							data: O
						}), c = void 0, p = "", h = void 0, b = T + 2, T = v.indexOf(`
`, b);
						continue
					}
					p = m === 0 ? O : `${p}
${O}`, m++
				} else ba(v, b, q) ? h = v.slice(v.charCodeAt(b + 6) === Wt ? b + 7 : b + 6, T) || void 0 : A(v, b, T);
				b = T + 1, T = v.indexOf(`
`, b)
			}
			return v.slice(b)
		}
		for (; b < v.length;) {
			const T = v.indexOf("\r", b),
				q = v.indexOf(`
`, b);
			let L = -1;
			if (T !== -1 && q !== -1 ? L = T < q ? T : q : T !== -1 ? T === v.length - 1 ? L = -1 : L = T : q !== -1 && (L = q), L === -1) break;
			A(v, b, L), b = L + 1, v.charCodeAt(b - 1) === zg && v.charCodeAt(b) === ya && b++
		}
		return v.slice(b)
	}

	function A(v, b, T) {
		if (b === T) {
			E();
			return
		}
		const q = v.charCodeAt(b);
		if (va(v, b, q)) {
			const N = v.charCodeAt(b + 5) === Wt ? b + 6 : b + 5,
				oe = v.slice(N, T);
			p = m === 0 ? oe : `${p}
${oe}`, m++;
			return
		}
		if (ba(v, b, q)) {
			h = v.slice(v.charCodeAt(b + 6) === Wt ? b + 7 : b + 6, T) || void 0;
			return
		}
		if (q === 105 && v.charCodeAt(b + 1) === 100 && v.charCodeAt(b + 2) === 58) {
			const N = v.slice(v.charCodeAt(b + 3) === Wt ? b + 4 : b + 3, T);
			c = N.includes("\0") ? void 0 : N;
			return
		}
		if (q === 58) {
			if (r) {
				const N = v.slice(b, T);
				r(N.slice(v.charCodeAt(b + 1) === Wt ? 2 : 1))
			}
			return
		}
		const L = v.slice(b, T),
			O = L.indexOf(":");
		if (O === -1) {
			I(L, "", L);
			return
		}
		const B = L.slice(0, O),
			F = L.charCodeAt(O + 1) === Wt ? 2 : 1,
			z = L.slice(O + F);
		I(B, z, L)
	}

	function I(v, b, T) {
		switch (v) {
			case "event":
				h = b || void 0;
				break;
			case "data":
				p = m === 0 ? b : `${p}
${b}`, m++;
				break;
			case "id":
				c = b.includes("\0") ? void 0 : b;
				break;
			case "retry":
				/^\d+$/.test(b) ? o(parseInt(b, 10)) : n(new Fo(`Invalid \`retry\` value: "${b}"`, {
					type: "invalid-retry",
					value: b,
					line: T
				}));
				break;
			default:
				n(new Fo(`Unknown field "${v.length > 20 ? `${v.slice(0, 20)}…` : v}"`, {
					type: "unknown-field",
					field: v,
					value: b,
					line: T
				}));
				break
		}
	}

	function E() {
		m > 0 && t({
			id: c,
			event: h,
			data: p
		}), c = void 0, p = "", m = 0, h = void 0
	}

	function S(v = {}) {
		if (v.consume && s.length > 0) {
			const b = s.join("");
			A(b, 0, b.length)
		}
		d = !0, c = void 0, p = "", m = 0, h = void 0, s.length = 0, l = 0, g = !1
	}
	return {
		feed: _,
		reset: S
	}
}

function va(e, t, n) {
	return n === 100 && e.charCodeAt(t + 1) === 97 && e.charCodeAt(t + 2) === 116 && e.charCodeAt(t + 3) === 97 && e.charCodeAt(t + 4) === 58
}

function ba(e, t, n) {
	return n === 101 && e.charCodeAt(t + 1) === 118 && e.charCodeAt(t + 2) === 101 && e.charCodeAt(t + 3) === 110 && e.charCodeAt(t + 4) === 116 && e.charCodeAt(t + 5) === 58
}
let qg = class extends TransformStream {
	constructor({
		onError: t,
		onRetry: n,
		onComment: o,
		maxBufferSize: r
	} = {}) {
		let i;
		super({
			start(s) {
				i = Dg({
					onEvent: l => {
						s.enqueue(l)
					},
					onError(l) {
						typeof t == "function" && t(l), (t === "terminate" || l.type === "max-buffer-size-exceeded") && s.error(l)
					},
					onRetry: n,
					onComment: o,
					maxBufferSize: r
				})
			},
			transform(s) {
				i.feed(s)
			}
		})
	}
};
const Qe = Symbol.for("workflow-serialize"),
	et = Symbol.for("workflow-deserialize");
var qu = {};

function tO(e) {
	return e === void 0 ? [] : Array.isArray(e) ? e : [e]
}

function Ce(...e) {
	return e.reduce((t, n) => ({
		...t,
		...n ?? {}
	}), {})
}

function Ug(e) {
	return Object.fromEntries(Object.entries(e).filter(([t, n]) => n != null))
}
async function Lt(e, t) {
	if (e == null) return Promise.resolve();
	const n = t == null ? void 0 : t.abortSignal;
	return new Promise((o, r) => {
		if (n != null && n.aborted) {
			r(wa());
			return
		}
		const i = setTimeout(() => {
				s(), o()
			}, e),
			s = () => {
				clearTimeout(i), n == null || n.removeEventListener("abort", l)
			},
			l = () => {
				s(), r(wa())
			};
		n == null || n.addEventListener("abort", l)
	})
}

function wa() {
	return new DOMException("Delay was aborted", "AbortError")
}

function jg(e) {
	const t = e ?? globalThis.WebSocket;
	if (t == null) throw new Error("No WebSocket implementation available.");
	return t
}

function Lg(e) {
	const t = new URL(e);
	return t.protocol === "http:" ? t.protocol = "ws:" : t.protocol === "https:" && (t.protocol = "wss:"), t
}
var ka = new TextDecoder;
async function Zg(e) {
	return typeof e == "string" ? e : e instanceof ArrayBuffer || ArrayBuffer.isView(e) ? ka.decode(e) : typeof Blob < "u" && e instanceof Blob ? e.text() : String(e)
}
var Fg = 1;
async function Bg(e, {
	highWaterMark: t = 1024 * 1024,
	pollIntervalMs: n = 20,
	abortSignal: o
} = {}) {
	for (var r; e.readyState === Fg && ((r = e.bufferedAmount) != null ? r : 0) > t;) {
		if ((o == null ? void 0 : o.aborted) === !0) return;
		await Lt(n)
	}
}

function Vg({
	url: e,
	protocols: t,
	headers: n,
	webSocket: o,
	abortSignal: r,
	onOpen: i,
	onMessageText: s,
	onProcessingError: l,
	onSocketError: d,
	onClose: c,
	onAbort: p
}) {
	var m;
	let h, g;
	const _ = A => {
		g != null && (r == null || r.removeEventListener("abort", g), g = void 0);
		try {
			h == null || h.close(A)
		} catch {}
	};
	if (r != null && r.aborted) return p == null || p((m = r.reason) != null ? m : new Error("Aborted")), {
		socket: void 0,
		close: _
	};
	try {
		const A = jg(o);
		h = new A(e, t, {
			headers: Ug(n ?? {})
		})
	} catch (A) {
		return l(A), {
			socket: void 0,
			close: _
		}
	}
	r != null && p != null && (g = () => {
		var A;
		return p((A = r.reason) != null ? A : new Error("Aborted"))
	}, r.addEventListener("abort", g, {
		once: !0
	}));
	const w = h;
	h.onopen = () => {
		try {
			i == null || i(w)
		} catch (A) {
			l(A)
		}
	};
	let k = Promise.resolve();
	return h.onmessage = A => {
		k = k.then(() => Zg(A.data)).then(I => s(I)).catch(l)
	}, h.onerror = () => {
		k = k.then(() => d == null ? void 0 : d()).catch(l)
	}, h.onclose = () => {
		k = k.then(() => c == null ? void 0 : c()).catch(l)
	}, {
		socket: h,
		close: _
	}
}
var {
	btoa: Hg,
	atob: Gg
} = globalThis;

function Ot(e) {
	const t = e.replace(/-/g, "+").replace(/_/g, "/"),
		n = Gg(t);
	return Uint8Array.from(n, o => o.codePointAt(0))
}

function Uu(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t += String.fromCodePoint(e[n]);
	return Hg(t)
}

function De(e) {
	return e instanceof Uint8Array ? Uu(e) : e
}

function Dn(e) {
	return e.type === "text" ? new TextEncoder().encode(e.text) : e.data instanceof Uint8Array ? e.data : e.data instanceof ArrayBuffer ? new Uint8Array(e.data) : Ot(e.data)
}

function ju(e, t = {}) {
	const {
		useArrayBrackets: n = !0
	} = t, o = new FormData;
	for (const [r, i] of Object.entries(e))
		if (i != null) {
			if (Array.isArray(i)) {
				if (i.length === 1) {
					o.append(r, i[0]);
					continue
				}
				const s = n ? `${r}[]` : r;
				for (const l of i) o.append(s, l);
				continue
			}
			o.append(r, i)
		} return o
}

function Lu({
	tools: e = [],
	providerToolNames: t
}) {
	const n = {},
		o = {};
	for (const r of e)
		if (r.type === "provider" && r.id in t) {
			const i = t[r.id];
			n[r.name] = i, o[i] = r.name
		} return {
		toProviderToolName: r => {
			var i;
			return (i = n[r]) != null ? i : r
		},
		toCustomToolName: r => {
			var i;
			return (i = o[r]) != null ? i : r
		}
	}
}
var nO = class {
		constructor() {
			this.status = {
				type: "pending"
			}, this._resolve = void 0, this._reject = void 0
		}
		get promise() {
			return this._promise ? this._promise : (this._promise = new Promise((e, t) => {
				this.status.type === "resolved" ? e(this.status.value) : this.status.type === "rejected" && t(this.status.error), this._resolve = e, this._reject = t
			}), this._promise)
		}
		resolve(e) {
			var t;
			this.status = {
				type: "resolved",
				value: e
			}, this._promise && ((t = this._resolve) == null || t.call(this, e))
		}
		reject(e) {
			var t;
			this.status = {
				type: "rejected",
				error: e
			}, this._promise && ((t = this._reject) == null || t.call(this, e))
		}
		isResolved() {
			return this.status.type === "resolved"
		}
		isRejected() {
			return this.status.type === "rejected"
		}
		isPending() {
			return this.status.type === "pending"
		}
	},
	Zu = [{
		mediaType: "image/gif",
		bytesPrefix: [71, 73, 70]
	}, {
		mediaType: "image/png",
		bytesPrefix: [137, 80, 78, 71]
	}, {
		mediaType: "image/jpeg",
		bytesPrefix: [255, 216]
	}, {
		mediaType: "image/webp",
		bytesPrefix: [82, 73, 70, 70, null, null, null, null, 87, 69, 66, 80]
	}, {
		mediaType: "image/bmp",
		bytesPrefix: [66, 77]
	}, {
		mediaType: "image/tiff",
		bytesPrefix: [73, 73, 42, 0]
	}, {
		mediaType: "image/tiff",
		bytesPrefix: [77, 77, 0, 42]
	}, {
		mediaType: "image/avif",
		bytesPrefix: [0, 0, 0, 32, 102, 116, 121, 112, 97, 118, 105, 102]
	}, {
		mediaType: "image/heic",
		bytesPrefix: [0, 0, 0, 32, 102, 116, 121, 112, 104, 101, 105, 99]
	}],
	Fu = [{
		mediaType: "application/pdf",
		bytesPrefix: [37, 80, 68, 70]
	}],
	Bu = [{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 251]
	}, {
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 250]
	}, {
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 243]
	}, {
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 242]
	}, {
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 227]
	}, {
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 226]
	}, {
		mediaType: "audio/wav",
		bytesPrefix: [82, 73, 70, 70, null, null, null, null, 87, 65, 86, 69]
	}, {
		mediaType: "audio/ogg",
		bytesPrefix: [79, 103, 103, 83]
	}, {
		mediaType: "audio/flac",
		bytesPrefix: [102, 76, 97, 67]
	}, {
		mediaType: "audio/aac",
		bytesPrefix: [64, 21, 0, 0]
	}, {
		mediaType: "audio/mp4",
		bytesPrefix: [102, 116, 121, 112]
	}, {
		mediaType: "audio/webm",
		bytesPrefix: [26, 69, 223, 163]
	}],
	Vu = [{
		mediaType: "video/mp4",
		bytesPrefix: [0, 0, 0, null, 102, 116, 121, 112]
	}, {
		mediaType: "video/webm",
		bytesPrefix: [26, 69, 223, 163]
	}, {
		mediaType: "video/quicktime",
		bytesPrefix: [0, 0, 0, 20, 102, 116, 121, 112, 113, 116]
	}, {
		mediaType: "video/x-msvideo",
		bytesPrefix: [82, 73, 70, 70]
	}],
	Jg = e => {
		const t = typeof e == "string" ? Ot(e) : e,
			n = (t[6] & 127) << 21 | (t[7] & 127) << 14 | (t[8] & 127) << 7 | t[9] & 127;
		return t.slice(n + 10)
	};

function Wg(e) {
	return typeof e == "string" && e.startsWith("SUQz") || typeof e != "string" && e.length > 10 && e[0] === 73 && e[1] === 68 && e[2] === 51 ? Jg(e) : e
}

function xa({
	data: e,
	signatures: t
}) {
	const n = Wg(e),
		o = typeof n == "string" ? Ot(n.substring(0, Math.min(n.length, 24))) : n;
	for (const r of t)
		if (o.length >= r.bytesPrefix.length && r.bytesPrefix.every((i, s) => i === null || o[s] === i)) return r.mediaType
}
var Kg = {
	image: Zu,
	audio: Bu,
	video: Vu,
	application: Fu
};

function Yg({
	data: e,
	topLevelType: t
}) {
	if (t === void 0) return xa({
		data: e,
		signatures: [...Zu, ...Fu, ...Bu, ...Vu]
	});
	const n = Kg[t];
	if (n !== void 0) return xa({
		data: e,
		signatures: n
	})
}

function ut(e) {
	const t = e.indexOf("/");
	return t === -1 ? e : e.substring(0, t)
}

function Zt(e) {
	const t = e.indexOf("/");
	if (t === -1) return !1;
	const n = e.substring(t + 1);
	return n.length > 0 && n !== "*"
}
async function Vr(e) {
	var t;
	try {
		await ((t = e.body) == null ? void 0 : t.cancel())
	} catch {}
}
var Hu = "AI_DownloadError",
	Gu = `vercel.ai.error.${Hu}`,
	Xg = Symbol.for(Gu),
	Ia, Ta, lt = class extends(Ta = Ie, Ia = Xg, Ta) {
		constructor({
			url: e,
			statusCode: t,
			statusText: n,
			cause: o,
			message: r = o == null ? `Failed to download ${e}: ${t} ${n}` : `Failed to download ${e}: ${o}`
		}) {
			super({
				name: Hu,
				message: r,
				cause: o
			}), this[Ia] = !0, this.url = e, this.statusCode = t, this.statusText = n
		}
		static isInstance(e) {
			return Ie.hasMarker(e, Gu)
		}
	};

function Qg(e = globalThis) {
	return e.window != null
}

function ho(e, t) {
	try {
		return new URL(e).origin === new URL(t).origin
	} catch {
		return !1
	}
}
var ey = ["connection", "keep-alive", "te", "trailer", "transfer-encoding", "upgrade", "host", "forwarded", "proxy-authorization", "via", "x-forwarded-for", "x-forwarded-host", "x-forwarded-proto", "x-real-ip", "metadata", "metadata-flavor", "x-aws-ec2-metadata-token", "x-metadata-token", "cookie", "set-cookie"];

function ty(e) {
	const t = new Headers(e);
	for (const n of ey) t.delete(n);
	return t
}

function ny(e) {
	let t;
	try {
		t = new URL(e)
	} catch {
		throw new lt({
			url: e,
			message: `Invalid URL: ${e}`
		})
	}
	if (t.protocol === "data:") return;
	if (t.protocol !== "http:" && t.protocol !== "https:") throw new lt({
		url: e,
		message: `URL scheme must be http, https, or data, got ${t.protocol}`
	});
	const n = t.hostname.toLowerCase().replace(/\.+$/, "");
	if (!n) throw new lt({
		url: e,
		message: "URL must have a hostname"
	});
	if (n === "localhost" || n.endsWith(".local") || n.endsWith(".localhost")) throw new lt({
		url: e,
		message: `URL with hostname ${n} is not allowed`
	});
	if (n.startsWith("[") && n.endsWith("]")) {
		const o = n.slice(1, -1);
		if (ry(o)) throw new lt({
			url: e,
			message: `URL with IPv6 address ${n} is not allowed`
		});
		return
	}
	if (Ju(n)) {
		if (Wu(n)) throw new lt({
			url: e,
			message: `URL with IP address ${n} is not allowed`
		});
		return
	}
}

function Ju(e) {
	const t = e.split(".");
	return t.length !== 4 ? !1 : t.every(n => {
		const o = Number(n);
		return Number.isInteger(o) && o >= 0 && o <= 255 && String(o) === n
	})
}

function Wu(e) {
	const t = e.split(".").map(Number),
		[n, o, r] = t;
	return n === 0 || n === 10 || n === 100 && o >= 64 && o <= 127 || n === 127 || n === 169 && o === 254 || n === 172 && o >= 16 && o <= 31 || n === 192 && o === 0 && r === 0 || n === 192 && o === 0 && r === 2 || n === 192 && o === 168 || n === 198 && (o === 18 || o === 19) || n === 198 && o === 51 && r === 100 || n === 203 && o === 0 && r === 113 || n >= 224
}

function oy(e) {
	let t = e.toLowerCase();
	const n = t.indexOf("%");
	n !== -1 && (t = t.slice(0, n));
	const o = t.split("::");
	if (o.length > 2) return null;
	const r = s => {
			if (s === "") return [];
			const l = [],
				d = s.split(":");
			for (let c = 0; c < d.length; c++) {
				const p = d[c];
				if (p.includes(".")) {
					if (c !== d.length - 1 || !Ju(p)) return null;
					const [m, h, g, _] = p.split(".").map(Number);
					l.push(m << 8 | h, g << 8 | _);
					continue
				}
				if (!/^[0-9a-f]{1,4}$/.test(p)) return null;
				l.push(parseInt(p, 16))
			}
			return l
		},
		i = r(o[0]);
	if (i === null) return null;
	if (o.length === 2) {
		const s = r(o[1]);
		if (s === null) return null;
		const l = 8 - i.length - s.length;
		return l < 0 ? null : [...i, ...new Array(l).fill(0), ...s]
	}
	return i.length === 8 ? i : null
}

function ry(e) {
	const t = oy(e);
	if (t === null) return !0;
	const n = r => t.slice(0, r).every(i => i === 0);
	if (n(7) && (t[7] === 0 || t[7] === 1) || (t[0] & 65024) === 64512 || (t[0] & 65472) === 65152 || (t[0] & 65472) === 65216 || (t[0] & 65280) === 65280 || t[0] === 8193 && t[1] === 3512 || t[0] === 16383 && (t[1] & 61440) === 0) return !0;
	if (n(6) || n(5) && t[5] === 65535 || n(4) && t[4] === 65535 && t[5] === 0 || t[0] === 100 && t[1] === 65435 && t[2] === 0 && t[3] === 0 && t[4] === 0 && t[5] === 0 || t[0] === 100 && t[1] === 65435 && t[2] === 1) {
		const r = t[6] >> 8 & 255,
			i = t[6] & 255,
			s = t[7] >> 8 & 255,
			l = t[7] & 255;
		return Wu(`${r}.${i}.${s}.${l}`)
	}
	return !1
}
var iy = 10,
	ay = new Set([301, 302, 303, 307, 308]);
async function Ku({
	url: e,
	headers: t,
	abortSignal: n,
	maxRedirects: o = iy,
	fetch: r = globalThis.fetch,
	trustedOrigin: i
}) {
	let s = t === void 0 ? void 0 : ty(t);
	const l = c => {
		const p = {
			signal: n,
			redirect: c
		};
		return s !== void 0 && (p.headers = new Headers(s)), p
	};
	let d = e;
	for (let c = 0; c <= o; c++) {
		(i === void 0 || !ho(d, i)) && ny(d);
		const p = await r(d, l("manual"));
		if (p.type === "opaqueredirect") {
			if (!Qg()) throw new lt({
				url: e,
				message: `Redirect from ${d} could not be validated and was blocked`
			});
			return await r(d, l("follow"))
		}
		const m = p.headers.get("location");
		if (ay.has(p.status) && m) {
			await Vr(p);
			const h = new URL(m, d).toString();
			if (s !== void 0 && !ho(h, d)) {
				const g = s.get("user-agent");
				s = new Headers(g == null ? void 0 : {
					"user-agent": g
				})
			}
			d = h;
			continue
		}
		return p
	}
	throw new lt({
		url: e,
		message: `Too many redirects (max ${o})`
	})
}
var Yu = 2 * 1024 * 1024 * 1024;
async function Xu({
	response: e,
	url: t,
	maxBytes: n = Yu
}) {
	const o = e.headers.get("content-length");
	if (o != null) {
		const p = parseInt(o, 10);
		if (!isNaN(p) && p > n) throw await Vr(e), new lt({
			url: t,
			message: `Download of ${t} exceeded maximum size of ${n} bytes (Content-Length: ${p}).`
		})
	}
	const r = e.body;
	if (r == null) return new Uint8Array(0);
	const i = r.getReader(),
		s = [];
	let l = 0;
	try {
		for (;;) {
			const {
				done: p,
				value: m
			} = await i.read();
			if (p) break;
			if (l += m.length, l > n) throw new lt({
				url: t,
				message: `Download of ${t} exceeded maximum size of ${n} bytes.`
			});
			s.push(m)
		}
	} finally {
		try {
			await i.cancel()
		} finally {
			i.releaseLock()
		}
	}
	const d = new Uint8Array(l);
	let c = 0;
	for (const p of s) d.set(p, c), c += p.length;
	return d
}
async function Hr(e, t) {
	var n, o;
	try {
		const r = await Ku({
			url: e,
			abortSignal: t == null ? void 0 : t.abortSignal
		});
		if (!r.ok) throw await Vr(r), new lt({
			url: e,
			statusCode: r.status,
			statusText: r.statusText
		});
		const i = await Xu({
				response: r,
				url: e,
				maxBytes: (n = t == null ? void 0 : t.maxBytes) != null ? n : Yu
			}),
			s = (o = r.headers.get("content-type")) != null ? o : void 0;
		return new Blob([i], s ? {
			type: s
		} : void 0)
	} catch (r) {
		throw lt.isInstance(r) ? r : new lt({
			url: e,
			cause: r
		})
	}
}

function yn(e) {
	return Object.fromEntries([...e.headers])
}

function oO(...e) {
	return e.filter(t => t != null)
}
var sy = ({
		prefix: e,
		size: t = 16,
		alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
		separator: o = "-"
	} = {}) => {
		const r = () => {
			const i = n.length,
				s = new Array(t);
			for (let l = 0; l < t; l++) s[l] = n[Math.random() * i | 0];
			return s.join("")
		};
		if (e == null) return r;
		if (n.includes(o)) throw new xo({
			argument: "separator",
			message: `The separator "${o}" must not be part of the alphabet "${n}".`
		});
		return () => `${e}${o}${r()}`
	},
	ze = sy();

function Mt(e) {
	return (e instanceof Error || e instanceof DOMException) && (e.name === "AbortError" || e.name === "ResponseAborted" || e.name === "TimeoutError")
}
var ly = ["fetch failed", "failed to fetch"],
	uy = ["ConnectionRefused", "ConnectionClosed", "FailedToOpenSocket", "ECONNRESET", "ECONNREFUSED", "ETIMEDOUT", "EPIPE"];

function cy(e) {
	if (!(e instanceof Error)) return !1;
	const t = e.code;
	return !!(typeof t == "string" && uy.includes(t))
}

function Qu({
	error: e,
	url: t,
	requestBodyValues: n
}) {
	if (Mt(e)) return e;
	if (e instanceof TypeError && ly.includes(e.message.toLowerCase())) {
		const o = e.cause;
		if (o != null) return new He({
			message: `Cannot connect to API: ${o.message}`,
			cause: o,
			url: t,
			requestBodyValues: n,
			isRetryable: !0
		})
	}
	return cy(e) ? new He({
		message: `Cannot connect to API: ${e.message}`,
		cause: e,
		url: t,
		requestBodyValues: n,
		isRetryable: !0
	}) : e
}

function Gr(e = globalThis) {
	var t, n, o;
	return e.window ? "runtime/browser" : (t = e.navigator) != null && t.userAgent ? `runtime/${e.navigator.userAgent.toLowerCase()}` : (o = (n = e.process) == null ? void 0 : n.versions) != null && o.node ? `runtime/node.js/${e.process.version.substring(0)}` : e.EdgeRuntime ? "runtime/vercel-edge" : "runtime/unknown"
}

function dy(e) {
	if (e == null) return {};
	const t = {};
	if (e instanceof Headers) e.forEach((n, o) => {
		t[o.toLowerCase()] = n
	});
	else {
		Array.isArray(e) || (e = Object.entries(e));
		for (const [n, o] of e) o != null && (t[n.toLowerCase()] = o)
	}
	return t
}

function sn(e, ...t) {
	const n = new Headers(dy(e)),
		o = n.get("user-agent") || "";
	return n.set("user-agent", [o, ...t].filter(Boolean).join(" ")), Object.fromEntries(n.entries())
}
var ec = "5.0.11",
	py = () => globalThis.fetch,
	qn = async ({
		url: e,
		headers: t = {},
		successfulResponseHandler: n,
		failedResponseHandler: o,
		abortSignal: r,
		fetch: i = py(),
		validateUrl: s,
		credentialedOrigin: l,
		trustedOrigin: d
	}) => {
		try {
			const c = l !== void 0 && !ho(e, l) ? {} : t,
				p = sn(c, `ai-sdk/provider-utils/${ec}`, Gr()),
				m = s ? await Ku({
					url: e,
					headers: p,
					abortSignal: r,
					fetch: i,
					trustedOrigin: d
				}) : await i(e, {
					method: "GET",
					headers: p,
					signal: r
				}),
				h = yn(m);
			if (!m.ok) {
				let g;
				try {
					g = await o({
						response: m,
						url: e,
						requestBodyValues: {}
					})
				} catch (_) {
					throw Mt(_) || He.isInstance(_) ? _ : new He({
						message: "Failed to process error response",
						cause: _,
						statusCode: m.status,
						url: e,
						responseHeaders: h,
						requestBodyValues: {}
					})
				}
				throw g.value
			}
			try {
				return await n({
					response: m,
					url: e,
					requestBodyValues: {}
				})
			} catch (g) {
				throw g instanceof Error && (Mt(g) || He.isInstance(g)) ? g : new He({
					message: "Failed to process successful response",
					cause: g,
					statusCode: m.status,
					url: e,
					responseHeaders: h,
					requestBodyValues: {}
				})
			}
		} catch (c) {
			throw Qu({
				error: c,
				url: e,
				requestBodyValues: {}
			})
		}
	};

function my(e) {
	var t, n;
	return (n = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? n : !1
}

function ur(e) {
	return e != null
}

function rO(e) {
	return typeof e == "object" && e !== null && !(e instanceof Uint8Array) && !(e instanceof URL) && !(e instanceof ArrayBuffer) && !my(e) && !("type" in e)
}

function iO({
	mediaType: e,
	url: t,
	supportedUrls: n
}) {
	t = t.toLowerCase(), e = e.toLowerCase();
	const o = !e.includes("/");
	return Object.entries(n).map(([r, i]) => {
		const s = r.toLowerCase();
		return s === "*" || s === "*/*" ? {
			mediaTypePrefix: "",
			regexes: i
		} : {
			mediaTypePrefix: s.replace(/\*/, ""),
			regexes: i
		}
	}).filter(({
		mediaTypePrefix: r
	}) => r === "" ? !0 : o ? `${e}/` === r : e.startsWith(r)).flatMap(({
		regexes: r
	}) => r).some(r => r.test(t))
}

function Jr({
	apiKey: e,
	environmentVariableName: t,
	apiKeyParameterName: n = "apiKey",
	description: o
}) {
	if (typeof e == "string") return e;
	if (e != null) throw new Gn({
		message: `${o} API key must be a string.`
	});
	if (typeof process > "u") throw new Gn({
		message: `${o} API key is missing. Pass it using the '${n}' parameter. Environment variables are not supported in this environment.`
	});
	if (e = qu[t], e == null) throw new Gn({
		message: `${o} API key is missing. Pass it using the '${n}' parameter or the ${t} environment variable.`
	});
	if (typeof e != "string") throw new Gn({
		message: `${o} API key must be a string. The value of the ${t} environment variable is not a string.`
	});
	return e
}

function tc({
	settingValue: e,
	environmentVariableName: t
}) {
	if (typeof e == "string") return e;
	if (!(e != null || typeof process > "u") && (e = qu[t], !(e == null || typeof e != "string"))) return e
}

function vn(e) {
	return e !== void 0 && e !== "provider-default"
}

function nc({
	reasoning: e,
	effortMap: t,
	warnings: n
}) {
	const o = t[e];
	if (o == null) {
		n.push({
			type: "unsupported",
			feature: "reasoning",
			details: `reasoning "${e}" is not supported by this model.`
		});
		return
	}
	return o !== e && n.push({
		type: "compatibility",
		feature: "reasoning",
		details: `reasoning "${e}" is not directly supported by this model. mapped to effort "${o}".`
	}), o
}
var hy = {
	minimal: .02,
	low: .1,
	medium: .3,
	high: .6,
	xhigh: .9
};

function oc({
	reasoning: e,
	maxOutputTokens: t,
	maxReasoningBudget: n,
	minReasoningBudget: o = 1024,
	budgetPercentages: r = hy,
	warnings: i
}) {
	const s = r[e];
	if (s == null) {
		i.push({
			type: "unsupported",
			feature: "reasoning",
			details: `reasoning "${e}" is not supported by this model.`
		});
		return
	}
	return Math.min(n, Math.max(o, Math.round(t * s)))
}

function fy(e) {
	var t;
	const [n, o = ""] = e.toLowerCase().split("/");
	return (t = {
		mpeg: "mp3",
		"x-wav": "wav",
		opus: "ogg",
		mp4: "m4a",
		"x-m4a": "m4a"
	} [o]) != null ? t : o
}
var _y = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
	gy = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;

function Sa(e) {
	const t = JSON.parse(e);
	return t === null || typeof t != "object" || _y.test(e) === !1 && gy.test(e) === !1 ? t : yy(t)
}

function yy(e) {
	let t = [e];
	for (; t.length;) {
		const n = t;
		t = [];
		for (const o of n) {
			if (Object.prototype.hasOwnProperty.call(o, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
			if (Object.prototype.hasOwnProperty.call(o, "constructor") && o.constructor !== null && typeof o.constructor == "object" && Object.prototype.hasOwnProperty.call(o.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
			for (const r in o) {
				const i = o[r];
				i && typeof i == "object" && t.push(i)
			}
		}
	}
	return e
}

function Jt(e) {
	const {
		stackTraceLimit: t
	} = Error;
	try {
		Error.stackTraceLimit = 0
	} catch {
		return Sa(e)
	}
	try {
		return Sa(e)
	} finally {
		Error.stackTraceLimit = t
	}
}

function Wr(e) {
	if (e.type === "object" || Array.isArray(e.type) && e.type.includes("object")) {
		e.additionalProperties = !1;
		const {
			properties: n
		} = e;
		if (n != null)
			for (const o of Object.keys(n)) n[o] = Kt(n[o])
	}
	e.items != null && (e.items = Array.isArray(e.items) ? e.items.map(Kt) : Kt(e.items)), e.anyOf != null && (e.anyOf = e.anyOf.map(Kt)), e.allOf != null && (e.allOf = e.allOf.map(Kt)), e.oneOf != null && (e.oneOf = e.oneOf.map(Kt));
	const {
		definitions: t
	} = e;
	if (t != null)
		for (const n of Object.keys(t)) t[n] = Kt(t[n]);
	return e
}

function Kt(e) {
	return typeof e == "boolean" ? e : Wr(e)
}
var vy = Symbol("Let zodToJsonSchema decide on which parser to use"),
	Ca = {
		name: void 0,
		$refStrategy: "root",
		basePath: ["#"],
		effectStrategy: "input",
		pipeStrategy: "all",
		dateStrategy: "format:date-time",
		mapStrategy: "entries",
		removeAdditionalStrategy: "passthrough",
		allowedAdditionalProperties: !0,
		rejectedAdditionalProperties: !1,
		definitionPath: "definitions",
		strictUnions: !1,
		definitions: {},
		errorMessages: !1,
		patternStrategy: "escape",
		applyRegexFlags: !1,
		emailStrategy: "format:email",
		base64Strategy: "contentEncoding:base64",
		nameStrategy: "ref"
	},
	by = e => typeof e == "string" ? {
		...Ca,
		name: e
	} : {
		...Ca,
		...e
	};

function dt() {
	return {}
}

function wy(e, t) {
	var n, o, r;
	const i = {
		type: "array"
	};
	return (n = e.type) != null && n._def && ((r = (o = e.type) == null ? void 0 : o._def) == null ? void 0 : r.typeName) !== ue.ZodAny && (i.items = Ne(e.type._def, {
		...t,
		currentPath: [...t.currentPath, "items"]
	})), e.minLength && (i.minItems = e.minLength.value), e.maxLength && (i.maxItems = e.maxLength.value), e.exactLength && (i.minItems = e.exactLength.value, i.maxItems = e.exactLength.value), i
}

function ky(e) {
	const t = {
		type: "integer",
		format: "int64"
	};
	if (!e.checks) return t;
	for (const n of e.checks) switch (n.kind) {
		case "min":
			n.inclusive ? t.minimum = n.value : t.exclusiveMinimum = n.value;
			break;
		case "max":
			n.inclusive ? t.maximum = n.value : t.exclusiveMaximum = n.value;
			break;
		case "multipleOf":
			t.multipleOf = n.value;
			break
	}
	return t
}

function xy() {
	return {
		type: "boolean"
	}
}

function rc(e, t) {
	return Ne(e.type._def, t)
}
var Iy = (e, t) => Ne(e.innerType._def, t);

function ic(e, t, n) {
	const o = n ?? t.dateStrategy;
	if (Array.isArray(o)) return {
		anyOf: o.map(r => ic(e, t, r))
	};
	switch (o) {
		case "string":
		case "format:date-time":
			return {
				type: "string", format: "date-time"
			};
		case "format:date":
			return {
				type: "string", format: "date"
			};
		case "integer":
			return Ty(e)
	}
}
var Ty = e => {
	const t = {
		type: "integer",
		format: "unix-time"
	};
	for (const n of e.checks) switch (n.kind) {
		case "min":
			t.minimum = n.value;
			break;
		case "max":
			t.maximum = n.value;
			break
	}
	return t
};

function Sy(e, t) {
	return {
		...Ne(e.innerType._def, t),
		default: e.defaultValue()
	}
}

function Cy(e, t) {
	return t.effectStrategy === "input" ? Ne(e.schema._def, t) : dt()
}

function Oy(e) {
	return {
		type: "string",
		enum: Array.from(e.values)
	}
}
var Ay = e => "type" in e && e.type === "string" ? !1 : "allOf" in e;

function $y(e, t) {
	const n = [Ne(e.left._def, {
			...t,
			currentPath: [...t.currentPath, "allOf", "0"]
		}), Ne(e.right._def, {
			...t,
			currentPath: [...t.currentPath, "allOf", "1"]
		})].filter(r => !!r),
		o = [];
	return n.forEach(r => {
		if (Ay(r)) o.push(...r.allOf);
		else {
			let i = r;
			if ("additionalProperties" in r && r.additionalProperties === !1) {
				const {
					additionalProperties: s,
					...l
				} = r;
				i = l
			}
			o.push(i)
		}
	}), o.length ? {
		allOf: o
	} : void 0
}

function Ey(e) {
	const t = typeof e.value;
	return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
		type: Array.isArray(e.value) ? "array" : "object"
	} : {
		type: t === "bigint" ? "integer" : t,
		const: e.value
	}
}
var Vo = void 0,
	yt = {
		cuid: /^[cC][^\s-]{8,}$/,
		cuid2: /^[0-9a-z]+$/,
		ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
		email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
		emoji: () => (Vo === void 0 && (Vo = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Vo),
		uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
		ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
		ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
		ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
		ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
		base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
		base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
		nanoid: /^[a-zA-Z0-9_-]{21}$/,
		jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
	};

function ac(e, t) {
	const n = {
		type: "string"
	};
	if (e.checks)
		for (const o of e.checks) switch (o.kind) {
			case "min":
				n.minLength = typeof n.minLength == "number" ? Math.max(n.minLength, o.value) : o.value;
				break;
			case "max":
				n.maxLength = typeof n.maxLength == "number" ? Math.min(n.maxLength, o.value) : o.value;
				break;
			case "email":
				switch (t.emailStrategy) {
					case "format:email":
						vt(n, "email", o.message, t);
						break;
					case "format:idn-email":
						vt(n, "idn-email", o.message, t);
						break;
					case "pattern:zod":
						ot(n, yt.email, o.message, t);
						break
				}
				break;
			case "url":
				vt(n, "uri", o.message, t);
				break;
			case "uuid":
				vt(n, "uuid", o.message, t);
				break;
			case "regex":
				ot(n, o.regex, o.message, t);
				break;
			case "cuid":
				ot(n, yt.cuid, o.message, t);
				break;
			case "cuid2":
				ot(n, yt.cuid2, o.message, t);
				break;
			case "startsWith":
				ot(n, RegExp(`^${Ho(o.value, t)}`), o.message, t);
				break;
			case "endsWith":
				ot(n, RegExp(`${Ho(o.value, t)}$`), o.message, t);
				break;
			case "datetime":
				vt(n, "date-time", o.message, t);
				break;
			case "date":
				vt(n, "date", o.message, t);
				break;
			case "time":
				vt(n, "time", o.message, t);
				break;
			case "duration":
				vt(n, "duration", o.message, t);
				break;
			case "length":
				n.minLength = typeof n.minLength == "number" ? Math.max(n.minLength, o.value) : o.value, n.maxLength = typeof n.maxLength == "number" ? Math.min(n.maxLength, o.value) : o.value;
				break;
			case "includes": {
				ot(n, RegExp(Ho(o.value, t)), o.message, t);
				break
			}
			case "ip": {
				o.version !== "v6" && vt(n, "ipv4", o.message, t), o.version !== "v4" && vt(n, "ipv6", o.message, t);
				break
			}
			case "base64url":
				ot(n, yt.base64url, o.message, t);
				break;
			case "jwt":
				ot(n, yt.jwt, o.message, t);
				break;
			case "cidr": {
				o.version !== "v6" && ot(n, yt.ipv4Cidr, o.message, t), o.version !== "v4" && ot(n, yt.ipv6Cidr, o.message, t);
				break
			}
			case "emoji":
				ot(n, yt.emoji(), o.message, t);
				break;
			case "ulid": {
				ot(n, yt.ulid, o.message, t);
				break
			}
			case "base64": {
				switch (t.base64Strategy) {
					case "format:binary": {
						vt(n, "binary", o.message, t);
						break
					}
					case "contentEncoding:base64": {
						n.contentEncoding = "base64";
						break
					}
					case "pattern:zod": {
						ot(n, yt.base64, o.message, t);
						break
					}
				}
				break
			}
			case "nanoid":
				ot(n, yt.nanoid, o.message, t)
		}
	return n
}

function Ho(e, t) {
	return t.patternStrategy === "escape" ? Ny(e) : e
}
var Ry = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");

function Ny(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) Ry.has(e[n]) || (t += "\\"), t += e[n];
	return t
}

function vt(e, t, n, o) {
	var r;
	e.format || (r = e.anyOf) != null && r.some(i => i.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
		format: e.format
	}), delete e.format), e.anyOf.push({
		format: t,
		...n && o.errorMessages && {
			errorMessage: {
				format: n
			}
		}
	})) : e.format = t
}

function ot(e, t, n, o) {
	var r;
	e.pattern || (r = e.allOf) != null && r.some(i => i.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
		pattern: e.pattern
	}), delete e.pattern), e.allOf.push({
		pattern: Oa(t, o),
		...n && o.errorMessages && {
			errorMessage: {
				pattern: n
			}
		}
	})) : e.pattern = Oa(t, o)
}

function Oa(e, t) {
	var n;
	if (!t.applyRegexFlags || !e.flags) return e.source;
	const o = {
			i: e.flags.includes("i"),
			m: e.flags.includes("m"),
			s: e.flags.includes("s")
		},
		r = o.i ? e.source.toLowerCase() : e.source;
	let i = "",
		s = !1,
		l = !1,
		d = !1;
	for (let c = 0; c < r.length; c++) {
		if (s) {
			i += r[c], s = !1;
			continue
		}
		if (o.i) {
			if (l) {
				if (r[c].match(/[a-z]/)) {
					d ? (i += r[c], i += `${r[c - 2]}-${r[c]}`.toUpperCase(), d = !1) : r[c + 1] === "-" && ((n = r[c + 2]) != null && n.match(/[a-z]/)) ? (i += r[c], d = !0) : i += `${r[c]}${r[c].toUpperCase()}`;
					continue
				}
			} else if (r[c].match(/[a-z]/)) {
				i += `[${r[c]}${r[c].toUpperCase()}]`;
				continue
			}
		}
		if (o.m) {
			if (r[c] === "^") {
				i += `(^|(?<=[\r
]))`;
				continue
			} else if (r[c] === "$") {
				i += `($|(?=[\r
]))`;
				continue
			}
		}
		if (o.s && r[c] === ".") {
			i += l ? `${r[c]}\r
` : `[${r[c]}\r
]`;
			continue
		}
		i += r[c], r[c] === "\\" ? s = !0 : l && r[c] === "]" ? l = !1 : !l && r[c] === "[" && (l = !0)
	}
	try {
		new RegExp(i)
	} catch {
		return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source
	}
	return i
}

function sc(e, t) {
	var n, o, r, i, s, l;
	const d = {
		type: "object",
		additionalProperties: (n = Ne(e.valueType._def, {
			...t,
			currentPath: [...t.currentPath, "additionalProperties"]
		})) != null ? n : t.allowedAdditionalProperties
	};
	if (((o = e.keyType) == null ? void 0 : o._def.typeName) === ue.ZodString && ((r = e.keyType._def.checks) != null && r.length)) {
		const {
			type: c,
			...p
		} = ac(e.keyType._def, t);
		return {
			...d,
			propertyNames: p
		}
	} else {
		if (((i = e.keyType) == null ? void 0 : i._def.typeName) === ue.ZodEnum) return {
			...d,
			propertyNames: {
				enum: e.keyType._def.values
			}
		};
		if (((s = e.keyType) == null ? void 0 : s._def.typeName) === ue.ZodBranded && e.keyType._def.type._def.typeName === ue.ZodString && ((l = e.keyType._def.type._def.checks) != null && l.length)) {
			const {
				type: c,
				...p
			} = rc(e.keyType._def, t);
			return {
				...d,
				propertyNames: p
			}
		}
	}
	return d
}

function Py(e, t) {
	if (t.mapStrategy === "record") return sc(e, t);
	const n = Ne(e.keyType._def, {
			...t,
			currentPath: [...t.currentPath, "items", "items", "0"]
		}) || dt(),
		o = Ne(e.valueType._def, {
			...t,
			currentPath: [...t.currentPath, "items", "items", "1"]
		}) || dt();
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [n, o],
			minItems: 2,
			maxItems: 2
		}
	}
}

function My(e) {
	const t = e.values,
		o = Object.keys(e.values).filter(i => typeof t[t[i]] != "number").map(i => t[i]),
		r = Array.from(new Set(o.map(i => typeof i)));
	return {
		type: r.length === 1 ? r[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: o
	}
}

function zy() {
	return {
		not: dt()
	}
}

function Dy() {
	return {
		type: "null"
	}
}
var cr = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};

function qy(e, t) {
	const n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
	if (n.every(o => o._def.typeName in cr && (!o._def.checks || !o._def.checks.length))) {
		const o = n.reduce((r, i) => {
			const s = cr[i._def.typeName];
			return s && !r.includes(s) ? [...r, s] : r
		}, []);
		return {
			type: o.length > 1 ? o : o[0]
		}
	} else if (n.every(o => o._def.typeName === "ZodLiteral" && !o.description)) {
		const o = n.reduce((r, i) => {
			const s = typeof i._def.value;
			switch (s) {
				case "string":
				case "number":
				case "boolean":
					return [...r, s];
				case "bigint":
					return [...r, "integer"];
				case "object":
					if (i._def.value === null) return [...r, "null"];
				case "symbol":
				case "undefined":
				case "function":
				default:
					return r
			}
		}, []);
		if (o.length === n.length) {
			const r = o.filter((i, s, l) => l.indexOf(i) === s);
			return {
				type: r.length > 1 ? r : r[0],
				enum: n.reduce((i, s) => i.includes(s._def.value) ? i : [...i, s._def.value], [])
			}
		}
	} else if (n.every(o => o._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: n.reduce((o, r) => [...o, ...r._def.values.filter(i => !o.includes(i))], [])
	};
	return Uy(e, t)
}
var Uy = (e, t) => {
	const n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((o, r) => Ne(o._def, {
		...t,
		currentPath: [...t.currentPath, "anyOf", `${r}`]
	})).filter(o => !!o && (!t.strictUnions || typeof o == "object" && Object.keys(o).length > 0));
	return n.length ? {
		anyOf: n
	} : void 0
};

function jy(e, t) {
	if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length)) return {
		type: [cr[e.innerType._def.typeName], "null"]
	};
	const n = Ne(e.innerType._def, {
		...t,
		currentPath: [...t.currentPath, "anyOf", "0"]
	});
	return n && {
		anyOf: [n, {
			type: "null"
		}]
	}
}

function Ly(e) {
	const t = {
		type: "number"
	};
	if (!e.checks) return t;
	for (const n of e.checks) switch (n.kind) {
		case "int":
			t.type = "integer";
			break;
		case "min":
			n.inclusive ? t.minimum = n.value : t.exclusiveMinimum = n.value;
			break;
		case "max":
			n.inclusive ? t.maximum = n.value : t.exclusiveMaximum = n.value;
			break;
		case "multipleOf":
			t.multipleOf = n.value;
			break
	}
	return t
}

function Zy(e, t) {
	const n = {
			type: "object",
			properties: {}
		},
		o = [],
		r = e.shape();
	for (const s in r) {
		let l = r[s];
		if (l === void 0 || l._def === void 0) continue;
		const d = By(l),
			c = Ne(l._def, {
				...t,
				currentPath: [...t.currentPath, "properties", s],
				propertyPath: [...t.currentPath, "properties", s]
			});
		c !== void 0 && (n.properties[s] = c, d || o.push(s))
	}
	o.length && (n.required = o);
	const i = Fy(e, t);
	return i !== void 0 && (n.additionalProperties = i), n
}

function Fy(e, t) {
	if (e.catchall._def.typeName !== "ZodNever") return Ne(e.catchall._def, {
		...t,
		currentPath: [...t.currentPath, "additionalProperties"]
	});
	switch (e.unknownKeys) {
		case "passthrough":
			return t.allowedAdditionalProperties;
		case "strict":
			return t.rejectedAdditionalProperties;
		case "strip":
			return t.removeAdditionalStrategy === "strict" ? t.allowedAdditionalProperties : t.rejectedAdditionalProperties
	}
}

function By(e) {
	try {
		return e.isOptional()
	} catch {
		return !0
	}
}
var Vy = (e, t) => {
		var n;
		if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString())) return Ne(e.innerType._def, t);
		const o = Ne(e.innerType._def, {
			...t,
			currentPath: [...t.currentPath, "anyOf", "1"]
		});
		return o ? {
			anyOf: [{
				not: dt()
			}, o]
		} : dt()
	},
	Hy = (e, t) => {
		if (t.pipeStrategy === "input") return Ne(e.in._def, t);
		if (t.pipeStrategy === "output") return Ne(e.out._def, t);
		const n = Ne(e.in._def, {
				...t,
				currentPath: [...t.currentPath, "allOf", "0"]
			}),
			o = Ne(e.out._def, {
				...t,
				currentPath: [...t.currentPath, "allOf", n ? "1" : "0"]
			});
		return {
			allOf: [n, o].filter(r => r !== void 0)
		}
	};

function Gy(e, t) {
	return Ne(e.type._def, t)
}

function Jy(e, t) {
	const o = {
		type: "array",
		uniqueItems: !0,
		items: Ne(e.valueType._def, {
			...t,
			currentPath: [...t.currentPath, "items"]
		})
	};
	return e.minSize && (o.minItems = e.minSize.value), e.maxSize && (o.maxItems = e.maxSize.value), o
}

function Wy(e, t) {
	return e.rest ? {
		type: "array",
		minItems: e.items.length,
		items: e.items.map((n, o) => Ne(n._def, {
			...t,
			currentPath: [...t.currentPath, "items", `${o}`]
		})).reduce((n, o) => o === void 0 ? n : [...n, o], []),
		additionalItems: Ne(e.rest._def, {
			...t,
			currentPath: [...t.currentPath, "additionalItems"]
		})
	} : {
		type: "array",
		minItems: e.items.length,
		maxItems: e.items.length,
		items: e.items.map((n, o) => Ne(n._def, {
			...t,
			currentPath: [...t.currentPath, "items", `${o}`]
		})).reduce((n, o) => o === void 0 ? n : [...n, o], [])
	}
}

function Ky() {
	return {
		not: dt()
	}
}

function Yy() {
	return dt()
}
var Xy = (e, t) => Ne(e.innerType._def, t),
	Qy = (e, t, n) => {
		switch (t) {
			case ue.ZodString:
				return ac(e, n);
			case ue.ZodNumber:
				return Ly(e);
			case ue.ZodObject:
				return Zy(e, n);
			case ue.ZodBigInt:
				return ky(e);
			case ue.ZodBoolean:
				return xy();
			case ue.ZodDate:
				return ic(e, n);
			case ue.ZodUndefined:
				return Ky();
			case ue.ZodNull:
				return Dy();
			case ue.ZodArray:
				return wy(e, n);
			case ue.ZodUnion:
			case ue.ZodDiscriminatedUnion:
				return qy(e, n);
			case ue.ZodIntersection:
				return $y(e, n);
			case ue.ZodTuple:
				return Wy(e, n);
			case ue.ZodRecord:
				return sc(e, n);
			case ue.ZodLiteral:
				return Ey(e);
			case ue.ZodEnum:
				return Oy(e);
			case ue.ZodNativeEnum:
				return My(e);
			case ue.ZodNullable:
				return jy(e, n);
			case ue.ZodOptional:
				return Vy(e, n);
			case ue.ZodMap:
				return Py(e, n);
			case ue.ZodSet:
				return Jy(e, n);
			case ue.ZodLazy:
				return () => e.getter()._def;
			case ue.ZodPromise:
				return Gy(e, n);
			case ue.ZodNaN:
			case ue.ZodNever:
				return zy();
			case ue.ZodEffects:
				return Cy(e, n);
			case ue.ZodAny:
				return dt();
			case ue.ZodUnknown:
				return Yy();
			case ue.ZodDefault:
				return Sy(e, n);
			case ue.ZodBranded:
				return rc(e, n);
			case ue.ZodReadonly:
				return Xy(e, n);
			case ue.ZodCatch:
				return Iy(e, n);
			case ue.ZodPipeline:
				return Hy(e, n);
			case ue.ZodFunction:
			case ue.ZodVoid:
			case ue.ZodSymbol:
				return;
			default:
				return (o => {})()
		}
	},
	ev = (e, t) => {
		let n = 0;
		for (; n < e.length && n < t.length && e[n] === t[n]; n++);
		return [(e.length - n).toString(), ...t.slice(n)].join("/")
	};

function Ne(e, t, n = !1) {
	var o;
	const r = t.seen.get(e);
	if (t.override) {
		const d = (o = t.override) == null ? void 0 : o.call(t, e, t, r, n);
		if (d !== vy) return d
	}
	if (r && !n) {
		const d = tv(r, t);
		if (d !== void 0) return d
	}
	const i = {
		def: e,
		path: t.currentPath,
		jsonSchema: void 0
	};
	t.seen.set(e, i);
	const s = Qy(e, e.typeName, t),
		l = typeof s == "function" ? Ne(s(), t) : s;
	if (l && nv(e, t, l), t.postProcess) {
		const d = t.postProcess(l, e, t);
		return i.jsonSchema = l, d
	}
	return i.jsonSchema = l, l
}
var tv = (e, t) => {
		switch (t.$refStrategy) {
			case "root":
				return {
					$ref: e.path.join("/")
				};
			case "relative":
				return {
					$ref: ev(t.currentPath, e.path)
				};
			case "none":
			case "seen":
				return e.path.length < t.currentPath.length && e.path.every((n, o) => t.currentPath[o] === n) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), dt()) : t.$refStrategy === "seen" ? dt() : void 0
		}
	},
	nv = (e, t, n) => (e.description && (n.description = e.description), n),
	ov = e => {
		const t = by(e),
			n = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
		return {
			...t,
			currentPath: n,
			propertyPath: void 0,
			seen: new Map(Object.entries(t.definitions).map(([o, r]) => [r._def, {
				def: r._def,
				path: [...t.basePath, t.definitionPath, o],
				jsonSchema: void 0
			}]))
		}
	},
	rv = (e, t) => {
		var n;
		const o = ov(t);
		let r = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((c, [p, m]) => {
			var h;
			return {
				...c,
				[p]: (h = Ne(m._def, {
					...o,
					currentPath: [...o.basePath, o.definitionPath, p]
				}, !0)) != null ? h : dt()
			}
		}, {}) : void 0;
		const i = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name,
			s = (n = Ne(e._def, i === void 0 ? o : {
				...o,
				currentPath: [...o.basePath, o.definitionPath, i]
			}, !1)) != null ? n : dt(),
			l = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
		l !== void 0 && (s.title = l);
		const d = i === void 0 ? r ? {
			...s,
			[o.definitionPath]: r
		} : s : {
			$ref: [...o.$refStrategy === "relative" ? [] : o.basePath, o.definitionPath, i].join("/"),
			[o.definitionPath]: {
				...r,
				[i]: s
			}
		};
		return d.$schema = "http://json-schema.org/draft-07/schema#", d
	},
	dr = Symbol.for("vercel.ai.schema");

function ee(e) {
	let t;
	return () => (t == null && (t = e()), t)
}

function Oo(e, {
	validate: t
} = {}) {
	return {
		[dr]: !0,
		_type: void 0,
		get jsonSchema() {
			return typeof e == "function" && (e = e()), e
		},
		validate: t
	}
}

function iv(e) {
	return typeof e == "object" && e !== null && dr in e && e[dr] === !0 && "jsonSchema" in e && "validate" in e
}

function av(e) {
	return e == null ? Oo({
		type: "object",
		properties: {},
		additionalProperties: !1
	}) : iv(e) ? e : "~standard" in e ? e["~standard"].vendor === "zod" ? Q(e) : sv(e) : e()
}

function sv(e) {
	return Oo(() => {
		if (!lv(e)) throw new Error(`Standard schema vendor '${e["~standard"].vendor}' does not support JSON Schema conversion.`);
		return Wr(e["~standard"].jsonSchema.input({
			target: "draft-07"
		}))
	}, {
		validate: async t => {
			const n = await e["~standard"].validate(t);
			return "value" in n ? {
				success: !0,
				value: n.value
			} : {
				success: !1,
				error: new On({
					value: t,
					cause: n.issues
				})
			}
		}
	})
}

function lv(e) {
	return e["~standard"].jsonSchema != null
}

function uv(e, t) {
	var n;
	const o = (n = void 0) != null ? n : !1;
	return Oo(() => rv(e, {
		$refStrategy: o ? "root" : "none"
	}), {
		validate: async r => {
			const i = await e.safeParseAsync(r);
			return i.success ? {
				success: !0,
				value: i.data
			} : {
				success: !1,
				error: i.error
			}
		}
	})
}

function cv(e, t) {
	var n;
	const o = (n = void 0) != null ? n : !1;
	return Oo(() => Wr(Eu(e, {
		target: "draft-7",
		io: "input",
		reused: o ? "ref" : "inline"
	})), {
		validate: async r => {
			const i = await jr(e, r);
			return i.success ? {
				success: !0,
				value: i.data
			} : {
				success: !1,
				error: i.error
			}
		}
	})
}

function dv(e) {
	return "_zod" in e
}

function Q(e, t) {
	return dv(e) ? cv(e) : uv(e)
}
async function Te({
	value: e,
	schema: t,
	context: n
}) {
	const o = await Kr({
		value: e,
		schema: t,
		context: n
	});
	if (!o.success) throw On.wrap({
		value: e,
		cause: o.error,
		context: n
	});
	return o.value
}
async function Kr({
	value: e,
	schema: t,
	context: n
}) {
	const o = av(t);
	try {
		if (o.validate == null) return {
			success: !0,
			value: e,
			rawValue: e
		};
		const r = await o.validate(e);
		return r.success ? {
			success: !0,
			value: r.value,
			rawValue: e
		} : {
			success: !1,
			error: On.wrap({
				value: e,
				cause: r.error,
				context: n
			}),
			rawValue: e
		}
	} catch (r) {
		return {
			success: !1,
			error: On.wrap({
				value: e,
				cause: r,
				context: n
			}),
			rawValue: e
		}
	}
}
async function lc({
	text: e,
	schema: t
}) {
	try {
		const n = Jt(e);
		return t == null ? n : await Te({
			value: n,
			schema: t
		})
	} catch (n) {
		throw ao.isInstance(n) || On.isInstance(n) ? n : new ao({
			text: e,
			cause: n
		})
	}
}
async function Ao({
	text: e,
	schema: t
}) {
	try {
		const n = Jt(e);
		return t == null ? {
			success: !0,
			value: n,
			rawValue: n
		} : await Kr({
			value: n,
			schema: t
		})
	} catch (n) {
		return {
			success: !1,
			error: ao.isInstance(n) ? n : new ao({
				text: e,
				cause: n
			}),
			rawValue: void 0
		}
	}
}

function pv({
	stream: e,
	schema: t
}) {
	return e.pipeThrough(new TextDecoderStream).pipeThrough(new qg).pipeThrough(new TransformStream({
		async transform({
			data: n
		}, o) {
			n !== "[DONE]" && o.enqueue(await Ao({
				text: n,
				schema: t
			}))
		}
	}))
}
async function xe({
	provider: e,
	providerOptions: t,
	schema: n
}) {
	if ((t == null ? void 0 : t[e]) == null) return;
	const o = await Kr({
		value: t[e],
		schema: n
	});
	if (!o.success) throw new xo({
		argument: "providerOptions",
		message: `invalid ${e} provider options`,
		cause: o.error
	});
	return o.value
}
var mv = () => globalThis.fetch,
	Ue = async ({
		url: e,
		headers: t,
		body: n,
		failedResponseHandler: o,
		successfulResponseHandler: r,
		abortSignal: i,
		fetch: s
	}) => await uc({
		url: e,
		headers: {
			"Content-Type": "application/json",
			...t
		},
		body: {
			content: JSON.stringify(n),
			values: n
		},
		failedResponseHandler: o,
		successfulResponseHandler: r,
		abortSignal: i,
		fetch: s
	}), ln = async ({
		url: e,
		headers: t,
		formData: n,
		failedResponseHandler: o,
		successfulResponseHandler: r,
		abortSignal: i,
		fetch: s
	}) => await uc({
		url: e,
		headers: t,
		body: {
			content: n,
			values: Object.fromEntries(n.entries())
		},
		failedResponseHandler: o,
		successfulResponseHandler: r,
		abortSignal: i,
		fetch: s
	}), uc = async ({
		url: e,
		headers: t = {},
		body: n,
		successfulResponseHandler: o,
		failedResponseHandler: r,
		abortSignal: i,
		fetch: s = mv()
	}) => {
		try {
			const l = await s(e, {
					method: "POST",
					headers: sn(t, `ai-sdk/provider-utils/${ec}`, Gr()),
					body: n.content,
					signal: i
				}),
				d = yn(l);
			if (!l.ok) {
				let c;
				try {
					c = await r({
						response: l,
						url: e,
						requestBodyValues: n.values
					})
				} catch (p) {
					throw Mt(p) || He.isInstance(p) ? p : new He({
						message: "Failed to process error response",
						cause: p,
						statusCode: l.status,
						url: e,
						responseHeaders: d,
						requestBodyValues: n.values
					})
				}
				throw c.value
			}
			try {
				return await o({
					response: l,
					url: e,
					requestBodyValues: n.values
				})
			} catch (c) {
				throw c instanceof Error && (Mt(c) || He.isInstance(c)) ? c : new He({
					message: "Failed to process successful response",
					cause: c,
					statusCode: l.status,
					url: e,
					responseHeaders: d,
					requestBodyValues: n.values
				})
			}
		} catch (l) {
			throw Qu({
				error: l,
				url: e,
				requestBodyValues: n.values
			})
		}
	};

function aO(e) {
	return e
}

function It({
	id: e,
	inputSchema: t
}) {
	return ({
		execute: n,
		outputSchema: o,
		needsApproval: r,
		toModelOutput: i,
		onInputStart: s,
		onInputDelta: l,
		onInputAvailable: d,
		...c
	}) => ({
		type: "provider",
		isProviderExecuted: !1,
		id: e,
		args: c,
		inputSchema: t,
		outputSchema: o,
		execute: n,
		needsApproval: r,
		toModelOutput: i,
		onInputStart: s,
		onInputDelta: l,
		onInputAvailable: d
	})
}

function Un({
	id: e,
	inputSchema: t,
	outputSchema: n
}) {
	return ({
		execute: o,
		needsApproval: r,
		toModelOutput: i,
		onInputStart: s,
		onInputDelta: l,
		onInputAvailable: d,
		...c
	}) => ({
		type: "provider",
		isProviderExecuted: !1,
		id: e,
		args: c,
		inputSchema: t,
		outputSchema: n,
		execute: o,
		needsApproval: r,
		toModelOutput: i,
		onInputStart: s,
		onInputDelta: l,
		onInputAvailable: d
	})
}

function Be({
	id: e,
	inputSchema: t,
	outputSchema: n,
	supportsDeferredResults: o
}) {
	return ({
		onInputStart: r,
		onInputDelta: i,
		onInputAvailable: s,
		...l
	}) => ({
		type: "provider",
		isProviderExecuted: !0,
		id: e,
		args: l,
		inputSchema: t,
		outputSchema: n,
		onInputStart: r,
		onInputDelta: i,
		onInputAvailable: s,
		supportsDeferredResults: o
	})
}
async function ct(e) {
	return typeof e == "function" && (e = e()), Promise.resolve(e)
}

function Ge({
	part: e
}) {
	if (Zt(e.mediaType)) return e.mediaType;
	if (e.data.type === "data") {
		const t = Yg({
			data: e.data.data,
			topLevelType: ut(e.mediaType)
		});
		if (t) return t;
		throw new Oe({
			functionality: `file of media type "${e.mediaType}" must specify subtype since it could not be auto-detected`
		})
	}
	throw new Oe({
		functionality: `file of media type "${e.mediaType}" must specify subtype since it is not passed as inline bytes`
	})
}

function zt({
	reference: e,
	provider: t
}) {
	const n = e[t];
	if (n != null) return n;
	throw new Gp({
		provider: t,
		reference: e
	})
}
var sO = ({
	maxRetries: e = 2,
	initialDelayInMs: t = 2e3,
	backoffFactor: n = 2,
	abortSignal: o,
	shouldRetry: r,
	getDelayInMs: i = ({
		exponentialBackoffDelay: l
	}) => l,
	createRetryError: s = ({
		message: l
	}) => new Error(l)
}) => async l => cc(l, {
	maxRetries: e,
	delayInMs: t,
	backoffFactor: n,
	abortSignal: o,
	shouldRetry: r,
	getDelayInMs: i,
	createRetryError: s
});
async function cc(e, {
	maxRetries: t,
	delayInMs: n,
	backoffFactor: o,
	abortSignal: r,
	shouldRetry: i,
	getDelayInMs: s,
	createRetryError: l
}, d = []) {
	try {
		return await e()
	} catch (c) {
		if (Mt(c) || t === 0) throw c;
		const p = $r(c),
			m = [...d, c],
			h = m.length;
		if (h > t) throw l({
			message: `Failed after ${h} attempts. Last error: ${p}`,
			reason: "maxRetriesExceeded",
			errors: m
		});
		if (await i(c) && h <= t) return await Lt(s({
			error: c,
			exponentialBackoffDelay: n
		}), {
			abortSignal: r
		}), cc(e, {
			maxRetries: t,
			delayInMs: o * n,
			backoffFactor: o,
			abortSignal: r,
			shouldRetry: i,
			getDelayInMs: s,
			createRetryError: l
		}, m);
		throw h === 1 ? c : l({
			message: `Failed after ${h} attempts with non-retryable error: '${p}'`,
			reason: "errorNotRetryable",
			errors: m
		})
	}
}
var hv = new TextDecoder;
async function dc({
	response: e,
	url: t
}) {
	return hv.decode(await Xu({
		response: e,
		url: t
	}))
}
var Bt = ({
	errorSchema: e,
	errorToMessage: t,
	isRetryable: n
}) => async ({
	response: o,
	url: r,
	requestBodyValues: i
}) => {
	const s = await dc({
			response: o,
			url: r
		}),
		l = yn(o);
	if (s.trim() === "") return {
		responseHeaders: l,
		value: new He({
			message: o.statusText,
			url: r,
			requestBodyValues: i,
			statusCode: o.status,
			responseHeaders: l,
			responseBody: s,
			isRetryable: n == null ? void 0 : n(o)
		})
	};
	try {
		const d = await lc({
			text: s,
			schema: e
		});
		return {
			responseHeaders: l,
			value: new He({
				message: t(d),
				url: r,
				requestBodyValues: i,
				statusCode: o.status,
				responseHeaders: l,
				responseBody: s,
				data: d,
				isRetryable: n == null ? void 0 : n(o, d)
			})
		}
	} catch {
		return {
			responseHeaders: l,
			value: new He({
				message: o.statusText,
				url: r,
				requestBodyValues: i,
				statusCode: o.status,
				responseHeaders: l,
				responseBody: s,
				isRetryable: n == null ? void 0 : n(o)
			})
		}
	}
}, Dt = e => async ({
	response: t
}) => {
	const n = yn(t);
	if (t.body == null) throw new Up({});
	return {
		responseHeaders: n,
		value: pv({
			stream: t.body,
			schema: e
		})
	}
}, Me = e => async ({
	response: t,
	url: n,
	requestBodyValues: o
}) => {
	const r = await dc({
			response: t,
			url: n
		}),
		i = await Ao({
			text: r,
			schema: e
		}),
		s = yn(t);
	if (!i.success) throw new He({
		message: "Invalid JSON response",
		cause: i.error,
		statusCode: t.status,
		responseHeaders: s,
		responseBody: r,
		url: n,
		requestBodyValues: o
	});
	return {
		responseHeaders: s,
		value: i.value,
		rawValue: i.rawValue
	}
}, fv = () => async ({
	response: e,
	url: t,
	requestBodyValues: n
}) => {
	const o = yn(e);
	if (!e.body) throw new He({
		message: "Response body is empty",
		url: t,
		requestBodyValues: n,
		statusCode: e.status,
		responseHeaders: o,
		responseBody: void 0
	});
	try {
		const r = await e.arrayBuffer();
		return {
			responseHeaders: o,
			value: new Uint8Array(r)
		}
	} catch (r) {
		throw new He({
			message: "Failed to read response as array buffer",
			url: t,
			requestBodyValues: n,
			statusCode: e.status,
			responseHeaders: o,
			responseBody: void 0,
			cause: r
		})
	}
};

function fo(e) {
	if (e == null) return !0;
	const t = typeof e;
	return t === "string" || t === "number" || t === "boolean" ? !0 : t === "function" || t === "symbol" || t === "bigint" ? !1 : Array.isArray(e) ? e.every(fo) : Object.getPrototypeOf(e) === Object.prototype ? Object.values(e).every(fo) : !1
}

function tt(e) {
	const t = {};
	for (const [n, o] of Object.entries(e.config))
		if (n === "headers") {
			const r = _v(o);
			fo(r) && (t[n] = r)
		} else fo(o) && (t[n] = o);
	return {
		modelId: e.modelId,
		config: t
	}
}

function _v(e) {
	let t = e;
	if (typeof e == "function" && (t = e()), t instanceof Promise) throw new Error("Promise returned from resolveSync");
	return t
}
var pc = class {
		constructor(e, t = {}) {
			this.toolCalls = [];
			var n, o;
			this.controller = e, this._generateId = (n = t.generateId) != null ? n : ze, this.typeValidation = (o = t.typeValidation) != null ? o : "none", this.extractMetadata = t.extractMetadata, this.buildToolCallProviderMetadata = t.buildToolCallProviderMetadata
		}
		processDelta(e) {
			var t;
			const n = (t = e.index) != null ? t : this.toolCalls.length;
			this.toolCalls[n] == null ? this.processNewToolCall(n, e) : this.processExistingToolCall(n, e)
		}
		flush() {
			for (const e of this.toolCalls) e.hasFinished || this.finishToolCall(e)
		}
		processNewToolCall(e, t) {
			var n, o, r;
			if (this.typeValidation === "required") {
				if (t.type !== "function") throw new Hn({
					data: t,
					message: "Expected 'function' type."
				})
			} else if (this.typeValidation === "if-present" && t.type != null && t.type !== "function") throw new Hn({
				data: t,
				message: "Expected 'function' type."
			});
			if (t.id == null) throw new Hn({
				data: t,
				message: "Expected 'id' to be a string."
			});
			if (((n = t.function) == null ? void 0 : n.name) == null) throw new Hn({
				data: t,
				message: "Expected 'function.name' to be a string."
			});
			this.controller.enqueue({
				type: "tool-input-start",
				id: t.id,
				toolName: t.function.name
			});
			const i = (o = this.extractMetadata) == null ? void 0 : o.call(this, t);
			this.toolCalls[e] = {
				id: t.id,
				type: "function",
				function: {
					name: t.function.name,
					arguments: (r = t.function.arguments) != null ? r : ""
				},
				hasFinished: !1,
				metadata: i
			};
			const s = this.toolCalls[e];
			s.function.arguments.length > 0 && this.controller.enqueue({
				type: "tool-input-delta",
				id: s.id,
				delta: s.function.arguments
			})
		}
		processExistingToolCall(e, t) {
			var n;
			const o = this.toolCalls[e];
			o.hasFinished || ((n = t.function) == null ? void 0 : n.arguments) != null && (o.function.arguments += t.function.arguments, this.controller.enqueue({
				type: "tool-input-delta",
				id: o.id,
				delta: t.function.arguments
			}))
		}
		finishToolCall(e) {
			var t, n;
			this.controller.enqueue({
				type: "tool-input-end",
				id: e.id
			});
			const o = (t = this.buildToolCallProviderMetadata) == null ? void 0 : t.call(this, e.metadata);
			this.controller.enqueue({
				type: "tool-call",
				toolCallId: (n = e.id) != null ? n : this._generateId(),
				toolName: e.function.name,
				input: e.function.arguments,
				...o ? {
					providerMetadata: o
				} : {}
			}), e.hasFinished = !0
		}
	},
	lO = "transcription-stream.start",
	uO = "transcription-stream.audio-done";

function cO(e) {
	let t;
	try {
		t = Jt(e)
	} catch {
		return
	}
	if (t == null || typeof t != "object" || Array.isArray(t)) return;
	const n = t;
	switch (n.type) {
		case "stream-start":
			return Array.isArray(n.warnings) && n.warnings.every(gv) ? n : void 0;
		case "transcript-delta":
			return kt(n.delta) && Xe(n.id, kt) && Xe(n.providerMetadata, tn) ? n : void 0;
		case "transcript-partial":
			return kt(n.text) && Xe(n.id, kt) && Xe(n.startSecond, Et) && Xe(n.durationInSeconds, Et) && Xe(n.channelIndex, Et) && Xe(n.providerMetadata, tn) ? n : void 0;
		case "transcript-final":
			return kt(n.text) && Xe(n.id, kt) && Xe(n.startSecond, Et) && Xe(n.endSecond, Et) && Xe(n.channelIndex, Et) && Xe(n.providerMetadata, tn) ? n : void 0;
		case "finish":
			return kt(n.text) && Array.isArray(n.segments) && n.segments.every(yv) && Xe(n.language, kt) && Xe(n.durationInSeconds, Et) && Xe(n.providerMetadata, tn) ? n : void 0;
		case "response-metadata": {
			if (!(Xe(n.modelId, kt) && Xe(n.headers, tn))) return;
			const o = n.timestamp;
			if (o == null) return {
				...n,
				timestamp: void 0
			};
			if (typeof o != "string") return;
			const r = new Date(o);
			return Number.isNaN(r.getTime()) ? void 0 : {
				...n,
				timestamp: r
			}
		}
		case "raw":
			return "rawValue" in n ? n : void 0;
		case "error":
			return "error" in n ? n : void 0;
		default:
			return
	}
}

function kt(e) {
	return typeof e == "string"
}

function Et(e) {
	return typeof e == "number"
}

function Xe(e, t) {
	return e === void 0 || t(e)
}

function tn(e) {
	return typeof e == "object" && e != null && !Array.isArray(e)
}

function gv(e) {
	return tn(e) && kt(e.type)
}

function yv(e) {
	return tn(e) && kt(e.text) && Et(e.startSecond) && Et(e.endSecond)
}

function mc(e) {
	if ((e == null ? void 0 : e.trim()) === "") throw new xo({
		argument: "baseURL",
		message: "baseURL must be a non-empty string."
	});
	return e
}

function $o(e) {
	return e == null ? void 0 : e.replace(/\/$/, "")
}

function dO(e) {
	return e != null && typeof e.execute == "function"
}

function vv(e) {
	return e != null && typeof e[Symbol.asyncIterator] == "function"
}
async function* pO({
	tool: e,
	input: t,
	options: n
}) {
	const o = e.execute(t, n);
	if (vv(o)) {
		let r;
		for await (const i of o) r = i, yield {
			type: "preliminary",
			output: i
		};
		yield {
			type: "final",
			output: r
		}
	} else yield {
		type: "final",
		output: await o
	}
}
var bv = ee(() => Q(u({
		type: f("error"),
		error: u({
			type: a(),
			message: a()
		})
	}))),
	En = Bt({
		errorSchema: bv,
		errorToMessage: e => e.error.message
	}),
	wv = ee(() => Q(u({
		id: a(),
		type: f("file"),
		filename: a(),
		mime_type: a(),
		size_bytes: y(),
		created_at: a(),
		downloadable: _e().nullish()
	}))),
	kv = class {
		constructor(e) {
			this.config = e, this.specificationVersion = "v4"
		}
		get provider() {
			return this.config.provider
		}
		async uploadFile({
			data: e,
			mediaType: t,
			filename: n
		}) {
			var o, r;
			const i = Dn(e),
				s = new Blob([i], {
					type: t
				}),
				l = new FormData;
			n != null ? l.append("file", s, n) : l.append("file", s);
			const {
				value: d
			} = await ln({
				url: `${this.config.baseURL}/files`,
				headers: Ce(this.config.headers(), {
					"anthropic-beta": "files-api-2025-04-14"
				}),
				formData: l,
				failedResponseHandler: En,
				successfulResponseHandler: Me(wv),
				fetch: this.config.fetch
			});
			return {
				warnings: [],
				providerReference: {
					anthropic: d.id
				},
				mediaType: (o = d.mime_type) != null ? o : t,
				filename: (r = d.filename) != null ? r : n,
				providerMetadata: {
					anthropic: {
						filename: d.filename,
						mimeType: d.mime_type,
						sizeBytes: d.size_bytes,
						createdAt: d.created_at,
						...d.downloadable != null ? {
							downloadable: d.downloadable
						} : {}
					}
				}
			}
		}
	},
	hc = u({
		type: a(),
		category: a().nullish(),
		explanation: a().nullish(),
		recommended_model: a().nullish()
	}),
	xv = ee(() => Q(u({
		type: f("message"),
		id: a().nullish(),
		model: a().nullish(),
		content: R(ye("type", [u({
			type: f("text"),
			text: a(),
			citations: R(ye("type", [u({
				type: f("web_search_result_location"),
				cited_text: a(),
				url: a(),
				title: a(),
				encrypted_index: a()
			}), u({
				type: f("page_location"),
				cited_text: a(),
				document_index: y(),
				document_title: a().nullable(),
				start_page_number: y(),
				end_page_number: y()
			}), u({
				type: f("char_location"),
				cited_text: a(),
				document_index: y(),
				document_title: a().nullable(),
				start_char_index: y(),
				end_char_index: y()
			})])).optional()
		}), u({
			type: f("thinking"),
			thinking: a(),
			signature: a()
		}), u({
			type: f("redacted_thinking"),
			data: a()
		}), u({
			type: f("compaction"),
			content: a()
		}), u({
			type: f("tool_use"),
			id: a(),
			name: a(),
			input: Se(),
			caller: le([u({
				type: f("code_execution_20250825"),
				tool_id: a()
			}), u({
				type: f("code_execution_20260120"),
				tool_id: a()
			}), u({
				type: f("direct")
			})]).optional()
		}), u({
			type: f("server_tool_use"),
			id: a(),
			name: a(),
			input: ke(a(), Se()).nullish(),
			caller: le([u({
				type: f("code_execution_20260120"),
				tool_id: a()
			}), u({
				type: f("direct")
			})]).optional()
		}), u({
			type: f("mcp_tool_use"),
			id: a(),
			name: a(),
			input: Se(),
			server_name: a()
		}), u({
			type: f("mcp_tool_result"),
			tool_use_id: a(),
			is_error: _e(),
			content: R(le([a(), u({
				type: f("text"),
				text: a()
			})]))
		}), u({
			type: f("web_fetch_tool_result"),
			tool_use_id: a(),
			content: le([u({
				type: f("web_fetch_result"),
				url: a(),
				retrieved_at: a(),
				content: u({
					type: f("document"),
					title: a().nullable(),
					citations: u({
						enabled: _e()
					}).optional(),
					source: le([u({
						type: f("base64"),
						media_type: f("application/pdf"),
						data: a()
					}), u({
						type: f("text"),
						media_type: f("text/plain"),
						data: a()
					})])
				})
			}), u({
				type: f("web_fetch_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("web_search_tool_result"),
			tool_use_id: a(),
			content: le([R(u({
				type: f("web_search_result"),
				url: a(),
				title: a(),
				encrypted_content: a(),
				page_age: a().nullish()
			})), u({
				type: f("web_search_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("code_execution_tool_result"),
			tool_use_id: a(),
			content: le([u({
				type: f("code_execution_result"),
				stdout: a(),
				stderr: a(),
				return_code: y(),
				content: R(u({
					type: f("code_execution_output"),
					file_id: a()
				})).optional().default([])
			}), u({
				type: f("encrypted_code_execution_result"),
				encrypted_stdout: a(),
				stderr: a(),
				return_code: y(),
				content: R(u({
					type: f("code_execution_output"),
					file_id: a()
				})).optional().default([])
			}), u({
				type: f("code_execution_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("bash_code_execution_tool_result"),
			tool_use_id: a(),
			content: ye("type", [u({
				type: f("bash_code_execution_result"),
				content: R(u({
					type: f("bash_code_execution_output"),
					file_id: a()
				})),
				stdout: a(),
				stderr: a(),
				return_code: y()
			}), u({
				type: f("bash_code_execution_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("text_editor_code_execution_tool_result"),
			tool_use_id: a(),
			content: ye("type", [u({
				type: f("text_editor_code_execution_tool_result_error"),
				error_code: a()
			}), u({
				type: f("text_editor_code_execution_view_result"),
				content: a(),
				file_type: a(),
				num_lines: y().nullable(),
				start_line: y().nullable(),
				total_lines: y().nullable()
			}), u({
				type: f("text_editor_code_execution_create_result"),
				is_file_update: _e()
			}), u({
				type: f("text_editor_code_execution_str_replace_result"),
				lines: R(a()).nullable(),
				new_lines: y().nullable(),
				new_start: y().nullable(),
				old_lines: y().nullable(),
				old_start: y().nullable()
			})])
		}), u({
			type: f("tool_search_tool_result"),
			tool_use_id: a(),
			content: le([u({
				type: f("tool_search_tool_search_result"),
				tool_references: R(u({
					type: f("tool_reference"),
					tool_name: a()
				}))
			}), u({
				type: f("tool_search_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("advisor_tool_result"),
			tool_use_id: a(),
			content: ye("type", [u({
				type: f("advisor_result"),
				text: a()
			}), u({
				type: f("advisor_redacted_result"),
				encrypted_content: a()
			}), u({
				type: f("advisor_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("fallback")
		})])),
		stop_reason: a().nullish(),
		stop_sequence: a().nullish(),
		stop_details: hc.nullish(),
		usage: St({
			input_tokens: y(),
			output_tokens: y(),
			cache_creation_input_tokens: y().nullish(),
			cache_read_input_tokens: y().nullish(),
			iterations: R(u({
				type: le([f("compaction"), f("message"), f("advisor_message"), f("fallback_message")]),
				model: a().nullish(),
				input_tokens: y(),
				output_tokens: y(),
				cache_creation_input_tokens: y().nullish(),
				cache_read_input_tokens: y().nullish()
			})).nullish()
		}),
		container: u({
			expires_at: a(),
			id: a(),
			skills: R(u({
				type: le([f("anthropic"), f("custom")]),
				skill_id: a(),
				version: a()
			})).nullish()
		}).nullish(),
		context_management: u({
			applied_edits: R(le([u({
				type: f("clear_tool_uses_20250919"),
				cleared_tool_uses: y(),
				cleared_input_tokens: y()
			}), u({
				type: f("clear_thinking_20251015"),
				cleared_thinking_turns: y(),
				cleared_input_tokens: y()
			}), u({
				type: f("compact_20260112")
			})]))
		}).nullish()
	}))),
	Iv = ee(() => Q(ye("type", [u({
		type: f("message_start"),
		message: u({
			id: a().nullish(),
			model: a().nullish(),
			role: a().nullish(),
			usage: St({
				input_tokens: y(),
				cache_creation_input_tokens: y().nullish(),
				cache_read_input_tokens: y().nullish()
			}),
			content: R(ye("type", [u({
				type: f("tool_use"),
				id: a(),
				name: a(),
				input: Se(),
				caller: le([u({
					type: f("code_execution_20250825"),
					tool_id: a()
				}), u({
					type: f("code_execution_20260120"),
					tool_id: a()
				}), u({
					type: f("direct")
				})]).optional()
			})])).nullish(),
			stop_reason: a().nullish(),
			container: u({
				expires_at: a(),
				id: a()
			}).nullish()
		})
	}), u({
		type: f("content_block_start"),
		index: y(),
		content_block: ye("type", [u({
			type: f("text"),
			text: a()
		}), u({
			type: f("thinking"),
			thinking: a()
		}), u({
			type: f("tool_use"),
			id: a(),
			name: a(),
			input: ke(a(), Se()).optional(),
			caller: le([u({
				type: f("code_execution_20250825"),
				tool_id: a()
			}), u({
				type: f("code_execution_20260120"),
				tool_id: a()
			}), u({
				type: f("direct")
			})]).optional()
		}), u({
			type: f("redacted_thinking"),
			data: a()
		}), u({
			type: f("compaction"),
			content: a().nullish()
		}), u({
			type: f("server_tool_use"),
			id: a(),
			name: a(),
			input: ke(a(), Se()).nullish(),
			caller: le([u({
				type: f("code_execution_20260120"),
				tool_id: a()
			}), u({
				type: f("direct")
			})]).optional()
		}), u({
			type: f("mcp_tool_use"),
			id: a(),
			name: a(),
			input: Se(),
			server_name: a()
		}), u({
			type: f("mcp_tool_result"),
			tool_use_id: a(),
			is_error: _e(),
			content: R(le([a(), u({
				type: f("text"),
				text: a()
			})]))
		}), u({
			type: f("web_fetch_tool_result"),
			tool_use_id: a(),
			content: le([u({
				type: f("web_fetch_result"),
				url: a(),
				retrieved_at: a(),
				content: u({
					type: f("document"),
					title: a().nullable(),
					citations: u({
						enabled: _e()
					}).optional(),
					source: le([u({
						type: f("base64"),
						media_type: f("application/pdf"),
						data: a()
					}), u({
						type: f("text"),
						media_type: f("text/plain"),
						data: a()
					})])
				})
			}), u({
				type: f("web_fetch_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("web_search_tool_result"),
			tool_use_id: a(),
			content: le([R(u({
				type: f("web_search_result"),
				url: a(),
				title: a(),
				encrypted_content: a(),
				page_age: a().nullish()
			})), u({
				type: f("web_search_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("code_execution_tool_result"),
			tool_use_id: a(),
			content: le([u({
				type: f("code_execution_result"),
				stdout: a(),
				stderr: a(),
				return_code: y(),
				content: R(u({
					type: f("code_execution_output"),
					file_id: a()
				})).optional().default([])
			}), u({
				type: f("encrypted_code_execution_result"),
				encrypted_stdout: a(),
				stderr: a(),
				return_code: y(),
				content: R(u({
					type: f("code_execution_output"),
					file_id: a()
				})).optional().default([])
			}), u({
				type: f("code_execution_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("bash_code_execution_tool_result"),
			tool_use_id: a(),
			content: ye("type", [u({
				type: f("bash_code_execution_result"),
				content: R(u({
					type: f("bash_code_execution_output"),
					file_id: a()
				})),
				stdout: a(),
				stderr: a(),
				return_code: y()
			}), u({
				type: f("bash_code_execution_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("text_editor_code_execution_tool_result"),
			tool_use_id: a(),
			content: ye("type", [u({
				type: f("text_editor_code_execution_tool_result_error"),
				error_code: a()
			}), u({
				type: f("text_editor_code_execution_view_result"),
				content: a(),
				file_type: a(),
				num_lines: y().nullable(),
				start_line: y().nullable(),
				total_lines: y().nullable()
			}), u({
				type: f("text_editor_code_execution_create_result"),
				is_file_update: _e()
			}), u({
				type: f("text_editor_code_execution_str_replace_result"),
				lines: R(a()).nullable(),
				new_lines: y().nullable(),
				new_start: y().nullable(),
				old_lines: y().nullable(),
				old_start: y().nullable()
			})])
		}), u({
			type: f("tool_search_tool_result"),
			tool_use_id: a(),
			content: le([u({
				type: f("tool_search_tool_search_result"),
				tool_references: R(u({
					type: f("tool_reference"),
					tool_name: a()
				}))
			}), u({
				type: f("tool_search_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("advisor_tool_result"),
			tool_use_id: a(),
			content: ye("type", [u({
				type: f("advisor_result"),
				text: a()
			}), u({
				type: f("advisor_redacted_result"),
				encrypted_content: a()
			}), u({
				type: f("advisor_tool_result_error"),
				error_code: a()
			})])
		}), u({
			type: f("fallback")
		})])
	}), u({
		type: f("content_block_delta"),
		index: y(),
		delta: ye("type", [u({
			type: f("input_json_delta"),
			partial_json: a()
		}), u({
			type: f("text_delta"),
			text: a()
		}), u({
			type: f("thinking_delta"),
			thinking: a()
		}), u({
			type: f("signature_delta"),
			signature: a()
		}), u({
			type: f("compaction_delta"),
			content: a().nullish()
		}), u({
			type: f("citations_delta"),
			citation: ye("type", [u({
				type: f("web_search_result_location"),
				cited_text: a(),
				url: a(),
				title: a(),
				encrypted_index: a()
			}), u({
				type: f("page_location"),
				cited_text: a(),
				document_index: y(),
				document_title: a().nullable(),
				start_page_number: y(),
				end_page_number: y()
			}), u({
				type: f("char_location"),
				cited_text: a(),
				document_index: y(),
				document_title: a().nullable(),
				start_char_index: y(),
				end_char_index: y()
			})])
		})])
	}), u({
		type: f("content_block_stop"),
		index: y()
	}), u({
		type: f("error"),
		error: u({
			type: a(),
			message: a()
		})
	}), u({
		type: f("message_delta"),
		delta: u({
			stop_reason: a().nullish(),
			stop_sequence: a().nullish(),
			stop_details: hc.nullish(),
			container: u({
				expires_at: a(),
				id: a(),
				skills: R(u({
					type: le([f("anthropic"), f("custom")]),
					skill_id: a(),
					version: a()
				})).nullish()
			}).nullish()
		}),
		usage: St({
			input_tokens: y().nullish(),
			output_tokens: y(),
			cache_creation_input_tokens: y().nullish(),
			cache_read_input_tokens: y().nullish(),
			iterations: R(u({
				type: le([f("compaction"), f("message"), f("advisor_message"), f("fallback_message")]),
				model: a().nullish(),
				input_tokens: y(),
				output_tokens: y(),
				cache_creation_input_tokens: y().nullish(),
				cache_read_input_tokens: y().nullish()
			})).nullish()
		}),
		context_management: u({
			applied_edits: R(le([u({
				type: f("clear_tool_uses_20250919"),
				cleared_tool_uses: y(),
				cleared_input_tokens: y()
			}), u({
				type: f("clear_thinking_20251015"),
				cleared_thinking_turns: y(),
				cleared_input_tokens: y()
			}), u({
				type: f("compact_20260112")
			})]))
		}).nullish()
	}), u({
		type: f("message_stop")
	}), u({
		type: f("ping")
	})]))),
	Tv = ee(() => Q(u({
		signature: a().optional(),
		redactedData: a().optional()
	}))),
	Go = u({
		containerUpload: _e().optional(),
		citations: u({
			enabled: _e()
		}).optional(),
		title: a().optional(),
		context: a().optional()
	}),
	Aa = u({
		sendReasoning: _e().optional(),
		structuredOutputMode: Y(["outputFormat", "jsonTool", "auto"]).optional(),
		thinking: ye("type", [u({
			type: f("adaptive"),
			display: Y(["omitted", "summarized"]).optional()
		}), u({
			type: f("enabled"),
			budgetTokens: y().optional()
		}), u({
			type: f("disabled")
		})]).optional(),
		disableParallelToolUse: _e().optional(),
		cacheControl: u({
			type: f("ephemeral"),
			ttl: le([f("5m"), f("1h")]).optional()
		}).optional(),
		metadata: u({
			userId: a().optional()
		}).optional(),
		mcpServers: R(u({
			type: f("url"),
			name: a(),
			url: a(),
			authorizationToken: a().nullish(),
			toolConfiguration: u({
				enabled: _e().nullish(),
				allowedTools: R(a()).nullish()
			}).nullish()
		})).optional(),
		container: u({
			id: a().optional(),
			skills: R(ye("type", [u({
				type: f("anthropic"),
				skillId: a(),
				version: a().optional()
			}), u({
				type: f("custom"),
				providerReference: ke(a(), a()),
				version: a().optional()
			})])).optional()
		}).optional(),
		toolStreaming: _e().optional(),
		effort: Y(["low", "medium", "high", "xhigh", "max"]).optional(),
		taskBudget: u({
			type: f("tokens"),
			total: y().int().min(2e4),
			remaining: y().int().min(0).optional()
		}).optional(),
		speed: Y(["fast", "standard"]).optional(),
		inferenceGeo: Y(["us", "global"]).optional(),
		fallbacks: R(u({
			model: a(),
			max_tokens: y().int().optional(),
			thinking: ke(a(), Se()).optional(),
			output_config: ke(a(), Se()).optional(),
			speed: Y(["fast", "standard"]).optional()
		})).optional(),
		anthropicBeta: R(a()).optional(),
		contextManagement: u({
			edits: R(ye("type", [u({
				type: f("clear_tool_uses_20250919"),
				trigger: ye("type", [u({
					type: f("input_tokens"),
					value: y()
				}), u({
					type: f("tool_uses"),
					value: y()
				})]).optional(),
				keep: u({
					type: f("tool_uses"),
					value: y()
				}).optional(),
				clearAtLeast: u({
					type: f("input_tokens"),
					value: y()
				}).optional(),
				clearToolInputs: _e().optional(),
				excludeTools: R(a()).optional()
			}), u({
				type: f("clear_thinking_20251015"),
				keep: le([f("all"), u({
					type: f("thinking_turns"),
					value: y()
				})]).optional()
			}), u({
				type: f("compact_20260112"),
				trigger: u({
					type: f("input_tokens"),
					value: y()
				}).optional(),
				pauseAfterCompaction: _e().optional(),
				instructions: a().optional()
			})]))
		}).optional()
	}),
	$a = 4;

function Sv(e) {
	var t;
	const n = e == null ? void 0 : e.anthropic;
	return (t = n == null ? void 0 : n.cacheControl) != null ? t : n == null ? void 0 : n.cache_control
}
var Yr = class {
		constructor() {
			this.breakpointCount = 0, this.warnings = []
		}
		getCacheControl(e, t) {
			const n = Sv(e);
			if (n) {
				if (!t.canCache) {
					this.warnings.push({
						type: "unsupported",
						feature: "cache_control on non-cacheable context",
						details: `cache_control cannot be set on ${t.type}. It will be ignored.`
					});
					return
				}
				if (this.breakpointCount++, this.breakpointCount > $a) {
					this.warnings.push({
						type: "unsupported",
						feature: "cacheControl breakpoint limit",
						details: `Maximum ${$a} cache breakpoints exceeded (found ${this.breakpointCount}). This breakpoint will be ignored.`
					});
					return
				}
				return n
			}
		}
		getWarnings() {
			return this.warnings
		}
	},
	Cv = ee(() => Q(u({
		model: a(),
		maxUses: y().optional(),
		caching: u({
			type: f("ephemeral"),
			ttl: le([f("5m"), f("1h")])
		}).optional()
	}))),
	fc = ee(() => Q(ye("type", [u({
		type: f("advisor_result"),
		text: a()
	}), u({
		type: f("advisor_redacted_result"),
		encryptedContent: a()
	}), u({
		type: f("advisor_tool_result_error"),
		errorCode: a()
	})]))),
	Ov = ee(() => Q(u({}).strict())),
	Av = Be({
		id: "anthropic.advisor_20260301",
		inputSchema: Ov,
		outputSchema: fc,
		supportsDeferredResults: !0
	}),
	$v = e => Av(e),
	Ev = ee(() => Q(u({
		maxCharacters: y().optional()
	}))),
	Rv = ee(() => Q(u({
		command: Y(["view", "create", "str_replace", "insert"]),
		path: a(),
		file_text: a().optional(),
		insert_line: y().int().optional(),
		new_str: a().optional(),
		insert_text: a().optional(),
		old_str: a().optional(),
		view_range: R(y().int()).optional()
	}))),
	Nv = It({
		id: "anthropic.text_editor_20250728",
		inputSchema: Rv
	}),
	Pv = (e = {}) => Nv(e),
	Mv = ee(() => Q(u({
		maxUses: y().optional(),
		allowedDomains: R(a()).optional(),
		blockedDomains: R(a()).optional(),
		userLocation: u({
			type: f("approximate"),
			city: a().optional(),
			region: a().optional(),
			country: a().optional(),
			timezone: a().optional()
		}).optional()
	}))),
	zv = ee(() => Q(R(u({
		url: a(),
		title: a().nullable(),
		pageAge: a().nullable(),
		encryptedContent: a(),
		type: f("web_search_result")
	})))),
	Dv = ee(() => Q(u({
		query: a()
	}))),
	qv = Be({
		id: "anthropic.web_search_20260209",
		inputSchema: Dv,
		outputSchema: zv,
		supportsDeferredResults: !0
	}),
	Uv = (e = {}) => qv(e),
	jv = ee(() => Q(u({
		maxUses: y().optional(),
		allowedDomains: R(a()).optional(),
		blockedDomains: R(a()).optional(),
		userLocation: u({
			type: f("approximate"),
			city: a().optional(),
			region: a().optional(),
			country: a().optional(),
			timezone: a().optional()
		}).optional()
	}))),
	_c = ee(() => Q(R(u({
		url: a(),
		title: a().nullable(),
		pageAge: a().nullable(),
		encryptedContent: a(),
		type: f("web_search_result")
	})))),
	Lv = ee(() => Q(u({
		query: a()
	}))),
	Zv = Be({
		id: "anthropic.web_search_20250305",
		inputSchema: Lv,
		outputSchema: _c,
		supportsDeferredResults: !0
	}),
	Fv = (e = {}) => Zv(e),
	Bv = ee(() => Q(u({
		maxUses: y().optional(),
		allowedDomains: R(a()).optional(),
		blockedDomains: R(a()).optional(),
		citations: u({
			enabled: _e()
		}).optional(),
		maxContentTokens: y().optional()
	}))),
	Vv = ee(() => Q(u({
		type: f("web_fetch_result"),
		url: a(),
		content: u({
			type: f("document"),
			title: a().nullable(),
			citations: u({
				enabled: _e()
			}).optional(),
			source: le([u({
				type: f("base64"),
				mediaType: f("application/pdf"),
				data: a()
			}), u({
				type: f("text"),
				mediaType: f("text/plain"),
				data: a()
			})])
		}),
		retrievedAt: a().nullable()
	}))),
	Hv = ee(() => Q(u({
		url: a()
	}))),
	Gv = Be({
		id: "anthropic.web_fetch_20260209",
		inputSchema: Hv,
		outputSchema: Vv,
		supportsDeferredResults: !0
	}),
	Jv = (e = {}) => Gv(e),
	Wv = ee(() => Q(u({
		maxUses: y().optional(),
		allowedDomains: R(a()).optional(),
		blockedDomains: R(a()).optional(),
		citations: u({
			enabled: _e()
		}).optional(),
		maxContentTokens: y().optional()
	}))),
	gc = ee(() => Q(u({
		type: f("web_fetch_result"),
		url: a(),
		content: u({
			type: f("document"),
			title: a().nullable(),
			citations: u({
				enabled: _e()
			}).optional(),
			source: le([u({
				type: f("base64"),
				mediaType: f("application/pdf"),
				data: a()
			}), u({
				type: f("text"),
				mediaType: f("text/plain"),
				data: a()
			})])
		}),
		retrievedAt: a().nullable()
	}))),
	Kv = ee(() => Q(u({
		url: a()
	}))),
	Yv = Be({
		id: "anthropic.web_fetch_20250910",
		inputSchema: Kv,
		outputSchema: gc,
		supportsDeferredResults: !0
	}),
	Xv = (e = {}) => Yv(e);
async function Qv({
	tools: e,
	toolChoice: t,
	disableParallelToolUse: n,
	cacheControlValidator: o,
	supportsStructuredOutput: r,
	supportsStrictTools: i,
	defaultEagerInputStreaming: s = !1
}) {
	var l, d;
	e = e != null && e.length ? e : void 0;
	const c = [],
		p = new Set,
		m = o || new Yr;
	if (e == null) return {
		tools: void 0,
		toolChoice: void 0,
		toolWarnings: c,
		betas: p
	};
	const h = [];
	for (const _ of e) switch (_.type) {
		case "function": {
			const w = m.getCacheControl(_.providerOptions, {
					type: "tool definition",
					canCache: !0
				}),
				k = (l = _.providerOptions) == null ? void 0 : l.anthropic,
				A = (d = k == null ? void 0 : k.eagerInputStreaming) != null ? d : s,
				I = k == null ? void 0 : k.deferLoading,
				E = k == null ? void 0 : k.allowedCallers;
			!i && _.strict != null && c.push({
				type: "unsupported",
				feature: "strict",
				details: `Tool '${_.name}' has strict: ${_.strict}, but strict mode is not supported by this provider. The strict property will be ignored.`
			}), h.push({
				name: _.name,
				description: _.description,
				input_schema: _.inputSchema,
				cache_control: w,
				...A ? {
					eager_input_streaming: !0
				} : {},
				...i === !0 && _.strict != null ? {
					strict: _.strict
				} : {},
				...I != null ? {
					defer_loading: I
				} : {},
				...E != null ? {
					allowed_callers: E
				} : {},
				..._.inputExamples != null ? {
					input_examples: _.inputExamples.map(S => S.input)
				} : {}
			}), r === !0 && p.add("structured-outputs-2025-11-13"), (_.inputExamples != null || E != null) && p.add("advanced-tool-use-2025-11-20");
			break
		}
		case "provider": {
			switch (_.id) {
				case "anthropic.code_execution_20250522": {
					p.add("code-execution-2025-05-22"), h.push({
						type: "code_execution_20250522",
						name: "code_execution",
						cache_control: void 0
					});
					break
				}
				case "anthropic.code_execution_20250825": {
					p.add("code-execution-2025-08-25"), h.push({
						type: "code_execution_20250825",
						name: "code_execution"
					});
					break
				}
				case "anthropic.code_execution_20260120": {
					h.push({
						type: "code_execution_20260120",
						name: "code_execution"
					});
					break
				}
				case "anthropic.computer_20250124": {
					p.add("computer-use-2025-01-24"), h.push({
						name: "computer",
						type: "computer_20250124",
						display_width_px: _.args.displayWidthPx,
						display_height_px: _.args.displayHeightPx,
						display_number: _.args.displayNumber,
						cache_control: void 0
					});
					break
				}
				case "anthropic.computer_20251124": {
					p.add("computer-use-2025-11-24"), h.push({
						name: "computer",
						type: "computer_20251124",
						display_width_px: _.args.displayWidthPx,
						display_height_px: _.args.displayHeightPx,
						display_number: _.args.displayNumber,
						enable_zoom: _.args.enableZoom,
						cache_control: void 0
					});
					break
				}
				case "anthropic.computer_20241022": {
					p.add("computer-use-2024-10-22"), h.push({
						name: "computer",
						type: "computer_20241022",
						display_width_px: _.args.displayWidthPx,
						display_height_px: _.args.displayHeightPx,
						display_number: _.args.displayNumber,
						cache_control: void 0
					});
					break
				}
				case "anthropic.text_editor_20250124": {
					p.add("computer-use-2025-01-24"), h.push({
						name: "str_replace_editor",
						type: "text_editor_20250124",
						cache_control: void 0
					});
					break
				}
				case "anthropic.text_editor_20241022": {
					p.add("computer-use-2024-10-22"), h.push({
						name: "str_replace_editor",
						type: "text_editor_20241022",
						cache_control: void 0
					});
					break
				}
				case "anthropic.text_editor_20250429": {
					p.add("computer-use-2025-01-24"), h.push({
						name: "str_replace_based_edit_tool",
						type: "text_editor_20250429",
						cache_control: void 0
					});
					break
				}
				case "anthropic.text_editor_20250728": {
					const w = await Te({
						value: _.args,
						schema: Ev
					});
					h.push({
						name: "str_replace_based_edit_tool",
						type: "text_editor_20250728",
						max_characters: w.maxCharacters,
						cache_control: void 0
					});
					break
				}
				case "anthropic.bash_20250124": {
					p.add("computer-use-2025-01-24"), h.push({
						name: "bash",
						type: "bash_20250124",
						cache_control: void 0
					});
					break
				}
				case "anthropic.bash_20241022": {
					p.add("computer-use-2024-10-22"), h.push({
						name: "bash",
						type: "bash_20241022",
						cache_control: void 0
					});
					break
				}
				case "anthropic.memory_20250818": {
					p.add("context-management-2025-06-27"), h.push({
						name: "memory",
						type: "memory_20250818"
					});
					break
				}
				case "anthropic.web_fetch_20250910": {
					p.add("web-fetch-2025-09-10");
					const w = await Te({
						value: _.args,
						schema: Wv
					});
					h.push({
						type: "web_fetch_20250910",
						name: "web_fetch",
						max_uses: w.maxUses,
						allowed_domains: w.allowedDomains,
						blocked_domains: w.blockedDomains,
						citations: w.citations,
						max_content_tokens: w.maxContentTokens,
						cache_control: void 0
					});
					break
				}
				case "anthropic.web_fetch_20260209": {
					p.add("code-execution-web-tools-2026-02-09");
					const w = await Te({
						value: _.args,
						schema: Bv
					});
					h.push({
						type: "web_fetch_20260209",
						name: "web_fetch",
						max_uses: w.maxUses,
						allowed_domains: w.allowedDomains,
						blocked_domains: w.blockedDomains,
						citations: w.citations,
						max_content_tokens: w.maxContentTokens,
						cache_control: void 0
					});
					break
				}
				case "anthropic.web_search_20250305": {
					const w = await Te({
						value: _.args,
						schema: jv
					});
					h.push({
						type: "web_search_20250305",
						name: "web_search",
						max_uses: w.maxUses,
						allowed_domains: w.allowedDomains,
						blocked_domains: w.blockedDomains,
						user_location: w.userLocation,
						cache_control: void 0
					});
					break
				}
				case "anthropic.web_search_20260209": {
					p.add("code-execution-web-tools-2026-02-09");
					const w = await Te({
						value: _.args,
						schema: Mv
					});
					h.push({
						type: "web_search_20260209",
						name: "web_search",
						max_uses: w.maxUses,
						allowed_domains: w.allowedDomains,
						blocked_domains: w.blockedDomains,
						user_location: w.userLocation,
						cache_control: void 0
					});
					break
				}
				case "anthropic.tool_search_regex_20251119": {
					h.push({
						type: "tool_search_tool_regex_20251119",
						name: "tool_search_tool_regex"
					});
					break
				}
				case "anthropic.tool_search_bm25_20251119": {
					h.push({
						type: "tool_search_tool_bm25_20251119",
						name: "tool_search_tool_bm25"
					});
					break
				}
				case "anthropic.advisor_20260301": {
					p.add("advisor-tool-2026-03-01");
					const w = await Te({
						value: _.args,
						schema: Cv
					});
					h.push({
						type: "advisor_20260301",
						name: "advisor",
						model: w.model,
						...w.maxUses !== void 0 && {
							max_uses: w.maxUses
						},
						...w.caching !== void 0 && {
							caching: w.caching
						}
					});
					break
				}
				default: {
					c.push({
						type: "unsupported",
						feature: `provider-defined tool ${_.id}`
					});
					break
				}
			}
			break
		}
		default: {
			c.push({
				type: "unsupported",
				feature: `tool ${_}`
			});
			break
		}
	}
	if (t == null) return {
		tools: h,
		toolChoice: n ? {
			type: "auto",
			disable_parallel_tool_use: n
		} : void 0,
		toolWarnings: c,
		betas: p
	};
	const g = t.type;
	switch (g) {
		case "auto":
			return {
				tools: h, toolChoice: {
					type: "auto",
					disable_parallel_tool_use: n
				}, toolWarnings: c, betas: p
			};
		case "required":
			return {
				tools: h, toolChoice: {
					type: "any",
					disable_parallel_tool_use: n
				}, toolWarnings: c, betas: p
			};
		case "none":
			return {
				tools: void 0, toolChoice: void 0, toolWarnings: c, betas: p
			};
		case "tool":
			return {
				tools: h, toolChoice: {
					type: "tool",
					name: t.toolName,
					disable_parallel_tool_use: n
				}, toolWarnings: c, betas: p
			};
		default: {
			const _ = g;
			throw new Oe({
				functionality: `tool choice type: ${_}`
			})
		}
	}
}

function Ea({
	usage: e,
	rawUsage: t
}) {
	var n, o, r;
	const i = (n = e.cache_creation_input_tokens) != null ? n : 0,
		s = (o = e.cache_read_input_tokens) != null ? o : 0;
	let l, d;
	const c = (r = e.iterations) == null ? void 0 : r.some(p => p.type === "fallback_message");
	if (e.iterations && e.iterations.length > 0 && !c) {
		const p = e.iterations.filter(m => m.type === "compaction" || m.type === "message");
		if (p.length > 0) {
			const m = p.reduce((h, g) => ({
				input: h.input + g.input_tokens,
				output: h.output + g.output_tokens
			}), {
				input: 0,
				output: 0
			});
			l = m.input, d = m.output
		} else l = e.input_tokens, d = e.output_tokens
	} else l = e.input_tokens, d = e.output_tokens;
	return {
		inputTokens: {
			total: l + i + s,
			noCache: l,
			cacheRead: s,
			cacheWrite: i
		},
		outputTokens: {
			total: d,
			text: void 0,
			reasoning: void 0
		},
		raw: t ?? e
	}
}
var yc = ee(() => Q(u({
		type: f("code_execution_result"),
		stdout: a(),
		stderr: a(),
		return_code: y(),
		content: R(u({
			type: f("code_execution_output"),
			file_id: a()
		})).optional().default([])
	}))),
	e0 = ee(() => Q(u({
		code: a()
	}))),
	t0 = Be({
		id: "anthropic.code_execution_20250522",
		inputSchema: e0,
		outputSchema: yc
	}),
	n0 = (e = {}) => t0(e),
	vc = ee(() => Q(ye("type", [u({
		type: f("code_execution_result"),
		stdout: a(),
		stderr: a(),
		return_code: y(),
		content: R(u({
			type: f("code_execution_output"),
			file_id: a()
		})).optional().default([])
	}), u({
		type: f("bash_code_execution_result"),
		content: R(u({
			type: f("bash_code_execution_output"),
			file_id: a()
		})),
		stdout: a(),
		stderr: a(),
		return_code: y()
	}), u({
		type: f("bash_code_execution_tool_result_error"),
		error_code: a()
	}), u({
		type: f("text_editor_code_execution_tool_result_error"),
		error_code: a()
	}), u({
		type: f("text_editor_code_execution_view_result"),
		content: a(),
		file_type: a(),
		num_lines: y().nullable(),
		start_line: y().nullable(),
		total_lines: y().nullable()
	}), u({
		type: f("text_editor_code_execution_create_result"),
		is_file_update: _e()
	}), u({
		type: f("text_editor_code_execution_str_replace_result"),
		lines: R(a()).nullable(),
		new_lines: y().nullable(),
		new_start: y().nullable(),
		old_lines: y().nullable(),
		old_start: y().nullable()
	})]))),
	o0 = ee(() => Q(ye("type", [u({
		type: f("programmatic-tool-call"),
		code: a()
	}), u({
		type: f("bash_code_execution"),
		command: a()
	}), ye("command", [u({
		type: f("text_editor_code_execution"),
		command: f("view"),
		path: a()
	}), u({
		type: f("text_editor_code_execution"),
		command: f("create"),
		path: a(),
		file_text: a().nullish()
	}), u({
		type: f("text_editor_code_execution"),
		command: f("str_replace"),
		path: a(),
		old_str: a(),
		new_str: a()
	})])]))),
	r0 = Be({
		id: "anthropic.code_execution_20250825",
		inputSchema: o0,
		outputSchema: vc,
		supportsDeferredResults: !0
	}),
	i0 = (e = {}) => r0(e),
	bc = ee(() => Q(ye("type", [u({
		type: f("code_execution_result"),
		stdout: a(),
		stderr: a(),
		return_code: y(),
		content: R(u({
			type: f("code_execution_output"),
			file_id: a()
		})).optional().default([])
	}), u({
		type: f("encrypted_code_execution_result"),
		encrypted_stdout: a(),
		stderr: a(),
		return_code: y(),
		content: R(u({
			type: f("code_execution_output"),
			file_id: a()
		})).optional().default([])
	}), u({
		type: f("bash_code_execution_result"),
		content: R(u({
			type: f("bash_code_execution_output"),
			file_id: a()
		})),
		stdout: a(),
		stderr: a(),
		return_code: y()
	}), u({
		type: f("bash_code_execution_tool_result_error"),
		error_code: a()
	}), u({
		type: f("text_editor_code_execution_tool_result_error"),
		error_code: a()
	}), u({
		type: f("text_editor_code_execution_view_result"),
		content: a(),
		file_type: a(),
		num_lines: y().nullable(),
		start_line: y().nullable(),
		total_lines: y().nullable()
	}), u({
		type: f("text_editor_code_execution_create_result"),
		is_file_update: _e()
	}), u({
		type: f("text_editor_code_execution_str_replace_result"),
		lines: R(a()).nullable(),
		new_lines: y().nullable(),
		new_start: y().nullable(),
		old_lines: y().nullable(),
		old_start: y().nullable()
	})]))),
	a0 = ee(() => Q(ye("type", [u({
		type: f("programmatic-tool-call"),
		code: a()
	}), u({
		type: f("bash_code_execution"),
		command: a()
	}), ye("command", [u({
		type: f("text_editor_code_execution"),
		command: f("view"),
		path: a()
	}), u({
		type: f("text_editor_code_execution"),
		command: f("create"),
		path: a(),
		file_text: a().nullish()
	}), u({
		type: f("text_editor_code_execution"),
		command: f("str_replace"),
		path: a(),
		old_str: a(),
		new_str: a()
	})])]))),
	s0 = Be({
		id: "anthropic.code_execution_20260120",
		inputSchema: a0,
		outputSchema: bc,
		supportsDeferredResults: !0
	}),
	l0 = (e = {}) => s0(e),
	wc = ee(() => Q(R(u({
		type: f("tool_reference"),
		toolName: a()
	})))),
	u0 = ee(() => Q(u({
		pattern: a(),
		limit: y().optional()
	}))),
	c0 = Be({
		id: "anthropic.tool_search_regex_20251119",
		inputSchema: u0,
		outputSchema: wc,
		supportsDeferredResults: !0
	}),
	d0 = (e = {}) => c0(e);

function p0(e) {
	return typeof e == "string" ? new TextDecoder().decode(Ot(e)) : new TextDecoder().decode(e)
}

function Ra(e) {
	try {
		if (typeof e == "string") return Jt(e);
		if (typeof e == "object" && e !== null) return e
	} catch {
		const n = e == null ? void 0 : e.errorCode;
		return {
			errorCode: typeof n == "string" ? n : "unavailable"
		}
	}
	return {}
}
async function m0({
	prompt: e,
	sendReasoning: t,
	warnings: n,
	cacheControlValidator: o,
	toolNameMapping: r
}) {
	var i, s, l, d, c, p, m, h, g, _, w, k, A, I, E, S, v, b, T, q, L, O;
	const B = new Set,
		F = h0(e),
		z = o || new Yr;
	let N;
	const oe = [];
	async function te(ge) {
		var J, M;
		const se = await xe({
			provider: "anthropic",
			providerOptions: ge,
			schema: Go
		});
		return (M = (J = se == null ? void 0 : se.citations) == null ? void 0 : J.enabled) != null ? M : !1
	}
	async function P(ge) {
		var J;
		const M = await xe({
			provider: "anthropic",
			providerOptions: ge,
			schema: Go
		});
		return (J = M == null ? void 0 : M.containerUpload) != null ? J : !1
	}
	async function H(ge) {
		const J = await xe({
			provider: "anthropic",
			providerOptions: ge,
			schema: Go
		});
		return {
			title: J == null ? void 0 : J.title,
			context: J == null ? void 0 : J.context
		}
	}
	for (let ge = 0; ge < F.length; ge++) {
		const J = F[ge],
			M = ge === F.length - 1,
			se = J.type;
		switch (se) {
			case "system": {
				const U = J.messages.map(({
					content: W,
					providerOptions: ce
				}) => ({
					type: "text",
					text: W,
					cache_control: z.getCacheControl(ce, {
						type: "system message",
						canCache: !0
					})
				}));
				N == null ? N = U : (oe.push({
					role: "system",
					content: U
				}), B.add("mid-conversation-system-2026-04-07"));
				break
			}
			case "user": {
				const U = [];
				for (const W of J.messages) {
					const {
						role: ce,
						content: ne
					} = W;
					switch (ce) {
						case "user": {
							for (let de = 0; de < ne.length; de++) {
								const X = ne[de],
									V = de === ne.length - 1,
									j = (i = z.getCacheControl(X.providerOptions, {
										type: "user message part",
										canCache: !0
									})) != null ? i : V ? z.getCacheControl(W.providerOptions, {
										type: "user message",
										canCache: !0
									}) : void 0;
								switch (X.type) {
									case "text": {
										U.push({
											type: "text",
											text: X.text,
											cache_control: j
										});
										break
									}
									case "file": {
										switch (X.data.type) {
											case "reference": {
												const ae = zt({
													reference: X.data.reference,
													provider: "anthropic"
												});
												B.add("files-api-2025-04-14"), await P(X.providerOptions) ? U.push({
													type: "container_upload",
													file_id: ae
												}) : ut(X.mediaType) === "image" ? U.push({
													type: "image",
													source: {
														type: "file",
														file_id: ae
													},
													cache_control: j
												}) : U.push({
													type: "document",
													source: {
														type: "file",
														file_id: ae
													},
													cache_control: j
												});
												break
											}
											case "text": {
												const ae = await te(X.providerOptions),
													Z = await H(X.providerOptions);
												U.push({
													type: "document",
													source: {
														type: "text",
														media_type: "text/plain",
														data: X.data.text
													},
													title: (s = Z.title) != null ? s : X.filename,
													...Z.context && {
														context: Z.context
													},
													...ae && {
														citations: {
															enabled: !0
														}
													},
													cache_control: j
												});
												break
											}
											case "url":
											case "data": {
												const ae = ut(X.mediaType);
												if (ae === "image") U.push({
													type: "image",
													source: X.data.type === "url" ? {
														type: "url",
														url: X.data.url.toString()
													} : {
														type: "base64",
														media_type: Ge({
															part: X
														}),
														data: De(X.data.data)
													},
													cache_control: j
												});
												else if (ae === "application" && (X.data.type === "url" ? X.mediaType === "application/pdf" : Ge({
														part: X
													}) === "application/pdf")) {
													B.add("pdfs-2024-09-25");
													const Z = await te(X.providerOptions),
														x = await H(X.providerOptions);
													U.push({
														type: "document",
														source: X.data.type === "url" ? {
															type: "url",
															url: X.data.url.toString()
														} : {
															type: "base64",
															media_type: "application/pdf",
															data: De(X.data.data)
														},
														title: (l = x.title) != null ? l : X.filename,
														...x.context && {
															context: x.context
														},
														...Z && {
															citations: {
																enabled: !0
															}
														},
														cache_control: j
													})
												} else if (X.mediaType === "text/plain") {
													const Z = await te(X.providerOptions),
														x = await H(X.providerOptions);
													U.push({
														type: "document",
														source: X.data.type === "url" ? {
															type: "url",
															url: X.data.url.toString()
														} : {
															type: "text",
															media_type: "text/plain",
															data: p0(X.data.data)
														},
														title: (d = x.title) != null ? d : X.filename,
														...x.context && {
															context: x.context
														},
														...Z && {
															citations: {
																enabled: !0
															}
														},
														cache_control: j
													})
												} else throw new Oe({
													functionality: `media type: ${X.mediaType}`
												});
												break
											}
										}
										break
									}
								}
							}
							break
						}
						case "tool": {
							for (let de = 0; de < ne.length; de++) {
								const X = ne[de];
								if (X.type === "tool-approval-response") continue;
								const V = X.output,
									j = "providerOptions" in V ? V.providerOptions : V.type === "content" ? (c = V.value.find(D => D.providerOptions != null)) == null ? void 0 : c.providerOptions : void 0,
									ae = de === ne.length - 1,
									Z = (m = (p = z.getCacheControl(X.providerOptions, {
										type: "tool result part",
										canCache: !0
									})) != null ? p : z.getCacheControl(j, {
										type: "tool result output",
										canCache: !0
									})) != null ? m : ae ? z.getCacheControl(W.providerOptions, {
										type: "tool result message",
										canCache: !0
									}) : void 0;
								let x;
								switch (V.type) {
									case "content":
										x = V.value.map(D => {
											var C;
											switch (D.type) {
												case "text":
													return {
														type: "text", text: D.text
													};
												case "file": {
													const G = ut(D.mediaType);
													if (D.data.type === "url") return G === "image" ? {
														type: "image",
														source: {
															type: "url",
															url: D.data.url.toString()
														}
													} : {
														type: "document",
														source: {
															type: "url",
															url: D.data.url.toString()
														}
													};
													if (D.data.type === "data") {
														if (G === "image") return {
															type: "image",
															source: {
																type: "base64",
																media_type: Ge({
																	part: D
																}),
																data: De(D.data.data)
															}
														};
														if (Ge({
																part: D
															}) === "application/pdf") return B.add("pdfs-2024-09-25"), {
															type: "document",
															source: {
																type: "base64",
																media_type: "application/pdf",
																data: De(D.data.data)
															}
														};
														n.push({
															type: "other",
															message: `unsupported tool content part type: ${D.type} with media type: ${D.mediaType}`
														});
														return
													}
													n.push({
														type: "other",
														message: `unsupported tool content part type: ${D.type} with data type: ${D.data.type}`
													});
													return
												}
												case "custom": {
													const G = (C = D.providerOptions) == null ? void 0 : C.anthropic;
													if ((G == null ? void 0 : G.type) === "tool-reference") return {
														type: "tool_reference",
														tool_name: G.toolName
													};
													n.push({
														type: "other",
														message: "unsupported custom tool content part"
													});
													return
												}
												default: {
													n.push({
														type: "other",
														message: `unsupported tool content part type: ${D.type}`
													});
													return
												}
											}
										}).filter(ur);
										break;
									case "text":
									case "error-text":
										x = V.value;
										break;
									case "execution-denied":
										x = (h = V.reason) != null ? h : "Tool call execution denied.";
										break;
									case "json":
									case "error-json":
									default:
										x = JSON.stringify(V.value);
										break
								}
								U.push({
									type: "tool_result",
									tool_use_id: X.toolCallId,
									content: x,
									is_error: V.type === "error-text" || V.type === "error-json" ? !0 : void 0,
									cache_control: Z
								})
							}
							break
						}
						default: {
							const de = ce;
							throw new Error(`Unsupported role: ${de}`)
						}
					}
				}
				oe.push({
					role: "user",
					content: U
				});
				break
			}
			case "assistant": {
				const U = [],
					W = new Set;
				for (let ce = 0; ce < J.messages.length; ce++) {
					const ne = J.messages[ce],
						de = ce === J.messages.length - 1,
						{
							content: X
						} = ne;
					for (let V = 0; V < X.length; V++) {
						const j = X[V],
							ae = V === X.length - 1,
							Z = (g = z.getCacheControl(j.providerOptions, {
								type: "assistant message part",
								canCache: !0
							})) != null ? g : ae ? z.getCacheControl(ne.providerOptions, {
								type: "assistant message",
								canCache: !0
							}) : void 0;
						switch (j.type) {
							case "text": {
								const x = (_ = j.providerOptions) == null ? void 0 : _.anthropic;
								(x == null ? void 0 : x.type) === "compaction" ? U.push({
									type: "compaction",
									content: j.text,
									cache_control: Z
								}): U.push({
									type: "text",
									text: M && de && ae ? j.text.trim() : j.text,
									...(x == null ? void 0 : x.citations) != null && {
										citations: x.citations
									},
									cache_control: Z
								});
								break
							}
							case "reasoning": {
								if (t) {
									const x = await xe({
										provider: "anthropic",
										providerOptions: j.providerOptions,
										schema: Tv
									});
									x != null ? x.signature != null ? (z.getCacheControl(j.providerOptions, {
										type: "thinking block",
										canCache: !1
									}), U.push({
										type: "thinking",
										thinking: j.text,
										signature: x.signature
									})) : x.redactedData != null ? (z.getCacheControl(j.providerOptions, {
										type: "redacted thinking block",
										canCache: !1
									}), U.push({
										type: "redacted_thinking",
										data: x.redactedData
									})) : n.push({
										type: "other",
										message: "unsupported reasoning metadata"
									}) : n.push({
										type: "other",
										message: "unsupported reasoning metadata"
									})
								} else n.push({
									type: "other",
									message: "sending reasoning content is disabled for this model"
								});
								break
							}
							case "tool-call": {
								if (j.providerExecuted) {
									const C = r.toProviderToolName(j.toolName);
									if (((k = (w = j.providerOptions) == null ? void 0 : w.anthropic) == null ? void 0 : k.type) === "mcp-tool-use") {
										W.add(j.toolCallId);
										const me = (I = (A = j.providerOptions) == null ? void 0 : A.anthropic) == null ? void 0 : I.serverName;
										if (me == null || typeof me != "string") {
											n.push({
												type: "other",
												message: "mcp tool use server name is required and must be a string"
											});
											break
										}
										U.push({
											type: "mcp_tool_use",
											id: j.toolCallId,
											name: j.toolName,
											input: j.input,
											server_name: me,
											cache_control: Z
										})
									} else if (C === "code_execution" && j.input != null && typeof j.input == "object" && "type" in j.input && typeof j.input.type == "string" && (j.input.type === "bash_code_execution" || j.input.type === "text_editor_code_execution")) U.push({
										type: "server_tool_use",
										id: j.toolCallId,
										name: j.input.type,
										input: j.input,
										cache_control: Z
									});
									else if (C === "code_execution" && j.input != null && typeof j.input == "object" && "type" in j.input && j.input.type === "programmatic-tool-call") {
										const {
											type: me,
											...fe
										} = j.input;
										U.push({
											type: "server_tool_use",
											id: j.toolCallId,
											name: "code_execution",
											input: fe,
											cache_control: Z
										})
									} else C === "code_execution" || C === "web_fetch" || C === "web_search" ? U.push({
										type: "server_tool_use",
										id: j.toolCallId,
										name: C,
										input: j.input,
										cache_control: Z
									}) : C === "tool_search_tool_regex" || C === "tool_search_tool_bm25" ? U.push({
										type: "server_tool_use",
										id: j.toolCallId,
										name: C,
										input: j.input,
										cache_control: Z
									}) : C === "advisor" ? U.push({
										type: "server_tool_use",
										id: j.toolCallId,
										name: "advisor",
										input: {},
										cache_control: Z
									}) : n.push({
										type: "other",
										message: `provider executed tool call for tool ${j.toolName} is not supported`
									});
									break
								}
								const x = (E = j.providerOptions) == null ? void 0 : E.anthropic,
									D = x != null && x.caller ? (x.caller.type === "code_execution_20250825" || x.caller.type === "code_execution_20260120") && x.caller.toolId ? {
										type: x.caller.type,
										tool_id: x.caller.toolId
									} : x.caller.type === "direct" ? {
										type: "direct"
									} : void 0 : void 0;
								U.push({
									type: "tool_use",
									id: j.toolCallId,
									name: j.toolName,
									input: _0(j.input),
									...D && {
										caller: D
									},
									cache_control: Z
								});
								break
							}
							case "tool-result": {
								const x = r.toProviderToolName(j.toolName);
								if (W.has(j.toolCallId)) {
									const D = j.output;
									if (D.type !== "json" && D.type !== "error-json") {
										n.push({
											type: "other",
											message: `provider executed tool result output type ${D.type} for tool ${j.toolName} is not supported`
										});
										break
									}
									U.push({
										type: "mcp_tool_result",
										tool_use_id: j.toolCallId,
										is_error: D.type === "error-json",
										content: D.value,
										cache_control: Z
									})
								} else if (x === "code_execution") {
									const D = j.output;
									if (D.type === "error-text" || D.type === "error-json") {
										let C = {};
										try {
											typeof D.value == "string" ? C = Jt(D.value) : typeof D.value == "object" && D.value !== null && (C = D.value)
										} catch {}
										C.type === "code_execution_tool_result_error" ? U.push({
											type: "code_execution_tool_result",
											tool_use_id: j.toolCallId,
											content: {
												type: "code_execution_tool_result_error",
												error_code: (S = C.errorCode) != null ? S : "unknown"
											},
											cache_control: Z
										}) : U.push({
											type: "bash_code_execution_tool_result",
											tool_use_id: j.toolCallId,
											cache_control: Z,
											content: {
												type: "bash_code_execution_tool_result_error",
												error_code: (v = C.errorCode) != null ? v : "unknown"
											}
										});
										break
									}
									if (D.type !== "json") {
										n.push({
											type: "other",
											message: `provider executed tool result output type ${D.type} for tool ${j.toolName} is not supported`
										});
										break
									}
									if (D.value == null || typeof D.value != "object" || !("type" in D.value) || typeof D.value.type != "string") {
										n.push({
											type: "other",
											message: `provider executed tool result output value is not a valid code execution result for tool ${j.toolName}`
										});
										break
									}
									if (D.value.type === "code_execution_result") {
										const C = await Te({
											value: D.value,
											schema: yc
										});
										U.push({
											type: "code_execution_tool_result",
											tool_use_id: j.toolCallId,
											content: {
												type: C.type,
												stdout: C.stdout,
												stderr: C.stderr,
												return_code: C.return_code,
												content: (b = C.content) != null ? b : []
											},
											cache_control: Z
										})
									} else if (D.value.type === "encrypted_code_execution_result") {
										const C = await Te({
											value: D.value,
											schema: bc
										});
										C.type === "encrypted_code_execution_result" && U.push({
											type: "code_execution_tool_result",
											tool_use_id: j.toolCallId,
											content: {
												type: C.type,
												encrypted_stdout: C.encrypted_stdout,
												stderr: C.stderr,
												return_code: C.return_code,
												content: (T = C.content) != null ? T : []
											},
											cache_control: Z
										})
									} else {
										const C = await Te({
											value: D.value,
											schema: vc
										});
										C.type === "code_execution_result" ? U.push({
											type: "code_execution_tool_result",
											tool_use_id: j.toolCallId,
											content: {
												type: C.type,
												stdout: C.stdout,
												stderr: C.stderr,
												return_code: C.return_code,
												content: (q = C.content) != null ? q : []
											},
											cache_control: Z
										}) : C.type === "bash_code_execution_result" || C.type === "bash_code_execution_tool_result_error" ? U.push({
											type: "bash_code_execution_tool_result",
											tool_use_id: j.toolCallId,
											cache_control: Z,
											content: C
										}) : U.push({
											type: "text_editor_code_execution_tool_result",
											tool_use_id: j.toolCallId,
											cache_control: Z,
											content: C
										})
									}
									break
								}
								if (x === "web_fetch") {
									const D = j.output;
									if (D.type === "error-json") {
										U.push({
											type: "web_fetch_tool_result",
											tool_use_id: j.toolCallId,
											content: {
												type: "web_fetch_tool_result_error",
												error_code: (L = Ra(D.value).errorCode) != null ? L : "unavailable"
											},
											cache_control: Z
										});
										break
									}
									if (D.type !== "json") {
										n.push({
											type: "other",
											message: `provider executed tool result output type ${D.type} for tool ${j.toolName} is not supported`
										});
										break
									}
									const C = await Te({
										value: D.value,
										schema: gc
									});
									U.push({
										type: "web_fetch_tool_result",
										tool_use_id: j.toolCallId,
										content: {
											type: "web_fetch_result",
											url: C.url,
											retrieved_at: C.retrievedAt,
											content: {
												type: "document",
												title: C.content.title,
												citations: C.content.citations,
												source: {
													type: C.content.source.type,
													media_type: C.content.source.mediaType,
													data: C.content.source.data
												}
											}
										},
										cache_control: Z
									});
									break
								}
								if (x === "web_search") {
									const D = j.output;
									if (D.type === "error-json") {
										U.push({
											type: "web_search_tool_result",
											tool_use_id: j.toolCallId,
											content: {
												type: "web_search_tool_result_error",
												error_code: (O = Ra(D.value).errorCode) != null ? O : "unavailable"
											},
											cache_control: Z
										});
										break
									}
									if (D.type !== "json") {
										n.push({
											type: "other",
											message: `provider executed tool result output type ${D.type} for tool ${j.toolName} is not supported`
										});
										break
									}
									const C = await Te({
										value: D.value,
										schema: _c
									});
									U.push({
										type: "web_search_tool_result",
										tool_use_id: j.toolCallId,
										content: C.map(G => ({
											url: G.url,
											title: G.title,
											page_age: G.pageAge,
											encrypted_content: G.encryptedContent,
											type: G.type
										})),
										cache_control: Z
									});
									break
								}
								if (x === "tool_search_tool_regex" || x === "tool_search_tool_bm25") {
									const D = j.output;
									if (D.type !== "json") {
										n.push({
											type: "other",
											message: `provider executed tool result output type ${D.type} for tool ${j.toolName} is not supported`
										});
										break
									}
									const G = (await Te({
										value: D.value,
										schema: wc
									})).map(me => ({
										type: "tool_reference",
										tool_name: me.toolName
									}));
									U.push({
										type: "tool_search_tool_result",
										tool_use_id: j.toolCallId,
										content: {
											type: "tool_search_tool_search_result",
											tool_references: G
										},
										cache_control: Z
									});
									break
								}
								if (x === "advisor") {
									const D = j.output;
									if (D.type !== "json" && D.type !== "error-json") {
										n.push({
											type: "other",
											message: `provider executed tool result output type ${D.type} for tool ${j.toolName} is not supported`
										});
										break
									}
									const C = await Te({
										value: D.value,
										schema: fc
									});
									C.type === "advisor_result" ? U.push({
										type: "advisor_tool_result",
										tool_use_id: j.toolCallId,
										content: {
											type: "advisor_result",
											text: C.text
										},
										cache_control: Z
									}) : C.type === "advisor_redacted_result" ? U.push({
										type: "advisor_tool_result",
										tool_use_id: j.toolCallId,
										content: {
											type: "advisor_redacted_result",
											encrypted_content: C.encryptedContent
										},
										cache_control: Z
									}) : U.push({
										type: "advisor_tool_result",
										tool_use_id: j.toolCallId,
										content: {
											type: "advisor_tool_result_error",
											error_code: C.errorCode
										},
										cache_control: Z
									});
									break
								}
								n.push({
									type: "other",
									message: `provider executed tool result for tool ${j.toolName} is not supported`
								});
								break
							}
						}
					}
				}
				oe.push({
					role: "assistant",
					content: f0(U)
				});
				break
			}
			default: {
				const U = se;
				throw new Error(`content type: ${U}`)
			}
		}
	}
	return {
		prompt: {
			system: N,
			messages: oe
		},
		betas: B
	}
}

function h0(e) {
	const t = [];
	let n;
	for (const o of e) {
		const {
			role: r
		} = o;
		switch (r) {
			case "system": {
				(n == null ? void 0 : n.type) !== "system" && (n = {
					type: "system",
					messages: []
				}, t.push(n)), n.messages.push(o);
				break
			}
			case "assistant": {
				(n == null ? void 0 : n.type) !== "assistant" && (n = {
					type: "assistant",
					messages: []
				}, t.push(n)), n.messages.push(o);
				break
			}
			case "user": {
				(n == null ? void 0 : n.type) !== "user" && (n = {
					type: "user",
					messages: []
				}, t.push(n)), n.messages.push(o);
				break
			}
			case "tool": {
				(n == null ? void 0 : n.type) !== "user" && (n = {
					type: "user",
					messages: []
				}, t.push(n)), n.messages.push(o);
				break
			}
			default: {
				const i = r;
				throw new Error(`Unsupported role: ${i}`)
			}
		}
	}
	return t
}

function f0(e) {
	const t = [];
	let n = [];

	function o() {
		t.push(...n.filter(r => r.type !== "tool_use"), ...n.filter(r => r.type === "tool_use")), n = []
	}
	for (const r of e) r.type === "thinking" || r.type === "redacted_thinking" ? (o(), t.push(r)) : n.push(r);
	return o(), t
}

function _0(e) {
	return typeof e == "object" && e !== null && !Array.isArray(e) ? e : {
		rawInvalidInput: e
	}
}

function Jo({
	finishReason: e,
	isJsonResponseFromTool: t
}) {
	switch (e) {
		case "pause_turn":
		case "end_turn":
		case "stop_sequence":
			return "stop";
		case "refusal":
			return "content-filter";
		case "tool_use":
			return t ? "stop" : "tool-calls";
		case "max_tokens":
		case "model_context_window_exceeded":
			return "length";
		case "compaction":
			return "other";
		default:
			return "other"
	}
}
var kc = new Set(["date-time", "time", "date", "duration", "email", "hostname", "uri", "ipv4", "ipv6", "uuid"]),
	g0 = ["minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "minLength", "maxLength", "pattern", "minItems", "maxItems", "uniqueItems", "minProperties", "maxProperties", "not"];

function y0(e) {
	return xc(e)
}

function qt(e) {
	return typeof e == "boolean" || !k0(e) ? e : xc(e)
}

function xc(e) {
	const t = {},
		n = e;
	if (e.$ref != null) return {
		$ref: e.$ref
	};
	if (e.$schema != null && (t.$schema = e.$schema), e.$id != null && (t.$id = e.$id), e.title != null && (t.title = e.title), e.description != null && (t.description = e.description), e.default !== void 0 && (t.default = e.default), e.const !== void 0 && (t.const = e.const), e.enum != null && (t.enum = e.enum), e.type != null && (t.type = e.type), e.anyOf != null ? t.anyOf = e.anyOf.map(qt) : e.oneOf != null && (t.anyOf = e.oneOf.map(qt)), e.allOf != null && (t.allOf = e.allOf.map(qt)), e.definitions != null && (t.definitions = Object.fromEntries(Object.entries(e.definitions).map(([r, i]) => [r, qt(i)]))), n.$defs != null) {
		const r = t;
		r.$defs = Object.fromEntries(Object.entries(n.$defs).map(([i, s]) => [i, qt(s)]))
	}(e.type === "object" || e.properties != null) && (e.properties != null && (t.properties = Object.fromEntries(Object.entries(e.properties).map(([r, i]) => [r, qt(i)]))), t.additionalProperties = !1, e.required != null && (t.required = e.required)), e.items != null && (t.items = Array.isArray(e.items) ? e.items.map(qt) : qt(e.items)), typeof e.format == "string" && kc.has(e.format) && (t.format = e.format);
	const o = v0(e);
	return o != null && (t.description = t.description == null ? o : `${t.description}
${o}`), t
}

function v0(e) {
	const t = g0.flatMap(n => {
		const o = e[n];
		return o == null || o === !1 ? [] : `${b0(n)}: ${w0(o)}`
	});
	return typeof e.format == "string" && !kc.has(e.format) && t.push(`format: ${e.format}`), t.length === 0 ? void 0 : `${t.join("; ")}.`
}

function b0(e) {
	return e.replace(/[A-Z]/g, t => ` ${t.toLowerCase()}`)
}

function w0(e) {
	return typeof e == "string" ? e : JSON.stringify(e)
}

function k0(e) {
	return typeof e == "object" && e !== null && !Array.isArray(e)
}

function Na(e, t, n) {
	var o;
	if (e.type === "web_search_result_location") return {
		type: "source",
		sourceType: "url",
		id: n(),
		url: e.url,
		title: e.title,
		providerMetadata: {
			anthropic: {
				citedText: e.cited_text,
				encryptedIndex: e.encrypted_index
			}
		}
	};
	if (e.type !== "page_location" && e.type !== "char_location") return;
	const r = t[e.document_index];
	if (r) return {
		type: "source",
		sourceType: "document",
		id: n(),
		mediaType: r.mediaType,
		title: (o = e.document_title) != null ? o : r.title,
		filename: r.filename,
		providerMetadata: {
			anthropic: e.type === "page_location" ? {
				citedText: e.cited_text,
				startPageNumber: e.start_page_number,
				endPageNumber: e.end_page_number
			} : {
				citedText: e.cited_text,
				startCharIndex: e.start_char_index,
				endCharIndex: e.end_char_index
			}
		}
	}
}
var x0 = class Ic {
	constructor(t, n) {
		this.specificationVersion = "v4";
		var o;
		this.modelId = t, this.config = n, this.generateId = (o = n.generateId) != null ? o : ze
	}
	static[Qe](t) {
		return tt({
			modelId: t.modelId,
			config: t.config
		})
	}
	static[et](t) {
		return new Ic(t.modelId, t.config)
	}
	supportsUrl(t) {
		return t.protocol === "https:"
	}
	get provider() {
		return this.config.provider
	}
	get providerOptionsName() {
		const t = this.config.provider,
			n = t.indexOf(".");
		return n === -1 ? t : t.substring(0, n)
	}
	get supportedUrls() {
		var t, n, o;
		return (o = (n = (t = this.config).supportedUrls) == null ? void 0 : n.call(t)) != null ? o : {}
	}
	async getArgs({
		userSuppliedBetas: t,
		prompt: n,
		maxOutputTokens: o,
		temperature: r,
		topP: i,
		topK: s,
		frequencyPenalty: l,
		presencePenalty: d,
		stopSequences: c,
		responseFormat: p,
		seed: m,
		tools: h,
		toolChoice: g,
		reasoning: _,
		providerOptions: w,
		stream: k
	}) {
		var A, I, E, S, v, b, T, q, L, O, B;
		const F = [];
		l != null && F.push({
			type: "unsupported",
			feature: "frequencyPenalty"
		}), d != null && F.push({
			type: "unsupported",
			feature: "presencePenalty"
		}), m != null && F.push({
			type: "unsupported",
			feature: "seed"
		}), r != null && r > 1 ? (F.push({
			type: "unsupported",
			feature: "temperature",
			details: `${r} exceeds anthropic maximum of 1.0. clamped to 1.0`
		}), r = 1) : r != null && r < 0 && (F.push({
			type: "unsupported",
			feature: "temperature",
			details: `${r} is below anthropic minimum of 0. clamped to 0`
		}), r = 0), (p == null ? void 0 : p.type) === "json" && p.schema == null && F.push({
			type: "unsupported",
			feature: "responseFormat",
			details: "JSON response format requires a schema. The response format is ignored."
		});
		const z = this.providerOptionsName,
			N = await xe({
				provider: "anthropic",
				providerOptions: w,
				schema: Aa
			}),
			oe = z !== "anthropic" ? await xe({
				provider: z,
				providerOptions: w,
				schema: Aa
			}) : null,
			te = oe != null,
			P = Object.assign({}, N ?? {}, oe ?? {}),
			{
				maxOutputTokens: H,
				supportsStructuredOutput: ge,
				supportsAdaptiveThinking: J,
				rejectsSamplingParameters: M,
				supportsXhighEffort: se,
				isKnownModel: U
			} = I0(this.modelId);
		M && (r != null && (F.push({
			type: "unsupported",
			feature: "temperature",
			details: `temperature is not supported by ${this.modelId} and will be ignored`
		}), r = void 0), s != null && (F.push({
			type: "unsupported",
			feature: "topK",
			details: `topK is not supported by ${this.modelId} and will be ignored`
		}), s = void 0), i != null && (F.push({
			type: "unsupported",
			feature: "topP",
			details: `topP is not supported by ${this.modelId} and will be ignored`
		}), i = void 0));
		const W = U || this.modelId.startsWith("claude-"),
			ce = ((A = this.config.supportsNativeStructuredOutput) != null ? A : !0) && ge,
			ne = ((I = this.config.supportsStrictTools) != null ? I : !0) && ge,
			de = (E = P == null ? void 0 : P.structuredOutputMode) != null ? E : "auto",
			X = de === "outputFormat" || de === "auto" && ce,
			V = (p == null ? void 0 : p.type) === "json" && p.schema != null && !X ? {
				type: "function",
				name: "json",
				description: "Respond with a JSON object.",
				inputSchema: p.schema
			} : void 0,
			j = P == null ? void 0 : P.contextManagement,
			ae = new Yr,
			Z = Lu({
				tools: h,
				providerToolNames: {
					"anthropic.code_execution_20250522": "code_execution",
					"anthropic.code_execution_20250825": "code_execution",
					"anthropic.code_execution_20260120": "code_execution",
					"anthropic.computer_20241022": "computer",
					"anthropic.computer_20250124": "computer",
					"anthropic.text_editor_20241022": "str_replace_editor",
					"anthropic.text_editor_20250124": "str_replace_editor",
					"anthropic.text_editor_20250429": "str_replace_based_edit_tool",
					"anthropic.text_editor_20250728": "str_replace_based_edit_tool",
					"anthropic.bash_20241022": "bash",
					"anthropic.bash_20250124": "bash",
					"anthropic.memory_20250818": "memory",
					"anthropic.web_search_20250305": "web_search",
					"anthropic.web_search_20260209": "web_search",
					"anthropic.web_fetch_20250910": "web_fetch",
					"anthropic.web_fetch_20260209": "web_fetch",
					"anthropic.tool_search_regex_20251119": "tool_search_tool_regex",
					"anthropic.tool_search_bm25_20251119": "tool_search_tool_bm25",
					"anthropic.advisor_20260301": "advisor"
				}
			}),
			{
				prompt: x,
				betas: D
			} = await m0({
				prompt: n,
				sendReasoning: (S = P == null ? void 0 : P.sendReasoning) != null ? S : !0,
				warnings: F,
				cacheControlValidator: ae,
				toolNameMapping: Z
			});
		if (vn(_) && (P == null ? void 0 : P.effort) == null) {
			const ve = T0({
				reasoning: _,
				supportsAdaptiveThinking: J,
				supportsXhighEffort: se,
				maxOutputTokensForModel: H,
				warnings: F
			});
			ve != null && (P.thinking == null && (P.thinking = ve.thinking), ve.effort != null && ((v = P.thinking) == null ? void 0 : v.type) !== "disabled" && (P.effort = ve.effort))
		}
		const C = (b = P == null ? void 0 : P.thinking) == null ? void 0 : b.type,
			G = C === "enabled" || C === "adaptive",
			me = G || C === "disabled";
		let fe = C === "enabled" ? (T = P == null ? void 0 : P.thinking) == null ? void 0 : T.budgetTokens : void 0;
		const pe = C === "adaptive" ? (q = P == null ? void 0 : P.thinking) == null ? void 0 : q.display : void 0,
			be = o ?? H,
			we = {
				model: this.modelId,
				max_tokens: be,
				temperature: r,
				top_k: s,
				top_p: i,
				stop_sequences: c,
				...me && {
					thinking: {
						type: C,
						...fe != null && {
							budget_tokens: fe
						},
						...pe != null && {
							display: pe
						}
					}
				},
				...((P == null ? void 0 : P.effort) || (P == null ? void 0 : P.taskBudget) || X && (p == null ? void 0 : p.type) === "json" && p.schema != null) && {
					output_config: {
						...(P == null ? void 0 : P.effort) && {
							effort: P.effort
						},
						...(P == null ? void 0 : P.taskBudget) && {
							task_budget: {
								type: P.taskBudget.type,
								total: P.taskBudget.total,
								...P.taskBudget.remaining != null && {
									remaining: P.taskBudget.remaining
								}
							}
						},
						...X && (p == null ? void 0 : p.type) === "json" && p.schema != null && {
							format: {
								type: "json_schema",
								schema: y0(p.schema)
							}
						}
					}
				},
				...(P == null ? void 0 : P.speed) && {
					speed: P.speed
				},
				...(P == null ? void 0 : P.inferenceGeo) && {
					inference_geo: P.inferenceGeo
				},
				...(P == null ? void 0 : P.fallbacks) && P.fallbacks.length > 0 && {
					fallbacks: P.fallbacks
				},
				...(P == null ? void 0 : P.cacheControl) && {
					cache_control: P.cacheControl
				},
				...((L = P == null ? void 0 : P.metadata) == null ? void 0 : L.userId) != null && {
					metadata: {
						user_id: P.metadata.userId
					}
				},
				...(P == null ? void 0 : P.mcpServers) && P.mcpServers.length > 0 && {
					mcp_servers: P.mcpServers.map(ve => ({
						type: ve.type,
						name: ve.name,
						url: ve.url,
						authorization_token: ve.authorizationToken,
						tool_configuration: ve.toolConfiguration ? {
							allowed_tools: ve.toolConfiguration.allowedTools,
							enabled: ve.toolConfiguration.enabled
						} : void 0
					}))
				},
				...(P == null ? void 0 : P.container) && {
					container: P.container.skills && P.container.skills.length > 0 ? {
						id: P.container.id,
						skills: P.container.skills.map(ve => ({
							type: ve.type,
							skill_id: ve.type === "custom" ? zt({
								reference: ve.providerReference,
								provider: "anthropic"
							}) : ve.skillId,
							version: ve.version
						}))
					} : P.container.id
				},
				system: x.system,
				messages: x.messages,
				...j && {
					context_management: {
						edits: j.edits.map(ve => {
							const wn = ve.type;
							switch (wn) {
								case "clear_tool_uses_20250919":
									return {
										type: ve.type, ...ve.trigger !== void 0 && {
											trigger: ve.trigger
										}, ...ve.keep !== void 0 && {
											keep: ve.keep
										}, ...ve.clearAtLeast !== void 0 && {
											clear_at_least: ve.clearAtLeast
										}, ...ve.clearToolInputs !== void 0 && {
											clear_tool_inputs: ve.clearToolInputs
										}, ...ve.excludeTools !== void 0 && {
											exclude_tools: ve.excludeTools
										}
									};
								case "clear_thinking_20251015":
									return {
										type: ve.type, ...ve.keep !== void 0 && {
											keep: ve.keep
										}
									};
								case "compact_20260112":
									return {
										type: ve.type, ...ve.trigger !== void 0 && {
											trigger: ve.trigger
										}, ...ve.pauseAfterCompaction !== void 0 && {
											pause_after_compaction: ve.pauseAfterCompaction
										}, ...ve.instructions !== void 0 && {
											instructions: ve.instructions
										}
									};
								default:
									F.push({
										type: "other",
										message: `Unknown context management strategy: ${wn}`
									});
									return
							}
						}).filter(ve => ve !== void 0)
					}
				}
			};
		G ? (C === "enabled" && fe == null && (F.push({
			type: "compatibility",
			feature: "extended thinking",
			details: "thinking budget is required when thinking is enabled. using default budget of 1024 tokens."
		}), we.thinking = {
			type: "enabled",
			budget_tokens: 1024
		}, fe = 1024), we.temperature != null && (we.temperature = void 0, F.push({
			type: "unsupported",
			feature: "temperature",
			details: "temperature is not supported when thinking is enabled"
		})), s != null && (we.top_k = void 0, F.push({
			type: "unsupported",
			feature: "topK",
			details: "topK is not supported when thinking is enabled"
		})), i != null && (we.top_p = void 0, F.push({
			type: "unsupported",
			feature: "topP",
			details: "topP is not supported when thinking is enabled"
		})), we.max_tokens = be + (fe ?? 0)) : W && i != null && r != null && (F.push({
			type: "unsupported",
			feature: "topP",
			details: "topP is not supported when temperature is set. topP is ignored."
		}), we.top_p = void 0), U && we.max_tokens > H && (o != null && F.push({
			type: "unsupported",
			feature: "maxOutputTokens",
			details: `${we.max_tokens} (maxOutputTokens + thinkingBudget) is greater than ${this.modelId} ${H} max output tokens. The max output tokens have been limited to ${H}.`
		}), we.max_tokens = H), P != null && P.mcpServers && P.mcpServers.length > 0 && D.add("mcp-client-2025-04-04"), j && (D.add("context-management-2025-06-27"), j.edits.some(ve => ve.type === "compact_20260112") && D.add("compact-2026-01-12")), P != null && P.container && P.container.skills && P.container.skills.length > 0 && (D.add("code-execution-2025-08-25"), D.add("skills-2025-10-02"), D.add("files-api-2025-04-14"), h != null && h.some(ve => ve.type === "provider" && (ve.id === "anthropic.code_execution_20250825" || ve.id === "anthropic.code_execution_20260120")) || F.push({
			type: "other",
			message: "code execution tool is required when using skills"
		})), P != null && P.taskBudget && D.add("task-budgets-2026-03-13"), (P == null ? void 0 : P.speed) === "fast" && D.add("fast-mode-2026-02-01"), P != null && P.fallbacks && P.fallbacks.length > 0 && D.add("server-side-fallback-2026-06-01");
		const We = k && ((O = P == null ? void 0 : P.toolStreaming) != null ? O : !0),
			{
				tools: Ve,
				toolChoice: Zn,
				toolWarnings: Fn,
				betas: Bn
			} = await Qv(V != null ? {
				tools: [...h ?? [], V],
				toolChoice: {
					type: "required"
				},
				disableParallelToolUse: !0,
				cacheControlValidator: ae,
				supportsStructuredOutput: !1,
				supportsStrictTools: ne,
				defaultEagerInputStreaming: We
			} : {
				tools: h ?? [],
				toolChoice: g,
				disableParallelToolUse: P == null ? void 0 : P.disableParallelToolUse,
				cacheControlValidator: ae,
				supportsStructuredOutput: ce,
				supportsStrictTools: ne,
				defaultEagerInputStreaming: We
			}),
			Vn = ae.getWarnings();
		return {
			args: {
				...we,
				tools: Ve,
				tool_choice: Zn,
				stream: k === !0 ? !0 : void 0
			},
			warnings: [...F, ...Fn, ...Vn],
			betas: new Set([...D, ...Bn, ...t, ...(B = P == null ? void 0 : P.anthropicBeta) != null ? B : []]),
			usesJsonResponseTool: V != null,
			toolNameMapping: Z,
			providerOptionsName: z,
			usedCustomProviderKey: te
		}
	}
	async getHeaders({
		betas: t,
		headers: n
	}) {
		return Ce(this.config.headers ? await ct(this.config.headers) : void 0, n, t.size > 0 ? {
			"anthropic-beta": Array.from(t).join(",")
		} : {})
	}
	async getBetasFromHeaders(t) {
		var n, o;
		const r = this.config.headers ? await ct(this.config.headers) : void 0,
			i = (n = r == null ? void 0 : r["anthropic-beta"]) != null ? n : "",
			s = (o = t == null ? void 0 : t["anthropic-beta"]) != null ? o : "";
		return new Set([...i.toLowerCase().split(","), ...s.toLowerCase().split(",")].map(l => l.trim()).filter(l => l !== ""))
	}
	buildRequestUrl(t) {
		var n, o, r;
		return (r = (o = (n = this.config).buildRequestUrl) == null ? void 0 : o.call(n, this.config.baseURL, t)) != null ? r : `${this.config.baseURL}/messages`
	}
	transformRequestBody(t, n) {
		var o, r, i;
		return (i = (r = (o = this.config).transformRequestBody) == null ? void 0 : r.call(o, t, n)) != null ? i : t
	}
	extractCitationDocuments(t) {
		const n = o => {
			var r, i;
			if (o.type !== "file" || o.mediaType !== "application/pdf" && o.mediaType !== "text/plain") return !1;
			const s = (r = o.providerOptions) == null ? void 0 : r.anthropic,
				l = s == null ? void 0 : s.citations;
			return (i = l == null ? void 0 : l.enabled) != null ? i : !1
		};
		return t.filter(o => o.role === "user").flatMap(o => o.content).filter(n).map(o => {
			var r;
			const i = o;
			return {
				title: (r = i.filename) != null ? r : "Untitled Document",
				filename: i.filename,
				mediaType: i.mediaType
			}
		})
	}
	async doGenerate(t) {
		var n, o, r, i, s, l, d, c;
		const {
			args: p,
			warnings: m,
			betas: h,
			usesJsonResponseTool: g,
			toolNameMapping: _,
			providerOptionsName: w,
			usedCustomProviderKey: k
		} = await this.getArgs({
			...t,
			stream: !1,
			userSuppliedBetas: await this.getBetasFromHeaders(t.headers)
		}), A = [...this.extractCitationDocuments(t.prompt)], I = Pa(p.tools), {
			responseHeaders: E,
			value: S,
			rawValue: v
		} = await Ue({
			url: this.buildRequestUrl(!1),
			headers: await this.getHeaders({
				betas: h,
				headers: t.headers
			}),
			body: this.transformRequestBody(p, h),
			failedResponseHandler: En,
			successfulResponseHandler: Me(xv),
			abortSignal: t.abortSignal,
			fetch: this.config.fetch
		}), b = [], T = {}, q = {};
		let L = !1;
		for (const O of S.content) switch (O.type) {
			case "text": {
				if (!g) {
					const B = (n = O.citations) == null ? void 0 : n.filter(F => F.type === "web_search_result_location");
					if (b.push({
							type: "text",
							text: O.text,
							...B != null && B.length > 0 && {
								providerMetadata: {
									anthropic: {
										citations: B
									}
								}
							}
						}), O.citations)
						for (const F of O.citations) {
							const z = Na(F, A, this.generateId);
							z && b.push(z)
						}
				}
				break
			}
			case "thinking": {
				b.push({
					type: "reasoning",
					text: O.thinking,
					providerMetadata: {
						anthropic: {
							signature: O.signature
						}
					}
				});
				break
			}
			case "redacted_thinking": {
				b.push({
					type: "reasoning",
					text: "",
					providerMetadata: {
						anthropic: {
							redactedData: O.data
						}
					}
				});
				break
			}
			case "compaction": {
				b.push({
					type: "text",
					text: O.content,
					providerMetadata: {
						anthropic: {
							type: "compaction"
						}
					}
				});
				break
			}
			case "tool_use": {
				if (g && O.name === "json") L = !0, b.push({
					type: "text",
					text: JSON.stringify(O.input)
				});
				else {
					const F = O.caller,
						z = F ? {
							type: F.type,
							toolId: "tool_id" in F ? F.tool_id : void 0
						} : void 0;
					b.push({
						type: "tool-call",
						toolCallId: O.id,
						toolName: O.name,
						input: JSON.stringify(O.input),
						...z && {
							providerMetadata: {
								anthropic: {
									caller: z
								}
							}
						}
					})
				}
				break
			}
			case "server_tool_use": {
				if (O.name === "text_editor_code_execution" || O.name === "bash_code_execution") b.push({
					type: "tool-call",
					toolCallId: O.id,
					toolName: _.toCustomToolName("code_execution"),
					input: JSON.stringify({
						type: O.name,
						...O.input
					}),
					providerExecuted: !0,
					...I && "code_execution" === "code_execution" ? {
						dynamic: !0
					} : {}
				});
				else if (O.name === "web_search" || O.name === "code_execution" || O.name === "web_fetch") {
					const B = O.name === "code_execution" && O.input != null && typeof O.input == "object" && "code" in O.input && !("type" in O.input) ? {
						type: "programmatic-tool-call",
						...O.input
					} : O.input;
					b.push({
						type: "tool-call",
						toolCallId: O.id,
						toolName: _.toCustomToolName(O.name),
						input: JSON.stringify(B),
						providerExecuted: !0,
						...I && O.name === "code_execution" ? {
							dynamic: !0
						} : {}
					})
				} else O.name === "tool_search_tool_regex" || O.name === "tool_search_tool_bm25" ? (q[O.id] = O.name, b.push({
					type: "tool-call",
					toolCallId: O.id,
					toolName: _.toCustomToolName(O.name),
					input: JSON.stringify(O.input),
					providerExecuted: !0
				})) : O.name === "advisor" && b.push({
					type: "tool-call",
					toolCallId: O.id,
					toolName: _.toCustomToolName("advisor"),
					input: JSON.stringify(O.input),
					providerExecuted: !0
				});
				break
			}
			case "mcp_tool_use": {
				T[O.id] = {
					type: "tool-call",
					toolCallId: O.id,
					toolName: O.name,
					input: JSON.stringify(O.input),
					providerExecuted: !0,
					dynamic: !0,
					providerMetadata: {
						anthropic: {
							type: "mcp-tool-use",
							serverName: O.server_name
						}
					}
				}, b.push(T[O.id]);
				break
			}
			case "mcp_tool_result": {
				b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: T[O.tool_use_id].toolName,
					isError: O.is_error,
					result: O.content,
					dynamic: !0,
					providerMetadata: T[O.tool_use_id].providerMetadata
				});
				break
			}
			case "web_fetch_tool_result": {
				O.content.type === "web_fetch_result" ? (A.push({
					title: (o = O.content.content.title) != null ? o : O.content.url,
					mediaType: O.content.content.source.media_type
				}), b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: _.toCustomToolName("web_fetch"),
					result: {
						type: "web_fetch_result",
						url: O.content.url,
						retrievedAt: O.content.retrieved_at,
						content: {
							type: O.content.content.type,
							title: O.content.content.title,
							citations: O.content.content.citations,
							source: {
								type: O.content.content.source.type,
								mediaType: O.content.content.source.media_type,
								data: O.content.content.source.data
							}
						}
					}
				})) : O.content.type === "web_fetch_tool_result_error" && b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: _.toCustomToolName("web_fetch"),
					isError: !0,
					result: {
						type: "web_fetch_tool_result_error",
						errorCode: O.content.error_code
					}
				});
				break
			}
			case "web_search_tool_result": {
				if (Array.isArray(O.content)) {
					b.push({
						type: "tool-result",
						toolCallId: O.tool_use_id,
						toolName: _.toCustomToolName("web_search"),
						result: O.content.map(B => {
							var F;
							return {
								url: B.url,
								title: B.title,
								pageAge: (F = B.page_age) != null ? F : null,
								encryptedContent: B.encrypted_content,
								type: B.type
							}
						})
					});
					for (const B of O.content) b.push({
						type: "source",
						sourceType: "url",
						id: this.generateId(),
						url: B.url,
						title: B.title,
						providerMetadata: {
							anthropic: {
								pageAge: (r = B.page_age) != null ? r : null
							}
						}
					})
				} else b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: _.toCustomToolName("web_search"),
					isError: !0,
					result: {
						type: "web_search_tool_result_error",
						errorCode: O.content.error_code
					}
				});
				break
			}
			case "code_execution_tool_result": {
				O.content.type === "code_execution_result" ? b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: _.toCustomToolName("code_execution"),
					result: {
						type: O.content.type,
						stdout: O.content.stdout,
						stderr: O.content.stderr,
						return_code: O.content.return_code,
						content: (i = O.content.content) != null ? i : []
					}
				}) : O.content.type === "encrypted_code_execution_result" ? b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: _.toCustomToolName("code_execution"),
					result: {
						type: O.content.type,
						encrypted_stdout: O.content.encrypted_stdout,
						stderr: O.content.stderr,
						return_code: O.content.return_code,
						content: (s = O.content.content) != null ? s : []
					}
				}) : O.content.type === "code_execution_tool_result_error" && b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: _.toCustomToolName("code_execution"),
					isError: !0,
					result: {
						type: "code_execution_tool_result_error",
						errorCode: O.content.error_code
					}
				});
				break
			}
			case "bash_code_execution_tool_result":
			case "text_editor_code_execution_tool_result": {
				b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: _.toCustomToolName("code_execution"),
					result: O.content
				});
				break
			}
			case "tool_search_tool_result": {
				let B = q[O.tool_use_id];
				if (B == null) {
					const F = _.toCustomToolName("tool_search_tool_bm25"),
						z = _.toCustomToolName("tool_search_tool_regex");
					F !== "tool_search_tool_bm25" ? B = "tool_search_tool_bm25" : B = "tool_search_tool_regex"
				}
				O.content.type === "tool_search_tool_search_result" ? b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: _.toCustomToolName(B),
					result: O.content.tool_references.map(F => ({
						type: F.type,
						toolName: F.tool_name
					}))
				}) : b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: _.toCustomToolName(B),
					isError: !0,
					result: {
						type: "tool_search_tool_result_error",
						errorCode: O.content.error_code
					}
				});
				break
			}
			case "advisor_tool_result": {
				const B = _.toCustomToolName("advisor");
				O.content.type === "advisor_result" ? b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: B,
					result: {
						type: "advisor_result",
						text: O.content.text
					}
				}) : O.content.type === "advisor_redacted_result" ? b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: B,
					result: {
						type: "advisor_redacted_result",
						encryptedContent: O.content.encrypted_content
					}
				}) : b.push({
					type: "tool-result",
					toolCallId: O.tool_use_id,
					toolName: B,
					isError: !0,
					result: {
						type: "advisor_tool_result_error",
						errorCode: O.content.error_code
					}
				});
				break
			}
		}
		return {
			content: b,
			finishReason: {
				unified: Jo({
					finishReason: S.stop_reason,
					isJsonResponseFromTool: L
				}),
				raw: (l = S.stop_reason) != null ? l : void 0
			},
			usage: Ea({
				usage: S.usage
			}),
			request: {
				body: p
			},
			response: {
				id: (d = S.id) != null ? d : void 0,
				modelId: (c = S.model) != null ? c : void 0,
				headers: E,
				body: v
			},
			warnings: m,
			providerMetadata: (() => {
				var O, B, F, z;
				const N = za(S.stop_details),
					oe = {
						usage: S.usage,
						stopSequence: (O = S.stop_sequence) != null ? O : null,
						...N != null ? {
							stopDetails: N
						} : {},
						iterations: S.usage.iterations ? S.usage.iterations.map(P => ({
							type: P.type,
							...P.model != null ? {
								model: P.model
							} : {},
							inputTokens: P.input_tokens,
							outputTokens: P.output_tokens,
							...P.cache_creation_input_tokens ? {
								cacheCreationInputTokens: P.cache_creation_input_tokens
							} : {},
							...P.cache_read_input_tokens ? {
								cacheReadInputTokens: P.cache_read_input_tokens
							} : {}
						})) : null,
						container: S.container ? {
							expiresAt: S.container.expires_at,
							id: S.container.id,
							skills: (F = (B = S.container.skills) == null ? void 0 : B.map(P => ({
								type: P.type,
								skillId: P.skill_id,
								version: P.version
							}))) != null ? F : null
						} : null,
						contextManagement: (z = Ma(S.context_management)) != null ? z : null
					},
					te = {
						anthropic: oe
					};
				return k && w !== "anthropic" && (te[w] = oe), te
			})()
		}
	}
	async doStream(t) {
		"use step";
		var n, o;
		const {
			args: r,
			warnings: i,
			betas: s,
			usesJsonResponseTool: l,
			toolNameMapping: d,
			providerOptionsName: c,
			usedCustomProviderKey: p
		} = await this.getArgs({
			...t,
			stream: !0,
			userSuppliedBetas: await this.getBetasFromHeaders(t.headers)
		}), m = [...this.extractCitationDocuments(t.prompt)], h = Pa(r.tools), g = this.buildRequestUrl(!0), {
			responseHeaders: _,
			value: w
		} = await Ue({
			url: g,
			headers: await this.getHeaders({
				betas: s,
				headers: t.headers
			}),
			body: this.transformRequestBody(r, s),
			failedResponseHandler: En,
			successfulResponseHandler: Dt(Iv),
			abortSignal: t.abortSignal,
			fetch: this.config.fetch
		});
		let k = {
			unified: "other",
			raw: void 0
		};
		const A = {
				input_tokens: 0,
				output_tokens: 0,
				cache_creation_input_tokens: 0,
				cache_read_input_tokens: 0,
				iterations: null
			},
			I = {},
			E = {},
			S = {};
		let v = null,
			b, T = null,
			q, L = null,
			O = !1,
			B;
		const F = this.generateId,
			z = w.pipeThrough(new TransformStream({
				start(P) {
					P.enqueue({
						type: "stream-start",
						warnings: i
					})
				},
				transform(P, H) {
					var ge, J, M, se, U, W, ce, ne, de, X, V, j, ae;
					if (t.includeRawChunks && H.enqueue({
							type: "raw",
							rawValue: P.rawValue
						}), !P.success) {
						H.enqueue({
							type: "error",
							error: P.error
						});
						return
					}
					const Z = P.value;
					switch (Z.type) {
						case "ping":
							return;
						case "content_block_start": {
							const x = Z.content_block,
								D = x.type;
							if (D === "fallback") return;
							switch (B = D, D) {
								case "text": {
									if (l) return;
									I[Z.index] = {
										type: "text",
										citations: []
									}, H.enqueue({
										type: "text-start",
										id: String(Z.index)
									});
									return
								}
								case "thinking": {
									I[Z.index] = {
										type: "reasoning"
									}, H.enqueue({
										type: "reasoning-start",
										id: String(Z.index)
									});
									return
								}
								case "redacted_thinking": {
									I[Z.index] = {
										type: "reasoning"
									}, H.enqueue({
										type: "reasoning-start",
										id: String(Z.index),
										providerMetadata: {
											anthropic: {
												redactedData: x.data
											}
										}
									});
									return
								}
								case "compaction": {
									I[Z.index] = {
										type: "text",
										citations: []
									}, H.enqueue({
										type: "text-start",
										id: String(Z.index),
										providerMetadata: {
											anthropic: {
												type: "compaction"
											}
										}
									});
									return
								}
								case "tool_use": {
									if (l && x.name === "json") O = !0, I[Z.index] = {
										type: "text",
										citations: []
									}, H.enqueue({
										type: "text-start",
										id: String(Z.index)
									});
									else {
										const G = x.caller,
											me = G ? {
												type: G.type,
												toolId: "tool_id" in G ? G.tool_id : void 0
											} : void 0,
											pe = x.input && Object.keys(x.input).length > 0 ? JSON.stringify(x.input) : "";
										I[Z.index] = {
											type: "tool-call",
											toolCallId: x.id,
											toolName: x.name,
											input: pe,
											firstDelta: pe.length === 0,
											...me && {
												caller: me
											}
										}, H.enqueue({
											type: "tool-input-start",
											id: x.id,
											toolName: x.name
										})
									}
									return
								}
								case "server_tool_use": {
									if (["web_fetch", "web_search", "code_execution", "text_editor_code_execution", "bash_code_execution"].includes(x.name)) {
										const C = x.name === "text_editor_code_execution" || x.name === "bash_code_execution" ? "code_execution" : x.name,
											G = x.name === "text_editor_code_execution" || x.name === "bash_code_execution" ? x.name : x.name === "code_execution" ? "programmatic-tool-call" : void 0,
											me = d.toCustomToolName(C),
											fe = x.input != null && typeof x.input == "object" && Object.keys(x.input).length > 0 ? JSON.stringify(x.input) : "";
										I[Z.index] = {
											type: "tool-call",
											toolCallId: x.id,
											toolName: me,
											input: fe,
											providerExecuted: !0,
											...h && C === "code_execution" ? {
												dynamic: !0
											} : {},
											firstDelta: fe.length === 0,
											providerToolName: C,
											providerToolInputType: G
										}, H.enqueue({
											type: "tool-input-start",
											id: x.id,
											toolName: me,
											providerExecuted: !0,
											...h && C === "code_execution" ? {
												dynamic: !0
											} : {}
										})
									} else if (x.name === "tool_search_tool_regex" || x.name === "tool_search_tool_bm25") {
										S[x.id] = x.name;
										const C = d.toCustomToolName(x.name);
										I[Z.index] = {
											type: "tool-call",
											toolCallId: x.id,
											toolName: C,
											input: "",
											providerExecuted: !0,
											firstDelta: !0,
											providerToolName: x.name
										}, H.enqueue({
											type: "tool-input-start",
											id: x.id,
											toolName: C,
											providerExecuted: !0
										})
									} else if (x.name === "advisor") {
										const C = d.toCustomToolName("advisor");
										I[Z.index] = {
											type: "tool-call",
											toolCallId: x.id,
											toolName: C,
											input: "{}",
											providerExecuted: !0,
											firstDelta: !0,
											providerToolName: x.name
										}, H.enqueue({
											type: "tool-input-start",
											id: x.id,
											toolName: C,
											providerExecuted: !0
										})
									}
									return
								}
								case "web_fetch_tool_result": {
									x.content.type === "web_fetch_result" ? (m.push({
										title: (ge = x.content.content.title) != null ? ge : x.content.url,
										mediaType: x.content.content.source.media_type
									}), H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: d.toCustomToolName("web_fetch"),
										result: {
											type: "web_fetch_result",
											url: x.content.url,
											retrievedAt: x.content.retrieved_at,
											content: {
												type: x.content.content.type,
												title: x.content.content.title,
												citations: x.content.content.citations,
												source: {
													type: x.content.content.source.type,
													mediaType: x.content.content.source.media_type,
													data: x.content.content.source.data
												}
											}
										}
									})) : x.content.type === "web_fetch_tool_result_error" && H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: d.toCustomToolName("web_fetch"),
										isError: !0,
										result: {
											type: "web_fetch_tool_result_error",
											errorCode: x.content.error_code
										}
									});
									return
								}
								case "web_search_tool_result": {
									if (Array.isArray(x.content)) {
										H.enqueue({
											type: "tool-result",
											toolCallId: x.tool_use_id,
											toolName: d.toCustomToolName("web_search"),
											result: x.content.map(C => {
												var G;
												return {
													url: C.url,
													title: C.title,
													pageAge: (G = C.page_age) != null ? G : null,
													encryptedContent: C.encrypted_content,
													type: C.type
												}
											})
										});
										for (const C of x.content) H.enqueue({
											type: "source",
											sourceType: "url",
											id: F(),
											url: C.url,
											title: C.title,
											providerMetadata: {
												anthropic: {
													pageAge: (J = C.page_age) != null ? J : null
												}
											}
										})
									} else H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: d.toCustomToolName("web_search"),
										isError: !0,
										result: {
											type: "web_search_tool_result_error",
											errorCode: x.content.error_code
										}
									});
									return
								}
								case "code_execution_tool_result": {
									x.content.type === "code_execution_result" ? H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: d.toCustomToolName("code_execution"),
										result: {
											type: x.content.type,
											stdout: x.content.stdout,
											stderr: x.content.stderr,
											return_code: x.content.return_code,
											content: (M = x.content.content) != null ? M : []
										}
									}) : x.content.type === "encrypted_code_execution_result" ? H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: d.toCustomToolName("code_execution"),
										result: {
											type: x.content.type,
											encrypted_stdout: x.content.encrypted_stdout,
											stderr: x.content.stderr,
											return_code: x.content.return_code,
											content: (se = x.content.content) != null ? se : []
										}
									}) : x.content.type === "code_execution_tool_result_error" && H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: d.toCustomToolName("code_execution"),
										isError: !0,
										result: {
											type: "code_execution_tool_result_error",
											errorCode: x.content.error_code
										}
									});
									return
								}
								case "bash_code_execution_tool_result":
								case "text_editor_code_execution_tool_result": {
									H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: d.toCustomToolName("code_execution"),
										result: x.content
									});
									return
								}
								case "tool_search_tool_result": {
									let C = S[x.tool_use_id];
									if (C == null) {
										const G = d.toCustomToolName("tool_search_tool_bm25"),
											me = d.toCustomToolName("tool_search_tool_regex");
										G !== "tool_search_tool_bm25" ? C = "tool_search_tool_bm25" : C = "tool_search_tool_regex"
									}
									x.content.type === "tool_search_tool_search_result" ? H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: d.toCustomToolName(C),
										result: x.content.tool_references.map(G => ({
											type: G.type,
											toolName: G.tool_name
										}))
									}) : H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: d.toCustomToolName(C),
										isError: !0,
										result: {
											type: "tool_search_tool_result_error",
											errorCode: x.content.error_code
										}
									});
									return
								}
								case "advisor_tool_result": {
									const C = d.toCustomToolName("advisor");
									x.content.type === "advisor_result" ? H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: C,
										result: {
											type: "advisor_result",
											text: x.content.text
										}
									}) : x.content.type === "advisor_redacted_result" ? H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: C,
										result: {
											type: "advisor_redacted_result",
											encryptedContent: x.content.encrypted_content
										}
									}) : H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: C,
										isError: !0,
										result: {
											type: "advisor_tool_result_error",
											errorCode: x.content.error_code
										}
									});
									return
								}
								case "mcp_tool_use": {
									E[x.id] = {
										type: "tool-call",
										toolCallId: x.id,
										toolName: x.name,
										input: JSON.stringify(x.input),
										providerExecuted: !0,
										dynamic: !0,
										providerMetadata: {
											anthropic: {
												type: "mcp-tool-use",
												serverName: x.server_name
											}
										}
									}, H.enqueue(E[x.id]);
									return
								}
								case "mcp_tool_result": {
									H.enqueue({
										type: "tool-result",
										toolCallId: x.tool_use_id,
										toolName: E[x.tool_use_id].toolName,
										isError: x.is_error,
										result: x.content,
										dynamic: !0,
										providerMetadata: E[x.tool_use_id].providerMetadata
									});
									return
								}
								default: {
									const C = D;
									throw new Error(`Unsupported content block type: ${C}`)
								}
							}
						}
						case "content_block_stop": {
							if (I[Z.index] != null) {
								const x = I[Z.index];
								switch (x.type) {
									case "text": {
										H.enqueue({
											type: "text-end",
											id: String(Z.index),
											...x.citations.length > 0 && {
												providerMetadata: {
													anthropic: {
														citations: x.citations
													}
												}
											}
										});
										break
									}
									case "reasoning": {
										H.enqueue({
											type: "reasoning-end",
											id: String(Z.index)
										});
										break
									}
									case "tool-call":
										if (!(l && x.toolName === "json")) {
											H.enqueue({
												type: "tool-input-end",
												id: x.toolCallId
											});
											let C = x.input === "" ? "{}" : x.input;
											if (x.providerToolName === "code_execution") try {
												const G = Jt(C);
												G != null && typeof G == "object" && "code" in G && !("type" in G) && (C = JSON.stringify({
													type: "programmatic-tool-call",
													...G
												}))
											} catch {}
											H.enqueue({
												type: "tool-call",
												toolCallId: x.toolCallId,
												toolName: x.toolName,
												input: C,
												providerExecuted: x.providerExecuted,
												...h && x.providerToolName === "code_execution" ? {
													dynamic: !0
												} : {},
												...x.caller && {
													providerMetadata: {
														anthropic: {
															caller: x.caller
														}
													}
												}
											})
										}
										break
								}
								delete I[Z.index]
							}
							B = void 0;
							return
						}
						case "content_block_delta": {
							const x = Z.delta.type;
							switch (x) {
								case "text_delta": {
									if (l) return;
									H.enqueue({
										type: "text-delta",
										id: String(Z.index),
										delta: Z.delta.text
									});
									return
								}
								case "thinking_delta": {
									H.enqueue({
										type: "reasoning-delta",
										id: String(Z.index),
										delta: Z.delta.thinking
									});
									return
								}
								case "signature_delta": {
									B === "thinking" && H.enqueue({
										type: "reasoning-delta",
										id: String(Z.index),
										delta: "",
										providerMetadata: {
											anthropic: {
												signature: Z.delta.signature
											}
										}
									});
									return
								}
								case "compaction_delta": {
									Z.delta.content != null && H.enqueue({
										type: "text-delta",
										id: String(Z.index),
										delta: Z.delta.content
									});
									return
								}
								case "input_json_delta": {
									const D = I[Z.index];
									let C = Z.delta.partial_json;
									if (C.length === 0) return;
									if (O) {
										if ((D == null ? void 0 : D.type) !== "text") return;
										H.enqueue({
											type: "text-delta",
											id: String(Z.index),
											delta: C
										})
									} else {
										if ((D == null ? void 0 : D.type) !== "tool-call") return;
										D.firstDelta && D.providerToolInputType != null && (C = `{"type": "${D.providerToolInputType}",${C.substring(1)}`), H.enqueue({
											type: "tool-input-delta",
											id: D.toolCallId,
											delta: C
										}), D.input += C, D.firstDelta = !1
									}
									return
								}
								case "citations_delta": {
									const D = Z.delta.citation,
										C = I[Z.index];
									(C == null ? void 0 : C.type) === "text" && D.type === "web_search_result_location" && C.citations.push(D);
									const G = Na(D, m, F);
									G && H.enqueue(G);
									return
								}
								default: {
									const D = x;
									throw new Error(`Unsupported delta type: ${D}`)
								}
							}
						}
						case "message_start": {
							if (A.input_tokens = Z.message.usage.input_tokens, A.cache_read_input_tokens = (U = Z.message.usage.cache_read_input_tokens) != null ? U : 0, A.cache_creation_input_tokens = (W = Z.message.usage.cache_creation_input_tokens) != null ? W : 0, b = {
									...Z.message.usage
								}, Z.message.container != null && (L = {
									expiresAt: Z.message.container.expires_at,
									id: Z.message.container.id,
									skills: null
								}), Z.message.stop_reason != null && (k = {
									unified: Jo({
										finishReason: Z.message.stop_reason,
										isJsonResponseFromTool: O
									}),
									raw: Z.message.stop_reason
								}), H.enqueue({
									type: "response-metadata",
									id: (ce = Z.message.id) != null ? ce : void 0,
									modelId: (ne = Z.message.model) != null ? ne : void 0
								}), Z.message.content != null)
								for (let x = 0; x < Z.message.content.length; x++) {
									const D = Z.message.content[x];
									if (D.type === "tool_use") {
										const C = D.caller,
											G = C ? {
												type: C.type,
												toolId: "tool_id" in C ? C.tool_id : void 0
											} : void 0;
										H.enqueue({
											type: "tool-input-start",
											id: D.id,
											toolName: D.name
										});
										const me = JSON.stringify((de = D.input) != null ? de : {});
										H.enqueue({
											type: "tool-input-delta",
											id: D.id,
											delta: me
										}), H.enqueue({
											type: "tool-input-end",
											id: D.id
										}), H.enqueue({
											type: "tool-call",
											toolCallId: D.id,
											toolName: D.name,
											input: me,
											...G && {
												providerMetadata: {
													anthropic: {
														caller: G
													}
												}
											}
										})
									}
								}
							return
						}
						case "message_delta": {
							Z.usage.input_tokens != null && A.input_tokens !== Z.usage.input_tokens && (A.input_tokens = Z.usage.input_tokens), A.output_tokens = Z.usage.output_tokens, Z.usage.cache_read_input_tokens != null && (A.cache_read_input_tokens = Z.usage.cache_read_input_tokens), Z.usage.cache_creation_input_tokens != null && (A.cache_creation_input_tokens = Z.usage.cache_creation_input_tokens), Z.usage.iterations != null && (A.iterations = Z.usage.iterations), k = {
								unified: Jo({
									finishReason: Z.delta.stop_reason,
									isJsonResponseFromTool: O
								}),
								raw: (X = Z.delta.stop_reason) != null ? X : void 0
							}, T = (V = Z.delta.stop_sequence) != null ? V : null, q = za(Z.delta.stop_details), L = Z.delta.container != null ? {
								expiresAt: Z.delta.container.expires_at,
								id: Z.delta.container.id,
								skills: (ae = (j = Z.delta.container.skills) == null ? void 0 : j.map(x => ({
									type: x.type,
									skillId: x.skill_id,
									version: x.version
								}))) != null ? ae : null
							} : null, Z.context_management && (v = Ma(Z.context_management)), b = {
								...b,
								...Z.usage
							};
							return
						}
						case "message_stop": {
							const x = {
									usage: b ?? null,
									stopSequence: T,
									...q != null ? {
										stopDetails: q
									} : {},
									iterations: A.iterations ? A.iterations.map(C => ({
										type: C.type,
										...C.model != null ? {
											model: C.model
										} : {},
										inputTokens: C.input_tokens,
										outputTokens: C.output_tokens,
										...C.cache_creation_input_tokens ? {
											cacheCreationInputTokens: C.cache_creation_input_tokens
										} : {},
										...C.cache_read_input_tokens ? {
											cacheReadInputTokens: C.cache_read_input_tokens
										} : {}
									})) : null,
									container: L,
									contextManagement: v
								},
								D = {
									anthropic: x
								};
							p && c !== "anthropic" && (D[c] = x), H.enqueue({
								type: "finish",
								finishReason: k,
								usage: Ea({
									usage: A,
									rawUsage: b
								}),
								providerMetadata: D
							});
							return
						}
						case "error": {
							H.enqueue({
								type: "error",
								error: Z.error
							});
							return
						}
						default: {
							const x = Z;
							throw new Error(`Unsupported chunk type: ${x}`)
						}
					}
				}
			})),
			[N, oe] = z.tee(),
			te = N.getReader();
		try {
			await te.read();
			let P = await te.read();
			if (((n = P.value) == null ? void 0 : n.type) === "raw" && (P = await te.read()), ((o = P.value) == null ? void 0 : o.type) === "error") {
				const H = P.value.error;
				throw new He({
					message: H.message,
					url: g,
					requestBodyValues: r,
					statusCode: H.type === "overloaded_error" ? 529 : 500,
					responseHeaders: _,
					responseBody: JSON.stringify(H),
					isRetryable: H.type === "overloaded_error"
				})
			}
		} finally {
			te.cancel().catch(() => {}), te.releaseLock()
		}
		return {
			stream: oe,
			request: {
				body: r
			},
			response: {
				headers: _
			}
		}
	}
};

function I0(e) {
	return e.includes("claude-opus-4-8") || e.includes("claude-opus-4-7") || e.includes("claude-fable-5") || e.includes("claude-sonnet-5") ? {
		maxOutputTokens: 128e3,
		supportsStructuredOutput: !0,
		supportsAdaptiveThinking: !0,
		rejectsSamplingParameters: !0,
		supportsXhighEffort: !0,
		isKnownModel: !0
	} : e.includes("claude-sonnet-4-6") || e.includes("claude-opus-4-6") ? {
		maxOutputTokens: 128e3,
		supportsStructuredOutput: !0,
		supportsAdaptiveThinking: !0,
		rejectsSamplingParameters: !1,
		supportsXhighEffort: !1,
		isKnownModel: !0
	} : e.includes("claude-sonnet-4-5") || e.includes("claude-opus-4-5") || e.includes("claude-haiku-4-5") ? {
		maxOutputTokens: 64e3,
		supportsStructuredOutput: !0,
		supportsAdaptiveThinking: !1,
		rejectsSamplingParameters: !1,
		supportsXhighEffort: !1,
		isKnownModel: !0
	} : e.includes("claude-opus-4-1") ? {
		maxOutputTokens: 32e3,
		supportsStructuredOutput: !0,
		supportsAdaptiveThinking: !1,
		rejectsSamplingParameters: !1,
		supportsXhighEffort: !1,
		isKnownModel: !0
	} : e.includes("claude-sonnet-4-") ? {
		maxOutputTokens: 64e3,
		supportsStructuredOutput: !1,
		supportsAdaptiveThinking: !1,
		rejectsSamplingParameters: !1,
		supportsXhighEffort: !1,
		isKnownModel: !0
	} : e.includes("claude-opus-4-") ? {
		maxOutputTokens: 32e3,
		supportsStructuredOutput: !1,
		supportsAdaptiveThinking: !1,
		rejectsSamplingParameters: !1,
		supportsXhighEffort: !1,
		isKnownModel: !0
	} : e.includes("claude-3-haiku") ? {
		maxOutputTokens: 4096,
		supportsStructuredOutput: !1,
		supportsAdaptiveThinking: !1,
		rejectsSamplingParameters: !1,
		supportsXhighEffort: !1,
		isKnownModel: !0
	} : {
		maxOutputTokens: 4096,
		supportsStructuredOutput: !1,
		supportsAdaptiveThinking: !1,
		rejectsSamplingParameters: !1,
		supportsXhighEffort: !1,
		isKnownModel: !1
	}
}

function Pa(e) {
	if (!e) return !1;
	let t = !1,
		n = !1;
	for (const o of e) {
		if ("type" in o && (o.type === "web_fetch_20260209" || o.type === "web_search_20260209")) {
			t = !0;
			continue
		}
		if (o.name === "code_execution") {
			n = !0;
			break
		}
	}
	return t && !n
}

function T0({
	reasoning: e,
	supportsAdaptiveThinking: t,
	supportsXhighEffort: n,
	maxOutputTokensForModel: o,
	warnings: r
}) {
	if (!vn(e)) return;
	if (e === "none") return {
		thinking: {
			type: "disabled"
		}
	};
	if (t) {
		const s = nc({
			reasoning: e,
			effortMap: {
				minimal: "low",
				low: "low",
				medium: "medium",
				high: "high",
				xhigh: n ? "xhigh" : "max"
			},
			warnings: r
		});
		return {
			thinking: {
				type: "adaptive"
			},
			effort: s
		}
	}
	const i = oc({
		reasoning: e,
		maxOutputTokens: o,
		maxReasoningBudget: o,
		warnings: r
	});
	if (i != null) return {
		thinking: {
			type: "enabled",
			budgetTokens: i
		}
	}
}

function Ma(e) {
	return e ? {
		appliedEdits: e.applied_edits.map(t => {
			switch (t.type) {
				case "clear_tool_uses_20250919":
					return {
						type: t.type, clearedToolUses: t.cleared_tool_uses, clearedInputTokens: t.cleared_input_tokens
					};
				case "clear_thinking_20251015":
					return {
						type: t.type, clearedThinkingTurns: t.cleared_thinking_turns, clearedInputTokens: t.cleared_input_tokens
					};
				case "compact_20260112":
					return {
						type: t.type
					}
			}
		}).filter(t => t !== void 0)
	} : null
}

function za(e) {
	if (e != null) return {
		type: e.type,
		...e.category != null ? {
			category: e.category
		} : {},
		...e.explanation != null ? {
			explanation: e.explanation
		} : {},
		...e.recommended_model != null ? {
			recommendedModel: e.recommended_model
		} : {}
	}
}
var S0 = ee(() => Q(u({
		command: a(),
		restart: _e().optional()
	}))),
	Da = It({
		id: "anthropic.bash_20241022",
		inputSchema: S0
	});

function C0(e = {}) {
	const {
		execute: t,
		...n
	} = e;
	return Da(t === void 0 ? {
		...n,
		execute: async ({
			command: o
		}, {
			abortSignal: r,
			experimental_sandbox: i
		}) => {
			if (!i) throw new Error("Sandbox session is not available");
			return await i.run({
				command: o,
				abortSignal: r
			})
		}
	} : {
		...n,
		...t === null ? {} : {
			execute: t
		}
	})
}
var O0 = ee(() => Q(u({
		command: a(),
		restart: _e().optional()
	}))),
	qa = It({
		id: "anthropic.bash_20250124",
		inputSchema: O0
	});

function A0(e = {}) {
	const {
		execute: t,
		...n
	} = e;
	return qa(t === void 0 ? {
		...n,
		execute: async ({
			command: o
		}, {
			abortSignal: r,
			experimental_sandbox: i
		}) => {
			if (!i) throw new Error("Sandbox session is not available");
			return await i.run({
				command: o,
				abortSignal: r
			})
		}
	} : {
		...n,
		...t === null ? {} : {
			execute: t
		}
	})
}
var $0 = ee(() => Q(u({
		action: Y(["key", "type", "mouse_move", "left_click", "left_click_drag", "right_click", "middle_click", "double_click", "screenshot", "cursor_position"]),
		coordinate: R(y().int()).optional(),
		text: a().optional()
	}))),
	E0 = It({
		id: "anthropic.computer_20241022",
		inputSchema: $0
	}),
	R0 = ee(() => Q(u({
		action: Y(["key", "hold_key", "type", "cursor_position", "mouse_move", "left_mouse_down", "left_mouse_up", "left_click", "left_click_drag", "right_click", "middle_click", "double_click", "triple_click", "scroll", "wait", "screenshot"]),
		coordinate: pn([y().int(), y().int()]).optional(),
		duration: y().optional(),
		scroll_amount: y().optional(),
		scroll_direction: Y(["up", "down", "left", "right"]).optional(),
		start_coordinate: pn([y().int(), y().int()]).optional(),
		text: a().optional()
	}))),
	N0 = It({
		id: "anthropic.computer_20250124",
		inputSchema: R0
	}),
	P0 = ee(() => Q(u({
		action: Y(["key", "hold_key", "type", "cursor_position", "mouse_move", "left_mouse_down", "left_mouse_up", "left_click", "left_click_drag", "right_click", "middle_click", "double_click", "triple_click", "scroll", "wait", "screenshot", "zoom"]),
		coordinate: pn([y().int(), y().int()]).optional(),
		duration: y().optional(),
		region: pn([y().int(), y().int(), y().int(), y().int()]).optional(),
		scroll_amount: y().optional(),
		scroll_direction: Y(["up", "down", "left", "right"]).optional(),
		start_coordinate: pn([y().int(), y().int()]).optional(),
		text: a().optional()
	}))),
	M0 = It({
		id: "anthropic.computer_20251124",
		inputSchema: P0
	}),
	z0 = ee(() => Q(ye("command", [u({
		command: f("view"),
		path: a(),
		view_range: pn([y(), y()]).optional()
	}), u({
		command: f("create"),
		path: a(),
		file_text: a()
	}), u({
		command: f("str_replace"),
		path: a(),
		old_str: a(),
		new_str: a()
	}), u({
		command: f("insert"),
		path: a(),
		insert_line: y(),
		insert_text: a()
	}), u({
		command: f("delete"),
		path: a()
	}), u({
		command: f("rename"),
		old_path: a(),
		new_path: a()
	})]))),
	D0 = It({
		id: "anthropic.memory_20250818",
		inputSchema: z0
	}),
	q0 = ee(() => Q(u({
		command: Y(["view", "create", "str_replace", "insert", "undo_edit"]),
		path: a(),
		file_text: a().optional(),
		insert_line: y().int().optional(),
		new_str: a().optional(),
		insert_text: a().optional(),
		old_str: a().optional(),
		view_range: R(y().int()).optional()
	}))),
	U0 = It({
		id: "anthropic.text_editor_20241022",
		inputSchema: q0
	}),
	j0 = ee(() => Q(u({
		command: Y(["view", "create", "str_replace", "insert", "undo_edit"]),
		path: a(),
		file_text: a().optional(),
		insert_line: y().int().optional(),
		new_str: a().optional(),
		insert_text: a().optional(),
		old_str: a().optional(),
		view_range: R(y().int()).optional()
	}))),
	L0 = It({
		id: "anthropic.text_editor_20250124",
		inputSchema: j0
	}),
	Z0 = ee(() => Q(u({
		command: Y(["view", "create", "str_replace", "insert"]),
		path: a(),
		file_text: a().optional(),
		insert_line: y().int().optional(),
		new_str: a().optional(),
		insert_text: a().optional(),
		old_str: a().optional(),
		view_range: R(y().int()).optional()
	}))),
	F0 = It({
		id: "anthropic.text_editor_20250429",
		inputSchema: Z0
	}),
	B0 = ee(() => Q(R(u({
		type: f("tool_reference"),
		toolName: a()
	})))),
	V0 = ee(() => Q(u({
		query: a(),
		limit: y().optional()
	}))),
	H0 = Be({
		id: "anthropic.tool_search_bm25_20251119",
		inputSchema: V0,
		outputSchema: B0,
		supportsDeferredResults: !0
	}),
	G0 = (e = {}) => H0(e),
	J0 = {
		advisor_20260301: $v,
		bash_20241022: C0,
		bash_20250124: A0,
		codeExecution_20250522: n0,
		codeExecution_20250825: i0,
		codeExecution_20260120: l0,
		computer_20241022: E0,
		computer_20250124: N0,
		computer_20251124: M0,
		memory_20250818: D0,
		textEditor_20241022: U0,
		textEditor_20250124: L0,
		textEditor_20250429: F0,
		textEditor_20250728: Pv,
		webFetch_20250910: Xv,
		webFetch_20260209: Jv,
		webSearch_20250305: Fv,
		webSearch_20260209: Uv,
		toolSearchRegex_20251119: d0,
		toolSearchBm25_20251119: G0
	},
	W0 = ee(() => Q(u({
		id: a(),
		display_title: a().nullish(),
		name: a().nullish(),
		description: a().nullish(),
		latest_version: a().nullish(),
		source: a(),
		created_at: a(),
		updated_at: a()
	}))),
	K0 = ee(() => Q(u({
		type: a(),
		skill_id: a(),
		name: a().nullish(),
		description: a().nullish()
	}))),
	Y0 = class {
		constructor(e) {
			this.config = e, this.specificationVersion = "v4"
		}
		get provider() {
			return this.config.provider
		}
		async getHeaders() {
			return Ce(await ct(this.config.headers), {
				"anthropic-beta": "skills-2025-10-02"
			})
		}
		async fetchVersionMetadata({
			skillId: e,
			version: t,
			headers: n
		}) {
			const {
				value: o
			} = await qn({
				url: `${this.config.baseURL}/skills/${e}/versions/${t}`,
				validateUrl: !1,
				headers: n,
				failedResponseHandler: En,
				successfulResponseHandler: Me(K0),
				fetch: this.config.fetch
			});
			return {
				...o.name != null ? {
					name: o.name
				} : {},
				...o.description != null ? {
					description: o.description
				} : {}
			}
		}
		async uploadSkill(e) {
			var t, n;
			const o = [],
				r = new FormData;
			e.displayTitle != null && r.append("display_title", e.displayTitle);
			for (const p of e.files) {
				const m = Dn(p.data);
				r.append("files[]", new Blob([m]), p.path)
			}
			const i = await this.getHeaders(),
				{
					value: s
				} = await ln({
					url: `${this.config.baseURL}/skills`,
					headers: i,
					formData: r,
					failedResponseHandler: En,
					successfulResponseHandler: Me(W0),
					fetch: this.config.fetch
				}),
				l = s.latest_version != null ? await this.fetchVersionMetadata({
					skillId: s.id,
					version: s.latest_version,
					headers: i
				}) : {},
				d = (t = l.name) != null ? t : s.name,
				c = (n = l.description) != null ? n : s.description;
			return {
				providerReference: {
					anthropic: s.id
				},
				...s.display_title != null ? {
					displayTitle: s.display_title
				} : {},
				...d != null ? {
					name: d
				} : {},
				...c != null ? {
					description: c
				} : {},
				...s.latest_version != null ? {
					latestVersion: s.latest_version
				} : {},
				providerMetadata: {
					anthropic: {
						...s.source != null ? {
							source: s.source
						} : {},
						...s.created_at != null ? {
							createdAt: s.created_at
						} : {},
						...s.updated_at != null ? {
							updatedAt: s.updated_at
						} : {}
					}
				},
				warnings: o
			}
		}
	},
	X0 = "4.0.16",
	Tc = "https://api.anthropic.com",
	Sc = `${Tc}/v1`;

function Q0(e) {
	const t = $o(mc(e));
	return t === Tc ? Sc : t
}

function Cc(e = {}) {
	var t, n;
	const o = (t = Q0(tc({
			settingValue: e.baseURL,
			environmentVariableName: "ANTHROPIC_BASE_URL"
		}))) != null ? t : Sc,
		r = (n = e.name) != null ? n : "anthropic.messages";
	if (e.apiKey && e.authToken) throw new xo({
		argument: "apiKey/authToken",
		message: "Both apiKey and authToken were provided. Please use only one authentication method."
	});
	const i = () => {
			const c = e.authToken ? {
				Authorization: `Bearer ${e.authToken}`
			} : {
				"x-api-key": Jr({
					apiKey: e.apiKey,
					environmentVariableName: "ANTHROPIC_API_KEY",
					description: "Anthropic"
				})
			};
			return sn({
				"anthropic-version": "2023-06-01",
				...c,
				...e.headers
			}, `ai-sdk/anthropic/${X0}`)
		},
		s = c => {
			var p;
			return new x0(c, {
				provider: r,
				baseURL: o,
				headers: i,
				fetch: e.fetch,
				generateId: (p = e.generateId) != null ? p : ze,
				supportedUrls: () => ({
					"image/*": [/^https?:\/\/.*$/],
					"application/pdf": [/^https?:\/\/.*$/]
				})
			})
		},
		l = () => new Y0({
			provider: `${r.replace(".messages", "")}.skills`,
			baseURL: o,
			headers: i,
			fetch: e.fetch
		}),
		d = function(c) {
			if (new.target) throw new Error("The Anthropic model function cannot be called with the new keyword.");
			return s(c)
		};
	return d.specificationVersion = "v4", d.languageModel = s, d.chat = s, d.messages = s, d.embeddingModel = c => {
		throw new Mi({
			modelId: c,
			modelType: "embeddingModel"
		})
	}, d.textEmbeddingModel = d.embeddingModel, d.imageModel = c => {
		throw new Mi({
			modelId: c,
			modelType: "imageModel"
		})
	}, d.files = () => new kv({
		provider: r,
		baseURL: o,
		headers: i,
		fetch: e.fetch
	}), d.skills = l, d.tools = J0, d
}
Cc();
const eb = 2e4;
class Yn extends Error {
	constructor(t, n = 0) {
		super(t), this.name = "ProviderHttpError", this.status = n
	}
}

function Ct(e) {
	return e.trim().replace(/\/+$/, "")
}
async function bn(e, t = {}, n = eb) {
	var s, l;
	const o = new AbortController,
		r = window.setTimeout(() => o.abort(), n),
		i = () => o.abort();
	(s = t.signal) == null || s.addEventListener("abort", i, {
		once: !0
	});
	try {
		const d = await fetch(e, {
				...t,
				signal: o.signal
			}),
			c = await d.text();
		let p = null;
		if (c) try {
			p = JSON.parse(c)
		} catch {
			p = c
		}
		if (!d.ok) {
			const m = tb(p);
			throw new Yn(m || `Provider returned HTTP ${d.status}`, d.status)
		}
		return p
	} catch (d) {
		throw d instanceof Yn ? d : o.signal.aborted ? new Yn("The provider request timed out or was cancelled.") : new Yn(d instanceof Error ? d.message : "Unable to reach the provider.")
	} finally {
		window.clearTimeout(r), (l = t.signal) == null || l.removeEventListener("abort", i)
	}
}

function tb(e) {
	if (typeof e == "string") return e.slice(0, 300);
	if (!e || typeof e != "object") return null;
	const t = e,
		n = t.error;
	if (typeof n == "string") return n;
	if (n && typeof n == "object") {
		const o = n.message;
		if (typeof o == "string") return o
	}
	return typeof t.message == "string" ? t.message : null
}

function jn(e) {
	return [...e].sort((t, n) => t.name.localeCompare(n.name, void 0, {
		sensitivity: "base"
	}))
}
async function nb(e) {
	var o, r;
	if (!((o = e.apiKey) != null && o.trim())) throw new Error("An API key is required.");
	const t = [];
	let n;
	do {
		const i = new URLSearchParams({
			limit: "100"
		});
		n && i.set("after_id", n);
		const s = await bn(`${Ct(e.baseUrl)}/models?${i}`, {
			headers: {
				"x-api-key": e.apiKey.trim(),
				"anthropic-version": "2023-06-01",
				"anthropic-dangerous-direct-browser-access": "true",
				Accept: "application/json"
			},
			signal: e.signal
		});
		for (const l of s.data ?? [])(r = l.id) != null && r.trim() && t.push({
			id: l.id.trim(),
			name: l.display_name || l.id.trim(),
			providerId: "anthropic",
			capabilities: {
				tools: "unknown",
				vision: "unknown",
				multipleImages: "unknown",
				reasoning: "unknown"
			},
			metadata: l.created_at ? {
				createdAt: l.created_at
			} : void 0
		});
		n = s.has_more ? s.last_id : void 0
	} while (n);
	return jn(t)
}

function ob(e) {
	return Cc({
		apiKey: e.apiKey,
		baseURL: e.baseUrl,
		headers: {
			"anthropic-dangerous-direct-browser-access": "true"
		}
	})(e.modelId)
}
const rb = {
	definition: xt.anthropic,
	listModels: nb,
	createModel: ob
};

function nn(e) {
	return e.replace(/[_-]([a-z])/g, t => t[1].toUpperCase())
}

function ib(e, t) {
	const n = nn(e);
	return n !== e && (t == null ? void 0 : t[n]) != null ? n : e
}

function Eo({
	rawName: e,
	providerOptions: t,
	warnings: n
}) {
	const o = nn(e);
	o !== e && (t == null ? void 0 : t[e]) != null && n.push({
		type: "deprecated",
		setting: `providerOptions key '${e}'`,
		message: `Use '${o}' instead.`
	})
}
var ab = u({
		error: u({
			message: a(),
			type: a().nullish(),
			param: nt().nullish(),
			code: le([a(), y()]).nullish()
		})
	}),
	Rn = {
		errorSchema: ab,
		errorToMessage: e => e.error.message
	};

function sb(e) {
	var t, n, o, r, i, s;
	if (e == null) return {
		inputTokens: {
			total: void 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: void 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	};
	const l = (t = e.prompt_tokens) != null ? t : 0,
		d = (n = e.completion_tokens) != null ? n : 0,
		c = (r = (o = e.prompt_tokens_details) == null ? void 0 : o.cached_tokens) != null ? r : 0,
		p = (s = (i = e.completion_tokens_details) == null ? void 0 : i.reasoning_tokens) != null ? s : 0;
	return {
		inputTokens: {
			total: l,
			noCache: l - c,
			cacheRead: c,
			cacheWrite: void 0
		},
		outputTokens: {
			total: d,
			text: d - p,
			reasoning: p
		},
		raw: e
	}
}

function kn(e) {
	var t, n;
	return (n = (t = e == null ? void 0 : e.providerOptions) == null ? void 0 : t.openaiCompatible) != null ? n : {}
}

function lb(e) {
	switch (e) {
		case "audio/wav":
			return "wav";
		case "audio/mp3":
		case "audio/mpeg":
			return "mp3";
		default:
			return null
	}
}

function ub(e) {
	var t, n, o;
	const r = [];
	for (const {
			role: i,
			content: s,
			...l
		}
		of e) {
		const d = kn({
			...l
		});
		switch (i) {
			case "system": {
				r.push({
					role: "system",
					content: s,
					...d
				});
				break
			}
			case "user": {
				if (s.length === 1 && s[0].type === "text") {
					r.push({
						role: "user",
						content: s[0].text,
						...kn(s[0])
					});
					break
				}
				r.push({
					role: "user",
					content: s.map(c => {
						var p;
						const m = kn(c);
						switch (c.type) {
							case "text":
								return {
									type: "text", text: c.text, ...m
								};
							case "file":
								switch (c.data.type) {
									case "reference":
										throw new Oe({
											functionality: "file parts with provider references"
										});
									case "text":
										throw new Oe({
											functionality: "text file parts"
										});
									case "url":
									case "data": {
										const h = ut(c.mediaType);
										if (h === "image") return {
											type: "image_url",
											image_url: {
												url: c.data.type === "url" ? c.data.url.toString() : `data:${Ge({ part: c })};base64,${De(c.data.data)}`
											},
											...m
										};
										if (h === "audio") {
											if (c.data.type === "url") throw new Oe({
												functionality: "audio file parts with URLs"
											});
											const g = Ge({
													part: c
												}),
												_ = lb(g);
											if (_ === null) throw new Oe({
												functionality: `audio media type ${g}`
											});
											return {
												type: "input_audio",
												input_audio: {
													data: De(c.data.data),
													format: _
												},
												...m
											}
										}
										if (h === "application") {
											if (c.data.type === "url") throw new Oe({
												functionality: "PDF file parts with URLs"
											});
											const g = Ge({
												part: c
											});
											if (g !== "application/pdf") throw new Oe({
												functionality: `file part media type ${g}`
											});
											return {
												type: "file",
												file: {
													filename: (p = c.filename) != null ? p : "document.pdf",
													file_data: `data:application/pdf;base64,${De(c.data.data)}`
												},
												...m
											}
										}
										if (h === "text") return {
											type: "text",
											text: c.data.type === "url" ? c.data.url.toString() : typeof c.data.data == "string" ? new TextDecoder().decode(Ot(c.data.data)) : new TextDecoder().decode(c.data.data),
											...m
										};
										throw new Oe({
											functionality: `file part media type ${c.mediaType}`
										})
									}
								}
						}
					}),
					...d
				});
				break
			}
			case "assistant": {
				let c = "",
					p = "";
				const m = [];
				for (const h of s) {
					const g = kn(h);
					switch (h.type) {
						case "text": {
							c += h.text;
							break
						}
						case "reasoning": {
							p += h.text;
							break
						}
						case "tool-call": {
							const _ = (n = (t = h.providerOptions) == null ? void 0 : t.google) == null ? void 0 : n.thoughtSignature;
							m.push({
								id: h.toolCallId,
								type: "function",
								function: {
									name: h.toolName,
									arguments: JSON.stringify(h.input)
								},
								...g,
								..._ ? {
									extra_content: {
										google: {
											thought_signature: String(_)
										}
									}
								} : {}
							});
							break
						}
					}
				}
				r.push({
					role: "assistant",
					content: m.length > 0 ? c || null : c,
					...p.length > 0 ? {
						reasoning_content: p
					} : {},
					tool_calls: m.length > 0 ? m : void 0,
					...d
				});
				break
			}
			case "tool": {
				for (const c of s) {
					if (c.type === "tool-approval-response") continue;
					const p = c.output;
					let m;
					switch (p.type) {
						case "text":
						case "error-text":
							m = p.value;
							break;
						case "execution-denied":
							m = (o = p.reason) != null ? o : "Tool call execution denied.";
							break;
						case "content":
						case "json":
						case "error-json":
							m = JSON.stringify(p.value);
							break
					}
					const h = kn(c);
					r.push({
						role: "tool",
						tool_call_id: c.toolCallId,
						content: m,
						...h
					})
				}
				break
			}
			default: {
				const c = i;
				throw new Error(`Unsupported role: ${c}`)
			}
		}
	}
	return r
}

function Ua({
	id: e,
	model: t,
	created: n
}) {
	return {
		id: e ?? void 0,
		modelId: t ?? void 0,
		timestamp: n != null ? new Date(n * 1e3) : void 0
	}
}

function ja(e) {
	switch (e) {
		case "stop":
			return "stop";
		case "length":
			return "length";
		case "content_filter":
			return "content-filter";
		case "function_call":
		case "tool_calls":
			return "tool-calls";
		default:
			return "other"
	}
}
var xn = u({
	user: a().optional(),
	reasoningEffort: a().optional(),
	textVerbosity: a().optional(),
	strictJsonSchema: _e().optional()
});

function cb({
	tools: e,
	toolChoice: t
}) {
	e = e != null && e.length ? e : void 0;
	const n = [];
	if (e == null) return {
		tools: void 0,
		toolChoice: void 0,
		toolWarnings: n
	};
	const o = [];
	for (const i of e) i.type === "provider" ? n.push({
		type: "unsupported",
		feature: `provider-defined tool ${i.id}`
	}) : o.push({
		type: "function",
		function: {
			name: i.name,
			description: i.description,
			parameters: i.inputSchema,
			...i.strict != null ? {
				strict: i.strict
			} : {}
		}
	});
	if (t == null) return {
		tools: o,
		toolChoice: void 0,
		toolWarnings: n
	};
	const r = t.type;
	switch (r) {
		case "auto":
		case "none":
		case "required":
			return {
				tools: o, toolChoice: r, toolWarnings: n
			};
		case "tool":
			return {
				tools: o, toolChoice: {
					type: "function",
					function: {
						name: t.toolName
					}
				}, toolWarnings: n
			};
		default: {
			const i = r;
			throw new Oe({
				functionality: `tool choice type: ${i}`
			})
		}
	}
}
var db = class Oc {
		constructor(t, n) {
			this.specificationVersion = "v4";
			var o, r;
			this.modelId = t, this.config = n;
			const i = (o = n.errorStructure) != null ? o : Rn;
			this.chunkSchema = hb(i.errorSchema), this.failedResponseHandler = Bt(i), this.supportsStructuredOutputs = (r = n.supportsStructuredOutputs) != null ? r : !1
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new Oc(t.modelId, t.config)
		}
		get provider() {
			return this.config.provider
		}
		get providerOptionsName() {
			return this.config.provider.split(".")[0].trim()
		}
		get supportedUrls() {
			var t, n, o;
			return (o = (n = (t = this.config).supportedUrls) == null ? void 0 : n.call(t)) != null ? o : {}
		}
		transformRequestBody(t) {
			var n, o, r;
			return (r = (o = (n = this.config).transformRequestBody) == null ? void 0 : o.call(n, t)) != null ? r : t
		}
		convertUsage(t) {
			var n, o, r;
			return (r = (o = (n = this.config).convertUsage) == null ? void 0 : o.call(n, t)) != null ? r : sb(t)
		}
		async getArgs({
			prompt: t,
			maxOutputTokens: n,
			temperature: o,
			topP: r,
			topK: i,
			frequencyPenalty: s,
			presencePenalty: l,
			reasoning: d,
			providerOptions: c,
			stopSequences: p,
			responseFormat: m,
			seed: h,
			toolChoice: g,
			tools: _
		}) {
			var w, k, A, I, E, S;
			const v = [],
				b = await xe({
					provider: "openai-compatible",
					providerOptions: c,
					schema: xn
				});
			b != null && v.push({
				type: "deprecated",
				setting: "providerOptions key 'openai-compatible'",
				message: "Use 'openaiCompatible' instead."
			}), Eo({
				rawName: this.providerOptionsName,
				providerOptions: c,
				warnings: v
			});
			const T = Object.assign(b ?? {}, (w = await xe({
					provider: "openaiCompatible",
					providerOptions: c,
					schema: xn
				})) != null ? w : {}, (k = await xe({
					provider: this.providerOptionsName,
					providerOptions: c,
					schema: xn
				})) != null ? k : {}, (A = await xe({
					provider: nn(this.providerOptionsName),
					providerOptions: c,
					schema: xn
				})) != null ? A : {}),
				q = (I = T == null ? void 0 : T.strictJsonSchema) != null ? I : !0;
			i != null && v.push({
				type: "unsupported",
				feature: "topK"
			}), (m == null ? void 0 : m.type) === "json" && m.schema != null && !this.supportsStructuredOutputs && v.push({
				type: "unsupported",
				feature: "responseFormat",
				details: "JSON response format schema is only supported with structuredOutputs"
			});
			const {
				tools: L,
				toolChoice: O,
				toolWarnings: B
			} = cb({
				tools: _,
				toolChoice: g
			});
			return {
				metadataKey: ib(this.providerOptionsName, c),
				args: {
					model: this.modelId,
					user: T.user,
					max_tokens: n,
					temperature: o,
					top_p: r,
					frequency_penalty: s,
					presence_penalty: l,
					response_format: (m == null ? void 0 : m.type) === "json" ? this.supportsStructuredOutputs === !0 && m.schema != null ? {
						type: "json_schema",
						json_schema: {
							schema: m.schema,
							strict: q,
							name: (E = m.name) != null ? E : "response",
							description: m.description
						}
					} : {
						type: "json_object"
					} : void 0,
					stop: p,
					seed: h,
					...Object.fromEntries(Object.entries({
						...c == null ? void 0 : c[this.providerOptionsName],
						...c == null ? void 0 : c[nn(this.providerOptionsName)]
					}).filter(([z]) => !Object.keys(xn.shape).includes(z))),
					reasoning_effort: (S = T.reasoningEffort) != null ? S : vn(d) && d !== "none" ? d : void 0,
					verbosity: T.textVerbosity,
					messages: ub(t),
					tools: L,
					tool_choice: O
				},
				warnings: [...v, ...B]
			}
		}
		async doGenerate(t) {
			var n, o, r, i, s, l, d, c, p, m;
			const {
				args: h,
				warnings: g,
				metadataKey: _
			} = await this.getArgs({
				...t
			}), w = this.transformRequestBody(h), k = JSON.stringify(w), {
				responseHeaders: A,
				value: I,
				rawValue: E
			} = await Ue({
				url: this.config.url({
					path: "/chat/completions",
					modelId: this.modelId
				}),
				headers: Ce((o = (n = this.config).headers) == null ? void 0 : o.call(n), t.headers),
				body: w,
				failedResponseHandler: this.failedResponseHandler,
				successfulResponseHandler: Me(pb),
				abortSignal: t.abortSignal,
				fetch: this.config.fetch
			}), S = I.choices[0], v = [], b = S.message.content;
			b != null && b.length > 0 && v.push({
				type: "text",
				text: b
			});
			const T = (r = S.message.reasoning_content) != null ? r : S.message.reasoning;
			if (T != null && T.length > 0 && v.push({
					type: "reasoning",
					text: T
				}), S.message.tool_calls != null)
				for (const O of S.message.tool_calls) {
					const B = (s = (i = O.extra_content) == null ? void 0 : i.google) == null ? void 0 : s.thought_signature;
					v.push({
						type: "tool-call",
						toolCallId: (l = O.id) != null ? l : ze(),
						toolName: O.function.name,
						input: O.function.arguments,
						...B ? {
							providerMetadata: {
								[_]: {
									thoughtSignature: B
								}
							}
						} : {}
					})
				}
			const q = {
					[_]: {},
					...await ((c = (d = this.config.metadataExtractor) == null ? void 0 : d.extractMetadata) == null ? void 0 : c.call(d, {
						parsedBody: E
					}))
				},
				L = (p = I.usage) == null ? void 0 : p.completion_tokens_details;
			return (L == null ? void 0 : L.accepted_prediction_tokens) != null && (q[_].acceptedPredictionTokens = L == null ? void 0 : L.accepted_prediction_tokens), (L == null ? void 0 : L.rejected_prediction_tokens) != null && (q[_].rejectedPredictionTokens = L == null ? void 0 : L.rejected_prediction_tokens), {
				content: v,
				finishReason: {
					unified: ja(S.finish_reason),
					raw: (m = S.finish_reason) != null ? m : void 0
				},
				usage: this.convertUsage(I.usage),
				providerMetadata: q,
				request: {
					body: k
				},
				response: {
					...Ua(I),
					headers: A,
					body: E
				},
				warnings: g
			}
		}
		async doStream(t) {
			var n, o, r;
			const {
				args: i,
				warnings: s,
				metadataKey: l
			} = await this.getArgs({
				...t
			}), d = this.transformRequestBody({
				...i,
				stream: !0,
				stream_options: this.config.includeUsage ? {
					include_usage: !0
				} : void 0
			}), c = (n = this.config.metadataExtractor) == null ? void 0 : n.createStreamExtractor(), {
				responseHeaders: p,
				value: m
			} = await Ue({
				url: this.config.url({
					path: "/chat/completions",
					modelId: this.modelId
				}),
				headers: Ce((r = (o = this.config).headers) == null ? void 0 : r.call(o), t.headers),
				body: d,
				failedResponseHandler: this.failedResponseHandler,
				successfulResponseHandler: Dt(this.chunkSchema),
				abortSignal: t.abortSignal,
				fetch: this.config.fetch
			}), h = l;
			let g;
			const _ = new Map,
				w = new Set,
				k = T => {
					var q, L, O, B, F;
					const z = T.index;
					if (z == null || w.has(z)) {
						g.processDelta(T);
						return
					}
					let N = _.get(z);
					N == null ? (N = {
						id: (q = T.id) != null ? q : null,
						bufferedArguments: "",
						extraContent: (L = T.extra_content) != null ? L : null
					}, _.set(z, N)) : (N.id == null && T.id != null && (N.id = T.id), N.extraContent == null && T.extra_content != null && (N.extraContent = T.extra_content));
					const oe = (O = T.function) == null ? void 0 : O.arguments;
					oe != null && (N.bufferedArguments += oe);
					const te = (B = T.function) == null ? void 0 : B.name;
					if (te != null) {
						const P = {
							index: z,
							id: N.id,
							function: {
								name: te,
								arguments: N.bufferedArguments
							},
							extra_content: (F = N.extraContent) != null ? F : void 0
						};
						g.processDelta(P), _.delete(z), w.add(z)
					}
				};
			let A = {
					unified: "other",
					raw: void 0
				},
				I, E = !0,
				S = !1,
				v = !1;
			const b = T => this.convertUsage(T);
			return {
				stream: m.pipeThrough(new TransformStream({
					start(T) {
						g = new pc(T, {
							generateId: ze,
							extractMetadata: q => {
								var L, O;
								const B = (O = (L = q.extra_content) == null ? void 0 : L.google) == null ? void 0 : O.thought_signature;
								return B ? {
									[h]: {
										thoughtSignature: B
									}
								} : void 0
							},
							buildToolCallProviderMetadata: q => q
						}), T.enqueue({
							type: "stream-start",
							warnings: s
						})
					},
					transform(T, q) {
						var L, O;
						if (t.includeRawChunks && q.enqueue({
								type: "raw",
								rawValue: T.rawValue
							}), !T.success) {
							A = {
								unified: "error",
								raw: void 0
							}, q.enqueue({
								type: "error",
								error: T.error
							});
							return
						}
						if (c == null || c.processChunk(T.rawValue), "error" in T.value) {
							A = {
								unified: "error",
								raw: void 0
							}, q.enqueue({
								type: "error",
								error: T.value.error
							});
							return
						}
						const B = T.value;
						E && (E = !1, q.enqueue({
							type: "response-metadata",
							...Ua(B)
						})), B.usage != null && (I = B.usage);
						const F = B.choices[0];
						if ((F == null ? void 0 : F.finish_reason) != null && (A = {
								unified: ja(F.finish_reason),
								raw: (L = F.finish_reason) != null ? L : void 0
							}), (F == null ? void 0 : F.delta) == null) return;
						const z = F.delta,
							N = (O = z.reasoning_content) != null ? O : z.reasoning;
						if (N && (S || (q.enqueue({
								type: "reasoning-start",
								id: "reasoning-0"
							}), S = !0), q.enqueue({
								type: "reasoning-delta",
								id: "reasoning-0",
								delta: N
							})), z.content && (S && (q.enqueue({
								type: "reasoning-end",
								id: "reasoning-0"
							}), S = !1), v || (q.enqueue({
								type: "text-start",
								id: "txt-0"
							}), v = !0), q.enqueue({
								type: "text-delta",
								id: "txt-0",
								delta: z.content
							})), z.tool_calls != null) {
							S && (q.enqueue({
								type: "reasoning-end",
								id: "reasoning-0"
							}), S = !1);
							for (const oe of z.tool_calls) k(oe)
						}
					},
					flush(T) {
						var q, L, O, B;
						S && T.enqueue({
							type: "reasoning-end",
							id: "reasoning-0"
						}), v && T.enqueue({
							type: "text-end",
							id: "txt-0"
						});
						for (const [z, N] of _) g.processDelta({
							index: z,
							id: N.id,
							function: {
								arguments: N.bufferedArguments
							}
						});
						_.clear(), g.flush();
						const F = {
							[h]: {},
							...c == null ? void 0 : c.buildMetadata()
						};
						((q = I == null ? void 0 : I.completion_tokens_details) == null ? void 0 : q.accepted_prediction_tokens) != null && (F[h].acceptedPredictionTokens = (L = I == null ? void 0 : I.completion_tokens_details) == null ? void 0 : L.accepted_prediction_tokens), ((O = I == null ? void 0 : I.completion_tokens_details) == null ? void 0 : O.rejected_prediction_tokens) != null && (F[h].rejectedPredictionTokens = (B = I == null ? void 0 : I.completion_tokens_details) == null ? void 0 : B.rejected_prediction_tokens), T.enqueue({
							type: "finish",
							finishReason: A,
							usage: b(I),
							providerMetadata: F
						})
					}
				})),
				request: {
					body: d
				},
				response: {
					headers: p
				}
			}
		}
	},
	Ac = St({
		prompt_tokens: y().nullish(),
		completion_tokens: y().nullish(),
		total_tokens: y().nullish(),
		prompt_tokens_details: u({
			cached_tokens: y().nullish()
		}).nullish(),
		completion_tokens_details: u({
			reasoning_tokens: y().nullish(),
			accepted_prediction_tokens: y().nullish(),
			rejected_prediction_tokens: y().nullish()
		}).nullish()
	}).nullish(),
	pb = St({
		id: a().nullish(),
		created: y().nullish(),
		model: a().nullish(),
		choices: R(u({
			message: u({
				role: f("assistant").nullish(),
				content: a().nullish(),
				reasoning_content: a().nullish(),
				reasoning: a().nullish(),
				tool_calls: R(u({
					id: a().nullish(),
					function: u({
						name: a(),
						arguments: a()
					}),
					extra_content: u({
						google: u({
							thought_signature: a().nullish()
						}).nullish()
					}).nullish()
				})).nullish()
			}),
			finish_reason: a().nullish()
		})),
		usage: Ac
	}),
	mb = St({
		id: a().nullish(),
		created: y().nullish(),
		model: a().nullish(),
		choices: R(u({
			delta: u({
				role: Y(["assistant", ""]).nullish(),
				content: a().nullish(),
				reasoning_content: a().nullish(),
				reasoning: a().nullish(),
				tool_calls: R(u({
					index: y().nullish(),
					id: a().nullish(),
					function: u({
						name: a().nullish(),
						arguments: a().nullish()
					}),
					extra_content: u({
						google: u({
							thought_signature: a().nullish()
						}).nullish()
					}).nullish()
				})).nullish()
			}).nullish(),
			finish_reason: a().nullish()
		})),
		usage: Ac
	}),
	hb = e => le([mb, e]);

function La(e) {
	var t, n;
	if (e == null) return {
		inputTokens: {
			total: void 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: void 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	};
	const o = (t = e.prompt_tokens) != null ? t : 0,
		r = (n = e.completion_tokens) != null ? n : 0;
	return {
		inputTokens: {
			total: o,
			noCache: o,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: r,
			text: r,
			reasoning: void 0
		},
		raw: e
	}
}

function fb({
	prompt: e,
	user: t = "user",
	assistant: n = "assistant"
}) {
	let o = "";
	e[0].role === "system" && (o += `${e[0].content}

`, e = e.slice(1));
	for (const {
			role: r,
			content: i
		}
		of e) switch (r) {
		case "system":
			throw new wl({
				message: "Unexpected system message in prompt: ${content}",
				prompt: e
			});
		case "user": {
			const s = i.map(l => {
				switch (l.type) {
					case "text":
						return l.text
				}
			}).filter(Boolean).join("");
			o += `${t}:
${s}

`;
			break
		}
		case "assistant": {
			const s = i.map(l => {
				switch (l.type) {
					case "text":
						return l.text;
					case "tool-call":
						throw new Oe({
							functionality: "tool-call messages"
						})
				}
			}).join("");
			o += `${n}:
${s}

`;
			break
		}
		case "tool":
			throw new Oe({
				functionality: "tool messages"
			});
		default: {
			const s = r;
			throw new Error(`Unsupported role: ${s}`)
		}
	}
	return o += `${n}:
`, {
		prompt: o,
		stopSequences: [`
${t}:`]
	}
}

function Za({
	id: e,
	model: t,
	created: n
}) {
	return {
		id: e ?? void 0,
		modelId: t ?? void 0,
		timestamp: n != null ? new Date(n * 1e3) : void 0
	}
}

function Fa(e) {
	switch (e) {
		case "stop":
			return "stop";
		case "length":
			return "length";
		case "content_filter":
			return "content-filter";
		case "function_call":
		case "tool_calls":
			return "tool-calls";
		default:
			return "other"
	}
}
var Ba = u({
		echo: _e().optional(),
		logitBias: ke(a(), y()).optional(),
		suffix: a().optional(),
		user: a().optional()
	}),
	_b = class $c {
		constructor(t, n) {
			this.specificationVersion = "v4";
			var o;
			this.modelId = t, this.config = n;
			const r = (o = n.errorStructure) != null ? o : Rn;
			this.chunkSchema = yb(r.errorSchema), this.failedResponseHandler = Bt(r)
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new $c(t.modelId, t.config)
		}
		get provider() {
			return this.config.provider
		}
		get providerOptionsName() {
			return this.config.provider.split(".")[0].trim()
		}
		get supportedUrls() {
			var t, n, o;
			return (o = (n = (t = this.config).supportedUrls) == null ? void 0 : n.call(t)) != null ? o : {}
		}
		async getArgs({
			prompt: t,
			maxOutputTokens: n,
			temperature: o,
			topP: r,
			topK: i,
			frequencyPenalty: s,
			presencePenalty: l,
			stopSequences: d,
			responseFormat: c,
			seed: p,
			providerOptions: m,
			tools: h,
			toolChoice: g
		}) {
			var _, w;
			const k = [];
			Eo({
				rawName: this.providerOptionsName,
				providerOptions: m,
				warnings: k
			});
			const A = Object.assign((_ = await xe({
				provider: this.providerOptionsName,
				providerOptions: m,
				schema: Ba
			})) != null ? _ : {}, (w = await xe({
				provider: nn(this.providerOptionsName),
				providerOptions: m,
				schema: Ba
			})) != null ? w : {});
			i != null && k.push({
				type: "unsupported",
				feature: "topK"
			}), h != null && h.length && k.push({
				type: "unsupported",
				feature: "tools"
			}), g != null && k.push({
				type: "unsupported",
				feature: "toolChoice"
			}), c != null && c.type !== "text" && k.push({
				type: "unsupported",
				feature: "responseFormat",
				details: "JSON response format is not supported."
			});
			const {
				prompt: I,
				stopSequences: E
			} = fb({
				prompt: t
			}), S = [...E ?? [], ...d ?? []];
			return {
				args: {
					model: this.modelId,
					echo: A.echo,
					logit_bias: A.logitBias,
					suffix: A.suffix,
					user: A.user,
					max_tokens: n,
					temperature: o,
					top_p: r,
					frequency_penalty: s,
					presence_penalty: l,
					seed: p,
					...m == null ? void 0 : m[this.providerOptionsName],
					...m == null ? void 0 : m[nn(this.providerOptionsName)],
					prompt: I,
					stop: S.length > 0 ? S : void 0
				},
				warnings: k
			}
		}
		async doGenerate(t) {
			var n, o;
			const {
				args: r,
				warnings: i
			} = await this.getArgs(t), {
				responseHeaders: s,
				value: l,
				rawValue: d
			} = await Ue({
				url: this.config.url({
					path: "/completions",
					modelId: this.modelId
				}),
				headers: Ce((o = (n = this.config).headers) == null ? void 0 : o.call(n), t.headers),
				body: r,
				failedResponseHandler: this.failedResponseHandler,
				successfulResponseHandler: Me(gb),
				abortSignal: t.abortSignal,
				fetch: this.config.fetch
			}), c = l.choices[0], p = [];
			return c.text != null && c.text.length > 0 && p.push({
				type: "text",
				text: c.text
			}), {
				content: p,
				usage: La(l.usage),
				finishReason: {
					unified: Fa(c.finish_reason),
					raw: c.finish_reason
				},
				request: {
					body: r
				},
				response: {
					...Za(l),
					headers: s,
					body: d
				},
				warnings: i
			}
		}
		async doStream(t) {
			var n, o;
			const {
				args: r,
				warnings: i
			} = await this.getArgs(t), s = {
				...r,
				stream: !0,
				stream_options: this.config.includeUsage ? {
					include_usage: !0
				} : void 0
			}, {
				responseHeaders: l,
				value: d
			} = await Ue({
				url: this.config.url({
					path: "/completions",
					modelId: this.modelId
				}),
				headers: Ce((o = (n = this.config).headers) == null ? void 0 : o.call(n), t.headers),
				body: s,
				failedResponseHandler: this.failedResponseHandler,
				successfulResponseHandler: Dt(this.chunkSchema),
				abortSignal: t.abortSignal,
				fetch: this.config.fetch
			});
			let c = {
					unified: "other",
					raw: void 0
				},
				p, m = !0;
			return {
				stream: d.pipeThrough(new TransformStream({
					start(h) {
						h.enqueue({
							type: "stream-start",
							warnings: i
						})
					},
					transform(h, g) {
						var _;
						if (t.includeRawChunks && g.enqueue({
								type: "raw",
								rawValue: h.rawValue
							}), !h.success) {
							c = {
								unified: "error",
								raw: void 0
							}, g.enqueue({
								type: "error",
								error: h.error
							});
							return
						}
						const w = h.value;
						if ("error" in w) {
							c = {
								unified: "error",
								raw: void 0
							}, g.enqueue({
								type: "error",
								error: w.error
							});
							return
						}
						m && (m = !1, g.enqueue({
							type: "response-metadata",
							...Za(w)
						}), g.enqueue({
							type: "text-start",
							id: "0"
						})), w.usage != null && (p = w.usage);
						const k = w.choices[0];
						(k == null ? void 0 : k.finish_reason) != null && (c = {
							unified: Fa(k.finish_reason),
							raw: (_ = k.finish_reason) != null ? _ : void 0
						}), (k == null ? void 0 : k.text) != null && g.enqueue({
							type: "text-delta",
							id: "0",
							delta: k.text
						})
					},
					flush(h) {
						m || h.enqueue({
							type: "text-end",
							id: "0"
						}), h.enqueue({
							type: "finish",
							finishReason: c,
							usage: La(p)
						})
					}
				})),
				request: {
					body: s
				},
				response: {
					headers: l
				}
			}
		}
	},
	Ec = u({
		prompt_tokens: y(),
		completion_tokens: y(),
		total_tokens: y()
	}),
	gb = u({
		id: a().nullish(),
		created: y().nullish(),
		model: a().nullish(),
		choices: R(u({
			text: a(),
			finish_reason: a()
		})),
		usage: Ec.nullish()
	}),
	yb = e => le([u({
		id: a().nullish(),
		created: y().nullish(),
		model: a().nullish(),
		choices: R(u({
			text: a(),
			finish_reason: a().nullish(),
			index: y()
		})),
		usage: Ec.nullish()
	}), e]),
	Wo = u({
		dimensions: y().optional(),
		user: a().optional()
	}),
	vb = class Rc {
		constructor(t, n) {
			this.specificationVersion = "v4", this.modelId = t, this.config = n
		}
		get provider() {
			return this.config.provider
		}
		get maxEmbeddingsPerCall() {
			var t;
			return (t = this.config.maxEmbeddingsPerCall) != null ? t : 2048
		}
		get supportsParallelCalls() {
			var t;
			return (t = this.config.supportsParallelCalls) != null ? t : !0
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new Rc(t.modelId, t.config)
		}
		get providerOptionsName() {
			return this.config.provider.split(".")[0].trim()
		}
		async doEmbed({
			values: t,
			headers: n,
			abortSignal: o,
			providerOptions: r
		}) {
			var i, s, l, d, c;
			const p = [],
				m = await xe({
					provider: "openai-compatible",
					providerOptions: r,
					schema: Wo
				});
			m != null && p.push({
				type: "deprecated",
				setting: "providerOptions key 'openai-compatible'",
				message: "Use 'openaiCompatible' instead."
			}), Eo({
				rawName: this.providerOptionsName,
				providerOptions: r,
				warnings: p
			});
			const h = Object.assign(m ?? {}, (i = await xe({
				provider: "openaiCompatible",
				providerOptions: r,
				schema: Wo
			})) != null ? i : {}, (s = await xe({
				provider: this.providerOptionsName,
				providerOptions: r,
				schema: Wo
			})) != null ? s : {});
			if (t.length > this.maxEmbeddingsPerCall) throw new Er({
				provider: this.provider,
				modelId: this.modelId,
				maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
				values: t
			});
			const {
				responseHeaders: g,
				value: _,
				rawValue: w
			} = await Ue({
				url: this.config.url({
					path: "/embeddings",
					modelId: this.modelId
				}),
				headers: Ce((d = (l = this.config).headers) == null ? void 0 : d.call(l), n),
				body: {
					model: this.modelId,
					input: t,
					encoding_format: "float",
					dimensions: h.dimensions,
					user: h.user
				},
				failedResponseHandler: Bt((c = this.config.errorStructure) != null ? c : Rn),
				successfulResponseHandler: Me(bb),
				abortSignal: o,
				fetch: this.config.fetch
			});
			return {
				warnings: p,
				embeddings: _.data.map(k => k.embedding),
				usage: _.usage ? {
					tokens: _.usage.prompt_tokens
				} : void 0,
				providerMetadata: _.providerMetadata,
				response: {
					headers: g,
					body: w
				}
			}
		}
	},
	bb = u({
		data: R(u({
			embedding: R(y())
		})),
		usage: u({
			prompt_tokens: y()
		}).nullish(),
		providerMetadata: ke(a(), ke(a(), nt())).optional()
	}),
	wb = class Nc {
		constructor(t, n) {
			this.modelId = t, this.config = n, this.specificationVersion = "v4", this.maxImagesPerCall = 10
		}
		get provider() {
			return this.config.provider
		}
		get providerOptionsKey() {
			return this.config.provider.split(".")[0].trim()
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new Nc(t.modelId, t.config)
		}
		getArgs(t, n) {
			return Eo({
				rawName: this.providerOptionsKey,
				providerOptions: t,
				warnings: n
			}), {
				...t[this.providerOptionsKey],
				...t[nn(this.providerOptionsKey)]
			}
		}
		async doGenerate({
			prompt: t,
			n,
			size: o,
			aspectRatio: r,
			seed: i,
			providerOptions: s,
			headers: l,
			abortSignal: d,
			files: c,
			mask: p
		}) {
			var m, h, g, _, w, k, A, I, E;
			const S = [];
			r != null && S.push({
				type: "unsupported",
				feature: "aspectRatio",
				details: "This model does not support aspect ratio. Use `size` instead."
			}), i != null && S.push({
				type: "unsupported",
				feature: "seed"
			});
			const v = (g = (h = (m = this.config._internal) == null ? void 0 : m.currentDate) == null ? void 0 : h.call(m)) != null ? g : new Date,
				b = this.getArgs(s, S);
			if (c != null && c.length > 0) {
				const {
					value: L,
					responseHeaders: O
				} = await ln({
					url: this.config.url({
						path: "/images/edits",
						modelId: this.modelId
					}),
					headers: Ce((w = (_ = this.config).headers) == null ? void 0 : w.call(_), l),
					formData: ju({
						model: this.modelId,
						prompt: t,
						image: await Promise.all(c.map(B => Ha(B))),
						mask: p != null ? await Ha(p) : void 0,
						n,
						size: o,
						...b
					}),
					failedResponseHandler: Bt((k = this.config.errorStructure) != null ? k : Rn),
					successfulResponseHandler: Me(Va),
					abortSignal: d,
					fetch: this.config.fetch
				});
				return {
					images: L.data.map(B => B.b64_json),
					warnings: S,
					response: {
						timestamp: v,
						modelId: this.modelId,
						headers: O
					}
				}
			}
			const {
				value: T,
				responseHeaders: q
			} = await Ue({
				url: this.config.url({
					path: "/images/generations",
					modelId: this.modelId
				}),
				headers: Ce((I = (A = this.config).headers) == null ? void 0 : I.call(A), l),
				body: {
					model: this.modelId,
					prompt: t,
					n,
					size: o,
					...b,
					response_format: "b64_json"
				},
				failedResponseHandler: Bt((E = this.config.errorStructure) != null ? E : Rn),
				successfulResponseHandler: Me(Va),
				abortSignal: d,
				fetch: this.config.fetch
			});
			return {
				images: T.data.map(L => L.b64_json),
				warnings: S,
				response: {
					timestamp: v,
					modelId: this.modelId,
					headers: q
				}
			}
		}
	},
	Va = u({
		data: R(u({
			b64_json: a()
		}))
	});
async function Ha(e) {
	if (e.type === "url") return Hr(e.url);
	const t = e.data instanceof Uint8Array ? e.data : Ot(e.data);
	return new Blob([t], {
		type: e.mediaType
	})
}
var kb = "3.0.12";

function xb(e) {
	const t = $o(e.baseURL),
		n = e.name,
		o = {
			...e.apiKey && {
				Authorization: `Bearer ${e.apiKey}`
			},
			...e.headers
		},
		r = () => sn(o, `ai-sdk/openai-compatible/${kb}`),
		i = h => ({
			provider: `${n}.${h}`,
			url: ({
				path: g
			}) => {
				const _ = new URL(`${t}${g}`);
				return e.queryParams && (_.search = new URLSearchParams(e.queryParams).toString()), _.toString()
			},
			headers: r,
			fetch: e.fetch
		}),
		s = h => l(h),
		l = h => new db(h, {
			...i("chat"),
			includeUsage: e.includeUsage,
			supportsStructuredOutputs: e.supportsStructuredOutputs,
			supportedUrls: e.supportedUrls,
			transformRequestBody: e.transformRequestBody,
			metadataExtractor: e.metadataExtractor,
			convertUsage: e.convertUsage
		}),
		d = h => new _b(h, {
			...i("completion"),
			includeUsage: e.includeUsage
		}),
		c = h => new vb(h, {
			...i("embedding")
		}),
		p = h => new wb(h, i("image")),
		m = h => s(h);
	return m.specificationVersion = "v4", m.languageModel = s, m.chatModel = l, m.completionModel = d, m.embeddingModel = c, m.textEmbeddingModel = c, m.imageModel = p, m
}
async function Pc(e, t) {
	var s;
	const n = (s = t.apiKey) == null ? void 0 : s.trim();
	if (!n) throw new Error("An API key is required.");
	const o = await bn(`${Ct(t.baseUrl)}/models`, {
			headers: {
				Authorization: `Bearer ${n}`,
				Accept: "application/json"
			},
			signal: t.signal
		}),
		i = (o.data ?? o.models ?? []).filter(l => typeof l.id == "string" && l.id.trim()).map(l => {
			var d;
			return {
				id: l.id.trim(),
				name: l.display_name || l.name || l.id.trim(),
				providerId: e,
				contextWindow: l.context_length ?? l.max_context_length,
				capabilities: {
					tools: typeof l.supports_tools == "boolean" ? l.supports_tools : "unknown",
					vision: typeof l.supports_image == "boolean" ? l.supports_image : typeof l.supports_vision == "boolean" ? l.supports_vision : (d = l.input_modalities) != null && d.includes("image") ? !0 : "unknown",
					multipleImages: "unknown",
					reasoning: typeof l.supports_reasoning == "boolean" ? l.supports_reasoning : "unknown"
				},
				metadata: l.owned_by ? {
					ownedBy: l.owned_by
				} : void 0
			}
		});
	return jn(i)
}

function Mc({
	providerId: e,
	modelId: t,
	apiKey: n,
	baseUrl: o
}) {
	return xb({
		name: `zyntax-${e}`,
		apiKey: n || (e === "ollama" ? "ollama" : void 0),
		baseURL: Ct(o),
		includeUsage: !0
	}).chatModel(t)
}
const Ib = ["kimi", "zai", "deepseek"];

function Tb(e) {
	return {
		definition: xt[e],
		listModels(t) {
			return Pc(e, t)
		},
		createModel(t) {
			return Mc({
				providerId: e,
				...t
			})
		}
	}
}
const Ko = Object.fromEntries(Ib.map(e => [e, Tb(e)]));
var Sb = "4.0.18",
	Cb = ee(() => Q(u({
		error: u({
			code: y().nullable(),
			message: a(),
			status: a()
		})
	}))),
	at = Bt({
		errorSchema: Cb,
		errorToMessage: e => e.error.message
	}),
	Ob = le([u({
		text: a()
	}), u({
		inlineData: u({
			mimeType: a(),
			data: a()
		})
	}), u({
		fileData: u({
			fileUri: a(),
			mimeType: a()
		})
	})]),
	Ab = ee(() => Q(u({
		outputDimensionality: y().optional(),
		taskType: Y(["SEMANTIC_SIMILARITY", "CLASSIFICATION", "CLUSTERING", "RETRIEVAL_DOCUMENT", "RETRIEVAL_QUERY", "QUESTION_ANSWERING", "FACT_VERIFICATION", "CODE_RETRIEVAL_QUERY"]).optional(),
		content: R(R(Ob).min(1).nullable()).optional()
	}))),
	$b = class zc {
		constructor(t, n) {
			this.specificationVersion = "v4", this.maxEmbeddingsPerCall = 100, this.supportsParallelCalls = !0, this.modelId = t, this.config = n
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new zc(t.modelId, t.config)
		}
		get provider() {
			return this.config.provider
		}
		async doEmbed({
			values: t,
			headers: n,
			abortSignal: o,
			providerOptions: r
		}) {
			const i = await xe({
				provider: "google",
				providerOptions: r,
				schema: Ab
			});
			if (t.length > this.maxEmbeddingsPerCall) throw new Er({
				provider: this.provider,
				modelId: this.modelId,
				maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
				values: t
			});
			const s = Ce(this.config.headers ? await ct(this.config.headers) : void 0, n),
				l = i == null ? void 0 : i.content;
			if (l != null && l.length !== t.length) throw new Error(`The number of multimodal content entries (${l.length}) must match the number of values (${t.length}).`);
			if (t.length === 1) {
				const m = l == null ? void 0 : l[0],
					h = t[0] ? [{
						text: t[0]
					}] : [],
					g = m != null ? [...h, ...m] : [{
						text: t[0]
					}],
					{
						responseHeaders: _,
						value: w,
						rawValue: k
					} = await Ue({
						url: `${this.config.baseURL}/models/${this.modelId}:embedContent`,
						headers: s,
						body: {
							model: `models/${this.modelId}`,
							content: {
								parts: g
							},
							outputDimensionality: i == null ? void 0 : i.outputDimensionality,
							taskType: i == null ? void 0 : i.taskType
						},
						failedResponseHandler: at,
						successfulResponseHandler: Me(Rb),
						abortSignal: o,
						fetch: this.config.fetch
					});
				return {
					warnings: [],
					embeddings: [w.embedding.values],
					usage: void 0,
					response: {
						headers: _,
						body: k
					}
				}
			}
			const {
				responseHeaders: d,
				value: c,
				rawValue: p
			} = await Ue({
				url: `${this.config.baseURL}/models/${this.modelId}:batchEmbedContents`,
				headers: s,
				body: {
					requests: t.map((m, h) => {
						const g = l == null ? void 0 : l[h],
							_ = m ? [{
								text: m
							}] : [];
						return {
							model: `models/${this.modelId}`,
							content: {
								role: "user",
								parts: g != null ? [..._, ...g] : [{
									text: m
								}]
							},
							outputDimensionality: i == null ? void 0 : i.outputDimensionality,
							taskType: i == null ? void 0 : i.taskType
						}
					})
				},
				failedResponseHandler: at,
				successfulResponseHandler: Me(Eb),
				abortSignal: o,
				fetch: this.config.fetch
			});
			return {
				warnings: [],
				embeddings: c.embeddings.map(m => m.values),
				usage: void 0,
				response: {
					headers: d,
					body: p
				}
			}
		}
	},
	Eb = ee(() => Q(u({
		embeddings: R(u({
			values: R(y())
		}))
	}))),
	Rb = ee(() => Q(u({
		embedding: u({
			values: R(y())
		})
	})));

function Ga(e) {
	var t, n, o, r;
	if (e == null) return {
		inputTokens: {
			total: void 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: void 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	};
	const i = (t = e.promptTokenCount) != null ? t : 0,
		s = (n = e.candidatesTokenCount) != null ? n : 0,
		l = (o = e.cachedContentTokenCount) != null ? o : 0,
		d = (r = e.thoughtsTokenCount) != null ? r : 0;
	return {
		inputTokens: {
			total: i,
			noCache: i - l,
			cacheRead: l,
			cacheWrite: void 0
		},
		outputTokens: {
			total: s + d,
			text: s,
			reasoning: d
		},
		raw: e
	}
}

function ft(e, t = !0) {
	if (e == null) return;
	if (Nb(e)) return t ? void 0 : typeof e == "object" && e.description ? {
		type: "object",
		description: e.description
	} : {
		type: "object"
	};
	if (typeof e == "boolean") return {
		type: "boolean",
		properties: {}
	};
	const {
		type: n,
		description: o,
		required: r,
		properties: i,
		items: s,
		allOf: l,
		anyOf: d,
		oneOf: c,
		format: p,
		const: m,
		minLength: h,
		enum: g
	} = e, _ = {};
	if (o && (_.description = o), r && (_.required = r), p && (_.format = p), m !== void 0 && (_.enum = [m]), n)
		if (Array.isArray(n)) {
			const w = n.includes("null"),
				k = n.filter(A => A !== "null");
			k.length === 0 ? _.type = "null" : (_.anyOf = k.map(A => ({
				type: A
			})), w && (_.nullable = !0))
		} else _.type = n;
	if (g !== void 0 && (_.enum = g), i != null && (_.properties = Object.entries(i).reduce((w, [k, A]) => (w[k] = ft(A, !1), w), {})), s && (_.items = Array.isArray(s) ? s.map(w => ft(w, !1)) : ft(s, !1)), l && (_.allOf = l.map(w => ft(w, !1))), d)
		if (d.some(w => typeof w == "object" && (w == null ? void 0 : w.type) === "null")) {
			const w = d.filter(k => !(typeof k == "object" && (k == null ? void 0 : k.type) === "null"));
			if (w.length === 1) {
				const k = ft(w[0], !1);
				typeof k == "object" && (_.nullable = !0, Object.assign(_, k))
			} else _.anyOf = w.map(k => ft(k, !1)), _.nullable = !0
		} else _.anyOf = d.map(w => ft(w, !1));
	return c && (_.oneOf = c.map(w => ft(w, !1))), h !== void 0 && (_.minLength = h), _
}

function Nb(e) {
	return e != null && typeof e == "object" && e.type === "object" && (e.properties == null || Object.keys(e.properties).length === 0) && !e.additionalProperties
}
var Pb = "skip_thought_signature_validator",
	Mb = /^data:([^;,]+);base64,(.+)$/s;

function zb(e) {
	const t = Mb.exec(e);
	if (t != null) return {
		mediaType: t[1],
		data: t[2]
	}
}

function Db(e) {
	const t = zb(e);
	if (t != null) return {
		inlineData: {
			mimeType: t.mediaType,
			data: t.data
		}
	}
}

function qb(e, t, n, o) {
	const r = [],
		i = [];
	for (const s of n) switch (s.type) {
		case "text": {
			i.push(s.text);
			break
		}
		case "file": {
			if (s.data.type === "data") r.push({
				inlineData: {
					mimeType: Ge({
						part: s
					}),
					data: De(s.data.data)
				}
			});
			else if (s.data.type === "url") {
				const l = Db(s.data.url.toString());
				l != null ? r.push(l) : i.push(JSON.stringify(s))
			} else i.push(JSON.stringify(s));
			break
		}
		default: {
			i.push(JSON.stringify(s));
			break
		}
	}
	e.push({
		functionResponse: {
			...o != null ? {
				id: o
			} : {},
			name: t,
			response: {
				name: t,
				content: i.length > 0 ? i.join(`
`) : "Tool executed successfully."
			},
			...r.length > 0 ? {
				parts: r
			} : {}
		}
	})
}

function Ub(e, t, n, o) {
	for (const r of n) switch (r.type) {
		case "text":
			e.push({
				functionResponse: {
					...o != null ? {
						id: o
					} : {},
					name: t,
					response: {
						name: t,
						content: r.text
					}
				}
			});
			break;
		case "file": {
			if (r.data.type === "data") {
				const i = ut(r.mediaType);
				e.push({
					inlineData: {
						mimeType: Ge({
							part: r
						}),
						data: De(r.data.data)
					}
				}, {
					text: `Tool executed successfully and returned this ${i === "image" ? "image" : "file"} as a response`
				})
			} else e.push({
				text: JSON.stringify(r)
			});
			break
		}
		default:
			e.push({
				text: JSON.stringify(r)
			});
			break
	}
}

function jb(e, t) {
	var n, o, r, i, s;
	const l = [],
		d = [];
	let c = !0;
	const p = (n = t == null ? void 0 : t.isGemmaModel) != null ? n : !1,
		m = (o = t == null ? void 0 : t.isGemini3Model) != null ? o : !1,
		h = t == null ? void 0 : t.onWarning,
		g = (r = t == null ? void 0 : t.providerOptionsNames) != null ? r : ["google"],
		_ = !g.includes("google"),
		w = (i = t == null ? void 0 : t.supportsFunctionResponseParts) != null ? i : !0;
	let k = !1;
	const A = [],
		I = S => (A.push(S), k = !0, Pb),
		E = S => {
			var v, b, T, q, L;
			for (const O of g) {
				const B = (v = S.providerOptions) == null ? void 0 : v[O];
				if (B != null) return B
			}
			return _ ? (b = S.providerOptions) == null ? void 0 : b.google : (L = (T = S.providerOptions) == null ? void 0 : T.googleVertex) != null ? L : (q = S.providerOptions) == null ? void 0 : q.vertex
		};
	for (const {
			role: S,
			content: v
		}
		of e) switch (S) {
		case "system": {
			if (!c) throw new Oe({
				functionality: "system messages are only supported at the beginning of the conversation"
			});
			l.push({
				text: v
			});
			break
		}
		case "user": {
			c = !1;
			const b = [];
			for (const T of v) switch (T.type) {
				case "text": {
					b.push({
						text: T.text
					});
					break
				}
				case "file": {
					switch (T.data.type) {
						case "url": {
							b.push({
								fileData: {
									mimeType: Ge({
										part: T
									}),
									fileUri: T.data.url.toString()
								}
							});
							break
						}
						case "reference": {
							if (_) throw new Oe({
								functionality: "file parts with provider references"
							});
							b.push({
								fileData: {
									mimeType: Ge({
										part: T
									}),
									fileUri: zt({
										reference: T.data.reference,
										provider: "google"
									})
								}
							});
							break
						}
						case "text": {
							b.push({
								inlineData: {
									mimeType: Zt(T.mediaType) ? T.mediaType : "text/plain",
									data: De(new TextEncoder().encode(T.data.text))
								}
							});
							break
						}
						case "data": {
							b.push({
								inlineData: {
									mimeType: Ge({
										part: T
									}),
									data: De(T.data.data)
								}
							});
							break
						}
					}
					break
				}
			}
			d.push({
				role: "user",
				parts: b
			});
			break
		}
		case "assistant": {
			c = !1, d.push({
				role: "model",
				parts: v.map(b => {
					const T = E(b),
						q = (T == null ? void 0 : T.thoughtSignature) != null ? String(T.thoughtSignature) : void 0;
					switch (b.type) {
						case "text":
							return b.text.length === 0 ? void 0 : {
								text: b.text,
								thoughtSignature: q
							};
						case "reasoning":
							return b.text.length === 0 ? void 0 : {
								text: b.text,
								thought: !0,
								thoughtSignature: q
							};
						case "reasoning-file": {
							switch (b.data.type) {
								case "url":
									throw new Oe({
										functionality: "File data URLs in assistant messages are not supported"
									});
								case "data":
									return {
										inlineData: {
											mimeType: b.mediaType,
											data: De(b.data.data)
										}, thought: !0, thoughtSignature: q
									}
							}
							break
						}
						case "file": {
							switch (b.data.type) {
								case "url":
									throw new Oe({
										functionality: "File data URLs in assistant messages are not supported"
									});
								case "reference": {
									if (_) throw new Oe({
										functionality: "file parts with provider references"
									});
									return {
										fileData: {
											mimeType: b.mediaType,
											fileUri: zt({
												reference: b.data.reference,
												provider: "google"
											})
										},
										...(T == null ? void 0 : T.thought) === !0 ? {
											thought: !0
										} : {},
										thoughtSignature: q
									}
								}
								case "text":
									return {
										inlineData: {
											mimeType: Zt(b.mediaType) ? b.mediaType : "text/plain",
											data: De(new TextEncoder().encode(b.data.text))
										}, ...(T == null ? void 0 : T.thought) === !0 ? {
											thought: !0
										} : {}, thoughtSignature: q
									};
								case "data":
									return {
										inlineData: {
											mimeType: b.mediaType,
											data: De(b.data.data)
										}, ...(T == null ? void 0 : T.thought) === !0 ? {
											thought: !0
										} : {}, thoughtSignature: q
									}
							}
							break
						}
						case "tool-call": {
							const L = (T == null ? void 0 : T.serverToolCallId) != null ? String(T.serverToolCallId) : void 0,
								O = (T == null ? void 0 : T.serverToolType) != null ? String(T.serverToolType) : void 0,
								B = q ?? (m ? I(b.toolName) : void 0);
							return L && O ? {
								toolCall: {
									toolType: O,
									args: typeof b.input == "string" ? Jt(b.input) : b.input,
									id: L
								},
								thoughtSignature: B
							} : {
								functionCall: {
									...b.toolCallId != null ? {
										id: b.toolCallId
									} : {},
									name: b.toolName,
									args: b.input
								},
								thoughtSignature: B
							}
						}
						case "tool-result": {
							const L = (T == null ? void 0 : T.serverToolCallId) != null ? String(T.serverToolCallId) : void 0,
								O = (T == null ? void 0 : T.serverToolType) != null ? String(T.serverToolType) : void 0;
							return L && O ? {
								toolResponse: {
									toolType: O,
									response: b.output.type === "json" ? b.output.value : {},
									id: L
								},
								thoughtSignature: q
							} : void 0
						}
					}
				}).filter(b => b !== void 0)
			});
			break
		}
		case "tool": {
			c = !1;
			const b = [];
			for (const T of v) {
				if (T.type === "tool-approval-response") continue;
				const q = E(T),
					L = (q == null ? void 0 : q.serverToolCallId) != null ? String(q.serverToolCallId) : void 0,
					O = (q == null ? void 0 : q.serverToolType) != null ? String(q.serverToolType) : void 0;
				if (L && O) {
					const F = (q == null ? void 0 : q.thoughtSignature) != null ? String(q.thoughtSignature) : void 0;
					if (d.length > 0) {
						const z = d[d.length - 1];
						if (z.role === "model") {
							z.parts.push({
								toolResponse: {
									toolType: O,
									response: T.output.type === "json" ? T.output.value : {},
									id: L
								},
								thoughtSignature: F
							});
							continue
						}
					}
				}
				const B = T.output;
				B.type === "content" ? w ? qb(b, T.toolName, B.value, T.toolCallId) : Ub(b, T.toolName, B.value, T.toolCallId) : b.push({
					functionResponse: {
						...T.toolCallId != null ? {
							id: T.toolCallId
						} : {},
						name: T.toolName,
						response: {
							name: T.toolName,
							content: B.type === "execution-denied" ? (s = B.reason) != null ? s : "Tool call execution denied." : B.value
						}
					}
				})
			}
			d.push({
				role: "user",
				parts: b
			});
			break
		}
	}
	if (p && l.length > 0 && d.length > 0 && d[0].role === "user") {
		const S = l.map(v => v.text).join(`

`);
		d[0].parts.unshift({
			text: S + `

`
		})
	}
	if (k && h != null) {
		const S = Array.from(new Set(A));
		h({
			type: "other",
			message: `Replayed ${A.length} \`functionCall\` part(s) for a Gemini 3 model without a \`thoughtSignature\` (tools: ${S.map(v => `\`${v}\``).join(", ")}). Injected the documented \`skip_thought_signature_validator\` sentinel to keep the request from failing with HTTP 400. The likely cause is application code that drops \`providerOptions.google.thoughtSignature\` when persisting or serializing assistant tool-call messages. See https://ai.google.dev/gemini-api/docs/thought-signatures.`
		})
	}
	return {
		systemInstruction: l.length > 0 && !p ? {
			parts: l
		} : void 0,
		contents: d
	}
}

function pr(e) {
	return e.includes("/") ? e : `models/${e}`
}
var Ja = ee(() => Q(u({
	responseModalities: R(Y(["TEXT", "IMAGE"])).optional(),
	thinkingConfig: u({
		thinkingBudget: y().optional(),
		includeThoughts: _e().optional(),
		thinkingLevel: Y(["minimal", "low", "medium", "high"]).optional()
	}).optional(),
	cachedContent: a().optional(),
	structuredOutputs: _e().optional(),
	safetySettings: R(u({
		category: Y(["HARM_CATEGORY_UNSPECIFIED", "HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT", "HARM_CATEGORY_CIVIC_INTEGRITY"]),
		threshold: Y(["HARM_BLOCK_THRESHOLD_UNSPECIFIED", "BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"])
	})).optional(),
	threshold: Y(["HARM_BLOCK_THRESHOLD_UNSPECIFIED", "BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]).optional(),
	audioTimestamp: _e().optional(),
	labels: ke(a(), a()).optional(),
	mediaResolution: Y(["MEDIA_RESOLUTION_UNSPECIFIED", "MEDIA_RESOLUTION_LOW", "MEDIA_RESOLUTION_MEDIUM", "MEDIA_RESOLUTION_HIGH"]).optional(),
	imageConfig: u({
		aspectRatio: Y(["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9", "1:8", "8:1", "1:4", "4:1"]).optional(),
		imageSize: Y(["1K", "2K", "4K", "512"]).optional(),
		personGeneration: Y(["PERSON_GENERATION_UNSPECIFIED", "ALLOW_ALL", "ALLOW_ADULT", "ALLOW_NONE"]).optional(),
		prominentPeople: Y(["PROMINENT_PEOPLE_UNSPECIFIED", "ALLOW_PROMINENT_PEOPLE", "BLOCK_PROMINENT_PEOPLE"]).optional(),
		imageOutputOptions: u({
			mimeType: Y(["image/jpeg", "image/png"]).optional(),
			compressionQuality: y().optional()
		}).optional()
	}).optional(),
	retrievalConfig: u({
		latLng: u({
			latitude: y(),
			longitude: y()
		}).optional()
	}).optional(),
	streamFunctionCallArguments: _e().optional(),
	serviceTier: Y(["standard", "flex", "priority"]).optional(),
	sharedRequestType: Y(["priority", "flex", "standard"]).optional(),
	requestType: Y(["shared"]).optional()
})));

function Lb({
	tools: e,
	toolChoice: t,
	modelId: n,
	isVertexProvider: o = !1
}) {
	var r, i;
	e = e != null && e.length ? e : void 0;
	const s = [],
		l = ["gemini-flash-latest", "gemini-flash-lite-latest", "gemini-pro-latest"].some(k => k === n),
		d = n.includes("gemini-2") || n.includes("gemini-3") || n.includes("nano-banana") || l,
		c = n.includes("gemini-3"),
		p = n.includes("gemini-2.5") || n.includes("gemini-3");
	if (e == null) return {
		tools: void 0,
		toolConfig: void 0,
		toolWarnings: s
	};
	const m = e.some(k => k.type === "function"),
		h = e.some(k => k.type === "provider");
	if (m && h && !c && s.push({
			type: "unsupported",
			feature: "combination of function and provider-defined tools"
		}), h) {
		const k = [];
		if (e.filter(I => I.type === "provider").forEach(I => {
				switch (I.id) {
					case "google.google_search":
						d ? k.push({
							googleSearch: {
								...I.args
							}
						}) : s.push({
							type: "unsupported",
							feature: `provider-defined tool ${I.id}`,
							details: "Google Search requires Gemini 2.0 or newer."
						});
						break;
					case "google.enterprise_web_search":
						d ? k.push({
							enterpriseWebSearch: {}
						}) : s.push({
							type: "unsupported",
							feature: `provider-defined tool ${I.id}`,
							details: "Enterprise Web Search requires Gemini 2.0 or newer."
						});
						break;
					case "google.url_context":
						d ? k.push({
							urlContext: {}
						}) : s.push({
							type: "unsupported",
							feature: `provider-defined tool ${I.id}`,
							details: "The URL context tool is not supported with other Gemini models than Gemini 2."
						});
						break;
					case "google.code_execution":
						d ? k.push({
							codeExecution: {}
						}) : s.push({
							type: "unsupported",
							feature: `provider-defined tool ${I.id}`,
							details: "The code execution tool is not supported with other Gemini models than Gemini 2."
						});
						break;
					case "google.file_search":
						p ? k.push({
							fileSearch: {
								...I.args
							}
						}) : s.push({
							type: "unsupported",
							feature: `provider-defined tool ${I.id}`,
							details: "The file search tool is only supported with Gemini 2.5 models and Gemini 3 models."
						});
						break;
					case "google.vertex_rag_store":
						d ? k.push({
							retrieval: {
								vertex_rag_store: {
									rag_resources: {
										rag_corpus: I.args.ragCorpus
									},
									similarity_top_k: I.args.topK
								}
							}
						}) : s.push({
							type: "unsupported",
							feature: `provider-defined tool ${I.id}`,
							details: "The RAG store tool is not supported with other Gemini models than Gemini 2."
						});
						break;
					case "google.google_maps":
						d ? k.push({
							googleMaps: {}
						}) : s.push({
							type: "unsupported",
							feature: `provider-defined tool ${I.id}`,
							details: "The Google Maps grounding tool is not supported with Gemini models other than Gemini 2 or newer."
						});
						break;
					default:
						s.push({
							type: "unsupported",
							feature: `provider-defined tool ${I.id}`
						});
						break
				}
			}), m && c && k.length > 0) {
			const I = [];
			for (const S of e) S.type === "function" && I.push({
				name: S.name,
				description: (r = S.description) != null ? r : "",
				parameters: ft(S.inputSchema)
			});
			const E = {
				functionCallingConfig: {
					mode: "VALIDATED"
				},
				...!o && {
					includeServerSideToolInvocations: !0
				}
			};
			if (t != null) switch (t.type) {
				case "auto":
					break;
				case "none":
					E.functionCallingConfig = {
						mode: "NONE"
					};
					break;
				case "required":
					E.functionCallingConfig = {
						mode: "ANY"
					};
					break;
				case "tool":
					E.functionCallingConfig = {
						mode: "ANY",
						allowedFunctionNames: [t.toolName]
					};
					break
			}
			return {
				tools: [...k, {
					functionDeclarations: I
				}],
				toolConfig: E,
				toolWarnings: s
			}
		}
		return {
			tools: k.length > 0 ? k : void 0,
			toolConfig: void 0,
			toolWarnings: s
		}
	}
	const g = [];
	let _ = !1;
	for (const k of e) switch (k.type) {
		case "function":
			g.push({
				name: k.name,
				description: (i = k.description) != null ? i : "",
				parameters: ft(k.inputSchema)
			}), k.strict === !0 && (_ = !0);
			break;
		default:
			s.push({
				type: "unsupported",
				feature: `function tool ${k.name}`
			});
			break
	}
	if (t == null) return {
		tools: [{
			functionDeclarations: g
		}],
		toolConfig: _ ? {
			functionCallingConfig: {
				mode: "VALIDATED"
			}
		} : void 0,
		toolWarnings: s
	};
	const w = t.type;
	switch (w) {
		case "auto":
			return {
				tools: [{
					functionDeclarations: g
				}], toolConfig: {
					functionCallingConfig: {
						mode: _ ? "VALIDATED" : "AUTO"
					}
				}, toolWarnings: s
			};
		case "none":
			return {
				tools: [{
					functionDeclarations: g
				}], toolConfig: {
					functionCallingConfig: {
						mode: "NONE"
					}
				}, toolWarnings: s
			};
		case "required":
			return {
				tools: [{
					functionDeclarations: g
				}], toolConfig: {
					functionCallingConfig: {
						mode: _ ? "VALIDATED" : "ANY"
					}
				}, toolWarnings: s
			};
		case "tool":
			return {
				tools: [{
					functionDeclarations: g
				}], toolConfig: {
					functionCallingConfig: {
						mode: _ ? "VALIDATED" : "ANY",
						allowedFunctionNames: [t.toolName]
					}
				}, toolWarnings: s
			};
		default: {
			const k = w;
			throw new Oe({
				functionality: `tool choice type: ${k}`
			})
		}
	}
}
var Zb = class {
	constructor() {
		this.accumulatedArgs = {}, this.jsonText = "", this.pathStack = [], this.stringOpen = !1
	}
	processPartialArgs(e) {
		let t = "";
		for (const n of e) {
			const o = n.jsonPath.replace(/^\$\./, "");
			if (!o) continue;
			const r = Fb(o),
				i = Vb(this.accumulatedArgs, r);
			if (n.stringValue != null && i !== void 0) {
				const d = JSON.stringify(n.stringValue).slice(1, -1);
				Ka(this.accumulatedArgs, r, i + n.stringValue), t += d;
				continue
			}
			const l = Hb(n);
			l != null && (Ka(this.accumulatedArgs, r, l.value), t += this.emitNavigationTo(r, n, l.json))
		}
		return this.jsonText += t, {
			currentJSON: this.accumulatedArgs,
			textDelta: t
		}
	}
	finalize() {
		const e = JSON.stringify(this.accumulatedArgs),
			t = e.slice(this.jsonText.length);
		return {
			finalJSON: e,
			closingDelta: t
		}
	}
	ensureRoot() {
		return this.pathStack.length === 0 ? (this.pathStack.push({
			segment: "",
			isArray: !1,
			childCount: 0
		}), "{") : ""
	}
	emitNavigationTo(e, t, n) {
		let o = "";
		this.stringOpen && (o += '"', this.stringOpen = !1), o += this.ensureRoot();
		const r = e.slice(0, -1),
			i = e[e.length - 1],
			s = this.findCommonStackDepth(r);
		return o += this.closeDownTo(s), o += this.openDownTo(r, i), o += this.emitLeaf(i, t, n), o
	}
	findCommonStackDepth(e) {
		const t = Math.min(this.pathStack.length - 1, e.length);
		let n = 0;
		for (let o = 0; o < t && this.pathStack[o + 1].segment === e[o]; o++) n++;
		return n + 1
	}
	closeDownTo(e) {
		let t = "";
		for (; this.pathStack.length > e;) {
			const n = this.pathStack.pop();
			t += n.isArray ? "]" : "}"
		}
		return t
	}
	openDownTo(e, t) {
		let n = "";
		const o = this.pathStack.length - 1;
		for (let r = o; r < e.length; r++) {
			const i = e[r],
				s = this.pathStack[this.pathStack.length - 1];
			s.childCount > 0 && (n += ","), s.childCount++, typeof i == "string" && (n += `${JSON.stringify(i)}:`);
			const d = typeof(r + 1 < e.length ? e[r + 1] : t) == "number";
			n += d ? "[" : "{", this.pathStack.push({
				segment: i,
				isArray: d,
				childCount: 0
			})
		}
		return n
	}
	emitLeaf(e, t, n) {
		let o = "";
		const r = this.pathStack[this.pathStack.length - 1];
		return r.childCount > 0 && (o += ","), r.childCount++, typeof e == "string" && (o += `${JSON.stringify(e)}:`), t.stringValue != null && t.willContinue ? (o += n.slice(0, -1), this.stringOpen = !0) : o += n, o
	}
};

function Fb(e) {
	const t = [];
	for (const n of e.split(".")) {
		const o = n.indexOf("[");
		if (o === -1) t.push(n);
		else {
			o > 0 && t.push(n.slice(0, o));
			for (const r of n.matchAll(/\[(\d+)\]/g)) t.push(parseInt(r[1], 10))
		}
	}
	return t
}
var Bb = Object.prototype.hasOwnProperty;

function Dc(e, t) {
	return Bb.call(e, t)
}

function Wa(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	})
}

function Vb(e, t) {
	let n = e;
	for (const o of t) {
		if (n == null || typeof n != "object") return;
		const r = n;
		if (!Dc(r, o)) return;
		n = r[o]
	}
	return n
}

function Ka(e, t, n) {
	let o = e;
	for (let r = 0; r < t.length - 1; r++) {
		const i = t[r],
			s = t[r + 1];
		(!Dc(o, i) || o[i] == null) && Wa(o, i, typeof s == "number" ? [] : {}), o = o[i]
	}
	Wa(o, t[t.length - 1], n)
}

function Hb(e) {
	var t, n;
	const o = (n = (t = e.stringValue) != null ? t : e.numberValue) != null ? n : e.boolValue;
	if (o != null) return {
		value: o,
		json: JSON.stringify(o)
	};
	if ("nullValue" in e) return {
		value: null,
		json: "null"
	}
}

function Ya({
	finishReason: e,
	hasToolCalls: t
}) {
	switch (e) {
		case "STOP":
			return t ? "tool-calls" : "stop";
		case "MAX_TOKENS":
			return "length";
		case "IMAGE_SAFETY":
		case "RECITATION":
		case "SAFETY":
		case "BLOCKLIST":
		case "PROHIBITED_CONTENT":
		case "SPII":
			return "content-filter";
		case "MALFORMED_FUNCTION_CALL":
			return "error";
		case "FINISH_REASON_UNSPECIFIED":
		case "OTHER":
		default:
			return "other"
	}
}
var Gb = ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"],
	qc = class Uc {
		constructor(t, n) {
			this.specificationVersion = "v4";
			var o;
			this.modelId = t, this.config = n, this.generateId = (o = n.generateId) != null ? o : ze
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new Uc(t.modelId, t.config)
		}
		get provider() {
			return this.config.provider
		}
		get supportedUrls() {
			var t, n, o;
			return (o = (n = (t = this.config).supportedUrls) == null ? void 0 : n.call(t)) != null ? o : {}
		}
		async getArgs({
			prompt: t,
			maxOutputTokens: n,
			temperature: o,
			topP: r,
			topK: i,
			frequencyPenalty: s,
			presencePenalty: l,
			stopSequences: d,
			responseFormat: c,
			seed: p,
			tools: m,
			toolChoice: h,
			reasoning: g,
			providerOptions: _
		}, {
			isStreaming: w = !1
		} = {}) {
			var k, A, I;
			const E = [],
				S = this.config.provider.includes("vertex") ? ["googleVertex", "vertex"] : ["google"];
			let v;
			for (const W of S)
				if (v = await xe({
						provider: W,
						providerOptions: _,
						schema: Ja
					}), v != null) break;
			v == null && !S.includes("google") && (v = await xe({
				provider: "google",
				providerOptions: _,
				schema: Ja
			}));
			const b = this.config.provider.startsWith("google.vertex.");
			m != null && m.some(W => W.type === "provider" && W.id === "google.vertex_rag_store") && !b && E.push({
				type: "other",
				message: `The 'vertex_rag_store' tool is only supported with the Google Vertex provider and might not be supported or could behave unexpectedly with the current Google provider (${this.config.provider}).`
			}), v != null && v.streamFunctionCallArguments && !b && E.push({
				type: "other",
				message: `'streamFunctionCallArguments' is only supported on the Vertex AI API and will be ignored with the current Google provider (${this.config.provider}). See https://docs.cloud.google.com/vertex-ai/generative-ai/docs/multimodal/function-calling#streaming-fc`
			}), v != null && v.serviceTier && b && E.push({
				type: "other",
				message: "'serviceTier' is a Gemini API option and is not supported on Vertex AI. Use 'sharedRequestType' (and optionally 'requestType') instead. See https://docs.cloud.google.com/vertex-ai/generative-ai/docs/priority-paygo"
			}), (v != null && v.sharedRequestType || v != null && v.requestType) && !b && E.push({
				type: "other",
				message: `'sharedRequestType' and 'requestType' are Vertex AI options and are ignored with the current Google provider (${this.config.provider}).`
			});
			const T = b && (v != null && v.sharedRequestType || v != null && v.requestType) ? {
					...v.sharedRequestType && {
						"X-Vertex-AI-LLM-Shared-Request-Type": v.sharedRequestType
					},
					...v.requestType && {
						"X-Vertex-AI-LLM-Request-Type": v.requestType
					}
				} : void 0,
				q = b || v == null ? void 0 : v.serviceTier;
			let L = v == null ? void 0 : v.imageConfig;
			if (L != null && !b) {
				const {
					personGeneration: W,
					prominentPeople: ce,
					imageOutputOptions: ne,
					...de
				} = L, X = Object.entries({
					personGeneration: W,
					prominentPeople: ce,
					imageOutputOptions: ne
				}).filter(([, V]) => V != null).map(([V]) => `'imageConfig.${V}'`);
				X.length > 0 && (E.push({
					type: "other",
					message: `${X.join(", ")} ${X.length === 1 ? "is a Vertex AI option and is" : "are Vertex AI options and are"} ignored with the current Google provider (${this.config.provider}).`
				}), L = de)
			}
			const O = this.modelId.toLowerCase().startsWith("gemma-"),
				B = /^gemini-3[.-]/.test(this.modelId),
				F = B,
				{
					contents: z,
					systemInstruction: N
				} = jb(t, {
					isGemmaModel: O,
					isGemini3Model: B,
					onWarning: W => E.push(W),
					providerOptionsNames: S,
					supportsFunctionResponseParts: F
				}),
				{
					tools: oe,
					toolConfig: te,
					toolWarnings: P
				} = Lb({
					tools: m,
					toolChoice: h,
					modelId: this.modelId,
					isVertexProvider: b
				}),
				H = Yb({
					reasoning: g,
					modelId: this.modelId,
					warnings: E
				}),
				ge = v != null && v.thinkingConfig || H ? {
					...H,
					...v == null ? void 0 : v.thinkingConfig
				} : void 0,
				J = w && b ? (k = v == null ? void 0 : v.streamFunctionCallArguments) != null ? k : !1 : void 0,
				M = v == null ? void 0 : v.threshold,
				se = (A = v == null ? void 0 : v.safetySettings) != null ? A : M != null ? Gb.map(W => ({
					category: W,
					threshold: M
				})) : void 0,
				U = te || J || v != null && v.retrievalConfig ? {
					...te,
					...J && {
						functionCallingConfig: {
							...te == null ? void 0 : te.functionCallingConfig,
							streamFunctionCallArguments: !0
						}
					},
					...(v == null ? void 0 : v.retrievalConfig) && {
						retrievalConfig: v.retrievalConfig
					}
				} : void 0;
			return {
				args: {
					generationConfig: {
						maxOutputTokens: n,
						temperature: o,
						topK: i,
						topP: r,
						frequencyPenalty: s,
						presencePenalty: l,
						stopSequences: d,
						seed: p,
						responseMimeType: (c == null ? void 0 : c.type) === "json" ? "application/json" : void 0,
						responseSchema: (c == null ? void 0 : c.type) === "json" && c.schema != null && ((I = v == null ? void 0 : v.structuredOutputs) == null || I) ? ft(c.schema) : void 0,
						...(v == null ? void 0 : v.audioTimestamp) && {
							audioTimestamp: v.audioTimestamp
						},
						responseModalities: v == null ? void 0 : v.responseModalities,
						thinkingConfig: ge,
						...(v == null ? void 0 : v.mediaResolution) && {
							mediaResolution: v.mediaResolution
						},
						...L && {
							imageConfig: L
						}
					},
					contents: z,
					systemInstruction: O ? void 0 : N,
					safetySettings: se,
					tools: oe,
					toolConfig: U,
					cachedContent: v == null ? void 0 : v.cachedContent,
					labels: v == null ? void 0 : v.labels,
					serviceTier: q
				},
				warnings: [...E, ...P],
				providerOptionsNames: S,
				extraHeaders: T
			}
		}
		async doGenerate(t) {
			var n, o, r, i, s, l, d, c, p, m, h, g, _, w, k, A, I, E;
			const {
				args: S,
				warnings: v,
				providerOptionsNames: b,
				extraHeaders: T
			} = await this.getArgs(t), q = J => Object.fromEntries(b.map(M => [M, J])), L = Ce(this.config.headers ? await ct(this.config.headers) : void 0, t.headers, T), {
				responseHeaders: O,
				value: B,
				rawValue: F
			} = await Ue({
				url: `${this.config.baseURL}/${pr(this.modelId)}:generateContent`,
				headers: L,
				body: S,
				failedResponseHandler: at,
				successfulResponseHandler: Me(tw),
				abortSignal: t.abortSignal,
				fetch: this.config.fetch
			}), z = B.candidates[0], N = [], oe = (o = (n = z.content) == null ? void 0 : n.parts) != null ? o : [], te = B.usageMetadata;
			let P, H;
			for (const J of oe)
				if ("executableCode" in J && ((r = J.executableCode) != null && r.code)) {
					const M = this.config.generateId();
					P = M, N.push({
						type: "tool-call",
						toolCallId: M,
						toolName: "code_execution",
						input: JSON.stringify(J.executableCode),
						providerExecuted: !0
					})
				} else if ("codeExecutionResult" in J && J.codeExecutionResult) N.push({
				type: "tool-result",
				toolCallId: P,
				toolName: "code_execution",
				result: {
					outcome: J.codeExecutionResult.outcome,
					output: (i = J.codeExecutionResult.output) != null ? i : ""
				}
			}), P = void 0;
			else if ("text" in J && J.text != null) {
				const M = J.thoughtSignature ? q({
					thoughtSignature: J.thoughtSignature
				}) : void 0;
				if (J.text.length === 0) {
					if (M != null && N.length > 0) {
						const se = N[N.length - 1];
						se.providerMetadata = M
					}
				} else N.push({
					type: J.thought === !0 ? "reasoning" : "text",
					text: J.text,
					providerMetadata: M
				})
			} else if ("functionCall" in J && J.functionCall.name != null) N.push({
				type: "tool-call",
				toolCallId: (s = J.functionCall.id) != null ? s : this.config.generateId(),
				toolName: J.functionCall.name,
				input: JSON.stringify((l = J.functionCall.args) != null ? l : {}),
				providerMetadata: J.thoughtSignature ? q({
					thoughtSignature: J.thoughtSignature
				}) : void 0
			});
			else if ("inlineData" in J) {
				const M = J.thought === !0,
					se = !!J.thoughtSignature;
				N.push({
					type: M ? "reasoning-file" : "file",
					data: {
						type: "data",
						data: J.inlineData.data
					},
					mediaType: J.inlineData.mimeType,
					providerMetadata: se ? q({
						thoughtSignature: J.thoughtSignature
					}) : void 0
				})
			} else if ("toolCall" in J && J.toolCall) {
				const M = (d = J.toolCall.id) != null ? d : this.config.generateId();
				H = M, N.push({
					type: "tool-call",
					toolCallId: M,
					toolName: `server:${J.toolCall.toolType}`,
					input: JSON.stringify((c = J.toolCall.args) != null ? c : {}),
					providerExecuted: !0,
					dynamic: !0,
					providerMetadata: J.thoughtSignature ? q({
						thoughtSignature: J.thoughtSignature,
						serverToolCallId: M,
						serverToolType: J.toolCall.toolType
					}) : q({
						serverToolCallId: M,
						serverToolType: J.toolCall.toolType
					})
				})
			} else if ("toolResponse" in J && J.toolResponse) {
				const M = (p = H ?? J.toolResponse.id) != null ? p : this.config.generateId();
				N.push({
					type: "tool-result",
					toolCallId: M,
					toolName: `server:${J.toolResponse.toolType}`,
					result: (m = J.toolResponse.response) != null ? m : {},
					providerMetadata: J.thoughtSignature ? q({
						thoughtSignature: J.thoughtSignature,
						serverToolCallId: M,
						serverToolType: J.toolResponse.toolType
					}) : q({
						serverToolCallId: M,
						serverToolType: J.toolResponse.toolType
					})
				}), H = void 0
			}
			const ge = (h = Xa({
				groundingMetadata: z.groundingMetadata,
				generateId: this.config.generateId
			})) != null ? h : [];
			for (const J of ge) N.push(J);
			return {
				content: N,
				finishReason: {
					unified: Ya({
						finishReason: z.finishReason,
						hasToolCalls: N.some(J => J.type === "tool-call" && !J.providerExecuted)
					}),
					raw: (g = z.finishReason) != null ? g : void 0
				},
				usage: Ga(te),
				warnings: v,
				providerMetadata: q({
					promptFeedback: (_ = B.promptFeedback) != null ? _ : null,
					groundingMetadata: (w = z.groundingMetadata) != null ? w : null,
					urlContextMetadata: (k = z.urlContextMetadata) != null ? k : null,
					safetyRatings: (A = z.safetyRatings) != null ? A : null,
					usageMetadata: te ?? null,
					finishMessage: (I = z.finishMessage) != null ? I : null,
					serviceTier: (E = te == null ? void 0 : te.serviceTier) != null ? E : null
				}),
				request: {
					body: S
				},
				response: {
					headers: O,
					body: F
				}
			}
		}
		async doStream(t) {
			const {
				args: n,
				warnings: o,
				providerOptionsNames: r,
				extraHeaders: i
			} = await this.getArgs(t, {
				isStreaming: !0
			}), s = L => Object.fromEntries(r.map(O => [O, L])), l = Ce(this.config.headers ? await ct(this.config.headers) : void 0, t.headers, i), {
				responseHeaders: d,
				value: c
			} = await Ue({
				url: `${this.config.baseURL}/${pr(this.modelId)}:streamGenerateContent?alt=sse`,
				headers: l,
				body: n,
				failedResponseHandler: at,
				successfulResponseHandler: Dt(nw),
				abortSignal: t.abortSignal,
				fetch: this.config.fetch
			});
			let p = {
					unified: "other",
					raw: void 0
				},
				m, h, g = null,
				_ = null;
			const w = this.config.generateId;
			let k = !1,
				A = null,
				I = null,
				E = 0;
			const S = new Set;
			let v, b;
			const T = [],
				q = L => {
					const O = T.pop();
					if (O == null) return;
					const {
						finalJSON: B,
						closingDelta: F
					} = O.accumulator.finalize();
					F.length > 0 && L.enqueue({
						type: "tool-input-delta",
						id: O.toolCallId,
						delta: F,
						providerMetadata: O.providerMetadata
					}), L.enqueue({
						type: "tool-input-end",
						id: O.toolCallId,
						providerMetadata: O.providerMetadata
					}), L.enqueue({
						type: "tool-call",
						toolCallId: O.toolCallId,
						toolName: O.toolName,
						input: B,
						providerMetadata: O.providerMetadata
					}), k = !0
				};
			return {
				stream: c.pipeThrough(new TransformStream({
					start(L) {
						L.enqueue({
							type: "stream-start",
							warnings: o
						})
					},
					transform(L, O) {
						var B, F, z, N, oe, te, P, H, ge, J, M, se, U, W, ce, ne;
						if (t.includeRawChunks && O.enqueue({
								type: "raw",
								rawValue: L.rawValue
							}), !L.success) {
							O.enqueue({
								type: "error",
								error: L.error
							});
							return
						}
						const de = L.value,
							X = de.usageMetadata;
						X != null && (m = X);
						const V = (B = de.candidates) == null ? void 0 : B[0];
						if (V == null) return;
						const j = V.content;
						V.groundingMetadata != null && (g = V.groundingMetadata), V.urlContextMetadata != null && (_ = V.urlContextMetadata);
						const ae = Xa({
							groundingMetadata: V.groundingMetadata,
							generateId: w
						});
						if (ae != null)
							for (const Z of ae) Z.sourceType === "url" && !S.has(Z.url) && (S.add(Z.url), O.enqueue(Z));
						if (j != null) {
							const Z = (F = j.parts) != null ? F : [];
							for (const x of Z)
								if ("executableCode" in x && ((z = x.executableCode) != null && z.code)) {
									const D = w();
									v = D, O.enqueue({
										type: "tool-call",
										toolCallId: D,
										toolName: "code_execution",
										input: JSON.stringify(x.executableCode),
										providerExecuted: !0
									})
								} else if ("codeExecutionResult" in x && x.codeExecutionResult) {
								const D = v;
								D && (O.enqueue({
									type: "tool-result",
									toolCallId: D,
									toolName: "code_execution",
									result: {
										outcome: x.codeExecutionResult.outcome,
										output: (N = x.codeExecutionResult.output) != null ? N : ""
									}
								}), v = void 0)
							} else if ("text" in x && x.text != null) {
								const D = x.thoughtSignature ? s({
									thoughtSignature: x.thoughtSignature
								}) : void 0;
								x.text.length === 0 ? D != null && A !== null && O.enqueue({
									type: "text-delta",
									id: A,
									delta: "",
									providerMetadata: D
								}) : x.thought === !0 ? (A !== null && (O.enqueue({
									type: "text-end",
									id: A
								}), A = null), I === null && (I = String(E++), O.enqueue({
									type: "reasoning-start",
									id: I,
									providerMetadata: D
								})), O.enqueue({
									type: "reasoning-delta",
									id: I,
									delta: x.text,
									providerMetadata: D
								})) : (I !== null && (O.enqueue({
									type: "reasoning-end",
									id: I
								}), I = null), A === null && (A = String(E++), O.enqueue({
									type: "text-start",
									id: A,
									providerMetadata: D
								})), O.enqueue({
									type: "text-delta",
									id: A,
									delta: x.text,
									providerMetadata: D
								}))
							} else if ("inlineData" in x) {
								A !== null && (O.enqueue({
									type: "text-end",
									id: A
								}), A = null), I !== null && (O.enqueue({
									type: "reasoning-end",
									id: I
								}), I = null);
								const D = x.thought === !0,
									G = !!x.thoughtSignature ? s({
										thoughtSignature: x.thoughtSignature
									}) : void 0;
								O.enqueue({
									type: D ? "reasoning-file" : "file",
									mediaType: x.inlineData.mimeType,
									data: {
										type: "data",
										data: x.inlineData.data
									},
									providerMetadata: G
								})
							} else if ("toolCall" in x && x.toolCall) {
								const D = (oe = x.toolCall.id) != null ? oe : w();
								b = D;
								const C = s({
									...x.thoughtSignature ? {
										thoughtSignature: x.thoughtSignature
									} : {},
									serverToolCallId: D,
									serverToolType: x.toolCall.toolType
								});
								O.enqueue({
									type: "tool-call",
									toolCallId: D,
									toolName: `server:${x.toolCall.toolType}`,
									input: JSON.stringify((te = x.toolCall.args) != null ? te : {}),
									providerExecuted: !0,
									dynamic: !0,
									providerMetadata: C
								})
							} else if ("toolResponse" in x && x.toolResponse) {
								const D = (P = b ?? x.toolResponse.id) != null ? P : w(),
									C = s({
										...x.thoughtSignature ? {
											thoughtSignature: x.thoughtSignature
										} : {},
										serverToolCallId: D,
										serverToolType: x.toolResponse.toolType
									});
								O.enqueue({
									type: "tool-result",
									toolCallId: D,
									toolName: `server:${x.toolResponse.toolType}`,
									result: (H = x.toolResponse.response) != null ? H : {},
									providerMetadata: C
								}), b = void 0
							}
							for (const x of Z) {
								if (!("functionCall" in x)) continue;
								const D = x.thoughtSignature ? s({
										thoughtSignature: x.thoughtSignature
									}) : void 0,
									C = x.functionCall.partialArgs != null || x.functionCall.name != null && x.functionCall.willContinue === !0,
									G = x.functionCall.name == null && x.functionCall.args == null && x.functionCall.partialArgs == null && x.functionCall.willContinue == null,
									me = x.functionCall.name != null && x.functionCall.args != null && x.functionCall.partialArgs == null,
									fe = x.functionCall.name != null && x.functionCall.args == null && x.functionCall.partialArgs == null && x.functionCall.willContinue !== !0;
								if (C) {
									if (x.functionCall.name != null) {
										const pe = (ge = x.functionCall.id) != null ? ge : w(),
											be = new Zb;
										if (T.push({
												toolCallId: pe,
												toolName: x.functionCall.name,
												accumulator: be,
												providerMetadata: D
											}), O.enqueue({
												type: "tool-input-start",
												id: pe,
												toolName: x.functionCall.name,
												providerMetadata: D
											}), x.functionCall.partialArgs != null) {
											const we = x.functionCall.partialArgs,
												{
													textDelta: We
												} = be.processPartialArgs(we);
											We.length > 0 && O.enqueue({
												type: "tool-input-delta",
												id: pe,
												delta: We,
												providerMetadata: D
											}), x.functionCall.willContinue !== !0 && we.every(Ve => Ve.willContinue !== !0) && q(O)
										}
									} else if (x.functionCall.partialArgs != null && T.length > 0) {
										const pe = T[T.length - 1],
											be = x.functionCall.partialArgs,
											{
												textDelta: we
											} = pe.accumulator.processPartialArgs(be);
										we.length > 0 && O.enqueue({
											type: "tool-input-delta",
											id: pe.toolCallId,
											delta: we,
											providerMetadata: D
										}), x.functionCall.willContinue !== !0 && be.every(We => We.willContinue !== !0) && q(O)
									}
								} else if (G && T.length > 0) q(O);
								else if (me) {
									const pe = (J = x.functionCall.id) != null ? J : w(),
										be = x.functionCall.name,
										we = typeof x.functionCall.args == "string" ? x.functionCall.args : JSON.stringify((M = x.functionCall.args) != null ? M : {});
									O.enqueue({
										type: "tool-input-start",
										id: pe,
										toolName: be,
										providerMetadata: D
									}), O.enqueue({
										type: "tool-input-delta",
										id: pe,
										delta: we,
										providerMetadata: D
									}), O.enqueue({
										type: "tool-input-end",
										id: pe,
										providerMetadata: D
									}), O.enqueue({
										type: "tool-call",
										toolCallId: pe,
										toolName: be,
										input: we,
										providerMetadata: D
									}), k = !0
								} else if (fe) {
									const pe = (se = x.functionCall.id) != null ? se : w(),
										be = x.functionCall.name;
									O.enqueue({
										type: "tool-input-start",
										id: pe,
										toolName: be,
										providerMetadata: D
									}), O.enqueue({
										type: "tool-input-end",
										id: pe,
										providerMetadata: D
									}), O.enqueue({
										type: "tool-call",
										toolCallId: pe,
										toolName: be,
										input: "{}",
										providerMetadata: D
									}), k = !0
								}
							}
						}
						V.finishReason != null && (p = {
							unified: Ya({
								finishReason: V.finishReason,
								hasToolCalls: k
							}),
							raw: V.finishReason
						}, h = s({
							promptFeedback: (U = de.promptFeedback) != null ? U : null,
							groundingMetadata: g,
							urlContextMetadata: _,
							safetyRatings: (W = V.safetyRatings) != null ? W : null,
							usageMetadata: X ?? null,
							finishMessage: (ce = V.finishMessage) != null ? ce : null,
							serviceTier: (ne = m == null ? void 0 : m.serviceTier) != null ? ne : null
						}))
					},
					flush(L) {
						A !== null && L.enqueue({
							type: "text-end",
							id: A
						}), I !== null && L.enqueue({
							type: "reasoning-end",
							id: I
						}), L.enqueue({
							type: "finish",
							finishReason: p,
							usage: Ga(m),
							providerMetadata: h
						})
					}
				})),
				response: {
					headers: d
				},
				request: {
					body: n
				}
			}
		}
	};

function Jb(e) {
	return /gemini-3[\.\-]/i.test(e) || /gemini-3$/i.test(e)
}

function Wb() {
	return 65536
}

function Kb(e) {
	const t = e.toLowerCase();
	return t.includes("2.5-pro") || t.includes("gemini-3-pro-image") ? 32768 : 24576
}

function Yb({
	reasoning: e,
	modelId: t,
	warnings: n
}) {
	if (vn(e)) return Jb(t) && !t.includes("gemini-3-pro-image") ? Xb({
		reasoning: e,
		warnings: n
	}) : Qb({
		reasoning: e,
		modelId: t,
		warnings: n
	})
}

function Xb({
	reasoning: e,
	warnings: t
}) {
	if (e === "none") return {
		thinkingLevel: "minimal"
	};
	const n = nc({
		reasoning: e,
		effortMap: {
			minimal: "minimal",
			low: "low",
			medium: "medium",
			high: "high",
			xhigh: "high"
		},
		warnings: t
	});
	if (n != null) return {
		thinkingLevel: n
	}
}

function Qb({
	reasoning: e,
	modelId: t,
	warnings: n
}) {
	if (e === "none") return {
		thinkingBudget: 0
	};
	const o = oc({
		reasoning: e,
		maxOutputTokens: Wb(),
		maxReasoningBudget: Kb(t),
		minReasoningBudget: 0,
		warnings: n
	});
	if (o != null) return {
		thinkingBudget: o
	}
}

function Xa({
	groundingMetadata: e,
	generateId: t
}) {
	var n, o, r, i, s, l;
	if (!(e != null && e.groundingChunks)) return;
	const d = [];
	for (const c of e.groundingChunks)
		if (c.web != null) d.push({
			type: "source",
			sourceType: "url",
			id: t(),
			url: c.web.uri,
			title: (n = c.web.title) != null ? n : void 0
		});
		else if (c.image != null) d.push({
		type: "source",
		sourceType: "url",
		id: t(),
		url: c.image.sourceUri,
		title: (o = c.image.title) != null ? o : void 0
	});
	else if (c.retrievedContext != null) {
		const p = c.retrievedContext.uri,
			m = c.retrievedContext.fileSearchStore;
		if (p && (p.startsWith("http://") || p.startsWith("https://"))) d.push({
			type: "source",
			sourceType: "url",
			id: t(),
			url: p,
			title: (r = c.retrievedContext.title) != null ? r : void 0
		});
		else if (p) {
			const h = (i = c.retrievedContext.title) != null ? i : "Unknown Document";
			let g = "application/octet-stream",
				_;
			p.endsWith(".pdf") ? (g = "application/pdf", _ = p.split("/").pop()) : p.endsWith(".txt") ? (g = "text/plain", _ = p.split("/").pop()) : p.endsWith(".docx") ? (g = "application/vnd.openxmlformats-officedocument.wordprocessingml.document", _ = p.split("/").pop()) : p.endsWith(".doc") ? (g = "application/msword", _ = p.split("/").pop()) : (p.match(/\.(md|markdown)$/) && (g = "text/markdown"), _ = p.split("/").pop()), d.push({
				type: "source",
				sourceType: "document",
				id: t(),
				mediaType: g,
				title: h,
				filename: _
			})
		} else if (m) {
			const h = (s = c.retrievedContext.title) != null ? s : "Unknown Document";
			d.push({
				type: "source",
				sourceType: "document",
				id: t(),
				mediaType: "application/octet-stream",
				title: h,
				filename: m.split("/").pop()
			})
		}
	} else c.maps != null && c.maps.uri && d.push({
		type: "source",
		sourceType: "url",
		id: t(),
		url: c.maps.uri,
		title: (l = c.maps.title) != null ? l : void 0
	});
	return d.length > 0 ? d : void 0
}
var jc = () => u({
		webSearchQueries: R(a()).nullish(),
		imageSearchQueries: R(a()).nullish(),
		retrievalQueries: R(a()).nullish(),
		searchEntryPoint: u({
			renderedContent: a()
		}).nullish(),
		groundingChunks: R(u({
			web: u({
				uri: a(),
				title: a().nullish()
			}).nullish(),
			image: u({
				sourceUri: a(),
				imageUri: a(),
				title: a().nullish(),
				domain: a().nullish()
			}).nullish(),
			retrievedContext: u({
				uri: a().nullish(),
				title: a().nullish(),
				text: a().nullish(),
				fileSearchStore: a().nullish()
			}).nullish(),
			maps: u({
				uri: a().nullish(),
				title: a().nullish(),
				text: a().nullish(),
				placeId: a().nullish()
			}).nullish()
		})).nullish(),
		groundingSupports: R(u({
			segment: u({
				startIndex: y().nullish(),
				endIndex: y().nullish(),
				text: a().nullish()
			}).nullish(),
			segment_text: a().nullish(),
			groundingChunkIndices: R(y()).nullish(),
			supportChunkIndices: R(y()).nullish(),
			confidenceScores: R(y()).nullish(),
			confidenceScore: R(y()).nullish()
		})).nullish(),
		retrievalMetadata: le([u({
			webDynamicRetrievalScore: y()
		}), u({})]).nullish()
	}),
	ew = u({
		jsonPath: a(),
		stringValue: a().nullish(),
		numberValue: y().nullish(),
		boolValue: _e().nullish(),
		nullValue: Se().nullish(),
		willContinue: _e().nullish()
	}),
	Lc = () => u({
		parts: R(le([u({
			functionCall: u({
				id: a().nullish(),
				name: a().nullish(),
				args: Se().nullish(),
				partialArgs: R(ew).nullish(),
				willContinue: _e().nullish()
			}),
			thoughtSignature: a().nullish()
		}), u({
			inlineData: u({
				mimeType: a(),
				data: a()
			}),
			thought: _e().nullish(),
			thoughtSignature: a().nullish()
		}), u({
			toolCall: u({
				toolType: a(),
				args: Se().nullish(),
				id: a()
			}),
			thoughtSignature: a().nullish()
		}), u({
			toolResponse: u({
				toolType: a(),
				response: Se().nullish(),
				id: a()
			}),
			thoughtSignature: a().nullish()
		}), u({
			executableCode: u({
				language: a(),
				code: a()
			}).nullish(),
			codeExecutionResult: u({
				outcome: a(),
				output: a().nullish()
			}).nullish(),
			text: a().nullish(),
			thought: _e().nullish(),
			thoughtSignature: a().nullish()
		})])).nullish()
	}),
	_o = () => u({
		category: a().nullish(),
		probability: a().nullish(),
		probabilityScore: y().nullish(),
		severity: a().nullish(),
		severityScore: y().nullish(),
		blocked: _e().nullish()
	}),
	Qa = R(u({
		modality: a(),
		tokenCount: y()
	})).nullish(),
	Zc = u({
		cachedContentTokenCount: y().nullish(),
		thoughtsTokenCount: y().nullish(),
		promptTokenCount: y().nullish(),
		candidatesTokenCount: y().nullish(),
		totalTokenCount: y().nullish(),
		trafficType: a().nullish(),
		serviceTier: a().nullish(),
		promptTokensDetails: Qa,
		candidatesTokensDetails: Qa
	}),
	Fc = () => u({
		urlMetadata: R(u({
			retrievedUrl: a(),
			urlRetrievalStatus: a()
		})).nullish()
	}),
	tw = ee(() => Q(u({
		candidates: R(u({
			content: Lc().nullish().or(u({}).strict()),
			finishReason: a().nullish(),
			finishMessage: a().nullish(),
			safetyRatings: R(_o()).nullish(),
			groundingMetadata: jc().nullish(),
			urlContextMetadata: Fc().nullish()
		})),
		usageMetadata: Zc.nullish(),
		promptFeedback: u({
			blockReason: a().nullish(),
			safetyRatings: R(_o()).nullish()
		}).nullish()
	}))),
	nw = ee(() => Q(u({
		candidates: R(u({
			content: Lc().nullish(),
			finishReason: a().nullish(),
			finishMessage: a().nullish(),
			safetyRatings: R(_o()).nullish(),
			groundingMetadata: jc().nullish(),
			urlContextMetadata: Fc().nullish()
		})).nullish(),
		usageMetadata: Zc.nullish(),
		promptFeedback: u({
			blockReason: a().nullish(),
			safetyRatings: R(_o()).nullish()
		}).nullish()
	}))),
	ow = Be({
		id: "google.code_execution",
		inputSchema: u({
			language: a().describe("The programming language of the code."),
			code: a().describe("The code to be executed.")
		}),
		outputSchema: u({
			outcome: a().describe('The outcome of the execution (e.g., "OUTCOME_OK").'),
			output: a().describe("The output from the code execution.")
		})
	}),
	rw = Be({
		id: "google.enterprise_web_search",
		inputSchema: ee(() => Q(u({}))),
		outputSchema: ee(() => Q(u({})))
	});
St({
	fileSearchStoreNames: R(a()).describe("The names of the file_search_stores to retrieve from. Example: `fileSearchStores/my-file-search-store-123`"),
	topK: y().int().positive().describe("The number of file search retrieval chunks to retrieve.").optional(),
	metadataFilter: a().describe("Metadata filter to apply to the file search retrieval documents. See https://google.aip.dev/160 for the syntax of the filter expression.").optional()
});
var iw = Be({
		id: "google.file_search",
		inputSchema: ee(() => Q(u({}))),
		outputSchema: ee(() => Q(u({})))
	}),
	aw = Be({
		id: "google.google_maps",
		inputSchema: ee(() => Q(u({}))),
		outputSchema: ee(() => Q(u({})))
	}),
	sw = St({
		searchTypes: u({
			webSearch: u({}).optional(),
			imageSearch: u({}).optional()
		}).optional(),
		timeRangeFilter: u({
			startTime: a(),
			endTime: a()
		}).optional()
	}),
	lw = Be({
		id: "google.google_search",
		inputSchema: ee(() => Q(u({}))),
		outputSchema: ee(() => Q(u({})))
	}),
	uw = Be({
		id: "google.url_context",
		inputSchema: ee(() => Q(u({}))),
		outputSchema: ee(() => Q(u({})))
	}),
	cw = Be({
		id: "google.vertex_rag_store",
		inputSchema: ee(() => Q(u({}))),
		outputSchema: ee(() => Q(u({})))
	}),
	dw = {
		googleSearch: lw,
		enterpriseWebSearch: rw,
		googleMaps: aw,
		urlContext: uw,
		fileSearch: iw,
		codeExecution: ow,
		vertexRagStore: cw
	},
	es = ee(() => Q(u({
		personGeneration: Y(["dont_allow", "allow_adult", "allow_all"]).nullish(),
		aspectRatio: Y(["1:1", "3:4", "4:3", "9:16", "16:9"]).nullish(),
		googleSearch: sw.optional()
	}))),
	pw = class Bc {
		constructor(t, n, o) {
			this.modelId = t, this.settings = n, this.config = o, this.specificationVersion = "v4"
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new Bc(t.modelId, {}, t.config)
		}
		get maxImagesPerCall() {
			return this.settings.maxImagesPerCall != null ? this.settings.maxImagesPerCall : ts(this.modelId) ? 10 : 4
		}
		get provider() {
			return this.config.provider
		}
		async doGenerate(t) {
			return ts(this.modelId) ? this.doGenerateGemini(t) : this.doGenerateImagen(t)
		}
		async doGenerateImagen(t) {
			var n, o, r;
			const {
				prompt: i,
				n: s = 1,
				size: l,
				aspectRatio: d = "1:1",
				seed: c,
				providerOptions: p,
				headers: m,
				abortSignal: h,
				files: g,
				mask: _
			} = t, w = [];
			if (g != null && g.length > 0) throw new Error("Google Gemini API does not support image editing with Imagen models. Use Google Vertex AI (@ai-sdk/google-vertex) for image editing capabilities.");
			if (_ != null) throw new Error("Google Gemini API does not support image editing with masks. Use Google Vertex AI (@ai-sdk/google-vertex) for image editing capabilities.");
			l != null && w.push({
				type: "unsupported",
				feature: "size",
				details: "This model does not support the `size` option. Use `aspectRatio` instead."
			}), c != null && w.push({
				type: "unsupported",
				feature: "seed",
				details: "This model does not support the `seed` option through this provider."
			});
			const k = await xe({
					provider: "google",
					providerOptions: p,
					schema: es
				}),
				A = (r = (o = (n = this.config._internal) == null ? void 0 : n.currentDate) == null ? void 0 : o.call(n)) != null ? r : new Date,
				I = {
					sampleCount: s
				};
			if (d != null && (I.aspectRatio = d), k) {
				const {
					googleSearch: b,
					...T
				} = k;
				b != null && w.push({
					type: "unsupported",
					feature: "googleSearch",
					details: "Google Search grounding is only supported on Gemini image models."
				}), Object.assign(I, T)
			}
			const E = {
					instances: [{
						prompt: i
					}],
					parameters: I
				},
				{
					responseHeaders: S,
					value: v
				} = await Ue({
					url: `${this.config.baseURL}/models/${this.modelId}:predict`,
					headers: Ce(this.config.headers ? await ct(this.config.headers) : void 0, m),
					body: E,
					failedResponseHandler: at,
					successfulResponseHandler: Me(mw),
					abortSignal: h,
					fetch: this.config.fetch
				});
			return {
				images: v.predictions.map(b => b.bytesBase64Encoded),
				warnings: w,
				providerMetadata: {
					google: {
						images: v.predictions.map(() => ({}))
					}
				},
				response: {
					timestamp: A,
					modelId: this.modelId,
					headers: S
				}
			}
		}
		async doGenerateGemini(t) {
			var n, o, r, i, s, l, d, c, p, m, h;
			const {
				prompt: g,
				n: _,
				size: w,
				aspectRatio: k,
				seed: A,
				providerOptions: I,
				headers: E,
				abortSignal: S,
				files: v,
				mask: b
			} = t, T = [];
			if (b != null) throw new Error("Gemini image models do not support mask-based image editing.");
			if (_ != null && _ > 1) throw new Error("Gemini image models do not support generating a set number of images per call. Use n=1 or omit the n parameter.");
			w != null && T.push({
				type: "unsupported",
				feature: "size",
				details: "This model does not support the `size` option. Use `aspectRatio` instead."
			});
			const q = [];
			if (g != null && q.push({
					type: "text",
					text: g
				}), v != null && v.length > 0)
				for (const H of v) H.type === "url" ? q.push({
					type: "file",
					data: {
						type: "url",
						url: new URL(H.url)
					},
					mediaType: "image/*"
				}) : q.push({
					type: "file",
					data: {
						type: "data",
						data: typeof H.data == "string" ? H.data : new Uint8Array(H.data)
					},
					mediaType: H.mediaType
				});
			const L = [{
					role: "user",
					content: q
				}],
				O = await xe({
					provider: "google",
					providerOptions: I,
					schema: es
				}),
				{
					googleSearch: B,
					...F
				} = (n = I == null ? void 0 : I.google) != null ? n : {},
				N = await new qc(this.modelId, {
					provider: this.config.provider,
					baseURL: this.config.baseURL,
					headers: (o = this.config.headers) != null ? o : {},
					fetch: this.config.fetch,
					generateId: (r = this.config.generateId) != null ? r : ze
				}).doGenerate({
					prompt: L,
					seed: A,
					providerOptions: {
						google: {
							responseModalities: ["IMAGE"],
							imageConfig: k ? {
								aspectRatio: k
							} : void 0,
							...F
						}
					},
					tools: (O == null ? void 0 : O.googleSearch) != null ? [{
						type: "provider",
						id: "google.google_search",
						name: "google_search",
						args: O.googleSearch
					}] : void 0,
					headers: E,
					abortSignal: S
				}),
				oe = (l = (s = (i = this.config._internal) == null ? void 0 : i.currentDate) == null ? void 0 : s.call(i)) != null ? l : new Date,
				te = [];
			for (const H of N.content) H.type === "file" && H.mediaType.startsWith("image/") && H.data.type === "data" && te.push(De(H.data.data));
			const P = (c = (d = N.providerMetadata) == null ? void 0 : d.google) != null ? c : {};
			return {
				images: te,
				warnings: T,
				providerMetadata: {
					google: {
						...P,
						images: te.map(() => ({}))
					}
				},
				response: {
					timestamp: oe,
					modelId: this.modelId,
					headers: (p = N.response) == null ? void 0 : p.headers
				},
				usage: N.usage ? {
					inputTokens: N.usage.inputTokens.total,
					outputTokens: N.usage.outputTokens.total,
					totalTokens: ((m = N.usage.inputTokens.total) != null ? m : 0) + ((h = N.usage.outputTokens.total) != null ? h : 0)
				} : void 0
			}
		}
	};

function ts(e) {
	return e.startsWith("gemini-")
}
var mw = ee(() => Q(u({
		predictions: R(u({
			bytesBase64Encoded: a()
		})).default([])
	}))),
	hw = class {
		constructor(e) {
			this.config = e, this.specificationVersion = "v4"
		}
		get provider() {
			return this.config.provider
		}
		async uploadFile(e) {
			var t, n, o, r;
			const i = await xe({
					provider: "google",
					providerOptions: e.providerOptions,
					schema: _w
				}),
				s = this.config.headers(),
				l = (t = this.config.fetch) != null ? t : globalThis.fetch,
				d = [];
			e.filename != null && d.push({
				type: "unsupported",
				feature: "filename"
			});
			const c = Dn(e.data),
				p = e.mediaType,
				m = i == null ? void 0 : i.displayName,
				h = this.config.baseURL.replace(/\/v1beta$/, ""),
				g = await l(`${h}/upload/v1beta/files`, {
					method: "POST",
					headers: {
						...s,
						"X-Goog-Upload-Protocol": "resumable",
						"X-Goog-Upload-Command": "start",
						"X-Goog-Upload-Header-Content-Length": String(c.length),
						"X-Goog-Upload-Header-Content-Type": p,
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						file: {
							...m != null ? {
								display_name: m
							} : {}
						}
					})
				});
			if (!g.ok) {
				const v = await g.text();
				throw new Ie({
					name: "GOOGLE_FILES_UPLOAD_ERROR",
					message: `Failed to initiate resumable upload: ${g.status} ${v}`
				})
			}
			const _ = g.headers.get("x-goog-upload-url");
			if (!_) throw new Ie({
				name: "GOOGLE_FILES_UPLOAD_ERROR",
				message: "No upload URL returned from initiation request"
			});
			const w = await l(_, {
				method: "POST",
				headers: {
					"Content-Length": String(c.length),
					"X-Goog-Upload-Offset": "0",
					"X-Goog-Upload-Command": "upload, finalize"
				},
				body: c
			});
			if (!w.ok) {
				const v = await w.text();
				throw new Ie({
					name: "GOOGLE_FILES_UPLOAD_ERROR",
					message: `Failed to upload file data: ${w.status} ${v}`
				})
			}
			let A = (await w.json()).file;
			const I = (n = i == null ? void 0 : i.pollIntervalMs) != null ? n : 2e3,
				E = (o = i == null ? void 0 : i.pollTimeoutMs) != null ? o : 3e5,
				S = Date.now();
			for (; A.state === "PROCESSING";) {
				if (Date.now() - S > E) throw new Ie({
					name: "GOOGLE_FILES_UPLOAD_TIMEOUT",
					message: `File processing timed out after ${E}ms`
				});
				await Lt(I);
				const {
					value: v
				} = await qn({
					url: `${this.config.baseURL}/${A.name}`,
					validateUrl: !1,
					headers: Ce(s),
					successfulResponseHandler: Me(fw),
					failedResponseHandler: at,
					fetch: this.config.fetch
				});
				A = v
			}
			if (A.state === "FAILED") throw new Ie({
				name: "GOOGLE_FILES_UPLOAD_FAILED",
				message: `File processing failed for ${A.name}`
			});
			return {
				warnings: d,
				providerReference: {
					google: A.uri
				},
				mediaType: (r = A.mimeType) != null ? r : e.mediaType,
				providerMetadata: {
					google: {
						name: A.name,
						displayName: A.displayName,
						mimeType: A.mimeType,
						sizeBytes: A.sizeBytes,
						state: A.state,
						uri: A.uri,
						...A.createTime != null ? {
							createTime: A.createTime
						} : {},
						...A.updateTime != null ? {
							updateTime: A.updateTime
						} : {},
						...A.expirationTime != null ? {
							expirationTime: A.expirationTime
						} : {},
						...A.sha256Hash != null ? {
							sha256Hash: A.sha256Hash
						} : {}
					}
				}
			}
		}
	},
	fw = ee(() => Q(u({
		name: a(),
		displayName: a().nullish(),
		mimeType: a(),
		sizeBytes: a().nullish(),
		createTime: a().nullish(),
		updateTime: a().nullish(),
		expirationTime: a().nullish(),
		sha256Hash: a().nullish(),
		uri: a(),
		state: a()
	}))),
	_w = ee(() => Q(St({
		displayName: a().nullish(),
		pollIntervalMs: y().positive().nullish(),
		pollTimeoutMs: y().positive().nullish()
	}))),
	gw = ee(() => Q(St({
		pollIntervalMs: y().positive().nullish(),
		pollTimeoutMs: y().positive().nullish(),
		personGeneration: Y(["dont_allow", "allow_adult", "allow_all"]).nullish(),
		negativePrompt: a().nullish(),
		referenceImages: R(u({
			bytesBase64Encoded: a().nullish(),
			gcsUri: a().nullish()
		})).nullish()
	})));

function yw(e) {
	var t, n;
	return (n = (t = e.frameImages) == null ? void 0 : t.find(o => o.frameType === "first_frame")) == null ? void 0 : n.image
}

function vw(e) {
	var t;
	return (t = yw(e)) != null ? t : e.image
}

function bw(e) {
	var t, n;
	return (n = (t = e.frameImages) == null ? void 0 : t.find(o => o.frameType === "last_frame")) == null ? void 0 : n.image
}

function ww(e) {
	if (!(e.frameImages != null && e.frameImages.length > 0)) return e.inputReferences != null && e.inputReferences.length > 0 ? e.inputReferences : void 0
}

function mr(e, t) {
	if (e.type === "url") {
		if (e.url.startsWith("gs://")) return {
			gcsUri: e.url,
			mimeType: "image/png"
		};
		t.push({
			type: "unsupported",
			feature: "URL-based image input",
			details: "Google Generative AI video models require base64-encoded images or GCS URIs. URL will be ignored."
		});
		return
	}
	return {
		bytesBase64Encoded: typeof e.data == "string" ? e.data : Uu(e.data),
		mimeType: e.mediaType || "image/png"
	}
}

function kw(e) {
	return e.bytesBase64Encoded ? {
		image: {
			bytesBase64Encoded: e.bytesBase64Encoded,
			mimeType: "image/png"
		},
		referenceType: "asset"
	} : e.gcsUri ? {
		image: {
			gcsUri: e.gcsUri,
			mimeType: "image/png"
		},
		referenceType: "asset"
	} : e
}

function xw(e, t) {
	const n = mr(e, t);
	return n != null ? {
		image: n,
		referenceType: "asset"
	} : void 0
}
var Iw = class {
		constructor(e, t) {
			this.modelId = e, this.config = t, this.specificationVersion = "v4"
		}
		get provider() {
			return this.config.provider
		}
		get maxVideosPerCall() {
			return 4
		}
		async doGenerate(e) {
			var t, n, o, r, i, s, l, d;
			const c = (o = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? o : new Date,
				p = [],
				m = await xe({
					provider: "google",
					providerOptions: e.providerOptions,
					schema: gw
				}),
				h = [{}],
				g = h[0];
			e.prompt != null && (g.prompt = e.prompt);
			const _ = vw(e);
			if (_ != null) {
				const N = mr(_, p);
				N != null && (g.image = N)
			}
			const w = bw(e);
			if (w != null) {
				const N = mr(w, p);
				N != null && (g.lastFrame = N)
			}
			const k = ww(e);
			k != null ? g.referenceImages = k.flatMap(N => {
				const oe = xw(N, p);
				return oe != null ? [oe] : []
			}) : (m == null ? void 0 : m.referenceImages) != null && (g.referenceImages = m.referenceImages.map(N => kw(N)));
			const A = {
				sampleCount: e.n
			};
			if (e.aspectRatio && (A.aspectRatio = e.aspectRatio), e.resolution) {
				const N = {
					"1280x720": "720p",
					"1920x1080": "1080p",
					"3840x2160": "4k"
				};
				A.resolution = N[e.resolution] || e.resolution
			}
			if (e.duration && (A.durationSeconds = e.duration), e.seed && (A.seed = e.seed), m != null) {
				const N = m;
				N.personGeneration !== void 0 && N.personGeneration !== null && (A.personGeneration = N.personGeneration), N.negativePrompt !== void 0 && N.negativePrompt !== null && (A.negativePrompt = N.negativePrompt);
				for (const [oe, te] of Object.entries(N))["pollIntervalMs", "pollTimeoutMs", "personGeneration", "negativePrompt", "referenceImages"].includes(oe) || (A[oe] = te)
			}
			const {
				value: I
			} = await Ue({
				url: `${this.config.baseURL}/models/${this.modelId}:predictLongRunning`,
				headers: Ce(await ct(this.config.headers), e.headers),
				body: {
					instances: h,
					parameters: A
				},
				successfulResponseHandler: Me(ns),
				failedResponseHandler: at,
				abortSignal: e.abortSignal,
				fetch: this.config.fetch
			}), E = I.name;
			if (!E) throw new Ie({
				name: "GOOGLE_VIDEO_GENERATION_ERROR",
				message: "No operation name returned from API"
			});
			const S = (r = m == null ? void 0 : m.pollIntervalMs) != null ? r : 1e4,
				v = (i = m == null ? void 0 : m.pollTimeoutMs) != null ? i : 6e5,
				b = Date.now();
			let T = I,
				q;
			for (; !T.done;) {
				if (Date.now() - b > v) throw new Ie({
					name: "GOOGLE_VIDEO_GENERATION_TIMEOUT",
					message: `Video generation timed out after ${v}ms`
				});
				if (await Lt(S), (s = e.abortSignal) != null && s.aborted) throw new Ie({
					name: "GOOGLE_VIDEO_GENERATION_ABORTED",
					message: "Video generation request was aborted"
				});
				const {
					value: N,
					responseHeaders: oe
				} = await qn({
					url: `${this.config.baseURL}/${E}`,
					validateUrl: !1,
					headers: Ce(await ct(this.config.headers), e.headers),
					successfulResponseHandler: Me(ns),
					failedResponseHandler: at,
					abortSignal: e.abortSignal,
					fetch: this.config.fetch
				});
				T = N, q = oe
			}
			if (T.error) throw new Ie({
				name: "GOOGLE_VIDEO_GENERATION_FAILED",
				message: `Video generation failed: ${T.error.message}`
			});
			const L = T.response;
			if (!((l = L == null ? void 0 : L.generateVideoResponse) != null && l.generatedSamples) || L.generateVideoResponse.generatedSamples.length === 0) throw new Ie({
				name: "GOOGLE_VIDEO_GENERATION_ERROR",
				message: `No videos in response. Response: ${JSON.stringify(T)}`
			});
			const O = [],
				B = [],
				F = await ct(this.config.headers),
				z = F == null ? void 0 : F["x-goog-api-key"];
			for (const N of L.generateVideoResponse.generatedSamples)
				if ((d = N.video) != null && d.uri) {
					const oe = z && ho(N.video.uri, this.config.baseURL) ? `${N.video.uri}${N.video.uri.includes("?") ? "&" : "?"}key=${z}` : N.video.uri;
					O.push({
						type: "url",
						url: oe,
						mediaType: "video/mp4"
					}), B.push({
						uri: N.video.uri
					})
				} if (O.length === 0) throw new Ie({
				name: "GOOGLE_VIDEO_GENERATION_ERROR",
				message: "No valid videos in response"
			});
			return {
				videos: O,
				warnings: p,
				response: {
					timestamp: c,
					modelId: this.modelId,
					headers: q
				},
				providerMetadata: {
					google: {
						videos: B
					}
				}
			}
		}
	},
	ns = u({
		name: a().nullish(),
		done: _e().nullish(),
		error: u({
			code: y().nullish(),
			message: a(),
			status: a().nullish()
		}).nullish(),
		response: u({
			generateVideoResponse: u({
				generatedSamples: R(u({
					video: u({
						uri: a().nullish()
					}).nullish()
				})).nullish()
			}).nullish()
		}).nullish()
	}),
	Tw = ee(() => Q(u({
		candidates: R(u({
			content: u({
				parts: R(u({
					inlineData: u({
						mimeType: a().nullish(),
						data: a().nullish()
					}).nullish()
				})).nullish()
			}).nullish()
		})).nullish()
	}))),
	Sw = u({
		voiceName: a()
	}),
	Cw = u({
		prebuiltVoiceConfig: Sw
	}),
	os = ee(() => Q(u({
		multiSpeakerVoiceConfig: u({
			speakerVoiceConfigs: R(u({
				speaker: a(),
				voiceConfig: Cw
			}))
		}).optional()
	}))),
	Ow = "Kore",
	Aw = 24e3,
	$w = class Vc {
		constructor(t, n) {
			this.modelId = t, this.config = n, this.specificationVersion = "v4"
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new Vc(t.modelId, t.config)
		}
		get provider() {
			return this.config.provider
		}
		async getArgs({
			text: t,
			voice: n = Ow,
			outputFormat: o,
			instructions: r,
			speed: i,
			language: s,
			providerOptions: l
		}) {
			const d = [],
				c = this.config.provider.includes("vertex") ? ["googleVertex", "vertex"] : ["google"];
			let p;
			for (const k of c)
				if (p = await xe({
						provider: k,
						providerOptions: l,
						schema: os
					}), p != null) break;
			p == null && !c.includes("google") && (p = await xe({
				provider: "google",
				providerOptions: l,
				schema: os
			}));
			const m = p == null ? void 0 : p.multiSpeakerVoiceConfig,
				h = m ? {
					multiSpeakerVoiceConfig: m
				} : {
					voiceConfig: {
						prebuiltVoiceConfig: {
							voiceName: n
						}
					}
				};
			let g = t;
			r != null && (m ? d.push({
				type: "unsupported",
				feature: "instructions",
				details: "Google Gemini TTS ignores `instructions` when `multiSpeakerVoiceConfig` is set, because prepending them would break multi-speaker transcript parsing."
			}) : g = `${r}: ${t}`), i != null && d.push({
				type: "unsupported",
				feature: "speed",
				details: "Google Gemini TTS models do not support the `speed` option. It was ignored."
			}), s != null && d.push({
				type: "unsupported",
				feature: "language",
				details: "Google Gemini TTS models do not support the `language` option. Language is detected automatically from the input text."
			});
			let _ = "wav";
			return o === "pcm" ? _ = "pcm" : o != null && o !== "wav" && d.push({
				type: "unsupported",
				feature: "outputFormat",
				details: `Unsupported output format: ${o}. Using wav instead.`
			}), {
				requestBody: {
					contents: [{
						role: "user",
						parts: [{
							text: g
						}]
					}],
					generationConfig: {
						responseModalities: ["AUDIO"],
						speechConfig: h
					}
				},
				warnings: d,
				outputFormat: _
			}
		}
		async doGenerate(t) {
			var n, o, r, i, s, l, d, c, p;
			const m = (r = (o = (n = this.config._internal) == null ? void 0 : n.currentDate) == null ? void 0 : o.call(n)) != null ? r : new Date,
				{
					requestBody: h,
					warnings: g,
					outputFormat: _
				} = await this.getArgs(t),
				{
					value: w,
					responseHeaders: k,
					rawValue: A
				} = await Ue({
					url: `${this.config.baseURL}/models/${this.modelId}:generateContent`,
					headers: Ce(this.config.headers ? await ct(this.config.headers) : void 0, t.headers),
					body: h,
					failedResponseHandler: at,
					successfulResponseHandler: Me(Tw),
					abortSignal: t.abortSignal,
					fetch: this.config.fetch
				});
			let I, E;
			for (const T of (i = w.candidates) != null ? i : []) {
				for (const q of (l = (s = T.content) == null ? void 0 : s.parts) != null ? l : [])
					if ((d = q.inlineData) != null && d.data) {
						I = q.inlineData.data, E = (c = q.inlineData.mimeType) != null ? c : void 0;
						break
					} if (I != null) break
			}
			const S = (p = Ew(E)) != null ? p : Aw,
				v = I != null ? Ot(I) : new Uint8Array(0),
				b = _ === "pcm" || v.length === 0 ? v : Rw(v, S);
			return _ === "pcm" && v.length > 0 && g.push({
				type: "unsupported",
				feature: "outputFormat",
				details: `Returning raw PCM audio (signed 16-bit little-endian, mono, ${S} Hz). These bytes have no container header and are not directly playable; see providerMetadata.google for the sample rate and mime type.`
			}), {
				audio: b,
				warnings: g,
				request: {
					body: JSON.stringify(h)
				},
				response: {
					timestamp: m,
					modelId: this.modelId,
					headers: k,
					body: A
				},
				providerMetadata: {
					google: {
						sampleRate: S,
						mimeType: E ?? null
					}
				}
			}
		}
	};

function Ew(e) {
	if (e == null) return;
	const t = /rate=(\d+)/.exec(e);
	return t ? Number.parseInt(t[1], 10) : void 0
}

function Rw(e, t) {
	const i = t * 2,
		s = e.length,
		l = new ArrayBuffer(44 + s),
		d = new DataView(l);
	Xn(d, 0, "RIFF"), d.setUint32(4, 36 + s, !0), Xn(d, 8, "WAVE"), Xn(d, 12, "fmt "), d.setUint32(16, 16, !0), d.setUint16(20, 1, !0), d.setUint16(22, 1, !0), d.setUint32(24, t, !0), d.setUint32(28, i, !0), d.setUint16(32, 2, !0), d.setUint16(34, 16, !0), Xn(d, 36, "data"), d.setUint32(40, s, !0);
	const c = new Uint8Array(l);
	return c.set(e, 44), c
}

function Xn(e, t, n) {
	for (let o = 0; o < n.length; o++) e.setUint8(t + o, n.charCodeAt(o))
}

function Xr(e) {
	var t, n, o, r, i, s, l, d;
	if (e == null) return {
		inputTokens: {
			total: void 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: void 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	};
	const c = (t = e.total_input_tokens) != null ? t : 0,
		p = (n = e.total_output_tokens) != null ? n : 0,
		m = (o = e.total_thought_tokens) != null ? o : 0,
		h = (r = e.total_cached_tokens) != null ? r : 0;
	return {
		inputTokens: {
			total: (i = e.total_input_tokens) != null ? i : void 0,
			noCache: e.total_input_tokens == null ? void 0 : c - h,
			cacheRead: (s = e.total_cached_tokens) != null ? s : void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: e.total_output_tokens == null && e.total_thought_tokens == null ? void 0 : p + m,
			text: (l = e.total_output_tokens) != null ? l : void 0,
			reasoning: (d = e.total_thought_tokens) != null ? d : void 0
		},
		raw: e
	}
}

function Hc(e) {
	const t = e == null ? void 0 : e.output_tokens_by_modality;
	if (t == null) return;
	const n = {};
	for (const o of t)(o == null ? void 0 : o.modality) != null && o.tokens != null && (n[o.modality] = o.tokens);
	return Object.keys(n).length > 0 ? n : void 0
}
var Nw = {
	pdf: "application/pdf",
	txt: "text/plain",
	md: "text/markdown",
	markdown: "text/markdown",
	doc: "application/msword",
	docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};

function Gc(e) {
	const t = e.toLowerCase();
	for (const [n, o] of Object.entries(Nw))
		if (t.endsWith(`.${n}`)) return o;
	return "application/octet-stream"
}

function Jc(e) {
	const t = e.split("/"),
		n = t[t.length - 1];
	return n && n.length > 0 ? n : void 0
}

function Pw({
	annotation: e,
	generateId: t
}) {
	var n, o, r, i, s;
	switch (e.type) {
		case "url_citation": {
			const l = e;
			return l.url == null || l.url.length === 0 ? void 0 : {
				type: "source",
				sourceType: "url",
				id: t(),
				url: l.url,
				...l.title != null ? {
					title: l.title
				} : {}
			}
		}
		case "file_citation": {
			const l = e,
				d = (o = (n = l.url) != null ? n : l.document_uri) != null ? o : l.file_name;
			if (d == null || d.length === 0) return;
			if (d.startsWith("http://") || d.startsWith("https://")) return {
				type: "source",
				sourceType: "url",
				id: t(),
				url: d,
				...l.file_name != null ? {
					title: l.file_name
				} : {}
			};
			const c = (r = l.file_name) != null ? r : Jc(d),
				p = Gc(d);
			return {
				type: "source",
				sourceType: "document",
				id: t(),
				mediaType: p,
				title: (s = (i = l.file_name) != null ? i : c) != null ? s : d,
				...c != null ? {
					filename: c
				} : {}
			}
		}
		case "place_citation": {
			const l = e;
			return l.url == null || l.url.length === 0 ? void 0 : {
				type: "source",
				sourceType: "url",
				id: t(),
				url: l.url,
				...l.name != null ? {
					title: l.name
				} : {}
			}
		}
		default:
			return
	}
}

function Wc({
	block: e,
	generateId: t
}) {
	var n, o, r, i, s, l, d, c, p, m, h;
	const g = [];
	switch (e.type) {
		case "url_context_result": {
			const _ = (n = e.result) != null ? n : [];
			for (const w of _)(w == null ? void 0 : w.url) == null || w.url.length === 0 || w.status != null && w.status !== "success" || g.push({
				type: "source",
				sourceType: "url",
				id: t(),
				url: w.url
			});
			break
		}
		case "google_search_result": {
			const _ = (o = e.result) != null ? o : [];
			for (const w of _) {
				const k = w == null ? void 0 : w.url;
				k == null || k.length === 0 || g.push({
					type: "source",
					sourceType: "url",
					id: t(),
					url: k,
					...w.title != null ? {
						title: w.title
					} : {}
				})
			}
			break
		}
		case "google_maps_result": {
			const _ = (r = e.result) != null ? r : [];
			for (const w of _)
				for (const k of (i = w.places) != null ? i : []) k.url == null || k.url.length === 0 || g.push({
					type: "source",
					sourceType: "url",
					id: t(),
					url: k.url,
					...k.name != null ? {
						title: k.name
					} : {}
				});
			break
		}
		case "file_search_result": {
			const _ = (s = e.result) != null ? s : [];
			for (const w of _) {
				if (w == null || typeof w != "object") continue;
				const k = w,
					A = (d = (l = k.url) != null ? l : k.document_uri) != null ? d : k.file_name;
				if (A == null || A.length === 0) continue;
				if (A.startsWith("http://") || A.startsWith("https://")) {
					g.push({
						type: "source",
						sourceType: "url",
						id: t(),
						url: A,
						...k.title != null ? {
							title: k.title
						} : {}
					});
					continue
				}
				const I = (c = k.file_name) != null ? c : Jc(A),
					E = Gc(A);
				g.push({
					type: "source",
					sourceType: "document",
					id: t(),
					mediaType: E,
					title: (h = (m = (p = k.title) != null ? p : k.file_name) != null ? m : I) != null ? h : A,
					...I != null ? {
						filename: I
					} : {}
				})
			}
			break
		}
	}
	return g
}

function hr({
	annotations: e,
	generateId: t
}) {
	var n;
	if (e == null) return [];
	const o = new Set,
		r = [];
	for (const i of e) {
		const s = Pw({
			annotation: i,
			generateId: t
		});
		if (s == null) continue;
		const l = s.sourceType === "url" ? `url:${s.url}` : `doc:${(n = s.filename) != null ? n : s.title}`;
		o.has(l) || (o.add(l), r.push(s))
	}
	return r
}

function Qr({
	status: e,
	hasFunctionCall: t
}) {
	switch (e) {
		case "completed":
			return t ? "tool-calls" : "stop";
		case "requires_action":
			return "tool-calls";
		case "failed":
			return "error";
		case "incomplete":
			return "length";
		case "cancelled":
			return "other";
		case "in_progress":
		default:
			return "other"
	}
}
var Mw = new Set(["google_search_call", "code_execution_call", "url_context_call", "file_search_call", "google_maps_call", "mcp_server_tool_call"]),
	zw = new Set(["google_search_result", "code_execution_result", "url_context_result", "file_search_result", "google_maps_result", "mcp_server_tool_result"]);

function Dw(e) {
	return e.replace(/_call$/, "")
}

function qw(e) {
	return e.replace(/_result$/, "")
}

function rs({
	warnings: e,
	generateId: t,
	includeRawChunks: n,
	serviceTier: o
}) {
	let r, i, s = o,
		l, d = !1;
	const c = new Map,
		p = new Set;

	function m(h) {
		var g;
		return h.sourceType === "url" ? `url:${h.url}` : `doc:${(g = h.filename) != null ? g : h.title}`
	}
	return new TransformStream({
		start(h) {
			h.enqueue({
				type: "stream-start",
				warnings: e
			})
		},
		transform(h, g) {
			var _, w, k, A, I, E, S, v, b, T, q, L, O, B, F, z, N, oe, te, P;
			if (n && g.enqueue({
					type: "raw",
					rawValue: h.rawValue
				}), !h.success) {
				l = "failed", g.enqueue({
					type: "error",
					error: h.error
				});
				return
			}
			const H = h.value,
				ge = H.event_type;
			switch (ge) {
				case "interaction.created": {
					const M = H.interaction;
					r = (M == null ? void 0 : M.id) != null && M.id.length > 0 ? M.id : void 0;
					const se = M == null ? void 0 : M.created;
					let U;
					if (typeof se == "string") {
						const W = new Date(se);
						Number.isNaN(W.getTime()) || (U = W)
					}
					g.enqueue({
						type: "response-metadata",
						...r != null ? {
							id: r
						} : {},
						modelId: M == null ? void 0 : M.model,
						...U ? {
							timestamp: U
						} : {}
					});
					break
				}
				case "step.start": {
					const J = H,
						M = J.step,
						se = J.index,
						U = `${r ?? "interaction"}:${se}`,
						W = M == null ? void 0 : M.type;
					if (W === "model_output") {
						const ce = (_ = M == null ? void 0 : M.content) == null ? void 0 : _[0];
						if ((ce == null ? void 0 : ce.type) === "text") {
							c.set(se, {
								kind: "text",
								id: U,
								emittedSourceKeys: new Set
							}), g.enqueue({
								type: "text-start",
								id: U
							});
							const ne = hr({
								annotations: ce.annotations,
								generateId: t
							});
							for (const de of ne) {
								const X = m(de);
								p.has(X) || (p.add(X), g.enqueue(de))
							}
						} else(ce == null ? void 0 : ce.type) === "image" ? c.set(se, {
							kind: "image",
							id: U,
							...ce.data != null ? {
								data: ce.data
							} : {},
							...ce.mime_type != null ? {
								mimeType: ce.mime_type
							} : {},
							...ce.uri != null ? {
								uri: ce.uri
							} : {}
						}) : c.set(se, {
							kind: "pending_model_output",
							id: U
						})
					} else if (W === "thought") {
						const ce = M == null ? void 0 : M.signature;
						if (c.set(se, {
								kind: "reasoning",
								id: U,
								...ce != null ? {
									signature: ce
								} : {}
							}), g.enqueue({
								type: "reasoning-start",
								id: U
							}), Array.isArray(M == null ? void 0 : M.summary))
							for (const ne of M.summary)(ne == null ? void 0 : ne.type) === "text" && typeof ne.text == "string" && g.enqueue({
								type: "reasoning-delta",
								id: U,
								delta: ne.text
							})
					} else if (W === "function_call") {
						const ce = (w = M == null ? void 0 : M.id) != null ? w : U,
							ne = (k = M == null ? void 0 : M.name) != null ? k : "unknown";
						d = !0;
						const de = {
							kind: "function_call",
							id: U,
							toolCallId: ce,
							toolName: ne,
							argumentsAccum: "",
							...(M == null ? void 0 : M.signature) != null ? {
								signature: M.signature
							} : {}
						};
						c.set(se, de), g.enqueue({
							type: "tool-input-start",
							id: ce,
							toolName: ne
						})
					} else if (W != null && Mw.has(W)) {
						const ce = W === "mcp_server_tool_call" ? (A = M == null ? void 0 : M.name) != null ? A : "mcp_server_tool" : Dw(W),
							ne = (I = M == null ? void 0 : M.id) != null ? I : U,
							de = {
								kind: "builtin_tool_call",
								id: U,
								blockType: W,
								toolCallId: ne,
								toolName: ce,
								arguments: (E = M == null ? void 0 : M.arguments) != null ? E : {},
								callEmitted: !1
							};
						c.set(se, de)
					} else if (W != null && zw.has(W)) {
						const ce = W === "mcp_server_tool_result" ? (S = M == null ? void 0 : M.name) != null ? S : "mcp_server_tool" : qw(W),
							ne = (v = M == null ? void 0 : M.call_id) != null ? v : U,
							de = {
								kind: "builtin_tool_result",
								id: U,
								blockType: W,
								callId: ne,
								toolName: ce,
								result: (b = M == null ? void 0 : M.result) != null ? b : null,
								...(M == null ? void 0 : M.is_error) != null ? {
									isError: M.is_error
								} : {},
								resultEmitted: !1
							};
						c.set(se, de)
					} else c.set(se, {
						kind: "unknown",
						id: U
					});
					break
				}
				case "step.delta": {
					const J = H;
					let M = c.get(J.index);
					if (M == null) break;
					const se = (T = J.delta) == null ? void 0 : T.type;
					if (M.kind === "pending_model_output" && (se === "text" || se === "text_annotation" || se === "text_annotation_delta")) {
						const W = {
							kind: "text",
							id: M.id,
							emittedSourceKeys: new Set
						};
						c.set(J.index, W), M = W, g.enqueue({
							type: "text-start",
							id: W.id
						})
					}
					if (se === "image" && (M.kind === "pending_model_output" || M.kind === "text" || M.kind === "image")) {
						const W = J.delta,
							ce = {};
						r != null && (ce.interactionId = r);
						const ne = Object.keys(ce).length > 0 ? {
							google: ce
						} : void 0;
						(W == null ? void 0 : W.data) != null && W.data.length > 0 ? g.enqueue({
							type: "file",
							mediaType: (q = W.mime_type) != null ? q : "image/png",
							data: {
								type: "data",
								data: W.data
							},
							...ne ? {
								providerMetadata: ne
							} : {}
						}) : (W == null ? void 0 : W.uri) != null && W.uri.length > 0 && g.enqueue({
							type: "file",
							mediaType: (L = W.mime_type) != null ? L : "image/png",
							data: {
								type: "url",
								url: new URL(W.uri)
							},
							...ne ? {
								providerMetadata: ne
							} : {}
						}), M.kind === "image" && (M.data = void 0, M.uri = void 0);
						break
					}
					if (se === "video" && (M.kind === "pending_model_output" || M.kind === "text")) {
						const W = J.delta,
							ce = {};
						r != null && (ce.interactionId = r);
						const ne = Object.keys(ce).length > 0 ? {
							google: ce
						} : void 0;
						(W == null ? void 0 : W.data) != null && W.data.length > 0 ? g.enqueue({
							type: "file",
							mediaType: (O = W.mime_type) != null ? O : "video/mp4",
							data: {
								type: "data",
								data: W.data
							},
							...ne ? {
								providerMetadata: ne
							} : {}
						}) : (W == null ? void 0 : W.uri) != null && W.uri.length > 0 && g.enqueue({
							type: "file",
							mediaType: (B = W.mime_type) != null ? B : "video/mp4",
							data: {
								type: "url",
								url: new URL(W.uri)
							},
							...ne ? {
								providerMetadata: ne
							} : {}
						});
						break
					}
					const U = J.delta;
					if (M.kind === "text" && (U == null ? void 0 : U.type) === "text") {
						const W = (F = U.text) != null ? F : "";
						W.length > 0 && g.enqueue({
							type: "text-delta",
							id: M.id,
							delta: W
						})
					} else if (M.kind === "text" && ((U == null ? void 0 : U.type) === "text_annotation" || (U == null ? void 0 : U.type) === "text_annotation_delta")) {
						const W = hr({
							annotations: U.annotations,
							generateId: t
						});
						for (const ce of W) {
							const ne = m(ce);
							p.has(ne) || (p.add(ne), M.emittedSourceKeys.add(ne), g.enqueue(ce))
						}
					} else if (M.kind === "image" && (U == null ? void 0 : U.type) === "image") U.data != null && (M.data = U.data), U.mime_type != null && (M.mimeType = U.mime_type), U.uri != null && (M.uri = U.uri);
					else if (M.kind === "reasoning") {
						if ((U == null ? void 0 : U.type) === "thought_summary") {
							const W = U.content;
							(W == null ? void 0 : W.type) === "text" && typeof W.text == "string" && g.enqueue({
								type: "reasoning-delta",
								id: M.id,
								delta: W.text
							})
						} else if ((U == null ? void 0 : U.type) === "thought_signature") {
							const W = U.signature;
							W != null && (M.signature = W)
						}
					} else if (M.kind === "function_call" && (U == null ? void 0 : U.type) === "arguments_delta") {
						const W = typeof U.arguments == "string" ? U.arguments : "";
						W.length > 0 && (M.argumentsAccum += W, g.enqueue({
							type: "tool-input-delta",
							id: M.toolCallId,
							delta: W
						})), U.id != null && (M.toolCallId = U.id), U.signature != null && (M.signature = U.signature), d = !0
					} else M.kind === "builtin_tool_call" && (U == null ? void 0 : U.type) === M.blockType ? (U.id != null && (M.toolCallId = U.id), U.arguments != null && typeof U.arguments == "object" && (M.arguments = U.arguments), U.name != null && M.blockType === "mcp_server_tool_call" && (M.toolName = U.name)) : M.kind === "builtin_tool_result" && (U == null ? void 0 : U.type) === M.blockType && (U.call_id != null && (M.callId = U.call_id), U.result !== void 0 && (M.result = U.result), U.is_error != null && (M.isError = U.is_error), U.name != null && M.blockType === "mcp_server_tool_result" && (M.toolName = U.name));
					break
				}
				case "step.stop": {
					const J = H,
						M = c.get(J.index);
					if (M == null) break;
					if (M.kind === "text") {
						const se = r != null ? {
							google: {
								interactionId: r
							}
						} : void 0;
						g.enqueue({
							type: "text-end",
							id: M.id,
							...se ? {
								providerMetadata: se
							} : {}
						})
					} else if (M.kind === "reasoning") {
						const se = {};
						M.signature != null && (se.signature = M.signature), r != null && (se.interactionId = r);
						const U = Object.keys(se).length > 0 ? {
							google: se
						} : void 0;
						g.enqueue({
							type: "reasoning-end",
							id: M.id,
							...U ? {
								providerMetadata: U
							} : {}
						})
					} else if (M.kind === "image") {
						const se = {};
						r != null && (se.interactionId = r);
						const U = Object.keys(se).length > 0 ? {
							google: se
						} : void 0;
						M.data != null && M.data.length > 0 ? g.enqueue({
							type: "file",
							mediaType: (z = M.mimeType) != null ? z : "image/png",
							data: {
								type: "data",
								data: M.data
							},
							...U ? {
								providerMetadata: U
							} : {}
						}) : M.uri != null && M.uri.length > 0 && g.enqueue({
							type: "file",
							mediaType: (N = M.mimeType) != null ? N : "image/png",
							data: {
								type: "url",
								url: new URL(M.uri)
							},
							...U ? {
								providerMetadata: U
							} : {}
						})
					} else if (M.kind === "function_call") {
						const se = M.argumentsAccum.length > 0 ? M.argumentsAccum : "{}";
						g.enqueue({
							type: "tool-input-end",
							id: M.toolCallId
						});
						const U = {};
						M.signature != null && (U.signature = M.signature), r != null && (U.interactionId = r);
						const W = Object.keys(U).length > 0 ? {
							google: U
						} : void 0;
						g.enqueue({
							type: "tool-call",
							toolCallId: M.toolCallId,
							toolName: M.toolName,
							input: se,
							...W ? {
								providerMetadata: W
							} : {}
						})
					} else if (M.kind === "builtin_tool_call" && !M.callEmitted) g.enqueue({
						type: "tool-call",
						toolCallId: M.toolCallId,
						toolName: M.toolName,
						input: JSON.stringify((oe = M.arguments) != null ? oe : {}),
						providerExecuted: !0
					}), M.callEmitted = !0;
					else if (M.kind === "builtin_tool_result" && !M.resultEmitted) {
						g.enqueue({
							type: "tool-result",
							toolCallId: M.callId,
							toolName: M.toolName,
							result: (te = M.result) != null ? te : null
						}), M.resultEmitted = !0;
						const se = Wc({
							block: {
								type: M.blockType,
								call_id: M.callId,
								result: M.result
							},
							generateId: t
						});
						for (const U of se) {
							const W = m(U);
							p.has(W) || (p.add(W), g.enqueue(U))
						}
					}
					c.delete(J.index);
					break
				}
				case "interaction.status_update":
				case "interaction.in_progress":
				case "interaction.requires_action": {
					const J = H;
					J.status != null ? l = J.status : ge === "interaction.requires_action" ? l = "requires_action" : l = "in_progress";
					break
				}
				case "interaction.completed": {
					const M = H.interaction;
					(M == null ? void 0 : M.id) != null && M.id.length > 0 && (r = M.id), (M == null ? void 0 : M.status) != null && (l = M.status), (M == null ? void 0 : M.usage) != null && (i = M.usage), (M == null ? void 0 : M.service_tier) != null && (s = M.service_tier);
					break
				}
				case "error": {
					const J = H;
					l = "failed";
					const M = (P = J.error) != null ? P : {
						message: "Unknown interaction error"
					};
					g.enqueue({
						type: "error",
						error: M
					});
					break
				}
			}
		},
		flush(h) {
			const g = {
					unified: Qr({
						status: l,
						hasFunctionCall: d
					}),
					raw: l
				},
				_ = Hc(i),
				w = {
					google: {
						...r != null ? {
							interactionId: r
						} : {},
						...s != null ? {
							serviceTier: s
						} : {},
						..._ != null ? {
							outputTokensByModality: _
						} : {}
					}
				};
			h.enqueue({
				type: "finish",
				finishReason: g,
				usage: Xr(i),
				providerMetadata: w
			})
		}
	})
}

function Uw({
	prompt: e,
	previousInteractionId: t,
	store: n,
	mediaResolution: o
}) {
	var r, i, s, l, d, c, p;
	const m = [],
		h = t != null && n === !1,
		g = t != null && n !== !1;
	h && m.push({
		type: "other",
		message: "google.interactions: providerOptions.google.previousInteractionId was set together with store: false. These are incoherent (the prior interaction cannot be referenced when nothing was stored on the server); the full history will be sent and previous_interaction_id will still be emitted."
	});
	const _ = g ? jw({
			prompt: e,
			previousInteractionId: t
		}) : e,
		w = [],
		k = [];
	for (const I of _) switch (I.role) {
		case "system": {
			w.push(I.content);
			break
		}
		case "user": {
			const E = [];
			for (const v of I.content)
				if (v.type === "text") E.push({
					type: "text",
					text: v.text
				});
				else if (v.type === "file") {
				const b = is({
					part: v,
					warnings: m,
					mediaResolution: o
				});
				b != null && E.push(b)
			}
			const S = Bw(E);
			S.length > 0 && k.push({
				type: "user_input",
				content: S
			});
			break
		}
		case "assistant": {
			let E = [];
			const S = () => {
				E.length > 0 && (k.push({
					type: "model_output",
					content: E
				}), E = [])
			};
			for (const v of I.content)
				if (v.type === "text") E.push({
					type: "text",
					text: v.text
				});
				else if (v.type === "reasoning") {
				S();
				const b = (i = (r = v.providerOptions) == null ? void 0 : r.google) == null ? void 0 : i.signature;
				k.push({
					type: "thought",
					...b != null ? {
						signature: b
					} : {},
					summary: v.text.length > 0 ? [{
						type: "text",
						text: v.text
					}] : void 0
				})
			} else if (v.type === "file") {
				const b = is({
					part: v,
					warnings: m,
					mediaResolution: o
				});
				b != null && E.push(b)
			} else if (v.type === "tool-call") {
				S();
				const b = (l = (s = v.providerOptions) == null ? void 0 : s.google) == null ? void 0 : l.signature,
					T = typeof v.input == "string" ? Lw(v.input) : (d = v.input) != null ? d : {};
				k.push({
					type: "function_call",
					id: v.toolCallId,
					name: v.toolName,
					arguments: T,
					...b != null ? {
						signature: b
					} : {}
				})
			} else m.push({
				type: "other",
				message: `google.interactions: unsupported assistant content part type "${v.type}"; part dropped.`
			});
			S();
			break
		}
		case "tool": {
			const E = [];
			for (const S of I.content) {
				if (S.type !== "tool-result") {
					m.push({
						type: "other",
						message: `google.interactions: unsupported tool message part type "${S.type}"; part dropped.`
					});
					continue
				}
				const v = Zw({
					toolCallId: S.toolCallId,
					toolName: S.toolName,
					output: S.output,
					signature: (p = (c = S.providerOptions) == null ? void 0 : c.google) == null ? void 0 : p.signature,
					warnings: m
				});
				E.push(v)
			}
			E.length > 0 && k.push({
				type: "user_input",
				content: E
			});
			break
		}
	}
	const A = w.length > 0 ? w.join(`

`) : void 0;
	return {
		input: k,
		systemInstruction: A,
		warnings: m
	}
}

function is({
	part: e,
	warnings: t,
	mediaResolution: n
}) {
	if (e.data.type === "text") return {
		type: "text",
		text: e.data.text
	};
	const o = ut(e.mediaType);
	let r;
	switch (o) {
		case "image":
			r = "image";
			break;
		case "audio":
			r = "audio";
			break;
		case "video":
			r = "video";
			break;
		case "application":
		case "text":
			r = "document";
			break;
		default:
			r = void 0
	}
	if (r == null) {
		t.push({
			type: "other",
			message: `google.interactions: unsupported file media type "${e.mediaType}"; part dropped.`
		});
		return
	}
	const i = n != null && (r === "image" || r === "video") ? {
		resolution: n
	} : {};
	switch (e.data.type) {
		case "data": {
			const s = Ge({
				part: e
			});
			return {
				type: r,
				data: De(e.data.data),
				mime_type: s,
				...i
			}
		}
		case "url":
			return {
				type: r, uri: e.data.url.toString(), ...Zt(e.mediaType) ? {
					mime_type: e.mediaType
				} : {}, ...i
			};
		case "reference": {
			const s = zt({
				reference: e.data.reference,
				provider: "google"
			});
			return {
				type: r,
				uri: s,
				...Zt(e.mediaType) ? {
					mime_type: e.mediaType
				} : {},
				...i
			}
		}
	}
}

function jw({
	prompt: e,
	previousInteractionId: t
}) {
	const n = [],
		o = new Set;
	for (const r of e) {
		if (r.role === "assistant") {
			if (r.content.some(s => {
					var l, d;
					return ((d = (l = s.providerOptions) == null ? void 0 : l.google) == null ? void 0 : d.interactionId) === t
				})) {
				for (const s of r.content) s.type === "tool-call" && o.add(s.toolCallId);
				continue
			}
			n.push(r);
			continue
		}
		if (r.role === "tool") {
			const i = r.content.filter(s => s.type !== "tool-result" ? !0 : !o.has(s.toolCallId));
			if (i.length === 0) continue;
			n.push({
				...r,
				content: i
			});
			continue
		}
		n.push(r)
	}
	return n
}

function Lw(e) {
	try {
		const t = Jt(e);
		return t != null && typeof t == "object" && !Array.isArray(t) ? t : {
			value: t
		}
	} catch {
		return {
			value: e
		}
	}
}

function Zw({
	toolCallId: e,
	toolName: t,
	output: n,
	signature: o,
	warnings: r
}) {
	var i;
	const s = {
		type: "function_result",
		call_id: e,
		name: t,
		...o != null ? {
			signature: o
		} : {}
	};
	switch (n.type) {
		case "text":
			return {
				...s, result: n.value
			};
		case "json":
			return {
				...s, result: JSON.stringify(n.value)
			};
		case "error-text":
			return {
				...s, is_error: !0, result: n.value
			};
		case "error-json":
			return {
				...s, is_error: !0, result: JSON.stringify(n.value)
			};
		case "execution-denied":
			return {
				...s, is_error: !0, result: (i = n.reason) != null ? i : "Tool execution denied by user."
			};
		case "content": {
			const l = [];
			for (const d of n.value)
				if (d.type === "text") l.push({
					type: "text",
					text: d.text
				});
				else if (d.type === "file") {
				if (ut(d.mediaType) !== "image") {
					r.push({
						type: "other",
						message: `google.interactions: tool-result file with mediaType "${d.mediaType}" is not supported (Interactions \`function_result.result\` accepts only text and image content); part dropped.`
					});
					continue
				}
				const p = Fw({
					part: d,
					warnings: r
				});
				p != null && l.push(p)
			} else r.push({
				type: "other",
				message: `google.interactions: tool-result content part type "${d.type}" is not supported; part dropped.`
			});
			return {
				...s,
				result: l
			}
		}
	}
}

function Fw({
	part: e,
	warnings: t
}) {
	switch (e.data.type) {
		case "data": {
			const n = Zt(e.mediaType) ? e.mediaType : Ge({
				part: {
					mediaType: e.mediaType,
					data: e.data
				}
			});
			return {
				type: "image",
				data: De(e.data.data),
				mime_type: n
			}
		}
		case "url":
			return {
				type: "image", uri: e.data.url.toString(), ...Zt(e.mediaType) ? {
					mime_type: e.mediaType
				} : {}
			};
		case "reference":
			return {
				type: "image", uri: zt({
					reference: e.data.reference,
					provider: "google"
				}), ...Zt(e.mediaType) ? {
					mime_type: e.mediaType
				} : {}
			};
		case "text": {
			t.push({
				type: "other",
				message: 'google.interactions: tool-result image part with `data.type === "text"` is not representable as an image; part dropped.'
			});
			return
		}
	}
}

function Bw(e) {
	if (e.length < 2) return e;
	const t = [];
	for (const n of e) {
		const o = t[t.length - 1];
		if (n.type === "text" && o != null && o.type === "text" && o.annotations == null && n.annotations == null) {
			const r = {
				type: "text",
				text: `${o.text}

${n.text}`
			};
			t[t.length - 1] = r;
			continue
		}
		t.push(n)
	}
	return t
}
var Qn = () => u({
		modality: a().nullish(),
		tokens: y().nullish()
	}).loose(),
	Kc = () => u({
		total_input_tokens: y().nullish(),
		total_output_tokens: y().nullish(),
		total_thought_tokens: y().nullish(),
		total_cached_tokens: y().nullish(),
		total_tool_use_tokens: y().nullish(),
		total_tokens: y().nullish(),
		input_tokens_by_modality: R(Qn()).nullish(),
		output_tokens_by_modality: R(Qn()).nullish(),
		cached_tokens_by_modality: R(Qn()).nullish(),
		tool_use_tokens_by_modality: R(Qn()).nullish(),
		grounding_tool_count: R(u({
			type: a().nullish(),
			count: y().nullish()
		}).loose()).nullish()
	}).loose(),
	Yc = () => Y(["in_progress", "requires_action", "completed", "failed", "cancelled", "incomplete"]),
	Xc = () => {
		const e = u({
				type: f("url_citation"),
				url: a().nullish(),
				title: a().nullish(),
				start_index: y().nullish(),
				end_index: y().nullish()
			}).loose(),
			t = u({
				type: f("file_citation"),
				file_name: a().nullish(),
				document_uri: a().nullish(),
				url: a().nullish(),
				page_number: y().nullish(),
				media_id: a().nullish(),
				start_index: y().nullish(),
				end_index: y().nullish(),
				custom_metadata: ke(a(), Se()).nullish()
			}).loose(),
			n = u({
				type: f("place_citation"),
				name: a().nullish(),
				url: a().nullish(),
				place_id: a().nullish(),
				start_index: y().nullish(),
				end_index: y().nullish()
			}).loose();
		return le([e, t, n, u({
			type: a()
		}).loose()])
	},
	Qc = () => u({
		type: a(),
		text: a().nullish(),
		data: a().nullish(),
		mime_type: a().nullish()
	}).loose(),
	as = () => {
		const e = u({
				type: f("text"),
				text: a(),
				annotations: R(Xc()).nullish()
			}).loose(),
			t = u({
				type: f("image"),
				data: a().nullish(),
				mime_type: a().nullish(),
				resolution: Y(["low", "medium", "high", "ultra_high"]).nullish(),
				uri: a().nullish()
			}).loose(),
			n = u({
				type: f("video"),
				data: a().nullish(),
				mime_type: a().nullish(),
				uri: a().nullish()
			}).loose();
		return le([e, t, n, u({
			type: a()
		}).loose()])
	},
	ed = ["google_search_call", "code_execution_call", "url_context_call", "file_search_call", "google_maps_call", "mcp_server_tool_call"],
	td = ["google_search_result", "code_execution_result", "url_context_result", "file_search_result", "google_maps_result", "mcp_server_tool_result"],
	nd = () => {
		const e = u({
				type: f("user_input"),
				content: R(as()).nullish()
			}).loose(),
			t = u({
				type: f("model_output"),
				content: R(as()).nullish()
			}).loose(),
			n = u({
				type: f("function_call"),
				id: a(),
				name: a(),
				arguments: ke(a(), Se()).nullish(),
				signature: a().nullish()
			}).loose(),
			o = u({
				type: f("thought"),
				signature: a().nullish(),
				summary: R(Qc()).nullish()
			}).loose(),
			r = u({
				type: Y(ed),
				id: a(),
				arguments: ke(a(), Se()).nullish(),
				name: a().nullish(),
				server_name: a().nullish(),
				search_type: a().nullish(),
				signature: a().nullish()
			}).loose(),
			i = u({
				type: Y(td),
				call_id: a(),
				result: Se().nullish(),
				is_error: _e().nullish(),
				name: a().nullish(),
				server_name: a().nullish(),
				signature: a().nullish()
			}).loose();
		return le([e, t, n, o, r, i, u({
			type: a()
		}).loose()])
	},
	fr = ee(() => Q(u({
		id: a().nullish(),
		created: a().nullish(),
		updated: a().nullish(),
		status: Yc(),
		model: a().nullish(),
		agent: a().nullish(),
		steps: R(nd()).nullish(),
		usage: Kc().nullish(),
		service_tier: a().nullish(),
		previous_interaction_id: a().nullish(),
		response_modalities: R(a()).nullish()
	}).loose())),
	od = ee(() => Q((() => {
		const e = Yc(),
			t = Xc(),
			n = Qc(),
			o = u({
				event_type: f("interaction.created"),
				event_id: a().nullish(),
				interaction: u({
					id: a().nullish(),
					created: a().nullish(),
					model: a().nullish(),
					agent: a().nullish(),
					status: e.nullish()
				}).loose()
			}).loose(),
			r = u({
				event_type: f("step.start"),
				event_id: a().nullish(),
				index: y(),
				step: nd()
			}).loose(),
			i = u({
				type: f("text"),
				text: a()
			}).loose(),
			s = u({
				type: f("thought_summary"),
				content: n.nullish()
			}).loose(),
			l = u({
				type: f("thought_signature"),
				signature: a().nullish()
			}).loose(),
			d = u({
				type: f("arguments_delta"),
				arguments: a().nullish(),
				id: a().nullish(),
				signature: a().nullish()
			}).loose(),
			c = u({
				type: Y(["text_annotation_delta", "text_annotation"]),
				annotations: R(t).nullish()
			}).loose(),
			p = u({
				type: f("image"),
				data: a().nullish(),
				mime_type: a().nullish(),
				resolution: Y(["low", "medium", "high", "ultra_high"]).nullish(),
				uri: a().nullish()
			}).loose(),
			m = u({
				type: f("video"),
				data: a().nullish(),
				mime_type: a().nullish(),
				uri: a().nullish()
			}).loose(),
			h = u({
				type: Y(ed),
				id: a().nullish(),
				arguments: ke(a(), Se()).nullish(),
				name: a().nullish(),
				server_name: a().nullish(),
				search_type: a().nullish(),
				signature: a().nullish()
			}).loose(),
			g = u({
				type: Y(td),
				call_id: a().nullish(),
				result: Se().nullish(),
				is_error: _e().nullish(),
				name: a().nullish(),
				server_name: a().nullish(),
				signature: a().nullish()
			}).loose(),
			_ = u({
				type: a()
			}).loose(),
			w = le([i, p, m, s, l, d, c, h, g, _]),
			k = u({
				event_type: f("step.delta"),
				event_id: a().nullish(),
				index: y(),
				delta: w
			}).loose(),
			A = u({
				event_type: f("step.stop"),
				event_id: a().nullish(),
				index: y()
			}).loose(),
			I = u({
				event_type: f("interaction.status_update"),
				event_id: a().nullish(),
				interaction_id: a().nullish(),
				status: e.nullish()
			}).loose(),
			E = u({
				event_type: f("interaction.in_progress"),
				event_id: a().nullish(),
				interaction_id: a().nullish(),
				status: e.nullish()
			}).loose(),
			S = u({
				event_type: f("interaction.requires_action"),
				event_id: a().nullish(),
				interaction_id: a().nullish(),
				status: e.nullish()
			}).loose(),
			v = u({
				event_type: f("interaction.completed"),
				event_id: a().nullish(),
				interaction: u({
					id: a().nullish(),
					status: e.nullish(),
					usage: Kc().nullish(),
					service_tier: a().nullish()
				}).loose()
			}).loose(),
			b = u({
				event_type: f("error"),
				event_id: a().nullish(),
				error: u({
					code: a().nullish(),
					message: a().nullish()
				}).loose().nullish()
			}).loose(),
			T = u({
				event_type: a()
			}).loose();
		return le([o, r, k, A, I, E, S, v, b, T])
	})())),
	Vw = ee(() => Q(u({
		previousInteractionId: a().nullish(),
		store: _e().nullish(),
		agent: a().nullish(),
		agentConfig: le([u({
			type: f("dynamic")
		}).loose(), u({
			type: f("deep-research"),
			thinkingSummaries: Y(["auto", "none"]).nullish(),
			visualization: Y(["off", "auto"]).nullish(),
			collaborativePlanning: _e().nullish()
		})]).nullish(),
		thinkingLevel: Y(["minimal", "low", "medium", "high"]).nullish(),
		thinkingSummaries: Y(["auto", "none"]).nullish(),
		responseFormat: R(le([u({
			type: f("text"),
			mimeType: a().nullish(),
			schema: Se().nullish()
		}).loose(), u({
			type: f("image"),
			mimeType: a().nullish(),
			aspectRatio: Y(["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9", "1:8", "8:1", "1:4", "4:1"]).nullish(),
			imageSize: Y(["1K", "2K", "4K", "512"]).nullish()
		}).loose(), u({
			type: f("audio"),
			mimeType: a().nullish()
		}).loose()])).nullish(),
		imageConfig: u({
			aspectRatio: Y(["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9", "1:8", "8:1", "1:4", "4:1"]).nullish(),
			imageSize: Y(["1K", "2K", "4K", "512"]).nullish()
		}).nullish(),
		mediaResolution: Y(["low", "medium", "high", "ultra_high"]).nullish(),
		responseModalities: R(Y(["text", "image", "audio", "video", "document"])).nullish(),
		serviceTier: Y(["flex", "standard", "priority"]).nullish(),
		systemInstruction: a().nullish(),
		signature: a().nullish(),
		interactionId: a().nullish(),
		pollingTimeoutMs: y().int().positive().nullish(),
		background: _e().nullish(),
		environment: le([a(), u({
			type: f("remote"),
			sources: R(le([u({
				type: f("gcs"),
				source: a(),
				target: a().nullish()
			}), u({
				type: f("repository"),
				source: a(),
				target: a().nullish()
			}), u({
				type: f("inline"),
				content: a(),
				target: a()
			})])).nullish(),
			network: le([f("disabled"), u({
				allowlist: R(u({
					domain: a(),
					transform: R(ke(a(), a())).nullish()
				}))
			})]).nullish()
		})]).nullish()
	})));

function Yt({
	signature: e,
	interactionId: t
}) {
	const n = {};
	return e != null && (n.signature = e), t != null && (n.interactionId = t), Object.keys(n).length > 0 ? {
		providerMetadata: {
			google: n
		}
	} : {}
}
var Hw = new Set(["google_search_call", "code_execution_call", "url_context_call", "file_search_call", "google_maps_call", "mcp_server_tool_call"]),
	Gw = new Set(["google_search_result", "code_execution_result", "url_context_result", "file_search_result", "google_maps_result", "mcp_server_tool_result"]);

function Jw(e) {
	return e.replace(/_call$/, "")
}

function Ww(e) {
	return e.replace(/_result$/, "")
}

function rd({
	steps: e,
	generateId: t,
	interactionId: n
}) {
	var o, r, i, s, l, d, c, p, m, h, g, _, w;
	const k = [];
	let A = !1;
	if (e == null) return {
		content: k,
		hasFunctionCall: A
	};
	for (const I of e) {
		if (I == null || typeof I != "object") continue;
		const E = I.type;
		if (typeof E == "string") switch (E) {
			case "user_input":
				break;
			case "model_output": {
				const S = (o = I.content) != null ? o : [];
				for (const v of S) {
					if (v == null || typeof v != "object") continue;
					const b = v.type;
					if (b === "text") {
						const T = (r = v.text) != null ? r : "",
							q = v.annotations;
						k.push({
							type: "text",
							text: T,
							...Yt({
								interactionId: n
							})
						});
						const L = hr({
							annotations: q,
							generateId: t
						});
						for (const O of L) k.push(O)
					} else if (b === "image") {
						const T = v;
						T.data != null && T.data.length > 0 ? k.push({
							type: "file",
							mediaType: (i = T.mime_type) != null ? i : "image/png",
							data: {
								type: "data",
								data: T.data
							},
							...Yt({
								interactionId: n
							})
						}) : T.uri != null && T.uri.length > 0 && k.push({
							type: "file",
							mediaType: (s = T.mime_type) != null ? s : "image/png",
							data: {
								type: "url",
								url: new URL(T.uri)
							},
							...Yt({
								interactionId: n
							})
						})
					} else if (b === "video") {
						const T = v;
						T.data != null && T.data.length > 0 ? k.push({
							type: "file",
							mediaType: (l = T.mime_type) != null ? l : "video/mp4",
							data: {
								type: "data",
								data: T.data
							},
							...Yt({
								interactionId: n
							})
						}) : T.uri != null && T.uri.length > 0 && k.push({
							type: "file",
							mediaType: (d = T.mime_type) != null ? d : "video/mp4",
							data: {
								type: "url",
								url: new URL(T.uri)
							},
							...Yt({
								interactionId: n
							})
						})
					}
				}
				break
			}
			case "thought": {
				const S = I,
					b = (Array.isArray(S.summary) ? S.summary : []).filter(T => (T == null ? void 0 : T.type) === "text" && typeof T.text == "string").map(T => T.text).join(`
`);
				k.push({
					type: "reasoning",
					text: b,
					...Yt({
						signature: S.signature,
						interactionId: n
					})
				});
				break
			}
			case "function_call": {
				A = !0;
				const S = I;
				k.push({
					type: "tool-call",
					toolCallId: S.id,
					toolName: S.name,
					input: JSON.stringify((c = S.arguments) != null ? c : {}),
					...Yt({
						signature: S.signature,
						interactionId: n
					})
				});
				break
			}
			default: {
				if (Hw.has(E)) {
					const S = I,
						v = E === "mcp_server_tool_call" ? (p = S.name) != null ? p : "mcp_server_tool" : Jw(E),
						b = JSON.stringify((m = S.arguments) != null ? m : {});
					k.push({
						type: "tool-call",
						toolCallId: (h = S.id) != null ? h : t(),
						toolName: v,
						input: b,
						providerExecuted: !0
					})
				} else if (Gw.has(E)) {
					const S = I,
						v = E === "mcp_server_tool_result" ? (g = S.name) != null ? g : "mcp_server_tool" : Ww(E);
					k.push({
						type: "tool-result",
						toolCallId: (_ = S.call_id) != null ? _ : t(),
						toolName: v,
						result: (w = S.result) != null ? w : null
					});
					const b = Wc({
						block: I,
						generateId: t
					});
					for (const T of b) k.push(T)
				}
				break
			}
		}
	}
	return {
		content: k,
		hasFunctionCall: A
	}
}
var Kw = () => globalThis.fetch;
async function id({
	baseURL: e,
	interactionId: t,
	headers: n,
	fetch: o = Kw()
}) {
	if (t == null || t.length === 0) return;
	const r = `${e}/interactions/${encodeURIComponent(t)}/cancel`;
	try {
		const i = await o(r, {
			method: "POST",
			headers: sn(Ce({
				"Content-Type": "application/json"
			}, n), Gr()),
			body: "{}"
		});
		try {
			await i.text()
		} catch {}
	} catch {}
}
var Yw = new Set(["completed", "failed", "cancelled", "incomplete"]);

function _r(e) {
	return e != null && Yw.has(e)
}
var Xw = 1e3,
	Qw = 1e4,
	ek = 1800 * 1e3;
async function tk({
	baseURL: e,
	interactionId: t,
	headers: n,
	fetch: o,
	abortSignal: r,
	initialDelayMs: i = Xw,
	maxDelayMs: s = Qw,
	timeoutMs: l = ek
}) {
	if (t == null || t.length === 0) throw new Error("google.interactions: cannot poll a background interaction without an id. The POST response did not include an interaction id.");
	const d = Date.now();
	let c = i;
	const p = `${e}/interactions/${encodeURIComponent(t)}`,
		m = () => id({
			baseURL: e,
			interactionId: t,
			headers: n,
			fetch: o
		});
	try {
		for (;;) {
			if (r != null && r.aborted) throw await m(), new DOMException("Polling was aborted", "AbortError");
			if (Date.now() - d > l) throw new Error(`google.interactions: timed out polling interaction ${t} after ${l}ms.`);
			await Lt(c, {
				abortSignal: r
			});
			const {
				value: h,
				rawValue: g,
				responseHeaders: _
			} = await qn({
				url: p,
				validateUrl: !1,
				headers: n,
				failedResponseHandler: at,
				successfulResponseHandler: Me(fr),
				abortSignal: r,
				fetch: o
			});
			if (_r(h.status)) return {
				response: h,
				rawResponse: g,
				responseHeaders: _
			};
			c = Math.min(c * 2, s)
		}
	} catch (h) {
		throw Mt(h) && await m(), h
	}
}

function nk({
	tools: e,
	toolChoice: t
}) {
	var n, o, r, i;
	const s = [],
		l = e != null && e.length ? e : void 0;
	if (l == null) return {
		tools: void 0,
		toolChoice: void 0,
		toolWarnings: s
	};
	const d = [];
	for (const m of l) {
		if (m.type === "function") {
			d.push({
				type: "function",
				name: m.name,
				description: (n = m.description) != null ? n : "",
				parameters: m.inputSchema
			});
			continue
		}
		if (m.type === "provider") {
			const h = (o = m.args) != null ? o : {};
			switch (m.id) {
				case "google.google_search": {
					const g = h.searchTypes;
					let _;
					if (g != null && typeof g == "object") {
						const w = [];
						g.webSearch != null && w.push("web_search"), g.imageSearch != null && w.push("image_search"), w.length > 0 && (_ = w)
					}
					d.push({
						type: "google_search",
						..._ != null ? {
							search_types: _
						} : {}
					});
					break
				}
				case "google.code_execution": {
					d.push({
						type: "code_execution"
					});
					break
				}
				case "google.url_context": {
					d.push({
						type: "url_context"
					});
					break
				}
				case "google.file_search": {
					d.push({
						type: "file_search",
						...h.fileSearchStoreNames != null ? {
							file_search_store_names: h.fileSearchStoreNames
						} : {},
						...h.topK != null ? {
							top_k: h.topK
						} : {},
						...h.metadataFilter != null ? {
							metadata_filter: h.metadataFilter
						} : {}
					});
					break
				}
				case "google.google_maps": {
					d.push({
						type: "google_maps",
						...h.latitude != null ? {
							latitude: h.latitude
						} : {},
						...h.longitude != null ? {
							longitude: h.longitude
						} : {},
						...h.enableWidget != null ? {
							enable_widget: h.enableWidget
						} : {}
					});
					break
				}
				case "google.computer_use": {
					d.push({
						type: "computer_use",
						environment: (r = h.environment) != null ? r : "browser",
						...h.excludedPredefinedFunctions != null ? {
							excludedPredefinedFunctions: h.excludedPredefinedFunctions
						} : {}
					});
					break
				}
				case "google.mcp_server": {
					d.push({
						type: "mcp_server",
						...h.name != null ? {
							name: h.name
						} : {},
						...h.url != null ? {
							url: h.url
						} : {},
						...h.headers != null ? {
							headers: h.headers
						} : {},
						...h.allowedTools != null ? {
							allowed_tools: h.allowedTools
						} : {}
					});
					break
				}
				case "google.retrieval": {
					const g = (i = h.vertexAiSearchConfig) != null ? i : void 0;
					d.push({
						type: "retrieval",
						...h.retrievalTypes != null ? {
							retrieval_types: h.retrievalTypes
						} : {
							retrieval_types: ["vertex_ai_search"]
						},
						...g != null ? {
							vertex_ai_search_config: g
						} : {}
					});
					break
				}
				default: {
					s.push({
						type: "unsupported",
						feature: `provider-defined tool ${m.id}`,
						details: `provider-defined tool ${m.id} is not supported by google.interactions; tool dropped.`
					});
					break
				}
			}
			continue
		}
		s.push({
			type: "unsupported",
			feature: `tool of type ${m.type}`,
			details: "Only function tools and google.* provider-defined tools are supported by google.interactions; tool dropped."
		})
	}
	const c = d.some(m => m.type === "function");
	let p;
	if (t != null && c) switch (t.type) {
		case "auto":
			p = "auto";
			break;
		case "required":
			p = "any";
			break;
		case "none":
			p = "none";
			break;
		case "tool":
			p = {
				allowed_tools: {
					mode: "validated",
					tools: [t.toolName]
				}
			};
			break
	}
	return {
		tools: d.length > 0 ? d : void 0,
		toolChoice: p,
		toolWarnings: s
	}
}
var ok = 3,
	rk = 500;

function ik({
	baseURL: e,
	interactionId: t,
	headers: n,
	fetch: o,
	abortSignal: r,
	maxRetries: i = ok,
	retryDelayMs: s = rk
}) {
	if (t.length === 0) throw new Error("google.interactions: cannot stream a background interaction without an id.");
	const l = {
		...n,
		accept: "text/event-stream"
	};
	let d, c = !1,
		p = 0,
		m = !1,
		h;
	const g = new AbortController,
		_ = () => g.abort();
	r != null && (r.aborted ? g.abort() : r.addEventListener("abort", _, {
		once: !0
	}));
	const w = g.signal;

	function k() {
		const I = `${e}/interactions/${encodeURIComponent(t)}`,
			E = new URLSearchParams({
				stream: "true"
			});
		return d != null && E.set("last_event_id", d), `${I}?${E.toString()}`
	}
	async function A() {
		const {
			value: I
		} = await qn({
			url: k(),
			validateUrl: !1,
			headers: l,
			failedResponseHandler: at,
			successfulResponseHandler: Dt(od),
			abortSignal: w,
			fetch: o
		});
		return I.getReader()
	}
	return new ReadableStream({
		async start(I) {
			try {
				for (; !c && !w.aborted;) {
					if (h == null) try {
						h = await A(), m = !1
					} catch (E) {
						if (Mt(E) || w.aborted) {
							I.error(E);
							return
						}
						if (p++, p >= i) {
							I.error(E);
							return
						}
						await Lt(s * p, {
							abortSignal: w
						});
						continue
					}
					try {
						const {
							done: E,
							value: S
						} = await h.read();
						if (E) {
							if (h = void 0, c) break;
							if (m) p = 0;
							else {
								if (p++, p >= i) {
									I.error(new Error("google.interactions: SSE stream closed without producing any events."));
									return
								}
								await Lt(s * p, {
									abortSignal: w
								})
							}
							continue
						}
						if (m = !0, S.success) {
							const v = S.value;
							typeof v.event_id == "string" && v.event_id.length > 0 && (d = v.event_id), (v.event_type === "interaction.completed" || v.event_type === "error") && (c = !0)
						}
						I.enqueue(S)
					} catch (E) {
						if (Mt(E) || w.aborted) {
							I.error(E);
							return
						}
						if (h = void 0, p++, p >= i) {
							I.error(E);
							return
						}
						await Lt(s * p, {
							abortSignal: w
						})
					}
				}
				I.close()
			} catch (E) {
				I.error(E)
			} finally {
				r != null && r.removeEventListener("abort", _), h == null || h.cancel().catch(() => {}), h = void 0, w.aborted && !c && await id({
					baseURL: e,
					interactionId: t,
					headers: n,
					fetch: o
				})
			}
		},
		cancel() {
			g.abort(), h == null || h.cancel().catch(() => {}), h = void 0
		}
	})
}

function ak({
	response: e,
	warnings: t,
	generateId: n,
	includeRawChunks: o,
	headerServiceTier: r
}) {
	return new ReadableStream({
		start(i) {
			var s, l, d;
			i.enqueue({
				type: "stream-start",
				warnings: t
			});
			const c = typeof e.id == "string" && e.id.length > 0 ? e.id : void 0;
			let p;
			const m = e.created;
			if (typeof m == "string") {
				const E = new Date(m);
				Number.isNaN(E.getTime()) || (p = E)
			}
			i.enqueue({
				type: "response-metadata",
				...c != null ? {
					id: c
				} : {},
				modelId: (s = e.model) != null ? s : void 0,
				...p ? {
					timestamp: p
				} : {}
			}), o && i.enqueue({
				type: "raw",
				rawValue: e
			});
			const {
				content: h,
				hasFunctionCall: g
			} = rd({
				steps: (l = e.steps) != null ? l : null,
				generateId: n,
				interactionId: c
			});
			let _ = 0;
			const w = () => `${c ?? "agent"}:${_++}`;
			for (const E of h) switch (E.type) {
				case "text": {
					const S = w(),
						v = E.providerMetadata;
					i.enqueue({
						type: "text-start",
						id: S
					}), E.text.length > 0 && i.enqueue({
						type: "text-delta",
						id: S,
						delta: E.text
					}), i.enqueue({
						type: "text-end",
						id: S,
						...v ? {
							providerMetadata: v
						} : {}
					});
					break
				}
				case "reasoning": {
					const S = w(),
						v = E.providerMetadata;
					i.enqueue({
						type: "reasoning-start",
						id: S
					}), E.text.length > 0 && i.enqueue({
						type: "reasoning-delta",
						id: S,
						delta: E.text
					}), i.enqueue({
						type: "reasoning-end",
						id: S,
						...v ? {
							providerMetadata: v
						} : {}
					});
					break
				}
				case "tool-call": {
					const S = E.providerMetadata;
					i.enqueue({
						type: "tool-input-start",
						id: E.toolCallId,
						toolName: E.toolName,
						...E.providerExecuted ? {
							providerExecuted: E.providerExecuted
						} : {}
					}), i.enqueue({
						type: "tool-input-delta",
						id: E.toolCallId,
						delta: E.input
					}), i.enqueue({
						type: "tool-input-end",
						id: E.toolCallId
					}), i.enqueue({
						type: "tool-call",
						toolCallId: E.toolCallId,
						toolName: E.toolName,
						input: E.input,
						...E.providerExecuted ? {
							providerExecuted: E.providerExecuted
						} : {},
						...S ? {
							providerMetadata: S
						} : {}
					});
					break
				}
				case "tool-result": {
					i.enqueue({
						type: "tool-result",
						toolCallId: E.toolCallId,
						toolName: E.toolName,
						result: E.result
					});
					break
				}
				case "source":
				case "file": {
					i.enqueue(E);
					break
				}
			}
			const k = (d = e.service_tier) != null ? d : r,
				A = {
					unified: Qr({
						status: e.status,
						hasFunctionCall: g
					}),
					raw: e.status
				},
				I = {
					google: {
						...c != null ? {
							interactionId: c
						} : {},
						...k != null ? {
							serviceTier: k
						} : {}
					}
				};
			i.enqueue({
				type: "finish",
				finishReason: A,
				usage: Xr(e.usage),
				providerMetadata: I
			}), i.close()
		}
	})
}
var sk = class ad {
	constructor(t, n) {
		this.specificationVersion = "v4", typeof t == "string" ? (this.modelId = t, this.agent = void 0) : "managedAgent" in t ? (this.modelId = t.managedAgent, this.agent = t.managedAgent) : (this.modelId = t.agent, this.agent = t.agent), this.config = n
	}
	static[Qe](t) {
		return {
			...tt({
				modelId: t.modelId,
				config: t.config
			}),
			agent: t.agent
		}
	}
	static[et](t) {
		return new ad(t.agent != null ? {
			agent: t.agent
		} : t.modelId, t.config)
	}
	get provider() {
		return this.config.provider
	}
	get supportedUrls() {
		return this.config.supportedUrls ? this.config.supportedUrls() : {
			"image/*": [/^https?:\/\/.+/],
			"application/pdf": [/^https?:\/\/.+/],
			"audio/*": [/^https?:\/\/.+/],
			"video/*": [/^https?:\/\/(www\.)?youtube\.com\/watch\?v=.+/, /^https?:\/\/youtu\.be\/.+/, /^gs:\/\/.+/]
		}
	}
	async getArgs(t) {
		var n, o, r, i, s, l, d, c, p, m, h, g, _, w, k, A, I, E, S, v, b, T, q, L, O, B;
		const F = [],
			z = await xe({
				provider: "google",
				providerOptions: t.providerOptions,
				schema: Vw
			}),
			N = this.agent != null,
			oe = t.tools != null && t.tools.length > 0;
		let te, P;
		if (oe) {
			const X = nk({
				tools: t.tools,
				toolChoice: t.toolChoice
			});
			te = X.tools, P = X.toolChoice, F.push(...X.toolWarnings)
		}
		const H = [];
		if (((n = t.responseFormat) == null ? void 0 : n.type) === "json")
			if (N) F.push({
				type: "other",
				message: "google.interactions: structured output (responseFormat) is not supported when an agent is set; responseFormat will be ignored."
			});
			else {
				const X = {
					type: "text",
					mime_type: "application/json",
					...t.responseFormat.schema != null ? {
						schema: t.responseFormat.schema
					} : {}
				};
				H.push(X)
			} if ((z == null ? void 0 : z.responseFormat) != null)
			for (const X of z.responseFormat) X.type === "text" ? H.push(At({
				type: "text",
				mime_type: (o = X.mimeType) != null ? o : void 0,
				schema: (r = X.schema) != null ? r : void 0
			})) : X.type === "image" ? H.push(At({
				type: "image",
				mime_type: (i = X.mimeType) != null ? i : void 0,
				aspect_ratio: (s = X.aspectRatio) != null ? s : void 0,
				image_size: (l = X.imageSize) != null ? l : void 0
			})) : X.type === "audio" && H.push(At({
				type: "audio",
				mime_type: (d = X.mimeType) != null ? d : void 0
			}));
		const {
			input: ge,
			systemInstruction: J,
			warnings: M
		} = Uw({
			prompt: t.prompt,
			previousInteractionId: (c = z == null ? void 0 : z.previousInteractionId) != null ? c : void 0,
			store: (p = z == null ? void 0 : z.store) != null ? p : void 0,
			mediaResolution: (m = z == null ? void 0 : z.mediaResolution) != null ? m : void 0
		});
		F.push(...M);
		let se = J;
		const U = (h = z == null ? void 0 : z.systemInstruction) != null ? h : void 0;
		se != null && U != null ? F.push({
			type: "other",
			message: "google.interactions: both AI SDK system message and providerOptions.google.systemInstruction were set; using the AI SDK system message."
		}) : se == null && U != null && (se = U);
		let W;
		if (N) {
			const X = [];
			t.temperature != null && X.push("temperature"), t.topP != null && X.push("topP"), t.seed != null && X.push("seed"), t.stopSequences != null && t.stopSequences.length > 0 && X.push("stopSequences"), t.maxOutputTokens != null && X.push("maxOutputTokens"), (z == null ? void 0 : z.thinkingLevel) != null && X.push("thinkingLevel"), (z == null ? void 0 : z.thinkingSummaries) != null && X.push("thinkingSummaries"), (z == null ? void 0 : z.imageConfig) != null && X.push("imageConfig"), X.length > 0 && F.push({
				type: "other",
				message: `google.interactions: ${X.join(", ")} ${X.length === 1 ? "is" : "are"} not supported when an agent is set; use providerOptions.google.agentConfig instead. Dropped from the request body.`
			}), W = void 0
		} else if (W = At({
				temperature: (g = t.temperature) != null ? g : void 0,
				top_p: (_ = t.topP) != null ? _ : void 0,
				seed: (w = t.seed) != null ? w : void 0,
				stop_sequences: t.stopSequences != null && t.stopSequences.length > 0 ? t.stopSequences : void 0,
				max_output_tokens: (k = t.maxOutputTokens) != null ? k : void 0,
				thinking_level: (A = z == null ? void 0 : z.thinkingLevel) != null ? A : void 0,
				thinking_summaries: (I = z == null ? void 0 : z.thinkingSummaries) != null ? I : void 0,
				tool_choice: P
			}), (z == null ? void 0 : z.imageConfig) != null) {
			const X = H.some(V => V.type === "image");
			F.push({
				type: "other",
				message: X ? "google.interactions: providerOptions.google.imageConfig is deprecated and was ignored because providerOptions.google.responseFormat already supplies an image entry. Use responseFormat exclusively." : 'google.interactions: providerOptions.google.imageConfig is deprecated. Use providerOptions.google.responseFormat with a { type: "image", ... } entry instead.'
			}), X || H.push({
				type: "image",
				mime_type: "image/png",
				...z.imageConfig.aspectRatio != null ? {
					aspect_ratio: z.imageConfig.aspectRatio
				} : {},
				...z.imageConfig.imageSize != null ? {
					image_size: z.imageConfig.imageSize
				} : {}
			})
		}
		let ce;
		if (N && (z == null ? void 0 : z.agentConfig) != null) {
			const X = z.agentConfig;
			X.type === "deep-research" ? ce = At({
				type: "deep-research",
				thinking_summaries: (E = X.thinkingSummaries) != null ? E : void 0,
				visualization: (S = X.visualization) != null ? S : void 0,
				collaborative_planning: (v = X.collaborativePlanning) != null ? v : void 0
			}) : X.type === "dynamic" && (ce = {
				type: "dynamic"
			})
		}
		let ne;
		if ((z == null ? void 0 : z.environment) != null)
			if (!N) F.push({
				type: "other",
				message: "google.interactions: environment is only supported when an agent is set; environment will be omitted from the request body."
			});
			else if (typeof z.environment == "string") ne = z.environment;
		else {
			const X = z.environment,
				V = (b = X.sources) == null ? void 0 : b.map(ae => {
					var Z;
					return ae.type === "inline" ? {
						type: "inline",
						content: ae.content,
						target: ae.target
					} : At({
						type: ae.type,
						source: ae.source,
						target: (Z = ae.target) != null ? Z : void 0
					})
				});
			let j;
			X.network === "disabled" ? j = "disabled" : X.network != null && (j = {
				allowlist: X.network.allowlist.map(ae => {
					var Z;
					return At({
						domain: ae.domain,
						transform: (Z = ae.transform) != null ? Z : void 0
					})
				})
			}), ne = At({
				type: "remote",
				sources: V != null && V.length > 0 ? V : void 0,
				network: j
			})
		}
		return {
			args: At({
				...N ? {
					agent: this.agent
				} : {
					model: this.modelId
				},
				input: ge,
				system_instruction: se,
				tools: te,
				response_format: H.length > 0 ? H : void 0,
				response_modalities: (z == null ? void 0 : z.responseModalities) != null ? z.responseModalities : void 0,
				previous_interaction_id: (T = z == null ? void 0 : z.previousInteractionId) != null ? T : void 0,
				service_tier: (q = z == null ? void 0 : z.serviceTier) != null ? q : void 0,
				store: (L = z == null ? void 0 : z.store) != null ? L : void 0,
				generation_config: W != null && Object.keys(W).length > 0 ? W : void 0,
				agent_config: ce,
				environment: ne,
				background: (O = z == null ? void 0 : z.background) != null ? O : void 0
			}),
			warnings: F,
			isAgent: N,
			isBackground: (z == null ? void 0 : z.background) === !0,
			pollingTimeoutMs: (B = z == null ? void 0 : z.pollingTimeoutMs) != null ? B : void 0
		}
	}
	async doGenerate(t) {
		var n, o, r, i, s, l;
		const {
			args: d,
			warnings: c,
			isAgent: p,
			pollingTimeoutMs: m
		} = await this.getArgs(t), h = `${this.config.baseURL}/interactions`, g = Ce(this.config.headers ? await ct(this.config.headers) : void 0, t.headers), _ = await Ue({
			url: h,
			headers: g,
			body: d,
			failedResponseHandler: at,
			successfulResponseHandler: Me(fr),
			abortSignal: t.abortSignal,
			fetch: this.config.fetch
		});
		let {
			responseHeaders: w,
			value: k,
			rawValue: A
		} = _;
		if (p && !_r(k.status)) {
			const O = await tk({
				baseURL: this.config.baseURL,
				interactionId: k.id,
				headers: g,
				fetch: this.config.fetch,
				abortSignal: t.abortSignal,
				timeoutMs: m
			});
			k = O.response, A = O.rawResponse, w = (n = O.responseHeaders) != null ? n : w
		}
		const I = typeof k.id == "string" && k.id.length > 0 ? k.id : void 0,
			{
				content: E,
				hasFunctionCall: S
			} = rd({
				steps: (o = k.steps) != null ? o : null,
				generateId: (r = this.config.generateId) != null ? r : ze,
				interactionId: I
			}),
			v = {
				unified: Qr({
					status: k.status,
					hasFunctionCall: S
				}),
				raw: k.status
			},
			b = (s = (i = k.service_tier) != null ? i : w == null ? void 0 : w["x-gemini-service-tier"]) != null ? s : void 0,
			T = Hc(k.usage),
			q = {
				google: {
					...I != null ? {
						interactionId: I
					} : {},
					...b != null ? {
						serviceTier: b
					} : {},
					...T != null ? {
						outputTokensByModality: T
					} : {}
				}
			};
		let L;
		if (typeof k.created == "string") {
			const O = new Date(k.created);
			Number.isNaN(O.getTime()) || (L = O)
		}
		return {
			content: E,
			finishReason: v,
			usage: Xr(k.usage),
			warnings: c,
			providerMetadata: q,
			request: {
				body: d
			},
			response: {
				headers: w,
				body: A,
				...I != null ? {
					id: I
				} : {},
				...L ? {
					timestamp: L
				} : {},
				modelId: (l = k.model) != null ? l : void 0
			}
		}
	}
	async doStream(t) {
		var n;
		const {
			args: o,
			warnings: r,
			isBackground: i,
			pollingTimeoutMs: s
		} = await this.getArgs(t), l = `${this.config.baseURL}/interactions`, d = Ce(this.config.headers ? await ct(this.config.headers) : void 0, t.headers);
		if (i) return this.doStreamBackground({
			args: o,
			warnings: r,
			url: l,
			mergedHeaders: d,
			options: t,
			pollingTimeoutMs: s
		});
		const c = {
				...o,
				stream: !0
			},
			{
				responseHeaders: p,
				value: m
			} = await Ue({
				url: l,
				headers: d,
				body: c,
				failedResponseHandler: at,
				successfulResponseHandler: Dt(od),
				abortSignal: t.abortSignal,
				fetch: this.config.fetch
			}),
			h = p == null ? void 0 : p["x-gemini-service-tier"],
			g = rs({
				warnings: r,
				generateId: (n = this.config.generateId) != null ? n : ze,
				includeRawChunks: t.includeRawChunks,
				serviceTier: h
			});
		return {
			stream: m.pipeThrough(g),
			request: {
				body: c
			},
			response: {
				headers: p
			}
		}
	}
	async doStreamBackground({
		args: t,
		warnings: n,
		url: o,
		mergedHeaders: r,
		options: i,
		pollingTimeoutMs: s
	}) {
		var l, d;
		const c = await Ue({
				url: o,
				headers: r,
				body: t,
				failedResponseHandler: at,
				successfulResponseHandler: Me(fr),
				abortSignal: i.abortSignal,
				fetch: this.config.fetch
			}),
			{
				responseHeaders: p,
				value: m
			} = c,
			h = m.id;
		if (h == null || h.length === 0) throw new Error("google.interactions: background POST response did not include an interaction id; cannot stream the result.");
		const g = p == null ? void 0 : p["x-gemini-service-tier"];
		if (_r(m.status)) return {
			stream: ak({
				response: m,
				warnings: n,
				generateId: (l = this.config.generateId) != null ? l : ze,
				includeRawChunks: i.includeRawChunks,
				headerServiceTier: g
			}),
			request: {
				body: t
			},
			response: {
				headers: p
			}
		};
		const _ = ik({
				baseURL: this.config.baseURL,
				interactionId: h,
				headers: r,
				fetch: this.config.fetch,
				abortSignal: i.abortSignal
			}),
			w = rs({
				warnings: n,
				generateId: (d = this.config.generateId) != null ? d : ze,
				includeRawChunks: i.includeRawChunks,
				serviceTier: g
			});
		return {
			stream: _.pipeThrough(w),
			request: {
				body: t
			},
			response: {
				headers: p
			}
		}
	}
};

function At(e) {
	const t = {};
	for (const [n, o] of Object.entries(e)) o !== void 0 && (t[n] = o);
	return t
}

function ss(e) {
	return e != null && typeof e == "object" && !Array.isArray(e)
}
var lk = class {
	constructor() {
		this.turnCounter = 0, this.hasAudio = !1, this.hasText = !1, this.hasTranscript = !1, this.turnClosed = !1, this.inputAudioRate = 16e3
	}
	get responseId() {
		return `google-resp-${this.turnCounter}`
	}
	get itemId() {
		return `google-item-${this.turnCounter}`
	}
	beginTurnIfClosed() {
		this.turnClosed && (this.turnCounter++, this.hasAudio = !1, this.hasText = !1, this.hasTranscript = !1, this.turnClosed = !1)
	}
	parseServerEvent(e) {
		var t, n;
		const o = e;
		return o.setupComplete != null ? {
			type: "session-created",
			raw: e
		} : o.toolCall != null ? (this.beginTurnIfClosed(), ((t = o.toolCall.functionCalls) != null ? t : []).flatMap(i => {
			var s;
			const l = JSON.stringify((s = i.args) != null ? s : {});
			return [{
				type: "function-call-arguments-delta",
				responseId: this.responseId,
				itemId: this.itemId,
				callId: i.id,
				delta: l,
				raw: e
			}, {
				type: "function-call-arguments-done",
				responseId: this.responseId,
				itemId: this.itemId,
				callId: i.id,
				name: i.name,
				arguments: l,
				raw: e
			}]
		})) : o.toolCallCancellation != null ? {
			type: "custom",
			rawType: "toolCallCancellation",
			raw: e
		} : o.serverContent != null ? this.parseServerContent(o.serverContent, e) : ((n = o.inputTranscription) == null ? void 0 : n.text) != null ? {
			type: "input-transcription-completed",
			itemId: `google-input-${this.turnCounter}`,
			transcript: o.inputTranscription.text,
			raw: e
		} : {
			type: "custom",
			rawType: String(Object.keys(o)[0]),
			raw: e
		}
	}
	parseServerContent(e, t) {
		var n, o, r, i;
		const s = [];
		if (e.interrupted && s.push({
				type: "speech-started",
				raw: t
			}), (n = e.modelTurn) != null && n.parts) {
			this.beginTurnIfClosed();
			for (const l of e.modelTurn.parts)(o = l.inlineData) != null && o.data && (this.hasAudio = !0, s.push({
				type: "audio-delta",
				responseId: this.responseId,
				itemId: this.itemId,
				delta: l.inlineData.data,
				raw: t
			})), l.text && (this.hasText = !0, s.push({
				type: "text-delta",
				responseId: this.responseId,
				itemId: this.itemId,
				delta: l.text,
				raw: t
			}))
		}
		return (r = e.outputTranscription) != null && r.text && (this.hasTranscript = !0, s.push({
			type: "audio-transcript-delta",
			responseId: this.responseId,
			itemId: this.itemId,
			delta: e.outputTranscription.text,
			raw: t
		})), (i = e.inputTranscription) != null && i.text && s.push({
			type: "input-transcription-completed",
			itemId: `google-input-${this.turnCounter}`,
			transcript: e.inputTranscription.text,
			raw: t
		}), e.turnComplete && (this.hasAudio && s.push({
			type: "audio-done",
			responseId: this.responseId,
			itemId: this.itemId,
			raw: t
		}), this.hasText && s.push({
			type: "text-done",
			responseId: this.responseId,
			itemId: this.itemId,
			raw: t
		}), this.hasTranscript && s.push({
			type: "audio-transcript-done",
			responseId: this.responseId,
			itemId: this.itemId,
			raw: t
		}), s.push({
			type: "response-done",
			responseId: this.responseId,
			status: "completed",
			raw: t
		}), this.turnClosed = !0), s.length === 0 ? {
			type: "custom",
			rawType: "serverContent",
			raw: t
		} : s.length === 1 ? s[0] : s
	}
	serializeClientEvent(e, t) {
		var n;
		switch (e.type) {
			case "session-update":
				return ((n = e.config.inputAudioFormat) == null ? void 0 : n.rate) != null && (this.inputAudioRate = e.config.inputAudioFormat.rate), {
					setup: gr(e.config, t)
				};
			case "input-audio-append":
				return {
					realtimeInput: {
						audio: {
							data: e.audio,
							mimeType: `audio/pcm;rate=${this.inputAudioRate}`
						}
					}
				};
			case "input-audio-commit":
				return {
					realtimeInput: {
						audioStreamEnd: !0
					}
				};
			case "input-audio-clear":
			case "response-create":
			case "response-cancel":
			case "conversation-item-truncate":
				return null;
			case "conversation-item-create": {
				const o = e.item;
				switch (o.type) {
					case "text-message":
						return {
							realtimeInput: {
								text: o.text
							}
						};
					case "function-call-output":
						return uk(o);
					case "audio-message":
						return null
				}
				break
			}
		}
		return null
	}
};
async function uk(e) {
	const t = await Ao({
			text: e.output
		}),
		n = t.success ? t.value : {};
	return {
		toolResponse: {
			functionResponses: [{
				id: e.callId,
				name: e.name,
				response: n
			}]
		}
	}
}

function gr(e, t) {
	const n = {
			model: pr(t)
		},
		o = {};
	if ((e == null ? void 0 : e.outputModalities) != null ? o.responseModalities = e.outputModalities.map(l => l.toUpperCase()) : o.responseModalities = ["AUDIO"], (e == null ? void 0 : e.voice) != null && (o.speechConfig = {
			voiceConfig: {
				prebuiltVoiceConfig: {
					voiceName: e.voice
				}
			}
		}), n.generationConfig = o, (e == null ? void 0 : e.instructions) != null && (n.systemInstruction = {
			parts: [{
				text: e.instructions
			}]
		}), (e == null ? void 0 : e.tools) != null && e.tools.length > 0 && (n.tools = [{
			functionDeclarations: e.tools.map(l => ({
				name: l.name,
				description: l.description,
				parameters: ft(l.parameters)
			}))
		}]), (e == null ? void 0 : e.inputAudioTranscription) != null && (n.inputAudioTranscription = {}), (e == null ? void 0 : e.outputAudioTranscription) != null && (n.outputAudioTranscription = {}), (e == null ? void 0 : e.providerOptions) == null) return n;
	const {
		google: r,
		...i
	} = e.providerOptions;
	Object.assign(n, i);
	const s = ss(r) ? r : void 0;
	if ((s == null ? void 0 : s.translationConfig) != null) {
		const l = ss(n.generationConfig) ? n.generationConfig : o;
		n.generationConfig = {
			...l,
			translationConfig: s.translationConfig
		}
	}
	return n
}
var ck = "google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContentConstrained";

function sd(e) {
	const t = new URL(e),
		n = t.pathname.split("/"),
		o = n.at(-1);
	return (o === "v1beta" || o === "v1alpha") && (n.pop(), t.pathname = n.join("/") || "/"), t
}

function dk(e) {
	const t = sd(e);
	return t.pathname = `${t.pathname.replace(/\/$/, "")}/v1alpha/auth_tokens`, t.toString()
}

function pk(e) {
	const t = sd(e);
	return t.protocol = t.protocol === "https:" ? "wss:" : "ws:", t.pathname = `${t.pathname.replace(/\/$/, "")}/ws/${ck}`, t.toString()
}
var mk = class {
		constructor(e, t) {
			this.specificationVersion = "v4", this.mapper = new lk, this.modelId = e, this.provider = t.provider, this.config = t
		}
		async doCreateClientSecret(e) {
			var t, n;
			const o = (t = this.config.fetch) != null ? t : fetch,
				i = this.config.headers()["x-goog-api-key"];
			if (!i) throw new Error("Google Generative AI API key is required for realtime token creation.");
			const s = Date.now(),
				l = ((n = e.expiresAfterSeconds) != null ? n : 60) * 1e3,
				d = new Date(s + l).toISOString(),
				c = new Date(s + l + 1800 * 1e3).toISOString(),
				p = gr(e.sessionConfig, this.modelId),
				m = await o(`${dk(this.config.baseURL)}?key=${encodeURIComponent(i)}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						uses: 0,
						expireTime: c,
						newSessionExpireTime: d,
						bidiGenerateContentSetup: p
					})
				});
			if (!m.ok) {
				const g = await m.text();
				throw new Error(`Google realtime auth token request failed: ${m.status} ${g}`)
			}
			const h = await m.json();
			return {
				token: h.name,
				url: pk(this.config.baseURL),
				expiresAt: h.expireTime ? Math.floor(new Date(h.expireTime).getTime() / 1e3) : void 0
			}
		}
		getWebSocketConfig(e) {
			return {
				url: `${e.url}?access_token=${encodeURIComponent(e.token)}`
			}
		}
		parseServerEvent(e) {
			return this.mapper.parseServerEvent(e)
		}
		serializeClientEvent(e) {
			return this.mapper.serializeClientEvent(e, this.modelId)
		}
		buildSessionConfig(e) {
			return gr(e, this.modelId)
		}
	},
	hk = ["text/html", "text/css", "text/plain", "text/xml", "text/csv", "text/rtf", "text/javascript", "application/json", "application/pdf", "image/bmp", "image/jpeg", "image/png", "image/webp", "video/mp4", "video/mpeg", "video/quicktime", "video/avi", "video/x-flv", "video/mpg", "video/webm", "video/wmv", "video/3gpp"],
	fk = /^https:\/\/.*$/;

function _k(e) {
	return /(^|\/)gemini-/.test(e) && !/(^|\/)gemini-2\.0/.test(e)
}

function ld(e = {}) {
	var t, n;
	const o = (t = $o(e.baseURL)) != null ? t : "https://generativelanguage.googleapis.com/v1beta",
		r = (n = e.name) != null ? n : "google.generative-ai",
		i = () => sn({
			"x-goog-api-key": Jr({
				apiKey: e.apiKey,
				environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
				description: "Google Generative AI"
			}),
			...e.headers
		}, `ai-sdk/google/${Sb}`),
		s = k => {
			var A;
			return new qc(k, {
				provider: r,
				baseURL: o,
				headers: i,
				generateId: (A = e.generateId) != null ? A : ze,
				supportedUrls: () => ({
					"*": [new RegExp(`^${o}/files/.*$`), new RegExp("^https://(?:www\\.)?youtube\\.com/watch\\?v=[\\w-]+(?:&[\\w=&.-]*)?$"), new RegExp("^https://youtu\\.be/[\\w-]+(?:\\?[\\w=&.-]*)?$")],
					..._k(k) ? Object.fromEntries(hk.map(I => [I, [fk]])) : {}
				}),
				fetch: e.fetch
			})
		},
		l = k => new $b(k, {
			provider: r,
			baseURL: o,
			headers: i,
			fetch: e.fetch
		}),
		d = (k, A = {}) => new pw(k, A, {
			provider: r,
			baseURL: o,
			headers: i,
			fetch: e.fetch
		}),
		c = () => new hw({
			provider: r,
			baseURL: o,
			headers: i,
			fetch: e.fetch
		}),
		p = k => {
			var A;
			return new Iw(k, {
				provider: r,
				baseURL: o,
				headers: i,
				fetch: e.fetch,
				generateId: (A = e.generateId) != null ? A : ze
			})
		},
		m = k => new mk(k, {
			provider: `${r}.realtime`,
			baseURL: o,
			headers: i,
			fetch: e.fetch
		}),
		h = k => new $w(k, {
			provider: `${r}.speech`,
			baseURL: o,
			headers: i,
			fetch: e.fetch
		}),
		g = Object.assign(k => m(k), {
			getToken: async k => {
				const I = await m(k.model).doCreateClientSecret({
					sessionConfig: k.sessionConfig,
					expiresAfterSeconds: k.expiresAfterSeconds
				});
				return {
					token: I.token,
					url: I.url,
					expiresAt: I.expiresAt
				}
			}
		}),
		_ = k => {
			var A;
			return new sk(k, {
				provider: `${r}.interactions`,
				baseURL: o,
				headers: i,
				generateId: (A = e.generateId) != null ? A : ze,
				fetch: e.fetch
			})
		},
		w = function(k) {
			if (new.target) throw new Error("The Google Generative AI model function cannot be called with the new keyword.");
			return s(k)
		};
	return w.specificationVersion = "v4", w.languageModel = s, w.chat = s, w.generativeAI = s, w.embedding = l, w.embeddingModel = l, w.textEmbedding = l, w.textEmbeddingModel = l, w.image = d, w.imageModel = d, w.video = p, w.videoModel = p, w.experimental_realtime = g, w.files = c, w.speech = h, w.speechModel = h, w.interactions = _, w.tools = dw, w
}
ld();
async function gk(e) {
	var o, r;
	if (!((o = e.apiKey) != null && o.trim())) throw new Error("An API key is required.");
	const t = [];
	let n;
	do {
		const i = new URLSearchParams({
			key: e.apiKey.trim(),
			pageSize: "1000"
		});
		n && i.set("pageToken", n);
		const s = await bn(`${Ct(e.baseUrl)}/models?${i}`, {
			signal: e.signal
		});
		for (const l of s.models ?? []) {
			if (!((r = l.name) != null && r.trim()) || !(l.supportedGenerationMethods ?? []).includes("generateContent")) continue;
			const d = l.name.replace(/^models\//, "");
			t.push({
				id: d,
				name: l.displayName || d,
				providerId: "gemini",
				description: l.description,
				contextWindow: l.inputTokenLimit,
				maxOutputTokens: l.outputTokenLimit,
				capabilities: {
					tools: "unknown",
					vision: "unknown",
					multipleImages: "unknown",
					reasoning: typeof l.thinking == "boolean" ? l.thinking : "unknown"
				},
				metadata: {
					supportedGenerationMethods: l.supportedGenerationMethods
				}
			})
		}
		n = s.nextPageToken
	} while (n);
	return jn(t)
}

function yk(e) {
	return ld({
		apiKey: e.apiKey,
		baseURL: e.baseUrl
	})(e.modelId)
}
const vk = {
	definition: xt.gemini,
	listModels: gk,
	createModel: yk
};
async function bk(e) {
	const t = await bn(`${Ct(e.baseUrl)}/api/tags`, {
			signal: e.signal
		}),
		n = Ct(e.baseUrl),
		o = await Promise.all((t.models ?? []).map(async r => {
			var l, d, c, p, m;
			const i = r.model || r.name;
			if (!(i != null && i.trim())) return null;
			const s = await wk(n, i.trim(), e.signal);
			return {
				id: i.trim(),
				name: r.name || i.trim(),
				providerId: "ollama",
				description: [(l = r.details) == null ? void 0 : l.parameter_size, (d = r.details) == null ? void 0 : d.quantization_level].filter(Boolean).join(" · "),
				contextWindow: kk(s == null ? void 0 : s.model_info),
				capabilities: {
					tools: s ? !!((c = s.capabilities) != null && c.includes("tools")) : "unknown",
					vision: s ? !!((p = s.capabilities) != null && p.includes("vision")) : "unknown",
					multipleImages: "unknown",
					reasoning: s ? !!((m = s.capabilities) != null && m.includes("thinking")) : "unknown"
				},
				metadata: {
					size: r.size,
					modifiedAt: r.modified_at,
					digest: r.digest,
					...r.details
				}
			}
		}));
	return jn(o.filter(r => r !== null))
}
async function wk(e, t, n) {
	try {
		return await bn(`${e}/api/show`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				model: t
			}),
			signal: n
		})
	} catch {
		return null
	}
}

function kk(e) {
	if (!e) return;
	const t = Object.entries(e).filter(([n, o]) => n.endsWith(".context_length") && typeof o == "number").map(([, n]) => n);
	return t.length ? Math.max(...t) : void 0
}

function xk(e) {
	return Mc({
		providerId: "ollama",
		modelId: e.modelId,
		baseUrl: `${Ct(e.baseUrl)}/v1`
	})
}
const Ik = {
	definition: xt.ollama,
	listModels: bk,
	createModel: xk
};
var ei = u({
		error: u({
			message: a(),
			type: a().nullish(),
			param: nt().nullish(),
			code: le([a(), y()]).nullish()
		})
	}),
	pt = Bt({
		errorSchema: ei,
		errorToMessage: e => e.error.message
	});

function ud(e) {
	const t = e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat"),
		n = e.startsWith("gpt-4") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-nano") && !e.startsWith("gpt-5-chat") && !e.startsWith("gpt-5.4-nano") || e.startsWith("o3") || e.startsWith("o4-mini"),
		o = e.startsWith("o1") || e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat"),
		r = e.startsWith("gpt-5.1") || e.startsWith("gpt-5.2") || e.startsWith("gpt-5.3") || e.startsWith("gpt-5.4") || e.startsWith("gpt-5.5") || e.startsWith("gpt-5.6");
	return {
		supportsFlexProcessing: t,
		supportsPriorityProcessing: n,
		isReasoningModel: o,
		systemMessageMode: o ? "developer" : "system",
		supportsNonReasoningParameters: r
	}
}
async function ti({
	stream: e,
	getError: t,
	isOutputChunk: n,
	url: o,
	requestBodyValues: r,
	responseHeaders: i
}) {
	const [s, l] = e.tee(), d = s.getReader();
	try {
		for (;;) {
			const c = await d.read();
			if (c.done) return l;
			const p = c.value;
			if (!p.success) return l;
			const m = t(p.value);
			if (m != null) throw l.cancel().catch(() => {}), Tk({
				frame: m,
				url: o,
				requestBodyValues: r,
				responseHeaders: i
			});
			if (n(p.value)) return l
		}
	} finally {
		d.cancel().catch(() => {}), d.releaseLock()
	}
}

function Tk({
	frame: e,
	url: t,
	requestBodyValues: n,
	responseHeaders: o
}) {
	var r;
	const i = Sk(e);
	return new He({
		message: (r = i == null ? void 0 : i.message) != null ? r : "OpenAI stream failed before any output was generated",
		url: t,
		requestBodyValues: n,
		statusCode: i == null ? 500 : Ck(i),
		responseHeaders: o,
		responseBody: JSON.stringify(e),
		data: e
	})
}

function Sk(e) {
	var t;
	const n = In(e);
	if (n == null) return;
	if (n.type === "response.failed") {
		const r = In(n.response),
			i = In(r == null ? void 0 : r.error);
		return typeof(i == null ? void 0 : i.message) == "string" ? {
			message: i.message,
			code: ls(i.code),
			type: "response.failed",
			frame: e
		} : void 0
	}
	const o = (t = In(n.error)) != null ? t : n;
	return typeof o.message == "string" && (In(n.error) != null || typeof o.type == "string" || "code" in o || "param" in o) ? {
		message: o.message,
		code: ls(o.code),
		type: typeof o.type == "string" ? o.type : void 0,
		frame: e
	} : void 0
}

function Ck(e) {
	if (typeof e.code == "number" && us(e.code)) return e.code;
	if (typeof e.code == "string" && /^\d{3}$/.test(e.code)) {
		const n = Number(e.code);
		if (us(n)) return n
	}
	const t = [e.code, e.type].filter(n => typeof n == "string" || typeof n == "number").join(" ").toLowerCase();
	return ["insufficient_quota", "rate_limit"].some(n => t.includes(n)) ? 429 : t.includes("authentication") ? 401 : t.includes("permission") ? 403 : t.includes("not_found") ? 404 : ["invalid", "bad_request", "context_length"].some(n => t.includes(n)) ? 400 : t.includes("overload") ? 503 : t.includes("timeout") ? 504 : 500
}

function In(e) {
	return typeof e == "object" && e != null ? e : void 0
}

function ls(e) {
	return typeof e == "string" || typeof e == "number" ? e : void 0
}

function us(e) {
	return Number.isInteger(e) && e >= 400 && e <= 599
}

function cs(e) {
	var t, n, o, r, i, s, l, d;
	if (e == null) return {
		inputTokens: {
			total: void 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: void 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	};
	const c = (t = e.prompt_tokens) != null ? t : 0,
		p = (n = e.completion_tokens) != null ? n : 0,
		m = (r = (o = e.prompt_tokens_details) == null ? void 0 : o.cached_tokens) != null ? r : 0,
		h = (s = (i = e.prompt_tokens_details) == null ? void 0 : i.cache_write_tokens) != null ? s : void 0,
		g = (d = (l = e.completion_tokens_details) == null ? void 0 : l.reasoning_tokens) != null ? d : 0;
	return {
		inputTokens: {
			total: c,
			noCache: c - m - (h ?? 0),
			cacheRead: m,
			cacheWrite: h
		},
		outputTokens: {
			total: p,
			text: p - g,
			reasoning: g
		},
		raw: e
	}
}

function Ok(e) {
	return JSON.stringify(e === void 0 ? {} : e)
}

function $t(e) {
	var t;
	return (t = e == null ? void 0 : e.openai) == null ? void 0 : t.promptCacheBreakpoint
}

function Ak({
	prompt: e,
	systemMessageMode: t = "system"
}) {
	var n, o;
	const r = [],
		i = [];
	for (const {
			role: s,
			content: l,
			providerOptions: d
		}
		of e) switch (s) {
		case "system": {
			switch (t) {
				case "system": {
					const c = $t(d);
					r.push({
						role: "system",
						content: c == null ? l : [{
							type: "text",
							text: l,
							prompt_cache_breakpoint: c
						}]
					});
					break
				}
				case "developer": {
					const c = $t(d);
					r.push({
						role: "developer",
						content: c == null ? l : [{
							type: "text",
							text: l,
							prompt_cache_breakpoint: c
						}]
					});
					break
				}
				case "remove": {
					i.push({
						type: "other",
						message: "system messages are removed for this model"
					});
					break
				}
				default: {
					const c = t;
					throw new Error(`Unsupported system message mode: ${c}`)
				}
			}
			break
		}
		case "user": {
			if (l.length === 1 && l[0].type === "text" && $t(l[0].providerOptions) == null) {
				r.push({
					role: "user",
					content: l[0].text
				});
				break
			}
			r.push({
				role: "user",
				content: l.map((c, p) => {
					var m, h, g;
					switch (c.type) {
						case "text": {
							const _ = $t(c.providerOptions);
							return {
								type: "text",
								text: c.text,
								..._ != null && {
									prompt_cache_breakpoint: _
								}
							}
						}
						case "file": {
							const _ = $t(c.providerOptions);
							switch (c.data.type) {
								case "reference":
									return {
										type: "file", file: {
											file_id: zt({
												reference: c.data.reference,
												provider: "openai"
											})
										}, ..._ != null && {
											prompt_cache_breakpoint: _
										}
									};
								case "text":
									throw new Oe({
										functionality: "text file parts"
									});
								case "url":
								case "data": {
									const w = ut(c.mediaType);
									if (w === "image") return {
										type: "image_url",
										image_url: {
											url: c.data.type === "url" ? c.data.url.toString() : `data:${Ge({ part: c })};base64,${De(c.data.data)}`,
											detail: (h = (m = c.providerOptions) == null ? void 0 : m.openai) == null ? void 0 : h.imageDetail
										},
										..._ != null && {
											prompt_cache_breakpoint: _
										}
									};
									if (w === "audio") {
										if (c.data.type === "url") throw new Oe({
											functionality: "audio file parts with URLs"
										});
										const k = Ge({
											part: c
										});
										switch (k) {
											case "audio/wav":
												return {
													type: "input_audio", input_audio: {
														data: De(c.data.data),
														format: "wav"
													}, ..._ != null && {
														prompt_cache_breakpoint: _
													}
												};
											case "audio/mp3":
											case "audio/mpeg":
												return {
													type: "input_audio", input_audio: {
														data: De(c.data.data),
														format: "mp3"
													}, ..._ != null && {
														prompt_cache_breakpoint: _
													}
												};
											default:
												throw new Oe({
													functionality: `audio content parts with media type ${k}`
												})
										}
									} {
										const k = Ge({
											part: c
										});
										if (k !== "application/pdf") throw new Oe({
											functionality: `file part media type ${k}`
										});
										if (c.data.type === "url") throw new Oe({
											functionality: "PDF file parts with URLs"
										});
										return {
											type: "file",
											file: {
												filename: (g = c.filename) != null ? g : `part-${p}.pdf`,
												file_data: `data:application/pdf;base64,${De(c.data.data)}`
											},
											..._ != null && {
												prompt_cache_breakpoint: _
											}
										}
									}
								}
							}
						}
					}
				})
			});
			break
		}
		case "assistant": {
			let c = "";
			const p = [];
			let m = !1;
			const h = [];
			for (const g of l) switch (g.type) {
				case "text": {
					const _ = $t(g.providerOptions);
					c += g.text, p.push({
						type: "text",
						text: g.text,
						..._ != null && {
							prompt_cache_breakpoint: _
						}
					}), m || (m = _ != null);
					break
				}
				case "tool-call": {
					h.push({
						id: g.toolCallId,
						type: "function",
						function: {
							name: g.toolName,
							arguments: Ok(g.input)
						}
					});
					break
				}
			}
			r.push({
				role: "assistant",
				content: m ? p : h.length > 0 ? c || null : c,
				tool_calls: h.length > 0 ? h : void 0
			});
			break
		}
		case "tool": {
			for (const c of l) {
				if (c.type === "tool-approval-response") continue;
				const p = c.output,
					m = (n = p.type === "content" ? p.value.map(g => $t(g.providerOptions)).find(g => g != null) : $t(p.providerOptions)) != null ? n : $t(c.providerOptions);
				let h;
				switch (p.type) {
					case "text":
					case "error-text":
						h = p.value;
						break;
					case "execution-denied":
						h = (o = p.reason) != null ? o : "Tool call execution denied.";
						break;
					case "content":
					case "json":
					case "error-json":
						h = JSON.stringify(p.value);
						break
				}
				r.push({
					role: "tool",
					tool_call_id: c.toolCallId,
					content: m == null ? h : [{
						type: "text",
						text: h,
						prompt_cache_breakpoint: m
					}]
				})
			}
			break
		}
		default: {
			const c = s;
			throw new Error(`Unsupported role: ${c}`)
		}
	}
	return {
		messages: r,
		warnings: i
	}
}

function Yo({
	id: e,
	model: t,
	created: n
}) {
	return {
		id: e ?? void 0,
		modelId: t ?? void 0,
		timestamp: n ? new Date(n * 1e3) : void 0
	}
}

function ds(e) {
	switch (e) {
		case "stop":
			return "stop";
		case "length":
			return "length";
		case "content_filter":
			return "content-filter";
		case "function_call":
		case "tool_calls":
			return "tool-calls";
		default:
			return "other"
	}
}
var $k = ee(() => Q(u({
		id: a().nullish(),
		created: y().nullish(),
		model: a().nullish(),
		choices: R(u({
			message: u({
				role: f("assistant").nullish(),
				content: a().nullish(),
				tool_calls: R(u({
					id: a().nullish(),
					type: f("function"),
					function: u({
						name: a(),
						arguments: a()
					})
				})).nullish(),
				annotations: R(u({
					type: f("url_citation"),
					url_citation: u({
						start_index: y(),
						end_index: y(),
						url: a(),
						title: a()
					})
				})).nullish()
			}),
			index: y(),
			logprobs: u({
				content: R(u({
					token: a(),
					logprob: y(),
					top_logprobs: R(u({
						token: a(),
						logprob: y()
					}))
				})).nullish()
			}).nullish(),
			finish_reason: a().nullish()
		})),
		usage: u({
			prompt_tokens: y().nullish(),
			completion_tokens: y().nullish(),
			total_tokens: y().nullish(),
			prompt_tokens_details: u({
				cached_tokens: y().nullish(),
				cache_write_tokens: y().nullish()
			}).nullish(),
			completion_tokens_details: u({
				reasoning_tokens: y().nullish(),
				accepted_prediction_tokens: y().nullish(),
				rejected_prediction_tokens: y().nullish()
			}).nullish()
		}).nullish()
	}))),
	Ek = ee(() => Q(le([u({
		id: a().nullish(),
		created: y().nullish(),
		model: a().nullish(),
		choices: R(u({
			delta: u({
				role: Y(["assistant"]).nullish(),
				content: a().nullish(),
				tool_calls: R(u({
					index: y(),
					id: a().nullish(),
					type: f("function").nullish(),
					function: u({
						name: a().nullish(),
						arguments: a().nullish()
					})
				})).nullish(),
				annotations: R(u({
					type: f("url_citation"),
					url_citation: u({
						start_index: y(),
						end_index: y(),
						url: a(),
						title: a()
					})
				})).nullish()
			}).nullish(),
			logprobs: u({
				content: R(u({
					token: a(),
					logprob: y(),
					top_logprobs: R(u({
						token: a(),
						logprob: y()
					}))
				})).nullish()
			}).nullish(),
			finish_reason: a().nullish(),
			index: y()
		})),
		usage: u({
			prompt_tokens: y().nullish(),
			completion_tokens: y().nullish(),
			total_tokens: y().nullish(),
			prompt_tokens_details: u({
				cached_tokens: y().nullish(),
				cache_write_tokens: y().nullish()
			}).nullish(),
			completion_tokens_details: u({
				reasoning_tokens: y().nullish(),
				accepted_prediction_tokens: y().nullish(),
				rejected_prediction_tokens: y().nullish()
			}).nullish()
		}).nullish()
	}), ei]))),
	Rk = ee(() => Q(u({
		logitBias: ke(Mg(), y()).optional(),
		logprobs: le([_e(), y()]).optional(),
		parallelToolCalls: _e().optional(),
		user: a().optional(),
		reasoningEffort: Y(["none", "minimal", "low", "medium", "high", "xhigh", "max"]).optional(),
		maxCompletionTokens: y().optional(),
		store: _e().optional(),
		metadata: ke(a().max(64), a().max(512)).optional(),
		prediction: ke(a(), nt()).optional(),
		serviceTier: Y(["auto", "flex", "priority", "default"]).optional(),
		strictJsonSchema: _e().optional(),
		textVerbosity: Y(["low", "medium", "high"]).optional(),
		promptCacheKey: a().optional(),
		promptCacheOptions: u({
			mode: Y(["implicit", "explicit"]).optional(),
			ttl: f("30m").optional()
		}).optional(),
		promptCacheRetention: Y(["in_memory", "24h"]).optional(),
		safetyIdentifier: a().optional(),
		systemMessageMode: Y(["system", "developer", "remove"]).optional(),
		forceReasoning: _e().optional()
	})));

function Nk({
	tools: e,
	toolChoice: t
}) {
	e = e != null && e.length ? e : void 0;
	const n = [];
	if (e == null) return {
		tools: void 0,
		toolChoice: void 0,
		toolWarnings: n
	};
	const o = [];
	for (const i of e) switch (i.type) {
		case "function":
			o.push({
				type: "function",
				function: {
					name: i.name,
					description: i.description,
					parameters: i.inputSchema,
					...i.strict != null ? {
						strict: i.strict
					} : {}
				}
			});
			break;
		default:
			n.push({
				type: "unsupported",
				feature: `tool type: ${i.type}`
			});
			break
	}
	if (t == null) return {
		tools: o,
		toolChoice: void 0,
		toolWarnings: n
	};
	const r = t.type;
	switch (r) {
		case "auto":
		case "none":
		case "required":
			return {
				tools: o, toolChoice: r, toolWarnings: n
			};
		case "tool":
			return {
				tools: o, toolChoice: {
					type: "function",
					function: {
						name: t.toolName
					}
				}, toolWarnings: n
			};
		default: {
			const i = r;
			throw new Oe({
				functionality: `tool choice type: ${i}`
			})
		}
	}
}
var Pk = class cd {
	constructor(t, n) {
		this.specificationVersion = "v4", this.supportedUrls = {
			"image/*": [/^https?:\/\/.*$/]
		}, this.modelId = t, this.config = n
	}
	static[Qe](t) {
		return tt({
			modelId: t.modelId,
			config: t.config
		})
	}
	static[et](t) {
		return new cd(t.modelId, t.config)
	}
	get provider() {
		return this.config.provider
	}
	async getArgs({
		prompt: t,
		maxOutputTokens: n,
		temperature: o,
		topP: r,
		topK: i,
		frequencyPenalty: s,
		presencePenalty: l,
		stopSequences: d,
		responseFormat: c,
		seed: p,
		tools: m,
		toolChoice: h,
		reasoning: g,
		providerOptions: _
	}) {
		var w, k, A, I, E, S;
		const v = [],
			b = (w = await xe({
				provider: "openai",
				providerOptions: _,
				schema: Rk
			})) != null ? w : {},
			T = ud(this.modelId),
			q = (k = b.reasoningEffort) != null ? k : vn(g) ? g : void 0,
			L = (A = b.forceReasoning) != null ? A : T.isReasoningModel;
		i != null && v.push({
			type: "unsupported",
			feature: "topK"
		});
		const {
			messages: O,
			warnings: B
		} = Ak({
			prompt: t,
			systemMessageMode: (I = b.systemMessageMode) != null ? I : L ? "developer" : T.systemMessageMode
		});
		v.push(...B);
		const F = (E = b.strictJsonSchema) != null ? E : !0,
			z = {
				model: this.modelId,
				logit_bias: b.logitBias,
				logprobs: b.logprobs === !0 || typeof b.logprobs == "number" ? !0 : void 0,
				top_logprobs: typeof b.logprobs == "number" ? b.logprobs : typeof b.logprobs == "boolean" && b.logprobs ? 0 : void 0,
				user: b.user,
				parallel_tool_calls: b.parallelToolCalls,
				max_tokens: n,
				temperature: o,
				top_p: r,
				frequency_penalty: s,
				presence_penalty: l,
				response_format: (c == null ? void 0 : c.type) === "json" ? c.schema != null ? {
					type: "json_schema",
					json_schema: {
						schema: c.schema,
						strict: F,
						name: (S = c.name) != null ? S : "response",
						description: c.description
					}
				} : {
					type: "json_object"
				} : void 0,
				stop: d,
				seed: p,
				verbosity: b.textVerbosity,
				max_completion_tokens: b.maxCompletionTokens,
				store: b.store,
				metadata: b.metadata,
				prediction: b.prediction,
				reasoning_effort: q,
				service_tier: b.serviceTier,
				prompt_cache_key: b.promptCacheKey,
				prompt_cache_options: b.promptCacheOptions,
				prompt_cache_retention: b.promptCacheRetention,
				safety_identifier: b.safetyIdentifier,
				messages: O
			};
		L ? ((q !== "none" || !T.supportsNonReasoningParameters) && (z.temperature != null && (z.temperature = void 0, v.push({
			type: "unsupported",
			feature: "temperature",
			details: "temperature is not supported for reasoning models"
		})), z.top_p != null && (z.top_p = void 0, v.push({
			type: "unsupported",
			feature: "topP",
			details: "topP is not supported for reasoning models"
		})), z.logprobs != null && (z.logprobs = void 0, v.push({
			type: "other",
			message: "logprobs is not supported for reasoning models"
		}))), z.frequency_penalty != null && (z.frequency_penalty = void 0, v.push({
			type: "unsupported",
			feature: "frequencyPenalty",
			details: "frequencyPenalty is not supported for reasoning models"
		})), z.presence_penalty != null && (z.presence_penalty = void 0, v.push({
			type: "unsupported",
			feature: "presencePenalty",
			details: "presencePenalty is not supported for reasoning models"
		})), z.logit_bias != null && (z.logit_bias = void 0, v.push({
			type: "other",
			message: "logitBias is not supported for reasoning models"
		})), z.top_logprobs != null && (z.top_logprobs = void 0, v.push({
			type: "other",
			message: "topLogprobs is not supported for reasoning models"
		})), z.max_tokens != null && (z.max_completion_tokens == null && (z.max_completion_tokens = z.max_tokens), z.max_tokens = void 0)) : (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) && z.temperature != null && (z.temperature = void 0, v.push({
			type: "unsupported",
			feature: "temperature",
			details: "temperature is not supported for the search preview models and has been removed."
		})), b.serviceTier === "flex" && !T.supportsFlexProcessing && (v.push({
			type: "unsupported",
			feature: "serviceTier",
			details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
		}), z.service_tier = void 0), b.serviceTier === "priority" && !T.supportsPriorityProcessing && (v.push({
			type: "unsupported",
			feature: "serviceTier",
			details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
		}), z.service_tier = void 0);
		const {
			tools: N,
			toolChoice: oe,
			toolWarnings: te
		} = Nk({
			tools: m,
			toolChoice: h
		});
		return {
			args: {
				...z,
				tools: N,
				tool_choice: oe
			},
			warnings: [...v, ...te]
		}
	}
	async doGenerate(t) {
		var n, o, r, i, s, l, d, c;
		const {
			args: p,
			warnings: m
		} = await this.getArgs(t), {
			responseHeaders: h,
			value: g,
			rawValue: _
		} = await Ue({
			url: this.config.url({
				path: "/chat/completions",
				modelId: this.modelId
			}),
			headers: Ce((o = (n = this.config).headers) == null ? void 0 : o.call(n), t.headers),
			body: p,
			failedResponseHandler: pt,
			successfulResponseHandler: Me($k),
			abortSignal: t.abortSignal,
			fetch: this.config.fetch
		}), w = g.choices[0], k = [], A = w.message.content;
		A != null && A.length > 0 && k.push({
			type: "text",
			text: A
		});
		for (const S of (r = w.message.tool_calls) != null ? r : []) k.push({
			type: "tool-call",
			toolCallId: (i = S.id) != null ? i : ze(),
			toolName: S.function.name,
			input: S.function.arguments
		});
		for (const S of (s = w.message.annotations) != null ? s : []) k.push({
			type: "source",
			sourceType: "url",
			id: ze(),
			url: S.url_citation.url,
			title: S.url_citation.title
		});
		const I = (l = g.usage) == null ? void 0 : l.completion_tokens_details,
			E = {
				openai: {}
			};
		return (I == null ? void 0 : I.accepted_prediction_tokens) != null && (E.openai.acceptedPredictionTokens = I == null ? void 0 : I.accepted_prediction_tokens), (I == null ? void 0 : I.rejected_prediction_tokens) != null && (E.openai.rejectedPredictionTokens = I == null ? void 0 : I.rejected_prediction_tokens), ((d = w.logprobs) == null ? void 0 : d.content) != null && (E.openai.logprobs = w.logprobs.content), {
			content: k,
			finishReason: {
				unified: ds(w.finish_reason),
				raw: (c = w.finish_reason) != null ? c : void 0
			},
			usage: cs(g.usage),
			request: {
				body: p
			},
			response: {
				...Yo(g),
				headers: h,
				body: _
			},
			warnings: m,
			providerMetadata: E
		}
	}
	async doStream(t) {
		var n, o;
		const {
			args: r,
			warnings: i
		} = await this.getArgs(t), s = {
			...r,
			stream: !0,
			stream_options: {
				include_usage: !0
			}
		}, l = this.config.url({
			path: "/chat/completions",
			modelId: this.modelId
		}), {
			responseHeaders: d,
			value: c
		} = await Ue({
			url: l,
			headers: Ce((o = (n = this.config).headers) == null ? void 0 : o.call(n), t.headers),
			body: s,
			failedResponseHandler: pt,
			successfulResponseHandler: Dt(Ek),
			abortSignal: t.abortSignal,
			fetch: this.config.fetch
		}), p = await ti({
			stream: c,
			getError: I => "error" in I ? I.error : void 0,
			isOutputChunk: Mk,
			url: l,
			requestBodyValues: s,
			responseHeaders: d
		});
		let m, h = {
				unified: "other",
				raw: void 0
			},
			g, _ = !1,
			w = !1;
		const k = {
			openai: {}
		};
		return {
			stream: p.pipeThrough(new TransformStream({
				start(I) {
					m = new pc(I, {
						generateId: ze,
						typeValidation: "if-present"
					}), I.enqueue({
						type: "stream-start",
						warnings: i
					})
				},
				transform(I, E) {
					var S, v, b, T, q;
					if (t.includeRawChunks && E.enqueue({
							type: "raw",
							rawValue: I.rawValue
						}), !I.success) {
						h = {
							unified: "error",
							raw: void 0
						}, E.enqueue({
							type: "error",
							error: I.error
						});
						return
					}
					const L = I.value;
					if ("error" in L) {
						h = {
							unified: "error",
							raw: void 0
						}, E.enqueue({
							type: "error",
							error: L.error
						});
						return
					}
					if (!_) {
						const F = Yo(L);
						Object.values(F).some(Boolean) && (_ = !0, E.enqueue({
							type: "response-metadata",
							...Yo(L)
						}))
					}
					L.usage != null && (g = L.usage, ((S = L.usage.completion_tokens_details) == null ? void 0 : S.accepted_prediction_tokens) != null && (k.openai.acceptedPredictionTokens = (v = L.usage.completion_tokens_details) == null ? void 0 : v.accepted_prediction_tokens), ((b = L.usage.completion_tokens_details) == null ? void 0 : b.rejected_prediction_tokens) != null && (k.openai.rejectedPredictionTokens = (T = L.usage.completion_tokens_details) == null ? void 0 : T.rejected_prediction_tokens));
					const O = L.choices[0];
					if ((O == null ? void 0 : O.finish_reason) != null && (h = {
							unified: ds(O.finish_reason),
							raw: O.finish_reason
						}), ((q = O == null ? void 0 : O.logprobs) == null ? void 0 : q.content) != null && (k.openai.logprobs = O.logprobs.content), (O == null ? void 0 : O.delta) == null) return;
					const B = O.delta;
					if (B.content != null && (w || (E.enqueue({
							type: "text-start",
							id: "0"
						}), w = !0), E.enqueue({
							type: "text-delta",
							id: "0",
							delta: B.content
						})), B.tool_calls != null)
						for (const F of B.tool_calls) m.processDelta(F);
					if (B.annotations != null)
						for (const F of B.annotations) E.enqueue({
							type: "source",
							sourceType: "url",
							id: ze(),
							url: F.url_citation.url,
							title: F.url_citation.title
						})
				},
				flush(I) {
					w && I.enqueue({
						type: "text-end",
						id: "0"
					}), m.flush(), I.enqueue({
						type: "finish",
						finishReason: h,
						usage: cs(g),
						...k != null ? {
							providerMetadata: k
						} : {}
					})
				}
			})),
			request: {
				body: s
			},
			response: {
				headers: d
			}
		}
	}
};

function Mk(e) {
	return "error" in e ? !1 : e.choices.some(t => {
		const n = t.delta;
		return (n == null ? void 0 : n.content) != null && n.content.length > 0 || (n == null ? void 0 : n.tool_calls) != null && n.tool_calls.length > 0 || (n == null ? void 0 : n.annotations) != null && n.annotations.length > 0
	})
}

function ps(e) {
	var t, n, o, r;
	if (e == null) return {
		inputTokens: {
			total: void 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: void 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	};
	const i = (t = e.prompt_tokens) != null ? t : 0,
		s = (n = e.completion_tokens) != null ? n : 0;
	return {
		inputTokens: {
			total: (o = e.prompt_tokens) != null ? o : void 0,
			noCache: i,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: (r = e.completion_tokens) != null ? r : void 0,
			text: s,
			reasoning: void 0
		},
		raw: e
	}
}

function zk({
	prompt: e,
	user: t = "user",
	assistant: n = "assistant"
}) {
	let o = "";
	e[0].role === "system" && (o += `${e[0].content}

`, e = e.slice(1));
	for (const {
			role: r,
			content: i
		}
		of e) switch (r) {
		case "system":
			throw new wl({
				message: "Unexpected system message in prompt: ${content}",
				prompt: e
			});
		case "user": {
			const s = i.map(l => {
				switch (l.type) {
					case "text":
						return l.text
				}
			}).filter(Boolean).join("");
			o += `${t}:
${s}

`;
			break
		}
		case "assistant": {
			const s = i.map(l => {
				switch (l.type) {
					case "text":
						return l.text;
					case "tool-call":
						throw new Oe({
							functionality: "tool-call messages"
						})
				}
			}).join("");
			o += `${n}:
${s}

`;
			break
		}
		case "tool":
			throw new Oe({
				functionality: "tool messages"
			});
		default: {
			const s = r;
			throw new Error(`Unsupported role: ${s}`)
		}
	}
	return o += `${n}:
`, {
		prompt: o,
		stopSequences: [`
${t}:`]
	}
}

function ms({
	id: e,
	model: t,
	created: n
}) {
	return {
		id: e ?? void 0,
		modelId: t ?? void 0,
		timestamp: n != null ? new Date(n * 1e3) : void 0
	}
}

function hs(e) {
	switch (e) {
		case "stop":
			return "stop";
		case "length":
			return "length";
		case "content_filter":
			return "content-filter";
		case "function_call":
		case "tool_calls":
			return "tool-calls";
		default:
			return "other"
	}
}
var Dk = ee(() => Q(u({
		id: a().nullish(),
		created: y().nullish(),
		model: a().nullish(),
		choices: R(u({
			text: a(),
			finish_reason: a(),
			logprobs: u({
				tokens: R(a()),
				token_logprobs: R(y()),
				top_logprobs: R(ke(a(), y())).nullish()
			}).nullish()
		})),
		usage: u({
			prompt_tokens: y(),
			completion_tokens: y(),
			total_tokens: y()
		}).nullish()
	}))),
	qk = ee(() => Q(le([u({
		id: a().nullish(),
		created: y().nullish(),
		model: a().nullish(),
		choices: R(u({
			text: a(),
			finish_reason: a().nullish(),
			index: y(),
			logprobs: u({
				tokens: R(a()),
				token_logprobs: R(y()),
				top_logprobs: R(ke(a(), y())).nullish()
			}).nullish()
		})),
		usage: u({
			prompt_tokens: y(),
			completion_tokens: y(),
			total_tokens: y()
		}).nullish()
	}), ei]))),
	fs = ee(() => Q(u({
		echo: _e().optional(),
		logitBias: ke(a(), y()).optional(),
		suffix: a().optional(),
		user: a().optional(),
		logprobs: le([_e(), y()]).optional()
	}))),
	Uk = class dd {
		constructor(t, n) {
			this.specificationVersion = "v4", this.supportedUrls = {}, this.modelId = t, this.config = n
		}
		get providerOptionsName() {
			return this.config.provider.split(".")[0].trim()
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new dd(t.modelId, t.config)
		}
		get provider() {
			return this.config.provider
		}
		async getArgs({
			prompt: t,
			maxOutputTokens: n,
			temperature: o,
			topP: r,
			topK: i,
			frequencyPenalty: s,
			presencePenalty: l,
			stopSequences: d,
			responseFormat: c,
			tools: p,
			toolChoice: m,
			seed: h,
			providerOptions: g
		}) {
			const _ = [],
				w = {
					...await xe({
						provider: "openai",
						providerOptions: g,
						schema: fs
					}),
					...await xe({
						provider: this.providerOptionsName,
						providerOptions: g,
						schema: fs
					})
				};
			i != null && _.push({
				type: "unsupported",
				feature: "topK"
			}), p != null && p.length && _.push({
				type: "unsupported",
				feature: "tools"
			}), m != null && _.push({
				type: "unsupported",
				feature: "toolChoice"
			}), c != null && c.type !== "text" && _.push({
				type: "unsupported",
				feature: "responseFormat",
				details: "JSON response format is not supported."
			});
			const {
				prompt: k,
				stopSequences: A
			} = zk({
				prompt: t
			}), I = [...A ?? [], ...d ?? []];
			return {
				args: {
					model: this.modelId,
					echo: w.echo,
					logit_bias: w.logitBias,
					logprobs: (w == null ? void 0 : w.logprobs) === !0 ? 0 : (w == null ? void 0 : w.logprobs) === !1 || w == null ? void 0 : w.logprobs,
					suffix: w.suffix,
					user: w.user,
					max_tokens: n,
					temperature: o,
					top_p: r,
					frequency_penalty: s,
					presence_penalty: l,
					seed: h,
					prompt: k,
					stop: I.length > 0 ? I : void 0
				},
				warnings: _
			}
		}
		async doGenerate(t) {
			var n, o, r;
			const {
				args: i,
				warnings: s
			} = await this.getArgs(t), {
				responseHeaders: l,
				value: d,
				rawValue: c
			} = await Ue({
				url: this.config.url({
					path: "/completions",
					modelId: this.modelId
				}),
				headers: Ce((o = (n = this.config).headers) == null ? void 0 : o.call(n), t.headers),
				body: i,
				failedResponseHandler: pt,
				successfulResponseHandler: Me(Dk),
				abortSignal: t.abortSignal,
				fetch: this.config.fetch
			}), p = d.choices[0], m = {
				openai: {}
			};
			return p.logprobs != null && (m.openai.logprobs = p.logprobs), {
				content: [{
					type: "text",
					text: p.text
				}],
				usage: ps(d.usage),
				finishReason: {
					unified: hs(p.finish_reason),
					raw: (r = p.finish_reason) != null ? r : void 0
				},
				request: {
					body: i
				},
				response: {
					...ms(d),
					headers: l,
					body: c
				},
				providerMetadata: m,
				warnings: s
			}
		}
		async doStream(t) {
			var n, o;
			const {
				args: r,
				warnings: i
			} = await this.getArgs(t), s = {
				...r,
				stream: !0,
				stream_options: {
					include_usage: !0
				}
			}, l = this.config.url({
				path: "/completions",
				modelId: this.modelId
			}), {
				responseHeaders: d,
				value: c
			} = await Ue({
				url: l,
				headers: Ce((o = (n = this.config).headers) == null ? void 0 : o.call(n), t.headers),
				body: s,
				failedResponseHandler: pt,
				successfulResponseHandler: Dt(qk),
				abortSignal: t.abortSignal,
				fetch: this.config.fetch
			}), p = await ti({
				stream: c,
				getError: k => "error" in k ? k.error : void 0,
				isOutputChunk: jk,
				url: l,
				requestBodyValues: s,
				responseHeaders: d
			});
			let m = {
				unified: "other",
				raw: void 0
			};
			const h = {
				openai: {}
			};
			let g, _ = !0;
			return {
				stream: p.pipeThrough(new TransformStream({
					start(k) {
						k.enqueue({
							type: "stream-start",
							warnings: i
						})
					},
					transform(k, A) {
						if (t.includeRawChunks && A.enqueue({
								type: "raw",
								rawValue: k.rawValue
							}), !k.success) {
							m = {
								unified: "error",
								raw: void 0
							}, A.enqueue({
								type: "error",
								error: k.error
							});
							return
						}
						const I = k.value;
						if ("error" in I) {
							m = {
								unified: "error",
								raw: void 0
							}, A.enqueue({
								type: "error",
								error: I.error
							});
							return
						}
						_ && (_ = !1, A.enqueue({
							type: "response-metadata",
							...ms(I)
						}), A.enqueue({
							type: "text-start",
							id: "0"
						})), I.usage != null && (g = I.usage);
						const E = I.choices[0];
						(E == null ? void 0 : E.finish_reason) != null && (m = {
							unified: hs(E.finish_reason),
							raw: E.finish_reason
						}), (E == null ? void 0 : E.logprobs) != null && (h.openai.logprobs = E.logprobs), (E == null ? void 0 : E.text) != null && E.text.length > 0 && A.enqueue({
							type: "text-delta",
							id: "0",
							delta: E.text
						})
					},
					flush(k) {
						_ || k.enqueue({
							type: "text-end",
							id: "0"
						}), k.enqueue({
							type: "finish",
							finishReason: m,
							providerMetadata: h,
							usage: ps(g)
						})
					}
				})),
				request: {
					body: s
				},
				response: {
					headers: d
				}
			}
		}
	};

function jk(e) {
	return !("error" in e) && e.choices.some(t => t.text.length > 0)
}
var Lk = ee(() => Q(u({
		dimensions: y().optional(),
		user: a().optional()
	}))),
	Zk = ee(() => Q(u({
		data: R(u({
			embedding: R(y())
		})),
		usage: u({
			prompt_tokens: y()
		}).nullish()
	}))),
	Fk = class pd {
		constructor(t, n) {
			this.specificationVersion = "v4", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0, this.modelId = t, this.config = n
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new pd(t.modelId, t.config)
		}
		get provider() {
			return this.config.provider
		}
		async doEmbed({
			values: t,
			headers: n,
			abortSignal: o,
			providerOptions: r
		}) {
			var i, s, l;
			if (t.length > this.maxEmbeddingsPerCall) throw new Er({
				provider: this.provider,
				modelId: this.modelId,
				maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
				values: t
			});
			const d = (i = await xe({
					provider: "openai",
					providerOptions: r,
					schema: Lk
				})) != null ? i : {},
				{
					responseHeaders: c,
					value: p,
					rawValue: m
				} = await Ue({
					url: this.config.url({
						path: "/embeddings",
						modelId: this.modelId
					}),
					headers: Ce((l = (s = this.config).headers) == null ? void 0 : l.call(s), n),
					body: {
						model: this.modelId,
						input: t,
						encoding_format: "float",
						dimensions: d.dimensions,
						user: d.user
					},
					failedResponseHandler: pt,
					successfulResponseHandler: Me(Zk),
					abortSignal: o,
					fetch: this.config.fetch
				});
			return {
				warnings: [],
				embeddings: p.data.map(h => h.embedding),
				usage: p.usage ? {
					tokens: p.usage.prompt_tokens
				} : void 0,
				response: {
					headers: c,
					body: m
				}
			}
		}
	},
	Bk = ee(() => Q(u({
		id: a(),
		object: a().nullish(),
		bytes: y().nullish(),
		created_at: y().nullish(),
		filename: a().nullish(),
		purpose: a().nullish(),
		status: a().nullish(),
		expires_at: y().nullish()
	}))),
	Vk = ee(() => Q(u({
		purpose: a().optional(),
		expiresAfter: y().optional()
	}))),
	Hk = class {
		constructor(e) {
			this.config = e, this.specificationVersion = "v4"
		}
		get provider() {
			return this.config.provider
		}
		async uploadFile({
			data: e,
			mediaType: t,
			filename: n,
			providerOptions: o
		}) {
			var r, i, s;
			const l = await xe({
					provider: "openai",
					providerOptions: o,
					schema: Vk
				}),
				d = Dn(e),
				c = new Blob([d], {
					type: t
				}),
				p = new FormData;
			n != null ? p.append("file", c, n) : p.append("file", c), p.append("purpose", (r = l == null ? void 0 : l.purpose) != null ? r : "assistants"), (l == null ? void 0 : l.expiresAfter) != null && p.append("expires_after", String(l.expiresAfter));
			const {
				value: m
			} = await ln({
				url: `${this.config.baseURL}/files`,
				headers: Ce(this.config.headers()),
				formData: p,
				failedResponseHandler: pt,
				successfulResponseHandler: Me(Bk),
				fetch: this.config.fetch
			});
			return {
				warnings: [],
				providerReference: {
					openai: m.id
				},
				...((i = m.filename) != null ? i : n) ? {
					filename: (s = m.filename) != null ? s : n
				} : {},
				...t != null ? {
					mediaType: t
				} : {},
				providerMetadata: {
					openai: {
						...m.filename != null ? {
							filename: m.filename
						} : {},
						...m.purpose != null ? {
							purpose: m.purpose
						} : {},
						...m.bytes != null ? {
							bytes: m.bytes
						} : {},
						...m.created_at != null ? {
							createdAt: m.created_at
						} : {},
						...m.status != null ? {
							status: m.status
						} : {},
						...m.expires_at != null ? {
							expiresAt: m.expires_at
						} : {}
					}
				}
			}
		}
	},
	_s = ee(() => Q(u({
		created: y().nullish(),
		data: R(u({
			b64_json: a(),
			revised_prompt: a().nullish()
		})),
		background: a().nullish(),
		output_format: a().nullish(),
		size: a().nullish(),
		quality: a().nullish(),
		usage: u({
			input_tokens: y().nullish(),
			output_tokens: y().nullish(),
			total_tokens: y().nullish(),
			input_tokens_details: u({
				image_tokens: y().nullish(),
				text_tokens: y().nullish()
			}).nullish()
		}).nullish()
	}))),
	Gk = {
		"dall-e-3": 1,
		"dall-e-2": 10,
		"gpt-image-1": 10,
		"gpt-image-1-mini": 10,
		"gpt-image-1.5": 10,
		"gpt-image-2": 10,
		"chatgpt-image-latest": 10
	},
	Jk = ["chatgpt-image-", "gpt-image-1-mini", "gpt-image-1.5", "gpt-image-1", "gpt-image-2"];

function Wk(e) {
	return Jk.some(t => e.startsWith(t))
}
var md = u({
		quality: Y(["standard", "hd", "low", "medium", "high", "auto"]).optional(),
		background: Y(["transparent", "opaque", "auto"]).optional(),
		outputFormat: Y(["png", "jpeg", "webp"]).optional(),
		outputCompression: y().int().min(0).max(100).optional(),
		user: a().optional()
	}),
	Kk = ee(() => Q(md.extend({
		style: Y(["vivid", "natural"]).optional(),
		moderation: Y(["auto", "low"]).optional()
	}))),
	Yk = ee(() => Q(md.extend({
		inputFidelity: Y(["high", "low"]).optional()
	}))),
	Xk = class hd {
		constructor(t, n) {
			this.modelId = t, this.config = n, this.specificationVersion = "v4"
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new hd(t.modelId, t.config)
		}
		get maxImagesPerCall() {
			var t;
			return (t = Gk[this.modelId]) != null ? t : 1
		}
		get provider() {
			return this.config.provider
		}
		async doGenerate({
			prompt: t,
			files: n,
			mask: o,
			n: r,
			size: i,
			aspectRatio: s,
			seed: l,
			providerOptions: d,
			headers: c,
			abortSignal: p
		}) {
			var m, h, g, _, w, k, A, I, E, S, v, b, T, q, L;
			const O = [];
			s != null && O.push({
				type: "unsupported",
				feature: "aspectRatio",
				details: "This model does not support aspect ratio. Use `size` instead."
			}), l != null && O.push({
				type: "unsupported",
				feature: "seed"
			});
			const B = (g = (h = (m = this.config._internal) == null ? void 0 : m.currentDate) == null ? void 0 : h.call(m)) != null ? g : new Date;
			if (n != null) {
				const oe = (_ = await xe({
						provider: "openai",
						providerOptions: d,
						schema: Yk
					})) != null ? _ : {},
					{
						value: te,
						responseHeaders: P
					} = await ln({
						url: this.config.url({
							path: "/images/edits",
							modelId: this.modelId
						}),
						headers: Ce((k = (w = this.config).headers) == null ? void 0 : k.call(w), c),
						formData: ju({
							model: this.modelId,
							prompt: t,
							image: await Promise.all(n.map(H => H.type === "file" ? new Blob([H.data instanceof Uint8Array ? new Blob([H.data], {
								type: H.mediaType
							}) : new Blob([Ot(H.data)], {
								type: H.mediaType
							})], {
								type: H.mediaType
							}) : Hr(H.url))),
							mask: o != null ? await Qk(o) : void 0,
							n: r,
							size: i,
							quality: oe.quality,
							background: oe.background,
							output_format: oe.outputFormat,
							output_compression: oe.outputCompression,
							input_fidelity: oe.inputFidelity,
							user: oe.user
						}),
						failedResponseHandler: pt,
						successfulResponseHandler: Me(_s),
						abortSignal: p,
						fetch: this.config.fetch
					});
				return {
					images: te.data.map(H => H.b64_json),
					warnings: O,
					usage: te.usage != null ? {
						inputTokens: (A = te.usage.input_tokens) != null ? A : void 0,
						outputTokens: (I = te.usage.output_tokens) != null ? I : void 0,
						totalTokens: (E = te.usage.total_tokens) != null ? E : void 0
					} : void 0,
					response: {
						timestamp: B,
						modelId: this.modelId,
						headers: P
					},
					providerMetadata: {
						openai: {
							images: te.data.map((H, ge) => {
								var J, M, se, U, W, ce;
								return {
									...H.revised_prompt ? {
										revisedPrompt: H.revised_prompt
									} : {},
									created: (J = te.created) != null ? J : void 0,
									size: (M = te.size) != null ? M : void 0,
									quality: (se = te.quality) != null ? se : void 0,
									background: (U = te.background) != null ? U : void 0,
									outputFormat: (W = te.output_format) != null ? W : void 0,
									...gs((ce = te.usage) == null ? void 0 : ce.input_tokens_details, ge, te.data.length)
								}
							})
						}
					}
				}
			}
			const F = (S = await xe({
					provider: "openai",
					providerOptions: d,
					schema: Kk
				})) != null ? S : {},
				{
					value: z,
					responseHeaders: N
				} = await Ue({
					url: this.config.url({
						path: "/images/generations",
						modelId: this.modelId
					}),
					headers: Ce((b = (v = this.config).headers) == null ? void 0 : b.call(v), c),
					body: {
						model: this.modelId,
						prompt: t,
						n: r,
						size: i,
						quality: F.quality,
						style: F.style,
						background: F.background,
						moderation: F.moderation,
						output_format: F.outputFormat,
						output_compression: F.outputCompression,
						user: F.user,
						...Wk(this.modelId) ? {} : {
							response_format: "b64_json"
						}
					},
					failedResponseHandler: pt,
					successfulResponseHandler: Me(_s),
					abortSignal: p,
					fetch: this.config.fetch
				});
			return {
				images: z.data.map(oe => oe.b64_json),
				warnings: O,
				usage: z.usage != null ? {
					inputTokens: (T = z.usage.input_tokens) != null ? T : void 0,
					outputTokens: (q = z.usage.output_tokens) != null ? q : void 0,
					totalTokens: (L = z.usage.total_tokens) != null ? L : void 0
				} : void 0,
				response: {
					timestamp: B,
					modelId: this.modelId,
					headers: N
				},
				providerMetadata: {
					openai: {
						images: z.data.map((oe, te) => {
							var P, H, ge, J, M, se;
							return {
								...oe.revised_prompt ? {
									revisedPrompt: oe.revised_prompt
								} : {},
								created: (P = z.created) != null ? P : void 0,
								size: (H = z.size) != null ? H : void 0,
								quality: (ge = z.quality) != null ? ge : void 0,
								background: (J = z.background) != null ? J : void 0,
								outputFormat: (M = z.output_format) != null ? M : void 0,
								...gs((se = z.usage) == null ? void 0 : se.input_tokens_details, te, z.data.length)
							}
						})
					}
				}
			}
		}
	};

function gs(e, t, n) {
	if (e == null) return {};
	const o = {};
	if (e.image_tokens != null) {
		const r = Math.floor(e.image_tokens / n),
			i = e.image_tokens - r * (n - 1);
		o.imageTokens = t === n - 1 ? i : r
	}
	if (e.text_tokens != null) {
		const r = Math.floor(e.text_tokens / n),
			i = e.text_tokens - r * (n - 1);
		o.textTokens = t === n - 1 ? i : r
	}
	return o
}
async function Qk(e) {
	if (!e) return;
	if (e.type === "url") return Hr(e.url);
	const t = e.data instanceof Uint8Array ? e.data : Ot(e.data);
	return new Blob([t], {
		type: e.mediaType
	})
}
var fd = ee(() => Q(u({
		callId: a(),
		operation: ye("type", [u({
			type: f("create_file"),
			path: a(),
			diff: a()
		}), u({
			type: f("delete_file"),
			path: a()
		}), u({
			type: f("update_file"),
			path: a(),
			diff: a()
		})])
	}))),
	_d = ee(() => Q(u({
		status: Y(["completed", "failed"]),
		output: a().optional()
	}))),
	ex = Un({
		id: "openai.apply_patch",
		inputSchema: fd,
		outputSchema: _d
	}),
	tx = ex,
	nx = ee(() => Q(u({
		code: a().nullish(),
		containerId: a()
	}))),
	ox = ee(() => Q(u({
		outputs: R(ye("type", [u({
			type: f("logs"),
			logs: a()
		}), u({
			type: f("image"),
			url: a()
		})])).nullish()
	}))),
	rx = ee(() => Q(u({
		container: le([a(), u({
			fileIds: R(a()).optional()
		})]).optional()
	}))),
	ix = Be({
		id: "openai.code_interpreter",
		inputSchema: nx,
		outputSchema: ox
	}),
	ax = (e = {}) => ix(e),
	gd = u({
		id: a(),
		code: a().optional(),
		message: a().optional()
	}),
	sx = ye("type", [u({
		type: f("click"),
		button: Y(["left", "right", "wheel", "back", "forward"]),
		x: y(),
		y: y(),
		keys: R(a()).optional()
	}), u({
		type: f("double_click"),
		x: y(),
		y: y(),
		keys: R(a()).optional()
	}), u({
		type: f("drag"),
		path: R(u({
			x: y(),
			y: y()
		})),
		keys: R(a()).optional()
	}), u({
		type: f("keypress"),
		keys: R(a())
	}), u({
		type: f("move"),
		x: y(),
		y: y(),
		keys: R(a()).optional()
	}), u({
		type: f("screenshot")
	}), u({
		type: f("scroll"),
		x: y(),
		y: y(),
		scrollX: y(),
		scrollY: y(),
		keys: R(a()).optional()
	}), u({
		type: f("type"),
		text: a()
	}), u({
		type: f("wait")
	})]),
	yd = ee(() => Q(u({
		actions: R(sx),
		pendingSafetyChecks: R(gd),
		status: Y(["in_progress", "completed", "incomplete"])
	}))),
	vd = ee(() => Q(u({
		output: le([u({
			type: f("computer_screenshot"),
			imageUrl: a(),
			fileId: a().optional(),
			detail: Y(["auto", "low", "high", "original"]).optional()
		}), u({
			type: f("computer_screenshot"),
			fileId: a(),
			imageUrl: a().optional(),
			detail: Y(["auto", "low", "high", "original"]).optional()
		})]),
		acknowledgedSafetyChecks: R(gd).optional()
	}))),
	lx = Un({
		id: "openai.computer",
		inputSchema: yd,
		outputSchema: vd
	}),
	ux = (e = {}) => lx(e),
	cx = ee(() => Q(u({
		description: a().optional(),
		format: le([u({
			type: f("grammar"),
			syntax: Y(["regex", "lark"]),
			definition: a()
		}), u({
			type: f("text")
		})]).optional()
	}))),
	dx = ee(() => Q(a())),
	px = It({
		id: "openai.custom",
		inputSchema: dx
	}),
	mx = e => px(e),
	bd = u({
		key: a(),
		type: Y(["eq", "ne", "gt", "gte", "lt", "lte", "in", "nin"]),
		value: le([a(), y(), _e(), R(a())])
	}),
	wd = u({
		type: Y(["and", "or"]),
		filters: R(le([bd, Fr(() => wd)]))
	}),
	hx = ee(() => Q(u({
		vectorStoreIds: R(a()),
		maxNumResults: y().optional(),
		ranking: u({
			ranker: a().optional(),
			scoreThreshold: y().optional()
		}).optional(),
		filters: le([bd, wd]).optional()
	}))),
	fx = ee(() => Q(u({
		queries: R(a()),
		results: R(u({
			attributes: ke(a(), Se()),
			fileId: a(),
			filename: a(),
			score: y(),
			text: a()
		})).nullable()
	}))),
	_x = Be({
		id: "openai.file_search",
		inputSchema: u({}),
		outputSchema: fx
	}),
	gx = ee(() => Q(u({
		background: Y(["auto", "opaque", "transparent"]).optional(),
		inputFidelity: Y(["low", "high"]).optional(),
		inputImageMask: u({
			fileId: a().optional(),
			imageUrl: a().optional()
		}).optional(),
		model: a().optional(),
		moderation: Y(["auto"]).optional(),
		outputCompression: y().int().min(0).max(100).optional(),
		outputFormat: Y(["png", "jpeg", "webp"]).optional(),
		partialImages: y().int().min(0).max(3).optional(),
		quality: Y(["auto", "low", "medium", "high"]).optional(),
		size: Y(["1024x1024", "1024x1536", "1536x1024", "auto"]).optional()
	}).strict())),
	yx = ee(() => Q(u({}))),
	vx = ee(() => Q(u({
		result: a()
	}))),
	bx = Be({
		id: "openai.image_generation",
		inputSchema: yx,
		outputSchema: vx
	}),
	wx = (e = {}) => bx(e),
	kd = ee(() => Q(u({
		action: u({
			type: f("exec"),
			command: R(a()),
			timeoutMs: y().optional(),
			user: a().optional(),
			workingDirectory: a().optional(),
			env: ke(a(), a()).optional()
		})
	}))),
	xd = ee(() => Q(u({
		output: a()
	}))),
	kx = Un({
		id: "openai.local_shell",
		inputSchema: kd,
		outputSchema: xd
	}),
	Id = ee(() => Q(u({
		action: u({
			commands: R(a()),
			timeoutMs: y().optional(),
			maxOutputLength: y().optional()
		})
	}))),
	yr = ee(() => Q(u({
		output: R(u({
			stdout: a(),
			stderr: a(),
			outcome: ye("type", [u({
				type: f("timeout")
			}), u({
				type: f("exit"),
				exitCode: y()
			})])
		}))
	}))),
	xx = R(ye("type", [u({
		type: f("skillReference"),
		providerReference: ke(a(), a()),
		version: a().optional()
	}), u({
		type: f("inline"),
		name: a(),
		description: a(),
		source: u({
			type: f("base64"),
			mediaType: f("application/zip"),
			data: a()
		})
	})])).optional(),
	Ix = ee(() => Q(u({
		environment: le([u({
			type: f("containerAuto"),
			fileIds: R(a()).optional(),
			memoryLimit: Y(["1g", "4g", "16g", "64g"]).optional(),
			networkPolicy: ye("type", [u({
				type: f("disabled")
			}), u({
				type: f("allowlist"),
				allowedDomains: R(a()),
				domainSecrets: R(u({
					domain: a(),
					name: a(),
					value: a()
				})).optional()
			})]).optional(),
			skills: xx
		}), u({
			type: f("containerReference"),
			containerId: a()
		}), u({
			type: f("local").optional(),
			skills: R(u({
				name: a(),
				description: a(),
				path: a()
			})).optional()
		})]).optional()
	}))),
	Tx = Un({
		id: "openai.shell",
		inputSchema: Id,
		outputSchema: yr
	}),
	Sx = ee(() => Q(u({
		execution: Y(["server", "client"]).optional(),
		description: a().optional(),
		parameters: ke(a(), Se()).optional()
	}))),
	vr = ee(() => Q(u({
		arguments: Se().optional(),
		call_id: a().nullish()
	}))),
	br = ee(() => Q(u({
		tools: R(ke(a(), Se()))
	}))),
	Cx = Un({
		id: "openai.tool_search",
		inputSchema: vr,
		outputSchema: br
	}),
	Ox = (e = {}) => Cx(e),
	Ax = ee(() => Q(u({
		externalWebAccess: _e().optional(),
		filters: u({
			allowedDomains: R(a()).optional()
		}).optional(),
		searchContextSize: Y(["low", "medium", "high"]).optional(),
		userLocation: u({
			type: f("approximate"),
			country: a().optional(),
			city: a().optional(),
			region: a().optional(),
			timezone: a().optional()
		}).optional()
	}))),
	$x = ee(() => Q(u({}))),
	Ex = ee(() => Q(u({
		action: ye("type", [u({
			type: f("search"),
			query: a().optional(),
			queries: R(a()).optional()
		}), u({
			type: f("openPage"),
			url: a().nullish()
		}), u({
			type: f("findInPage"),
			url: a().nullish(),
			pattern: a().nullish()
		})]).optional(),
		sources: R(ye("type", [u({
			type: f("url"),
			url: a()
		}), u({
			type: f("api"),
			name: a()
		})])).optional()
	}))),
	Rx = Be({
		id: "openai.web_search",
		inputSchema: $x,
		outputSchema: Ex
	}),
	Nx = (e = {}) => Rx(e),
	Px = ee(() => Q(u({
		searchContextSize: Y(["low", "medium", "high"]).optional(),
		userLocation: u({
			type: f("approximate"),
			country: a().optional(),
			city: a().optional(),
			region: a().optional(),
			timezone: a().optional()
		}).optional()
	}))),
	Mx = ee(() => Q(u({}))),
	zx = ee(() => Q(u({
		action: ye("type", [u({
			type: f("search"),
			query: a().optional()
		}), u({
			type: f("openPage"),
			url: a().nullish()
		}), u({
			type: f("findInPage"),
			url: a().nullish(),
			pattern: a().nullish()
		})]).optional()
	}))),
	Dx = Be({
		id: "openai.web_search_preview",
		inputSchema: Mx,
		outputSchema: zx
	}),
	wr = Fr(() => le([a(), y(), _e(), Nu(), R(wr), ke(a(), wr)])),
	qx = ee(() => Q(u({
		serverLabel: a(),
		allowedTools: le([R(a()), u({
			readOnly: _e().optional(),
			toolNames: R(a()).optional()
		})]).optional(),
		authorization: a().optional(),
		connectorId: a().optional(),
		headers: ke(a(), a()).optional(),
		requireApproval: le([Y(["always", "never"]), u({
			never: u({
				toolNames: R(a()).optional()
			}).optional()
		})]).optional(),
		serverDescription: a().optional(),
		serverUrl: a().optional()
	}).refine(e => e.serverUrl != null || e.connectorId != null, "One of serverUrl or connectorId must be provided."))),
	Ux = ee(() => Q(u({}))),
	jx = ee(() => Q(u({
		type: f("call"),
		serverLabel: a(),
		name: a(),
		arguments: a(),
		output: a().nullish(),
		error: le([a(), wr]).optional()
	}))),
	Lx = Be({
		id: "openai.mcp",
		inputSchema: Ux,
		outputSchema: jx
	}),
	Zx = e => Lx(e),
	Fx = {
		applyPatch: tx,
		customTool: mx,
		codeInterpreter: ax,
		computer: ux,
		fileSearch: _x,
		imageGeneration: wx,
		localShell: kx,
		shell: Tx,
		webSearchPreview: Dx,
		webSearch: Nx,
		mcp: Zx,
		toolSearch: Ox
	};

function Bx(e) {
	var t, n, o, r, i, s, l, d, c, p, m, h, g, _, w, k, A, I, E;
	const S = e,
		v = S.type;
	switch (v) {
		case "session.created":
			return {
				type: "session-created", sessionId: (t = S.session) == null ? void 0 : t.id, raw: e
			};
		case "session.updated":
			return {
				type: "session-updated", raw: e
			};
		case "input_audio_buffer.speech_started":
			return {
				type: "speech-started", itemId: S.item_id, raw: e
			};
		case "input_audio_buffer.speech_stopped":
			return {
				type: "speech-stopped", itemId: S.item_id, raw: e
			};
		case "input_audio_buffer.committed":
			return {
				type: "audio-committed", itemId: S.item_id, previousItemId: S.previous_item_id, raw: e
			};
		case "conversation.item.added":
			return {
				type: "conversation-item-added", itemId: (o = (n = S.item) == null ? void 0 : n.id) != null ? o : S.item_id, item: S.item, raw: e
			};
		case "conversation.item.input_audio_transcription.completed":
			return {
				type: "input-transcription-completed", itemId: S.item_id, transcript: (r = S.transcript) != null ? r : "", raw: e
			};
		case "response.created":
			return {
				type: "response-created", responseId: (s = (i = S.response) == null ? void 0 : i.id) != null ? s : S.response_id, raw: e
			};
		case "response.done":
			return {
				type: "response-done", responseId: (d = (l = S.response) == null ? void 0 : l.id) != null ? d : S.response_id, status: (p = (c = S.response) == null ? void 0 : c.status) != null ? p : "completed", raw: e
			};
		case "response.output_item.added":
			return {
				type: "output-item-added", responseId: S.response_id, itemId: (h = (m = S.item) == null ? void 0 : m.id) != null ? h : S.item_id, raw: e
			};
		case "response.output_item.done":
			return {
				type: "output-item-done", responseId: S.response_id, itemId: (_ = (g = S.item) == null ? void 0 : g.id) != null ? _ : S.item_id, raw: e
			};
		case "response.content_part.added":
			return {
				type: "content-part-added", responseId: S.response_id, itemId: S.item_id, raw: e
			};
		case "response.content_part.done":
			return {
				type: "content-part-done", responseId: S.response_id, itemId: S.item_id, raw: e
			};
		case "response.output_audio.delta":
			return {
				type: "audio-delta", responseId: S.response_id, itemId: S.item_id, delta: S.delta, raw: e
			};
		case "response.output_audio.done":
			return {
				type: "audio-done", responseId: S.response_id, itemId: S.item_id, raw: e
			};
		case "response.output_audio_transcript.delta":
			return {
				type: "audio-transcript-delta", responseId: S.response_id, itemId: S.item_id, delta: S.delta, raw: e
			};
		case "response.output_audio_transcript.done":
			return {
				type: "audio-transcript-done", responseId: S.response_id, itemId: S.item_id, transcript: S.transcript, raw: e
			};
		case "response.output_text.delta":
			return {
				type: "text-delta", responseId: S.response_id, itemId: S.item_id, delta: S.delta, raw: e
			};
		case "response.output_text.done":
			return {
				type: "text-done", responseId: S.response_id, itemId: S.item_id, text: S.text, raw: e
			};
		case "response.function_call_arguments.delta":
			return {
				type: "function-call-arguments-delta", responseId: S.response_id, itemId: S.item_id, callId: S.call_id, delta: S.delta, raw: e
			};
		case "response.function_call_arguments.done":
			return {
				type: "function-call-arguments-done", responseId: S.response_id, itemId: S.item_id, callId: S.call_id, name: S.name, arguments: S.arguments, raw: e
			};
		case "error":
			return {
				type: "error", message: (A = (k = (w = S.error) == null ? void 0 : w.message) != null ? k : S.message) != null ? A : "Unknown error", code: (E = (I = S.error) == null ? void 0 : I.code) != null ? E : S.code, raw: e
			};
		default:
			return {
				type: "custom", rawType: v, raw: e
			}
	}
}

function Vx(e, t) {
	switch (e.type) {
		case "session-update":
			return {
				type: "session.update", session: kr(e.config, t)
			};
		case "input-audio-append":
			return {
				type: "input_audio_buffer.append", audio: e.audio
			};
		case "input-audio-commit":
			return {
				type: "input_audio_buffer.commit"
			};
		case "input-audio-clear":
			return {
				type: "input_audio_buffer.clear"
			};
		case "conversation-item-create": {
			const n = e.item;
			switch (n.type) {
				case "text-message":
					return {
						type: "conversation.item.create", item: {
							type: "message",
							role: n.role,
							content: [{
								type: "input_text",
								text: n.text
							}]
						}
					};
				case "audio-message":
					return {
						type: "conversation.item.create", item: {
							type: "message",
							role: n.role,
							content: [{
								type: "input_audio",
								audio: n.audio
							}]
						}
					};
				case "function-call-output":
					return {
						type: "conversation.item.create", item: {
							type: "function_call_output",
							call_id: n.callId,
							output: n.output
						}
					}
			}
			break
		}
		case "conversation-item-truncate":
			return {
				type: "conversation.item.truncate", item_id: e.itemId, content_index: e.contentIndex, audio_end_ms: e.audioEndMs
			};
		case "response-create":
			return {
				type: "response.create", ...e.options != null ? {
					response: {
						...e.options.modalities != null ? {
							output_modalities: e.options.modalities
						} : {},
						...e.options.instructions != null ? {
							instructions: e.options.instructions
						} : {},
						...e.options.metadata != null ? {
							metadata: e.options.metadata
						} : {}
					}
				} : {}
			};
		case "response-cancel":
			return {
				type: "response.cancel"
			}
	}
}

function kr(e, t) {
	var n;
	const o = {
		type: "realtime",
		model: t
	};
	e.instructions != null && (o.instructions = e.instructions), e.outputModalities != null && (o.output_modalities = e.outputModalities);
	const r = {};
	if (e.inputAudioFormat != null || e.inputAudioTranscription != null || e.turnDetection != null) {
		const i = {};
		if (e.inputAudioFormat != null && (i.format = {
				type: e.inputAudioFormat.type,
				...e.inputAudioFormat.rate != null ? {
					rate: e.inputAudioFormat.rate
				} : {}
			}), e.turnDetection != null)
			if (e.turnDetection.type === "disabled") i.turn_detection = null;
			else {
				const s = {
					type: e.turnDetection.type === "server-vad" ? "server_vad" : "semantic_vad"
				};
				e.turnDetection.threshold != null && (s.threshold = e.turnDetection.threshold), e.turnDetection.silenceDurationMs != null && (s.silence_duration_ms = e.turnDetection.silenceDurationMs), e.turnDetection.prefixPaddingMs != null && (s.prefix_padding_ms = e.turnDetection.prefixPaddingMs), i.turn_detection = s
			} e.inputAudioTranscription != null && (i.transcription = {
			model: (n = e.inputAudioTranscription.model) != null ? n : "gpt-realtime-whisper",
			...e.inputAudioTranscription.language != null ? {
				language: e.inputAudioTranscription.language
			} : {},
			...e.inputAudioTranscription.prompt != null ? {
				prompt: e.inputAudioTranscription.prompt
			} : {}
		}), r.input = i
	}
	if (e.outputAudioFormat != null || e.voice != null) {
		const i = {};
		e.outputAudioFormat != null && (i.format = {
			type: e.outputAudioFormat.type,
			...e.outputAudioFormat.rate != null ? {
				rate: e.outputAudioFormat.rate
			} : {}
		}), e.voice != null && (i.voice = e.voice), r.output = i
	}
	return Object.keys(r).length > 0 && (o.audio = r), e.tools != null && e.tools.length > 0 && (o.tools = e.tools.map(i => ({
		type: i.type,
		name: i.name,
		description: i.description,
		parameters: i.parameters
	})), o.tool_choice = "auto"), e.providerOptions != null && Object.assign(o, e.providerOptions), o
}
var Hx = class {
	constructor(e, t) {
		this.specificationVersion = "v4", this.modelId = e, this.provider = t.provider, this.config = t
	}
	async doCreateClientSecret(e) {
		var t;
		const n = (t = this.config.fetch) != null ? t : fetch,
			o = `${this.config.baseURL}/realtime/client_secrets`,
			r = e.sessionConfig != null ? kr(e.sessionConfig, this.modelId) : {
				type: "realtime",
				model: this.modelId
			},
			i = await n(o, {
				method: "POST",
				headers: {
					...this.config.headers(),
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					session: r,
					...e.expiresAfterSeconds != null ? {
						expires_after: {
							anchor: "created_at",
							seconds: e.expiresAfterSeconds
						}
					} : {}
				})
			});
		if (!i.ok) {
			const l = await i.text();
			throw new Error(`OpenAI realtime client secret request failed: ${i.status} ${l}`)
		}
		const s = await i.json();
		return {
			token: s.value,
			url: `wss://${new URL(this.config.baseURL).host}/v1/realtime?model=${encodeURIComponent(this.modelId)}`,
			expiresAt: s.expires_at
		}
	}
	getWebSocketConfig(e) {
		return {
			url: e.url,
			protocols: ["realtime", `openai-insecure-api-key.${e.token}`]
		}
	}
	parseServerEvent(e) {
		return Bx(e)
	}
	serializeClientEvent(e) {
		return Vx(e, this.modelId)
	}
	buildSessionConfig(e) {
		return kr(e, this.modelId)
	}
};

function ys(e) {
	var t, n, o, r, i, s;
	if (e == null) return {
		inputTokens: {
			total: void 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: void 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	};
	const l = e.input_tokens,
		d = e.output_tokens,
		c = (n = (t = e.input_tokens_details) == null ? void 0 : t.cached_tokens) != null ? n : 0,
		p = (r = (o = e.input_tokens_details) == null ? void 0 : o.cache_write_tokens) != null ? r : void 0,
		m = (s = (i = e.output_tokens_details) == null ? void 0 : i.reasoning_tokens) != null ? s : 0;
	return {
		inputTokens: {
			total: l,
			noCache: l - c - (p ?? 0),
			cacheRead: c,
			cacheWrite: p
		},
		outputTokens: {
			total: d,
			text: d - m,
			reasoning: m
		},
		raw: e
	}
}

function Gx(e) {
	return JSON.stringify(e === void 0 ? {} : e)
}

function un(e, t) {
	var n;
	return (n = e == null ? void 0 : e[t]) == null ? void 0 : n.promptCacheBreakpoint
}

function vs(e, t) {
	return t ? t.some(n => e.startsWith(n)) : !1
}
async function Jx({
	prompt: e,
	toolNameMapping: t,
	systemMessageMode: n,
	providerOptionsName: o,
	fileIdPrefixes: r,
	passThroughUnsupportedFiles: i = !1,
	store: s,
	hasConversation: l = !1,
	hasPreviousResponseId: d = !1,
	hasLocalShellTool: c = !1,
	hasShellTool: p = !1,
	hasApplyPatchTool: m = !1,
	hasComputerTool: h = !1,
	customProviderToolNames: g
}) {
	var _, w, k, A, I, E, S, v, b, T, q, L, O, B, F, z, N, oe, te, P, H, ge, J, M, se;
	let U = [];
	const W = [],
		ce = new Set;
	for (const {
			role: ne,
			content: de,
			providerOptions: X
		}
		of e) switch (ne) {
		case "system": {
			switch (n) {
				case "system": {
					const V = un(X, o);
					U.push({
						role: "system",
						content: V == null ? de : [{
							type: "input_text",
							text: de,
							prompt_cache_breakpoint: V
						}]
					});
					break
				}
				case "developer": {
					const V = un(X, o);
					U.push({
						role: "developer",
						content: V == null ? de : [{
							type: "input_text",
							text: de,
							prompt_cache_breakpoint: V
						}]
					});
					break
				}
				case "remove": {
					W.push({
						type: "other",
						message: "system messages are removed for this model"
					});
					break
				}
				default: {
					const V = n;
					throw new Error(`Unsupported system message mode: ${V}`)
				}
			}
			break
		}
		case "user": {
			U.push({
				role: "user",
				content: de.map((V, j) => {
					var ae, Z, x, D, C;
					switch (V.type) {
						case "text": {
							const G = un(V.providerOptions, o);
							return {
								type: "input_text",
								text: V.text,
								...G != null && {
									prompt_cache_breakpoint: G
								}
							}
						}
						case "file": {
							const G = un(V.providerOptions, o);
							switch (V.data.type) {
								case "reference": {
									const me = zt({
										reference: V.data.reference,
										provider: o
									});
									return ut(V.mediaType) === "image" ? {
										type: "input_image",
										file_id: me,
										detail: (Z = (ae = V.providerOptions) == null ? void 0 : ae[o]) == null ? void 0 : Z.imageDetail,
										...G != null && {
											prompt_cache_breakpoint: G
										}
									} : {
										type: "input_file",
										file_id: me,
										...G != null && {
											prompt_cache_breakpoint: G
										}
									}
								}
								case "text":
									throw new Oe({
										functionality: "text file parts"
									});
								case "url":
								case "data": {
									if (ut(V.mediaType) === "image") return {
										type: "input_image",
										...V.data.type === "url" ? {
											image_url: V.data.url.toString()
										} : typeof V.data.data == "string" && vs(V.data.data, r) ? {
											file_id: V.data.data
										} : {
											image_url: `data:${Ge({ part: V })};base64,${De(V.data.data)}`
										},
										detail: (D = (x = V.providerOptions) == null ? void 0 : x[o]) == null ? void 0 : D.imageDetail,
										...G != null && {
											prompt_cache_breakpoint: G
										}
									};
									{
										if (V.data.type === "url") return {
											type: "input_file",
											file_url: V.data.url.toString(),
											...G != null && {
												prompt_cache_breakpoint: G
											}
										};
										const fe = Ge({
											part: V
										});
										if (fe !== "application/pdf" && !i) throw new Oe({
											functionality: `file part media type ${fe}`
										});
										return {
											type: "input_file",
											...typeof V.data.data == "string" && vs(V.data.data, r) ? {
												file_id: V.data.data
											} : {
												filename: (C = V.filename) != null ? C : fe === "application/pdf" ? `part-${j}.pdf` : `part-${j}`,
												file_data: `data:${fe};base64,${De(V.data.data)}`
											},
											...G != null && {
												prompt_cache_breakpoint: G
											}
										}
									}
								}
							}
						}
					}
				})
			});
			break
		}
		case "assistant": {
			const V = {};
			for (const j of de) switch (j.type) {
				case "text": {
					const ae = (_ = j.providerOptions) == null ? void 0 : _[o],
						Z = ae == null ? void 0 : ae.itemId,
						x = ae == null ? void 0 : ae.phase;
					if (l && Z != null) break;
					if (s && Z != null) {
						U.push({
							type: "item_reference",
							id: Z
						});
						break
					}
					U.push({
						role: "assistant",
						content: [{
							type: "output_text",
							text: j.text
						}],
						id: Z,
						...x != null && {
							phase: x
						}
					});
					break
				}
				case "tool-call": {
					const ae = (E = (k = (w = j.providerOptions) == null ? void 0 : w[o]) == null ? void 0 : k.itemId) != null ? E : (I = (A = j.providerMetadata) == null ? void 0 : A[o]) == null ? void 0 : I.itemId,
						Z = (q = (v = (S = j.providerOptions) == null ? void 0 : S[o]) == null ? void 0 : v.namespace) != null ? q : (T = (b = j.providerMetadata) == null ? void 0 : b[o]) == null ? void 0 : T.namespace;
					if (l && ae != null) break;
					const x = t.toProviderToolName(j.toolName);
					if (x === "tool_search") {
						if (s && ae != null) {
							U.push({
								type: "item_reference",
								id: ae
							});
							break
						}
						const C = typeof j.input == "string" ? await lc({
								text: j.input,
								schema: vr
							}) : await Te({
								value: j.input,
								schema: vr
							}),
							G = C.call_id != null ? "client" : "server";
						U.push({
							type: "tool_search_call",
							id: ae ?? j.toolCallId,
							execution: G,
							call_id: (L = C.call_id) != null ? L : null,
							status: "completed",
							arguments: C.arguments
						});
						break
					}
					if (j.providerExecuted) {
						s && ae != null && U.push({
							type: "item_reference",
							id: ae
						});
						break
					}
					if (d && s && ae != null) break;
					const D = c && x === "local_shell" || p && x === "shell" || m && x === "apply_patch" || h && x === "computer" || ((O = g == null ? void 0 : g.has(x)) != null ? O : !1);
					if (s && ae != null && D) {
						U.push({
							type: "item_reference",
							id: ae
						});
						break
					}
					if (c && x === "local_shell") {
						const C = await Te({
							value: j.input,
							schema: kd
						});
						U.push({
							type: "local_shell_call",
							call_id: j.toolCallId,
							id: ae,
							action: {
								type: "exec",
								command: C.action.command,
								timeout_ms: C.action.timeoutMs,
								user: C.action.user,
								working_directory: C.action.workingDirectory,
								env: C.action.env
							}
						});
						break
					}
					if (p && x === "shell") {
						const C = await Te({
							value: j.input,
							schema: Id
						});
						U.push({
							type: "shell_call",
							call_id: j.toolCallId,
							id: ae,
							status: "completed",
							action: {
								commands: C.action.commands,
								timeout_ms: C.action.timeoutMs,
								max_output_length: C.action.maxOutputLength
							}
						});
						break
					}
					if (m && x === "apply_patch") {
						const C = await Te({
							value: j.input,
							schema: fd
						});
						U.push({
							type: "apply_patch_call",
							call_id: C.callId,
							id: ae,
							status: "completed",
							operation: C.operation
						});
						break
					}
					if (h && x === "computer") {
						const C = await Te({
							value: j.input,
							schema: yd
						});
						U.push({
							type: "computer_call",
							call_id: j.toolCallId,
							id: ae,
							status: C.status,
							actions: C.actions.map(G => {
								switch (G.type) {
									case "click":
									case "double_click":
									case "move":
										return {
											...G, keys: G.keys
										};
									case "drag":
										return {
											...G, keys: G.keys
										};
									case "scroll":
										return {
											type: "scroll", x: G.x, y: G.y, scroll_x: G.scrollX, scroll_y: G.scrollY, keys: G.keys
										};
									default:
										return G
								}
							}),
							pending_safety_checks: C.pendingSafetyChecks.map(G => ({
								id: G.id,
								code: G.code,
								message: G.message
							}))
						});
						break
					}
					if (g != null && g.has(x)) {
						U.push({
							type: "custom_tool_call",
							call_id: j.toolCallId,
							name: x,
							input: typeof j.input == "string" ? j.input : JSON.stringify(j.input),
							id: ae
						});
						break
					}
					U.push({
						type: "function_call",
						call_id: j.toolCallId,
						name: x,
						arguments: Gx(j.input),
						...Z != null && {
							namespace: Z
						}
					});
					break
				}
				case "tool-result": {
					if (j.output.type === "execution-denied" || j.output.type === "json" && typeof j.output.value == "object" && j.output.value != null && "type" in j.output.value && j.output.value.type === "execution-denied" || l) break;
					const ae = t.toProviderToolName(j.toolName);
					if (ae === "tool_search") {
						const Z = (z = (F = (B = j.providerOptions) == null ? void 0 : B[o]) == null ? void 0 : F.itemId) != null ? z : j.toolCallId;
						if (s) U.push({
							type: "item_reference",
							id: Z
						});
						else if (j.output.type === "json") {
							const x = await Te({
								value: j.output.value,
								schema: br
							});
							U.push({
								type: "tool_search_output",
								id: Z,
								execution: "server",
								call_id: null,
								status: "completed",
								tools: x.tools
							})
						}
						break
					}
					if (p && ae === "shell") {
						if (j.output.type === "json") {
							const Z = await Te({
								value: j.output.value,
								schema: yr
							});
							U.push({
								type: "shell_call_output",
								call_id: j.toolCallId,
								output: Z.output.map(x => ({
									stdout: x.stdout,
									stderr: x.stderr,
									outcome: x.outcome.type === "timeout" ? {
										type: "timeout"
									} : {
										type: "exit",
										exit_code: x.outcome.exitCode
									}
								}))
							})
						}
						break
					}
					if (s) {
						const Z = (te = (oe = (N = j.providerOptions) == null ? void 0 : N[o]) == null ? void 0 : oe.itemId) != null ? te : j.toolCallId;
						U.push({
							type: "item_reference",
							id: Z
						})
					} else W.push({
						type: "other",
						message: `Results for OpenAI tool ${j.toolName} are not sent to the API when store is false`
					});
					break
				}
				case "reasoning": {
					const ae = await xe({
							provider: o,
							providerOptions: j.providerOptions,
							schema: Wx
						}),
						Z = ae == null ? void 0 : ae.itemId;
					if ((l || d) && Z != null) break;
					if (Z != null) {
						const x = V[Z];
						if (s) x === void 0 && (U.push({
							type: "item_reference",
							id: Z
						}), V[Z] = {
							type: "reasoning",
							id: Z,
							summary: []
						});
						else {
							const D = [];
							j.text.length > 0 ? D.push({
								type: "summary_text",
								text: j.text
							}) : x !== void 0 && W.push({
								type: "other",
								message: `Cannot append empty reasoning part to existing reasoning sequence. Skipping reasoning part: ${JSON.stringify(j)}.`
							}), x === void 0 ? (V[Z] = {
								type: "reasoning",
								id: Z,
								encrypted_content: ae == null ? void 0 : ae.reasoningEncryptedContent,
								summary: D
							}, U.push(V[Z])) : (x.summary.push(...D), (ae == null ? void 0 : ae.reasoningEncryptedContent) != null && (x.encrypted_content = ae.reasoningEncryptedContent))
						}
					} else {
						const x = ae == null ? void 0 : ae.reasoningEncryptedContent;
						if (x != null) {
							const D = [];
							j.text.length > 0 && D.push({
								type: "summary_text",
								text: j.text
							}), U.push({
								type: "reasoning",
								encrypted_content: x,
								summary: D
							})
						} else W.push({
							type: "other",
							message: `Non-OpenAI reasoning parts are not supported. Skipping reasoning part: ${JSON.stringify(j)}.`
						})
					}
					break
				}
				case "custom": {
					if (j.kind === "openai.compaction") {
						const ae = (P = j.providerOptions) == null ? void 0 : P[o],
							Z = ae == null ? void 0 : ae.itemId;
						if (l && Z != null) break;
						if (s && Z != null) {
							U.push({
								type: "item_reference",
								id: Z
							});
							break
						}
						const x = ae == null ? void 0 : ae.encryptedContent;
						Z != null && U.push({
							type: "compaction",
							id: Z,
							encrypted_content: x
						})
					}
					break
				}
			}
			break
		}
		case "tool": {
			for (const V of de) {
				if (V.type === "tool-approval-response") {
					const x = V;
					if (ce.has(x.approvalId)) continue;
					ce.add(x.approvalId), s && U.push({
						type: "item_reference",
						id: x.approvalId
					}), U.push({
						type: "mcp_approval_response",
						approval_request_id: x.approvalId,
						approve: x.approved
					});
					continue
				}
				const j = V.output;
				if (j.type === "execution-denied" && ((ge = (H = j.providerOptions) == null ? void 0 : H.openai) == null ? void 0 : ge.approvalId)) continue;
				const ae = t.toProviderToolName(V.toolName);
				if (ae === "tool_search" && j.type === "json") {
					const x = await Te({
						value: j.value,
						schema: br
					});
					U.push({
						type: "tool_search_output",
						execution: "client",
						call_id: V.toolCallId,
						status: "completed",
						tools: x.tools
					});
					continue
				}
				if (c && ae === "local_shell" && j.type === "json") {
					const x = await Te({
						value: j.value,
						schema: xd
					});
					U.push({
						type: "local_shell_call_output",
						call_id: V.toolCallId,
						output: x.output
					});
					continue
				}
				if (p && ae === "shell" && j.type === "json") {
					const x = await Te({
						value: j.value,
						schema: yr
					});
					U.push({
						type: "shell_call_output",
						call_id: V.toolCallId,
						output: x.output.map(D => ({
							stdout: D.stdout,
							stderr: D.stderr,
							outcome: D.outcome.type === "timeout" ? {
								type: "timeout"
							} : {
								type: "exit",
								exit_code: D.outcome.exitCode
							}
						}))
					});
					continue
				}
				if (m && V.toolName === "apply_patch" && j.type === "json") {
					const x = await Te({
						value: j.value,
						schema: _d
					});
					U.push({
						type: "apply_patch_call_output",
						call_id: V.toolCallId,
						status: x.status,
						output: x.output
					});
					continue
				}
				if (h && ae === "computer" && j.type === "json") {
					const x = await Te({
						value: j.value,
						schema: vd
					});
					U.push({
						type: "computer_call_output",
						call_id: V.toolCallId,
						output: {
							type: "computer_screenshot",
							image_url: x.output.imageUrl,
							file_id: x.output.fileId,
							detail: x.output.detail
						},
						acknowledged_safety_checks: (J = x.acknowledgedSafetyChecks) == null ? void 0 : J.map(D => ({
							id: D.id,
							code: D.code,
							message: D.message
						}))
					});
					continue
				}
				if (g != null && g.has(ae)) {
					let x;
					switch (j.type) {
						case "text":
						case "error-text":
							x = j.value;
							break;
						case "execution-denied":
							x = (M = j.reason) != null ? M : "Tool call execution denied.";
							break;
						case "json":
						case "error-json":
							x = JSON.stringify(j.value);
							break;
						case "content":
							x = j.value.map(D => {
								var C, G, me;
								const fe = un(D.providerOptions, o);
								switch (D.type) {
									case "text":
										return {
											type: "input_text", text: D.text, ...fe != null && {
												prompt_cache_breakpoint: fe
											}
										};
									case "file": {
										const pe = ut(D.mediaType),
											be = (G = (C = D.providerOptions) == null ? void 0 : C[o]) == null ? void 0 : G.imageDetail;
										if (D.data.type === "data") {
											const we = Ge({
												part: D
											});
											return pe === "image" ? {
												type: "input_image",
												image_url: `data:${we};base64,${De(D.data.data)}`,
												detail: be,
												...fe != null && {
													prompt_cache_breakpoint: fe
												}
											} : {
												type: "input_file",
												filename: (me = D.filename) != null ? me : "data",
												file_data: `data:${we};base64,${De(D.data.data)}`,
												...fe != null && {
													prompt_cache_breakpoint: fe
												}
											}
										}
										if (D.data.type === "url") return pe === "image" ? {
											type: "input_image",
											image_url: D.data.url.toString(),
											detail: be,
											...fe != null && {
												prompt_cache_breakpoint: fe
											}
										} : {
											type: "input_file",
											file_url: D.data.url.toString(),
											...fe != null && {
												prompt_cache_breakpoint: fe
											}
										};
										W.push({
											type: "other",
											message: `unsupported custom tool content part type: ${D.type} with data type: ${D.data.type}`
										});
										return
									}
									default:
										W.push({
											type: "other",
											message: `unsupported custom tool content part type: ${D.type}`
										});
										return
								}
							}).filter(ur);
							break;
						default:
							x = ""
					}
					U.push({
						type: "custom_tool_call_output",
						call_id: V.toolCallId,
						output: x
					});
					continue
				}
				let Z;
				switch (j.type) {
					case "text":
					case "error-text":
						Z = j.value;
						break;
					case "execution-denied":
						Z = (se = j.reason) != null ? se : "Tool call execution denied.";
						break;
					case "json":
					case "error-json":
						Z = JSON.stringify(j.value);
						break;
					case "content":
						Z = j.value.map(x => {
							var D, C, G;
							const me = un(x.providerOptions, o);
							switch (x.type) {
								case "text":
									return {
										type: "input_text", text: x.text, ...me != null && {
											prompt_cache_breakpoint: me
										}
									};
								case "file": {
									const fe = ut(x.mediaType),
										pe = (C = (D = x.providerOptions) == null ? void 0 : D[o]) == null ? void 0 : C.imageDetail;
									if (x.data.type === "data") {
										const be = Ge({
											part: x
										});
										return fe === "image" ? {
											type: "input_image",
											image_url: `data:${be};base64,${De(x.data.data)}`,
											detail: pe,
											...me != null && {
												prompt_cache_breakpoint: me
											}
										} : {
											type: "input_file",
											filename: (G = x.filename) != null ? G : "data",
											file_data: `data:${be};base64,${De(x.data.data)}`,
											...me != null && {
												prompt_cache_breakpoint: me
											}
										}
									}
									if (x.data.type === "url") return fe === "image" ? {
										type: "input_image",
										image_url: x.data.url.toString(),
										detail: pe,
										...me != null && {
											prompt_cache_breakpoint: me
										}
									} : {
										type: "input_file",
										file_url: x.data.url.toString(),
										...me != null && {
											prompt_cache_breakpoint: me
										}
									};
									W.push({
										type: "other",
										message: `unsupported tool content part type: ${x.type} with data type: ${x.data.type}`
									});
									return
								}
								default: {
									W.push({
										type: "other",
										message: `unsupported tool content part type: ${x.type}`
									});
									return
								}
							}
						}).filter(ur);
						break
				}
				U.push({
					type: "function_call_output",
					call_id: V.toolCallId,
					output: Z
				})
			}
			break
		}
		default: {
			const V = ne;
			throw new Error(`Unsupported role: ${V}`)
		}
	}
	return !s && U.some(ne => "type" in ne && ne.type === "reasoning" && ne.encrypted_content == null) && (W.push({
		type: "other",
		message: "Reasoning parts without encrypted content are not supported when store is false. Skipping reasoning parts."
	}), U = U.filter(ne => !("type" in ne) || ne.type !== "reasoning" || ne.encrypted_content != null)), {
		input: U,
		warnings: W
	}
}
var Wx = u({
	itemId: a().nullish(),
	reasoningEncryptedContent: a().nullish()
});

function Xo({
	finishReason: e,
	hasFunctionCall: t
}) {
	switch (e) {
		case void 0:
		case null:
			return t ? "tool-calls" : "stop";
		case "max_output_tokens":
			return "length";
		case "content_filter":
			return "content-filter";
		default:
			return t ? "tool-calls" : "other"
	}
}
var Nn = Fr(() => le([a(), y(), _e(), Nu(), R(Nn), ke(a(), Nn.optional())])),
	Kx = u({
		id: a(),
		code: a().nullish(),
		message: a().nullish()
	}),
	bs = ye("type", [u({
		type: f("click"),
		button: Y(["left", "right", "wheel", "back", "forward"]),
		x: y(),
		y: y(),
		keys: R(a()).nullish()
	}), u({
		type: f("double_click"),
		x: y(),
		y: y(),
		keys: R(a()).nullish()
	}), u({
		type: f("drag"),
		path: R(u({
			x: y(),
			y: y()
		})),
		keys: R(a()).nullish()
	}), u({
		type: f("keypress"),
		keys: R(a())
	}), u({
		type: f("move"),
		x: y(),
		y: y(),
		keys: R(a()).nullish()
	}), u({
		type: f("screenshot")
	}), u({
		type: f("scroll"),
		x: y(),
		y: y(),
		scroll_x: y(),
		scroll_y: y(),
		keys: R(a()).nullish()
	}), u({
		type: f("type"),
		text: a()
	}), u({
		type: f("wait")
	})]),
	xr = u({
		type: f("computer_call"),
		id: a(),
		call_id: a().nullish(),
		status: Y(["in_progress", "completed", "incomplete"]),
		action: bs.nullish(),
		actions: R(bs).nullish(),
		pending_safety_checks: R(Kx).nullish()
	}),
	Yx = u({
		type: f("error"),
		sequence_number: y(),
		error: u({
			type: a(),
			code: a(),
			message: a(),
			param: a().nullish()
		})
	}),
	Xx = u({
		type: f("error"),
		sequence_number: y(),
		code: a().nullish(),
		message: a(),
		param: a().nullish()
	}),
	Qx = ee(() => Q(le([u({
		type: f("response.output_text.delta"),
		item_id: a(),
		delta: a(),
		logprobs: R(u({
			token: a(),
			logprob: y(),
			top_logprobs: R(u({
				token: a(),
				logprob: y()
			}))
		})).nullish()
	}), u({
		type: Y(["response.completed", "response.incomplete"]),
		response: u({
			incomplete_details: u({
				reason: a()
			}).nullish(),
			usage: u({
				input_tokens: y(),
				input_tokens_details: u({
					cached_tokens: y().nullish(),
					cache_write_tokens: y().nullish(),
					orchestration_input_tokens: y().nullish(),
					orchestration_input_cached_tokens: y().nullish()
				}).nullish(),
				output_tokens: y(),
				output_tokens_details: u({
					reasoning_tokens: y().nullish(),
					orchestration_output_tokens: y().nullish()
				}).nullish()
			}),
			reasoning: u({
				context: a().nullish()
			}).nullish(),
			service_tier: a().nullish()
		})
	}), u({
		type: f("response.failed"),
		sequence_number: y(),
		response: u({
			error: u({
				code: a().nullish(),
				message: a()
			}).nullish(),
			incomplete_details: u({
				reason: a()
			}).nullish(),
			usage: u({
				input_tokens: y(),
				input_tokens_details: u({
					cached_tokens: y().nullish(),
					cache_write_tokens: y().nullish(),
					orchestration_input_tokens: y().nullish(),
					orchestration_input_cached_tokens: y().nullish()
				}).nullish(),
				output_tokens: y(),
				output_tokens_details: u({
					reasoning_tokens: y().nullish(),
					orchestration_output_tokens: y().nullish()
				}).nullish()
			}).nullish(),
			reasoning: u({
				context: a().nullish()
			}).nullish(),
			service_tier: a().nullish()
		})
	}), u({
		type: f("response.created"),
		response: u({
			id: a(),
			created_at: y(),
			model: a(),
			service_tier: a().nullish()
		})
	}), u({
		type: f("response.output_item.added"),
		output_index: y(),
		item: ye("type", [u({
			type: f("message"),
			id: a(),
			phase: Y(["commentary", "final_answer"]).nullish()
		}), u({
			type: f("reasoning"),
			id: a(),
			encrypted_content: a().nullish()
		}), u({
			type: f("function_call"),
			id: a(),
			call_id: a(),
			name: a(),
			arguments: a(),
			namespace: a().nullish()
		}), u({
			type: f("web_search_call"),
			id: a(),
			status: a()
		}), xr, u({
			type: f("file_search_call"),
			id: a()
		}), u({
			type: f("image_generation_call"),
			id: a()
		}), u({
			type: f("code_interpreter_call"),
			id: a(),
			container_id: a(),
			code: a().nullable(),
			outputs: R(ye("type", [u({
				type: f("logs"),
				logs: a()
			}), u({
				type: f("image"),
				url: a()
			})])).nullable(),
			status: a()
		}), u({
			type: f("mcp_call"),
			id: a(),
			status: a(),
			approval_request_id: a().nullish()
		}), u({
			type: f("mcp_list_tools"),
			id: a()
		}), u({
			type: f("mcp_approval_request"),
			id: a()
		}), u({
			type: f("apply_patch_call"),
			id: a(),
			call_id: a(),
			status: Y(["in_progress", "completed"]),
			operation: ye("type", [u({
				type: f("create_file"),
				path: a(),
				diff: a()
			}), u({
				type: f("delete_file"),
				path: a()
			}), u({
				type: f("update_file"),
				path: a(),
				diff: a()
			})])
		}), u({
			type: f("custom_tool_call"),
			id: a(),
			call_id: a(),
			name: a(),
			input: a()
		}), u({
			type: f("shell_call"),
			id: a(),
			call_id: a(),
			status: Y(["in_progress", "completed", "incomplete"]),
			action: u({
				commands: R(a())
			})
		}), u({
			type: f("compaction"),
			id: a(),
			encrypted_content: a().nullish()
		}), u({
			type: f("shell_call_output"),
			id: a(),
			call_id: a(),
			status: Y(["in_progress", "completed", "incomplete"]),
			output: R(u({
				stdout: a(),
				stderr: a(),
				outcome: ye("type", [u({
					type: f("timeout")
				}), u({
					type: f("exit"),
					exit_code: y()
				})])
			}))
		}), u({
			type: f("tool_search_call"),
			id: a(),
			execution: Y(["server", "client"]),
			call_id: a().nullable(),
			status: Y(["in_progress", "completed", "incomplete"]),
			arguments: Se()
		}), u({
			type: f("tool_search_output"),
			id: a(),
			execution: Y(["server", "client"]),
			call_id: a().nullable(),
			status: Y(["in_progress", "completed", "incomplete"]),
			tools: R(ke(a(), Nn.optional()))
		})])
	}), u({
		type: f("response.output_item.done"),
		output_index: y(),
		item: ye("type", [u({
			type: f("message"),
			id: a(),
			phase: Y(["commentary", "final_answer"]).nullish()
		}), u({
			type: f("reasoning"),
			id: a(),
			encrypted_content: a().nullish()
		}), u({
			type: f("function_call"),
			id: a(),
			call_id: a(),
			name: a(),
			arguments: a(),
			status: f("completed"),
			namespace: a().nullish()
		}), u({
			type: f("custom_tool_call"),
			id: a(),
			call_id: a(),
			name: a(),
			input: a(),
			status: f("completed")
		}), u({
			type: f("code_interpreter_call"),
			id: a(),
			code: a().nullable(),
			container_id: a(),
			outputs: R(ye("type", [u({
				type: f("logs"),
				logs: a()
			}), u({
				type: f("image"),
				url: a()
			})])).nullable()
		}), u({
			type: f("image_generation_call"),
			id: a(),
			result: a()
		}), u({
			type: f("web_search_call"),
			id: a(),
			status: a(),
			action: ye("type", [u({
				type: f("search"),
				query: a().nullish(),
				queries: R(a()).nullish(),
				sources: R(ye("type", [u({
					type: f("url"),
					url: a()
				}), u({
					type: f("api"),
					name: a()
				})])).nullish()
			}), u({
				type: f("open_page"),
				url: a().nullish()
			}), u({
				type: f("find_in_page"),
				url: a().nullish(),
				pattern: a().nullish()
			})]).nullish()
		}), u({
			type: f("file_search_call"),
			id: a(),
			queries: R(a()),
			results: R(u({
				attributes: ke(a(), le([a(), y(), _e()])),
				file_id: a(),
				filename: a(),
				score: y(),
				text: a()
			})).nullish()
		}), u({
			type: f("local_shell_call"),
			id: a(),
			call_id: a(),
			action: u({
				type: f("exec"),
				command: R(a()),
				timeout_ms: y().optional(),
				user: a().optional(),
				working_directory: a().optional(),
				env: ke(a(), a()).optional()
			})
		}), xr, u({
			type: f("mcp_call"),
			id: a(),
			status: a(),
			arguments: a(),
			name: a(),
			server_label: a(),
			output: a().nullish(),
			error: le([a(), u({
				type: a().optional(),
				code: le([y(), a()]).optional(),
				message: a().optional()
			}).loose()]).nullish(),
			approval_request_id: a().nullish()
		}), u({
			type: f("mcp_list_tools"),
			id: a(),
			server_label: a(),
			tools: R(u({
				name: a(),
				description: a().optional(),
				input_schema: nt(),
				annotations: ke(a(), Se()).optional()
			})),
			error: le([a(), u({
				type: a().optional(),
				code: le([y(), a()]).optional(),
				message: a().optional()
			}).loose()]).optional()
		}), u({
			type: f("mcp_approval_request"),
			id: a(),
			server_label: a(),
			name: a(),
			arguments: a(),
			approval_request_id: a().optional()
		}), u({
			type: f("apply_patch_call"),
			id: a(),
			call_id: a(),
			status: Y(["in_progress", "completed"]),
			operation: ye("type", [u({
				type: f("create_file"),
				path: a(),
				diff: a()
			}), u({
				type: f("delete_file"),
				path: a()
			}), u({
				type: f("update_file"),
				path: a(),
				diff: a()
			})])
		}), u({
			type: f("shell_call"),
			id: a(),
			call_id: a(),
			status: Y(["in_progress", "completed", "incomplete"]),
			action: u({
				commands: R(a())
			})
		}), u({
			type: f("compaction"),
			id: a(),
			encrypted_content: a()
		}), u({
			type: f("shell_call_output"),
			id: a(),
			call_id: a(),
			status: Y(["in_progress", "completed", "incomplete"]),
			output: R(u({
				stdout: a(),
				stderr: a(),
				outcome: ye("type", [u({
					type: f("timeout")
				}), u({
					type: f("exit"),
					exit_code: y()
				})])
			}))
		}), u({
			type: f("tool_search_call"),
			id: a(),
			execution: Y(["server", "client"]),
			call_id: a().nullable(),
			status: Y(["in_progress", "completed", "incomplete"]),
			arguments: Se()
		}), u({
			type: f("tool_search_output"),
			id: a(),
			execution: Y(["server", "client"]),
			call_id: a().nullable(),
			status: Y(["in_progress", "completed", "incomplete"]),
			tools: R(ke(a(), Nn.optional()))
		})])
	}), u({
		type: f("response.function_call_arguments.delta"),
		item_id: a(),
		output_index: y(),
		delta: a()
	}), u({
		type: f("response.custom_tool_call_input.delta"),
		item_id: a(),
		output_index: y(),
		delta: a()
	}), u({
		type: f("response.image_generation_call.partial_image"),
		item_id: a(),
		output_index: y(),
		partial_image_b64: a()
	}), u({
		type: f("response.code_interpreter_call_code.delta"),
		item_id: a(),
		output_index: y(),
		delta: a()
	}), u({
		type: f("response.code_interpreter_call_code.done"),
		item_id: a(),
		output_index: y(),
		code: a()
	}), u({
		type: f("response.output_text.annotation.added"),
		annotation: ye("type", [u({
			type: f("url_citation"),
			start_index: y(),
			end_index: y(),
			url: a(),
			title: a()
		}), u({
			type: f("file_citation"),
			file_id: a(),
			filename: a(),
			index: y()
		}), u({
			type: f("container_file_citation"),
			container_id: a(),
			file_id: a(),
			filename: a(),
			start_index: y(),
			end_index: y()
		}), u({
			type: f("file_path"),
			file_id: a(),
			index: y()
		})])
	}), u({
		type: f("response.reasoning_summary_part.added"),
		item_id: a(),
		summary_index: y()
	}), u({
		type: f("response.reasoning_summary_text.delta"),
		item_id: a(),
		summary_index: y(),
		delta: a()
	}), u({
		type: f("response.reasoning_summary_part.done"),
		item_id: a(),
		summary_index: y()
	}), u({
		type: f("response.apply_patch_call_operation_diff.delta"),
		item_id: a(),
		output_index: y(),
		delta: a(),
		obfuscation: a().nullish()
	}), u({
		type: f("response.apply_patch_call_operation_diff.done"),
		item_id: a(),
		output_index: y(),
		diff: a()
	}), Yx, Xx, u({
		type: a()
	}).loose().transform(e => ({
		type: "unknown_chunk",
		message: e.type
	}))]))),
	eI = ee(() => Q(u({
		id: a().optional(),
		created_at: y().optional(),
		error: u({
			message: a(),
			type: a(),
			param: a().nullish(),
			code: a()
		}).nullish(),
		model: a().optional(),
		output: R(ye("type", [u({
			type: f("message"),
			role: f("assistant"),
			id: a(),
			phase: Y(["commentary", "final_answer"]).nullish(),
			content: R(u({
				type: f("output_text"),
				text: a(),
				logprobs: R(u({
					token: a(),
					logprob: y(),
					top_logprobs: R(u({
						token: a(),
						logprob: y()
					}))
				})).nullish(),
				annotations: R(ye("type", [u({
					type: f("url_citation"),
					start_index: y(),
					end_index: y(),
					url: a(),
					title: a()
				}), u({
					type: f("file_citation"),
					file_id: a(),
					filename: a(),
					index: y()
				}), u({
					type: f("container_file_citation"),
					container_id: a(),
					file_id: a(),
					filename: a(),
					start_index: y(),
					end_index: y()
				}), u({
					type: f("file_path"),
					file_id: a(),
					index: y()
				})]))
			}))
		}), u({
			type: f("web_search_call"),
			id: a(),
			status: a(),
			action: ye("type", [u({
				type: f("search"),
				query: a().nullish(),
				queries: R(a()).nullish(),
				sources: R(ye("type", [u({
					type: f("url"),
					url: a()
				}), u({
					type: f("api"),
					name: a()
				})])).nullish()
			}), u({
				type: f("open_page"),
				url: a().nullish()
			}), u({
				type: f("find_in_page"),
				url: a().nullish(),
				pattern: a().nullish()
			})]).nullish()
		}), u({
			type: f("file_search_call"),
			id: a(),
			queries: R(a()),
			results: R(u({
				attributes: ke(a(), le([a(), y(), _e()])),
				file_id: a(),
				filename: a(),
				score: y(),
				text: a()
			})).nullish()
		}), u({
			type: f("code_interpreter_call"),
			id: a(),
			code: a().nullable(),
			container_id: a(),
			outputs: R(ye("type", [u({
				type: f("logs"),
				logs: a()
			}), u({
				type: f("image"),
				url: a()
			})])).nullable()
		}), u({
			type: f("image_generation_call"),
			id: a(),
			result: a()
		}), u({
			type: f("local_shell_call"),
			id: a(),
			call_id: a(),
			action: u({
				type: f("exec"),
				command: R(a()),
				timeout_ms: y().optional(),
				user: a().optional(),
				working_directory: a().optional(),
				env: ke(a(), a()).optional()
			})
		}), u({
			type: f("function_call"),
			call_id: a(),
			name: a(),
			arguments: a(),
			id: a(),
			namespace: a().nullish()
		}), u({
			type: f("custom_tool_call"),
			call_id: a(),
			name: a(),
			input: a(),
			id: a()
		}), xr, u({
			type: f("reasoning"),
			id: a(),
			encrypted_content: a().nullish(),
			summary: R(u({
				type: f("summary_text"),
				text: a()
			}))
		}), u({
			type: f("mcp_call"),
			id: a(),
			status: a(),
			arguments: a(),
			name: a(),
			server_label: a(),
			output: a().nullish(),
			error: le([a(), u({
				type: a().optional(),
				code: le([y(), a()]).optional(),
				message: a().optional()
			}).loose()]).nullish(),
			approval_request_id: a().nullish()
		}), u({
			type: f("mcp_list_tools"),
			id: a(),
			server_label: a(),
			tools: R(u({
				name: a(),
				description: a().optional(),
				input_schema: nt(),
				annotations: ke(a(), Se()).optional()
			})),
			error: le([a(), u({
				type: a().optional(),
				code: le([y(), a()]).optional(),
				message: a().optional()
			}).loose()]).optional()
		}), u({
			type: f("mcp_approval_request"),
			id: a(),
			server_label: a(),
			name: a(),
			arguments: a(),
			approval_request_id: a().optional()
		}), u({
			type: f("apply_patch_call"),
			id: a(),
			call_id: a(),
			status: Y(["in_progress", "completed"]),
			operation: ye("type", [u({
				type: f("create_file"),
				path: a(),
				diff: a()
			}), u({
				type: f("delete_file"),
				path: a()
			}), u({
				type: f("update_file"),
				path: a(),
				diff: a()
			})])
		}), u({
			type: f("shell_call"),
			id: a(),
			call_id: a(),
			status: Y(["in_progress", "completed", "incomplete"]),
			action: u({
				commands: R(a())
			})
		}), u({
			type: f("compaction"),
			id: a(),
			encrypted_content: a()
		}), u({
			type: f("shell_call_output"),
			id: a(),
			call_id: a(),
			status: Y(["in_progress", "completed", "incomplete"]),
			output: R(u({
				stdout: a(),
				stderr: a(),
				outcome: ye("type", [u({
					type: f("timeout")
				}), u({
					type: f("exit"),
					exit_code: y()
				})])
			}))
		}), u({
			type: f("tool_search_call"),
			id: a(),
			execution: Y(["server", "client"]),
			call_id: a().nullable(),
			status: Y(["in_progress", "completed", "incomplete"]),
			arguments: Se()
		}), u({
			type: f("tool_search_output"),
			id: a(),
			execution: Y(["server", "client"]),
			call_id: a().nullable(),
			status: Y(["in_progress", "completed", "incomplete"]),
			tools: R(ke(a(), Nn.optional()))
		})])).optional(),
		service_tier: a().nullish(),
		reasoning: u({
			context: a().nullish()
		}).nullish(),
		incomplete_details: u({
			reason: a()
		}).nullish(),
		usage: u({
			input_tokens: y(),
			input_tokens_details: u({
				cached_tokens: y().nullish(),
				cache_write_tokens: y().nullish(),
				orchestration_input_tokens: y().nullish(),
				orchestration_input_cached_tokens: y().nullish()
			}).nullish(),
			output_tokens: y(),
			output_tokens_details: u({
				reasoning_tokens: y().nullish(),
				orchestration_output_tokens: y().nullish()
			}).nullish()
		}).optional()
	}))),
	Td = 20,
	ws = ee(() => Q(u({
		conversation: a().nullish(),
		include: R(Y(["reasoning.encrypted_content", "file_search_call.results", "web_search_call.results", "message.output_text.logprobs"])).nullish(),
		instructions: a().nullish(),
		logprobs: le([_e(), y().min(1).max(Td)]).optional(),
		maxToolCalls: y().nullish(),
		metadata: nt().nullish(),
		parallelToolCalls: _e().nullish(),
		previousResponseId: a().nullish(),
		promptCacheKey: a().nullish(),
		promptCacheOptions: u({
			mode: Y(["implicit", "explicit"]).optional(),
			ttl: f("30m").optional()
		}).optional(),
		promptCacheRetention: Y(["in_memory", "24h"]).nullish(),
		reasoningEffort: a().nullish(),
		reasoningMode: Y(["standard", "pro"]).optional(),
		reasoningContext: Y(["auto", "current_turn", "all_turns"]).optional(),
		reasoningSummary: a().nullish(),
		safetyIdentifier: a().nullish(),
		serviceTier: Y(["auto", "flex", "priority", "default"]).nullish(),
		store: _e().nullish(),
		passThroughUnsupportedFiles: _e().optional(),
		strictJsonSchema: _e().nullish(),
		textVerbosity: Y(["low", "medium", "high"]).nullish(),
		truncation: Y(["auto", "disabled"]).nullish(),
		user: a().nullish(),
		systemMessageMode: Y(["system", "developer", "remove"]).optional(),
		forceReasoning: _e().optional(),
		contextManagement: R(u({
			type: f("compaction"),
			compactThreshold: y()
		})).nullish(),
		allowedTools: u({
			toolNames: R(a()).min(1),
			mode: Y(["auto", "required"]).optional()
		}).optional()
	})));
async function tI({
	tools: e,
	toolChoice: t,
	allowedTools: n,
	toolNameMapping: o,
	customProviderToolNames: r
}) {
	var i, s, l;
	e = e != null && e.length ? e : void 0;
	const d = [];
	if (e == null) return {
		tools: void 0,
		toolChoice: void 0,
		toolWarnings: d
	};
	const c = [],
		p = new Map,
		m = r ?? new Set;
	for (const g of e) switch (g.type) {
		case "function": {
			const _ = (i = g.providerOptions) == null ? void 0 : i.openai,
				w = nI({
					tool: g,
					options: _
				}),
				k = _ == null ? void 0 : _.namespace;
			if (k == null) c.push(w);
			else {
				let A = p.get(k.name);
				if (A == null) A = {
					type: "namespace",
					name: k.name,
					description: k.description,
					tools: []
				}, p.set(k.name, A), c.push(A);
				else if (A.description !== k.description) throw new Oe({
					functionality: `conflicting descriptions for OpenAI tool namespace "${k.name}"`
				});
				A.tools.push(w)
			}
			break
		}
		case "provider": {
			switch (g.id) {
				case "openai.file_search": {
					const _ = await Te({
						value: g.args,
						schema: hx
					});
					c.push({
						type: "file_search",
						vector_store_ids: _.vectorStoreIds,
						max_num_results: _.maxNumResults,
						ranking_options: _.ranking ? {
							ranker: _.ranking.ranker,
							score_threshold: _.ranking.scoreThreshold
						} : void 0,
						filters: _.filters
					});
					break
				}
				case "openai.local_shell": {
					c.push({
						type: "local_shell"
					});
					break
				}
				case "openai.shell": {
					const _ = await Te({
						value: g.args,
						schema: Ix
					});
					c.push({
						type: "shell",
						..._.environment && {
							environment: oI(_.environment)
						}
					});
					break
				}
				case "openai.apply_patch": {
					c.push({
						type: "apply_patch"
					});
					break
				}
				case "openai.computer": {
					c.push({
						type: "computer"
					});
					break
				}
				case "openai.web_search_preview": {
					const _ = await Te({
						value: g.args,
						schema: Px
					});
					c.push({
						type: "web_search_preview",
						search_context_size: _.searchContextSize,
						user_location: _.userLocation
					});
					break
				}
				case "openai.web_search": {
					const _ = await Te({
						value: g.args,
						schema: Ax
					});
					c.push({
						type: "web_search",
						filters: _.filters != null ? {
							allowed_domains: _.filters.allowedDomains
						} : void 0,
						external_web_access: _.externalWebAccess,
						search_context_size: _.searchContextSize,
						user_location: _.userLocation
					});
					break
				}
				case "openai.code_interpreter": {
					const _ = await Te({
						value: g.args,
						schema: rx
					});
					c.push({
						type: "code_interpreter",
						container: _.container == null ? {
							type: "auto",
							file_ids: void 0
						} : typeof _.container == "string" ? _.container : {
							type: "auto",
							file_ids: _.container.fileIds
						}
					});
					break
				}
				case "openai.image_generation": {
					const _ = await Te({
						value: g.args,
						schema: gx
					});
					c.push({
						type: "image_generation",
						background: _.background,
						input_fidelity: _.inputFidelity,
						input_image_mask: _.inputImageMask ? {
							file_id: _.inputImageMask.fileId,
							image_url: _.inputImageMask.imageUrl
						} : void 0,
						model: _.model,
						moderation: _.moderation,
						partial_images: _.partialImages,
						quality: _.quality,
						output_compression: _.outputCompression,
						output_format: _.outputFormat,
						size: _.size
					});
					break
				}
				case "openai.mcp": {
					const _ = await Te({
							value: g.args,
							schema: qx
						}),
						w = I => ({
							tool_names: I.toolNames
						}),
						k = _.requireApproval,
						A = k == null ? void 0 : typeof k == "string" ? k : k.never != null ? {
							never: w(k.never)
						} : void 0;
					c.push({
						type: "mcp",
						server_label: _.serverLabel,
						allowed_tools: Array.isArray(_.allowedTools) ? _.allowedTools : _.allowedTools ? {
							read_only: _.allowedTools.readOnly,
							tool_names: _.allowedTools.toolNames
						} : void 0,
						authorization: _.authorization,
						connector_id: _.connectorId,
						headers: _.headers,
						require_approval: A ?? "never",
						server_description: _.serverDescription,
						server_url: _.serverUrl
					});
					break
				}
				case "openai.custom": {
					const _ = await Te({
						value: g.args,
						schema: cx
					});
					c.push({
						type: "custom",
						name: g.name,
						description: _.description,
						format: _.format
					}), m.add(g.name);
					break
				}
				case "openai.tool_search": {
					const _ = await Te({
						value: g.args,
						schema: Sx
					});
					c.push({
						type: "tool_search",
						..._.execution != null ? {
							execution: _.execution
						} : {},
						..._.description != null ? {
							description: _.description
						} : {},
						..._.parameters != null ? {
							parameters: _.parameters
						} : {}
					});
					break
				}
			}
			break
		}
		default:
			d.push({
				type: "unsupported",
				feature: `function tool ${g}`
			});
			break
	}
	if (n != null) return {
		tools: c,
		toolChoice: {
			type: "allowed_tools",
			mode: (s = n.mode) != null ? s : "auto",
			tools: n.toolNames.map(g => {
				var _;
				return {
					type: "function",
					name: (_ = o == null ? void 0 : o.toProviderToolName(g)) != null ? _ : g
				}
			})
		},
		toolWarnings: d
	};
	if (t == null) return {
		tools: c,
		toolChoice: void 0,
		toolWarnings: d
	};
	const h = t.type;
	switch (h) {
		case "auto":
		case "none":
		case "required":
			return {
				tools: c, toolChoice: h, toolWarnings: d
			};
		case "tool": {
			const g = (l = o == null ? void 0 : o.toProviderToolName(t.toolName)) != null ? l : t.toolName;
			return {
				tools: c,
				toolChoice: g === "code_interpreter" || g === "file_search" || g === "image_generation" || g === "web_search_preview" || g === "web_search" || g === "mcp" || g === "apply_patch" || g === "computer" ? {
					type: g
				} : m.has(g) ? {
					type: "custom",
					name: g
				} : {
					type: "function",
					name: g
				},
				toolWarnings: d
			}
		}
		default: {
			const g = h;
			throw new Oe({
				functionality: `tool choice type: ${g}`
			})
		}
	}
}

function nI({
	tool: e,
	options: t
}) {
	const n = t == null ? void 0 : t.deferLoading;
	return {
		type: "function",
		name: e.name,
		description: e.description,
		parameters: e.inputSchema,
		...e.strict != null ? {
			strict: e.strict
		} : {},
		...n != null ? {
			defer_loading: n
		} : {}
	}
}

function oI(e) {
	if (e.type === "containerReference") return {
		type: "container_reference",
		container_id: e.containerId
	};
	if (e.type === "containerAuto") {
		const n = e;
		return {
			type: "container_auto",
			file_ids: n.fileIds,
			memory_limit: n.memoryLimit,
			network_policy: n.networkPolicy == null ? void 0 : n.networkPolicy.type === "disabled" ? {
				type: "disabled"
			} : {
				type: "allowlist",
				allowed_domains: n.networkPolicy.allowedDomains,
				domain_secrets: n.networkPolicy.domainSecrets
			},
			skills: rI(n.skills)
		}
	}
	return {
		type: "local",
		skills: e.skills
	}
}

function rI(e) {
	return e == null ? void 0 : e.map(t => {
		var n, o;
		return t.type === "skillReference" ? {
			type: "skill_reference",
			skill_id: zt({
				reference: (n = t.providerReference) != null ? n : {},
				provider: "openai"
			}),
			version: (o = t.version) != null ? o : "latest"
		} : {
			type: "inline",
			name: t.name,
			description: t.description,
			source: {
				type: "base64",
				media_type: t.source.mediaType,
				data: t.source.data
			}
		}
	})
}

function ks(e) {
	var t, n;
	const o = {};
	for (const r of e)
		if (r.role === "assistant")
			for (const i of r.content) {
				if (i.type !== "tool-call") continue;
				const s = (n = (t = i.providerOptions) == null ? void 0 : t.openai) == null ? void 0 : n.approvalRequestId;
				s != null && (o[s] = i.toolCallId)
			}
	return o
}

function iI(e) {
	switch (e.type) {
		case "click":
			return {
				type: "click", button: e.button, x: e.x, y: e.y, ...e.keys != null && {
					keys: e.keys
				}
			};
		case "double_click":
			return {
				type: "double_click", x: e.x, y: e.y, ...e.keys != null && {
					keys: e.keys
				}
			};
		case "drag":
			return {
				type: "drag", path: e.path, ...e.keys != null && {
					keys: e.keys
				}
			};
		case "keypress":
			return e;
		case "move":
			return {
				type: "move", x: e.x, y: e.y, ...e.keys != null && {
					keys: e.keys
				}
			};
		case "screenshot":
			return e;
		case "scroll":
			return {
				type: "scroll", x: e.x, y: e.y, scrollX: e.scroll_x, scrollY: e.scroll_y, ...e.keys != null && {
					keys: e.keys
				}
			};
		case "type":
			return e;
		case "wait":
			return e
	}
}

function xs({
	action: e,
	actions: t,
	pending_safety_checks: n,
	status: o
}) {
	var r;
	return {
		actions: (t ?? (e != null ? [e] : [])).map(iI),
		pendingSafetyChecks: (r = n == null ? void 0 : n.map(i => ({
			id: i.id,
			...i.code != null && {
				code: i.code
			},
			...i.message != null && {
				message: i.message
			}
		}))) != null ? r : [],
		status: o
	}
}
var aI = class Sd {
	constructor(t, n) {
		this.specificationVersion = "v4", this.supportedUrls = {
			"image/*": [/^https?:\/\/.*$/],
			"application/pdf": [/^https?:\/\/.*$/]
		}, this.modelId = t, this.config = n
	}
	static[Qe](t) {
		return tt({
			modelId: t.modelId,
			config: t.config
		})
	}
	static[et](t) {
		return new Sd(t.modelId, t.config)
	}
	get provider() {
		return this.config.provider
	}
	async getArgs({
		maxOutputTokens: t,
		temperature: n,
		stopSequences: o,
		topP: r,
		topK: i,
		presencePenalty: s,
		frequencyPenalty: l,
		seed: d,
		prompt: c,
		reasoning: p,
		providerOptions: m,
		tools: h,
		toolChoice: g,
		responseFormat: _
	}) {
		var w, k, A, I, E, S, v, b, T, q, L, O;
		const B = [],
			F = ud(this.modelId);
		i != null && B.push({
			type: "unsupported",
			feature: "topK"
		}), d != null && B.push({
			type: "unsupported",
			feature: "seed"
		}), s != null && B.push({
			type: "unsupported",
			feature: "presencePenalty"
		}), l != null && B.push({
			type: "unsupported",
			feature: "frequencyPenalty"
		}), o != null && B.push({
			type: "unsupported",
			feature: "stopSequences"
		});
		const z = this.config.provider.includes("azure") ? "azure" : "openai";
		let N = await xe({
			provider: z,
			providerOptions: m,
			schema: ws
		});
		N == null && z !== "openai" && (N = await xe({
			provider: "openai",
			providerOptions: m,
			schema: ws
		}));
		const oe = (w = N == null ? void 0 : N.reasoningEffort) != null ? w : vn(p) ? p : void 0,
			te = (N == null ? void 0 : N.reasoningSummary) !== void 0 ? N.reasoningSummary : oe != null && oe !== "none" ? "detailed" : void 0,
			P = (k = N == null ? void 0 : N.forceReasoning) != null ? k : F.isReasoningModel;
		N != null && N.conversation && (N != null && N.previousResponseId) && B.push({
			type: "unsupported",
			feature: "conversation",
			details: "conversation and previousResponseId cannot be used together"
		});
		const H = Lu({
				tools: h,
				providerToolNames: {
					"openai.code_interpreter": "code_interpreter",
					"openai.computer": "computer",
					"openai.file_search": "file_search",
					"openai.image_generation": "image_generation",
					"openai.local_shell": "local_shell",
					"openai.shell": "shell",
					"openai.web_search": "web_search",
					"openai.web_search_preview": "web_search_preview",
					"openai.mcp": "mcp",
					"openai.apply_patch": "apply_patch",
					"openai.tool_search": "tool_search"
				}
			}),
			ge = new Set,
			{
				tools: J,
				toolChoice: M,
				toolWarnings: se
			} = await tI({
				tools: h,
				toolChoice: g,
				allowedTools: (A = N == null ? void 0 : N.allowedTools) != null ? A : void 0,
				toolNameMapping: H,
				customProviderToolNames: ge
			}),
			{
				input: U,
				warnings: W
			} = await Jx({
				prompt: c,
				toolNameMapping: H,
				systemMessageMode: (I = N == null ? void 0 : N.systemMessageMode) != null ? I : P ? "developer" : F.systemMessageMode,
				providerOptionsName: z,
				fileIdPrefixes: this.config.fileIdPrefixes,
				passThroughUnsupportedFiles: (E = N == null ? void 0 : N.passThroughUnsupportedFiles) != null ? E : !1,
				store: (S = N == null ? void 0 : N.store) != null ? S : !0,
				hasConversation: (N == null ? void 0 : N.conversation) != null,
				hasPreviousResponseId: (N == null ? void 0 : N.previousResponseId) != null,
				hasLocalShellTool: X("openai.local_shell"),
				hasShellTool: X("openai.shell"),
				hasApplyPatchTool: X("openai.apply_patch"),
				hasComputerTool: X("openai.computer"),
				customProviderToolNames: ge.size > 0 ? ge : void 0
			});
		B.push(...W);
		const ce = (v = N == null ? void 0 : N.strictJsonSchema) != null ? v : !0;
		let ne = N == null ? void 0 : N.include;

		function de(C) {
			ne == null ? ne = [C] : ne.includes(C) || (ne = [...ne, C])
		}

		function X(C) {
			return (h == null ? void 0 : h.find(G => G.type === "provider" && G.id === C)) != null
		}
		const V = typeof(N == null ? void 0 : N.logprobs) == "number" ? N == null ? void 0 : N.logprobs : (N == null ? void 0 : N.logprobs) === !0 ? Td : void 0;
		V && de("message.output_text.logprobs");
		const j = (b = h == null ? void 0 : h.find(C => C.type === "provider" && (C.id === "openai.web_search" || C.id === "openai.web_search_preview"))) == null ? void 0 : b.name;
		j && de("web_search_call.action.sources"), X("openai.code_interpreter") && de("code_interpreter_call.outputs");
		const ae = N == null ? void 0 : N.store;
		ae === !1 && P && de("reasoning.encrypted_content");
		const Z = {
			model: this.modelId,
			input: U,
			temperature: n,
			top_p: r,
			max_output_tokens: t,
			...((_ == null ? void 0 : _.type) === "json" || (N == null ? void 0 : N.textVerbosity)) && {
				text: {
					...(_ == null ? void 0 : _.type) === "json" && {
						format: _.schema != null ? {
							type: "json_schema",
							strict: ce,
							name: (T = _.name) != null ? T : "response",
							description: _.description,
							schema: _.schema
						} : {
							type: "json_object"
						}
					},
					...(N == null ? void 0 : N.textVerbosity) && {
						verbosity: N.textVerbosity
					}
				}
			},
			conversation: N == null ? void 0 : N.conversation,
			max_tool_calls: N == null ? void 0 : N.maxToolCalls,
			metadata: N == null ? void 0 : N.metadata,
			parallel_tool_calls: N == null ? void 0 : N.parallelToolCalls,
			previous_response_id: N == null ? void 0 : N.previousResponseId,
			store: ae,
			user: N == null ? void 0 : N.user,
			instructions: N == null ? void 0 : N.instructions,
			service_tier: N == null ? void 0 : N.serviceTier,
			include: ne,
			prompt_cache_key: N == null ? void 0 : N.promptCacheKey,
			prompt_cache_options: N == null ? void 0 : N.promptCacheOptions,
			prompt_cache_retention: N == null ? void 0 : N.promptCacheRetention,
			safety_identifier: N == null ? void 0 : N.safetyIdentifier,
			top_logprobs: V,
			truncation: N == null ? void 0 : N.truncation,
			...(N == null ? void 0 : N.contextManagement) && {
				context_management: N.contextManagement.map(C => ({
					type: C.type,
					compact_threshold: C.compactThreshold
				}))
			},
			...P && (oe != null || te != null || (N == null ? void 0 : N.reasoningMode) != null || (N == null ? void 0 : N.reasoningContext) != null) && {
				reasoning: {
					...oe != null && {
						effort: oe
					},
					...te != null && {
						summary: te
					},
					...(N == null ? void 0 : N.reasoningMode) != null && {
						mode: N.reasoningMode
					},
					...(N == null ? void 0 : N.reasoningContext) != null && {
						context: N.reasoningContext
					}
				}
			}
		};
		P ? oe === "none" && F.supportsNonReasoningParameters || (Z.temperature != null && (Z.temperature = void 0, B.push({
			type: "unsupported",
			feature: "temperature",
			details: "temperature is not supported for reasoning models"
		})), Z.top_p != null && (Z.top_p = void 0, B.push({
			type: "unsupported",
			feature: "topP",
			details: "topP is not supported for reasoning models"
		}))) : ((N == null ? void 0 : N.reasoningEffort) != null && B.push({
			type: "unsupported",
			feature: "reasoningEffort",
			details: "reasoningEffort is not supported for non-reasoning models"
		}), (N == null ? void 0 : N.reasoningSummary) != null && B.push({
			type: "unsupported",
			feature: "reasoningSummary",
			details: "reasoningSummary is not supported for non-reasoning models"
		}), (N == null ? void 0 : N.reasoningMode) != null && B.push({
			type: "unsupported",
			feature: "reasoningMode",
			details: "reasoningMode is not supported for non-reasoning models"
		}), (N == null ? void 0 : N.reasoningContext) != null && B.push({
			type: "unsupported",
			feature: "reasoningContext",
			details: "reasoningContext is not supported for non-reasoning models"
		})), (N == null ? void 0 : N.serviceTier) === "flex" && !F.supportsFlexProcessing && (B.push({
			type: "unsupported",
			feature: "serviceTier",
			details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
		}), delete Z.service_tier), (N == null ? void 0 : N.serviceTier) === "priority" && !F.supportsPriorityProcessing && (B.push({
			type: "unsupported",
			feature: "serviceTier",
			details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
		}), delete Z.service_tier);
		const x = (O = (L = (q = h == null ? void 0 : h.find(C => C.type === "provider" && C.id === "openai.shell")) == null ? void 0 : q.args) == null ? void 0 : L.environment) == null ? void 0 : O.type,
			D = x === "containerAuto" || x === "containerReference";
		return {
			webSearchToolName: j,
			args: {
				...Z,
				tools: J,
				tool_choice: M
			},
			warnings: [...B, ...se],
			store: ae,
			toolNameMapping: H,
			providerOptionsName: z,
			isShellProviderExecuted: D
		}
	}
	async doGenerate(t) {
		var n, o, r, i, s, l, d, c, p, m, h, g, _, w, k, A, I, E, S, v, b, T, q, L, O, B, F, z, N, oe, te, P;
		const {
			args: H,
			warnings: ge,
			webSearchToolName: J,
			toolNameMapping: M,
			providerOptionsName: se,
			isShellProviderExecuted: U
		} = await this.getArgs(t), W = this.config.url({
			path: "/responses",
			modelId: this.modelId
		}), ce = ks(t.prompt), {
			responseHeaders: ne,
			value: de,
			rawValue: X
		} = await Ue({
			url: W,
			headers: Ce((o = (n = this.config).headers) == null ? void 0 : o.call(n), t.headers),
			body: H,
			failedResponseHandler: pt,
			successfulResponseHandler: Me(eI),
			abortSignal: t.abortSignal,
			fetch: this.config.fetch
		});
		if (de.error) throw new He({
			message: de.error.message,
			url: W,
			requestBodyValues: H,
			statusCode: 400,
			responseHeaders: ne,
			responseBody: X,
			isRetryable: !1
		});
		if (de.output == null) {
			const C = (r = de.incomplete_details) == null ? void 0 : r.reason;
			throw new He({
				message: C ? `Responses API returned no output (${C})` : "Responses API returned no output",
				url: W,
				requestBodyValues: H,
				statusCode: 500,
				responseHeaders: ne,
				responseBody: X,
				isRetryable: !1
			})
		}
		const V = [],
			j = [];
		let ae = !1;
		const Z = [];
		for (const C of de.output) switch (C.type) {
			case "reasoning": {
				C.summary.length === 0 && C.summary.push({
					type: "summary_text",
					text: ""
				});
				for (const G of C.summary) V.push({
					type: "reasoning",
					text: G.text,
					providerMetadata: {
						[se]: {
							itemId: C.id,
							reasoningEncryptedContent: (i = C.encrypted_content) != null ? i : null
						}
					}
				});
				break
			}
			case "image_generation_call": {
				V.push({
					type: "tool-call",
					toolCallId: C.id,
					toolName: M.toCustomToolName("image_generation"),
					input: "{}",
					providerExecuted: !0
				}), V.push({
					type: "tool-result",
					toolCallId: C.id,
					toolName: M.toCustomToolName("image_generation"),
					result: {
						result: C.result
					}
				});
				break
			}
			case "tool_search_call": {
				const G = (s = C.call_id) != null ? s : C.id,
					me = C.execution === "server";
				me && Z.push(G), V.push({
					type: "tool-call",
					toolCallId: G,
					toolName: M.toCustomToolName("tool_search"),
					input: JSON.stringify({
						arguments: C.arguments,
						call_id: C.call_id
					}),
					...me ? {
						providerExecuted: !0
					} : {},
					providerMetadata: {
						[se]: {
							itemId: C.id
						}
					}
				});
				break
			}
			case "tool_search_output": {
				const G = (d = (l = C.call_id) != null ? l : Z.shift()) != null ? d : C.id;
				V.push({
					type: "tool-result",
					toolCallId: G,
					toolName: M.toCustomToolName("tool_search"),
					result: {
						tools: C.tools
					},
					providerMetadata: {
						[se]: {
							itemId: C.id
						}
					}
				});
				break
			}
			case "local_shell_call": {
				V.push({
					type: "tool-call",
					toolCallId: C.call_id,
					toolName: M.toCustomToolName("local_shell"),
					input: JSON.stringify({
						action: C.action
					}),
					providerMetadata: {
						[se]: {
							itemId: C.id
						}
					}
				});
				break
			}
			case "shell_call": {
				V.push({
					type: "tool-call",
					toolCallId: C.call_id,
					toolName: M.toCustomToolName("shell"),
					input: JSON.stringify({
						action: {
							commands: C.action.commands
						}
					}),
					...U && {
						providerExecuted: !0
					},
					providerMetadata: {
						[se]: {
							itemId: C.id
						}
					}
				});
				break
			}
			case "shell_call_output": {
				V.push({
					type: "tool-result",
					toolCallId: C.call_id,
					toolName: M.toCustomToolName("shell"),
					result: {
						output: C.output.map(G => ({
							stdout: G.stdout,
							stderr: G.stderr,
							outcome: G.outcome.type === "exit" ? {
								type: "exit",
								exitCode: G.outcome.exit_code
							} : {
								type: "timeout"
							}
						}))
					}
				});
				break
			}
			case "message": {
				for (const G of C.content) {
					(p = (c = t.providerOptions) == null ? void 0 : c[se]) != null && p.logprobs && G.logprobs && j.push(G.logprobs);
					const me = {
						itemId: C.id,
						...C.phase != null && {
							phase: C.phase
						},
						...G.annotations.length > 0 && {
							annotations: G.annotations
						}
					};
					V.push({
						type: "text",
						text: G.text,
						providerMetadata: {
							[se]: me
						}
					});
					for (const fe of G.annotations) fe.type === "url_citation" ? V.push({
						type: "source",
						sourceType: "url",
						id: (g = (h = (m = this.config).generateId) == null ? void 0 : h.call(m)) != null ? g : ze(),
						url: fe.url,
						title: fe.title
					}) : fe.type === "file_citation" ? V.push({
						type: "source",
						sourceType: "document",
						id: (k = (w = (_ = this.config).generateId) == null ? void 0 : w.call(_)) != null ? k : ze(),
						mediaType: "text/plain",
						title: fe.filename,
						filename: fe.filename,
						providerMetadata: {
							[se]: {
								type: fe.type,
								fileId: fe.file_id,
								index: fe.index
							}
						}
					}) : fe.type === "container_file_citation" ? V.push({
						type: "source",
						sourceType: "document",
						id: (E = (I = (A = this.config).generateId) == null ? void 0 : I.call(A)) != null ? E : ze(),
						mediaType: "text/plain",
						title: fe.filename,
						filename: fe.filename,
						providerMetadata: {
							[se]: {
								type: fe.type,
								fileId: fe.file_id,
								containerId: fe.container_id
							}
						}
					}) : fe.type === "file_path" && V.push({
						type: "source",
						sourceType: "document",
						id: (b = (v = (S = this.config).generateId) == null ? void 0 : v.call(S)) != null ? b : ze(),
						mediaType: "application/octet-stream",
						title: fe.file_id,
						filename: fe.file_id,
						providerMetadata: {
							[se]: {
								type: fe.type,
								fileId: fe.file_id,
								index: fe.index
							}
						}
					})
				}
				break
			}
			case "function_call": {
				ae = !0, V.push({
					type: "tool-call",
					toolCallId: C.call_id,
					toolName: C.name,
					input: C.arguments,
					providerMetadata: {
						[se]: {
							itemId: C.id,
							...C.namespace != null && {
								namespace: C.namespace
							}
						}
					}
				});
				break
			}
			case "custom_tool_call": {
				ae = !0;
				const G = M.toCustomToolName(C.name);
				V.push({
					type: "tool-call",
					toolCallId: C.call_id,
					toolName: G,
					input: JSON.stringify(C.input),
					providerMetadata: {
						[se]: {
							itemId: C.id
						}
					}
				});
				break
			}
			case "web_search_call": {
				V.push({
					type: "tool-call",
					toolCallId: C.id,
					toolName: M.toCustomToolName(J ?? "web_search"),
					input: JSON.stringify({}),
					providerExecuted: !0
				}), V.push({
					type: "tool-result",
					toolCallId: C.id,
					toolName: M.toCustomToolName(J ?? "web_search"),
					result: Cs(C.action)
				});
				break
			}
			case "mcp_call": {
				const G = C.approval_request_id != null && (T = ce[C.approval_request_id]) != null ? T : C.id,
					me = `mcp.${C.name}`;
				V.push({
					type: "tool-call",
					toolCallId: G,
					toolName: me,
					input: C.arguments,
					providerExecuted: !0,
					dynamic: !0
				}), V.push({
					type: "tool-result",
					toolCallId: G,
					toolName: me,
					result: {
						type: "call",
						serverLabel: C.server_label,
						name: C.name,
						arguments: C.arguments,
						...C.output != null ? {
							output: C.output
						} : {},
						...C.error != null ? {
							error: C.error
						} : {}
					},
					providerMetadata: {
						[se]: {
							itemId: C.id
						}
					}
				});
				break
			}
			case "mcp_list_tools":
				break;
			case "mcp_approval_request": {
				const G = (q = C.approval_request_id) != null ? q : C.id,
					me = (B = (O = (L = this.config).generateId) == null ? void 0 : O.call(L)) != null ? B : ze(),
					fe = `mcp.${C.name}`;
				V.push({
					type: "tool-call",
					toolCallId: me,
					toolName: fe,
					input: C.arguments,
					providerExecuted: !0,
					dynamic: !0
				}), V.push({
					type: "tool-approval-request",
					approvalId: G,
					toolCallId: me
				});
				break
			}
			case "computer_call": {
				if (C.call_id == null) {
					V.push({
						type: "tool-call",
						toolCallId: C.id,
						toolName: M.toCustomToolName("computer_use"),
						input: "",
						providerExecuted: !0
					}), V.push({
						type: "tool-result",
						toolCallId: C.id,
						toolName: M.toCustomToolName("computer_use"),
						result: {
							type: "computer_use_tool_result",
							status: C.status
						}
					});
					break
				}
				ae = !0;
				const G = M.toCustomToolName("computer");
				V.push({
					type: "tool-call",
					toolCallId: C.call_id,
					toolName: G,
					input: JSON.stringify(xs(C)),
					providerMetadata: {
						[se]: {
							itemId: C.id
						}
					}
				});
				break
			}
			case "file_search_call": {
				V.push({
					type: "tool-call",
					toolCallId: C.id,
					toolName: M.toCustomToolName("file_search"),
					input: "{}",
					providerExecuted: !0
				}), V.push({
					type: "tool-result",
					toolCallId: C.id,
					toolName: M.toCustomToolName("file_search"),
					result: {
						queries: C.queries,
						results: (z = (F = C.results) == null ? void 0 : F.map(G => ({
							attributes: G.attributes,
							fileId: G.file_id,
							filename: G.filename,
							score: G.score,
							text: G.text
						}))) != null ? z : null
					}
				});
				break
			}
			case "code_interpreter_call": {
				V.push({
					type: "tool-call",
					toolCallId: C.id,
					toolName: M.toCustomToolName("code_interpreter"),
					input: JSON.stringify({
						code: C.code,
						containerId: C.container_id
					}),
					providerExecuted: !0
				}), V.push({
					type: "tool-result",
					toolCallId: C.id,
					toolName: M.toCustomToolName("code_interpreter"),
					result: {
						outputs: C.outputs
					}
				});
				break
			}
			case "apply_patch_call": {
				V.push({
					type: "tool-call",
					toolCallId: C.call_id,
					toolName: M.toCustomToolName("apply_patch"),
					input: JSON.stringify({
						callId: C.call_id,
						operation: C.operation
					}),
					providerMetadata: {
						[se]: {
							itemId: C.id
						}
					}
				});
				break
			}
			case "compaction": {
				V.push({
					type: "custom",
					kind: "openai.compaction",
					providerMetadata: {
						[se]: {
							type: "compaction",
							itemId: C.id,
							encryptedContent: C.encrypted_content
						}
					}
				});
				break
			}
		}
		const x = {
				[se]: {
					responseId: de.id,
					...j.length > 0 ? {
						logprobs: j
					} : {},
					...typeof de.service_tier == "string" ? {
						serviceTier: de.service_tier
					} : {},
					...((N = de.reasoning) == null ? void 0 : N.context) != null ? {
						reasoningContext: de.reasoning.context
					} : {}
				}
			},
			D = de.usage;
		return {
			content: V,
			finishReason: {
				unified: Xo({
					finishReason: (oe = de.incomplete_details) == null ? void 0 : oe.reason,
					hasFunctionCall: ae
				}),
				raw: (P = (te = de.incomplete_details) == null ? void 0 : te.reason) != null ? P : void 0
			},
			usage: ys(D),
			request: {
				body: H
			},
			response: {
				id: de.id,
				timestamp: new Date(de.created_at * 1e3),
				modelId: de.model,
				headers: ne,
				body: X
			},
			providerMetadata: x,
			warnings: ge
		}
	}
	async doStream(t) {
		var n, o;
		const {
			args: r,
			warnings: i,
			webSearchToolName: s,
			toolNameMapping: l,
			store: d,
			providerOptionsName: c,
			isShellProviderExecuted: p
		} = await this.getArgs(t), m = this.config.url({
			path: "/responses",
			modelId: this.modelId
		}), {
			responseHeaders: h,
			value: g
		} = await Ue({
			url: m,
			headers: Ce((o = (n = this.config).headers) == null ? void 0 : o.call(n), t.headers),
			body: {
				...r,
				stream: !0
			},
			failedResponseHandler: pt,
			successfulResponseHandler: Dt(Qx),
			abortSignal: t.abortSignal,
			fetch: this.config.fetch
		}), _ = await ti({
			stream: g,
			getError: te => Ss(te) || Is(te) && te.response.error != null ? te : void 0,
			isOutputChunk: kI,
			url: m,
			requestBodyValues: r,
			responseHeaders: h
		}), w = this, k = ks(t.prompt), A = new Map;
		let I = {
				unified: "other",
				raw: void 0
			},
			E;
		const S = [];
		let v = null;
		const b = {},
			T = [];
		let q, L = !1;
		const O = {};
		let B, F;
		const z = [];
		let N = !1;
		return {
			stream: _.pipeThrough(new TransformStream({
				start(te) {
					te.enqueue({
						type: "stream-start",
						warnings: i
					})
				},
				transform(te, P) {
					var H, ge, J, M, se, U, W, ce, ne, de, X, V, j, ae, Z, x, D, C, G, me, fe, pe, be, we, We, Ve, Zn, Fn, Bn, Vn, ve, wn, si, li, ui, ci, di, pi, mi, hi, fi;
					if (t.includeRawChunks && P.enqueue({
							type: "raw",
							rawValue: te.rawValue
						}), !te.success) {
						const re = lI(te.rawValue) ? uI({
							value: te.rawValue,
							cause: te.error,
							url: m,
							requestBodyValues: r,
							responseHeaders: h
						}) : te.error;
						I = {
							unified: "error",
							raw: void 0
						}, P.enqueue({
							type: "error",
							error: re
						});
						return
					}
					const $ = te.value;
					if (Ts($)) {
						if ($.item.type === "function_call") b[$.output_index] = {
							toolName: $.item.name,
							toolCallId: $.item.call_id
						}, P.enqueue({
							type: "tool-input-start",
							id: $.item.call_id,
							toolName: $.item.name
						});
						else if ($.item.type === "custom_tool_call") {
							const re = l.toCustomToolName($.item.name);
							b[$.output_index] = {
								toolName: re,
								toolCallId: $.item.call_id
							}, P.enqueue({
								type: "tool-input-start",
								id: $.item.call_id,
								toolName: re
							})
						} else if ($.item.type === "web_search_call") b[$.output_index] = {
							toolName: l.toCustomToolName(s ?? "web_search"),
							toolCallId: $.item.id
						}, P.enqueue({
							type: "tool-input-start",
							id: $.item.id,
							toolName: l.toCustomToolName(s ?? "web_search"),
							providerExecuted: !0
						}), P.enqueue({
							type: "tool-input-end",
							id: $.item.id
						}), P.enqueue({
							type: "tool-call",
							toolCallId: $.item.id,
							toolName: l.toCustomToolName(s ?? "web_search"),
							input: JSON.stringify({}),
							providerExecuted: !0
						});
						else if ($.item.type === "computer_call") {
							const re = (H = $.item.call_id) != null ? H : $.item.id;
							b[$.output_index] = {
								toolName: l.toCustomToolName("computer"),
								toolCallId: re
							}, P.enqueue({
								type: "tool-input-start",
								id: re,
								toolName: l.toCustomToolName("computer")
							})
						} else if ($.item.type === "code_interpreter_call") b[$.output_index] = {
							toolName: l.toCustomToolName("code_interpreter"),
							toolCallId: $.item.id,
							codeInterpreter: {
								containerId: $.item.container_id
							}
						}, P.enqueue({
							type: "tool-input-start",
							id: $.item.id,
							toolName: l.toCustomToolName("code_interpreter"),
							providerExecuted: !0
						}), P.enqueue({
							type: "tool-input-delta",
							id: $.item.id,
							delta: `{"containerId":"${$.item.container_id}","code":"`
						});
						else if ($.item.type === "file_search_call") P.enqueue({
							type: "tool-call",
							toolCallId: $.item.id,
							toolName: l.toCustomToolName("file_search"),
							input: "{}",
							providerExecuted: !0
						});
						else if ($.item.type === "image_generation_call") P.enqueue({
							type: "tool-call",
							toolCallId: $.item.id,
							toolName: l.toCustomToolName("image_generation"),
							input: "{}",
							providerExecuted: !0
						});
						else if ($.item.type === "tool_search_call") {
							const re = $.item.id,
								Re = l.toCustomToolName("tool_search"),
								Ke = $.item.execution === "server";
							b[$.output_index] = {
								toolName: Re,
								toolCallId: re,
								toolSearchExecution: (ge = $.item.execution) != null ? ge : "server"
							}, Ke && P.enqueue({
								type: "tool-input-start",
								id: re,
								toolName: Re,
								providerExecuted: !0
							})
						} else if ($.item.type !== "tool_search_output") {
							if (!($.item.type === "mcp_call" || $.item.type === "mcp_list_tools" || $.item.type === "mcp_approval_request"))
								if ($.item.type === "apply_patch_call") {
									const {
										call_id: re,
										operation: Re
									} = $.item;
									if (b[$.output_index] = {
											toolName: l.toCustomToolName("apply_patch"),
											toolCallId: re,
											applyPatch: {
												hasDiff: Re.type === "delete_file",
												endEmitted: Re.type === "delete_file"
											}
										}, P.enqueue({
											type: "tool-input-start",
											id: re,
											toolName: l.toCustomToolName("apply_patch")
										}), Re.type === "delete_file") {
										const Ke = JSON.stringify({
											callId: re,
											operation: Re
										});
										P.enqueue({
											type: "tool-input-delta",
											id: re,
											delta: Ke
										}), P.enqueue({
											type: "tool-input-end",
											id: re
										})
									} else P.enqueue({
										type: "tool-input-delta",
										id: re,
										delta: `{"callId":"${Xt(re)}","operation":{"type":"${Xt(Re.type)}","path":"${Xt(Re.path)}","diff":"`
									})
								} else $.item.type === "shell_call" ? b[$.output_index] = {
									toolName: l.toCustomToolName("shell"),
									toolCallId: $.item.call_id
								} : $.item.type === "shell_call_output" || ($.item.type === "message" ? (T.splice(0, T.length), q = (J = $.item.phase) != null ? J : void 0, P.enqueue({
									type: "text-start",
									id: $.item.id,
									providerMetadata: {
										[c]: {
											itemId: $.item.id,
											...$.item.phase != null && {
												phase: $.item.phase
											}
										}
									}
								})) : Ts($) && $.item.type === "reasoning" && (O[$.item.id] = {
									encryptedContent: $.item.encrypted_content,
									summaryParts: {
										0: "active"
									}
								}, P.enqueue({
									type: "reasoning-start",
									id: `${$.item.id}:0`,
									providerMetadata: {
										[c]: {
											itemId: $.item.id,
											reasoningEncryptedContent: (M = $.item.encrypted_content) != null ? M : null
										}
									}
								})))
						}
					} else if (dI($))
						if ($.item.type === "message") {
							const re = (se = $.item.phase) != null ? se : q;
							q = void 0, P.enqueue({
								type: "text-end",
								id: $.item.id,
								providerMetadata: {
									[c]: {
										itemId: $.item.id,
										...re != null && {
											phase: re
										},
										...T.length > 0 && {
											annotations: T
										}
									}
								}
							})
						} else if ($.item.type === "function_call") b[$.output_index] = void 0, L = !0, P.enqueue({
						type: "tool-input-end",
						id: $.item.call_id,
						...$.item.namespace != null && {
							providerMetadata: {
								[c]: {
									namespace: $.item.namespace
								}
							}
						}
					}), P.enqueue({
						type: "tool-call",
						toolCallId: $.item.call_id,
						toolName: $.item.name,
						input: $.item.arguments,
						providerMetadata: {
							[c]: {
								itemId: $.item.id,
								...$.item.namespace != null && {
									namespace: $.item.namespace
								}
							}
						}
					});
					else if ($.item.type === "custom_tool_call") {
						b[$.output_index] = void 0, L = !0;
						const re = l.toCustomToolName($.item.name);
						P.enqueue({
							type: "tool-input-end",
							id: $.item.call_id
						}), P.enqueue({
							type: "tool-call",
							toolCallId: $.item.call_id,
							toolName: re,
							input: JSON.stringify($.item.input),
							providerMetadata: {
								[c]: {
									itemId: $.item.id
								}
							}
						})
					} else if ($.item.type === "web_search_call") b[$.output_index] = void 0, P.enqueue({
						type: "tool-result",
						toolCallId: $.item.id,
						toolName: l.toCustomToolName(s ?? "web_search"),
						result: Cs($.item.action)
					});
					else if ($.item.type === "computer_call") {
						if (b[$.output_index] = void 0, $.item.call_id == null) {
							P.enqueue({
								type: "tool-input-end",
								id: $.item.id
							}), P.enqueue({
								type: "tool-call",
								toolCallId: $.item.id,
								toolName: l.toCustomToolName("computer_use"),
								input: "",
								providerExecuted: !0
							}), P.enqueue({
								type: "tool-result",
								toolCallId: $.item.id,
								toolName: l.toCustomToolName("computer_use"),
								result: {
									type: "computer_use_tool_result",
									status: $.item.status
								}
							});
							return
						}
						L = !0;
						const re = l.toCustomToolName("computer"),
							Re = JSON.stringify(xs($.item));
						P.enqueue({
							type: "tool-input-delta",
							id: $.item.call_id,
							delta: Re
						}), P.enqueue({
							type: "tool-input-end",
							id: $.item.call_id
						}), P.enqueue({
							type: "tool-call",
							toolCallId: $.item.call_id,
							toolName: re,
							input: Re,
							providerMetadata: {
								[c]: {
									itemId: $.item.id
								}
							}
						})
					} else if ($.item.type === "file_search_call") b[$.output_index] = void 0, P.enqueue({
						type: "tool-result",
						toolCallId: $.item.id,
						toolName: l.toCustomToolName("file_search"),
						result: {
							queries: $.item.queries,
							results: (W = (U = $.item.results) == null ? void 0 : U.map(re => ({
								attributes: re.attributes,
								fileId: re.file_id,
								filename: re.filename,
								score: re.score,
								text: re.text
							}))) != null ? W : null
						}
					});
					else if ($.item.type === "code_interpreter_call") b[$.output_index] = void 0, P.enqueue({
						type: "tool-result",
						toolCallId: $.item.id,
						toolName: l.toCustomToolName("code_interpreter"),
						result: {
							outputs: $.item.outputs
						}
					});
					else if ($.item.type === "image_generation_call") P.enqueue({
						type: "tool-result",
						toolCallId: $.item.id,
						toolName: l.toCustomToolName("image_generation"),
						result: {
							result: $.item.result
						}
					});
					else if ($.item.type === "tool_search_call") {
						const re = b[$.output_index],
							Re = $.item.execution === "server";
						if (re != null) {
							const Ke = Re ? re.toolCallId : (ce = $.item.call_id) != null ? ce : $.item.id;
							Re ? z.push(Ke) : P.enqueue({
								type: "tool-input-start",
								id: Ke,
								toolName: re.toolName
							}), P.enqueue({
								type: "tool-input-end",
								id: Ke
							}), P.enqueue({
								type: "tool-call",
								toolCallId: Ke,
								toolName: re.toolName,
								input: JSON.stringify({
									arguments: $.item.arguments,
									call_id: Re ? null : Ke
								}),
								...Re ? {
									providerExecuted: !0
								} : {},
								providerMetadata: {
									[c]: {
										itemId: $.item.id
									}
								}
							})
						}
						b[$.output_index] = void 0
					} else if ($.item.type === "tool_search_output") {
						const re = (de = (ne = $.item.call_id) != null ? ne : z.shift()) != null ? de : $.item.id;
						P.enqueue({
							type: "tool-result",
							toolCallId: re,
							toolName: l.toCustomToolName("tool_search"),
							result: {
								tools: $.item.tools
							},
							providerMetadata: {
								[c]: {
									itemId: $.item.id
								}
							}
						})
					} else if ($.item.type === "mcp_call") {
						b[$.output_index] = void 0;
						const re = (X = $.item.approval_request_id) != null ? X : void 0,
							Re = re != null && (j = (V = A.get(re)) != null ? V : k[re]) != null ? j : $.item.id,
							Ke = `mcp.${$.item.name}`;
						P.enqueue({
							type: "tool-call",
							toolCallId: Re,
							toolName: Ke,
							input: $.item.arguments,
							providerExecuted: !0,
							dynamic: !0
						}), P.enqueue({
							type: "tool-result",
							toolCallId: Re,
							toolName: Ke,
							result: {
								type: "call",
								serverLabel: $.item.server_label,
								name: $.item.name,
								arguments: $.item.arguments,
								...$.item.output != null ? {
									output: $.item.output
								} : {},
								...$.item.error != null ? {
									error: $.item.error
								} : {}
							},
							providerMetadata: {
								[c]: {
									itemId: $.item.id
								}
							}
						})
					} else if ($.item.type === "mcp_list_tools") b[$.output_index] = void 0;
					else if ($.item.type === "apply_patch_call") {
						const re = b[$.output_index];
						re != null && re.applyPatch && !re.applyPatch.endEmitted && $.item.operation.type !== "delete_file" && (re.applyPatch.hasDiff || P.enqueue({
							type: "tool-input-delta",
							id: re.toolCallId,
							delta: Xt($.item.operation.diff)
						}), P.enqueue({
							type: "tool-input-delta",
							id: re.toolCallId,
							delta: '"}}'
						}), P.enqueue({
							type: "tool-input-end",
							id: re.toolCallId
						}), re.applyPatch.endEmitted = !0), re && $.item.status === "completed" && P.enqueue({
							type: "tool-call",
							toolCallId: re.toolCallId,
							toolName: l.toCustomToolName("apply_patch"),
							input: JSON.stringify({
								callId: $.item.call_id,
								operation: $.item.operation
							}),
							providerMetadata: {
								[c]: {
									itemId: $.item.id
								}
							}
						}), b[$.output_index] = void 0
					} else if ($.item.type === "mcp_approval_request") {
						b[$.output_index] = void 0;
						const re = (x = (Z = (ae = w.config).generateId) == null ? void 0 : Z.call(ae)) != null ? x : ze(),
							Re = (D = $.item.approval_request_id) != null ? D : $.item.id;
						A.set(Re, re);
						const Ke = `mcp.${$.item.name}`;
						P.enqueue({
							type: "tool-call",
							toolCallId: re,
							toolName: Ke,
							input: $.item.arguments,
							providerExecuted: !0,
							dynamic: !0
						}), P.enqueue({
							type: "tool-approval-request",
							approvalId: Re,
							toolCallId: re
						})
					} else if ($.item.type === "local_shell_call") b[$.output_index] = void 0, P.enqueue({
						type: "tool-call",
						toolCallId: $.item.call_id,
						toolName: l.toCustomToolName("local_shell"),
						input: JSON.stringify({
							action: {
								type: "exec",
								command: $.item.action.command,
								timeoutMs: $.item.action.timeout_ms,
								user: $.item.action.user,
								workingDirectory: $.item.action.working_directory,
								env: $.item.action.env
							}
						}),
						providerMetadata: {
							[c]: {
								itemId: $.item.id
							}
						}
					});
					else if ($.item.type === "shell_call") b[$.output_index] = void 0, P.enqueue({
						type: "tool-call",
						toolCallId: $.item.call_id,
						toolName: l.toCustomToolName("shell"),
						input: JSON.stringify({
							action: {
								commands: $.item.action.commands
							}
						}),
						...p && {
							providerExecuted: !0
						},
						providerMetadata: {
							[c]: {
								itemId: $.item.id
							}
						}
					});
					else if ($.item.type === "shell_call_output") P.enqueue({
						type: "tool-result",
						toolCallId: $.item.call_id,
						toolName: l.toCustomToolName("shell"),
						result: {
							output: $.item.output.map(re => ({
								stdout: re.stdout,
								stderr: re.stderr,
								outcome: re.outcome.type === "exit" ? {
									type: "exit",
									exitCode: re.outcome.exit_code
								} : {
									type: "timeout"
								}
							}))
						}
					});
					else if ($.item.type === "reasoning") {
						const re = O[$.item.id],
							Re = Object.entries(re.summaryParts).filter(([Ke, _i]) => _i === "active" || _i === "can-conclude").map(([Ke]) => Ke);
						for (const Ke of Re) P.enqueue({
							type: "reasoning-end",
							id: `${$.item.id}:${Ke}`,
							providerMetadata: {
								[c]: {
									itemId: $.item.id,
									reasoningEncryptedContent: (C = $.item.encrypted_content) != null ? C : null
								}
							}
						});
						delete O[$.item.id]
					} else $.item.type === "compaction" && P.enqueue({
						type: "custom",
						kind: "openai.compaction",
						providerMetadata: {
							[c]: {
								type: "compaction",
								itemId: $.item.id,
								encryptedContent: $.item.encrypted_content
							}
						}
					});
					else if (hI($)) {
						const re = b[$.output_index];
						re != null && P.enqueue({
							type: "tool-input-delta",
							id: re.toolCallId,
							delta: $.delta
						})
					} else if (fI($)) {
						const re = b[$.output_index];
						re != null && P.enqueue({
							type: "tool-input-delta",
							id: re.toolCallId,
							delta: $.delta
						})
					} else if (vI($)) {
						const re = b[$.output_index];
						re != null && re.applyPatch && (P.enqueue({
							type: "tool-input-delta",
							id: re.toolCallId,
							delta: Xt($.delta)
						}), re.applyPatch.hasDiff = !0)
					} else if (bI($)) {
						const re = b[$.output_index];
						re != null && re.applyPatch && !re.applyPatch.endEmitted && (re.applyPatch.hasDiff || (P.enqueue({
							type: "tool-input-delta",
							id: re.toolCallId,
							delta: Xt($.diff)
						}), re.applyPatch.hasDiff = !0), P.enqueue({
							type: "tool-input-delta",
							id: re.toolCallId,
							delta: '"}}'
						}), P.enqueue({
							type: "tool-input-end",
							id: re.toolCallId
						}), re.applyPatch.endEmitted = !0)
					} else if (_I($)) P.enqueue({
						type: "tool-result",
						toolCallId: $.item_id,
						toolName: l.toCustomToolName("image_generation"),
						result: {
							result: $.partial_image_b64
						},
						preliminary: !0
					});
					else if (gI($)) {
						const re = b[$.output_index];
						re != null && P.enqueue({
							type: "tool-input-delta",
							id: re.toolCallId,
							delta: Xt($.delta)
						})
					} else if (yI($)) {
						const re = b[$.output_index];
						re != null && (P.enqueue({
							type: "tool-input-delta",
							id: re.toolCallId,
							delta: '"}'
						}), P.enqueue({
							type: "tool-input-end",
							id: re.toolCallId
						}), P.enqueue({
							type: "tool-call",
							toolCallId: re.toolCallId,
							toolName: l.toCustomToolName("code_interpreter"),
							input: JSON.stringify({
								code: $.code,
								containerId: re.codeInterpreter.containerId
							}),
							providerExecuted: !0
						}))
					} else if (mI($)) v = $.response.id, P.enqueue({
						type: "response-metadata",
						id: $.response.id,
						timestamp: new Date($.response.created_at * 1e3),
						modelId: $.response.model
					});
					else if (sI($)) P.enqueue({
						type: "text-delta",
						id: $.item_id,
						delta: $.delta
					}), (me = (G = t.providerOptions) == null ? void 0 : G[c]) != null && me.logprobs && $.logprobs && S.push($.logprobs);
					else if ($.type === "response.reasoning_summary_part.added") {
						if ($.summary_index > 0) {
							const re = O[$.item_id];
							re.summaryParts[$.summary_index] = "active";
							for (const Re of Object.keys(re.summaryParts)) re.summaryParts[Re] === "can-conclude" && (P.enqueue({
								type: "reasoning-end",
								id: `${$.item_id}:${Re}`,
								providerMetadata: {
									[c]: {
										itemId: $.item_id
									}
								}
							}), re.summaryParts[Re] = "concluded");
							P.enqueue({
								type: "reasoning-start",
								id: `${$.item_id}:${$.summary_index}`,
								providerMetadata: {
									[c]: {
										itemId: $.item_id,
										reasoningEncryptedContent: (pe = (fe = O[$.item_id]) == null ? void 0 : fe.encryptedContent) != null ? pe : null
									}
								}
							})
						}
					} else if ($.type === "response.reasoning_summary_text.delta") P.enqueue({
						type: "reasoning-delta",
						id: `${$.item_id}:${$.summary_index}`,
						delta: $.delta,
						providerMetadata: {
							[c]: {
								itemId: $.item_id
							}
						}
					});
					else if ($.type === "response.reasoning_summary_part.done") d ? (P.enqueue({
						type: "reasoning-end",
						id: `${$.item_id}:${$.summary_index}`,
						providerMetadata: {
							[c]: {
								itemId: $.item_id
							}
						}
					}), O[$.item_id].summaryParts[$.summary_index] = "concluded") : O[$.item_id].summaryParts[$.summary_index] = "can-conclude";
					else if (pI($)) I = {
						unified: Xo({
							finishReason: (be = $.response.incomplete_details) == null ? void 0 : be.reason,
							hasFunctionCall: L
						}),
						raw: (We = (we = $.response.incomplete_details) == null ? void 0 : we.reason) != null ? We : void 0
					}, E = $.response.usage, typeof $.response.service_tier == "string" && (B = $.response.service_tier), ((Ve = $.response.reasoning) == null ? void 0 : Ve.context) != null && (F = $.response.reasoning.context);
					else if (Is($)) {
						const re = (Zn = $.response.incomplete_details) == null ? void 0 : Zn.reason;
						I = {
							unified: re ? Xo({
								finishReason: re,
								hasFunctionCall: L
							}) : "error",
							raw: re ?? "error"
						}, E = (Fn = $.response.usage) != null ? Fn : void 0, ((Bn = $.response.reasoning) == null ? void 0 : Bn.context) != null && (F = $.response.reasoning.context), !N && $.response.error != null && (N = !0, P.enqueue({
							type: "error",
							error: {
								type: "response.failed",
								sequence_number: $.sequence_number,
								response: {
									error: $.response.error,
									incomplete_details: $.response.incomplete_details,
									service_tier: $.response.service_tier
								}
							}
						}))
					} else wI($) ? (T.push($.annotation), $.annotation.type === "url_citation" ? P.enqueue({
						type: "source",
						sourceType: "url",
						id: (wn = (ve = (Vn = w.config).generateId) == null ? void 0 : ve.call(Vn)) != null ? wn : ze(),
						url: $.annotation.url,
						title: $.annotation.title
					}) : $.annotation.type === "file_citation" ? P.enqueue({
						type: "source",
						sourceType: "document",
						id: (ui = (li = (si = w.config).generateId) == null ? void 0 : li.call(si)) != null ? ui : ze(),
						mediaType: "text/plain",
						title: $.annotation.filename,
						filename: $.annotation.filename,
						providerMetadata: {
							[c]: {
								type: $.annotation.type,
								fileId: $.annotation.file_id,
								index: $.annotation.index
							}
						}
					}) : $.annotation.type === "container_file_citation" ? P.enqueue({
						type: "source",
						sourceType: "document",
						id: (pi = (di = (ci = w.config).generateId) == null ? void 0 : di.call(ci)) != null ? pi : ze(),
						mediaType: "text/plain",
						title: $.annotation.filename,
						filename: $.annotation.filename,
						providerMetadata: {
							[c]: {
								type: $.annotation.type,
								fileId: $.annotation.file_id,
								containerId: $.annotation.container_id
							}
						}
					}) : $.annotation.type === "file_path" && P.enqueue({
						type: "source",
						sourceType: "document",
						id: (fi = (hi = (mi = w.config).generateId) == null ? void 0 : hi.call(mi)) != null ? fi : ze(),
						mediaType: "application/octet-stream",
						title: $.annotation.file_id,
						filename: $.annotation.file_id,
						providerMetadata: {
							[c]: {
								type: $.annotation.type,
								fileId: $.annotation.file_id,
								index: $.annotation.index
							}
						}
					})) : Ss($) && (N = !0, I = {
						unified: "error",
						raw: "error"
					}, P.enqueue({
						type: "error",
						error: $
					}))
				},
				flush(te) {
					const P = {
						[c]: {
							responseId: v,
							...S.length > 0 ? {
								logprobs: S
							} : {},
							...B !== void 0 ? {
								serviceTier: B
							} : {},
							...F !== void 0 ? {
								reasoningContext: F
							} : {}
						}
					};
					te.enqueue({
						type: "finish",
						finishReason: I,
						usage: ys(E),
						providerMetadata: P
					})
				}
			})),
			request: {
				body: r
			},
			response: {
				headers: h
			}
		}
	}
};

function sI(e) {
	return e.type === "response.output_text.delta"
}

function lI(e) {
	const t = cI(e);
	return t != null && Array.isArray(t.choices) && typeof t.type != "string"
}

function uI({
	value: e,
	cause: t,
	url: n,
	requestBodyValues: o,
	responseHeaders: r
}) {
	return new He({
		message: "Received a Chat Completions stream while using the OpenAI Responses API. The default OpenAI provider model uses the Responses API. If your custom baseURL targets a Chat Completions-compatible endpoint, use openai.chat('model-id') or createOpenAI(...).chat('model-id') instead. You can also use @ai-sdk/openai-compatible for OpenAI-compatible providers.",
		url: n,
		requestBodyValues: o,
		responseHeaders: r,
		responseBody: JSON.stringify(e),
		cause: t,
		data: e,
		isRetryable: !1
	})
}

function cI(e) {
	return typeof e == "object" && e != null ? e : void 0
}

function dI(e) {
	return e.type === "response.output_item.done"
}

function pI(e) {
	return e.type === "response.completed" || e.type === "response.incomplete"
}

function Is(e) {
	return e.type === "response.failed"
}

function mI(e) {
	return e.type === "response.created"
}

function hI(e) {
	return e.type === "response.function_call_arguments.delta"
}

function fI(e) {
	return e.type === "response.custom_tool_call_input.delta"
}

function _I(e) {
	return e.type === "response.image_generation_call.partial_image"
}

function gI(e) {
	return e.type === "response.code_interpreter_call_code.delta"
}

function yI(e) {
	return e.type === "response.code_interpreter_call_code.done"
}

function vI(e) {
	return e.type === "response.apply_patch_call_operation_diff.delta"
}

function bI(e) {
	return e.type === "response.apply_patch_call_operation_diff.done"
}

function Ts(e) {
	return e.type === "response.output_item.added"
}

function wI(e) {
	return e.type === "response.output_text.annotation.added"
}

function Ss(e) {
	return e.type === "error"
}

function kI(e) {
	return !(e.type === "response.created" || e.type === "response.failed" || e.type === "error" || e.type === "unknown_chunk")
}

function Cs(e) {
	var t;
	if (e == null) return {};
	switch (e.type) {
		case "search":
			return {
				action: {
					type: "search",
					query: (t = e.query) != null ? t : void 0,
					...e.queries != null && {
						queries: e.queries
					}
				}, ...e.sources != null && {
					sources: e.sources
				}
			};
		case "open_page":
			return {
				action: {
					type: "openPage",
					url: e.url
				}
			};
		case "find_in_page":
			return {
				action: {
					type: "findInPage",
					url: e.url,
					pattern: e.pattern
				}
			}
	}
}

function Xt(e) {
	return JSON.stringify(e).slice(1, -1)
}
var xI = ee(() => Q(u({
		instructions: a().nullish(),
		speed: y().min(.25).max(4).default(1).nullish()
	}))),
	II = class Cd {
		constructor(t, n) {
			this.modelId = t, this.config = n, this.specificationVersion = "v4"
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new Cd(t.modelId, t.config)
		}
		get provider() {
			return this.config.provider
		}
		async getArgs({
			text: t,
			voice: n = "alloy",
			outputFormat: o = "mp3",
			speed: r,
			instructions: i,
			language: s,
			providerOptions: l
		}) {
			const d = [],
				c = await xe({
					provider: "openai",
					providerOptions: l,
					schema: xI
				}),
				p = {
					model: this.modelId,
					input: t,
					voice: n,
					response_format: "mp3",
					speed: r,
					instructions: i
				};
			if (o && (["mp3", "opus", "aac", "flac", "wav", "pcm"].includes(o) ? p.response_format = o : d.push({
					type: "unsupported",
					feature: "outputFormat",
					details: `Unsupported output format: ${o}. Using mp3 instead.`
				})), c) {
				const m = {};
				for (const h in m) {
					const g = m[h];
					g !== void 0 && (p[h] = g)
				}
			}
			return s && d.push({
				type: "unsupported",
				feature: "language",
				details: `OpenAI speech models do not support language selection. Language parameter "${s}" was ignored.`
			}), {
				requestBody: p,
				warnings: d
			}
		}
		async doGenerate(t) {
			var n, o, r, i, s;
			const l = (r = (o = (n = this.config._internal) == null ? void 0 : n.currentDate) == null ? void 0 : o.call(n)) != null ? r : new Date,
				{
					requestBody: d,
					warnings: c
				} = await this.getArgs(t),
				{
					value: p,
					responseHeaders: m,
					rawValue: h
				} = await Ue({
					url: this.config.url({
						path: "/audio/speech",
						modelId: this.modelId
					}),
					headers: Ce((s = (i = this.config).headers) == null ? void 0 : s.call(i), t.headers),
					body: d,
					failedResponseHandler: pt,
					successfulResponseHandler: fv(),
					abortSignal: t.abortSignal,
					fetch: this.config.fetch
				});
			return {
				audio: p,
				warnings: c,
				request: {
					body: JSON.stringify(d)
				},
				response: {
					timestamp: l,
					modelId: this.modelId,
					headers: m,
					body: h
				}
			}
		}
	},
	TI = ee(() => Q(u({
		text: a(),
		language: a().nullish(),
		duration: y().nullish(),
		words: R(u({
			word: a(),
			start: y(),
			end: y()
		})).nullish(),
		segments: R(u({
			id: y(),
			seek: y(),
			start: y(),
			end: y(),
			text: a(),
			tokens: R(y()),
			temperature: y(),
			avg_logprob: y(),
			compression_ratio: y(),
			no_speech_prob: y()
		})).nullish()
	}))),
	Os = ee(() => Q(u({
		include: R(a()).optional(),
		language: a().optional(),
		prompt: a().optional(),
		temperature: y().min(0).max(1).default(0).optional(),
		timestampGranularities: R(Y(["word", "segment"])).default(["segment"]).optional(),
		streaming: u({
			delay: Y(["minimal", "low", "medium", "high", "xhigh"]).optional(),
			include: R(a()).optional()
		}).optional()
	})));

function As(e) {
	return e === "gpt-realtime-whisper" || e.startsWith("gpt-realtime-whisper-")
}
var $s = {
		afrikaans: "af",
		arabic: "ar",
		armenian: "hy",
		azerbaijani: "az",
		belarusian: "be",
		bosnian: "bs",
		bulgarian: "bg",
		catalan: "ca",
		chinese: "zh",
		croatian: "hr",
		czech: "cs",
		danish: "da",
		dutch: "nl",
		english: "en",
		estonian: "et",
		finnish: "fi",
		french: "fr",
		galician: "gl",
		german: "de",
		greek: "el",
		hebrew: "he",
		hindi: "hi",
		hungarian: "hu",
		icelandic: "is",
		indonesian: "id",
		italian: "it",
		japanese: "ja",
		kannada: "kn",
		kazakh: "kk",
		korean: "ko",
		latvian: "lv",
		lithuanian: "lt",
		macedonian: "mk",
		malay: "ms",
		marathi: "mr",
		maori: "mi",
		nepali: "ne",
		norwegian: "no",
		persian: "fa",
		polish: "pl",
		portuguese: "pt",
		romanian: "ro",
		russian: "ru",
		serbian: "sr",
		slovak: "sk",
		slovenian: "sl",
		spanish: "es",
		swahili: "sw",
		swedish: "sv",
		tagalog: "tl",
		tamil: "ta",
		thai: "th",
		turkish: "tr",
		ukrainian: "uk",
		urdu: "ur",
		vietnamese: "vi",
		welsh: "cy"
	},
	SI = class Od {
		constructor(t, n) {
			this.modelId = t, this.config = n, this.specificationVersion = "v4"
		}
		static[Qe](t) {
			return tt({
				modelId: t.modelId,
				config: t.config
			})
		}
		static[et](t) {
			return new Od(t.modelId, t.config)
		}
		get provider() {
			return this.config.provider
		}
		async getArgs({
			audio: t,
			mediaType: n,
			providerOptions: o
		}) {
			const r = [],
				i = await xe({
					provider: "openai",
					providerOptions: o,
					schema: Os
				}),
				s = new FormData,
				l = t instanceof Uint8Array ? new Blob([t]) : new Blob([Ot(t)]);
			s.append("model", this.modelId);
			const d = fy(n);
			if (s.append("file", new File([l], "audio", {
					type: n
				}), `audio.${d}`), this.modelId === "whisper-1" && s.append("response_format", "verbose_json"), i) {
				const c = ["gpt-4o-transcribe", "gpt-4o-mini-transcribe"].includes(this.modelId),
					p = {
						include: i.include,
						language: i.language,
						prompt: i.prompt,
						...this.modelId !== "whisper-1" && {
							response_format: c ? "json" : "verbose_json"
						},
						temperature: i.temperature,
						timestamp_granularities: i.timestampGranularities
					};
				for (const [m, h] of Object.entries(p))
					if (h != null)
						if (Array.isArray(h))
							for (const g of h) s.append(`${m}[]`, String(g));
						else s.append(m, String(h))
			}
			return {
				formData: s,
				warnings: r
			}
		}
		async doGenerate(t) {
			var n, o, r, i, s, l, d, c, p, m;
			if (As(this.modelId)) throw new Oe({
				functionality: `non-streaming transcription with ${this.modelId}`
			});
			const h = (r = (o = (n = this.config._internal) == null ? void 0 : n.currentDate) == null ? void 0 : o.call(n)) != null ? r : new Date,
				{
					formData: g,
					warnings: _
				} = await this.getArgs(t),
				{
					value: w,
					responseHeaders: k,
					rawValue: A
				} = await ln({
					url: this.config.url({
						path: "/audio/transcriptions",
						modelId: this.modelId
					}),
					headers: Ce((s = (i = this.config).headers) == null ? void 0 : s.call(i), t.headers),
					formData: g,
					failedResponseHandler: pt,
					successfulResponseHandler: Me(TI),
					abortSignal: t.abortSignal,
					fetch: this.config.fetch
				}),
				I = w.language != null && w.language in $s ? $s[w.language] : void 0;
			return {
				text: w.text,
				segments: (p = (c = (l = w.segments) == null ? void 0 : l.map(E => ({
					text: E.text,
					startSecond: E.start,
					endSecond: E.end
				}))) != null ? c : (d = w.words) == null ? void 0 : d.map(E => ({
					text: E.word,
					startSecond: E.start,
					endSecond: E.end
				}))) != null ? p : [],
				language: I,
				durationInSeconds: (m = w.duration) != null ? m : void 0,
				warnings: _,
				response: {
					timestamp: h,
					modelId: this.modelId,
					headers: k,
					body: A
				}
			}
		}
		async doStream(t) {
			var n, o, r, i, s, l, d;
			if (!As(this.modelId)) throw new Oe({
				functionality: `streaming transcription with ${this.modelId}`
			});
			const c = (r = (o = (n = this.config._internal) == null ? void 0 : n.currentDate) == null ? void 0 : o.call(n)) != null ? r : new Date,
				p = await xe({
					provider: "openai",
					providerOptions: t.providerOptions,
					schema: Os
				}),
				m = [],
				h = (s = (i = t.providerOptions) == null ? void 0 : i.openai) != null ? s : {};
			for (const w of ["include", "prompt", "temperature", "timestampGranularities"]) h[w] != null && m.push({
				type: "unsupported",
				feature: `providerOptions.openai.${w}`,
				details: `OpenAI streaming transcription does not support ${w}.`
			});
			const g = Ce((d = (l = this.config).headers) == null ? void 0 : d.call(l), t.headers),
				_ = OI({
					modelId: this.modelId,
					inputAudioFormat: t.inputAudioFormat,
					providerOptions: p
				});
			return {
				request: {
					body: _
				},
				response: {
					timestamp: c,
					modelId: this.modelId
				},
				stream: CI({
					webSocket: this.config.webSocket,
					url: Lg(this.config.url({
						path: "/realtime?intent=transcription",
						modelId: this.modelId
					})),
					headers: g,
					sessionUpdate: _,
					language: p == null ? void 0 : p.language,
					warnings: m,
					audio: t.audio,
					abortSignal: t.abortSignal,
					includeRawChunks: t.includeRawChunks
				})
			}
		}
	};

function CI({
	webSocket: e,
	url: t,
	headers: n,
	sessionUpdate: o,
	language: r,
	warnings: i,
	audio: s,
	abortSignal: l,
	includeRawChunks: d
}) {
	let c = !1,
		p = () => {};
	return new ReadableStream({
		start: m => {
			const h = AI(n);
			let g, _;
			p = I => {
				g != null ? g.cancel().catch(() => {}) : s.cancel().catch(() => {}), _ == null || _.close(I)
			};
			const w = I => {
					c || (c = !0, p(), m.error(I))
				},
				k = (I, E) => {
					c || (c = !0, E != null && m.enqueue({
						type: "transcript-final",
						id: E,
						text: I
					}), m.enqueue({
						type: "finish",
						text: I,
						segments: [],
						language: r
					}), m.close(), p(1e3))
				},
				A = async I => {
					g = s.getReader();
					try {
						for (;;) {
							const {
								done: E,
								value: S
							} = await g.read();
							if (E || c) break;
							I.send(JSON.stringify({
								type: "input_audio_buffer.append",
								audio: De(S)
							})), await Bg(I)
						}
					} finally {
						g.releaseLock(), g = void 0
					}
					c || I.send(JSON.stringify({
						type: "input_audio_buffer.commit"
					}))
				};
			_ = Vg({
				url: t,
				protocols: h.protocols,
				headers: h.headers,
				webSocket: e,
				abortSignal: l,
				onAbort: w,
				onProcessingError: w,
				onOpen: I => {
					m.enqueue({
						type: "stream-start",
						warnings: i
					}), I.send(JSON.stringify(o)), A(I).catch(w)
				},
				onMessageText: async I => {
					var E, S, v, b;
					const T = await Ao({
						text: I
					});
					if (!T.success) return;
					const q = T.value;
					switch (d && m.enqueue({
							type: "raw",
							rawValue: q
						}), q.type) {
						case "conversation.item.input_audio_transcription.delta": {
							m.enqueue({
								type: "transcript-delta",
								id: q.item_id,
								delta: (E = q.delta) != null ? E : ""
							});
							break
						}
						case "conversation.item.input_audio_transcription.completed": {
							k((S = q.transcript) != null ? S : "", q.item_id);
							break
						}
						case "error": {
							w(new Error((b = (v = q.error) == null ? void 0 : v.message) != null ? b : "OpenAI realtime error"));
							break
						}
					}
				},
				onSocketError: () => {
					w(new Error("OpenAI realtime transcription error"))
				},
				onClose: () => {
					c || (c = !0, p(), m.close())
				}
			})
		},
		cancel: () => {
			c || (c = !0, p())
		}
	})
}

function OI({
	modelId: e,
	inputAudioFormat: t,
	providerOptions: n
}) {
	var o, r;
	return {
		type: "session.update",
		session: {
			type: "transcription",
			audio: {
				input: {
					format: {
						type: t.type,
						...t.rate != null ? {
							rate: t.rate
						} : {}
					},
					transcription: {
						model: e,
						...(n == null ? void 0 : n.language) != null ? {
							language: n.language
						} : {},
						...((o = n == null ? void 0 : n.streaming) == null ? void 0 : o.delay) != null ? {
							delay: n.streaming.delay
						} : {}
					},
					turn_detection: null
				}
			},
			...((r = n == null ? void 0 : n.streaming) == null ? void 0 : r.include) != null ? {
				include: n.streaming.include
			} : {}
		}
	}
}

function AI(e) {
	var t;
	let n;
	for (const [r, i] of Object.entries(e)) r.toLowerCase() === "authorization" && i != null && (n = i);
	const o = (t = n == null ? void 0 : n.match(/^bearer\s+(.+)$/i)) == null ? void 0 : t[1];
	return o == null ? {
		protocols: ["realtime"],
		headers: e
	} : {
		protocols: ["realtime", `openai-insecure-api-key.${o}`],
		headers: Object.fromEntries(Object.entries(e).filter(([r]) => r.toLowerCase() !== "authorization"))
	}
}
var $I = ee(() => Q(u({
		id: a(),
		name: a().nullish(),
		description: a().nullish(),
		default_version: a().nullish(),
		latest_version: a().nullish(),
		created_at: y(),
		updated_at: y().nullish()
	}))),
	EI = class {
		constructor(e) {
			this.config = e, this.specificationVersion = "v4"
		}
		get provider() {
			return this.config.provider
		}
		async uploadSkill(e) {
			const t = [];
			e.displayTitle != null && t.push({
				type: "unsupported",
				feature: "displayTitle"
			});
			const n = new FormData;
			for (const r of e.files) {
				const i = Dn(r.data);
				n.append("files[]", new Blob([i]), r.path)
			}
			const {
				value: o
			} = await ln({
				url: this.config.url({
					path: "/skills"
				}),
				headers: Ce(this.config.headers()),
				formData: n,
				failedResponseHandler: pt,
				successfulResponseHandler: Me($I),
				fetch: this.config.fetch
			});
			return {
				providerReference: {
					openai: o.id
				},
				...o.name != null ? {
					name: o.name
				} : {},
				...o.description != null ? {
					description: o.description
				} : {},
				...o.latest_version != null ? {
					latestVersion: o.latest_version
				} : {},
				providerMetadata: {
					openai: {
						...o.default_version != null ? {
							defaultVersion: o.default_version
						} : {},
						...o.created_at != null ? {
							createdAt: o.created_at
						} : {},
						...o.updated_at != null ? {
							updatedAt: o.updated_at
						} : {}
					}
				},
				warnings: t
			}
		}
	},
	RI = "4.0.16";

function Ad(e = {}) {
	var t, n;
	const o = (t = $o(mc(tc({
			settingValue: e.baseURL,
			environmentVariableName: "OPENAI_BASE_URL"
		})))) != null ? t : "https://api.openai.com/v1",
		r = (n = e.name) != null ? n : "openai",
		i = () => sn({
			Authorization: `Bearer ${Jr({ apiKey: e.apiKey, environmentVariableName: "OPENAI_API_KEY", description: "OpenAI" })}`,
			"OpenAI-Organization": e.organization,
			"OpenAI-Project": e.project,
			...e.headers
		}, `ai-sdk/openai/${RI}`),
		s = E => new Pk(E, {
			provider: `${r}.chat`,
			url: ({
				path: S
			}) => `${o}${S}`,
			headers: i,
			fetch: e.fetch
		}),
		l = E => new Uk(E, {
			provider: `${r}.completion`,
			url: ({
				path: S
			}) => `${o}${S}`,
			headers: i,
			fetch: e.fetch
		}),
		d = E => new Fk(E, {
			provider: `${r}.embedding`,
			url: ({
				path: S
			}) => `${o}${S}`,
			headers: i,
			fetch: e.fetch
		}),
		c = E => new Xk(E, {
			provider: `${r}.image`,
			url: ({
				path: S
			}) => `${o}${S}`,
			headers: i,
			fetch: e.fetch
		}),
		p = E => new SI(E, {
			provider: `${r}.transcription`,
			url: ({
				path: S
			}) => `${o}${S}`,
			headers: i,
			fetch: e.fetch,
			webSocket: e.webSocket
		}),
		m = E => new II(E, {
			provider: `${r}.speech`,
			url: ({
				path: S
			}) => `${o}${S}`,
			headers: i,
			fetch: e.fetch
		}),
		h = () => new Hk({
			provider: `${r}.files`,
			baseURL: o,
			headers: i,
			fetch: e.fetch
		}),
		g = () => new EI({
			provider: `${r}.skills`,
			url: ({
				path: E
			}) => `${o}${E}`,
			headers: i,
			fetch: e.fetch
		}),
		_ = E => {
			if (new.target) throw new Error("The OpenAI model function cannot be called with the new keyword.");
			return w(E)
		},
		w = E => new aI(E, {
			provider: `${r}.responses`,
			url: ({
				path: S
			}) => `${o}${S}`,
			headers: i,
			fetch: e.fetch,
			fileIdPrefixes: ["file-"]
		}),
		k = E => new Hx(E, {
			provider: `${r}.realtime`,
			baseURL: o,
			headers: i,
			fetch: e.fetch
		}),
		A = Object.assign(E => k(E), {
			getToken: async E => {
				const v = await k(E.model).doCreateClientSecret({
					sessionConfig: E.sessionConfig,
					expiresAfterSeconds: E.expiresAfterSeconds
				});
				return {
					token: v.token,
					url: v.url,
					expiresAt: v.expiresAt
				}
			}
		}),
		I = function(E) {
			return _(E)
		};
	return I.specificationVersion = "v4", I.languageModel = _, I.chat = s, I.completion = l, I.responses = w, I.embedding = d, I.embeddingModel = d, I.textEmbedding = d, I.textEmbeddingModel = d, I.image = c, I.imageModel = c, I.transcription = p, I.transcriptionModel = p, I.speech = m, I.speechModel = m, I.files = h, I.skills = g, I.experimental_realtime = A, I.tools = Fx, I
}
Ad();
const NI = {
	definition: xt.openai,
	listModels(e) {
		return Pc("openai", e)
	},
	createModel(e) {
		return Ad({
			apiKey: e.apiKey,
			baseURL: e.baseUrl
		}).responses(e.modelId)
	}
};
var PI = {},
	MI = Object.defineProperty,
	zI = Object.defineProperties,
	DI = Object.getOwnPropertyDescriptors,
	go = Object.getOwnPropertySymbols,
	$d = Object.prototype.hasOwnProperty,
	Ed = Object.prototype.propertyIsEnumerable,
	Rd = e => {
		throw TypeError(e)
	},
	Es = (e, t, n) => t in e ? MI(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n,
	ie = (e, t) => {
		for (var n in t || (t = {})) $d.call(t, n) && Es(e, n, t[n]);
		if (go)
			for (var n of go(t)) Ed.call(t, n) && Es(e, n, t[n]);
		return e
	},
	$e = (e, t) => zI(e, DI(t)),
	fn = (e, t) => {
		var n = {};
		for (var o in e) $d.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
		if (e != null && go)
			for (var o of go(e)) t.indexOf(o) < 0 && Ed.call(e, o) && (n[o] = e[o]);
		return n
	},
	qI = (e, t, n) => t.has(e) || Rd("Cannot " + n),
	Rs = (e, t, n) => (qI(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
	UI = (e, t, n) => t.has(e) ? Rd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
	Nd = "vercel.ai.error",
	jI = Symbol.for(Nd),
	Ns, Ps, Je = class Pd extends(Ps = Error, Ns = jI, Ps) {
		constructor({
			name: t,
			message: n,
			cause: o
		}) {
			super(n), this[Ns] = !0, this.name = t, this.cause = o
		}
		static isInstance(t) {
			return Pd.hasMarker(t, Nd)
		}
		static hasMarker(t, n) {
			const o = Symbol.for(n);
			return t != null && typeof t == "object" && o in t && typeof t[o] == "boolean" && t[o] === !0
		}
	},
	Md = "AI_APICallError",
	zd = `vercel.ai.error.${Md}`,
	LI = Symbol.for(zd),
	Ms, zs, Ye = class extends(zs = Je, Ms = LI, zs) {
		constructor({
			message: e,
			url: t,
			requestBodyValues: n,
			statusCode: o,
			responseHeaders: r,
			responseBody: i,
			cause: s,
			isRetryable: l = o != null && (o === 408 || o === 409 || o === 429 || o >= 500),
			data: d
		}) {
			super({
				name: Md,
				message: e,
				cause: s
			}), this[Ms] = !0, this.url = t, this.requestBodyValues = n, this.statusCode = o, this.responseHeaders = r, this.responseBody = i, this.isRetryable = l, this.data = d
		}
		static isInstance(e) {
			return Je.hasMarker(e, zd)
		}
	},
	Dd = "AI_EmptyResponseBodyError",
	qd = `vercel.ai.error.${Dd}`,
	ZI = Symbol.for(qd),
	Ds, qs, FI = class extends(qs = Je, Ds = ZI, qs) {
		constructor({
			message: e = "Empty response body"
		} = {}) {
			super({
				name: Dd,
				message: e
			}), this[Ds] = !0
		}
		static isInstance(e) {
			return Je.hasMarker(e, qd)
		}
	};

function Ud(e) {
	return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.toString() : JSON.stringify(e)
}
var jd = "AI_InvalidArgumentError",
	Ld = `vercel.ai.error.${jd}`,
	BI = Symbol.for(Ld),
	Us, js, Zd = class extends(js = Je, Us = BI, js) {
		constructor({
			message: e,
			cause: t,
			argument: n
		}) {
			super({
				name: jd,
				message: e,
				cause: t
			}), this[Us] = !0, this.argument = n
		}
		static isInstance(e) {
			return Je.hasMarker(e, Ld)
		}
	},
	Fd = "AI_InvalidPromptError",
	Bd = `vercel.ai.error.${Fd}`,
	VI = Symbol.for(Bd),
	Ls, Zs, HI = class extends(Zs = Je, Ls = VI, Zs) {
		constructor({
			prompt: e,
			message: t,
			cause: n
		}) {
			super({
				name: Fd,
				message: `Invalid prompt: ${t}`,
				cause: n
			}), this[Ls] = !0, this.prompt = e
		}
		static isInstance(e) {
			return Je.hasMarker(e, Bd)
		}
	},
	Vd = "AI_InvalidResponseDataError",
	Hd = `vercel.ai.error.${Vd}`,
	GI = Symbol.for(Hd),
	Fs, Bs, eo = class extends(Bs = Je, Fs = GI, Bs) {
		constructor({
			data: e,
			message: t = `Invalid response data: ${JSON.stringify(e)}.`
		}) {
			super({
				name: Vd,
				message: t
			}), this[Fs] = !0, this.data = e
		}
		static isInstance(e) {
			return Je.hasMarker(e, Hd)
		}
	},
	Gd = "AI_JSONParseError",
	Jd = `vercel.ai.error.${Gd}`,
	JI = Symbol.for(Jd),
	Vs, Hs, yo = class extends(Hs = Je, Vs = JI, Hs) {
		constructor({
			text: e,
			cause: t
		}) {
			super({
				name: Gd,
				message: `JSON parsing failed: Text: ${e}.
Error message: ${Ud(t)}`,
				cause: t
			}), this[Vs] = !0, this.text = e
		}
		static isInstance(e) {
			return Je.hasMarker(e, Jd)
		}
	},
	Wd = "AI_LoadAPIKeyError",
	Kd = `vercel.ai.error.${Wd}`,
	WI = Symbol.for(Kd),
	Gs, Js, to = class extends(Js = Je, Gs = WI, Js) {
		constructor({
			message: e
		}) {
			super({
				name: Wd,
				message: e
			}), this[Gs] = !0
		}
		static isInstance(e) {
			return Je.hasMarker(e, Kd)
		}
	},
	Yd = "AI_NoContentGeneratedError",
	Xd = `vercel.ai.error.${Yd}`,
	KI = Symbol.for(Xd),
	Ws, Ks, ni = class extends(Ks = Je, Ws = KI, Ks) {
		constructor({
			message: e = "No content generated."
		} = {}) {
			super({
				name: Yd,
				message: e
			}), this[Ws] = !0
		}
		static isInstance(e) {
			return Je.hasMarker(e, Xd)
		}
	},
	Qd = "AI_TypeValidationError",
	ep = `vercel.ai.error.${Qd}`,
	YI = Symbol.for(ep),
	Ys, Xs, Pn = class Ir extends(Xs = Je, Ys = YI, Xs) {
		constructor({
			value: t,
			cause: n,
			context: o
		}) {
			let r = "Type validation failed";
			if (o != null && o.field && (r += ` for ${o.field}`), o != null && o.entityName || o != null && o.entityId) {
				r += " (";
				const i = [];
				o.entityName && i.push(o.entityName), o.entityId && i.push(`id: "${o.entityId}"`), r += i.join(", "), r += ")"
			}
			super({
				name: Qd,
				message: `${r}: Value: ${JSON.stringify(t)}.
Error message: ${Ud(n)}`,
				cause: n
			}), this[Ys] = !0, this.value = t, this.context = o
		}
		static isInstance(t) {
			return Je.hasMarker(t, ep)
		}
		static wrap({
			value: t,
			cause: n,
			context: o
		}) {
			var r, i, s;
			return Ir.isInstance(n) && n.value === t && ((r = n.context) == null ? void 0 : r.field) === (o == null ? void 0 : o.field) && ((i = n.context) == null ? void 0 : i.entityName) === (o == null ? void 0 : o.entityName) && ((s = n.context) == null ? void 0 : s.entityId) === (o == null ? void 0 : o.entityId) ? n : new Ir({
				value: t,
				cause: n,
				context: o
			})
		}
	},
	tp = "AI_UnsupportedFunctionalityError",
	np = `vercel.ai.error.${tp}`,
	XI = Symbol.for(np),
	Qs, el, Rt = class extends(el = Je, Qs = XI, el) {
		constructor({
			functionality: e,
			message: t = `'${e}' functionality not supported.`
		}) {
			super({
				name: tp,
				message: t
			}), this[Qs] = !0, this.functionality = e
		}
		static isInstance(e) {
			return Je.hasMarker(e, np)
		}
	},
	Qo = class extends Error {
		constructor(e, t) {
			super(e), this.name = "ParseError", this.type = t.type, this.field = t.field, this.value = t.value, this.line = t.line
		}
	},
	tl = 10,
	QI = 13,
	Qt = 32;

function er(e) {}

function eT(e) {
	if (typeof e == "function") throw new TypeError("`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?");
	const {
		onEvent: t = er,
		onError: n = er,
		onRetry: o = er,
		onComment: r,
		maxBufferSize: i
	} = e, s = [];
	let l = 0,
		d = !0,
		c, p = "",
		m = 0,
		h, g = !1;

	function _(v) {
		if (g) throw new Error("Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing.");
		if (d && (d = !1, v.charCodeAt(0) === 239 && v.charCodeAt(1) === 187 && v.charCodeAt(2) === 191 && (v = v.slice(3))), s.length === 0) {
			const q = k(v);
			q !== "" && (s.push(q), l = q.length), w();
			return
		}
		if (v.indexOf(`
`) === -1 && v.indexOf("\r") === -1) {
			s.push(v), l += v.length, w();
			return
		}
		s.push(v);
		const b = s.join("");
		s.length = 0, l = 0;
		const T = k(b);
		T !== "" && (s.push(T), l = T.length), w()
	}

	function w() {
		i !== void 0 && (l + p.length <= i || (g = !0, s.length = 0, l = 0, c = void 0, p = "", m = 0, h = void 0, n(new Qo(`Buffered data exceeded max buffer size of ${i} characters`, {
			type: "max-buffer-size-exceeded"
		}))))
	}

	function k(v) {
		let b = 0;
		if (v.indexOf("\r") === -1) {
			let T = v.indexOf(`
`, b);
			for (; T !== -1;) {
				if (b === T) {
					m > 0 && t({
						id: c,
						event: h,
						data: p
					}), c = void 0, p = "", m = 0, h = void 0, b = T + 1, T = v.indexOf(`
`, b);
					continue
				}
				const q = v.charCodeAt(b);
				if (nl(v, b, q)) {
					const L = v.charCodeAt(b + 5) === Qt ? b + 6 : b + 5,
						O = v.slice(L, T);
					if (m === 0 && v.charCodeAt(T + 1) === tl) {
						t({
							id: c,
							event: h,
							data: O
						}), c = void 0, p = "", h = void 0, b = T + 2, T = v.indexOf(`
`, b);
						continue
					}
					p = m === 0 ? O : `${p}
${O}`, m++
				} else ol(v, b, q) ? h = v.slice(v.charCodeAt(b + 6) === Qt ? b + 7 : b + 6, T) || void 0 : A(v, b, T);
				b = T + 1, T = v.indexOf(`
`, b)
			}
			return v.slice(b)
		}
		for (; b < v.length;) {
			const T = v.indexOf("\r", b),
				q = v.indexOf(`
`, b);
			let L = -1;
			if (T !== -1 && q !== -1 ? L = T < q ? T : q : T !== -1 ? T === v.length - 1 ? L = -1 : L = T : q !== -1 && (L = q), L === -1) break;
			A(v, b, L), b = L + 1, v.charCodeAt(b - 1) === QI && v.charCodeAt(b) === tl && b++
		}
		return v.slice(b)
	}

	function A(v, b, T) {
		if (b === T) {
			E();
			return
		}
		const q = v.charCodeAt(b);
		if (nl(v, b, q)) {
			const N = v.charCodeAt(b + 5) === Qt ? b + 6 : b + 5,
				oe = v.slice(N, T);
			p = m === 0 ? oe : `${p}
${oe}`, m++;
			return
		}
		if (ol(v, b, q)) {
			h = v.slice(v.charCodeAt(b + 6) === Qt ? b + 7 : b + 6, T) || void 0;
			return
		}
		if (q === 105 && v.charCodeAt(b + 1) === 100 && v.charCodeAt(b + 2) === 58) {
			const N = v.slice(v.charCodeAt(b + 3) === Qt ? b + 4 : b + 3, T);
			c = N.includes("\0") ? void 0 : N;
			return
		}
		if (q === 58) {
			if (r) {
				const N = v.slice(b, T);
				r(N.slice(v.charCodeAt(b + 1) === Qt ? 2 : 1))
			}
			return
		}
		const L = v.slice(b, T),
			O = L.indexOf(":");
		if (O === -1) {
			I(L, "", L);
			return
		}
		const B = L.slice(0, O),
			F = L.charCodeAt(O + 1) === Qt ? 2 : 1,
			z = L.slice(O + F);
		I(B, z, L)
	}

	function I(v, b, T) {
		switch (v) {
			case "event":
				h = b || void 0;
				break;
			case "data":
				p = m === 0 ? b : `${p}
${b}`, m++;
				break;
			case "id":
				c = b.includes("\0") ? void 0 : b;
				break;
			case "retry":
				/^\d+$/.test(b) ? o(parseInt(b, 10)) : n(new Qo(`Invalid \`retry\` value: "${b}"`, {
					type: "invalid-retry",
					value: b,
					line: T
				}));
				break;
			default:
				n(new Qo(`Unknown field "${v.length > 20 ? `${v.slice(0, 20)}…` : v}"`, {
					type: "unknown-field",
					field: v,
					value: b,
					line: T
				}));
				break
		}
	}

	function E() {
		m > 0 && t({
			id: c,
			event: h,
			data: p
		}), c = void 0, p = "", m = 0, h = void 0
	}

	function S(v = {}) {
		if (v.consume && s.length > 0) {
			const b = s.join("");
			A(b, 0, b.length)
		}
		d = !0, c = void 0, p = "", m = 0, h = void 0, s.length = 0, l = 0, g = !1
	}
	return {
		feed: _,
		reset: S
	}
}

function nl(e, t, n) {
	return n === 100 && e.charCodeAt(t + 1) === 97 && e.charCodeAt(t + 2) === 116 && e.charCodeAt(t + 3) === 97 && e.charCodeAt(t + 4) === 58
}

function ol(e, t, n) {
	return n === 101 && e.charCodeAt(t + 1) === 118 && e.charCodeAt(t + 2) === 101 && e.charCodeAt(t + 3) === 110 && e.charCodeAt(t + 4) === 116 && e.charCodeAt(t + 5) === 58
}
var tT = class extends TransformStream {
	constructor({
		onError: e,
		onRetry: t,
		onComment: n,
		maxBufferSize: o
	} = {}) {
		let r;
		super({
			start(i) {
				r = eT({
					onEvent: s => {
						i.enqueue(s)
					},
					onError(s) {
						typeof e == "function" && e(s), (e === "terminate" || s.type === "max-buffer-size-exceeded") && i.error(s)
					},
					onRetry: t,
					onComment: n,
					maxBufferSize: o
				})
			},
			transform(i) {
				r.feed(i)
			}
		})
	}
};

function on(...e) {
	return e.reduce((t, n) => ie(ie({}, t), n ?? {}), {})
}
var {
	btoa: nT
} = globalThis;

function oT(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t += String.fromCodePoint(e[n]);
	return nT(t)
}
async function rT(e, t) {
	return e == null ? Promise.resolve() : new Promise((n, o) => {
		const r = setTimeout(() => {
				i(), n()
			}, e),
			i = () => {
				clearTimeout(r)
			}
	})
}

function Ln(e) {
	return Object.fromEntries([...e.headers])
}
var iT = ({
		prefix: e,
		size: t = 16,
		alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
		separator: o = "-"
	} = {}) => {
		const r = () => {
			const i = n.length,
				s = new Array(t);
			for (let l = 0; l < t; l++) s[l] = n[Math.random() * i | 0];
			return s.join("")
		};
		if (e == null) return r;
		if (n.includes(o)) throw new Zd({
			argument: "separator",
			message: `The separator "${o}" must not be part of the alphabet "${n}".`
		});
		return () => `${e}${o}${r()}`
	},
	Tt = iT();

function Mn(e) {
	return (e instanceof Error || e instanceof DOMException) && (e.name === "AbortError" || e.name === "ResponseAborted" || e.name === "TimeoutError")
}
var aT = ["fetch failed", "failed to fetch"],
	sT = ["ConnectionRefused", "ConnectionClosed", "FailedToOpenSocket", "ECONNRESET", "ECONNREFUSED", "ETIMEDOUT", "EPIPE"];

function lT(e) {
	if (!(e instanceof Error)) return !1;
	const t = e.code;
	return !!(typeof t == "string" && sT.includes(t))
}

function op({
	error: e,
	url: t,
	requestBodyValues: n
}) {
	if (Mn(e)) return e;
	if (e instanceof TypeError && aT.includes(e.message.toLowerCase())) {
		const o = e.cause;
		if (o != null) return new Ye({
			message: `Cannot connect to API: ${o.message}`,
			cause: o,
			url: t,
			requestBodyValues: n,
			isRetryable: !0
		})
	}
	return lT(e) ? new Ye({
		message: `Cannot connect to API: ${e.message}`,
		cause: e,
		url: t,
		requestBodyValues: n,
		isRetryable: !0
	}) : e
}

function rp(e = globalThis) {
	var t, n, o;
	return e.window ? "runtime/browser" : (t = e.navigator) != null && t.userAgent ? `runtime/${e.navigator.userAgent.toLowerCase()}` : (o = (n = e.process) == null ? void 0 : n.versions) != null && o.node ? `runtime/node.js/${e.process.version.substring(0)}` : e.EdgeRuntime ? "runtime/vercel-edge" : "runtime/unknown"
}

function uT(e) {
	if (e == null) return {};
	const t = {};
	if (e instanceof Headers) e.forEach((n, o) => {
		t[o.toLowerCase()] = n
	});
	else {
		Array.isArray(e) || (e = Object.entries(e));
		for (const [n, o] of e) o != null && (t[n.toLowerCase()] = o)
	}
	return t
}

function ip(e, ...t) {
	const n = new Headers(uT(e)),
		o = n.get("user-agent") || "";
	return n.set("user-agent", [o, ...t].filter(Boolean).join(" ")), Object.fromEntries(n.entries())
}
var ap = "5.0.0",
	cT = () => globalThis.fetch,
	dT = async ({
		url: e,
		headers: t = {},
		successfulResponseHandler: n,
		failedResponseHandler: o,
		abortSignal: r,
		fetch: i = cT()
	}) => {
		try {
			const s = await i(e, {
					method: "GET",
					headers: ip(t, `ai-sdk/provider-utils/${ap}`, rp()),
					signal: r
				}),
				l = Ln(s);
			if (!s.ok) {
				let d;
				try {
					d = await o({
						response: s,
						url: e,
						requestBodyValues: {}
					})
				} catch (c) {
					throw Mn(c) || Ye.isInstance(c) ? c : new Ye({
						message: "Failed to process error response",
						cause: c,
						statusCode: s.status,
						url: e,
						responseHeaders: l,
						requestBodyValues: {}
					})
				}
				throw d.value
			}
			try {
				return await n({
					response: s,
					url: e,
					requestBodyValues: {}
				})
			} catch (d) {
				throw d instanceof Error && (Mn(d) || Ye.isInstance(d)) ? d : new Ye({
					message: "Failed to process successful response",
					cause: d,
					statusCode: s.status,
					url: e,
					responseHeaders: l,
					requestBodyValues: {}
				})
			}
		} catch (s) {
			throw op({
				error: s,
				url: e,
				requestBodyValues: {}
			})
		}
	};

function pT({
	apiKey: e,
	environmentVariableName: t,
	apiKeyParameterName: n = "apiKey",
	description: o
}) {
	if (typeof e == "string") return e;
	if (e != null) throw new to({
		message: `${o} API key must be a string.`
	});
	if (typeof process > "u") throw new to({
		message: `${o} API key is missing. Pass it using the '${n}' parameter. Environment variables are not supported in this environment.`
	});
	if (e = PI[t], e == null) throw new to({
		message: `${o} API key is missing. Pass it using the '${n}' parameter or the ${t} environment variable.`
	});
	if (typeof e != "string") throw new to({
		message: `${o} API key must be a string. The value of the ${t} environment variable is not a string.`
	});
	return e
}
var mT = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
	hT = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;

function rl(e) {
	const t = JSON.parse(e);
	return t === null || typeof t != "object" || mT.test(e) === !1 && hT.test(e) === !1 ? t : fT(t)
}

function fT(e) {
	let t = [e];
	for (; t.length;) {
		const n = t;
		t = [];
		for (const o of n) {
			if (Object.prototype.hasOwnProperty.call(o, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
			if (Object.prototype.hasOwnProperty.call(o, "constructor") && o.constructor !== null && typeof o.constructor == "object" && Object.prototype.hasOwnProperty.call(o.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
			for (const r in o) {
				const i = o[r];
				i && typeof i == "object" && t.push(i)
			}
		}
	}
	return e
}

function oi(e) {
	const {
		stackTraceLimit: t
	} = Error;
	try {
		Error.stackTraceLimit = 0
	} catch {
		return rl(e)
	}
	try {
		return rl(e)
	} finally {
		Error.stackTraceLimit = t
	}
}

function ri(e) {
	if (e.type === "object" || Array.isArray(e.type) && e.type.includes("object")) {
		e.additionalProperties = !1;
		const {
			properties: n
		} = e;
		if (n != null)
			for (const o of Object.keys(n)) n[o] = en(n[o])
	}
	e.items != null && (e.items = Array.isArray(e.items) ? e.items.map(en) : en(e.items)), e.anyOf != null && (e.anyOf = e.anyOf.map(en)), e.allOf != null && (e.allOf = e.allOf.map(en)), e.oneOf != null && (e.oneOf = e.oneOf.map(en));
	const {
		definitions: t
	} = e;
	if (t != null)
		for (const n of Object.keys(t)) t[n] = en(t[n]);
	return e
}

function en(e) {
	return typeof e == "boolean" ? e : ri(e)
}
var _T = Symbol("Let zodToJsonSchema decide on which parser to use"),
	il = {
		name: void 0,
		$refStrategy: "root",
		basePath: ["#"],
		effectStrategy: "input",
		pipeStrategy: "all",
		dateStrategy: "format:date-time",
		mapStrategy: "entries",
		removeAdditionalStrategy: "passthrough",
		allowedAdditionalProperties: !0,
		rejectedAdditionalProperties: !1,
		definitionPath: "definitions",
		strictUnions: !1,
		definitions: {},
		errorMessages: !1,
		patternStrategy: "escape",
		applyRegexFlags: !1,
		emailStrategy: "format:email",
		base64Strategy: "contentEncoding:base64",
		nameStrategy: "ref"
	},
	gT = e => typeof e == "string" ? $e(ie({}, il), {
		name: e
	}) : ie(ie({}, il), e);

function mt() {
	return {}
}

function yT(e, t) {
	var n, o, r;
	const i = {
		type: "array"
	};
	return (n = e.type) != null && n._def && ((r = (o = e.type) == null ? void 0 : o._def) == null ? void 0 : r.typeName) !== ue.ZodAny && (i.items = Pe(e.type._def, $e(ie({}, t), {
		currentPath: [...t.currentPath, "items"]
	}))), e.minLength && (i.minItems = e.minLength.value), e.maxLength && (i.maxItems = e.maxLength.value), e.exactLength && (i.minItems = e.exactLength.value, i.maxItems = e.exactLength.value), i
}

function vT(e) {
	const t = {
		type: "integer",
		format: "int64"
	};
	if (!e.checks) return t;
	for (const n of e.checks) switch (n.kind) {
		case "min":
			n.inclusive ? t.minimum = n.value : t.exclusiveMinimum = n.value;
			break;
		case "max":
			n.inclusive ? t.maximum = n.value : t.exclusiveMaximum = n.value;
			break;
		case "multipleOf":
			t.multipleOf = n.value;
			break
	}
	return t
}

function bT() {
	return {
		type: "boolean"
	}
}

function sp(e, t) {
	return Pe(e.type._def, t)
}
var wT = (e, t) => Pe(e.innerType._def, t);

function lp(e, t, n) {
	const o = n ?? t.dateStrategy;
	if (Array.isArray(o)) return {
		anyOf: o.map(r => lp(e, t, r))
	};
	switch (o) {
		case "string":
		case "format:date-time":
			return {
				type: "string", format: "date-time"
			};
		case "format:date":
			return {
				type: "string", format: "date"
			};
		case "integer":
			return kT(e)
	}
}
var kT = e => {
	const t = {
		type: "integer",
		format: "unix-time"
	};
	for (const n of e.checks) switch (n.kind) {
		case "min":
			t.minimum = n.value;
			break;
		case "max":
			t.maximum = n.value;
			break
	}
	return t
};

function xT(e, t) {
	return $e(ie({}, Pe(e.innerType._def, t)), {
		default: e.defaultValue()
	})
}

function IT(e, t) {
	return t.effectStrategy === "input" ? Pe(e.schema._def, t) : mt()
}

function TT(e) {
	return {
		type: "string",
		enum: Array.from(e.values)
	}
}
var ST = e => "type" in e && e.type === "string" ? !1 : "allOf" in e;

function CT(e, t) {
	const n = [Pe(e.left._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "allOf", "0"]
		})), Pe(e.right._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "allOf", "1"]
		}))].filter(r => !!r),
		o = [];
	return n.forEach(r => {
		if (ST(r)) o.push(...r.allOf);
		else {
			let i = r;
			if ("additionalProperties" in r && r.additionalProperties === !1) {
				const s = r,
					{
						additionalProperties: l
					} = s;
				i = fn(s, ["additionalProperties"])
			}
			o.push(i)
		}
	}), o.length ? {
		allOf: o
	} : void 0
}

function OT(e) {
	const t = typeof e.value;
	return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
		type: Array.isArray(e.value) ? "array" : "object"
	} : {
		type: t === "bigint" ? "integer" : t,
		const: e.value
	}
}
var tr = void 0,
	bt = {
		cuid: /^[cC][^\s-]{8,}$/,
		cuid2: /^[0-9a-z]+$/,
		ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
		email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
		emoji: () => (tr === void 0 && (tr = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), tr),
		uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
		ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
		ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
		ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
		ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
		base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
		base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
		nanoid: /^[a-zA-Z0-9_-]{21}$/,
		jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
	};

function up(e, t) {
	const n = {
		type: "string"
	};
	if (e.checks)
		for (const o of e.checks) switch (o.kind) {
			case "min":
				n.minLength = typeof n.minLength == "number" ? Math.max(n.minLength, o.value) : o.value;
				break;
			case "max":
				n.maxLength = typeof n.maxLength == "number" ? Math.min(n.maxLength, o.value) : o.value;
				break;
			case "email":
				switch (t.emailStrategy) {
					case "format:email":
						wt(n, "email", o.message, t);
						break;
					case "format:idn-email":
						wt(n, "idn-email", o.message, t);
						break;
					case "pattern:zod":
						rt(n, bt.email, o.message, t);
						break
				}
				break;
			case "url":
				wt(n, "uri", o.message, t);
				break;
			case "uuid":
				wt(n, "uuid", o.message, t);
				break;
			case "regex":
				rt(n, o.regex, o.message, t);
				break;
			case "cuid":
				rt(n, bt.cuid, o.message, t);
				break;
			case "cuid2":
				rt(n, bt.cuid2, o.message, t);
				break;
			case "startsWith":
				rt(n, RegExp(`^${nr(o.value, t)}`), o.message, t);
				break;
			case "endsWith":
				rt(n, RegExp(`${nr(o.value, t)}$`), o.message, t);
				break;
			case "datetime":
				wt(n, "date-time", o.message, t);
				break;
			case "date":
				wt(n, "date", o.message, t);
				break;
			case "time":
				wt(n, "time", o.message, t);
				break;
			case "duration":
				wt(n, "duration", o.message, t);
				break;
			case "length":
				n.minLength = typeof n.minLength == "number" ? Math.max(n.minLength, o.value) : o.value, n.maxLength = typeof n.maxLength == "number" ? Math.min(n.maxLength, o.value) : o.value;
				break;
			case "includes": {
				rt(n, RegExp(nr(o.value, t)), o.message, t);
				break
			}
			case "ip": {
				o.version !== "v6" && wt(n, "ipv4", o.message, t), o.version !== "v4" && wt(n, "ipv6", o.message, t);
				break
			}
			case "base64url":
				rt(n, bt.base64url, o.message, t);
				break;
			case "jwt":
				rt(n, bt.jwt, o.message, t);
				break;
			case "cidr": {
				o.version !== "v6" && rt(n, bt.ipv4Cidr, o.message, t), o.version !== "v4" && rt(n, bt.ipv6Cidr, o.message, t);
				break
			}
			case "emoji":
				rt(n, bt.emoji(), o.message, t);
				break;
			case "ulid": {
				rt(n, bt.ulid, o.message, t);
				break
			}
			case "base64": {
				switch (t.base64Strategy) {
					case "format:binary": {
						wt(n, "binary", o.message, t);
						break
					}
					case "contentEncoding:base64": {
						n.contentEncoding = "base64";
						break
					}
					case "pattern:zod": {
						rt(n, bt.base64, o.message, t);
						break
					}
				}
				break
			}
			case "nanoid":
				rt(n, bt.nanoid, o.message, t)
		}
	return n
}

function nr(e, t) {
	return t.patternStrategy === "escape" ? $T(e) : e
}
var AT = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");

function $T(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) AT.has(e[n]) || (t += "\\"), t += e[n];
	return t
}

function wt(e, t, n, o) {
	var r;
	e.format || (r = e.anyOf) != null && r.some(i => i.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
		format: e.format
	}), delete e.format), e.anyOf.push(ie({
		format: t
	}, n && o.errorMessages && {
		errorMessage: {
			format: n
		}
	}))) : e.format = t
}

function rt(e, t, n, o) {
	var r;
	e.pattern || (r = e.allOf) != null && r.some(i => i.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
		pattern: e.pattern
	}), delete e.pattern), e.allOf.push(ie({
		pattern: al(t, o)
	}, n && o.errorMessages && {
		errorMessage: {
			pattern: n
		}
	}))) : e.pattern = al(t, o)
}

function al(e, t) {
	var n;
	if (!t.applyRegexFlags || !e.flags) return e.source;
	const o = {
			i: e.flags.includes("i"),
			m: e.flags.includes("m"),
			s: e.flags.includes("s")
		},
		r = o.i ? e.source.toLowerCase() : e.source;
	let i = "",
		s = !1,
		l = !1,
		d = !1;
	for (let c = 0; c < r.length; c++) {
		if (s) {
			i += r[c], s = !1;
			continue
		}
		if (o.i) {
			if (l) {
				if (r[c].match(/[a-z]/)) {
					d ? (i += r[c], i += `${r[c - 2]}-${r[c]}`.toUpperCase(), d = !1) : r[c + 1] === "-" && ((n = r[c + 2]) != null && n.match(/[a-z]/)) ? (i += r[c], d = !0) : i += `${r[c]}${r[c].toUpperCase()}`;
					continue
				}
			} else if (r[c].match(/[a-z]/)) {
				i += `[${r[c]}${r[c].toUpperCase()}]`;
				continue
			}
		}
		if (o.m) {
			if (r[c] === "^") {
				i += `(^|(?<=[\r
]))`;
				continue
			} else if (r[c] === "$") {
				i += `($|(?=[\r
]))`;
				continue
			}
		}
		if (o.s && r[c] === ".") {
			i += l ? `${r[c]}\r
` : `[${r[c]}\r
]`;
			continue
		}
		i += r[c], r[c] === "\\" ? s = !0 : l && r[c] === "]" ? l = !1 : !l && r[c] === "[" && (l = !0)
	}
	try {
		new RegExp(i)
	} catch {
		return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source
	}
	return i
}

function cp(e, t) {
	var n, o, r, i, s, l;
	const d = {
		type: "object",
		additionalProperties: (n = Pe(e.valueType._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "additionalProperties"]
		}))) != null ? n : t.allowedAdditionalProperties
	};
	if (((o = e.keyType) == null ? void 0 : o._def.typeName) === ue.ZodString && ((r = e.keyType._def.checks) != null && r.length)) {
		const c = up(e.keyType._def, t),
			{
				type: p
			} = c,
			m = fn(c, ["type"]);
		return $e(ie({}, d), {
			propertyNames: m
		})
	} else {
		if (((i = e.keyType) == null ? void 0 : i._def.typeName) === ue.ZodEnum) return $e(ie({}, d), {
			propertyNames: {
				enum: e.keyType._def.values
			}
		});
		if (((s = e.keyType) == null ? void 0 : s._def.typeName) === ue.ZodBranded && e.keyType._def.type._def.typeName === ue.ZodString && ((l = e.keyType._def.type._def.checks) != null && l.length)) {
			const c = sp(e.keyType._def, t),
				{
					type: p
				} = c,
				m = fn(c, ["type"]);
			return $e(ie({}, d), {
				propertyNames: m
			})
		}
	}
	return d
}

function ET(e, t) {
	if (t.mapStrategy === "record") return cp(e, t);
	const n = Pe(e.keyType._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "items", "items", "0"]
		})) || mt(),
		o = Pe(e.valueType._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "items", "items", "1"]
		})) || mt();
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [n, o],
			minItems: 2,
			maxItems: 2
		}
	}
}

function RT(e) {
	const t = e.values,
		o = Object.keys(e.values).filter(i => typeof t[t[i]] != "number").map(i => t[i]),
		r = Array.from(new Set(o.map(i => typeof i)));
	return {
		type: r.length === 1 ? r[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: o
	}
}

function NT() {
	return {
		not: mt()
	}
}

function PT() {
	return {
		type: "null"
	}
}
var Tr = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};

function MT(e, t) {
	const n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
	if (n.every(o => o._def.typeName in Tr && (!o._def.checks || !o._def.checks.length))) {
		const o = n.reduce((r, i) => {
			const s = Tr[i._def.typeName];
			return s && !r.includes(s) ? [...r, s] : r
		}, []);
		return {
			type: o.length > 1 ? o : o[0]
		}
	} else if (n.every(o => o._def.typeName === "ZodLiteral" && !o.description)) {
		const o = n.reduce((r, i) => {
			const s = typeof i._def.value;
			switch (s) {
				case "string":
				case "number":
				case "boolean":
					return [...r, s];
				case "bigint":
					return [...r, "integer"];
				case "object":
					if (i._def.value === null) return [...r, "null"];
				case "symbol":
				case "undefined":
				case "function":
				default:
					return r
			}
		}, []);
		if (o.length === n.length) {
			const r = o.filter((i, s, l) => l.indexOf(i) === s);
			return {
				type: r.length > 1 ? r : r[0],
				enum: n.reduce((i, s) => i.includes(s._def.value) ? i : [...i, s._def.value], [])
			}
		}
	} else if (n.every(o => o._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: n.reduce((o, r) => [...o, ...r._def.values.filter(i => !o.includes(i))], [])
	};
	return zT(e, t)
}
var zT = (e, t) => {
	const n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((o, r) => Pe(o._def, $e(ie({}, t), {
		currentPath: [...t.currentPath, "anyOf", `${r}`]
	}))).filter(o => !!o && (!t.strictUnions || typeof o == "object" && Object.keys(o).length > 0));
	return n.length ? {
		anyOf: n
	} : void 0
};

function DT(e, t) {
	if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length)) return {
		type: [Tr[e.innerType._def.typeName], "null"]
	};
	const n = Pe(e.innerType._def, $e(ie({}, t), {
		currentPath: [...t.currentPath, "anyOf", "0"]
	}));
	return n && {
		anyOf: [n, {
			type: "null"
		}]
	}
}

function qT(e) {
	const t = {
		type: "number"
	};
	if (!e.checks) return t;
	for (const n of e.checks) switch (n.kind) {
		case "int":
			t.type = "integer";
			break;
		case "min":
			n.inclusive ? t.minimum = n.value : t.exclusiveMinimum = n.value;
			break;
		case "max":
			n.inclusive ? t.maximum = n.value : t.exclusiveMaximum = n.value;
			break;
		case "multipleOf":
			t.multipleOf = n.value;
			break
	}
	return t
}

function UT(e, t) {
	const n = {
			type: "object",
			properties: {}
		},
		o = [],
		r = e.shape();
	for (const s in r) {
		let l = r[s];
		if (l === void 0 || l._def === void 0) continue;
		const d = LT(l),
			c = Pe(l._def, $e(ie({}, t), {
				currentPath: [...t.currentPath, "properties", s],
				propertyPath: [...t.currentPath, "properties", s]
			}));
		c !== void 0 && (n.properties[s] = c, d || o.push(s))
	}
	o.length && (n.required = o);
	const i = jT(e, t);
	return i !== void 0 && (n.additionalProperties = i), n
}

function jT(e, t) {
	if (e.catchall._def.typeName !== "ZodNever") return Pe(e.catchall._def, $e(ie({}, t), {
		currentPath: [...t.currentPath, "additionalProperties"]
	}));
	switch (e.unknownKeys) {
		case "passthrough":
			return t.allowedAdditionalProperties;
		case "strict":
			return t.rejectedAdditionalProperties;
		case "strip":
			return t.removeAdditionalStrategy === "strict" ? t.allowedAdditionalProperties : t.rejectedAdditionalProperties
	}
}

function LT(e) {
	try {
		return e.isOptional()
	} catch {
		return !0
	}
}
var ZT = (e, t) => {
		var n;
		if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString())) return Pe(e.innerType._def, t);
		const o = Pe(e.innerType._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "anyOf", "1"]
		}));
		return o ? {
			anyOf: [{
				not: mt()
			}, o]
		} : mt()
	},
	FT = (e, t) => {
		if (t.pipeStrategy === "input") return Pe(e.in._def, t);
		if (t.pipeStrategy === "output") return Pe(e.out._def, t);
		const n = Pe(e.in._def, $e(ie({}, t), {
				currentPath: [...t.currentPath, "allOf", "0"]
			})),
			o = Pe(e.out._def, $e(ie({}, t), {
				currentPath: [...t.currentPath, "allOf", n ? "1" : "0"]
			}));
		return {
			allOf: [n, o].filter(r => r !== void 0)
		}
	};

function BT(e, t) {
	return Pe(e.type._def, t)
}

function VT(e, t) {
	const o = {
		type: "array",
		uniqueItems: !0,
		items: Pe(e.valueType._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "items"]
		}))
	};
	return e.minSize && (o.minItems = e.minSize.value), e.maxSize && (o.maxItems = e.maxSize.value), o
}

function HT(e, t) {
	return e.rest ? {
		type: "array",
		minItems: e.items.length,
		items: e.items.map((n, o) => Pe(n._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "items", `${o}`]
		}))).reduce((n, o) => o === void 0 ? n : [...n, o], []),
		additionalItems: Pe(e.rest._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "additionalItems"]
		}))
	} : {
		type: "array",
		minItems: e.items.length,
		maxItems: e.items.length,
		items: e.items.map((n, o) => Pe(n._def, $e(ie({}, t), {
			currentPath: [...t.currentPath, "items", `${o}`]
		}))).reduce((n, o) => o === void 0 ? n : [...n, o], [])
	}
}

function GT() {
	return {
		not: mt()
	}
}

function JT() {
	return mt()
}
var WT = (e, t) => Pe(e.innerType._def, t),
	KT = (e, t, n) => {
		switch (t) {
			case ue.ZodString:
				return up(e, n);
			case ue.ZodNumber:
				return qT(e);
			case ue.ZodObject:
				return UT(e, n);
			case ue.ZodBigInt:
				return vT(e);
			case ue.ZodBoolean:
				return bT();
			case ue.ZodDate:
				return lp(e, n);
			case ue.ZodUndefined:
				return GT();
			case ue.ZodNull:
				return PT();
			case ue.ZodArray:
				return yT(e, n);
			case ue.ZodUnion:
			case ue.ZodDiscriminatedUnion:
				return MT(e, n);
			case ue.ZodIntersection:
				return CT(e, n);
			case ue.ZodTuple:
				return HT(e, n);
			case ue.ZodRecord:
				return cp(e, n);
			case ue.ZodLiteral:
				return OT(e);
			case ue.ZodEnum:
				return TT(e);
			case ue.ZodNativeEnum:
				return RT(e);
			case ue.ZodNullable:
				return DT(e, n);
			case ue.ZodOptional:
				return ZT(e, n);
			case ue.ZodMap:
				return ET(e, n);
			case ue.ZodSet:
				return VT(e, n);
			case ue.ZodLazy:
				return () => e.getter()._def;
			case ue.ZodPromise:
				return BT(e, n);
			case ue.ZodNaN:
			case ue.ZodNever:
				return NT();
			case ue.ZodEffects:
				return IT(e, n);
			case ue.ZodAny:
				return mt();
			case ue.ZodUnknown:
				return JT();
			case ue.ZodDefault:
				return xT(e, n);
			case ue.ZodBranded:
				return sp(e, n);
			case ue.ZodReadonly:
				return WT(e, n);
			case ue.ZodCatch:
				return wT(e, n);
			case ue.ZodPipeline:
				return FT(e, n);
			case ue.ZodFunction:
			case ue.ZodVoid:
			case ue.ZodSymbol:
				return;
			default:
				return (o => {})()
		}
	},
	YT = (e, t) => {
		let n = 0;
		for (; n < e.length && n < t.length && e[n] === t[n]; n++);
		return [(e.length - n).toString(), ...t.slice(n)].join("/")
	};

function Pe(e, t, n = !1) {
	var o;
	const r = t.seen.get(e);
	if (t.override) {
		const d = (o = t.override) == null ? void 0 : o.call(t, e, t, r, n);
		if (d !== _T) return d
	}
	if (r && !n) {
		const d = XT(r, t);
		if (d !== void 0) return d
	}
	const i = {
		def: e,
		path: t.currentPath,
		jsonSchema: void 0
	};
	t.seen.set(e, i);
	const s = KT(e, e.typeName, t),
		l = typeof s == "function" ? Pe(s(), t) : s;
	if (l && QT(e, t, l), t.postProcess) {
		const d = t.postProcess(l, e, t);
		return i.jsonSchema = l, d
	}
	return i.jsonSchema = l, l
}
var XT = (e, t) => {
		switch (t.$refStrategy) {
			case "root":
				return {
					$ref: e.path.join("/")
				};
			case "relative":
				return {
					$ref: YT(t.currentPath, e.path)
				};
			case "none":
			case "seen":
				return e.path.length < t.currentPath.length && e.path.every((n, o) => t.currentPath[o] === n) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), mt()) : t.$refStrategy === "seen" ? mt() : void 0
		}
	},
	QT = (e, t, n) => (e.description && (n.description = e.description), n),
	eS = e => {
		const t = gT(e),
			n = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
		return $e(ie({}, t), {
			currentPath: n,
			propertyPath: void 0,
			seen: new Map(Object.entries(t.definitions).map(([o, r]) => [r._def, {
				def: r._def,
				path: [...t.basePath, t.definitionPath, o],
				jsonSchema: void 0
			}]))
		})
	},
	tS = (e, t) => {
		var n;
		const o = eS(t);
		let r = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((c, [p, m]) => {
			var h;
			return $e(ie({}, c), {
				[p]: (h = Pe(m._def, $e(ie({}, o), {
					currentPath: [...o.basePath, o.definitionPath, p]
				}), !0)) != null ? h : mt()
			})
		}, {}) : void 0;
		const i = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name,
			s = (n = Pe(e._def, i === void 0 ? o : $e(ie({}, o), {
				currentPath: [...o.basePath, o.definitionPath, i]
			}), !1)) != null ? n : mt(),
			l = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
		l !== void 0 && (s.title = l);
		const d = i === void 0 ? r ? $e(ie({}, s), {
			[o.definitionPath]: r
		}) : s : {
			$ref: [...o.$refStrategy === "relative" ? [] : o.basePath, o.definitionPath, i].join("/"),
			[o.definitionPath]: $e(ie({}, r), {
				[i]: s
			})
		};
		return d.$schema = "http://json-schema.org/draft-07/schema#", d
	},
	Sr = Symbol.for("vercel.ai.schema");

function Ro(e, {
	validate: t
} = {}) {
	return {
		[Sr]: !0,
		_type: void 0,
		get jsonSchema() {
			return typeof e == "function" && (e = e()), e
		},
		validate: t
	}
}

function nS(e) {
	return typeof e == "object" && e !== null && Sr in e && e[Sr] === !0 && "jsonSchema" in e && "validate" in e
}

function oS(e) {
	return e == null ? Ro({
		type: "object",
		properties: {},
		additionalProperties: !1
	}) : nS(e) ? e : "~standard" in e ? e["~standard"].vendor === "zod" ? lS(e) : rS(e) : e()
}

function rS(e) {
	return Ro(() => ri(e["~standard"].jsonSchema.input({
		target: "draft-07"
	})), {
		validate: async t => {
			const n = await e["~standard"].validate(t);
			return "value" in n ? {
				success: !0,
				value: n.value
			} : {
				success: !1,
				error: new Pn({
					value: t,
					cause: n.issues
				})
			}
		}
	})
}

function iS(e, t) {
	var n;
	const o = (n = void 0) != null ? n : !1;
	return Ro(() => tS(e, {
		$refStrategy: o ? "root" : "none"
	}), {
		validate: async r => {
			const i = await e.safeParseAsync(r);
			return i.success ? {
				success: !0,
				value: i.data
			} : {
				success: !1,
				error: i.error
			}
		}
	})
}

function aS(e, t) {
	var n;
	const o = (n = void 0) != null ? n : !1;
	return Ro(() => ri(Eu(e, {
		target: "draft-7",
		io: "input",
		reused: o ? "ref" : "inline"
	})), {
		validate: async r => {
			const i = await jr(e, r);
			return i.success ? {
				success: !0,
				value: i.data
			} : {
				success: !1,
				error: i.error
			}
		}
	})
}

function sS(e) {
	return "_zod" in e
}

function lS(e, t) {
	return sS(e) ? aS(e) : iS(e)
}
async function uS({
	value: e,
	schema: t,
	context: n
}) {
	const o = await dp({
		value: e,
		schema: t,
		context: n
	});
	if (!o.success) throw Pn.wrap({
		value: e,
		cause: o.error,
		context: n
	});
	return o.value
}
async function dp({
	value: e,
	schema: t,
	context: n
}) {
	const o = oS(t);
	try {
		if (o.validate == null) return {
			success: !0,
			value: e,
			rawValue: e
		};
		const r = await o.validate(e);
		return r.success ? {
			success: !0,
			value: r.value,
			rawValue: e
		} : {
			success: !1,
			error: Pn.wrap({
				value: e,
				cause: r.error,
				context: n
			}),
			rawValue: e
		}
	} catch (r) {
		return {
			success: !1,
			error: Pn.wrap({
				value: e,
				cause: r,
				context: n
			}),
			rawValue: e
		}
	}
}
async function cS({
	text: e,
	schema: t
}) {
	try {
		const n = oi(e);
		return t == null ? n : await uS({
			value: n,
			schema: t
		})
	} catch (n) {
		throw yo.isInstance(n) || Pn.isInstance(n) ? n : new yo({
			text: e,
			cause: n
		})
	}
}
async function pp({
	text: e,
	schema: t
}) {
	try {
		const n = oi(e);
		return t == null ? {
			success: !0,
			value: n,
			rawValue: n
		} : await dp({
			value: n,
			schema: t
		})
	} catch (n) {
		return {
			success: !1,
			error: yo.isInstance(n) ? n : new yo({
				text: e,
				cause: n
			}),
			rawValue: void 0
		}
	}
}

function or(e) {
	try {
		return oi(e), !0
	} catch {
		return !1
	}
}

function dS({
	stream: e,
	schema: t
}) {
	return e.pipeThrough(new TextDecoderStream).pipeThrough(new tT).pipeThrough(new TransformStream({
		async transform({
			data: n
		}, o) {
			n !== "[DONE]" && o.enqueue(await pp({
				text: n,
				schema: t
			}))
		}
	}))
}
var pS = () => globalThis.fetch,
	rn = async ({
		url: e,
		headers: t,
		body: n,
		failedResponseHandler: o,
		successfulResponseHandler: r,
		abortSignal: i,
		fetch: s
	}) => await mS({
		url: e,
		headers: ie({
			"Content-Type": "application/json"
		}, t),
		body: {
			content: JSON.stringify(n),
			values: n
		},
		failedResponseHandler: o,
		successfulResponseHandler: r,
		abortSignal: i,
		fetch: s
	}), mS = async ({
		url: e,
		headers: t = {},
		body: n,
		successfulResponseHandler: o,
		failedResponseHandler: r,
		abortSignal: i,
		fetch: s = pS()
	}) => {
		try {
			const l = await s(e, {
					method: "POST",
					headers: ip(t, `ai-sdk/provider-utils/${ap}`, rp()),
					body: n.content,
					signal: i
				}),
				d = Ln(l);
			if (!l.ok) {
				let c;
				try {
					c = await r({
						response: l,
						url: e,
						requestBodyValues: n.values
					})
				} catch (p) {
					throw Mn(p) || Ye.isInstance(p) ? p : new Ye({
						message: "Failed to process error response",
						cause: p,
						statusCode: l.status,
						url: e,
						responseHeaders: d,
						requestBodyValues: n.values
					})
				}
				throw c.value
			}
			try {
				return await o({
					response: l,
					url: e,
					requestBodyValues: n.values
				})
			} catch (c) {
				throw c instanceof Error && (Mn(c) || Ye.isInstance(c)) ? c : new Ye({
					message: "Failed to process successful response",
					cause: c,
					statusCode: l.status,
					url: e,
					responseHeaders: d,
					requestBodyValues: n.values
				})
			}
		} catch (l) {
			throw op({
				error: l,
				url: e,
				requestBodyValues: n.values
			})
		}
	};

function hS({
	id: e,
	inputSchema: t
}) {
	return n => {
		var o = n,
			{
				execute: r,
				outputSchema: i,
				needsApproval: s,
				toModelOutput: l,
				onInputStart: d,
				onInputDelta: c,
				onInputAvailable: p
			} = o,
			m = fn(o, ["execute", "outputSchema", "needsApproval", "toModelOutput", "onInputStart", "onInputDelta", "onInputAvailable"]);
		return {
			type: "provider",
			isProviderExecuted: !1,
			id: e,
			args: m,
			inputSchema: t,
			outputSchema: i,
			execute: r,
			needsApproval: s,
			toModelOutput: l,
			onInputStart: d,
			onInputDelta: c,
			onInputAvailable: p
		}
	}
}
var fS = ({
	errorSchema: e,
	errorToMessage: t,
	isRetryable: n
}) => async ({
	response: o,
	url: r,
	requestBodyValues: i
}) => {
	const s = await o.text(),
		l = Ln(o);
	if (s.trim() === "") return {
		responseHeaders: l,
		value: new Ye({
			message: o.statusText,
			url: r,
			requestBodyValues: i,
			statusCode: o.status,
			responseHeaders: l,
			responseBody: s,
			isRetryable: n == null ? void 0 : n(o)
		})
	};
	try {
		const d = await cS({
			text: s,
			schema: e
		});
		return {
			responseHeaders: l,
			value: new Ye({
				message: t(d),
				url: r,
				requestBodyValues: i,
				statusCode: o.status,
				responseHeaders: l,
				responseBody: s,
				data: d,
				isRetryable: n == null ? void 0 : n(o, d)
			})
		}
	} catch {
		return {
			responseHeaders: l,
			value: new Ye({
				message: o.statusText,
				url: r,
				requestBodyValues: i,
				statusCode: o.status,
				responseHeaders: l,
				responseBody: s,
				isRetryable: n == null ? void 0 : n(o)
			})
		}
	}
}, mp = e => async ({
	response: t
}) => {
	const n = Ln(t);
	if (t.body == null) throw new FI({});
	return {
		responseHeaders: n,
		value: dS({
			stream: t.body,
			schema: e
		})
	}
}, _n = e => async ({
	response: t,
	url: n,
	requestBodyValues: o
}) => {
	const r = await t.text(),
		i = await pp({
			text: r,
			schema: e
		}),
		s = Ln(t);
	if (!i.success) throw new Ye({
		message: "Invalid JSON response",
		cause: i.error,
		statusCode: t.status,
		responseHeaders: s,
		responseBody: r,
		url: n,
		requestBodyValues: o
	});
	return {
		responseHeaders: s,
		value: i.value,
		rawValue: i.rawValue
	}
};

function _S(e) {
	return e == null ? void 0 : e.replace(/\/$/, "")
}

function rr(e) {
	return e != null
}
var hp = (e => (e.Unknown = "unknown", e.OpenAIResponsesV1 = "openai-responses-v1", e.AzureOpenAIResponsesV1 = "azure-openai-responses-v1", e.XAIResponsesV1 = "xai-responses-v1", e.AnthropicClaudeV1 = "anthropic-claude-v1", e.GoogleGeminiV1 = "google-gemini-v1", e))(hp || {}),
	gS = "anthropic-claude-v1",
	ii = u({
		id: a().nullish(),
		format: Y(hp).nullish(),
		index: y().optional()
	}).loose(),
	yS = u({
		type: f("reasoning.summary"),
		summary: a()
	}).extend(ii.shape),
	vS = u({
		type: f("reasoning.encrypted"),
		data: a()
	}).extend(ii.shape),
	bS = u({
		type: f("reasoning.text"),
		text: a().nullish(),
		signature: a().nullish()
	}).extend(ii.shape),
	fp = le([yS, vS, bS]),
	oo = le([fp, Se().transform(() => null)]),
	No = R(oo).transform(e => e.filter(t => !!t));
le([u({
	delta: u({
		reasoning_details: R(oo)
	})
}).transform(e => e.delta.reasoning_details.filter(rr)), u({
	message: u({
		reasoning_details: R(oo)
	})
}).transform(e => e.message.reasoning_details.filter(rr)), u({
	text: a(),
	reasoning_details: R(oo)
}).transform(e => e.reasoning_details.filter(rr))]);
var Po = u({
	error: u({
		code: le([a(), y()]).nullable().optional().default(null),
		message: a(),
		type: a().nullable().optional().default(null),
		param: nt().nullable().optional().default(null)
	}).passthrough()
}).passthrough();

function wS(e) {
	const n = e.error.metadata;
	if (!n) return e.error.message;
	const o = [];
	typeof n.provider_name == "string" && n.provider_name && o.push(`[${n.provider_name}]`);
	const r = n.raw,
		i = Cr(r);
	return i && i !== e.error.message ? o.push(i) : o.push(e.error.message), o.join(" ")
}

function Cr(e) {
	if (typeof e == "string") try {
		const n = JSON.parse(e);
		return typeof n == "object" && n !== null ? Cr(n) : e
	} catch {
		return e
	}
	if (typeof e != "object" || e === null) return;
	const t = e;
	for (const n of ["message", "error", "detail", "details", "msg"]) {
		const o = t[n];
		if (typeof o == "string" && o.length > 0) return o;
		if (typeof o == "object" && o !== null) {
			const r = Cr(o);
			if (r) return r
		}
	}
}
var Vt = fS({
		errorSchema: Po,
		errorToMessage: wS
	}),
	_p = u({
		type: f("file"),
		file: u({
			hash: a(),
			name: a(),
			content: R(u({
				type: a(),
				text: a().optional()
			}).catchall(nt())).optional()
		}).catchall(nt())
	}).catchall(nt()),
	ai = u({
		provider: a(),
		reasoning_details: R(fp).optional(),
		annotations: R(_p).optional(),
		usage: u({
			promptTokens: y(),
			promptTokensDetails: u({
				cachedTokens: y()
			}).catchall(nt()).optional(),
			completionTokens: y(),
			completionTokensDetails: u({
				reasoningTokens: y()
			}).catchall(nt()).optional(),
			totalTokens: y(),
			cost: y().optional(),
			costDetails: u({
				upstreamInferenceCost: y()
			}).catchall(nt()).optional()
		}).catchall(nt())
	}).catchall(nt()),
	Or = u({
		openrouter: u({
			reasoning_details: No.optional(),
			annotations: R(_p).optional()
		}).optional()
	}).optional();

function vo(e) {
	var t, n, o, r, i, s, l, d;
	const c = (t = e.prompt_tokens) != null ? t : 0,
		p = (n = e.completion_tokens) != null ? n : 0,
		m = (r = (o = e.prompt_tokens_details) == null ? void 0 : o.cached_tokens) != null ? r : 0,
		h = (s = (i = e.prompt_tokens_details) == null ? void 0 : i.cache_write_tokens) != null ? s : void 0,
		g = (d = (l = e.completion_tokens_details) == null ? void 0 : l.reasoning_tokens) != null ? d : 0;
	return {
		inputTokens: {
			total: c,
			noCache: c - m,
			cacheRead: m,
			cacheWrite: h
		},
		outputTokens: {
			total: p,
			text: p - g,
			reasoning: g
		},
		raw: e
	}
}

function gp() {
	return {
		inputTokens: {
			total: 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	}
}

function kS(e) {
	switch (e) {
		case "stop":
			return "stop";
		case "length":
			return "length";
		case "content_filter":
			return "content-filter";
		case "function_call":
		case "tool_calls":
			return "tool-calls";
		default:
			return "other"
	}
}

function bo(e) {
	return {
		unified: kS(e),
		raw: e ?? void 0
	}
}

function _t(e, t) {
	return {
		unified: e,
		raw: t
	}
}

function yp(e, t) {
	const n = e.getReader();
	return new ReadableStream({
		async pull(o) {
			try {
				const {
					done: r,
					value: i
				} = await n.read();
				r ? o.close() : o.enqueue(i)
			} catch (r) {
				t(r), n.cancel().catch(() => {}), o.close()
			}
		},
		cancel(o) {
			n.cancel(o)
		}
	})
}

function xS(e) {
	return JSON.stringify(Ar(e))
}

function Ar(e) {
	if (e == null) return e;
	if (Array.isArray(e)) return e.map(Ar);
	if (typeof e == "object") {
		const t = {},
			n = Object.entries(e);
		n.sort(([o], [r]) => o.localeCompare(r));
		for (const [o, r] of n) t[o] = Ar(r);
		return t
	}
	return e
}
var ro, IS = class {
	constructor() {
		UI(this, ro, new Set)
	}
	upsert(e) {
		const t = this.getCanonicalKey(e);
		return t === null || Rs(this, ro).has(t) ? !1 : (Rs(this, ro).add(t), !0)
	}
	getCanonicalKey(e) {
		switch (e.type) {
			case "reasoning.summary":
				return e.summary;
			case "reasoning.encrypted":
				return e.id ? e.id : e.data;
			case "reasoning.text":
				return e.text ? e.text : e.signature ? e.signature : null;
			default:
				return null
		}
	}
};
ro = new WeakMap;
var TS = ["wav", "mp3", "aiff", "aac", "ogg", "flac", "m4a", "pcm16", "pcm24"];

function Mo({
	url: e,
	protocols: t
}) {
	try {
		const n = new URL(e);
		return t.has(n.protocol)
	} catch {
		return !1
	}
}

function Sn({
	data: e,
	mediaType: t,
	defaultMediaType: n
}) {
	if (e instanceof Uint8Array) {
		const r = oT(e);
		return `data:${t ?? n};base64,${r}`
	}
	const o = e.toString();
	return Mo({
		url: o,
		protocols: new Set(["http:", "https:"])
	}) || o.startsWith("data:") ? o : `data:${t ?? n};base64,${o}`
}

function io({
	part: e,
	defaultMediaType: t
}) {
	return vp({
		data: e.data,
		mediaType: e.mediaType,
		defaultMediaType: t
	})
}

function vp({
	data: e,
	mediaType: t,
	defaultMediaType: n
}) {
	switch (e.type) {
		case "data":
			return Sn({
				data: e.data,
				mediaType: t,
				defaultMediaType: n
			});
		case "url": {
			const r = e.url.toString();
			if (r.startsWith("data:") || Mo({
					url: r,
					protocols: new Set(["http:", "https:"])
				})) return r;
			throw new Error("Only http(s) and data: file URLs are supported by OpenRouter")
		}
		case "text": {
			const r = new TextEncoder().encode(e.text);
			return Sn({
				data: r,
				mediaType: t ?? "text/plain",
				defaultMediaType: n
			})
		}
		case "reference":
			throw new Error("Provider file references are not supported by OpenRouter")
	}
	return Sn({
		data: e,
		mediaType: t,
		defaultMediaType: n
	})
}

function sl(e, t) {
	var n;
	const o = e.match(/^data:([^;]+)/);
	return o && (n = o[1]) != null ? n : t
}

function wo(e) {
	const t = e.match(/^data:[^;]*;base64,(.+)$/);
	return t ? t[1] : e
}
var bp = {
	mpeg: "mp3",
	mp3: "mp3",
	"x-wav": "wav",
	wave: "wav",
	wav: "wav",
	ogg: "ogg",
	vorbis: "ogg",
	aac: "aac",
	"x-aac": "aac",
	m4a: "m4a",
	"x-m4a": "m4a",
	mp4: "m4a",
	aiff: "aiff",
	"x-aiff": "aiff",
	flac: "flac",
	"x-flac": "flac",
	pcm16: "pcm16",
	pcm24: "pcm24"
};

function SS(e) {
	const t = io({
		part: e,
		defaultMediaType: "audio/mpeg"
	});
	if (Mo({
			url: t,
			protocols: new Set(["http:", "https:"])
		})) throw new Error(`Audio files cannot be provided as URLs.

OpenRouter requires audio to be base64-encoded. Please:
1. Download the audio file locally
2. Read it as a Buffer or Uint8Array
3. Pass it as the data parameter

The AI SDK will automatically handle base64 encoding.

Learn more: https://openrouter.ai/docs/features/multimodal/audio`);
	const n = wo(t),
		o = e.mediaType || "audio/mpeg",
		r = o.replace("audio/", ""),
		i = bp[r];
	if (i === void 0) {
		const s = TS.join(", ");
		throw new Error(`Unsupported audio format: "${o}"

OpenRouter supports the following audio formats: ${s}

Learn more: https://openrouter.ai/docs/features/multimodal/audio`)
	}
	return {
		data: n,
		format: i
	}
}

function Ut(e) {
	var t, n, o;
	const r = e == null ? void 0 : e.anthropic,
		i = e == null ? void 0 : e.openrouter;
	return (o = (n = (t = i == null ? void 0 : i.cacheControl) != null ? t : i == null ? void 0 : i.cache_control) != null ? n : r == null ? void 0 : r.cacheControl) != null ? o : r == null ? void 0 : r.cache_control
}

function CS(e) {
	var t, n, o, r, i, s, l, d;
	const c = [],
		p = new IS;
	for (const {
			role: m,
			content: h,
			providerOptions: g
		}
		of e) switch (m) {
		case "system": {
			const _ = Ut(g);
			c.push({
				role: "system",
				content: [ie({
					type: "text",
					text: h
				}, _ && {
					cache_control: _
				})]
			});
			break
		}
		case "user": {
			if (h.length === 1 && ((t = h[0]) == null ? void 0 : t.type) === "text") {
				const A = (n = Ut(g)) != null ? n : Ut(h[0].providerOptions),
					I = A ? [{
						type: "text",
						text: h[0].text,
						cache_control: A
					}] : h[0].text;
				c.push({
					role: "user",
					content: I
				});
				break
			}
			const _ = Ut(g);
			let w = -1;
			for (let A = h.length - 1; A >= 0; A--)
				if (((o = h[A]) == null ? void 0 : o.type) === "text") {
					w = A;
					break
				} const k = h.map((A, I) => {
				var E, S, v, b, T, q, L;
				const O = A.type === "text" && I === w,
					B = Ut(A.providerOptions),
					F = A.type === "text" ? B ?? (O ? _ : void 0) : B;
				switch (A.type) {
					case "text":
						return ie({
							type: "text",
							text: A.text
						}, F && {
							cache_control: F
						});
					case "file": {
						if ((E = A.mediaType) != null && E.startsWith("image/")) {
							const oe = io({
								part: A,
								defaultMediaType: "image/jpeg"
							});
							return ie({
								type: "image_url",
								image_url: {
									url: oe
								}
							}, F && {
								cache_control: F
							})
						}
						if ((S = A.mediaType) != null && S.startsWith("video/")) {
							const oe = io({
								part: A,
								defaultMediaType: "video/mp4"
							});
							return ie({
								type: "video_url",
								video_url: {
									url: oe
								}
							}, F && {
								cache_control: F
							})
						}
						if ((v = A.mediaType) != null && v.startsWith("audio/")) return ie({
							type: "input_audio",
							input_audio: SS(A)
						}, F && {
							cache_control: F
						});
						const z = String((L = (q = (T = (b = A.providerOptions) == null ? void 0 : b.openrouter) == null ? void 0 : T.filename) != null ? q : A.filename) != null ? L : ""),
							N = io({
								part: A,
								defaultMediaType: "application/pdf"
							});
						return Mo({
							url: N,
							protocols: new Set(["http:", "https:"])
						}) ? {
							type: "file",
							file: {
								filename: z,
								file_data: N
							}
						} : ie({
							type: "file",
							file: {
								filename: z,
								file_data: N
							}
						}, F && {
							cache_control: F
						})
					}
					default:
						return ie({
							type: "text",
							text: ""
						}, F && {
							cache_control: F
						})
				}
			});
			c.push({
				role: "user",
				content: k
			});
			break
		}
		case "assistant": {
			let _ = "",
				w = "";
			const k = [];
			for (const T of h) switch (T.type) {
				case "text": {
					_ += T.text;
					break
				}
				case "tool-call": {
					k.push({
						id: T.toolCallId,
						type: "function",
						function: {
							name: T.toolName,
							arguments: xS(T.input)
						}
					});
					break
				}
				case "reasoning": {
					w += T.text;
					break
				}
			}
			const A = Or.safeParse(g),
				I = A.success ? (i = (r = A.data) == null ? void 0 : r.openrouter) == null ? void 0 : i.reasoning_details : void 0,
				E = A.success ? (l = (s = A.data) == null ? void 0 : s.openrouter) == null ? void 0 : l.annotations : void 0,
				S = I && Array.isArray(I) ? I : $S(h);
			let v;
			if (S) {
				const T = S.filter(L => {
					var O;
					if (L.type !== "reasoning.text") return !0;
					const B = (O = L.format) != null ? O : gS;
					return B !== "anthropic-claude-v1" && B !== "google-gemini-v1" ? !0 : !!L.signature
				});
				if (T.length < S.length) {
					const L = globalThis.AI_SDK_LOG_WARNINGS;
					L !== !1 && typeof L != "function" && console.warn("[openrouter] Some reasoning_details entries were removed because they were missing signatures. See https://github.com/OpenRouterTeam/ai-sdk-provider/issues/423 and https://github.com/OpenRouterTeam/ai-sdk-provider/issues/418 for more details.")
				}
				const q = [];
				for (const L of T) p.upsert(L) && q.push(L);
				v = q
			}
			const b = w && v && v.length > 0 ? w : void 0;
			c.push({
				role: "assistant",
				content: _ || null,
				tool_calls: k.length > 0 ? k : void 0,
				reasoning: b,
				reasoning_details: v,
				annotations: E,
				cache_control: Ut(g)
			});
			break
		}
		case "tool": {
			for (const _ of h) {
				if (_.type === "tool-approval-response") continue;
				const w = OS(_);
				c.push({
					role: "tool",
					tool_call_id: _.toolCallId,
					content: w,
					name: _.toolName,
					cache_control: (d = Ut(g)) != null ? d : Ut(_.providerOptions)
				})
			}
			break
		}
	}
	return c
}

function OS(e) {
	var t;
	switch (e.output.type) {
		case "text":
		case "error-text":
			return e.output.value;
		case "json":
		case "error-json":
			return JSON.stringify(e.output.value);
		case "content":
			return AS(e.output.value);
		case "execution-denied":
			return (t = e.output.reason) != null ? t : "Tool execution denied"
	}
}

function AS(e) {
	return e.map(t => {
		var n, o, r, i;
		switch (t.type) {
			case "text":
				return {
					type: "text", text: t.text
				};
			case "file": {
				const s = vp({
					data: t.data,
					mediaType: t.mediaType,
					defaultMediaType: "application/octet-stream"
				});
				if ((n = t.mediaType) != null && n.startsWith("image/")) return {
					type: "image_url",
					image_url: {
						url: s
					}
				};
				if ((o = t.mediaType) != null && o.startsWith("video/")) return {
					type: "video_url",
					video_url: {
						url: s
					}
				};
				if ((r = t.mediaType) != null && r.startsWith("audio/")) {
					const l = t.mediaType.replace("audio/", ""),
						d = bp[l];
					if (d !== void 0) return {
						type: "input_audio",
						input_audio: {
							data: wo(s),
							format: d
						}
					}
				}
				return {
					type: "file",
					file: {
						filename: (i = t.filename) != null ? i : "",
						file_data: s
					}
				}
			}
			case "custom":
				return {
					type: "text", text: JSON.stringify(t)
				};
			default:
				return {
					type: "text", text: JSON.stringify(t)
				}
		}
	})
}

function $S(e) {
	var t, n, o, r;
	for (const i of e)
		if (i.type === "tool-call") {
			const s = Or.safeParse(i.providerOptions);
			if (s.success && ((n = (t = s.data) == null ? void 0 : t.openrouter) != null && n.reasoning_details) && s.data.openrouter.reasoning_details.length > 0) return s.data.openrouter.reasoning_details
		} for (const i of e)
		if (i.type === "reasoning") {
			const s = Or.safeParse(i.providerOptions);
			if (s.success && ((r = (o = s.data) == null ? void 0 : o.openrouter) != null && r.reasoning_details) && s.data.openrouter.reasoning_details.length > 0) return s.data.openrouter.reasoning_details
		}
}
le([f("auto"), f("none"), f("required"), u({
	type: f("function"),
	function: u({
		name: a()
	})
})]);

function ES(e) {
	switch (e.type) {
		case "auto":
		case "none":
		case "required":
			return e.type;
		case "tool":
			return {
				type: "function",
					function: {
						name: e.toolName
					}
			};
		default:
			throw new Zd({
				argument: "toolChoice",
				message: `Invalid tool choice type: ${JSON.stringify(e)}`
			})
	}
}
var RS = u({
		type: f("image_url"),
		image_url: u({
			url: a()
		}).passthrough()
	}).passthrough(),
	NS = le([RS, Se().transform(() => null)]),
	wp = R(NS).transform(e => e.filter(t => !!t)),
	kp = u({
		id: a().optional(),
		model: a().optional(),
		provider: a().optional(),
		usage: u({
			prompt_tokens: y(),
			prompt_tokens_details: u({
				cached_tokens: y(),
				cache_write_tokens: y().nullish()
			}).passthrough().nullish(),
			completion_tokens: y(),
			completion_tokens_details: u({
				reasoning_tokens: y()
			}).passthrough().nullish(),
			total_tokens: y(),
			cost: y().optional(),
			cost_details: u({
				upstream_inference_cost: y().nullish()
			}).passthrough().nullish()
		}).passthrough().nullish()
	}).passthrough(),
	PS = le([kp.extend({
		choices: R(u({
			message: u({
				role: f("assistant"),
				content: a().nullable().optional(),
				reasoning: a().nullable().optional(),
				reasoning_details: No.nullish(),
				images: wp.nullish(),
				tool_calls: R(u({
					id: a().optional().nullable(),
					type: f("function"),
					function: u({
						name: a(),
						arguments: a().optional()
					}).passthrough()
				}).passthrough()).optional(),
				annotations: R(le([u({
					type: f("url_citation"),
					url_citation: u({
						url: a(),
						title: a().optional(),
						start_index: y().optional(),
						end_index: y().optional(),
						content: a().optional()
					}).passthrough()
				}).passthrough(), u({
					type: f("file_annotation"),
					file_annotation: u({
						file_id: a(),
						quote: a().optional()
					}).passthrough()
				}).passthrough(), u({
					type: f("file"),
					file: u({
						hash: a(),
						name: a(),
						content: R(u({
							type: a(),
							text: a().optional()
						}).passthrough()).optional()
					}).passthrough()
				}).passthrough()])).nullish()
			}).passthrough(),
			index: y().nullish(),
			logprobs: u({
				content: R(u({
					token: a(),
					logprob: y(),
					top_logprobs: R(u({
						token: a(),
						logprob: y()
					}).passthrough())
				}).passthrough()).nullable()
			}).passthrough().nullable().optional(),
			finish_reason: a().optional().nullable()
		}).passthrough())
	}), Po.extend({
		user_id: a().optional()
	})]),
	MS = le([kp.extend({
		choices: R(u({
			delta: u({
				role: Y(["assistant"]).optional(),
				content: a().nullish(),
				reasoning: a().nullish().optional(),
				reasoning_details: No.nullish(),
				images: wp.nullish(),
				tool_calls: R(u({
					index: y().nullish(),
					id: a().nullish(),
					type: f("function").optional(),
					function: u({
						name: a().nullish(),
						arguments: a().nullish()
					}).passthrough()
				}).passthrough()).nullish(),
				annotations: R(le([u({
					type: f("url_citation"),
					url_citation: u({
						url: a(),
						title: a().optional(),
						start_index: y().optional(),
						end_index: y().optional(),
						content: a().optional()
					}).passthrough()
				}).passthrough(), u({
					type: f("file_annotation"),
					file_annotation: u({
						file_id: a(),
						quote: a().optional()
					}).passthrough()
				}).passthrough(), u({
					type: f("file"),
					file: u({
						hash: a(),
						name: a(),
						content: R(u({
							type: a(),
							text: a().optional()
						}).passthrough()).optional()
					}).passthrough()
				}).passthrough()])).nullish()
			}).passthrough().nullish(),
			logprobs: u({
				content: R(u({
					token: a(),
					logprob: y(),
					top_logprobs: R(u({
						token: a(),
						logprob: y()
					}).passthrough())
				}).passthrough()).nullable()
			}).passthrough().nullish(),
			finish_reason: a().nullable().optional(),
			index: y().nullish()
		}).passthrough())
	}), Po]),
	zS = class {
		constructor(e, t, n) {
			this.specificationVersion = "v4", this.provider = "openrouter", this.defaultObjectGenerationMode = "tool", this.supportsImageUrls = !0, this.supportedUrls = {
				"image/*": [/^data:image\/[a-zA-Z]+;base64,/, /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(?:[?#].*)?$/i],
				"application/*": [/^data:application\//, /^https?:\/\/.+$/]
			}, this.modelId = e, this.settings = t, this.config = n
		}
		getArgs({
			prompt: e,
			maxOutputTokens: t,
			temperature: n,
			topP: o,
			frequencyPenalty: r,
			presencePenalty: i,
			seed: s,
			stopSequences: l,
			responseFormat: d,
			topK: c,
			tools: p,
			toolChoice: m
		}) {
			var h, g, _, w;
			const k = ie(ie({
				model: this.modelId,
				models: this.settings.models,
				logit_bias: this.settings.logitBias,
				logprobs: this.settings.logprobs === !0 || typeof this.settings.logprobs == "number" ? !0 : void 0,
				top_logprobs: typeof this.settings.logprobs == "number" ? this.settings.logprobs : typeof this.settings.logprobs == "boolean" && this.settings.logprobs ? 0 : void 0,
				user: this.settings.user,
				parallel_tool_calls: this.settings.parallelToolCalls,
				max_tokens: t ?? this.settings.maxTokens,
				temperature: n ?? this.settings.temperature,
				top_p: o ?? this.settings.topP,
				frequency_penalty: r ?? this.settings.frequencyPenalty,
				presence_penalty: i ?? this.settings.presencePenalty,
				seed: s,
				stop: l,
				response_format: (d == null ? void 0 : d.type) === "json" ? d.schema != null ? {
					type: "json_schema",
					json_schema: ie({
						schema: d.schema,
						strict: (g = (h = this.settings.structuredOutputs) == null ? void 0 : h.strict) != null ? g : !0,
						name: (_ = d.name) != null ? _ : "response"
					}, d.description && {
						description: d.description
					})
				} : {
					type: "json_object"
				} : void 0,
				top_k: c ?? this.settings.topK,
				messages: CS(e),
				include_reasoning: this.settings.includeReasoning,
				reasoning: this.settings.reasoning,
				usage: this.settings.usage,
				plugins: this.settings.plugins,
				web_search_options: this.settings.web_search_options,
				provider: this.settings.provider,
				debug: this.settings.debug,
				cache_control: this.settings.cache_control
			}, this.config.extraBody), this.settings.extraBody);
			if (p && p.length > 0) {
				const A = [];
				for (const I of p)
					if (I.type === "function") {
						const E = (w = I.providerOptions) == null ? void 0 : w.openrouter,
							S = E == null ? void 0 : E.eager_input_streaming;
						A.push(ie({
							type: "function",
							function: {
								name: I.name,
								description: I.description,
								parameters: I.inputSchema
							}
						}, S != null && {
							eager_input_streaming: S
						}))
					} else I.type === "provider" && A.push(DS(I));
				return $e(ie({}, k), {
					tools: A,
					tool_choice: m ? ES(m) : void 0
				})
			}
			return k
		}
		async doGenerate(e) {
			var t, n, o, r, i, s, l, d, c, p, m, h, g, _, w, k, A, I, E, S, v;
			const q = (e.providerOptions || {}).openrouter || {},
				{
					cacheControl: L
				} = q,
				O = fn(q, ["cacheControl"]),
				B = ie(ie(ie({}, this.getArgs(e)), O), L != null && !("cache_control" in O) ? {
					cache_control: L
				} : {}),
				{
					value: F,
					responseHeaders: z
				} = await rn({
					url: this.config.url({
						path: "/chat/completions",
						modelId: this.modelId
					}),
					headers: on(this.config.headers(), e.headers),
					body: B,
					failedResponseHandler: Vt,
					successfulResponseHandler: _n(PS),
					abortSignal: e.abortSignal,
					fetch: this.config.fetch
				});
			if ("error" in F) {
				const ne = F.error;
				throw new Ye({
					message: ne.message,
					url: this.config.url({
						path: "/chat/completions",
						modelId: this.modelId
					}),
					requestBodyValues: B,
					statusCode: 200,
					responseHeaders: z,
					data: ne
				})
			}
			const N = F,
				oe = N.choices[0];
			if (!oe) throw new ni({
				message: "No choice in response"
			});
			const te = N.usage ? vo(N.usage) : gp(),
				P = (t = oe.message.reasoning_details) != null ? t : [],
				H = P.length > 0 ? P.map(ne => {
					switch (ne.type) {
						case "reasoning.text": {
							if (ne.text) return {
								type: "reasoning",
								text: ne.text,
								providerMetadata: {
									openrouter: {
										reasoning_details: [ne]
									}
								}
							};
							break
						}
						case "reasoning.summary": {
							if (ne.summary) return {
								type: "reasoning",
								text: ne.summary,
								providerMetadata: {
									openrouter: {
										reasoning_details: [ne]
									}
								}
							};
							break
						}
					}
					return null
				}).filter(ne => ne !== null) : oe.message.reasoning ? [{
					type: "reasoning",
					text: oe.message.reasoning
				}] : [],
				ge = [];
			if (ge.push(...H), oe.message.content && ge.push({
					type: "text",
					text: oe.message.content
				}), oe.message.tool_calls) {
				let ne = !1;
				const de = new Set;
				for (const X of oe.message.tool_calls) {
					let V = X.id;
					(!V || de.has(V)) && (V = Tt()), de.add(V), ge.push({
						type: "tool-call",
						toolCallId: V,
						toolName: X.function.name,
						input: (n = X.function.arguments) != null ? n : "{}",
						providerMetadata: ne ? void 0 : {
							openrouter: {
								reasoning_details: P
							}
						}
					}), ne = !0
				}
			}
			if (oe.message.images)
				for (const ne of oe.message.images) ge.push({
					type: "file",
					mediaType: sl(ne.image_url.url, "image/jpeg"),
					data: {
						type: "data",
						data: wo(ne.image_url.url)
					}
				});
			if (oe.message.annotations)
				for (const ne of oe.message.annotations) ne.type === "url_citation" && ge.push({
					type: "source",
					sourceType: "url",
					id: ne.url_citation.url,
					url: ne.url_citation.url,
					title: (o = ne.url_citation.title) != null ? o : "",
					providerMetadata: {
						openrouter: {
							content: (r = ne.url_citation.content) != null ? r : "",
							startIndex: (i = ne.url_citation.start_index) != null ? i : 0,
							endIndex: (s = ne.url_citation.end_index) != null ? s : 0
						}
					}
				});
			const J = (l = oe.message.annotations) == null ? void 0 : l.filter(ne => ne.type === "file"),
				M = oe.message.tool_calls && oe.message.tool_calls.length > 0,
				se = P.some(ne => ne.type === "reasoning.encrypted" && ne.data),
				W = M && se && oe.finish_reason === "stop" ? _t("tool-calls", (d = oe.finish_reason) != null ? d : void 0) : bo(oe.finish_reason),
				ce = M && W.unified === "other" ? _t("tool-calls", W.raw) : W;
			return {
				content: ge,
				finishReason: ce,
				usage: te,
				warnings: [],
				providerMetadata: {
					openrouter: ai.parse({
						provider: (c = N.provider) != null ? c : "",
						reasoning_details: (p = oe.message.reasoning_details) != null ? p : [],
						annotations: J && J.length > 0 ? J : void 0,
						usage: ie(ie(ie(ie({
							promptTokens: (m = te.inputTokens.total) != null ? m : 0,
							completionTokens: (h = te.outputTokens.total) != null ? h : 0,
							totalTokens: ((g = te.inputTokens.total) != null ? g : 0) + ((_ = te.outputTokens.total) != null ? _ : 0)
						}, ((w = N.usage) == null ? void 0 : w.cost) != null ? {
							cost: N.usage.cost
						} : {}), ((A = (k = N.usage) == null ? void 0 : k.prompt_tokens_details) == null ? void 0 : A.cached_tokens) != null ? {
							promptTokensDetails: {
								cachedTokens: N.usage.prompt_tokens_details.cached_tokens
							}
						} : {}), ((E = (I = N.usage) == null ? void 0 : I.completion_tokens_details) == null ? void 0 : E.reasoning_tokens) != null ? {
							completionTokensDetails: {
								reasoningTokens: N.usage.completion_tokens_details.reasoning_tokens
							}
						} : {}), ((v = (S = N.usage) == null ? void 0 : S.cost_details) == null ? void 0 : v.upstream_inference_cost) != null ? {
							costDetails: {
								upstreamInferenceCost: N.usage.cost_details.upstream_inference_cost
							}
						} : {})
					})
				},
				request: {
					body: B
				},
				response: {
					id: N.id,
					modelId: N.model,
					headers: z,
					body: N
				}
			}
		}
		async doStream(e) {
			var t;
			const r = (e.providerOptions || {}).openrouter || {},
				{
					cacheControl: i
				} = r,
				s = fn(r, ["cacheControl"]),
				l = ie(ie(ie({}, this.getArgs(e)), s), i != null && !("cache_control" in s) ? {
					cache_control: i
				} : {}),
				{
					value: d,
					responseHeaders: c
				} = await rn({
					url: this.config.url({
						path: "/chat/completions",
						modelId: this.modelId
					}),
					headers: on(this.config.headers(), e.headers),
					body: $e(ie({}, l), {
						stream: !0,
						stream_options: this.config.compatibility === "strict" ? ie({
							include_usage: !0
						}, (t = this.settings.usage) != null && t.include ? {
							include_usage: !0
						} : {}) : void 0
					}),
					failedResponseHandler: Vt,
					successfulResponseHandler: mp(MS),
					abortSignal: e.abortSignal,
					fetch: this.config.fetch
				});
			let p;
			const m = yp(d, F => {
					p = F
				}),
				h = [],
				g = new Set;
			let _ = _t("other");
			const w = {
					inputTokens: {
						total: void 0,
						noCache: void 0,
						cacheRead: void 0,
						cacheWrite: void 0
					},
					outputTokens: {
						total: void 0,
						text: void 0,
						reasoning: void 0
					},
					raw: void 0
				},
				k = {};
			let A;
			const I = [];
			let E = !1;
			const S = [];
			let v = !1,
				b = !1,
				T, q, L, O;
			const B = [];
			return {
				stream: m.pipeThrough(new TransformStream({
					start(F) {
						F.enqueue({
							type: "stream-start",
							warnings: B
						})
					},
					transform(F, z) {
						var N, oe, te, P, H, ge, J, M, se, U, W, ce, ne, de, X, V, j, ae, Z, x, D;
						if (e.includeRawChunks && z.enqueue({
								type: "raw",
								rawValue: F.rawValue
							}), !F.success) {
							_ = _t("error"), z.enqueue({
								type: "error",
								error: F.error
							});
							return
						}
						const C = F.value;
						if ("error" in C) {
							_ = _t("error"), z.enqueue({
								type: "error",
								error: C.error
							});
							return
						}
						if (C.provider && (O = C.provider), C.id && (L = C.id, z.enqueue({
								type: "response-metadata",
								id: C.id
							})), C.model && z.enqueue({
								type: "response-metadata",
								modelId: C.model
							}), C.usage != null) {
							const pe = vo(C.usage);
							Object.assign(w.inputTokens, pe.inputTokens), Object.assign(w.outputTokens, pe.outputTokens), A = C.usage;
							const be = (N = C.usage.prompt_tokens) != null ? N : 0,
								we = (oe = C.usage.completion_tokens) != null ? oe : 0;
							k.promptTokens = be, C.usage.prompt_tokens_details && (k.promptTokensDetails = {
								cachedTokens: (te = C.usage.prompt_tokens_details.cached_tokens) != null ? te : 0
							}), k.completionTokens = we, C.usage.completion_tokens_details && (k.completionTokensDetails = {
								reasoningTokens: (P = C.usage.completion_tokens_details.reasoning_tokens) != null ? P : 0
							}), C.usage.cost != null && (k.cost = C.usage.cost), k.totalTokens = C.usage.total_tokens;
							const We = (H = C.usage.cost_details) == null ? void 0 : H.upstream_inference_cost;
							We != null && (k.costDetails = {
								upstreamInferenceCost: We
							})
						}
						const G = C.choices[0];
						if ((G == null ? void 0 : G.finish_reason) != null && (_ = bo(G.finish_reason)), (G == null ? void 0 : G.delta) == null) return;
						const me = G.delta,
							fe = pe => {
								b || (q = Tt(), z.enqueue({
									type: "reasoning-start",
									id: q
								}), b = !0), z.enqueue({
									type: "reasoning-delta",
									delta: pe,
									id: q || Tt()
								})
							};
						if (me.reasoning_details && me.reasoning_details.length > 0) {
							for (const pe of me.reasoning_details)
								if (pe.type === "reasoning.text") {
									const be = I[I.length - 1];
									(be == null ? void 0 : be.type) === "reasoning.text" ? (be.text = (be.text || "") + (pe.text || ""), be.signature = be.signature || pe.signature, be.format = be.format || pe.format) : I.push(ie({}, pe))
								} else I.push(pe);
							if (!v)
								for (const pe of me.reasoning_details) switch (pe.type) {
									case "reasoning.text": {
										fe(pe.text || "");
										break
									}
									case "reasoning.encrypted":
										break;
									case "reasoning.summary": {
										pe.summary && fe(pe.summary);
										break
									}
								}
						} else me.reasoning && !v && fe(me.reasoning);
						if (me.content && (b && !v && (z.enqueue({
								type: "reasoning-end",
								id: q || Tt(),
								providerMetadata: {
									openrouter: {
										reasoning_details: I
									}
								}
							}), b = !1), v || (T = L || Tt(), z.enqueue({
								type: "text-start",
								id: T
							}), v = !0), z.enqueue({
								type: "text-delta",
								delta: me.content,
								id: T || Tt()
							})), me.annotations) {
							for (const pe of me.annotations)
								if (pe.type === "url_citation") z.enqueue({
									type: "source",
									sourceType: "url",
									id: pe.url_citation.url,
									url: pe.url_citation.url,
									title: (ge = pe.url_citation.title) != null ? ge : "",
									providerMetadata: {
										openrouter: {
											content: (J = pe.url_citation.content) != null ? J : "",
											startIndex: (M = pe.url_citation.start_index) != null ? M : 0,
											endIndex: (se = pe.url_citation.end_index) != null ? se : 0
										}
									}
								});
								else if (pe.type === "file") {
								const be = pe.file;
								be && typeof be == "object" && "hash" in be && "name" in be && S.push(pe)
							}
						}
						if (me.tool_calls != null)
							for (const pe of me.tool_calls) {
								const be = (U = pe.index) != null ? U : h.length - 1;
								if (h[be] == null) {
									if (pe.type !== "function") throw new eo({
										data: pe,
										message: "Expected 'function' type."
									});
									if (((W = pe.function) == null ? void 0 : W.name) == null) throw new eo({
										data: pe,
										message: "Expected 'function.name' to be a string."
									});
									let We = (ce = pe.id) != null ? ce : "";
									(!We || g.has(We)) && (We = Tt()), g.add(We), h[be] = {
										id: We,
										type: "function",
										function: {
											name: pe.function.name,
											arguments: (ne = pe.function.arguments) != null ? ne : ""
										},
										inputStarted: !1,
										sent: !1
									};
									const Ve = h[be];
									if (Ve == null) throw new eo({
										data: {
											index: be,
											toolCallsLength: h.length
										},
										message: `Tool call at index ${be} is missing after creation.`
									});
									((de = Ve.function) == null ? void 0 : de.name) != null && ((X = Ve.function) == null ? void 0 : X.arguments) != null && or(Ve.function.arguments) && (Ve.inputStarted = !0, z.enqueue({
										type: "tool-input-start",
										id: Ve.id,
										toolName: Ve.function.name
									}), z.enqueue({
										type: "tool-input-delta",
										id: Ve.id,
										delta: Ve.function.arguments
									}), z.enqueue({
										type: "tool-input-end",
										id: Ve.id
									}), z.enqueue({
										type: "tool-call",
										toolCallId: Ve.id,
										toolName: Ve.function.name,
										input: Ve.function.arguments,
										providerMetadata: E ? void 0 : {
											openrouter: {
												reasoning_details: I
											}
										}
									}), E = !0, Ve.sent = !0);
									continue
								}
								const we = h[be];
								if (we == null) throw new eo({
									data: {
										index: be,
										toolCallsLength: h.length,
										toolCallDelta: pe
									},
									message: `Tool call at index ${be} is missing during merge.`
								});
								we.inputStarted || (we.inputStarted = !0, z.enqueue({
									type: "tool-input-start",
									id: we.id,
									toolName: we.function.name
								}), we.function.arguments && z.enqueue({
									type: "tool-input-delta",
									id: we.id,
									delta: we.function.arguments
								})), ((V = pe.function) == null ? void 0 : V.arguments) != null && (we.function.arguments += (ae = (j = pe.function) == null ? void 0 : j.arguments) != null ? ae : ""), z.enqueue({
									type: "tool-input-delta",
									id: we.id,
									delta: (Z = pe.function.arguments) != null ? Z : ""
								}), !we.sent && ((x = we.function) == null ? void 0 : x.name) != null && ((D = we.function) == null ? void 0 : D.arguments) != null && or(we.function.arguments) && (z.enqueue({
									type: "tool-input-end",
									id: we.id
								}), z.enqueue({
									type: "tool-call",
									toolCallId: we.id,
									toolName: we.function.name,
									input: we.function.arguments,
									providerMetadata: E ? void 0 : {
										openrouter: {
											reasoning_details: I
										}
									}
								}), E = !0, we.sent = !0)
							}
						if (me.images != null)
							for (const pe of me.images) z.enqueue({
								type: "file",
								mediaType: sl(pe.image_url.url, "image/jpeg"),
								data: {
									type: "data",
									data: wo(pe.image_url.url)
								}
							})
					},
					flush(F) {
						const z = h.length > 0;
						p != null && (_ = _t("error"), F.enqueue({
							type: "error",
							error: p
						}));
						const N = I.some(te => te.type === "reasoning.encrypted" && te.data);
						if (z && N && _.unified === "stop" && (_ = _t("tool-calls", _.raw)), z && _.unified === "other" && (_ = _t("tool-calls", _.raw)), _.unified === "tool-calls") {
							for (const te of h)
								if (te && !te.sent) {
									const P = or(te.function.arguments) ? te.function.arguments : "{}";
									te.inputStarted || (F.enqueue({
										type: "tool-input-start",
										id: te.id,
										toolName: te.function.name
									}), F.enqueue({
										type: "tool-input-delta",
										id: te.id,
										delta: P
									})), F.enqueue({
										type: "tool-input-end",
										id: te.id
									}), F.enqueue({
										type: "tool-call",
										toolCallId: te.id,
										toolName: te.function.name,
										input: P,
										providerMetadata: E ? void 0 : {
											openrouter: {
												reasoning_details: I
											}
										}
									}), E = !0, te.sent = !0
								}
						}
						b && F.enqueue({
							type: "reasoning-end",
							id: q || Tt(),
							providerMetadata: {
								openrouter: {
									reasoning_details: I
								}
							}
						}), v && F.enqueue({
							type: "text-end",
							id: T || Tt()
						});
						const oe = {
							usage: k
						};
						O !== void 0 && (oe.provider = O), oe.reasoning_details = I, S.length > 0 && (oe.annotations = S), w.inputTokens.total === void 0 && k.promptTokens !== void 0 && (w.inputTokens.total = k.promptTokens), w.outputTokens.total === void 0 && k.completionTokens !== void 0 && (w.outputTokens.total = k.completionTokens), w.raw = A, F.enqueue({
							type: "finish",
							finishReason: _,
							usage: w,
							providerMetadata: {
								openrouter: oe
							}
						})
					}
				})),
				warnings: B,
				request: {
					body: l
				},
				response: {
					headers: c
				}
			}
		}
	};

function DS(e) {
	const [t, n] = e.id.split("."), o = `${t}:${n}`, r = {};
	for (const [i, s] of Object.entries(e.args)) s !== void 0 && (r[qS(i)] = s);
	return ie({
		type: o
	}, r)
}

function qS(e) {
	return e.replace(/[A-Z]/g, t => `_${t.toLowerCase()}`)
}

function US({
	prompt: e,
	inputFormat: t,
	user: n = "user",
	assistant: o = "assistant"
}) {
	if (e.length === 1 && e[0] && e[0].role === "user" && e[0].content.length === 1 && e[0].content[0] && e[0].content[0].type === "text") return {
		prompt: e[0].content[0].text
	};
	let r = "";
	e[0] && e[0].role === "system" && (r += `${e[0].content}

`, e = e.slice(1));
	for (const {
			role: i,
			content: s
		}
		of e) switch (i) {
		case "system":
			throw new HI({
				message: `Unexpected system message in prompt: ${s}`,
				prompt: e
			});
		case "user": {
			const l = s.map(d => {
				switch (d.type) {
					case "text":
						return d.text;
					case "file":
						throw new Rt({
							functionality: "file attachments"
						});
					default:
						return ""
				}
			}).join("");
			r += `${n}:
${l}

`;
			break
		}
		case "assistant": {
			const l = s.map(d => {
				switch (d.type) {
					case "text":
						return d.text;
					case "tool-call":
						throw new Rt({
							functionality: "tool-call messages"
						});
					case "tool-result":
						throw new Rt({
							functionality: "tool-result messages"
						});
					case "reasoning":
						throw new Rt({
							functionality: "reasoning messages"
						});
					case "file":
						throw new Rt({
							functionality: "file attachments"
						});
					default:
						return ""
				}
			}).join("");
			r += `${o}:
${l}

`;
			break
		}
		case "tool":
			throw new Rt({
				functionality: "tool messages"
			})
	}
	return r += `${o}:
`, {
		prompt: r
	}
}
var ll = le([u({
		id: a().optional(),
		model: a().optional(),
		provider: a().optional(),
		choices: R(u({
			text: a(),
			reasoning: a().nullish().optional(),
			reasoning_details: No.nullish(),
			finish_reason: a().nullish(),
			index: y().nullish(),
			logprobs: u({
				tokens: R(a()),
				token_logprobs: R(y()),
				top_logprobs: R(ke(a(), y())).nullable()
			}).passthrough().nullable().optional()
		}).passthrough()),
		usage: u({
			prompt_tokens: y(),
			prompt_tokens_details: u({
				cached_tokens: y(),
				cache_write_tokens: y().nullish()
			}).passthrough().nullish(),
			completion_tokens: y(),
			completion_tokens_details: u({
				reasoning_tokens: y()
			}).passthrough().nullish(),
			total_tokens: y(),
			cost: y().optional(),
			cost_details: u({
				upstream_inference_cost: y().nullish()
			}).passthrough().nullish()
		}).passthrough().nullish()
	}).passthrough(), Po]),
	jS = class {
		constructor(e, t, n) {
			this.specificationVersion = "v4", this.provider = "openrouter", this.supportsImageUrls = !0, this.supportedUrls = {
				"image/*": [/^data:image\/[a-zA-Z]+;base64,/, /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(?:[?#].*)?$/i],
				"text/*": [/^data:text\//, /^https?:\/\/.+$/],
				"application/*": [/^data:application\//, /^https?:\/\/.+$/]
			}, this.defaultObjectGenerationMode = void 0, this.modelId = e, this.settings = t, this.config = n
		}
		getArgs({
			prompt: e,
			maxOutputTokens: t,
			temperature: n,
			topP: o,
			frequencyPenalty: r,
			presencePenalty: i,
			seed: s,
			responseFormat: l,
			topK: d,
			stopSequences: c,
			tools: p,
			toolChoice: m
		}) {
			const {
				prompt: h
			} = US({
				prompt: e,
				inputFormat: "prompt"
			});
			if (p != null && p.length) throw new Rt({
				functionality: "tools"
			});
			if (m) throw new Rt({
				functionality: "toolChoice"
			});
			return ie(ie({
				model: this.modelId,
				models: this.settings.models,
				logit_bias: this.settings.logitBias,
				logprobs: typeof this.settings.logprobs == "number" ? this.settings.logprobs : typeof this.settings.logprobs == "boolean" && this.settings.logprobs ? 0 : void 0,
				suffix: this.settings.suffix,
				user: this.settings.user,
				max_tokens: t ?? this.settings.maxTokens,
				temperature: n ?? this.settings.temperature,
				top_p: o ?? this.settings.topP,
				frequency_penalty: r ?? this.settings.frequencyPenalty,
				presence_penalty: i ?? this.settings.presencePenalty,
				seed: s,
				stop: c,
				response_format: l,
				top_k: d ?? this.settings.topK,
				prompt: h,
				include_reasoning: this.settings.includeReasoning,
				reasoning: this.settings.reasoning
			}, this.config.extraBody), this.settings.extraBody)
		}
		async doGenerate(e) {
			var t, n, o, r, i, s, l, d, c, p, m, h, g, _, w, k, A;
			const E = (e.providerOptions || {}).openrouter || {},
				S = ie(ie({}, this.getArgs(e)), E),
				{
					value: v,
					responseHeaders: b
				} = await rn({
					url: this.config.url({
						path: "/completions",
						modelId: this.modelId
					}),
					headers: on(this.config.headers(), e.headers),
					body: S,
					failedResponseHandler: Vt,
					successfulResponseHandler: _n(ll),
					abortSignal: e.abortSignal,
					fetch: this.config.fetch
				});
			if ("error" in v) {
				const q = v.error;
				throw new Ye({
					message: q.message,
					url: this.config.url({
						path: "/completions",
						modelId: this.modelId
					}),
					requestBodyValues: S,
					statusCode: 200,
					responseHeaders: b,
					data: q
				})
			}
			const T = v.choices[0];
			if (!T) throw new ni({
				message: "No choice in OpenRouter completion response"
			});
			return {
				content: [{
					type: "text",
					text: (t = T.text) != null ? t : ""
				}],
				finishReason: bo(T.finish_reason),
				usage: v.usage ? vo(v.usage) : gp(),
				warnings: [],
				providerMetadata: {
					openrouter: ai.parse({
						provider: (n = v.provider) != null ? n : "",
						usage: ie(ie(ie(ie({
							promptTokens: (r = (o = v.usage) == null ? void 0 : o.prompt_tokens) != null ? r : 0,
							completionTokens: (s = (i = v.usage) == null ? void 0 : i.completion_tokens) != null ? s : 0,
							totalTokens: ((d = (l = v.usage) == null ? void 0 : l.prompt_tokens) != null ? d : 0) + ((p = (c = v.usage) == null ? void 0 : c.completion_tokens) != null ? p : 0)
						}, ((m = v.usage) == null ? void 0 : m.cost) != null ? {
							cost: v.usage.cost
						} : {}), ((g = (h = v.usage) == null ? void 0 : h.prompt_tokens_details) == null ? void 0 : g.cached_tokens) != null ? {
							promptTokensDetails: {
								cachedTokens: v.usage.prompt_tokens_details.cached_tokens
							}
						} : {}), ((w = (_ = v.usage) == null ? void 0 : _.completion_tokens_details) == null ? void 0 : w.reasoning_tokens) != null ? {
							completionTokensDetails: {
								reasoningTokens: v.usage.completion_tokens_details.reasoning_tokens
							}
						} : {}), ((A = (k = v.usage) == null ? void 0 : k.cost_details) == null ? void 0 : A.upstream_inference_cost) != null ? {
							costDetails: {
								upstreamInferenceCost: v.usage.cost_details.upstream_inference_cost
							}
						} : {})
					})
				},
				response: {
					headers: b
				}
			}
		}
		async doStream(e) {
			const n = (e.providerOptions || {}).openrouter || {},
				o = ie(ie({}, this.getArgs(e)), n),
				{
					value: r,
					responseHeaders: i
				} = await rn({
					url: this.config.url({
						path: "/completions",
						modelId: this.modelId
					}),
					headers: on(this.config.headers(), e.headers),
					body: $e(ie({}, o), {
						stream: !0,
						stream_options: this.config.compatibility === "strict" ? {
							include_usage: !0
						} : void 0
					}),
					failedResponseHandler: Vt,
					successfulResponseHandler: mp(ll),
					abortSignal: e.abortSignal,
					fetch: this.config.fetch
				});
			let s;
			const l = yp(r, _ => {
				s = _
			});
			let d = _t("other");
			const c = {
					inputTokens: {
						total: void 0,
						noCache: void 0,
						cacheRead: void 0,
						cacheWrite: void 0
					},
					outputTokens: {
						total: void 0,
						text: void 0,
						reasoning: void 0
					},
					raw: void 0
				},
				p = {};
			let m, h;
			const g = [];
			return {
				stream: l.pipeThrough(new TransformStream({
					start(_) {
						_.enqueue({
							type: "stream-start",
							warnings: g
						})
					},
					transform(_, w) {
						var k, A, I, E, S;
						if (e.includeRawChunks && w.enqueue({
								type: "raw",
								rawValue: _.rawValue
							}), !_.success) {
							d = _t("error"), w.enqueue({
								type: "error",
								error: _.error
							});
							return
						}
						const v = _.value;
						if ("error" in v) {
							d = _t("error"), w.enqueue({
								type: "error",
								error: v.error
							});
							return
						}
						if (v.provider && (m = v.provider), v.usage != null) {
							const T = vo(v.usage);
							Object.assign(c.inputTokens, T.inputTokens), Object.assign(c.outputTokens, T.outputTokens), h = v.usage;
							const q = (k = v.usage.prompt_tokens) != null ? k : 0,
								L = (A = v.usage.completion_tokens) != null ? A : 0;
							p.promptTokens = q, v.usage.prompt_tokens_details && (p.promptTokensDetails = {
								cachedTokens: (I = v.usage.prompt_tokens_details.cached_tokens) != null ? I : 0
							}), p.completionTokens = L, v.usage.completion_tokens_details && (p.completionTokensDetails = {
								reasoningTokens: (E = v.usage.completion_tokens_details.reasoning_tokens) != null ? E : 0
							}), v.usage.cost != null && (p.cost = v.usage.cost), p.totalTokens = v.usage.total_tokens;
							const O = (S = v.usage.cost_details) == null ? void 0 : S.upstream_inference_cost;
							O != null && (p.costDetails = {
								upstreamInferenceCost: O
							})
						}
						const b = v.choices[0];
						(b == null ? void 0 : b.finish_reason) != null && (d = bo(b.finish_reason)), (b == null ? void 0 : b.text) != null && w.enqueue({
							type: "text-delta",
							delta: b.text,
							id: Tt()
						})
					},
					flush(_) {
						s != null && (d = _t("error"), _.enqueue({
							type: "error",
							error: s
						})), c.raw = h;
						const w = {
							usage: p
						};
						m !== void 0 && (w.provider = m), _.enqueue({
							type: "finish",
							finishReason: d,
							usage: c,
							providerMetadata: {
								openrouter: w
							}
						})
					}
				})),
				response: {
					headers: i
				}
			}
		}
	},
	LS = u({
		prompt_tokens: y(),
		total_tokens: y(),
		cost: y().optional()
	}),
	ZS = u({
		object: f("embedding"),
		embedding: R(y()),
		index: y().optional()
	}),
	FS = u({
		id: a().optional(),
		object: f("list"),
		data: R(ZS),
		model: a(),
		provider: a().optional(),
		usage: LS.optional()
	}),
	BS = class {
		constructor(e, t, n) {
			this.specificationVersion = "v4", this.provider = "openrouter", this.maxEmbeddingsPerCall = void 0, this.supportsParallelCalls = !0, this.modelId = e, this.settings = t, this.config = n
		}
		async doEmbed(e) {
			var t, n, o, r, i, s;
			const {
				values: l,
				abortSignal: d,
				headers: c
			} = e, p = ie(ie({
				model: this.modelId,
				input: l,
				user: this.settings.user,
				provider: this.settings.provider
			}, this.config.extraBody), this.settings.extraBody), {
				value: m,
				responseHeaders: h
			} = await rn({
				url: this.config.url({
					path: "/embeddings",
					modelId: this.modelId
				}),
				headers: on(this.config.headers(), c),
				body: p,
				failedResponseHandler: Vt,
				successfulResponseHandler: _n(FS),
				abortSignal: d,
				fetch: this.config.fetch
			});
			return {
				embeddings: m.data.map(g => g.embedding),
				usage: m.usage ? {
					tokens: m.usage.prompt_tokens
				} : void 0,
				providerMetadata: {
					openrouter: ai.parse({
						provider: (t = m.provider) != null ? t : "",
						usage: ie({
							promptTokens: (o = (n = m.usage) == null ? void 0 : n.prompt_tokens) != null ? o : 0,
							completionTokens: 0,
							totalTokens: (i = (r = m.usage) == null ? void 0 : r.total_tokens) != null ? i : 0
						}, ((s = m.usage) == null ? void 0 : s.cost) != null ? {
							cost: m.usage.cost
						} : {})
					})
				},
				response: {
					headers: h,
					body: m
				},
				warnings: []
			}
		}
	},
	VS = u({
		created: y().optional(),
		data: R(u({
			b64_json: a()
		}).passthrough()),
		usage: u({
			prompt_tokens: y(),
			completion_tokens: y(),
			total_tokens: y()
		}).passthrough().optional()
	}).passthrough(),
	HS = class {
		constructor(e, t, n) {
			this.specificationVersion = "v4", this.provider = "openrouter", this.maxImagesPerCall = 10, this.modelId = e, this.settings = t, this.config = n
		}
		async doGenerate(e) {
			const {
				prompt: t,
				n,
				size: o,
				aspectRatio: r,
				seed: i,
				files: s,
				mask: l,
				abortSignal: d,
				headers: c,
				providerOptions: p
			} = e, m = (p == null ? void 0 : p.openrouter) || {}, h = [];
			if (l !== void 0) throw new Rt({
				functionality: "image inpainting (mask parameter)"
			});
			const _ = s !== void 0 && s.length > 0 ? s.map(S => JS(S)) : void 0,
				w = ie(ie(ie(ie(ie(ie(ie(ie(ie(ie({
					model: this.modelId,
					prompt: t ?? ""
				}, n !== void 0 && {
					n
				}), o !== void 0 && {
					size: o
				}), r !== void 0 && {
					aspect_ratio: r
				}), i !== void 0 && {
					seed: i
				}), _ !== void 0 && {
					input_references: _
				}), this.settings.user !== void 0 && {
					user: this.settings.user
				}), this.settings.provider !== void 0 && {
					provider: this.settings.provider
				}), this.config.extraBody), this.settings.extraBody), m),
				{
					value: k,
					responseHeaders: A
				} = await rn({
					url: this.config.url({
						path: "/images",
						modelId: this.modelId
					}),
					headers: on(this.config.headers(), c),
					body: w,
					failedResponseHandler: Vt,
					successfulResponseHandler: _n(VS),
					abortSignal: d,
					fetch: this.config.fetch
				});
			if (!k.data || k.data.length === 0) throw new ni({
				message: "No images in response"
			});
			const I = k.data.map(S => S.b64_json),
				E = k.usage ? {
					inputTokens: k.usage.prompt_tokens,
					outputTokens: k.usage.completion_tokens,
					totalTokens: k.usage.total_tokens
				} : void 0;
			return {
				images: I,
				warnings: h,
				response: {
					timestamp: new Date,
					modelId: this.modelId,
					headers: A
				},
				usage: E
			}
		}
	},
	GS = "image/png";

function JS(e) {
	return e.type === "url" ? {
		type: "image_url",
		image_url: {
			url: e.url
		}
	} : {
		type: "image_url",
		image_url: {
			url: Sn({
				data: e.data,
				mediaType: e.mediaType,
				defaultMediaType: GS
			})
		}
	}
}
var WS = u({
		results: R(Se()).optional()
	}),
	KS = hS({
		id: "openrouter.web_search",
		inputSchema: WS
	});

function YS(e) {
	return Object.fromEntries(Object.entries(e).filter(([, t]) => t != null))
}

function XS(e) {
	return e ? e instanceof Headers ? Object.fromEntries(e.entries()) : Array.isArray(e) ? Object.fromEntries(e) : e : {}
}

function QS(e, t) {
	const n = t.toLowerCase();
	return Object.keys(e).find(o => o.toLowerCase() === n)
}

function eC(e, ...t) {
	const n = XS(e),
		o = YS(n),
		r = QS(o, "user-agent"),
		i = r ? o[r] : void 0,
		s = i != null && i.trim() ? i : t.filter(Boolean).join(" "),
		l = Object.fromEntries(Object.entries(o).filter(([d]) => d.toLowerCase() !== "user-agent"));
	return $e(ie({}, l), {
		"user-agent": s
	})
}
var tC = "3.0.0",
	nC = u({
		id: a(),
		generation_id: a().optional(),
		polling_url: a(),
		status: a()
	}).passthrough(),
	oC = u({
		id: a(),
		generation_id: a().optional(),
		polling_url: a(),
		status: a(),
		unsigned_urls: R(a()).optional(),
		usage: u({
			cost: y().optional(),
			is_byok: _e().optional()
		}).passthrough().optional(),
		error: a().optional()
	}).passthrough(),
	rC = 2e3,
	iC = 6e5,
	aC = class {
		constructor(e, t, n) {
			this.specificationVersion = "v4", this.provider = "openrouter", this.maxVideosPerCall = 1, this.modelId = e, this.settings = t, this.config = n
		}
		async doGenerate(e) {
			var t, n, o, r, i;
			const {
				prompt: s,
				n: l,
				aspectRatio: d,
				resolution: c,
				duration: p,
				seed: m,
				image: h,
				abortSignal: g,
				headers: _,
				providerOptions: w
			} = e, k = [];
			l > 1 && k.push({
				type: "unsupported",
				feature: "n > 1",
				details: `OpenRouter video generation returns 1 video per call. Requested ${l} videos.`
			});
			const A = ie(ie(ie(ie(ie(ie(ie(ie(ie({
					model: this.modelId,
					prompt: s ?? ""
				}, d !== void 0 && {
					aspect_ratio: d
				}), c !== void 0 && {
					size: c
				}), p !== void 0 && {
					duration: p
				}), m !== void 0 && {
					seed: m
				}), this.settings.generateAudio !== void 0 && {
					generate_audio: this.settings.generateAudio
				}), h !== void 0 && {
					frame_images: [sC(h)]
				}), this.config.extraBody), this.settings.extraBody), w.openrouter),
				I = on(this.config.headers(), _),
				{
					value: E,
					responseHeaders: S
				} = await rn({
					url: this.config.url({
						path: "/videos",
						modelId: this.modelId
					}),
					headers: I,
					body: A,
					failedResponseHandler: Vt,
					successfulResponseHandler: _n(nC),
					abortSignal: g,
					fetch: this.config.fetch
				}),
				v = (t = this.settings.pollIntervalMs) != null ? t : rC,
				b = (n = this.settings.maxPollTimeMs) != null ? n : iC,
				T = await this.pollUntilComplete({
					jobId: E.id,
					headers: I,
					abortSignal: g,
					pollIntervalMs: v,
					maxPollTimeMs: b
				}),
				q = [];
			if (T.unsigned_urls)
				for (const O of T.unsigned_urls) q.push({
					type: "url",
					url: O,
					mediaType: "video/mp4"
				});
			const L = {
				openrouter: {
					generationId: (o = T.generation_id) != null ? o : null,
					cost: (i = (r = T.usage) == null ? void 0 : r.cost) != null ? i : null
				}
			};
			return {
				videos: q,
				warnings: k,
				providerMetadata: L,
				response: {
					timestamp: new Date,
					modelId: this.modelId,
					headers: S
				}
			}
		}
		async pollUntilComplete({
			jobId: e,
			headers: t,
			abortSignal: n,
			pollIntervalMs: o,
			maxPollTimeMs: r
		}) {
			var i;
			const s = Date.now();
			for (; Date.now() - s < r;) {
				n == null || n.throwIfAborted(), await rT(o), n == null || n.throwIfAborted();
				const {
					value: l
				} = await dT({
					url: this.config.url({
						path: `/videos/${e}`,
						modelId: this.modelId
					}),
					headers: t,
					failedResponseHandler: Vt,
					successfulResponseHandler: _n(oC),
					abortSignal: n,
					fetch: this.config.fetch
				});
				if (l.status === "completed") return {
					generation_id: l.generation_id,
					unsigned_urls: l.unsigned_urls,
					usage: l.usage
				};
				if (l.status === "failed" || l.status === "dead" || l.status === "cancelled" || l.status === "expired") throw new Ye({
					message: (i = l.error) != null ? i : `Video generation failed with status: ${l.status}`,
					url: this.config.url({
						path: `/videos/${e}`,
						modelId: this.modelId
					}),
					requestBodyValues: {},
					statusCode: 500,
					isRetryable: !1
				})
			}
			throw new Ye({
				message: `Video generation timed out after ${r}ms`,
				url: this.config.url({
					path: `/videos/${e}`,
					modelId: this.modelId
				}),
				requestBodyValues: {},
				statusCode: 408,
				isRetryable: !0
			})
		}
	};

function sC(e) {
	return e.type === "url" ? {
		type: "image_url",
		image_url: {
			url: e.url
		},
		frame_type: "first_frame"
	} : {
		type: "image_url",
		image_url: {
			url: Sn({
				data: e.data,
				mediaType: e.mediaType,
				defaultMediaType: "image/png"
			})
		},
		frame_type: "first_frame"
	}
}

function xp(e = {}) {
	var t, n, o;
	const r = (n = _S((t = e.baseURL) != null ? t : e.baseUrl)) != null ? n : "https://openrouter.ai/api/v1",
		i = (o = e.compatibility) != null ? o : "compatible",
		s = () => eC(ie(ie(ie(ie({
			Authorization: `Bearer ${pT({ apiKey: e.apiKey, environmentVariableName: "OPENROUTER_API_KEY", description: "OpenRouter" })}`
		}, e.appName && {
			"X-OpenRouter-Title": e.appName
		}), e.appUrl && {
			"HTTP-Referer": e.appUrl
		}), e.headers), e.api_keys && Object.keys(e.api_keys).length > 0 && {
			"X-Provider-API-Keys": JSON.stringify(e.api_keys)
		}), `ai-sdk/openrouter/${tC}`),
		l = (_, w = {}) => new zS(_, w, {
			provider: "openrouter.chat",
			url: ({
				path: k
			}) => `${r}${k}`,
			headers: s,
			compatibility: i,
			fetch: e.fetch,
			extraBody: e.extraBody
		}),
		d = (_, w = {}) => new jS(_, w, {
			provider: "openrouter.completion",
			url: ({
				path: k
			}) => `${r}${k}`,
			headers: s,
			compatibility: i,
			fetch: e.fetch,
			extraBody: e.extraBody
		}),
		c = (_, w = {}) => new BS(_, w, {
			provider: "openrouter.embedding",
			url: ({
				path: k
			}) => `${r}${k}`,
			headers: s,
			fetch: e.fetch,
			extraBody: e.extraBody
		}),
		p = (_, w = {}) => new HS(_, w, {
			provider: "openrouter.image",
			url: ({
				path: k
			}) => `${r}${k}`,
			headers: s,
			fetch: e.fetch,
			extraBody: e.extraBody
		}),
		m = (_, w = {}) => new aC(_, w, {
			provider: "openrouter.video",
			url: ({
				path: k
			}) => `${r}${k}`,
			headers: s,
			fetch: e.fetch,
			extraBody: e.extraBody
		}),
		h = (_, w) => {
			if (new.target) throw new Error("The OpenRouter model function cannot be called with the new keyword.");
			return _ === "openai/gpt-3.5-turbo-instruct" ? d(_, w) : l(_, w)
		},
		g = (_, w) => h(_, w);
	return g.languageModel = h, g.chat = l, g.completion = d, g.textEmbeddingModel = c, g.embedding = c, g.imageModel = p, g.videoModel = m, g.tools = {
		webSearch: KS
	}, g
}
xp({
	compatibility: "strict"
});
async function lC(e) {
	var o;
	if (!((o = e.apiKey) != null && o.trim())) throw new Error("An API key is required.");
	const n = ((await bn(`${Ct(e.baseUrl)}/models`, {
		headers: {
			Authorization: `Bearer ${e.apiKey.trim()}`,
			Accept: "application/json"
		},
		signal: e.signal
	})).data ?? []).filter(r => typeof r.id == "string" && r.id.trim()).map(r => {
		var l, d, c, p;
		const i = r.supported_parameters ?? [],
			s = ((l = r.architecture) == null ? void 0 : l.input_modalities) ?? [];
		return {
			id: r.id.trim(),
			name: r.name || r.id.trim(),
			providerId: "openrouter",
			description: r.description,
			contextWindow: r.context_length,
			maxOutputTokens: (d = r.top_provider) == null ? void 0 : d.max_completion_tokens,
			pricing: {
				prompt: ul((c = r.pricing) == null ? void 0 : c.prompt),
				completion: ul((p = r.pricing) == null ? void 0 : p.completion)
			},
			capabilities: {
				tools: i.includes("tools") || i.includes("tool_choice"),
				vision: s.includes("image"),
				multipleImages: "unknown",
				reasoning: i.includes("reasoning") || i.includes("include_reasoning")
			}
		}
	});
	return jn(n)
}

function uC(e) {
	return xp({
		apiKey: e.apiKey,
		baseURL: Ct(e.baseUrl),
		headers: {
			"HTTP-Referer": "https://zyntax.app",
			"X-Title": "Zyntax Agent"
		}
	}).chat(e.modelId)
}

function ul(e) {
	if (e == null) return;
	const t = Number(e);
	return Number.isFinite(t) ? t : void 0
}
const cC = {
		definition: xt.openrouter,
		listModels: lC,
		createModel: uC
	},
	dC = {
		openrouter: cC,
		anthropic: rb,
		openai: NI,
		gemini: vk,
		kimi: Ko.kimi,
		zai: Ko.zai,
		deepseek: Ko.deepseek,
		ollama: Ik
	};

function pC(e) {
	return dC[e]
}
const zo = Rp("AgentSecrets"),
	Do = new Map;

function qo(e) {
	return `provider.${e}`
}

function Uo() {
	return Np.isNativePlatform()
}
async function mC(e, t) {
	const n = qo(e);
	if (Uo()) {
		await zo.setSecret({
			key: n,
			value: t
		});
		return
	}
	Do.set(n, t)
}
async function Ip(e) {
	const t = qo(e);
	return Uo() ? (await zo.getSecret({
		key: t
	})).value : Do.get(t) ?? null
}
async function hC(e) {
	const t = qo(e);
	return Uo() ? (await zo.hasSecret({
		key: t
	})).exists : Do.has(t)
}
async function fC(e) {
	const t = qo(e);
	if (Uo()) {
		await zo.removeSecret({
			key: t
		});
		return
	}
	Do.delete(t)
}
const Tp = "zyntax-agent-settings",
	_C = 360 * 60 * 1e3,
	Sp = 220,
	Cp = 720;

function gC(e) {
	return {
		baseUrl: xt[e].defaultBaseUrl,
		modelId: null,
		models: [],
		modelsFetchedAt: null,
		modelsExpireAt: null,
		enabledModelIds: [],
		capabilityOverrides: {},
		contextWindowOverrides: {}
	}
}

function yC() {
	return {
		version: 2,
		activeProviderId: null,
		panelWidth: 420,
		includeCurrentFile: !0,
		mode: "act",
		autoApprove: !1,
		autoCompact: !0,
		providers: Object.fromEntries(Cn.map(e => [e, gC(e)]))
	}
}

function vC() {
	var t;
	const e = yC();
	try {
		const n = localStorage.getItem(Tp);
		if (!n) return e;
		const o = JSON.parse(n);
		for (const r of Cn) {
			const i = (t = o.providers) == null ? void 0 : t[r];
			if (!i || typeof i != "object") continue;
			const s = typeof i.modelId == "string" ? i.modelId : null;
			e.providers[r] = {
				baseUrl: typeof i.baseUrl == "string" && i.baseUrl.trim() ? i.baseUrl.trim() : e.providers[r].baseUrl,
				modelId: s,
				models: wC(i.models, r),
				modelsFetchedAt: typeof i.modelsFetchedAt == "number" ? i.modelsFetchedAt : null,
				modelsExpireAt: typeof i.modelsExpireAt == "number" ? i.modelsExpireAt : null,
				enabledModelIds: Array.isArray(i.enabledModelIds) ? i.enabledModelIds.filter(l => typeof l == "string") : s ? [s] : [],
				capabilityOverrides: kC(i.capabilityOverrides),
				contextWindowOverrides: xC(i.contextWindowOverrides)
			}
		}
		o.activeProviderId && Cn.includes(o.activeProviderId) && (e.activeProviderId = o.activeProviderId), typeof o.panelWidth == "number" && (e.panelWidth = Math.max(Sp, Math.min(Cp, o.panelWidth))), typeof o.includeCurrentFile == "boolean" && (e.includeCurrentFile = o.includeCurrentFile), (o.mode === "plan" || o.mode === "act") && (e.mode = o.mode), typeof o.autoApprove == "boolean" && (e.autoApprove = o.autoApprove), typeof o.autoCompact == "boolean" && (e.autoCompact = o.autoCompact)
	} catch (n) {
		console.warn("[Zyntax Agent] Ignoring invalid settings:", n)
	}
	return e
}

function bC(e) {
	localStorage.setItem(Tp, JSON.stringify(e))
}

function wC(e, t) {
	return Array.isArray(e) ? e.filter(n => n && typeof n == "object").filter(n => typeof n.id == "string").map(n => {
		var o, r, i, s;
		return {
			...n,
			providerId: t,
			name: typeof n.name == "string" ? n.name : n.id,
			capabilities: {
				tools: ((o = n.capabilities) == null ? void 0 : o.tools) ?? "unknown",
				vision: ((r = n.capabilities) == null ? void 0 : r.vision) ?? "unknown",
				multipleImages: ((i = n.capabilities) == null ? void 0 : i.multipleImages) ?? "unknown",
				reasoning: ((s = n.capabilities) == null ? void 0 : s.reasoning) ?? "unknown"
			}
		}
	}) : []
}

function kC(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return {};
	const t = {};
	for (const [n, o] of Object.entries(e)) {
		if (!o || typeof o != "object" || Array.isArray(o)) continue;
		const r = o,
			i = {};
		for (const s of ["tools", "vision", "multipleImages", "reasoning"]) {
			const l = r[s];
			(l === !0 || l === !1 || l === "unknown") && (i[s] = l)
		}
		Object.keys(i).length && (t[n] = i)
	}
	return t
}

function xC(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return {};
	const t = {};
	for (const [n, o] of Object.entries(e)) typeof o == "number" && Number.isFinite(o) && o >= 1024 && (t[n] = Math.round(o));
	return t
}
const Ee = cl(vC()),
	Ft = cl(Object.fromEntries(Cn.map(e => [e, {
		status: "disconnected",
		error: null,
		hasCredential: !1
	}])));
let no = null;

function ht() {
	bC(Ee)
}
async function IC() {
	return no || (no = Promise.all(Cn.map(async e => {
		const n = xt[e].requiresApiKey ? await hC(e).catch(() => !1) : !0;
		Ft[e].hasCredential = n;
		const o = Ee.providers[e];
		n && o.modelsFetchedAt !== null && (Ft[e].status = "connected")
	})).then(() => {}), no)
}
async function Op(e, t) {
	var d;
	const n = xt[e],
		o = Ee.providers[e],
		r = Ct(t.baseUrl || o.baseUrl),
		i = await Ip(e).catch(() => null),
		s = ((d = t.apiKey) == null ? void 0 : d.trim()) || i || void 0;
	if (n.requiresApiKey && !s) throw new Error(`Enter your ${n.credentialLabel}.`);
	if (!r) throw new Error("Enter a provider URL.");
	const l = Ft[e];
	l.status = "connecting", l.error = null;
	try {
		const c = await pC(e).listModels({
				apiKey: s,
				baseUrl: r
			}),
			p = Date.now();
		n.requiresApiKey && s && await mC(e, s);
		const m = o.models.filter(g => {
			var _;
			return ((_ = g.metadata) == null ? void 0 : _.manuallyAdded) === !0 && !c.some(w => w.id === g.id)
		});
		o.baseUrl = r, o.models = [...m, ...c], o.modelsFetchedAt = p, o.modelsExpireAt = p + _C;
		const h = new Set(o.models.map(g => g.id));
		return o.enabledModelIds = o.enabledModelIds.filter(g => h.has(g)), o.modelId && (!h.has(o.modelId) || !o.enabledModelIds.includes(o.modelId)) && (o.modelId = null), l.hasCredential = !0, l.status = "connected", Ee.activeProviderId || (Ee.activeProviderId = e), ht(), c
	} catch (c) {
		throw l.status = "error", l.error = c instanceof Error ? c.message : "Unable to connect to provider.", c
	}
}
async function TC(e) {
	return Op(e, {
		baseUrl: Ee.providers[e].baseUrl
	})
}
async function SC(e) {
	await fC(e).catch(() => {});
	const t = Ee.providers[e];
	t.modelId = null, t.models = [], t.modelsFetchedAt = null, t.modelsExpireAt = null, t.enabledModelIds = [], t.capabilityOverrides = {}, t.contextWindowOverrides = {}, Ft[e].status = "disconnected", Ft[e].error = null, Ft[e].hasCredential = !1, Ee.activeProviderId === e && (Ee.activeProviderId = null), ht()
}

function CC(e) {
	Ee.activeProviderId = e, ht()
}

function OC(e, t) {
	const n = Ee.providers[e];
	n.models.some(o => o.id === t) || Ap(e, t), n.enabledModelIds.includes(t) || n.enabledModelIds.push(t), n.modelId = t, Ee.activeProviderId = e, ht()
}

function Ap(e, t) {
	const n = t.trim();
	if (!n) throw new Error("Enter a model ID.");
	const o = Ee.providers[e],
		r = o.models.find(s => s.id === n);
	if (r) return r;
	const i = {
		id: n,
		name: n,
		providerId: e,
		capabilities: {
			tools: "unknown",
			vision: "unknown",
			multipleImages: "unknown",
			reasoning: "unknown"
		},
		metadata: {
			manuallyAdded: !0
		}
	};
	return o.models = [i, ...o.models], o.enabledModelIds.includes(n) || o.enabledModelIds.push(n), ht(), i
}

function AC(e) {
	Ee.panelWidth = Math.max(Sp, Math.min(Cp, Math.round(e))), ht()
}

function $C(e) {
	Ee.includeCurrentFile = e, ht()
}

function EC(e) {
	Ee.mode = e, ht()
}

function RC(e) {
	Ee.autoApprove = e, ht()
}

function NC(e) {
	Ee.autoCompact = e, ht()
}

function PC(e, t, n) {
	const o = Ee.providers[e];
	o.enabledModelIds = n ? [...new Set([...o.enabledModelIds, t])] : o.enabledModelIds.filter(r => r !== t), n && !o.modelId && (o.modelId = t), !n && o.modelId === t && (o.modelId = o.enabledModelIds[0] || null), n && (Ee.activeProviderId = e), ht()
}

function MC(e, t, n, o) {
	const r = Ee.providers[e],
		i = r.capabilityOverrides[t] || {};
	r.capabilityOverrides[t] = {
		...i,
		[n]: o,
		...n === "vision" && o === !1 ? {
			multipleImages: !1
		} : {},
		...n === "multipleImages" && o === !0 ? {
			vision: !0
		} : {}
	}, ht()
}

function $p(e, t) {
	const n = Ee.providers[e],
		o = n.models.find(i => i.id === t),
		r = {
			tools: "unknown",
			vision: "unknown",
			multipleImages: "unknown",
			reasoning: "unknown"
		};
	return {
		...(o == null ? void 0 : o.capabilities) || r,
		...n.capabilityOverrides[t] || {}
	}
}

function zC(e, t, n) {
	const o = Ee.providers[e].contextWindowOverrides;
	n === null || !Number.isFinite(n) ? delete o[t] : o[t] = Math.max(1024, Math.round(n)), ht()
}

function Ep(e, t) {
	var o;
	const n = Ee.providers[e];
	return n.contextWindowOverrides[t] ?? ((o = n.models.find(r => r.id === t)) == null ? void 0 : o.contextWindow)
}
async function DC() {
	return Ee.activeProviderId ? Ip(Ee.activeProviderId) : null
}
const jo = ko(() => Ee.activeProviderId ? Ee.providers[Ee.activeProviderId] : null),
	qC = ko(() => {
		const e = jo.value;
		if (!e) return [];
		const t = new Set(e.enabledModelIds);
		return e.models.filter(n => t.has(n.id))
	}),
	UC = ko(() => {
		const e = jo.value;
		if (!(e != null && e.modelId)) return null;
		const t = e.models.find(n => n.id === e.modelId);
		return !t || !e.enabledModelIds.includes(t.id) ? null : {
			...t,
			contextWindow: Ep(t.providerId, t.id),
			capabilities: $p(t.providerId, t.id)
		}
	}),
	jC = ko(() => {
		var n;
		const e = Ee.activeProviderId;
		return !e || !((n = jo.value) != null && n.modelId) ? !1 : !xt[e].requiresApiKey || Ft[e].hasCredential
	});

function mO() {
	return {
		settings: Ee,
		providerState: Pp(Ft),
		providers: Mp,
		activeConnection: jo,
		enabledModels: qC,
		activeModel: UC,
		isReady: jC,
		initialize: IC,
		connectProvider: Op,
		refreshModels: TC,
		disconnectProvider: SC,
		setActiveProvider: CC,
		selectModel: OC,
		addManualModel: Ap,
		toggleModelEnabled: PC,
		setModelCapability: MC,
		getModelCapabilities: $p,
		setModelContextWindow: zC,
		getModelContextWindow: Ep,
		setPanelWidth: AC,
		setIncludeCurrentFile: $C,
		setMode: EC,
		setAutoApprove: RC,
		setAutoCompact: NC,
		getActiveCredential: DC
	}
}
export {
	KC as $, He as A, Dt as B, Q as C, _e as D, Jt as E, Vg as F, cO as G, dy as H, Ot as I, Bg as J, uO as K, $r as L, ze as M, Te as N, ur as O, xo as P, Lt as Q, sy as R, tO as S, lO as T, On as U, Ie as V, Qe as W, oO as X, sO as Y, wl as Z, Y as _, R as a, Ao as a0, nO as a1, Mt as a2, Oe as a3, Pu as a4, dO as a5, av as a6, Fr as a7, pO as a8, iO as a9, Gr as aa, Ku as ab, Vr as ac, lt as ad, Xu as ae, Yu as af, Nu as ag, XC as ah, rO as ai, Zt as aj, Yg as ak, YC as al, my as am, aO as an, pC as ao, mO as ap, Cn as aq, le as b, Be as c, ye as d, tt as e, et as f, ct as g, Bt as h, nt as i, Me as j, Ce as k, f as l, tc as m, y as n, u as o, Ue as p, sn as q, ke as r, a as s, pv as t, Se as u, ee as v, $o as w, qn as x, Kr as y, Uu as z
};