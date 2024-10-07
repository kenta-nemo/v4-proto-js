"use strict";
exports.__esModule = true;
exports.ListImplementationsResponse = exports.ListImplementationsRequest = exports.ListAllInterfacesResponse = exports.ListAllInterfacesRequest = void 0;
var binary_1 = require("../../../../binary");
function createBaseListAllInterfacesRequest() {
    return {};
}
exports.ListAllInterfacesRequest = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListAllInterfacesRequest();
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
        var message = createBaseListAllInterfacesRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseListAllInterfacesRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListAllInterfacesRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListAllInterfacesRequest",
            value: exports.ListAllInterfacesRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListAllInterfacesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListAllInterfacesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
            value: exports.ListAllInterfacesRequest.encode(message).finish()
        };
    }
};
function createBaseListAllInterfacesResponse() {
    return {
        interfaceNames: []
    };
}
exports.ListAllInterfacesResponse = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.interfaceNames; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListAllInterfacesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceNames.push(reader.string());
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
        var message = createBaseListAllInterfacesResponse();
        message.interfaceNames = ((_a = object.interfaceNames) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseListAllInterfacesResponse();
        message.interfaceNames = ((_a = object.interface_names) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.interfaceNames) {
            obj.interface_names = message.interfaceNames.map(function (e) { return e; });
        }
        else {
            obj.interface_names = message.interfaceNames;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListAllInterfacesResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListAllInterfacesResponse",
            value: exports.ListAllInterfacesResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListAllInterfacesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListAllInterfacesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
            value: exports.ListAllInterfacesResponse.encode(message).finish()
        };
    }
};
function createBaseListImplementationsRequest() {
    return {
        interfaceName: ""
    };
}
exports.ListImplementationsRequest = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.interfaceName !== "") {
            writer.uint32(10).string(message.interfaceName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListImplementationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceName = reader.string();
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
        var message = createBaseListImplementationsRequest();
        message.interfaceName = (_a = object.interfaceName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseListImplementationsRequest();
        if (object.interface_name !== undefined && object.interface_name !== null) {
            message.interfaceName = object.interface_name;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.interface_name = message.interfaceName === "" ? undefined : message.interfaceName;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListImplementationsRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListImplementationsRequest",
            value: exports.ListImplementationsRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListImplementationsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListImplementationsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
            value: exports.ListImplementationsRequest.encode(message).finish()
        };
    }
};
function createBaseListImplementationsResponse() {
    return {
        implementationMessageNames: []
    };
}
exports.ListImplementationsResponse = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.implementationMessageNames; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListImplementationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.implementationMessageNames.push(reader.string());
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
        var message = createBaseListImplementationsResponse();
        message.implementationMessageNames = ((_a = object.implementationMessageNames) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseListImplementationsResponse();
        message.implementationMessageNames = ((_a = object.implementation_message_names) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.implementationMessageNames) {
            obj.implementation_message_names = message.implementationMessageNames.map(function (e) { return e; });
        }
        else {
            obj.implementation_message_names = message.implementationMessageNames;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListImplementationsResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ListImplementationsResponse",
            value: exports.ListImplementationsResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ListImplementationsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListImplementationsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
            value: exports.ListImplementationsResponse.encode(message).finish()
        };
    }
};
