"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var epoch_info_1 = require("./epoch_info");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        epochInfoList: []
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.epochs.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.epochInfoList; _i < _a.length; _i++) {
            var v = _a[_i];
            epoch_info_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.epochInfoList.push(epoch_info_1.EpochInfo.decode(reader, reader.uint32()));
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
        message.epochInfoList = ((_a = object.epochInfoList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return epoch_info_1.EpochInfo.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.epochInfoList = ((_a = object.epoch_info_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return epoch_info_1.EpochInfo.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.epochInfoList) {
            obj.epoch_info_list = message.epochInfoList.map(function (e) { return e ? epoch_info_1.EpochInfo.toAmino(e) : undefined; });
        }
        else {
            obj.epoch_info_list = message.epochInfoList;
        }
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
            typeUrl: "/nemo_network.epochs.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
