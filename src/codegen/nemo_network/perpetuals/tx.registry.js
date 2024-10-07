"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.perpetuals.MsgAddPremiumVotes", tx_1.MsgAddPremiumVotes], ["/nemo_network.perpetuals.MsgCreatePerpetual", tx_1.MsgCreatePerpetual], ["/nemo_network.perpetuals.MsgSetLiquidityTier", tx_1.MsgSetLiquidityTier], ["/nemo_network.perpetuals.MsgUpdatePerpetualParams", tx_1.MsgUpdatePerpetualParams], ["/nemo_network.perpetuals.MsgUpdateParams", tx_1.MsgUpdateParams]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        addPremiumVotes: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotes",
                value: tx_1.MsgAddPremiumVotes.encode(value).finish()
            };
        },
        createPerpetual: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetual",
                value: tx_1.MsgCreatePerpetual.encode(value).finish()
            };
        },
        setLiquidityTier: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTier",
                value: tx_1.MsgSetLiquidityTier.encode(value).finish()
            };
        },
        updatePerpetualParams: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
                value: tx_1.MsgUpdatePerpetualParams.encode(value).finish()
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        addPremiumVotes: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotes",
                value: value
            };
        },
        createPerpetual: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetual",
                value: value
            };
        },
        setLiquidityTier: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTier",
                value: value
            };
        },
        updatePerpetualParams: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
                value: value
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgUpdateParams",
                value: value
            };
        }
    },
    fromPartial: {
        addPremiumVotes: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotes",
                value: tx_1.MsgAddPremiumVotes.fromPartial(value)
            };
        },
        createPerpetual: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetual",
                value: tx_1.MsgCreatePerpetual.fromPartial(value)
            };
        },
        setLiquidityTier: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTier",
                value: tx_1.MsgSetLiquidityTier.fromPartial(value)
            };
        },
        updatePerpetualParams: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
                value: tx_1.MsgUpdatePerpetualParams.fromPartial(value)
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/nemo_network.perpetuals.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
