"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.clob.MsgProposedOperations", tx_1.MsgProposedOperations], ["/nemo_network.clob.MsgPlaceOrder", tx_1.MsgPlaceOrder], ["/nemo_network.clob.MsgCancelOrder", tx_1.MsgCancelOrder], ["/nemo_network.clob.MsgBatchCancel", tx_1.MsgBatchCancel], ["/nemo_network.clob.MsgCreateClobPair", tx_1.MsgCreateClobPair], ["/nemo_network.clob.MsgUpdateClobPair", tx_1.MsgUpdateClobPair], ["/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration", tx_1.MsgUpdateEquityTierLimitConfiguration], ["/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration", tx_1.MsgUpdateBlockRateLimitConfiguration], ["/nemo_network.clob.MsgUpdateLiquidationsConfig", tx_1.MsgUpdateLiquidationsConfig]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        proposedOperations: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgProposedOperations",
                value: tx_1.MsgProposedOperations.encode(value).finish()
            };
        },
        placeOrder: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgPlaceOrder",
                value: tx_1.MsgPlaceOrder.encode(value).finish()
            };
        },
        cancelOrder: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgCancelOrder",
                value: tx_1.MsgCancelOrder.encode(value).finish()
            };
        },
        batchCancel: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgBatchCancel",
                value: tx_1.MsgBatchCancel.encode(value).finish()
            };
        },
        createClobPair: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgCreateClobPair",
                value: tx_1.MsgCreateClobPair.encode(value).finish()
            };
        },
        updateClobPair: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateClobPair",
                value: tx_1.MsgUpdateClobPair.encode(value).finish()
            };
        },
        updateEquityTierLimitConfiguration: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration",
                value: tx_1.MsgUpdateEquityTierLimitConfiguration.encode(value).finish()
            };
        },
        updateBlockRateLimitConfiguration: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration",
                value: tx_1.MsgUpdateBlockRateLimitConfiguration.encode(value).finish()
            };
        },
        updateLiquidationsConfig: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateLiquidationsConfig",
                value: tx_1.MsgUpdateLiquidationsConfig.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        proposedOperations: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgProposedOperations",
                value: value
            };
        },
        placeOrder: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgPlaceOrder",
                value: value
            };
        },
        cancelOrder: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgCancelOrder",
                value: value
            };
        },
        batchCancel: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgBatchCancel",
                value: value
            };
        },
        createClobPair: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgCreateClobPair",
                value: value
            };
        },
        updateClobPair: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateClobPair",
                value: value
            };
        },
        updateEquityTierLimitConfiguration: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration",
                value: value
            };
        },
        updateBlockRateLimitConfiguration: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration",
                value: value
            };
        },
        updateLiquidationsConfig: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateLiquidationsConfig",
                value: value
            };
        }
    },
    fromPartial: {
        proposedOperations: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgProposedOperations",
                value: tx_1.MsgProposedOperations.fromPartial(value)
            };
        },
        placeOrder: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgPlaceOrder",
                value: tx_1.MsgPlaceOrder.fromPartial(value)
            };
        },
        cancelOrder: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgCancelOrder",
                value: tx_1.MsgCancelOrder.fromPartial(value)
            };
        },
        batchCancel: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgBatchCancel",
                value: tx_1.MsgBatchCancel.fromPartial(value)
            };
        },
        createClobPair: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgCreateClobPair",
                value: tx_1.MsgCreateClobPair.fromPartial(value)
            };
        },
        updateClobPair: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateClobPair",
                value: tx_1.MsgUpdateClobPair.fromPartial(value)
            };
        },
        updateEquityTierLimitConfiguration: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration",
                value: tx_1.MsgUpdateEquityTierLimitConfiguration.fromPartial(value)
            };
        },
        updateBlockRateLimitConfiguration: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration",
                value: tx_1.MsgUpdateBlockRateLimitConfiguration.fromPartial(value)
            };
        },
        updateLiquidationsConfig: function (value) {
            return {
                typeUrl: "/nemo_network.clob.MsgUpdateLiquidationsConfig",
                value: tx_1.MsgUpdateLiquidationsConfig.fromPartial(value)
            };
        }
    }
};
