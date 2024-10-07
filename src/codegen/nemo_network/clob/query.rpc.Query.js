"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.clobPair = this.clobPair.bind(this);
        this.clobPairAll = this.clobPairAll.bind(this);
        this.mevNodeToNodeCalculation = this.mevNodeToNodeCalculation.bind(this);
        this.equityTierLimitConfiguration = this.equityTierLimitConfiguration.bind(this);
        this.blockRateLimitConfiguration = this.blockRateLimitConfiguration.bind(this);
        this.liquidationsConfiguration = this.liquidationsConfiguration.bind(this);
        this.statefulOrder = this.statefulOrder.bind(this);
        this.streamOrderbookUpdates = this.streamOrderbookUpdates.bind(this);
    }
    QueryClientImpl.prototype.clobPair = function (request) {
        var data = query_1.QueryGetClobPairRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Query", "ClobPair", data);
        return promise.then(function (data) { return query_1.QueryClobPairResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.clobPairAll = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllClobPairRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Query", "ClobPairAll", data);
        return promise.then(function (data) { return query_1.QueryClobPairAllResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.mevNodeToNodeCalculation = function (request) {
        var data = query_1.MevNodeToNodeCalculationRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Query", "MevNodeToNodeCalculation", data);
        return promise.then(function (data) { return query_1.MevNodeToNodeCalculationResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.equityTierLimitConfiguration = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryEquityTierLimitConfigurationRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Query", "EquityTierLimitConfiguration", data);
        return promise.then(function (data) { return query_1.QueryEquityTierLimitConfigurationResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.blockRateLimitConfiguration = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryBlockRateLimitConfigurationRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Query", "BlockRateLimitConfiguration", data);
        return promise.then(function (data) { return query_1.QueryBlockRateLimitConfigurationResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.liquidationsConfiguration = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryLiquidationsConfigurationRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Query", "LiquidationsConfiguration", data);
        return promise.then(function (data) { return query_1.QueryLiquidationsConfigurationResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.statefulOrder = function (request) {
        var data = query_1.QueryStatefulOrderRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Query", "StatefulOrder", data);
        return promise.then(function (data) { return query_1.QueryStatefulOrderResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.streamOrderbookUpdates = function (request) {
        var data = query_1.StreamOrderbookUpdatesRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Query", "StreamOrderbookUpdates", data);
        return promise.then(function (data) { return query_1.StreamOrderbookUpdatesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        clobPair: function (request) {
            return queryService.clobPair(request);
        },
        clobPairAll: function (request) {
            return queryService.clobPairAll(request);
        },
        mevNodeToNodeCalculation: function (request) {
            return queryService.mevNodeToNodeCalculation(request);
        },
        equityTierLimitConfiguration: function (request) {
            return queryService.equityTierLimitConfiguration(request);
        },
        blockRateLimitConfiguration: function (request) {
            return queryService.blockRateLimitConfiguration(request);
        },
        liquidationsConfiguration: function (request) {
            return queryService.liquidationsConfiguration(request);
        },
        statefulOrder: function (request) {
            return queryService.statefulOrder(request);
        },
        streamOrderbookUpdates: function (request) {
            return queryService.streamOrderbookUpdates(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
