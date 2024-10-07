"use strict";
exports.__esModule = true;
exports.MsgDepositValidatorRewardsPoolResponse = exports.MsgDepositValidatorRewardsPool = exports.MsgCommunityPoolSpendResponse = exports.MsgCommunityPoolSpend = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgFundCommunityPoolResponse = exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommissionResponse = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorRewardResponse = exports.MsgWithdrawDelegatorReward = exports.MsgSetWithdrawAddressResponse = exports.MsgSetWithdrawAddress = void 0;
var coin_1 = require("../../base/v1beta1/coin");
var distribution_1 = require("./distribution");
var binary_1 = require("../../../binary");
function createBaseMsgSetWithdrawAddress() {
    return {
        delegatorAddress: "",
        withdrawAddress: ""
    };
}
exports.MsgSetWithdrawAddress = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetWithdrawAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.withdrawAddress = reader.string();
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
        var message = createBaseMsgSetWithdrawAddress();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.withdrawAddress = (_b = object.withdrawAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSetWithdrawAddress();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
            message.withdrawAddress = object.withdraw_address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetWithdrawAddress.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgModifyWithdrawAddress",
            value: exports.MsgSetWithdrawAddress.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetWithdrawAddress.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetWithdrawAddress.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: exports.MsgSetWithdrawAddress.encode(message).finish()
        };
    }
};
function createBaseMsgSetWithdrawAddressResponse() {
    return {};
}
exports.MsgSetWithdrawAddressResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetWithdrawAddressResponse();
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
        var message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetWithdrawAddressResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgSetWithdrawAddressResponse",
            value: exports.MsgSetWithdrawAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetWithdrawAddressResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetWithdrawAddressResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
            value: exports.MsgSetWithdrawAddressResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDelegatorReward() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
exports.MsgWithdrawDelegatorReward = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawDelegatorReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
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
        var message = createBaseMsgWithdrawDelegatorReward();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgWithdrawDelegatorReward();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgWithdrawDelegatorReward.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgWithdrawDelegationReward",
            value: exports.MsgWithdrawDelegatorReward.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgWithdrawDelegatorReward.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgWithdrawDelegatorReward.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: exports.MsgWithdrawDelegatorReward.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDelegatorRewardResponse() {
    return {
        amount: []
    };
}
exports.MsgWithdrawDelegatorRewardResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawDelegatorRewardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseMsgWithdrawDelegatorRewardResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgWithdrawDelegatorRewardResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgWithdrawDelegatorRewardResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
            value: exports.MsgWithdrawDelegatorRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgWithdrawDelegatorRewardResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgWithdrawDelegatorRewardResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
            value: exports.MsgWithdrawDelegatorRewardResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawValidatorCommission() {
    return {
        validatorAddress: ""
    };
}
exports.MsgWithdrawValidatorCommission = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawValidatorCommission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
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
        var message = createBaseMsgWithdrawValidatorCommission();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgWithdrawValidatorCommission();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgWithdrawValidatorCommission.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgWithdrawValidatorCommission",
            value: exports.MsgWithdrawValidatorCommission.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgWithdrawValidatorCommission.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgWithdrawValidatorCommission.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: exports.MsgWithdrawValidatorCommission.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawValidatorCommissionResponse() {
    return {
        amount: []
    };
}
exports.MsgWithdrawValidatorCommissionResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawValidatorCommissionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseMsgWithdrawValidatorCommissionResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgWithdrawValidatorCommissionResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgWithdrawValidatorCommissionResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
            value: exports.MsgWithdrawValidatorCommissionResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgWithdrawValidatorCommissionResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgWithdrawValidatorCommissionResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
            value: exports.MsgWithdrawValidatorCommissionResponse.encode(message).finish()
        };
    }
};
function createBaseMsgFundCommunityPool() {
    return {
        amount: [],
        depositor: ""
    };
}
exports.MsgFundCommunityPool = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundCommunityPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.depositor = reader.string();
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
        var message = createBaseMsgFundCommunityPool();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.depositor = (_b = object.depositor) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgFundCommunityPool();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        obj.depositor = message.depositor === "" ? undefined : message.depositor;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgFundCommunityPool.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgFundCommunityPool",
            value: exports.MsgFundCommunityPool.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgFundCommunityPool.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgFundCommunityPool.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: exports.MsgFundCommunityPool.encode(message).finish()
        };
    }
};
function createBaseMsgFundCommunityPoolResponse() {
    return {};
}
exports.MsgFundCommunityPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundCommunityPoolResponse();
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
        var message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgFundCommunityPoolResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgFundCommunityPoolResponse",
            value: exports.MsgFundCommunityPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgFundCommunityPoolResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgFundCommunityPoolResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
            value: exports.MsgFundCommunityPoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: distribution_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
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
        var message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? distribution_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = distribution_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? distribution_1.Params.toAmino(message.params) : distribution_1.Params.toAmino(distribution_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/distribution/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateParamsResponse();
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
        var message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCommunityPoolSpend() {
    return {
        authority: "",
        recipient: "",
        amount: []
    };
}
exports.MsgCommunityPoolSpend = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCommunityPoolSpend();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseMsgCommunityPoolSpend();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.recipient = (_b = object.recipient) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgCommunityPoolSpend();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCommunityPoolSpend.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/distr/MsgCommunityPoolSpend",
            value: exports.MsgCommunityPoolSpend.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgCommunityPoolSpend.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCommunityPoolSpend.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
            value: exports.MsgCommunityPoolSpend.encode(message).finish()
        };
    }
};
function createBaseMsgCommunityPoolSpendResponse() {
    return {};
}
exports.MsgCommunityPoolSpendResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCommunityPoolSpendResponse();
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
        var message = createBaseMsgCommunityPoolSpendResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCommunityPoolSpendResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCommunityPoolSpendResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgCommunityPoolSpendResponse",
            value: exports.MsgCommunityPoolSpendResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgCommunityPoolSpendResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCommunityPoolSpendResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse",
            value: exports.MsgCommunityPoolSpendResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositValidatorRewardsPool() {
    return {
        depositor: "",
        validatorAddress: "",
        amount: []
    };
}
exports.MsgDepositValidatorRewardsPool = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDepositValidatorRewardsPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseMsgDepositValidatorRewardsPool();
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgDepositValidatorRewardsPool();
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.depositor = message.depositor === "" ? undefined : message.depositor;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDepositValidatorRewardsPool.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/distr/MsgDepositValRewards",
            value: exports.MsgDepositValidatorRewardsPool.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgDepositValidatorRewardsPool.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDepositValidatorRewardsPool.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
            value: exports.MsgDepositValidatorRewardsPool.encode(message).finish()
        };
    }
};
function createBaseMsgDepositValidatorRewardsPoolResponse() {
    return {};
}
exports.MsgDepositValidatorRewardsPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDepositValidatorRewardsPoolResponse();
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
        var message = createBaseMsgDepositValidatorRewardsPoolResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgDepositValidatorRewardsPoolResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDepositValidatorRewardsPoolResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgDepositValidatorRewardsPoolResponse",
            value: exports.MsgDepositValidatorRewardsPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgDepositValidatorRewardsPoolResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDepositValidatorRewardsPoolResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse",
            value: exports.MsgDepositValidatorRewardsPoolResponse.encode(message).finish()
        };
    }
};
