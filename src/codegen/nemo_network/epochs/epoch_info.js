"use strict";
exports.__esModule = true;
exports.EpochInfo = void 0;
var binary_1 = require("../../binary");
function createBaseEpochInfo() {
    return {
        name: "",
        nextTick: 0,
        duration: 0,
        currentEpoch: 0,
        currentEpochStartBlock: 0,
        isInitialized: false,
        fastForwardNextTick: false
    };
}
exports.EpochInfo = {
    typeUrl: "/nemo_network.epochs.EpochInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.nextTick !== 0) {
            writer.uint32(16).uint32(message.nextTick);
        }
        if (message.duration !== 0) {
            writer.uint32(24).uint32(message.duration);
        }
        if (message.currentEpoch !== 0) {
            writer.uint32(32).uint32(message.currentEpoch);
        }
        if (message.currentEpochStartBlock !== 0) {
            writer.uint32(40).uint32(message.currentEpochStartBlock);
        }
        if (message.isInitialized === true) {
            writer.uint32(48).bool(message.isInitialized);
        }
        if (message.fastForwardNextTick === true) {
            writer.uint32(56).bool(message.fastForwardNextTick);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEpochInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.nextTick = reader.uint32();
                    break;
                case 3:
                    message.duration = reader.uint32();
                    break;
                case 4:
                    message.currentEpoch = reader.uint32();
                    break;
                case 5:
                    message.currentEpochStartBlock = reader.uint32();
                    break;
                case 6:
                    message.isInitialized = reader.bool();
                    break;
                case 7:
                    message.fastForwardNextTick = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseEpochInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.nextTick = (_b = object.nextTick) !== null && _b !== void 0 ? _b : 0;
        message.duration = (_c = object.duration) !== null && _c !== void 0 ? _c : 0;
        message.currentEpoch = (_d = object.currentEpoch) !== null && _d !== void 0 ? _d : 0;
        message.currentEpochStartBlock = (_e = object.currentEpochStartBlock) !== null && _e !== void 0 ? _e : 0;
        message.isInitialized = (_f = object.isInitialized) !== null && _f !== void 0 ? _f : false;
        message.fastForwardNextTick = (_g = object.fastForwardNextTick) !== null && _g !== void 0 ? _g : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEpochInfo();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.next_tick !== undefined && object.next_tick !== null) {
            message.nextTick = object.next_tick;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = object.duration;
        }
        if (object.current_epoch !== undefined && object.current_epoch !== null) {
            message.currentEpoch = object.current_epoch;
        }
        if (object.current_epoch_start_block !== undefined && object.current_epoch_start_block !== null) {
            message.currentEpochStartBlock = object.current_epoch_start_block;
        }
        if (object.is_initialized !== undefined && object.is_initialized !== null) {
            message.isInitialized = object.is_initialized;
        }
        if (object.fast_forward_next_tick !== undefined && object.fast_forward_next_tick !== null) {
            message.fastForwardNextTick = object.fast_forward_next_tick;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.next_tick = message.nextTick === 0 ? undefined : message.nextTick;
        obj.duration = message.duration === 0 ? undefined : message.duration;
        obj.current_epoch = message.currentEpoch === 0 ? undefined : message.currentEpoch;
        obj.current_epoch_start_block = message.currentEpochStartBlock === 0 ? undefined : message.currentEpochStartBlock;
        obj.is_initialized = message.isInitialized === false ? undefined : message.isInitialized;
        obj.fast_forward_next_tick = message.fastForwardNextTick === false ? undefined : message.fastForwardNextTick;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EpochInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EpochInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.EpochInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.epochs.EpochInfo",
            value: exports.EpochInfo.encode(message).finish()
        };
    }
};
