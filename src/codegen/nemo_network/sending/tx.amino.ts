import { MsgDepositToSubaccount, MsgWithdrawFromSubaccount, MsgSendFromModuleToAccount } from "./transfer";
import { MsgCreateTransfer } from "./tx";
export const AminoConverter = {
  "/nemo_network.sending.MsgCreateTransfer": {
    aminoType: "/nemo_network.sending.MsgCreateTransfer",
    toAmino: MsgCreateTransfer.toAmino,
    fromAmino: MsgCreateTransfer.fromAmino
  },
  "/nemo_network.sending.MsgDepositToSubaccount": {
    aminoType: "/nemo_network.sending.MsgDepositToSubaccount",
    toAmino: MsgDepositToSubaccount.toAmino,
    fromAmino: MsgDepositToSubaccount.fromAmino
  },
  "/nemo_network.sending.MsgWithdrawFromSubaccount": {
    aminoType: "/nemo_network.sending.MsgWithdrawFromSubaccount",
    toAmino: MsgWithdrawFromSubaccount.toAmino,
    fromAmino: MsgWithdrawFromSubaccount.fromAmino
  },
  "/nemo_network.sending.MsgSendFromModuleToAccount": {
    aminoType: "/nemo_network.sending.MsgSendFromModuleToAccount",
    toAmino: MsgSendFromModuleToAccount.toAmino,
    fromAmino: MsgSendFromModuleToAccount.fromAmino
  }
};