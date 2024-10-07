"use strict";
exports.__esModule = true;
exports.MsgUpdateSafetyParamsResponse = exports.MsgUpdateSafetyParams = exports.MsgUpdateProposeParamsResponse = exports.MsgUpdateProposeParams = exports.MsgUpdateEventParamsResponse = exports.MsgUpdateEventParams = exports.MsgCompleteBridgeResponse = exports.MsgCompleteBridge = exports.MsgAcknowledgeBridgesResponse = exports.MsgAcknowledgeBridges = void 0;
var bridge_event_1 = require("./bridge_event");
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseMsgAcknowledgeBridges() {
    return {
        events: []
    };
}
exports.MsgAcknowledgeBridges = {
    typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridges",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            bridge_event_1.BridgeEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAcknowledgeBridges();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(bridge_event_1.BridgeEvent.decode(reader, reader.uint32()));
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
        var message = createBaseMsgAcknowledgeBridges();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bridge_event_1.BridgeEvent.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgAcknowledgeBridges();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bridge_event_1.BridgeEvent.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? bridge_event_1.BridgeEvent.toAmino(e) : undefined; });
        }
        else {
            obj.events = message.events;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgAcknowledgeBridges.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgAcknowledgeBridges.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgAcknowledgeBridges.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridges",
            value: exports.MsgAcknowledgeBridges.encode(message).finish()
        };
    }
};
function createBaseMsgAcknowledgeBridgesResponse() {
    return {};
}
exports.MsgAcknowledgeBridgesResponse = {
    typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridgesResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAcknowledgeBridgesResponse();
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
        var message = createBaseMsgAcknowledgeBridgesResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgAcknowledgeBridgesResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgAcknowledgeBridgesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgAcknowledgeBridgesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgAcknowledgeBridgesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridgesResponse",
            value: exports.MsgAcknowledgeBridgesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCompleteBridge() {
    return {
        authority: "",
        event: bridge_event_1.BridgeEvent.fromPartial({})
    };
}
exports.MsgCompleteBridge = {
    typeUrl: "/nemo_network.bridge.MsgCompleteBridge",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.event !== undefined) {
            bridge_event_1.BridgeEvent.encode(message.event, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCompleteBridge();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.event = bridge_event_1.BridgeEvent.decode(reader, reader.uint32());
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
        var message = createBaseMsgCompleteBridge();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.event = object.event !== undefined && object.event !== null ? bridge_event_1.BridgeEvent.fromPartial(object.event) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgCompleteBridge();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.event !== undefined && object.event !== null) {
            message.event = bridge_event_1.BridgeEvent.fromAmino(object.event);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.event = message.event ? bridge_event_1.BridgeEvent.toAmino(message.event) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCompleteBridge.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCompleteBridge.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCompleteBridge.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgCompleteBridge",
            value: exports.MsgCompleteBridge.encode(message).finish()
        };
    }
};
function createBaseMsgCompleteBridgeResponse() {
    return {};
}
exports.MsgCompleteBridgeResponse = {
    typeUrl: "/nemo_network.bridge.MsgCompleteBridgeResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCompleteBridgeResponse();
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
        var message = createBaseMsgCompleteBridgeResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCompleteBridgeResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCompleteBridgeResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCompleteBridgeResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCompleteBridgeResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgCompleteBridgeResponse",
            value: exports.MsgCompleteBridgeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateEventParams() {
    return {
        authority: "",
        params: params_1.EventParams.fromPartial({})
    };
}
exports.MsgUpdateEventParams = {
    typeUrl: "/nemo_network.bridge.MsgUpdateEventParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.EventParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateEventParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgUpdateEventParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? params_1.EventParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateEventParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.EventParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? params_1.EventParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateEventParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateEventParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateEventParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgUpdateEventParams",
            value: exports.MsgUpdateEventParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateEventParamsResponse() {
    return {};
}
exports.MsgUpdateEventParamsResponse = {
    typeUrl: "/nemo_network.bridge.MsgUpdateEventParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateEventParamsResponse();
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
        var message = createBaseMsgUpdateEventParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateEventParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateEventParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateEventParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateEventParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgUpdateEventParamsResponse",
            value: exports.MsgUpdateEventParamsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProposeParams() {
    return {
        authority: "",
        params: params_1.ProposeParams.fromPartial({})
    };
}
exports.MsgUpdateProposeParams = {
    typeUrl: "/nemo_network.bridge.MsgUpdateProposeParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.ProposeParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateProposeParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgUpdateProposeParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? params_1.ProposeParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateProposeParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.ProposeParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? params_1.ProposeParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateProposeParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateProposeParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateProposeParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgUpdateProposeParams",
            value: exports.MsgUpdateProposeParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProposeParamsResponse() {
    return {};
}
exports.MsgUpdateProposeParamsResponse = {
    typeUrl: "/nemo_network.bridge.MsgUpdateProposeParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateProposeParamsResponse();
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
        var message = createBaseMsgUpdateProposeParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateProposeParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateProposeParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateProposeParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateProposeParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgUpdateProposeParamsResponse",
            value: exports.MsgUpdateProposeParamsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateSafetyParams() {
    return {
        authority: "",
        params: params_1.SafetyParams.fromPartial({})
    };
}
exports.MsgUpdateSafetyParams = {
    typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.SafetyParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateSafetyParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgUpdateSafetyParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? params_1.SafetyParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateSafetyParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.SafetyParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? params_1.SafetyParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateSafetyParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateSafetyParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateSafetyParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParams",
            value: exports.MsgUpdateSafetyParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateSafetyParamsResponse() {
    return {};
}
exports.MsgUpdateSafetyParamsResponse = {
    typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateSafetyParamsResponse();
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
        var message = createBaseMsgUpdateSafetyParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateSafetyParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateSafetyParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateSafetyParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateSafetyParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParamsResponse",
            value: exports.MsgUpdateSafetyParamsResponse.encode(message).finish()
        };
    }
};
