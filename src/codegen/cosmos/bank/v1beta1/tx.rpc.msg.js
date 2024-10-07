"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.send = this.send.bind(this);
        this.multiSend = this.multiSend.bind(this);
        this.updateParams = this.updateParams.bind(this);
        this.setSendEnabled = this.setSendEnabled.bind(this);
    }
    MsgClientImpl.prototype.send = function (request) {
        var data = tx_1.MsgSend.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
        return promise.then(function (data) { return tx_1.MsgSendResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.multiSend = function (request) {
        var data = tx_1.MsgMultiSend.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
        return promise.then(function (data) { return tx_1.MsgMultiSendResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateParams = function (request) {
        var data = tx_1.MsgUpdateParams.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "UpdateParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.setSendEnabled = function (request) {
        var data = tx_1.MsgSetSendEnabled.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "SetSendEnabled", data);
        return promise.then(function (data) { return tx_1.MsgSetSendEnabledResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
