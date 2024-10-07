"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var subaccount_1 = require("./subaccount");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        subaccounts: []
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.subaccounts.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.subaccounts; _i < _a.length; _i++) {
            var v = _a[_i];
            subaccount_1.Subaccount.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.subaccounts.push(subaccount_1.Subaccount.decode(reader, reader.uint32()));
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
        message.subaccounts = ((_a = object.subaccounts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return subaccount_1.Subaccount.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.subaccounts = ((_a = object.subaccounts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return subaccount_1.Subaccount.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.subaccounts) {
            obj.subaccounts = message.subaccounts.map(function (e) { return e ? subaccount_1.Subaccount.toAmino(e) : undefined; });
        }
        else {
            obj.subaccounts = message.subaccounts;
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
            typeUrl: "/nemo_network.subaccounts.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
