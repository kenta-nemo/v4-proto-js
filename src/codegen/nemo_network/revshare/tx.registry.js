"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.revshare.MsgSetMarketMapperRevenueShare", tx_1.MsgSetMarketMapperRevenueShare], ["/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket", tx_1.MsgSetMarketMapperRevShareDetailsForMarket]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        setMarketMapperRevenueShare: function (value) {
            return {
                typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
                value: tx_1.MsgSetMarketMapperRevenueShare.encode(value).finish()
            };
        },
        setMarketMapperRevShareDetailsForMarket: function (value) {
            return {
                typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
                value: tx_1.MsgSetMarketMapperRevShareDetailsForMarket.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setMarketMapperRevenueShare: function (value) {
            return {
                typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
                value: value
            };
        },
        setMarketMapperRevShareDetailsForMarket: function (value) {
            return {
                typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
                value: value
            };
        }
    },
    fromPartial: {
        setMarketMapperRevenueShare: function (value) {
            return {
                typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevenueShare",
                value: tx_1.MsgSetMarketMapperRevenueShare.fromPartial(value)
            };
        },
        setMarketMapperRevShareDetailsForMarket: function (value) {
            return {
                typeUrl: "/nemo_network.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
                value: tx_1.MsgSetMarketMapperRevShareDetailsForMarket.fromPartial(value)
            };
        }
    }
};
