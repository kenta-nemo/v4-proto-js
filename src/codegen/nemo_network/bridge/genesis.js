"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var params_1 = require("./params");
var bridge_event_info_1 = require("./bridge_event_info");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        eventParams: params_1.EventParams.fromPartial({}),
        proposeParams: params_1.ProposeParams.fromPartial({}),
        safetyParams: params_1.SafetyParams.fromPartial({}),
        acknowledgedEventInfo: bridge_event_info_1.BridgeEventInfo.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.bridge.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.eventParams !== undefined) {
            params_1.EventParams.encode(message.eventParams, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposeParams !== undefined) {
            params_1.ProposeParams.encode(message.proposeParams, writer.uint32(18).fork()).ldelim();
        }
        if (message.safetyParams !== undefined) {
            params_1.SafetyParams.encode(message.safetyParams, writer.uint32(26).fork()).ldelim();
        }
        if (message.acknowledgedEventInfo !== undefined) {
            bridge_event_info_1.BridgeEventInfo.encode(message.acknowledgedEventInfo, writer.uint32(34).fork()).ldelim();
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
                    message.eventParams = params_1.EventParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proposeParams = params_1.ProposeParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.safetyParams = params_1.SafetyParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.acknowledgedEventInfo = bridge_event_info_1.BridgeEventInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGenesisState();
        message.eventParams = object.eventParams !== undefined && object.eventParams !== null ? params_1.EventParams.fromPartial(object.eventParams) : undefined;
        message.proposeParams = object.proposeParams !== undefined && object.proposeParams !== null ? params_1.ProposeParams.fromPartial(object.proposeParams) : undefined;
        message.safetyParams = object.safetyParams !== undefined && object.safetyParams !== null ? params_1.SafetyParams.fromPartial(object.safetyParams) : undefined;
        message.acknowledgedEventInfo = object.acknowledgedEventInfo !== undefined && object.acknowledgedEventInfo !== null ? bridge_event_info_1.BridgeEventInfo.fromPartial(object.acknowledgedEventInfo) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGenesisState();
        if (object.event_params !== undefined && object.event_params !== null) {
            message.eventParams = params_1.EventParams.fromAmino(object.event_params);
        }
        if (object.propose_params !== undefined && object.propose_params !== null) {
            message.proposeParams = params_1.ProposeParams.fromAmino(object.propose_params);
        }
        if (object.safety_params !== undefined && object.safety_params !== null) {
            message.safetyParams = params_1.SafetyParams.fromAmino(object.safety_params);
        }
        if (object.acknowledged_event_info !== undefined && object.acknowledged_event_info !== null) {
            message.acknowledgedEventInfo = bridge_event_info_1.BridgeEventInfo.fromAmino(object.acknowledged_event_info);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.event_params = message.eventParams ? params_1.EventParams.toAmino(message.eventParams) : undefined;
        obj.propose_params = message.proposeParams ? params_1.ProposeParams.toAmino(message.proposeParams) : undefined;
        obj.safety_params = message.safetyParams ? params_1.SafetyParams.toAmino(message.safetyParams) : undefined;
        obj.acknowledged_event_info = message.acknowledgedEventInfo ? bridge_event_info_1.BridgeEventInfo.toAmino(message.acknowledgedEventInfo) : undefined;
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
            typeUrl: "/nemo_network.bridge.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
