"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var perpetual_1 = require("./perpetual");
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        perpetuals: [],
        liquidityTiers: [],
        params: params_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.perpetuals.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.perpetuals; _i < _a.length; _i++) {
            var v = _a[_i];
            perpetual_1.Perpetual.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.liquidityTiers; _b < _c.length; _b++) {
            var v = _c[_b];
            perpetual_1.LiquidityTier.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetuals.push(perpetual_1.Perpetual.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.liquidityTiers.push(perpetual_1.LiquidityTier.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        var _a, _b;
        var message = createBaseGenesisState();
        message.perpetuals = ((_a = object.perpetuals) === null || _a === void 0 ? void 0 : _a.map(function (e) { return perpetual_1.Perpetual.fromPartial(e); })) || [];
        message.liquidityTiers = ((_b = object.liquidityTiers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return perpetual_1.LiquidityTier.fromPartial(e); })) || [];
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.perpetuals = ((_a = object.perpetuals) === null || _a === void 0 ? void 0 : _a.map(function (e) { return perpetual_1.Perpetual.fromAmino(e); })) || [];
        message.liquidityTiers = ((_b = object.liquidity_tiers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return perpetual_1.LiquidityTier.fromAmino(e); })) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.perpetuals) {
            obj.perpetuals = message.perpetuals.map(function (e) { return e ? perpetual_1.Perpetual.toAmino(e) : undefined; });
        }
        else {
            obj.perpetuals = message.perpetuals;
        }
        if (message.liquidityTiers) {
            obj.liquidity_tiers = message.liquidityTiers.map(function (e) { return e ? perpetual_1.LiquidityTier.toAmino(e) : undefined; });
        }
        else {
            obj.liquidity_tiers = message.liquidityTiers;
        }
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.perpetuals.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
