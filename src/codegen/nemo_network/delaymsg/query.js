"use strict";
exports.__esModule = true;
exports.QueryBlockMessageIdsResponse = exports.QueryBlockMessageIdsRequest = exports.QueryMessageResponse = exports.QueryMessageRequest = exports.QueryNextDelayedMessageIdResponse = exports.QueryNextDelayedMessageIdRequest = void 0;
var delayed_message_1 = require("./delayed_message");
var binary_1 = require("../../binary");
function createBaseQueryNextDelayedMessageIdRequest() {
    return {};
}
exports.QueryNextDelayedMessageIdRequest = {
    typeUrl: "/nemo_network.delaymsg.QueryNextDelayedMessageIdRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryNextDelayedMessageIdRequest();
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
        var message = createBaseQueryNextDelayedMessageIdRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryNextDelayedMessageIdRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryNextDelayedMessageIdRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryNextDelayedMessageIdRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryNextDelayedMessageIdRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.QueryNextDelayedMessageIdRequest",
            value: exports.QueryNextDelayedMessageIdRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNextDelayedMessageIdResponse() {
    return {
        nextDelayedMessageId: 0
    };
}
exports.QueryNextDelayedMessageIdResponse = {
    typeUrl: "/nemo_network.delaymsg.QueryNextDelayedMessageIdResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.nextDelayedMessageId !== 0) {
            writer.uint32(8).uint32(message.nextDelayedMessageId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryNextDelayedMessageIdResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextDelayedMessageId = reader.uint32();
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
        var message = createBaseQueryNextDelayedMessageIdResponse();
        message.nextDelayedMessageId = (_a = object.nextDelayedMessageId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryNextDelayedMessageIdResponse();
        if (object.next_delayed_message_id !== undefined && object.next_delayed_message_id !== null) {
            message.nextDelayedMessageId = object.next_delayed_message_id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.next_delayed_message_id = message.nextDelayedMessageId === 0 ? undefined : message.nextDelayedMessageId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryNextDelayedMessageIdResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryNextDelayedMessageIdResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryNextDelayedMessageIdResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.QueryNextDelayedMessageIdResponse",
            value: exports.QueryNextDelayedMessageIdResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMessageRequest() {
    return {
        id: 0
    };
}
exports.QueryMessageRequest = {
    typeUrl: "/nemo_network.delaymsg.QueryMessageRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
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
        var message = createBaseQueryMessageRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMessageRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMessageRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMessageRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMessageRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.QueryMessageRequest",
            value: exports.QueryMessageRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMessageResponse() {
    return {
        message: undefined
    };
}
exports.QueryMessageResponse = {
    typeUrl: "/nemo_network.delaymsg.QueryMessageResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.message !== undefined) {
            delayed_message_1.DelayedMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMessageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = delayed_message_1.DelayedMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryMessageResponse();
        message.message = object.message !== undefined && object.message !== null ? delayed_message_1.DelayedMessage.fromPartial(object.message) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMessageResponse();
        if (object.message !== undefined && object.message !== null) {
            message.message = delayed_message_1.DelayedMessage.fromAmino(object.message);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.message = message.message ? delayed_message_1.DelayedMessage.toAmino(message.message) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMessageResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMessageResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMessageResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.QueryMessageResponse",
            value: exports.QueryMessageResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBlockMessageIdsRequest() {
    return {
        blockHeight: 0
    };
}
exports.QueryBlockMessageIdsRequest = {
    typeUrl: "/nemo_network.delaymsg.QueryBlockMessageIdsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockHeight !== 0) {
            writer.uint32(8).uint32(message.blockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBlockMessageIdsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint32();
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
        var message = createBaseQueryBlockMessageIdsRequest();
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryBlockMessageIdsRequest();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.block_height = message.blockHeight === 0 ? undefined : message.blockHeight;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryBlockMessageIdsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryBlockMessageIdsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryBlockMessageIdsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.QueryBlockMessageIdsRequest",
            value: exports.QueryBlockMessageIdsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBlockMessageIdsResponse() {
    return {
        messageIds: []
    };
}
exports.QueryBlockMessageIdsResponse = {
    typeUrl: "/nemo_network.delaymsg.QueryBlockMessageIdsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.messageIds; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBlockMessageIdsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.messageIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.messageIds.push(reader.uint32());
                    }
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
        var message = createBaseQueryBlockMessageIdsResponse();
        message.messageIds = ((_a = object.messageIds) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryBlockMessageIdsResponse();
        message.messageIds = ((_a = object.message_ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.messageIds) {
            obj.message_ids = message.messageIds.map(function (e) { return e; });
        }
        else {
            obj.message_ids = message.messageIds;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryBlockMessageIdsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryBlockMessageIdsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryBlockMessageIdsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.QueryBlockMessageIdsResponse",
            value: exports.QueryBlockMessageIdsResponse.encode(message).finish()
        };
    }
};
