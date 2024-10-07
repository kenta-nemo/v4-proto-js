"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
        this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
        this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
        this.fundCommunityPool = this.fundCommunityPool.bind(this);
        this.updateParams = this.updateParams.bind(this);
        this.communityPoolSpend = this.communityPoolSpend.bind(this);
        this.depositValidatorRewardsPool = this.depositValidatorRewardsPool.bind(this);
    }
    MsgClientImpl.prototype.setWithdrawAddress = function (request) {
        var data = tx_1.MsgSetWithdrawAddress.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
        return promise.then(function (data) { return tx_1.MsgSetWithdrawAddressResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.withdrawDelegatorReward = function (request) {
        var data = tx_1.MsgWithdrawDelegatorReward.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
        return promise.then(function (data) { return tx_1.MsgWithdrawDelegatorRewardResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.withdrawValidatorCommission = function (request) {
        var data = tx_1.MsgWithdrawValidatorCommission.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
        return promise.then(function (data) { return tx_1.MsgWithdrawValidatorCommissionResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.fundCommunityPool = function (request) {
        var data = tx_1.MsgFundCommunityPool.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
        return promise.then(function (data) { return tx_1.MsgFundCommunityPoolResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateParams = function (request) {
        var data = tx_1.MsgUpdateParams.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "UpdateParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.communityPoolSpend = function (request) {
        var data = tx_1.MsgCommunityPoolSpend.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "CommunityPoolSpend", data);
        return promise.then(function (data) { return tx_1.MsgCommunityPoolSpendResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.depositValidatorRewardsPool = function (request) {
        var data = tx_1.MsgDepositValidatorRewardsPool.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "DepositValidatorRewardsPool", data);
        return promise.then(function (data) { return tx_1.MsgDepositValidatorRewardsPoolResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
