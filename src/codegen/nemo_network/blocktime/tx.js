"use strict";
exports.__esModule = true;
exports.MsgUpdateDowntimeParamsResponse = exports.MsgUpdateDowntimeParams = void 0;
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseMsgUpdateDowntimeParams() {
    return {
        authority: "",
        params: params_1.DowntimeParams.fromPartial({})
    };
}
exports.MsgUpdateDowntimeParams = {
    typeUrl: "/nemo_network.blocktime.MsgUpdateDowntimeParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.DowntimeParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateDowntimeParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = params_1.DowntimeParams.decode(reader, reader.uint32());
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
        var message = createBaseMsgUpdateDowntimeParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? params_1.DowntimeParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateDowntimeParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.DowntimeParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? params_1.DowntimeParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateDowntimeParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateDowntimeParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateDowntimeParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.MsgUpdateDowntimeParams",
            value: exports.MsgUpdateDowntimeParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDowntimeParamsResponse() {
    return {};
}
exports.MsgUpdateDowntimeParamsResponse = {
    typeUrl: "/nemo_network.blocktime.MsgUpdateDowntimeParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateDowntimeParamsResponse();
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
        var message = createBaseMsgUpdateDowntimeParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateDowntimeParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateDowntimeParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateDowntimeParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateDowntimeParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.MsgUpdateDowntimeParamsResponse",
            value: exports.MsgUpdateDowntimeParamsResponse.encode(message).finish()
        };
    }
};
