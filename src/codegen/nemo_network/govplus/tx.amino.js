"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.govplus.MsgSlashValidator": {
        aminoType: "/nemo_network.govplus.MsgSlashValidator",
        toAmino: tx_1.MsgSlashValidator.toAmino,
        fromAmino: tx_1.MsgSlashValidator.fromAmino
    }
};
