"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.vest.MsgSetVestEntry": {
        aminoType: "/nemo_network.vest.MsgSetVestEntry",
        toAmino: tx_1.MsgSetVestEntry.toAmino,
        fromAmino: tx_1.MsgSetVestEntry.fromAmino
    },
    "/nemo_network.vest.MsgDeleteVestEntry": {
        aminoType: "/nemo_network.vest.MsgDeleteVestEntry",
        toAmino: tx_1.MsgDeleteVestEntry.toAmino,
        fromAmino: tx_1.MsgDeleteVestEntry.fromAmino
    }
};
