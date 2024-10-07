"use strict";
exports.__esModule = true;
exports.Subspace = exports.QuerySubspacesResponse = exports.QuerySubspacesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
var params_1 = require("./params");
var binary_1 = require("../../../binary");
function createBaseQueryParamsRequest() {
    return {
        subspace: "",
        key: ""
    };
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
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
        var message = createBaseQueryParamsRequest();
        message.subspace = (_a = object.subspace) !== null && _a !== void 0 ? _a : "";
        message.key = (_b = object.key) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryParamsRequest();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subspace = message.subspace === "" ? undefined : message.subspace;
        obj.key = message.key === "" ? undefined : message.key;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        param: params_1.ParamChange.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.param !== undefined) {
            params_1.ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.param = params_1.ParamChange.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.param = object.param !== undefined && object.param !== null ? params_1.ParamChange.fromPartial(object.param) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryParamsResponse();
        if (object.param !== undefined && object.param !== null) {
            message.param = params_1.ParamChange.fromAmino(object.param);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.param = message.param ? params_1.ParamChange.toAmino(message.param) : params_1.ParamChange.toAmino(params_1.ParamChange.fromPartial({}));
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubspacesRequest() {
    return {};
}
exports.QuerySubspacesRequest = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySubspacesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQuerySubspacesRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQuerySubspacesRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QuerySubspacesRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/QuerySubspacesRequest",
            value: exports.QuerySubspacesRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.QuerySubspacesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QuerySubspacesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
            value: exports.QuerySubspacesRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubspacesResponse() {
    return {
        subspaces: []
    };
}
exports.QuerySubspacesResponse = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.subspaces; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Subspace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySubspacesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspaces.push(exports.Subspace.decode(reader, reader.uint32()));
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
        var message = createBaseQuerySubspacesResponse();
        message.subspaces = ((_a = object.subspaces) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Subspace.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQuerySubspacesResponse();
        message.subspaces = ((_a = object.subspaces) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Subspace.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(function (e) { return e ? exports.Subspace.toAmino(e) : undefined; });
        }
        else {
            obj.subspaces = message.subspaces;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QuerySubspacesResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/QuerySubspacesResponse",
            value: exports.QuerySubspacesResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.QuerySubspacesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QuerySubspacesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
            value: exports.QuerySubspacesResponse.encode(message).finish()
        };
    }
};
function createBaseSubspace() {
    return {
        subspace: "",
        keys: []
    };
}
exports.Subspace = {
    typeUrl: "/cosmos.params.v1beta1.Subspace",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        for (var _i = 0, _a = message.keys; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubspace();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.keys.push(reader.string());
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
        var message = createBaseSubspace();
        message.subspace = (_a = object.subspace) !== null && _a !== void 0 ? _a : "";
        message.keys = ((_b = object.keys) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseSubspace();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subspace = message.subspace === "" ? undefined : message.subspace;
        if (message.keys) {
            obj.keys = message.keys.map(function (e) { return e; });
        }
        else {
            obj.keys = message.keys;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Subspace.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Subspace",
            value: exports.Subspace.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Subspace.decode(message.value);
    },
    toProto: function (message) {
        return exports.Subspace.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.Subspace",
            value: exports.Subspace.encode(message).finish()
        };
    }
};
