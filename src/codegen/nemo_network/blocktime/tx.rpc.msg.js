"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.updateDowntimeParams = this.updateDowntimeParams.bind(this);
    }
    MsgClientImpl.prototype.updateDowntimeParams = function (request) {
        var data = tx_1.MsgUpdateDowntimeParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.blocktime.Msg", "UpdateDowntimeParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateDowntimeParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
