"use strict";
exports.__esModule = true;
exports.VaultId = exports.vaultStatusToJSON = exports.vaultStatusFromJSON = exports.VaultStatusAmino = exports.VaultStatusSDKType = exports.VaultStatus = exports.vaultTypeToJSON = exports.vaultTypeFromJSON = exports.VaultTypeAmino = exports.VaultTypeSDKType = exports.VaultType = void 0;
var binary_1 = require("../../binary");
/** VaultType represents different types of vaults. */
var VaultType;
(function (VaultType) {
    /** VAULT_TYPE_UNSPECIFIED - Default value, invalid and unused. */
    VaultType[VaultType["VAULT_TYPE_UNSPECIFIED"] = 0] = "VAULT_TYPE_UNSPECIFIED";
    /** VAULT_TYPE_CLOB - Vault is associated with a CLOB pair. */
    VaultType[VaultType["VAULT_TYPE_CLOB"] = 1] = "VAULT_TYPE_CLOB";
    VaultType[VaultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VaultType = exports.VaultType || (exports.VaultType = {}));
exports.VaultTypeSDKType = VaultType;
exports.VaultTypeAmino = VaultType;
function vaultTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "VAULT_TYPE_UNSPECIFIED":
            return VaultType.VAULT_TYPE_UNSPECIFIED;
        case 1:
        case "VAULT_TYPE_CLOB":
            return VaultType.VAULT_TYPE_CLOB;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VaultType.UNRECOGNIZED;
    }
}
exports.vaultTypeFromJSON = vaultTypeFromJSON;
function vaultTypeToJSON(object) {
    switch (object) {
        case VaultType.VAULT_TYPE_UNSPECIFIED:
            return "VAULT_TYPE_UNSPECIFIED";
        case VaultType.VAULT_TYPE_CLOB:
            return "VAULT_TYPE_CLOB";
        case VaultType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.vaultTypeToJSON = vaultTypeToJSON;
/** VaultStatus represents the status of a vault. */
var VaultStatus;
(function (VaultStatus) {
    /** VAULT_STATUS_UNSPECIFIED - Default value, invalid and unused. */
    VaultStatus[VaultStatus["VAULT_STATUS_UNSPECIFIED"] = 0] = "VAULT_STATUS_UNSPECIFIED";
    /** VAULT_STATUS_DEACTIVATED - Don’t place orders. Does not count toward global vault balances. */
    VaultStatus[VaultStatus["VAULT_STATUS_DEACTIVATED"] = 1] = "VAULT_STATUS_DEACTIVATED";
    /** VAULT_STATUS_STAND_BY - Don’t place orders. Does count towards global vault balances. */
    VaultStatus[VaultStatus["VAULT_STATUS_STAND_BY"] = 2] = "VAULT_STATUS_STAND_BY";
    /** VAULT_STATUS_QUOTING - Places orders on both sides of the book. */
    VaultStatus[VaultStatus["VAULT_STATUS_QUOTING"] = 3] = "VAULT_STATUS_QUOTING";
    /** VAULT_STATUS_CLOSE_ONLY - Only place orders that close the position. */
    VaultStatus[VaultStatus["VAULT_STATUS_CLOSE_ONLY"] = 4] = "VAULT_STATUS_CLOSE_ONLY";
    VaultStatus[VaultStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VaultStatus = exports.VaultStatus || (exports.VaultStatus = {}));
exports.VaultStatusSDKType = VaultStatus;
exports.VaultStatusAmino = VaultStatus;
function vaultStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "VAULT_STATUS_UNSPECIFIED":
            return VaultStatus.VAULT_STATUS_UNSPECIFIED;
        case 1:
        case "VAULT_STATUS_DEACTIVATED":
            return VaultStatus.VAULT_STATUS_DEACTIVATED;
        case 2:
        case "VAULT_STATUS_STAND_BY":
            return VaultStatus.VAULT_STATUS_STAND_BY;
        case 3:
        case "VAULT_STATUS_QUOTING":
            return VaultStatus.VAULT_STATUS_QUOTING;
        case 4:
        case "VAULT_STATUS_CLOSE_ONLY":
            return VaultStatus.VAULT_STATUS_CLOSE_ONLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VaultStatus.UNRECOGNIZED;
    }
}
exports.vaultStatusFromJSON = vaultStatusFromJSON;
function vaultStatusToJSON(object) {
    switch (object) {
        case VaultStatus.VAULT_STATUS_UNSPECIFIED:
            return "VAULT_STATUS_UNSPECIFIED";
        case VaultStatus.VAULT_STATUS_DEACTIVATED:
            return "VAULT_STATUS_DEACTIVATED";
        case VaultStatus.VAULT_STATUS_STAND_BY:
            return "VAULT_STATUS_STAND_BY";
        case VaultStatus.VAULT_STATUS_QUOTING:
            return "VAULT_STATUS_QUOTING";
        case VaultStatus.VAULT_STATUS_CLOSE_ONLY:
            return "VAULT_STATUS_CLOSE_ONLY";
        case VaultStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.vaultStatusToJSON = vaultStatusToJSON;
function createBaseVaultId() {
    return {
        type: 0,
        number: 0
    };
}
exports.VaultId = {
    typeUrl: "/nemo_network.vault.VaultId",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.number !== 0) {
            writer.uint32(16).uint32(message.number);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVaultId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.number = reader.uint32();
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
        var message = createBaseVaultId();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseVaultId();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.type = message.type === 0 ? undefined : message.type;
        obj.number = message.number === 0 ? undefined : message.number;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.VaultId.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.VaultId.decode(message.value);
    },
    toProto: function (message) {
        return exports.VaultId.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.VaultId",
            value: exports.VaultId.encode(message).finish()
        };
    }
};
