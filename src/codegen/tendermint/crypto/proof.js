"use strict";
exports.__esModule = true;
exports.ProofOps = exports.ProofOp = exports.DominoOp = exports.ValueOp = exports.Proof = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseProof() {
    return {
        total: BigInt(0),
        index: BigInt(0),
        leafHash: new Uint8Array(),
        aunts: []
    };
}
exports.Proof = {
    typeUrl: "/tendermint.crypto.Proof",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.total !== BigInt(0)) {
            writer.uint32(8).int64(message.total);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(16).int64(message.index);
        }
        if (message.leafHash.length !== 0) {
            writer.uint32(26).bytes(message.leafHash);
        }
        for (var _i = 0, _a = message.aunts; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProof();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.int64();
                    break;
                case 2:
                    message.index = reader.int64();
                    break;
                case 3:
                    message.leafHash = reader.bytes();
                    break;
                case 4:
                    message.aunts.push(reader.bytes());
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
        var message = createBaseProof();
        message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.leafHash = (_a = object.leafHash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.aunts = ((_b = object.aunts) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseProof();
        if (object.total !== undefined && object.total !== null) {
            message.total = BigInt(object.total);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.leaf_hash !== undefined && object.leaf_hash !== null) {
            message.leafHash = (0, helpers_1.bytesFromBase64)(object.leaf_hash);
        }
        message.aunts = ((_a = object.aunts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return (0, helpers_1.bytesFromBase64)(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.total = message.total !== BigInt(0) ? ((_a = message.total) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.index = message.index !== BigInt(0) ? ((_b = message.index) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.leaf_hash = message.leafHash ? (0, helpers_1.base64FromBytes)(message.leafHash) : undefined;
        if (message.aunts) {
            obj.aunts = message.aunts.map(function (e) { return (0, helpers_1.base64FromBytes)(e); });
        }
        else {
            obj.aunts = message.aunts;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Proof.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Proof.decode(message.value);
    },
    toProto: function (message) {
        return exports.Proof.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.crypto.Proof",
            value: exports.Proof.encode(message).finish()
        };
    }
};
function createBaseValueOp() {
    return {
        key: new Uint8Array(),
        proof: undefined
    };
}
exports.ValueOp = {
    typeUrl: "/tendermint.crypto.ValueOp",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.proof !== undefined) {
            exports.Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValueOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.proof = exports.Proof.decode(reader, reader.uint32());
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
        var message = createBaseValueOp();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? exports.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseValueOp();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = exports.Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.proof = message.proof ? exports.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ValueOp.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ValueOp.decode(message.value);
    },
    toProto: function (message) {
        return exports.ValueOp.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.crypto.ValueOp",
            value: exports.ValueOp.encode(message).finish()
        };
    }
};
function createBaseDominoOp() {
    return {
        key: "",
        input: "",
        output: ""
    };
}
exports.DominoOp = {
    typeUrl: "/tendermint.crypto.DominoOp",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.input !== "") {
            writer.uint32(18).string(message.input);
        }
        if (message.output !== "") {
            writer.uint32(26).string(message.output);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDominoOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.input = reader.string();
                    break;
                case 3:
                    message.output = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDominoOp();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.input = (_b = object.input) !== null && _b !== void 0 ? _b : "";
        message.output = (_c = object.output) !== null && _c !== void 0 ? _c : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDominoOp();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = object.input;
        }
        if (object.output !== undefined && object.output !== null) {
            message.output = object.output;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.key = message.key === "" ? undefined : message.key;
        obj.input = message.input === "" ? undefined : message.input;
        obj.output = message.output === "" ? undefined : message.output;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DominoOp.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DominoOp.decode(message.value);
    },
    toProto: function (message) {
        return exports.DominoOp.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.crypto.DominoOp",
            value: exports.DominoOp.encode(message).finish()
        };
    }
};
function createBaseProofOp() {
    return {
        type: "",
        key: new Uint8Array(),
        data: new Uint8Array()
    };
}
exports.ProofOp = {
    typeUrl: "/tendermint.crypto.ProofOp",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProofOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseProofOp();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.key = (_b = object.key) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseProofOp();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.type = message.type === "" ? undefined : message.type;
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ProofOp.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ProofOp.decode(message.value);
    },
    toProto: function (message) {
        return exports.ProofOp.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.crypto.ProofOp",
            value: exports.ProofOp.encode(message).finish()
        };
    }
};
function createBaseProofOps() {
    return {
        ops: []
    };
}
exports.ProofOps = {
    typeUrl: "/tendermint.crypto.ProofOps",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.ops; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProofOps();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ops.push(exports.ProofOp.decode(reader, reader.uint32()));
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
        var message = createBaseProofOps();
        message.ops = ((_a = object.ops) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ProofOp.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseProofOps();
        message.ops = ((_a = object.ops) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ProofOp.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(function (e) { return e ? exports.ProofOp.toAmino(e) : undefined; });
        }
        else {
            obj.ops = message.ops;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ProofOps.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ProofOps.decode(message.value);
    },
    toProto: function (message) {
        return exports.ProofOps.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.crypto.ProofOps",
            value: exports.ProofOps.encode(message).finish()
        };
    }
};
