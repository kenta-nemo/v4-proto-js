"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.affiliates.MsgRegisterAffiliate", tx_1.MsgRegisterAffiliate], ["/nemo_network.affiliates.MsgUpdateAffiliateTiers", tx_1.MsgUpdateAffiliateTiers]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        registerAffiliate: function (value) {
            return {
                typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliate",
                value: tx_1.MsgRegisterAffiliate.encode(value).finish()
            };
        },
        updateAffiliateTiers: function (value) {
            return {
                typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
                value: tx_1.MsgUpdateAffiliateTiers.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        registerAffiliate: function (value) {
            return {
                typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliate",
                value: value
            };
        },
        updateAffiliateTiers: function (value) {
            return {
                typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
                value: value
            };
        }
    },
    fromPartial: {
        registerAffiliate: function (value) {
            return {
                typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliate",
                value: tx_1.MsgRegisterAffiliate.fromPartial(value)
            };
        },
        updateAffiliateTiers: function (value) {
            return {
                typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
                value: tx_1.MsgUpdateAffiliateTiers.fromPartial(value)
            };
        }
    }
};
