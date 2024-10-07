"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.createRPCMsgClient = void 0;
var createRPCMsgClient = function (_a) {
    var rpc = _a.rpc;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        return __generator(this, function (_x) {
            switch (_x.label) {
                case 0:
                    _b = {};
                    _c = {};
                    _d = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/auth/v1beta1/tx.rpc.msg"); })];
                case 1:
                    _c.auth = (_d.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _d);
                    _e = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/authz/v1beta1/tx.rpc.msg"); })];
                case 2:
                    _c.authz = (_e.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _e);
                    _f = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/bank/v1beta1/tx.rpc.msg"); })];
                case 3:
                    _c.bank = (_f.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _f);
                    _g = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/circuit/v1/tx.rpc.msg"); })];
                case 4:
                    _c.circuit = (_g.v1 = new (_x.sent()).MsgClientImpl(rpc),
                        _g);
                    _h = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/consensus/v1/tx.rpc.msg"); })];
                case 5:
                    _c.consensus = (_h.v1 = new (_x.sent()).MsgClientImpl(rpc),
                        _h);
                    _j = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/crisis/v1beta1/tx.rpc.msg"); })];
                case 6:
                    _c.crisis = (_j.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _j);
                    _k = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/distribution/v1beta1/tx.rpc.msg"); })];
                case 7:
                    _c.distribution = (_k.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _k);
                    _l = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/evidence/v1beta1/tx.rpc.msg"); })];
                case 8:
                    _c.evidence = (_l.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _l);
                    _m = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/feegrant/v1beta1/tx.rpc.msg"); })];
                case 9:
                    _c.feegrant = (_m.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _m);
                    _o = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/gov/v1/tx.rpc.msg"); })];
                case 10:
                    _o.v1 = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/gov/v1beta1/tx.rpc.msg"); })];
                case 11:
                    _c.gov = (_o.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _o);
                    _p = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/group/v1/tx.rpc.msg"); })];
                case 12:
                    _c.group = (_p.v1 = new (_x.sent()).MsgClientImpl(rpc),
                        _p);
                    _q = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/mint/v1beta1/tx.rpc.msg"); })];
                case 13:
                    _c.mint = (_q.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _q);
                    _r = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/nft/v1beta1/tx.rpc.msg"); })];
                case 14:
                    _c.nft = (_r.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _r);
                    _s = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/slashing/v1beta1/tx.rpc.msg"); })];
                case 15:
                    _c.slashing = (_s.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _s);
                    _t = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/staking/v1beta1/tx.rpc.msg"); })];
                case 16:
                    _c.staking = (_t.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _t);
                    _u = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/upgrade/v1beta1/tx.rpc.msg"); })];
                case 17:
                    _c.upgrade = (_u.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _u);
                    _v = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/vesting/v1beta1/tx.rpc.msg"); })];
                case 18:
                    _b.cosmos = (_c.vesting = (_v.v1beta1 = new (_x.sent()).MsgClientImpl(rpc),
                        _v),
                        _c);
                    _w = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./affiliates/tx.rpc.msg"); })];
                case 19:
                    _w.affiliates = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./blocktime/tx.rpc.msg"); })];
                case 20:
                    _w.blocktime = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./bridge/tx.rpc.msg"); })];
                case 21:
                    _w.bridge = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./clob/tx.rpc.msg"); })];
                case 22:
                    _w.clob = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./delaymsg/tx.rpc.msg"); })];
                case 23:
                    _w.delaymsg = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./feetiers/tx.rpc.msg"); })];
                case 24:
                    _w.feetiers = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./govplus/tx.rpc.msg"); })];
                case 25:
                    _w.govplus = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./listing/tx.rpc.msg"); })];
                case 26:
                    _w.listing = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./perpetuals/tx.rpc.msg"); })];
                case 27:
                    _w.perpetuals = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./prices/tx.rpc.msg"); })];
                case 28:
                    _w.prices = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./ratelimit/tx.rpc.msg"); })];
                case 29:
                    _w.ratelimit = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./revshare/tx.rpc.msg"); })];
                case 30:
                    _w.revshare = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./rewards/tx.rpc.msg"); })];
                case 31:
                    _w.rewards = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./sending/tx.rpc.msg"); })];
                case 32:
                    _w.sending = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./stats/tx.rpc.msg"); })];
                case 33:
                    _w.stats = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./vault/tx.rpc.msg"); })];
                case 34:
                    _w.vault = new (_x.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./vest/tx.rpc.msg"); })];
                case 35: return [2 /*return*/, (_b.nemo_network = (_w.vest = new (_x.sent()).MsgClientImpl(rpc),
                        _w),
                        _b)];
            }
        });
    });
};
exports.createRPCMsgClient = createRPCMsgClient;
