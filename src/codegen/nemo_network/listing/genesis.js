"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        hardCapForMarkets: 0
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.listing.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.hardCapForMarkets !== 0) {
            writer.uint32(8).uint32(message.hardCapForMarkets);
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
                case 1:
                    message.hardCapForMarkets = reader.uint32();
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
        var message = createBaseGenesisState();
        message.hardCapForMarkets = (_a = object.hardCapForMarkets) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGenesisState();
        if (object.hard_cap_for_markets !== undefined && object.hard_cap_for_markets !== null) {
            message.hardCapForMarkets = object.hard_cap_for_markets;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.hard_cap_for_markets = message.hardCapForMarkets === 0 ? undefined : message.hardCapForMarkets;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
