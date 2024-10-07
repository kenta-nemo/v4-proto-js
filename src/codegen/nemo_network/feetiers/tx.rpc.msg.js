"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.updatePerpetualFeeParams = this.updatePerpetualFeeParams.bind(this);
    }
    MsgClientImpl.prototype.updatePerpetualFeeParams = function (request) {
        var data = tx_1.MsgUpdatePerpetualFeeParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.feetiers.Msg", "UpdatePerpetualFeeParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdatePerpetualFeeParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
