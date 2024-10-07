"use strict";
exports.__esModule = true;
exports.IndexerTendermintBlock = exports.IndexerTendermintEvent = exports.IndexerEventsStoreValue = exports.IndexerTendermintEventWrapper = exports.indexerTendermintEvent_BlockEventToJSON = exports.indexerTendermintEvent_BlockEventFromJSON = exports.IndexerTendermintEvent_BlockEventAmino = exports.IndexerTendermintEvent_BlockEventSDKType = exports.IndexerTendermintEvent_BlockEvent = void 0;
var timestamp_1 = require("../../../google/protobuf/timestamp");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
/** enum to specify that the IndexerTendermintEvent is a block event. */
var IndexerTendermintEvent_BlockEvent;
(function (IndexerTendermintEvent_BlockEvent) {
    /** BLOCK_EVENT_UNSPECIFIED - Default value. This value is invalid and unused. */
    IndexerTendermintEvent_BlockEvent[IndexerTendermintEvent_BlockEvent["BLOCK_EVENT_UNSPECIFIED"] = 0] = "BLOCK_EVENT_UNSPECIFIED";
    /**
     * BLOCK_EVENT_BEGIN_BLOCK - BLOCK_EVENT_BEGIN_BLOCK indicates that the event was generated during
     * BeginBlock.
     */
    IndexerTendermintEvent_BlockEvent[IndexerTendermintEvent_BlockEvent["BLOCK_EVENT_BEGIN_BLOCK"] = 1] = "BLOCK_EVENT_BEGIN_BLOCK";
    /**
     * BLOCK_EVENT_END_BLOCK - BLOCK_EVENT_END_BLOCK indicates that the event was generated during
     * EndBlock.
     */
    IndexerTendermintEvent_BlockEvent[IndexerTendermintEvent_BlockEvent["BLOCK_EVENT_END_BLOCK"] = 2] = "BLOCK_EVENT_END_BLOCK";
    IndexerTendermintEvent_BlockEvent[IndexerTendermintEvent_BlockEvent["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IndexerTendermintEvent_BlockEvent = exports.IndexerTendermintEvent_BlockEvent || (exports.IndexerTendermintEvent_BlockEvent = {}));
exports.IndexerTendermintEvent_BlockEventSDKType = IndexerTendermintEvent_BlockEvent;
exports.IndexerTendermintEvent_BlockEventAmino = IndexerTendermintEvent_BlockEvent;
function indexerTendermintEvent_BlockEventFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_EVENT_UNSPECIFIED":
            return IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_UNSPECIFIED;
        case 1:
        case "BLOCK_EVENT_BEGIN_BLOCK":
            return IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_BEGIN_BLOCK;
        case 2:
        case "BLOCK_EVENT_END_BLOCK":
            return IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_END_BLOCK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IndexerTendermintEvent_BlockEvent.UNRECOGNIZED;
    }
}
exports.indexerTendermintEvent_BlockEventFromJSON = indexerTendermintEvent_BlockEventFromJSON;
function indexerTendermintEvent_BlockEventToJSON(object) {
    switch (object) {
        case IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_UNSPECIFIED:
            return "BLOCK_EVENT_UNSPECIFIED";
        case IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_BEGIN_BLOCK:
            return "BLOCK_EVENT_BEGIN_BLOCK";
        case IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_END_BLOCK:
            return "BLOCK_EVENT_END_BLOCK";
        case IndexerTendermintEvent_BlockEvent.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.indexerTendermintEvent_BlockEventToJSON = indexerTendermintEvent_BlockEventToJSON;
function createBaseIndexerTendermintEventWrapper() {
    return {
        event: undefined,
        txnHash: ""
    };
}
exports.IndexerTendermintEventWrapper = {
    typeUrl: "/nemo_network.indexer.indexer_manager.IndexerTendermintEventWrapper",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.event !== undefined) {
            exports.IndexerTendermintEvent.encode(message.event, writer.uint32(10).fork()).ldelim();
        }
        if (message.txnHash !== "") {
            writer.uint32(18).string(message.txnHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIndexerTendermintEventWrapper();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.event = exports.IndexerTendermintEvent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.txnHash = reader.string();
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
        var message = createBaseIndexerTendermintEventWrapper();
        message.event = object.event !== undefined && object.event !== null ? exports.IndexerTendermintEvent.fromPartial(object.event) : undefined;
        message.txnHash = (_a = object.txnHash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseIndexerTendermintEventWrapper();
        if (object.event !== undefined && object.event !== null) {
            message.event = exports.IndexerTendermintEvent.fromAmino(object.event);
        }
        if (object.txn_hash !== undefined && object.txn_hash !== null) {
            message.txnHash = object.txn_hash;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.event = message.event ? exports.IndexerTendermintEvent.toAmino(message.event) : undefined;
        obj.txn_hash = message.txnHash === "" ? undefined : message.txnHash;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.IndexerTendermintEventWrapper.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.IndexerTendermintEventWrapper.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexerTendermintEventWrapper.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.indexer_manager.IndexerTendermintEventWrapper",
            value: exports.IndexerTendermintEventWrapper.encode(message).finish()
        };
    }
};
function createBaseIndexerEventsStoreValue() {
    return {
        events: []
    };
}
exports.IndexerEventsStoreValue = {
    typeUrl: "/nemo_network.indexer.indexer_manager.IndexerEventsStoreValue",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.IndexerTendermintEventWrapper.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIndexerEventsStoreValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.IndexerTendermintEventWrapper.decode(reader, reader.uint32()));
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
        var message = createBaseIndexerEventsStoreValue();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.IndexerTendermintEventWrapper.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseIndexerEventsStoreValue();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.IndexerTendermintEventWrapper.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? exports.IndexerTendermintEventWrapper.toAmino(e) : undefined; });
        }
        else {
            obj.events = message.events;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.IndexerEventsStoreValue.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.IndexerEventsStoreValue.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexerEventsStoreValue.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.indexer_manager.IndexerEventsStoreValue",
            value: exports.IndexerEventsStoreValue.encode(message).finish()
        };
    }
};
function createBaseIndexerTendermintEvent() {
    return {
        subtype: "",
        transactionIndex: undefined,
        blockEvent: undefined,
        eventIndex: 0,
        version: 0,
        dataBytes: new Uint8Array()
    };
}
exports.IndexerTendermintEvent = {
    typeUrl: "/nemo_network.indexer.indexer_manager.IndexerTendermintEvent",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subtype !== "") {
            writer.uint32(10).string(message.subtype);
        }
        if (message.transactionIndex !== undefined) {
            writer.uint32(24).uint32(message.transactionIndex);
        }
        if (message.blockEvent !== undefined) {
            writer.uint32(32).int32(message.blockEvent);
        }
        if (message.eventIndex !== 0) {
            writer.uint32(40).uint32(message.eventIndex);
        }
        if (message.version !== 0) {
            writer.uint32(48).uint32(message.version);
        }
        if (message.dataBytes.length !== 0) {
            writer.uint32(58).bytes(message.dataBytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIndexerTendermintEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subtype = reader.string();
                    break;
                case 3:
                    message.transactionIndex = reader.uint32();
                    break;
                case 4:
                    message.blockEvent = reader.int32();
                    break;
                case 5:
                    message.eventIndex = reader.uint32();
                    break;
                case 6:
                    message.version = reader.uint32();
                    break;
                case 7:
                    message.dataBytes = reader.bytes();
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
        var message = createBaseIndexerTendermintEvent();
        message.subtype = (_a = object.subtype) !== null && _a !== void 0 ? _a : "";
        message.transactionIndex = (_b = object.transactionIndex) !== null && _b !== void 0 ? _b : undefined;
        message.blockEvent = (_c = object.blockEvent) !== null && _c !== void 0 ? _c : undefined;
        message.eventIndex = (_d = object.eventIndex) !== null && _d !== void 0 ? _d : 0;
        message.version = (_e = object.version) !== null && _e !== void 0 ? _e : 0;
        message.dataBytes = (_f = object.dataBytes) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseIndexerTendermintEvent();
        if (object.subtype !== undefined && object.subtype !== null) {
            message.subtype = object.subtype;
        }
        if (object.transaction_index !== undefined && object.transaction_index !== null) {
            message.transactionIndex = object.transaction_index;
        }
        if (object.block_event !== undefined && object.block_event !== null) {
            message.blockEvent = object.block_event;
        }
        if (object.event_index !== undefined && object.event_index !== null) {
            message.eventIndex = object.event_index;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.data_bytes !== undefined && object.data_bytes !== null) {
            message.dataBytes = (0, helpers_1.bytesFromBase64)(object.data_bytes);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subtype = message.subtype === "" ? undefined : message.subtype;
        obj.transaction_index = message.transactionIndex === null ? undefined : message.transactionIndex;
        obj.block_event = message.blockEvent === null ? undefined : message.blockEvent;
        obj.event_index = message.eventIndex === 0 ? undefined : message.eventIndex;
        obj.version = message.version === 0 ? undefined : message.version;
        obj.data_bytes = message.dataBytes ? (0, helpers_1.base64FromBytes)(message.dataBytes) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.IndexerTendermintEvent.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.IndexerTendermintEvent.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexerTendermintEvent.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.indexer_manager.IndexerTendermintEvent",
            value: exports.IndexerTendermintEvent.encode(message).finish()
        };
    }
};
function createBaseIndexerTendermintBlock() {
    return {
        height: 0,
        time: new Date(),
        events: [],
        txHashes: []
    };
}
exports.IndexerTendermintBlock = {
    typeUrl: "/nemo_network.indexer.indexer_manager.IndexerTendermintBlock",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== 0) {
            writer.uint32(8).uint32(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.IndexerTendermintEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.txHashes; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIndexerTendermintBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint32();
                    break;
                case 2:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.events.push(exports.IndexerTendermintEvent.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.txHashes.push(reader.string());
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
        var message = createBaseIndexerTendermintBlock();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : 0;
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        message.events = ((_c = object.events) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.IndexerTendermintEvent.fromPartial(e); })) || [];
        message.txHashes = ((_d = object.txHashes) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseIndexerTendermintBlock();
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.IndexerTendermintEvent.fromAmino(e); })) || [];
        message.txHashes = ((_b = object.tx_hashes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.height = message.height === 0 ? undefined : message.height;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? exports.IndexerTendermintEvent.toAmino(e) : undefined; });
        }
        else {
            obj.events = message.events;
        }
        if (message.txHashes) {
            obj.tx_hashes = message.txHashes.map(function (e) { return e; });
        }
        else {
            obj.tx_hashes = message.txHashes;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.IndexerTendermintBlock.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.IndexerTendermintBlock.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexerTendermintBlock.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.indexer_manager.IndexerTendermintBlock",
            value: exports.IndexerTendermintBlock.encode(message).finish()
        };
    }
};
