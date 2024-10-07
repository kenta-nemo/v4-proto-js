"use strict";
exports.__esModule = true;
exports.Timestamp = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseTimestamp() {
    return {
        seconds: BigInt(0),
        nanos: 0
    };
}
exports.Timestamp = {
    typeUrl: "/google.protobuf.Timestamp",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.seconds !== BigInt(0)) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTimestamp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.int64();
                    break;
                case 2:
                    message.nanos = reader.int32();
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
        var message = createBaseTimestamp();
        message.seconds = object.seconds !== undefined && object.seconds !== null ? BigInt(object.seconds.toString()) : BigInt(0);
        message.nanos = (_a = object.nanos) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        return (0, helpers_1.fromJsonTimestamp)(object);
    },
    toAmino: function (message) {
        return (0, helpers_1.fromTimestamp)(message).toISOString().replace(/\.\d+Z$/, "Z");
    },
    fromAminoMsg: function (object) {
        return exports.Timestamp.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Timestamp.decode(message.value);
    },
    toProto: function (message) {
        return exports.Timestamp.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.Timestamp",
            value: exports.Timestamp.encode(message).finish()
        };
    }
};
