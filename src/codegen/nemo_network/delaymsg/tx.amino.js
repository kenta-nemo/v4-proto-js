"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.delaymsg.MsgDelayMessage": {
        aminoType: "/nemo_network.delaymsg.MsgDelayMessage",
        toAmino: tx_1.MsgDelayMessage.toAmino,
        fromAmino: tx_1.MsgDelayMessage.fromAmino
    }
};
