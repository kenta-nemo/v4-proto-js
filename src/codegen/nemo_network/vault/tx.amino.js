"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.vault.MsgDepositToMegavault": {
        aminoType: "/nemo_network.vault.MsgDepositToMegavault",
        toAmino: tx_1.MsgDepositToMegavault.toAmino,
        fromAmino: tx_1.MsgDepositToMegavault.fromAmino
    },
    "/nemo_network.vault.MsgUpdateDefaultQuotingParams": {
        aminoType: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
        toAmino: tx_1.MsgUpdateDefaultQuotingParams.toAmino,
        fromAmino: tx_1.MsgUpdateDefaultQuotingParams.fromAmino
    },
    "/nemo_network.vault.MsgSetVaultParams": {
        aminoType: "/nemo_network.vault.MsgSetVaultParams",
        toAmino: tx_1.MsgSetVaultParams.toAmino,
        fromAmino: tx_1.MsgSetVaultParams.fromAmino
    }
};
