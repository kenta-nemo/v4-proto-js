"use strict";
exports.__esModule = true;
exports.Module = void 0;
var duration_1 = require("../../../../google/protobuf/duration");
var binary_1 = require("../../../../binary");
function createBaseModule() {
    return {
        maxExecutionPeriod: duration_1.Duration.fromPartial({}),
        maxMetadataLen: BigInt(0)
    };
}
exports.Module = {
    typeUrl: "/cosmos.group.module.v1.Module",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.maxExecutionPeriod !== undefined) {
            duration_1.Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxMetadataLen !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxMetadataLen);
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
                    message.maxExecutionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxMetadataLen = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseModule();
        message.maxExecutionPeriod = object.maxExecutionPeriod !== undefined && object.maxExecutionPeriod !== null ? duration_1.Duration.fromPartial(object.maxExecutionPeriod) : undefined;
        message.maxMetadataLen = object.maxMetadataLen !== undefined && object.maxMetadataLen !== null ? BigInt(object.maxMetadataLen.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseModule();
        if (object.max_execution_period !== undefined && object.max_execution_period !== null) {
            message.maxExecutionPeriod = duration_1.Duration.fromAmino(object.max_execution_period);
        }
        if (object.max_metadata_len !== undefined && object.max_metadata_len !== null) {
            message.maxMetadataLen = BigInt(object.max_metadata_len);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.max_execution_period = message.maxExecutionPeriod ? duration_1.Duration.toAmino(message.maxExecutionPeriod) : duration_1.Duration.toAmino(duration_1.Duration.fromPartial({}));
        obj.max_metadata_len = message.maxMetadataLen !== BigInt(0) ? ((_a = message.maxMetadataLen) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
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
            typeUrl: "/cosmos.group.module.v1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
