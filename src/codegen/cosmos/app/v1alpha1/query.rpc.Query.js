"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.config = this.config.bind(this);
    }
    QueryClientImpl.prototype.config = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryConfigRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
        return promise.then(function (data) { return query_1.QueryConfigResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        config: function (request) {
            return queryService.config(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
