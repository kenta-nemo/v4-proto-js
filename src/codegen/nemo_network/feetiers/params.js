"use strict";
exports.__esModule = true;
exports.PerpetualFeeTier = exports.PerpetualFeeParams = void 0;
var binary_1 = require("../../binary");
function createBasePerpetualFeeParams() {
    return {
        tiers: []
    };
}
exports.PerpetualFeeParams = {
    typeUrl: "/nemo_network.feetiers.PerpetualFeeParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.tiers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PerpetualFeeTier.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerpetualFeeParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tiers.push(exports.PerpetualFeeTier.decode(reader, reader.uint32()));
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
        var message = createBasePerpetualFeeParams();
        message.tiers = ((_a = object.tiers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.PerpetualFeeTier.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBasePerpetualFeeParams();
        message.tiers = ((_a = object.tiers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.PerpetualFeeTier.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.tiers) {
            obj.tiers = message.tiers.map(function (e) { return e ? exports.PerpetualFeeTier.toAmino(e) : undefined; });
        }
        else {
            obj.tiers = message.tiers;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PerpetualFeeParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PerpetualFeeParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.PerpetualFeeParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.feetiers.PerpetualFeeParams",
            value: exports.PerpetualFeeParams.encode(message).finish()
        };
    }
};
function createBasePerpetualFeeTier() {
    return {
        name: "",
        absoluteVolumeRequirement: BigInt(0),
        totalVolumeShareRequirementPpm: 0,
        makerVolumeShareRequirementPpm: 0,
        makerFeePpm: 0,
        takerFeePpm: 0
    };
}
exports.PerpetualFeeTier = {
    typeUrl: "/nemo_network.feetiers.PerpetualFeeTier",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.absoluteVolumeRequirement !== BigInt(0)) {
            writer.uint32(16).uint64(message.absoluteVolumeRequirement);
        }
        if (message.totalVolumeShareRequirementPpm !== 0) {
            writer.uint32(24).uint32(message.totalVolumeShareRequirementPpm);
        }
        if (message.makerVolumeShareRequirementPpm !== 0) {
            writer.uint32(32).uint32(message.makerVolumeShareRequirementPpm);
        }
        if (message.makerFeePpm !== 0) {
            writer.uint32(40).sint32(message.makerFeePpm);
        }
        if (message.takerFeePpm !== 0) {
            writer.uint32(48).sint32(message.takerFeePpm);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerpetualFeeTier();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.absoluteVolumeRequirement = reader.uint64();
                    break;
                case 3:
                    message.totalVolumeShareRequirementPpm = reader.uint32();
                    break;
                case 4:
                    message.makerVolumeShareRequirementPpm = reader.uint32();
                    break;
                case 5:
                    message.makerFeePpm = reader.sint32();
                    break;
                case 6:
                    message.takerFeePpm = reader.sint32();
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
        var message = createBasePerpetualFeeTier();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.absoluteVolumeRequirement = object.absoluteVolumeRequirement !== undefined && object.absoluteVolumeRequirement !== null ? BigInt(object.absoluteVolumeRequirement.toString()) : BigInt(0);
        message.totalVolumeShareRequirementPpm = (_b = object.totalVolumeShareRequirementPpm) !== null && _b !== void 0 ? _b : 0;
        message.makerVolumeShareRequirementPpm = (_c = object.makerVolumeShareRequirementPpm) !== null && _c !== void 0 ? _c : 0;
        message.makerFeePpm = (_d = object.makerFeePpm) !== null && _d !== void 0 ? _d : 0;
        message.takerFeePpm = (_e = object.takerFeePpm) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePerpetualFeeTier();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.absolute_volume_requirement !== undefined && object.absolute_volume_requirement !== null) {
            message.absoluteVolumeRequirement = BigInt(object.absolute_volume_requirement);
        }
        if (object.total_volume_share_requirement_ppm !== undefined && object.total_volume_share_requirement_ppm !== null) {
            message.totalVolumeShareRequirementPpm = object.total_volume_share_requirement_ppm;
        }
        if (object.maker_volume_share_requirement_ppm !== undefined && object.maker_volume_share_requirement_ppm !== null) {
            message.makerVolumeShareRequirementPpm = object.maker_volume_share_requirement_ppm;
        }
        if (object.maker_fee_ppm !== undefined && object.maker_fee_ppm !== null) {
            message.makerFeePpm = object.maker_fee_ppm;
        }
        if (object.taker_fee_ppm !== undefined && object.taker_fee_ppm !== null) {
            message.takerFeePpm = object.taker_fee_ppm;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.absolute_volume_requirement = message.absoluteVolumeRequirement !== BigInt(0) ? ((_a = message.absoluteVolumeRequirement) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.total_volume_share_requirement_ppm = message.totalVolumeShareRequirementPpm === 0 ? undefined : message.totalVolumeShareRequirementPpm;
        obj.maker_volume_share_requirement_ppm = message.makerVolumeShareRequirementPpm === 0 ? undefined : message.makerVolumeShareRequirementPpm;
        obj.maker_fee_ppm = message.makerFeePpm === 0 ? undefined : message.makerFeePpm;
        obj.taker_fee_ppm = message.takerFeePpm === 0 ? undefined : message.takerFeePpm;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PerpetualFeeTier.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PerpetualFeeTier.decode(message.value);
    },
    toProto: function (message) {
        return exports.PerpetualFeeTier.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.feetiers.PerpetualFeeTier",
            value: exports.PerpetualFeeTier.encode(message).finish()
        };
    }
};
