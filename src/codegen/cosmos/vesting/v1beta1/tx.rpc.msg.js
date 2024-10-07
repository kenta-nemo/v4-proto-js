"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.createVestingAccount = this.createVestingAccount.bind(this);
        this.createPermanentLockedAccount = this.createPermanentLockedAccount.bind(this);
        this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
    }
    MsgClientImpl.prototype.createVestingAccount = function (request) {
        var data = tx_1.MsgCreateVestingAccount.encode(request).finish();
        var promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
        return promise.then(function (data) { return tx_1.MsgCreateVestingAccountResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.createPermanentLockedAccount = function (request) {
        var data = tx_1.MsgCreatePermanentLockedAccount.encode(request).finish();
        var promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePermanentLockedAccount", data);
        return promise.then(function (data) { return tx_1.MsgCreatePermanentLockedAccountResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.createPeriodicVestingAccount = function (request) {
        var data = tx_1.MsgCreatePeriodicVestingAccount.encode(request).finish();
        var promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
        return promise.then(function (data) { return tx_1.MsgCreatePeriodicVestingAccountResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
