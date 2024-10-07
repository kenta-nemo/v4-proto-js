"use strict";
exports.__esModule = true;
exports.EventProposalPruned = exports.EventLeaveGroup = exports.EventExec = exports.EventVote = exports.EventWithdrawProposal = exports.EventSubmitProposal = exports.EventUpdateGroupPolicy = exports.EventCreateGroupPolicy = exports.EventUpdateGroup = exports.EventCreateGroup = void 0;
var types_1 = require("./types");
var binary_1 = require("../../../binary");
function createBaseEventCreateGroup() {
    return {
        groupId: BigInt(0)
    };
}
exports.EventCreateGroup = {
    typeUrl: "/cosmos.group.v1.EventCreateGroup",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventCreateGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseEventCreateGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventCreateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? ((_a = message.groupId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventCreateGroup.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventCreateGroup",
            value: exports.EventCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventCreateGroup.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventCreateGroup.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroup",
            value: exports.EventCreateGroup.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroup() {
    return {
        groupId: BigInt(0)
    };
}
exports.EventUpdateGroup = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroup",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventUpdateGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseEventUpdateGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventUpdateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? ((_a = message.groupId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventUpdateGroup.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventUpdateGroup",
            value: exports.EventUpdateGroup.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventUpdateGroup.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventUpdateGroup.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroup",
            value: exports.EventUpdateGroup.encode(message).finish()
        };
    }
};
function createBaseEventCreateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventCreateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventCreateGroupPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        var message = createBaseEventCreateGroupPolicy();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventCreateGroupPolicy();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventCreateGroupPolicy",
            value: exports.EventCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventCreateGroupPolicy.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
            value: exports.EventCreateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventUpdateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventUpdateGroupPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        var message = createBaseEventUpdateGroupPolicy();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventUpdateGroupPolicy();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventUpdateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventUpdateGroupPolicy",
            value: exports.EventUpdateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventUpdateGroupPolicy.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventUpdateGroupPolicy.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
            value: exports.EventUpdateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseEventSubmitProposal() {
    return {
        proposalId: BigInt(0)
    };
}
exports.EventSubmitProposal = {
    typeUrl: "/cosmos.group.v1.EventSubmitProposal",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventSubmitProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseEventSubmitProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventSubmitProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? ((_a = message.proposalId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventSubmitProposal",
            value: exports.EventSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventSubmitProposal.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventSubmitProposal.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventSubmitProposal",
            value: exports.EventSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseEventWithdrawProposal() {
    return {
        proposalId: BigInt(0)
    };
}
exports.EventWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventWithdrawProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseEventWithdrawProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventWithdrawProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? ((_a = message.proposalId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventWithdrawProposal",
            value: exports.EventWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventWithdrawProposal.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventWithdrawProposal.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
            value: exports.EventWithdrawProposal.encode(message).finish()
        };
    }
};
function createBaseEventVote() {
    return {
        proposalId: BigInt(0)
    };
}
exports.EventVote = {
    typeUrl: "/cosmos.group.v1.EventVote",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseEventVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? ((_a = message.proposalId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventVote.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventVote",
            value: exports.EventVote.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventVote.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventVote.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventVote",
            value: exports.EventVote.encode(message).finish()
        };
    }
};
function createBaseEventExec() {
    return {
        proposalId: BigInt(0),
        result: 0,
        logs: ""
    };
}
exports.EventExec = {
    typeUrl: "/cosmos.group.v1.EventExec",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        if (message.logs !== "") {
            writer.uint32(26).string(message.logs);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventExec();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.logs = reader.string();
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
        var message = createBaseEventExec();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        message.logs = (_b = object.logs) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventExec();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        if (object.logs !== undefined && object.logs !== null) {
            message.logs = object.logs;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? ((_a = message.proposalId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.result = message.result === 0 ? undefined : message.result;
        obj.logs = message.logs === "" ? undefined : message.logs;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventExec.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventExec",
            value: exports.EventExec.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventExec.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventExec.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventExec",
            value: exports.EventExec.encode(message).finish()
        };
    }
};
function createBaseEventLeaveGroup() {
    return {
        groupId: BigInt(0),
        address: ""
    };
}
exports.EventLeaveGroup = {
    typeUrl: "/cosmos.group.v1.EventLeaveGroup",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventLeaveGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
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
        var message = createBaseEventLeaveGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventLeaveGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? ((_a = message.groupId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventLeaveGroup",
            value: exports.EventLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventLeaveGroup.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventLeaveGroup.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventLeaveGroup",
            value: exports.EventLeaveGroup.encode(message).finish()
        };
    }
};
function createBaseEventProposalPruned() {
    return {
        proposalId: BigInt(0),
        status: 0,
        tallyResult: undefined
    };
}
exports.EventProposalPruned = {
    typeUrl: "/cosmos.group.v1.EventProposalPruned",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.tallyResult !== undefined) {
            types_1.TallyResult.encode(message.tallyResult, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventProposalPruned();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.tallyResult = types_1.TallyResult.decode(reader, reader.uint32());
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
        var message = createBaseEventProposalPruned();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.tallyResult = object.tallyResult !== undefined && object.tallyResult !== null ? types_1.TallyResult.fromPartial(object.tallyResult) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEventProposalPruned();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.tally_result !== undefined && object.tally_result !== null) {
            message.tallyResult = types_1.TallyResult.fromAmino(object.tally_result);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? ((_a = message.proposalId) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.tally_result = message.tallyResult ? types_1.TallyResult.toAmino(message.tallyResult) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EventProposalPruned.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/EventProposalPruned",
            value: exports.EventProposalPruned.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.EventProposalPruned.decode(message.value);
    },
    toProto: function (message) {
        return exports.EventProposalPruned.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.group.v1.EventProposalPruned",
            value: exports.EventProposalPruned.encode(message).finish()
        };
    }
};
