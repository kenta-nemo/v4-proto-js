"use strict";
exports.__esModule = true;
exports.Params = void 0;
var duration_1 = require("../../google/protobuf/duration");
var binary_1 = require("../../binary");
function createBaseParams() {
    return {
        windowDuration: duration_1.Duration.fromPartial({})
    };
}
exports.Params = {
    typeUrl: "/nemo_network.stats.Params",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.windowDuration !== undefined) {
            duration_1.Duration.encode(message.windowDuration, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.windowDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseParams();
        message.windowDuration = object.windowDuration !== undefined && object.windowDuration !== null ? duration_1.Duration.fromPartial(object.windowDuration) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseParams();
        if (object.window_duration !== undefined && object.window_duration !== null) {
            message.windowDuration = duration_1.Duration.fromAmino(object.window_duration);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.window_duration = message.windowDuration ? duration_1.Duration.toAmino(message.windowDuration) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Params.decode(message.value);
    },
    toProto: function (message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
