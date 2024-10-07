"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var vest_entry_1 = require("./vest_entry");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        vestEntries: []
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.vest.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.vestEntries; _i < _a.length; _i++) {
            var v = _a[_i];
            vest_entry_1.VestEntry.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.vestEntries.push(vest_entry_1.VestEntry.decode(reader, reader.uint32()));
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
        message.vestEntries = ((_a = object.vestEntries) === null || _a === void 0 ? void 0 : _a.map(function (e) { return vest_entry_1.VestEntry.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.vestEntries = ((_a = object.vest_entries) === null || _a === void 0 ? void 0 : _a.map(function (e) { return vest_entry_1.VestEntry.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.vestEntries) {
            obj.vest_entries = message.vestEntries.map(function (e) { return e ? vest_entry_1.VestEntry.toAmino(e) : undefined; });
        }
        else {
            obj.vest_entries = message.vestEntries;
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
            typeUrl: "/nemo_network.vest.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
