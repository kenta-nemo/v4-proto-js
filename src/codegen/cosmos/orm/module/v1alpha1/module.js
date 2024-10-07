"use strict";
exports.__esModule = true;
exports.Module = void 0;
var binary_1 = require("../../../../binary");
function createBaseModule() {
    return {};
}
exports.Module = {
    typeUrl: "/cosmos.orm.module.v1alpha1.Module",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModule();
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
        var message = createBaseModule();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseModule();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Module.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Module",
            value: exports.Module.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Module.decode(message.value);
    },
    toProto: function (message) {
        return exports.Module.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.module.v1alpha1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
