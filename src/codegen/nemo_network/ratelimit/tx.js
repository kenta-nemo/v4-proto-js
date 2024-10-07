"use strict";
exports.__esModule = true;
exports.MsgSetLimitParamsResponse = exports.MsgSetLimitParams = void 0;
var limit_params_1 = require("./limit_params");
var binary_1 = require("../../binary");
function createBaseMsgSetLimitParams() {
    return {
        authority: "",
        limitParams: limit_params_1.LimitParams.fromPartial({})
    };
}
exports.MsgSetLimitParams = {
    typeUrl: "/nemo_network.ratelimit.MsgSetLimitParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.limitParams !== undefined) {
            limit_params_1.LimitParams.encode(message.limitParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetLimitParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.limitParams = limit_params_1.LimitParams.decode(reader, reader.uint32());
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
        var message = createBaseMsgSetLimitParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.limitParams = object.limitParams !== undefined && object.limitParams !== null ? limit_params_1.LimitParams.fromPartial(object.limitParams) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSetLimitParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.limit_params !== undefined && object.limit_params !== null) {
            message.limitParams = limit_params_1.LimitParams.fromAmino(object.limit_params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.limit_params = message.limitParams ? limit_params_1.LimitParams.toAmino(message.limitParams) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetLimitParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetLimitParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetLimitParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.MsgSetLimitParams",
            value: exports.MsgSetLimitParams.encode(message).finish()
        };
    }
};
function createBaseMsgSetLimitParamsResponse() {
    return {};
}
exports.MsgSetLimitParamsResponse = {
    typeUrl: "/nemo_network.ratelimit.MsgSetLimitParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetLimitParamsResponse();
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
        var message = createBaseMsgSetLimitParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSetLimitParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetLimitParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetLimitParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetLimitParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.MsgSetLimitParamsResponse",
            value: exports.MsgSetLimitParamsResponse.encode(message).finish()
        };
    }
};
