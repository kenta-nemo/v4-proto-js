"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.gov.v1.MsgSubmitProposal": {
        aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
        toAmino: tx_1.MsgSubmitProposal.toAmino,
        fromAmino: tx_1.MsgSubmitProposal.fromAmino
    },
    "/cosmos.gov.v1.MsgExecLegacyContent": {
        aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
        toAmino: tx_1.MsgExecLegacyContent.toAmino,
        fromAmino: tx_1.MsgExecLegacyContent.fromAmino
    },
    "/cosmos.gov.v1.MsgVote": {
        aminoType: "cosmos-sdk/v1/MsgVote",
        toAmino: tx_1.MsgVote.toAmino,
        fromAmino: tx_1.MsgVote.fromAmino
    },
    "/cosmos.gov.v1.MsgVoteWeighted": {
        aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
        toAmino: tx_1.MsgVoteWeighted.toAmino,
        fromAmino: tx_1.MsgVoteWeighted.fromAmino
    },
    "/cosmos.gov.v1.MsgDeposit": {
        aminoType: "cosmos-sdk/v1/MsgDeposit",
        toAmino: tx_1.MsgDeposit.toAmino,
        fromAmino: tx_1.MsgDeposit.fromAmino
    },
    "/cosmos.gov.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/gov/v1/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    },
    "/cosmos.gov.v1.MsgCancelProposal": {
        aminoType: "cosmos-sdk/v1/MsgCancelProposal",
        toAmino: tx_1.MsgCancelProposal.toAmino,
        fromAmino: tx_1.MsgCancelProposal.fromAmino
    }
};
