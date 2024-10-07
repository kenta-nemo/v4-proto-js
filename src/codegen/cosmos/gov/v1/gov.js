"use strict";
exports.__esModule = true;
exports.Params = exports.TallyParams = exports.VotingParams = exports.DepositParams = exports.Vote = exports.TallyResult = exports.Proposal = exports.Deposit = exports.WeightedVoteOption = exports.proposalStatusToJSON = exports.proposalStatusFromJSON = exports.ProposalStatusAmino = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.voteOptionToJSON = exports.voteOptionFromJSON = exports.VoteOptionAmino = exports.VoteOptionSDKType = exports.VoteOption = void 0;
var coin_1 = require("../../base/v1beta1/coin");
var any_1 = require("../../../google/protobuf/any");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var duration_1 = require("../../../google/protobuf/duration");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
/** VoteOption enumerates the valid vote options for a given governance proposal. */
var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption = exports.VoteOption || (exports.VoteOption = {}));
exports.VoteOptionSDKType = VoteOption;
exports.VoteOptionAmino = VoteOption;
function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
exports.voteOptionFromJSON = voteOptionFromJSON;
function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.voteOptionToJSON = voteOptionToJSON;
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {}));
exports.ProposalStatusSDKType = ProposalStatus;
exports.ProposalStatusAmino = ProposalStatus;
function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
        case 2:
        case "PROPOSAL_STATUS_VOTING_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
        case 3:
        case "PROPOSAL_STATUS_PASSED":
            return ProposalStatus.PROPOSAL_STATUS_PASSED;
        case 4:
        case "PROPOSAL_STATUS_REJECTED":
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 5:
        case "PROPOSAL_STATUS_FAILED":
            return ProposalStatus.PROPOSAL_STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
exports.proposalStatusFromJSON = proposalStatusFromJSON;
function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
            return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
            return "PROPOSAL_STATUS_VOTING_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_PASSED:
            return "PROPOSAL_STATUS_PASSED";
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return "PROPOSAL_STATUS_REJECTED";
        case ProposalStatus.PROPOSAL_STATUS_FAILED:
            return "PROPOSAL_STATUS_FAILED";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalStatusToJSON = proposalStatusToJSON;
