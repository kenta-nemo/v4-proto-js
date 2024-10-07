"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.bridge.MsgAcknowledgeBridges", tx_1.MsgAcknowledgeBridges], ["/nemo_network.bridge.MsgCompleteBridge", tx_1.MsgCompleteBridge], ["/nemo_network.bridge.MsgUpdateEventParams", tx_1.MsgUpdateEventParams], ["/nemo_network.bridge.MsgUpdateProposeParams", tx_1.MsgUpdateProposeParams], ["/nemo_network.bridge.MsgUpdateSafetyParams", tx_1.MsgUpdateSafetyParams]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        acknowledgeBridges: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridges",
                value: tx_1.MsgAcknowledgeBridges.encode(value).finish()
            };
        },
        completeBridge: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgCompleteBridge",
                value: tx_1.MsgCompleteBridge.encode(value).finish()
            };
        },
        updateEventParams: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgUpdateEventParams",
                value: tx_1.MsgUpdateEventParams.encode(value).finish()
            };
        },
        updateProposeParams: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgUpdateProposeParams",
                value: tx_1.MsgUpdateProposeParams.encode(value).finish()
            };
        },
        updateSafetyParams: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParams",
                value: tx_1.MsgUpdateSafetyParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        acknowledgeBridges: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridges",
                value: value
            };
        },
        completeBridge: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgCompleteBridge",
                value: value
            };
        },
        updateEventParams: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgUpdateEventParams",
                value: value
            };
        },
        updateProposeParams: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgUpdateProposeParams",
                value: value
            };
        },
        updateSafetyParams: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParams",
                value: value
            };
        }
    },
    fromPartial: {
        acknowledgeBridges: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgAcknowledgeBridges",
                value: tx_1.MsgAcknowledgeBridges.fromPartial(value)
            };
        },
        completeBridge: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgCompleteBridge",
                value: tx_1.MsgCompleteBridge.fromPartial(value)
            };
        },
        updateEventParams: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgUpdateEventParams",
                value: tx_1.MsgUpdateEventParams.fromPartial(value)
            };
        },
        updateProposeParams: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgUpdateProposeParams",
                value: tx_1.MsgUpdateProposeParams.fromPartial(value)
            };
        },
        updateSafetyParams: function (value) {
            return {
                typeUrl: "/nemo_network.bridge.MsgUpdateSafetyParams",
                value: tx_1.MsgUpdateSafetyParams.fromPartial(value)
            };
        }
    }
};
