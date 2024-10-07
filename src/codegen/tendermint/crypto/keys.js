"use strict";
exports.__esModule = true;
exports.PublicKey = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBasePublicKey() {
    return {
        ed25519: undefined,
        secp256k1: undefined
    };
}
exports.PublicKey = {
    typeUrl: "/tendermint.crypto.PublicKey",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.ed25519 !== undefined) {
            writer.uint32(10).bytes(message.ed25519);
        }
        if (message.secp256k1 !== undefined) {
            writer.uint32(18).bytes(message.secp256k1);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                case 2:
                    message.secp256k1 = reader.bytes();
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
        var message = createBasePublicKey();
        message.ed25519 = (_a = object.ed25519) !== null && _a !== void 0 ? _a : undefined;
        message.secp256k1 = (_b = object.secp256k1) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePublicKey();
        if (object.ed25519 !== undefined && object.ed25519 !== null) {
            message.ed25519 = (0, helpers_1.bytesFromBase64)(object.ed25519);
        }
        if (object.secp256k1 !== undefined && object.secp256k1 !== null) {
            message.secp256k1 = (0, helpers_1.bytesFromBase64)(object.secp256k1);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.ed25519 = message.ed25519 ? (0, helpers_1.base64FromBytes)(message.ed25519) : undefined;
        obj.secp256k1 = message.secp256k1 ? (0, helpers_1.base64FromBytes)(message.secp256k1) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PublicKey.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PublicKey.decode(message.value);
    },
    toProto: function (message) {
        return exports.PublicKey.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.crypto.PublicKey",
            value: exports.PublicKey.encode(message).finish()
        };
    }
};
