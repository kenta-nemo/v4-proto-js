"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
var binary_1 = require("../../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc) {
        this.rpc = rpc;
        this.config = this.config.bind(this);
        this.status = this.status.bind(this);
    }
    ServiceClientImpl.prototype.config = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.ConfigRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
        return promise.then(function (data) { return query_1.ConfigResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.status = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.StatusRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Status", data);
        return promise.then(function (data) { return query_1.StatusResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new ServiceClientImpl(rpc);
    return {
        config: function (request) {
            return queryService.config(request);
        },
        status: function (request) {
            return queryService.status(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
