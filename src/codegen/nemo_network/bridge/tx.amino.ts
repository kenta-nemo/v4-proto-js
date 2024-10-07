import { MsgAcknowledgeBridges, MsgCompleteBridge, MsgUpdateEventParams, MsgUpdateProposeParams, MsgUpdateSafetyParams } from "./tx";
export const AminoConverter = {
  "/nemo_network.bridge.MsgAcknowledgeBridges": {
    aminoType: "/nemo_network.bridge.MsgAcknowledgeBridges",
    toAmino: MsgAcknowledgeBridges.toAmino,
    fromAmino: MsgAcknowledgeBridges.fromAmino
  },
  "/nemo_network.bridge.MsgCompleteBridge": {
    aminoType: "/nemo_network.bridge.MsgCompleteBridge",
    toAmino: MsgCompleteBridge.toAmino,
    fromAmino: MsgCompleteBridge.fromAmino
  },
  "/nemo_network.bridge.MsgUpdateEventParams": {
    aminoType: "/nemo_network.bridge.MsgUpdateEventParams",
    toAmino: MsgUpdateEventParams.toAmino,
    fromAmino: MsgUpdateEventParams.fromAmino
  },
  "/nemo_network.bridge.MsgUpdateProposeParams": {
    aminoType: "/nemo_network.bridge.MsgUpdateProposeParams",
    toAmino: MsgUpdateProposeParams.toAmino,
    fromAmino: MsgUpdateProposeParams.fromAmino
  },
  "/nemo_network.bridge.MsgUpdateSafetyParams": {
    aminoType: "/nemo_network.bridge.MsgUpdateSafetyParams",
    toAmino: MsgUpdateSafetyParams.toAmino,
    fromAmino: MsgUpdateSafetyParams.fromAmino
  }
};