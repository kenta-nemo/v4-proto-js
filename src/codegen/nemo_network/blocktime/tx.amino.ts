import { MsgUpdateDowntimeParams } from "./tx";
export const AminoConverter = {
  "/nemo_network.blocktime.MsgUpdateDowntimeParams": {
    aminoType: "/nemo_network.blocktime.MsgUpdateDowntimeParams",
    toAmino: MsgUpdateDowntimeParams.toAmino,
    fromAmino: MsgUpdateDowntimeParams.fromAmino
  }
};