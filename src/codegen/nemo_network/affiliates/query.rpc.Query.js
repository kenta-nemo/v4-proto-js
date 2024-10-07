"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.affiliateInfo = this.affiliateInfo.bind(this);
        this.referredBy = this.referredBy.bind(this);
        this.allAffiliateTiers = this.allAffiliateTiers.bind(this);
    }
    QueryClientImpl.prototype.affiliateInfo = function (request) {
        var data = query_1.AffiliateInfoRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.affiliates.Query", "AffiliateInfo", data);
        return promise.then(function (data) { return query_1.AffiliateInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.referredBy = function (request) {
        var data = query_1.ReferredByRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.affiliates.Query", "ReferredBy", data);
        return promise.then(function (data) { return query_1.ReferredByResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allAffiliateTiers = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.AllAffiliateTiersRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.affiliates.Query", "AllAffiliateTiers", data);
        return promise.then(function (data) { return query_1.AllAffiliateTiersResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        affiliateInfo: function (request) {
            return queryService.affiliateInfo(request);
        },
        referredBy: function (request) {
            return queryService.referredBy(request);
        },
        allAffiliateTiers: function (request) {
            return queryService.allAffiliateTiers(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
