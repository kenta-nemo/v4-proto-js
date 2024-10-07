"use strict";
exports.__esModule = true;
exports.BlockHeightMessage = exports.CandleMessage = exports.MarketMessage = exports.TradeMessage = exports.SubaccountMessage = exports.OrderbookMessage = exports.candleMessage_ResolutionToJSON = exports.candleMessage_ResolutionFromJSON = exports.CandleMessage_ResolutionAmino = exports.CandleMessage_ResolutionSDKType = exports.CandleMessage_Resolution = void 0;
var subaccount_1 = require("../protocol/v1/subaccount");
var binary_1 = require("../../../binary");
/** TODO(IND-210): Make this proto conform and update downstream indexer logic */
var CandleMessage_Resolution;
(function (CandleMessage_Resolution) {
    /**
     * ONE_MINUTE - buf:lint:ignore ENUM_VALUE_PREFIX
     * buf:lint:ignore ENUM_ZERO_VALUE_SUFFIX
     */
    CandleMessage_Resolution[CandleMessage_Resolution["ONE_MINUTE"] = 0] = "ONE_MINUTE";
    /** FIVE_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["FIVE_MINUTES"] = 1] = "FIVE_MINUTES";
    /** FIFTEEN_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["FIFTEEN_MINUTES"] = 2] = "FIFTEEN_MINUTES";
    /** THIRTY_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["THIRTY_MINUTES"] = 3] = "THIRTY_MINUTES";
    /** ONE_HOUR - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["ONE_HOUR"] = 4] = "ONE_HOUR";
    /** FOUR_HOURS - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["FOUR_HOURS"] = 5] = "FOUR_HOURS";
    /** ONE_DAY - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["ONE_DAY"] = 6] = "ONE_DAY";
    CandleMessage_Resolution[CandleMessage_Resolution["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CandleMessage_Resolution = exports.CandleMessage_Resolution || (exports.CandleMessage_Resolution = {}));
exports.CandleMessage_ResolutionSDKType = CandleMessage_Resolution;
exports.CandleMessage_ResolutionAmino = CandleMessage_Resolution;
function candleMessage_ResolutionFromJSON(object) {
    switch (object) {
        case 0:
        case "ONE_MINUTE":
            return CandleMessage_Resolution.ONE_MINUTE;
        case 1:
        case "FIVE_MINUTES":
            return CandleMessage_Resolution.FIVE_MINUTES;
        case 2:
        case "FIFTEEN_MINUTES":
            return CandleMessage_Resolution.FIFTEEN_MINUTES;
        case 3:
        case "THIRTY_MINUTES":
            return CandleMessage_Resolution.THIRTY_MINUTES;
        case 4:
        case "ONE_HOUR":
            return CandleMessage_Resolution.ONE_HOUR;
        case 5:
        case "FOUR_HOURS":
            return CandleMessage_Resolution.FOUR_HOURS;
        case 6:
        case "ONE_DAY":
            return CandleMessage_Resolution.ONE_DAY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CandleMessage_Resolution.UNRECOGNIZED;
    }
}
exports.candleMessage_ResolutionFromJSON = candleMessage_ResolutionFromJSON;
function candleMessage_ResolutionToJSON(object) {
    switch (object) {
        case CandleMessage_Resolution.ONE_MINUTE:
            return "ONE_MINUTE";
        case CandleMessage_Resolution.FIVE_MINUTES:
            return "FIVE_MINUTES";
        case CandleMessage_Resolution.FIFTEEN_MINUTES:
            return "FIFTEEN_MINUTES";
        case CandleMessage_Resolution.THIRTY_MINUTES:
            return "THIRTY_MINUTES";
        case CandleMessage_Resolution.ONE_HOUR:
            return "ONE_HOUR";
        case CandleMessage_Resolution.FOUR_HOURS:
            return "FOUR_HOURS";
        case CandleMessage_Resolution.ONE_DAY:
            return "ONE_DAY";
        case CandleMessage_Resolution.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.candleMessage_ResolutionToJSON = candleMessage_ResolutionToJSON;
function createBaseOrderbookMessage() {
    return {
        contents: "",
        clobPairId: "",
        version: ""
    };
}
exports.OrderbookMessage = {
    typeUrl: "/nemo_network.indexer.socks.OrderbookMessage",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.contents !== "") {
            writer.uint32(10).string(message.contents);
        }
        if (message.clobPairId !== "") {
            writer.uint32(18).string(message.clobPairId);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderbookMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contents = reader.string();
                    break;
                case 2:
                    message.clobPairId = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
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
        var message = createBaseOrderbookMessage();
        message.contents = (_a = object.contents) !== null && _a !== void 0 ? _a : "";
        message.clobPairId = (_b = object.clobPairId) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOrderbookMessage();
        if (object.contents !== undefined && object.contents !== null) {
            message.contents = object.contents;
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.contents = message.contents === "" ? undefined : message.contents;
        obj.clob_pair_id = message.clobPairId === "" ? undefined : message.clobPairId;
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrderbookMessage.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrderbookMessage.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrderbookMessage.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.socks.OrderbookMessage",
            value: exports.OrderbookMessage.encode(message).finish()
        };
    }
};
function createBaseSubaccountMessage() {
    return {
        blockHeight: "",
        transactionIndex: 0,
        eventIndex: 0,
        contents: "",
        subaccountId: undefined,
        version: ""
    };
}
exports.SubaccountMessage = {
    typeUrl: "/nemo_network.indexer.socks.SubaccountMessage",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockHeight !== "") {
            writer.uint32(10).string(message.blockHeight);
        }
        if (message.transactionIndex !== 0) {
            writer.uint32(16).int32(message.transactionIndex);
        }
        if (message.eventIndex !== 0) {
            writer.uint32(24).uint32(message.eventIndex);
        }
        if (message.contents !== "") {
            writer.uint32(34).string(message.contents);
        }
        if (message.subaccountId !== undefined) {
            subaccount_1.IndexerSubaccountId.encode(message.subaccountId, writer.uint32(42).fork()).ldelim();
        }
        if (message.version !== "") {
            writer.uint32(50).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubaccountMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.string();
                    break;
                case 2:
                    message.transactionIndex = reader.int32();
                    break;
                case 3:
                    message.eventIndex = reader.uint32();
                    break;
                case 4:
                    message.contents = reader.string();
                    break;
                case 5:
                    message.subaccountId = subaccount_1.IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.version = reader.string();
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
        var message = createBaseSubaccountMessage();
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : "";
        message.transactionIndex = (_b = object.transactionIndex) !== null && _b !== void 0 ? _b : 0;
        message.eventIndex = (_c = object.eventIndex) !== null && _c !== void 0 ? _c : 0;
        message.contents = (_d = object.contents) !== null && _d !== void 0 ? _d : "";
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.IndexerSubaccountId.fromPartial(object.subaccountId) : undefined;
        message.version = (_e = object.version) !== null && _e !== void 0 ? _e : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSubaccountMessage();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        if (object.transaction_index !== undefined && object.transaction_index !== null) {
            message.transactionIndex = object.transaction_index;
        }
        if (object.event_index !== undefined && object.event_index !== null) {
            message.eventIndex = object.event_index;
        }
        if (object.contents !== undefined && object.contents !== null) {
            message.contents = object.contents;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.IndexerSubaccountId.fromAmino(object.subaccount_id);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.block_height = message.blockHeight === "" ? undefined : message.blockHeight;
        obj.transaction_index = message.transactionIndex === 0 ? undefined : message.transactionIndex;
        obj.event_index = message.eventIndex === 0 ? undefined : message.eventIndex;
        obj.contents = message.contents === "" ? undefined : message.contents;
        obj.subaccount_id = message.subaccountId ? subaccount_1.IndexerSubaccountId.toAmino(message.subaccountId) : undefined;
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SubaccountMessage.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SubaccountMessage.decode(message.value);
    },
    toProto: function (message) {
        return exports.SubaccountMessage.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.socks.SubaccountMessage",
            value: exports.SubaccountMessage.encode(message).finish()
        };
    }
};
function createBaseTradeMessage() {
    return {
        blockHeight: "",
        contents: "",
        clobPairId: "",
        version: ""
    };
}
exports.TradeMessage = {
    typeUrl: "/nemo_network.indexer.socks.TradeMessage",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockHeight !== "") {
            writer.uint32(10).string(message.blockHeight);
        }
        if (message.contents !== "") {
            writer.uint32(34).string(message.contents);
        }
        if (message.clobPairId !== "") {
            writer.uint32(42).string(message.clobPairId);
        }
        if (message.version !== "") {
            writer.uint32(50).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradeMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.string();
                    break;
                case 4:
                    message.contents = reader.string();
                    break;
                case 5:
                    message.clobPairId = reader.string();
                    break;
                case 6:
                    message.version = reader.string();
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
        var message = createBaseTradeMessage();
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : "";
        message.contents = (_b = object.contents) !== null && _b !== void 0 ? _b : "";
        message.clobPairId = (_c = object.clobPairId) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseTradeMessage();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        if (object.contents !== undefined && object.contents !== null) {
            message.contents = object.contents;
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.block_height = message.blockHeight === "" ? undefined : message.blockHeight;
        obj.contents = message.contents === "" ? undefined : message.contents;
        obj.clob_pair_id = message.clobPairId === "" ? undefined : message.clobPairId;
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TradeMessage.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.TradeMessage.decode(message.value);
    },
    toProto: function (message) {
        return exports.TradeMessage.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.socks.TradeMessage",
            value: exports.TradeMessage.encode(message).finish()
        };
    }
};
function createBaseMarketMessage() {
    return {
        contents: "",
        version: ""
    };
}
exports.MarketMessage = {
    typeUrl: "/nemo_network.indexer.socks.MarketMessage",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.contents !== "") {
            writer.uint32(10).string(message.contents);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contents = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
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
        var message = createBaseMarketMessage();
        message.contents = (_a = object.contents) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketMessage();
        if (object.contents !== undefined && object.contents !== null) {
            message.contents = object.contents;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.contents = message.contents === "" ? undefined : message.contents;
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketMessage.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketMessage.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketMessage.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.socks.MarketMessage",
            value: exports.MarketMessage.encode(message).finish()
        };
    }
};
function createBaseCandleMessage() {
    return {
        contents: "",
        clobPairId: "",
        resolution: 0,
        version: ""
    };
}
exports.CandleMessage = {
    typeUrl: "/nemo_network.indexer.socks.CandleMessage",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.contents !== "") {
            writer.uint32(10).string(message.contents);
        }
        if (message.clobPairId !== "") {
            writer.uint32(18).string(message.clobPairId);
        }
        if (message.resolution !== 0) {
            writer.uint32(24).int32(message.resolution);
        }
        if (message.version !== "") {
            writer.uint32(34).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCandleMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contents = reader.string();
                    break;
                case 2:
                    message.clobPairId = reader.string();
                    break;
                case 3:
                    message.resolution = reader.int32();
                    break;
                case 4:
                    message.version = reader.string();
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
        var message = createBaseCandleMessage();
        message.contents = (_a = object.contents) !== null && _a !== void 0 ? _a : "";
        message.clobPairId = (_b = object.clobPairId) !== null && _b !== void 0 ? _b : "";
        message.resolution = (_c = object.resolution) !== null && _c !== void 0 ? _c : 0;
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseCandleMessage();
        if (object.contents !== undefined && object.contents !== null) {
            message.contents = object.contents;
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.resolution !== undefined && object.resolution !== null) {
            message.resolution = object.resolution;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.contents = message.contents === "" ? undefined : message.contents;
        obj.clob_pair_id = message.clobPairId === "" ? undefined : message.clobPairId;
        obj.resolution = message.resolution === 0 ? undefined : message.resolution;
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.CandleMessage.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.CandleMessage.decode(message.value);
    },
    toProto: function (message) {
        return exports.CandleMessage.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.socks.CandleMessage",
            value: exports.CandleMessage.encode(message).finish()
        };
    }
};
function createBaseBlockHeightMessage() {
    return {
        blockHeight: "",
        time: "",
        version: ""
    };
}
exports.BlockHeightMessage = {
    typeUrl: "/nemo_network.indexer.socks.BlockHeightMessage",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockHeight !== "") {
            writer.uint32(10).string(message.blockHeight);
        }
        if (message.time !== "") {
            writer.uint32(18).string(message.time);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockHeightMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.string();
                    break;
                case 2:
                    message.time = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
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
        var message = createBaseBlockHeightMessage();
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : "";
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseBlockHeightMessage();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = object.time;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.block_height = message.blockHeight === "" ? undefined : message.blockHeight;
        obj.time = message.time === "" ? undefined : message.time;
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BlockHeightMessage.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.BlockHeightMessage.decode(message.value);
    },
    toProto: function (message) {
        return exports.BlockHeightMessage.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.socks.BlockHeightMessage",
            value: exports.BlockHeightMessage.encode(message).finish()
        };
    }
};
