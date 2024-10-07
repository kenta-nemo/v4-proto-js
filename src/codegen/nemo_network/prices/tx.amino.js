"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.prices.MsgUpdateMarketPrices": {
        aminoType: "/nemo_network.prices.MsgUpdateMarketPrices",
        toAmino: tx_1.MsgUpdateMarketPrices.toAmino,
        fromAmino: tx_1.MsgUpdateMarketPrices.fromAmino
    },
    "/nemo_network.prices.MsgCreateOracleMarket": {
        aminoType: "/nemo_network.prices.MsgCreateOracleMarket",
        toAmino: tx_1.MsgCreateOracleMarket.toAmino,
        fromAmino: tx_1.MsgCreateOracleMarket.fromAmino
    },
    "/nemo_network.prices.MsgUpdateMarketParam": {
        aminoType: "/nemo_network.prices.MsgUpdateMarketParam",
        toAmino: tx_1.MsgUpdateMarketParam.toAmino,
        fromAmino: tx_1.MsgUpdateMarketParam.fromAmino
    }
};
