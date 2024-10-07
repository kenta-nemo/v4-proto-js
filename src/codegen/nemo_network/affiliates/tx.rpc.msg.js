"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.registerAffiliate = this.registerAffiliate.bind(this);
        this.updateAffiliateTiers = this.updateAffiliateTiers.bind(this);
    }
    MsgClientImpl.prototype.registerAffiliate = function (request) {
        var data = tx_1.MsgRegisterAffiliate.encode(request).finish();
        var promise = this.rpc.request("nemo_network.affiliates.Msg", "RegisterAffiliate", data);
        return promise.then(function (data) { return tx_1.MsgRegisterAffiliateResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateAffiliateTiers = function (request) {
        var data = tx_1.MsgUpdateAffiliateTiers.encode(request).finish();
        var promise = this.rpc.request("nemo_network.affiliates.Msg", "UpdateAffiliateTiers", data);
        return promise.then(function (data) { return tx_1.MsgUpdateAffiliateTiersResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
