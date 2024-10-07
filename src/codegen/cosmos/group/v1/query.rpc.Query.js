"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.groupInfo = this.groupInfo.bind(this);
        this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
        this.groupMembers = this.groupMembers.bind(this);
        this.groupsByAdmin = this.groupsByAdmin.bind(this);
        this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
        this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
        this.proposal = this.proposal.bind(this);
        this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
        this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
        this.votesByProposal = this.votesByProposal.bind(this);
        this.votesByVoter = this.votesByVoter.bind(this);
        this.groupsByMember = this.groupsByMember.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
        this.groups = this.groups.bind(this);
    }
    QueryClientImpl.prototype.groupInfo = function (request) {
        var data = query_1.QueryGroupInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
        return promise.then(function (data) { return query_1.QueryGroupInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.groupPolicyInfo = function (request) {
        var data = query_1.QueryGroupPolicyInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
        return promise.then(function (data) { return query_1.QueryGroupPolicyInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.groupMembers = function (request) {
        var data = query_1.QueryGroupMembersRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
        return promise.then(function (data) { return query_1.QueryGroupMembersResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.groupsByAdmin = function (request) {
        var data = query_1.QueryGroupsByAdminRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
        return promise.then(function (data) { return query_1.QueryGroupsByAdminResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.groupPoliciesByGroup = function (request) {
        var data = query_1.QueryGroupPoliciesByGroupRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
        return promise.then(function (data) { return query_1.QueryGroupPoliciesByGroupResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.groupPoliciesByAdmin = function (request) {
        var data = query_1.QueryGroupPoliciesByAdminRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
        return promise.then(function (data) { return query_1.QueryGroupPoliciesByAdminResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.proposal = function (request) {
        var data = query_1.QueryProposalRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
        return promise.then(function (data) { return query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.proposalsByGroupPolicy = function (request) {
        var data = query_1.QueryProposalsByGroupPolicyRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
        return promise.then(function (data) { return query_1.QueryProposalsByGroupPolicyResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.voteByProposalVoter = function (request) {
        var data = query_1.QueryVoteByProposalVoterRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
        return promise.then(function (data) { return query_1.QueryVoteByProposalVoterResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.votesByProposal = function (request) {
        var data = query_1.QueryVotesByProposalRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
        return promise.then(function (data) { return query_1.QueryVotesByProposalResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.votesByVoter = function (request) {
        var data = query_1.QueryVotesByVoterRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
        return promise.then(function (data) { return query_1.QueryVotesByVoterResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.groupsByMember = function (request) {
        var data = query_1.QueryGroupsByMemberRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
        return promise.then(function (data) { return query_1.QueryGroupsByMemberResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.tallyResult = function (request) {
        var data = query_1.QueryTallyResultRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
        return promise.then(function (data) { return query_1.QueryTallyResultResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.groups = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryGroupsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Query", "Groups", data);
        return promise.then(function (data) { return query_1.QueryGroupsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        groupInfo: function (request) {
            return queryService.groupInfo(request);
        },
        groupPolicyInfo: function (request) {
            return queryService.groupPolicyInfo(request);
        },
        groupMembers: function (request) {
            return queryService.groupMembers(request);
        },
        groupsByAdmin: function (request) {
            return queryService.groupsByAdmin(request);
        },
        groupPoliciesByGroup: function (request) {
            return queryService.groupPoliciesByGroup(request);
        },
        groupPoliciesByAdmin: function (request) {
            return queryService.groupPoliciesByAdmin(request);
        },
        proposal: function (request) {
            return queryService.proposal(request);
        },
        proposalsByGroupPolicy: function (request) {
            return queryService.proposalsByGroupPolicy(request);
        },
        voteByProposalVoter: function (request) {
            return queryService.voteByProposalVoter(request);
        },
        votesByProposal: function (request) {
            return queryService.votesByProposal(request);
        },
        votesByVoter: function (request) {
            return queryService.votesByVoter(request);
        },
        groupsByMember: function (request) {
            return queryService.groupsByMember(request);
        },
        tallyResult: function (request) {
            return queryService.tallyResult(request);
        },
        groups: function (request) {
            return queryService.groups(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
