"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.get = this.get.bind(this);
        this.list = this.list.bind(this);
    }
    QueryClientImpl.prototype.get = function (request) {
        var data = query_1.GetRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "Get", data);
        return promise.then(function (data) { return query_1.GetResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.list = function (request) {
        var data = query_1.ListRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "List", data);
        return promise.then(function (data) { return query_1.ListResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        get: function (request) {
            return queryService.get(request);
        },
        list: function (request) {
            return queryService.list(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
