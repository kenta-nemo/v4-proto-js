"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var asset_1 = require("./asset");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        assets: []
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.assets.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.assets; _i < _a.length; _i++) {
            var v = _a[_i];
            asset_1.Asset.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.assets.push(asset_1.Asset.decode(reader, reader.uint32()));
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
        message.assets = ((_a = object.assets) === null || _a === void 0 ? void 0 : _a.map(function (e) { return asset_1.Asset.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.assets = ((_a = object.assets) === null || _a === void 0 ? void 0 : _a.map(function (e) { return asset_1.Asset.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(function (e) { return e ? asset_1.Asset.toAmino(e) : undefined; });
        }
        else {
            obj.assets = message.assets;
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
            typeUrl: "/nemo_network.assets.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
