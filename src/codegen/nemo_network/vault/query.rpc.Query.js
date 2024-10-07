"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.vault = this.vault.bind(this);
        this.allVaults = this.allVaults.bind(this);
        this.megavaultTotalShares = this.megavaultTotalShares.bind(this);
        this.megavaultOwnerShares = this.megavaultOwnerShares.bind(this);
    }
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vault.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.vault = function (request) {
        var data = query_1.QueryVaultRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vault.Query", "Vault", data);
        return promise.then(function (data) { return query_1.QueryVaultResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allVaults = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllVaultsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vault.Query", "AllVaults", data);
        return promise.then(function (data) { return query_1.QueryAllVaultsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.megavaultTotalShares = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryMegavaultTotalSharesRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vault.Query", "MegavaultTotalShares", data);
        return promise.then(function (data) { return query_1.QueryMegavaultTotalSharesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.megavaultOwnerShares = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryMegavaultOwnerSharesRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vault.Query", "MegavaultOwnerShares", data);
        return promise.then(function (data) { return query_1.QueryMegavaultOwnerSharesResponse.decode(new binary_1.BinaryReader(data)); });
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
        vault: function (request) {
            return queryService.vault(request);
        },
        allVaults: function (request) {
            return queryService.allVaults(request);
        },
        megavaultTotalShares: function (request) {
            return queryService.megavaultTotalShares(request);
        },
        megavaultOwnerShares: function (request) {
            return queryService.megavaultOwnerShares(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
