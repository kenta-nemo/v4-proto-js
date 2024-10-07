"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: "cosmos-sdk/MsgVerifyInvariant",
        toAmino: tx_1.MsgVerifyInvariant.toAmino,
        fromAmino: tx_1.MsgVerifyInvariant.fromAmino
    },
    "/cosmos.crisis.v1beta1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/crisis/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
