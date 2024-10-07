"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var market_param_1 = require("./market_param");
var market_price_1 = require("./market_price");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        marketParams: [],
        marketPrices: []
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.prices.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.marketParams; _i < _a.length; _i++) {
            var v = _a[_i];
            market_param_1.MarketParam.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.marketPrices; _b < _c.length; _b++) {
            var v = _c[_b];
            market_price_1.MarketPrice.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.marketParams.push(market_param_1.MarketParam.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.marketPrices.push(market_price_1.MarketPrice.decode(reader, reader.uint32()));
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
        var message = createBaseGenesisState();
        message.marketParams = ((_a = object.marketParams) === null || _a === void 0 ? void 0 : _a.map(function (e) { return market_param_1.MarketParam.fromPartial(e); })) || [];
        message.marketPrices = ((_b = object.marketPrices) === null || _b === void 0 ? void 0 : _b.map(function (e) { return market_price_1.MarketPrice.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.marketParams = ((_a = object.market_params) === null || _a === void 0 ? void 0 : _a.map(function (e) { return market_param_1.MarketParam.fromAmino(e); })) || [];
        message.marketPrices = ((_b = object.market_prices) === null || _b === void 0 ? void 0 : _b.map(function (e) { return market_price_1.MarketPrice.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.marketParams) {
            obj.market_params = message.marketParams.map(function (e) { return e ? market_param_1.MarketParam.toAmino(e) : undefined; });
        }
        else {
            obj.market_params = message.marketParams;
        }
        if (message.marketPrices) {
            obj.market_prices = message.marketPrices.map(function (e) { return e ? market_price_1.MarketPrice.toAmino(e) : undefined; });
        }
        else {
            obj.market_prices = message.marketPrices;
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
            typeUrl: "/nemo_network.prices.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
