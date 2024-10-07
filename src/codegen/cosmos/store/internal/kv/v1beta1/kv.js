"use strict";
exports.__esModule = true;
exports.Pair = exports.Pairs = void 0;
var binary_1 = require("../../../../../binary");
var helpers_1 = require("../../../../../helpers");
function createBasePairs() {
    return {
        pairs: []
    };
}
exports.Pairs = {
    typeUrl: "/cosmos.store.internal.kv.v1beta1.Pairs",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.pairs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Pair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePairs();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(exports.Pair.decode(reader, reader.uint32()));
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
        var message = createBasePairs();
        message.pairs = ((_a = object.pairs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Pair.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBasePairs();
        message.pairs = ((_a = object.pairs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Pair.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(function (e) { return e ? exports.Pair.toAmino(e) : undefined; });
        }
        else {
            obj.pairs = message.pairs;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Pairs.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Pairs",
            value: exports.Pairs.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Pairs.decode(message.value);
    },
    toProto: function (message) {
        return exports.Pairs.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.internal.kv.v1beta1.Pairs",
            value: exports.Pairs.encode(message).finish()
        };
    }
};
function createBasePair() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.Pair = {
    typeUrl: "/cosmos.store.internal.kv.v1beta1.Pair",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
        var message = createBasePair();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePair();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Pair.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Pair",
            value: exports.Pair.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Pair.decode(message.value);
    },
    toProto: function (message) {
        return exports.Pair.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.internal.kv.v1beta1.Pair",
            value: exports.Pair.encode(message).finish()
        };
    }
};
