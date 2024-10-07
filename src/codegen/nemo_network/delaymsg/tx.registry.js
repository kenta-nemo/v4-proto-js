"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.delaymsg.MsgDelayMessage", tx_1.MsgDelayMessage]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        delayMessage: function (value) {
            return {
                typeUrl: "/nemo_network.delaymsg.MsgDelayMessage",
                value: tx_1.MsgDelayMessage.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        delayMessage: function (value) {
            return {
                typeUrl: "/nemo_network.delaymsg.MsgDelayMessage",
                value: value
            };
        }
    },
    fromPartial: {
        delayMessage: function (value) {
            return {
                typeUrl: "/nemo_network.delaymsg.MsgDelayMessage",
                value: tx_1.MsgDelayMessage.fromPartial(value)
            };
        }
    }
};
