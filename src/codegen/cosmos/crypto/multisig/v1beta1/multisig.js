"use strict";
exports.__esModule = true;
exports.CompactBitArray = exports.MultiSignature = void 0;
var binary_1 = require("../../../../binary");
var helpers_1 = require("../../../../helpers");
function createBaseMultiSignature() {
    return {
        signatures: []
    };
}
exports.MultiSignature = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMultiSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
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
        var message = createBaseMultiSignature();
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMultiSignature();
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return (0, helpers_1.bytesFromBase64)(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) { return (0, helpers_1.base64FromBytes)(e); });
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MultiSignature.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MultiSignature",
            value: exports.MultiSignature.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MultiSignature.decode(message.value);
    },
    toProto: function (message) {
        return exports.MultiSignature.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
            value: exports.MultiSignature.encode(message).finish()
        };
    }
};
function createBaseCompactBitArray() {
    return {
        extraBitsStored: 0,
        elems: new Uint8Array()
    };
}
exports.CompactBitArray = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.extraBitsStored !== 0) {
            writer.uint32(8).uint32(message.extraBitsStored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCompactBitArray();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extraBitsStored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
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
        var message = createBaseCompactBitArray();
        message.extraBitsStored = (_a = object.extraBitsStored) !== null && _a !== void 0 ? _a : 0;
        message.elems = (_b = object.elems) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseCompactBitArray();
        if (object.extra_bits_stored !== undefined && object.extra_bits_stored !== null) {
            message.extraBitsStored = object.extra_bits_stored;
        }
        if (object.elems !== undefined && object.elems !== null) {
            message.elems = (0, helpers_1.bytesFromBase64)(object.elems);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.extra_bits_stored = message.extraBitsStored === 0 ? undefined : message.extraBitsStored;
        obj.elems = message.elems ? (0, helpers_1.base64FromBytes)(message.elems) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.CompactBitArray.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/CompactBitArray",
            value: exports.CompactBitArray.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.CompactBitArray.decode(message.value);
    },
    toProto: function (message) {
        return exports.CompactBitArray.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
            value: exports.CompactBitArray.encode(message).finish()
        };
    }
};
