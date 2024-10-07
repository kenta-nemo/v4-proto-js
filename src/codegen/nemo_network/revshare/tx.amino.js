"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.revshare.MsgSetMarketMapperRevenueShare": {
        aminoType: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
        toAmino: tx_1.MsgSetMarketMapperRevenueShare.toAmino,
        fromAmino: tx_1.MsgSetMarketMapperRevenueShare.fromAmino
    },
    "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket": {
        aminoType: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
        toAmino: tx_1.MsgSetMarketMapperRevShareDetailsForMarket.toAmino,
        fromAmino: tx_1.MsgSetMarketMapperRevShareDetailsForMarket.fromAmino
    }
};
