import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateMarketPrices, MsgCreateOracleMarket, MsgUpdateMarketParam } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nemo_network.prices.MsgUpdateMarketPrices", MsgUpdateMarketPrices], ["/nemo_network.prices.MsgCreateOracleMarket", MsgCreateOracleMarket], ["/nemo_network.prices.MsgUpdateMarketParam", MsgUpdateMarketParam]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateMarketPrices(value: MsgUpdateMarketPrices) {
      return {
        typeUrl: "/nemo_network.prices.MsgUpdateMarketPrices",
        value: MsgUpdateMarketPrices.encode(value).finish()
      };
    },
    createOracleMarket(value: MsgCreateOracleMarket) {
      return {
        typeUrl: "/nemo_network.prices.MsgCreateOracleMarket",
        value: MsgCreateOracleMarket.encode(value).finish()
      };
    },
    updateMarketParam(value: MsgUpdateMarketParam) {
      return {
        typeUrl: "/nemo_network.prices.MsgUpdateMarketParam",
        value: MsgUpdateMarketParam.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateMarketPrices(value: MsgUpdateMarketPrices) {
      return {
        typeUrl: "/nemo_network.prices.MsgUpdateMarketPrices",
        value
      };
    },
    createOracleMarket(value: MsgCreateOracleMarket) {
      return {
        typeUrl: "/nemo_network.prices.MsgCreateOracleMarket",
        value
      };
    },
    updateMarketParam(value: MsgUpdateMarketParam) {
      return {
        typeUrl: "/nemo_network.prices.MsgUpdateMarketParam",
        value
      };
    }
  },
  fromPartial: {
    updateMarketPrices(value: MsgUpdateMarketPrices) {
      return {
        typeUrl: "/nemo_network.prices.MsgUpdateMarketPrices",
        value: MsgUpdateMarketPrices.fromPartial(value)
      };
    },
    createOracleMarket(value: MsgCreateOracleMarket) {
      return {
        typeUrl: "/nemo_network.prices.MsgCreateOracleMarket",
        value: MsgCreateOracleMarket.fromPartial(value)
      };
    },
    updateMarketParam(value: MsgUpdateMarketParam) {
      return {
        typeUrl: "/nemo_network.prices.MsgUpdateMarketParam",
        value: MsgUpdateMarketParam.fromPartial(value)
      };
    }
  }
};