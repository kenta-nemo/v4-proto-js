"use strict";
exports.__esModule = true;
exports.DelayedMessage = void 0;
var any_1 = require("../../google/protobuf/any");
var binary_1 = require("../../binary");
function createBaseDelayedMessage() {
    return {
        id: 0,
        msg: undefined,
        blockHeight: 0
    };
}
exports.DelayedMessage = {
    typeUrl: "/nemo_network.delaymsg.DelayedMessage",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.msg !== undefined) {
            any_1.Any.encode(message.msg, writer.uint32(18).fork()).ldelim();
        }
        if (message.blockHeight !== 0) {
            writer.uint32(24).uint32(message.blockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelayedMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.msg = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.blockHeight = reader.uint32();
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
        var message = createBaseDelayedMessage();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.msg = object.msg !== undefined && object.msg !== null ? any_1.Any.fromPartial(object.msg) : undefined;
        message.blockHeight = (_b = object.blockHeight) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDelayedMessage();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = any_1.Any.fromAmino(object.msg);
        }
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.msg = message.msg ? any_1.Any.toAmino(message.msg) : undefined;
        obj.block_height = message.blockHeight === 0 ? undefined : message.blockHeight;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DelayedMessage.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DelayedMessage.decode(message.value);
    },
    toProto: function (message) {
        return exports.DelayedMessage.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.DelayedMessage",
            value: exports.DelayedMessage.encode(message).finish()
        };
    }
};
