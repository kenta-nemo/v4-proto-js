import { MsgProposedOperations, MsgPlaceOrder, MsgCancelOrder, MsgBatchCancel, MsgCreateClobPair, MsgUpdateClobPair, MsgUpdateEquityTierLimitConfiguration, MsgUpdateBlockRateLimitConfiguration, MsgUpdateLiquidationsConfig } from "./tx";
export const AminoConverter = {
  "/nemo_network.clob.MsgProposedOperations": {
    aminoType: "/nemo_network.clob.MsgProposedOperations",
    toAmino: MsgProposedOperations.toAmino,
    fromAmino: MsgProposedOperations.fromAmino
  },
  "/nemo_network.clob.MsgPlaceOrder": {
    aminoType: "/nemo_network.clob.MsgPlaceOrder",
    toAmino: MsgPlaceOrder.toAmino,
    fromAmino: MsgPlaceOrder.fromAmino
  },
  "/nemo_network.clob.MsgCancelOrder": {
    aminoType: "/nemo_network.clob.MsgCancelOrder",
    toAmino: MsgCancelOrder.toAmino,
    fromAmino: MsgCancelOrder.fromAmino
  },
  "/nemo_network.clob.MsgBatchCancel": {
    aminoType: "/nemo_network.clob.MsgBatchCancel",
    toAmino: MsgBatchCancel.toAmino,
    fromAmino: MsgBatchCancel.fromAmino
  },
  "/nemo_network.clob.MsgCreateClobPair": {
    aminoType: "/nemo_network.clob.MsgCreateClobPair",
    toAmino: MsgCreateClobPair.toAmino,
    fromAmino: MsgCreateClobPair.fromAmino
  },
  "/nemo_network.clob.MsgUpdateClobPair": {
    aminoType: "/nemo_network.clob.MsgUpdateClobPair",
    toAmino: MsgUpdateClobPair.toAmino,
    fromAmino: MsgUpdateClobPair.fromAmino
  },
  "/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration": {
    aminoType: "/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration",
    toAmino: MsgUpdateEquityTierLimitConfiguration.toAmino,
    fromAmino: MsgUpdateEquityTierLimitConfiguration.fromAmino
  },
  "/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration": {
    aminoType: "/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration",
    toAmino: MsgUpdateBlockRateLimitConfiguration.toAmino,
    fromAmino: MsgUpdateBlockRateLimitConfiguration.fromAmino
  },
  "/nemo_network.clob.MsgUpdateLiquidationsConfig": {
    aminoType: "/nemo_network.clob.MsgUpdateLiquidationsConfig",
    toAmino: MsgUpdateLiquidationsConfig.toAmino,
    fromAmino: MsgUpdateLiquidationsConfig.fromAmino
  }
};