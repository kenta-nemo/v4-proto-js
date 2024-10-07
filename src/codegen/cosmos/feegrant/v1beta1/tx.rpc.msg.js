"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.grantAllowance = this.grantAllowance.bind(this);
        this.revokeAllowance = this.revokeAllowance.bind(this);
        this.pruneAllowances = this.pruneAllowances.bind(this);
    }
    MsgClientImpl.prototype.grantAllowance = function (request) {
        var data = tx_1.MsgGrantAllowance.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
        return promise.then(function (data) { return tx_1.MsgGrantAllowanceResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.revokeAllowance = function (request) {
        var data = tx_1.MsgRevokeAllowance.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
        return promise.then(function (data) { return tx_1.MsgRevokeAllowanceResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.pruneAllowances = function (request) {
        var data = tx_1.MsgPruneAllowances.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "PruneAllowances", data);
        return promise.then(function (data) { return tx_1.MsgPruneAllowancesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
