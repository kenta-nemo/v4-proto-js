"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var stargate_1 = require("@cosmjs/stargate");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
    }
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {};
};
exports.createRpcQueryExtension = createRpcQueryExtension;
