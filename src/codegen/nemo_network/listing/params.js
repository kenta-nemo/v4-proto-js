"use strict";
exports.__esModule = true;
exports.ListingVaultDepositParams = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseListingVaultDepositParams() {
    return {
        newVaultDepositAmount: new Uint8Array(),
        mainVaultDepositAmount: new Uint8Array(),
        numBlocksToLockShares: 0
    };
}
exports.ListingVaultDepositParams = {
    typeUrl: "/nemo_network.listing.ListingVaultDepositParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.newVaultDepositAmount.length !== 0) {
            writer.uint32(10).bytes(message.newVaultDepositAmount);
        }
        if (message.mainVaultDepositAmount.length !== 0) {
            writer.uint32(18).bytes(message.mainVaultDepositAmount);
        }
        if (message.numBlocksToLockShares !== 0) {
            writer.uint32(24).uint32(message.numBlocksToLockShares);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListingVaultDepositParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newVaultDepositAmount = reader.bytes();
                    break;
                case 2:
                    message.mainVaultDepositAmount = reader.bytes();
                    break;
                case 3:
                    message.numBlocksToLockShares = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseListingVaultDepositParams();
        message.newVaultDepositAmount = (_a = object.newVaultDepositAmount) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.mainVaultDepositAmount = (_b = object.mainVaultDepositAmount) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.numBlocksToLockShares = (_c = object.numBlocksToLockShares) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseListingVaultDepositParams();
        if (object.new_vault_deposit_amount !== undefined && object.new_vault_deposit_amount !== null) {
            message.newVaultDepositAmount = (0, helpers_1.bytesFromBase64)(object.new_vault_deposit_amount);
        }
        if (object.main_vault_deposit_amount !== undefined && object.main_vault_deposit_amount !== null) {
            message.mainVaultDepositAmount = (0, helpers_1.bytesFromBase64)(object.main_vault_deposit_amount);
        }
        if (object.num_blocks_to_lock_shares !== undefined && object.num_blocks_to_lock_shares !== null) {
            message.numBlocksToLockShares = object.num_blocks_to_lock_shares;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.new_vault_deposit_amount = message.newVaultDepositAmount ? (0, helpers_1.base64FromBytes)(message.newVaultDepositAmount) : undefined;
        obj.main_vault_deposit_amount = message.mainVaultDepositAmount ? (0, helpers_1.base64FromBytes)(message.mainVaultDepositAmount) : undefined;
        obj.num_blocks_to_lock_shares = message.numBlocksToLockShares === 0 ? undefined : message.numBlocksToLockShares;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListingVaultDepositParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ListingVaultDepositParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListingVaultDepositParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.ListingVaultDepositParams",
            value: exports.ListingVaultDepositParams.encode(message).finish()
        };
    }
};
