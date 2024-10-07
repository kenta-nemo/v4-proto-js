"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/nemo_network.listing.MsgSetMarketsHardCap": {
        aminoType: "/nemo_network.listing.MsgSetMarketsHardCap",
        toAmino: tx_1.MsgSetMarketsHardCap.toAmino,
        fromAmino: tx_1.MsgSetMarketsHardCap.fromAmino
    },
    "/nemo_network.listing.MsgCreateMarketPermissionless": {
        aminoType: "/nemo_network.listing.MsgCreateMarketPermissionless",
        toAmino: tx_1.MsgCreateMarketPermissionless.toAmino,
        fromAmino: tx_1.MsgCreateMarketPermissionless.fromAmino
    },
    "/nemo_network.listing.MsgSetListingVaultDepositParams": {
        aminoType: "/nemo_network.listing.MsgSetListingVaultDepositParams",
        toAmino: tx_1.MsgSetListingVaultDepositParams.toAmino,
        fromAmino: tx_1.MsgSetListingVaultDepositParams.fromAmino
    }
};
