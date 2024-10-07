import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAcknowledgeBridges, MsgCompleteBridge, MsgUpdateEventParams, MsgUpdateProposeParams, MsgUpdateSafetyParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nemo_network.bridge.MsgAcknowledgeBridges", MsgAcknowledgeBridges], ["/nemo_network.bridge.MsgCompleteBridge", MsgCompleteBridge], ["/nemo_network.bridge.MsgUpdateEventParams", MsgUpdateEventParams], ["/nemo_network.bridge.MsgUpdateProposeParams", MsgUpdateProposeParams], ["/nemo_network.bridge.MsgUpdateSafetyParams", MsgUpdateSafetyParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    acknowledgeBridges(value: MsgAcknowledgeBridges) {
      return {
        typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridges",
        value: MsgAcknowledgeBridges.encode(value).finish()
      };
    },
    completeBridge(value: MsgCompleteBridge) {
      return {
        typeUrl: "/nemo_network.bridge.MsgCompleteBridge",
        value: MsgCompleteBridge.encode(value).finish()
      };
    },
    updateEventParams(value: MsgUpdateEventParams) {
      return {
        typeUrl: "/nemo_network.bridge.MsgUpdateEventParams",
        value: MsgUpdateEventParams.encode(value).finish()
      };
    },
    updateProposeParams(value: MsgUpdateProposeParams) {
      return {
        typeUrl: "/nemo_network.bridge.MsgUpdateProposeParams",
        value: MsgUpdateProposeParams.encode(value).finish()
      };
    },
    updateSafetyParams(value: MsgUpdateSafetyParams) {
      return {
        typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParams",
        value: MsgUpdateSafetyParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    acknowledgeBridges(value: MsgAcknowledgeBridges) {
      return {
        typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridges",
        value
      };
    },
    completeBridge(value: MsgCompleteBridge) {
      return {
        typeUrl: "/nemo_network.bridge.MsgCompleteBridge",
        value
      };
    },
    updateEventParams(value: MsgUpdateEventParams) {
      return {
        typeUrl: "/nemo_network.bridge.MsgUpdateEventParams",
        value
      };
    },
    updateProposeParams(value: MsgUpdateProposeParams) {
      return {
        typeUrl: "/nemo_network.bridge.MsgUpdateProposeParams",
        value
      };
    },
    updateSafetyParams(value: MsgUpdateSafetyParams) {
      return {
        typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParams",
        value
      };
    }
  },
  fromPartial: {
    acknowledgeBridges(value: MsgAcknowledgeBridges) {
      return {
        typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridges",
        value: MsgAcknowledgeBridges.fromPartial(value)
      };
    },
    completeBridge(value: MsgCompleteBridge) {
      return {
        typeUrl: "/nemo_network.bridge.MsgCompleteBridge",
        value: MsgCompleteBridge.fromPartial(value)
      };
    },
    updateEventParams(value: MsgUpdateEventParams) {
      return {
        typeUrl: "/nemo_network.bridge.MsgUpdateEventParams",
        value: MsgUpdateEventParams.fromPartial(value)
      };
    },
    updateProposeParams(value: MsgUpdateProposeParams) {
      return {
        typeUrl: "/nemo_network.bridge.MsgUpdateProposeParams",
        value: MsgUpdateProposeParams.fromPartial(value)
      };
    },
    updateSafetyParams(value: MsgUpdateSafetyParams) {
      return {
        typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParams",
        value: MsgUpdateSafetyParams.fromPartial(value)
      };
    }
  }
};