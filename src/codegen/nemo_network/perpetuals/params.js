"use strict";
exports.__esModule = true;
exports.Params = void 0;
var binary_1 = require("../../binary");
function createBaseParams() {
    return {
        fundingRateClampFactorPpm: 0,
        premiumVoteClampFactorPpm: 0,
        minNumVotesPerSample: 0
    };
}
exports.Params = {
    typeUrl: "/nemo_network.perpetuals.Params",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.fundingRateClampFactorPpm !== 0) {
            writer.uint32(8).uint32(message.fundingRateClampFactorPpm);
        }
        if (message.premiumVoteClampFactorPpm !== 0) {
            writer.uint32(16).uint32(message.premiumVoteClampFactorPpm);
        }
        if (message.minNumVotesPerSample !== 0) {
            writer.uint32(24).uint32(message.minNumVotesPerSample);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fundingRateClampFactorPpm = reader.uint32();
                    break;
                case 2:
                    message.premiumVoteClampFactorPpm = reader.uint32();
                    break;
                case 3:
                    message.minNumVotesPerSample = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseParams();
        message.fundingRateClampFactorPpm = (_a = object.fundingRateClampFactorPpm) !== null && _a !== void 0 ? _a : 0;
        message.premiumVoteClampFactorPpm = (_b = object.premiumVoteClampFactorPpm) !== null && _b !== void 0 ? _b : 0;
        message.minNumVotesPerSample = (_c = object.minNumVotesPerSample) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseParams();
        if (object.funding_rate_clamp_factor_ppm !== undefined && object.funding_rate_clamp_factor_ppm !== null) {
            message.fundingRateClampFactorPpm = object.funding_rate_clamp_factor_ppm;
        }
        if (object.premium_vote_clamp_factor_ppm !== undefined && object.premium_vote_clamp_factor_ppm !== null) {
            message.premiumVoteClampFactorPpm = object.premium_vote_clamp_factor_ppm;
        }
        if (object.min_num_votes_per_sample !== undefined && object.min_num_votes_per_sample !== null) {
            message.minNumVotesPerSample = object.min_num_votes_per_sample;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.funding_rate_clamp_factor_ppm = message.fundingRateClampFactorPpm === 0 ? undefined : message.fundingRateClampFactorPpm;
        obj.premium_vote_clamp_factor_ppm = message.premiumVoteClampFactorPpm === 0 ? undefined : message.premiumVoteClampFactorPpm;
        obj.min_num_votes_per_sample = message.minNumVotesPerSample === 0 ? undefined : message.minNumVotesPerSample;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Params.decode(message.value);
    },
    toProto: function (message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
