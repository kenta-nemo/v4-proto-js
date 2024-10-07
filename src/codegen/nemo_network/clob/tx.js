"use strict";
exports.__esModule = true;
exports.MsgUpdateLiquidationsConfigResponse = exports.MsgUpdateLiquidationsConfig = exports.MsgUpdateBlockRateLimitConfigurationResponse = exports.MsgUpdateBlockRateLimitConfiguration = exports.MsgUpdateEquityTierLimitConfigurationResponse = exports.MsgUpdateEquityTierLimitConfiguration = exports.OperationRaw = exports.MsgUpdateClobPairResponse = exports.MsgUpdateClobPair = exports.MsgBatchCancelResponse = exports.OrderBatch = exports.MsgBatchCancel = exports.MsgCancelOrderResponse = exports.MsgCancelOrder = exports.MsgPlaceOrderResponse = exports.MsgPlaceOrder = exports.MsgProposedOperationsResponse = exports.MsgProposedOperations = exports.MsgCreateClobPairResponse = exports.MsgCreateClobPair = void 0;
var order_1 = require("./order");
var subaccount_1 = require("../subaccounts/subaccount");
var clob_pair_1 = require("./clob_pair");
var equity_tier_limit_config_1 = require("./equity_tier_limit_config");
var block_rate_limit_config_1 = require("./block_rate_limit_config");
var liquidations_config_1 = require("./liquidations_config");
var matches_1 = require("./matches");
var order_removals_1 = require("./order_removals");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseMsgCreateClobPair() {
    return {
        authority: "",
        clobPair: clob_pair_1.ClobPair.fromPartial({})
    };
}
exports.MsgCreateClobPair = {
    typeUrl: "/nemo_network.clob.MsgCreateClobPair",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.clobPair !== undefined) {
            clob_pair_1.ClobPair.encode(message.clobPair, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateClobPair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgCreateClobPair();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.clobPair = object.clobPair !== undefined && object.clobPair !== null ? clob_pair_1.ClobPair.fromPartial(object.clobPair) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgCreateClobPair();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.clob_pair !== undefined && object.clob_pair !== null) {
            message.clobPair = clob_pair_1.ClobPair.fromAmino(object.clob_pair);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.clob_pair = message.clobPair ? clob_pair_1.ClobPair.toAmino(message.clobPair) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateClobPair.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateClobPair.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateClobPair.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgCreateClobPair",
            value: exports.MsgCreateClobPair.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClobPairResponse() {
    return {};
}
exports.MsgCreateClobPairResponse = {
    typeUrl: "/nemo_network.clob.MsgCreateClobPairResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateClobPairResponse();
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
        var message = createBaseMsgCreateClobPairResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCreateClobPairResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateClobPairResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateClobPairResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateClobPairResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgCreateClobPairResponse",
            value: exports.MsgCreateClobPairResponse.encode(message).finish()
        };
    }
};
function createBaseMsgProposedOperations() {
    return {
        operationsQueue: []
    };
}
exports.MsgProposedOperations = {
    typeUrl: "/nemo_network.clob.MsgProposedOperations",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.operationsQueue; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.OperationRaw.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgProposedOperations();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationsQueue.push(exports.OperationRaw.decode(reader, reader.uint32()));
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
        var message = createBaseMsgProposedOperations();
        message.operationsQueue = ((_a = object.operationsQueue) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OperationRaw.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgProposedOperations();
        message.operationsQueue = ((_a = object.operations_queue) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OperationRaw.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.operationsQueue) {
            obj.operations_queue = message.operationsQueue.map(function (e) { return e ? exports.OperationRaw.toAmino(e) : undefined; });
        }
        else {
            obj.operations_queue = message.operationsQueue;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgProposedOperations.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgProposedOperations.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgProposedOperations.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgProposedOperations",
            value: exports.MsgProposedOperations.encode(message).finish()
        };
    }
};
function createBaseMsgProposedOperationsResponse() {
    return {};
}
exports.MsgProposedOperationsResponse = {
    typeUrl: "/nemo_network.clob.MsgProposedOperationsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgProposedOperationsResponse();
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
        var message = createBaseMsgProposedOperationsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgProposedOperationsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgProposedOperationsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgProposedOperationsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgProposedOperationsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgProposedOperationsResponse",
            value: exports.MsgProposedOperationsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgPlaceOrder() {
    return {
        order: order_1.Order.fromPartial({})
    };
}
exports.MsgPlaceOrder = {
    typeUrl: "/nemo_network.clob.MsgPlaceOrder",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.order !== undefined) {
            order_1.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgPlaceOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = order_1.Order.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMsgPlaceOrder();
        message.order = object.order !== undefined && object.order !== null ? order_1.Order.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgPlaceOrder();
        if (object.order !== undefined && object.order !== null) {
            message.order = order_1.Order.fromAmino(object.order);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order = message.order ? order_1.Order.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgPlaceOrder.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgPlaceOrder.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgPlaceOrder.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgPlaceOrder",
            value: exports.MsgPlaceOrder.encode(message).finish()
        };
    }
};
function createBaseMsgPlaceOrderResponse() {
    return {};
}
exports.MsgPlaceOrderResponse = {
    typeUrl: "/nemo_network.clob.MsgPlaceOrderResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgPlaceOrderResponse();
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
        var message = createBaseMsgPlaceOrderResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgPlaceOrderResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgPlaceOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgPlaceOrderResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgPlaceOrderResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgPlaceOrderResponse",
            value: exports.MsgPlaceOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelOrder() {
    return {
        orderId: order_1.OrderId.fromPartial({}),
        goodTilBlock: undefined,
        goodTilBlockTime: undefined
    };
}
exports.MsgCancelOrder = {
    typeUrl: "/nemo_network.clob.MsgCancelOrder",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderId !== undefined) {
            order_1.OrderId.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.goodTilBlock !== undefined) {
            writer.uint32(16).uint32(message.goodTilBlock);
        }
        if (message.goodTilBlockTime !== undefined) {
            writer.uint32(29).fixed32(message.goodTilBlockTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = order_1.OrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.goodTilBlock = reader.uint32();
                    break;
                case 3:
                    message.goodTilBlockTime = reader.fixed32();
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
        var message = createBaseMsgCancelOrder();
        message.orderId = object.orderId !== undefined && object.orderId !== null ? order_1.OrderId.fromPartial(object.orderId) : undefined;
        message.goodTilBlock = (_a = object.goodTilBlock) !== null && _a !== void 0 ? _a : undefined;
        message.goodTilBlockTime = (_b = object.goodTilBlockTime) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgCancelOrder();
        if (object.order_id !== undefined && object.order_id !== null) {
            message.orderId = order_1.OrderId.fromAmino(object.order_id);
        }
        if (object.good_til_block !== undefined && object.good_til_block !== null) {
            message.goodTilBlock = object.good_til_block;
        }
        if (object.good_til_block_time !== undefined && object.good_til_block_time !== null) {
            message.goodTilBlockTime = object.good_til_block_time;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order_id = message.orderId ? order_1.OrderId.toAmino(message.orderId) : undefined;
        obj.good_til_block = message.goodTilBlock === null ? undefined : message.goodTilBlock;
        obj.good_til_block_time = message.goodTilBlockTime === null ? undefined : message.goodTilBlockTime;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCancelOrder.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCancelOrder.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCancelOrder.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgCancelOrder",
            value: exports.MsgCancelOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCancelOrderResponse() {
    return {};
}
exports.MsgCancelOrderResponse = {
    typeUrl: "/nemo_network.clob.MsgCancelOrderResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelOrderResponse();
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
        var message = createBaseMsgCancelOrderResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCancelOrderResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCancelOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCancelOrderResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCancelOrderResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgCancelOrderResponse",
            value: exports.MsgCancelOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancel() {
    return {
        subaccountId: subaccount_1.SubaccountId.fromPartial({}),
        shortTermCancels: [],
        goodTilBlock: 0
    };
}
exports.MsgBatchCancel = {
    typeUrl: "/nemo_network.clob.MsgBatchCancel",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.shortTermCancels; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.OrderBatch.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.goodTilBlock !== 0) {
            writer.uint32(24).uint32(message.goodTilBlock);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgBatchCancel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.shortTermCancels.push(exports.OrderBatch.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.goodTilBlock = reader.uint32();
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
        var message = createBaseMsgBatchCancel();
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.subaccountId) : undefined;
        message.shortTermCancels = ((_a = object.shortTermCancels) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderBatch.fromPartial(e); })) || [];
        message.goodTilBlock = (_b = object.goodTilBlock) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgBatchCancel();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.SubaccountId.fromAmino(object.subaccount_id);
        }
        message.shortTermCancels = ((_a = object.short_term_cancels) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderBatch.fromAmino(e); })) || [];
        if (object.good_til_block !== undefined && object.good_til_block !== null) {
            message.goodTilBlock = object.good_til_block;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subaccount_id = message.subaccountId ? subaccount_1.SubaccountId.toAmino(message.subaccountId) : undefined;
        if (message.shortTermCancels) {
            obj.short_term_cancels = message.shortTermCancels.map(function (e) { return e ? exports.OrderBatch.toAmino(e) : undefined; });
        }
        else {
            obj.short_term_cancels = message.shortTermCancels;
        }
        obj.good_til_block = message.goodTilBlock === 0 ? undefined : message.goodTilBlock;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgBatchCancel.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgBatchCancel.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgBatchCancel.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgBatchCancel",
            value: exports.MsgBatchCancel.encode(message).finish()
        };
    }
};
function createBaseOrderBatch() {
    return {
        clobPairId: 0,
        clientIds: []
    };
}
exports.OrderBatch = {
    typeUrl: "/nemo_network.clob.OrderBatch",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.clobPairId !== 0) {
            writer.uint32(8).uint32(message.clobPairId);
        }
        writer.uint32(18).fork();
        for (var _i = 0, _a = message.clientIds; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderBatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPairId = reader.uint32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.clientIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.clientIds.push(reader.uint32());
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
        var message = createBaseOrderBatch();
        message.clobPairId = (_a = object.clobPairId) !== null && _a !== void 0 ? _a : 0;
        message.clientIds = ((_b = object.clientIds) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseOrderBatch();
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        message.clientIds = ((_a = object.client_ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        if (message.clientIds) {
            obj.client_ids = message.clientIds.map(function (e) { return e; });
        }
        else {
            obj.client_ids = message.clientIds;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrderBatch.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrderBatch.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrderBatch.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.OrderBatch",
            value: exports.OrderBatch.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelResponse() {
    return {
        shortTermSucceeded: [],
        shortTermFailed: []
    };
}
exports.MsgBatchCancelResponse = {
    typeUrl: "/nemo_network.clob.MsgBatchCancelResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.shortTermSucceeded; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.OrderBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.shortTermFailed; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.OrderBatch.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgBatchCancelResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shortTermSucceeded.push(exports.OrderBatch.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.shortTermFailed.push(exports.OrderBatch.decode(reader, reader.uint32()));
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
        var message = createBaseMsgBatchCancelResponse();
        message.shortTermSucceeded = ((_a = object.shortTermSucceeded) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderBatch.fromPartial(e); })) || [];
        message.shortTermFailed = ((_b = object.shortTermFailed) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.OrderBatch.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseMsgBatchCancelResponse();
        message.shortTermSucceeded = ((_a = object.short_term_succeeded) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderBatch.fromAmino(e); })) || [];
        message.shortTermFailed = ((_b = object.short_term_failed) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.OrderBatch.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.shortTermSucceeded) {
            obj.short_term_succeeded = message.shortTermSucceeded.map(function (e) { return e ? exports.OrderBatch.toAmino(e) : undefined; });
        }
        else {
            obj.short_term_succeeded = message.shortTermSucceeded;
        }
        if (message.shortTermFailed) {
            obj.short_term_failed = message.shortTermFailed.map(function (e) { return e ? exports.OrderBatch.toAmino(e) : undefined; });
        }
        else {
            obj.short_term_failed = message.shortTermFailed;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgBatchCancelResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgBatchCancelResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgBatchCancelResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgBatchCancelResponse",
            value: exports.MsgBatchCancelResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClobPair() {
    return {
        authority: "",
        clobPair: clob_pair_1.ClobPair.fromPartial({})
    };
}
exports.MsgUpdateClobPair = {
    typeUrl: "/nemo_network.clob.MsgUpdateClobPair",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.clobPair !== undefined) {
            clob_pair_1.ClobPair.encode(message.clobPair, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateClobPair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgUpdateClobPair();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.clobPair = object.clobPair !== undefined && object.clobPair !== null ? clob_pair_1.ClobPair.fromPartial(object.clobPair) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateClobPair();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.clob_pair !== undefined && object.clob_pair !== null) {
            message.clobPair = clob_pair_1.ClobPair.fromAmino(object.clob_pair);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.clob_pair = message.clobPair ? clob_pair_1.ClobPair.toAmino(message.clobPair) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateClobPair.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateClobPair.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateClobPair.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgUpdateClobPair",
            value: exports.MsgUpdateClobPair.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClobPairResponse() {
    return {};
}
exports.MsgUpdateClobPairResponse = {
    typeUrl: "/nemo_network.clob.MsgUpdateClobPairResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateClobPairResponse();
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
        var message = createBaseMsgUpdateClobPairResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateClobPairResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateClobPairResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateClobPairResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateClobPairResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgUpdateClobPairResponse",
            value: exports.MsgUpdateClobPairResponse.encode(message).finish()
        };
    }
};
function createBaseOperationRaw() {
    return {
        match: undefined,
        shortTermOrderPlacement: undefined,
        orderRemoval: undefined
    };
}
exports.OperationRaw = {
    typeUrl: "/nemo_network.clob.OperationRaw",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.match !== undefined) {
            matches_1.ClobMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
        }
        if (message.shortTermOrderPlacement !== undefined) {
            writer.uint32(18).bytes(message.shortTermOrderPlacement);
        }
        if (message.orderRemoval !== undefined) {
            order_removals_1.OrderRemoval.encode(message.orderRemoval, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOperationRaw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = matches_1.ClobMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.shortTermOrderPlacement = reader.bytes();
                    break;
                case 3:
                    message.orderRemoval = order_removals_1.OrderRemoval.decode(reader, reader.uint32());
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
        var message = createBaseOperationRaw();
        message.match = object.match !== undefined && object.match !== null ? matches_1.ClobMatch.fromPartial(object.match) : undefined;
        message.shortTermOrderPlacement = (_a = object.shortTermOrderPlacement) !== null && _a !== void 0 ? _a : undefined;
        message.orderRemoval = object.orderRemoval !== undefined && object.orderRemoval !== null ? order_removals_1.OrderRemoval.fromPartial(object.orderRemoval) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOperationRaw();
        if (object.match !== undefined && object.match !== null) {
            message.match = matches_1.ClobMatch.fromAmino(object.match);
        }
        if (object.short_term_order_placement !== undefined && object.short_term_order_placement !== null) {
            message.shortTermOrderPlacement = (0, helpers_1.bytesFromBase64)(object.short_term_order_placement);
        }
        if (object.order_removal !== undefined && object.order_removal !== null) {
            message.orderRemoval = order_removals_1.OrderRemoval.fromAmino(object.order_removal);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.match = message.match ? matches_1.ClobMatch.toAmino(message.match) : undefined;
        obj.short_term_order_placement = message.shortTermOrderPlacement ? (0, helpers_1.base64FromBytes)(message.shortTermOrderPlacement) : undefined;
        obj.order_removal = message.orderRemoval ? order_removals_1.OrderRemoval.toAmino(message.orderRemoval) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OperationRaw.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OperationRaw.decode(message.value);
    },
    toProto: function (message) {
        return exports.OperationRaw.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.OperationRaw",
            value: exports.OperationRaw.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateEquityTierLimitConfiguration() {
    return {
        authority: "",
        equityTierLimitConfig: equity_tier_limit_config_1.EquityTierLimitConfiguration.fromPartial({})
    };
}
exports.MsgUpdateEquityTierLimitConfiguration = {
    typeUrl: "/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.equityTierLimitConfig !== undefined) {
            equity_tier_limit_config_1.EquityTierLimitConfiguration.encode(message.equityTierLimitConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateEquityTierLimitConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgUpdateEquityTierLimitConfiguration();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.equityTierLimitConfig = object.equityTierLimitConfig !== undefined && object.equityTierLimitConfig !== null ? equity_tier_limit_config_1.EquityTierLimitConfiguration.fromPartial(object.equityTierLimitConfig) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateEquityTierLimitConfiguration();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.equity_tier_limit_config !== undefined && object.equity_tier_limit_config !== null) {
            message.equityTierLimitConfig = equity_tier_limit_config_1.EquityTierLimitConfiguration.fromAmino(object.equity_tier_limit_config);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.equity_tier_limit_config = message.equityTierLimitConfig ? equity_tier_limit_config_1.EquityTierLimitConfiguration.toAmino(message.equityTierLimitConfig) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateEquityTierLimitConfiguration.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateEquityTierLimitConfiguration.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateEquityTierLimitConfiguration.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgUpdateEquityTierLimitConfiguration",
            value: exports.MsgUpdateEquityTierLimitConfiguration.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateEquityTierLimitConfigurationResponse() {
    return {};
}
exports.MsgUpdateEquityTierLimitConfigurationResponse = {
    typeUrl: "/nemo_network.clob.MsgUpdateEquityTierLimitConfigurationResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateEquityTierLimitConfigurationResponse();
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
        var message = createBaseMsgUpdateEquityTierLimitConfigurationResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateEquityTierLimitConfigurationResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateEquityTierLimitConfigurationResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateEquityTierLimitConfigurationResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateEquityTierLimitConfigurationResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgUpdateEquityTierLimitConfigurationResponse",
            value: exports.MsgUpdateEquityTierLimitConfigurationResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateBlockRateLimitConfiguration() {
    return {
        authority: "",
        blockRateLimitConfig: block_rate_limit_config_1.BlockRateLimitConfiguration.fromPartial({})
    };
}
exports.MsgUpdateBlockRateLimitConfiguration = {
    typeUrl: "/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.blockRateLimitConfig !== undefined) {
            block_rate_limit_config_1.BlockRateLimitConfiguration.encode(message.blockRateLimitConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateBlockRateLimitConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 3:
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
        var _a;
        var message = createBaseMsgUpdateBlockRateLimitConfiguration();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.blockRateLimitConfig = object.blockRateLimitConfig !== undefined && object.blockRateLimitConfig !== null ? block_rate_limit_config_1.BlockRateLimitConfiguration.fromPartial(object.blockRateLimitConfig) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateBlockRateLimitConfiguration();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.block_rate_limit_config !== undefined && object.block_rate_limit_config !== null) {
            message.blockRateLimitConfig = block_rate_limit_config_1.BlockRateLimitConfiguration.fromAmino(object.block_rate_limit_config);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.block_rate_limit_config = message.blockRateLimitConfig ? block_rate_limit_config_1.BlockRateLimitConfiguration.toAmino(message.blockRateLimitConfig) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateBlockRateLimitConfiguration.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateBlockRateLimitConfiguration.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateBlockRateLimitConfiguration.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgUpdateBlockRateLimitConfiguration",
            value: exports.MsgUpdateBlockRateLimitConfiguration.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateBlockRateLimitConfigurationResponse() {
    return {};
}
exports.MsgUpdateBlockRateLimitConfigurationResponse = {
    typeUrl: "/nemo_network.clob.MsgUpdateBlockRateLimitConfigurationResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateBlockRateLimitConfigurationResponse();
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
        var message = createBaseMsgUpdateBlockRateLimitConfigurationResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateBlockRateLimitConfigurationResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateBlockRateLimitConfigurationResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateBlockRateLimitConfigurationResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateBlockRateLimitConfigurationResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgUpdateBlockRateLimitConfigurationResponse",
            value: exports.MsgUpdateBlockRateLimitConfigurationResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateLiquidationsConfig() {
    return {
        authority: "",
        liquidationsConfig: liquidations_config_1.LiquidationsConfig.fromPartial({})
    };
}
exports.MsgUpdateLiquidationsConfig = {
    typeUrl: "/nemo_network.clob.MsgUpdateLiquidationsConfig",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.liquidationsConfig !== undefined) {
            liquidations_config_1.LiquidationsConfig.encode(message.liquidationsConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateLiquidationsConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgUpdateLiquidationsConfig();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.liquidationsConfig = object.liquidationsConfig !== undefined && object.liquidationsConfig !== null ? liquidations_config_1.LiquidationsConfig.fromPartial(object.liquidationsConfig) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateLiquidationsConfig();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.liquidations_config !== undefined && object.liquidations_config !== null) {
            message.liquidationsConfig = liquidations_config_1.LiquidationsConfig.fromAmino(object.liquidations_config);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.liquidations_config = message.liquidationsConfig ? liquidations_config_1.LiquidationsConfig.toAmino(message.liquidationsConfig) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateLiquidationsConfig.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateLiquidationsConfig.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateLiquidationsConfig.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgUpdateLiquidationsConfig",
            value: exports.MsgUpdateLiquidationsConfig.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateLiquidationsConfigResponse() {
    return {};
}
exports.MsgUpdateLiquidationsConfigResponse = {
    typeUrl: "/nemo_network.clob.MsgUpdateLiquidationsConfigResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateLiquidationsConfigResponse();
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
        var message = createBaseMsgUpdateLiquidationsConfigResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateLiquidationsConfigResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateLiquidationsConfigResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateLiquidationsConfigResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateLiquidationsConfigResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MsgUpdateLiquidationsConfigResponse",
            value: exports.MsgUpdateLiquidationsConfigResponse.encode(message).finish()
        };
    }
};
