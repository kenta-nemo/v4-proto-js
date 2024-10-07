"use strict";
exports.__esModule = true;
exports.BitArray = void 0;
var binary_1 = require("../../../binary");
function createBaseBitArray() {
    return {
        bits: BigInt(0),
        elems: []
    };
}
exports.BitArray = {
    typeUrl: "/tendermint.libs.bits.BitArray",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.bits !== BigInt(0)) {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (var _i = 0, _a = message.elems; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBitArray();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bits = reader.int64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(reader.uint64());
                        }
                    }
                    else {
                        message.elems.push(reader.uint64());
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
        var message = createBaseBitArray();
        message.bits = object.bits !== undefined && object.bits !== null ? BigInt(object.bits.toString()) : BigInt(0);
        message.elems = ((_a = object.elems) === null || _a === void 0 ? void 0 : _a.map(function (e) { return BigInt(e.toString()); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseBitArray();
        if (object.bits !== undefined && object.bits !== null) {
            message.bits = BigInt(object.bits);
        }
        message.elems = ((_a = object.elems) === null || _a === void 0 ? void 0 : _a.map(function (e) { return BigInt(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.bits = message.bits !== BigInt(0) ? ((_a = message.bits) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        if (message.elems) {
            obj.elems = message.elems.map(function (e) { return e.toString(); });
        }
        else {
            obj.elems = message.elems;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BitArray.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.BitArray.decode(message.value);
    },
    toProto: function (message) {
        return exports.BitArray.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.libs.bits.BitArray",
            value: exports.BitArray.encode(message).finish()
        };
    }
};
