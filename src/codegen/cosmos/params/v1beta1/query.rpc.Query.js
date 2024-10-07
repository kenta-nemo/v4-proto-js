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
        this.subspaces = this.subspaces.bind(this);
    }
    QueryClientImpl.prototype.params = function (request) {
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.subspaces = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QuerySubspacesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.params.v1beta1.Query", "Subspaces", data);
        return promise.then(function (data) { return query_1.QuerySubspacesResponse.decode(new binary_1.BinaryReader(data)); });
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
        subspaces: function (request) {
            return queryService.subspaces(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
