"use strict";
exports.__esModule = true;
exports.Params = exports.ValidatorSigningInfo = void 0;
var timestamp_1 = require("../../../google/protobuf/timestamp");
var duration_1 = require("../../../google/protobuf/duration");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        startHeight: BigInt(0),
        indexOffset: BigInt(0),
        jailedUntil: new Date(),
        tombstoned: false,
        missedBlocksCounter: BigInt(0)
    };
}
exports.ValidatorSigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.startHeight !== BigInt(0)) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (message.indexOffset !== BigInt(0)) {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.jailedUntil), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (message.missedBlocksCounter !== BigInt(0)) {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.startHeight = reader.int64();
                    break;
                case 3:
                    message.indexOffset = reader.int64();
                    break;
                case 4:
                    message.jailedUntil = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missedBlocksCounter = reader.int64();
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
        var message = createBaseValidatorSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
        message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? BigInt(object.indexOffset.toString()) : BigInt(0);
        message.jailedUntil = (_b = object.jailedUntil) !== null && _b !== void 0 ? _b : undefined;
        message.tombstoned = (_c = object.tombstoned) !== null && _c !== void 0 ? _c : false;
        message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseValidatorSigningInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.start_height !== undefined && object.start_height !== null) {
            message.startHeight = BigInt(object.start_height);
        }
        if (object.index_offset !== undefined && object.index_offset !== null) {
            message.indexOffset = BigInt(object.index_offset);
        }
        if (object.jailed_until !== undefined && object.jailed_until !== null) {
            message.jailedUntil = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.jailed_until));
        }
        if (object.tombstoned !== undefined && object.tombstoned !== null) {
            message.tombstoned = object.tombstoned;
        }
        if (object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null) {
            message.missedBlocksCounter = BigInt(object.missed_blocks_counter);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c;
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.start_height = message.startHeight !== BigInt(0) ? ((_a = message.startHeight) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.index_offset = message.indexOffset !== BigInt(0) ? ((_b = message.indexOffset) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.jailed_until = message.jailedUntil ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.jailedUntil)) : new Date();
        obj.tombstoned = message.tombstoned === false ? undefined : message.tombstoned;
        obj.missed_blocks_counter = message.missedBlocksCounter !== BigInt(0) ? ((_c = message.missedBlocksCounter) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ValidatorSigningInfo.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ValidatorSigningInfo",
            value: exports.ValidatorSigningInfo.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ValidatorSigningInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.ValidatorSigningInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
            value: exports.ValidatorSigningInfo.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        signedBlocksWindow: BigInt(0),
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: duration_1.Duration.fromPartial({}),
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array()
    };
}
exports.Params = {
    typeUrl: "/cosmos.slashing.v1beta1.Params",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.signedBlocksWindow !== BigInt(0)) {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            duration_1.Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedBlocksWindow = reader.int64();
                    break;
                case 2:
                    message.minSignedPerWindow = reader.bytes();
                    break;
                case 3:
                    message.downtimeJailDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slashFractionDoubleSign = reader.bytes();
                    break;
                case 5:
                    message.slashFractionDowntime = reader.bytes();
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
        var message = createBaseParams();
        message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0);
        message.minSignedPerWindow = (_a = object.minSignedPerWindow) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.downtimeJailDuration = object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null ? duration_1.Duration.fromPartial(object.downtimeJailDuration) : undefined;
        message.slashFractionDoubleSign = (_b = object.slashFractionDoubleSign) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.slashFractionDowntime = (_c = object.slashFractionDowntime) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseParams();
        if (object.signed_blocks_window !== undefined && object.signed_blocks_window !== null) {
            message.signedBlocksWindow = BigInt(object.signed_blocks_window);
        }
        if (object.min_signed_per_window !== undefined && object.min_signed_per_window !== null) {
            message.minSignedPerWindow = (0, helpers_1.bytesFromBase64)(object.min_signed_per_window);
        }
        if (object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null) {
            message.downtimeJailDuration = duration_1.Duration.fromAmino(object.downtime_jail_duration);
        }
        if (object.slash_fraction_double_sign !== undefined && object.slash_fraction_double_sign !== null) {
            message.slashFractionDoubleSign = (0, helpers_1.bytesFromBase64)(object.slash_fraction_double_sign);
        }
        if (object.slash_fraction_downtime !== undefined && object.slash_fraction_downtime !== null) {
            message.slashFractionDowntime = (0, helpers_1.bytesFromBase64)(object.slash_fraction_downtime);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.signed_blocks_window = message.signedBlocksWindow !== BigInt(0) ? ((_a = message.signedBlocksWindow) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.min_signed_per_window = message.minSignedPerWindow ? (0, helpers_1.base64FromBytes)(message.minSignedPerWindow) : "";
        obj.downtime_jail_duration = message.downtimeJailDuration ? duration_1.Duration.toAmino(message.downtimeJailDuration) : duration_1.Duration.toAmino(duration_1.Duration.fromPartial({}));
        obj.slash_fraction_double_sign = message.slashFractionDoubleSign ? (0, helpers_1.base64FromBytes)(message.slashFractionDoubleSign) : "";
        obj.slash_fraction_downtime = message.slashFractionDowntime ? (0, helpers_1.base64FromBytes)(message.slashFractionDowntime) : "";
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/x/slashing/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Params.decode(message.value);
    },
    toProto: function (message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
