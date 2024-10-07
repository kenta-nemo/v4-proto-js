"use strict";
exports.__esModule = true;
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPremiumSamplesResponse = exports.QueryPremiumSamplesRequest = exports.QueryPremiumVotesResponse = exports.QueryPremiumVotesRequest = exports.QueryAllLiquidityTiersResponse = exports.QueryAllLiquidityTiersRequest = exports.QueryAllPerpetualsResponse = exports.QueryAllPerpetualsRequest = exports.QueryPerpetualResponse = exports.QueryPerpetualRequest = void 0;
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var perpetual_1 = require("./perpetual");
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseQueryPerpetualRequest() {
    return {
        id: 0
    };
}
exports.QueryPerpetualRequest = {
    typeUrl: "/nemo_network.perpetuals.QueryPerpetualRequest",
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
        var message = createBaseQueryPerpetualRequest();
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
        var message = createBaseQueryPerpetualRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryPerpetualRequest();
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
        return exports.QueryPerpetualRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPerpetualRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPerpetualRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryPerpetualRequest",
            value: exports.QueryPerpetualRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualResponse() {
    return {
        perpetual: perpetual_1.Perpetual.fromPartial({})
    };
}
exports.QueryPerpetualResponse = {
    typeUrl: "/nemo_network.perpetuals.QueryPerpetualResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetual !== undefined) {
            perpetual_1.Perpetual.encode(message.perpetual, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPerpetualResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetual = perpetual_1.Perpetual.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryPerpetualResponse();
        message.perpetual = object.perpetual !== undefined && object.perpetual !== null ? perpetual_1.Perpetual.fromPartial(object.perpetual) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryPerpetualResponse();
        if (object.perpetual !== undefined && object.perpetual !== null) {
            message.perpetual = perpetual_1.Perpetual.fromAmino(object.perpetual);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual = message.perpetual ? perpetual_1.Perpetual.toAmino(message.perpetual) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryPerpetualResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPerpetualResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPerpetualResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryPerpetualResponse",
            value: exports.QueryPerpetualResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllPerpetualsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllPerpetualsRequest = {
    typeUrl: "/nemo_network.perpetuals.QueryAllPerpetualsRequest",
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
        var message = createBaseQueryAllPerpetualsRequest();
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
        var message = createBaseQueryAllPerpetualsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllPerpetualsRequest();
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
        return exports.QueryAllPerpetualsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllPerpetualsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllPerpetualsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryAllPerpetualsRequest",
            value: exports.QueryAllPerpetualsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllPerpetualsResponse() {
    return {
        perpetual: [],
        pagination: undefined
    };
}
exports.QueryAllPerpetualsResponse = {
    typeUrl: "/nemo_network.perpetuals.QueryAllPerpetualsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.perpetual; _i < _a.length; _i++) {
            var v = _a[_i];
            perpetual_1.Perpetual.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllPerpetualsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetual.push(perpetual_1.Perpetual.decode(reader, reader.uint32()));
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
        var message = createBaseQueryAllPerpetualsResponse();
        message.perpetual = ((_a = object.perpetual) === null || _a === void 0 ? void 0 : _a.map(function (e) { return perpetual_1.Perpetual.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryAllPerpetualsResponse();
        message.perpetual = ((_a = object.perpetual) === null || _a === void 0 ? void 0 : _a.map(function (e) { return perpetual_1.Perpetual.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.perpetual) {
            obj.perpetual = message.perpetual.map(function (e) { return e ? perpetual_1.Perpetual.toAmino(e) : undefined; });
        }
        else {
            obj.perpetual = message.perpetual;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllPerpetualsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllPerpetualsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllPerpetualsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryAllPerpetualsResponse",
            value: exports.QueryAllPerpetualsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllLiquidityTiersRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllLiquidityTiersRequest = {
    typeUrl: "/nemo_network.perpetuals.QueryAllLiquidityTiersRequest",
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
        var message = createBaseQueryAllLiquidityTiersRequest();
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
        var message = createBaseQueryAllLiquidityTiersRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllLiquidityTiersRequest();
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
        return exports.QueryAllLiquidityTiersRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllLiquidityTiersRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllLiquidityTiersRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryAllLiquidityTiersRequest",
            value: exports.QueryAllLiquidityTiersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllLiquidityTiersResponse() {
    return {
        liquidityTiers: [],
        pagination: undefined
    };
}
exports.QueryAllLiquidityTiersResponse = {
    typeUrl: "/nemo_network.perpetuals.QueryAllLiquidityTiersResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.liquidityTiers; _i < _a.length; _i++) {
            var v = _a[_i];
            perpetual_1.LiquidityTier.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllLiquidityTiersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityTiers.push(perpetual_1.LiquidityTier.decode(reader, reader.uint32()));
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
        var message = createBaseQueryAllLiquidityTiersResponse();
        message.liquidityTiers = ((_a = object.liquidityTiers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return perpetual_1.LiquidityTier.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryAllLiquidityTiersResponse();
        message.liquidityTiers = ((_a = object.liquidity_tiers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return perpetual_1.LiquidityTier.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.liquidityTiers) {
            obj.liquidity_tiers = message.liquidityTiers.map(function (e) { return e ? perpetual_1.LiquidityTier.toAmino(e) : undefined; });
        }
        else {
            obj.liquidity_tiers = message.liquidityTiers;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllLiquidityTiersResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllLiquidityTiersResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllLiquidityTiersResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryAllLiquidityTiersResponse",
            value: exports.QueryAllLiquidityTiersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPremiumVotesRequest() {
    return {};
}
exports.QueryPremiumVotesRequest = {
    typeUrl: "/nemo_network.perpetuals.QueryPremiumVotesRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPremiumVotesRequest();
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
        var message = createBaseQueryPremiumVotesRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryPremiumVotesRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryPremiumVotesRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPremiumVotesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPremiumVotesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryPremiumVotesRequest",
            value: exports.QueryPremiumVotesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPremiumVotesResponse() {
    return {
        premiumVotes: perpetual_1.PremiumStore.fromPartial({})
    };
}
exports.QueryPremiumVotesResponse = {
    typeUrl: "/nemo_network.perpetuals.QueryPremiumVotesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.premiumVotes !== undefined) {
            perpetual_1.PremiumStore.encode(message.premiumVotes, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPremiumVotesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.premiumVotes = perpetual_1.PremiumStore.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryPremiumVotesResponse();
        message.premiumVotes = object.premiumVotes !== undefined && object.premiumVotes !== null ? perpetual_1.PremiumStore.fromPartial(object.premiumVotes) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryPremiumVotesResponse();
        if (object.premium_votes !== undefined && object.premium_votes !== null) {
            message.premiumVotes = perpetual_1.PremiumStore.fromAmino(object.premium_votes);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.premium_votes = message.premiumVotes ? perpetual_1.PremiumStore.toAmino(message.premiumVotes) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryPremiumVotesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPremiumVotesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPremiumVotesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryPremiumVotesResponse",
            value: exports.QueryPremiumVotesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPremiumSamplesRequest() {
    return {};
}
exports.QueryPremiumSamplesRequest = {
    typeUrl: "/nemo_network.perpetuals.QueryPremiumSamplesRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPremiumSamplesRequest();
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
        var message = createBaseQueryPremiumSamplesRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryPremiumSamplesRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryPremiumSamplesRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPremiumSamplesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPremiumSamplesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryPremiumSamplesRequest",
            value: exports.QueryPremiumSamplesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPremiumSamplesResponse() {
    return {
        premiumSamples: perpetual_1.PremiumStore.fromPartial({})
    };
}
exports.QueryPremiumSamplesResponse = {
    typeUrl: "/nemo_network.perpetuals.QueryPremiumSamplesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.premiumSamples !== undefined) {
            perpetual_1.PremiumStore.encode(message.premiumSamples, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPremiumSamplesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.premiumSamples = perpetual_1.PremiumStore.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryPremiumSamplesResponse();
        message.premiumSamples = object.premiumSamples !== undefined && object.premiumSamples !== null ? perpetual_1.PremiumStore.fromPartial(object.premiumSamples) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryPremiumSamplesResponse();
        if (object.premium_samples !== undefined && object.premium_samples !== null) {
            message.premiumSamples = perpetual_1.PremiumStore.fromAmino(object.premium_samples);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.premium_samples = message.premiumSamples ? perpetual_1.PremiumStore.toAmino(message.premiumSamples) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryPremiumSamplesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPremiumSamplesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPremiumSamplesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryPremiumSamplesResponse",
            value: exports.QueryPremiumSamplesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/nemo_network.perpetuals.QueryParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
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
        var message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/nemo_network.perpetuals.QueryParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
