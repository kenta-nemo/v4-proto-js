"use strict";
exports.__esModule = true;
exports.MsgUpdatePerpetualFeeParamsResponse = exports.MsgUpdatePerpetualFeeParams = void 0;
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseMsgUpdatePerpetualFeeParams() {
    return {
        authority: "",
        params: params_1.PerpetualFeeParams.fromPartial({})
    };
}
exports.MsgUpdatePerpetualFeeParams = {
    typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.PerpetualFeeParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdatePerpetualFeeParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgUpdatePerpetualFeeParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? params_1.PerpetualFeeParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdatePerpetualFeeParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.PerpetualFeeParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? params_1.PerpetualFeeParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdatePerpetualFeeParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdatePerpetualFeeParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdatePerpetualFeeParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams",
            value: exports.MsgUpdatePerpetualFeeParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePerpetualFeeParamsResponse() {
    return {};
}
exports.MsgUpdatePerpetualFeeParamsResponse = {
    typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdatePerpetualFeeParamsResponse();
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
        var message = createBaseMsgUpdatePerpetualFeeParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdatePerpetualFeeParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdatePerpetualFeeParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdatePerpetualFeeParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdatePerpetualFeeParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParamsResponse",
            value: exports.MsgUpdatePerpetualFeeParamsResponse.encode(message).finish()
        };
    }
};
