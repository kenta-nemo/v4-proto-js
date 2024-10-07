"use strict";
exports.__esModule = true;
exports.BlockMetadata = exports.StoreKVPair = void 0;
var types_1 = require("../../../tendermint/abci/types");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBaseStoreKVPair() {
    return {
        storeKey: "",
        "delete": false,
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.StoreKVPair = {
    typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.storeKey !== "") {
            writer.uint32(10).string(message.storeKey);
        }
        if (message["delete"] === true) {
            writer.uint32(16).bool(message["delete"]);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStoreKVPair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeKey = reader.string();
                    break;
                case 2:
                    message["delete"] = reader.bool();
                    break;
                case 3:
                    message.key = reader.bytes();
                    break;
                case 4:
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
        var _a, _b, _c, _d;
        var message = createBaseStoreKVPair();
        message.storeKey = (_a = object.storeKey) !== null && _a !== void 0 ? _a : "";
        message["delete"] = (_b = object["delete"]) !== null && _b !== void 0 ? _b : false;
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.value = (_d = object.value) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStoreKVPair();
        if (object.store_key !== undefined && object.store_key !== null) {
            message.storeKey = object.store_key;
        }
        if (object["delete"] !== undefined && object["delete"] !== null) {
            message["delete"] = object["delete"];
        }
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
        obj.store_key = message.storeKey === "" ? undefined : message.storeKey;
        obj["delete"] = message["delete"] === false ? undefined : message["delete"];
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StoreKVPair.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/StoreKVPair",
            value: exports.StoreKVPair.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.StoreKVPair.decode(message.value);
    },
    toProto: function (message) {
        return exports.StoreKVPair.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
            value: exports.StoreKVPair.encode(message).finish()
        };
    }
};
function createBaseBlockMetadata() {
    return {
        responseCommit: undefined,
        requestFinalizeBlock: undefined,
        responseFinalizeBlock: undefined
    };
}
exports.BlockMetadata = {
    typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.responseCommit !== undefined) {
            types_1.ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
        }
        if (message.requestFinalizeBlock !== undefined) {
            types_1.RequestFinalizeBlock.encode(message.requestFinalizeBlock, writer.uint32(58).fork()).ldelim();
        }
        if (message.responseFinalizeBlock !== undefined) {
            types_1.ResponseFinalizeBlock.encode(message.responseFinalizeBlock, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.responseCommit = types_1.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.requestFinalizeBlock = types_1.RequestFinalizeBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.responseFinalizeBlock = types_1.ResponseFinalizeBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseBlockMetadata();
        message.responseCommit = object.responseCommit !== undefined && object.responseCommit !== null ? types_1.ResponseCommit.fromPartial(object.responseCommit) : undefined;
        message.requestFinalizeBlock = object.requestFinalizeBlock !== undefined && object.requestFinalizeBlock !== null ? types_1.RequestFinalizeBlock.fromPartial(object.requestFinalizeBlock) : undefined;
        message.responseFinalizeBlock = object.responseFinalizeBlock !== undefined && object.responseFinalizeBlock !== null ? types_1.ResponseFinalizeBlock.fromPartial(object.responseFinalizeBlock) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseBlockMetadata();
        if (object.response_commit !== undefined && object.response_commit !== null) {
            message.responseCommit = types_1.ResponseCommit.fromAmino(object.response_commit);
        }
        if (object.request_finalize_block !== undefined && object.request_finalize_block !== null) {
            message.requestFinalizeBlock = types_1.RequestFinalizeBlock.fromAmino(object.request_finalize_block);
        }
        if (object.response_finalize_block !== undefined && object.response_finalize_block !== null) {
            message.responseFinalizeBlock = types_1.ResponseFinalizeBlock.fromAmino(object.response_finalize_block);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.response_commit = message.responseCommit ? types_1.ResponseCommit.toAmino(message.responseCommit) : undefined;
        obj.request_finalize_block = message.requestFinalizeBlock ? types_1.RequestFinalizeBlock.toAmino(message.requestFinalizeBlock) : undefined;
        obj.response_finalize_block = message.responseFinalizeBlock ? types_1.ResponseFinalizeBlock.toAmino(message.responseFinalizeBlock) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BlockMetadata.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/BlockMetadata",
            value: exports.BlockMetadata.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.BlockMetadata.decode(message.value);
    },
    toProto: function (message) {
        return exports.BlockMetadata.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
            value: exports.BlockMetadata.encode(message).finish()
        };
    }
};
