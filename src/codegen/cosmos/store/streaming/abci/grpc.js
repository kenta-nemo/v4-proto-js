"use strict";
exports.__esModule = true;
exports.ListenCommitResponse = exports.ListenCommitRequest = exports.ListenFinalizeBlockResponse = exports.ListenFinalizeBlockRequest = void 0;
var types_1 = require("../../../../tendermint/abci/types");
var listening_1 = require("../../v1beta1/listening");
var binary_1 = require("../../../../binary");
function createBaseListenFinalizeBlockRequest() {
    return {
        req: undefined,
        res: undefined
    };
}
exports.ListenFinalizeBlockRequest = {
    typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.req !== undefined) {
            types_1.RequestFinalizeBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
        }
        if (message.res !== undefined) {
            types_1.ResponseFinalizeBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListenFinalizeBlockRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.req = types_1.RequestFinalizeBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.res = types_1.ResponseFinalizeBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseListenFinalizeBlockRequest();
        message.req = object.req !== undefined && object.req !== null ? types_1.RequestFinalizeBlock.fromPartial(object.req) : undefined;
        message.res = object.res !== undefined && object.res !== null ? types_1.ResponseFinalizeBlock.fromPartial(object.res) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseListenFinalizeBlockRequest();
        if (object.req !== undefined && object.req !== null) {
            message.req = types_1.RequestFinalizeBlock.fromAmino(object.req);
        }
        if (object.res !== undefined && object.res !== null) {
            message.res = types_1.ResponseFinalizeBlock.fromAmino(object.res);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.req = message.req ? types_1.RequestFinalizeBlock.toAmino(message.req) : undefined;
        obj.res = message.res ? types_1.ResponseFinalizeBlock.toAmino(message.res) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListenFinalizeBlockRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListenFinalizeBlockRequest",
            value: exports.ListenFinalizeBlockRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListenFinalizeBlockRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListenFinalizeBlockRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
            value: exports.ListenFinalizeBlockRequest.encode(message).finish()
        };
    }
};
function createBaseListenFinalizeBlockResponse() {
    return {};
}
exports.ListenFinalizeBlockResponse = {
    typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListenFinalizeBlockResponse();
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
        var message = createBaseListenFinalizeBlockResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseListenFinalizeBlockResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListenFinalizeBlockResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListenFinalizeBlockResponse",
            value: exports.ListenFinalizeBlockResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListenFinalizeBlockResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListenFinalizeBlockResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
            value: exports.ListenFinalizeBlockResponse.encode(message).finish()
        };
    }
};
function createBaseListenCommitRequest() {
    return {
        blockHeight: BigInt(0),
        res: undefined,
        changeSet: []
    };
}
exports.ListenCommitRequest = {
    typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.blockHeight);
        }
        if (message.res !== undefined) {
            types_1.ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.changeSet; _i < _a.length; _i++) {
            var v = _a[_i];
            listening_1.StoreKVPair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListenCommitRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.int64();
                    break;
                case 2:
                    message.res = types_1.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.changeSet.push(listening_1.StoreKVPair.decode(reader, reader.uint32()));
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
        var message = createBaseListenCommitRequest();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.res = object.res !== undefined && object.res !== null ? types_1.ResponseCommit.fromPartial(object.res) : undefined;
        message.changeSet = ((_a = object.changeSet) === null || _a === void 0 ? void 0 : _a.map(function (e) { return listening_1.StoreKVPair.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseListenCommitRequest();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        if (object.res !== undefined && object.res !== null) {
            message.res = types_1.ResponseCommit.fromAmino(object.res);
        }
        message.changeSet = ((_a = object.change_set) === null || _a === void 0 ? void 0 : _a.map(function (e) { return listening_1.StoreKVPair.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.block_height = message.blockHeight !== BigInt(0) ? ((_a = message.blockHeight) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.res = message.res ? types_1.ResponseCommit.toAmino(message.res) : undefined;
        if (message.changeSet) {
            obj.change_set = message.changeSet.map(function (e) { return e ? listening_1.StoreKVPair.toAmino(e) : undefined; });
        }
        else {
            obj.change_set = message.changeSet;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListenCommitRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListenCommitRequest",
            value: exports.ListenCommitRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListenCommitRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListenCommitRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
            value: exports.ListenCommitRequest.encode(message).finish()
        };
    }
};
function createBaseListenCommitResponse() {
    return {};
}
exports.ListenCommitResponse = {
    typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListenCommitResponse();
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
        var message = createBaseListenCommitResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseListenCommitResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListenCommitResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListenCommitResponse",
            value: exports.ListenCommitResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListenCommitResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListenCommitResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
            value: exports.ListenCommitResponse.encode(message).finish()
        };
    }
};
