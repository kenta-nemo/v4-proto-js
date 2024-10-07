"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.affiliates.MsgRegisterAffiliate": {
        aminoType: "/nemo_network.affiliates.MsgRegisterAffiliate",
        toAmino: tx_1.MsgRegisterAffiliate.toAmino,
        fromAmino: tx_1.MsgRegisterAffiliate.fromAmino
    },
    "/nemo_network.affiliates.MsgUpdateAffiliateTiers": {
        aminoType: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
        toAmino: tx_1.MsgUpdateAffiliateTiers.toAmino,
        fromAmino: tx_1.MsgUpdateAffiliateTiers.fromAmino
    }
};
