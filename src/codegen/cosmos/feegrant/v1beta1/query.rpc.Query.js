"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.allowance = this.allowance.bind(this);
        this.allowances = this.allowances.bind(this);
        this.allowancesByGranter = this.allowancesByGranter.bind(this);
    }
    QueryClientImpl.prototype.allowance = function (request) {
        var data = query_1.QueryAllowanceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
        return promise.then(function (data) { return query_1.QueryAllowanceResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allowances = function (request) {
        var data = query_1.QueryAllowancesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
        return promise.then(function (data) { return query_1.QueryAllowancesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allowancesByGranter = function (request) {
        var data = query_1.QueryAllowancesByGranterRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
        return promise.then(function (data) { return query_1.QueryAllowancesByGranterResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        allowance: function (request) {
            return queryService.allowance(request);
        },
        allowances: function (request) {
            return queryService.allowances(request);
        },
        allowancesByGranter: function (request) {
            return queryService.allowancesByGranter(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
