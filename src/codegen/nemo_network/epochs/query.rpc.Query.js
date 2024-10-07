"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.epochInfo = this.epochInfo.bind(this);
        this.epochInfoAll = this.epochInfoAll.bind(this);
    }
    QueryClientImpl.prototype.epochInfo = function (request) {
        var data = query_1.QueryGetEpochInfoRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.epochs.Query", "EpochInfo", data);
        return promise.then(function (data) { return query_1.QueryEpochInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.epochInfoAll = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllEpochInfoRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.epochs.Query", "EpochInfoAll", data);
        return promise.then(function (data) { return query_1.QueryEpochInfoAllResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        epochInfo: function (request) {
            return queryService.epochInfo(request);
        },
        epochInfoAll: function (request) {
            return queryService.epochInfoAll(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
