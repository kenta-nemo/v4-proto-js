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
        this.allBalances = this.allBalances.bind(this);
        this.spendableBalances = this.spendableBalances.bind(this);
        this.spendableBalanceByDenom = this.spendableBalanceByDenom.bind(this);
        this.totalSupply = this.totalSupply.bind(this);
        this.supplyOf = this.supplyOf.bind(this);
        this.params = this.params.bind(this);
        this.denomMetadata = this.denomMetadata.bind(this);
        this.denomMetadataByQueryString = this.denomMetadataByQueryString.bind(this);
        this.denomsMetadata = this.denomsMetadata.bind(this);
        this.denomOwners = this.denomOwners.bind(this);
        this.sendEnabled = this.sendEnabled.bind(this);
    }
    QueryClientImpl.prototype.balance = function (request) {
        var data = query_1.QueryBalanceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
        return promise.then(function (data) { return query_1.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allBalances = function (request) {
        var data = query_1.QueryAllBalancesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
        return promise.then(function (data) { return query_1.QueryAllBalancesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.spendableBalances = function (request) {
        var data = query_1.QuerySpendableBalancesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
        return promise.then(function (data) { return query_1.QuerySpendableBalancesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.spendableBalanceByDenom = function (request) {
        var data = query_1.QuerySpendableBalanceByDenomRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
        return promise.then(function (data) { return query_1.QuerySpendableBalanceByDenomResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.totalSupply = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryTotalSupplyRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
        return promise.then(function (data) { return query_1.QueryTotalSupplyResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.supplyOf = function (request) {
        var data = query_1.QuerySupplyOfRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
        return promise.then(function (data) { return query_1.QuerySupplyOfResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.denomMetadata = function (request) {
        var data = query_1.QueryDenomMetadataRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
        return promise.then(function (data) { return query_1.QueryDenomMetadataResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.denomMetadataByQueryString = function (request) {
        var data = query_1.QueryDenomMetadataByQueryStringRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadataByQueryString", data);
        return promise.then(function (data) { return query_1.QueryDenomMetadataByQueryStringResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.denomsMetadata = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryDenomsMetadataRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
        return promise.then(function (data) { return query_1.QueryDenomsMetadataResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.denomOwners = function (request) {
        var data = query_1.QueryDenomOwnersRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
        return promise.then(function (data) { return query_1.QueryDenomOwnersResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.sendEnabled = function (request) {
        var data = query_1.QuerySendEnabledRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
        return promise.then(function (data) { return query_1.QuerySendEnabledResponse.decode(new binary_1.BinaryReader(data)); });
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
        allBalances: function (request) {
            return queryService.allBalances(request);
        },
        spendableBalances: function (request) {
            return queryService.spendableBalances(request);
        },
        spendableBalanceByDenom: function (request) {
            return queryService.spendableBalanceByDenom(request);
        },
        totalSupply: function (request) {
            return queryService.totalSupply(request);
        },
        supplyOf: function (request) {
            return queryService.supplyOf(request);
        },
        params: function (request) {
            return queryService.params(request);
        },
        denomMetadata: function (request) {
            return queryService.denomMetadata(request);
        },
        denomMetadataByQueryString: function (request) {
            return queryService.denomMetadataByQueryString(request);
        },
        denomsMetadata: function (request) {
            return queryService.denomsMetadata(request);
        },
        denomOwners: function (request) {
            return queryService.denomOwners(request);
        },
        sendEnabled: function (request) {
            return queryService.sendEnabled(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
