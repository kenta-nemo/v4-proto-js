"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.inflation = this.inflation.bind(this);
        this.annualProvisions = this.annualProvisions.bind(this);
    }
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.inflation = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryInflationRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
        return promise.then(function (data) { return query_1.QueryInflationResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.annualProvisions = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryAnnualProvisionsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
        return promise.then(function (data) { return query_1.QueryAnnualProvisionsResponse.decode(new binary_1.BinaryReader(data)); });
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
        inflation: function (request) {
            return queryService.inflation(request);
        },
        annualProvisions: function (request) {
            return queryService.annualProvisions(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
