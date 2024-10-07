"use strict";
exports.__esModule = true;
exports.PrivKey = exports.PubKey = void 0;
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBasePubKey() {
    return {
        key: new Uint8Array()
    };
}
exports.PubKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePubKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
        var message = createBasePubKey();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePubKey();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PubKey.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "tendermint/PubKeySecp256k1",
            value: exports.PubKey.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.PubKey.decode(message.value);
    },
    toProto: function (message) {
        return exports.PubKey.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: exports.PubKey.encode(message).finish()
        };
    }
};
function createBasePrivKey() {
    return {
        key: new Uint8Array()
    };
}
exports.PrivKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePrivKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
        var message = createBasePrivKey();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePrivKey();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PrivKey.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "tendermint/PrivKeySecp256k1",
            value: exports.PrivKey.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.PrivKey.decode(message.value);
    },
    toProto: function (message) {
        return exports.PrivKey.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
            value: exports.PrivKey.encode(message).finish()
        };
    }
};
