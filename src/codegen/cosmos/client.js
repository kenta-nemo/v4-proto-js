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
exports.getSigningCosmosClient = exports.getSigningCosmosClientOptions = exports.cosmosProtoRegistry = exports.cosmosAminoConverters = void 0;
var proto_signing_1 = require("@cosmjs/proto-signing");
var stargate_1 = require("@cosmjs/stargate");
var cosmosAuthV1beta1TxRegistry = require("./auth/v1beta1/tx.registry");
var cosmosAuthzV1beta1TxRegistry = require("./authz/v1beta1/tx.registry");
var cosmosBankV1beta1TxRegistry = require("./bank/v1beta1/tx.registry");
var cosmosCircuitV1TxRegistry = require("./circuit/v1/tx.registry");
var cosmosConsensusV1TxRegistry = require("./consensus/v1/tx.registry");
var cosmosCrisisV1beta1TxRegistry = require("./crisis/v1beta1/tx.registry");
var cosmosDistributionV1beta1TxRegistry = require("./distribution/v1beta1/tx.registry");
var cosmosEvidenceV1beta1TxRegistry = require("./evidence/v1beta1/tx.registry");
var cosmosFeegrantV1beta1TxRegistry = require("./feegrant/v1beta1/tx.registry");
var cosmosGovV1TxRegistry = require("./gov/v1/tx.registry");
var cosmosGovV1beta1TxRegistry = require("./gov/v1beta1/tx.registry");
var cosmosGroupV1TxRegistry = require("./group/v1/tx.registry");
var cosmosMintV1beta1TxRegistry = require("./mint/v1beta1/tx.registry");
var cosmosNftV1beta1TxRegistry = require("./nft/v1beta1/tx.registry");
var cosmosSlashingV1beta1TxRegistry = require("./slashing/v1beta1/tx.registry");
var cosmosStakingV1beta1TxRegistry = require("./staking/v1beta1/tx.registry");
var cosmosUpgradeV1beta1TxRegistry = require("./upgrade/v1beta1/tx.registry");
var cosmosVestingV1beta1TxRegistry = require("./vesting/v1beta1/tx.registry");
var cosmosAuthV1beta1TxAmino = require("./auth/v1beta1/tx.amino");
var cosmosAuthzV1beta1TxAmino = require("./authz/v1beta1/tx.amino");
var cosmosBankV1beta1TxAmino = require("./bank/v1beta1/tx.amino");
var cosmosCircuitV1TxAmino = require("./circuit/v1/tx.amino");
var cosmosConsensusV1TxAmino = require("./consensus/v1/tx.amino");
var cosmosCrisisV1beta1TxAmino = require("./crisis/v1beta1/tx.amino");
var cosmosDistributionV1beta1TxAmino = require("./distribution/v1beta1/tx.amino");
var cosmosEvidenceV1beta1TxAmino = require("./evidence/v1beta1/tx.amino");
var cosmosFeegrantV1beta1TxAmino = require("./feegrant/v1beta1/tx.amino");
var cosmosGovV1TxAmino = require("./gov/v1/tx.amino");
var cosmosGovV1beta1TxAmino = require("./gov/v1beta1/tx.amino");
var cosmosGroupV1TxAmino = require("./group/v1/tx.amino");
var cosmosMintV1beta1TxAmino = require("./mint/v1beta1/tx.amino");
var cosmosNftV1beta1TxAmino = require("./nft/v1beta1/tx.amino");
var cosmosSlashingV1beta1TxAmino = require("./slashing/v1beta1/tx.amino");
var cosmosStakingV1beta1TxAmino = require("./staking/v1beta1/tx.amino");
var cosmosUpgradeV1beta1TxAmino = require("./upgrade/v1beta1/tx.amino");
var cosmosVestingV1beta1TxAmino = require("./vesting/v1beta1/tx.amino");
exports.cosmosAminoConverters = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, cosmosAuthV1beta1TxAmino.AminoConverter), cosmosAuthzV1beta1TxAmino.AminoConverter), cosmosBankV1beta1TxAmino.AminoConverter), cosmosCircuitV1TxAmino.AminoConverter), cosmosConsensusV1TxAmino.AminoConverter), cosmosCrisisV1beta1TxAmino.AminoConverter), cosmosDistributionV1beta1TxAmino.AminoConverter), cosmosEvidenceV1beta1TxAmino.AminoConverter), cosmosFeegrantV1beta1TxAmino.AminoConverter), cosmosGovV1TxAmino.AminoConverter), cosmosGovV1beta1TxAmino.AminoConverter), cosmosGroupV1TxAmino.AminoConverter), cosmosMintV1beta1TxAmino.AminoConverter), cosmosNftV1beta1TxAmino.AminoConverter), cosmosSlashingV1beta1TxAmino.AminoConverter), cosmosStakingV1beta1TxAmino.AminoConverter), cosmosUpgradeV1beta1TxAmino.AminoConverter), cosmosVestingV1beta1TxAmino.AminoConverter);
exports.cosmosProtoRegistry = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], cosmosAuthV1beta1TxRegistry.registry, true), cosmosAuthzV1beta1TxRegistry.registry, true), cosmosBankV1beta1TxRegistry.registry, true), cosmosCircuitV1TxRegistry.registry, true), cosmosConsensusV1TxRegistry.registry, true), cosmosCrisisV1beta1TxRegistry.registry, true), cosmosDistributionV1beta1TxRegistry.registry, true), cosmosEvidenceV1beta1TxRegistry.registry, true), cosmosFeegrantV1beta1TxRegistry.registry, true), cosmosGovV1TxRegistry.registry, true), cosmosGovV1beta1TxRegistry.registry, true), cosmosGroupV1TxRegistry.registry, true), cosmosMintV1beta1TxRegistry.registry, true), cosmosNftV1beta1TxRegistry.registry, true), cosmosSlashingV1beta1TxRegistry.registry, true), cosmosStakingV1beta1TxRegistry.registry, true), cosmosUpgradeV1beta1TxRegistry.registry, true), cosmosVestingV1beta1TxRegistry.registry, true);
var getSigningCosmosClientOptions = function () {
    var registry = new proto_signing_1.Registry(__spreadArray([], exports.cosmosProtoRegistry, true));
    var aminoTypes = new stargate_1.AminoTypes(__assign({}, exports.cosmosAminoConverters));
    return {
        registry: registry,
        aminoTypes: aminoTypes
    };
};
exports.getSigningCosmosClientOptions = getSigningCosmosClientOptions;
var getSigningCosmosClient = function (_a) {
    var rpcEndpoint = _a.rpcEndpoint, signer = _a.signer;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, registry, aminoTypes, client;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (0, exports.getSigningCosmosClientOptions)(), registry = _b.registry, aminoTypes = _b.aminoTypes;
                    return [4 /*yield*/, stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
                            registry: registry,
                            aminoTypes: aminoTypes
                        })];
                case 1:
                    client = _c.sent();
                    return [2 /*return*/, client];
            }
        });
    });
};
exports.getSigningCosmosClient = getSigningCosmosClient;
