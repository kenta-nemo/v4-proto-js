"use strict";
exports.__esModule = true;
exports.MsgSetListingVaultDepositParamsResponse = exports.MsgSetListingVaultDepositParams = exports.MsgCreateMarketPermissionlessResponse = exports.MsgCreateMarketPermissionless = exports.MsgSetMarketsHardCapResponse = exports.MsgSetMarketsHardCap = void 0;
var subaccount_1 = require("../subaccounts/subaccount");
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseMsgSetMarketsHardCap() {
    return {
        authority: "",
        hardCapForMarkets: 0
    };
}
exports.MsgSetMarketsHardCap = {
    typeUrl: "/nemo_network.listing.MsgSetMarketsHardCap",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.hardCapForMarkets !== 0) {
            writer.uint32(16).uint32(message.hardCapForMarkets);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetMarketsHardCap();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgSetMarketsHardCap();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.hardCapForMarkets = (_b = object.hardCapForMarkets) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSetMarketsHardCap();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.hard_cap_for_markets !== undefined && object.hard_cap_for_markets !== null) {
            message.hardCapForMarkets = object.hard_cap_for_markets;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.hard_cap_for_markets = message.hardCapForMarkets === 0 ? undefined : message.hardCapForMarkets;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetMarketsHardCap.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetMarketsHardCap.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetMarketsHardCap.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.MsgSetMarketsHardCap",
            value: exports.MsgSetMarketsHardCap.encode(message).finish()
        };
    }
};
function createBaseMsgSetMarketsHardCapResponse() {
    return {};
}
exports.MsgSetMarketsHardCapResponse = {
    typeUrl: "/nemo_network.listing.MsgSetMarketsHardCapResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetMarketsHardCapResponse();
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
        var message = createBaseMsgSetMarketsHardCapResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSetMarketsHardCapResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetMarketsHardCapResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetMarketsHardCapResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetMarketsHardCapResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.MsgSetMarketsHardCapResponse",
            value: exports.MsgSetMarketsHardCapResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateMarketPermissionless() {
    return {
        ticker: "",
        subaccountId: undefined
    };
}
exports.MsgCreateMarketPermissionless = {
    typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionless",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.ticker !== "") {
            writer.uint32(10).string(message.ticker);
        }
        if (message.subaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.subaccountId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateMarketPermissionless();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticker = reader.string();
                    break;
                case 2:
                    message.subaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
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
        var message = createBaseMsgCreateMarketPermissionless();
        message.ticker = (_a = object.ticker) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.subaccountId) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgCreateMarketPermissionless();
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.SubaccountId.fromAmino(object.subaccount_id);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.subaccount_id = message.subaccountId ? subaccount_1.SubaccountId.toAmino(message.subaccountId) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateMarketPermissionless.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateMarketPermissionless.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateMarketPermissionless.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionless",
            value: exports.MsgCreateMarketPermissionless.encode(message).finish()
        };
    }
};
function createBaseMsgCreateMarketPermissionlessResponse() {
    return {};
}
exports.MsgCreateMarketPermissionlessResponse = {
    typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionlessResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateMarketPermissionlessResponse();
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
        var message = createBaseMsgCreateMarketPermissionlessResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCreateMarketPermissionlessResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateMarketPermissionlessResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateMarketPermissionlessResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateMarketPermissionlessResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionlessResponse",
            value: exports.MsgCreateMarketPermissionlessResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetListingVaultDepositParams() {
    return {
        authority: "",
        params: params_1.ListingVaultDepositParams.fromPartial({})
    };
}
exports.MsgSetListingVaultDepositParams = {
    typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.ListingVaultDepositParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetListingVaultDepositParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = params_1.ListingVaultDepositParams.decode(reader, reader.uint32());
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
        var message = createBaseMsgSetListingVaultDepositParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? params_1.ListingVaultDepositParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSetListingVaultDepositParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.ListingVaultDepositParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? params_1.ListingVaultDepositParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetListingVaultDepositParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetListingVaultDepositParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetListingVaultDepositParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParams",
            value: exports.MsgSetListingVaultDepositParams.encode(message).finish()
        };
    }
};
function createBaseMsgSetListingVaultDepositParamsResponse() {
    return {};
}
exports.MsgSetListingVaultDepositParamsResponse = {
    typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetListingVaultDepositParamsResponse();
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
        var message = createBaseMsgSetListingVaultDepositParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSetListingVaultDepositParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetListingVaultDepositParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetListingVaultDepositParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetListingVaultDepositParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParamsResponse",
            value: exports.MsgSetListingVaultDepositParamsResponse.encode(message).finish()
        };
    }
};
