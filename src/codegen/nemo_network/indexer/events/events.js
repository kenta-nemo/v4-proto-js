"use strict";
exports.__esModule = true;
exports.RegisterAffiliateEventV1 = exports.LiquidityTierUpsertEventV2 = exports.OpenInterestUpdate = exports.OpenInterestUpdateEventV1 = exports.AddressTradingReward = exports.TradingRewardsEventV1 = exports.UpdatePerpetualEventV1 = exports.UpdateClobPairEventV1 = exports.LiquidityTierUpsertEventV1 = exports.PerpetualMarketCreateEventV2 = exports.PerpetualMarketCreateEventV1 = exports.AssetCreateEventV1 = exports.StatefulOrderEventV1_LongTermOrderReplacementV1 = exports.StatefulOrderEventV1_LongTermOrderPlacementV1 = exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1 = exports.StatefulOrderEventV1_ConditionalOrderPlacementV1 = exports.StatefulOrderEventV1_StatefulOrderRemovalV1 = exports.StatefulOrderEventV1_StatefulOrderPlacementV1 = exports.StatefulOrderEventV1 = exports.SubaccountUpdateEventV1 = exports.LiquidationOrderV1 = exports.DeleveragingEventV1 = exports.OrderFillEventV1 = exports.TransferEventV1 = exports.SourceOfFunds = exports.MarketModifyEventV1 = exports.MarketCreateEventV1 = exports.MarketBaseEventV1 = exports.MarketPriceUpdateEventV1 = exports.MarketEventV1 = exports.FundingEventV1 = exports.FundingUpdateV1 = exports.fundingEventV1_TypeToJSON = exports.fundingEventV1_TypeFromJSON = exports.FundingEventV1_TypeAmino = exports.FundingEventV1_TypeSDKType = exports.FundingEventV1_Type = void 0;
var subaccount_1 = require("../protocol/v1/subaccount");
var clob_1 = require("../protocol/v1/clob");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
/** Type is the type for funding values. */
var FundingEventV1_Type;
(function (FundingEventV1_Type) {
    /** TYPE_UNSPECIFIED - Unspecified type. */
    FundingEventV1_Type[FundingEventV1_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /**
     * TYPE_PREMIUM_SAMPLE - Premium sample is the combined value from all premium votes during a
     * `funding-sample` epoch.
     */
    FundingEventV1_Type[FundingEventV1_Type["TYPE_PREMIUM_SAMPLE"] = 1] = "TYPE_PREMIUM_SAMPLE";
    /**
     * TYPE_FUNDING_RATE_AND_INDEX - Funding rate is the final funding rate combining all premium samples
     * during a `funding-tick` epoch.
     */
    FundingEventV1_Type[FundingEventV1_Type["TYPE_FUNDING_RATE_AND_INDEX"] = 2] = "TYPE_FUNDING_RATE_AND_INDEX";
    /**
     * TYPE_PREMIUM_VOTE - TODO(DEC-1513): Investigate whether premium vote values need to be
     * sent to indexer.
     */
    FundingEventV1_Type[FundingEventV1_Type["TYPE_PREMIUM_VOTE"] = 3] = "TYPE_PREMIUM_VOTE";
    FundingEventV1_Type[FundingEventV1_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FundingEventV1_Type = exports.FundingEventV1_Type || (exports.FundingEventV1_Type = {}));
exports.FundingEventV1_TypeSDKType = FundingEventV1_Type;
exports.FundingEventV1_TypeAmino = FundingEventV1_Type;
function fundingEventV1_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return FundingEventV1_Type.TYPE_UNSPECIFIED;
        case 1:
        case "TYPE_PREMIUM_SAMPLE":
            return FundingEventV1_Type.TYPE_PREMIUM_SAMPLE;
        case 2:
        case "TYPE_FUNDING_RATE_AND_INDEX":
            return FundingEventV1_Type.TYPE_FUNDING_RATE_AND_INDEX;
        case 3:
        case "TYPE_PREMIUM_VOTE":
            return FundingEventV1_Type.TYPE_PREMIUM_VOTE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FundingEventV1_Type.UNRECOGNIZED;
    }
}
exports.fundingEventV1_TypeFromJSON = fundingEventV1_TypeFromJSON;
function fundingEventV1_TypeToJSON(object) {
    switch (object) {
        case FundingEventV1_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case FundingEventV1_Type.TYPE_PREMIUM_SAMPLE:
            return "TYPE_PREMIUM_SAMPLE";
        case FundingEventV1_Type.TYPE_FUNDING_RATE_AND_INDEX:
            return "TYPE_FUNDING_RATE_AND_INDEX";
        case FundingEventV1_Type.TYPE_PREMIUM_VOTE:
            return "TYPE_PREMIUM_VOTE";
        case FundingEventV1_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fundingEventV1_TypeToJSON = fundingEventV1_TypeToJSON;
function createBaseFundingUpdateV1() {
    return {
        perpetualId: 0,
        fundingValuePpm: 0,
        fundingIndex: new Uint8Array()
    };
}
exports.FundingUpdateV1 = {
    typeUrl: "/nemo_network.indexer.events.FundingUpdateV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        if (message.fundingValuePpm !== 0) {
            writer.uint32(16).int32(message.fundingValuePpm);
        }
        if (message.fundingIndex.length !== 0) {
            writer.uint32(26).bytes(message.fundingIndex);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFundingUpdateV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    message.fundingValuePpm = reader.int32();
                    break;
                case 3:
                    message.fundingIndex = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseFundingUpdateV1();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.fundingValuePpm = (_b = object.fundingValuePpm) !== null && _b !== void 0 ? _b : 0;
        message.fundingIndex = (_c = object.fundingIndex) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseFundingUpdateV1();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        if (object.funding_value_ppm !== undefined && object.funding_value_ppm !== null) {
            message.fundingValuePpm = object.funding_value_ppm;
        }
        if (object.funding_index !== undefined && object.funding_index !== null) {
            message.fundingIndex = (0, helpers_1.bytesFromBase64)(object.funding_index);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        obj.funding_value_ppm = message.fundingValuePpm === 0 ? undefined : message.fundingValuePpm;
        obj.funding_index = message.fundingIndex ? (0, helpers_1.base64FromBytes)(message.fundingIndex) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FundingUpdateV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.FundingUpdateV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.FundingUpdateV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.FundingUpdateV1",
            value: exports.FundingUpdateV1.encode(message).finish()
        };
    }
};
function createBaseFundingEventV1() {
    return {
        updates: [],
        type: 0
    };
}
exports.FundingEventV1 = {
    typeUrl: "/nemo_network.indexer.events.FundingEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.updates; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.FundingUpdateV1.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFundingEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updates.push(exports.FundingUpdateV1.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.type = reader.int32();
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
        var message = createBaseFundingEventV1();
        message.updates = ((_a = object.updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FundingUpdateV1.fromPartial(e); })) || [];
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseFundingEventV1();
        message.updates = ((_a = object.updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FundingUpdateV1.fromAmino(e); })) || [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.updates) {
            obj.updates = message.updates.map(function (e) { return e ? exports.FundingUpdateV1.toAmino(e) : undefined; });
        }
        else {
            obj.updates = message.updates;
        }
        obj.type = message.type === 0 ? undefined : message.type;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FundingEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.FundingEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.FundingEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.FundingEventV1",
            value: exports.FundingEventV1.encode(message).finish()
        };
    }
};
function createBaseMarketEventV1() {
    return {
        marketId: 0,
        priceUpdate: undefined,
        marketCreate: undefined,
        marketModify: undefined
    };
}
exports.MarketEventV1 = {
    typeUrl: "/nemo_network.indexer.events.MarketEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.marketId !== 0) {
            writer.uint32(8).uint32(message.marketId);
        }
        if (message.priceUpdate !== undefined) {
            exports.MarketPriceUpdateEventV1.encode(message.priceUpdate, writer.uint32(18).fork()).ldelim();
        }
        if (message.marketCreate !== undefined) {
            exports.MarketCreateEventV1.encode(message.marketCreate, writer.uint32(26).fork()).ldelim();
        }
        if (message.marketModify !== undefined) {
            exports.MarketModifyEventV1.encode(message.marketModify, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint32();
                    break;
                case 2:
                    message.priceUpdate = exports.MarketPriceUpdateEventV1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.marketCreate = exports.MarketCreateEventV1.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.marketModify = exports.MarketModifyEventV1.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMarketEventV1();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : 0;
        message.priceUpdate = object.priceUpdate !== undefined && object.priceUpdate !== null ? exports.MarketPriceUpdateEventV1.fromPartial(object.priceUpdate) : undefined;
        message.marketCreate = object.marketCreate !== undefined && object.marketCreate !== null ? exports.MarketCreateEventV1.fromPartial(object.marketCreate) : undefined;
        message.marketModify = object.marketModify !== undefined && object.marketModify !== null ? exports.MarketModifyEventV1.fromPartial(object.marketModify) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketEventV1();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.price_update !== undefined && object.price_update !== null) {
            message.priceUpdate = exports.MarketPriceUpdateEventV1.fromAmino(object.price_update);
        }
        if (object.market_create !== undefined && object.market_create !== null) {
            message.marketCreate = exports.MarketCreateEventV1.fromAmino(object.market_create);
        }
        if (object.market_modify !== undefined && object.market_modify !== null) {
            message.marketModify = exports.MarketModifyEventV1.fromAmino(object.market_modify);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.price_update = message.priceUpdate ? exports.MarketPriceUpdateEventV1.toAmino(message.priceUpdate) : undefined;
        obj.market_create = message.marketCreate ? exports.MarketCreateEventV1.toAmino(message.marketCreate) : undefined;
        obj.market_modify = message.marketModify ? exports.MarketModifyEventV1.toAmino(message.marketModify) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.MarketEventV1",
            value: exports.MarketEventV1.encode(message).finish()
        };
    }
};
function createBaseMarketPriceUpdateEventV1() {
    return {
        priceWithExponent: BigInt(0)
    };
}
exports.MarketPriceUpdateEventV1 = {
    typeUrl: "/nemo_network.indexer.events.MarketPriceUpdateEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.priceWithExponent !== BigInt(0)) {
            writer.uint32(8).uint64(message.priceWithExponent);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketPriceUpdateEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceWithExponent = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMarketPriceUpdateEventV1();
        message.priceWithExponent = object.priceWithExponent !== undefined && object.priceWithExponent !== null ? BigInt(object.priceWithExponent.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketPriceUpdateEventV1();
        if (object.price_with_exponent !== undefined && object.price_with_exponent !== null) {
            message.priceWithExponent = BigInt(object.price_with_exponent);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.price_with_exponent = message.priceWithExponent !== BigInt(0) ? ((_a = message.priceWithExponent) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketPriceUpdateEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketPriceUpdateEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketPriceUpdateEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.MarketPriceUpdateEventV1",
            value: exports.MarketPriceUpdateEventV1.encode(message).finish()
        };
    }
};
function createBaseMarketBaseEventV1() {
    return {
        pair: "",
        minPriceChangePpm: 0
    };
}
exports.MarketBaseEventV1 = {
    typeUrl: "/nemo_network.indexer.events.MarketBaseEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pair !== "") {
            writer.uint32(10).string(message.pair);
        }
        if (message.minPriceChangePpm !== 0) {
            writer.uint32(16).uint32(message.minPriceChangePpm);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketBaseEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pair = reader.string();
                    break;
                case 2:
                    message.minPriceChangePpm = reader.uint32();
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
        var message = createBaseMarketBaseEventV1();
        message.pair = (_a = object.pair) !== null && _a !== void 0 ? _a : "";
        message.minPriceChangePpm = (_b = object.minPriceChangePpm) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketBaseEventV1();
        if (object.pair !== undefined && object.pair !== null) {
            message.pair = object.pair;
        }
        if (object.min_price_change_ppm !== undefined && object.min_price_change_ppm !== null) {
            message.minPriceChangePpm = object.min_price_change_ppm;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pair = message.pair === "" ? undefined : message.pair;
        obj.min_price_change_ppm = message.minPriceChangePpm === 0 ? undefined : message.minPriceChangePpm;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketBaseEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketBaseEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketBaseEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.MarketBaseEventV1",
            value: exports.MarketBaseEventV1.encode(message).finish()
        };
    }
};
function createBaseMarketCreateEventV1() {
    return {
        base: undefined,
        exponent: 0
    };
}
exports.MarketCreateEventV1 = {
    typeUrl: "/nemo_network.indexer.events.MarketCreateEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.base !== undefined) {
            exports.MarketBaseEventV1.encode(message.base, writer.uint32(10).fork()).ldelim();
        }
        if (message.exponent !== 0) {
            writer.uint32(16).sint32(message.exponent);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketCreateEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = exports.MarketBaseEventV1.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.exponent = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMarketCreateEventV1();
        message.base = object.base !== undefined && object.base !== null ? exports.MarketBaseEventV1.fromPartial(object.base) : undefined;
        message.exponent = (_a = object.exponent) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketCreateEventV1();
        if (object.base !== undefined && object.base !== null) {
            message.base = exports.MarketBaseEventV1.fromAmino(object.base);
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.base = message.base ? exports.MarketBaseEventV1.toAmino(message.base) : undefined;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketCreateEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketCreateEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketCreateEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.MarketCreateEventV1",
            value: exports.MarketCreateEventV1.encode(message).finish()
        };
    }
};
function createBaseMarketModifyEventV1() {
    return {
        base: undefined
    };
}
exports.MarketModifyEventV1 = {
    typeUrl: "/nemo_network.indexer.events.MarketModifyEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.base !== undefined) {
            exports.MarketBaseEventV1.encode(message.base, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketModifyEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = exports.MarketBaseEventV1.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMarketModifyEventV1();
        message.base = object.base !== undefined && object.base !== null ? exports.MarketBaseEventV1.fromPartial(object.base) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketModifyEventV1();
        if (object.base !== undefined && object.base !== null) {
            message.base = exports.MarketBaseEventV1.fromAmino(object.base);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.base = message.base ? exports.MarketBaseEventV1.toAmino(message.base) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketModifyEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketModifyEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketModifyEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.MarketModifyEventV1",
            value: exports.MarketModifyEventV1.encode(message).finish()
        };
    }
};
function createBaseSourceOfFunds() {
    return {
        subaccountId: undefined,
        address: undefined
    };
}
exports.SourceOfFunds = {
    typeUrl: "/nemo_network.indexer.events.SourceOfFunds",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subaccountId !== undefined) {
            subaccount_1.IndexerSubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.address !== undefined) {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSourceOfFunds();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = subaccount_1.IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSourceOfFunds();
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.IndexerSubaccountId.fromPartial(object.subaccountId) : undefined;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSourceOfFunds();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.IndexerSubaccountId.fromAmino(object.subaccount_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subaccount_id = message.subaccountId ? subaccount_1.IndexerSubaccountId.toAmino(message.subaccountId) : undefined;
        obj.address = message.address === null ? undefined : message.address;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SourceOfFunds.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SourceOfFunds.decode(message.value);
    },
    toProto: function (message) {
        return exports.SourceOfFunds.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.SourceOfFunds",
            value: exports.SourceOfFunds.encode(message).finish()
        };
    }
};
function createBaseTransferEventV1() {
    return {
        senderSubaccountId: undefined,
        recipientSubaccountId: undefined,
        assetId: 0,
        amount: BigInt(0),
        sender: undefined,
        recipient: undefined
    };
}
exports.TransferEventV1 = {
    typeUrl: "/nemo_network.indexer.events.TransferEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.senderSubaccountId !== undefined) {
            subaccount_1.IndexerSubaccountId.encode(message.senderSubaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.recipientSubaccountId !== undefined) {
            subaccount_1.IndexerSubaccountId.encode(message.recipientSubaccountId, writer.uint32(18).fork()).ldelim();
        }
        if (message.assetId !== 0) {
            writer.uint32(24).uint32(message.assetId);
        }
        if (message.amount !== BigInt(0)) {
            writer.uint32(32).uint64(message.amount);
        }
        if (message.sender !== undefined) {
            exports.SourceOfFunds.encode(message.sender, writer.uint32(42).fork()).ldelim();
        }
        if (message.recipient !== undefined) {
            exports.SourceOfFunds.encode(message.recipient, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransferEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderSubaccountId = subaccount_1.IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.recipientSubaccountId = subaccount_1.IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.assetId = reader.uint32();
                    break;
                case 4:
                    message.amount = reader.uint64();
                    break;
                case 5:
                    message.sender = exports.SourceOfFunds.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.recipient = exports.SourceOfFunds.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTransferEventV1();
        message.senderSubaccountId = object.senderSubaccountId !== undefined && object.senderSubaccountId !== null ? subaccount_1.IndexerSubaccountId.fromPartial(object.senderSubaccountId) : undefined;
        message.recipientSubaccountId = object.recipientSubaccountId !== undefined && object.recipientSubaccountId !== null ? subaccount_1.IndexerSubaccountId.fromPartial(object.recipientSubaccountId) : undefined;
        message.assetId = (_a = object.assetId) !== null && _a !== void 0 ? _a : 0;
        message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
        message.sender = object.sender !== undefined && object.sender !== null ? exports.SourceOfFunds.fromPartial(object.sender) : undefined;
        message.recipient = object.recipient !== undefined && object.recipient !== null ? exports.SourceOfFunds.fromPartial(object.recipient) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseTransferEventV1();
        if (object.sender_subaccount_id !== undefined && object.sender_subaccount_id !== null) {
            message.senderSubaccountId = subaccount_1.IndexerSubaccountId.fromAmino(object.sender_subaccount_id);
        }
        if (object.recipient_subaccount_id !== undefined && object.recipient_subaccount_id !== null) {
            message.recipientSubaccountId = subaccount_1.IndexerSubaccountId.fromAmino(object.recipient_subaccount_id);
        }
        if (object.asset_id !== undefined && object.asset_id !== null) {
            message.assetId = object.asset_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = BigInt(object.amount);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = exports.SourceOfFunds.fromAmino(object.sender);
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = exports.SourceOfFunds.fromAmino(object.recipient);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.sender_subaccount_id = message.senderSubaccountId ? subaccount_1.IndexerSubaccountId.toAmino(message.senderSubaccountId) : undefined;
        obj.recipient_subaccount_id = message.recipientSubaccountId ? subaccount_1.IndexerSubaccountId.toAmino(message.recipientSubaccountId) : undefined;
        obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
        obj.amount = message.amount !== BigInt(0) ? ((_a = message.amount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.sender = message.sender ? exports.SourceOfFunds.toAmino(message.sender) : undefined;
        obj.recipient = message.recipient ? exports.SourceOfFunds.toAmino(message.recipient) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TransferEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.TransferEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.TransferEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.TransferEventV1",
            value: exports.TransferEventV1.encode(message).finish()
        };
    }
};
function createBaseOrderFillEventV1() {
    return {
        makerOrder: clob_1.IndexerOrder.fromPartial({}),
        order: undefined,
        liquidationOrder: undefined,
        fillAmount: BigInt(0),
        makerFee: BigInt(0),
        takerFee: BigInt(0),
        totalFilledMaker: BigInt(0),
        totalFilledTaker: BigInt(0),
        affiliateRevShare: BigInt(0)
    };
}
exports.OrderFillEventV1 = {
    typeUrl: "/nemo_network.indexer.events.OrderFillEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.makerOrder !== undefined) {
            clob_1.IndexerOrder.encode(message.makerOrder, writer.uint32(10).fork()).ldelim();
        }
        if (message.order !== undefined) {
            clob_1.IndexerOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        if (message.liquidationOrder !== undefined) {
            exports.LiquidationOrderV1.encode(message.liquidationOrder, writer.uint32(34).fork()).ldelim();
        }
        if (message.fillAmount !== BigInt(0)) {
            writer.uint32(24).uint64(message.fillAmount);
        }
        if (message.makerFee !== BigInt(0)) {
            writer.uint32(40).sint64(message.makerFee);
        }
        if (message.takerFee !== BigInt(0)) {
            writer.uint32(48).sint64(message.takerFee);
        }
        if (message.totalFilledMaker !== BigInt(0)) {
            writer.uint32(56).uint64(message.totalFilledMaker);
        }
        if (message.totalFilledTaker !== BigInt(0)) {
            writer.uint32(64).uint64(message.totalFilledTaker);
        }
        if (message.affiliateRevShare !== BigInt(0)) {
            writer.uint32(72).uint64(message.affiliateRevShare);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderFillEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.makerOrder = clob_1.IndexerOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.order = clob_1.IndexerOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.liquidationOrder = exports.LiquidationOrderV1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.fillAmount = reader.uint64();
                    break;
                case 5:
                    message.makerFee = reader.sint64();
                    break;
                case 6:
                    message.takerFee = reader.sint64();
                    break;
                case 7:
                    message.totalFilledMaker = reader.uint64();
                    break;
                case 8:
                    message.totalFilledTaker = reader.uint64();
                    break;
                case 9:
                    message.affiliateRevShare = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseOrderFillEventV1();
        message.makerOrder = object.makerOrder !== undefined && object.makerOrder !== null ? clob_1.IndexerOrder.fromPartial(object.makerOrder) : undefined;
        message.order = object.order !== undefined && object.order !== null ? clob_1.IndexerOrder.fromPartial(object.order) : undefined;
        message.liquidationOrder = object.liquidationOrder !== undefined && object.liquidationOrder !== null ? exports.LiquidationOrderV1.fromPartial(object.liquidationOrder) : undefined;
        message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
        message.makerFee = object.makerFee !== undefined && object.makerFee !== null ? BigInt(object.makerFee.toString()) : BigInt(0);
        message.takerFee = object.takerFee !== undefined && object.takerFee !== null ? BigInt(object.takerFee.toString()) : BigInt(0);
        message.totalFilledMaker = object.totalFilledMaker !== undefined && object.totalFilledMaker !== null ? BigInt(object.totalFilledMaker.toString()) : BigInt(0);
        message.totalFilledTaker = object.totalFilledTaker !== undefined && object.totalFilledTaker !== null ? BigInt(object.totalFilledTaker.toString()) : BigInt(0);
        message.affiliateRevShare = object.affiliateRevShare !== undefined && object.affiliateRevShare !== null ? BigInt(object.affiliateRevShare.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOrderFillEventV1();
        if (object.maker_order !== undefined && object.maker_order !== null) {
            message.makerOrder = clob_1.IndexerOrder.fromAmino(object.maker_order);
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = clob_1.IndexerOrder.fromAmino(object.order);
        }
        if (object.liquidation_order !== undefined && object.liquidation_order !== null) {
            message.liquidationOrder = exports.LiquidationOrderV1.fromAmino(object.liquidation_order);
        }
        if (object.fill_amount !== undefined && object.fill_amount !== null) {
            message.fillAmount = BigInt(object.fill_amount);
        }
        if (object.maker_fee !== undefined && object.maker_fee !== null) {
            message.makerFee = BigInt(object.maker_fee);
        }
        if (object.taker_fee !== undefined && object.taker_fee !== null) {
            message.takerFee = BigInt(object.taker_fee);
        }
        if (object.total_filled_maker !== undefined && object.total_filled_maker !== null) {
            message.totalFilledMaker = BigInt(object.total_filled_maker);
        }
        if (object.total_filled_taker !== undefined && object.total_filled_taker !== null) {
            message.totalFilledTaker = BigInt(object.total_filled_taker);
        }
        if (object.affiliate_rev_share !== undefined && object.affiliate_rev_share !== null) {
            message.affiliateRevShare = BigInt(object.affiliate_rev_share);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c, _d, _e, _f;
        var obj = {};
        obj.maker_order = message.makerOrder ? clob_1.IndexerOrder.toAmino(message.makerOrder) : undefined;
        obj.order = message.order ? clob_1.IndexerOrder.toAmino(message.order) : undefined;
        obj.liquidation_order = message.liquidationOrder ? exports.LiquidationOrderV1.toAmino(message.liquidationOrder) : undefined;
        obj.fill_amount = message.fillAmount !== BigInt(0) ? ((_a = message.fillAmount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.maker_fee = message.makerFee !== BigInt(0) ? ((_b = message.makerFee) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.taker_fee = message.takerFee !== BigInt(0) ? ((_c = message.takerFee) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        obj.total_filled_maker = message.totalFilledMaker !== BigInt(0) ? ((_d = message.totalFilledMaker) === null || _d === void 0 ? void 0 : _d.toString).call(_d) : undefined;
        obj.total_filled_taker = message.totalFilledTaker !== BigInt(0) ? ((_e = message.totalFilledTaker) === null || _e === void 0 ? void 0 : _e.toString).call(_e) : undefined;
        obj.affiliate_rev_share = message.affiliateRevShare !== BigInt(0) ? ((_f = message.affiliateRevShare) === null || _f === void 0 ? void 0 : _f.toString).call(_f) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrderFillEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrderFillEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrderFillEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.OrderFillEventV1",
            value: exports.OrderFillEventV1.encode(message).finish()
        };
    }
};
function createBaseDeleveragingEventV1() {
    return {
        liquidated: subaccount_1.IndexerSubaccountId.fromPartial({}),
        offsetting: subaccount_1.IndexerSubaccountId.fromPartial({}),
        perpetualId: 0,
        fillAmount: BigInt(0),
        totalQuoteQuantums: BigInt(0),
        isBuy: false,
        isFinalSettlement: false
    };
}
exports.DeleveragingEventV1 = {
    typeUrl: "/nemo_network.indexer.events.DeleveragingEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.liquidated !== undefined) {
            subaccount_1.IndexerSubaccountId.encode(message.liquidated, writer.uint32(10).fork()).ldelim();
        }
        if (message.offsetting !== undefined) {
            subaccount_1.IndexerSubaccountId.encode(message.offsetting, writer.uint32(18).fork()).ldelim();
        }
        if (message.perpetualId !== 0) {
            writer.uint32(24).uint32(message.perpetualId);
        }
        if (message.fillAmount !== BigInt(0)) {
            writer.uint32(32).uint64(message.fillAmount);
        }
        if (message.totalQuoteQuantums !== BigInt(0)) {
            writer.uint32(40).uint64(message.totalQuoteQuantums);
        }
        if (message.isBuy === true) {
            writer.uint32(48).bool(message.isBuy);
        }
        if (message.isFinalSettlement === true) {
            writer.uint32(56).bool(message.isFinalSettlement);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleveragingEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidated = subaccount_1.IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.offsetting = subaccount_1.IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.perpetualId = reader.uint32();
                    break;
                case 4:
                    message.fillAmount = reader.uint64();
                    break;
                case 5:
                    message.totalQuoteQuantums = reader.uint64();
                    break;
                case 6:
                    message.isBuy = reader.bool();
                    break;
                case 7:
                    message.isFinalSettlement = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDeleveragingEventV1();
        message.liquidated = object.liquidated !== undefined && object.liquidated !== null ? subaccount_1.IndexerSubaccountId.fromPartial(object.liquidated) : undefined;
        message.offsetting = object.offsetting !== undefined && object.offsetting !== null ? subaccount_1.IndexerSubaccountId.fromPartial(object.offsetting) : undefined;
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
        message.totalQuoteQuantums = object.totalQuoteQuantums !== undefined && object.totalQuoteQuantums !== null ? BigInt(object.totalQuoteQuantums.toString()) : BigInt(0);
        message.isBuy = (_b = object.isBuy) !== null && _b !== void 0 ? _b : false;
        message.isFinalSettlement = (_c = object.isFinalSettlement) !== null && _c !== void 0 ? _c : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDeleveragingEventV1();
        if (object.liquidated !== undefined && object.liquidated !== null) {
            message.liquidated = subaccount_1.IndexerSubaccountId.fromAmino(object.liquidated);
        }
        if (object.offsetting !== undefined && object.offsetting !== null) {
            message.offsetting = subaccount_1.IndexerSubaccountId.fromAmino(object.offsetting);
        }
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        if (object.fill_amount !== undefined && object.fill_amount !== null) {
            message.fillAmount = BigInt(object.fill_amount);
        }
        if (object.total_quote_quantums !== undefined && object.total_quote_quantums !== null) {
            message.totalQuoteQuantums = BigInt(object.total_quote_quantums);
        }
        if (object.is_buy !== undefined && object.is_buy !== null) {
            message.isBuy = object.is_buy;
        }
        if (object.is_final_settlement !== undefined && object.is_final_settlement !== null) {
            message.isFinalSettlement = object.is_final_settlement;
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.liquidated = message.liquidated ? subaccount_1.IndexerSubaccountId.toAmino(message.liquidated) : undefined;
        obj.offsetting = message.offsetting ? subaccount_1.IndexerSubaccountId.toAmino(message.offsetting) : undefined;
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        obj.fill_amount = message.fillAmount !== BigInt(0) ? ((_a = message.fillAmount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.total_quote_quantums = message.totalQuoteQuantums !== BigInt(0) ? ((_b = message.totalQuoteQuantums) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
        obj.is_final_settlement = message.isFinalSettlement === false ? undefined : message.isFinalSettlement;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DeleveragingEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DeleveragingEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.DeleveragingEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.DeleveragingEventV1",
            value: exports.DeleveragingEventV1.encode(message).finish()
        };
    }
};
function createBaseLiquidationOrderV1() {
    return {
        liquidated: subaccount_1.IndexerSubaccountId.fromPartial({}),
        clobPairId: 0,
        perpetualId: 0,
        totalSize: BigInt(0),
        isBuy: false,
        subticks: BigInt(0)
    };
}
exports.LiquidationOrderV1 = {
    typeUrl: "/nemo_network.indexer.events.LiquidationOrderV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.liquidated !== undefined) {
            subaccount_1.IndexerSubaccountId.encode(message.liquidated, writer.uint32(10).fork()).ldelim();
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.perpetualId !== 0) {
            writer.uint32(24).uint32(message.perpetualId);
        }
        if (message.totalSize !== BigInt(0)) {
            writer.uint32(32).uint64(message.totalSize);
        }
        if (message.isBuy === true) {
            writer.uint32(40).bool(message.isBuy);
        }
        if (message.subticks !== BigInt(0)) {
            writer.uint32(48).uint64(message.subticks);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidationOrderV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidated = subaccount_1.IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.perpetualId = reader.uint32();
                    break;
                case 4:
                    message.totalSize = reader.uint64();
                    break;
                case 5:
                    message.isBuy = reader.bool();
                    break;
                case 6:
                    message.subticks = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseLiquidationOrderV1();
        message.liquidated = object.liquidated !== undefined && object.liquidated !== null ? subaccount_1.IndexerSubaccountId.fromPartial(object.liquidated) : undefined;
        message.clobPairId = (_a = object.clobPairId) !== null && _a !== void 0 ? _a : 0;
        message.perpetualId = (_b = object.perpetualId) !== null && _b !== void 0 ? _b : 0;
        message.totalSize = object.totalSize !== undefined && object.totalSize !== null ? BigInt(object.totalSize.toString()) : BigInt(0);
        message.isBuy = (_c = object.isBuy) !== null && _c !== void 0 ? _c : false;
        message.subticks = object.subticks !== undefined && object.subticks !== null ? BigInt(object.subticks.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseLiquidationOrderV1();
        if (object.liquidated !== undefined && object.liquidated !== null) {
            message.liquidated = subaccount_1.IndexerSubaccountId.fromAmino(object.liquidated);
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        if (object.total_size !== undefined && object.total_size !== null) {
            message.totalSize = BigInt(object.total_size);
        }
        if (object.is_buy !== undefined && object.is_buy !== null) {
            message.isBuy = object.is_buy;
        }
        if (object.subticks !== undefined && object.subticks !== null) {
            message.subticks = BigInt(object.subticks);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.liquidated = message.liquidated ? subaccount_1.IndexerSubaccountId.toAmino(message.liquidated) : undefined;
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        obj.total_size = message.totalSize !== BigInt(0) ? ((_a = message.totalSize) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
        obj.subticks = message.subticks !== BigInt(0) ? ((_b = message.subticks) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LiquidationOrderV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LiquidationOrderV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.LiquidationOrderV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.LiquidationOrderV1",
            value: exports.LiquidationOrderV1.encode(message).finish()
        };
    }
};
function createBaseSubaccountUpdateEventV1() {
    return {
        subaccountId: undefined,
        updatedPerpetualPositions: [],
        updatedAssetPositions: []
    };
}
exports.SubaccountUpdateEventV1 = {
    typeUrl: "/nemo_network.indexer.events.SubaccountUpdateEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subaccountId !== undefined) {
            subaccount_1.IndexerSubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.updatedPerpetualPositions; _i < _a.length; _i++) {
            var v = _a[_i];
            subaccount_1.IndexerPerpetualPosition.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.updatedAssetPositions; _b < _c.length; _b++) {
            var v = _c[_b];
            subaccount_1.IndexerAssetPosition.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubaccountUpdateEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = subaccount_1.IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.updatedPerpetualPositions.push(subaccount_1.IndexerPerpetualPosition.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.updatedAssetPositions.push(subaccount_1.IndexerAssetPosition.decode(reader, reader.uint32()));
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
        var message = createBaseSubaccountUpdateEventV1();
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.IndexerSubaccountId.fromPartial(object.subaccountId) : undefined;
        message.updatedPerpetualPositions = ((_a = object.updatedPerpetualPositions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return subaccount_1.IndexerPerpetualPosition.fromPartial(e); })) || [];
        message.updatedAssetPositions = ((_b = object.updatedAssetPositions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return subaccount_1.IndexerAssetPosition.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseSubaccountUpdateEventV1();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.IndexerSubaccountId.fromAmino(object.subaccount_id);
        }
        message.updatedPerpetualPositions = ((_a = object.updated_perpetual_positions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return subaccount_1.IndexerPerpetualPosition.fromAmino(e); })) || [];
        message.updatedAssetPositions = ((_b = object.updated_asset_positions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return subaccount_1.IndexerAssetPosition.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subaccount_id = message.subaccountId ? subaccount_1.IndexerSubaccountId.toAmino(message.subaccountId) : undefined;
        if (message.updatedPerpetualPositions) {
            obj.updated_perpetual_positions = message.updatedPerpetualPositions.map(function (e) { return e ? subaccount_1.IndexerPerpetualPosition.toAmino(e) : undefined; });
        }
        else {
            obj.updated_perpetual_positions = message.updatedPerpetualPositions;
        }
        if (message.updatedAssetPositions) {
            obj.updated_asset_positions = message.updatedAssetPositions.map(function (e) { return e ? subaccount_1.IndexerAssetPosition.toAmino(e) : undefined; });
        }
        else {
            obj.updated_asset_positions = message.updatedAssetPositions;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SubaccountUpdateEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SubaccountUpdateEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.SubaccountUpdateEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.SubaccountUpdateEventV1",
            value: exports.SubaccountUpdateEventV1.encode(message).finish()
        };
    }
};
function createBaseStatefulOrderEventV1() {
    return {
        orderPlace: undefined,
        orderRemoval: undefined,
        conditionalOrderPlacement: undefined,
        conditionalOrderTriggered: undefined,
        longTermOrderPlacement: undefined,
        orderReplacement: undefined
    };
}
exports.StatefulOrderEventV1 = {
    typeUrl: "/nemo_network.indexer.events.StatefulOrderEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderPlace !== undefined) {
            exports.StatefulOrderEventV1_StatefulOrderPlacementV1.encode(message.orderPlace, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderRemoval !== undefined) {
            exports.StatefulOrderEventV1_StatefulOrderRemovalV1.encode(message.orderRemoval, writer.uint32(34).fork()).ldelim();
        }
        if (message.conditionalOrderPlacement !== undefined) {
            exports.StatefulOrderEventV1_ConditionalOrderPlacementV1.encode(message.conditionalOrderPlacement, writer.uint32(42).fork()).ldelim();
        }
        if (message.conditionalOrderTriggered !== undefined) {
            exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1.encode(message.conditionalOrderTriggered, writer.uint32(50).fork()).ldelim();
        }
        if (message.longTermOrderPlacement !== undefined) {
            exports.StatefulOrderEventV1_LongTermOrderPlacementV1.encode(message.longTermOrderPlacement, writer.uint32(58).fork()).ldelim();
        }
        if (message.orderReplacement !== undefined) {
            exports.StatefulOrderEventV1_LongTermOrderReplacementV1.encode(message.orderReplacement, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatefulOrderEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderPlace = exports.StatefulOrderEventV1_StatefulOrderPlacementV1.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.orderRemoval = exports.StatefulOrderEventV1_StatefulOrderRemovalV1.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.conditionalOrderPlacement = exports.StatefulOrderEventV1_ConditionalOrderPlacementV1.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.conditionalOrderTriggered = exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.longTermOrderPlacement = exports.StatefulOrderEventV1_LongTermOrderPlacementV1.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.orderReplacement = exports.StatefulOrderEventV1_LongTermOrderReplacementV1.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseStatefulOrderEventV1();
        message.orderPlace = object.orderPlace !== undefined && object.orderPlace !== null ? exports.StatefulOrderEventV1_StatefulOrderPlacementV1.fromPartial(object.orderPlace) : undefined;
        message.orderRemoval = object.orderRemoval !== undefined && object.orderRemoval !== null ? exports.StatefulOrderEventV1_StatefulOrderRemovalV1.fromPartial(object.orderRemoval) : undefined;
        message.conditionalOrderPlacement = object.conditionalOrderPlacement !== undefined && object.conditionalOrderPlacement !== null ? exports.StatefulOrderEventV1_ConditionalOrderPlacementV1.fromPartial(object.conditionalOrderPlacement) : undefined;
        message.conditionalOrderTriggered = object.conditionalOrderTriggered !== undefined && object.conditionalOrderTriggered !== null ? exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1.fromPartial(object.conditionalOrderTriggered) : undefined;
        message.longTermOrderPlacement = object.longTermOrderPlacement !== undefined && object.longTermOrderPlacement !== null ? exports.StatefulOrderEventV1_LongTermOrderPlacementV1.fromPartial(object.longTermOrderPlacement) : undefined;
        message.orderReplacement = object.orderReplacement !== undefined && object.orderReplacement !== null ? exports.StatefulOrderEventV1_LongTermOrderReplacementV1.fromPartial(object.orderReplacement) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStatefulOrderEventV1();
        if (object.order_place !== undefined && object.order_place !== null) {
            message.orderPlace = exports.StatefulOrderEventV1_StatefulOrderPlacementV1.fromAmino(object.order_place);
        }
        if (object.order_removal !== undefined && object.order_removal !== null) {
            message.orderRemoval = exports.StatefulOrderEventV1_StatefulOrderRemovalV1.fromAmino(object.order_removal);
        }
        if (object.conditional_order_placement !== undefined && object.conditional_order_placement !== null) {
            message.conditionalOrderPlacement = exports.StatefulOrderEventV1_ConditionalOrderPlacementV1.fromAmino(object.conditional_order_placement);
        }
        if (object.conditional_order_triggered !== undefined && object.conditional_order_triggered !== null) {
            message.conditionalOrderTriggered = exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1.fromAmino(object.conditional_order_triggered);
        }
        if (object.long_term_order_placement !== undefined && object.long_term_order_placement !== null) {
            message.longTermOrderPlacement = exports.StatefulOrderEventV1_LongTermOrderPlacementV1.fromAmino(object.long_term_order_placement);
        }
        if (object.order_replacement !== undefined && object.order_replacement !== null) {
            message.orderReplacement = exports.StatefulOrderEventV1_LongTermOrderReplacementV1.fromAmino(object.order_replacement);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order_place = message.orderPlace ? exports.StatefulOrderEventV1_StatefulOrderPlacementV1.toAmino(message.orderPlace) : undefined;
        obj.order_removal = message.orderRemoval ? exports.StatefulOrderEventV1_StatefulOrderRemovalV1.toAmino(message.orderRemoval) : undefined;
        obj.conditional_order_placement = message.conditionalOrderPlacement ? exports.StatefulOrderEventV1_ConditionalOrderPlacementV1.toAmino(message.conditionalOrderPlacement) : undefined;
        obj.conditional_order_triggered = message.conditionalOrderTriggered ? exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1.toAmino(message.conditionalOrderTriggered) : undefined;
        obj.long_term_order_placement = message.longTermOrderPlacement ? exports.StatefulOrderEventV1_LongTermOrderPlacementV1.toAmino(message.longTermOrderPlacement) : undefined;
        obj.order_replacement = message.orderReplacement ? exports.StatefulOrderEventV1_LongTermOrderReplacementV1.toAmino(message.orderReplacement) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatefulOrderEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StatefulOrderEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatefulOrderEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.StatefulOrderEventV1",
            value: exports.StatefulOrderEventV1.encode(message).finish()
        };
    }
};
function createBaseStatefulOrderEventV1_StatefulOrderPlacementV1() {
    return {
        order: undefined
    };
}
exports.StatefulOrderEventV1_StatefulOrderPlacementV1 = {
    typeUrl: "/nemo_network.indexer.events.StatefulOrderPlacementV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.order !== undefined) {
            clob_1.IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatefulOrderEventV1_StatefulOrderPlacementV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = clob_1.IndexerOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseStatefulOrderEventV1_StatefulOrderPlacementV1();
        message.order = object.order !== undefined && object.order !== null ? clob_1.IndexerOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStatefulOrderEventV1_StatefulOrderPlacementV1();
        if (object.order !== undefined && object.order !== null) {
            message.order = clob_1.IndexerOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order = message.order ? clob_1.IndexerOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatefulOrderEventV1_StatefulOrderPlacementV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StatefulOrderEventV1_StatefulOrderPlacementV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatefulOrderEventV1_StatefulOrderPlacementV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.StatefulOrderPlacementV1",
            value: exports.StatefulOrderEventV1_StatefulOrderPlacementV1.encode(message).finish()
        };
    }
};
function createBaseStatefulOrderEventV1_StatefulOrderRemovalV1() {
    return {
        removedOrderId: undefined,
        reason: 0
    };
}
exports.StatefulOrderEventV1_StatefulOrderRemovalV1 = {
    typeUrl: "/nemo_network.indexer.events.StatefulOrderRemovalV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.removedOrderId !== undefined) {
            clob_1.IndexerOrderId.encode(message.removedOrderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.reason !== 0) {
            writer.uint32(16).int32(message.reason);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatefulOrderEventV1_StatefulOrderRemovalV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.removedOrderId = clob_1.IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStatefulOrderEventV1_StatefulOrderRemovalV1();
        message.removedOrderId = object.removedOrderId !== undefined && object.removedOrderId !== null ? clob_1.IndexerOrderId.fromPartial(object.removedOrderId) : undefined;
        message.reason = (_a = object.reason) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStatefulOrderEventV1_StatefulOrderRemovalV1();
        if (object.removed_order_id !== undefined && object.removed_order_id !== null) {
            message.removedOrderId = clob_1.IndexerOrderId.fromAmino(object.removed_order_id);
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.removed_order_id = message.removedOrderId ? clob_1.IndexerOrderId.toAmino(message.removedOrderId) : undefined;
        obj.reason = message.reason === 0 ? undefined : message.reason;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatefulOrderEventV1_StatefulOrderRemovalV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StatefulOrderEventV1_StatefulOrderRemovalV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatefulOrderEventV1_StatefulOrderRemovalV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.StatefulOrderRemovalV1",
            value: exports.StatefulOrderEventV1_StatefulOrderRemovalV1.encode(message).finish()
        };
    }
};
function createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1() {
    return {
        order: undefined
    };
}
exports.StatefulOrderEventV1_ConditionalOrderPlacementV1 = {
    typeUrl: "/nemo_network.indexer.events.ConditionalOrderPlacementV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.order !== undefined) {
            clob_1.IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = clob_1.IndexerOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1();
        message.order = object.order !== undefined && object.order !== null ? clob_1.IndexerOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1();
        if (object.order !== undefined && object.order !== null) {
            message.order = clob_1.IndexerOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order = message.order ? clob_1.IndexerOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatefulOrderEventV1_ConditionalOrderPlacementV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StatefulOrderEventV1_ConditionalOrderPlacementV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatefulOrderEventV1_ConditionalOrderPlacementV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.ConditionalOrderPlacementV1",
            value: exports.StatefulOrderEventV1_ConditionalOrderPlacementV1.encode(message).finish()
        };
    }
};
function createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1() {
    return {
        triggeredOrderId: undefined
    };
}
exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1 = {
    typeUrl: "/nemo_network.indexer.events.ConditionalOrderTriggeredV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.triggeredOrderId !== undefined) {
            clob_1.IndexerOrderId.encode(message.triggeredOrderId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggeredOrderId = clob_1.IndexerOrderId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1();
        message.triggeredOrderId = object.triggeredOrderId !== undefined && object.triggeredOrderId !== null ? clob_1.IndexerOrderId.fromPartial(object.triggeredOrderId) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1();
        if (object.triggered_order_id !== undefined && object.triggered_order_id !== null) {
            message.triggeredOrderId = clob_1.IndexerOrderId.fromAmino(object.triggered_order_id);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.triggered_order_id = message.triggeredOrderId ? clob_1.IndexerOrderId.toAmino(message.triggeredOrderId) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.ConditionalOrderTriggeredV1",
            value: exports.StatefulOrderEventV1_ConditionalOrderTriggeredV1.encode(message).finish()
        };
    }
};
function createBaseStatefulOrderEventV1_LongTermOrderPlacementV1() {
    return {
        order: undefined
    };
}
exports.StatefulOrderEventV1_LongTermOrderPlacementV1 = {
    typeUrl: "/nemo_network.indexer.events.LongTermOrderPlacementV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.order !== undefined) {
            clob_1.IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatefulOrderEventV1_LongTermOrderPlacementV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = clob_1.IndexerOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseStatefulOrderEventV1_LongTermOrderPlacementV1();
        message.order = object.order !== undefined && object.order !== null ? clob_1.IndexerOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStatefulOrderEventV1_LongTermOrderPlacementV1();
        if (object.order !== undefined && object.order !== null) {
            message.order = clob_1.IndexerOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order = message.order ? clob_1.IndexerOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatefulOrderEventV1_LongTermOrderPlacementV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StatefulOrderEventV1_LongTermOrderPlacementV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatefulOrderEventV1_LongTermOrderPlacementV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.LongTermOrderPlacementV1",
            value: exports.StatefulOrderEventV1_LongTermOrderPlacementV1.encode(message).finish()
        };
    }
};
function createBaseStatefulOrderEventV1_LongTermOrderReplacementV1() {
    return {
        oldOrderId: undefined,
        order: undefined
    };
}
exports.StatefulOrderEventV1_LongTermOrderReplacementV1 = {
    typeUrl: "/nemo_network.indexer.events.LongTermOrderReplacementV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.oldOrderId !== undefined) {
            clob_1.IndexerOrderId.encode(message.oldOrderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.order !== undefined) {
            clob_1.IndexerOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatefulOrderEventV1_LongTermOrderReplacementV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oldOrderId = clob_1.IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.order = clob_1.IndexerOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseStatefulOrderEventV1_LongTermOrderReplacementV1();
        message.oldOrderId = object.oldOrderId !== undefined && object.oldOrderId !== null ? clob_1.IndexerOrderId.fromPartial(object.oldOrderId) : undefined;
        message.order = object.order !== undefined && object.order !== null ? clob_1.IndexerOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStatefulOrderEventV1_LongTermOrderReplacementV1();
        if (object.old_order_id !== undefined && object.old_order_id !== null) {
            message.oldOrderId = clob_1.IndexerOrderId.fromAmino(object.old_order_id);
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = clob_1.IndexerOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.old_order_id = message.oldOrderId ? clob_1.IndexerOrderId.toAmino(message.oldOrderId) : undefined;
        obj.order = message.order ? clob_1.IndexerOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatefulOrderEventV1_LongTermOrderReplacementV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StatefulOrderEventV1_LongTermOrderReplacementV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatefulOrderEventV1_LongTermOrderReplacementV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.LongTermOrderReplacementV1",
            value: exports.StatefulOrderEventV1_LongTermOrderReplacementV1.encode(message).finish()
        };
    }
};
function createBaseAssetCreateEventV1() {
    return {
        id: 0,
        symbol: "",
        hasMarket: false,
        marketId: 0,
        atomicResolution: 0
    };
}
exports.AssetCreateEventV1 = {
    typeUrl: "/nemo_network.indexer.events.AssetCreateEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.hasMarket === true) {
            writer.uint32(24).bool(message.hasMarket);
        }
        if (message.marketId !== 0) {
            writer.uint32(32).uint32(message.marketId);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(40).sint32(message.atomicResolution);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAssetCreateEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.hasMarket = reader.bool();
                    break;
                case 4:
                    message.marketId = reader.uint32();
                    break;
                case 5:
                    message.atomicResolution = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseAssetCreateEventV1();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.hasMarket = (_c = object.hasMarket) !== null && _c !== void 0 ? _c : false;
        message.marketId = (_d = object.marketId) !== null && _d !== void 0 ? _d : 0;
        message.atomicResolution = (_e = object.atomicResolution) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAssetCreateEventV1();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.has_market !== undefined && object.has_market !== null) {
            message.hasMarket = object.has_market;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
            message.atomicResolution = object.atomic_resolution;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.has_market = message.hasMarket === false ? undefined : message.hasMarket;
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AssetCreateEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AssetCreateEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.AssetCreateEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.AssetCreateEventV1",
            value: exports.AssetCreateEventV1.encode(message).finish()
        };
    }
};
function createBasePerpetualMarketCreateEventV1() {
    return {
        id: 0,
        clobPairId: 0,
        ticker: "",
        marketId: 0,
        status: 0,
        quantumConversionExponent: 0,
        atomicResolution: 0,
        subticksPerTick: 0,
        stepBaseQuantums: BigInt(0),
        liquidityTier: 0
    };
}
exports.PerpetualMarketCreateEventV1 = {
    typeUrl: "/nemo_network.indexer.events.PerpetualMarketCreateEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.marketId !== 0) {
            writer.uint32(32).uint32(message.marketId);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.quantumConversionExponent !== 0) {
            writer.uint32(48).sint32(message.quantumConversionExponent);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(56).sint32(message.atomicResolution);
        }
        if (message.subticksPerTick !== 0) {
            writer.uint32(64).uint32(message.subticksPerTick);
        }
        if (message.stepBaseQuantums !== BigInt(0)) {
            writer.uint32(72).uint64(message.stepBaseQuantums);
        }
        if (message.liquidityTier !== 0) {
            writer.uint32(80).uint32(message.liquidityTier);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerpetualMarketCreateEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                case 4:
                    message.marketId = reader.uint32();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.quantumConversionExponent = reader.sint32();
                    break;
                case 7:
                    message.atomicResolution = reader.sint32();
                    break;
                case 8:
                    message.subticksPerTick = reader.uint32();
                    break;
                case 9:
                    message.stepBaseQuantums = reader.uint64();
                    break;
                case 10:
                    message.liquidityTier = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBasePerpetualMarketCreateEventV1();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.clobPairId = (_b = object.clobPairId) !== null && _b !== void 0 ? _b : 0;
        message.ticker = (_c = object.ticker) !== null && _c !== void 0 ? _c : "";
        message.marketId = (_d = object.marketId) !== null && _d !== void 0 ? _d : 0;
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.quantumConversionExponent = (_f = object.quantumConversionExponent) !== null && _f !== void 0 ? _f : 0;
        message.atomicResolution = (_g = object.atomicResolution) !== null && _g !== void 0 ? _g : 0;
        message.subticksPerTick = (_h = object.subticksPerTick) !== null && _h !== void 0 ? _h : 0;
        message.stepBaseQuantums = object.stepBaseQuantums !== undefined && object.stepBaseQuantums !== null ? BigInt(object.stepBaseQuantums.toString()) : BigInt(0);
        message.liquidityTier = (_j = object.liquidityTier) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePerpetualMarketCreateEventV1();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.quantum_conversion_exponent !== undefined && object.quantum_conversion_exponent !== null) {
            message.quantumConversionExponent = object.quantum_conversion_exponent;
        }
        if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
            message.atomicResolution = object.atomic_resolution;
        }
        if (object.subticks_per_tick !== undefined && object.subticks_per_tick !== null) {
            message.subticksPerTick = object.subticks_per_tick;
        }
        if (object.step_base_quantums !== undefined && object.step_base_quantums !== null) {
            message.stepBaseQuantums = BigInt(object.step_base_quantums);
        }
        if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
            message.liquidityTier = object.liquidity_tier;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.quantum_conversion_exponent = message.quantumConversionExponent === 0 ? undefined : message.quantumConversionExponent;
        obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
        obj.subticks_per_tick = message.subticksPerTick === 0 ? undefined : message.subticksPerTick;
        obj.step_base_quantums = message.stepBaseQuantums !== BigInt(0) ? ((_a = message.stepBaseQuantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PerpetualMarketCreateEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PerpetualMarketCreateEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.PerpetualMarketCreateEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.PerpetualMarketCreateEventV1",
            value: exports.PerpetualMarketCreateEventV1.encode(message).finish()
        };
    }
};
function createBasePerpetualMarketCreateEventV2() {
    return {
        id: 0,
        clobPairId: 0,
        ticker: "",
        marketId: 0,
        status: 0,
        quantumConversionExponent: 0,
        atomicResolution: 0,
        subticksPerTick: 0,
        stepBaseQuantums: BigInt(0),
        liquidityTier: 0,
        marketType: 0
    };
}
exports.PerpetualMarketCreateEventV2 = {
    typeUrl: "/nemo_network.indexer.events.PerpetualMarketCreateEventV2",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.marketId !== 0) {
            writer.uint32(32).uint32(message.marketId);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.quantumConversionExponent !== 0) {
            writer.uint32(48).sint32(message.quantumConversionExponent);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(56).sint32(message.atomicResolution);
        }
        if (message.subticksPerTick !== 0) {
            writer.uint32(64).uint32(message.subticksPerTick);
        }
        if (message.stepBaseQuantums !== BigInt(0)) {
            writer.uint32(72).uint64(message.stepBaseQuantums);
        }
        if (message.liquidityTier !== 0) {
            writer.uint32(80).uint32(message.liquidityTier);
        }
        if (message.marketType !== 0) {
            writer.uint32(88).int32(message.marketType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerpetualMarketCreateEventV2();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                case 4:
                    message.marketId = reader.uint32();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.quantumConversionExponent = reader.sint32();
                    break;
                case 7:
                    message.atomicResolution = reader.sint32();
                    break;
                case 8:
                    message.subticksPerTick = reader.uint32();
                    break;
                case 9:
                    message.stepBaseQuantums = reader.uint64();
                    break;
                case 10:
                    message.liquidityTier = reader.uint32();
                    break;
                case 11:
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBasePerpetualMarketCreateEventV2();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.clobPairId = (_b = object.clobPairId) !== null && _b !== void 0 ? _b : 0;
        message.ticker = (_c = object.ticker) !== null && _c !== void 0 ? _c : "";
        message.marketId = (_d = object.marketId) !== null && _d !== void 0 ? _d : 0;
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.quantumConversionExponent = (_f = object.quantumConversionExponent) !== null && _f !== void 0 ? _f : 0;
        message.atomicResolution = (_g = object.atomicResolution) !== null && _g !== void 0 ? _g : 0;
        message.subticksPerTick = (_h = object.subticksPerTick) !== null && _h !== void 0 ? _h : 0;
        message.stepBaseQuantums = object.stepBaseQuantums !== undefined && object.stepBaseQuantums !== null ? BigInt(object.stepBaseQuantums.toString()) : BigInt(0);
        message.liquidityTier = (_j = object.liquidityTier) !== null && _j !== void 0 ? _j : 0;
        message.marketType = (_k = object.marketType) !== null && _k !== void 0 ? _k : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePerpetualMarketCreateEventV2();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.quantum_conversion_exponent !== undefined && object.quantum_conversion_exponent !== null) {
            message.quantumConversionExponent = object.quantum_conversion_exponent;
        }
        if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
            message.atomicResolution = object.atomic_resolution;
        }
        if (object.subticks_per_tick !== undefined && object.subticks_per_tick !== null) {
            message.subticksPerTick = object.subticks_per_tick;
        }
        if (object.step_base_quantums !== undefined && object.step_base_quantums !== null) {
            message.stepBaseQuantums = BigInt(object.step_base_quantums);
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
        var _a;
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.quantum_conversion_exponent = message.quantumConversionExponent === 0 ? undefined : message.quantumConversionExponent;
        obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
        obj.subticks_per_tick = message.subticksPerTick === 0 ? undefined : message.subticksPerTick;
        obj.step_base_quantums = message.stepBaseQuantums !== BigInt(0) ? ((_a = message.stepBaseQuantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
        obj.market_type = message.marketType === 0 ? undefined : message.marketType;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PerpetualMarketCreateEventV2.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PerpetualMarketCreateEventV2.decode(message.value);
    },
    toProto: function (message) {
        return exports.PerpetualMarketCreateEventV2.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.PerpetualMarketCreateEventV2",
            value: exports.PerpetualMarketCreateEventV2.encode(message).finish()
        };
    }
};
function createBaseLiquidityTierUpsertEventV1() {
    return {
        id: 0,
        name: "",
        initialMarginPpm: 0,
        maintenanceFractionPpm: 0,
        basePositionNotional: BigInt(0)
    };
}
exports.LiquidityTierUpsertEventV1 = {
    typeUrl: "/nemo_network.indexer.events.LiquidityTierUpsertEventV1",
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
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityTierUpsertEventV1();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseLiquidityTierUpsertEventV1();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.initialMarginPpm = (_c = object.initialMarginPpm) !== null && _c !== void 0 ? _c : 0;
        message.maintenanceFractionPpm = (_d = object.maintenanceFractionPpm) !== null && _d !== void 0 ? _d : 0;
        message.basePositionNotional = object.basePositionNotional !== undefined && object.basePositionNotional !== null ? BigInt(object.basePositionNotional.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseLiquidityTierUpsertEventV1();
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
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.name = message.name === "" ? undefined : message.name;
        obj.initial_margin_ppm = message.initialMarginPpm === 0 ? undefined : message.initialMarginPpm;
        obj.maintenance_fraction_ppm = message.maintenanceFractionPpm === 0 ? undefined : message.maintenanceFractionPpm;
        obj.base_position_notional = message.basePositionNotional !== BigInt(0) ? ((_a = message.basePositionNotional) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LiquidityTierUpsertEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LiquidityTierUpsertEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.LiquidityTierUpsertEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.LiquidityTierUpsertEventV1",
            value: exports.LiquidityTierUpsertEventV1.encode(message).finish()
        };
    }
};
function createBaseUpdateClobPairEventV1() {
    return {
        clobPairId: 0,
        status: 0,
        quantumConversionExponent: 0,
        subticksPerTick: 0,
        stepBaseQuantums: BigInt(0)
    };
}
exports.UpdateClobPairEventV1 = {
    typeUrl: "/nemo_network.indexer.events.UpdateClobPairEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.clobPairId !== 0) {
            writer.uint32(8).uint32(message.clobPairId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.quantumConversionExponent !== 0) {
            writer.uint32(24).sint32(message.quantumConversionExponent);
        }
        if (message.subticksPerTick !== 0) {
            writer.uint32(32).uint32(message.subticksPerTick);
        }
        if (message.stepBaseQuantums !== BigInt(0)) {
            writer.uint32(40).uint64(message.stepBaseQuantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateClobPairEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPairId = reader.uint32();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.quantumConversionExponent = reader.sint32();
                    break;
                case 4:
                    message.subticksPerTick = reader.uint32();
                    break;
                case 5:
                    message.stepBaseQuantums = reader.uint64();
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
        var message = createBaseUpdateClobPairEventV1();
        message.clobPairId = (_a = object.clobPairId) !== null && _a !== void 0 ? _a : 0;
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.quantumConversionExponent = (_c = object.quantumConversionExponent) !== null && _c !== void 0 ? _c : 0;
        message.subticksPerTick = (_d = object.subticksPerTick) !== null && _d !== void 0 ? _d : 0;
        message.stepBaseQuantums = object.stepBaseQuantums !== undefined && object.stepBaseQuantums !== null ? BigInt(object.stepBaseQuantums.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseUpdateClobPairEventV1();
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.quantum_conversion_exponent !== undefined && object.quantum_conversion_exponent !== null) {
            message.quantumConversionExponent = object.quantum_conversion_exponent;
        }
        if (object.subticks_per_tick !== undefined && object.subticks_per_tick !== null) {
            message.subticksPerTick = object.subticks_per_tick;
        }
        if (object.step_base_quantums !== undefined && object.step_base_quantums !== null) {
            message.stepBaseQuantums = BigInt(object.step_base_quantums);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.quantum_conversion_exponent = message.quantumConversionExponent === 0 ? undefined : message.quantumConversionExponent;
        obj.subticks_per_tick = message.subticksPerTick === 0 ? undefined : message.subticksPerTick;
        obj.step_base_quantums = message.stepBaseQuantums !== BigInt(0) ? ((_a = message.stepBaseQuantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.UpdateClobPairEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.UpdateClobPairEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.UpdateClobPairEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.UpdateClobPairEventV1",
            value: exports.UpdateClobPairEventV1.encode(message).finish()
        };
    }
};
function createBaseUpdatePerpetualEventV1() {
    return {
        id: 0,
        ticker: "",
        marketId: 0,
        atomicResolution: 0,
        liquidityTier: 0
    };
}
exports.UpdatePerpetualEventV1 = {
    typeUrl: "/nemo_network.indexer.events.UpdatePerpetualEventV1",
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
        if (message.liquidityTier !== 0) {
            writer.uint32(40).uint32(message.liquidityTier);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdatePerpetualEventV1();
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
                    message.liquidityTier = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseUpdatePerpetualEventV1();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : 0;
        message.atomicResolution = (_d = object.atomicResolution) !== null && _d !== void 0 ? _d : 0;
        message.liquidityTier = (_e = object.liquidityTier) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseUpdatePerpetualEventV1();
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
        if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
            message.liquidityTier = object.liquidity_tier;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
        obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.UpdatePerpetualEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.UpdatePerpetualEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.UpdatePerpetualEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.UpdatePerpetualEventV1",
            value: exports.UpdatePerpetualEventV1.encode(message).finish()
        };
    }
};
function createBaseTradingRewardsEventV1() {
    return {
        tradingRewards: []
    };
}
exports.TradingRewardsEventV1 = {
    typeUrl: "/nemo_network.indexer.events.TradingRewardsEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.tradingRewards; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AddressTradingReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingRewardsEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradingRewards.push(exports.AddressTradingReward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTradingRewardsEventV1();
        message.tradingRewards = ((_a = object.tradingRewards) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AddressTradingReward.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseTradingRewardsEventV1();
        message.tradingRewards = ((_a = object.trading_rewards) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AddressTradingReward.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.tradingRewards) {
            obj.trading_rewards = message.tradingRewards.map(function (e) { return e ? exports.AddressTradingReward.toAmino(e) : undefined; });
        }
        else {
            obj.trading_rewards = message.tradingRewards;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TradingRewardsEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.TradingRewardsEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.TradingRewardsEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.TradingRewardsEventV1",
            value: exports.TradingRewardsEventV1.encode(message).finish()
        };
    }
};
function createBaseAddressTradingReward() {
    return {
        owner: "",
        denomAmount: new Uint8Array()
    };
}
exports.AddressTradingReward = {
    typeUrl: "/nemo_network.indexer.events.AddressTradingReward",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.denomAmount.length !== 0) {
            writer.uint32(18).bytes(message.denomAmount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddressTradingReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denomAmount = reader.bytes();
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
        var message = createBaseAddressTradingReward();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.denomAmount = (_b = object.denomAmount) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAddressTradingReward();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.denom_amount !== undefined && object.denom_amount !== null) {
            message.denomAmount = (0, helpers_1.bytesFromBase64)(object.denom_amount);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.denom_amount = message.denomAmount ? (0, helpers_1.base64FromBytes)(message.denomAmount) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AddressTradingReward.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AddressTradingReward.decode(message.value);
    },
    toProto: function (message) {
        return exports.AddressTradingReward.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.AddressTradingReward",
            value: exports.AddressTradingReward.encode(message).finish()
        };
    }
};
function createBaseOpenInterestUpdateEventV1() {
    return {
        openInterestUpdates: []
    };
}
exports.OpenInterestUpdateEventV1 = {
    typeUrl: "/nemo_network.indexer.events.OpenInterestUpdateEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.openInterestUpdates; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.OpenInterestUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOpenInterestUpdateEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.openInterestUpdates.push(exports.OpenInterestUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseOpenInterestUpdateEventV1();
        message.openInterestUpdates = ((_a = object.openInterestUpdates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OpenInterestUpdate.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseOpenInterestUpdateEventV1();
        message.openInterestUpdates = ((_a = object.open_interest_updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OpenInterestUpdate.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.openInterestUpdates) {
            obj.open_interest_updates = message.openInterestUpdates.map(function (e) { return e ? exports.OpenInterestUpdate.toAmino(e) : undefined; });
        }
        else {
            obj.open_interest_updates = message.openInterestUpdates;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OpenInterestUpdateEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OpenInterestUpdateEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.OpenInterestUpdateEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.OpenInterestUpdateEventV1",
            value: exports.OpenInterestUpdateEventV1.encode(message).finish()
        };
    }
};
function createBaseOpenInterestUpdate() {
    return {
        perpetualId: 0,
        openInterest: new Uint8Array()
    };
}
exports.OpenInterestUpdate = {
    typeUrl: "/nemo_network.indexer.events.OpenInterestUpdate",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        if (message.openInterest.length !== 0) {
            writer.uint32(18).bytes(message.openInterest);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOpenInterestUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
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
        var message = createBaseOpenInterestUpdate();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.openInterest = (_b = object.openInterest) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOpenInterestUpdate();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        if (object.open_interest !== undefined && object.open_interest !== null) {
            message.openInterest = (0, helpers_1.bytesFromBase64)(object.open_interest);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        obj.open_interest = message.openInterest ? (0, helpers_1.base64FromBytes)(message.openInterest) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OpenInterestUpdate.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OpenInterestUpdate.decode(message.value);
    },
    toProto: function (message) {
        return exports.OpenInterestUpdate.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.OpenInterestUpdate",
            value: exports.OpenInterestUpdate.encode(message).finish()
        };
    }
};
function createBaseLiquidityTierUpsertEventV2() {
    return {
        id: 0,
        name: "",
        initialMarginPpm: 0,
        maintenanceFractionPpm: 0,
        basePositionNotional: BigInt(0),
        openInterestLowerCap: BigInt(0),
        openInterestUpperCap: BigInt(0)
    };
}
exports.LiquidityTierUpsertEventV2 = {
    typeUrl: "/nemo_network.indexer.events.LiquidityTierUpsertEventV2",
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
        if (message.openInterestLowerCap !== BigInt(0)) {
            writer.uint32(48).uint64(message.openInterestLowerCap);
        }
        if (message.openInterestUpperCap !== BigInt(0)) {
            writer.uint32(56).uint64(message.openInterestUpperCap);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityTierUpsertEventV2();
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
                    message.openInterestLowerCap = reader.uint64();
                    break;
                case 7:
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
        var message = createBaseLiquidityTierUpsertEventV2();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.initialMarginPpm = (_c = object.initialMarginPpm) !== null && _c !== void 0 ? _c : 0;
        message.maintenanceFractionPpm = (_d = object.maintenanceFractionPpm) !== null && _d !== void 0 ? _d : 0;
        message.basePositionNotional = object.basePositionNotional !== undefined && object.basePositionNotional !== null ? BigInt(object.basePositionNotional.toString()) : BigInt(0);
        message.openInterestLowerCap = object.openInterestLowerCap !== undefined && object.openInterestLowerCap !== null ? BigInt(object.openInterestLowerCap.toString()) : BigInt(0);
        message.openInterestUpperCap = object.openInterestUpperCap !== undefined && object.openInterestUpperCap !== null ? BigInt(object.openInterestUpperCap.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseLiquidityTierUpsertEventV2();
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
        if (object.open_interest_lower_cap !== undefined && object.open_interest_lower_cap !== null) {
            message.openInterestLowerCap = BigInt(object.open_interest_lower_cap);
        }
        if (object.open_interest_upper_cap !== undefined && object.open_interest_upper_cap !== null) {
            message.openInterestUpperCap = BigInt(object.open_interest_upper_cap);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c;
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.name = message.name === "" ? undefined : message.name;
        obj.initial_margin_ppm = message.initialMarginPpm === 0 ? undefined : message.initialMarginPpm;
        obj.maintenance_fraction_ppm = message.maintenanceFractionPpm === 0 ? undefined : message.maintenanceFractionPpm;
        obj.base_position_notional = message.basePositionNotional !== BigInt(0) ? ((_a = message.basePositionNotional) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.open_interest_lower_cap = message.openInterestLowerCap !== BigInt(0) ? ((_b = message.openInterestLowerCap) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.open_interest_upper_cap = message.openInterestUpperCap !== BigInt(0) ? ((_c = message.openInterestUpperCap) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LiquidityTierUpsertEventV2.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LiquidityTierUpsertEventV2.decode(message.value);
    },
    toProto: function (message) {
        return exports.LiquidityTierUpsertEventV2.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.LiquidityTierUpsertEventV2",
            value: exports.LiquidityTierUpsertEventV2.encode(message).finish()
        };
    }
};
function createBaseRegisterAffiliateEventV1() {
    return {
        referee: "",
        affiliate: "",
        registeredAtBlock: BigInt(0)
    };
}
exports.RegisterAffiliateEventV1 = {
    typeUrl: "/nemo_network.indexer.events.RegisterAffiliateEventV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.referee !== "") {
            writer.uint32(10).string(message.referee);
        }
        if (message.affiliate !== "") {
            writer.uint32(18).string(message.affiliate);
        }
        if (message.registeredAtBlock !== BigInt(0)) {
            writer.uint32(24).uint64(message.registeredAtBlock);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRegisterAffiliateEventV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referee = reader.string();
                    break;
                case 2:
                    message.affiliate = reader.string();
                    break;
                case 3:
                    message.registeredAtBlock = reader.uint64();
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
        var message = createBaseRegisterAffiliateEventV1();
        message.referee = (_a = object.referee) !== null && _a !== void 0 ? _a : "";
        message.affiliate = (_b = object.affiliate) !== null && _b !== void 0 ? _b : "";
        message.registeredAtBlock = object.registeredAtBlock !== undefined && object.registeredAtBlock !== null ? BigInt(object.registeredAtBlock.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseRegisterAffiliateEventV1();
        if (object.referee !== undefined && object.referee !== null) {
            message.referee = object.referee;
        }
        if (object.affiliate !== undefined && object.affiliate !== null) {
            message.affiliate = object.affiliate;
        }
        if (object.registered_at_block !== undefined && object.registered_at_block !== null) {
            message.registeredAtBlock = BigInt(object.registered_at_block);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.referee = message.referee === "" ? undefined : message.referee;
        obj.affiliate = message.affiliate === "" ? undefined : message.affiliate;
        obj.registered_at_block = message.registeredAtBlock !== BigInt(0) ? ((_a = message.registeredAtBlock) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.RegisterAffiliateEventV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.RegisterAffiliateEventV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.RegisterAffiliateEventV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.events.RegisterAffiliateEventV1",
            value: exports.RegisterAffiliateEventV1.encode(message).finish()
        };
    }
};
