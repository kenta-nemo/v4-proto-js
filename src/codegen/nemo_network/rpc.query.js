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
exports.createRPCQueryClient = void 0;
var tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
var stargate_1 = require("@cosmjs/stargate");
var createRPCQueryClient = function (_a) {
    var rpcEndpoint = _a.rpcEndpoint;
    return __awaiter(void 0, void 0, void 0, function () {
        var tmClient, client;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        return __generator(this, function (_3) {
            switch (_3.label) {
                case 0: return [4 /*yield*/, tendermint_rpc_1.Tendermint34Client.connect(rpcEndpoint)];
                case 1:
                    tmClient = _3.sent();
                    client = new stargate_1.QueryClient(tmClient);
                    _b = {};
                    _c = {};
                    _d = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/app/v1alpha1/query.rpc.Query"); })];
                case 2:
                    _c.app = (_d.v1alpha1 = (_3.sent()).createRpcQueryExtension(client),
                        _d);
                    _e = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/auth/v1beta1/query.rpc.Query"); })];
                case 3:
                    _c.auth = (_e.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _e);
                    _f = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/authz/v1beta1/query.rpc.Query"); })];
                case 4:
                    _c.authz = (_f.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _f);
                    _g = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/bank/v1beta1/query.rpc.Query"); })];
                case 5:
                    _c.bank = (_g.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _g);
                    _h = {};
                    _j = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/base/node/v1beta1/query.rpc.Service"); })];
                case 6:
                    _h.node = (_j.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _j);
                    _k = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/base/tendermint/v1beta1/query.rpc.Service"); })];
                case 7:
                    _c.base = (_h.tendermint = (_k.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _k),
                        _h);
                    _l = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/circuit/v1/query.rpc.Query"); })];
                case 8:
                    _c.circuit = (_l.v1 = (_3.sent()).createRpcQueryExtension(client),
                        _l);
                    _m = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/consensus/v1/query.rpc.Query"); })];
                case 9:
                    _c.consensus = (_m.v1 = (_3.sent()).createRpcQueryExtension(client),
                        _m);
                    _o = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/distribution/v1beta1/query.rpc.Query"); })];
                case 10:
                    _c.distribution = (_o.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _o);
                    _p = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/evidence/v1beta1/query.rpc.Query"); })];
                case 11:
                    _c.evidence = (_p.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _p);
                    _q = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/feegrant/v1beta1/query.rpc.Query"); })];
                case 12:
                    _c.feegrant = (_q.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _q);
                    _r = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/gov/v1/query.rpc.Query"); })];
                case 13:
                    _r.v1 = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/gov/v1beta1/query.rpc.Query"); })];
                case 14:
                    _c.gov = (_r.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _r);
                    _s = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/group/v1/query.rpc.Query"); })];
                case 15:
                    _c.group = (_s.v1 = (_3.sent()).createRpcQueryExtension(client),
                        _s);
                    _t = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/mint/v1beta1/query.rpc.Query"); })];
                case 16:
                    _c.mint = (_t.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _t);
                    _u = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/nft/v1beta1/query.rpc.Query"); })];
                case 17:
                    _c.nft = (_u.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _u);
                    _v = {};
                    _w = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/orm/query/v1alpha1/query.rpc.Query"); })];
                case 18:
                    _c.orm = (_v.query = (_w.v1alpha1 = (_3.sent()).createRpcQueryExtension(client),
                        _w),
                        _v);
                    _x = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/params/v1beta1/query.rpc.Query"); })];
                case 19:
                    _c.params = (_x.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _x);
                    _y = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/slashing/v1beta1/query.rpc.Query"); })];
                case 20:
                    _c.slashing = (_y.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _y);
                    _z = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/staking/v1beta1/query.rpc.Query"); })];
                case 21:
                    _c.staking = (_z.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _z);
                    _0 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/tx/v1beta1/service.rpc.Service"); })];
                case 22:
                    _c.tx = (_0.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _0);
                    _1 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../cosmos/upgrade/v1beta1/query.rpc.Query"); })];
                case 23:
                    _b.cosmos = (_c.upgrade = (_1.v1beta1 = (_3.sent()).createRpcQueryExtension(client),
                        _1),
                        _c);
                    _2 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./affiliates/query.rpc.Query"); })];
                case 24:
                    _2.affiliates = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./assets/query.rpc.Query"); })];
                case 25:
                    _2.assets = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./blocktime/query.rpc.Query"); })];
                case 26:
                    _2.blocktime = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./bridge/query.rpc.Query"); })];
                case 27:
                    _2.bridge = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./clob/query.rpc.Query"); })];
                case 28:
                    _2.clob = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./delaymsg/query.rpc.Query"); })];
                case 29:
                    _2.delaymsg = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./epochs/query.rpc.Query"); })];
                case 30:
                    _2.epochs = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./feetiers/query.rpc.Query"); })];
                case 31:
                    _2.feetiers = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./govplus/query.rpc.Query"); })];
                case 32:
                    _2.govplus = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./listing/query.rpc.Query"); })];
                case 33:
                    _2.listing = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./perpetuals/query.rpc.Query"); })];
                case 34:
                    _2.perpetuals = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./prices/query.rpc.Query"); })];
                case 35:
                    _2.prices = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./ratelimit/query.rpc.Query"); })];
                case 36:
                    _2.ratelimit = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./revshare/query.rpc.Query"); })];
                case 37:
                    _2.revshare = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./rewards/query.rpc.Query"); })];
                case 38:
                    _2.rewards = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./sending/query.rpc.Query"); })];
                case 39:
                    _2.sending = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./stats/query.rpc.Query"); })];
                case 40:
                    _2.stats = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./subaccounts/query.rpc.Query"); })];
                case 41:
                    _2.subaccounts = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./vault/query.rpc.Query"); })];
                case 42:
                    _2.vault = (_3.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./vest/query.rpc.Query"); })];
                case 43: return [2 /*return*/, (_b.nemo_network = (_2.vest = (_3.sent()).createRpcQueryExtension(client),
                        _2),
                        _b)];
            }
        });
    });
};
exports.createRPCQueryClient = createRPCQueryClient;
