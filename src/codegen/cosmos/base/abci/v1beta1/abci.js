"use strict";
exports.__esModule = true;
exports.SearchBlocksResult = exports.SearchTxsResult = exports.TxMsgData = exports.MsgData = exports.SimulationResponse = exports.Result = exports.GasInfo = exports.Attribute = exports.StringEvent = exports.ABCIMessageLog = exports.TxResponse = void 0;
var any_1 = require("../../../../google/protobuf/any");
var types_1 = require("../../../../tendermint/abci/types");
var block_1 = require("../../../../tendermint/types/block");
var binary_1 = require("../../../../binary");
var helpers_1 = require("../../../../helpers");
function createBaseTxResponse() {
    return {
        height: BigInt(0),
        txhash: "",
        codespace: "",
        code: 0,
        data: "",
        rawLog: "",
        logs: [],
        info: "",
        gasWanted: BigInt(0),
        gasUsed: BigInt(0),
        tx: undefined,
        timestamp: "",
        events: []
    };
}
exports.TxResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== "") {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== "") {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.rawLog !== "") {
            writer.uint32(50).string(message.rawLog);
        }
        for (var _i = 0, _a = message.logs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(72).int64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(80).int64(message.gasUsed);
        }
        if (message.tx !== undefined) {
            any_1.Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(98).string(message.timestamp);
        }
        for (var _b = 0, _c = message.events; _b < _c.length; _b++) {
            var v = _c[_b];
            types_1.Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.codespace = reader.string();
                    break;
                case 4:
                    message.code = reader.uint32();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.rawLog = reader.string();
                    break;
                case 7:
                    message.logs.push(exports.ABCIMessageLog.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gasWanted = reader.int64();
                    break;
                case 10:
                    message.gasUsed = reader.int64();
                    break;
                case 11:
                    message.tx = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseTxResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.txhash = (_a = object.txhash) !== null && _a !== void 0 ? _a : "";
        message.codespace = (_b = object.codespace) !== null && _b !== void 0 ? _b : "";
        message.code = (_c = object.code) !== null && _c !== void 0 ? _c : 0;
        message.data = (_d = object.data) !== null && _d !== void 0 ? _d : "";
        message.rawLog = (_e = object.rawLog) !== null && _e !== void 0 ? _e : "";
        message.logs = ((_f = object.logs) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.ABCIMessageLog.fromPartial(e); })) || [];
        message.info = (_g = object.info) !== null && _g !== void 0 ? _g : "";
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.tx = object.tx !== undefined && object.tx !== null ? any_1.Any.fromPartial(object.tx) : undefined;
        message.timestamp = (_h = object.timestamp) !== null && _h !== void 0 ? _h : "";
        message.events = ((_j = object.events) === null || _j === void 0 ? void 0 : _j.map(function (e) { return types_1.Event.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseTxResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = object.txhash;
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.raw_log !== undefined && object.raw_log !== null) {
            message.rawLog = object.raw_log;
        }
        message.logs = ((_a = object.logs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ABCIMessageLog.fromAmino(e); })) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = any_1.Any.fromAmino(object.tx);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        message.events = ((_b = object.events) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.Event.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c;
        var obj = {};
        obj.height = message.height !== BigInt(0) ? ((_a = message.height) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.txhash = message.txhash === "" ? undefined : message.txhash;
        obj.codespace = message.codespace === "" ? undefined : message.codespace;
        obj.code = message.code === 0 ? undefined : message.code;
        obj.data = message.data === "" ? undefined : message.data;
        obj.raw_log = message.rawLog === "" ? undefined : message.rawLog;
        if (message.logs) {
            obj.logs = message.logs.map(function (e) { return e ? exports.ABCIMessageLog.toAmino(e) : undefined; });
        }
        else {
            obj.logs = message.logs;
        }
        obj.info = message.info === "" ? undefined : message.info;
        obj.gas_wanted = message.gasWanted !== BigInt(0) ? ((_b = message.gasWanted) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.gas_used = message.gasUsed !== BigInt(0) ? ((_c = message.gasUsed) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        obj.tx = message.tx ? any_1.Any.toAmino(message.tx) : undefined;
        obj.timestamp = message.timestamp === "" ? undefined : message.timestamp;
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? types_1.Event.toAmino(e) : undefined; });
        }
        else {
            obj.events = message.events;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TxResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/TxResponse",
            value: exports.TxResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.TxResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.TxResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
            value: exports.TxResponse.encode(message).finish()
        };
    }
};
function createBaseABCIMessageLog() {
    return {
        msgIndex: 0,
        log: "",
        events: []
    };
}
exports.ABCIMessageLog = {
    typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.msgIndex !== 0) {
            writer.uint32(8).uint32(message.msgIndex);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseABCIMessageLog();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgIndex = reader.uint32();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(exports.StringEvent.decode(reader, reader.uint32()));
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
        var message = createBaseABCIMessageLog();
        message.msgIndex = (_a = object.msgIndex) !== null && _a !== void 0 ? _a : 0;
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.events = ((_c = object.events) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.StringEvent.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseABCIMessageLog();
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = object.msg_index;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StringEvent.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.msg_index = (_a = message.msgIndex) !== null && _a !== void 0 ? _a : 0;
        obj.log = message.log === "" ? undefined : message.log;
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? exports.StringEvent.toAmino(e) : undefined; });
        }
        else {
            obj.events = message.events;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ABCIMessageLog.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ABCIMessageLog",
            value: exports.ABCIMessageLog.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ABCIMessageLog.decode(message.value);
    },
    toProto: function (message) {
        return exports.ABCIMessageLog.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
            value: exports.ABCIMessageLog.encode(message).finish()
        };
    }
};
function createBaseStringEvent() {
    return {
        type: "",
        attributes: []
    };
}
exports.StringEvent = {
    typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (var _i = 0, _a = message.attributes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStringEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
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
        var message = createBaseStringEvent();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.attributes = ((_b = object.attributes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Attribute.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseStringEvent();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        message.attributes = ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Attribute.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.type = message.type === "" ? undefined : message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(function (e) { return e ? exports.Attribute.toAmino(e) : undefined; });
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StringEvent.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/StringEvent",
            value: exports.StringEvent.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.StringEvent.decode(message.value);
    },
    toProto: function (message) {
        return exports.StringEvent.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
            value: exports.StringEvent.encode(message).finish()
        };
    }
};
function createBaseAttribute() {
    return {
        key: "",
        value: ""
    };
}
exports.Attribute = {
    typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAttribute();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
        var message = createBaseAttribute();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAttribute();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.key = message.key === "" ? undefined : message.key;
        obj.value = message.value === "" ? undefined : message.value;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Attribute.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Attribute",
            value: exports.Attribute.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Attribute.decode(message.value);
    },
    toProto: function (message) {
        return exports.Attribute.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
            value: exports.Attribute.encode(message).finish()
        };
    }
};
function createBaseGasInfo() {
    return {
        gasWanted: BigInt(0),
        gasUsed: BigInt(0)
    };
}
exports.GasInfo = {
    typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(8).uint64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasUsed);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGasInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasWanted = reader.uint64();
                    break;
                case 2:
                    message.gasUsed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGasInfo();
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGasInfo();
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.gas_wanted = message.gasWanted !== BigInt(0) ? ((_a = message.gasWanted) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.gas_used = message.gasUsed !== BigInt(0) ? ((_b = message.gasUsed) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GasInfo.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GasInfo",
            value: exports.GasInfo.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GasInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.GasInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
            value: exports.GasInfo.encode(message).finish()
        };
    }
};
function createBaseResult() {
    return {
        data: new Uint8Array(),
        log: "",
        events: [],
        msgResponses: []
    };
}
exports.Result = {
    typeUrl: "/cosmos.base.abci.v1beta1.Result",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.msgResponses; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.msgResponses.push(any_1.Any.decode(reader, reader.uint32()));
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
        var message = createBaseResult();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.events = ((_c = object.events) === null || _c === void 0 ? void 0 : _c.map(function (e) { return types_1.Event.fromPartial(e); })) || [];
        message.msgResponses = ((_d = object.msgResponses) === null || _d === void 0 ? void 0 : _d.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseResult();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.Event.fromAmino(e); })) || [];
        message.msgResponses = ((_b = object.msg_responses) === null || _b === void 0 ? void 0 : _b.map(function (e) { return any_1.Any.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.log = message.log === "" ? undefined : message.log;
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? types_1.Event.toAmino(e) : undefined; });
        }
        else {
            obj.events = message.events;
        }
        if (message.msgResponses) {
            obj.msg_responses = message.msgResponses.map(function (e) { return e ? any_1.Any.toAmino(e) : undefined; });
        }
        else {
            obj.msg_responses = message.msgResponses;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Result.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Result",
            value: exports.Result.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Result.decode(message.value);
    },
    toProto: function (message) {
        return exports.Result.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Result",
            value: exports.Result.encode(message).finish()
        };
    }
};
function createBaseSimulationResponse() {
    return {
        gasInfo: exports.GasInfo.fromPartial({}),
        result: undefined
    };
}
exports.SimulationResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.gasInfo !== undefined) {
            exports.GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            exports.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimulationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasInfo = exports.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = exports.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseSimulationResponse();
        message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? exports.GasInfo.fromPartial(object.gasInfo) : undefined;
        message.result = object.result !== undefined && object.result !== null ? exports.Result.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSimulationResponse();
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gasInfo = exports.GasInfo.fromAmino(object.gas_info);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.Result.fromAmino(object.result);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.gas_info = message.gasInfo ? exports.GasInfo.toAmino(message.gasInfo) : undefined;
        obj.result = message.result ? exports.Result.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SimulationResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SimulationResponse",
            value: exports.SimulationResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SimulationResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.SimulationResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
            value: exports.SimulationResponse.encode(message).finish()
        };
    }
};
function createBaseMsgData() {
    return {
        msgType: "",
        data: new Uint8Array()
    };
}
exports.MsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.msgType !== "") {
            writer.uint32(10).string(message.msgType);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgType = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
        var message = createBaseMsgData();
        message.msgType = (_a = object.msgType) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgData();
        if (object.msg_type !== undefined && object.msg_type !== null) {
            message.msgType = object.msg_type;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.msg_type = message.msgType === "" ? undefined : message.msgType;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgData.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgData",
            value: exports.MsgData.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgData.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgData.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
            value: exports.MsgData.encode(message).finish()
        };
    }
};
function createBaseTxMsgData() {
    return {
        data: [],
        msgResponses: []
    };
}
exports.TxMsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.data; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MsgData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.msgResponses; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxMsgData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(exports.MsgData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.msgResponses.push(any_1.Any.decode(reader, reader.uint32()));
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
        var message = createBaseTxMsgData();
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MsgData.fromPartial(e); })) || [];
        message.msgResponses = ((_b = object.msgResponses) === null || _b === void 0 ? void 0 : _b.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseTxMsgData();
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MsgData.fromAmino(e); })) || [];
        message.msgResponses = ((_b = object.msg_responses) === null || _b === void 0 ? void 0 : _b.map(function (e) { return any_1.Any.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.data) {
            obj.data = message.data.map(function (e) { return e ? exports.MsgData.toAmino(e) : undefined; });
        }
        else {
            obj.data = message.data;
        }
        if (message.msgResponses) {
            obj.msg_responses = message.msgResponses.map(function (e) { return e ? any_1.Any.toAmino(e) : undefined; });
        }
        else {
            obj.msg_responses = message.msgResponses;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TxMsgData.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/TxMsgData",
            value: exports.TxMsgData.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.TxMsgData.decode(message.value);
    },
    toProto: function (message) {
        return exports.TxMsgData.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
            value: exports.TxMsgData.encode(message).finish()
        };
    }
};
function createBaseSearchTxsResult() {
    return {
        totalCount: BigInt(0),
        count: BigInt(0),
        pageNumber: BigInt(0),
        pageTotal: BigInt(0),
        limit: BigInt(0),
        txs: []
    };
}
exports.SearchTxsResult = {
    typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.totalCount !== BigInt(0)) {
            writer.uint32(8).uint64(message.totalCount);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).uint64(message.count);
        }
        if (message.pageNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.pageNumber);
        }
        if (message.pageTotal !== BigInt(0)) {
            writer.uint32(32).uint64(message.pageTotal);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(40).uint64(message.limit);
        }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSearchTxsResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.uint64();
                    break;
                case 2:
                    message.count = reader.uint64();
                    break;
                case 3:
                    message.pageNumber = reader.uint64();
                    break;
                case 4:
                    message.pageTotal = reader.uint64();
                    break;
                case 5:
                    message.limit = reader.uint64();
                    break;
                case 6:
                    message.txs.push(exports.TxResponse.decode(reader, reader.uint32()));
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
        var message = createBaseSearchTxsResult();
        message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
        message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
        message.pageNumber = object.pageNumber !== undefined && object.pageNumber !== null ? BigInt(object.pageNumber.toString()) : BigInt(0);
        message.pageTotal = object.pageTotal !== undefined && object.pageTotal !== null ? BigInt(object.pageTotal.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.TxResponse.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseSearchTxsResult();
        if (object.total_count !== undefined && object.total_count !== null) {
            message.totalCount = BigInt(object.total_count);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = BigInt(object.count);
        }
        if (object.page_number !== undefined && object.page_number !== null) {
            message.pageNumber = BigInt(object.page_number);
        }
        if (object.page_total !== undefined && object.page_total !== null) {
            message.pageTotal = BigInt(object.page_total);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.TxResponse.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c, _d, _e;
        var obj = {};
        obj.total_count = message.totalCount !== BigInt(0) ? ((_a = message.totalCount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.count = message.count !== BigInt(0) ? ((_b = message.count) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.page_number = message.pageNumber !== BigInt(0) ? ((_c = message.pageNumber) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        obj.page_total = message.pageTotal !== BigInt(0) ? ((_d = message.pageTotal) === null || _d === void 0 ? void 0 : _d.toString).call(_d) : undefined;
        obj.limit = message.limit !== BigInt(0) ? ((_e = message.limit) === null || _e === void 0 ? void 0 : _e.toString).call(_e) : undefined;
        if (message.txs) {
            obj.txs = message.txs.map(function (e) { return e ? exports.TxResponse.toAmino(e) : undefined; });
        }
        else {
            obj.txs = message.txs;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SearchTxsResult.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SearchTxsResult",
            value: exports.SearchTxsResult.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SearchTxsResult.decode(message.value);
    },
    toProto: function (message) {
        return exports.SearchTxsResult.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
            value: exports.SearchTxsResult.encode(message).finish()
        };
    }
};
function createBaseSearchBlocksResult() {
    return {
        totalCount: BigInt(0),
        count: BigInt(0),
        pageNumber: BigInt(0),
        pageTotal: BigInt(0),
        limit: BigInt(0),
        blocks: []
    };
}
exports.SearchBlocksResult = {
    typeUrl: "/cosmos.base.abci.v1beta1.SearchBlocksResult",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.totalCount !== BigInt(0)) {
            writer.uint32(8).int64(message.totalCount);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).int64(message.count);
        }
        if (message.pageNumber !== BigInt(0)) {
            writer.uint32(24).int64(message.pageNumber);
        }
        if (message.pageTotal !== BigInt(0)) {
            writer.uint32(32).int64(message.pageTotal);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(40).int64(message.limit);
        }
        for (var _i = 0, _a = message.blocks; _i < _a.length; _i++) {
            var v = _a[_i];
            block_1.Block.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSearchBlocksResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.int64();
                    break;
                case 2:
                    message.count = reader.int64();
                    break;
                case 3:
                    message.pageNumber = reader.int64();
                    break;
                case 4:
                    message.pageTotal = reader.int64();
                    break;
                case 5:
                    message.limit = reader.int64();
                    break;
                case 6:
                    message.blocks.push(block_1.Block.decode(reader, reader.uint32()));
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
        var message = createBaseSearchBlocksResult();
        message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
        message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
        message.pageNumber = object.pageNumber !== undefined && object.pageNumber !== null ? BigInt(object.pageNumber.toString()) : BigInt(0);
        message.pageTotal = object.pageTotal !== undefined && object.pageTotal !== null ? BigInt(object.pageTotal.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.blocks = ((_a = object.blocks) === null || _a === void 0 ? void 0 : _a.map(function (e) { return block_1.Block.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseSearchBlocksResult();
        if (object.total_count !== undefined && object.total_count !== null) {
            message.totalCount = BigInt(object.total_count);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = BigInt(object.count);
        }
        if (object.page_number !== undefined && object.page_number !== null) {
            message.pageNumber = BigInt(object.page_number);
        }
        if (object.page_total !== undefined && object.page_total !== null) {
            message.pageTotal = BigInt(object.page_total);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        message.blocks = ((_a = object.blocks) === null || _a === void 0 ? void 0 : _a.map(function (e) { return block_1.Block.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c, _d, _e;
        var obj = {};
        obj.total_count = message.totalCount !== BigInt(0) ? ((_a = message.totalCount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.count = message.count !== BigInt(0) ? ((_b = message.count) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.page_number = message.pageNumber !== BigInt(0) ? ((_c = message.pageNumber) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        obj.page_total = message.pageTotal !== BigInt(0) ? ((_d = message.pageTotal) === null || _d === void 0 ? void 0 : _d.toString).call(_d) : undefined;
        obj.limit = message.limit !== BigInt(0) ? ((_e = message.limit) === null || _e === void 0 ? void 0 : _e.toString).call(_e) : undefined;
        if (message.blocks) {
            obj.blocks = message.blocks.map(function (e) { return e ? block_1.Block.toAmino(e) : undefined; });
        }
        else {
            obj.blocks = message.blocks;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SearchBlocksResult.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SearchBlocksResult",
            value: exports.SearchBlocksResult.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SearchBlocksResult.decode(message.value);
    },
    toProto: function (message) {
        return exports.SearchBlocksResult.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SearchBlocksResult",
            value: exports.SearchBlocksResult.encode(message).finish()
        };
    }
};
