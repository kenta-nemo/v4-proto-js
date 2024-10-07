"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.account = this.account.bind(this);
        this.accounts = this.accounts.bind(this);
        this.disabledList = this.disabledList.bind(this);
    }
    QueryClientImpl.prototype.account = function (request) {
        var data = query_1.QueryAccountRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.circuit.v1.Query", "Account", data);
        return promise.then(function (data) { return query_1.AccountResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.accounts = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAccountsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.circuit.v1.Query", "Accounts", data);
        return promise.then(function (data) { return query_1.AccountsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.disabledList = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryDisabledListRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.circuit.v1.Query", "DisabledList", data);
        return promise.then(function (data) { return query_1.DisabledListResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        account: function (request) {
            return queryService.account(request);
        },
        accounts: function (request) {
            return queryService.accounts(request);
        },
        disabledList: function (request) {
            return queryService.disabledList(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
