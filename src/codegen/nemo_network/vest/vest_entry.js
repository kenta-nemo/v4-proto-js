"use strict";
exports.__esModule = true;
exports.VestEntry = void 0;
var timestamp_1 = require("../../google/protobuf/timestamp");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseVestEntry() {
    return {
        vesterAccount: "",
        treasuryAccount: "",
        denom: "",
        startTime: new Date(),
        endTime: new Date()
    };
}
exports.VestEntry = {
    typeUrl: "/nemo_network.vest.VestEntry",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.vesterAccount !== "") {
            writer.uint32(10).string(message.vesterAccount);
        }
        if (message.treasuryAccount !== "") {
            writer.uint32(18).string(message.treasuryAccount);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVestEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vesterAccount = reader.string();
                    break;
                case 2:
                    message.treasuryAccount = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseVestEntry();
        message.vesterAccount = (_a = object.vesterAccount) !== null && _a !== void 0 ? _a : "";
        message.treasuryAccount = (_b = object.treasuryAccount) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.startTime = (_d = object.startTime) !== null && _d !== void 0 ? _d : undefined;
        message.endTime = (_e = object.endTime) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseVestEntry();
        if (object.vester_account !== undefined && object.vester_account !== null) {
            message.vesterAccount = object.vester_account;
        }
        if (object.treasury_account !== undefined && object.treasury_account !== null) {
            message.treasuryAccount = object.treasury_account;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_time));
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.vester_account = message.vesterAccount === "" ? undefined : message.vesterAccount;
        obj.treasury_account = message.treasuryAccount === "" ? undefined : message.treasuryAccount;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.start_time = message.startTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime)) : undefined;
        obj.end_time = message.endTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endTime)) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.VestEntry.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.VestEntry.decode(message.value);
    },
    toProto: function (message) {
        return exports.VestEntry.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vest.VestEntry",
            value: exports.VestEntry.encode(message).finish()
        };
    }
};
