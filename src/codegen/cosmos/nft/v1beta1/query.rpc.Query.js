"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.balance = this.balance.bind(this);
        this.owner = this.owner.bind(this);
        this.supply = this.supply.bind(this);
        this.nFTs = this.nFTs.bind(this);
        this.nFT = this.nFT.bind(this);
        this["class"] = this["class"].bind(this);
        this.classes = this.classes.bind(this);
    }
    QueryClientImpl.prototype.balance = function (request) {
        var data = query_1.QueryBalanceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
        return promise.then(function (data) { return query_1.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.owner = function (request) {
        var data = query_1.QueryOwnerRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
        return promise.then(function (data) { return query_1.QueryOwnerResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.supply = function (request) {
        var data = query_1.QuerySupplyRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
        return promise.then(function (data) { return query_1.QuerySupplyResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.nFTs = function (request) {
        var data = query_1.QueryNFTsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
        return promise.then(function (data) { return query_1.QueryNFTsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.nFT = function (request) {
        var data = query_1.QueryNFTRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
        return promise.then(function (data) { return query_1.QueryNFTResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype["class"] = function (request) {
        var data = query_1.QueryClassRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
        return promise.then(function (data) { return query_1.QueryClassResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.classes = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryClassesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
        return promise.then(function (data) { return query_1.QueryClassesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        balance: function (request) {
            return queryService.balance(request);
        },
        owner: function (request) {
            return queryService.owner(request);
        },
        supply: function (request) {
            return queryService.supply(request);
        },
        nFTs: function (request) {
            return queryService.nFTs(request);
        },
        nFT: function (request) {
            return queryService.nFT(request);
        },
        "class": function (request) {
            return queryService["class"](request);
        },
        classes: function (request) {
            return queryService.classes(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
