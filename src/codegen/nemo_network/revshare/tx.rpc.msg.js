"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.setMarketMapperRevenueShare = this.setMarketMapperRevenueShare.bind(this);
        this.setMarketMapperRevShareDetailsForMarket = this.setMarketMapperRevShareDetailsForMarket.bind(this);
    }
    MsgClientImpl.prototype.setMarketMapperRevenueShare = function (request) {
        var data = tx_1.MsgSetMarketMapperRevenueShare.encode(request).finish();
        var promise = this.rpc.request("nemo_network.revshare.Msg", "SetMarketMapperRevenueShare", data);
        return promise.then(function (data) { return tx_1.MsgSetMarketMapperRevenueShareResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.setMarketMapperRevShareDetailsForMarket = function (request) {
        var data = tx_1.MsgSetMarketMapperRevShareDetailsForMarket.encode(request).finish();
        var promise = this.rpc.request("nemo_network.revshare.Msg", "SetMarketMapperRevShareDetailsForMarket", data);
        return promise.then(function (data) { return tx_1.MsgSetMarketMapperRevShareDetailsForMarketResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
