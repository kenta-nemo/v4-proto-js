import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ListLimitParamsRequest, ListLimitParamsResponse, QueryCapacityByDenomRequest, QueryCapacityByDenomResponse, QueryAllPendingSendPacketsRequest, QueryAllPendingSendPacketsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** List all limit params. */
  listLimitParams(request?: ListLimitParamsRequest): Promise<ListLimitParamsResponse>;
  /** Query capacity by denom. */
  capacityByDenom(request: QueryCapacityByDenomRequest): Promise<QueryCapacityByDenomResponse>;
  /** Get all pending send packets */
  allPendingSendPackets(request?: QueryAllPendingSendPacketsRequest): Promise<QueryAllPendingSendPacketsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.listLimitParams = this.listLimitParams.bind(this);
    this.capacityByDenom = this.capacityByDenom.bind(this);
    this.allPendingSendPackets = this.allPendingSendPackets.bind(this);
  }
  listLimitParams(request: ListLimitParamsRequest = {}): Promise<ListLimitParamsResponse> {
    const data = ListLimitParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nemo_network.ratelimit.Query", "ListLimitParams", data);
    return promise.then(data => ListLimitParamsResponse.decode(new BinaryReader(data)));
  }
  capacityByDenom(request: QueryCapacityByDenomRequest): Promise<QueryCapacityByDenomResponse> {
    const data = QueryCapacityByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("nemo_network.ratelimit.Query", "CapacityByDenom", data);
    return promise.then(data => QueryCapacityByDenomResponse.decode(new BinaryReader(data)));
  }
  allPendingSendPackets(request: QueryAllPendingSendPacketsRequest = {}): Promise<QueryAllPendingSendPacketsResponse> {
    const data = QueryAllPendingSendPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("nemo_network.ratelimit.Query", "AllPendingSendPackets", data);
    return promise.then(data => QueryAllPendingSendPacketsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    listLimitParams(request?: ListLimitParamsRequest): Promise<ListLimitParamsResponse> {
      return queryService.listLimitParams(request);
    },
    capacityByDenom(request: QueryCapacityByDenomRequest): Promise<QueryCapacityByDenomResponse> {
      return queryService.capacityByDenom(request);
    },
    allPendingSendPackets(request?: QueryAllPendingSendPacketsRequest): Promise<QueryAllPendingSendPacketsResponse> {
      return queryService.allPendingSendPackets(request);
    }
  };
};