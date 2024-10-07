"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.marketMapperRevenueShareParams = this.marketMapperRevenueShareParams.bind(this);
        this.marketMapperRevShareDetails = this.marketMapperRevShareDetails.bind(this);
    }
    QueryClientImpl.prototype.marketMapperRevenueShareParams = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryMarketMapperRevenueShareParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.revshare.Query", "MarketMapperRevenueShareParams", data);
        return promise.then(function (data) { return query_1.QueryMarketMapperRevenueShareParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.marketMapperRevShareDetails = function (request) {
        var data = query_1.QueryMarketMapperRevShareDetails.encode(request).finish();
        var promise = this.rpc.request("nemo_network.revshare.Query", "MarketMapperRevShareDetails", data);
        return promise.then(function (data) { return query_1.QueryMarketMapperRevShareDetailsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        marketMapperRevenueShareParams: function (request) {
            return queryService.marketMapperRevenueShareParams(request);
        },
        marketMapperRevShareDetails: function (request) {
            return queryService.marketMapperRevShareDetails(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
