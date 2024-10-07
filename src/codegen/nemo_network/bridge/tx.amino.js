"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.bridge.MsgAcknowledgeBridges": {
        aminoType: "/nemo_network.bridge.MsgAcknowledgeBridges",
        toAmino: tx_1.MsgAcknowledgeBridges.toAmino,
        fromAmino: tx_1.MsgAcknowledgeBridges.fromAmino
    },
    "/nemo_network.bridge.MsgCompleteBridge": {
        aminoType: "/nemo_network.bridge.MsgCompleteBridge",
        toAmino: tx_1.MsgCompleteBridge.toAmino,
        fromAmino: tx_1.MsgCompleteBridge.fromAmino
    },
    "/nemo_network.bridge.MsgUpdateEventParams": {
        aminoType: "/nemo_network.bridge.MsgUpdateEventParams",
        toAmino: tx_1.MsgUpdateEventParams.toAmino,
        fromAmino: tx_1.MsgUpdateEventParams.fromAmino
    },
    "/nemo_network.bridge.MsgUpdateProposeParams": {
        aminoType: "/nemo_network.bridge.MsgUpdateProposeParams",
        toAmino: tx_1.MsgUpdateProposeParams.toAmino,
        fromAmino: tx_1.MsgUpdateProposeParams.fromAmino
    },
    "/nemo_network.bridge.MsgUpdateSafetyParams": {
        aminoType: "/nemo_network.bridge.MsgUpdateSafetyParams",
        toAmino: tx_1.MsgUpdateSafetyParams.toAmino,
        fromAmino: tx_1.MsgUpdateSafetyParams.fromAmino
    }
};
