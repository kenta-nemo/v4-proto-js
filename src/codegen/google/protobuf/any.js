"use strict";
exports.__esModule = true;
exports.Any = void 0;
var binary_1 = require("../../binary");
function createBaseAny() {
    return {
        $typeUrl: "/google.protobuf.Any",
        typeUrl: "",
        value: new Uint8Array()
    };
}
exports.Any = {
    typeUrl: "/google.protobuf.Any",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.typeUrl !== "") {
            writer.uint32(10).string(message.typeUrl);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAny();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typeUrl = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes();
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
        var message = createBaseAny();
        message.typeUrl = (_a = object.typeUrl) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        return {
            typeUrl: object.type,
            value: object.value
        };
    },
    toAmino: function (message) {
        var obj = {};
        obj.type = message.typeUrl;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Any.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Any.decode(message.value);
    },
    toProto: function (message) {
        return exports.Any.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.Any",
            value: exports.Any.encode(message).finish()
        };
    }
};
