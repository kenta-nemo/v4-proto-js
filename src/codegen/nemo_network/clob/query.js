"use strict";
exports.__esModule = true;
exports.StreamTakerOrderStatus = exports.StreamTakerOrder = exports.StreamOrderbookFill = exports.StreamOrderbookUpdate = exports.StreamUpdate = exports.StreamOrderbookUpdatesResponse = exports.StreamOrderbookUpdatesRequest = exports.QueryLiquidationsConfigurationResponse = exports.QueryLiquidationsConfigurationRequest = exports.QueryStatefulOrderResponse = exports.QueryStatefulOrderRequest = exports.QueryBlockRateLimitConfigurationResponse = exports.QueryBlockRateLimitConfigurationRequest = exports.QueryEquityTierLimitConfigurationResponse = exports.QueryEquityTierLimitConfigurationRequest = exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob = exports.MevNodeToNodeCalculationResponse = exports.MevNodeToNodeCalculationRequest = exports.QueryClobPairAllResponse = exports.QueryAllClobPairRequest = exports.QueryClobPairResponse = exports.QueryGetClobPairRequest = void 0;
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var mev_1 = require("./mev");
var order_1 = require("./order");
var subaccount_1 = require("../subaccounts/subaccount");
var clob_pair_1 = require("./clob_pair");
var equity_tier_limit_config_1 = require("./equity_tier_limit_config");
var block_rate_limit_config_1 = require("./block_rate_limit_config");
var liquidations_config_1 = require("./liquidations_config");
var streaming_1 = require("../subaccounts/streaming");
var off_chain_updates_1 = require("../indexer/off_chain_updates/off_chain_updates");
var matches_1 = require("./matches");
var binary_1 = require("../../binary");
function createBaseQueryGetClobPairRequest() {
    return {
        id: 0
    };
}
exports.QueryGetClobPairRequest = {
    typeUrl: "/nemo_network.clob.QueryGetClobPairRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetClobPairRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
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
        var message = createBaseQueryGetClobPairRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryGetClobPairRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryGetClobPairRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryGetClobPairRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryGetClobPairRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryGetClobPairRequest",
            value: exports.QueryGetClobPairRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClobPairResponse() {
    return {
        clobPair: clob_pair_1.ClobPair.fromPartial({})
    };
}
exports.QueryClobPairResponse = {
    typeUrl: "/nemo_network.clob.QueryClobPairResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.clobPair !== undefined) {
            clob_pair_1.ClobPair.encode(message.clobPair, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClobPairResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPair = clob_pair_1.ClobPair.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryClobPairResponse();
        message.clobPair = object.clobPair !== undefined && object.clobPair !== null ? clob_pair_1.ClobPair.fromPartial(object.clobPair) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryClobPairResponse();
        if (object.clob_pair !== undefined && object.clob_pair !== null) {
            message.clobPair = clob_pair_1.ClobPair.fromAmino(object.clob_pair);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.clob_pair = message.clobPair ? clob_pair_1.ClobPair.toAmino(message.clobPair) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryClobPairResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryClobPairResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryClobPairResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryClobPairResponse",
            value: exports.QueryClobPairResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllClobPairRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllClobPairRequest = {
    typeUrl: "/nemo_network.clob.QueryAllClobPairRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllClobPairRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllClobPairRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllClobPairRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllClobPairRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllClobPairRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllClobPairRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryAllClobPairRequest",
            value: exports.QueryAllClobPairRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClobPairAllResponse() {
    return {
        clobPair: [],
        pagination: undefined
    };
}
exports.QueryClobPairAllResponse = {
    typeUrl: "/nemo_network.clob.QueryClobPairAllResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.clobPair; _i < _a.length; _i++) {
            var v = _a[_i];
            clob_pair_1.ClobPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClobPairAllResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPair.push(clob_pair_1.ClobPair.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryClobPairAllResponse();
        message.clobPair = ((_a = object.clobPair) === null || _a === void 0 ? void 0 : _a.map(function (e) { return clob_pair_1.ClobPair.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryClobPairAllResponse();
        message.clobPair = ((_a = object.clob_pair) === null || _a === void 0 ? void 0 : _a.map(function (e) { return clob_pair_1.ClobPair.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.clobPair) {
            obj.clob_pair = message.clobPair.map(function (e) { return e ? clob_pair_1.ClobPair.toAmino(e) : undefined; });
        }
        else {
            obj.clob_pair = message.clobPair;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryClobPairAllResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryClobPairAllResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryClobPairAllResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryClobPairAllResponse",
            value: exports.QueryClobPairAllResponse.encode(message).finish()
        };
    }
};
function createBaseMevNodeToNodeCalculationRequest() {
    return {
        blockProposerMatches: undefined,
        validatorMevMetrics: undefined
    };
}
exports.MevNodeToNodeCalculationRequest = {
    typeUrl: "/nemo_network.clob.MevNodeToNodeCalculationRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockProposerMatches !== undefined) {
            mev_1.ValidatorMevMatches.encode(message.blockProposerMatches, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorMevMetrics !== undefined) {
            mev_1.MevNodeToNodeMetrics.encode(message.validatorMevMetrics, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMevNodeToNodeCalculationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockProposerMatches = mev_1.ValidatorMevMatches.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorMevMetrics = mev_1.MevNodeToNodeMetrics.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMevNodeToNodeCalculationRequest();
        message.blockProposerMatches = object.blockProposerMatches !== undefined && object.blockProposerMatches !== null ? mev_1.ValidatorMevMatches.fromPartial(object.blockProposerMatches) : undefined;
        message.validatorMevMetrics = object.validatorMevMetrics !== undefined && object.validatorMevMetrics !== null ? mev_1.MevNodeToNodeMetrics.fromPartial(object.validatorMevMetrics) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMevNodeToNodeCalculationRequest();
        if (object.block_proposer_matches !== undefined && object.block_proposer_matches !== null) {
            message.blockProposerMatches = mev_1.ValidatorMevMatches.fromAmino(object.block_proposer_matches);
        }
        if (object.validator_mev_metrics !== undefined && object.validator_mev_metrics !== null) {
            message.validatorMevMetrics = mev_1.MevNodeToNodeMetrics.fromAmino(object.validator_mev_metrics);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.block_proposer_matches = message.blockProposerMatches ? mev_1.ValidatorMevMatches.toAmino(message.blockProposerMatches) : undefined;
        obj.validator_mev_metrics = message.validatorMevMetrics ? mev_1.MevNodeToNodeMetrics.toAmino(message.validatorMevMetrics) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MevNodeToNodeCalculationRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MevNodeToNodeCalculationRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.MevNodeToNodeCalculationRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MevNodeToNodeCalculationRequest",
            value: exports.MevNodeToNodeCalculationRequest.encode(message).finish()
        };
    }
};
function createBaseMevNodeToNodeCalculationResponse() {
    return {
        results: []
    };
}
exports.MevNodeToNodeCalculationResponse = {
    typeUrl: "/nemo_network.clob.MevNodeToNodeCalculationResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.results; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMevNodeToNodeCalculationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob.decode(reader, reader.uint32()));
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
        var message = createBaseMevNodeToNodeCalculationResponse();
        message.results = ((_a = object.results) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMevNodeToNodeCalculationResponse();
        message.results = ((_a = object.results) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.results) {
            obj.results = message.results.map(function (e) { return e ? exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob.toAmino(e) : undefined; });
        }
        else {
            obj.results = message.results;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MevNodeToNodeCalculationResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MevNodeToNodeCalculationResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MevNodeToNodeCalculationResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MevNodeToNodeCalculationResponse",
            value: exports.MevNodeToNodeCalculationResponse.encode(message).finish()
        };
    }
};
function createBaseMevNodeToNodeCalculationResponse_MevAndVolumePerClob() {
    return {
        clobPairId: 0,
        mev: 0,
        volume: BigInt(0)
    };
}
exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob = {
    typeUrl: "/nemo_network.clob.MevAndVolumePerClob",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.clobPairId !== 0) {
            writer.uint32(8).uint32(message.clobPairId);
        }
        if (message.mev !== 0) {
            writer.uint32(21).float(message.mev);
        }
        if (message.volume !== BigInt(0)) {
            writer.uint32(24).uint64(message.volume);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMevNodeToNodeCalculationResponse_MevAndVolumePerClob();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPairId = reader.uint32();
                    break;
                case 2:
                    message.mev = reader.float();
                    break;
                case 3:
                    message.volume = reader.uint64();
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
        var message = createBaseMevNodeToNodeCalculationResponse_MevAndVolumePerClob();
        message.clobPairId = (_a = object.clobPairId) !== null && _a !== void 0 ? _a : 0;
        message.mev = (_b = object.mev) !== null && _b !== void 0 ? _b : 0;
        message.volume = object.volume !== undefined && object.volume !== null ? BigInt(object.volume.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMevNodeToNodeCalculationResponse_MevAndVolumePerClob();
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.mev !== undefined && object.mev !== null) {
            message.mev = object.mev;
        }
        if (object.volume !== undefined && object.volume !== null) {
            message.volume = BigInt(object.volume);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        obj.mev = message.mev === 0 ? undefined : message.mev;
        obj.volume = message.volume !== BigInt(0) ? ((_a = message.volume) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob.decode(message.value);
    },
    toProto: function (message) {
        return exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MevAndVolumePerClob",
            value: exports.MevNodeToNodeCalculationResponse_MevAndVolumePerClob.encode(message).finish()
        };
    }
};
function createBaseQueryEquityTierLimitConfigurationRequest() {
    return {};
}
exports.QueryEquityTierLimitConfigurationRequest = {
    typeUrl: "/nemo_network.clob.QueryEquityTierLimitConfigurationRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryEquityTierLimitConfigurationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQueryEquityTierLimitConfigurationRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryEquityTierLimitConfigurationRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryEquityTierLimitConfigurationRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryEquityTierLimitConfigurationRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryEquityTierLimitConfigurationRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryEquityTierLimitConfigurationRequest",
            value: exports.QueryEquityTierLimitConfigurationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEquityTierLimitConfigurationResponse() {
    return {
        equityTierLimitConfig: equity_tier_limit_config_1.EquityTierLimitConfiguration.fromPartial({})
    };
}
exports.QueryEquityTierLimitConfigurationResponse = {
    typeUrl: "/nemo_network.clob.QueryEquityTierLimitConfigurationResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.equityTierLimitConfig !== undefined) {
            equity_tier_limit_config_1.EquityTierLimitConfiguration.encode(message.equityTierLimitConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryEquityTierLimitConfigurationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.equityTierLimitConfig = equity_tier_limit_config_1.EquityTierLimitConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryEquityTierLimitConfigurationResponse();
        message.equityTierLimitConfig = object.equityTierLimitConfig !== undefined && object.equityTierLimitConfig !== null ? equity_tier_limit_config_1.EquityTierLimitConfiguration.fromPartial(object.equityTierLimitConfig) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryEquityTierLimitConfigurationResponse();
        if (object.equity_tier_limit_config !== undefined && object.equity_tier_limit_config !== null) {
            message.equityTierLimitConfig = equity_tier_limit_config_1.EquityTierLimitConfiguration.fromAmino(object.equity_tier_limit_config);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.equity_tier_limit_config = message.equityTierLimitConfig ? equity_tier_limit_config_1.EquityTierLimitConfiguration.toAmino(message.equityTierLimitConfig) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryEquityTierLimitConfigurationResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryEquityTierLimitConfigurationResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryEquityTierLimitConfigurationResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryEquityTierLimitConfigurationResponse",
            value: exports.QueryEquityTierLimitConfigurationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBlockRateLimitConfigurationRequest() {
    return {};
}
exports.QueryBlockRateLimitConfigurationRequest = {
    typeUrl: "/nemo_network.clob.QueryBlockRateLimitConfigurationRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBlockRateLimitConfigurationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQueryBlockRateLimitConfigurationRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryBlockRateLimitConfigurationRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryBlockRateLimitConfigurationRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryBlockRateLimitConfigurationRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryBlockRateLimitConfigurationRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryBlockRateLimitConfigurationRequest",
            value: exports.QueryBlockRateLimitConfigurationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBlockRateLimitConfigurationResponse() {
    return {
        blockRateLimitConfig: block_rate_limit_config_1.BlockRateLimitConfiguration.fromPartial({})
    };
}
exports.QueryBlockRateLimitConfigurationResponse = {
    typeUrl: "/nemo_network.clob.QueryBlockRateLimitConfigurationResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockRateLimitConfig !== undefined) {
            block_rate_limit_config_1.BlockRateLimitConfiguration.encode(message.blockRateLimitConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBlockRateLimitConfigurationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockRateLimitConfig = block_rate_limit_config_1.BlockRateLimitConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryBlockRateLimitConfigurationResponse();
        message.blockRateLimitConfig = object.blockRateLimitConfig !== undefined && object.blockRateLimitConfig !== null ? block_rate_limit_config_1.BlockRateLimitConfiguration.fromPartial(object.blockRateLimitConfig) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryBlockRateLimitConfigurationResponse();
        if (object.block_rate_limit_config !== undefined && object.block_rate_limit_config !== null) {
            message.blockRateLimitConfig = block_rate_limit_config_1.BlockRateLimitConfiguration.fromAmino(object.block_rate_limit_config);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.block_rate_limit_config = message.blockRateLimitConfig ? block_rate_limit_config_1.BlockRateLimitConfiguration.toAmino(message.blockRateLimitConfig) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryBlockRateLimitConfigurationResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryBlockRateLimitConfigurationResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryBlockRateLimitConfigurationResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryBlockRateLimitConfigurationResponse",
            value: exports.QueryBlockRateLimitConfigurationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryStatefulOrderRequest() {
    return {
        orderId: order_1.OrderId.fromPartial({})
    };
}
exports.QueryStatefulOrderRequest = {
    typeUrl: "/nemo_network.clob.QueryStatefulOrderRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderId !== undefined) {
            order_1.OrderId.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStatefulOrderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = order_1.OrderId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryStatefulOrderRequest();
        message.orderId = object.orderId !== undefined && object.orderId !== null ? order_1.OrderId.fromPartial(object.orderId) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryStatefulOrderRequest();
        if (object.order_id !== undefined && object.order_id !== null) {
            message.orderId = order_1.OrderId.fromAmino(object.order_id);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order_id = message.orderId ? order_1.OrderId.toAmino(message.orderId) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryStatefulOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryStatefulOrderRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryStatefulOrderRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryStatefulOrderRequest",
            value: exports.QueryStatefulOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryStatefulOrderResponse() {
    return {
        orderPlacement: order_1.LongTermOrderPlacement.fromPartial({}),
        fillAmount: BigInt(0),
        triggered: false
    };
}
exports.QueryStatefulOrderResponse = {
    typeUrl: "/nemo_network.clob.QueryStatefulOrderResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderPlacement !== undefined) {
            order_1.LongTermOrderPlacement.encode(message.orderPlacement, writer.uint32(10).fork()).ldelim();
        }
        if (message.fillAmount !== BigInt(0)) {
            writer.uint32(16).uint64(message.fillAmount);
        }
        if (message.triggered === true) {
            writer.uint32(24).bool(message.triggered);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStatefulOrderResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderPlacement = order_1.LongTermOrderPlacement.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fillAmount = reader.uint64();
                    break;
                case 3:
                    message.triggered = reader.bool();
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
        var message = createBaseQueryStatefulOrderResponse();
        message.orderPlacement = object.orderPlacement !== undefined && object.orderPlacement !== null ? order_1.LongTermOrderPlacement.fromPartial(object.orderPlacement) : undefined;
        message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
        message.triggered = (_a = object.triggered) !== null && _a !== void 0 ? _a : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryStatefulOrderResponse();
        if (object.order_placement !== undefined && object.order_placement !== null) {
            message.orderPlacement = order_1.LongTermOrderPlacement.fromAmino(object.order_placement);
        }
        if (object.fill_amount !== undefined && object.fill_amount !== null) {
            message.fillAmount = BigInt(object.fill_amount);
        }
        if (object.triggered !== undefined && object.triggered !== null) {
            message.triggered = object.triggered;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.order_placement = message.orderPlacement ? order_1.LongTermOrderPlacement.toAmino(message.orderPlacement) : undefined;
        obj.fill_amount = message.fillAmount !== BigInt(0) ? ((_a = message.fillAmount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.triggered = message.triggered === false ? undefined : message.triggered;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryStatefulOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryStatefulOrderResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryStatefulOrderResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryStatefulOrderResponse",
            value: exports.QueryStatefulOrderResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidationsConfigurationRequest() {
    return {};
}
exports.QueryLiquidationsConfigurationRequest = {
    typeUrl: "/nemo_network.clob.QueryLiquidationsConfigurationRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryLiquidationsConfigurationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQueryLiquidationsConfigurationRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryLiquidationsConfigurationRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryLiquidationsConfigurationRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryLiquidationsConfigurationRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryLiquidationsConfigurationRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryLiquidationsConfigurationRequest",
            value: exports.QueryLiquidationsConfigurationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidationsConfigurationResponse() {
    return {
        liquidationsConfig: liquidations_config_1.LiquidationsConfig.fromPartial({})
    };
}
exports.QueryLiquidationsConfigurationResponse = {
    typeUrl: "/nemo_network.clob.QueryLiquidationsConfigurationResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.liquidationsConfig !== undefined) {
            liquidations_config_1.LiquidationsConfig.encode(message.liquidationsConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryLiquidationsConfigurationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidationsConfig = liquidations_config_1.LiquidationsConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryLiquidationsConfigurationResponse();
        message.liquidationsConfig = object.liquidationsConfig !== undefined && object.liquidationsConfig !== null ? liquidations_config_1.LiquidationsConfig.fromPartial(object.liquidationsConfig) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryLiquidationsConfigurationResponse();
        if (object.liquidations_config !== undefined && object.liquidations_config !== null) {
            message.liquidationsConfig = liquidations_config_1.LiquidationsConfig.fromAmino(object.liquidations_config);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.liquidations_config = message.liquidationsConfig ? liquidations_config_1.LiquidationsConfig.toAmino(message.liquidationsConfig) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryLiquidationsConfigurationResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryLiquidationsConfigurationResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryLiquidationsConfigurationResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.QueryLiquidationsConfigurationResponse",
            value: exports.QueryLiquidationsConfigurationResponse.encode(message).finish()
        };
    }
};
function createBaseStreamOrderbookUpdatesRequest() {
    return {
        clobPairId: [],
        subaccountIds: []
    };
}
exports.StreamOrderbookUpdatesRequest = {
    typeUrl: "/nemo_network.clob.StreamOrderbookUpdatesRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.clobPairId; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(v);
        }
        writer.ldelim();
        for (var _b = 0, _c = message.subaccountIds; _b < _c.length; _b++) {
            var v = _c[_b];
            subaccount_1.SubaccountId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamOrderbookUpdatesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.clobPairId.push(reader.uint32());
                        }
                    }
                    else {
                        message.clobPairId.push(reader.uint32());
                    }
                    break;
                case 2:
                    message.subaccountIds.push(subaccount_1.SubaccountId.decode(reader, reader.uint32()));
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
        var message = createBaseStreamOrderbookUpdatesRequest();
        message.clobPairId = ((_a = object.clobPairId) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.subaccountIds = ((_b = object.subaccountIds) === null || _b === void 0 ? void 0 : _b.map(function (e) { return subaccount_1.SubaccountId.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseStreamOrderbookUpdatesRequest();
        message.clobPairId = ((_a = object.clob_pair_id) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.subaccountIds = ((_b = object.subaccount_ids) === null || _b === void 0 ? void 0 : _b.map(function (e) { return subaccount_1.SubaccountId.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.clobPairId) {
            obj.clob_pair_id = message.clobPairId.map(function (e) { return e; });
        }
        else {
            obj.clob_pair_id = message.clobPairId;
        }
        if (message.subaccountIds) {
            obj.subaccount_ids = message.subaccountIds.map(function (e) { return e ? subaccount_1.SubaccountId.toAmino(e) : undefined; });
        }
        else {
            obj.subaccount_ids = message.subaccountIds;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StreamOrderbookUpdatesRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StreamOrderbookUpdatesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.StreamOrderbookUpdatesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.StreamOrderbookUpdatesRequest",
            value: exports.StreamOrderbookUpdatesRequest.encode(message).finish()
        };
    }
};
function createBaseStreamOrderbookUpdatesResponse() {
    return {
        updates: []
    };
}
exports.StreamOrderbookUpdatesResponse = {
    typeUrl: "/nemo_network.clob.StreamOrderbookUpdatesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.updates; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StreamUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamOrderbookUpdatesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updates.push(exports.StreamUpdate.decode(reader, reader.uint32()));
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
        var message = createBaseStreamOrderbookUpdatesResponse();
        message.updates = ((_a = object.updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StreamUpdate.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseStreamOrderbookUpdatesResponse();
        message.updates = ((_a = object.updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StreamUpdate.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.updates) {
            obj.updates = message.updates.map(function (e) { return e ? exports.StreamUpdate.toAmino(e) : undefined; });
        }
        else {
            obj.updates = message.updates;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StreamOrderbookUpdatesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StreamOrderbookUpdatesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.StreamOrderbookUpdatesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.StreamOrderbookUpdatesResponse",
            value: exports.StreamOrderbookUpdatesResponse.encode(message).finish()
        };
    }
};
function createBaseStreamUpdate() {
    return {
        orderbookUpdate: undefined,
        orderFill: undefined,
        takerOrder: undefined,
        subaccountUpdate: undefined,
        blockHeight: 0,
        execMode: 0
    };
}
exports.StreamUpdate = {
    typeUrl: "/nemo_network.clob.StreamUpdate",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderbookUpdate !== undefined) {
            exports.StreamOrderbookUpdate.encode(message.orderbookUpdate, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderFill !== undefined) {
            exports.StreamOrderbookFill.encode(message.orderFill, writer.uint32(18).fork()).ldelim();
        }
        if (message.takerOrder !== undefined) {
            exports.StreamTakerOrder.encode(message.takerOrder, writer.uint32(26).fork()).ldelim();
        }
        if (message.subaccountUpdate !== undefined) {
            streaming_1.StreamSubaccountUpdate.encode(message.subaccountUpdate, writer.uint32(34).fork()).ldelim();
        }
        if (message.blockHeight !== 0) {
            writer.uint32(40).uint32(message.blockHeight);
        }
        if (message.execMode !== 0) {
            writer.uint32(48).uint32(message.execMode);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderbookUpdate = exports.StreamOrderbookUpdate.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderFill = exports.StreamOrderbookFill.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.takerOrder = exports.StreamTakerOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subaccountUpdate = streaming_1.StreamSubaccountUpdate.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.blockHeight = reader.uint32();
                    break;
                case 6:
                    message.execMode = reader.uint32();
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
        var message = createBaseStreamUpdate();
        message.orderbookUpdate = object.orderbookUpdate !== undefined && object.orderbookUpdate !== null ? exports.StreamOrderbookUpdate.fromPartial(object.orderbookUpdate) : undefined;
        message.orderFill = object.orderFill !== undefined && object.orderFill !== null ? exports.StreamOrderbookFill.fromPartial(object.orderFill) : undefined;
        message.takerOrder = object.takerOrder !== undefined && object.takerOrder !== null ? exports.StreamTakerOrder.fromPartial(object.takerOrder) : undefined;
        message.subaccountUpdate = object.subaccountUpdate !== undefined && object.subaccountUpdate !== null ? streaming_1.StreamSubaccountUpdate.fromPartial(object.subaccountUpdate) : undefined;
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : 0;
        message.execMode = (_b = object.execMode) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStreamUpdate();
        if (object.orderbook_update !== undefined && object.orderbook_update !== null) {
            message.orderbookUpdate = exports.StreamOrderbookUpdate.fromAmino(object.orderbook_update);
        }
        if (object.order_fill !== undefined && object.order_fill !== null) {
            message.orderFill = exports.StreamOrderbookFill.fromAmino(object.order_fill);
        }
        if (object.taker_order !== undefined && object.taker_order !== null) {
            message.takerOrder = exports.StreamTakerOrder.fromAmino(object.taker_order);
        }
        if (object.subaccount_update !== undefined && object.subaccount_update !== null) {
            message.subaccountUpdate = streaming_1.StreamSubaccountUpdate.fromAmino(object.subaccount_update);
        }
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        if (object.exec_mode !== undefined && object.exec_mode !== null) {
            message.execMode = object.exec_mode;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.orderbook_update = message.orderbookUpdate ? exports.StreamOrderbookUpdate.toAmino(message.orderbookUpdate) : undefined;
        obj.order_fill = message.orderFill ? exports.StreamOrderbookFill.toAmino(message.orderFill) : undefined;
        obj.taker_order = message.takerOrder ? exports.StreamTakerOrder.toAmino(message.takerOrder) : undefined;
        obj.subaccount_update = message.subaccountUpdate ? streaming_1.StreamSubaccountUpdate.toAmino(message.subaccountUpdate) : undefined;
        obj.block_height = message.blockHeight === 0 ? undefined : message.blockHeight;
        obj.exec_mode = message.execMode === 0 ? undefined : message.execMode;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StreamUpdate.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StreamUpdate.decode(message.value);
    },
    toProto: function (message) {
        return exports.StreamUpdate.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.StreamUpdate",
            value: exports.StreamUpdate.encode(message).finish()
        };
    }
};
function createBaseStreamOrderbookUpdate() {
    return {
        updates: [],
        snapshot: false
    };
}
exports.StreamOrderbookUpdate = {
    typeUrl: "/nemo_network.clob.StreamOrderbookUpdate",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.updates; _i < _a.length; _i++) {
            var v = _a[_i];
            off_chain_updates_1.OffChainUpdateV1.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.snapshot === true) {
            writer.uint32(16).bool(message.snapshot);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamOrderbookUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updates.push(off_chain_updates_1.OffChainUpdateV1.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.snapshot = reader.bool();
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
        var message = createBaseStreamOrderbookUpdate();
        message.updates = ((_a = object.updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return off_chain_updates_1.OffChainUpdateV1.fromPartial(e); })) || [];
        message.snapshot = (_b = object.snapshot) !== null && _b !== void 0 ? _b : false;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseStreamOrderbookUpdate();
        message.updates = ((_a = object.updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return off_chain_updates_1.OffChainUpdateV1.fromAmino(e); })) || [];
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = object.snapshot;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.updates) {
            obj.updates = message.updates.map(function (e) { return e ? off_chain_updates_1.OffChainUpdateV1.toAmino(e) : undefined; });
        }
        else {
            obj.updates = message.updates;
        }
        obj.snapshot = message.snapshot === false ? undefined : message.snapshot;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StreamOrderbookUpdate.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StreamOrderbookUpdate.decode(message.value);
    },
    toProto: function (message) {
        return exports.StreamOrderbookUpdate.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.StreamOrderbookUpdate",
            value: exports.StreamOrderbookUpdate.encode(message).finish()
        };
    }
};
function createBaseStreamOrderbookFill() {
    return {
        clobMatch: undefined,
        orders: [],
        fillAmounts: []
    };
}
exports.StreamOrderbookFill = {
    typeUrl: "/nemo_network.clob.StreamOrderbookFill",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.clobMatch !== undefined) {
            matches_1.ClobMatch.encode(message.clobMatch, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.orders; _i < _a.length; _i++) {
            var v = _a[_i];
            order_1.Order.encode(v, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).fork();
        for (var _b = 0, _c = message.fillAmounts; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamOrderbookFill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobMatch = matches_1.ClobMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orders.push(order_1.Order.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.fillAmounts.push(reader.uint64());
                        }
                    }
                    else {
                        message.fillAmounts.push(reader.uint64());
                    }
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
        var message = createBaseStreamOrderbookFill();
        message.clobMatch = object.clobMatch !== undefined && object.clobMatch !== null ? matches_1.ClobMatch.fromPartial(object.clobMatch) : undefined;
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map(function (e) { return order_1.Order.fromPartial(e); })) || [];
        message.fillAmounts = ((_b = object.fillAmounts) === null || _b === void 0 ? void 0 : _b.map(function (e) { return BigInt(e.toString()); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseStreamOrderbookFill();
        if (object.clob_match !== undefined && object.clob_match !== null) {
            message.clobMatch = matches_1.ClobMatch.fromAmino(object.clob_match);
        }
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map(function (e) { return order_1.Order.fromAmino(e); })) || [];
        message.fillAmounts = ((_b = object.fill_amounts) === null || _b === void 0 ? void 0 : _b.map(function (e) { return BigInt(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.clob_match = message.clobMatch ? matches_1.ClobMatch.toAmino(message.clobMatch) : undefined;
        if (message.orders) {
            obj.orders = message.orders.map(function (e) { return e ? order_1.Order.toAmino(e) : undefined; });
        }
        else {
            obj.orders = message.orders;
        }
        if (message.fillAmounts) {
            obj.fill_amounts = message.fillAmounts.map(function (e) { return e.toString(); });
        }
        else {
            obj.fill_amounts = message.fillAmounts;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StreamOrderbookFill.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StreamOrderbookFill.decode(message.value);
    },
    toProto: function (message) {
        return exports.StreamOrderbookFill.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.StreamOrderbookFill",
            value: exports.StreamOrderbookFill.encode(message).finish()
        };
    }
};
function createBaseStreamTakerOrder() {
    return {
        order: undefined,
        liquidationOrder: undefined,
        takerOrderStatus: undefined
    };
}
exports.StreamTakerOrder = {
    typeUrl: "/nemo_network.clob.StreamTakerOrder",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.order !== undefined) {
            order_1.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.liquidationOrder !== undefined) {
            order_1.StreamLiquidationOrder.encode(message.liquidationOrder, writer.uint32(18).fork()).ldelim();
        }
        if (message.takerOrderStatus !== undefined) {
            exports.StreamTakerOrderStatus.encode(message.takerOrderStatus, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamTakerOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = order_1.Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.liquidationOrder = order_1.StreamLiquidationOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.takerOrderStatus = exports.StreamTakerOrderStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseStreamTakerOrder();
        message.order = object.order !== undefined && object.order !== null ? order_1.Order.fromPartial(object.order) : undefined;
        message.liquidationOrder = object.liquidationOrder !== undefined && object.liquidationOrder !== null ? order_1.StreamLiquidationOrder.fromPartial(object.liquidationOrder) : undefined;
        message.takerOrderStatus = object.takerOrderStatus !== undefined && object.takerOrderStatus !== null ? exports.StreamTakerOrderStatus.fromPartial(object.takerOrderStatus) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStreamTakerOrder();
        if (object.order !== undefined && object.order !== null) {
            message.order = order_1.Order.fromAmino(object.order);
        }
        if (object.liquidation_order !== undefined && object.liquidation_order !== null) {
            message.liquidationOrder = order_1.StreamLiquidationOrder.fromAmino(object.liquidation_order);
        }
        if (object.taker_order_status !== undefined && object.taker_order_status !== null) {
            message.takerOrderStatus = exports.StreamTakerOrderStatus.fromAmino(object.taker_order_status);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order = message.order ? order_1.Order.toAmino(message.order) : undefined;
        obj.liquidation_order = message.liquidationOrder ? order_1.StreamLiquidationOrder.toAmino(message.liquidationOrder) : undefined;
        obj.taker_order_status = message.takerOrderStatus ? exports.StreamTakerOrderStatus.toAmino(message.takerOrderStatus) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StreamTakerOrder.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StreamTakerOrder.decode(message.value);
    },
    toProto: function (message) {
        return exports.StreamTakerOrder.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.StreamTakerOrder",
            value: exports.StreamTakerOrder.encode(message).finish()
        };
    }
};
function createBaseStreamTakerOrderStatus() {
    return {
        orderStatus: 0,
        remainingQuantums: BigInt(0),
        optimisticallyFilledQuantums: BigInt(0)
    };
}
exports.StreamTakerOrderStatus = {
    typeUrl: "/nemo_network.clob.StreamTakerOrderStatus",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderStatus !== 0) {
            writer.uint32(8).uint32(message.orderStatus);
        }
        if (message.remainingQuantums !== BigInt(0)) {
            writer.uint32(16).uint64(message.remainingQuantums);
        }
        if (message.optimisticallyFilledQuantums !== BigInt(0)) {
            writer.uint32(24).uint64(message.optimisticallyFilledQuantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamTakerOrderStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderStatus = reader.uint32();
                    break;
                case 2:
                    message.remainingQuantums = reader.uint64();
                    break;
                case 3:
                    message.optimisticallyFilledQuantums = reader.uint64();
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
        var message = createBaseStreamTakerOrderStatus();
        message.orderStatus = (_a = object.orderStatus) !== null && _a !== void 0 ? _a : 0;
        message.remainingQuantums = object.remainingQuantums !== undefined && object.remainingQuantums !== null ? BigInt(object.remainingQuantums.toString()) : BigInt(0);
        message.optimisticallyFilledQuantums = object.optimisticallyFilledQuantums !== undefined && object.optimisticallyFilledQuantums !== null ? BigInt(object.optimisticallyFilledQuantums.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStreamTakerOrderStatus();
        if (object.order_status !== undefined && object.order_status !== null) {
            message.orderStatus = object.order_status;
        }
        if (object.remaining_quantums !== undefined && object.remaining_quantums !== null) {
            message.remainingQuantums = BigInt(object.remaining_quantums);
        }
        if (object.optimistically_filled_quantums !== undefined && object.optimistically_filled_quantums !== null) {
            message.optimisticallyFilledQuantums = BigInt(object.optimistically_filled_quantums);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.order_status = message.orderStatus === 0 ? undefined : message.orderStatus;
        obj.remaining_quantums = message.remainingQuantums !== BigInt(0) ? ((_a = message.remainingQuantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.optimistically_filled_quantums = message.optimisticallyFilledQuantums !== BigInt(0) ? ((_b = message.optimisticallyFilledQuantums) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StreamTakerOrderStatus.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StreamTakerOrderStatus.decode(message.value);
    },
    toProto: function (message) {
        return exports.StreamTakerOrderStatus.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.StreamTakerOrderStatus",
            value: exports.StreamTakerOrderStatus.encode(message).finish()
        };
    }
};
