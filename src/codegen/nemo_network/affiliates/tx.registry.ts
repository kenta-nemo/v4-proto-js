import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAffiliate, MsgUpdateAffiliateTiers } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nemo_network.affiliates.MsgRegisterAffiliate", MsgRegisterAffiliate], ["/nemo_network.affiliates.MsgUpdateAffiliateTiers", MsgUpdateAffiliateTiers]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAffiliate(value: MsgRegisterAffiliate) {
      return {
        typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliate",
        value: MsgRegisterAffiliate.encode(value).finish()
      };
    },
    updateAffiliateTiers(value: MsgUpdateAffiliateTiers) {
      return {
        typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
        value: MsgUpdateAffiliateTiers.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAffiliate(value: MsgRegisterAffiliate) {
      return {
        typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliate",
        value
      };
    },
    updateAffiliateTiers(value: MsgUpdateAffiliateTiers) {
      return {
        typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
        value
      };
    }
  },
  fromPartial: {
    registerAffiliate(value: MsgRegisterAffiliate) {
      return {
        typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliate",
        value: MsgRegisterAffiliate.fromPartial(value)
      };
    },
    updateAffiliateTiers(value: MsgUpdateAffiliateTiers) {
      return {
        typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
        value: MsgUpdateAffiliateTiers.fromPartial(value)
      };
    }
  }
};