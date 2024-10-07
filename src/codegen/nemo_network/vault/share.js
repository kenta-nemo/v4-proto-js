"use strict";
exports.__esModule = true;
exports.ShareUnlock = exports.OwnerShareUnlocks = exports.OwnerShare = exports.NumShares = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseNumShares() {
    return {
        numShares: new Uint8Array()
    };
}
exports.NumShares = {
    typeUrl: "/nemo_network.vault.NumShares",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.numShares.length !== 0) {
            writer.uint32(18).bytes(message.numShares);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNumShares();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromPartial: function (object) {
        var _a;
        var message = createBaseNumShares();
        message.numShares = (_a = object.numShares) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseNumShares();
        if (object.num_shares !== undefined && object.num_shares !== null) {
            message.numShares = (0, helpers_1.bytesFromBase64)(object.num_shares);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.num_shares = message.numShares ? (0, helpers_1.base64FromBytes)(message.numShares) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.NumShares.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.NumShares.decode(message.value);
    },
    toProto: function (message) {
        return exports.NumShares.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.NumShares",
            value: exports.NumShares.encode(message).finish()
        };
    }
};
function createBaseOwnerShare() {
    return {
        owner: "",
        shares: exports.NumShares.fromPartial({})
    };
}
exports.OwnerShare = {
    typeUrl: "/nemo_network.vault.OwnerShare",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.shares !== undefined) {
            exports.NumShares.encode(message.shares, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOwnerShare();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.shares = exports.NumShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseOwnerShare();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.shares = object.shares !== undefined && object.shares !== null ? exports.NumShares.fromPartial(object.shares) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOwnerShare();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.shares !== undefined && object.shares !== null) {
            message.shares = exports.NumShares.fromAmino(object.shares);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.shares = message.shares ? exports.NumShares.toAmino(message.shares) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OwnerShare.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OwnerShare.decode(message.value);
    },
    toProto: function (message) {
        return exports.OwnerShare.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.OwnerShare",
            value: exports.OwnerShare.encode(message).finish()
        };
    }
};
function createBaseOwnerShareUnlocks() {
    return {
        ownerAddress: "",
        shareUnlocks: []
    };
}
exports.OwnerShareUnlocks = {
    typeUrl: "/nemo_network.vault.OwnerShareUnlocks",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.ownerAddress !== "") {
            writer.uint32(10).string(message.ownerAddress);
        }
        for (var _i = 0, _a = message.shareUnlocks; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ShareUnlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOwnerShareUnlocks();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ownerAddress = reader.string();
                    break;
                case 2:
                    message.shareUnlocks.push(exports.ShareUnlock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseOwnerShareUnlocks();
        message.ownerAddress = (_a = object.ownerAddress) !== null && _a !== void 0 ? _a : "";
        message.shareUnlocks = ((_b = object.shareUnlocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ShareUnlock.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseOwnerShareUnlocks();
        if (object.owner_address !== undefined && object.owner_address !== null) {
            message.ownerAddress = object.owner_address;
        }
        message.shareUnlocks = ((_a = object.share_unlocks) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ShareUnlock.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
        if (message.shareUnlocks) {
            obj.share_unlocks = message.shareUnlocks.map(function (e) { return e ? exports.ShareUnlock.toAmino(e) : undefined; });
        }
        else {
            obj.share_unlocks = message.shareUnlocks;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OwnerShareUnlocks.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OwnerShareUnlocks.decode(message.value);
    },
    toProto: function (message) {
        return exports.OwnerShareUnlocks.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.OwnerShareUnlocks",
            value: exports.OwnerShareUnlocks.encode(message).finish()
        };
    }
};
function createBaseShareUnlock() {
    return {
        shares: exports.NumShares.fromPartial({}),
        unlockBlockHeight: 0
    };
}
exports.ShareUnlock = {
    typeUrl: "/nemo_network.vault.ShareUnlock",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.shares !== undefined) {
            exports.NumShares.encode(message.shares, writer.uint32(10).fork()).ldelim();
        }
        if (message.unlockBlockHeight !== 0) {
            writer.uint32(16).uint32(message.unlockBlockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseShareUnlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shares = exports.NumShares.decode(reader, reader.uint32());
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
    fromPartial: function (object) {
        var _a;
        var message = createBaseShareUnlock();
        message.shares = object.shares !== undefined && object.shares !== null ? exports.NumShares.fromPartial(object.shares) : undefined;
        message.unlockBlockHeight = (_a = object.unlockBlockHeight) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseShareUnlock();
        if (object.shares !== undefined && object.shares !== null) {
            message.shares = exports.NumShares.fromAmino(object.shares);
        }
        if (object.unlock_block_height !== undefined && object.unlock_block_height !== null) {
            message.unlockBlockHeight = object.unlock_block_height;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.shares = message.shares ? exports.NumShares.toAmino(message.shares) : undefined;
        obj.unlock_block_height = message.unlockBlockHeight === 0 ? undefined : message.unlockBlockHeight;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ShareUnlock.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ShareUnlock.decode(message.value);
    },
    toProto: function (message) {
        return exports.ShareUnlock.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.ShareUnlock",
            value: exports.ShareUnlock.encode(message).finish()
        };
    }
};
