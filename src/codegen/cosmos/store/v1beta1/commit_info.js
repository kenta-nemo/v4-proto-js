"use strict";
exports.__esModule = true;
exports.CommitID = exports.StoreInfo = exports.CommitInfo = void 0;
var timestamp_1 = require("../../../google/protobuf/timestamp");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBaseCommitInfo() {
    return {
        version: BigInt(0),
        storeInfos: [],
        timestamp: new Date()
    };
}
exports.CommitInfo = {
    typeUrl: "/cosmos.store.v1beta1.CommitInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        for (var _i = 0, _a = message.storeInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommitInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.storeInfos.push(exports.StoreInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBaseCommitInfo();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.storeInfos = ((_a = object.storeInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StoreInfo.fromPartial(e); })) || [];
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseCommitInfo();
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        message.storeInfos = ((_a = object.store_infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StoreInfo.fromAmino(e); })) || [];
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.version = message.version !== BigInt(0) ? ((_a = message.version) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        if (message.storeInfos) {
            obj.store_infos = message.storeInfos.map(function (e) { return e ? exports.StoreInfo.toAmino(e) : undefined; });
        }
        else {
            obj.store_infos = message.storeInfos;
        }
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.CommitInfo.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/CommitInfo",
            value: exports.CommitInfo.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.CommitInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.CommitInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.CommitInfo",
            value: exports.CommitInfo.encode(message).finish()
        };
    }
};
function createBaseStoreInfo() {
    return {
        name: "",
        commitId: exports.CommitID.fromPartial({})
    };
}
exports.StoreInfo = {
    typeUrl: "/cosmos.store.v1beta1.StoreInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commitId !== undefined) {
            exports.CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStoreInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commitId = exports.CommitID.decode(reader, reader.uint32());
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
        var message = createBaseStoreInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.commitId = object.commitId !== undefined && object.commitId !== null ? exports.CommitID.fromPartial(object.commitId) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStoreInfo();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.commit_id !== undefined && object.commit_id !== null) {
            message.commitId = exports.CommitID.fromAmino(object.commit_id);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.commit_id = message.commitId ? exports.CommitID.toAmino(message.commitId) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StoreInfo.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/StoreInfo",
            value: exports.StoreInfo.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.StoreInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.StoreInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.StoreInfo",
            value: exports.StoreInfo.encode(message).finish()
        };
    }
};
function createBaseCommitID() {
    return {
        version: BigInt(0),
        hash: new Uint8Array()
    };
}
exports.CommitID = {
    typeUrl: "/cosmos.store.v1beta1.CommitID",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommitID();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
        var message = createBaseCommitID();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseCommitID();
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.version = message.version !== BigInt(0) ? ((_a = message.version) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.CommitID.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/CommitID",
            value: exports.CommitID.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.CommitID.decode(message.value);
    },
    toProto: function (message) {
        return exports.CommitID.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.CommitID",
            value: exports.CommitID.encode(message).finish()
        };
    }
};
