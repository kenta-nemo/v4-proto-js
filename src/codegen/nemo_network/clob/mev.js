"use strict";
exports.__esModule = true;
exports.MevNodeToNodeMetrics = exports.ValidatorMevMatches = exports.ClobMidPrice = exports.MEVLiquidationMatch = exports.MEVMatch = void 0;
var subaccount_1 = require("../subaccounts/subaccount");
var clob_pair_1 = require("./clob_pair");
var binary_1 = require("../../binary");
function createBaseMEVMatch() {
    return {
        takerOrderSubaccountId: undefined,
        takerFeePpm: 0,
        makerOrderSubaccountId: undefined,
        makerOrderSubticks: BigInt(0),
        makerOrderIsBuy: false,
        makerFeePpm: 0,
        clobPairId: 0,
        fillAmount: BigInt(0)
    };
}
exports.MEVMatch = {
    typeUrl: "/nemo_network.clob.MEVMatch",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.takerOrderSubaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.takerOrderSubaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.takerFeePpm !== 0) {
            writer.uint32(16).int32(message.takerFeePpm);
        }
        if (message.makerOrderSubaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.makerOrderSubaccountId, writer.uint32(26).fork()).ldelim();
        }
        if (message.makerOrderSubticks !== BigInt(0)) {
            writer.uint32(32).uint64(message.makerOrderSubticks);
        }
        if (message.makerOrderIsBuy === true) {
            writer.uint32(40).bool(message.makerOrderIsBuy);
        }
        if (message.makerFeePpm !== 0) {
            writer.uint32(48).int32(message.makerFeePpm);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(56).uint32(message.clobPairId);
        }
        if (message.fillAmount !== BigInt(0)) {
            writer.uint32(64).uint64(message.fillAmount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMEVMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerOrderSubaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.takerFeePpm = reader.int32();
                    break;
                case 3:
                    message.makerOrderSubaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.makerOrderSubticks = reader.uint64();
                    break;
                case 5:
                    message.makerOrderIsBuy = reader.bool();
                    break;
                case 6:
                    message.makerFeePpm = reader.int32();
                    break;
                case 7:
                    message.clobPairId = reader.uint32();
                    break;
                case 8:
                    message.fillAmount = reader.uint64();
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
        var message = createBaseMEVMatch();
        message.takerOrderSubaccountId = object.takerOrderSubaccountId !== undefined && object.takerOrderSubaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.takerOrderSubaccountId) : undefined;
        message.takerFeePpm = (_a = object.takerFeePpm) !== null && _a !== void 0 ? _a : 0;
        message.makerOrderSubaccountId = object.makerOrderSubaccountId !== undefined && object.makerOrderSubaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.makerOrderSubaccountId) : undefined;
        message.makerOrderSubticks = object.makerOrderSubticks !== undefined && object.makerOrderSubticks !== null ? BigInt(object.makerOrderSubticks.toString()) : BigInt(0);
        message.makerOrderIsBuy = (_b = object.makerOrderIsBuy) !== null && _b !== void 0 ? _b : false;
        message.makerFeePpm = (_c = object.makerFeePpm) !== null && _c !== void 0 ? _c : 0;
        message.clobPairId = (_d = object.clobPairId) !== null && _d !== void 0 ? _d : 0;
        message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMEVMatch();
        if (object.taker_order_subaccount_id !== undefined && object.taker_order_subaccount_id !== null) {
            message.takerOrderSubaccountId = subaccount_1.SubaccountId.fromAmino(object.taker_order_subaccount_id);
        }
        if (object.taker_fee_ppm !== undefined && object.taker_fee_ppm !== null) {
            message.takerFeePpm = object.taker_fee_ppm;
        }
        if (object.maker_order_subaccount_id !== undefined && object.maker_order_subaccount_id !== null) {
            message.makerOrderSubaccountId = subaccount_1.SubaccountId.fromAmino(object.maker_order_subaccount_id);
        }
        if (object.maker_order_subticks !== undefined && object.maker_order_subticks !== null) {
            message.makerOrderSubticks = BigInt(object.maker_order_subticks);
        }
        if (object.maker_order_is_buy !== undefined && object.maker_order_is_buy !== null) {
            message.makerOrderIsBuy = object.maker_order_is_buy;
        }
        if (object.maker_fee_ppm !== undefined && object.maker_fee_ppm !== null) {
            message.makerFeePpm = object.maker_fee_ppm;
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.fill_amount !== undefined && object.fill_amount !== null) {
            message.fillAmount = BigInt(object.fill_amount);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.taker_order_subaccount_id = message.takerOrderSubaccountId ? subaccount_1.SubaccountId.toAmino(message.takerOrderSubaccountId) : undefined;
        obj.taker_fee_ppm = message.takerFeePpm === 0 ? undefined : message.takerFeePpm;
        obj.maker_order_subaccount_id = message.makerOrderSubaccountId ? subaccount_1.SubaccountId.toAmino(message.makerOrderSubaccountId) : undefined;
        obj.maker_order_subticks = message.makerOrderSubticks !== BigInt(0) ? ((_a = message.makerOrderSubticks) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.maker_order_is_buy = message.makerOrderIsBuy === false ? undefined : message.makerOrderIsBuy;
        obj.maker_fee_ppm = message.makerFeePpm === 0 ? undefined : message.makerFeePpm;
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        obj.fill_amount = message.fillAmount !== BigInt(0) ? ((_b = message.fillAmount) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MEVMatch.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MEVMatch.decode(message.value);
    },
    toProto: function (message) {
        return exports.MEVMatch.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MEVMatch",
            value: exports.MEVMatch.encode(message).finish()
        };
    }
};
function createBaseMEVLiquidationMatch() {
    return {
        liquidatedSubaccountId: subaccount_1.SubaccountId.fromPartial({}),
        insuranceFundDeltaQuoteQuantums: BigInt(0),
        makerOrderSubaccountId: subaccount_1.SubaccountId.fromPartial({}),
        makerOrderSubticks: BigInt(0),
        makerOrderIsBuy: false,
        makerFeePpm: 0,
        clobPairId: 0,
        fillAmount: BigInt(0)
    };
}
exports.MEVLiquidationMatch = {
    typeUrl: "/nemo_network.clob.MEVLiquidationMatch",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.liquidatedSubaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.liquidatedSubaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.insuranceFundDeltaQuoteQuantums !== BigInt(0)) {
            writer.uint32(16).int64(message.insuranceFundDeltaQuoteQuantums);
        }
        if (message.makerOrderSubaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.makerOrderSubaccountId, writer.uint32(26).fork()).ldelim();
        }
        if (message.makerOrderSubticks !== BigInt(0)) {
            writer.uint32(32).uint64(message.makerOrderSubticks);
        }
        if (message.makerOrderIsBuy === true) {
            writer.uint32(40).bool(message.makerOrderIsBuy);
        }
        if (message.makerFeePpm !== 0) {
            writer.uint32(48).int32(message.makerFeePpm);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(56).uint32(message.clobPairId);
        }
        if (message.fillAmount !== BigInt(0)) {
            writer.uint32(64).uint64(message.fillAmount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMEVLiquidationMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidatedSubaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.insuranceFundDeltaQuoteQuantums = reader.int64();
                    break;
                case 3:
                    message.makerOrderSubaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.makerOrderSubticks = reader.uint64();
                    break;
                case 5:
                    message.makerOrderIsBuy = reader.bool();
                    break;
                case 6:
                    message.makerFeePpm = reader.int32();
                    break;
                case 7:
                    message.clobPairId = reader.uint32();
                    break;
                case 8:
                    message.fillAmount = reader.uint64();
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
        var message = createBaseMEVLiquidationMatch();
        message.liquidatedSubaccountId = object.liquidatedSubaccountId !== undefined && object.liquidatedSubaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.liquidatedSubaccountId) : undefined;
        message.insuranceFundDeltaQuoteQuantums = object.insuranceFundDeltaQuoteQuantums !== undefined && object.insuranceFundDeltaQuoteQuantums !== null ? BigInt(object.insuranceFundDeltaQuoteQuantums.toString()) : BigInt(0);
        message.makerOrderSubaccountId = object.makerOrderSubaccountId !== undefined && object.makerOrderSubaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.makerOrderSubaccountId) : undefined;
        message.makerOrderSubticks = object.makerOrderSubticks !== undefined && object.makerOrderSubticks !== null ? BigInt(object.makerOrderSubticks.toString()) : BigInt(0);
        message.makerOrderIsBuy = (_a = object.makerOrderIsBuy) !== null && _a !== void 0 ? _a : false;
        message.makerFeePpm = (_b = object.makerFeePpm) !== null && _b !== void 0 ? _b : 0;
        message.clobPairId = (_c = object.clobPairId) !== null && _c !== void 0 ? _c : 0;
        message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMEVLiquidationMatch();
        if (object.liquidated_subaccount_id !== undefined && object.liquidated_subaccount_id !== null) {
            message.liquidatedSubaccountId = subaccount_1.SubaccountId.fromAmino(object.liquidated_subaccount_id);
        }
        if (object.insurance_fund_delta_quote_quantums !== undefined && object.insurance_fund_delta_quote_quantums !== null) {
            message.insuranceFundDeltaQuoteQuantums = BigInt(object.insurance_fund_delta_quote_quantums);
        }
        if (object.maker_order_subaccount_id !== undefined && object.maker_order_subaccount_id !== null) {
            message.makerOrderSubaccountId = subaccount_1.SubaccountId.fromAmino(object.maker_order_subaccount_id);
        }
        if (object.maker_order_subticks !== undefined && object.maker_order_subticks !== null) {
            message.makerOrderSubticks = BigInt(object.maker_order_subticks);
        }
        if (object.maker_order_is_buy !== undefined && object.maker_order_is_buy !== null) {
            message.makerOrderIsBuy = object.maker_order_is_buy;
        }
        if (object.maker_fee_ppm !== undefined && object.maker_fee_ppm !== null) {
            message.makerFeePpm = object.maker_fee_ppm;
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.fill_amount !== undefined && object.fill_amount !== null) {
            message.fillAmount = BigInt(object.fill_amount);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c;
        var obj = {};
        obj.liquidated_subaccount_id = message.liquidatedSubaccountId ? subaccount_1.SubaccountId.toAmino(message.liquidatedSubaccountId) : undefined;
        obj.insurance_fund_delta_quote_quantums = message.insuranceFundDeltaQuoteQuantums !== BigInt(0) ? ((_a = message.insuranceFundDeltaQuoteQuantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.maker_order_subaccount_id = message.makerOrderSubaccountId ? subaccount_1.SubaccountId.toAmino(message.makerOrderSubaccountId) : undefined;
        obj.maker_order_subticks = message.makerOrderSubticks !== BigInt(0) ? ((_b = message.makerOrderSubticks) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.maker_order_is_buy = message.makerOrderIsBuy === false ? undefined : message.makerOrderIsBuy;
        obj.maker_fee_ppm = message.makerFeePpm === 0 ? undefined : message.makerFeePpm;
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        obj.fill_amount = message.fillAmount !== BigInt(0) ? ((_c = message.fillAmount) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MEVLiquidationMatch.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MEVLiquidationMatch.decode(message.value);
    },
    toProto: function (message) {
        return exports.MEVLiquidationMatch.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MEVLiquidationMatch",
            value: exports.MEVLiquidationMatch.encode(message).finish()
        };
    }
};
function createBaseClobMidPrice() {
    return {
        clobPair: clob_pair_1.ClobPair.fromPartial({}),
        subticks: BigInt(0)
    };
}
exports.ClobMidPrice = {
    typeUrl: "/nemo_network.clob.ClobMidPrice",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.clobPair !== undefined) {
            clob_pair_1.ClobPair.encode(message.clobPair, writer.uint32(10).fork()).ldelim();
        }
        if (message.subticks !== BigInt(0)) {
            writer.uint32(16).uint64(message.subticks);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClobMidPrice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPair = clob_pair_1.ClobPair.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subticks = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseClobMidPrice();
        message.clobPair = object.clobPair !== undefined && object.clobPair !== null ? clob_pair_1.ClobPair.fromPartial(object.clobPair) : undefined;
        message.subticks = object.subticks !== undefined && object.subticks !== null ? BigInt(object.subticks.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseClobMidPrice();
        if (object.clob_pair !== undefined && object.clob_pair !== null) {
            message.clobPair = clob_pair_1.ClobPair.fromAmino(object.clob_pair);
        }
        if (object.subticks !== undefined && object.subticks !== null) {
            message.subticks = BigInt(object.subticks);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.clob_pair = message.clobPair ? clob_pair_1.ClobPair.toAmino(message.clobPair) : undefined;
        obj.subticks = message.subticks !== BigInt(0) ? ((_a = message.subticks) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ClobMidPrice.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ClobMidPrice.decode(message.value);
    },
    toProto: function (message) {
        return exports.ClobMidPrice.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.ClobMidPrice",
            value: exports.ClobMidPrice.encode(message).finish()
        };
    }
};
function createBaseValidatorMevMatches() {
    return {
        matches: [],
        liquidationMatches: []
    };
}
exports.ValidatorMevMatches = {
    typeUrl: "/nemo_network.clob.ValidatorMevMatches",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.matches; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MEVMatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.liquidationMatches; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.MEVLiquidationMatch.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorMevMatches();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matches.push(exports.MEVMatch.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.liquidationMatches.push(exports.MEVLiquidationMatch.decode(reader, reader.uint32()));
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
        var message = createBaseValidatorMevMatches();
        message.matches = ((_a = object.matches) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MEVMatch.fromPartial(e); })) || [];
        message.liquidationMatches = ((_b = object.liquidationMatches) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MEVLiquidationMatch.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseValidatorMevMatches();
        message.matches = ((_a = object.matches) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MEVMatch.fromAmino(e); })) || [];
        message.liquidationMatches = ((_b = object.liquidation_matches) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MEVLiquidationMatch.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.matches) {
            obj.matches = message.matches.map(function (e) { return e ? exports.MEVMatch.toAmino(e) : undefined; });
        }
        else {
            obj.matches = message.matches;
        }
        if (message.liquidationMatches) {
            obj.liquidation_matches = message.liquidationMatches.map(function (e) { return e ? exports.MEVLiquidationMatch.toAmino(e) : undefined; });
        }
        else {
            obj.liquidation_matches = message.liquidationMatches;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ValidatorMevMatches.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ValidatorMevMatches.decode(message.value);
    },
    toProto: function (message) {
        return exports.ValidatorMevMatches.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.ValidatorMevMatches",
            value: exports.ValidatorMevMatches.encode(message).finish()
        };
    }
};
function createBaseMevNodeToNodeMetrics() {
    return {
        validatorMevMatches: undefined,
        clobMidPrices: [],
        bpMevMatches: undefined,
        proposalReceiveTime: BigInt(0)
    };
}
exports.MevNodeToNodeMetrics = {
    typeUrl: "/nemo_network.clob.MevNodeToNodeMetrics",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.validatorMevMatches !== undefined) {
            exports.ValidatorMevMatches.encode(message.validatorMevMatches, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.clobMidPrices; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ClobMidPrice.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.bpMevMatches !== undefined) {
            exports.ValidatorMevMatches.encode(message.bpMevMatches, writer.uint32(26).fork()).ldelim();
        }
        if (message.proposalReceiveTime !== BigInt(0)) {
            writer.uint32(32).uint64(message.proposalReceiveTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMevNodeToNodeMetrics();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorMevMatches = exports.ValidatorMevMatches.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clobMidPrices.push(exports.ClobMidPrice.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.bpMevMatches = exports.ValidatorMevMatches.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proposalReceiveTime = reader.uint64();
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
        var message = createBaseMevNodeToNodeMetrics();
        message.validatorMevMatches = object.validatorMevMatches !== undefined && object.validatorMevMatches !== null ? exports.ValidatorMevMatches.fromPartial(object.validatorMevMatches) : undefined;
        message.clobMidPrices = ((_a = object.clobMidPrices) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ClobMidPrice.fromPartial(e); })) || [];
        message.bpMevMatches = object.bpMevMatches !== undefined && object.bpMevMatches !== null ? exports.ValidatorMevMatches.fromPartial(object.bpMevMatches) : undefined;
        message.proposalReceiveTime = object.proposalReceiveTime !== undefined && object.proposalReceiveTime !== null ? BigInt(object.proposalReceiveTime.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMevNodeToNodeMetrics();
        if (object.validator_mev_matches !== undefined && object.validator_mev_matches !== null) {
            message.validatorMevMatches = exports.ValidatorMevMatches.fromAmino(object.validator_mev_matches);
        }
        message.clobMidPrices = ((_a = object.clob_mid_prices) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ClobMidPrice.fromAmino(e); })) || [];
        if (object.bp_mev_matches !== undefined && object.bp_mev_matches !== null) {
            message.bpMevMatches = exports.ValidatorMevMatches.fromAmino(object.bp_mev_matches);
        }
        if (object.proposal_receive_time !== undefined && object.proposal_receive_time !== null) {
            message.proposalReceiveTime = BigInt(object.proposal_receive_time);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.validator_mev_matches = message.validatorMevMatches ? exports.ValidatorMevMatches.toAmino(message.validatorMevMatches) : undefined;
        if (message.clobMidPrices) {
            obj.clob_mid_prices = message.clobMidPrices.map(function (e) { return e ? exports.ClobMidPrice.toAmino(e) : undefined; });
        }
        else {
            obj.clob_mid_prices = message.clobMidPrices;
        }
        obj.bp_mev_matches = message.bpMevMatches ? exports.ValidatorMevMatches.toAmino(message.bpMevMatches) : undefined;
        obj.proposal_receive_time = message.proposalReceiveTime !== BigInt(0) ? ((_a = message.proposalReceiveTime) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MevNodeToNodeMetrics.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MevNodeToNodeMetrics.decode(message.value);
    },
    toProto: function (message) {
        return exports.MevNodeToNodeMetrics.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MevNodeToNodeMetrics",
            value: exports.MevNodeToNodeMetrics.encode(message).finish()
        };
    }
};
