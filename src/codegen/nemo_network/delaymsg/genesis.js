"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var delayed_message_1 = require("./delayed_message");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        delayedMessages: [],
        nextDelayedMessageId: 0
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.delaymsg.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.delayedMessages; _i < _a.length; _i++) {
            var v = _a[_i];
            delayed_message_1.DelayedMessage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextDelayedMessageId !== 0) {
            writer.uint32(16).uint32(message.nextDelayedMessageId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delayedMessages.push(delayed_message_1.DelayedMessage.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        var _a, _b;
        var message = createBaseGenesisState();
        message.delayedMessages = ((_a = object.delayedMessages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return delayed_message_1.DelayedMessage.fromPartial(e); })) || [];
        message.nextDelayedMessageId = (_b = object.nextDelayedMessageId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.delayedMessages = ((_a = object.delayed_messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return delayed_message_1.DelayedMessage.fromAmino(e); })) || [];
        if (object.next_delayed_message_id !== undefined && object.next_delayed_message_id !== null) {
            message.nextDelayedMessageId = object.next_delayed_message_id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.delayedMessages) {
            obj.delayed_messages = message.delayedMessages.map(function (e) { return e ? delayed_message_1.DelayedMessage.toAmino(e) : undefined; });
        }
        else {
            obj.delayed_messages = message.delayedMessages;
        }
        obj.next_delayed_message_id = message.nextDelayedMessageId === 0 ? undefined : message.nextDelayedMessageId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.delaymsg.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
