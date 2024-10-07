"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.perpetualFeeParams = this.perpetualFeeParams.bind(this);
        this.userFeeTier = this.userFeeTier.bind(this);
    }
    QueryClientImpl.prototype.perpetualFeeParams = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryPerpetualFeeParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.feetiers.Query", "PerpetualFeeParams", data);
        return promise.then(function (data) { return query_1.QueryPerpetualFeeParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.userFeeTier = function (request) {
        var data = query_1.QueryUserFeeTierRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.feetiers.Query", "UserFeeTier", data);
        return promise.then(function (data) { return query_1.QueryUserFeeTierResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        perpetualFeeParams: function (request) {
            return queryService.perpetualFeeParams(request);
        },
        userFeeTier: function (request) {
            return queryService.userFeeTier(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
