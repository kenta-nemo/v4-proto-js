"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: "cosmos-sdk/MsgUnjail",
        toAmino: tx_1.MsgUnjail.toAmino,
        fromAmino: tx_1.MsgUnjail.fromAmino
    },
    "/cosmos.slashing.v1beta1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/slashing/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