function createBaseWeightedVoteOption() {
    return {
        option: 0,
        weight: ""
    };
}
exports.WeightedVoteOption = {
    typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWeightedVoteOption();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWeightedVoteOption();
        message.option = (_a = object.option) !== null && _a !== void 0 ? _a : 0;
        message.weight = (_b = object.weight) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseWeightedVoteOption();
        if (object.option !== undefined && object.option !== null) {
            message.option = object.option;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.option = message.option === 0 ? undefined : message.option;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.WeightedVoteOption.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/WeightedVoteOption",
            value: exports.WeightedVoteOption.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.WeightedVoteOption.decode(message.value);
    },
    toProto: function (message) {
        return exports.WeightedVoteOption.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
            value: exports.WeightedVoteOption.encode(message).finish()
        };
    }
};
function createBaseDeposit() {
    return {
        proposalId: BigInt(0),
        depositor: "",
        amount: []
    };
}
exports.Deposit = {
    typeUrl: "/cosmos.gov.v1.Deposit",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeposit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeposit();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.amount = ((_b = object.amount) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseDeposit();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? ((_a = message.proposalId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.depositor = message.depositor === "" ? undefined : message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Deposit.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/Deposit",
            value: exports.Deposit.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Deposit.decode(message.value);
    },
    toProto: function (message) {
        return exports.Deposit.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.Deposit",
            value: exports.Deposit.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        id: BigInt(0),
        messages: [],
        status: 0,
        finalTallyResult: undefined,
        submitTime: undefined,
        depositEndTime: undefined,
        totalDeposit: [],
        votingStartTime: undefined,
        votingEndTime: undefined,
        metadata: "",
        title: "",
        summary: "",
        proposer: "",
        expedited: false,
        failedReason: ""
    };
}
exports.Proposal = {
    typeUrl: "/cosmos.gov.v1.Proposal",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.finalTallyResult !== undefined) {
            exports.TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
        }
        if (message.submitTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.depositEndTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.depositEndTime), writer.uint32(50).fork()).ldelim();
        }
        for (var _b = 0, _c = message.totalDeposit; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.votingStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingStartTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.votingEndTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingEndTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(82).string(message.metadata);
        }
        if (message.title !== "") {
            writer.uint32(90).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(98).string(message.summary);
        }
        if (message.proposer !== "") {
            writer.uint32(106).string(message.proposer);
        }
        if (message.expedited === true) {
            writer.uint32(112).bool(message.expedited);
        }
        if (message.failedReason !== "") {
            writer.uint32(122).string(message.failedReason);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.finalTallyResult = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.depositEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.totalDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votingStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.votingEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.metadata = reader.string();
                    break;
                case 11:
                    message.title = reader.string();
                    break;
                case 12:
                    message.summary = reader.string();
                    break;
                case 13:
                    message.proposer = reader.string();
                    break;
                case 14:
                    message.expedited = reader.bool();
                    break;
                case 15:
                    message.failedReason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var message = createBaseProposal();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? exports.TallyResult.fromPartial(object.finalTallyResult) : undefined;
        message.submitTime = (_c = object.submitTime) !== null && _c !== void 0 ? _c : undefined;
        message.depositEndTime = (_d = object.depositEndTime) !== null && _d !== void 0 ? _d : undefined;
        message.totalDeposit = ((_e = object.totalDeposit) === null || _e === void 0 ? void 0 : _e.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.votingStartTime = (_f = object.votingStartTime) !== null && _f !== void 0 ? _f : undefined;
        message.votingEndTime = (_g = object.votingEndTime) !== null && _g !== void 0 ? _g : undefined;
        message.metadata = (_h = object.metadata) !== null && _h !== void 0 ? _h : "";
        message.title = (_j = object.title) !== null && _j !== void 0 ? _j : "";
        message.summary = (_k = object.summary) !== null && _k !== void 0 ? _k : "";
        message.proposer = (_l = object.proposer) !== null && _l !== void 0 ? _l : "";
        message.expedited = (_m = object.expedited) !== null && _m !== void 0 ? _m : false;
        message.failedReason = (_o = object.failedReason) !== null && _o !== void 0 ? _o : "";
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseProposal();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromAmino(e); })) || [];
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
            message.finalTallyResult = exports.TallyResult.fromAmino(object.final_tally_result);
        }
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.submit_time));
        }
        if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
            message.depositEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.deposit_end_time));
        }
        message.totalDeposit = ((_b = object.total_deposit) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
            message.votingStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_start_time));
        }
        if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
            message.votingEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_end_time));
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.summary !== undefined && object.summary !== null) {
            message.summary = object.summary;
        }
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = object.proposer;
        }
        if (object.expedited !== undefined && object.expedited !== null) {
            message.expedited = object.expedited;
        }
        if (object.failed_reason !== undefined && object.failed_reason !== null) {
            message.failedReason = object.failed_reason;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.id = message.id !== BigInt(0) ? ((_a = message.id) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        if (message.messages) {
            obj.messages = message.messages.map(function (e) { return e ? any_1.Any.toAmino(e) : undefined; });
        }
        else {
            obj.messages = message.messages;
        }
        obj.status = message.status === 0 ? undefined : message.status;
        obj.final_tally_result = message.finalTallyResult ? exports.TallyResult.toAmino(message.finalTallyResult) : undefined;
        obj.submit_time = message.submitTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.submitTime)) : undefined;
        obj.deposit_end_time = message.depositEndTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.depositEndTime)) : undefined;
        if (message.totalDeposit) {
            obj.total_deposit = message.totalDeposit.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.total_deposit = message.totalDeposit;
        }
        obj.voting_start_time = message.votingStartTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.votingStartTime)) : undefined;
        obj.voting_end_time = message.votingEndTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.votingEndTime)) : undefined;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.title = message.title === "" ? undefined : message.title;
        obj.summary = message.summary === "" ? undefined : message.summary;
        obj.proposer = message.proposer === "" ? undefined : message.proposer;
        obj.expedited = message.expedited === false ? undefined : message.expedited;
        obj.failed_reason = message.failedReason === "" ? undefined : message.failedReason;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Proposal.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/Proposal",
            value: exports.Proposal.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Proposal.decode(message.value);
    },
    toProto: function (message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
function createBaseTallyResult() {
    return {
        yesCount: "",
        abstainCount: "",
        noCount: "",
        noWithVetoCount: ""
    };
}
exports.TallyResult = {
    typeUrl: "/cosmos.gov.v1.TallyResult",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.yesCount !== "") {
            writer.uint32(10).string(message.yesCount);
        }
        if (message.abstainCount !== "") {
            writer.uint32(18).string(message.abstainCount);
        }
        if (message.noCount !== "") {
            writer.uint32(26).string(message.noCount);
        }
        if (message.noWithVetoCount !== "") {
            writer.uint32(34).string(message.noWithVetoCount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTallyResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yesCount = reader.string();
                    break;
                case 2:
                    message.abstainCount = reader.string();
                    break;
                case 3:
                    message.noCount = reader.string();
                    break;
                case 4:
                    message.noWithVetoCount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTallyResult();
        message.yesCount = (_a = object.yesCount) !== null && _a !== void 0 ? _a : "";
        message.abstainCount = (_b = object.abstainCount) !== null && _b !== void 0 ? _b : "";
        message.noCount = (_c = object.noCount) !== null && _c !== void 0 ? _c : "";
        message.noWithVetoCount = (_d = object.noWithVetoCount) !== null && _d !== void 0 ? _d : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseTallyResult();
        if (object.yes_count !== undefined && object.yes_count !== null) {
            message.yesCount = object.yes_count;
        }
        if (object.abstain_count !== undefined && object.abstain_count !== null) {
            message.abstainCount = object.abstain_count;
        }
        if (object.no_count !== undefined && object.no_count !== null) {
            message.noCount = object.no_count;
        }
        if (object.no_with_veto_count !== undefined && object.no_with_veto_count !== null) {
            message.noWithVetoCount = object.no_with_veto_count;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.yes_count = message.yesCount === "" ? undefined : message.yesCount;
        obj.abstain_count = message.abstainCount === "" ? undefined : message.abstainCount;
        obj.no_count = message.noCount === "" ? undefined : message.noCount;
        obj.no_with_veto_count = message.noWithVetoCount === "" ? undefined : message.noWithVetoCount;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TallyResult.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/TallyResult",
            value: exports.TallyResult.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.TallyResult.decode(message.value);
    },
    toProto: function (message) {
        return exports.TallyResult.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.TallyResult",
            value: exports.TallyResult.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        options: [],
        metadata: ""
    };
}
exports.Vote = {
    typeUrl: "/cosmos.gov.v1.Vote",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (var _i = 0, _a = message.options; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 4:
                    message.options.push(exports.WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = (_a = object.voter) !== null && _a !== void 0 ? _a : "";
        message.options = ((_b = object.options) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.WeightedVoteOption.fromPartial(e); })) || [];
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        message.options = ((_a = object.options) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.WeightedVoteOption.fromAmino(e); })) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? ((_a = message.proposalId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.voter = message.voter === "" ? undefined : message.voter;
        if (message.options) {
            obj.options = message.options.map(function (e) { return e ? exports.WeightedVoteOption.toAmino(e) : undefined; });
        }
        else {
            obj.options = message.options;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Vote.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/Vote",
            value: exports.Vote.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Vote.decode(message.value);
    },
    toProto: function (message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
function createBaseDepositParams() {
    return {
        minDeposit: [],
        maxDepositPeriod: undefined
    };
}
exports.DepositParams = {
    typeUrl: "/cosmos.gov.v1.DepositParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.minDeposit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxDepositPeriod !== undefined) {
            duration_1.Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDepositParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxDepositPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDepositParams();
        message.minDeposit = ((_a = object.minDeposit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? duration_1.Duration.fromPartial(object.maxDepositPeriod) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseDepositParams();
        message.minDeposit = ((_a = object.min_deposit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
            message.maxDepositPeriod = duration_1.Duration.fromAmino(object.max_deposit_period);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.minDeposit) {
            obj.min_deposit = message.minDeposit.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.min_deposit = message.minDeposit;
        }
        obj.max_deposit_period = message.maxDepositPeriod ? duration_1.Duration.toAmino(message.maxDepositPeriod) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DepositParams.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/DepositParams",
            value: exports.DepositParams.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.DepositParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.DepositParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.DepositParams",
            value: exports.DepositParams.encode(message).finish()
        };
    }
};
function createBaseVotingParams() {
    return {
        votingPeriod: undefined
    };
}
exports.VotingParams = {
    typeUrl: "/cosmos.gov.v1.VotingParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.votingPeriod !== undefined) {
            duration_1.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVotingParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseVotingParams();
        message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? duration_1.Duration.fromPartial(object.votingPeriod) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseVotingParams();
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.votingPeriod = duration_1.Duration.fromAmino(object.voting_period);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.voting_period = message.votingPeriod ? duration_1.Duration.toAmino(message.votingPeriod) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.VotingParams.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/VotingParams",
            value: exports.VotingParams.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.VotingParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.VotingParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.VotingParams",
            value: exports.VotingParams.encode(message).finish()
        };
    }
};
function createBaseTallyParams() {
    return {
        quorum: "",
        threshold: "",
        vetoThreshold: ""
    };
}
exports.TallyParams = {
    typeUrl: "/cosmos.gov.v1.TallyParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.quorum !== "") {
            writer.uint32(10).string(message.quorum);
        }
        if (message.threshold !== "") {
            writer.uint32(18).string(message.threshold);
        }
        if (message.vetoThreshold !== "") {
            writer.uint32(26).string(message.vetoThreshold);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTallyParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.string();
                    break;
                case 2:
                    message.threshold = reader.string();
                    break;
                case 3:
                    message.vetoThreshold = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseTallyParams();
        message.quorum = (_a = object.quorum) !== null && _a !== void 0 ? _a : "";
        message.threshold = (_b = object.threshold) !== null && _b !== void 0 ? _b : "";
        message.vetoThreshold = (_c = object.vetoThreshold) !== null && _c !== void 0 ? _c : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseTallyParams();
        if (object.quorum !== undefined && object.quorum !== null) {
            message.quorum = object.quorum;
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
            message.vetoThreshold = object.veto_threshold;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.quorum = message.quorum === "" ? undefined : message.quorum;
        obj.threshold = message.threshold === "" ? undefined : message.threshold;
        obj.veto_threshold = message.vetoThreshold === "" ? undefined : message.vetoThreshold;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TallyParams.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/TallyParams",
            value: exports.TallyParams.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.TallyParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.TallyParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.TallyParams",
            value: exports.TallyParams.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        minDeposit: [],
        maxDepositPeriod: undefined,
        votingPeriod: undefined,
        quorum: "",
        threshold: "",
        vetoThreshold: "",
        minInitialDepositRatio: "",
        proposalCancelRatio: "",
        proposalCancelDest: "",
        expeditedVotingPeriod: undefined,
        expeditedThreshold: "",
        expeditedMinDeposit: [],
        burnVoteQuorum: false,
        burnProposalDepositPrevote: false,
        burnVoteVeto: false,
        minDepositRatio: ""
    };
}
exports.Params = {
    typeUrl: "/cosmos.gov.v1.Params",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.minDeposit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxDepositPeriod !== undefined) {
            duration_1.Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPeriod !== undefined) {
            duration_1.Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
        }
        if (message.quorum !== "") {
            writer.uint32(34).string(message.quorum);
        }
        if (message.threshold !== "") {
            writer.uint32(42).string(message.threshold);
        }
        if (message.vetoThreshold !== "") {
            writer.uint32(50).string(message.vetoThreshold);
        }
        if (message.minInitialDepositRatio !== "") {
            writer.uint32(58).string(message.minInitialDepositRatio);
        }
        if (message.proposalCancelRatio !== "") {
            writer.uint32(66).string(message.proposalCancelRatio);
        }
        if (message.proposalCancelDest !== "") {
            writer.uint32(74).string(message.proposalCancelDest);
        }
        if (message.expeditedVotingPeriod !== undefined) {
            duration_1.Duration.encode(message.expeditedVotingPeriod, writer.uint32(82).fork()).ldelim();
        }
        if (message.expeditedThreshold !== "") {
            writer.uint32(90).string(message.expeditedThreshold);
        }
        for (var _b = 0, _c = message.expeditedMinDeposit; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.burnVoteQuorum === true) {
            writer.uint32(104).bool(message.burnVoteQuorum);
        }
        if (message.burnProposalDepositPrevote === true) {
            writer.uint32(112).bool(message.burnProposalDepositPrevote);
        }
        if (message.burnVoteVeto === true) {
            writer.uint32(120).bool(message.burnVoteVeto);
        }
        if (message.minDepositRatio !== "") {
            writer.uint32(130).string(message.minDepositRatio);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxDepositPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.votingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.quorum = reader.string();
                    break;
                case 5:
                    message.threshold = reader.string();
                    break;
                case 6:
                    message.vetoThreshold = reader.string();
                    break;
                case 7:
                    message.minInitialDepositRatio = reader.string();
                    break;
                case 8:
                    message.proposalCancelRatio = reader.string();
                    break;
                case 9:
                    message.proposalCancelDest = reader.string();
                    break;
                case 10:
                    message.expeditedVotingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.expeditedThreshold = reader.string();
                    break;
                case 12:
                    message.expeditedMinDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.burnVoteQuorum = reader.bool();
                    break;
                case 14:
                    message.burnProposalDepositPrevote = reader.bool();
                    break;
                case 15:
                    message.burnVoteVeto = reader.bool();
                    break;
                case 16:
                    message.minDepositRatio = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var message = createBaseParams();
        message.minDeposit = ((_a = object.minDeposit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? duration_1.Duration.fromPartial(object.maxDepositPeriod) : undefined;
        message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? duration_1.Duration.fromPartial(object.votingPeriod) : undefined;
        message.quorum = (_b = object.quorum) !== null && _b !== void 0 ? _b : "";
        message.threshold = (_c = object.threshold) !== null && _c !== void 0 ? _c : "";
        message.vetoThreshold = (_d = object.vetoThreshold) !== null && _d !== void 0 ? _d : "";
        message.minInitialDepositRatio = (_e = object.minInitialDepositRatio) !== null && _e !== void 0 ? _e : "";
        message.proposalCancelRatio = (_f = object.proposalCancelRatio) !== null && _f !== void 0 ? _f : "";
        message.proposalCancelDest = (_g = object.proposalCancelDest) !== null && _g !== void 0 ? _g : "";
        message.expeditedVotingPeriod = object.expeditedVotingPeriod !== undefined && object.expeditedVotingPeriod !== null ? duration_1.Duration.fromPartial(object.expeditedVotingPeriod) : undefined;
        message.expeditedThreshold = (_h = object.expeditedThreshold) !== null && _h !== void 0 ? _h : "";
        message.expeditedMinDeposit = ((_j = object.expeditedMinDeposit) === null || _j === void 0 ? void 0 : _j.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.burnVoteQuorum = (_k = object.burnVoteQuorum) !== null && _k !== void 0 ? _k : false;
        message.burnProposalDepositPrevote = (_l = object.burnProposalDepositPrevote) !== null && _l !== void 0 ? _l : false;
        message.burnVoteVeto = (_m = object.burnVoteVeto) !== null && _m !== void 0 ? _m : false;
        message.minDepositRatio = (_o = object.minDepositRatio) !== null && _o !== void 0 ? _o : "";
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseParams();
        message.minDeposit = ((_a = object.min_deposit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
            message.maxDepositPeriod = duration_1.Duration.fromAmino(object.max_deposit_period);
        }
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.votingPeriod = duration_1.Duration.fromAmino(object.voting_period);
        }
        if (object.quorum !== undefined && object.quorum !== null) {
            message.quorum = object.quorum;
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
            message.vetoThreshold = object.veto_threshold;
        }
        if (object.min_initial_deposit_ratio !== undefined && object.min_initial_deposit_ratio !== null) {
            message.minInitialDepositRatio = object.min_initial_deposit_ratio;
        }
        if (object.proposal_cancel_ratio !== undefined && object.proposal_cancel_ratio !== null) {
            message.proposalCancelRatio = object.proposal_cancel_ratio;
        }
        if (object.proposal_cancel_dest !== undefined && object.proposal_cancel_dest !== null) {
            message.proposalCancelDest = object.proposal_cancel_dest;
        }
        if (object.expedited_voting_period !== undefined && object.expedited_voting_period !== null) {
            message.expeditedVotingPeriod = duration_1.Duration.fromAmino(object.expedited_voting_period);
        }
        if (object.expedited_threshold !== undefined && object.expedited_threshold !== null) {
            message.expeditedThreshold = object.expedited_threshold;
        }
        message.expeditedMinDeposit = ((_b = object.expedited_min_deposit) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.burn_vote_quorum !== undefined && object.burn_vote_quorum !== null) {
            message.burnVoteQuorum = object.burn_vote_quorum;
        }
        if (object.burn_proposal_deposit_prevote !== undefined && object.burn_proposal_deposit_prevote !== null) {
            message.burnProposalDepositPrevote = object.burn_proposal_deposit_prevote;
        }
        if (object.burn_vote_veto !== undefined && object.burn_vote_veto !== null) {
            message.burnVoteVeto = object.burn_vote_veto;
        }
        if (object.min_deposit_ratio !== undefined && object.min_deposit_ratio !== null) {
            message.minDepositRatio = object.min_deposit_ratio;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.minDeposit) {
            obj.min_deposit = message.minDeposit.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.min_deposit = message.minDeposit;
        }
        obj.max_deposit_period = message.maxDepositPeriod ? duration_1.Duration.toAmino(message.maxDepositPeriod) : undefined;
        obj.voting_period = message.votingPeriod ? duration_1.Duration.toAmino(message.votingPeriod) : undefined;
        obj.quorum = message.quorum === "" ? undefined : message.quorum;
        obj.threshold = message.threshold === "" ? undefined : message.threshold;
        obj.veto_threshold = message.vetoThreshold === "" ? undefined : message.vetoThreshold;
        obj.min_initial_deposit_ratio = message.minInitialDepositRatio === "" ? undefined : message.minInitialDepositRatio;
        obj.proposal_cancel_ratio = message.proposalCancelRatio === "" ? undefined : message.proposalCancelRatio;
        obj.proposal_cancel_dest = message.proposalCancelDest === "" ? undefined : message.proposalCancelDest;
        obj.expedited_voting_period = message.expeditedVotingPeriod ? duration_1.Duration.toAmino(message.expeditedVotingPeriod) : undefined;
        obj.expedited_threshold = message.expeditedThreshold === "" ? undefined : message.expeditedThreshold;
        if (message.expeditedMinDeposit) {
            obj.expedited_min_deposit = message.expeditedMinDeposit.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.expedited_min_deposit = message.expeditedMinDeposit;
        }
        obj.burn_vote_quorum = message.burnVoteQuorum === false ? undefined : message.burnVoteQuorum;
        obj.burn_proposal_deposit_prevote = message.burnProposalDepositPrevote === false ? undefined : message.burnProposalDepositPrevote;
        obj.burn_vote_veto = message.burnVoteVeto === false ? undefined : message.burnVoteVeto;
        obj.min_deposit_ratio = message.minDepositRatio === "" ? undefined : message.minDepositRatio;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Params.decode(message.value);
    },
    toProto: function (message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
