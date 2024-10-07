"use strict";
exports.__esModule = true;
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgAddPremiumVotesResponse = exports.MsgAddPremiumVotes = exports.FundingPremium = exports.MsgUpdatePerpetualParamsResponse = exports.MsgUpdatePerpetualParams = exports.MsgSetLiquidityTierResponse = exports.MsgSetLiquidityTier = exports.MsgCreatePerpetualResponse = exports.MsgCreatePerpetual = void 0;
var perpetual_1 = require("./perpetual");
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseMsgCreatePerpetual() {
    return {
        authority: "",
        params: perpetual_1.PerpetualParams.fromPartial({})
    };
}
exports.MsgCreatePerpetual = {
    typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetual",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            perpetual_1.PerpetualParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePerpetual();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = perpetual_1.PerpetualParams.decode(reader, reader.uint32());
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
        var message = createBaseMsgCreatePerpetual();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? perpetual_1.PerpetualParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgCreatePerpetual();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = perpetual_1.PerpetualParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? perpetual_1.PerpetualParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreatePerpetual.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreatePerpetual.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreatePerpetual.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetual",
            value: exports.MsgCreatePerpetual.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePerpetualResponse() {
    return {};
}
exports.MsgCreatePerpetualResponse = {
    typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetualResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePerpetualResponse();
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
        var message = createBaseMsgCreatePerpetualResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCreatePerpetualResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreatePerpetualResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreatePerpetualResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreatePerpetualResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgCreatePerpetualResponse",
            value: exports.MsgCreatePerpetualResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetLiquidityTier() {
    return {
        authority: "",
        liquidityTier: perpetual_1.LiquidityTier.fromPartial({})
    };
}
exports.MsgSetLiquidityTier = {
    typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTier",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.liquidityTier !== undefined) {
            perpetual_1.LiquidityTier.encode(message.liquidityTier, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetLiquidityTier();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.liquidityTier = perpetual_1.LiquidityTier.decode(reader, reader.uint32());
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
        var message = createBaseMsgSetLiquidityTier();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.liquidityTier = object.liquidityTier !== undefined && object.liquidityTier !== null ? perpetual_1.LiquidityTier.fromPartial(object.liquidityTier) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSetLiquidityTier();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
            message.liquidityTier = perpetual_1.LiquidityTier.fromAmino(object.liquidity_tier);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.liquidity_tier = message.liquidityTier ? perpetual_1.LiquidityTier.toAmino(message.liquidityTier) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetLiquidityTier.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetLiquidityTier.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetLiquidityTier.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTier",
            value: exports.MsgSetLiquidityTier.encode(message).finish()
        };
    }
};
function createBaseMsgSetLiquidityTierResponse() {
    return {};
}
exports.MsgSetLiquidityTierResponse = {
    typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTierResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetLiquidityTierResponse();
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
        var message = createBaseMsgSetLiquidityTierResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSetLiquidityTierResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetLiquidityTierResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetLiquidityTierResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetLiquidityTierResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgSetLiquidityTierResponse",
            value: exports.MsgSetLiquidityTierResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePerpetualParams() {
    return {
        authority: "",
        perpetualParams: perpetual_1.PerpetualParams.fromPartial({})
    };
}
exports.MsgUpdatePerpetualParams = {
    typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.perpetualParams !== undefined) {
            perpetual_1.PerpetualParams.encode(message.perpetualParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdatePerpetualParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.perpetualParams = perpetual_1.PerpetualParams.decode(reader, reader.uint32());
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
        var message = createBaseMsgUpdatePerpetualParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.perpetualParams = object.perpetualParams !== undefined && object.perpetualParams !== null ? perpetual_1.PerpetualParams.fromPartial(object.perpetualParams) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdatePerpetualParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.perpetual_params !== undefined && object.perpetual_params !== null) {
            message.perpetualParams = perpetual_1.PerpetualParams.fromAmino(object.perpetual_params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.perpetual_params = message.perpetualParams ? perpetual_1.PerpetualParams.toAmino(message.perpetualParams) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdatePerpetualParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdatePerpetualParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdatePerpetualParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParams",
            value: exports.MsgUpdatePerpetualParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePerpetualParamsResponse() {
    return {};
}
exports.MsgUpdatePerpetualParamsResponse = {
    typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdatePerpetualParamsResponse();
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
        var message = createBaseMsgUpdatePerpetualParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdatePerpetualParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdatePerpetualParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdatePerpetualParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdatePerpetualParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgUpdatePerpetualParamsResponse",
            value: exports.MsgUpdatePerpetualParamsResponse.encode(message).finish()
        };
    }
};
function createBaseFundingPremium() {
    return {
        perpetualId: 0,
        premiumPpm: 0
    };
}
exports.FundingPremium = {
    typeUrl: "/nemo_network.perpetuals.FundingPremium",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        if (message.premiumPpm !== 0) {
            writer.uint32(16).int32(message.premiumPpm);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFundingPremium();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    message.premiumPpm = reader.int32();
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
        var message = createBaseFundingPremium();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.premiumPpm = (_b = object.premiumPpm) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseFundingPremium();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        if (object.premium_ppm !== undefined && object.premium_ppm !== null) {
            message.premiumPpm = object.premium_ppm;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        obj.premium_ppm = message.premiumPpm === 0 ? undefined : message.premiumPpm;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FundingPremium.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.FundingPremium.decode(message.value);
    },
    toProto: function (message) {
        return exports.FundingPremium.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.FundingPremium",
            value: exports.FundingPremium.encode(message).finish()
        };
    }
};
function createBaseMsgAddPremiumVotes() {
    return {
        votes: []
    };
}
exports.MsgAddPremiumVotes = {
    typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotes",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.votes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.FundingPremium.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddPremiumVotes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(exports.FundingPremium.decode(reader, reader.uint32()));
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
        var message = createBaseMsgAddPremiumVotes();
        message.votes = ((_a = object.votes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FundingPremium.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgAddPremiumVotes();
        message.votes = ((_a = object.votes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FundingPremium.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(function (e) { return e ? exports.FundingPremium.toAmino(e) : undefined; });
        }
        else {
            obj.votes = message.votes;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgAddPremiumVotes.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgAddPremiumVotes.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgAddPremiumVotes.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotes",
            value: exports.MsgAddPremiumVotes.encode(message).finish()
        };
    }
};
function createBaseMsgAddPremiumVotesResponse() {
    return {};
}
exports.MsgAddPremiumVotesResponse = {
    typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotesResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddPremiumVotesResponse();
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
        var message = createBaseMsgAddPremiumVotesResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgAddPremiumVotesResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgAddPremiumVotesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgAddPremiumVotesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgAddPremiumVotesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgAddPremiumVotesResponse",
            value: exports.MsgAddPremiumVotesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: params_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/nemo_network.perpetuals.MsgUpdateParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/nemo_network.perpetuals.MsgUpdateParamsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateParamsResponse();
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
        var message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
