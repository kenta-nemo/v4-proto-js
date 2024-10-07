import { LCDClient } from "@cosmology/lcd";
import { QueryListingVaultDepositParams, QueryListingVaultDepositParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.listingVaultDepositParams = this.listingVaultDepositParams.bind(this);
  }
  /* Queries the listing vault deposit params */
  async listingVaultDepositParams(_params: QueryListingVaultDepositParams = {}): Promise<QueryListingVaultDepositParamsResponseSDKType> {
    const endpoint = `nemo_network/listing/vault_deposit_params`;
    return await this.req.get<QueryListingVaultDepositParamsResponseSDKType>(endpoint);
  }
}