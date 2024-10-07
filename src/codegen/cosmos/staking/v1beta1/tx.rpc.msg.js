"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.createValidator = this.createValidator.bind(this);
        this.editValidator = this.editValidator.bind(this);
        this.delegate = this.delegate.bind(this);
        this.beginRedelegate = this.beginRedelegate.bind(this);
        this.undelegate = this.undelegate.bind(this);
        this.cancelUnbondingDelegation = this.cancelUnbondingDelegation.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    MsgClientImpl.prototype.createValidator = function (request) {
        var data = tx_1.MsgCreateValidator.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
        return promise.then(function (data) { return tx_1.MsgCreateValidatorResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.editValidator = function (request) {
        var data = tx_1.MsgEditValidator.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
        return promise.then(function (data) { return tx_1.MsgEditValidatorResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.delegate = function (request) {
        var data = tx_1.MsgDelegate.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
        return promise.then(function (data) { return tx_1.MsgDelegateResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.beginRedelegate = function (request) {
        var data = tx_1.MsgBeginRedelegate.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
        return promise.then(function (data) { return tx_1.MsgBeginRedelegateResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.undelegate = function (request) {
        var data = tx_1.MsgUndelegate.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
        return promise.then(function (data) { return tx_1.MsgUndelegateResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.cancelUnbondingDelegation = function (request) {
        var data = tx_1.MsgCancelUnbondingDelegation.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
        return promise.then(function (data) { return tx_1.MsgCancelUnbondingDelegationResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateParams = function (request) {
        var data = tx_1.MsgUpdateParams.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "UpdateParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
