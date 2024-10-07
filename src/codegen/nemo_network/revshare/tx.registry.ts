import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetMarketMapperRevenueShare, MsgSetMarketMapperRevShareDetailsForMarket } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nemo_network.revshare.MsgSetMarketMapperRevenueShare", MsgSetMarketMapperRevenueShare], ["/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket", MsgSetMarketMapperRevShareDetailsForMarket]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setMarketMapperRevenueShare(value: MsgSetMarketMapperRevenueShare) {
      return {
        typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
        value: MsgSetMarketMapperRevenueShare.encode(value).finish()
      };
    },
    setMarketMapperRevShareDetailsForMarket(value: MsgSetMarketMapperRevShareDetailsForMarket) {
      return {
        typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
        value: MsgSetMarketMapperRevShareDetailsForMarket.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setMarketMapperRevenueShare(value: MsgSetMarketMapperRevenueShare) {
      return {
        typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
        value
      };
    },
    setMarketMapperRevShareDetailsForMarket(value: MsgSetMarketMapperRevShareDetailsForMarket) {
      return {
        typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
        value
      };
    }
  },
  fromPartial: {
    setMarketMapperRevenueShare(value: MsgSetMarketMapperRevenueShare) {
      return {
        typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
        value: MsgSetMarketMapperRevenueShare.fromPartial(value)
      };
    },
    setMarketMapperRevShareDetailsForMarket(value: MsgSetMarketMapperRevShareDetailsForMarket) {
      return {
        typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
        value: MsgSetMarketMapperRevShareDetailsForMarket.fromPartial(value)
      };
    }
  }
};