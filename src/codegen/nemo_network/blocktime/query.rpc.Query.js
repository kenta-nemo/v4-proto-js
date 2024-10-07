"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.downtimeParams = this.downtimeParams.bind(this);
        this.previousBlockInfo = this.previousBlockInfo.bind(this);
        this.allDowntimeInfo = this.allDowntimeInfo.bind(this);
    }
    QueryClientImpl.prototype.downtimeParams = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryDowntimeParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.blocktime.Query", "DowntimeParams", data);
        return promise.then(function (data) { return query_1.QueryDowntimeParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.previousBlockInfo = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryPreviousBlockInfoRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.blocktime.Query", "PreviousBlockInfo", data);
        return promise.then(function (data) { return query_1.QueryPreviousBlockInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allDowntimeInfo = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryAllDowntimeInfoRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.blocktime.Query", "AllDowntimeInfo", data);
        return promise.then(function (data) { return query_1.QueryAllDowntimeInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        downtimeParams: function (request) {
            return queryService.downtimeParams(request);
        },
        previousBlockInfo: function (request) {
            return queryService.previousBlockInfo(request);
        },
        allDowntimeInfo: function (request) {
            return queryService.allDowntimeInfo(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
