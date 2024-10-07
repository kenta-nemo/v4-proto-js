"use strict";
exports.__esModule = true;
exports.StreamLiquidationOrder = exports.TransactionOrdering = exports.Order = exports.ConditionalOrderPlacement = exports.LongTermOrderPlacement = exports.StatefulOrderTimeSliceValue = exports.OrderFillState = exports.PotentiallyPrunableOrders = exports.OrdersFilledDuringLatestBlock = exports.OrderId = exports.order_ConditionTypeToJSON = exports.order_ConditionTypeFromJSON = exports.Order_ConditionTypeAmino = exports.Order_ConditionTypeSDKType = exports.Order_ConditionType = exports.order_TimeInForceToJSON = exports.order_TimeInForceFromJSON = exports.Order_TimeInForceAmino = exports.Order_TimeInForceSDKType = exports.Order_TimeInForce = exports.order_SideToJSON = exports.order_SideFromJSON = exports.Order_SideAmino = exports.Order_SideSDKType = exports.Order_Side = void 0;
var subaccount_1 = require("../subaccounts/subaccount");
var liquidations_1 = require("./liquidations");
var binary_1 = require("../../binary");
/**
 * Represents the side of the orderbook the order will be placed on.
 * Note that Side.SIDE_UNSPECIFIED is an invalid order and cannot be
 * placed on the orderbook.
 */
