import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as nemoNetworkAffiliatesTxRegistry from "./affiliates/tx.registry";
import * as nemoNetworkBlocktimeTxRegistry from "./blocktime/tx.registry";
import * as nemoNetworkBridgeTxRegistry from "./bridge/tx.registry";
import * as nemoNetworkClobTxRegistry from "./clob/tx.registry";
import * as nemoNetworkDelaymsgTxRegistry from "./delaymsg/tx.registry";
import * as nemoNetworkFeetiersTxRegistry from "./feetiers/tx.registry";
import * as nemoNetworkGovplusTxRegistry from "./govplus/tx.registry";
import * as nemoNetworkListingTxRegistry from "./listing/tx.registry";
import * as nemoNetworkPerpetualsTxRegistry from "./perpetuals/tx.registry";
import * as nemoNetworkPricesTxRegistry from "./prices/tx.registry";
import * as nemoNetworkRatelimitTxRegistry from "./ratelimit/tx.registry";
import * as nemoNetworkRevshareTxRegistry from "./revshare/tx.registry";
import * as nemoNetworkRewardsTxRegistry from "./rewards/tx.registry";
import * as nemoNetworkSendingTxRegistry from "./sending/tx.registry";
import * as nemoNetworkStatsTxRegistry from "./stats/tx.registry";
import * as nemoNetworkVaultTxRegistry from "./vault/tx.registry";
import * as nemoNetworkVestTxRegistry from "./vest/tx.registry";
import * as nemoNetworkAffiliatesTxAmino from "./affiliates/tx.amino";
import * as nemoNetworkBlocktimeTxAmino from "./blocktime/tx.amino";
import * as nemoNetworkBridgeTxAmino from "./bridge/tx.amino";
import * as nemoNetworkClobTxAmino from "./clob/tx.amino";
import * as nemoNetworkDelaymsgTxAmino from "./delaymsg/tx.amino";
import * as nemoNetworkFeetiersTxAmino from "./feetiers/tx.amino";
import * as nemoNetworkGovplusTxAmino from "./govplus/tx.amino";
import * as nemoNetworkListingTxAmino from "./listing/tx.amino";
import * as nemoNetworkPerpetualsTxAmino from "./perpetuals/tx.amino";
import * as nemoNetworkPricesTxAmino from "./prices/tx.amino";
import * as nemoNetworkRatelimitTxAmino from "./ratelimit/tx.amino";
import * as nemoNetworkRevshareTxAmino from "./revshare/tx.amino";
import * as nemoNetworkRewardsTxAmino from "./rewards/tx.amino";
import * as nemoNetworkSendingTxAmino from "./sending/tx.amino";
import * as nemoNetworkStatsTxAmino from "./stats/tx.amino";
import * as nemoNetworkVaultTxAmino from "./vault/tx.amino";
import * as nemoNetworkVestTxAmino from "./vest/tx.amino";
export const nemoNetworkAminoConverters = {
  ...nemoNetworkAffiliatesTxAmino.AminoConverter,
  ...nemoNetworkBlocktimeTxAmino.AminoConverter,
  ...nemoNetworkBridgeTxAmino.AminoConverter,
  ...nemoNetworkClobTxAmino.AminoConverter,
  ...nemoNetworkDelaymsgTxAmino.AminoConverter,
  ...nemoNetworkFeetiersTxAmino.AminoConverter,
  ...nemoNetworkGovplusTxAmino.AminoConverter,
  ...nemoNetworkListingTxAmino.AminoConverter,
  ...nemoNetworkPerpetualsTxAmino.AminoConverter,
  ...nemoNetworkPricesTxAmino.AminoConverter,
  ...nemoNetworkRatelimitTxAmino.AminoConverter,
  ...nemoNetworkRevshareTxAmino.AminoConverter,
  ...nemoNetworkRewardsTxAmino.AminoConverter,
  ...nemoNetworkSendingTxAmino.AminoConverter,
  ...nemoNetworkStatsTxAmino.AminoConverter,
  ...nemoNetworkVaultTxAmino.AminoConverter,
  ...nemoNetworkVestTxAmino.AminoConverter
};
export const nemoNetworkProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...nemoNetworkAffiliatesTxRegistry.registry, ...nemoNetworkBlocktimeTxRegistry.registry, ...nemoNetworkBridgeTxRegistry.registry, ...nemoNetworkClobTxRegistry.registry, ...nemoNetworkDelaymsgTxRegistry.registry, ...nemoNetworkFeetiersTxRegistry.registry, ...nemoNetworkGovplusTxRegistry.registry, ...nemoNetworkListingTxRegistry.registry, ...nemoNetworkPerpetualsTxRegistry.registry, ...nemoNetworkPricesTxRegistry.registry, ...nemoNetworkRatelimitTxRegistry.registry, ...nemoNetworkRevshareTxRegistry.registry, ...nemoNetworkRewardsTxRegistry.registry, ...nemoNetworkSendingTxRegistry.registry, ...nemoNetworkStatsTxRegistry.registry, ...nemoNetworkVaultTxRegistry.registry, ...nemoNetworkVestTxRegistry.registry];
export const getSigningNemoNetworkClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...nemoNetworkProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...nemoNetworkAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningNemoNetworkClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningNemoNetworkClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};