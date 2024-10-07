import { MsgSetMarketsHardCap, MsgCreateMarketPermissionless, MsgSetListingVaultDepositParams } from "./tx";
export const AminoConverter = {
  "/nemo_network.listing.MsgSetMarketsHardCap": {
    aminoType: "/nemo_network.listing.MsgSetMarketsHardCap",
    toAmino: MsgSetMarketsHardCap.toAmino,
    fromAmino: MsgSetMarketsHardCap.fromAmino
  },
  "/nemo_network.listing.MsgCreateMarketPermissionless": {
    aminoType: "/nemo_network.listing.MsgCreateMarketPermissionless",
    toAmino: MsgCreateMarketPermissionless.toAmino,
    fromAmino: MsgCreateMarketPermissionless.fromAmino
  },
  "/nemo_network.listing.MsgSetListingVaultDepositParams": {
    aminoType: "/nemo_network.listing.MsgSetListingVaultDepositParams",
    toAmino: MsgSetListingVaultDepositParams.toAmino,
    fromAmino: MsgSetListingVaultDepositParams.fromAmino
  }
};