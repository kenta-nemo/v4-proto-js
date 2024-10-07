"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.submitProposal = this.submitProposal.bind(this);
        this.vote = this.vote.bind(this);
        this.voteWeighted = this.voteWeighted.bind(this);
        this.deposit = this.deposit.bind(this);
    }
    MsgClientImpl.prototype.submitProposal = function (request) {
        var data = tx_1.MsgSubmitProposal.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", data);
        return promise.then(function (data) { return tx_1.MsgSubmitProposalResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.vote = function (request) {
        var data = tx_1.MsgVote.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", data);
        return promise.then(function (data) { return tx_1.MsgVoteResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.voteWeighted = function (request) {
        var data = tx_1.MsgVoteWeighted.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "VoteWeighted", data);
        return promise.then(function (data) { return tx_1.MsgVoteWeightedResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.deposit = function (request) {
        var data = tx_1.MsgDeposit.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", data);
        return promise.then(function (data) { return tx_1.MsgDepositResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
