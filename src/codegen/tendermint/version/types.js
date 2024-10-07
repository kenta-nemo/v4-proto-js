"use strict";
exports.__esModule = true;
exports.Consensus = exports.App = void 0;
var binary_1 = require("../../binary");
function createBaseApp() {
    return {
        protocol: BigInt(0),
        software: ""
    };
}
exports.App = {
    typeUrl: "/tendermint.version.App",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.protocol !== BigInt(0)) {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseApp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.uint64();
                    break;
                case 2:
                    message.software = reader.string();
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
        var message = createBaseApp();
        message.protocol = object.protocol !== undefined && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt(0);
        message.software = (_a = object.software) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseApp();
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = BigInt(object.protocol);
        }
        if (object.software !== undefined && object.software !== null) {
            message.software = object.software;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.protocol = message.protocol !== BigInt(0) ? ((_a = message.protocol) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.software = message.software === "" ? undefined : message.software;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.App.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.App.decode(message.value);
    },
    toProto: function (message) {
        return exports.App.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.version.App",
            value: exports.App.encode(message).finish()
        };
    }
};
function createBaseConsensus() {
    return {
        block: BigInt(0),
        app: BigInt(0)
    };
}
exports.Consensus = {
    typeUrl: "/tendermint.version.Consensus",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.block !== BigInt(0)) {
            writer.uint32(8).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = reader.uint64();
                    break;
                case 2:
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
        var message = createBaseConsensus();
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseConsensus();
        if (object.block !== undefined && object.block !== null) {
            message.block = BigInt(object.block);
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.block = message.block !== BigInt(0) ? ((_a = message.block) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.app = message.app !== BigInt(0) ? ((_b = message.app) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Consensus.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Consensus.decode(message.value);
    },
    toProto: function (message) {
        return exports.Consensus.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/tendermint.version.Consensus",
            value: exports.Consensus.encode(message).finish()
        };
    }
};
