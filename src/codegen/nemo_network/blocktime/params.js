"use strict";
exports.__esModule = true;
exports.DowntimeParams = void 0;
var duration_1 = require("../../google/protobuf/duration");
var binary_1 = require("../../binary");
function createBaseDowntimeParams() {
    return {
        durations: []
    };
}
exports.DowntimeParams = {
    typeUrl: "/nemo_network.blocktime.DowntimeParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.durations; _i < _a.length; _i++) {
            var v = _a[_i];
            duration_1.Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDowntimeParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.durations.push(duration_1.Duration.decode(reader, reader.uint32()));
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
        var message = createBaseDowntimeParams();
        message.durations = ((_a = object.durations) === null || _a === void 0 ? void 0 : _a.map(function (e) { return duration_1.Duration.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseDowntimeParams();
        message.durations = ((_a = object.durations) === null || _a === void 0 ? void 0 : _a.map(function (e) { return duration_1.Duration.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.durations) {
            obj.durations = message.durations.map(function (e) { return e ? duration_1.Duration.toAmino(e) : undefined; });
        }
        else {
            obj.durations = message.durations;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DowntimeParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DowntimeParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.DowntimeParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.DowntimeParams",
            value: exports.DowntimeParams.encode(message).finish()
        };
    }
};
