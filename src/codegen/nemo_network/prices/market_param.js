"use strict";
exports.__esModule = true;
exports.MarketParam = void 0;
var binary_1 = require("../../binary");
function createBaseMarketParam() {
    return {
        id: 0,
        pair: "",
        exponent: 0,
        minExchanges: 0,
        minPriceChangePpm: 0,
        exchangeConfigJson: ""
    };
}
exports.MarketParam = {
    typeUrl: "/nemo_network.prices.MarketParam",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.pair !== "") {
            writer.uint32(18).string(message.pair);
        }
        if (message.exponent !== 0) {
            writer.uint32(24).sint32(message.exponent);
        }
        if (message.minExchanges !== 0) {
            writer.uint32(32).uint32(message.minExchanges);
        }
        if (message.minPriceChangePpm !== 0) {
            writer.uint32(40).uint32(message.minPriceChangePpm);
        }
        if (message.exchangeConfigJson !== "") {
            writer.uint32(50).string(message.exchangeConfigJson);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketParam();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.pair = reader.string();
                    break;
                case 3:
                    message.exponent = reader.sint32();
                    break;
                case 4:
                    message.minExchanges = reader.uint32();
                    break;
                case 5:
                    message.minPriceChangePpm = reader.uint32();
                    break;
                case 6:
                    message.exchangeConfigJson = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseMarketParam();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.pair = (_b = object.pair) !== null && _b !== void 0 ? _b : "";
        message.exponent = (_c = object.exponent) !== null && _c !== void 0 ? _c : 0;
        message.minExchanges = (_d = object.minExchanges) !== null && _d !== void 0 ? _d : 0;
        message.minPriceChangePpm = (_e = object.minPriceChangePpm) !== null && _e !== void 0 ? _e : 0;
        message.exchangeConfigJson = (_f = object.exchangeConfigJson) !== null && _f !== void 0 ? _f : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketParam();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.pair !== undefined && object.pair !== null) {
            message.pair = object.pair;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        if (object.min_exchanges !== undefined && object.min_exchanges !== null) {
            message.minExchanges = object.min_exchanges;
        }
        if (object.min_price_change_ppm !== undefined && object.min_price_change_ppm !== null) {
            message.minPriceChangePpm = object.min_price_change_ppm;
        }
        if (object.exchange_config_json !== undefined && object.exchange_config_json !== null) {
            message.exchangeConfigJson = object.exchange_config_json;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.pair = message.pair === "" ? undefined : message.pair;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        obj.min_exchanges = message.minExchanges === 0 ? undefined : message.minExchanges;
        obj.min_price_change_ppm = message.minPriceChangePpm === 0 ? undefined : message.minPriceChangePpm;
        obj.exchange_config_json = message.exchangeConfigJson === "" ? undefined : message.exchangeConfigJson;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketParam.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketParam.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketParam.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.MarketParam",
            value: exports.MarketParam.encode(message).finish()
        };
    }
};
