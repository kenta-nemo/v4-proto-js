"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
var binary_1 = require("../../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc) {
        this.rpc = rpc;
        this.getNodeInfo = this.getNodeInfo.bind(this);
        this.getSyncing = this.getSyncing.bind(this);
        this.getLatestBlock = this.getLatestBlock.bind(this);
        this.getBlockByHeight = this.getBlockByHeight.bind(this);
        this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
        this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
        this.aBCIQuery = this.aBCIQuery.bind(this);
    }
    ServiceClientImpl.prototype.getNodeInfo = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.GetNodeInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then(function (data) { return query_1.GetNodeInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.getSyncing = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.GetSyncingRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then(function (data) { return query_1.GetSyncingResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.getLatestBlock = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.GetLatestBlockRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then(function (data) { return query_1.GetLatestBlockResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.getBlockByHeight = function (request) {
        var data = query_1.GetBlockByHeightRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then(function (data) { return query_1.GetBlockByHeightResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.getLatestValidatorSet = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.GetLatestValidatorSetRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then(function (data) { return query_1.GetLatestValidatorSetResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.getValidatorSetByHeight = function (request) {
        var data = query_1.GetValidatorSetByHeightRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then(function (data) { return query_1.GetValidatorSetByHeightResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.aBCIQuery = function (request) {
        var data = query_1.ABCIQueryRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "ABCIQuery", data);
        return promise.then(function (data) { return query_1.ABCIQueryResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new ServiceClientImpl(rpc);
    return {
        getNodeInfo: function (request) {
            return queryService.getNodeInfo(request);
        },
        getSyncing: function (request) {
            return queryService.getSyncing(request);
        },
        getLatestBlock: function (request) {
            return queryService.getLatestBlock(request);
        },
        getBlockByHeight: function (request) {
            return queryService.getBlockByHeight(request);
        },
        getLatestValidatorSet: function (request) {
            return queryService.getLatestValidatorSet(request);
        },
        getValidatorSetByHeight: function (request) {
            return queryService.getValidatorSetByHeight(request);
        },
        aBCIQuery: function (request) {
            return queryService.aBCIQuery(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
