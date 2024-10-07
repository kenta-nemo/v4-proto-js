"use strict";
exports.__esModule = true;
exports.DefaultNodeInfoOther = exports.DefaultNodeInfo = exports.ProtocolVersion = exports.NetAddress = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseNetAddress() {
    return {
        id: "",
        ip: "",
        port: 0
    };
}
exports.NetAddress = {
    typeUrl: "/tendermint.p2p.NetAddress",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.ip !== "") {
            writer.uint32(18).string(message.ip);
        }
        if (message.port !== 0) {
            writer.uint32(24).uint32(message.port);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNetAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                case 3:
                    message.port = reader.uint32();
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
        var message = createBaseNetAddress();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.ip = (_b = object.ip) !== null && _b !== void 0 ? _b : "";
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseNetAddress();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = object.ip;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.ip = message.ip === "" ? undefined : message.ip;
        obj.port = message.port === 0 ? undefined : message.port;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.NetAddress.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.NetAddress.decode(message.value);
    },
    toProto: function (message) {
        return exports.NetAddress.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.p2p.NetAddress",
            value: exports.NetAddress.encode(message).finish()
        };
    }
};
function createBaseProtocolVersion() {
    return {
        p2p: BigInt(0),
        block: BigInt(0),
        app: BigInt(0)
    };
}
exports.ProtocolVersion = {
    typeUrl: "/tendermint.p2p.ProtocolVersion",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.p2p !== BigInt(0)) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== BigInt(0)) {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProtocolVersion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = reader.uint64();
                    break;
                case 2:
                    message.block = reader.uint64();
                    break;
                case 3:
                    message.app = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseProtocolVersion();
        message.p2p = object.p2p !== undefined && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseProtocolVersion();
        if (object.p2p !== undefined && object.p2p !== null) {
            message.p2p = BigInt(object.p2p);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = BigInt(object.block);
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c;
        var obj = {};
        obj.p2p = message.p2p !== BigInt(0) ? ((_a = message.p2p) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.block = message.block !== BigInt(0) ? ((_b = message.block) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.app = message.app !== BigInt(0) ? ((_c = message.app) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ProtocolVersion.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ProtocolVersion.decode(message.value);
    },
    toProto: function (message) {
        return exports.ProtocolVersion.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.p2p.ProtocolVersion",
            value: exports.ProtocolVersion.encode(message).finish()
        };
    }
};
function createBaseDefaultNodeInfo() {
    return {
        protocolVersion: exports.ProtocolVersion.fromPartial({}),
        defaultNodeId: "",
        listenAddr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: exports.DefaultNodeInfoOther.fromPartial({})
    };
}
exports.DefaultNodeInfo = {
    typeUrl: "/tendermint.p2p.DefaultNodeInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.protocolVersion !== undefined) {
            exports.ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultNodeId !== "") {
            writer.uint32(18).string(message.defaultNodeId);
        }
        if (message.listenAddr !== "") {
            writer.uint32(26).string(message.listenAddr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            exports.DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDefaultNodeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocolVersion = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.defaultNodeId = reader.string();
                    break;
                case 3:
                    message.listenAddr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = exports.DefaultNodeInfoOther.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseDefaultNodeInfo();
        message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? exports.ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
        message.defaultNodeId = (_a = object.defaultNodeId) !== null && _a !== void 0 ? _a : "";
        message.listenAddr = (_b = object.listenAddr) !== null && _b !== void 0 ? _b : "";
        message.network = (_c = object.network) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        message.channels = (_e = object.channels) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.moniker = (_f = object.moniker) !== null && _f !== void 0 ? _f : "";
        message.other = object.other !== undefined && object.other !== null ? exports.DefaultNodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDefaultNodeInfo();
        if (object.protocol_version !== undefined && object.protocol_version !== null) {
            message.protocolVersion = exports.ProtocolVersion.fromAmino(object.protocol_version);
        }
        if (object.default_node_id !== undefined && object.default_node_id !== null) {
            message.defaultNodeId = object.default_node_id;
        }
        if (object.listen_addr !== undefined && object.listen_addr !== null) {
            message.listenAddr = object.listen_addr;
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = object.network;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.channels !== undefined && object.channels !== null) {
            message.channels = (0, helpers_1.bytesFromBase64)(object.channels);
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.other !== undefined && object.other !== null) {
            message.other = exports.DefaultNodeInfoOther.fromAmino(object.other);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.protocol_version = message.protocolVersion ? exports.ProtocolVersion.toAmino(message.protocolVersion) : undefined;
        obj.default_node_id = message.defaultNodeId === "" ? undefined : message.defaultNodeId;
        obj.listen_addr = message.listenAddr === "" ? undefined : message.listenAddr;
        obj.network = message.network === "" ? undefined : message.network;
        obj.version = message.version === "" ? undefined : message.version;
        obj.channels = message.channels ? (0, helpers_1.base64FromBytes)(message.channels) : undefined;
        obj.moniker = message.moniker === "" ? undefined : message.moniker;
        obj.other = message.other ? exports.DefaultNodeInfoOther.toAmino(message.other) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DefaultNodeInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DefaultNodeInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.DefaultNodeInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.p2p.DefaultNodeInfo",
            value: exports.DefaultNodeInfo.encode(message).finish()
        };
    }
};
function createBaseDefaultNodeInfoOther() {
    return {
        txIndex: "",
        rpcAddress: ""
    };
}
exports.DefaultNodeInfoOther = {
    typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.txIndex !== "") {
            writer.uint32(10).string(message.txIndex);
        }
        if (message.rpcAddress !== "") {
            writer.uint32(18).string(message.rpcAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDefaultNodeInfoOther();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txIndex = reader.string();
                    break;
                case 2:
                    message.rpcAddress = reader.string();
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
        var message = createBaseDefaultNodeInfoOther();
        message.txIndex = (_a = object.txIndex) !== null && _a !== void 0 ? _a : "";
        message.rpcAddress = (_b = object.rpcAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDefaultNodeInfoOther();
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = object.tx_index;
        }
        if (object.rpc_address !== undefined && object.rpc_address !== null) {
            message.rpcAddress = object.rpc_address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.tx_index = message.txIndex === "" ? undefined : message.txIndex;
        obj.rpc_address = message.rpcAddress === "" ? undefined : message.rpcAddress;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DefaultNodeInfoOther.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DefaultNodeInfoOther.decode(message.value);
    },
    toProto: function (message) {
        return exports.DefaultNodeInfoOther.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
            value: exports.DefaultNodeInfoOther.encode(message).finish()
        };
    }
};
