"use strict";
exports.__esModule = true;
exports.Config = void 0;
var binary_1 = require("../../../../binary");
function createBaseConfig() {
    return {
        skipAnteHandler: false,
        skipPostHandler: false
    };
}
exports.Config = {
    typeUrl: "/cosmos.tx.config.v1.Config",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.skipAnteHandler === true) {
            writer.uint32(8).bool(message.skipAnteHandler);
        }
        if (message.skipPostHandler === true) {
            writer.uint32(16).bool(message.skipPostHandler);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.skipAnteHandler = reader.bool();
                    break;
                case 2:
                    message.skipPostHandler = reader.bool();
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
        var message = createBaseConfig();
        message.skipAnteHandler = (_a = object.skipAnteHandler) !== null && _a !== void 0 ? _a : false;
        message.skipPostHandler = (_b = object.skipPostHandler) !== null && _b !== void 0 ? _b : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseConfig();
        if (object.skip_ante_handler !== undefined && object.skip_ante_handler !== null) {
            message.skipAnteHandler = object.skip_ante_handler;
        }
        if (object.skip_post_handler !== undefined && object.skip_post_handler !== null) {
            message.skipPostHandler = object.skip_post_handler;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.skip_ante_handler = message.skipAnteHandler === false ? undefined : message.skipAnteHandler;
        obj.skip_post_handler = message.skipPostHandler === false ? undefined : message.skipPostHandler;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Config.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Config",
            value: exports.Config.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Config.decode(message.value);
    },
    toProto: function (message) {
        return exports.Config.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.tx.config.v1.Config",
            value: exports.Config.encode(message).finish()
        };
    }
};
