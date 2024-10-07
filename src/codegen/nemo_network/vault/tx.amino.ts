import { MsgDepositToMegavault, MsgUpdateDefaultQuotingParams, MsgSetVaultParams } from "./tx";
export const AminoConverter = {
  "/nemo_network.vault.MsgDepositToMegavault": {
    aminoType: "/nemo_network.vault.MsgDepositToMegavault",
    toAmino: MsgDepositToMegavault.toAmino,
    fromAmino: MsgDepositToMegavault.fromAmino
  },
  "/nemo_network.vault.MsgUpdateDefaultQuotingParams": {
    aminoType: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
    toAmino: MsgUpdateDefaultQuotingParams.toAmino,
    fromAmino: MsgUpdateDefaultQuotingParams.fromAmino
  },
  "/nemo_network.vault.MsgSetVaultParams": {
    aminoType: "/nemo_network.vault.MsgSetVaultParams",
    toAmino: MsgSetVaultParams.toAmino,
    fromAmino: MsgSetVaultParams.fromAmino
  }
};