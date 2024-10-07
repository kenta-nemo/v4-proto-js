"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.accounts = this.accounts.bind(this);
        this.account = this.account.bind(this);
        this.accountAddressByID = this.accountAddressByID.bind(this);
        this.params = this.params.bind(this);
        this.moduleAccounts = this.moduleAccounts.bind(this);
        this.moduleAccountByName = this.moduleAccountByName.bind(this);
        this.bech32Prefix = this.bech32Prefix.bind(this);
        this.addressBytesToString = this.addressBytesToString.bind(this);
        this.addressStringToBytes = this.addressStringToBytes.bind(this);
        this.accountInfo = this.accountInfo.bind(this);
    }
    QueryClientImpl.prototype.accounts = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAccountsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
        return promise.then(function (data) { return query_1.QueryAccountsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.account = function (request) {
        var data = query_1.QueryAccountRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
        return promise.then(function (data) { return query_1.QueryAccountResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.accountAddressByID = function (request) {
        var data = query_1.QueryAccountAddressByIDRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
        return promise.then(function (data) { return query_1.QueryAccountAddressByIDResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.moduleAccounts = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryModuleAccountsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
        return promise.then(function (data) { return query_1.QueryModuleAccountsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.moduleAccountByName = function (request) {
        var data = query_1.QueryModuleAccountByNameRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
        return promise.then(function (data) { return query_1.QueryModuleAccountByNameResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.bech32Prefix = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.Bech32PrefixRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
        return promise.then(function (data) { return query_1.Bech32PrefixResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.addressBytesToString = function (request) {
        var data = query_1.AddressBytesToStringRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
        return promise.then(function (data) { return query_1.AddressBytesToStringResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.addressStringToBytes = function (request) {
        var data = query_1.AddressStringToBytesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
        return promise.then(function (data) { return query_1.AddressStringToBytesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.accountInfo = function (request) {
        var data = query_1.QueryAccountInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
        return promise.then(function (data) { return query_1.QueryAccountInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        accounts: function (request) {
            return queryService.accounts(request);
        },
        account: function (request) {
            return queryService.account(request);
        },
        accountAddressByID: function (request) {
            return queryService.accountAddressByID(request);
        },
        params: function (request) {
            return queryService.params(request);
        },
        moduleAccounts: function (request) {
            return queryService.moduleAccounts(request);
        },
        moduleAccountByName: function (request) {
            return queryService.moduleAccountByName(request);
        },
        bech32Prefix: function (request) {
            return queryService.bech32Prefix(request);
        },
        addressBytesToString: function (request) {
            return queryService.addressBytesToString(request);
        },
        addressStringToBytes: function (request) {
            return queryService.addressStringToBytes(request);
        },
        accountInfo: function (request) {
            return queryService.accountInfo(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
