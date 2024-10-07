import { SubaccountId, SubaccountIdAmino, SubaccountIdSDKType } from "../subaccounts/subaccount";
import { ListingVaultDepositParams, ListingVaultDepositParamsAmino, ListingVaultDepositParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * MsgSetMarketsHardCap is used to set a hard cap on the number of markets
 * listed
 */
export interface MsgSetMarketsHardCap {
  authority: string;
  /** Hard cap for the total number of markets listed */
  hardCapForMarkets: number;
}
export interface MsgSetMarketsHardCapProtoMsg {
  typeUrl: "/nemo_network.listing.MsgSetMarketsHardCap";
  value: Uint8Array;
}
/**
 * MsgSetMarketsHardCap is used to set a hard cap on the number of markets
 * listed
 */
export interface MsgSetMarketsHardCapAmino {
  authority?: string;
  /** Hard cap for the total number of markets listed */
  hard_cap_for_markets?: number;
}
export interface MsgSetMarketsHardCapAminoMsg {
  type: "/nemo_network.listing.MsgSetMarketsHardCap";
  value: MsgSetMarketsHardCapAmino;
}
/**
 * MsgSetMarketsHardCap is used to set a hard cap on the number of markets
 * listed
 */
export interface MsgSetMarketsHardCapSDKType {
  authority: string;
  hard_cap_for_markets: number;
}
/** MsgSetMarketsHardCapResponse defines the MsgSetMarketsHardCap response */
export interface MsgSetMarketsHardCapResponse {}
export interface MsgSetMarketsHardCapResponseProtoMsg {
  typeUrl: "/nemo_network.listing.MsgSetMarketsHardCapResponse";
  value: Uint8Array;
}
/** MsgSetMarketsHardCapResponse defines the MsgSetMarketsHardCap response */
export interface MsgSetMarketsHardCapResponseAmino {}
export interface MsgSetMarketsHardCapResponseAminoMsg {
  type: "/nemo_network.listing.MsgSetMarketsHardCapResponse";
  value: MsgSetMarketsHardCapResponseAmino;
}
/** MsgSetMarketsHardCapResponse defines the MsgSetMarketsHardCap response */
export interface MsgSetMarketsHardCapResponseSDKType {}
/**
 * MsgCreateMarketPermissionless is a message used to create new markets without
 * going through x/gov
 */
export interface MsgCreateMarketPermissionless {
  /** The name of the `Perpetual` (e.g. `BTC-USD`). */
  ticker: string;
  /** The subaccount to deposit from. */
  subaccountId?: SubaccountId;
}
export interface MsgCreateMarketPermissionlessProtoMsg {
  typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionless";
  value: Uint8Array;
}
/**
 * MsgCreateMarketPermissionless is a message used to create new markets without
 * going through x/gov
 */
export interface MsgCreateMarketPermissionlessAmino {
  /** The name of the `Perpetual` (e.g. `BTC-USD`). */
  ticker?: string;
  /** The subaccount to deposit from. */
  subaccount_id?: SubaccountIdAmino;
}
export interface MsgCreateMarketPermissionlessAminoMsg {
  type: "/nemo_network.listing.MsgCreateMarketPermissionless";
  value: MsgCreateMarketPermissionlessAmino;
}
/**
 * MsgCreateMarketPermissionless is a message used to create new markets without
 * going through x/gov
 */
export interface MsgCreateMarketPermissionlessSDKType {
  ticker: string;
  subaccount_id?: SubaccountIdSDKType;
}
/**
 * MsgCreateMarketPermissionlessResponse defines the
 * MsgCreateMarketPermissionless response
 */
export interface MsgCreateMarketPermissionlessResponse {}
export interface MsgCreateMarketPermissionlessResponseProtoMsg {
  typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionlessResponse";
  value: Uint8Array;
}
/**
 * MsgCreateMarketPermissionlessResponse defines the
 * MsgCreateMarketPermissionless response
 */
export interface MsgCreateMarketPermissionlessResponseAmino {}
export interface MsgCreateMarketPermissionlessResponseAminoMsg {
  type: "/nemo_network.listing.MsgCreateMarketPermissionlessResponse";
  value: MsgCreateMarketPermissionlessResponseAmino;
}
/**
 * MsgCreateMarketPermissionlessResponse defines the
 * MsgCreateMarketPermissionless response
 */
export interface MsgCreateMarketPermissionlessResponseSDKType {}
/**
 * MsgSetListingVaultDepositParams is a message used to set PML megavault
 * deposit params
 */
export interface MsgSetListingVaultDepositParams {
  authority: string;
  /** Params which define the vault deposit for market listing */
  params: ListingVaultDepositParams;
}
export interface MsgSetListingVaultDepositParamsProtoMsg {
  typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParams";
  value: Uint8Array;
}
/**
 * MsgSetListingVaultDepositParams is a message used to set PML megavault
 * deposit params
 */
export interface MsgSetListingVaultDepositParamsAmino {
  authority?: string;
  /** Params which define the vault deposit for market listing */
  params?: ListingVaultDepositParamsAmino;
}
export interface MsgSetListingVaultDepositParamsAminoMsg {
  type: "/nemo_network.listing.MsgSetListingVaultDepositParams";
  value: MsgSetListingVaultDepositParamsAmino;
}
/**
 * MsgSetListingVaultDepositParams is a message used to set PML megavault
 * deposit params
 */
export interface MsgSetListingVaultDepositParamsSDKType {
  authority: string;
  params: ListingVaultDepositParamsSDKType;
}
/**
 * MsgSetListingVaultDepositParamsResponse defines the
 * MsgSetListingVaultDepositParams response
 */
export interface MsgSetListingVaultDepositParamsResponse {}
export interface MsgSetListingVaultDepositParamsResponseProtoMsg {
  typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParamsResponse";
  value: Uint8Array;
}
/**
 * MsgSetListingVaultDepositParamsResponse defines the
 * MsgSetListingVaultDepositParams response
 */
export interface MsgSetListingVaultDepositParamsResponseAmino {}
export interface MsgSetListingVaultDepositParamsResponseAminoMsg {
  type: "/nemo_network.listing.MsgSetListingVaultDepositParamsResponse";
  value: MsgSetListingVaultDepositParamsResponseAmino;
}
/**
 * MsgSetListingVaultDepositParamsResponse defines the
 * MsgSetListingVaultDepositParams response
 */
export interface MsgSetListingVaultDepositParamsResponseSDKType {}
function createBaseMsgSetMarketsHardCap(): MsgSetMarketsHardCap {
  return {
    authority: "",
    hardCapForMarkets: 0
  };
}
export const MsgSetMarketsHardCap = {
  typeUrl: "/nemo_network.listing.MsgSetMarketsHardCap",
  encode(message: MsgSetMarketsHardCap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hardCapForMarkets !== 0) {
      writer.uint32(16).uint32(message.hardCapForMarkets);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMarketsHardCap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMarketsHardCap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hardCapForMarkets = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMarketsHardCap>): MsgSetMarketsHardCap {
    const message = createBaseMsgSetMarketsHardCap();
    message.authority = object.authority ?? "";
    message.hardCapForMarkets = object.hardCapForMarkets ?? 0;
    return message;
  },
  fromAmino(object: MsgSetMarketsHardCapAmino): MsgSetMarketsHardCap {
    const message = createBaseMsgSetMarketsHardCap();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.hard_cap_for_markets !== undefined && object.hard_cap_for_markets !== null) {
      message.hardCapForMarkets = object.hard_cap_for_markets;
    }
    return message;
  },
  toAmino(message: MsgSetMarketsHardCap): MsgSetMarketsHardCapAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.hard_cap_for_markets = message.hardCapForMarkets === 0 ? undefined : message.hardCapForMarkets;
    return obj;
  },
  fromAminoMsg(object: MsgSetMarketsHardCapAminoMsg): MsgSetMarketsHardCap {
    return MsgSetMarketsHardCap.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMarketsHardCapProtoMsg): MsgSetMarketsHardCap {
    return MsgSetMarketsHardCap.decode(message.value);
  },
  toProto(message: MsgSetMarketsHardCap): Uint8Array {
    return MsgSetMarketsHardCap.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMarketsHardCap): MsgSetMarketsHardCapProtoMsg {
    return {
      typeUrl: "/nemo_network.listing.MsgSetMarketsHardCap",
      value: MsgSetMarketsHardCap.encode(message).finish()
    };
  }
};
function createBaseMsgSetMarketsHardCapResponse(): MsgSetMarketsHardCapResponse {
  return {};
}
export const MsgSetMarketsHardCapResponse = {
  typeUrl: "/nemo_network.listing.MsgSetMarketsHardCapResponse",
  encode(_: MsgSetMarketsHardCapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMarketsHardCapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMarketsHardCapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetMarketsHardCapResponse>): MsgSetMarketsHardCapResponse {
    const message = createBaseMsgSetMarketsHardCapResponse();
    return message;
  },
  fromAmino(_: MsgSetMarketsHardCapResponseAmino): MsgSetMarketsHardCapResponse {
    const message = createBaseMsgSetMarketsHardCapResponse();
    return message;
  },
  toAmino(_: MsgSetMarketsHardCapResponse): MsgSetMarketsHardCapResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMarketsHardCapResponseAminoMsg): MsgSetMarketsHardCapResponse {
    return MsgSetMarketsHardCapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMarketsHardCapResponseProtoMsg): MsgSetMarketsHardCapResponse {
    return MsgSetMarketsHardCapResponse.decode(message.value);
  },
  toProto(message: MsgSetMarketsHardCapResponse): Uint8Array {
    return MsgSetMarketsHardCapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMarketsHardCapResponse): MsgSetMarketsHardCapResponseProtoMsg {
    return {
      typeUrl: "/nemo_network.listing.MsgSetMarketsHardCapResponse",
      value: MsgSetMarketsHardCapResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMarketPermissionless(): MsgCreateMarketPermissionless {
  return {
    ticker: "",
    subaccountId: undefined
  };
}
export const MsgCreateMarketPermissionless = {
  typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionless",
  encode(message: MsgCreateMarketPermissionless, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }
    if (message.subaccountId !== undefined) {
      SubaccountId.encode(message.subaccountId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMarketPermissionless {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarketPermissionless();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticker = reader.string();
          break;
        case 2:
          message.subaccountId = SubaccountId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMarketPermissionless>): MsgCreateMarketPermissionless {
    const message = createBaseMsgCreateMarketPermissionless();
    message.ticker = object.ticker ?? "";
    message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? SubaccountId.fromPartial(object.subaccountId) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateMarketPermissionlessAmino): MsgCreateMarketPermissionless {
    const message = createBaseMsgCreateMarketPermissionless();
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = SubaccountId.fromAmino(object.subaccount_id);
    }
    return message;
  },
  toAmino(message: MsgCreateMarketPermissionless): MsgCreateMarketPermissionlessAmino {
    const obj: any = {};
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.subaccount_id = message.subaccountId ? SubaccountId.toAmino(message.subaccountId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMarketPermissionlessAminoMsg): MsgCreateMarketPermissionless {
    return MsgCreateMarketPermissionless.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMarketPermissionlessProtoMsg): MsgCreateMarketPermissionless {
    return MsgCreateMarketPermissionless.decode(message.value);
  },
  toProto(message: MsgCreateMarketPermissionless): Uint8Array {
    return MsgCreateMarketPermissionless.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMarketPermissionless): MsgCreateMarketPermissionlessProtoMsg {
    return {
      typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionless",
      value: MsgCreateMarketPermissionless.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMarketPermissionlessResponse(): MsgCreateMarketPermissionlessResponse {
  return {};
}
export const MsgCreateMarketPermissionlessResponse = {
  typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionlessResponse",
  encode(_: MsgCreateMarketPermissionlessResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMarketPermissionlessResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarketPermissionlessResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCreateMarketPermissionlessResponse>): MsgCreateMarketPermissionlessResponse {
    const message = createBaseMsgCreateMarketPermissionlessResponse();
    return message;
  },
  fromAmino(_: MsgCreateMarketPermissionlessResponseAmino): MsgCreateMarketPermissionlessResponse {
    const message = createBaseMsgCreateMarketPermissionlessResponse();
    return message;
  },
  toAmino(_: MsgCreateMarketPermissionlessResponse): MsgCreateMarketPermissionlessResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateMarketPermissionlessResponseAminoMsg): MsgCreateMarketPermissionlessResponse {
    return MsgCreateMarketPermissionlessResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMarketPermissionlessResponseProtoMsg): MsgCreateMarketPermissionlessResponse {
    return MsgCreateMarketPermissionlessResponse.decode(message.value);
  },
  toProto(message: MsgCreateMarketPermissionlessResponse): Uint8Array {
    return MsgCreateMarketPermissionlessResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMarketPermissionlessResponse): MsgCreateMarketPermissionlessResponseProtoMsg {
    return {
      typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionlessResponse",
      value: MsgCreateMarketPermissionlessResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetListingVaultDepositParams(): MsgSetListingVaultDepositParams {
  return {
    authority: "",
    params: ListingVaultDepositParams.fromPartial({})
  };
}
export const MsgSetListingVaultDepositParams = {
  typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParams",
  encode(message: MsgSetListingVaultDepositParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ListingVaultDepositParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetListingVaultDepositParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetListingVaultDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = ListingVaultDepositParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetListingVaultDepositParams>): MsgSetListingVaultDepositParams {
    const message = createBaseMsgSetListingVaultDepositParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? ListingVaultDepositParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgSetListingVaultDepositParamsAmino): MsgSetListingVaultDepositParams {
    const message = createBaseMsgSetListingVaultDepositParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = ListingVaultDepositParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgSetListingVaultDepositParams): MsgSetListingVaultDepositParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? ListingVaultDepositParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetListingVaultDepositParamsAminoMsg): MsgSetListingVaultDepositParams {
    return MsgSetListingVaultDepositParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetListingVaultDepositParamsProtoMsg): MsgSetListingVaultDepositParams {
    return MsgSetListingVaultDepositParams.decode(message.value);
  },
  toProto(message: MsgSetListingVaultDepositParams): Uint8Array {
    return MsgSetListingVaultDepositParams.encode(message).finish();
  },
  toProtoMsg(message: MsgSetListingVaultDepositParams): MsgSetListingVaultDepositParamsProtoMsg {
    return {
      typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParams",
      value: MsgSetListingVaultDepositParams.encode(message).finish()
    };
  }
};
function createBaseMsgSetListingVaultDepositParamsResponse(): MsgSetListingVaultDepositParamsResponse {
  return {};
}
export const MsgSetListingVaultDepositParamsResponse = {
  typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParamsResponse",
  encode(_: MsgSetListingVaultDepositParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetListingVaultDepositParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetListingVaultDepositParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetListingVaultDepositParamsResponse>): MsgSetListingVaultDepositParamsResponse {
    const message = createBaseMsgSetListingVaultDepositParamsResponse();
    return message;
  },
  fromAmino(_: MsgSetListingVaultDepositParamsResponseAmino): MsgSetListingVaultDepositParamsResponse {
    const message = createBaseMsgSetListingVaultDepositParamsResponse();
    return message;
  },
  toAmino(_: MsgSetListingVaultDepositParamsResponse): MsgSetListingVaultDepositParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetListingVaultDepositParamsResponseAminoMsg): MsgSetListingVaultDepositParamsResponse {
    return MsgSetListingVaultDepositParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetListingVaultDepositParamsResponseProtoMsg): MsgSetListingVaultDepositParamsResponse {
    return MsgSetListingVaultDepositParamsResponse.decode(message.value);
  },
  toProto(message: MsgSetListingVaultDepositParamsResponse): Uint8Array {
    return MsgSetListingVaultDepositParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetListingVaultDepositParamsResponse): MsgSetListingVaultDepositParamsResponseProtoMsg {
    return {
      typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParamsResponse",
      value: MsgSetListingVaultDepositParamsResponse.encode(message).finish()
    };
  }
};