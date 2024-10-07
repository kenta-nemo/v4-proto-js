"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams": {
        aminoType: "/nemo_network.feetiers.MsgUpdatePerpetualFeeParams",
        toAmino: tx_1.MsgUpdatePerpetualFeeParams.toAmino,
        fromAmino: tx_1.MsgUpdatePerpetualFeeParams.fromAmino
    }
};
