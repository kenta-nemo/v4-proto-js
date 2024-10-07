"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        genTxs: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.genTxs; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
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
                    message.genTxs.push(reader.bytes());
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
        message.genTxs = ((_a = object.genTxs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.genTxs = ((_a = object.gen_txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return (0, helpers_1.bytesFromBase64)(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.genTxs) {
            obj.gen_txs = message.genTxs.map(function (e) { return (0, helpers_1.base64FromBytes)(e); });
        }
        else {
            obj.gen_txs = message.genTxs;
        }
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
            typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
