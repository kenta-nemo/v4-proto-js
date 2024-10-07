"use strict";
exports.__esModule = true;
exports.TimestampNonceDetails = exports.AccountState = void 0;
var binary_1 = require("../../binary");
function createBaseAccountState() {
    return {
        address: "",
        timestampNonceDetails: exports.TimestampNonceDetails.fromPartial({})
    };
}
exports.AccountState = {
    typeUrl: "/nemo_network.accountplus.AccountState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.timestampNonceDetails !== undefined) {
            exports.TimestampNonceDetails.encode(message.timestampNonceDetails, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAccountState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.timestampNonceDetails = exports.TimestampNonceDetails.decode(reader, reader.uint32());
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
        var message = createBaseAccountState();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.timestampNonceDetails = object.timestampNonceDetails !== undefined && object.timestampNonceDetails !== null ? exports.TimestampNonceDetails.fromPartial(object.timestampNonceDetails) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAccountState();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.timestamp_nonce_details !== undefined && object.timestamp_nonce_details !== null) {
            message.timestampNonceDetails = exports.TimestampNonceDetails.fromAmino(object.timestamp_nonce_details);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.timestamp_nonce_details = message.timestampNonceDetails ? exports.TimestampNonceDetails.toAmino(message.timestampNonceDetails) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AccountState.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AccountState.decode(message.value);
    },
    toProto: function (message) {
        return exports.AccountState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.accountplus.AccountState",
            value: exports.AccountState.encode(message).finish()
        };
    }
};
function createBaseTimestampNonceDetails() {
    return {
        timestampNonces: [],
        maxEjectedNonce: BigInt(0)
    };
}
exports.TimestampNonceDetails = {
    typeUrl: "/nemo_network.accountplus.TimestampNonceDetails",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.timestampNonces; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.maxEjectedNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxEjectedNonce);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTimestampNonceDetails();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.timestampNonces.push(reader.uint64());
                        }
                    }
                    else {
                        message.timestampNonces.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.maxEjectedNonce = reader.uint64();
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
        var message = createBaseTimestampNonceDetails();
        message.timestampNonces = ((_a = object.timestampNonces) === null || _a === void 0 ? void 0 : _a.map(function (e) { return BigInt(e.toString()); })) || [];
        message.maxEjectedNonce = object.maxEjectedNonce !== undefined && object.maxEjectedNonce !== null ? BigInt(object.maxEjectedNonce.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseTimestampNonceDetails();
        message.timestampNonces = ((_a = object.timestamp_nonces) === null || _a === void 0 ? void 0 : _a.map(function (e) { return BigInt(e); })) || [];
        if (object.max_ejected_nonce !== undefined && object.max_ejected_nonce !== null) {
            message.maxEjectedNonce = BigInt(object.max_ejected_nonce);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        if (message.timestampNonces) {
            obj.timestamp_nonces = message.timestampNonces.map(function (e) { return e.toString(); });
        }
        else {
            obj.timestamp_nonces = message.timestampNonces;
        }
        obj.max_ejected_nonce = message.maxEjectedNonce !== BigInt(0) ? ((_a = message.maxEjectedNonce) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TimestampNonceDetails.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.TimestampNonceDetails.decode(message.value);
    },
    toProto: function (message) {
        return exports.TimestampNonceDetails.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.accountplus.TimestampNonceDetails",
            value: exports.TimestampNonceDetails.encode(message).finish()
        };
    }
};
