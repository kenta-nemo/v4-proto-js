"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.listing.MsgSetMarketsHardCap", tx_1.MsgSetMarketsHardCap], ["/nemo_network.listing.MsgCreateMarketPermissionless", tx_1.MsgCreateMarketPermissionless], ["/nemo_network.listing.MsgSetListingVaultDepositParams", tx_1.MsgSetListingVaultDepositParams]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        setMarketsHardCap: function (value) {
            return {
                typeUrl: "/nemo_network.listing.MsgSetMarketsHardCap",
                value: tx_1.MsgSetMarketsHardCap.encode(value).finish()
            };
        },
        createMarketPermissionless: function (value) {
            return {
                typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionless",
                value: tx_1.MsgCreateMarketPermissionless.encode(value).finish()
            };
        },
        setListingVaultDepositParams: function (value) {
            return {
                typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParams",
                value: tx_1.MsgSetListingVaultDepositParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setMarketsHardCap: function (value) {
            return {
                typeUrl: "/nemo_network.listing.MsgSetMarketsHardCap",
                value: value
            };
        },
        createMarketPermissionless: function (value) {
            return {
                typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionless",
                value: value
            };
        },
        setListingVaultDepositParams: function (value) {
            return {
                typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParams",
                value: value
            };
        }
    },
    fromPartial: {
        setMarketsHardCap: function (value) {
            return {
                typeUrl: "/nemo_network.listing.MsgSetMarketsHardCap",
                value: tx_1.MsgSetMarketsHardCap.fromPartial(value)
            };
        },
        createMarketPermissionless: function (value) {
            return {
                typeUrl: "/nemo_network.listing.MsgCreateMarketPermissionless",
                value: tx_1.MsgCreateMarketPermissionless.fromPartial(value)
            };
        },
        setListingVaultDepositParams: function (value) {
            return {
                typeUrl: "/nemo_network.listing.MsgSetListingVaultDepositParams",
                value: tx_1.MsgSetListingVaultDepositParams.fromPartial(value)
            };
        }
    }
};
