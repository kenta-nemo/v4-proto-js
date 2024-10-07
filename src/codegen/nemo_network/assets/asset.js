"use strict";
exports.__esModule = true;
exports.Asset = void 0;
var binary_1 = require("../../binary");
function createBaseAsset() {
    return {
        id: 0,
        symbol: "",
        denom: "",
        denomExponent: 0,
        hasMarket: false,
        marketId: 0,
        atomicResolution: 0
    };
}
exports.Asset = {
    typeUrl: "/nemo_network.assets.Asset",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.denomExponent !== 0) {
            writer.uint32(32).sint32(message.denomExponent);
        }
        if (message.hasMarket === true) {
            writer.uint32(40).bool(message.hasMarket);
        }
        if (message.marketId !== 0) {
            writer.uint32(48).uint32(message.marketId);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(56).sint32(message.atomicResolution);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAsset();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.denomExponent = reader.sint32();
                    break;
                case 5:
                    message.hasMarket = reader.bool();
                    break;
                case 6:
                    message.marketId = reader.uint32();
                    break;
                case 7:
                    message.atomicResolution = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseAsset();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.denomExponent = (_d = object.denomExponent) !== null && _d !== void 0 ? _d : 0;
        message.hasMarket = (_e = object.hasMarket) !== null && _e !== void 0 ? _e : false;
        message.marketId = (_f = object.marketId) !== null && _f !== void 0 ? _f : 0;
        message.atomicResolution = (_g = object.atomicResolution) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAsset();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.denom_exponent !== undefined && object.denom_exponent !== null) {
            message.denomExponent = object.denom_exponent;
        }
        if (object.has_market !== undefined && object.has_market !== null) {
            message.hasMarket = object.has_market;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
            message.atomicResolution = object.atomic_resolution;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.denom_exponent = message.denomExponent === 0 ? undefined : message.denomExponent;
        obj.has_market = message.hasMarket === false ? undefined : message.hasMarket;
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Asset.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Asset.decode(message.value);
    },
    toProto: function (message) {
        return exports.Asset.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.assets.Asset",
            value: exports.Asset.encode(message).finish()
        };
    }
};
