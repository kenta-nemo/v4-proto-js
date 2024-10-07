import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/** NumShares represents the number of shares. */
export interface NumShares {
  /** Number of shares. */
  numShares: Uint8Array;
}
export interface NumSharesProtoMsg {
  typeUrl: "/nemo_network.vault.NumShares";
  value: Uint8Array;
}
/** NumShares represents the number of shares. */
export interface NumSharesAmino {
  /** Number of shares. */
  num_shares?: string;
}
export interface NumSharesAminoMsg {
  type: "/nemo_network.vault.NumShares";
  value: NumSharesAmino;
}
/** NumShares represents the number of shares. */
export interface NumSharesSDKType {
  num_shares: Uint8Array;
}
/** OwnerShare is a type for owner shares. */
export interface OwnerShare {
  owner: string;
  shares: NumShares;
}
export interface OwnerShareProtoMsg {
  typeUrl: "/nemo_network.vault.OwnerShare";
  value: Uint8Array;
}
/** OwnerShare is a type for owner shares. */
export interface OwnerShareAmino {
  owner?: string;
  shares?: NumSharesAmino;
}
export interface OwnerShareAminoMsg {
  type: "/nemo_network.vault.OwnerShare";
  value: OwnerShareAmino;
}
/** OwnerShare is a type for owner shares. */
export interface OwnerShareSDKType {
  owner: string;
  shares: NumSharesSDKType;
}
/** OwnerShareUnlocks stores share unlocks for an owner. */
export interface OwnerShareUnlocks {
  /** Address of the owner of below shares. */
  ownerAddress: string;
  /** All share unlocks. */
  shareUnlocks: ShareUnlock[];
}
export interface OwnerShareUnlocksProtoMsg {
  typeUrl: "/nemo_network.vault.OwnerShareUnlocks";
  value: Uint8Array;
}
/** OwnerShareUnlocks stores share unlocks for an owner. */
export interface OwnerShareUnlocksAmino {
  /** Address of the owner of below shares. */
  owner_address?: string;
  /** All share unlocks. */
  share_unlocks?: ShareUnlockAmino[];
}
export interface OwnerShareUnlocksAminoMsg {
  type: "/nemo_network.vault.OwnerShareUnlocks";
  value: OwnerShareUnlocksAmino;
}
/** OwnerShareUnlocks stores share unlocks for an owner. */
export interface OwnerShareUnlocksSDKType {
  owner_address: string;
  share_unlocks: ShareUnlockSDKType[];
}
/**
 * ShareUnlock stores a single instance of `shares` number of shares
 * unlocking at block height `unlock_block_height`.
 */
export interface ShareUnlock {
  /** Number of shares to unlock. */
  shares: NumShares;
  /** Block height at which above shares unlock. */
  unlockBlockHeight: number;
}
export interface ShareUnlockProtoMsg {
  typeUrl: "/nemo_network.vault.ShareUnlock";
  value: Uint8Array;
}
/**
 * ShareUnlock stores a single instance of `shares` number of shares
 * unlocking at block height `unlock_block_height`.
 */
export interface ShareUnlockAmino {
  /** Number of shares to unlock. */
  shares?: NumSharesAmino;
  /** Block height at which above shares unlock. */
  unlock_block_height?: number;
}
export interface ShareUnlockAminoMsg {
  type: "/nemo_network.vault.ShareUnlock";
  value: ShareUnlockAmino;
}
/**
 * ShareUnlock stores a single instance of `shares` number of shares
 * unlocking at block height `unlock_block_height`.
 */
