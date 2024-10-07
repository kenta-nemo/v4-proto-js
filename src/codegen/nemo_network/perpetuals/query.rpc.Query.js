"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.perpetual = this.perpetual.bind(this);
        this.allPerpetuals = this.allPerpetuals.bind(this);
        this.allLiquidityTiers = this.allLiquidityTiers.bind(this);
        this.premiumVotes = this.premiumVotes.bind(this);
        this.premiumSamples = this.premiumSamples.bind(this);
        this.params = this.params.bind(this);
    }
    QueryClientImpl.prototype.perpetual = function (request) {
        var data = query_1.QueryPerpetualRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Query", "Perpetual", data);
        return promise.then(function (data) { return query_1.QueryPerpetualResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allPerpetuals = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllPerpetualsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Query", "AllPerpetuals", data);
        return promise.then(function (data) { return query_1.QueryAllPerpetualsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allLiquidityTiers = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllLiquidityTiersRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Query", "AllLiquidityTiers", data);
        return promise.then(function (data) { return query_1.QueryAllLiquidityTiersResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.premiumVotes = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryPremiumVotesRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Query", "PremiumVotes", data);
        return promise.then(function (data) { return query_1.QueryPremiumVotesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.premiumSamples = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryPremiumSamplesRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Query", "PremiumSamples", data);
        return promise.then(function (data) { return query_1.QueryPremiumSamplesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        perpetual: function (request) {
            return queryService.perpetual(request);
        },
        allPerpetuals: function (request) {
            return queryService.allPerpetuals(request);
        },
        allLiquidityTiers: function (request) {
            return queryService.allLiquidityTiers(request);
        },
        premiumVotes: function (request) {
            return queryService.premiumVotes(request);
        },
        premiumSamples: function (request) {
            return queryService.premiumSamples(request);
        },
        params: function (request) {
            return queryService.params(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
