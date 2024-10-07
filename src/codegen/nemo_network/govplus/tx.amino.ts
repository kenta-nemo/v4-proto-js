import { MsgSlashValidator } from "./tx";
export const AminoConverter = {
  "/nemo_network.govplus.MsgSlashValidator": {
    aminoType: "/nemo_network.govplus.MsgSlashValidator",
    toAmino: MsgSlashValidator.toAmino,
    fromAmino: MsgSlashValidator.fromAmino
  }
};