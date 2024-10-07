"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: "cosmos-sdk/MsgCreateVestingAccount",
        toAmino: tx_1.MsgCreateVestingAccount.toAmino,
        fromAmino: tx_1.MsgCreateVestingAccount.fromAmino
    },
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
        aminoType: "cosmos-sdk/MsgCreatePermLockedAccount",
        toAmino: tx_1.MsgCreatePermanentLockedAccount.toAmino,
        fromAmino: tx_1.MsgCreatePermanentLockedAccount.fromAmino
    },
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: "cosmos-sdk/MsgCreatePeriodVestAccount",
        toAmino: tx_1.MsgCreatePeriodicVestingAccount.toAmino,
        fromAmino: tx_1.MsgCreatePeriodicVestingAccount.fromAmino
    }
};
