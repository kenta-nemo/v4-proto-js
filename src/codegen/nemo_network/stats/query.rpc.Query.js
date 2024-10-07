"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.statsMetadata = this.statsMetadata.bind(this);
        this.globalStats = this.globalStats.bind(this);
        this.userStats = this.userStats.bind(this);
    }
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.stats.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.statsMetadata = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryStatsMetadataRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.stats.Query", "StatsMetadata", data);
        return promise.then(function (data) { return query_1.QueryStatsMetadataResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.globalStats = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryGlobalStatsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.stats.Query", "GlobalStats", data);
        return promise.then(function (data) { return query_1.QueryGlobalStatsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.userStats = function (request) {
        var data = query_1.QueryUserStatsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.stats.Query", "UserStats", data);
        return promise.then(function (data) { return query_1.QueryUserStatsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        params: function (request) {
            return queryService.params(request);
        },
        statsMetadata: function (request) {
            return queryService.statsMetadata(request);
        },
        globalStats: function (request) {
            return queryService.globalStats(request);
        },
        userStats: function (request) {
            return queryService.userStats(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
