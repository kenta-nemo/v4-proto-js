import { MsgSetLimitParams } from "./tx";
export const AminoConverter = {
  "/nemo_network.ratelimit.MsgSetLimitParams": {
    aminoType: "/nemo_network.ratelimit.MsgSetLimitParams",
    toAmino: MsgSetLimitParams.toAmino,
    fromAmino: MsgSetLimitParams.fromAmino
  }
};