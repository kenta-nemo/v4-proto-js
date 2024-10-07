"use strict";
exports.__esModule = true;
exports.CustomHttpPattern = exports.HttpRule = exports.Http = void 0;
var binary_1 = require("../../binary");
function createBaseHttp() {
    return {
        rules: [],
        fullyDecodeReservedExpansion: false
    };
}
exports.Http = {
    typeUrl: "/google.api.Http",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.rules; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fullyDecodeReservedExpansion === true) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHttp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(exports.HttpRule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fullyDecodeReservedExpansion = reader.bool();
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
        var message = createBaseHttp();
        message.rules = ((_a = object.rules) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.HttpRule.fromPartial(e); })) || [];
        message.fullyDecodeReservedExpansion = (_b = object.fullyDecodeReservedExpansion) !== null && _b !== void 0 ? _b : false;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseHttp();
        message.rules = ((_a = object.rules) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.HttpRule.fromAmino(e); })) || [];
        if (object.fully_decode_reserved_expansion !== undefined && object.fully_decode_reserved_expansion !== null) {
            message.fullyDecodeReservedExpansion = object.fully_decode_reserved_expansion;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.rules) {
            obj.rules = message.rules.map(function (e) { return e ? exports.HttpRule.toAmino(e) : undefined; });
        }
        else {
            obj.rules = message.rules;
        }
        obj.fully_decode_reserved_expansion = message.fullyDecodeReservedExpansion === false ? undefined : message.fullyDecodeReservedExpansion;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Http.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Http.decode(message.value);
    },
    toProto: function (message) {
        return exports.Http.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.api.Http",
            value: exports.Http.encode(message).finish()
        };
    }
};
function createBaseHttpRule() {
    return {
        selector: "",
        get: undefined,
        put: undefined,
        post: undefined,
        "delete": undefined,
        patch: undefined,
        custom: undefined,
        body: "",
        responseBody: "",
        additionalBindings: []
    };
}
exports.HttpRule = {
    typeUrl: "/google.api.HttpRule",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message["delete"] !== undefined) {
            writer.uint32(42).string(message["delete"]);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            exports.CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== "") {
            writer.uint32(98).string(message.responseBody);
        }
        for (var _i = 0, _a = message.additionalBindings; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHttpRule();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.selector = reader.string();
                    break;
                case 2:
                    message.get = reader.string();
                    break;
                case 3:
                    message.put = reader.string();
                    break;
                case 4:
                    message.post = reader.string();
                    break;
                case 5:
                    message["delete"] = reader.string();
                    break;
                case 6:
                    message.patch = reader.string();
                    break;
                case 8:
                    message.custom = exports.CustomHttpPattern.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.body = reader.string();
                    break;
                case 12:
                    message.responseBody = reader.string();
                    break;
                case 11:
                    message.additionalBindings.push(exports.HttpRule.decode(reader, reader.uint32()));
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
        var message = createBaseHttpRule();
        message.selector = (_a = object.selector) !== null && _a !== void 0 ? _a : "";
        message.get = (_b = object.get) !== null && _b !== void 0 ? _b : undefined;
        message.put = (_c = object.put) !== null && _c !== void 0 ? _c : undefined;
        message.post = (_d = object.post) !== null && _d !== void 0 ? _d : undefined;
        message["delete"] = (_e = object["delete"]) !== null && _e !== void 0 ? _e : undefined;
        message.patch = (_f = object.patch) !== null && _f !== void 0 ? _f : undefined;
        message.custom = object.custom !== undefined && object.custom !== null ? exports.CustomHttpPattern.fromPartial(object.custom) : undefined;
        message.body = (_g = object.body) !== null && _g !== void 0 ? _g : "";
        message.responseBody = (_h = object.responseBody) !== null && _h !== void 0 ? _h : "";
        message.additionalBindings = ((_j = object.additionalBindings) === null || _j === void 0 ? void 0 : _j.map(function (e) { return exports.HttpRule.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseHttpRule();
        if (object.selector !== undefined && object.selector !== null) {
            message.selector = object.selector;
        }
        if (object.get !== undefined && object.get !== null) {
            message.get = object.get;
        }
        if (object.put !== undefined && object.put !== null) {
            message.put = object.put;
        }
        if (object.post !== undefined && object.post !== null) {
            message.post = object.post;
        }
        if (object["delete"] !== undefined && object["delete"] !== null) {
            message["delete"] = object["delete"];
        }
        if (object.patch !== undefined && object.patch !== null) {
            message.patch = object.patch;
        }
        if (object.custom !== undefined && object.custom !== null) {
            message.custom = exports.CustomHttpPattern.fromAmino(object.custom);
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        }
        if (object.response_body !== undefined && object.response_body !== null) {
            message.responseBody = object.response_body;
        }
        message.additionalBindings = ((_a = object.additional_bindings) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.HttpRule.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.selector = message.selector === "" ? undefined : message.selector;
        obj.get = message.get === null ? undefined : message.get;
        obj.put = message.put === null ? undefined : message.put;
        obj.post = message.post === null ? undefined : message.post;
        obj["delete"] = message["delete"] === null ? undefined : message["delete"];
        obj.patch = message.patch === null ? undefined : message.patch;
        obj.custom = message.custom ? exports.CustomHttpPattern.toAmino(message.custom) : undefined;
        obj.body = message.body === "" ? undefined : message.body;
        obj.response_body = message.responseBody === "" ? undefined : message.responseBody;
        if (message.additionalBindings) {
            obj.additional_bindings = message.additionalBindings.map(function (e) { return e ? exports.HttpRule.toAmino(e) : undefined; });
        }
        else {
            obj.additional_bindings = message.additionalBindings;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.HttpRule.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.HttpRule.decode(message.value);
    },
    toProto: function (message) {
        return exports.HttpRule.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.api.HttpRule",
            value: exports.HttpRule.encode(message).finish()
        };
    }
};
function createBaseCustomHttpPattern() {
    return {
        kind: "",
        path: ""
    };
}
exports.CustomHttpPattern = {
    typeUrl: "/google.api.CustomHttpPattern",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCustomHttpPattern();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
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
        var message = createBaseCustomHttpPattern();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseCustomHttpPattern();
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = object.kind;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.kind = message.kind === "" ? undefined : message.kind;
        obj.path = message.path === "" ? undefined : message.path;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.CustomHttpPattern.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.CustomHttpPattern.decode(message.value);
    },
    toProto: function (message) {
        return exports.CustomHttpPattern.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.api.CustomHttpPattern",
            value: exports.CustomHttpPattern.encode(message).finish()
        };
    }
};
