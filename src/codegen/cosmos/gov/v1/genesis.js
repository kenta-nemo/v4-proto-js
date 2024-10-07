"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var gov_1 = require("./gov");
var binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        startingProposalId: BigInt(0),
        deposits: [],
        votes: [],
        proposals: [],
        depositParams: undefined,
        votingParams: undefined,
        tallyParams: undefined,
        params: undefined,
        constitution: ""
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.gov.v1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.startingProposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.startingProposalId);
        }
        for (var _i = 0, _a = message.deposits; _i < _a.length; _i++) {
            var v = _a[_i];
            gov_1.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.votes; _b < _c.length; _b++) {
            var v = _c[_b];
            gov_1.Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.proposals; _d < _e.length; _d++) {
            var v = _e[_d];
            gov_1.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            gov_1.DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
        }
        if (message.votingParams !== undefined) {
            gov_1.VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            gov_1.TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
        }
        if (message.params !== undefined) {
            gov_1.Params.encode(message.params, writer.uint32(66).fork()).ldelim();
        }
        if (message.constitution !== "") {
            writer.uint32(74).string(message.constitution);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startingProposalId = reader.uint64();
                    break;
                case 2:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.depositParams = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.votingParams = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tallyParams = gov_1.TallyParams.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.params = gov_1.Params.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.constitution = reader.string();
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
        var message = createBaseGenesisState();
        message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? BigInt(object.startingProposalId.toString()) : BigInt(0);
        message.deposits = ((_a = object.deposits) === null || _a === void 0 ? void 0 : _a.map(function (e) { return gov_1.Deposit.fromPartial(e); })) || [];
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return gov_1.Vote.fromPartial(e); })) || [];
        message.proposals = ((_c = object.proposals) === null || _c === void 0 ? void 0 : _c.map(function (e) { return gov_1.Proposal.fromPartial(e); })) || [];
        message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? gov_1.DepositParams.fromPartial(object.depositParams) : undefined;
        message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? gov_1.VotingParams.fromPartial(object.votingParams) : undefined;
        message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? gov_1.TallyParams.fromPartial(object.tallyParams) : undefined;
        message.params = object.params !== undefined && object.params !== null ? gov_1.Params.fromPartial(object.params) : undefined;
        message.constitution = (_d = object.constitution) !== null && _d !== void 0 ? _d : "";
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c;
        var message = createBaseGenesisState();
        if (object.starting_proposal_id !== undefined && object.starting_proposal_id !== null) {
            message.startingProposalId = BigInt(object.starting_proposal_id);
        }
        message.deposits = ((_a = object.deposits) === null || _a === void 0 ? void 0 : _a.map(function (e) { return gov_1.Deposit.fromAmino(e); })) || [];
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return gov_1.Vote.fromAmino(e); })) || [];
        message.proposals = ((_c = object.proposals) === null || _c === void 0 ? void 0 : _c.map(function (e) { return gov_1.Proposal.fromAmino(e); })) || [];
        if (object.deposit_params !== undefined && object.deposit_params !== null) {
            message.depositParams = gov_1.DepositParams.fromAmino(object.deposit_params);
        }
        if (object.voting_params !== undefined && object.voting_params !== null) {
            message.votingParams = gov_1.VotingParams.fromAmino(object.voting_params);
        }
        if (object.tally_params !== undefined && object.tally_params !== null) {
            message.tallyParams = gov_1.TallyParams.fromAmino(object.tally_params);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = gov_1.Params.fromAmino(object.params);
        }
        if (object.constitution !== undefined && object.constitution !== null) {
            message.constitution = object.constitution;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.starting_proposal_id = message.startingProposalId !== BigInt(0) ? ((_a = message.startingProposalId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        if (message.deposits) {
            obj.deposits = message.deposits.map(function (e) { return e ? gov_1.Deposit.toAmino(e) : undefined; });
        }
        else {
            obj.deposits = message.deposits;
        }
        if (message.votes) {
            obj.votes = message.votes.map(function (e) { return e ? gov_1.Vote.toAmino(e) : undefined; });
        }
        else {
            obj.votes = message.votes;
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(function (e) { return e ? gov_1.Proposal.toAmino(e) : undefined; });
        }
        else {
            obj.proposals = message.proposals;
        }
        obj.deposit_params = message.depositParams ? gov_1.DepositParams.toAmino(message.depositParams) : undefined;
        obj.voting_params = message.votingParams ? gov_1.VotingParams.toAmino(message.votingParams) : undefined;
        obj.tally_params = message.tallyParams ? gov_1.TallyParams.toAmino(message.tallyParams) : undefined;
        obj.params = message.params ? gov_1.Params.toAmino(message.params) : undefined;
        obj.constitution = message.constitution === "" ? undefined : message.constitution;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/v1/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.gov.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
