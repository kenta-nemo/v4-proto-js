"use strict";
exports.__esModule = true;
exports.Equivocation = void 0;
var timestamp_1 = require("../../../google/protobuf/timestamp");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBaseEquivocation() {
    return {
        height: BigInt(0),
        time: new Date(),
        power: BigInt(0),
        consensusAddress: ""
    };
}
exports.Equivocation = {
    typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEquivocation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                case 4:
                    message.consensusAddress = reader.string();
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
        var message = createBaseEquivocation();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        message.consensusAddress = (_b = object.consensusAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEquivocation();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        if (object.consensus_address !== undefined && object.consensus_address !== null) {
            message.consensusAddress = object.consensus_address;
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.height = message.height !== BigInt(0) ? ((_a = message.height) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : new Date();
        obj.power = message.power !== BigInt(0) ? ((_b = message.power) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.consensus_address = message.consensusAddress === "" ? undefined : message.consensusAddress;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Equivocation.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Equivocation",
            value: exports.Equivocation.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Equivocation.decode(message.value);
    },
    toProto: function (message) {
        return exports.Equivocation.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
            value: exports.Equivocation.encode(message).finish()
        };
    }
};
