"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.blocktime.MsgUpdateDowntimeParams", tx_1.MsgUpdateDowntimeParams]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        updateDowntimeParams: function (value) {
            return {
                typeUrl: "/nemo_network.blocktime.MsgUpdateDowntimeParams",
                value: tx_1.MsgUpdateDowntimeParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        updateDowntimeParams: function (value) {
            return {
                typeUrl: "/nemo_network.blocktime.MsgUpdateDowntimeParams",
                value: value
            };
        }
    },
    fromPartial: {
        updateDowntimeParams: function (value) {
            return {
                typeUrl: "/nemo_network.blocktime.MsgUpdateDowntimeParams",
                value: tx_1.MsgUpdateDowntimeParams.fromPartial(value)
            };
        }
    }
};
