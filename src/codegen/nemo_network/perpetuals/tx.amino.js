"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.perpetuals.MsgAddPremiumVotes": {
        aminoType: "/nemo_network.perpetuals.MsgAddPremiumVotes",
        toAmino: tx_1.MsgAddPremiumVotes.toAmino,
        fromAmino: tx_1.MsgAddPremiumVotes.fromAmino
    },
    "/nemo_network.perpetuals.MsgCreatePerpetual": {
        aminoType: "/nemo_network.perpetuals.MsgCreatePerpetual",
        toAmino: tx_1.MsgCreatePerpetual.toAmino,
        fromAmino: tx_1.MsgCreatePerpetual.fromAmino
    },
    "/nemo_network.perpetuals.MsgSetLiquidityTier": {
        aminoType: "/nemo_network.perpetuals.MsgSetLiquidityTier",
        toAmino: tx_1.MsgSetLiquidityTier.toAmino,
        fromAmino: tx_1.MsgSetLiquidityTier.fromAmino
    },
    "/nemo_network.perpetuals.MsgUpdatePerpetualParams": {
        aminoType: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
        toAmino: tx_1.MsgUpdatePerpetualParams.toAmino,
        fromAmino: tx_1.MsgUpdatePerpetualParams.fromAmino
    },
    "/nemo_network.perpetuals.MsgUpdateParams": {
        aminoType: "/nemo_network.perpetuals.MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
