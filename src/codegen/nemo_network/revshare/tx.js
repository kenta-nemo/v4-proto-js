"use strict";
exports.__esModule = true;
exports.MsgSetMarketMapperRevShareDetailsForMarketResponse = exports.MsgSetMarketMapperRevShareDetailsForMarket = exports.MsgSetMarketMapperRevenueShareResponse = exports.MsgSetMarketMapperRevenueShare = void 0;
var params_1 = require("./params");
var revshare_1 = require("./revshare");
var binary_1 = require("../../binary");
function createBaseMsgSetMarketMapperRevenueShare() {
    return {
        authority: "",
        params: params_1.MarketMapperRevenueShareParams.fromPartial({})
    };
}
exports.MsgSetMarketMapperRevenueShare = {
    typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.MarketMapperRevenueShareParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetMarketMapperRevenueShare();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = params_1.MarketMapperRevenueShareParams.decode(reader, reader.uint32());
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
        var message = createBaseMsgSetMarketMapperRevenueShare();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? params_1.MarketMapperRevenueShareParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSetMarketMapperRevenueShare();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.MarketMapperRevenueShareParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? params_1.MarketMapperRevenueShareParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetMarketMapperRevenueShare.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetMarketMapperRevenueShare.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetMarketMapperRevenueShare.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
            value: exports.MsgSetMarketMapperRevenueShare.encode(message).finish()
        };
    }
};
function createBaseMsgSetMarketMapperRevenueShareResponse() {
    return {};
}
exports.MsgSetMarketMapperRevenueShareResponse = {
    typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShareResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetMarketMapperRevenueShareResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseMsgSetMarketMapperRevenueShareResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSetMarketMapperRevenueShareResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetMarketMapperRevenueShareResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetMarketMapperRevenueShareResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetMarketMapperRevenueShareResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShareResponse",
            value: exports.MsgSetMarketMapperRevenueShareResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetMarketMapperRevShareDetailsForMarket() {
    return {
        authority: "",
        marketId: 0,
        params: revshare_1.MarketMapperRevShareDetails.fromPartial({})
    };
}
exports.MsgSetMarketMapperRevShareDetailsForMarket = {
    typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.marketId !== 0) {
            writer.uint32(16).uint32(message.marketId);
        }
        if (message.params !== undefined) {
            revshare_1.MarketMapperRevShareDetails.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetMarketMapperRevShareDetailsForMarket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.marketId = reader.uint32();
                    break;
                case 3:
                    message.params = revshare_1.MarketMapperRevShareDetails.decode(reader, reader.uint32());
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
        var message = createBaseMsgSetMarketMapperRevShareDetailsForMarket();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : 0;
        message.params = object.params !== undefined && object.params !== null ? revshare_1.MarketMapperRevShareDetails.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSetMarketMapperRevShareDetailsForMarket();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = revshare_1.MarketMapperRevShareDetails.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.params = message.params ? revshare_1.MarketMapperRevShareDetails.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetMarketMapperRevShareDetailsForMarket.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetMarketMapperRevShareDetailsForMarket.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetMarketMapperRevShareDetailsForMarket.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
            value: exports.MsgSetMarketMapperRevShareDetailsForMarket.encode(message).finish()
        };
    }
};
function createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse() {
    return {};
}
exports.MsgSetMarketMapperRevShareDetailsForMarketResponse = {
    typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarketResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetMarketMapperRevShareDetailsForMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetMarketMapperRevShareDetailsForMarketResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetMarketMapperRevShareDetailsForMarketResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarketResponse",
            value: exports.MsgSetMarketMapperRevShareDetailsForMarketResponse.encode(message).finish()
        };
    }
};
