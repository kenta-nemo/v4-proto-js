"use strict";
exports.__esModule = true;
exports.PendingSendPacket = void 0;
var binary_1 = require("../../binary");
function createBasePendingSendPacket() {
    return {
        channelId: "",
        sequence: BigInt(0)
    };
}
exports.PendingSendPacket = {
    typeUrl: "/nemo_network.ratelimit.PendingSendPacket",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePendingSendPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
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
        var message = createBasePendingSendPacket();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePendingSendPacket();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.sequence = message.sequence !== BigInt(0) ? ((_a = message.sequence) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PendingSendPacket.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PendingSendPacket.decode(message.value);
    },
    toProto: function (message) {
        return exports.PendingSendPacket.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.PendingSendPacket",
            value: exports.PendingSendPacket.encode(message).finish()
        };
    }
};