export interface ShareUnlockSDKType {
  shares: NumSharesSDKType;
  unlock_block_height: number;
}
function createBaseNumShares(): NumShares {
  return {
    numShares: new Uint8Array()
  };
}
export const NumShares = {
  typeUrl: "/nemo_network.vault.NumShares",
  encode(message: NumShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numShares.length !== 0) {
      writer.uint32(18).bytes(message.numShares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.numShares = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NumShares>): NumShares {
    const message = createBaseNumShares();
    message.numShares = object.numShares ?? new Uint8Array();
    return message;
  },
  fromAmino(object: NumSharesAmino): NumShares {
    const message = createBaseNumShares();
    if (object.num_shares !== undefined && object.num_shares !== null) {
      message.numShares = bytesFromBase64(object.num_shares);
    }
    return message;
  },
  toAmino(message: NumShares): NumSharesAmino {
    const obj: any = {};
    obj.num_shares = message.numShares ? base64FromBytes(message.numShares) : undefined;
    return obj;
  },
  fromAminoMsg(object: NumSharesAminoMsg): NumShares {
    return NumShares.fromAmino(object.value);
  },
  fromProtoMsg(message: NumSharesProtoMsg): NumShares {
    return NumShares.decode(message.value);
  },
  toProto(message: NumShares): Uint8Array {
    return NumShares.encode(message).finish();
  },
  toProtoMsg(message: NumShares): NumSharesProtoMsg {
    return {
      typeUrl: "/nemo_network.vault.NumShares",
      value: NumShares.encode(message).finish()
    };
  }
};
function createBaseOwnerShare(): OwnerShare {
  return {
    owner: "",
    shares: NumShares.fromPartial({})
  };
}
export const OwnerShare = {
  typeUrl: "/nemo_network.vault.OwnerShare",
  encode(message: OwnerShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.shares !== undefined) {
      NumShares.encode(message.shares, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OwnerShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.shares = NumShares.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OwnerShare>): OwnerShare {
    const message = createBaseOwnerShare();
    message.owner = object.owner ?? "";
    message.shares = object.shares !== undefined && object.shares !== null ? NumShares.fromPartial(object.shares) : undefined;
    return message;
  },
  fromAmino(object: OwnerShareAmino): OwnerShare {
    const message = createBaseOwnerShare();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = NumShares.fromAmino(object.shares);
    }
    return message;
  },
  toAmino(message: OwnerShare): OwnerShareAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.shares = message.shares ? NumShares.toAmino(message.shares) : undefined;
    return obj;
  },
  fromAminoMsg(object: OwnerShareAminoMsg): OwnerShare {
    return OwnerShare.fromAmino(object.value);
  },
  fromProtoMsg(message: OwnerShareProtoMsg): OwnerShare {
    return OwnerShare.decode(message.value);
  },
  toProto(message: OwnerShare): Uint8Array {
    return OwnerShare.encode(message).finish();
  },
  toProtoMsg(message: OwnerShare): OwnerShareProtoMsg {
    return {
      typeUrl: "/nemo_network.vault.OwnerShare",
      value: OwnerShare.encode(message).finish()
    };
  }
};
function createBaseOwnerShareUnlocks(): OwnerShareUnlocks {
  return {
    ownerAddress: "",
    shareUnlocks: []
  };
}
export const OwnerShareUnlocks = {
  typeUrl: "/nemo_network.vault.OwnerShareUnlocks",
  encode(message: OwnerShareUnlocks, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    for (const v of message.shareUnlocks) {
      ShareUnlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OwnerShareUnlocks {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerShareUnlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.shareUnlocks.push(ShareUnlock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OwnerShareUnlocks>): OwnerShareUnlocks {
    const message = createBaseOwnerShareUnlocks();
    message.ownerAddress = object.ownerAddress ?? "";
    message.shareUnlocks = object.shareUnlocks?.map(e => ShareUnlock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OwnerShareUnlocksAmino): OwnerShareUnlocks {
    const message = createBaseOwnerShareUnlocks();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    message.shareUnlocks = object.share_unlocks?.map(e => ShareUnlock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OwnerShareUnlocks): OwnerShareUnlocksAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    if (message.shareUnlocks) {
      obj.share_unlocks = message.shareUnlocks.map(e => e ? ShareUnlock.toAmino(e) : undefined);
    } else {
      obj.share_unlocks = message.shareUnlocks;
    }
    return obj;
  },
  fromAminoMsg(object: OwnerShareUnlocksAminoMsg): OwnerShareUnlocks {
    return OwnerShareUnlocks.fromAmino(object.value);
  },
  fromProtoMsg(message: OwnerShareUnlocksProtoMsg): OwnerShareUnlocks {
    return OwnerShareUnlocks.decode(message.value);
  },
  toProto(message: OwnerShareUnlocks): Uint8Array {
    return OwnerShareUnlocks.encode(message).finish();
  },
  toProtoMsg(message: OwnerShareUnlocks): OwnerShareUnlocksProtoMsg {
    return {
      typeUrl: "/nemo_network.vault.OwnerShareUnlocks",
      value: OwnerShareUnlocks.encode(message).finish()
    };
  }
};
function createBaseShareUnlock(): ShareUnlock {
  return {
    shares: NumShares.fromPartial({}),
    unlockBlockHeight: 0
  };
}
export const ShareUnlock = {
  typeUrl: "/nemo_network.vault.ShareUnlock",
  encode(message: ShareUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shares !== undefined) {
      NumShares.encode(message.shares, writer.uint32(10).fork()).ldelim();
    }
    if (message.unlockBlockHeight !== 0) {
      writer.uint32(16).uint32(message.unlockBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShareUnlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShareUnlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shares = NumShares.decode(reader, reader.uint32());
          break;
        case 2:
          message.unlockBlockHeight = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ShareUnlock>): ShareUnlock {
    const message = createBaseShareUnlock();
    message.shares = object.shares !== undefined && object.shares !== null ? NumShares.fromPartial(object.shares) : undefined;
    message.unlockBlockHeight = object.unlockBlockHeight ?? 0;
    return message;
  },
  fromAmino(object: ShareUnlockAmino): ShareUnlock {
    const message = createBaseShareUnlock();
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = NumShares.fromAmino(object.shares);
    }
    if (object.unlock_block_height !== undefined && object.unlock_block_height !== null) {
      message.unlockBlockHeight = object.unlock_block_height;
    }
    return message;
  },
  toAmino(message: ShareUnlock): ShareUnlockAmino {
    const obj: any = {};
    obj.shares = message.shares ? NumShares.toAmino(message.shares) : undefined;
    obj.unlock_block_height = message.unlockBlockHeight === 0 ? undefined : message.unlockBlockHeight;
    return obj;
  },
  fromAminoMsg(object: ShareUnlockAminoMsg): ShareUnlock {
    return ShareUnlock.fromAmino(object.value);
  },
  fromProtoMsg(message: ShareUnlockProtoMsg): ShareUnlock {
    return ShareUnlock.decode(message.value);
  },
  toProto(message: ShareUnlock): Uint8Array {
    return ShareUnlock.encode(message).finish();
  },
  toProtoMsg(message: ShareUnlock): ShareUnlockProtoMsg {
    return {
      typeUrl: "/nemo_network.vault.ShareUnlock",
      value: ShareUnlock.encode(message).finish()
    };
  }
};