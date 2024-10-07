"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.marketsHardCap = this.marketsHardCap.bind(this);
        this.listingVaultDepositParams = this.listingVaultDepositParams.bind(this);
    }
    QueryClientImpl.prototype.marketsHardCap = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryMarketsHardCap.encode(request).finish();
        var promise = this.rpc.request("nemo_network.listing.Query", "MarketsHardCap", data);
        return promise.then(function (data) { return query_1.QueryMarketsHardCapResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.listingVaultDepositParams = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryListingVaultDepositParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.listing.Query", "ListingVaultDepositParams", data);
        return promise.then(function (data) { return query_1.QueryListingVaultDepositParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        marketsHardCap: function (request) {
            return queryService.marketsHardCap(request);
        },
        listingVaultDepositParams: function (request) {
            return queryService.listingVaultDepositParams(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
