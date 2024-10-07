"use strict";
exports.__esModule = true;
exports.AuxSignerData = exports.Tip = exports.Fee = exports.ModeInfo_Multi = exports.ModeInfo_Single = exports.ModeInfo = exports.SignerInfo = exports.AuthInfo = exports.TxBody = exports.SignDocDirectAux = exports.SignDoc = exports.TxRaw = exports.Tx = void 0;
var any_1 = require("../../../google/protobuf/any");
var multisig_1 = require("../../crypto/multisig/v1beta1/multisig");
var coin_1 = require("../../base/v1beta1/coin");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBaseTx() {
    return {
        body: undefined,
        authInfo: undefined,
        signatures: []
    };
}
exports.Tx = {
    typeUrl: "/cosmos.tx.v1beta1.Tx",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.body !== undefined) {
            exports.TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.authInfo !== undefined) {
            exports.AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = exports.TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authInfo = exports.AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
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
        var message = createBaseTx();
        message.body = object.body !== undefined && object.body !== null ? exports.TxBody.fromPartial(object.body) : undefined;
        message.authInfo = object.authInfo !== undefined && object.authInfo !== null ? exports.AuthInfo.fromPartial(object.authInfo) : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseTx();
        if (object.body !== undefined && object.body !== null) {
            message.body = exports.TxBody.fromAmino(object.body);
        }
        if (object.auth_info !== undefined && object.auth_info !== null) {
            message.authInfo = exports.AuthInfo.fromAmino(object.auth_info);
        }
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return (0, helpers_1.bytesFromBase64)(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.body = message.body ? exports.TxBody.toAmino(message.body) : undefined;
        obj.auth_info = message.authInfo ? exports.AuthInfo.toAmino(message.authInfo) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) { return (0, helpers_1.base64FromBytes)(e); });
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Tx.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Tx",
            value: exports.Tx.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Tx.decode(message.value);
    },
    toProto: function (message) {
        return exports.Tx.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tx",
            value: exports.Tx.encode(message).finish()
        };
    }
};
function createBaseTxRaw() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        signatures: []
    };
}
exports.TxRaw = {
    typeUrl: "/cosmos.tx.v1beta1.TxRaw",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxRaw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
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
        var _a, _b, _c;
        var message = createBaseTxRaw();
        message.bodyBytes = (_a = object.bodyBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.authInfoBytes = (_b = object.authInfoBytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.signatures = ((_c = object.signatures) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseTxRaw();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = (0, helpers_1.bytesFromBase64)(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.authInfoBytes = (0, helpers_1.bytesFromBase64)(object.auth_info_bytes);
        }
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return (0, helpers_1.bytesFromBase64)(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.body_bytes = message.bodyBytes ? (0, helpers_1.base64FromBytes)(message.bodyBytes) : undefined;
        obj.auth_info_bytes = message.authInfoBytes ? (0, helpers_1.base64FromBytes)(message.authInfoBytes) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) { return (0, helpers_1.base64FromBytes)(e); });
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TxRaw.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/TxRaw",
            value: exports.TxRaw.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.TxRaw.decode(message.value);
    },
    toProto: function (message) {
        return exports.TxRaw.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxRaw",
            value: exports.TxRaw.encode(message).finish()
        };
    }
};
function createBaseSignDoc() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        chainId: "",
        accountNumber: BigInt(0)
    };
}
exports.SignDoc = {
    typeUrl: "/cosmos.tx.v1beta1.SignDoc",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignDoc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
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
        var message = createBaseSignDoc();
        message.bodyBytes = (_a = object.bodyBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.authInfoBytes = (_b = object.authInfoBytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.chainId = (_c = object.chainId) !== null && _c !== void 0 ? _c : "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSignDoc();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = (0, helpers_1.bytesFromBase64)(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.authInfoBytes = (0, helpers_1.bytesFromBase64)(object.auth_info_bytes);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.body_bytes = message.bodyBytes ? (0, helpers_1.base64FromBytes)(message.bodyBytes) : undefined;
        obj.auth_info_bytes = message.authInfoBytes ? (0, helpers_1.base64FromBytes)(message.authInfoBytes) : undefined;
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.account_number = message.accountNumber !== BigInt(0) ? ((_a = message.accountNumber) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SignDoc.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SignDoc",
            value: exports.SignDoc.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SignDoc.decode(message.value);
    },
    toProto: function (message) {
        return exports.SignDoc.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDoc",
            value: exports.SignDoc.encode(message).finish()
        };
    }
};
function createBaseSignDocDirectAux() {
    return {
        bodyBytes: new Uint8Array(),
        publicKey: undefined,
        chainId: "",
        accountNumber: BigInt(0),
        sequence: BigInt(0),
        tip: undefined
    };
}
exports.SignDocDirectAux = {
    typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(40).uint64(message.sequence);
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
                    break;
                case 5:
                    message.sequence = reader.uint64();
                    break;
                case 6:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
        var message = createBaseSignDocDirectAux();
        message.bodyBytes = (_a = object.bodyBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.chainId = (_b = object.chainId) !== null && _b !== void 0 ? _b : "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSignDocDirectAux();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = (0, helpers_1.bytesFromBase64)(object.body_bytes);
        }
        if (object.public_key !== undefined && object.public_key !== null) {
            message.publicKey = any_1.Any.fromAmino(object.public_key);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.tip !== undefined && object.tip !== null) {
            message.tip = exports.Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.body_bytes = message.bodyBytes ? (0, helpers_1.base64FromBytes)(message.bodyBytes) : undefined;
        obj.public_key = message.publicKey ? any_1.Any.toAmino(message.publicKey) : undefined;
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.account_number = message.accountNumber !== BigInt(0) ? ((_a = message.accountNumber) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.sequence = message.sequence !== BigInt(0) ? ((_b = message.sequence) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.tip = message.tip ? exports.Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SignDocDirectAux.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SignDocDirectAux",
            value: exports.SignDocDirectAux.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SignDocDirectAux.decode(message.value);
    },
    toProto: function (message) {
        return exports.SignDocDirectAux.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
            value: exports.SignDocDirectAux.encode(message).finish()
        };
    }
};
function createBaseTxBody() {
    return {
        messages: [],
        memo: "",
        timeoutHeight: BigInt(0),
        extensionOptions: [],
        nonCriticalExtensionOptions: []
    };
}
exports.TxBody = {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (message.timeoutHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.timeoutHeight);
        }
        for (var _b = 0, _c = message.extensionOptions; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (var _d = 0, _e = message.nonCriticalExtensionOptions; _d < _e.length; _d++) {
            var v = _e[_d];
            any_1.Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 1023:
                    message.extensionOptions.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.nonCriticalExtensionOptions.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTxBody();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.memo = (_b = object.memo) !== null && _b !== void 0 ? _b : "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
        message.extensionOptions = ((_c = object.extensionOptions) === null || _c === void 0 ? void 0 : _c.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.nonCriticalExtensionOptions = ((_d = object.nonCriticalExtensionOptions) === null || _d === void 0 ? void 0 : _d.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c;
        var message = createBaseTxBody();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromAmino(e); })) || [];
        if (object.memo !== undefined && object.memo !== null) {
            message.memo = object.memo;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = BigInt(object.timeout_height);
        }
        message.extensionOptions = ((_b = object.extension_options) === null || _b === void 0 ? void 0 : _b.map(function (e) { return any_1.Any.fromAmino(e); })) || [];
        message.nonCriticalExtensionOptions = ((_c = object.non_critical_extension_options) === null || _c === void 0 ? void 0 : _c.map(function (e) { return any_1.Any.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(function (e) { return e ? any_1.Any.toAmino(e) : undefined; });
        }
        else {
            obj.messages = message.messages;
        }
        obj.memo = message.memo === "" ? undefined : message.memo;
        obj.timeout_height = message.timeoutHeight !== BigInt(0) ? ((_a = message.timeoutHeight) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        if (message.extensionOptions) {
            obj.extension_options = message.extensionOptions.map(function (e) { return e ? any_1.Any.toAmino(e) : undefined; });
        }
        else {
            obj.extension_options = message.extensionOptions;
        }
        if (message.nonCriticalExtensionOptions) {
            obj.non_critical_extension_options = message.nonCriticalExtensionOptions.map(function (e) { return e ? any_1.Any.toAmino(e) : undefined; });
        }
        else {
            obj.non_critical_extension_options = message.nonCriticalExtensionOptions;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TxBody.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/TxBody",
            value: exports.TxBody.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.TxBody.decode(message.value);
    },
    toProto: function (message) {
        return exports.TxBody.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: exports.TxBody.encode(message).finish()
        };
    }
};
function createBaseAuthInfo() {
    return {
        signerInfos: [],
        fee: undefined,
        tip: undefined
    };
}
exports.AuthInfo = {
    typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.signerInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuthInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signerInfos.push(exports.SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
        var message = createBaseAuthInfo();
        message.signerInfos = ((_a = object.signerInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SignerInfo.fromPartial(e); })) || [];
        message.fee = object.fee !== undefined && object.fee !== null ? exports.Fee.fromPartial(object.fee) : undefined;
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseAuthInfo();
        message.signerInfos = ((_a = object.signer_infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SignerInfo.fromAmino(e); })) || [];
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = exports.Fee.fromAmino(object.fee);
        }
        if (object.tip !== undefined && object.tip !== null) {
            message.tip = exports.Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.signerInfos) {
            obj.signer_infos = message.signerInfos.map(function (e) { return e ? exports.SignerInfo.toAmino(e) : undefined; });
        }
        else {
            obj.signer_infos = message.signerInfos;
        }
        obj.fee = message.fee ? exports.Fee.toAmino(message.fee) : undefined;
        obj.tip = message.tip ? exports.Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AuthInfo.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/AuthInfo",
            value: exports.AuthInfo.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.AuthInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.AuthInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
            value: exports.AuthInfo.encode(message).finish()
        };
    }
};
function createBaseSignerInfo() {
    return {
        publicKey: undefined,
        modeInfo: undefined,
        sequence: BigInt(0)
    };
}
exports.SignerInfo = {
    typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.modeInfo !== undefined) {
            exports.ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfo = exports.ModeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseSignerInfo();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? exports.ModeInfo.fromPartial(object.modeInfo) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSignerInfo();
        if (object.public_key !== undefined && object.public_key !== null) {
            message.publicKey = any_1.Any.fromAmino(object.public_key);
        }
        if (object.mode_info !== undefined && object.mode_info !== null) {
            message.modeInfo = exports.ModeInfo.fromAmino(object.mode_info);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.public_key = message.publicKey ? any_1.Any.toAmino(message.publicKey) : undefined;
        obj.mode_info = message.modeInfo ? exports.ModeInfo.toAmino(message.modeInfo) : undefined;
        obj.sequence = message.sequence !== BigInt(0) ? ((_a = message.sequence) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SignerInfo.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SignerInfo",
            value: exports.SignerInfo.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SignerInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.SignerInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
            value: exports.SignerInfo.encode(message).finish()
        };
    }
};
function createBaseModeInfo() {
    return {
        single: undefined,
        multi: undefined
    };
}
exports.ModeInfo = {
    typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.single !== undefined) {
            exports.ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.ModeInfo_Multi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseModeInfo();
        message.single = object.single !== undefined && object.single !== null ? exports.ModeInfo_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.ModeInfo_Multi.fromPartial(object.multi) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseModeInfo();
        if (object.single !== undefined && object.single !== null) {
            message.single = exports.ModeInfo_Single.fromAmino(object.single);
        }
        if (object.multi !== undefined && object.multi !== null) {
            message.multi = exports.ModeInfo_Multi.fromAmino(object.multi);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.single = message.single ? exports.ModeInfo_Single.toAmino(message.single) : undefined;
        obj.multi = message.multi ? exports.ModeInfo_Multi.toAmino(message.multi) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ModeInfo.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ModeInfo",
            value: exports.ModeInfo.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ModeInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.ModeInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
            value: exports.ModeInfo.encode(message).finish()
        };
    }
};
function createBaseModeInfo_Single() {
    return {
        mode: 0
    };
}
exports.ModeInfo_Single = {
    typeUrl: "/cosmos.tx.v1beta1.Single",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
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
        var message = createBaseModeInfo_Single();
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseModeInfo_Single();
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.mode = message.mode === 0 ? undefined : message.mode;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ModeInfo_Single.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Single",
            value: exports.ModeInfo_Single.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ModeInfo_Single.decode(message.value);
    },
    toProto: function (message) {
        return exports.ModeInfo_Single.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Single",
            value: exports.ModeInfo_Single.encode(message).finish()
        };
    }
};
function createBaseModeInfo_Multi() {
    return {
        bitarray: undefined,
        modeInfos: []
    };
}
exports.ModeInfo_Multi = {
    typeUrl: "/cosmos.tx.v1beta1.Multi",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.modeInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfos.push(exports.ModeInfo.decode(reader, reader.uint32()));
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
        var message = createBaseModeInfo_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? multisig_1.CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.modeInfos = ((_a = object.modeInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModeInfo.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseModeInfo_Multi();
        if (object.bitarray !== undefined && object.bitarray !== null) {
            message.bitarray = multisig_1.CompactBitArray.fromAmino(object.bitarray);
        }
        message.modeInfos = ((_a = object.mode_infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModeInfo.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toAmino(message.bitarray) : undefined;
        if (message.modeInfos) {
            obj.mode_infos = message.modeInfos.map(function (e) { return e ? exports.ModeInfo.toAmino(e) : undefined; });
        }
        else {
            obj.mode_infos = message.modeInfos;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ModeInfo_Multi.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Multi",
            value: exports.ModeInfo_Multi.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ModeInfo_Multi.decode(message.value);
    },
    toProto: function (message) {
        return exports.ModeInfo_Multi.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Multi",
            value: exports.ModeInfo_Multi.encode(message).finish()
        };
    }
};
function createBaseFee() {
    return {
        amount: [],
        gasLimit: BigInt(0),
        payer: "",
        granter: ""
    };
}
exports.Fee = {
    typeUrl: "/cosmos.tx.v1beta1.Fee",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.gasLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFee();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gasLimit = reader.uint64();
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
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
        var message = createBaseFee();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
        message.payer = (_b = object.payer) !== null && _b !== void 0 ? _b : "";
        message.granter = (_c = object.granter) !== null && _c !== void 0 ? _c : "";
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseFee();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.gas_limit !== undefined && object.gas_limit !== null) {
            message.gasLimit = BigInt(object.gas_limit);
        }
        if (object.payer !== undefined && object.payer !== null) {
            message.payer = object.payer;
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        obj.gas_limit = message.gasLimit !== BigInt(0) ? ((_a = message.gasLimit) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.payer = message.payer === "" ? undefined : message.payer;
        obj.granter = message.granter === "" ? undefined : message.granter;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Fee.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Fee",
            value: exports.Fee.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Fee.decode(message.value);
    },
    toProto: function (message) {
        return exports.Fee.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Fee",
            value: exports.Fee.encode(message).finish()
        };
    }
};
function createBaseTip() {
    return {
        amount: [],
        tipper: ""
    };
}
exports.Tip = {
    typeUrl: "/cosmos.tx.v1beta1.Tip",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== "") {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTip();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tipper = reader.string();
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
        var message = createBaseTip();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.tipper = (_b = object.tipper) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseTip();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.tipper !== undefined && object.tipper !== null) {
            message.tipper = object.tipper;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        obj.tipper = message.tipper === "" ? undefined : message.tipper;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Tip.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Tip",
            value: exports.Tip.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Tip.decode(message.value);
    },
    toProto: function (message) {
        return exports.Tip.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tip",
            value: exports.Tip.encode(message).finish()
        };
    }
};
function createBaseAuxSignerData() {
    return {
        address: "",
        signDoc: undefined,
        mode: 0,
        sig: new Uint8Array()
    };
}
exports.AuxSignerData = {
    typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.signDoc !== undefined) {
            exports.SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        if (message.sig.length !== 0) {
            writer.uint32(34).bytes(message.sig);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuxSignerData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.signDoc = exports.SignDocDirectAux.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mode = reader.int32();
                    break;
                case 4:
                    message.sig = reader.bytes();
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
        var message = createBaseAuxSignerData();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? exports.SignDocDirectAux.fromPartial(object.signDoc) : undefined;
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : 0;
        message.sig = (_c = object.sig) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAuxSignerData();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.sign_doc !== undefined && object.sign_doc !== null) {
            message.signDoc = exports.SignDocDirectAux.fromAmino(object.sign_doc);
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        if (object.sig !== undefined && object.sig !== null) {
            message.sig = (0, helpers_1.bytesFromBase64)(object.sig);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.sign_doc = message.signDoc ? exports.SignDocDirectAux.toAmino(message.signDoc) : undefined;
        obj.mode = message.mode === 0 ? undefined : message.mode;
        obj.sig = message.sig ? (0, helpers_1.base64FromBytes)(message.sig) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AuxSignerData.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/AuxSignerData",
            value: exports.AuxSignerData.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.AuxSignerData.decode(message.value);
    },
    toProto: function (message) {
        return exports.AuxSignerData.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
            value: exports.AuxSignerData.encode(message).finish()
        };
    }
};
