"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.depositToMegavault = this.depositToMegavault.bind(this);
        this.updateDefaultQuotingParams = this.updateDefaultQuotingParams.bind(this);
        this.setVaultParams = this.setVaultParams.bind(this);
    }
    MsgClientImpl.prototype.depositToMegavault = function (request) {
        var data = tx_1.MsgDepositToMegavault.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vault.Msg", "DepositToMegavault", data);
        return promise.then(function (data) { return tx_1.MsgDepositToMegavaultResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateDefaultQuotingParams = function (request) {
        var data = tx_1.MsgUpdateDefaultQuotingParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vault.Msg", "UpdateDefaultQuotingParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateDefaultQuotingParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.setVaultParams = function (request) {
        var data = tx_1.MsgSetVaultParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vault.Msg", "SetVaultParams", data);
        return promise.then(function (data) { return tx_1.MsgSetVaultParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
