"use strict";
exports.__esModule = true;
exports.QueryUserFeeTierResponse = exports.QueryUserFeeTierRequest = exports.QueryPerpetualFeeParamsResponse = exports.QueryPerpetualFeeParamsRequest = void 0;
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseQueryPerpetualFeeParamsRequest() {
    return {};
}
exports.QueryPerpetualFeeParamsRequest = {
    typeUrl: "/nemo_network.feetiers.QueryPerpetualFeeParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPerpetualFeeParamsRequest();
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
        var message = createBaseQueryPerpetualFeeParamsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryPerpetualFeeParamsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryPerpetualFeeParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPerpetualFeeParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPerpetualFeeParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.feetiers.QueryPerpetualFeeParamsRequest",
            value: exports.QueryPerpetualFeeParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualFeeParamsResponse() {
    return {
        params: params_1.PerpetualFeeParams.fromPartial({})
    };
}
exports.QueryPerpetualFeeParamsResponse = {
    typeUrl: "/nemo_network.feetiers.QueryPerpetualFeeParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.PerpetualFeeParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPerpetualFeeParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.PerpetualFeeParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryPerpetualFeeParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.PerpetualFeeParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryPerpetualFeeParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.PerpetualFeeParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.PerpetualFeeParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryPerpetualFeeParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPerpetualFeeParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPerpetualFeeParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.feetiers.QueryPerpetualFeeParamsResponse",
            value: exports.QueryPerpetualFeeParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUserFeeTierRequest() {
    return {
        user: ""
    };
}
exports.QueryUserFeeTierRequest = {
    typeUrl: "/nemo_network.feetiers.QueryUserFeeTierRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.user !== "") {
            writer.uint32(10).string(message.user);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUserFeeTierRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
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
        var message = createBaseQueryUserFeeTierRequest();
        message.user = (_a = object.user) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryUserFeeTierRequest();
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.user = message.user === "" ? undefined : message.user;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryUserFeeTierRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryUserFeeTierRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryUserFeeTierRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.feetiers.QueryUserFeeTierRequest",
            value: exports.QueryUserFeeTierRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUserFeeTierResponse() {
    return {
        index: 0,
        tier: undefined
    };
}
exports.QueryUserFeeTierResponse = {
    typeUrl: "/nemo_network.feetiers.QueryUserFeeTierResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.tier !== undefined) {
            params_1.PerpetualFeeTier.encode(message.tier, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUserFeeTierResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.tier = params_1.PerpetualFeeTier.decode(reader, reader.uint32());
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
        var message = createBaseQueryUserFeeTierResponse();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.tier = object.tier !== undefined && object.tier !== null ? params_1.PerpetualFeeTier.fromPartial(object.tier) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryUserFeeTierResponse();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.tier !== undefined && object.tier !== null) {
            message.tier = params_1.PerpetualFeeTier.fromAmino(object.tier);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.index = message.index === 0 ? undefined : message.index;
        obj.tier = message.tier ? params_1.PerpetualFeeTier.toAmino(message.tier) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryUserFeeTierResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryUserFeeTierResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryUserFeeTierResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.feetiers.QueryUserFeeTierResponse",
            value: exports.QueryUserFeeTierResponse.encode(message).finish()
        };
    }
};
