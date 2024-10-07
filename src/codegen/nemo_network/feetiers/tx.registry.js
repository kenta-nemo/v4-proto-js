"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.feetiers.MsgUpdatePerpetualFeeParams", tx_1.MsgUpdatePerpetualFeeParams]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        updatePerpetualFeeParams: function (value) {
            return {
                typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams",
                value: tx_1.MsgUpdatePerpetualFeeParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        updatePerpetualFeeParams: function (value) {
            return {
                typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams",
                value: value
            };
        }
    },
    fromPartial: {
        updatePerpetualFeeParams: function (value) {
            return {
                typeUrl: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams",
                value: tx_1.MsgUpdatePerpetualFeeParams.fromPartial(value)
            };
        }
    }
};
