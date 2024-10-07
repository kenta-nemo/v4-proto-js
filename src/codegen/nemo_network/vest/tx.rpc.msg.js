"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.setVestEntry = this.setVestEntry.bind(this);
        this.deleteVestEntry = this.deleteVestEntry.bind(this);
    }
    MsgClientImpl.prototype.setVestEntry = function (request) {
        var data = tx_1.MsgSetVestEntry.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vest.Msg", "SetVestEntry", data);
        return promise.then(function (data) { return tx_1.MsgSetVestEntryResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.deleteVestEntry = function (request) {
        var data = tx_1.MsgDeleteVestEntry.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vest.Msg", "DeleteVestEntry", data);
        return promise.then(function (data) { return tx_1.MsgDeleteVestEntryResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
