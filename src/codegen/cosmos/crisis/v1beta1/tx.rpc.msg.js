"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.verifyInvariant = this.verifyInvariant.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    MsgClientImpl.prototype.verifyInvariant = function (request) {
        var data = tx_1.MsgVerifyInvariant.encode(request).finish();
        var promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
        return promise.then(function (data) { return tx_1.MsgVerifyInvariantResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateParams = function (request) {
        var data = tx_1.MsgUpdateParams.encode(request).finish();
        var promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "UpdateParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
