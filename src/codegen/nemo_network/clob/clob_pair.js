"use strict";
exports.__esModule = true;
exports.ClobPair = exports.SpotClobMetadata = exports.PerpetualClobMetadata = exports.clobPair_StatusToJSON = exports.clobPair_StatusFromJSON = exports.ClobPair_StatusAmino = exports.ClobPair_StatusSDKType = exports.ClobPair_Status = void 0;
var binary_1 = require("../../binary");
/** Status of the CLOB. */
var ClobPair_Status;
(function (ClobPair_Status) {
    /** STATUS_UNSPECIFIED - Default value. This value is invalid and unused. */
    ClobPair_Status[ClobPair_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** STATUS_ACTIVE - STATUS_ACTIVE represents an active clob pair. */
    ClobPair_Status[ClobPair_Status["STATUS_ACTIVE"] = 1] = "STATUS_ACTIVE";
    /**
     * STATUS_PAUSED - STATUS_PAUSED behavior is unfinalized.
     * TODO(DEC-600): update this documentation.
     */
    ClobPair_Status[ClobPair_Status["STATUS_PAUSED"] = 2] = "STATUS_PAUSED";
    /**
     * STATUS_CANCEL_ONLY - STATUS_CANCEL_ONLY behavior is unfinalized.
     * TODO(DEC-600): update this documentation.
     */
    ClobPair_Status[ClobPair_Status["STATUS_CANCEL_ONLY"] = 3] = "STATUS_CANCEL_ONLY";
    /**
     * STATUS_POST_ONLY - STATUS_POST_ONLY behavior is unfinalized.
     * TODO(DEC-600): update this documentation.
     */
    ClobPair_Status[ClobPair_Status["STATUS_POST_ONLY"] = 4] = "STATUS_POST_ONLY";
    /**
     * STATUS_INITIALIZING - STATUS_INITIALIZING represents a newly-added clob pair.
     * Clob pairs in this state only accept orders which are
     * both short-term and post-only.
     */
    ClobPair_Status[ClobPair_Status["STATUS_INITIALIZING"] = 5] = "STATUS_INITIALIZING";
    /**
     * STATUS_FINAL_SETTLEMENT - STATUS_FINAL_SETTLEMENT represents a clob pair which is deactivated
     * and trading has ceased. All open positions will be closed by the
     * protocol. Open stateful orders will be cancelled. Open short-term
     * orders will be left to expire.
     */
    ClobPair_Status[ClobPair_Status["STATUS_FINAL_SETTLEMENT"] = 6] = "STATUS_FINAL_SETTLEMENT";
    ClobPair_Status[ClobPair_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClobPair_Status = exports.ClobPair_Status || (exports.ClobPair_Status = {}));
exports.ClobPair_StatusSDKType = ClobPair_Status;
exports.ClobPair_StatusAmino = ClobPair_Status;
function clobPair_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return ClobPair_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_ACTIVE":
            return ClobPair_Status.STATUS_ACTIVE;
        case 2:
        case "STATUS_PAUSED":
            return ClobPair_Status.STATUS_PAUSED;
        case 3:
        case "STATUS_CANCEL_ONLY":
            return ClobPair_Status.STATUS_CANCEL_ONLY;
        case 4:
        case "STATUS_POST_ONLY":
            return ClobPair_Status.STATUS_POST_ONLY;
        case 5:
        case "STATUS_INITIALIZING":
            return ClobPair_Status.STATUS_INITIALIZING;
        case 6:
        case "STATUS_FINAL_SETTLEMENT":
            return ClobPair_Status.STATUS_FINAL_SETTLEMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClobPair_Status.UNRECOGNIZED;
    }
}
exports.clobPair_StatusFromJSON = clobPair_StatusFromJSON;
function clobPair_StatusToJSON(object) {
    switch (object) {
        case ClobPair_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case ClobPair_Status.STATUS_ACTIVE:
            return "STATUS_ACTIVE";
        case ClobPair_Status.STATUS_PAUSED:
            return "STATUS_PAUSED";
        case ClobPair_Status.STATUS_CANCEL_ONLY:
            return "STATUS_CANCEL_ONLY";
        case ClobPair_Status.STATUS_POST_ONLY:
            return "STATUS_POST_ONLY";
        case ClobPair_Status.STATUS_INITIALIZING:
            return "STATUS_INITIALIZING";
        case ClobPair_Status.STATUS_FINAL_SETTLEMENT:
            return "STATUS_FINAL_SETTLEMENT";
        case ClobPair_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.clobPair_StatusToJSON = clobPair_StatusToJSON;
function createBasePerpetualClobMetadata() {
    return {
        perpetualId: 0
    };
}
exports.PerpetualClobMetadata = {
    typeUrl: "/nemo_network.clob.PerpetualClobMetadata",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerpetualClobMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
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
        var message = createBasePerpetualClobMetadata();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePerpetualClobMetadata();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PerpetualClobMetadata.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "nemo_network/clob/PerpetualClobMetadata",
            value: exports.PerpetualClobMetadata.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.PerpetualClobMetadata.decode(message.value);
    },
    toProto: function (message) {
        return exports.PerpetualClobMetadata.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.PerpetualClobMetadata",
            value: exports.PerpetualClobMetadata.encode(message).finish()
        };
    }
};
function createBaseSpotClobMetadata() {
    return {
        baseAssetId: 0,
        quoteAssetId: 0
    };
}
exports.SpotClobMetadata = {
    typeUrl: "/nemo_network.clob.SpotClobMetadata",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.baseAssetId !== 0) {
            writer.uint32(8).uint32(message.baseAssetId);
        }
        if (message.quoteAssetId !== 0) {
            writer.uint32(16).uint32(message.quoteAssetId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSpotClobMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAssetId = reader.uint32();
                    break;
                case 2:
                    message.quoteAssetId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSpotClobMetadata();
        message.baseAssetId = (_a = object.baseAssetId) !== null && _a !== void 0 ? _a : 0;
        message.quoteAssetId = (_b = object.quoteAssetId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSpotClobMetadata();
        if (object.base_asset_id !== undefined && object.base_asset_id !== null) {
            message.baseAssetId = object.base_asset_id;
        }
        if (object.quote_asset_id !== undefined && object.quote_asset_id !== null) {
            message.quoteAssetId = object.quote_asset_id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.base_asset_id = message.baseAssetId === 0 ? undefined : message.baseAssetId;
        obj.quote_asset_id = message.quoteAssetId === 0 ? undefined : message.quoteAssetId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SpotClobMetadata.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "nemo_network/clob/SpotClobMetadata",
            value: exports.SpotClobMetadata.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SpotClobMetadata.decode(message.value);
    },
    toProto: function (message) {
        return exports.SpotClobMetadata.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.SpotClobMetadata",
            value: exports.SpotClobMetadata.encode(message).finish()
        };
    }
};
function createBaseClobPair() {
    return {
        id: 0,
        perpetualClobMetadata: undefined,
        spotClobMetadata: undefined,
        stepBaseQuantums: BigInt(0),
        subticksPerTick: 0,
        quantumConversionExponent: 0,
        status: 0
    };
}
exports.ClobPair = {
    typeUrl: "/nemo_network.clob.ClobPair",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.perpetualClobMetadata !== undefined) {
            exports.PerpetualClobMetadata.encode(message.perpetualClobMetadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.spotClobMetadata !== undefined) {
            exports.SpotClobMetadata.encode(message.spotClobMetadata, writer.uint32(26).fork()).ldelim();
        }
        if (message.stepBaseQuantums !== BigInt(0)) {
            writer.uint32(32).uint64(message.stepBaseQuantums);
        }
        if (message.subticksPerTick !== 0) {
            writer.uint32(40).uint32(message.subticksPerTick);
        }
        if (message.quantumConversionExponent !== 0) {
            writer.uint32(48).sint32(message.quantumConversionExponent);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClobPair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.perpetualClobMetadata = exports.PerpetualClobMetadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.spotClobMetadata = exports.SpotClobMetadata.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.stepBaseQuantums = reader.uint64();
                    break;
                case 5:
                    message.subticksPerTick = reader.uint32();
                    break;
                case 6:
                    message.quantumConversionExponent = reader.sint32();
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseClobPair();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.perpetualClobMetadata = object.perpetualClobMetadata !== undefined && object.perpetualClobMetadata !== null ? exports.PerpetualClobMetadata.fromPartial(object.perpetualClobMetadata) : undefined;
        message.spotClobMetadata = object.spotClobMetadata !== undefined && object.spotClobMetadata !== null ? exports.SpotClobMetadata.fromPartial(object.spotClobMetadata) : undefined;
        message.stepBaseQuantums = object.stepBaseQuantums !== undefined && object.stepBaseQuantums !== null ? BigInt(object.stepBaseQuantums.toString()) : BigInt(0);
        message.subticksPerTick = (_b = object.subticksPerTick) !== null && _b !== void 0 ? _b : 0;
        message.quantumConversionExponent = (_c = object.quantumConversionExponent) !== null && _c !== void 0 ? _c : 0;
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseClobPair();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.perpetual_clob_metadata !== undefined && object.perpetual_clob_metadata !== null) {
            message.perpetualClobMetadata = exports.PerpetualClobMetadata.fromAmino(object.perpetual_clob_metadata);
        }
        if (object.spot_clob_metadata !== undefined && object.spot_clob_metadata !== null) {
            message.spotClobMetadata = exports.SpotClobMetadata.fromAmino(object.spot_clob_metadata);
        }
        if (object.step_base_quantums !== undefined && object.step_base_quantums !== null) {
            message.stepBaseQuantums = BigInt(object.step_base_quantums);
        }
        if (object.subticks_per_tick !== undefined && object.subticks_per_tick !== null) {
            message.subticksPerTick = object.subticks_per_tick;
        }
        if (object.quantum_conversion_exponent !== undefined && object.quantum_conversion_exponent !== null) {
            message.quantumConversionExponent = object.quantum_conversion_exponent;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.perpetual_clob_metadata = message.perpetualClobMetadata ? exports.PerpetualClobMetadata.toAmino(message.perpetualClobMetadata) : undefined;
        obj.spot_clob_metadata = message.spotClobMetadata ? exports.SpotClobMetadata.toAmino(message.spotClobMetadata) : undefined;
        obj.step_base_quantums = message.stepBaseQuantums !== BigInt(0) ? ((_a = message.stepBaseQuantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.subticks_per_tick = message.subticksPerTick === 0 ? undefined : message.subticksPerTick;
        obj.quantum_conversion_exponent = message.quantumConversionExponent === 0 ? undefined : message.quantumConversionExponent;
        obj.status = message.status === 0 ? undefined : message.status;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ClobPair.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ClobPair.decode(message.value);
    },
    toProto: function (message) {
        return exports.ClobPair.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.ClobPair",
            value: exports.ClobPair.encode(message).finish()
        };
    }
};
