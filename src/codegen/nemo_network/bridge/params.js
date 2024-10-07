"use strict";
exports.__esModule = true;
exports.SafetyParams = exports.ProposeParams = exports.EventParams = void 0;
var duration_1 = require("../../google/protobuf/duration");
var binary_1 = require("../../binary");
function createBaseEventParams() {
    return {
        denom: "",
        ethChainId: BigInt(0),
        ethAddress: ""
    };
}
exports.EventParams = {
    typeUrl: "/nemo_network.bridge.EventParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.ethChainId !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethChainId);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.ethChainId = reader.uint64();
                    break;
                case 3:
                    message.ethAddress = reader.string();
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
        var message = createBaseEventParams();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.ethChainId = object.ethChainId !== undefined && object.ethChainId !== null ? BigInt(object.ethChainId.toString()) : BigInt(0);
        message.ethAddress = (_b = object.ethAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventParams();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.eth_chain_id !== undefined && object.eth_chain_id !== null) {
            message.ethChainId = BigInt(object.eth_chain_id);
        }
        if (object.eth_address !== undefined && object.eth_address !== null) {
            message.ethAddress = object.eth_address;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.eth_chain_id = message.ethChainId !== BigInt(0) ? ((_a = message.ethChainId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EventParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.EventParams",
            value: exports.EventParams.encode(message).finish()
        };
    }
};
function createBaseProposeParams() {
    return {
        maxBridgesPerBlock: 0,
        proposeDelayDuration: duration_1.Duration.fromPartial({}),
        skipRatePpm: 0,
        skipIfBlockDelayedByDuration: duration_1.Duration.fromPartial({})
    };
}
exports.ProposeParams = {
    typeUrl: "/nemo_network.bridge.ProposeParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.maxBridgesPerBlock !== 0) {
            writer.uint32(8).uint32(message.maxBridgesPerBlock);
        }
        if (message.proposeDelayDuration !== undefined) {
            duration_1.Duration.encode(message.proposeDelayDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.skipRatePpm !== 0) {
            writer.uint32(24).uint32(message.skipRatePpm);
        }
        if (message.skipIfBlockDelayedByDuration !== undefined) {
            duration_1.Duration.encode(message.skipIfBlockDelayedByDuration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposeParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBridgesPerBlock = reader.uint32();
                    break;
                case 2:
                    message.proposeDelayDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.skipRatePpm = reader.uint32();
                    break;
                case 4:
                    message.skipIfBlockDelayedByDuration = duration_1.Duration.decode(reader, reader.uint32());
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
        var message = createBaseProposeParams();
        message.maxBridgesPerBlock = (_a = object.maxBridgesPerBlock) !== null && _a !== void 0 ? _a : 0;
        message.proposeDelayDuration = object.proposeDelayDuration !== undefined && object.proposeDelayDuration !== null ? duration_1.Duration.fromPartial(object.proposeDelayDuration) : undefined;
        message.skipRatePpm = (_b = object.skipRatePpm) !== null && _b !== void 0 ? _b : 0;
        message.skipIfBlockDelayedByDuration = object.skipIfBlockDelayedByDuration !== undefined && object.skipIfBlockDelayedByDuration !== null ? duration_1.Duration.fromPartial(object.skipIfBlockDelayedByDuration) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseProposeParams();
        if (object.max_bridges_per_block !== undefined && object.max_bridges_per_block !== null) {
            message.maxBridgesPerBlock = object.max_bridges_per_block;
        }
        if (object.propose_delay_duration !== undefined && object.propose_delay_duration !== null) {
            message.proposeDelayDuration = duration_1.Duration.fromAmino(object.propose_delay_duration);
        }
        if (object.skip_rate_ppm !== undefined && object.skip_rate_ppm !== null) {
            message.skipRatePpm = object.skip_rate_ppm;
        }
        if (object.skip_if_block_delayed_by_duration !== undefined && object.skip_if_block_delayed_by_duration !== null) {
            message.skipIfBlockDelayedByDuration = duration_1.Duration.fromAmino(object.skip_if_block_delayed_by_duration);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.max_bridges_per_block = message.maxBridgesPerBlock === 0 ? undefined : message.maxBridgesPerBlock;
        obj.propose_delay_duration = message.proposeDelayDuration ? duration_1.Duration.toAmino(message.proposeDelayDuration) : undefined;
        obj.skip_rate_ppm = message.skipRatePpm === 0 ? undefined : message.skipRatePpm;
        obj.skip_if_block_delayed_by_duration = message.skipIfBlockDelayedByDuration ? duration_1.Duration.toAmino(message.skipIfBlockDelayedByDuration) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ProposeParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ProposeParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.ProposeParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.ProposeParams",
            value: exports.ProposeParams.encode(message).finish()
        };
    }
};
function createBaseSafetyParams() {
    return {
        isDisabled: false,
        delayBlocks: 0
    };
}
exports.SafetyParams = {
    typeUrl: "/nemo_network.bridge.SafetyParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.isDisabled === true) {
            writer.uint32(8).bool(message.isDisabled);
        }
        if (message.delayBlocks !== 0) {
            writer.uint32(16).uint32(message.delayBlocks);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSafetyParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isDisabled = reader.bool();
                    break;
                case 2:
                    message.delayBlocks = reader.uint32();
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
        var message = createBaseSafetyParams();
        message.isDisabled = (_a = object.isDisabled) !== null && _a !== void 0 ? _a : false;
        message.delayBlocks = (_b = object.delayBlocks) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSafetyParams();
        if (object.is_disabled !== undefined && object.is_disabled !== null) {
            message.isDisabled = object.is_disabled;
        }
        if (object.delay_blocks !== undefined && object.delay_blocks !== null) {
            message.delayBlocks = object.delay_blocks;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.is_disabled = message.isDisabled === false ? undefined : message.isDisabled;
        obj.delay_blocks = message.delayBlocks === 0 ? undefined : message.delayBlocks;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SafetyParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SafetyParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.SafetyParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.SafetyParams",
            value: exports.SafetyParams.encode(message).finish()
        };
    }
};
