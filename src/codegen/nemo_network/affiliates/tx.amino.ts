import { MsgRegisterAffiliate, MsgUpdateAffiliateTiers } from "./tx";
export const AminoConverter = {
  "/nemo_network.affiliates.MsgRegisterAffiliate": {
    aminoType: "/nemo_network.affiliates.MsgRegisterAffiliate",
    toAmino: MsgRegisterAffiliate.toAmino,
    fromAmino: MsgRegisterAffiliate.fromAmino
  },
  "/nemo_network.affiliates.MsgUpdateAffiliateTiers": {
    aminoType: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
    toAmino: MsgUpdateAffiliateTiers.toAmino,
    fromAmino: MsgUpdateAffiliateTiers.fromAmino
  }
};