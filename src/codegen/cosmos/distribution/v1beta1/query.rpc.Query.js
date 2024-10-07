"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.validatorDistributionInfo = this.validatorDistributionInfo.bind(this);
        this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
        this.validatorCommission = this.validatorCommission.bind(this);
        this.validatorSlashes = this.validatorSlashes.bind(this);
        this.delegationRewards = this.delegationRewards.bind(this);
        this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
        this.delegatorValidators = this.delegatorValidators.bind(this);
        this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
        this.communityPool = this.communityPool.bind(this);
    }
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.validatorDistributionInfo = function (request) {
        var data = query_1.QueryValidatorDistributionInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorDistributionInfo", data);
        return promise.then(function (data) { return query_1.QueryValidatorDistributionInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.validatorOutstandingRewards = function (request) {
        var data = query_1.QueryValidatorOutstandingRewardsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
        return promise.then(function (data) { return query_1.QueryValidatorOutstandingRewardsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.validatorCommission = function (request) {
        var data = query_1.QueryValidatorCommissionRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
        return promise.then(function (data) { return query_1.QueryValidatorCommissionResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.validatorSlashes = function (request) {
        var data = query_1.QueryValidatorSlashesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
        return promise.then(function (data) { return query_1.QueryValidatorSlashesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.delegationRewards = function (request) {
        var data = query_1.QueryDelegationRewardsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
        return promise.then(function (data) { return query_1.QueryDelegationRewardsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.delegationTotalRewards = function (request) {
        var data = query_1.QueryDelegationTotalRewardsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
        return promise.then(function (data) { return query_1.QueryDelegationTotalRewardsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.delegatorValidators = function (request) {
        var data = query_1.QueryDelegatorValidatorsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
        return promise.then(function (data) { return query_1.QueryDelegatorValidatorsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.delegatorWithdrawAddress = function (request) {
        var data = query_1.QueryDelegatorWithdrawAddressRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
        return promise.then(function (data) { return query_1.QueryDelegatorWithdrawAddressResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.communityPool = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryCommunityPoolRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
        return promise.then(function (data) { return query_1.QueryCommunityPoolResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        params: function (request) {
            return queryService.params(request);
        },
        validatorDistributionInfo: function (request) {
            return queryService.validatorDistributionInfo(request);
        },
        validatorOutstandingRewards: function (request) {
            return queryService.validatorOutstandingRewards(request);
        },
        validatorCommission: function (request) {
            return queryService.validatorCommission(request);
        },
        validatorSlashes: function (request) {
            return queryService.validatorSlashes(request);
        },
        delegationRewards: function (request) {
            return queryService.delegationRewards(request);
        },
        delegationTotalRewards: function (request) {
            return queryService.delegationTotalRewards(request);
        },
        delegatorValidators: function (request) {
            return queryService.delegatorValidators(request);
        },
        delegatorWithdrawAddress: function (request) {
            return queryService.delegatorWithdrawAddress(request);
        },
        communityPool: function (request) {
            return queryService.communityPool(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
