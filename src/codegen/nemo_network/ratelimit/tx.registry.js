"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.ratelimit.MsgSetLimitParams", tx_1.MsgSetLimitParams]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        setLimitParams: function (value) {
            return {
                typeUrl: "/nemo_network.ratelimit.MsgSetLimitParams",
                value: tx_1.MsgSetLimitParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setLimitParams: function (value) {
            return {
                typeUrl: "/nemo_network.ratelimit.MsgSetLimitParams",
                value: value
            };
        }
    },
    fromPartial: {
        setLimitParams: function (value) {
            return {
                typeUrl: "/nemo_network.ratelimit.MsgSetLimitParams",
                value: tx_1.MsgSetLimitParams.fromPartial(value)
            };
        }
    }
};
