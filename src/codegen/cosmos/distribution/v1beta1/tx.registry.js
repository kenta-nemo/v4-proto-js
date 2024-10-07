"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_1.MsgSetWithdrawAddress], ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_1.MsgWithdrawDelegatorReward], ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_1.MsgWithdrawValidatorCommission], ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_1.MsgFundCommunityPool], ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams], ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_1.MsgCommunityPoolSpend], ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_1.MsgDepositValidatorRewardsPool]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        setWithdrawAddress: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: tx_1.MsgSetWithdrawAddress.encode(value).finish()
            };
        },
        withdrawDelegatorReward: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: tx_1.MsgWithdrawDelegatorReward.encode(value).finish()
            };
        },
        withdrawValidatorCommission: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: tx_1.MsgWithdrawValidatorCommission.encode(value).finish()
            };
        },
        fundCommunityPool: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: tx_1.MsgFundCommunityPool.encode(value).finish()
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        },
        communityPoolSpend: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
                value: tx_1.MsgCommunityPoolSpend.encode(value).finish()
            };
        },
        depositValidatorRewardsPool: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
                value: tx_1.MsgDepositValidatorRewardsPool.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setWithdrawAddress: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: value
            };
        },
        withdrawDelegatorReward: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: value
            };
        },
        withdrawValidatorCommission: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: value
            };
        },
        fundCommunityPool: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: value
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value: value
            };
        },
        communityPoolSpend: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
                value: value
            };
        },
        depositValidatorRewardsPool: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
                value: value
            };
        }
    },
    fromPartial: {
        setWithdrawAddress: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: tx_1.MsgSetWithdrawAddress.fromPartial(value)
            };
        },
        withdrawDelegatorReward: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: tx_1.MsgWithdrawDelegatorReward.fromPartial(value)
            };
        },
        withdrawValidatorCommission: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: tx_1.MsgWithdrawValidatorCommission.fromPartial(value)
            };
        },
        fundCommunityPool: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: tx_1.MsgFundCommunityPool.fromPartial(value)
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        },
        communityPoolSpend: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
                value: tx_1.MsgCommunityPoolSpend.fromPartial(value)
            };
        },
        depositValidatorRewardsPool: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
                value: tx_1.MsgDepositValidatorRewardsPool.fromPartial(value)
            };
        }
    }
};
