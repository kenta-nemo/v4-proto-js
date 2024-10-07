"use strict";
exports.__esModule = true;
exports.IndexValue = exports.ListResponse = exports.ListRequest_Range = exports.ListRequest_Prefix = exports.ListRequest = exports.GetResponse = exports.GetRequest = void 0;
var pagination_1 = require("../../../base/query/v1beta1/pagination");
var any_1 = require("../../../../google/protobuf/any");
var timestamp_1 = require("../../../../google/protobuf/timestamp");
var duration_1 = require("../../../../google/protobuf/duration");
var binary_1 = require("../../../../binary");
var helpers_1 = require("../../../../helpers");
function createBaseGetRequest() {
    return {
        messageName: "",
        index: "",
        values: []
    };
}
exports.GetRequest = {
    typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.messageName !== "") {
            writer.uint32(10).string(message.messageName);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        for (var _i = 0, _a = message.values; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.IndexValue.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageName = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.values.push(exports.IndexValue.decode(reader, reader.uint32()));
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
        var message = createBaseGetRequest();
        message.messageName = (_a = object.messageName) !== null && _a !== void 0 ? _a : "";
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : "";
        message.values = ((_c = object.values) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.IndexValue.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGetRequest();
        if (object.message_name !== undefined && object.message_name !== null) {
            message.messageName = object.message_name;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.IndexValue.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.message_name = message.messageName === "" ? undefined : message.messageName;
        obj.index = message.index === "" ? undefined : message.index;
        if (message.values) {
            obj.values = message.values.map(function (e) { return e ? exports.IndexValue.toAmino(e) : undefined; });
        }
        else {
            obj.values = message.values;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GetRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GetRequest",
            value: exports.GetRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GetRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.GetRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
            value: exports.GetRequest.encode(message).finish()
        };
    }
};
function createBaseGetResponse() {
    return {
        result: undefined
    };
}
exports.GetResponse = {
    typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.result !== undefined) {
            any_1.Any.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGetResponse();
        message.result = object.result !== undefined && object.result !== null ? any_1.Any.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGetResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = any_1.Any.fromAmino(object.result);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.result = message.result ? any_1.Any.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GetResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GetResponse",
            value: exports.GetResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GetResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.GetResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
            value: exports.GetResponse.encode(message).finish()
        };
    }
};
function createBaseListRequest() {
    return {
        messageName: "",
        index: "",
        prefix: undefined,
        range: undefined,
        pagination: undefined
    };
}
exports.ListRequest = {
    typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.messageName !== "") {
            writer.uint32(10).string(message.messageName);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.prefix !== undefined) {
            exports.ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
        }
        if (message.range !== undefined) {
            exports.ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageName = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.prefix = exports.ListRequest_Prefix.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.range = exports.ListRequest_Range.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        var message = createBaseListRequest();
        message.messageName = (_a = object.messageName) !== null && _a !== void 0 ? _a : "";
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : "";
        message.prefix = object.prefix !== undefined && object.prefix !== null ? exports.ListRequest_Prefix.fromPartial(object.prefix) : undefined;
        message.range = object.range !== undefined && object.range !== null ? exports.ListRequest_Range.fromPartial(object.range) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseListRequest();
        if (object.message_name !== undefined && object.message_name !== null) {
            message.messageName = object.message_name;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = exports.ListRequest_Prefix.fromAmino(object.prefix);
        }
        if (object.range !== undefined && object.range !== null) {
            message.range = exports.ListRequest_Range.fromAmino(object.range);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.message_name = message.messageName === "" ? undefined : message.messageName;
        obj.index = message.index === "" ? undefined : message.index;
        obj.prefix = message.prefix ? exports.ListRequest_Prefix.toAmino(message.prefix) : undefined;
        obj.range = message.range ? exports.ListRequest_Range.toAmino(message.range) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListRequest",
            value: exports.ListRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
            value: exports.ListRequest.encode(message).finish()
        };
    }
};
function createBaseListRequest_Prefix() {
    return {
        values: []
    };
}
exports.ListRequest_Prefix = {
    typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.values; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListRequest_Prefix();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(exports.IndexValue.decode(reader, reader.uint32()));
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
        var message = createBaseListRequest_Prefix();
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.IndexValue.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseListRequest_Prefix();
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.IndexValue.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.values) {
            obj.values = message.values.map(function (e) { return e ? exports.IndexValue.toAmino(e) : undefined; });
        }
        else {
            obj.values = message.values;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListRequest_Prefix.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Prefix",
            value: exports.ListRequest_Prefix.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListRequest_Prefix.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListRequest_Prefix.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
            value: exports.ListRequest_Prefix.encode(message).finish()
        };
    }
};
function createBaseListRequest_Range() {
    return {
        start: [],
        end: []
    };
}
exports.ListRequest_Range = {
    typeUrl: "/cosmos.orm.query.v1alpha1.Range",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.start; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.end; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.IndexValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListRequest_Range();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start.push(exports.IndexValue.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.end.push(exports.IndexValue.decode(reader, reader.uint32()));
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
        var message = createBaseListRequest_Range();
        message.start = ((_a = object.start) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.IndexValue.fromPartial(e); })) || [];
        message.end = ((_b = object.end) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.IndexValue.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseListRequest_Range();
        message.start = ((_a = object.start) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.IndexValue.fromAmino(e); })) || [];
        message.end = ((_b = object.end) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.IndexValue.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.start) {
            obj.start = message.start.map(function (e) { return e ? exports.IndexValue.toAmino(e) : undefined; });
        }
        else {
            obj.start = message.start;
        }
        if (message.end) {
            obj.end = message.end.map(function (e) { return e ? exports.IndexValue.toAmino(e) : undefined; });
        }
        else {
            obj.end = message.end;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListRequest_Range.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Range",
            value: exports.ListRequest_Range.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListRequest_Range.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListRequest_Range.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.Range",
            value: exports.ListRequest_Range.encode(message).finish()
        };
    }
};
function createBaseListResponse() {
    return {
        results: [],
        pagination: undefined
    };
}
exports.ListResponse = {
    typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.results; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseListResponse();
        message.results = ((_a = object.results) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseListResponse();
        message.results = ((_a = object.results) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.results) {
            obj.results = message.results.map(function (e) { return e ? any_1.Any.toAmino(e) : undefined; });
        }
        else {
            obj.results = message.results;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListResponse",
            value: exports.ListResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
            value: exports.ListResponse.encode(message).finish()
        };
    }
};
function createBaseIndexValue() {
    return {
        uint: undefined,
        int: undefined,
        str: undefined,
        bytes: undefined,
        "enum": undefined,
        bool: undefined,
        timestamp: undefined,
        duration: undefined
    };
}
exports.IndexValue = {
    typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.uint !== undefined) {
            writer.uint32(8).uint64(message.uint);
        }
        if (message.int !== undefined) {
            writer.uint32(16).int64(message.int);
        }
        if (message.str !== undefined) {
            writer.uint32(26).string(message.str);
        }
        if (message.bytes !== undefined) {
            writer.uint32(34).bytes(message.bytes);
        }
        if (message["enum"] !== undefined) {
            writer.uint32(42).string(message["enum"]);
        }
        if (message.bool !== undefined) {
            writer.uint32(48).bool(message.bool);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(58).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIndexValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uint = reader.uint64();
                    break;
                case 2:
                    message.int = reader.int64();
                    break;
                case 3:
                    message.str = reader.string();
                    break;
                case 4:
                    message.bytes = reader.bytes();
                    break;
                case 5:
                    message["enum"] = reader.string();
                    break;
                case 6:
                    message.bool = reader.bool();
                    break;
                case 7:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
        var message = createBaseIndexValue();
        message.uint = object.uint !== undefined && object.uint !== null ? BigInt(object.uint.toString()) : undefined;
        message.int = object.int !== undefined && object.int !== null ? BigInt(object.int.toString()) : undefined;
        message.str = (_a = object.str) !== null && _a !== void 0 ? _a : undefined;
        message.bytes = (_b = object.bytes) !== null && _b !== void 0 ? _b : undefined;
        message["enum"] = (_c = object["enum"]) !== null && _c !== void 0 ? _c : undefined;
        message.bool = (_d = object.bool) !== null && _d !== void 0 ? _d : undefined;
        message.timestamp = (_e = object.timestamp) !== null && _e !== void 0 ? _e : undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseIndexValue();
        if (object.uint !== undefined && object.uint !== null) {
            message.uint = BigInt(object.uint);
        }
        if (object.int !== undefined && object.int !== null) {
            message.int = BigInt(object.int);
        }
        if (object.str !== undefined && object.str !== null) {
            message.str = object.str;
        }
        if (object.bytes !== undefined && object.bytes !== null) {
            message.bytes = (0, helpers_1.bytesFromBase64)(object.bytes);
        }
        if (object["enum"] !== undefined && object["enum"] !== null) {
            message["enum"] = object["enum"];
        }
        if (object.bool !== undefined && object.bool !== null) {
            message.bool = object.bool;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.uint = message.uint !== BigInt(0) ? ((_a = message.uint) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.int = message.int !== BigInt(0) ? ((_b = message.int) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.str = message.str === null ? undefined : message.str;
        obj.bytes = message.bytes ? (0, helpers_1.base64FromBytes)(message.bytes) : undefined;
        obj["enum"] = message["enum"] === null ? undefined : message["enum"];
        obj.bool = message.bool === null ? undefined : message.bool;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.IndexValue.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/IndexValue",
            value: exports.IndexValue.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.IndexValue.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexValue.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
            value: exports.IndexValue.encode(message).finish()
        };
    }
};
