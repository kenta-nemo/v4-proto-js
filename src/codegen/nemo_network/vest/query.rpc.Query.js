"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.vestEntry = this.vestEntry.bind(this);
    }
    QueryClientImpl.prototype.vestEntry = function (request) {
        var data = query_1.QueryVestEntryRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.vest.Query", "VestEntry", data);
        return promise.then(function (data) { return query_1.QueryVestEntryResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        vestEntry: function (request) {
            return queryService.vestEntry(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
