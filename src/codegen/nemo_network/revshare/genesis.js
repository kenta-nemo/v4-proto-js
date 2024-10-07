"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        params: params_1.MarketMapperRevenueShareParams.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.revshare.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.MarketMapperRevenueShareParams.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = params_1.MarketMapperRevenueShareParams.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? params_1.MarketMapperRevenueShareParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.MarketMapperRevenueShareParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.MarketMapperRevenueShareParams.toAmino(message.params) : undefined;
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
            typeUrl: "/nemo_network.revshare.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
