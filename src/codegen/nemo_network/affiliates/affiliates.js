"use strict";
exports.__esModule = true;
exports.AffiliateTiers_Tier = exports.AffiliateTiers = void 0;
var binary_1 = require("../../binary");
function createBaseAffiliateTiers() {
    return {
        tiers: []
    };
}
exports.AffiliateTiers = {
    typeUrl: "/nemo_network.affiliates.AffiliateTiers",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.tiers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AffiliateTiers_Tier.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAffiliateTiers();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tiers.push(exports.AffiliateTiers_Tier.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAffiliateTiers();
        message.tiers = ((_a = object.tiers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AffiliateTiers_Tier.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseAffiliateTiers();
        message.tiers = ((_a = object.tiers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AffiliateTiers_Tier.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.tiers) {
            obj.tiers = message.tiers.map(function (e) { return e ? exports.AffiliateTiers_Tier.toAmino(e) : undefined; });
        }
        else {
            obj.tiers = message.tiers;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AffiliateTiers.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AffiliateTiers.decode(message.value);
    },
    toProto: function (message) {
        return exports.AffiliateTiers.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.AffiliateTiers",
            value: exports.AffiliateTiers.encode(message).finish()
        };
    }
};
function createBaseAffiliateTiers_Tier() {
    return {
        level: 0,
        reqReferredVolume: BigInt(0),
        reqStakedWholeCoins: 0,
        takerFeeSharePpm: 0
    };
}
exports.AffiliateTiers_Tier = {
    typeUrl: "/nemo_network.affiliates.Tier",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.level !== 0) {
            writer.uint32(8).uint32(message.level);
        }
        if (message.reqReferredVolume !== BigInt(0)) {
            writer.uint32(16).uint64(message.reqReferredVolume);
        }
        if (message.reqStakedWholeCoins !== 0) {
            writer.uint32(24).uint32(message.reqStakedWholeCoins);
        }
        if (message.takerFeeSharePpm !== 0) {
            writer.uint32(32).uint32(message.takerFeeSharePpm);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAffiliateTiers_Tier();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.level = reader.uint32();
                    break;
                case 2:
                    message.reqReferredVolume = reader.uint64();
                    break;
                case 3:
                    message.reqStakedWholeCoins = reader.uint32();
                    break;
                case 4:
                    message.takerFeeSharePpm = reader.uint32();
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
        var message = createBaseAffiliateTiers_Tier();
        message.level = (_a = object.level) !== null && _a !== void 0 ? _a : 0;
        message.reqReferredVolume = object.reqReferredVolume !== undefined && object.reqReferredVolume !== null ? BigInt(object.reqReferredVolume.toString()) : BigInt(0);
        message.reqStakedWholeCoins = (_b = object.reqStakedWholeCoins) !== null && _b !== void 0 ? _b : 0;
        message.takerFeeSharePpm = (_c = object.takerFeeSharePpm) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAffiliateTiers_Tier();
        if (object.level !== undefined && object.level !== null) {
            message.level = object.level;
        }
        if (object.req_referred_volume !== undefined && object.req_referred_volume !== null) {
            message.reqReferredVolume = BigInt(object.req_referred_volume);
        }
        if (object.req_staked_whole_coins !== undefined && object.req_staked_whole_coins !== null) {
            message.reqStakedWholeCoins = object.req_staked_whole_coins;
        }
        if (object.taker_fee_share_ppm !== undefined && object.taker_fee_share_ppm !== null) {
            message.takerFeeSharePpm = object.taker_fee_share_ppm;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.level = message.level === 0 ? undefined : message.level;
        obj.req_referred_volume = message.reqReferredVolume !== BigInt(0) ? ((_a = message.reqReferredVolume) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.req_staked_whole_coins = message.reqStakedWholeCoins === 0 ? undefined : message.reqStakedWholeCoins;
        obj.taker_fee_share_ppm = message.takerFeeSharePpm === 0 ? undefined : message.takerFeeSharePpm;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AffiliateTiers_Tier.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AffiliateTiers_Tier.decode(message.value);
    },
    toProto: function (message) {
        return exports.AffiliateTiers_Tier.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.Tier",
            value: exports.AffiliateTiers_Tier.encode(message).finish()
        };
    }
};
