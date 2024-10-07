"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.asset = this.asset.bind(this);
        this.allAssets = this.allAssets.bind(this);
    }
    QueryClientImpl.prototype.asset = function (request) {
        var data = query_1.QueryAssetRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.assets.Query", "Asset", data);
        return promise.then(function (data) { return query_1.QueryAssetResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allAssets = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllAssetsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.assets.Query", "AllAssets", data);
        return promise.then(function (data) { return query_1.QueryAllAssetsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        asset: function (request) {
            return queryService.asset(request);
        },
        allAssets: function (request) {
            return queryService.allAssets(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
