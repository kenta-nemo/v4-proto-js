"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getSigningNemoNetworkClient = exports.getSigningNemoNetworkClientOptions = exports.nemoNetworkProtoRegistry = exports.nemoNetworkAminoConverters = void 0;
var proto_signing_1 = require("@cosmjs/proto-signing");
var stargate_1 = require("@cosmjs/stargate");
var nemoNetworkAffiliatesTxRegistry = require("./affiliates/tx.registry");
var nemoNetworkBlocktimeTxRegistry = require("./blocktime/tx.registry");
var nemoNetworkBridgeTxRegistry = require("./bridge/tx.registry");
var nemoNetworkClobTxRegistry = require("./clob/tx.registry");
var nemoNetworkDelaymsgTxRegistry = require("./delaymsg/tx.registry");
var nemoNetworkFeetiersTxRegistry = require("./feetiers/tx.registry");
var nemoNetworkGovplusTxRegistry = require("./govplus/tx.registry");
var nemoNetworkListingTxRegistry = require("./listing/tx.registry");
var nemoNetworkPerpetualsTxRegistry = require("./perpetuals/tx.registry");
var nemoNetworkPricesTxRegistry = require("./prices/tx.registry");
var nemoNetworkRatelimitTxRegistry = require("./ratelimit/tx.registry");
var nemoNetworkRevshareTxRegistry = require("./revshare/tx.registry");
var nemoNetworkRewardsTxRegistry = require("./rewards/tx.registry");
var nemoNetworkSendingTxRegistry = require("./sending/tx.registry");
var nemoNetworkStatsTxRegistry = require("./stats/tx.registry");
var nemoNetworkVaultTxRegistry = require("./vault/tx.registry");
var nemoNetworkVestTxRegistry = require("./vest/tx.registry");
var nemoNetworkAffiliatesTxAmino = require("./affiliates/tx.amino");
var nemoNetworkBlocktimeTxAmino = require("./blocktime/tx.amino");
var nemoNetworkBridgeTxAmino = require("./bridge/tx.amino");
var nemoNetworkClobTxAmino = require("./clob/tx.amino");
var nemoNetworkDelaymsgTxAmino = require("./delaymsg/tx.amino");
var nemoNetworkFeetiersTxAmino = require("./feetiers/tx.amino");
var nemoNetworkGovplusTxAmino = require("./govplus/tx.amino");
var nemoNetworkListingTxAmino = require("./listing/tx.amino");
var nemoNetworkPerpetualsTxAmino = require("./perpetuals/tx.amino");
var nemoNetworkPricesTxAmino = require("./prices/tx.amino");
var nemoNetworkRatelimitTxAmino = require("./ratelimit/tx.amino");
var nemoNetworkRevshareTxAmino = require("./revshare/tx.amino");
var nemoNetworkRewardsTxAmino = require("./rewards/tx.amino");
var nemoNetworkSendingTxAmino = require("./sending/tx.amino");
var nemoNetworkStatsTxAmino = require("./stats/tx.amino");
var nemoNetworkVaultTxAmino = require("./vault/tx.amino");
var nemoNetworkVestTxAmino = require("./vest/tx.amino");
exports.nemoNetworkAminoConverters = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, nemoNetworkAffiliatesTxAmino.AminoConverter), nemoNetworkBlocktimeTxAmino.AminoConverter), nemoNetworkBridgeTxAmino.AminoConverter), nemoNetworkClobTxAmino.AminoConverter), nemoNetworkDelaymsgTxAmino.AminoConverter), nemoNetworkFeetiersTxAmino.AminoConverter), nemoNetworkGovplusTxAmino.AminoConverter), nemoNetworkListingTxAmino.AminoConverter), nemoNetworkPerpetualsTxAmino.AminoConverter), nemoNetworkPricesTxAmino.AminoConverter), nemoNetworkRatelimitTxAmino.AminoConverter), nemoNetworkRevshareTxAmino.AminoConverter), nemoNetworkRewardsTxAmino.AminoConverter), nemoNetworkSendingTxAmino.AminoConverter), nemoNetworkStatsTxAmino.AminoConverter), nemoNetworkVaultTxAmino.AminoConverter), nemoNetworkVestTxAmino.AminoConverter);
exports.nemoNetworkProtoRegistry = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], nemoNetworkAffiliatesTxRegistry.registry, true), nemoNetworkBlocktimeTxRegistry.registry, true), nemoNetworkBridgeTxRegistry.registry, true), nemoNetworkClobTxRegistry.registry, true), nemoNetworkDelaymsgTxRegistry.registry, true), nemoNetworkFeetiersTxRegistry.registry, true), nemoNetworkGovplusTxRegistry.registry, true), nemoNetworkListingTxRegistry.registry, true), nemoNetworkPerpetualsTxRegistry.registry, true), nemoNetworkPricesTxRegistry.registry, true), nemoNetworkRatelimitTxRegistry.registry, true), nemoNetworkRevshareTxRegistry.registry, true), nemoNetworkRewardsTxRegistry.registry, true), nemoNetworkSendingTxRegistry.registry, true), nemoNetworkStatsTxRegistry.registry, true), nemoNetworkVaultTxRegistry.registry, true), nemoNetworkVestTxRegistry.registry, true);
var getSigningNemoNetworkClientOptions = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.defaultTypes, defaultTypes = _c === void 0 ? stargate_1.defaultRegistryTypes : _c;
    var registry = new proto_signing_1.Registry(__spreadArray(__spreadArray([], defaultTypes, true), exports.nemoNetworkProtoRegistry, true));
    var aminoTypes = new stargate_1.AminoTypes(__assign({}, exports.nemoNetworkAminoConverters));
    return {
        registry: registry,
        aminoTypes: aminoTypes
    };
};
exports.getSigningNemoNetworkClientOptions = getSigningNemoNetworkClientOptions;
var getSigningNemoNetworkClient = function (_a) {
    var rpcEndpoint = _a.rpcEndpoint, signer = _a.signer, _b = _a.defaultTypes, defaultTypes = _b === void 0 ? stargate_1.defaultRegistryTypes : _b;
    return __awaiter(void 0, void 0, void 0, function () {
        var _c, registry, aminoTypes, client;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _c = (0, exports.getSigningNemoNetworkClientOptions)({
                        defaultTypes: defaultTypes
                    }), registry = _c.registry, aminoTypes = _c.aminoTypes;
                    return [4 /*yield*/, stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
                            registry: registry,
                            aminoTypes: aminoTypes
                        })];
                case 1:
                    client = _d.sent();
                    return [2 /*return*/, client];
            }
        });
    });
};
exports.getSigningNemoNetworkClient = getSigningNemoNetworkClient;
