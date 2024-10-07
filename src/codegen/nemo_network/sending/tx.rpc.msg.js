"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var transfer_1 = require("./transfer");
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.createTransfer = this.createTransfer.bind(this);
        this.depositToSubaccount = this.depositToSubaccount.bind(this);
        this.withdrawFromSubaccount = this.withdrawFromSubaccount.bind(this);
        this.sendFromModuleToAccount = this.sendFromModuleToAccount.bind(this);
    }
    MsgClientImpl.prototype.createTransfer = function (request) {
        var data = tx_1.MsgCreateTransfer.encode(request).finish();
        var promise = this.rpc.request("nemo_network.sending.Msg", "CreateTransfer", data);
        return promise.then(function (data) { return tx_1.MsgCreateTransferResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.depositToSubaccount = function (request) {
        var data = transfer_1.MsgDepositToSubaccount.encode(request).finish();
        var promise = this.rpc.request("nemo_network.sending.Msg", "DepositToSubaccount", data);
        return promise.then(function (data) { return tx_1.MsgDepositToSubaccountResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.withdrawFromSubaccount = function (request) {
        var data = transfer_1.MsgWithdrawFromSubaccount.encode(request).finish();
        var promise = this.rpc.request("nemo_network.sending.Msg", "WithdrawFromSubaccount", data);
        return promise.then(function (data) { return tx_1.MsgWithdrawFromSubaccountResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.sendFromModuleToAccount = function (request) {
        var data = transfer_1.MsgSendFromModuleToAccount.encode(request).finish();
        var promise = this.rpc.request("nemo_network.sending.Msg", "SendFromModuleToAccount", data);
        return promise.then(function (data) { return tx_1.MsgSendFromModuleToAccountResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
