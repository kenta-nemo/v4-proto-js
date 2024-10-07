"use strict";
exports.__esModule = true;
exports.BlockMessageIds = void 0;
var binary_1 = require("../../binary");
function createBaseBlockMessageIds() {
    return {
        ids: []
    };
}
exports.BlockMessageIds = {
    typeUrl: "/nemo_network.delaymsg.BlockMessageIds",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.ids; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockMessageIds();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(reader.uint32());
                        }
                    }
                    else {
                        message.ids.push(reader.uint32());
                    }
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
        var message = createBaseBlockMessageIds();
        message.ids = ((_a = object.ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseBlockMessageIds();
        message.ids = ((_a = object.ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(function (e) { return e; });
        }
        else {
            obj.ids = message.ids;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BlockMessageIds.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.BlockMessageIds.decode(message.value);
    },
    toProto: function (message) {
        return exports.BlockMessageIds.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.BlockMessageIds",
            value: exports.BlockMessageIds.encode(message).finish()
        };
    }
};
