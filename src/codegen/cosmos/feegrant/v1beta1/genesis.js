"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var feegrant_1 = require("./feegrant");
var binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        allowances: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.allowances; _i < _a.length; _i++) {
            var v = _a[_i];
            feegrant_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.allowances.push(feegrant_1.Grant.decode(reader, reader.uint32()));
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
        message.allowances = ((_a = object.allowances) === null || _a === void 0 ? void 0 : _a.map(function (e) { return feegrant_1.Grant.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.allowances = ((_a = object.allowances) === null || _a === void 0 ? void 0 : _a.map(function (e) { return feegrant_1.Grant.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(function (e) { return e ? feegrant_1.Grant.toAmino(e) : undefined; });
        }
        else {
            obj.allowances = message.allowances;
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
            typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
