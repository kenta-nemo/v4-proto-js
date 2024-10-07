"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.softwareUpgrade = this.softwareUpgrade.bind(this);
        this.cancelUpgrade = this.cancelUpgrade.bind(this);
    }
    MsgClientImpl.prototype.softwareUpgrade = function (request) {
        var data = tx_1.MsgSoftwareUpgrade.encode(request).finish();
        var promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "SoftwareUpgrade", data);
        return promise.then(function (data) { return tx_1.MsgSoftwareUpgradeResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.cancelUpgrade = function (request) {
        var data = tx_1.MsgCancelUpgrade.encode(request).finish();
        var promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "CancelUpgrade", data);
        return promise.then(function (data) { return tx_1.MsgCancelUpgradeResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
