"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.prices.MsgUpdateMarketPrices", tx_1.MsgUpdateMarketPrices], ["/nemo_network.prices.MsgCreateOracleMarket", tx_1.MsgCreateOracleMarket], ["/nemo_network.prices.MsgUpdateMarketParam", tx_1.MsgUpdateMarketParam]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        updateMarketPrices: function (value) {
            return {
                typeUrl: "/nemo_network.prices.MsgUpdateMarketPrices",
                value: tx_1.MsgUpdateMarketPrices.encode(value).finish()
            };
        },
        createOracleMarket: function (value) {
            return {
                typeUrl: "/nemo_network.prices.MsgCreateOracleMarket",
                value: tx_1.MsgCreateOracleMarket.encode(value).finish()
            };
        },
        updateMarketParam: function (value) {
            return {
                typeUrl: "/nemo_network.prices.MsgUpdateMarketParam",
                value: tx_1.MsgUpdateMarketParam.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        updateMarketPrices: function (value) {
            return {
                typeUrl: "/nemo_network.prices.MsgUpdateMarketPrices",
                value: value
            };
        },
        createOracleMarket: function (value) {
            return {
                typeUrl: "/nemo_network.prices.MsgCreateOracleMarket",
                value: value
            };
        },
        updateMarketParam: function (value) {
            return {
                typeUrl: "/nemo_network.prices.MsgUpdateMarketParam",
                value: value
            };
        }
    },
    fromPartial: {
        updateMarketPrices: function (value) {
            return {
                typeUrl: "/nemo_network.prices.MsgUpdateMarketPrices",
                value: tx_1.MsgUpdateMarketPrices.fromPartial(value)
            };
        },
        createOracleMarket: function (value) {
            return {
                typeUrl: "/nemo_network.prices.MsgCreateOracleMarket",
                value: tx_1.MsgCreateOracleMarket.fromPartial(value)
            };
        },
        updateMarketParam: function (value) {
            return {
                typeUrl: "/nemo_network.prices.MsgUpdateMarketParam",
                value: tx_1.MsgUpdateMarketParam.fromPartial(value)
            };
        }
    }
};
