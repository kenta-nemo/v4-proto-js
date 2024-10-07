"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.marketPrice = this.marketPrice.bind(this);
        this.allMarketPrices = this.allMarketPrices.bind(this);
        this.marketParam = this.marketParam.bind(this);
        this.allMarketParams = this.allMarketParams.bind(this);
    }
    QueryClientImpl.prototype.marketPrice = function (request) {
        var data = query_1.QueryMarketPriceRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.prices.Query", "MarketPrice", data);
        return promise.then(function (data) { return query_1.QueryMarketPriceResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allMarketPrices = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllMarketPricesRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.prices.Query", "AllMarketPrices", data);
        return promise.then(function (data) { return query_1.QueryAllMarketPricesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.marketParam = function (request) {
        var data = query_1.QueryMarketParamRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.prices.Query", "MarketParam", data);
        return promise.then(function (data) { return query_1.QueryMarketParamResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allMarketParams = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllMarketParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.prices.Query", "AllMarketParams", data);
        return promise.then(function (data) { return query_1.QueryAllMarketParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        marketPrice: function (request) {
            return queryService.marketPrice(request);
        },
        allMarketPrices: function (request) {
            return queryService.allMarketPrices(request);
        },
        marketParam: function (request) {
            return queryService.marketParam(request);
        },
        allMarketParams: function (request) {
            return queryService.allMarketParams(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
