"use strict";
exports.__esModule = true;
exports.QueryMegavaultOwnerSharesResponse = exports.QueryMegavaultOwnerSharesRequest = exports.QueryMegavaultTotalSharesResponse = exports.QueryMegavaultTotalSharesRequest = exports.QueryAllVaultsResponse = exports.QueryAllVaultsRequest = exports.QueryVaultResponse = exports.QueryVaultRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
var vault_1 = require("./vault");
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var params_1 = require("./params");
var subaccount_1 = require("../subaccounts/subaccount");
var share_1 = require("./share");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/nemo_network.vault.QueryParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
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
        var message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({}),
        defaultQuotingParams: params_1.QuotingParams.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/nemo_network.vault.QueryParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultQuotingParams !== undefined) {
            params_1.QuotingParams.encode(message.defaultQuotingParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        var message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.defaultQuotingParams = object.defaultQuotingParams !== undefined && object.defaultQuotingParams !== null ? params_1.QuotingParams.fromPartial(object.defaultQuotingParams) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        if (object.default_quoting_params !== undefined && object.default_quoting_params !== null) {
            message.defaultQuotingParams = params_1.QuotingParams.fromAmino(object.default_quoting_params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        obj.default_quoting_params = message.defaultQuotingParams ? params_1.QuotingParams.toAmino(message.defaultQuotingParams) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVaultRequest() {
    return {
        type: 0,
        number: 0
    };
}
exports.QueryVaultRequest = {
    typeUrl: "/nemo_network.vault.QueryVaultRequest",
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
        var message = createBaseQueryVaultRequest();
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
        var message = createBaseQueryVaultRequest();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryVaultRequest();
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
        return exports.QueryVaultRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryVaultRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryVaultRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryVaultRequest",
            value: exports.QueryVaultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVaultResponse() {
    return {
        vaultId: vault_1.VaultId.fromPartial({}),
        subaccountId: subaccount_1.SubaccountId.fromPartial({}),
        equity: new Uint8Array(),
        inventory: new Uint8Array(),
        vaultParams: params_1.VaultParams.fromPartial({})
    };
}
exports.QueryVaultResponse = {
    typeUrl: "/nemo_network.vault.QueryVaultResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.vaultId !== undefined) {
            vault_1.VaultId.encode(message.vaultId, writer.uint32(10).fork()).ldelim();
        }
        if (message.subaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.subaccountId, writer.uint32(18).fork()).ldelim();
        }
        if (message.equity.length !== 0) {
            writer.uint32(26).bytes(message.equity);
        }
        if (message.inventory.length !== 0) {
            writer.uint32(34).bytes(message.inventory);
        }
        if (message.vaultParams !== undefined) {
            params_1.VaultParams.encode(message.vaultParams, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVaultResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = vault_1.VaultId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.equity = reader.bytes();
                    break;
                case 4:
                    message.inventory = reader.bytes();
                    break;
                case 5:
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
        var _a, _b;
        var message = createBaseQueryVaultResponse();
        message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? vault_1.VaultId.fromPartial(object.vaultId) : undefined;
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.subaccountId) : undefined;
        message.equity = (_a = object.equity) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.inventory = (_b = object.inventory) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.vaultParams = object.vaultParams !== undefined && object.vaultParams !== null ? params_1.VaultParams.fromPartial(object.vaultParams) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryVaultResponse();
        if (object.vault_id !== undefined && object.vault_id !== null) {
            message.vaultId = vault_1.VaultId.fromAmino(object.vault_id);
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.SubaccountId.fromAmino(object.subaccount_id);
        }
        if (object.equity !== undefined && object.equity !== null) {
            message.equity = (0, helpers_1.bytesFromBase64)(object.equity);
        }
        if (object.inventory !== undefined && object.inventory !== null) {
            message.inventory = (0, helpers_1.bytesFromBase64)(object.inventory);
        }
        if (object.vault_params !== undefined && object.vault_params !== null) {
            message.vaultParams = params_1.VaultParams.fromAmino(object.vault_params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.vault_id = message.vaultId ? vault_1.VaultId.toAmino(message.vaultId) : undefined;
        obj.subaccount_id = message.subaccountId ? subaccount_1.SubaccountId.toAmino(message.subaccountId) : undefined;
        obj.equity = message.equity ? (0, helpers_1.base64FromBytes)(message.equity) : undefined;
        obj.inventory = message.inventory ? (0, helpers_1.base64FromBytes)(message.inventory) : undefined;
        obj.vault_params = message.vaultParams ? params_1.VaultParams.toAmino(message.vaultParams) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryVaultResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryVaultResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryVaultResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryVaultResponse",
            value: exports.QueryVaultResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllVaultsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllVaultsRequest = {
    typeUrl: "/nemo_network.vault.QueryAllVaultsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllVaultsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllVaultsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllVaultsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllVaultsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllVaultsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllVaultsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryAllVaultsRequest",
            value: exports.QueryAllVaultsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllVaultsResponse() {
    return {
        vaults: [],
        pagination: undefined
    };
}
exports.QueryAllVaultsResponse = {
    typeUrl: "/nemo_network.vault.QueryAllVaultsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.vaults; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.QueryVaultResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllVaultsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaults.push(exports.QueryVaultResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryAllVaultsResponse();
        message.vaults = ((_a = object.vaults) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.QueryVaultResponse.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryAllVaultsResponse();
        message.vaults = ((_a = object.vaults) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.QueryVaultResponse.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.vaults) {
            obj.vaults = message.vaults.map(function (e) { return e ? exports.QueryVaultResponse.toAmino(e) : undefined; });
        }
        else {
            obj.vaults = message.vaults;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllVaultsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllVaultsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllVaultsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryAllVaultsResponse",
            value: exports.QueryAllVaultsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMegavaultTotalSharesRequest() {
    return {};
}
exports.QueryMegavaultTotalSharesRequest = {
    typeUrl: "/nemo_network.vault.QueryMegavaultTotalSharesRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMegavaultTotalSharesRequest();
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
        var message = createBaseQueryMegavaultTotalSharesRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryMegavaultTotalSharesRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMegavaultTotalSharesRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMegavaultTotalSharesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMegavaultTotalSharesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryMegavaultTotalSharesRequest",
            value: exports.QueryMegavaultTotalSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMegavaultTotalSharesResponse() {
    return {
        totalShares: undefined
    };
}
exports.QueryMegavaultTotalSharesResponse = {
    typeUrl: "/nemo_network.vault.QueryMegavaultTotalSharesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.totalShares !== undefined) {
            share_1.NumShares.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMegavaultTotalSharesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = share_1.NumShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryMegavaultTotalSharesResponse();
        message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? share_1.NumShares.fromPartial(object.totalShares) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMegavaultTotalSharesResponse();
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = share_1.NumShares.fromAmino(object.total_shares);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.total_shares = message.totalShares ? share_1.NumShares.toAmino(message.totalShares) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMegavaultTotalSharesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMegavaultTotalSharesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMegavaultTotalSharesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryMegavaultTotalSharesResponse",
            value: exports.QueryMegavaultTotalSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMegavaultOwnerSharesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryMegavaultOwnerSharesRequest = {
    typeUrl: "/nemo_network.vault.QueryMegavaultOwnerSharesRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMegavaultOwnerSharesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryMegavaultOwnerSharesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMegavaultOwnerSharesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMegavaultOwnerSharesRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMegavaultOwnerSharesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMegavaultOwnerSharesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryMegavaultOwnerSharesRequest",
            value: exports.QueryMegavaultOwnerSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMegavaultOwnerSharesResponse() {
    return {
        ownerShares: [],
        pagination: undefined
    };
}
exports.QueryMegavaultOwnerSharesResponse = {
    typeUrl: "/nemo_network.vault.QueryMegavaultOwnerSharesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.ownerShares; _i < _a.length; _i++) {
            var v = _a[_i];
            share_1.OwnerShare.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMegavaultOwnerSharesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ownerShares.push(share_1.OwnerShare.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryMegavaultOwnerSharesResponse();
        message.ownerShares = ((_a = object.ownerShares) === null || _a === void 0 ? void 0 : _a.map(function (e) { return share_1.OwnerShare.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryMegavaultOwnerSharesResponse();
        message.ownerShares = ((_a = object.owner_shares) === null || _a === void 0 ? void 0 : _a.map(function (e) { return share_1.OwnerShare.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.ownerShares) {
            obj.owner_shares = message.ownerShares.map(function (e) { return e ? share_1.OwnerShare.toAmino(e) : undefined; });
        }
        else {
            obj.owner_shares = message.ownerShares;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMegavaultOwnerSharesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMegavaultOwnerSharesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMegavaultOwnerSharesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QueryMegavaultOwnerSharesResponse",
            value: exports.QueryMegavaultOwnerSharesResponse.encode(message).finish()
        };
    }
};
