"use strict";
exports.__esModule = true;
exports.MsgDelayMessageResponse = exports.MsgDelayMessage = void 0;
var any_1 = require("../../google/protobuf/any");
var binary_1 = require("../../binary");
function createBaseMsgDelayMessage() {
    return {
        authority: "",
        msg: undefined,
        delayBlocks: 0
    };
}
exports.MsgDelayMessage = {
    typeUrl: "/nemo_network.delaymsg.MsgDelayMessage",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.msg !== undefined) {
            any_1.Any.encode(message.msg, writer.uint32(18).fork()).ldelim();
        }
        if (message.delayBlocks !== 0) {
            writer.uint32(24).uint32(message.delayBlocks);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDelayMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.msg = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delayBlocks = reader.uint32();
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
        var message = createBaseMsgDelayMessage();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.msg = object.msg !== undefined && object.msg !== null ? any_1.Any.fromPartial(object.msg) : undefined;
        message.delayBlocks = (_b = object.delayBlocks) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgDelayMessage();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = any_1.Any.fromAmino(object.msg);
        }
        if (object.delay_blocks !== undefined && object.delay_blocks !== null) {
            message.delayBlocks = object.delay_blocks;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.msg = message.msg ? any_1.Any.toAmino(message.msg) : undefined;
        obj.delay_blocks = message.delayBlocks === 0 ? undefined : message.delayBlocks;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDelayMessage.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgDelayMessage.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDelayMessage.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.MsgDelayMessage",
            value: exports.MsgDelayMessage.encode(message).finish()
        };
    }
};
function createBaseMsgDelayMessageResponse() {
    return {
        id: BigInt(0)
    };
}
exports.MsgDelayMessageResponse = {
    typeUrl: "/nemo_network.delaymsg.MsgDelayMessageResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDelayMessageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMsgDelayMessageResponse();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgDelayMessageResponse();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.id = message.id !== BigInt(0) ? ((_a = message.id) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDelayMessageResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgDelayMessageResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDelayMessageResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.MsgDelayMessageResponse",
            value: exports.MsgDelayMessageResponse.encode(message).finish()
        };
    }
};
