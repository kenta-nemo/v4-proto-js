"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.currentPlan = this.currentPlan.bind(this);
        this.appliedPlan = this.appliedPlan.bind(this);
        this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
        this.moduleVersions = this.moduleVersions.bind(this);
        this.authority = this.authority.bind(this);
    }
    QueryClientImpl.prototype.currentPlan = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryCurrentPlanRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
        return promise.then(function (data) { return query_1.QueryCurrentPlanResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.appliedPlan = function (request) {
        var data = query_1.QueryAppliedPlanRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
        return promise.then(function (data) { return query_1.QueryAppliedPlanResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.upgradedConsensusState = function (request) {
        var data = query_1.QueryUpgradedConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
        return promise.then(function (data) { return query_1.QueryUpgradedConsensusStateResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.moduleVersions = function (request) {
        var data = query_1.QueryModuleVersionsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
        return promise.then(function (data) { return query_1.QueryModuleVersionsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.authority = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryAuthorityRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
        return promise.then(function (data) { return query_1.QueryAuthorityResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        currentPlan: function (request) {
            return queryService.currentPlan(request);
        },
        appliedPlan: function (request) {
            return queryService.appliedPlan(request);
        },
        upgradedConsensusState: function (request) {
            return queryService.upgradedConsensusState(request);
        },
        moduleVersions: function (request) {
            return queryService.moduleVersions(request);
        },
        authority: function (request) {
            return queryService.authority(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
