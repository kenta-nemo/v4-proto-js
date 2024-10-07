"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", tx_1.MsgAuthorizeCircuitBreaker], ["/cosmos.circuit.v1.MsgTripCircuitBreaker", tx_1.MsgTripCircuitBreaker], ["/cosmos.circuit.v1.MsgResetCircuitBreaker", tx_1.MsgResetCircuitBreaker]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        authorizeCircuitBreaker: function (value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: tx_1.MsgAuthorizeCircuitBreaker.encode(value).finish()
            };
        },
        tripCircuitBreaker: function (value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: tx_1.MsgTripCircuitBreaker.encode(value).finish()
            };
        },
        resetCircuitBreaker: function (value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: tx_1.MsgResetCircuitBreaker.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        authorizeCircuitBreaker: function (value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: value
            };
        },
        tripCircuitBreaker: function (value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: value
            };
        },
        resetCircuitBreaker: function (value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: value
            };
        }
    },
    fromPartial: {
        authorizeCircuitBreaker: function (value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: tx_1.MsgAuthorizeCircuitBreaker.fromPartial(value)
            };
        },
        tripCircuitBreaker: function (value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: tx_1.MsgTripCircuitBreaker.fromPartial(value)
            };
        },
        resetCircuitBreaker: function (value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: tx_1.MsgResetCircuitBreaker.fromPartial(value)
            };
        }
    }
};
