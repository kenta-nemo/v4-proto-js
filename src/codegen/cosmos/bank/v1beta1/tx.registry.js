"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.bank.v1beta1.MsgSend", tx_1.MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", tx_1.MsgMultiSend], ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams], ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_1.MsgSetSendEnabled]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        send: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: tx_1.MsgSend.encode(value).finish()
            };
        },
        multiSend: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: tx_1.MsgMultiSend.encode(value).finish()
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        },
        setSendEnabled: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
                value: tx_1.MsgSetSendEnabled.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        send: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: value
            };
        },
        multiSend: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: value
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
                value: value
            };
        },
        setSendEnabled: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
                value: value
            };
        }
    },
    fromPartial: {
        send: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: tx_1.MsgSend.fromPartial(value)
            };
        },
        multiSend: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: tx_1.MsgMultiSend.fromPartial(value)
            };
        },
        updateParams: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        },
        setSendEnabled: function (value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
                value: tx_1.MsgSetSendEnabled.fromPartial(value)
            };
        }
    }
};
