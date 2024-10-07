"use strict";
exports.__esModule = true;
exports.BridgeEventInfo = void 0;
var binary_1 = require("../../binary");
function createBaseBridgeEventInfo() {
    return {
        nextId: 0,
        ethBlockHeight: BigInt(0)
    };
}
exports.BridgeEventInfo = {
    typeUrl: "/nemo_network.bridge.BridgeEventInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.nextId !== 0) {
            writer.uint32(8).uint32(message.nextId);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBridgeEventInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextId = reader.uint32();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
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
        var message = createBaseBridgeEventInfo();
        message.nextId = (_a = object.nextId) !== null && _a !== void 0 ? _a : 0;
        message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseBridgeEventInfo();
        if (object.next_id !== undefined && object.next_id !== null) {
            message.nextId = object.next_id;
        }
        if (object.eth_block_height !== undefined && object.eth_block_height !== null) {
            message.ethBlockHeight = BigInt(object.eth_block_height);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.next_id = message.nextId === 0 ? undefined : message.nextId;
        obj.eth_block_height = message.ethBlockHeight !== BigInt(0) ? ((_a = message.ethBlockHeight) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BridgeEventInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.BridgeEventInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.BridgeEventInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.BridgeEventInfo",
            value: exports.BridgeEventInfo.encode(message).finish()
        };
    }
};
