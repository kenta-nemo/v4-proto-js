"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var transfer_1 = require("./transfer");
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.sending.MsgCreateTransfer": {
        aminoType: "/nemo_network.sending.MsgCreateTransfer",
        toAmino: tx_1.MsgCreateTransfer.toAmino,
        fromAmino: tx_1.MsgCreateTransfer.fromAmino
    },
    "/nemo_network.sending.MsgDepositToSubaccount": {
        aminoType: "/nemo_network.sending.MsgDepositToSubaccount",
        toAmino: transfer_1.MsgDepositToSubaccount.toAmino,
        fromAmino: transfer_1.MsgDepositToSubaccount.fromAmino
    },
    "/nemo_network.sending.MsgWithdrawFromSubaccount": {
        aminoType: "/nemo_network.sending.MsgWithdrawFromSubaccount",
        toAmino: transfer_1.MsgWithdrawFromSubaccount.toAmino,
        fromAmino: transfer_1.MsgWithdrawFromSubaccount.fromAmino
    },
    "/nemo_network.sending.MsgSendFromModuleToAccount": {
        aminoType: "/nemo_network.sending.MsgSendFromModuleToAccount",
        toAmino: transfer_1.MsgSendFromModuleToAccount.toAmino,
        fromAmino: transfer_1.MsgSendFromModuleToAccount.fromAmino
    }
};
