"use strict";
exports.__esModule = true;
exports.QueryConfigResponse = exports.QueryConfigRequest = void 0;
var config_1 = require("./config");
var binary_1 = require("../../../binary");
function createBaseQueryConfigRequest() {
    return {};
}
exports.QueryConfigRequest = {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConfigRequest();
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
        var message = createBaseQueryConfigRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryConfigRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryConfigRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/QueryConfigRequest",
            value: exports.QueryConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.QueryConfigRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryConfigRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
            value: exports.QueryConfigRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConfigResponse() {
    return {
        config: undefined
    };
}
exports.QueryConfigResponse = {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.config !== undefined) {
            config_1.Config.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConfigResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = config_1.Config.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryConfigResponse();
        message.config = object.config !== undefined && object.config !== null ? config_1.Config.fromPartial(object.config) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryConfigResponse();
        if (object.config !== undefined && object.config !== null) {
            message.config = config_1.Config.fromAmino(object.config);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.config = message.config ? config_1.Config.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryConfigResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/QueryConfigResponse",
            value: exports.QueryConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.QueryConfigResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryConfigResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
            value: exports.QueryConfigResponse.encode(message).finish()
        };
    }
};
