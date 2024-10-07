"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        aminoType: "cosmos-sdk/MsgGrantAllowance",
        toAmino: tx_1.MsgGrantAllowance.toAmino,
        fromAmino: tx_1.MsgGrantAllowance.fromAmino
    },
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        aminoType: "cosmos-sdk/MsgRevokeAllowance",
        toAmino: tx_1.MsgRevokeAllowance.toAmino,
        fromAmino: tx_1.MsgRevokeAllowance.fromAmino
    },
    "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
        aminoType: "cosmos-sdk/MsgPruneAllowances",
        toAmino: tx_1.MsgPruneAllowances.toAmino,
        fromAmino: tx_1.MsgPruneAllowances.fromAmino
    }
};
