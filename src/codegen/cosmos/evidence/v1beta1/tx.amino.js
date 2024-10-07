"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
        aminoType: "cosmos-sdk/MsgSubmitEvidence",
        toAmino: tx_1.MsgSubmitEvidence.toAmino,
        fromAmino: tx_1.MsgSubmitEvidence.fromAmino
    }
};
