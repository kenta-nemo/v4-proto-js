"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.grant = this.grant.bind(this);
        this.exec = this.exec.bind(this);
        this.revoke = this.revoke.bind(this);
    }
    MsgClientImpl.prototype.grant = function (request) {
        var data = tx_1.MsgGrant.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
        return promise.then(function (data) { return tx_1.MsgGrantResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.exec = function (request) {
        var data = tx_1.MsgExec.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
        return promise.then(function (data) { return tx_1.MsgExecResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.revoke = function (request) {
        var data = tx_1.MsgRevoke.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
        return promise.then(function (data) { return tx_1.MsgRevokeResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
