import { MsgSetVestEntry, MsgDeleteVestEntry } from "./tx";
export const AminoConverter = {
  "/nemo_network.vest.MsgSetVestEntry": {
    aminoType: "/nemo_network.vest.MsgSetVestEntry",
    toAmino: MsgSetVestEntry.toAmino,
    fromAmino: MsgSetVestEntry.fromAmino
  },
  "/nemo_network.vest.MsgDeleteVestEntry": {
    aminoType: "/nemo_network.vest.MsgDeleteVestEntry",
    toAmino: MsgDeleteVestEntry.toAmino,
    fromAmino: MsgDeleteVestEntry.fromAmino
  }
};