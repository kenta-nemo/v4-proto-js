"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.setLimitParams = this.setLimitParams.bind(this);
    }
    MsgClientImpl.prototype.setLimitParams = function (request) {
        var data = tx_1.MsgSetLimitParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.ratelimit.Msg", "SetLimitParams", data);
        return promise.then(function (data) { return tx_1.MsgSetLimitParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
