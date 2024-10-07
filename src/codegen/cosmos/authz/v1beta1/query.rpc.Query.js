"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.grants = this.grants.bind(this);
        this.granterGrants = this.granterGrants.bind(this);
        this.granteeGrants = this.granteeGrants.bind(this);
    }
    QueryClientImpl.prototype.grants = function (request) {
        var data = query_1.QueryGrantsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
        return promise.then(function (data) { return query_1.QueryGrantsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.granterGrants = function (request) {
        var data = query_1.QueryGranterGrantsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
        return promise.then(function (data) { return query_1.QueryGranterGrantsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.granteeGrants = function (request) {
        var data = query_1.QueryGranteeGrantsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
        return promise.then(function (data) { return query_1.QueryGranteeGrantsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        grants: function (request) {
            return queryService.grants(request);
        },
        granterGrants: function (request) {
            return queryService.granterGrants(request);
        },
        granteeGrants: function (request) {
            return queryService.granteeGrants(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
