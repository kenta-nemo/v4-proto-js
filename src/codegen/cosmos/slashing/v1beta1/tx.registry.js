"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.slashing.v1beta1.MsgUnjail", tx_1.MsgUnjail], ["/cosmos.slashing.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        unjail: function (value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: tx_1.MsgUnjail.encode(value).finish()
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        unjail: function (value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: value
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
                value: value
            };
        }
    },
    fromPartial: {
        unjail: function (value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: tx_1.MsgUnjail.fromPartial(value)
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
