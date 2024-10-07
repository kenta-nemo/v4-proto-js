"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.clob.MsgProposedOperations": {
        aminoType: "/nemo_network.clob.MsgProposedOperations",
        toAmino: tx_1.MsgProposedOperations.toAmino,
        fromAmino: tx_1.MsgProposedOperations.fromAmino
    },
    "/nemo_network.clob.MsgPlaceOrder": {
        aminoType: "/nemo_network.clob.MsgPlaceOrder",
        toAmino: tx_1.MsgPlaceOrder.toAmino,
        fromAmino: tx_1.MsgPlaceOrder.fromAmino
    },
    "/nemo_network.clob.MsgCancelOrder": {
        aminoType: "/nemo_network.clob.MsgCancelOrder",
        toAmino: tx_1.MsgCancelOrder.toAmino,
        fromAmino: tx_1.MsgCancelOrder.fromAmino
    },
    "/nemo_network.clob.MsgBatchCancel": {
        aminoType: "/nemo_network.clob.MsgBatchCancel",
        toAmino: tx_1.MsgBatchCancel.toAmino,
        fromAmino: tx_1.MsgBatchCancel.fromAmino
    },
    "/nemo_network.clob.MsgCreateClobPair": {
        aminoType: "/nemo_network.clob.MsgCreateClobPair",
        toAmino: tx_1.MsgCreateClobPair.toAmino,
        fromAmino: tx_1.MsgCreateClobPair.fromAmino
    },
    "/nemo_network.clob.MsgUpdateClobPair": {
        aminoType: "/nemo_network.clob.MsgUpdateClobPair",
        toAmino: tx_1.MsgUpdateClobPair.toAmino,
        fromAmino: tx_1.MsgUpdateClobPair.fromAmino
    },
    "/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration": {
        aminoType: "/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration",
        toAmino: tx_1.MsgUpdateEquityTierLimitConfiguration.toAmino,
        fromAmino: tx_1.MsgUpdateEquityTierLimitConfiguration.fromAmino
    },
    "/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration": {
        aminoType: "/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration",
        toAmino: tx_1.MsgUpdateBlockRateLimitConfiguration.toAmino,
        fromAmino: tx_1.MsgUpdateBlockRateLimitConfiguration.fromAmino
    },
    "/nemo_network.clob.MsgUpdateLiquidationsConfig": {
        aminoType: "/nemo_network.clob.MsgUpdateLiquidationsConfig",
        toAmino: tx_1.MsgUpdateLiquidationsConfig.toAmino,
        fromAmino: tx_1.MsgUpdateLiquidationsConfig.fromAmino
    }
};
