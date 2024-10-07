"use strict";
exports.__esModule = true;
exports.MsgResetCircuitBreakerResponse = exports.MsgResetCircuitBreaker = exports.MsgTripCircuitBreakerResponse = exports.MsgTripCircuitBreaker = exports.MsgAuthorizeCircuitBreakerResponse = exports.MsgAuthorizeCircuitBreaker = void 0;
var types_1 = require("./types");
var binary_1 = require("../../../binary");
function createBaseMsgAuthorizeCircuitBreaker() {
    return {
        granter: "",
        grantee: "",
        permissions: undefined
    };
}
exports.MsgAuthorizeCircuitBreaker = {
    typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.permissions !== undefined) {
            types_1.Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAuthorizeCircuitBreaker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.permissions = types_1.Permissions.decode(reader, reader.uint32());
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
        var message = createBaseMsgAuthorizeCircuitBreaker();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        message.permissions = object.permissions !== undefined && object.permissions !== null ? types_1.Permissions.fromPartial(object.permissions) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgAuthorizeCircuitBreaker();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = types_1.Permissions.fromAmino(object.permissions);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.permissions = message.permissions ? types_1.Permissions.toAmino(message.permissions) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgAuthorizeCircuitBreaker.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
            value: exports.MsgAuthorizeCircuitBreaker.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgAuthorizeCircuitBreaker.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgAuthorizeCircuitBreaker.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
            value: exports.MsgAuthorizeCircuitBreaker.encode(message).finish()
        };
    }
};
function createBaseMsgAuthorizeCircuitBreakerResponse() {
    return {
        success: false
    };
}
exports.MsgAuthorizeCircuitBreakerResponse = {
    typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAuthorizeCircuitBreakerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
        var message = createBaseMsgAuthorizeCircuitBreakerResponse();
        message.success = (_a = object.success) !== null && _a !== void 0 ? _a : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgAuthorizeCircuitBreakerResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgAuthorizeCircuitBreakerResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse",
            value: exports.MsgAuthorizeCircuitBreakerResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgAuthorizeCircuitBreakerResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgAuthorizeCircuitBreakerResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
            value: exports.MsgAuthorizeCircuitBreakerResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTripCircuitBreaker() {
    return {
        authority: "",
        msgTypeUrls: []
    };
}
exports.MsgTripCircuitBreaker = {
    typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (var _i = 0, _a = message.msgTypeUrls; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgTripCircuitBreaker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.msgTypeUrls.push(reader.string());
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
        var message = createBaseMsgTripCircuitBreaker();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.msgTypeUrls = ((_b = object.msgTypeUrls) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgTripCircuitBreaker();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        message.msgTypeUrls = ((_a = object.msg_type_urls) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        if (message.msgTypeUrls) {
            obj.msg_type_urls = message.msgTypeUrls.map(function (e) { return e; });
        }
        else {
            obj.msg_type_urls = message.msgTypeUrls;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgTripCircuitBreaker.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgTripCircuitBreaker",
            value: exports.MsgTripCircuitBreaker.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgTripCircuitBreaker.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgTripCircuitBreaker.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
            value: exports.MsgTripCircuitBreaker.encode(message).finish()
        };
    }
};
function createBaseMsgTripCircuitBreakerResponse() {
    return {
        success: false
    };
}
exports.MsgTripCircuitBreakerResponse = {
    typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgTripCircuitBreakerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
        var message = createBaseMsgTripCircuitBreakerResponse();
        message.success = (_a = object.success) !== null && _a !== void 0 ? _a : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgTripCircuitBreakerResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgTripCircuitBreakerResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgTripCircuitBreakerResponse",
            value: exports.MsgTripCircuitBreakerResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgTripCircuitBreakerResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgTripCircuitBreakerResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
            value: exports.MsgTripCircuitBreakerResponse.encode(message).finish()
        };
    }
};
function createBaseMsgResetCircuitBreaker() {
    return {
        authority: "",
        msgTypeUrls: []
    };
}
exports.MsgResetCircuitBreaker = {
    typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (var _i = 0, _a = message.msgTypeUrls; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgResetCircuitBreaker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 3:
                    message.msgTypeUrls.push(reader.string());
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
        var message = createBaseMsgResetCircuitBreaker();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.msgTypeUrls = ((_b = object.msgTypeUrls) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgResetCircuitBreaker();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        message.msgTypeUrls = ((_a = object.msg_type_urls) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        if (message.msgTypeUrls) {
            obj.msg_type_urls = message.msgTypeUrls.map(function (e) { return e; });
        }
        else {
            obj.msg_type_urls = message.msgTypeUrls;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgResetCircuitBreaker.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgResetCircuitBreaker",
            value: exports.MsgResetCircuitBreaker.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgResetCircuitBreaker.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgResetCircuitBreaker.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
            value: exports.MsgResetCircuitBreaker.encode(message).finish()
        };
    }
};
function createBaseMsgResetCircuitBreakerResponse() {
    return {
        success: false
    };
}
exports.MsgResetCircuitBreakerResponse = {
    typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgResetCircuitBreakerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
        var message = createBaseMsgResetCircuitBreakerResponse();
        message.success = (_a = object.success) !== null && _a !== void 0 ? _a : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgResetCircuitBreakerResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgResetCircuitBreakerResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgResetCircuitBreakerResponse",
            value: exports.MsgResetCircuitBreakerResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgResetCircuitBreakerResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgResetCircuitBreakerResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
            value: exports.MsgResetCircuitBreakerResponse.encode(message).finish()
        };
    }
};
