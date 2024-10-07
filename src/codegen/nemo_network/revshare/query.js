"use strict";
exports.__esModule = true;
exports.QueryMarketMapperRevShareDetailsResponse = exports.QueryMarketMapperRevShareDetails = exports.QueryMarketMapperRevenueShareParamsResponse = exports.QueryMarketMapperRevenueShareParams = void 0;
var params_1 = require("./params");
var revshare_1 = require("./revshare");
var binary_1 = require("../../binary");
function createBaseQueryMarketMapperRevenueShareParams() {
    return {};
}
exports.QueryMarketMapperRevenueShareParams = {
    typeUrl: "/nemo_network.revshare.QueryMarketMapperRevenueShareParams",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketMapperRevenueShareParams();
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
        var message = createBaseQueryMarketMapperRevenueShareParams();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryMarketMapperRevenueShareParams();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketMapperRevenueShareParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketMapperRevenueShareParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketMapperRevenueShareParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.QueryMarketMapperRevenueShareParams",
            value: exports.QueryMarketMapperRevenueShareParams.encode(message).finish()
        };
    }
};
function createBaseQueryMarketMapperRevenueShareParamsResponse() {
    return {
        params: params_1.MarketMapperRevenueShareParams.fromPartial({})
    };
}
exports.QueryMarketMapperRevenueShareParamsResponse = {
    typeUrl: "/nemo_network.revshare.QueryMarketMapperRevenueShareParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.MarketMapperRevenueShareParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketMapperRevenueShareParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = createBaseQueryMarketMapperRevenueShareParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.MarketMapperRevenueShareParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMarketMapperRevenueShareParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.MarketMapperRevenueShareParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.MarketMapperRevenueShareParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketMapperRevenueShareParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketMapperRevenueShareParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketMapperRevenueShareParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.QueryMarketMapperRevenueShareParamsResponse",
            value: exports.QueryMarketMapperRevenueShareParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMarketMapperRevShareDetails() {
    return {
        marketId: 0
    };
}
exports.QueryMarketMapperRevShareDetails = {
    typeUrl: "/nemo_network.revshare.QueryMarketMapperRevShareDetails",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.marketId !== 0) {
            writer.uint32(8).uint32(message.marketId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketMapperRevShareDetails();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint32();
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
        var message = createBaseQueryMarketMapperRevShareDetails();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMarketMapperRevShareDetails();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketMapperRevShareDetails.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketMapperRevShareDetails.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketMapperRevShareDetails.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.QueryMarketMapperRevShareDetails",
            value: exports.QueryMarketMapperRevShareDetails.encode(message).finish()
        };
    }
};
function createBaseQueryMarketMapperRevShareDetailsResponse() {
    return {
        details: revshare_1.MarketMapperRevShareDetails.fromPartial({})
    };
}
exports.QueryMarketMapperRevShareDetailsResponse = {
    typeUrl: "/nemo_network.revshare.QueryMarketMapperRevShareDetailsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.details !== undefined) {
            revshare_1.MarketMapperRevShareDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketMapperRevShareDetailsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.details = revshare_1.MarketMapperRevShareDetails.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryMarketMapperRevShareDetailsResponse();
        message.details = object.details !== undefined && object.details !== null ? revshare_1.MarketMapperRevShareDetails.fromPartial(object.details) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMarketMapperRevShareDetailsResponse();
        if (object.details !== undefined && object.details !== null) {
            message.details = revshare_1.MarketMapperRevShareDetails.fromAmino(object.details);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.details = message.details ? revshare_1.MarketMapperRevShareDetails.toAmino(message.details) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketMapperRevShareDetailsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketMapperRevShareDetailsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketMapperRevShareDetailsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.QueryMarketMapperRevShareDetailsResponse",
            value: exports.QueryMarketMapperRevShareDetailsResponse.encode(message).finish()
        };
    }
};
