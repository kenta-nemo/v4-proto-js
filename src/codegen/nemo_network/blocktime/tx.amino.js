"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.blocktime.MsgUpdateDowntimeParams": {
        aminoType: "/nemo_network.blocktime.MsgUpdateDowntimeParams",
        toAmino: tx_1.MsgUpdateDowntimeParams.toAmino,
        fromAmino: tx_1.MsgUpdateDowntimeParams.fromAmino
    }
};
