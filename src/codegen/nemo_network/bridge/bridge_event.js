"use strict";
exports.__esModule = true;
exports.BridgeEvent = void 0;
var coin_1 = require("../../cosmos/base/v1beta1/coin");
var binary_1 = require("../../binary");
function createBaseBridgeEvent() {
    return {
        id: 0,
        coin: coin_1.Coin.fromPartial({}),
        address: "",
        ethBlockHeight: BigInt(0)
    };
}
exports.BridgeEvent = {
    typeUrl: "/nemo_network.bridge.BridgeEvent",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.ethBlockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBridgeEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
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
        var _a, _b;
        var message = createBaseBridgeEvent();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.coin = object.coin !== undefined && object.coin !== null ? coin_1.Coin.fromPartial(object.coin) : undefined;
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseBridgeEvent();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromAmino(object.coin);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.eth_block_height !== undefined && object.eth_block_height !== null) {
            message.ethBlockHeight = BigInt(object.eth_block_height);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.coin = message.coin ? coin_1.Coin.toAmino(message.coin) : undefined;
        obj.address = message.address === "" ? undefined : message.address;
        obj.eth_block_height = message.ethBlockHeight !== BigInt(0) ? ((_a = message.ethBlockHeight) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BridgeEvent.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.BridgeEvent.decode(message.value);
    },
    toProto: function (message) {
        return exports.BridgeEvent.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.BridgeEvent",
            value: exports.BridgeEvent.encode(message).finish()
        };
    }
};
