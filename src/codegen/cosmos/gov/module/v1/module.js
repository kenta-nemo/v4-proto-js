"use strict";
exports.__esModule = true;
exports.Module = void 0;
var binary_1 = require("../../../../binary");
function createBaseModule() {
    return {
        maxMetadataLen: BigInt(0),
        authority: ""
    };
}
exports.Module = {
    typeUrl: "/cosmos.gov.module.v1.Module",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.maxMetadataLen !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxMetadataLen);
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModule();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxMetadataLen = reader.uint64();
                    break;
                case 2:
                    message.authority = reader.string();
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
        var message = createBaseModule();
        message.maxMetadataLen = object.maxMetadataLen !== undefined && object.maxMetadataLen !== null ? BigInt(object.maxMetadataLen.toString()) : BigInt(0);
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseModule();
        if (object.max_metadata_len !== undefined && object.max_metadata_len !== null) {
            message.maxMetadataLen = BigInt(object.max_metadata_len);
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.max_metadata_len = message.maxMetadataLen !== BigInt(0) ? ((_a = message.maxMetadataLen) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.authority = message.authority === "" ? undefined : message.authority;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Module.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Module",
            value: exports.Module.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Module.decode(message.value);
    },
    toProto: function (message) {
        return exports.Module.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.module.v1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
