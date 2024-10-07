"use strict";
exports.__esModule = true;
exports.FileDescriptorsResponse = exports.FileDescriptorsRequest = void 0;
var descriptor_1 = require("../../../google/protobuf/descriptor");
var binary_1 = require("../../../binary");
function createBaseFileDescriptorsRequest() {
    return {};
}
exports.FileDescriptorsRequest = {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileDescriptorsRequest();
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
        var message = createBaseFileDescriptorsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseFileDescriptorsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FileDescriptorsRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/FileDescriptorsRequest",
            value: exports.FileDescriptorsRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.FileDescriptorsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.FileDescriptorsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
            value: exports.FileDescriptorsRequest.encode(message).finish()
        };
    }
};
function createBaseFileDescriptorsResponse() {
    return {
        files: []
    };
}
exports.FileDescriptorsResponse = {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.files; _i < _a.length; _i++) {
            var v = _a[_i];
            descriptor_1.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileDescriptorsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.files.push(descriptor_1.FileDescriptorProto.decode(reader, reader.uint32()));
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
        var message = createBaseFileDescriptorsResponse();
        message.files = ((_a = object.files) === null || _a === void 0 ? void 0 : _a.map(function (e) { return descriptor_1.FileDescriptorProto.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseFileDescriptorsResponse();
        message.files = ((_a = object.files) === null || _a === void 0 ? void 0 : _a.map(function (e) { return descriptor_1.FileDescriptorProto.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.files) {
            obj.files = message.files.map(function (e) { return e ? descriptor_1.FileDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.files = message.files;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FileDescriptorsResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/FileDescriptorsResponse",
            value: exports.FileDescriptorsResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.FileDescriptorsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.FileDescriptorsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
            value: exports.FileDescriptorsResponse.encode(message).finish()
        };
    }
};
