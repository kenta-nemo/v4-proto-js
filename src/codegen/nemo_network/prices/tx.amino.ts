import { MsgUpdateMarketPrices, MsgCreateOracleMarket, MsgUpdateMarketParam } from "./tx";
export const AminoConverter = {
  "/nemo_network.prices.MsgUpdateMarketPrices": {
    aminoType: "/nemo_network.prices.MsgUpdateMarketPrices",
    toAmino: MsgUpdateMarketPrices.toAmino,
    fromAmino: MsgUpdateMarketPrices.fromAmino
  },
  "/nemo_network.prices.MsgCreateOracleMarket": {
    aminoType: "/nemo_network.prices.MsgCreateOracleMarket",
    toAmino: MsgCreateOracleMarket.toAmino,
    fromAmino: MsgCreateOracleMarket.fromAmino
  },
  "/nemo_network.prices.MsgUpdateMarketParam": {
    aminoType: "/nemo_network.prices.MsgUpdateMarketParam",
    toAmino: MsgUpdateMarketParam.toAmino,
    fromAmino: MsgUpdateMarketParam.fromAmino
  }
};