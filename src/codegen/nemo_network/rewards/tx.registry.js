"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.rewards.MsgUpdateParams", tx_1.MsgUpdateParams]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        updateParams: function (value) {
            return {
                typeUrl: "/nemo_network.rewards.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        updateParams: function (value) {
            return {
                typeUrl: "/nemo_network.rewards.MsgUpdateParams",
                value: value
            };
        }
    },
    fromPartial: {
        updateParams: function (value) {
            return {
                typeUrl: "/nemo_network.rewards.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
