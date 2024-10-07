import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/nemo_network.stats.MsgUpdateParams": {
    aminoType: "/nemo_network.stats.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};