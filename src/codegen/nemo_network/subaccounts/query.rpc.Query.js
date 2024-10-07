"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.subaccount = this.subaccount.bind(this);
        this.subaccountAll = this.subaccountAll.bind(this);
        this.getWithdrawalAndTransfersBlockedInfo = this.getWithdrawalAndTransfersBlockedInfo.bind(this);
        this.collateralPoolAddress = this.collateralPoolAddress.bind(this);
    }
    QueryClientImpl.prototype.subaccount = function (request) {
        var data = query_1.QueryGetSubaccountRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.subaccounts.Query", "Subaccount", data);
        return promise.then(function (data) { return query_1.QuerySubaccountResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.subaccountAll = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllSubaccountRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.subaccounts.Query", "SubaccountAll", data);
        return promise.then(function (data) { return query_1.QuerySubaccountAllResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.getWithdrawalAndTransfersBlockedInfo = function (request) {
        var data = query_1.QueryGetWithdrawalAndTransfersBlockedInfoRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.subaccounts.Query", "GetWithdrawalAndTransfersBlockedInfo", data);
        return promise.then(function (data) { return query_1.QueryGetWithdrawalAndTransfersBlockedInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.collateralPoolAddress = function (request) {
        var data = query_1.QueryCollateralPoolAddressRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.subaccounts.Query", "CollateralPoolAddress", data);
        return promise.then(function (data) { return query_1.QueryCollateralPoolAddressResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        subaccount: function (request) {
            return queryService.subaccount(request);
        },
        subaccountAll: function (request) {
            return queryService.subaccountAll(request);
        },
        getWithdrawalAndTransfersBlockedInfo: function (request) {
            return queryService.getWithdrawalAndTransfersBlockedInfo(request);
        },
        collateralPoolAddress: function (request) {
            return queryService.collateralPoolAddress(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
