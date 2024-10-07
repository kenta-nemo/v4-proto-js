"use strict";
exports.__esModule = true;
exports.MarketPrice = void 0;
var binary_1 = require("../../binary");
function createBaseMarketPrice() {
    return {
        id: 0,
        exponent: 0,
        price: BigInt(0)
    };
}
exports.MarketPrice = {
    typeUrl: "/nemo_network.prices.MarketPrice",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).sint32(message.exponent);
        }
        if (message.price !== BigInt(0)) {
            writer.uint32(24).uint64(message.price);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketPrice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.exponent = reader.sint32();
                    break;
                case 3:
                    message.price = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMarketPrice();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.exponent = (_b = object.exponent) !== null && _b !== void 0 ? _b : 0;
        message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketPrice();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = BigInt(object.price);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        obj.price = message.price !== BigInt(0) ? ((_a = message.price) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketPrice.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketPrice.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketPrice.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.MarketPrice",
            value: exports.MarketPrice.encode(message).finish()
        };
    }
};
