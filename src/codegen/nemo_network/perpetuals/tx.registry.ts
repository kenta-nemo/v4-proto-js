import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddPremiumVotes, MsgCreatePerpetual, MsgSetLiquidityTier, MsgUpdatePerpetualParams, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nemo_network.perpetuals.MsgAddPremiumVotes", MsgAddPremiumVotes], ["/nemo_network.perpetuals.MsgCreatePerpetual", MsgCreatePerpetual], ["/nemo_network.perpetuals.MsgSetLiquidityTier", MsgSetLiquidityTier], ["/nemo_network.perpetuals.MsgUpdatePerpetualParams", MsgUpdatePerpetualParams], ["/nemo_network.perpetuals.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addPremiumVotes(value: MsgAddPremiumVotes) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotes",
        value: MsgAddPremiumVotes.encode(value).finish()
      };
    },
    createPerpetual(value: MsgCreatePerpetual) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetual",
        value: MsgCreatePerpetual.encode(value).finish()
      };
    },
    setLiquidityTier(value: MsgSetLiquidityTier) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTier",
        value: MsgSetLiquidityTier.encode(value).finish()
      };
    },
    updatePerpetualParams(value: MsgUpdatePerpetualParams) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
        value: MsgUpdatePerpetualParams.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addPremiumVotes(value: MsgAddPremiumVotes) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotes",
        value
      };
    },
    createPerpetual(value: MsgCreatePerpetual) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetual",
        value
      };
    },
    setLiquidityTier(value: MsgSetLiquidityTier) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTier",
        value
      };
    },
    updatePerpetualParams(value: MsgUpdatePerpetualParams) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    addPremiumVotes(value: MsgAddPremiumVotes) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotes",
        value: MsgAddPremiumVotes.fromPartial(value)
      };
    },
    createPerpetual(value: MsgCreatePerpetual) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetual",
        value: MsgCreatePerpetual.fromPartial(value)
      };
    },
    setLiquidityTier(value: MsgSetLiquidityTier) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTier",
        value: MsgSetLiquidityTier.fromPartial(value)
      };
    },
    updatePerpetualParams(value: MsgUpdatePerpetualParams) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
        value: MsgUpdatePerpetualParams.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/nemo_network.perpetuals.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};