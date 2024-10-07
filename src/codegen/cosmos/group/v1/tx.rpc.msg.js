"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.createGroup = this.createGroup.bind(this);
        this.updateGroupMembers = this.updateGroupMembers.bind(this);
        this.updateGroupAdmin = this.updateGroupAdmin.bind(this);
        this.updateGroupMetadata = this.updateGroupMetadata.bind(this);
        this.createGroupPolicy = this.createGroupPolicy.bind(this);
        this.createGroupWithPolicy = this.createGroupWithPolicy.bind(this);
        this.updateGroupPolicyAdmin = this.updateGroupPolicyAdmin.bind(this);
        this.updateGroupPolicyDecisionPolicy = this.updateGroupPolicyDecisionPolicy.bind(this);
        this.updateGroupPolicyMetadata = this.updateGroupPolicyMetadata.bind(this);
        this.submitProposal = this.submitProposal.bind(this);
        this.withdrawProposal = this.withdrawProposal.bind(this);
        this.vote = this.vote.bind(this);
        this.exec = this.exec.bind(this);
        this.leaveGroup = this.leaveGroup.bind(this);
    }
    MsgClientImpl.prototype.createGroup = function (request) {
        var data = tx_1.MsgCreateGroup.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroup", data);
        return promise.then(function (data) { return tx_1.MsgCreateGroupResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateGroupMembers = function (request) {
        var data = tx_1.MsgUpdateGroupMembers.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMembers", data);
        return promise.then(function (data) { return tx_1.MsgUpdateGroupMembersResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateGroupAdmin = function (request) {
        var data = tx_1.MsgUpdateGroupAdmin.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupAdmin", data);
        return promise.then(function (data) { return tx_1.MsgUpdateGroupAdminResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateGroupMetadata = function (request) {
        var data = tx_1.MsgUpdateGroupMetadata.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMetadata", data);
        return promise.then(function (data) { return tx_1.MsgUpdateGroupMetadataResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.createGroupPolicy = function (request) {
        var data = tx_1.MsgCreateGroupPolicy.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupPolicy", data);
        return promise.then(function (data) { return tx_1.MsgCreateGroupPolicyResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.createGroupWithPolicy = function (request) {
        var data = tx_1.MsgCreateGroupWithPolicy.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupWithPolicy", data);
        return promise.then(function (data) { return tx_1.MsgCreateGroupWithPolicyResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateGroupPolicyAdmin = function (request) {
        var data = tx_1.MsgUpdateGroupPolicyAdmin.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyAdmin", data);
        return promise.then(function (data) { return tx_1.MsgUpdateGroupPolicyAdminResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateGroupPolicyDecisionPolicy = function (request) {
        var data = tx_1.MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyDecisionPolicy", data);
        return promise.then(function (data) { return tx_1.MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateGroupPolicyMetadata = function (request) {
        var data = tx_1.MsgUpdateGroupPolicyMetadata.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyMetadata", data);
        return promise.then(function (data) { return tx_1.MsgUpdateGroupPolicyMetadataResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.submitProposal = function (request) {
        var data = tx_1.MsgSubmitProposal.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "SubmitProposal", data);
        return promise.then(function (data) { return tx_1.MsgSubmitProposalResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.withdrawProposal = function (request) {
        var data = tx_1.MsgWithdrawProposal.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "WithdrawProposal", data);
        return promise.then(function (data) { return tx_1.MsgWithdrawProposalResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.vote = function (request) {
        var data = tx_1.MsgVote.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "Vote", data);
        return promise.then(function (data) { return tx_1.MsgVoteResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.exec = function (request) {
        var data = tx_1.MsgExec.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "Exec", data);
        return promise.then(function (data) { return tx_1.MsgExecResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.leaveGroup = function (request) {
        var data = tx_1.MsgLeaveGroup.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "LeaveGroup", data);
        return promise.then(function (data) { return tx_1.MsgLeaveGroupResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
