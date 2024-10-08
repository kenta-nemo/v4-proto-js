import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdatePerpetualFeeParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nemo_network.feetiers.MsgUpdatePerpetualFeeParams", MsgUpdatePerpetualFeeParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updatePerpetualFeeParams(value: MsgUpdatePerpetualFeeParams) {
      return {
        typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams",
        value: MsgUpdatePerpetualFeeParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updatePerpetualFeeParams(value: MsgUpdatePerpetualFeeParams) {
      return {
        typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams",
        value
      };
    }
  },
  fromPartial: {
    updatePerpetualFeeParams(value: MsgUpdatePerpetualFeeParams) {
      return {
        typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams",
        value: MsgUpdatePerpetualFeeParams.fromPartial(value)
      };
    }
  }
};