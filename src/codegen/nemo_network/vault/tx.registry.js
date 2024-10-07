"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.vault.MsgDepositToMegavault", tx_1.MsgDepositToMegavault], ["/nemo_network.vault.MsgUpdateDefaultQuotingParams", tx_1.MsgUpdateDefaultQuotingParams], ["/nemo_network.vault.MsgSetVaultParams", tx_1.MsgSetVaultParams]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        depositToMegavault: function (value) {
            return {
                typeUrl: "/nemo_network.vault.MsgDepositToMegavault",
                value: tx_1.MsgDepositToMegavault.encode(value).finish()
            };
        },
        updateDefaultQuotingParams: function (value) {
            return {
                typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
                value: tx_1.MsgUpdateDefaultQuotingParams.encode(value).finish()
            };
        },
        setVaultParams: function (value) {
            return {
                typeUrl: "/nemo_network.vault.MsgSetVaultParams",
                value: tx_1.MsgSetVaultParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        depositToMegavault: function (value) {
            return {
                typeUrl: "/nemo_network.vault.MsgDepositToMegavault",
                value: value
            };
        },
        updateDefaultQuotingParams: function (value) {
            return {
                typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
                value: value
            };
        },
        setVaultParams: function (value) {
            return {
                typeUrl: "/nemo_network.vault.MsgSetVaultParams",
                value: value
            };
        }
    },
    fromPartial: {
        depositToMegavault: function (value) {
            return {
                typeUrl: "/nemo_network.vault.MsgDepositToMegavault",
                value: tx_1.MsgDepositToMegavault.fromPartial(value)
            };
        },
        updateDefaultQuotingParams: function (value) {
            return {
                typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
                value: tx_1.MsgUpdateDefaultQuotingParams.fromPartial(value)
            };
        },
        setVaultParams: function (value) {
            return {
                typeUrl: "/nemo_network.vault.MsgSetVaultParams",
                value: tx_1.MsgSetVaultParams.fromPartial(value)
            };
        }
    }
};
