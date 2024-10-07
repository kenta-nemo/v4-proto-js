"use strict";
exports.__esModule = true;
exports.VaultV6 = exports.GenesisStateV6 = exports.Vault = exports.GenesisState = void 0;
var share_1 = require("./share");
var params_1 = require("./params");
var vault_1 = require("./vault");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        totalShares: share_1.NumShares.fromPartial({}),
        ownerShares: [],
        vaults: [],
        defaultQuotingParams: params_1.QuotingParams.fromPartial({}),
        allOwnerShareUnlocks: []
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.vault.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.totalShares !== undefined) {
            share_1.NumShares.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.ownerShares; _i < _a.length; _i++) {
            var v = _a[_i];
            share_1.OwnerShare.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.vaults; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Vault.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.defaultQuotingParams !== undefined) {
            params_1.QuotingParams.encode(message.defaultQuotingParams, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.allOwnerShareUnlocks; _d < _e.length; _d++) {
            var v = _e[_d];
            share_1.OwnerShareUnlocks.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = share_1.NumShares.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ownerShares.push(share_1.OwnerShare.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.vaults.push(exports.Vault.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.defaultQuotingParams = params_1.QuotingParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.allOwnerShareUnlocks.push(share_1.OwnerShareUnlocks.decode(reader, reader.uint32()));
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
        var message = createBaseGenesisState();
        message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? share_1.NumShares.fromPartial(object.totalShares) : undefined;
        message.ownerShares = ((_a = object.ownerShares) === null || _a === void 0 ? void 0 : _a.map(function (e) { return share_1.OwnerShare.fromPartial(e); })) || [];
        message.vaults = ((_b = object.vaults) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Vault.fromPartial(e); })) || [];
        message.defaultQuotingParams = object.defaultQuotingParams !== undefined && object.defaultQuotingParams !== null ? params_1.QuotingParams.fromPartial(object.defaultQuotingParams) : undefined;
        message.allOwnerShareUnlocks = ((_c = object.allOwnerShareUnlocks) === null || _c === void 0 ? void 0 : _c.map(function (e) { return share_1.OwnerShareUnlocks.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c;
        var message = createBaseGenesisState();
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = share_1.NumShares.fromAmino(object.total_shares);
        }
        message.ownerShares = ((_a = object.owner_shares) === null || _a === void 0 ? void 0 : _a.map(function (e) { return share_1.OwnerShare.fromAmino(e); })) || [];
        message.vaults = ((_b = object.vaults) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Vault.fromAmino(e); })) || [];
        if (object.default_quoting_params !== undefined && object.default_quoting_params !== null) {
            message.defaultQuotingParams = params_1.QuotingParams.fromAmino(object.default_quoting_params);
        }
        message.allOwnerShareUnlocks = ((_c = object.all_owner_share_unlocks) === null || _c === void 0 ? void 0 : _c.map(function (e) { return share_1.OwnerShareUnlocks.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.total_shares = message.totalShares ? share_1.NumShares.toAmino(message.totalShares) : undefined;
        if (message.ownerShares) {
            obj.owner_shares = message.ownerShares.map(function (e) { return e ? share_1.OwnerShare.toAmino(e) : undefined; });
        }
        else {
            obj.owner_shares = message.ownerShares;
        }
        if (message.vaults) {
            obj.vaults = message.vaults.map(function (e) { return e ? exports.Vault.toAmino(e) : undefined; });
        }
        else {
            obj.vaults = message.vaults;
        }
        obj.default_quoting_params = message.defaultQuotingParams ? params_1.QuotingParams.toAmino(message.defaultQuotingParams) : undefined;
        if (message.allOwnerShareUnlocks) {
            obj.all_owner_share_unlocks = message.allOwnerShareUnlocks.map(function (e) { return e ? share_1.OwnerShareUnlocks.toAmino(e) : undefined; });
        }
        else {
            obj.all_owner_share_unlocks = message.allOwnerShareUnlocks;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseVault() {
    return {
        vaultId: vault_1.VaultId.fromPartial({}),
        vaultParams: params_1.VaultParams.fromPartial({}),
        mostRecentClientIds: []
    };
}
exports.Vault = {
    typeUrl: "/nemo_network.vault.Vault",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.vaultId !== undefined) {
            vault_1.VaultId.encode(message.vaultId, writer.uint32(10).fork()).ldelim();
        }
        if (message.vaultParams !== undefined) {
            params_1.VaultParams.encode(message.vaultParams, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).fork();
        for (var _i = 0, _a = message.mostRecentClientIds; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVault();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = vault_1.VaultId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vaultParams = params_1.VaultParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.mostRecentClientIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.mostRecentClientIds.push(reader.uint32());
                    }
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
        var message = createBaseVault();
        message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? vault_1.VaultId.fromPartial(object.vaultId) : undefined;
        message.vaultParams = object.vaultParams !== undefined && object.vaultParams !== null ? params_1.VaultParams.fromPartial(object.vaultParams) : undefined;
        message.mostRecentClientIds = ((_a = object.mostRecentClientIds) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseVault();
        if (object.vault_id !== undefined && object.vault_id !== null) {
            message.vaultId = vault_1.VaultId.fromAmino(object.vault_id);
        }
        if (object.vault_params !== undefined && object.vault_params !== null) {
            message.vaultParams = params_1.VaultParams.fromAmino(object.vault_params);
        }
        message.mostRecentClientIds = ((_a = object.most_recent_client_ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.vault_id = message.vaultId ? vault_1.VaultId.toAmino(message.vaultId) : undefined;
        obj.vault_params = message.vaultParams ? params_1.VaultParams.toAmino(message.vaultParams) : undefined;
        if (message.mostRecentClientIds) {
            obj.most_recent_client_ids = message.mostRecentClientIds.map(function (e) { return e; });
        }
        else {
            obj.most_recent_client_ids = message.mostRecentClientIds;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Vault.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Vault.decode(message.value);
    },
    toProto: function (message) {
        return exports.Vault.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.Vault",
            value: exports.Vault.encode(message).finish()
        };
    }
};
function createBaseGenesisStateV6() {
    return {
        vaults: [],
        defaultQuotingParams: params_1.QuotingParams.fromPartial({})
    };
}
exports.GenesisStateV6 = {
    typeUrl: "/nemo_network.vault.GenesisStateV6",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.vaults; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Vault.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultQuotingParams !== undefined) {
            params_1.QuotingParams.encode(message.defaultQuotingParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisStateV6();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.vaults.push(exports.Vault.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        var message = createBaseGenesisStateV6();
        message.vaults = ((_a = object.vaults) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Vault.fromPartial(e); })) || [];
        message.defaultQuotingParams = object.defaultQuotingParams !== undefined && object.defaultQuotingParams !== null ? params_1.QuotingParams.fromPartial(object.defaultQuotingParams) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisStateV6();
        message.vaults = ((_a = object.vaults) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Vault.fromAmino(e); })) || [];
        if (object.default_quoting_params !== undefined && object.default_quoting_params !== null) {
            message.defaultQuotingParams = params_1.QuotingParams.fromAmino(object.default_quoting_params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.vaults) {
            obj.vaults = message.vaults.map(function (e) { return e ? exports.Vault.toAmino(e) : undefined; });
        }
        else {
            obj.vaults = message.vaults;
        }
        obj.default_quoting_params = message.defaultQuotingParams ? params_1.QuotingParams.toAmino(message.defaultQuotingParams) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisStateV6.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.GenesisStateV6.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisStateV6.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.GenesisStateV6",
            value: exports.GenesisStateV6.encode(message).finish()
        };
    }
};
function createBaseVaultV6() {
    return {
        vaultId: undefined,
        totalShares: undefined,
        ownerShares: [],
        vaultParams: params_1.VaultParams.fromPartial({}),
        mostRecentClientIds: []
    };
}
exports.VaultV6 = {
    typeUrl: "/nemo_network.vault.VaultV6",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.vaultId !== undefined) {
            vault_1.VaultId.encode(message.vaultId, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalShares !== undefined) {
            share_1.NumShares.encode(message.totalShares, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.ownerShares; _i < _a.length; _i++) {
            var v = _a[_i];
            share_1.OwnerShare.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.vaultParams !== undefined) {
            params_1.VaultParams.encode(message.vaultParams, writer.uint32(34).fork()).ldelim();
        }
        writer.uint32(42).fork();
        for (var _b = 0, _c = message.mostRecentClientIds; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVaultV6();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = vault_1.VaultId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.totalShares = share_1.NumShares.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ownerShares.push(share_1.OwnerShare.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.vaultParams = params_1.VaultParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.mostRecentClientIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.mostRecentClientIds.push(reader.uint32());
                    }
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
        var message = createBaseVaultV6();
        message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? vault_1.VaultId.fromPartial(object.vaultId) : undefined;
        message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? share_1.NumShares.fromPartial(object.totalShares) : undefined;
        message.ownerShares = ((_a = object.ownerShares) === null || _a === void 0 ? void 0 : _a.map(function (e) { return share_1.OwnerShare.fromPartial(e); })) || [];
        message.vaultParams = object.vaultParams !== undefined && object.vaultParams !== null ? params_1.VaultParams.fromPartial(object.vaultParams) : undefined;
        message.mostRecentClientIds = ((_b = object.mostRecentClientIds) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseVaultV6();
        if (object.vault_id !== undefined && object.vault_id !== null) {
            message.vaultId = vault_1.VaultId.fromAmino(object.vault_id);
        }
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = share_1.NumShares.fromAmino(object.total_shares);
        }
        message.ownerShares = ((_a = object.owner_shares) === null || _a === void 0 ? void 0 : _a.map(function (e) { return share_1.OwnerShare.fromAmino(e); })) || [];
        if (object.vault_params !== undefined && object.vault_params !== null) {
            message.vaultParams = params_1.VaultParams.fromAmino(object.vault_params);
        }
        message.mostRecentClientIds = ((_b = object.most_recent_client_ids) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.vault_id = message.vaultId ? vault_1.VaultId.toAmino(message.vaultId) : undefined;
        obj.total_shares = message.totalShares ? share_1.NumShares.toAmino(message.totalShares) : undefined;
        if (message.ownerShares) {
            obj.owner_shares = message.ownerShares.map(function (e) { return e ? share_1.OwnerShare.toAmino(e) : undefined; });
        }
        else {
            obj.owner_shares = message.ownerShares;
        }
        obj.vault_params = message.vaultParams ? params_1.VaultParams.toAmino(message.vaultParams) : undefined;
        if (message.mostRecentClientIds) {
            obj.most_recent_client_ids = message.mostRecentClientIds.map(function (e) { return e; });
        }
        else {
            obj.most_recent_client_ids = message.mostRecentClientIds;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.VaultV6.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.VaultV6.decode(message.value);
    },
    toProto: function (message) {
        return exports.VaultV6.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.VaultV6",
            value: exports.VaultV6.encode(message).finish()
        };
    }
};
