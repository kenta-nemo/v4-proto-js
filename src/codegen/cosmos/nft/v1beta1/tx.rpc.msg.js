"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.send = this.send.bind(this);
    }
    MsgClientImpl.prototype.send = function (request) {
        var data = tx_1.MsgSend.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Msg", "Send", data);
        return promise.then(function (data) { return tx_1.MsgSendResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
