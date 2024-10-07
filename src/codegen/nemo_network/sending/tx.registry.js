"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var transfer_1 = require("./transfer");
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.sending.MsgCreateTransfer", tx_1.MsgCreateTransfer], ["/nemo_network.sending.MsgDepositToSubaccount", transfer_1.MsgDepositToSubaccount], ["/nemo_network.sending.MsgWithdrawFromSubaccount", transfer_1.MsgWithdrawFromSubaccount], ["/nemo_network.sending.MsgSendFromModuleToAccount", transfer_1.MsgSendFromModuleToAccount]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createTransfer: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgCreateTransfer",
                value: tx_1.MsgCreateTransfer.encode(value).finish()
            };
        },
        depositToSubaccount: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgDepositToSubaccount",
                value: transfer_1.MsgDepositToSubaccount.encode(value).finish()
            };
        },
        withdrawFromSubaccount: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgWithdrawFromSubaccount",
                value: transfer_1.MsgWithdrawFromSubaccount.encode(value).finish()
            };
        },
        sendFromModuleToAccount: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgSendFromModuleToAccount",
                value: transfer_1.MsgSendFromModuleToAccount.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createTransfer: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgCreateTransfer",
                value: value
            };
        },
        depositToSubaccount: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgDepositToSubaccount",
                value: value
            };
        },
        withdrawFromSubaccount: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgWithdrawFromSubaccount",
                value: value
            };
        },
        sendFromModuleToAccount: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgSendFromModuleToAccount",
                value: value
            };
        }
    },
    fromPartial: {
        createTransfer: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgCreateTransfer",
                value: tx_1.MsgCreateTransfer.fromPartial(value)
            };
        },
        depositToSubaccount: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgDepositToSubaccount",
                value: transfer_1.MsgDepositToSubaccount.fromPartial(value)
            };
        },
        withdrawFromSubaccount: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgWithdrawFromSubaccount",
                value: transfer_1.MsgWithdrawFromSubaccount.fromPartial(value)
            };
        },
        sendFromModuleToAccount: function (value) {
            return {
                typeUrl: "/nemo_network.sending.MsgSendFromModuleToAccount",
                value: transfer_1.MsgSendFromModuleToAccount.fromPartial(value)
            };
        }
    }
};
