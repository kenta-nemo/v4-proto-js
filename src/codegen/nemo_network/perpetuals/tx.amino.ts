import { MsgAddPremiumVotes, MsgCreatePerpetual, MsgSetLiquidityTier, MsgUpdatePerpetualParams, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/nemo_network.perpetuals.MsgAddPremiumVotes": {
    aminoType: "/nemo_network.perpetuals.MsgAddPremiumVotes",
    toAmino: MsgAddPremiumVotes.toAmino,
    fromAmino: MsgAddPremiumVotes.fromAmino
  },
  "/nemo_network.perpetuals.MsgCreatePerpetual": {
    aminoType: "/nemo_network.perpetuals.MsgCreatePerpetual",
    toAmino: MsgCreatePerpetual.toAmino,
    fromAmino: MsgCreatePerpetual.fromAmino
  },
  "/nemo_network.perpetuals.MsgSetLiquidityTier": {
    aminoType: "/nemo_network.perpetuals.MsgSetLiquidityTier",
    toAmino: MsgSetLiquidityTier.toAmino,
    fromAmino: MsgSetLiquidityTier.fromAmino
  },
  "/nemo_network.perpetuals.MsgUpdatePerpetualParams": {
    aminoType: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
    toAmino: MsgUpdatePerpetualParams.toAmino,
    fromAmino: MsgUpdatePerpetualParams.fromAmino
  },
  "/nemo_network.perpetuals.MsgUpdateParams": {
    aminoType: "/nemo_network.perpetuals.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};