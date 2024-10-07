"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var coin_1 = require("../../base/v1beta1/coin");
var binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        constantFee: coin_1.Coin.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.constantFee !== undefined) {
            coin_1.Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.constantFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGenesisState();
        message.constantFee = object.constantFee !== undefined && object.constantFee !== null ? coin_1.Coin.fromPartial(object.constantFee) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGenesisState();
        if (object.constant_fee !== undefined && object.constant_fee !== null) {
            message.constantFee = coin_1.Coin.fromAmino(object.constant_fee);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.constant_fee = message.constantFee ? coin_1.Coin.toAmino(message.constantFee) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
