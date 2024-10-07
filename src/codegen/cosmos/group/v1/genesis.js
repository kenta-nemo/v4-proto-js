"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var types_1 = require("./types");
var binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        groupSeq: BigInt(0),
        groups: [],
        groupMembers: [],
        groupPolicySeq: BigInt(0),
        groupPolicies: [],
        proposalSeq: BigInt(0),
        proposals: [],
        votes: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.group.v1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.groupSeq !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupSeq);
        }
        for (var _i = 0, _a = message.groups; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.groupMembers; _b < _c.length; _b++) {
            var v = _c[_b];
            types_1.GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.groupPolicySeq !== BigInt(0)) {
            writer.uint32(32).uint64(message.groupPolicySeq);
        }
        for (var _d = 0, _e = message.groupPolicies; _d < _e.length; _d++) {
            var v = _e[_d];
            types_1.GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proposalSeq !== BigInt(0)) {
            writer.uint32(48).uint64(message.proposalSeq);
        }
        for (var _f = 0, _g = message.proposals; _f < _g.length; _f++) {
            var v = _g[_f];
            types_1.Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (var _h = 0, _j = message.votes; _h < _j.length; _h++) {
            var v = _j[_h];
            types_1.Vote.encode(v, writer.uint32(66).fork()).ldelim();
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
                    message.groupSeq = reader.uint64();
                    break;
                case 2:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMembers.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.groupPolicySeq = reader.uint64();
                    break;
                case 5:
                    message.groupPolicies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposalSeq = reader.uint64();
                    break;
                case 7:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseGenesisState();
        message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? BigInt(object.groupSeq.toString()) : BigInt(0);
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GroupInfo.fromPartial(e); })) || [];
        message.groupMembers = ((_b = object.groupMembers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.GroupMember.fromPartial(e); })) || [];
        message.groupPolicySeq = object.groupPolicySeq !== undefined && object.groupPolicySeq !== null ? BigInt(object.groupPolicySeq.toString()) : BigInt(0);
        message.groupPolicies = ((_c = object.groupPolicies) === null || _c === void 0 ? void 0 : _c.map(function (e) { return types_1.GroupPolicyInfo.fromPartial(e); })) || [];
        message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? BigInt(object.proposalSeq.toString()) : BigInt(0);
        message.proposals = ((_d = object.proposals) === null || _d === void 0 ? void 0 : _d.map(function (e) { return types_1.Proposal.fromPartial(e); })) || [];
        message.votes = ((_e = object.votes) === null || _e === void 0 ? void 0 : _e.map(function (e) { return types_1.Vote.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseGenesisState();
        if (object.group_seq !== undefined && object.group_seq !== null) {
            message.groupSeq = BigInt(object.group_seq);
        }
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GroupInfo.fromAmino(e); })) || [];
        message.groupMembers = ((_b = object.group_members) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.GroupMember.fromAmino(e); })) || [];
        if (object.group_policy_seq !== undefined && object.group_policy_seq !== null) {
            message.groupPolicySeq = BigInt(object.group_policy_seq);
        }
        message.groupPolicies = ((_c = object.group_policies) === null || _c === void 0 ? void 0 : _c.map(function (e) { return types_1.GroupPolicyInfo.fromAmino(e); })) || [];
        if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
            message.proposalSeq = BigInt(object.proposal_seq);
        }
        message.proposals = ((_d = object.proposals) === null || _d === void 0 ? void 0 : _d.map(function (e) { return types_1.Proposal.fromAmino(e); })) || [];
        message.votes = ((_e = object.votes) === null || _e === void 0 ? void 0 : _e.map(function (e) { return types_1.Vote.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c;
        var obj = {};
        obj.group_seq = message.groupSeq !== BigInt(0) ? ((_a = message.groupSeq) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        if (message.groups) {
            obj.groups = message.groups.map(function (e) { return e ? types_1.GroupInfo.toAmino(e) : undefined; });
        }
        else {
            obj.groups = message.groups;
        }
        if (message.groupMembers) {
            obj.group_members = message.groupMembers.map(function (e) { return e ? types_1.GroupMember.toAmino(e) : undefined; });
        }
        else {
            obj.group_members = message.groupMembers;
        }
        obj.group_policy_seq = message.groupPolicySeq !== BigInt(0) ? ((_b = message.groupPolicySeq) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(function (e) { return e ? types_1.GroupPolicyInfo.toAmino(e) : undefined; });
        }
        else {
            obj.group_policies = message.groupPolicies;
        }
        obj.proposal_seq = message.proposalSeq !== BigInt(0) ? ((_c = message.proposalSeq) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        if (message.proposals) {
            obj.proposals = message.proposals.map(function (e) { return e ? types_1.Proposal.toAmino(e) : undefined; });
        }
        else {
            obj.proposals = message.proposals;
        }
        if (message.votes) {
            obj.votes = message.votes.map(function (e) { return e ? types_1.Vote.toAmino(e) : undefined; });
        }
        else {
            obj.votes = message.votes;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GenesisState",
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
            typeUrl: "/cosmos.group.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
