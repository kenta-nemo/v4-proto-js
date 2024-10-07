import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetVestEntry, MsgDeleteVestEntry } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nemo_network.vest.MsgSetVestEntry", MsgSetVestEntry], ["/nemo_network.vest.MsgDeleteVestEntry", MsgDeleteVestEntry]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setVestEntry(value: MsgSetVestEntry) {
      return {
        typeUrl: "/nemo_network.vest.MsgSetVestEntry",
        value: MsgSetVestEntry.encode(value).finish()
      };
    },
    deleteVestEntry(value: MsgDeleteVestEntry) {
      return {
        typeUrl: "/nemo_network.vest.MsgDeleteVestEntry",
        value: MsgDeleteVestEntry.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setVestEntry(value: MsgSetVestEntry) {
      return {
        typeUrl: "/nemo_network.vest.MsgSetVestEntry",
        value
      };
    },
    deleteVestEntry(value: MsgDeleteVestEntry) {
      return {
        typeUrl: "/nemo_network.vest.MsgDeleteVestEntry",
        value
      };
    }
  },
  fromPartial: {
    setVestEntry(value: MsgSetVestEntry) {
      return {
        typeUrl: "/nemo_network.vest.MsgSetVestEntry",
        value: MsgSetVestEntry.fromPartial(value)
      };
    },
    deleteVestEntry(value: MsgDeleteVestEntry) {
      return {
        typeUrl: "/nemo_network.vest.MsgDeleteVestEntry",
        value: MsgDeleteVestEntry.fromPartial(value)
      };
    }
  }
};