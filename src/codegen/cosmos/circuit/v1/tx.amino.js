"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
        aminoType: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
        toAmino: tx_1.MsgAuthorizeCircuitBreaker.toAmino,
        fromAmino: tx_1.MsgAuthorizeCircuitBreaker.fromAmino
    },
    "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
        aminoType: "cosmos-sdk/MsgTripCircuitBreaker",
        toAmino: tx_1.MsgTripCircuitBreaker.toAmino,
        fromAmino: tx_1.MsgTripCircuitBreaker.fromAmino
    },
    "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
        aminoType: "cosmos-sdk/MsgResetCircuitBreaker",
        toAmino: tx_1.MsgResetCircuitBreaker.toAmino,
        fromAmino: tx_1.MsgResetCircuitBreaker.fromAmino
    }
};
