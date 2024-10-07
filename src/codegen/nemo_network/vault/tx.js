"use strict";
exports.__esModule = true;
exports.MsgSetVaultParamsResponse = exports.MsgSetVaultParams = exports.MsgUpdateDefaultQuotingParamsResponse = exports.MsgUpdateDefaultQuotingParams = exports.MsgDepositToMegavaultResponse = exports.MsgDepositToMegavault = void 0;
var subaccount_1 = require("../subaccounts/subaccount");
var params_1 = require("./params");
var vault_1 = require("./vault");
var share_1 = require("./share");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseMsgDepositToMegavault() {
    return {
        subaccountId: undefined,
        quoteQuantums: new Uint8Array()
    };
}
exports.MsgDepositToMegavault = {
    typeUrl: "/nemo_network.vault.MsgDepositToMegavault",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.quoteQuantums.length !== 0) {
            writer.uint32(18).bytes(message.quoteQuantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDepositToMegavault();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quoteQuantums = reader.bytes();
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
        var message = createBaseMsgDepositToMegavault();
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.subaccountId) : undefined;
        message.quoteQuantums = (_a = object.quoteQuantums) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgDepositToMegavault();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.SubaccountId.fromAmino(object.subaccount_id);
        }
        if (object.quote_quantums !== undefined && object.quote_quantums !== null) {
            message.quoteQuantums = (0, helpers_1.bytesFromBase64)(object.quote_quantums);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subaccount_id = message.subaccountId ? subaccount_1.SubaccountId.toAmino(message.subaccountId) : undefined;
        obj.quote_quantums = message.quoteQuantums ? (0, helpers_1.base64FromBytes)(message.quoteQuantums) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDepositToMegavault.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgDepositToMegavault.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDepositToMegavault.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.MsgDepositToMegavault",
            value: exports.MsgDepositToMegavault.encode(message).finish()
        };
    }
};
function createBaseMsgDepositToMegavaultResponse() {
    return {
        mintedShares: share_1.NumShares.fromPartial({})
    };
}
exports.MsgDepositToMegavaultResponse = {
    typeUrl: "/nemo_network.vault.MsgDepositToMegavaultResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.mintedShares !== undefined) {
            share_1.NumShares.encode(message.mintedShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDepositToMegavaultResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintedShares = share_1.NumShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMsgDepositToMegavaultResponse();
        message.mintedShares = object.mintedShares !== undefined && object.mintedShares !== null ? share_1.NumShares.fromPartial(object.mintedShares) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgDepositToMegavaultResponse();
        if (object.minted_shares !== undefined && object.minted_shares !== null) {
            message.mintedShares = share_1.NumShares.fromAmino(object.minted_shares);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.minted_shares = message.mintedShares ? share_1.NumShares.toAmino(message.mintedShares) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDepositToMegavaultResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgDepositToMegavaultResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDepositToMegavaultResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.MsgDepositToMegavaultResponse",
            value: exports.MsgDepositToMegavaultResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDefaultQuotingParams() {
    return {
        authority: "",
        defaultQuotingParams: params_1.QuotingParams.fromPartial({})
    };
}
exports.MsgUpdateDefaultQuotingParams = {
    typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.defaultQuotingParams !== undefined) {
            params_1.QuotingParams.encode(message.defaultQuotingParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateDefaultQuotingParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.defaultQuotingParams = params_1.QuotingParams.decode(reader, reader.uint32());
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
        var message = createBaseMsgUpdateDefaultQuotingParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.defaultQuotingParams = object.defaultQuotingParams !== undefined && object.defaultQuotingParams !== null ? params_1.QuotingParams.fromPartial(object.defaultQuotingParams) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateDefaultQuotingParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.default_quoting_params !== undefined && object.default_quoting_params !== null) {
            message.defaultQuotingParams = params_1.QuotingParams.fromAmino(object.default_quoting_params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.default_quoting_params = message.defaultQuotingParams ? params_1.QuotingParams.toAmino(message.defaultQuotingParams) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateDefaultQuotingParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateDefaultQuotingParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateDefaultQuotingParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
            value: exports.MsgUpdateDefaultQuotingParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDefaultQuotingParamsResponse() {
    return {};
}
exports.MsgUpdateDefaultQuotingParamsResponse = {
    typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateDefaultQuotingParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateDefaultQuotingParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateDefaultQuotingParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateDefaultQuotingParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateDefaultQuotingParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateDefaultQuotingParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParamsResponse",
            value: exports.MsgUpdateDefaultQuotingParamsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetVaultParams() {
    return {
        authority: "",
        vaultId: vault_1.VaultId.fromPartial({}),
        vaultParams: params_1.VaultParams.fromPartial({})
    };
}
exports.MsgSetVaultParams = {
    typeUrl: "/nemo_network.vault.MsgSetVaultParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.vaultId !== undefined) {
            vault_1.VaultId.encode(message.vaultId, writer.uint32(18).fork()).ldelim();
        }
        if (message.vaultParams !== undefined) {
            params_1.VaultParams.encode(message.vaultParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetVaultParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.vaultId = vault_1.VaultId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.vaultParams = params_1.VaultParams.decode(reader, reader.uint32());
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
        var message = createBaseMsgSetVaultParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? vault_1.VaultId.fromPartial(object.vaultId) : undefined;
        message.vaultParams = object.vaultParams !== undefined && object.vaultParams !== null ? params_1.VaultParams.fromPartial(object.vaultParams) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSetVaultParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.vault_id !== undefined && object.vault_id !== null) {
            message.vaultId = vault_1.VaultId.fromAmino(object.vault_id);
        }
        if (object.vault_params !== undefined && object.vault_params !== null) {
            message.vaultParams = params_1.VaultParams.fromAmino(object.vault_params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.vault_id = message.vaultId ? vault_1.VaultId.toAmino(message.vaultId) : undefined;
        obj.vault_params = message.vaultParams ? params_1.VaultParams.toAmino(message.vaultParams) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetVaultParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetVaultParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetVaultParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.MsgSetVaultParams",
            value: exports.MsgSetVaultParams.encode(message).finish()
        };
    }
};
function createBaseMsgSetVaultParamsResponse() {
    return {};
}
exports.MsgSetVaultParamsResponse = {
    typeUrl: "/nemo_network.vault.MsgSetVaultParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetVaultParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseMsgSetVaultParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSetVaultParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetVaultParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetVaultParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetVaultParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.MsgSetVaultParamsResponse",
            value: exports.MsgSetVaultParamsResponse.encode(message).finish()
        };
    }
};
