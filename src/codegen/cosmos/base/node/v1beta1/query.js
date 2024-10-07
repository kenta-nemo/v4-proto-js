"use strict";
exports.__esModule = true;
exports.StatusResponse = exports.StatusRequest = exports.ConfigResponse = exports.ConfigRequest = void 0;
var timestamp_1 = require("../../../../google/protobuf/timestamp");
var binary_1 = require("../../../../binary");
var helpers_1 = require("../../../../helpers");
function createBaseConfigRequest() {
    return {};
}
exports.ConfigRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigRequest();
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
        var message = createBaseConfigRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseConfigRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ConfigRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ConfigRequest",
            value: exports.ConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ConfigRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.ConfigRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
            value: exports.ConfigRequest.encode(message).finish()
        };
    }
};
function createBaseConfigResponse() {
    return {
        minimumGasPrice: "",
        pruningKeepRecent: "",
        pruningInterval: ""
    };
}
exports.ConfigResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.minimumGasPrice !== "") {
            writer.uint32(10).string(message.minimumGasPrice);
        }
        if (message.pruningKeepRecent !== "") {
            writer.uint32(18).string(message.pruningKeepRecent);
        }
        if (message.pruningInterval !== "") {
            writer.uint32(26).string(message.pruningInterval);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimumGasPrice = reader.string();
                    break;
                case 2:
                    message.pruningKeepRecent = reader.string();
                    break;
                case 3:
                    message.pruningInterval = reader.string();
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
        var message = createBaseConfigResponse();
        message.minimumGasPrice = (_a = object.minimumGasPrice) !== null && _a !== void 0 ? _a : "";
        message.pruningKeepRecent = (_b = object.pruningKeepRecent) !== null && _b !== void 0 ? _b : "";
        message.pruningInterval = (_c = object.pruningInterval) !== null && _c !== void 0 ? _c : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseConfigResponse();
        if (object.minimum_gas_price !== undefined && object.minimum_gas_price !== null) {
            message.minimumGasPrice = object.minimum_gas_price;
        }
        if (object.pruning_keep_recent !== undefined && object.pruning_keep_recent !== null) {
            message.pruningKeepRecent = object.pruning_keep_recent;
        }
        if (object.pruning_interval !== undefined && object.pruning_interval !== null) {
            message.pruningInterval = object.pruning_interval;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.minimum_gas_price = message.minimumGasPrice === "" ? undefined : message.minimumGasPrice;
        obj.pruning_keep_recent = message.pruningKeepRecent === "" ? undefined : message.pruningKeepRecent;
        obj.pruning_interval = message.pruningInterval === "" ? undefined : message.pruningInterval;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ConfigResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ConfigResponse",
            value: exports.ConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ConfigResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.ConfigResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
            value: exports.ConfigResponse.encode(message).finish()
        };
    }
};
function createBaseStatusRequest() {
    return {};
}
exports.StatusRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatusRequest();
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
        var message = createBaseStatusRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseStatusRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatusRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/StatusRequest",
            value: exports.StatusRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.StatusRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatusRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
            value: exports.StatusRequest.encode(message).finish()
        };
    }
};
function createBaseStatusResponse() {
    return {
        earliestStoreHeight: BigInt(0),
        height: BigInt(0),
        timestamp: undefined,
        appHash: new Uint8Array(),
        validatorHash: new Uint8Array()
    };
}
exports.StatusResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.earliestStoreHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.earliestStoreHeight);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(34).bytes(message.appHash);
        }
        if (message.validatorHash.length !== 0) {
            writer.uint32(42).bytes(message.validatorHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatusResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.earliestStoreHeight = reader.uint64();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.appHash = reader.bytes();
                    break;
                case 5:
                    message.validatorHash = reader.bytes();
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
        var message = createBaseStatusResponse();
        message.earliestStoreHeight = object.earliestStoreHeight !== undefined && object.earliestStoreHeight !== null ? BigInt(object.earliestStoreHeight.toString()) : BigInt(0);
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
        message.appHash = (_b = object.appHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.validatorHash = (_c = object.validatorHash) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStatusResponse();
        if (object.earliest_store_height !== undefined && object.earliest_store_height !== null) {
            message.earliestStoreHeight = BigInt(object.earliest_store_height);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.appHash = (0, helpers_1.bytesFromBase64)(object.app_hash);
        }
        if (object.validator_hash !== undefined && object.validator_hash !== null) {
            message.validatorHash = (0, helpers_1.bytesFromBase64)(object.validator_hash);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.earliest_store_height = message.earliestStoreHeight !== BigInt(0) ? ((_a = message.earliestStoreHeight) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.height = message.height !== BigInt(0) ? ((_b = message.height) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.app_hash = message.appHash ? (0, helpers_1.base64FromBytes)(message.appHash) : undefined;
        obj.validator_hash = message.validatorHash ? (0, helpers_1.base64FromBytes)(message.validatorHash) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatusResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/StatusResponse",
            value: exports.StatusResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.StatusResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatusResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
            value: exports.StatusResponse.encode(message).finish()
        };
    }
};
