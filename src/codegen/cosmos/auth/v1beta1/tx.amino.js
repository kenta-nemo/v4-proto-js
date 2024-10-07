"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.auth.v1beta1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/auth/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
