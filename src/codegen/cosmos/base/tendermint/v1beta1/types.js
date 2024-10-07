"use strict";
exports.__esModule = true;
exports.Header = exports.Block = void 0;
var types_1 = require("../../../../tendermint/types/types");
var evidence_1 = require("../../../../tendermint/types/evidence");
var types_2 = require("../../../../tendermint/version/types");
var timestamp_1 = require("../../../../google/protobuf/timestamp");
var binary_1 = require("../../../../binary");
var helpers_1 = require("../../../../helpers");
function createBaseBlock() {
    return {
        header: exports.Header.fromPartial({}),
        data: types_1.Data.fromPartial({}),
        evidence: evidence_1.EvidenceList.fromPartial({}),
        lastCommit: undefined
    };
}
exports.Block = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            types_1.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            evidence_1.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastCommit !== undefined) {
            types_1.Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = types_1.Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = evidence_1.EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lastCommit = types_1.Commit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseBlock();
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.data = object.data !== undefined && object.data !== null ? types_1.Data.fromPartial(object.data) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? evidence_1.EvidenceList.fromPartial(object.evidence) : undefined;
        message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? types_1.Commit.fromPartial(object.lastCommit) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseBlock();
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.Header.fromAmino(object.header);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = types_1.Data.fromAmino(object.data);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = evidence_1.EvidenceList.fromAmino(object.evidence);
        }
        if (object.last_commit !== undefined && object.last_commit !== null) {
            message.lastCommit = types_1.Commit.fromAmino(object.last_commit);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.header = message.header ? exports.Header.toAmino(message.header) : exports.Header.toAmino(exports.Header.fromPartial({}));
        obj.data = message.data ? types_1.Data.toAmino(message.data) : types_1.Data.toAmino(types_1.Data.fromPartial({}));
        obj.evidence = message.evidence ? evidence_1.EvidenceList.toAmino(message.evidence) : evidence_1.EvidenceList.toAmino(evidence_1.EvidenceList.fromPartial({}));
        obj.last_commit = message.lastCommit ? types_1.Commit.toAmino(message.lastCommit) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Block.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Block",
            value: exports.Block.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Block.decode(message.value);
    },
    toProto: function (message) {
        return exports.Block.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
            value: exports.Block.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        version: types_2.Consensus.fromPartial({}),
        chainId: "",
        height: BigInt(0),
        time: new Date(),
        lastBlockId: types_1.BlockID.fromPartial({}),
        lastCommitHash: new Uint8Array(),
        dataHash: new Uint8Array(),
        validatorsHash: new Uint8Array(),
        nextValidatorsHash: new Uint8Array(),
        consensusHash: new Uint8Array(),
        appHash: new Uint8Array(),
        lastResultsHash: new Uint8Array(),
        evidenceHash: new Uint8Array(),
        proposerAddress: ""
    };
}
exports.Header = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.version !== undefined) {
            types_2.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockId !== undefined) {
            types_1.BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastCommitHash.length !== 0) {
            writer.uint32(50).bytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(58).bytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            writer.uint32(66).bytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(74).bytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            writer.uint32(82).bytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(90).bytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            writer.uint32(106).bytes(message.evidenceHash);
        }
        if (message.proposerAddress !== "") {
            writer.uint32(114).string(message.proposerAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = types_2.Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastBlockId = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.lastCommitHash = reader.bytes();
                    break;
                case 7:
                    message.dataHash = reader.bytes();
                    break;
                case 8:
                    message.validatorsHash = reader.bytes();
                    break;
                case 9:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 10:
                    message.consensusHash = reader.bytes();
                    break;
                case 11:
                    message.appHash = reader.bytes();
                    break;
                case 12:
                    message.lastResultsHash = reader.bytes();
                    break;
                case 13:
                    message.evidenceHash = reader.bytes();
                    break;
                case 14:
                    message.proposerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? types_2.Consensus.fromPartial(object.version) : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? types_1.BlockID.fromPartial(object.lastBlockId) : undefined;
        message.lastCommitHash = (_c = object.lastCommitHash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.dataHash = (_d = object.dataHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.validatorsHash = (_e = object.validatorsHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.nextValidatorsHash = (_f = object.nextValidatorsHash) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.consensusHash = (_g = object.consensusHash) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.appHash = (_h = object.appHash) !== null && _h !== void 0 ? _h : new Uint8Array();
        message.lastResultsHash = (_j = object.lastResultsHash) !== null && _j !== void 0 ? _j : new Uint8Array();
        message.evidenceHash = (_k = object.evidenceHash) !== null && _k !== void 0 ? _k : new Uint8Array();
        message.proposerAddress = (_l = object.proposerAddress) !== null && _l !== void 0 ? _l : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseHeader();
        if (object.version !== undefined && object.version !== null) {
            message.version = types_2.Consensus.fromAmino(object.version);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.last_block_id !== undefined && object.last_block_id !== null) {
            message.lastBlockId = types_1.BlockID.fromAmino(object.last_block_id);
        }
        if (object.last_commit_hash !== undefined && object.last_commit_hash !== null) {
            message.lastCommitHash = (0, helpers_1.bytesFromBase64)(object.last_commit_hash);
        }
        if (object.data_hash !== undefined && object.data_hash !== null) {
            message.dataHash = (0, helpers_1.bytesFromBase64)(object.data_hash);
        }
        if (object.validators_hash !== undefined && object.validators_hash !== null) {
            message.validatorsHash = (0, helpers_1.bytesFromBase64)(object.validators_hash);
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.nextValidatorsHash = (0, helpers_1.bytesFromBase64)(object.next_validators_hash);
        }
        if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
            message.consensusHash = (0, helpers_1.bytesFromBase64)(object.consensus_hash);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.appHash = (0, helpers_1.bytesFromBase64)(object.app_hash);
        }
        if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
            message.lastResultsHash = (0, helpers_1.bytesFromBase64)(object.last_results_hash);
        }
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidenceHash = (0, helpers_1.bytesFromBase64)(object.evidence_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = object.proposer_address;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.version = message.version ? types_2.Consensus.toAmino(message.version) : types_2.Consensus.toAmino(types_2.Consensus.fromPartial({}));
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.height = message.height !== BigInt(0) ? ((_a = message.height) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : new Date();
        obj.last_block_id = message.lastBlockId ? types_1.BlockID.toAmino(message.lastBlockId) : types_1.BlockID.toAmino(types_1.BlockID.fromPartial({}));
        obj.last_commit_hash = message.lastCommitHash ? (0, helpers_1.base64FromBytes)(message.lastCommitHash) : undefined;
        obj.data_hash = message.dataHash ? (0, helpers_1.base64FromBytes)(message.dataHash) : undefined;
        obj.validators_hash = message.validatorsHash ? (0, helpers_1.base64FromBytes)(message.validatorsHash) : undefined;
        obj.next_validators_hash = message.nextValidatorsHash ? (0, helpers_1.base64FromBytes)(message.nextValidatorsHash) : undefined;
        obj.consensus_hash = message.consensusHash ? (0, helpers_1.base64FromBytes)(message.consensusHash) : undefined;
        obj.app_hash = message.appHash ? (0, helpers_1.base64FromBytes)(message.appHash) : undefined;
        obj.last_results_hash = message.lastResultsHash ? (0, helpers_1.base64FromBytes)(message.lastResultsHash) : undefined;
        obj.evidence_hash = message.evidenceHash ? (0, helpers_1.base64FromBytes)(message.evidenceHash) : undefined;
        obj.proposer_address = message.proposerAddress === "" ? undefined : message.proposerAddress;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Header.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Header",
            value: exports.Header.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Header.decode(message.value);
    },
    toProto: function (message) {
        return exports.Header.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
