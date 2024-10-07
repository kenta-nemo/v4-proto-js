"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", tx_1.MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", tx_1.MsgRevokeAllowance], ["/cosmos.feegrant.v1beta1.MsgPruneAllowances", tx_1.MsgPruneAllowances]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        grantAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_1.MsgGrantAllowance.encode(value).finish()
            };
        },
        revokeAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_1.MsgRevokeAllowance.encode(value).finish()
            };
        },
        pruneAllowances: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: tx_1.MsgPruneAllowances.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        grantAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: value
            };
        },
        revokeAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: value
            };
        },
        pruneAllowances: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: value
            };
        }
    },
    fromPartial: {
        grantAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_1.MsgGrantAllowance.fromPartial(value)
            };
        },
        revokeAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_1.MsgRevokeAllowance.fromPartial(value)
            };
        },
        pruneAllowances: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: tx_1.MsgPruneAllowances.fromPartial(value)
            };
        }
    }
};
