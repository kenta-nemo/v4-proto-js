"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.constitution = this.constitution.bind(this);
        this.proposal = this.proposal.bind(this);
        this.proposals = this.proposals.bind(this);
        this.vote = this.vote.bind(this);
        this.votes = this.votes.bind(this);
        this.params = this.params.bind(this);
        this.deposit = this.deposit.bind(this);
        this.deposits = this.deposits.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
    }
    QueryClientImpl.prototype.constitution = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryConstitutionRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Query", "Constitution", data);
        return promise.then(function (data) { return query_1.QueryConstitutionResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.proposal = function (request) {
        var data = query_1.QueryProposalRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Query", "Proposal", data);
        return promise.then(function (data) { return query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.proposals = function (request) {
        var data = query_1.QueryProposalsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Query", "Proposals", data);
        return promise.then(function (data) { return query_1.QueryProposalsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.vote = function (request) {
        var data = query_1.QueryVoteRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Query", "Vote", data);
        return promise.then(function (data) { return query_1.QueryVoteResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.votes = function (request) {
        var data = query_1.QueryVotesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Query", "Votes", data);
        return promise.then(function (data) { return query_1.QueryVotesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.params = function (request) {
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.deposit = function (request) {
        var data = query_1.QueryDepositRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Query", "Deposit", data);
        return promise.then(function (data) { return query_1.QueryDepositResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.deposits = function (request) {
        var data = query_1.QueryDepositsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Query", "Deposits", data);
        return promise.then(function (data) { return query_1.QueryDepositsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.tallyResult = function (request) {
        var data = query_1.QueryTallyResultRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Query", "TallyResult", data);
        return promise.then(function (data) { return query_1.QueryTallyResultResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        constitution: function (request) {
            return queryService.constitution(request);
        },
        proposal: function (request) {
            return queryService.proposal(request);
        },
        proposals: function (request) {
            return queryService.proposals(request);
        },
        vote: function (request) {
            return queryService.vote(request);
        },
        votes: function (request) {
            return queryService.votes(request);
        },
        params: function (request) {
            return queryService.params(request);
        },
        deposit: function (request) {
            return queryService.deposit(request);
        },
        deposits: function (request) {
            return queryService.deposits(request);
        },
        tallyResult: function (request) {
            return queryService.tallyResult(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
