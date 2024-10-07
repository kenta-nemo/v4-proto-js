"use strict";
exports.__esModule = true;
exports.DelayedCompleteBridgeMessage = exports.QueryDelayedCompleteBridgeMessagesResponse = exports.QueryDelayedCompleteBridgeMessagesRequest = exports.QueryRecognizedEventInfoResponse = exports.QueryRecognizedEventInfoRequest = exports.QueryAcknowledgedEventInfoResponse = exports.QueryAcknowledgedEventInfoRequest = exports.QuerySafetyParamsResponse = exports.QuerySafetyParamsRequest = exports.QueryProposeParamsResponse = exports.QueryProposeParamsRequest = exports.QueryEventParamsResponse = exports.QueryEventParamsRequest = void 0;
var params_1 = require("./params");
var bridge_event_info_1 = require("./bridge_event_info");
var tx_1 = require("./tx");
var binary_1 = require("../../binary");
function createBaseQueryEventParamsRequest() {
    return {};
}
exports.QueryEventParamsRequest = {
    typeUrl: "/nemo_network.bridge.QueryEventParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryEventParamsRequest();
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
        var message = createBaseQueryEventParamsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryEventParamsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryEventParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryEventParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryEventParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryEventParamsRequest",
            value: exports.QueryEventParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEventParamsResponse() {
    return {
        params: params_1.EventParams.fromPartial({})
    };
}
exports.QueryEventParamsResponse = {
    typeUrl: "/nemo_network.bridge.QueryEventParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.EventParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryEventParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.EventParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryEventParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.EventParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryEventParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.EventParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.EventParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryEventParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryEventParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryEventParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryEventParamsResponse",
            value: exports.QueryEventParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposeParamsRequest() {
    return {};
}
exports.QueryProposeParamsRequest = {
    typeUrl: "/nemo_network.bridge.QueryProposeParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposeParamsRequest();
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
        var message = createBaseQueryProposeParamsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryProposeParamsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryProposeParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryProposeParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryProposeParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryProposeParamsRequest",
            value: exports.QueryProposeParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposeParamsResponse() {
    return {
        params: params_1.ProposeParams.fromPartial({})
    };
}
exports.QueryProposeParamsResponse = {
    typeUrl: "/nemo_network.bridge.QueryProposeParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.ProposeParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposeParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.ProposeParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryProposeParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.ProposeParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryProposeParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.ProposeParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.ProposeParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryProposeParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryProposeParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryProposeParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryProposeParamsResponse",
            value: exports.QueryProposeParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySafetyParamsRequest() {
    return {};
}
exports.QuerySafetyParamsRequest = {
    typeUrl: "/nemo_network.bridge.QuerySafetyParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySafetyParamsRequest();
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
        var message = createBaseQuerySafetyParamsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQuerySafetyParamsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QuerySafetyParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QuerySafetyParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QuerySafetyParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QuerySafetyParamsRequest",
            value: exports.QuerySafetyParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySafetyParamsResponse() {
    return {
        params: params_1.SafetyParams.fromPartial({})
    };
}
exports.QuerySafetyParamsResponse = {
    typeUrl: "/nemo_network.bridge.QuerySafetyParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.SafetyParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySafetyParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.SafetyParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQuerySafetyParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.SafetyParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQuerySafetyParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.SafetyParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.SafetyParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QuerySafetyParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QuerySafetyParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QuerySafetyParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QuerySafetyParamsResponse",
            value: exports.QuerySafetyParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAcknowledgedEventInfoRequest() {
    return {};
}
exports.QueryAcknowledgedEventInfoRequest = {
    typeUrl: "/nemo_network.bridge.QueryAcknowledgedEventInfoRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAcknowledgedEventInfoRequest();
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
        var message = createBaseQueryAcknowledgedEventInfoRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryAcknowledgedEventInfoRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAcknowledgedEventInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAcknowledgedEventInfoRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAcknowledgedEventInfoRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryAcknowledgedEventInfoRequest",
            value: exports.QueryAcknowledgedEventInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAcknowledgedEventInfoResponse() {
    return {
        info: bridge_event_info_1.BridgeEventInfo.fromPartial({})
    };
}
exports.QueryAcknowledgedEventInfoResponse = {
    typeUrl: "/nemo_network.bridge.QueryAcknowledgedEventInfoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.info !== undefined) {
            bridge_event_info_1.BridgeEventInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAcknowledgedEventInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = bridge_event_info_1.BridgeEventInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAcknowledgedEventInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? bridge_event_info_1.BridgeEventInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAcknowledgedEventInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = bridge_event_info_1.BridgeEventInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.info = message.info ? bridge_event_info_1.BridgeEventInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAcknowledgedEventInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAcknowledgedEventInfoResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAcknowledgedEventInfoResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryAcknowledgedEventInfoResponse",
            value: exports.QueryAcknowledgedEventInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRecognizedEventInfoRequest() {
    return {};
}
exports.QueryRecognizedEventInfoRequest = {
    typeUrl: "/nemo_network.bridge.QueryRecognizedEventInfoRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryRecognizedEventInfoRequest();
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
        var message = createBaseQueryRecognizedEventInfoRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryRecognizedEventInfoRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryRecognizedEventInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryRecognizedEventInfoRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryRecognizedEventInfoRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryRecognizedEventInfoRequest",
            value: exports.QueryRecognizedEventInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRecognizedEventInfoResponse() {
    return {
        info: bridge_event_info_1.BridgeEventInfo.fromPartial({})
    };
}
exports.QueryRecognizedEventInfoResponse = {
    typeUrl: "/nemo_network.bridge.QueryRecognizedEventInfoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.info !== undefined) {
            bridge_event_info_1.BridgeEventInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryRecognizedEventInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = bridge_event_info_1.BridgeEventInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryRecognizedEventInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? bridge_event_info_1.BridgeEventInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryRecognizedEventInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = bridge_event_info_1.BridgeEventInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.info = message.info ? bridge_event_info_1.BridgeEventInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryRecognizedEventInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryRecognizedEventInfoResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryRecognizedEventInfoResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryRecognizedEventInfoResponse",
            value: exports.QueryRecognizedEventInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelayedCompleteBridgeMessagesRequest() {
    return {
        address: ""
    };
}
exports.QueryDelayedCompleteBridgeMessagesRequest = {
    typeUrl: "/nemo_network.bridge.QueryDelayedCompleteBridgeMessagesRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelayedCompleteBridgeMessagesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        var message = createBaseQueryDelayedCompleteBridgeMessagesRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryDelayedCompleteBridgeMessagesRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryDelayedCompleteBridgeMessagesRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryDelayedCompleteBridgeMessagesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryDelayedCompleteBridgeMessagesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryDelayedCompleteBridgeMessagesRequest",
            value: exports.QueryDelayedCompleteBridgeMessagesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelayedCompleteBridgeMessagesResponse() {
    return {
        messages: []
    };
}
exports.QueryDelayedCompleteBridgeMessagesResponse = {
    typeUrl: "/nemo_network.bridge.QueryDelayedCompleteBridgeMessagesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DelayedCompleteBridgeMessage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelayedCompleteBridgeMessagesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(exports.DelayedCompleteBridgeMessage.decode(reader, reader.uint32()));
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
        var message = createBaseQueryDelayedCompleteBridgeMessagesResponse();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DelayedCompleteBridgeMessage.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryDelayedCompleteBridgeMessagesResponse();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DelayedCompleteBridgeMessage.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(function (e) { return e ? exports.DelayedCompleteBridgeMessage.toAmino(e) : undefined; });
        }
        else {
            obj.messages = message.messages;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryDelayedCompleteBridgeMessagesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryDelayedCompleteBridgeMessagesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryDelayedCompleteBridgeMessagesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.QueryDelayedCompleteBridgeMessagesResponse",
            value: exports.QueryDelayedCompleteBridgeMessagesResponse.encode(message).finish()
        };
    }
};
function createBaseDelayedCompleteBridgeMessage() {
    return {
        message: tx_1.MsgCompleteBridge.fromPartial({}),
        blockHeight: 0
    };
}
exports.DelayedCompleteBridgeMessage = {
    typeUrl: "/nemo_network.bridge.DelayedCompleteBridgeMessage",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.message !== undefined) {
            tx_1.MsgCompleteBridge.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockHeight !== 0) {
            writer.uint32(16).uint32(message.blockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelayedCompleteBridgeMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = tx_1.MsgCompleteBridge.decode(reader, reader.uint32());
                    break;
                case 2:
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
        var message = createBaseDelayedCompleteBridgeMessage();
        message.message = object.message !== undefined && object.message !== null ? tx_1.MsgCompleteBridge.fromPartial(object.message) : undefined;
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDelayedCompleteBridgeMessage();
        if (object.message !== undefined && object.message !== null) {
            message.message = tx_1.MsgCompleteBridge.fromAmino(object.message);
        }
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.message = message.message ? tx_1.MsgCompleteBridge.toAmino(message.message) : undefined;
        obj.block_height = message.blockHeight === 0 ? undefined : message.blockHeight;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DelayedCompleteBridgeMessage.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DelayedCompleteBridgeMessage.decode(message.value);
    },
    toProto: function (message) {
        return exports.DelayedCompleteBridgeMessage.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.DelayedCompleteBridgeMessage",
            value: exports.DelayedCompleteBridgeMessage.encode(message).finish()
        };
    }
};
