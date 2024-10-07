"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.updateMarketPrices = this.updateMarketPrices.bind(this);
        this.createOracleMarket = this.createOracleMarket.bind(this);
        this.updateMarketParam = this.updateMarketParam.bind(this);
    }
    MsgClientImpl.prototype.updateMarketPrices = function (request) {
        var data = tx_1.MsgUpdateMarketPrices.encode(request).finish();
        var promise = this.rpc.request("nemo_network.prices.Msg", "UpdateMarketPrices", data);
        return promise.then(function (data) { return tx_1.MsgUpdateMarketPricesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.createOracleMarket = function (request) {
        var data = tx_1.MsgCreateOracleMarket.encode(request).finish();
        var promise = this.rpc.request("nemo_network.prices.Msg", "CreateOracleMarket", data);
        return promise.then(function (data) { return tx_1.MsgCreateOracleMarketResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateMarketParam = function (request) {
        var data = tx_1.MsgUpdateMarketParam.encode(request).finish();
        var promise = this.rpc.request("nemo_network.prices.Msg", "UpdateMarketParam", data);
        return promise.then(function (data) { return tx_1.MsgUpdateMarketParamResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
