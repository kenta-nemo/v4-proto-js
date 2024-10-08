import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateMarketPrices, MsgUpdateMarketPricesResponse, MsgCreateOracleMarket, MsgCreateOracleMarketResponse, MsgUpdateMarketParam, MsgUpdateMarketParamResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateMarketPrices updates the oracle price of a market relative to
   * quoteCurrency.
   */
  updateMarketPrices(request: MsgUpdateMarketPrices): Promise<MsgUpdateMarketPricesResponse>;
  /** CreateOracleMarket creates a new oracle market. */
  createOracleMarket(request: MsgCreateOracleMarket): Promise<MsgCreateOracleMarketResponse>;
  /**
   * UpdateMarketParams allows governance to update the parameters of an
   * oracle market.
   */
  updateMarketParam(request: MsgUpdateMarketParam): Promise<MsgUpdateMarketParamResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateMarketPrices = this.updateMarketPrices.bind(this);
    this.createOracleMarket = this.createOracleMarket.bind(this);
    this.updateMarketParam = this.updateMarketParam.bind(this);
  }
  updateMarketPrices(request: MsgUpdateMarketPrices): Promise<MsgUpdateMarketPricesResponse> {
    const data = MsgUpdateMarketPrices.encode(request).finish();
    const promise = this.rpc.request("nemo_network.prices.Msg", "UpdateMarketPrices", data);
    return promise.then(data => MsgUpdateMarketPricesResponse.decode(new BinaryReader(data)));
  }
  createOracleMarket(request: MsgCreateOracleMarket): Promise<MsgCreateOracleMarketResponse> {
    const data = MsgCreateOracleMarket.encode(request).finish();
    const promise = this.rpc.request("nemo_network.prices.Msg", "CreateOracleMarket", data);
    return promise.then(data => MsgCreateOracleMarketResponse.decode(new BinaryReader(data)));
  }
  updateMarketParam(request: MsgUpdateMarketParam): Promise<MsgUpdateMarketParamResponse> {
    const data = MsgUpdateMarketParam.encode(request).finish();
    const promise = this.rpc.request("nemo_network.prices.Msg", "UpdateMarketParam", data);
    return promise.then(data => MsgUpdateMarketParamResponse.decode(new BinaryReader(data)));
  }
}