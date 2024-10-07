"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
        toAmino: tx_1.MsgSoftwareUpgrade.toAmino,
        fromAmino: tx_1.MsgSoftwareUpgrade.fromAmino
    },
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        aminoType: "cosmos-sdk/MsgCancelUpgrade",
        toAmino: tx_1.MsgCancelUpgrade.toAmino,
        fromAmino: tx_1.MsgCancelUpgrade.fromAmino
    }
};
