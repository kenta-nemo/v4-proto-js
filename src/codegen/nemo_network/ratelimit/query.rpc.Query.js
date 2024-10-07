"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.listLimitParams = this.listLimitParams.bind(this);
        this.capacityByDenom = this.capacityByDenom.bind(this);
        this.allPendingSendPackets = this.allPendingSendPackets.bind(this);
    }
    QueryClientImpl.prototype.listLimitParams = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.ListLimitParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.ratelimit.Query", "ListLimitParams", data);
        return promise.then(function (data) { return query_1.ListLimitParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.capacityByDenom = function (request) {
        var data = query_1.QueryCapacityByDenomRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.ratelimit.Query", "CapacityByDenom", data);
        return promise.then(function (data) { return query_1.QueryCapacityByDenomResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allPendingSendPackets = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryAllPendingSendPacketsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.ratelimit.Query", "AllPendingSendPackets", data);
        return promise.then(function (data) { return query_1.QueryAllPendingSendPacketsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        listLimitParams: function (request) {
            return queryService.listLimitParams(request);
        },
        capacityByDenom: function (request) {
            return queryService.capacityByDenom(request);
        },
        allPendingSendPackets: function (request) {
            return queryService.allPendingSendPackets(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
