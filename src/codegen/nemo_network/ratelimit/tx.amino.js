"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.ratelimit.MsgSetLimitParams": {
        aminoType: "/nemo_network.ratelimit.MsgSetLimitParams",
        toAmino: tx_1.MsgSetLimitParams.toAmino,
        fromAmino: tx_1.MsgSetLimitParams.fromAmino
    }
};
