"use strict";
exports.__esModule = true;
exports.MatchPerpetualDeleveraging_Fill = exports.MatchPerpetualDeleveraging = exports.MatchPerpetualLiquidation = exports.MatchOrders = exports.MakerFill = exports.ClobMatch = void 0;
var order_1 = require("./order");
var subaccount_1 = require("../subaccounts/subaccount");
var binary_1 = require("../../binary");
function createBaseClobMatch() {
    return {
        matchOrders: undefined,
        matchPerpetualLiquidation: undefined,
        matchPerpetualDeleveraging: undefined
    };
}
exports.ClobMatch = {
    typeUrl: "/nemo_network.clob.ClobMatch",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.matchOrders !== undefined) {
            exports.MatchOrders.encode(message.matchOrders, writer.uint32(10).fork()).ldelim();
        }
        if (message.matchPerpetualLiquidation !== undefined) {
            exports.MatchPerpetualLiquidation.encode(message.matchPerpetualLiquidation, writer.uint32(18).fork()).ldelim();
        }
        if (message.matchPerpetualDeleveraging !== undefined) {
            exports.MatchPerpetualDeleveraging.encode(message.matchPerpetualDeleveraging, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClobMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matchOrders = exports.MatchOrders.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.matchPerpetualLiquidation = exports.MatchPerpetualLiquidation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.matchPerpetualDeleveraging = exports.MatchPerpetualDeleveraging.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseClobMatch();
        message.matchOrders = object.matchOrders !== undefined && object.matchOrders !== null ? exports.MatchOrders.fromPartial(object.matchOrders) : undefined;
        message.matchPerpetualLiquidation = object.matchPerpetualLiquidation !== undefined && object.matchPerpetualLiquidation !== null ? exports.MatchPerpetualLiquidation.fromPartial(object.matchPerpetualLiquidation) : undefined;
        message.matchPerpetualDeleveraging = object.matchPerpetualDeleveraging !== undefined && object.matchPerpetualDeleveraging !== null ? exports.MatchPerpetualDeleveraging.fromPartial(object.matchPerpetualDeleveraging) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseClobMatch();
        if (object.match_orders !== undefined && object.match_orders !== null) {
            message.matchOrders = exports.MatchOrders.fromAmino(object.match_orders);
        }
        if (object.match_perpetual_liquidation !== undefined && object.match_perpetual_liquidation !== null) {
            message.matchPerpetualLiquidation = exports.MatchPerpetualLiquidation.fromAmino(object.match_perpetual_liquidation);
        }
        if (object.match_perpetual_deleveraging !== undefined && object.match_perpetual_deleveraging !== null) {
            message.matchPerpetualDeleveraging = exports.MatchPerpetualDeleveraging.fromAmino(object.match_perpetual_deleveraging);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.match_orders = message.matchOrders ? exports.MatchOrders.toAmino(message.matchOrders) : undefined;
        obj.match_perpetual_liquidation = message.matchPerpetualLiquidation ? exports.MatchPerpetualLiquidation.toAmino(message.matchPerpetualLiquidation) : undefined;
        obj.match_perpetual_deleveraging = message.matchPerpetualDeleveraging ? exports.MatchPerpetualDeleveraging.toAmino(message.matchPerpetualDeleveraging) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ClobMatch.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ClobMatch.decode(message.value);
    },
    toProto: function (message) {
        return exports.ClobMatch.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.ClobMatch",
            value: exports.ClobMatch.encode(message).finish()
        };
    }
};
function createBaseMakerFill() {
    return {
        fillAmount: BigInt(0),
        makerOrderId: order_1.OrderId.fromPartial({})
    };
}
exports.MakerFill = {
    typeUrl: "/nemo_network.clob.MakerFill",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.fillAmount !== BigInt(0)) {
            writer.uint32(8).uint64(message.fillAmount);
        }
        if (message.makerOrderId !== undefined) {
            order_1.OrderId.encode(message.makerOrderId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMakerFill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fillAmount = reader.uint64();
                    break;
                case 2:
                    message.makerOrderId = order_1.OrderId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMakerFill();
        message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
        message.makerOrderId = object.makerOrderId !== undefined && object.makerOrderId !== null ? order_1.OrderId.fromPartial(object.makerOrderId) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMakerFill();
        if (object.fill_amount !== undefined && object.fill_amount !== null) {
            message.fillAmount = BigInt(object.fill_amount);
        }
        if (object.maker_order_id !== undefined && object.maker_order_id !== null) {
            message.makerOrderId = order_1.OrderId.fromAmino(object.maker_order_id);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.fill_amount = message.fillAmount !== BigInt(0) ? ((_a = message.fillAmount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.maker_order_id = message.makerOrderId ? order_1.OrderId.toAmino(message.makerOrderId) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MakerFill.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MakerFill.decode(message.value);
    },
    toProto: function (message) {
        return exports.MakerFill.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MakerFill",
            value: exports.MakerFill.encode(message).finish()
        };
    }
};
function createBaseMatchOrders() {
    return {
        takerOrderId: order_1.OrderId.fromPartial({}),
        fills: []
    };
}
exports.MatchOrders = {
    typeUrl: "/nemo_network.clob.MatchOrders",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.takerOrderId !== undefined) {
            order_1.OrderId.encode(message.takerOrderId, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.fills; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MakerFill.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMatchOrders();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerOrderId = order_1.OrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fills.push(exports.MakerFill.decode(reader, reader.uint32()));
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
        var message = createBaseMatchOrders();
        message.takerOrderId = object.takerOrderId !== undefined && object.takerOrderId !== null ? order_1.OrderId.fromPartial(object.takerOrderId) : undefined;
        message.fills = ((_a = object.fills) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MakerFill.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMatchOrders();
        if (object.taker_order_id !== undefined && object.taker_order_id !== null) {
            message.takerOrderId = order_1.OrderId.fromAmino(object.taker_order_id);
        }
        message.fills = ((_a = object.fills) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MakerFill.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.taker_order_id = message.takerOrderId ? order_1.OrderId.toAmino(message.takerOrderId) : undefined;
        if (message.fills) {
            obj.fills = message.fills.map(function (e) { return e ? exports.MakerFill.toAmino(e) : undefined; });
        }
        else {
            obj.fills = message.fills;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MatchOrders.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MatchOrders.decode(message.value);
    },
    toProto: function (message) {
        return exports.MatchOrders.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MatchOrders",
            value: exports.MatchOrders.encode(message).finish()
        };
    }
};
function createBaseMatchPerpetualLiquidation() {
    return {
        liquidated: subaccount_1.SubaccountId.fromPartial({}),
        clobPairId: 0,
        perpetualId: 0,
        totalSize: BigInt(0),
        isBuy: false,
        fills: []
    };
}
exports.MatchPerpetualLiquidation = {
    typeUrl: "/nemo_network.clob.MatchPerpetualLiquidation",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.liquidated !== undefined) {
            subaccount_1.SubaccountId.encode(message.liquidated, writer.uint32(10).fork()).ldelim();
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.perpetualId !== 0) {
            writer.uint32(24).uint32(message.perpetualId);
        }
        if (message.totalSize !== BigInt(0)) {
            writer.uint32(32).uint64(message.totalSize);
        }
        if (message.isBuy === true) {
            writer.uint32(40).bool(message.isBuy);
        }
        for (var _i = 0, _a = message.fills; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MakerFill.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMatchPerpetualLiquidation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidated = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.perpetualId = reader.uint32();
                    break;
                case 4:
                    message.totalSize = reader.uint64();
                    break;
                case 5:
                    message.isBuy = reader.bool();
                    break;
                case 6:
                    message.fills.push(exports.MakerFill.decode(reader, reader.uint32()));
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
        var message = createBaseMatchPerpetualLiquidation();
        message.liquidated = object.liquidated !== undefined && object.liquidated !== null ? subaccount_1.SubaccountId.fromPartial(object.liquidated) : undefined;
        message.clobPairId = (_a = object.clobPairId) !== null && _a !== void 0 ? _a : 0;
        message.perpetualId = (_b = object.perpetualId) !== null && _b !== void 0 ? _b : 0;
        message.totalSize = object.totalSize !== undefined && object.totalSize !== null ? BigInt(object.totalSize.toString()) : BigInt(0);
        message.isBuy = (_c = object.isBuy) !== null && _c !== void 0 ? _c : false;
        message.fills = ((_d = object.fills) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.MakerFill.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMatchPerpetualLiquidation();
        if (object.liquidated !== undefined && object.liquidated !== null) {
            message.liquidated = subaccount_1.SubaccountId.fromAmino(object.liquidated);
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        if (object.total_size !== undefined && object.total_size !== null) {
            message.totalSize = BigInt(object.total_size);
        }
        if (object.is_buy !== undefined && object.is_buy !== null) {
            message.isBuy = object.is_buy;
        }
        message.fills = ((_a = object.fills) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MakerFill.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.liquidated = message.liquidated ? subaccount_1.SubaccountId.toAmino(message.liquidated) : undefined;
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        obj.total_size = message.totalSize !== BigInt(0) ? ((_a = message.totalSize) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
        if (message.fills) {
            obj.fills = message.fills.map(function (e) { return e ? exports.MakerFill.toAmino(e) : undefined; });
        }
        else {
            obj.fills = message.fills;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MatchPerpetualLiquidation.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MatchPerpetualLiquidation.decode(message.value);
    },
    toProto: function (message) {
        return exports.MatchPerpetualLiquidation.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MatchPerpetualLiquidation",
            value: exports.MatchPerpetualLiquidation.encode(message).finish()
        };
    }
};
function createBaseMatchPerpetualDeleveraging() {
    return {
        liquidated: subaccount_1.SubaccountId.fromPartial({}),
        perpetualId: 0,
        fills: [],
        isFinalSettlement: false
    };
}
exports.MatchPerpetualDeleveraging = {
    typeUrl: "/nemo_network.clob.MatchPerpetualDeleveraging",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.liquidated !== undefined) {
            subaccount_1.SubaccountId.encode(message.liquidated, writer.uint32(10).fork()).ldelim();
        }
        if (message.perpetualId !== 0) {
            writer.uint32(16).uint32(message.perpetualId);
        }
        for (var _i = 0, _a = message.fills; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MatchPerpetualDeleveraging_Fill.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.isFinalSettlement === true) {
            writer.uint32(32).bool(message.isFinalSettlement);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMatchPerpetualDeleveraging();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidated = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.perpetualId = reader.uint32();
                    break;
                case 3:
                    message.fills.push(exports.MatchPerpetualDeleveraging_Fill.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.isFinalSettlement = reader.bool();
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
        var message = createBaseMatchPerpetualDeleveraging();
        message.liquidated = object.liquidated !== undefined && object.liquidated !== null ? subaccount_1.SubaccountId.fromPartial(object.liquidated) : undefined;
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.fills = ((_b = object.fills) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MatchPerpetualDeleveraging_Fill.fromPartial(e); })) || [];
        message.isFinalSettlement = (_c = object.isFinalSettlement) !== null && _c !== void 0 ? _c : false;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMatchPerpetualDeleveraging();
        if (object.liquidated !== undefined && object.liquidated !== null) {
            message.liquidated = subaccount_1.SubaccountId.fromAmino(object.liquidated);
        }
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        message.fills = ((_a = object.fills) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MatchPerpetualDeleveraging_Fill.fromAmino(e); })) || [];
        if (object.is_final_settlement !== undefined && object.is_final_settlement !== null) {
            message.isFinalSettlement = object.is_final_settlement;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.liquidated = message.liquidated ? subaccount_1.SubaccountId.toAmino(message.liquidated) : undefined;
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        if (message.fills) {
            obj.fills = message.fills.map(function (e) { return e ? exports.MatchPerpetualDeleveraging_Fill.toAmino(e) : undefined; });
        }
        else {
            obj.fills = message.fills;
        }
        obj.is_final_settlement = message.isFinalSettlement === false ? undefined : message.isFinalSettlement;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MatchPerpetualDeleveraging.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MatchPerpetualDeleveraging.decode(message.value);
    },
    toProto: function (message) {
        return exports.MatchPerpetualDeleveraging.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MatchPerpetualDeleveraging",
            value: exports.MatchPerpetualDeleveraging.encode(message).finish()
        };
    }
};
function createBaseMatchPerpetualDeleveraging_Fill() {
    return {
        offsettingSubaccountId: subaccount_1.SubaccountId.fromPartial({}),
        fillAmount: BigInt(0)
    };
}
exports.MatchPerpetualDeleveraging_Fill = {
    typeUrl: "/nemo_network.clob.Fill",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.offsettingSubaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.offsettingSubaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.fillAmount !== BigInt(0)) {
            writer.uint32(16).uint64(message.fillAmount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMatchPerpetualDeleveraging_Fill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.offsettingSubaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
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
        var message = createBaseMatchPerpetualDeleveraging_Fill();
        message.offsettingSubaccountId = object.offsettingSubaccountId !== undefined && object.offsettingSubaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.offsettingSubaccountId) : undefined;
        message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMatchPerpetualDeleveraging_Fill();
        if (object.offsetting_subaccount_id !== undefined && object.offsetting_subaccount_id !== null) {
            message.offsettingSubaccountId = subaccount_1.SubaccountId.fromAmino(object.offsetting_subaccount_id);
        }
        if (object.fill_amount !== undefined && object.fill_amount !== null) {
            message.fillAmount = BigInt(object.fill_amount);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.offsetting_subaccount_id = message.offsettingSubaccountId ? subaccount_1.SubaccountId.toAmino(message.offsettingSubaccountId) : undefined;
        obj.fill_amount = message.fillAmount !== BigInt(0) ? ((_a = message.fillAmount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MatchPerpetualDeleveraging_Fill.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MatchPerpetualDeleveraging_Fill.decode(message.value);
    },
    toProto: function (message) {
        return exports.MatchPerpetualDeleveraging_Fill.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.Fill",
            value: exports.MatchPerpetualDeleveraging_Fill.encode(message).finish()
        };
    }
};