var Order_Side;
(function (Order_Side) {
    /** SIDE_UNSPECIFIED - Default value. This value is invalid and unused. */
    Order_Side[Order_Side["SIDE_UNSPECIFIED"] = 0] = "SIDE_UNSPECIFIED";
    /** SIDE_BUY - SIDE_BUY is used to represent a BUY order. */
    Order_Side[Order_Side["SIDE_BUY"] = 1] = "SIDE_BUY";
    /** SIDE_SELL - SIDE_SELL is used to represent a SELL order. */
    Order_Side[Order_Side["SIDE_SELL"] = 2] = "SIDE_SELL";
    Order_Side[Order_Side["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_Side = exports.Order_Side || (exports.Order_Side = {}));
exports.Order_SideSDKType = Order_Side;
exports.Order_SideAmino = Order_Side;
function order_SideFromJSON(object) {
    switch (object) {
        case 0:
        case "SIDE_UNSPECIFIED":
            return Order_Side.SIDE_UNSPECIFIED;
        case 1:
        case "SIDE_BUY":
            return Order_Side.SIDE_BUY;
        case 2:
        case "SIDE_SELL":
            return Order_Side.SIDE_SELL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order_Side.UNRECOGNIZED;
    }
}
exports.order_SideFromJSON = order_SideFromJSON;
function order_SideToJSON(object) {
    switch (object) {
        case Order_Side.SIDE_UNSPECIFIED:
            return "SIDE_UNSPECIFIED";
        case Order_Side.SIDE_BUY:
            return "SIDE_BUY";
        case Order_Side.SIDE_SELL:
            return "SIDE_SELL";
        case Order_Side.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.order_SideToJSON = order_SideToJSON;
/**
 * TimeInForce indicates how long an order will remain active before it
 * is executed or expires.
 */
var Order_TimeInForce;
(function (Order_TimeInForce) {
    /**
     * TIME_IN_FORCE_UNSPECIFIED - TIME_IN_FORCE_UNSPECIFIED represents the default behavior where an
     * order will first match with existing orders on the book, and any
     * remaining size will be added to the book as a maker order.
     */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_UNSPECIFIED"] = 0] = "TIME_IN_FORCE_UNSPECIFIED";
    /**
     * TIME_IN_FORCE_IOC - TIME_IN_FORCE_IOC enforces that an order only be matched with
     * maker orders on the book. If the order has remaining size after
     * matching with existing orders on the book, the remaining size
     * is not placed on the book.
     */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_IOC"] = 1] = "TIME_IN_FORCE_IOC";
    /**
     * TIME_IN_FORCE_POST_ONLY - TIME_IN_FORCE_POST_ONLY enforces that an order only be placed
     * on the book as a maker order. Note this means that validators will cancel
     * any newly-placed post only orders that would cross with other maker
     * orders.
     */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_POST_ONLY"] = 2] = "TIME_IN_FORCE_POST_ONLY";
    /**
     * TIME_IN_FORCE_FILL_OR_KILL - TIME_IN_FORCE_FILL_OR_KILL has been deprecated and will be removed in
     * future versions.
     */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_FILL_OR_KILL"] = 3] = "TIME_IN_FORCE_FILL_OR_KILL";
    Order_TimeInForce[Order_TimeInForce["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_TimeInForce = exports.Order_TimeInForce || (exports.Order_TimeInForce = {}));
exports.Order_TimeInForceSDKType = Order_TimeInForce;
exports.Order_TimeInForceAmino = Order_TimeInForce;
function order_TimeInForceFromJSON(object) {
    switch (object) {
        case 0:
        case "TIME_IN_FORCE_UNSPECIFIED":
            return Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
        case 1:
        case "TIME_IN_FORCE_IOC":
            return Order_TimeInForce.TIME_IN_FORCE_IOC;
        case 2:
        case "TIME_IN_FORCE_POST_ONLY":
            return Order_TimeInForce.TIME_IN_FORCE_POST_ONLY;
        case 3:
        case "TIME_IN_FORCE_FILL_OR_KILL":
            return Order_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order_TimeInForce.UNRECOGNIZED;
    }
}
exports.order_TimeInForceFromJSON = order_TimeInForceFromJSON;
function order_TimeInForceToJSON(object) {
    switch (object) {
        case Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED:
            return "TIME_IN_FORCE_UNSPECIFIED";
        case Order_TimeInForce.TIME_IN_FORCE_IOC:
            return "TIME_IN_FORCE_IOC";
        case Order_TimeInForce.TIME_IN_FORCE_POST_ONLY:
            return "TIME_IN_FORCE_POST_ONLY";
        case Order_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL:
            return "TIME_IN_FORCE_FILL_OR_KILL";
        case Order_TimeInForce.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.order_TimeInForceToJSON = order_TimeInForceToJSON;
var Order_ConditionType;
(function (Order_ConditionType) {
    /**
     * CONDITION_TYPE_UNSPECIFIED - CONDITION_TYPE_UNSPECIFIED represents the default behavior where an
     * order will be placed immediately on the orderbook.
     */
    Order_ConditionType[Order_ConditionType["CONDITION_TYPE_UNSPECIFIED"] = 0] = "CONDITION_TYPE_UNSPECIFIED";
    /**
     * CONDITION_TYPE_STOP_LOSS - CONDITION_TYPE_STOP_LOSS represents a stop order. A stop order will
     * trigger when the oracle price moves at or above the trigger price for
     * buys, and at or below the trigger price for sells.
     */
    Order_ConditionType[Order_ConditionType["CONDITION_TYPE_STOP_LOSS"] = 1] = "CONDITION_TYPE_STOP_LOSS";
    /**
     * CONDITION_TYPE_TAKE_PROFIT - CONDITION_TYPE_TAKE_PROFIT represents a take profit order. A take profit
     * order will trigger when the oracle price moves at or below the trigger
     * price for buys and at or above the trigger price for sells.
     */
    Order_ConditionType[Order_ConditionType["CONDITION_TYPE_TAKE_PROFIT"] = 2] = "CONDITION_TYPE_TAKE_PROFIT";
    Order_ConditionType[Order_ConditionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_ConditionType = exports.Order_ConditionType || (exports.Order_ConditionType = {}));
exports.Order_ConditionTypeSDKType = Order_ConditionType;
exports.Order_ConditionTypeAmino = Order_ConditionType;
function order_ConditionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONDITION_TYPE_UNSPECIFIED":
            return Order_ConditionType.CONDITION_TYPE_UNSPECIFIED;
        case 1:
        case "CONDITION_TYPE_STOP_LOSS":
            return Order_ConditionType.CONDITION_TYPE_STOP_LOSS;
        case 2:
        case "CONDITION_TYPE_TAKE_PROFIT":
            return Order_ConditionType.CONDITION_TYPE_TAKE_PROFIT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order_ConditionType.UNRECOGNIZED;
    }
}
exports.order_ConditionTypeFromJSON = order_ConditionTypeFromJSON;
function order_ConditionTypeToJSON(object) {
    switch (object) {
        case Order_ConditionType.CONDITION_TYPE_UNSPECIFIED:
            return "CONDITION_TYPE_UNSPECIFIED";
        case Order_ConditionType.CONDITION_TYPE_STOP_LOSS:
            return "CONDITION_TYPE_STOP_LOSS";
        case Order_ConditionType.CONDITION_TYPE_TAKE_PROFIT:
            return "CONDITION_TYPE_TAKE_PROFIT";
        case Order_ConditionType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.order_ConditionTypeToJSON = order_ConditionTypeToJSON;
function createBaseOrderId() {
    return {
        subaccountId: subaccount_1.SubaccountId.fromPartial({}),
        clientId: 0,
        orderFlags: 0,
        clobPairId: 0
    };
}
exports.OrderId = {
    typeUrl: "/nemo_network.clob.OrderId",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.clientId !== 0) {
            writer.uint32(21).fixed32(message.clientId);
        }
        if (message.orderFlags !== 0) {
            writer.uint32(24).uint32(message.orderFlags);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(32).uint32(message.clobPairId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clientId = reader.fixed32();
                    break;
                case 3:
                    message.orderFlags = reader.uint32();
                    break;
                case 4:
                    message.clobPairId = reader.uint32();
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
        var message = createBaseOrderId();
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.subaccountId) : undefined;
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : 0;
        message.orderFlags = (_b = object.orderFlags) !== null && _b !== void 0 ? _b : 0;
        message.clobPairId = (_c = object.clobPairId) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOrderId();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.SubaccountId.fromAmino(object.subaccount_id);
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.order_flags !== undefined && object.order_flags !== null) {
            message.orderFlags = object.order_flags;
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subaccount_id = message.subaccountId ? subaccount_1.SubaccountId.toAmino(message.subaccountId) : undefined;
        obj.client_id = message.clientId === 0 ? undefined : message.clientId;
        obj.order_flags = message.orderFlags === 0 ? undefined : message.orderFlags;
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrderId.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrderId.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrderId.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.OrderId",
            value: exports.OrderId.encode(message).finish()
        };
    }
};
function createBaseOrdersFilledDuringLatestBlock() {
    return {
        orderIds: []
    };
}
exports.OrdersFilledDuringLatestBlock = {
    typeUrl: "/nemo_network.clob.OrdersFilledDuringLatestBlock",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.orderIds; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.OrderId.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrdersFilledDuringLatestBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderIds.push(exports.OrderId.decode(reader, reader.uint32()));
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
        var message = createBaseOrdersFilledDuringLatestBlock();
        message.orderIds = ((_a = object.orderIds) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderId.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseOrdersFilledDuringLatestBlock();
        message.orderIds = ((_a = object.order_ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderId.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.orderIds) {
            obj.order_ids = message.orderIds.map(function (e) { return e ? exports.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.order_ids = message.orderIds;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrdersFilledDuringLatestBlock.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrdersFilledDuringLatestBlock.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrdersFilledDuringLatestBlock.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.OrdersFilledDuringLatestBlock",
            value: exports.OrdersFilledDuringLatestBlock.encode(message).finish()
        };
    }
};
function createBasePotentiallyPrunableOrders() {
    return {
        orderIds: []
    };
}
exports.PotentiallyPrunableOrders = {
    typeUrl: "/nemo_network.clob.PotentiallyPrunableOrders",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.orderIds; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.OrderId.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePotentiallyPrunableOrders();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderIds.push(exports.OrderId.decode(reader, reader.uint32()));
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
        var message = createBasePotentiallyPrunableOrders();
        message.orderIds = ((_a = object.orderIds) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderId.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBasePotentiallyPrunableOrders();
        message.orderIds = ((_a = object.order_ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderId.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.orderIds) {
            obj.order_ids = message.orderIds.map(function (e) { return e ? exports.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.order_ids = message.orderIds;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PotentiallyPrunableOrders.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PotentiallyPrunableOrders.decode(message.value);
    },
    toProto: function (message) {
        return exports.PotentiallyPrunableOrders.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.PotentiallyPrunableOrders",
            value: exports.PotentiallyPrunableOrders.encode(message).finish()
        };
    }
};
function createBaseOrderFillState() {
    return {
        fillAmount: BigInt(0),
        prunableBlockHeight: 0
    };
}
exports.OrderFillState = {
    typeUrl: "/nemo_network.clob.OrderFillState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.fillAmount !== BigInt(0)) {
            writer.uint32(8).uint64(message.fillAmount);
        }
        if (message.prunableBlockHeight !== 0) {
            writer.uint32(16).uint32(message.prunableBlockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderFillState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fillAmount = reader.uint64();
                    break;
                case 2:
                    message.prunableBlockHeight = reader.uint32();
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
        var message = createBaseOrderFillState();
        message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
        message.prunableBlockHeight = (_a = object.prunableBlockHeight) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOrderFillState();
        if (object.fill_amount !== undefined && object.fill_amount !== null) {
            message.fillAmount = BigInt(object.fill_amount);
        }
        if (object.prunable_block_height !== undefined && object.prunable_block_height !== null) {
            message.prunableBlockHeight = object.prunable_block_height;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.fill_amount = message.fillAmount !== BigInt(0) ? ((_a = message.fillAmount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.prunable_block_height = message.prunableBlockHeight === 0 ? undefined : message.prunableBlockHeight;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrderFillState.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrderFillState.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrderFillState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.OrderFillState",
            value: exports.OrderFillState.encode(message).finish()
        };
    }
};
function createBaseStatefulOrderTimeSliceValue() {
    return {
        orderIds: []
    };
}
exports.StatefulOrderTimeSliceValue = {
    typeUrl: "/nemo_network.clob.StatefulOrderTimeSliceValue",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.orderIds; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.OrderId.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatefulOrderTimeSliceValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderIds.push(exports.OrderId.decode(reader, reader.uint32()));
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
        var message = createBaseStatefulOrderTimeSliceValue();
        message.orderIds = ((_a = object.orderIds) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderId.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseStatefulOrderTimeSliceValue();
        message.orderIds = ((_a = object.order_ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.OrderId.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.orderIds) {
            obj.order_ids = message.orderIds.map(function (e) { return e ? exports.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.order_ids = message.orderIds;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatefulOrderTimeSliceValue.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StatefulOrderTimeSliceValue.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatefulOrderTimeSliceValue.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.StatefulOrderTimeSliceValue",
            value: exports.StatefulOrderTimeSliceValue.encode(message).finish()
        };
    }
};
function createBaseLongTermOrderPlacement() {
    return {
        order: exports.Order.fromPartial({}),
        placementIndex: exports.TransactionOrdering.fromPartial({})
    };
}
exports.LongTermOrderPlacement = {
    typeUrl: "/nemo_network.clob.LongTermOrderPlacement",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.order !== undefined) {
            exports.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.placementIndex !== undefined) {
            exports.TransactionOrdering.encode(message.placementIndex, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLongTermOrderPlacement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = exports.Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.placementIndex = exports.TransactionOrdering.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseLongTermOrderPlacement();
        message.order = object.order !== undefined && object.order !== null ? exports.Order.fromPartial(object.order) : undefined;
        message.placementIndex = object.placementIndex !== undefined && object.placementIndex !== null ? exports.TransactionOrdering.fromPartial(object.placementIndex) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseLongTermOrderPlacement();
        if (object.order !== undefined && object.order !== null) {
            message.order = exports.Order.fromAmino(object.order);
        }
        if (object.placement_index !== undefined && object.placement_index !== null) {
            message.placementIndex = exports.TransactionOrdering.fromAmino(object.placement_index);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order = message.order ? exports.Order.toAmino(message.order) : undefined;
        obj.placement_index = message.placementIndex ? exports.TransactionOrdering.toAmino(message.placementIndex) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LongTermOrderPlacement.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LongTermOrderPlacement.decode(message.value);
    },
    toProto: function (message) {
        return exports.LongTermOrderPlacement.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.LongTermOrderPlacement",
            value: exports.LongTermOrderPlacement.encode(message).finish()
        };
    }
};
function createBaseConditionalOrderPlacement() {
    return {
        order: exports.Order.fromPartial({}),
        placementIndex: exports.TransactionOrdering.fromPartial({}),
        triggerIndex: undefined
    };
}
exports.ConditionalOrderPlacement = {
    typeUrl: "/nemo_network.clob.ConditionalOrderPlacement",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.order !== undefined) {
            exports.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.placementIndex !== undefined) {
            exports.TransactionOrdering.encode(message.placementIndex, writer.uint32(18).fork()).ldelim();
        }
        if (message.triggerIndex !== undefined) {
            exports.TransactionOrdering.encode(message.triggerIndex, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConditionalOrderPlacement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = exports.Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.placementIndex = exports.TransactionOrdering.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.triggerIndex = exports.TransactionOrdering.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseConditionalOrderPlacement();
        message.order = object.order !== undefined && object.order !== null ? exports.Order.fromPartial(object.order) : undefined;
        message.placementIndex = object.placementIndex !== undefined && object.placementIndex !== null ? exports.TransactionOrdering.fromPartial(object.placementIndex) : undefined;
        message.triggerIndex = object.triggerIndex !== undefined && object.triggerIndex !== null ? exports.TransactionOrdering.fromPartial(object.triggerIndex) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseConditionalOrderPlacement();
        if (object.order !== undefined && object.order !== null) {
            message.order = exports.Order.fromAmino(object.order);
        }
        if (object.placement_index !== undefined && object.placement_index !== null) {
            message.placementIndex = exports.TransactionOrdering.fromAmino(object.placement_index);
        }
        if (object.trigger_index !== undefined && object.trigger_index !== null) {
            message.triggerIndex = exports.TransactionOrdering.fromAmino(object.trigger_index);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order = message.order ? exports.Order.toAmino(message.order) : undefined;
        obj.placement_index = message.placementIndex ? exports.TransactionOrdering.toAmino(message.placementIndex) : undefined;
        obj.trigger_index = message.triggerIndex ? exports.TransactionOrdering.toAmino(message.triggerIndex) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ConditionalOrderPlacement.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ConditionalOrderPlacement.decode(message.value);
    },
    toProto: function (message) {
        return exports.ConditionalOrderPlacement.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.ConditionalOrderPlacement",
            value: exports.ConditionalOrderPlacement.encode(message).finish()
        };
    }
};
function createBaseOrder() {
    return {
        orderId: exports.OrderId.fromPartial({}),
        side: 0,
        quantums: BigInt(0),
        subticks: BigInt(0),
        goodTilBlock: undefined,
        goodTilBlockTime: undefined,
        timeInForce: 0,
        reduceOnly: false,
        clientMetadata: 0,
        conditionType: 0,
        conditionalOrderTriggerSubticks: BigInt(0)
    };
}
exports.Order = {
    typeUrl: "/nemo_network.clob.Order",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderId !== undefined) {
            exports.OrderId.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.side !== 0) {
            writer.uint32(16).int32(message.side);
        }
        if (message.quantums !== BigInt(0)) {
            writer.uint32(24).uint64(message.quantums);
        }
        if (message.subticks !== BigInt(0)) {
            writer.uint32(32).uint64(message.subticks);
        }
        if (message.goodTilBlock !== undefined) {
            writer.uint32(40).uint32(message.goodTilBlock);
        }
        if (message.goodTilBlockTime !== undefined) {
            writer.uint32(53).fixed32(message.goodTilBlockTime);
        }
        if (message.timeInForce !== 0) {
            writer.uint32(56).int32(message.timeInForce);
        }
        if (message.reduceOnly === true) {
            writer.uint32(64).bool(message.reduceOnly);
        }
        if (message.clientMetadata !== 0) {
            writer.uint32(72).uint32(message.clientMetadata);
        }
        if (message.conditionType !== 0) {
            writer.uint32(80).int32(message.conditionType);
        }
        if (message.conditionalOrderTriggerSubticks !== BigInt(0)) {
            writer.uint32(88).uint64(message.conditionalOrderTriggerSubticks);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = exports.OrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.side = reader.int32();
                    break;
                case 3:
                    message.quantums = reader.uint64();
                    break;
                case 4:
                    message.subticks = reader.uint64();
                    break;
                case 5:
                    message.goodTilBlock = reader.uint32();
                    break;
                case 6:
                    message.goodTilBlockTime = reader.fixed32();
                    break;
                case 7:
                    message.timeInForce = reader.int32();
                    break;
                case 8:
                    message.reduceOnly = reader.bool();
                    break;
                case 9:
                    message.clientMetadata = reader.uint32();
                    break;
                case 10:
                    message.conditionType = reader.int32();
                    break;
                case 11:
                    message.conditionalOrderTriggerSubticks = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseOrder();
        message.orderId = object.orderId !== undefined && object.orderId !== null ? exports.OrderId.fromPartial(object.orderId) : undefined;
        message.side = (_a = object.side) !== null && _a !== void 0 ? _a : 0;
        message.quantums = object.quantums !== undefined && object.quantums !== null ? BigInt(object.quantums.toString()) : BigInt(0);
        message.subticks = object.subticks !== undefined && object.subticks !== null ? BigInt(object.subticks.toString()) : BigInt(0);
        message.goodTilBlock = (_b = object.goodTilBlock) !== null && _b !== void 0 ? _b : undefined;
        message.goodTilBlockTime = (_c = object.goodTilBlockTime) !== null && _c !== void 0 ? _c : undefined;
        message.timeInForce = (_d = object.timeInForce) !== null && _d !== void 0 ? _d : 0;
        message.reduceOnly = (_e = object.reduceOnly) !== null && _e !== void 0 ? _e : false;
        message.clientMetadata = (_f = object.clientMetadata) !== null && _f !== void 0 ? _f : 0;
        message.conditionType = (_g = object.conditionType) !== null && _g !== void 0 ? _g : 0;
        message.conditionalOrderTriggerSubticks = object.conditionalOrderTriggerSubticks !== undefined && object.conditionalOrderTriggerSubticks !== null ? BigInt(object.conditionalOrderTriggerSubticks.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOrder();
        if (object.order_id !== undefined && object.order_id !== null) {
            message.orderId = exports.OrderId.fromAmino(object.order_id);
        }
        if (object.side !== undefined && object.side !== null) {
            message.side = object.side;
        }
        if (object.quantums !== undefined && object.quantums !== null) {
            message.quantums = BigInt(object.quantums);
        }
        if (object.subticks !== undefined && object.subticks !== null) {
            message.subticks = BigInt(object.subticks);
        }
        if (object.good_til_block !== undefined && object.good_til_block !== null) {
            message.goodTilBlock = object.good_til_block;
        }
        if (object.good_til_block_time !== undefined && object.good_til_block_time !== null) {
            message.goodTilBlockTime = object.good_til_block_time;
        }
        if (object.time_in_force !== undefined && object.time_in_force !== null) {
            message.timeInForce = object.time_in_force;
        }
        if (object.reduce_only !== undefined && object.reduce_only !== null) {
            message.reduceOnly = object.reduce_only;
        }
        if (object.client_metadata !== undefined && object.client_metadata !== null) {
            message.clientMetadata = object.client_metadata;
        }
        if (object.condition_type !== undefined && object.condition_type !== null) {
            message.conditionType = object.condition_type;
        }
        if (object.conditional_order_trigger_subticks !== undefined && object.conditional_order_trigger_subticks !== null) {
            message.conditionalOrderTriggerSubticks = BigInt(object.conditional_order_trigger_subticks);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b, _c;
        var obj = {};
        obj.order_id = message.orderId ? exports.OrderId.toAmino(message.orderId) : undefined;
        obj.side = message.side === 0 ? undefined : message.side;
        obj.quantums = message.quantums !== BigInt(0) ? ((_a = message.quantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.subticks = message.subticks !== BigInt(0) ? ((_b = message.subticks) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.good_til_block = message.goodTilBlock === null ? undefined : message.goodTilBlock;
        obj.good_til_block_time = message.goodTilBlockTime === null ? undefined : message.goodTilBlockTime;
        obj.time_in_force = message.timeInForce === 0 ? undefined : message.timeInForce;
        obj.reduce_only = message.reduceOnly === false ? undefined : message.reduceOnly;
        obj.client_metadata = message.clientMetadata === 0 ? undefined : message.clientMetadata;
        obj.condition_type = message.conditionType === 0 ? undefined : message.conditionType;
        obj.conditional_order_trigger_subticks = message.conditionalOrderTriggerSubticks !== BigInt(0) ? ((_c = message.conditionalOrderTriggerSubticks) === null || _c === void 0 ? void 0 : _c.toString).call(_c) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Order.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Order.decode(message.value);
    },
    toProto: function (message) {
        return exports.Order.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.Order",
            value: exports.Order.encode(message).finish()
        };
    }
};
function createBaseTransactionOrdering() {
    return {
        blockHeight: 0,
        transactionIndex: 0
    };
}
exports.TransactionOrdering = {
    typeUrl: "/nemo_network.clob.TransactionOrdering",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockHeight !== 0) {
            writer.uint32(8).uint32(message.blockHeight);
        }
        if (message.transactionIndex !== 0) {
            writer.uint32(16).uint32(message.transactionIndex);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransactionOrdering();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint32();
                    break;
                case 2:
                    message.transactionIndex = reader.uint32();
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
        var message = createBaseTransactionOrdering();
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : 0;
        message.transactionIndex = (_b = object.transactionIndex) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseTransactionOrdering();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        if (object.transaction_index !== undefined && object.transaction_index !== null) {
            message.transactionIndex = object.transaction_index;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.block_height = message.blockHeight === 0 ? undefined : message.blockHeight;
        obj.transaction_index = message.transactionIndex === 0 ? undefined : message.transactionIndex;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TransactionOrdering.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.TransactionOrdering.decode(message.value);
    },
    toProto: function (message) {
        return exports.TransactionOrdering.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.TransactionOrdering",
            value: exports.TransactionOrdering.encode(message).finish()
        };
    }
};
function createBaseStreamLiquidationOrder() {
    return {
        liquidationInfo: undefined,
        clobPairId: 0,
        isBuy: false,
        quantums: BigInt(0),
        subticks: BigInt(0)
    };
}
exports.StreamLiquidationOrder = {
    typeUrl: "/nemo_network.clob.StreamLiquidationOrder",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.liquidationInfo !== undefined) {
            liquidations_1.PerpetualLiquidationInfo.encode(message.liquidationInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.isBuy === true) {
            writer.uint32(24).bool(message.isBuy);
        }
        if (message.quantums !== BigInt(0)) {
            writer.uint32(32).uint64(message.quantums);
        }
        if (message.subticks !== BigInt(0)) {
            writer.uint32(40).uint64(message.subticks);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamLiquidationOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidationInfo = liquidations_1.PerpetualLiquidationInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.isBuy = reader.bool();
                    break;
                case 4:
                    message.quantums = reader.uint64();
                    break;
                case 5:
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
        var _a, _b;
        var message = createBaseStreamLiquidationOrder();
        message.liquidationInfo = object.liquidationInfo !== undefined && object.liquidationInfo !== null ? liquidations_1.PerpetualLiquidationInfo.fromPartial(object.liquidationInfo) : undefined;
        message.clobPairId = (_a = object.clobPairId) !== null && _a !== void 0 ? _a : 0;
        message.isBuy = (_b = object.isBuy) !== null && _b !== void 0 ? _b : false;
        message.quantums = object.quantums !== undefined && object.quantums !== null ? BigInt(object.quantums.toString()) : BigInt(0);
        message.subticks = object.subticks !== undefined && object.subticks !== null ? BigInt(object.subticks.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStreamLiquidationOrder();
        if (object.liquidation_info !== undefined && object.liquidation_info !== null) {
            message.liquidationInfo = liquidations_1.PerpetualLiquidationInfo.fromAmino(object.liquidation_info);
        }
        if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
            message.clobPairId = object.clob_pair_id;
        }
        if (object.is_buy !== undefined && object.is_buy !== null) {
            message.isBuy = object.is_buy;
        }
        if (object.quantums !== undefined && object.quantums !== null) {
            message.quantums = BigInt(object.quantums);
        }
        if (object.subticks !== undefined && object.subticks !== null) {
            message.subticks = BigInt(object.subticks);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.liquidation_info = message.liquidationInfo ? liquidations_1.PerpetualLiquidationInfo.toAmino(message.liquidationInfo) : undefined;
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
        obj.quantums = message.quantums !== BigInt(0) ? ((_a = message.quantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.subticks = message.subticks !== BigInt(0) ? ((_b = message.subticks) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StreamLiquidationOrder.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StreamLiquidationOrder.decode(message.value);
    },
    toProto: function (message) {
        return exports.StreamLiquidationOrder.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.StreamLiquidationOrder",
            value: exports.StreamLiquidationOrder.encode(message).finish()
        };
    }
};
