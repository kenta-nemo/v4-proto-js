"use strict";
exports.__esModule = true;
exports.AddBridgeEventsResponse = exports.AddBridgeEventsRequest = void 0;
var bridge_event_1 = require("../../bridge/bridge_event");
var binary_1 = require("../../../binary");
function createBaseAddBridgeEventsRequest() {
    return {
        bridgeEvents: []
    };
}
exports.AddBridgeEventsRequest = {
    typeUrl: "/nemo_network.daemons.bridge.AddBridgeEventsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.bridgeEvents; _i < _a.length; _i++) {
            var v = _a[_i];
            bridge_event_1.BridgeEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddBridgeEventsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bridgeEvents.push(bridge_event_1.BridgeEvent.decode(reader, reader.uint32()));
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
        var message = createBaseAddBridgeEventsRequest();
        message.bridgeEvents = ((_a = object.bridgeEvents) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bridge_event_1.BridgeEvent.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseAddBridgeEventsRequest();
        message.bridgeEvents = ((_a = object.bridge_events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bridge_event_1.BridgeEvent.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.bridgeEvents) {
            obj.bridge_events = message.bridgeEvents.map(function (e) { return e ? bridge_event_1.BridgeEvent.toAmino(e) : undefined; });
        }
        else {
            obj.bridge_events = message.bridgeEvents;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AddBridgeEventsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AddBridgeEventsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.AddBridgeEventsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.daemons.bridge.AddBridgeEventsRequest",
            value: exports.AddBridgeEventsRequest.encode(message).finish()
        };
    }
};
function createBaseAddBridgeEventsResponse() {
    return {};
}
exports.AddBridgeEventsResponse = {
    typeUrl: "/nemo_network.daemons.bridge.AddBridgeEventsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddBridgeEventsResponse();
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
        var message = createBaseAddBridgeEventsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseAddBridgeEventsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AddBridgeEventsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AddBridgeEventsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.AddBridgeEventsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.daemons.bridge.AddBridgeEventsResponse",
            value: exports.AddBridgeEventsResponse.encode(message).finish()
        };
    }
};
