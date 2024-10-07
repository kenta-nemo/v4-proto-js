"use strict";
exports.__esModule = true;
exports.LiquidityTier = exports.PremiumStore = exports.MarketPremiums = exports.PerpetualParams = exports.Perpetual = exports.perpetualMarketTypeToJSON = exports.perpetualMarketTypeFromJSON = exports.PerpetualMarketTypeAmino = exports.PerpetualMarketTypeSDKType = exports.PerpetualMarketType = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
var PerpetualMarketType;
(function (PerpetualMarketType) {
    /** PERPETUAL_MARKET_TYPE_UNSPECIFIED - Unspecified market type. */
    PerpetualMarketType[PerpetualMarketType["PERPETUAL_MARKET_TYPE_UNSPECIFIED"] = 0] = "PERPETUAL_MARKET_TYPE_UNSPECIFIED";
    /** PERPETUAL_MARKET_TYPE_CROSS - Market type for cross margin perpetual markets. */
    PerpetualMarketType[PerpetualMarketType["PERPETUAL_MARKET_TYPE_CROSS"] = 1] = "PERPETUAL_MARKET_TYPE_CROSS";
    /** PERPETUAL_MARKET_TYPE_ISOLATED - Market type for isolated margin perpetual markets. */
    PerpetualMarketType[PerpetualMarketType["PERPETUAL_MARKET_TYPE_ISOLATED"] = 2] = "PERPETUAL_MARKET_TYPE_ISOLATED";
    PerpetualMarketType[PerpetualMarketType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PerpetualMarketType = exports.PerpetualMarketType || (exports.PerpetualMarketType = {}));
exports.PerpetualMarketTypeSDKType = PerpetualMarketType;
exports.PerpetualMarketTypeAmino = PerpetualMarketType;
function perpetualMarketTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "PERPETUAL_MARKET_TYPE_UNSPECIFIED":
            return PerpetualMarketType.PERPETUAL_MARKET_TYPE_UNSPECIFIED;
        case 1:
        case "PERPETUAL_MARKET_TYPE_CROSS":
            return PerpetualMarketType.PERPETUAL_MARKET_TYPE_CROSS;
        case 2:
        case "PERPETUAL_MARKET_TYPE_ISOLATED":
            return PerpetualMarketType.PERPETUAL_MARKET_TYPE_ISOLATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PerpetualMarketType.UNRECOGNIZED;
    }
}
exports.perpetualMarketTypeFromJSON = perpetualMarketTypeFromJSON;
function perpetualMarketTypeToJSON(object) {
    switch (object) {
        case PerpetualMarketType.PERPETUAL_MARKET_TYPE_UNSPECIFIED:
            return "PERPETUAL_MARKET_TYPE_UNSPECIFIED";
        case PerpetualMarketType.PERPETUAL_MARKET_TYPE_CROSS:
            return "PERPETUAL_MARKET_TYPE_CROSS";
        case PerpetualMarketType.PERPETUAL_MARKET_TYPE_ISOLATED:
            return "PERPETUAL_MARKET_TYPE_ISOLATED";
        case PerpetualMarketType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.perpetualMarketTypeToJSON = perpetualMarketTypeToJSON;
function createBasePerpetual() {
    return {
        params: exports.PerpetualParams.fromPartial({}),
        fundingIndex: new Uint8Array(),
        openInterest: new Uint8Array()
    };
}
exports.Perpetual = {
    typeUrl: "/nemo_network.perpetuals.Perpetual",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            exports.PerpetualParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.fundingIndex.length !== 0) {
            writer.uint32(18).bytes(message.fundingIndex);
        }
        if (message.openInterest.length !== 0) {
            writer.uint32(26).bytes(message.openInterest);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerpetual();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.PerpetualParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fundingIndex = reader.bytes();
                    break;
                case 3:
                    message.openInterest = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePerpetual();
        message.params = object.params !== undefined && object.params !== null ? exports.PerpetualParams.fromPartial(object.params) : undefined;
        message.fundingIndex = (_a = object.fundingIndex) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.openInterest = (_b = object.openInterest) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePerpetual();
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.PerpetualParams.fromAmino(object.params);
        }
        if (object.funding_index !== undefined && object.funding_index !== null) {
            message.fundingIndex = (0, helpers_1.bytesFromBase64)(object.funding_index);
        }
        if (object.open_interest !== undefined && object.open_interest !== null) {
            message.openInterest = (0, helpers_1.bytesFromBase64)(object.open_interest);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? exports.PerpetualParams.toAmino(message.params) : undefined;
        obj.funding_index = message.fundingIndex ? (0, helpers_1.base64FromBytes)(message.fundingIndex) : undefined;
        obj.open_interest = message.openInterest ? (0, helpers_1.base64FromBytes)(message.openInterest) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Perpetual.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Perpetual.decode(message.value);
    },
    toProto: function (message) {
        return exports.Perpetual.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.Perpetual",
            value: exports.Perpetual.encode(message).finish()
        };
    }
};
function createBasePerpetualParams() {
    return {
        id: 0,
        ticker: "",
        marketId: 0,
        atomicResolution: 0,
        defaultFundingPpm: 0,
        liquidityTier: 0,
        marketType: 0
    };
}
exports.PerpetualParams = {
    typeUrl: "/nemo_network.perpetuals.PerpetualParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.marketId !== 0) {
            writer.uint32(24).uint32(message.marketId);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(32).sint32(message.atomicResolution);
        }
        if (message.defaultFundingPpm !== 0) {
            writer.uint32(40).sint32(message.defaultFundingPpm);
        }
        if (message.liquidityTier !== 0) {
            writer.uint32(48).uint32(message.liquidityTier);
        }
        if (message.marketType !== 0) {
            writer.uint32(56).int32(message.marketType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerpetualParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.marketId = reader.uint32();
                    break;
                case 4:
                    message.atomicResolution = reader.sint32();
                    break;
                case 5:
                    message.defaultFundingPpm = reader.sint32();
                    break;
                case 6:
                    message.liquidityTier = reader.uint32();
                    break;
                case 7:
                    message.marketType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBasePerpetualParams();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : 0;
        message.atomicResolution = (_d = object.atomicResolution) !== null && _d !== void 0 ? _d : 0;
        message.defaultFundingPpm = (_e = object.defaultFundingPpm) !== null && _e !== void 0 ? _e : 0;
        message.liquidityTier = (_f = object.liquidityTier) !== null && _f !== void 0 ? _f : 0;
        message.marketType = (_g = object.marketType) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePerpetualParams();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
            message.atomicResolution = object.atomic_resolution;
        }
        if (object.default_funding_ppm !== undefined && object.default_funding_ppm !== null) {
            message.defaultFundingPpm = object.default_funding_ppm;
        }
        if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
            message.liquidityTier = object.liquidity_tier;
        }
        if (object.market_type !== undefined && object.market_type !== null) {
            message.marketType = object.market_type;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
        obj.default_funding_ppm = message.defaultFundingPpm === 0 ? undefined : message.defaultFundingPpm;
        obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
        obj.market_type = message.marketType === 0 ? undefined : message.marketType;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PerpetualParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PerpetualParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.PerpetualParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.PerpetualParams",
            value: exports.PerpetualParams.encode(message).finish()
        };
    }
};
function createBaseMarketPremiums() {
    return {
        perpetualId: 0,
        premiums: []
    };
}
exports.MarketPremiums = {
    typeUrl: "/nemo_network.perpetuals.MarketPremiums",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        writer.uint32(18).fork();
        for (var _i = 0, _a = message.premiums; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.sint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketPremiums();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.premiums.push(reader.sint32());
                        }
                    }
                    else {
                        message.premiums.push(reader.sint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMarketPremiums();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.premiums = ((_b = object.premiums) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMarketPremiums();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        message.premiums = ((_a = object.premiums) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        if (message.premiums) {
            obj.premiums = message.premiums.map(function (e) { return e; });
        }
        else {
            obj.premiums = message.premiums;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketPremiums.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketPremiums.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketPremiums.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MarketPremiums",
            value: exports.MarketPremiums.encode(message).finish()
        };
    }
};
function createBasePremiumStore() {
    return {
        allMarketPremiums: [],
        numPremiums: 0
    };
}
exports.PremiumStore = {
    typeUrl: "/nemo_network.perpetuals.PremiumStore",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.allMarketPremiums; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MarketPremiums.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.numPremiums !== 0) {
            writer.uint32(16).uint32(message.numPremiums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePremiumStore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allMarketPremiums.push(exports.MarketPremiums.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.numPremiums = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePremiumStore();
        message.allMarketPremiums = ((_a = object.allMarketPremiums) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MarketPremiums.fromPartial(e); })) || [];
        message.numPremiums = (_b = object.numPremiums) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBasePremiumStore();
        message.allMarketPremiums = ((_a = object.all_market_premiums) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MarketPremiums.fromAmino(e); })) || [];
        if (object.num_premiums !== undefined && object.num_premiums !== null) {
            message.numPremiums = object.num_premiums;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.allMarketPremiums) {
            obj.all_market_premiums = message.allMarketPremiums.map(function (e) { return e ? exports.MarketPremiums.toAmino(e) : undefined; });
        }
        else {
            obj.all_market_premiums = message.allMarketPremiums;
        }
        obj.num_premiums = message.numPremiums === 0 ? undefined : message.numPremiums;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PremiumStore.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PremiumStore.decode(message.value);
    },
    toProto: function (message) {
        return exports.PremiumStore.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.PremiumStore",
            value: exports.PremiumStore.encode(message).finish()
        };
    }
};
function createBaseLiquidityTier() {
    return {
        id: 0,
        name: "",
        initialMarginPpm: 0,
        maintenanceFractionPpm: 0,
        basePositionNotional: BigInt(0),
        impactNotional: BigInt(0),
        openInterestLowerCap: BigInt(0),
        openInterestUpperCap: BigInt(0)
    };
}
exports.LiquidityTier = {
    typeUrl: "/nemo_network.perpetuals.LiquidityTier",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.initialMarginPpm !== 0) {
            writer.uint32(24).uint32(message.initialMarginPpm);
        }
        if (message.maintenanceFractionPpm !== 0) {
            writer.uint32(32).uint32(message.maintenanceFractionPpm);
        }
        if (message.basePositionNotional !== BigInt(0)) {
            writer.uint32(40).uint64(message.basePositionNotional);
        }
        if (message.impactNotional !== BigInt(0)) {
            writer.uint32(48).uint64(message.impactNotional);
        }
        if (message.openInterestLowerCap !== BigInt(0)) {
            writer.uint32(56).uint64(message.openInterestLowerCap);
        }
        if (message.openInterestUpperCap !== BigInt(0)) {
            writer.uint32(64).uint64(message.openInterestUpperCap);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityTier();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.initialMarginPpm = reader.uint32();
                    break;
                case 4:
                    message.maintenanceFractionPpm = reader.uint32();
                    break;
                case 5:
                    message.basePositionNotional = reader.uint64();
                    break;
                case 6:
                    message.impactNotional = reader.uint64();
                    break;
                case 7:
                    message.openInterestLowerCap = reader.uint64();
                    break;
                case 8:
                    message.openInterestUpperCap = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseLiquidityTier();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.initialMarginPpm = (_c = object.initialMarginPpm) !== null && _c !== void 0 ? _c : 0;
        message.maintenanceFractionPpm = (_d = object.maintenanceFractionPpm) !== null && _d !== void 0 ? _d : 0;
        message.basePositionNotional = object.basePositionNotional !== undefined && object.basePositionNotional !== null ? BigInt(object.basePositionNotional.toString()) : BigInt(0);
        message.impactNotional = object.impactNotional !== undefined && object.impactNotional !== null ? BigInt(object.impactNotional.toString()) : BigInt(0);
        message.openInterestLowerCap = object.openInterestLowerCap !== undefined && object.openInterestLowerCap !== null ? BigInt(object.openInterestLowerCap.toString()) : BigInt(0);
        message.openInterestUpperCap = object.openInterestUpperCap !== undefined && object.openInterestUpperCap !== null ? BigInt(object.openInterestUpperCap.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseLiquidityTier();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.initial_margin_ppm !== undefined && object.initial_margin_ppm !== null) {
            message.initialMarginPpm = object.initial_margin_ppm;
        }
        if (object.maintenance_fraction_ppm !== undefined && object.maintenance_fraction_ppm !== null) {
            message.maintenanceFractionPpm = object.maintenance_fraction_ppm;
        }
        if (object.base_position_notional !== undefined && object.base_position_notional !== null) {
            message.basePositionNotional = BigInt(object.base_position_notional);
        }
        if (object.impact_notional !== undefined && object.impact_notional !== null) {
            message.impactNotional = BigInt(object.impact_notional);
        }
        if (object.open_interest_lower_cap !== undefined && object.open_interest_lower_cap !== null) {
            message.openInterestLowerCap = BigInt(object.open_interest_lower_cap);
        }
        if (object.open_interest_upper_cap !== undefined && object.open_interest_upper_cap !== null) {
            message.openInterestUpperCap = BigInt(object.open_interest_upper_cap);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c, _d;
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.name = message.name === "" ? undefined : message.name;
        obj.initial_margin_ppm = message.initialMarginPpm === 0 ? undefined : message.initialMarginPpm;
        obj.maintenance_fraction_ppm = message.maintenanceFractionPpm === 0 ? undefined : message.maintenanceFractionPpm;
        obj.base_position_notional = message.basePositionNotional !== BigInt(0) ? ((_a = message.basePositionNotional) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.impact_notional = message.impactNotional !== BigInt(0) ? ((_b = message.impactNotional) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.open_interest_lower_cap = message.openInterestLowerCap !== BigInt(0) ? ((_c = message.openInterestLowerCap) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        obj.open_interest_upper_cap = message.openInterestUpperCap !== BigInt(0) ? ((_d = message.openInterestUpperCap) === null || _d === void 0 ? void 0 : _d.toString).call(_d) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LiquidityTier.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LiquidityTier.decode(message.value);
    },
    toProto: function (message) {
        return exports.LiquidityTier.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.LiquidityTier",
            value: exports.LiquidityTier.encode(message).finish()
        };
    }
};
