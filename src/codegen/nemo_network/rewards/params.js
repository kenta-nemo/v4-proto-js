"use strict";
exports.__esModule = true;
exports.Params = void 0;
var binary_1 = require("../../binary");
function createBaseParams() {
    return {
        treasuryAccount: "",
        denom: "",
        denomExponent: 0,
        marketId: 0,
        feeMultiplierPpm: 0
    };
}
exports.Params = {
    typeUrl: "/nemo_network.rewards.Params",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.treasuryAccount !== "") {
            writer.uint32(10).string(message.treasuryAccount);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.denomExponent !== 0) {
            writer.uint32(24).sint32(message.denomExponent);
        }
        if (message.marketId !== 0) {
            writer.uint32(32).uint32(message.marketId);
        }
        if (message.feeMultiplierPpm !== 0) {
            writer.uint32(40).uint32(message.feeMultiplierPpm);
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
                    message.treasuryAccount = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.denomExponent = reader.sint32();
                    break;
                case 4:
                    message.marketId = reader.uint32();
                    break;
                case 5:
                    message.feeMultiplierPpm = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseParams();
        message.treasuryAccount = (_a = object.treasuryAccount) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.denomExponent = (_c = object.denomExponent) !== null && _c !== void 0 ? _c : 0;
        message.marketId = (_d = object.marketId) !== null && _d !== void 0 ? _d : 0;
        message.feeMultiplierPpm = (_e = object.feeMultiplierPpm) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseParams();
        if (object.treasury_account !== undefined && object.treasury_account !== null) {
            message.treasuryAccount = object.treasury_account;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.denom_exponent !== undefined && object.denom_exponent !== null) {
            message.denomExponent = object.denom_exponent;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.fee_multiplier_ppm !== undefined && object.fee_multiplier_ppm !== null) {
            message.feeMultiplierPpm = object.fee_multiplier_ppm;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.treasury_account = message.treasuryAccount === "" ? undefined : message.treasuryAccount;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.denom_exponent = message.denomExponent === 0 ? undefined : message.denomExponent;
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.fee_multiplier_ppm = message.feeMultiplierPpm === 0 ? undefined : message.feeMultiplierPpm;
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
            typeUrl: "/nemo_network.rewards.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
