import { MsgDelayMessage } from "./tx";
export const AminoConverter = {
  "/nemo_network.delaymsg.MsgDelayMessage": {
    aminoType: "/nemo_network.delaymsg.MsgDelayMessage",
    toAmino: MsgDelayMessage.toAmino,
    fromAmino: MsgDelayMessage.fromAmino
  }
};