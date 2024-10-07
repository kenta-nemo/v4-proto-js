import { MsgSetMarketMapperRevenueShare, MsgSetMarketMapperRevShareDetailsForMarket } from "./tx";
export const AminoConverter = {
  "/nemo_network.revshare.MsgSetMarketMapperRevenueShare": {
    aminoType: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
    toAmino: MsgSetMarketMapperRevenueShare.toAmino,
    fromAmino: MsgSetMarketMapperRevenueShare.fromAmino
  },
  "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket": {
    aminoType: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
    toAmino: MsgSetMarketMapperRevShareDetailsForMarket.toAmino,
    fromAmino: MsgSetMarketMapperRevShareDetailsForMarket.fromAmino
  }
};