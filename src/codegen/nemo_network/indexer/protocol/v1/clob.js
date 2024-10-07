"use strict";
exports.__esModule = true;
exports.IndexerOrder = exports.IndexerOrderId = exports.clobPairStatusToJSON = exports.clobPairStatusFromJSON = exports.ClobPairStatusAmino = exports.ClobPairStatusSDKType = exports.ClobPairStatus = exports.indexerOrder_ConditionTypeToJSON = exports.indexerOrder_ConditionTypeFromJSON = exports.IndexerOrder_ConditionTypeAmino = exports.IndexerOrder_ConditionTypeSDKType = exports.IndexerOrder_ConditionType = exports.indexerOrder_TimeInForceToJSON = exports.indexerOrder_TimeInForceFromJSON = exports.IndexerOrder_TimeInForceAmino = exports.IndexerOrder_TimeInForceSDKType = exports.IndexerOrder_TimeInForce = exports.indexerOrder_SideToJSON = exports.indexerOrder_SideFromJSON = exports.IndexerOrder_SideAmino = exports.IndexerOrder_SideSDKType = exports.IndexerOrder_Side = void 0;
var subaccount_1 = require("./subaccount");
var binary_1 = require("../../../../binary");
/**
 * Represents the side of the orderbook the order will be placed on.
 * Note that Side.SIDE_UNSPECIFIED is an invalid order and cannot be
 * placed on the orderbook.
 */
var IndexerOrder_Side;
(function (IndexerOrder_Side) {
    /** SIDE_UNSPECIFIED - Default value. This value is invalid and unused. */
    IndexerOrder_Side[IndexerOrder_Side["SIDE_UNSPECIFIED"] = 0] = "SIDE_UNSPECIFIED";
    /** SIDE_BUY - SIDE_BUY is used to represent a BUY order. */
    IndexerOrder_Side[IndexerOrder_Side["SIDE_BUY"] = 1] = "SIDE_BUY";
    /** SIDE_SELL - SIDE_SELL is used to represent a SELL order. */
    IndexerOrder_Side[IndexerOrder_Side["SIDE_SELL"] = 2] = "SIDE_SELL";
    IndexerOrder_Side[IndexerOrder_Side["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IndexerOrder_Side = exports.IndexerOrder_Side || (exports.IndexerOrder_Side = {}));
exports.IndexerOrder_SideSDKType = IndexerOrder_Side;
exports.IndexerOrder_SideAmino = IndexerOrder_Side;
function indexerOrder_SideFromJSON(object) {
    switch (object) {
        case 0:
        case "SIDE_UNSPECIFIED":
            return IndexerOrder_Side.SIDE_UNSPECIFIED;
        case 1:
        case "SIDE_BUY":
            return IndexerOrder_Side.SIDE_BUY;
        case 2:
        case "SIDE_SELL":
            return IndexerOrder_Side.SIDE_SELL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IndexerOrder_Side.UNRECOGNIZED;
    }
}
exports.indexerOrder_SideFromJSON = indexerOrder_SideFromJSON;
function indexerOrder_SideToJSON(object) {
    switch (object) {
        case IndexerOrder_Side.SIDE_UNSPECIFIED:
            return "SIDE_UNSPECIFIED";
        case IndexerOrder_Side.SIDE_BUY:
            return "SIDE_BUY";
        case IndexerOrder_Side.SIDE_SELL:
            return "SIDE_SELL";
        case IndexerOrder_Side.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.indexerOrder_SideToJSON = indexerOrder_SideToJSON;
/**
 * TimeInForce indicates how long an order will remain active before it
 * is executed or expires.
 */
var IndexerOrder_TimeInForce;
(function (IndexerOrder_TimeInForce) {
    /**
     * TIME_IN_FORCE_UNSPECIFIED - TIME_IN_FORCE_UNSPECIFIED represents the default behavior where an
     * order will first match with existing orders on the book, and any
     * remaining size will be added to the book as a maker order.
     */
    IndexerOrder_TimeInForce[IndexerOrder_TimeInForce["TIME_IN_FORCE_UNSPECIFIED"] = 0] = "TIME_IN_FORCE_UNSPECIFIED";
    /**
     * TIME_IN_FORCE_IOC - TIME_IN_FORCE_IOC enforces that an order only be matched with
     * maker orders on the book. If the order has remaining size after
     * matching with existing orders on the book, the remaining size
     * is not placed on the book.
     */
    IndexerOrder_TimeInForce[IndexerOrder_TimeInForce["TIME_IN_FORCE_IOC"] = 1] = "TIME_IN_FORCE_IOC";
    /**
     * TIME_IN_FORCE_POST_ONLY - TIME_IN_FORCE_POST_ONLY enforces that an order only be placed
     * on the book as a maker order. Note this means that validators will cancel
     * any newly-placed post only orders that would cross with other maker
     * orders.
     */
    IndexerOrder_TimeInForce[IndexerOrder_TimeInForce["TIME_IN_FORCE_POST_ONLY"] = 2] = "TIME_IN_FORCE_POST_ONLY";
    /**
     * TIME_IN_FORCE_FILL_OR_KILL - TIME_IN_FORCE_FILL_OR_KILL enforces that an order will either be filled
     * completely and immediately by maker orders on the book or canceled if the
     * entire amount can‘t be matched.
     */
    IndexerOrder_TimeInForce[IndexerOrder_TimeInForce["TIME_IN_FORCE_FILL_OR_KILL"] = 3] = "TIME_IN_FORCE_FILL_OR_KILL";
    IndexerOrder_TimeInForce[IndexerOrder_TimeInForce["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IndexerOrder_TimeInForce = exports.IndexerOrder_TimeInForce || (exports.IndexerOrder_TimeInForce = {}));
exports.IndexerOrder_TimeInForceSDKType = IndexerOrder_TimeInForce;
exports.IndexerOrder_TimeInForceAmino = IndexerOrder_TimeInForce;
function indexerOrder_TimeInForceFromJSON(object) {
    switch (object) {
        case 0:
        case "TIME_IN_FORCE_UNSPECIFIED":
            return IndexerOrder_TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
        case 1:
        case "TIME_IN_FORCE_IOC":
            return IndexerOrder_TimeInForce.TIME_IN_FORCE_IOC;
        case 2:
        case "TIME_IN_FORCE_POST_ONLY":
            return IndexerOrder_TimeInForce.TIME_IN_FORCE_POST_ONLY;
        case 3:
        case "TIME_IN_FORCE_FILL_OR_KILL":
            return IndexerOrder_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IndexerOrder_TimeInForce.UNRECOGNIZED;
    }
}
exports.indexerOrder_TimeInForceFromJSON = indexerOrder_TimeInForceFromJSON;
function indexerOrder_TimeInForceToJSON(object) {
    switch (object) {
        case IndexerOrder_TimeInForce.TIME_IN_FORCE_UNSPECIFIED:
            return "TIME_IN_FORCE_UNSPECIFIED";
        case IndexerOrder_TimeInForce.TIME_IN_FORCE_IOC:
            return "TIME_IN_FORCE_IOC";
        case IndexerOrder_TimeInForce.TIME_IN_FORCE_POST_ONLY:
            return "TIME_IN_FORCE_POST_ONLY";
        case IndexerOrder_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL:
            return "TIME_IN_FORCE_FILL_OR_KILL";
        case IndexerOrder_TimeInForce.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.indexerOrder_TimeInForceToJSON = indexerOrder_TimeInForceToJSON;
var IndexerOrder_ConditionType;
(function (IndexerOrder_ConditionType) {
    /**
     * CONDITION_TYPE_UNSPECIFIED - CONDITION_TYPE_UNSPECIFIED represents the default behavior where an
     * order will be placed immediately on the orderbook.
     */
    IndexerOrder_ConditionType[IndexerOrder_ConditionType["CONDITION_TYPE_UNSPECIFIED"] = 0] = "CONDITION_TYPE_UNSPECIFIED";
    /**
     * CONDITION_TYPE_STOP_LOSS - CONDITION_TYPE_STOP_LOSS represents a stop order. A stop order will
     * trigger when the oracle price moves at or above the trigger price for
     * buys, and at or below the trigger price for sells.
     */
    IndexerOrder_ConditionType[IndexerOrder_ConditionType["CONDITION_TYPE_STOP_LOSS"] = 1] = "CONDITION_TYPE_STOP_LOSS";
    /**
     * CONDITION_TYPE_TAKE_PROFIT - CONDITION_TYPE_TAKE_PROFIT represents a take profit order. A take profit
     * order will trigger when the oracle price moves at or below the trigger
     * price for buys and at or above the trigger price for sells.
     */
    IndexerOrder_ConditionType[IndexerOrder_ConditionType["CONDITION_TYPE_TAKE_PROFIT"] = 2] = "CONDITION_TYPE_TAKE_PROFIT";
    IndexerOrder_ConditionType[IndexerOrder_ConditionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IndexerOrder_ConditionType = exports.IndexerOrder_ConditionType || (exports.IndexerOrder_ConditionType = {}));
exports.IndexerOrder_ConditionTypeSDKType = IndexerOrder_ConditionType;
exports.IndexerOrder_ConditionTypeAmino = IndexerOrder_ConditionType;
function indexerOrder_ConditionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONDITION_TYPE_UNSPECIFIED":
            return IndexerOrder_ConditionType.CONDITION_TYPE_UNSPECIFIED;
        case 1:
        case "CONDITION_TYPE_STOP_LOSS":
            return IndexerOrder_ConditionType.CONDITION_TYPE_STOP_LOSS;
        case 2:
        case "CONDITION_TYPE_TAKE_PROFIT":
            return IndexerOrder_ConditionType.CONDITION_TYPE_TAKE_PROFIT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IndexerOrder_ConditionType.UNRECOGNIZED;
    }
}
exports.indexerOrder_ConditionTypeFromJSON = indexerOrder_ConditionTypeFromJSON;
function indexerOrder_ConditionTypeToJSON(object) {
    switch (object) {
        case IndexerOrder_ConditionType.CONDITION_TYPE_UNSPECIFIED:
            return "CONDITION_TYPE_UNSPECIFIED";
        case IndexerOrder_ConditionType.CONDITION_TYPE_STOP_LOSS:
            return "CONDITION_TYPE_STOP_LOSS";
        case IndexerOrder_ConditionType.CONDITION_TYPE_TAKE_PROFIT:
            return "CONDITION_TYPE_TAKE_PROFIT";
        case IndexerOrder_ConditionType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.indexerOrder_ConditionTypeToJSON = indexerOrder_ConditionTypeToJSON;
/**
 * Status of the CLOB.
 * Defined in clob.clob_pair
 */
var ClobPairStatus;
(function (ClobPairStatus) {
    /** CLOB_PAIR_STATUS_UNSPECIFIED - Default value. This value is invalid and unused. */
    ClobPairStatus[ClobPairStatus["CLOB_PAIR_STATUS_UNSPECIFIED"] = 0] = "CLOB_PAIR_STATUS_UNSPECIFIED";
    /**
     * CLOB_PAIR_STATUS_ACTIVE - CLOB_PAIR_STATUS_ACTIVE behavior is unfinalized.
     * TODO(DEC-600): update this documentation.
     */
    ClobPairStatus[ClobPairStatus["CLOB_PAIR_STATUS_ACTIVE"] = 1] = "CLOB_PAIR_STATUS_ACTIVE";
    /**
     * CLOB_PAIR_STATUS_PAUSED - CLOB_PAIR_STATUS_PAUSED behavior is unfinalized.
     * TODO(DEC-600): update this documentation.
     */
    ClobPairStatus[ClobPairStatus["CLOB_PAIR_STATUS_PAUSED"] = 2] = "CLOB_PAIR_STATUS_PAUSED";
    /**
     * CLOB_PAIR_STATUS_CANCEL_ONLY - CLOB_PAIR_STATUS_CANCEL_ONLY behavior is unfinalized.
     * TODO(DEC-600): update this documentation.
     */
    ClobPairStatus[ClobPairStatus["CLOB_PAIR_STATUS_CANCEL_ONLY"] = 3] = "CLOB_PAIR_STATUS_CANCEL_ONLY";
    /**
     * CLOB_PAIR_STATUS_POST_ONLY - CLOB_PAIR_STATUS_POST_ONLY behavior is unfinalized.
     * TODO(DEC-600): update this documentation.
     */
    ClobPairStatus[ClobPairStatus["CLOB_PAIR_STATUS_POST_ONLY"] = 4] = "CLOB_PAIR_STATUS_POST_ONLY";
    /**
     * CLOB_PAIR_STATUS_INITIALIZING - CLOB_PAIR_STATUS_INITIALIZING represents a newly-added clob pair.
     * Clob pairs in this state only accept orders which are
     * both short-term and post-only.
     */
    ClobPairStatus[ClobPairStatus["CLOB_PAIR_STATUS_INITIALIZING"] = 5] = "CLOB_PAIR_STATUS_INITIALIZING";
    /**
     * CLOB_PAIR_STATUS_FINAL_SETTLEMENT - CLOB_PAIR_STATUS_FINAL_SETTLEMENT represents a clob pair that has been
     * deactivated. Clob pairs in this state do not accept new orders and trading
     * is blocked. All open positions are closed and open stateful orders canceled
     * by the protocol when the clob pair transitions to this status. All
     * short-term orders are left to expire.
     */
    ClobPairStatus[ClobPairStatus["CLOB_PAIR_STATUS_FINAL_SETTLEMENT"] = 6] = "CLOB_PAIR_STATUS_FINAL_SETTLEMENT";
    ClobPairStatus[ClobPairStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClobPairStatus = exports.ClobPairStatus || (exports.ClobPairStatus = {}));
exports.ClobPairStatusSDKType = ClobPairStatus;
exports.ClobPairStatusAmino = ClobPairStatus;
function clobPairStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "CLOB_PAIR_STATUS_UNSPECIFIED":
            return ClobPairStatus.CLOB_PAIR_STATUS_UNSPECIFIED;
        case 1:
        case "CLOB_PAIR_STATUS_ACTIVE":
            return ClobPairStatus.CLOB_PAIR_STATUS_ACTIVE;
        case 2:
        case "CLOB_PAIR_STATUS_PAUSED":
            return ClobPairStatus.CLOB_PAIR_STATUS_PAUSED;
        case 3:
        case "CLOB_PAIR_STATUS_CANCEL_ONLY":
            return ClobPairStatus.CLOB_PAIR_STATUS_CANCEL_ONLY;
        case 4:
        case "CLOB_PAIR_STATUS_POST_ONLY":
            return ClobPairStatus.CLOB_PAIR_STATUS_POST_ONLY;
        case 5:
        case "CLOB_PAIR_STATUS_INITIALIZING":
            return ClobPairStatus.CLOB_PAIR_STATUS_INITIALIZING;
        case 6:
        case "CLOB_PAIR_STATUS_FINAL_SETTLEMENT":
            return ClobPairStatus.CLOB_PAIR_STATUS_FINAL_SETTLEMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClobPairStatus.UNRECOGNIZED;
    }
}
exports.clobPairStatusFromJSON = clobPairStatusFromJSON;
function clobPairStatusToJSON(object) {
    switch (object) {
        case ClobPairStatus.CLOB_PAIR_STATUS_UNSPECIFIED:
            return "CLOB_PAIR_STATUS_UNSPECIFIED";
        case ClobPairStatus.CLOB_PAIR_STATUS_ACTIVE:
            return "CLOB_PAIR_STATUS_ACTIVE";
        case ClobPairStatus.CLOB_PAIR_STATUS_PAUSED:
            return "CLOB_PAIR_STATUS_PAUSED";
        case ClobPairStatus.CLOB_PAIR_STATUS_CANCEL_ONLY:
            return "CLOB_PAIR_STATUS_CANCEL_ONLY";
        case ClobPairStatus.CLOB_PAIR_STATUS_POST_ONLY:
            return "CLOB_PAIR_STATUS_POST_ONLY";
        case ClobPairStatus.CLOB_PAIR_STATUS_INITIALIZING:
            return "CLOB_PAIR_STATUS_INITIALIZING";
        case ClobPairStatus.CLOB_PAIR_STATUS_FINAL_SETTLEMENT:
            return "CLOB_PAIR_STATUS_FINAL_SETTLEMENT";
        case ClobPairStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.clobPairStatusToJSON = clobPairStatusToJSON;
function createBaseIndexerOrderId() {
    return {
        subaccountId: subaccount_1.IndexerSubaccountId.fromPartial({}),
        clientId: 0,
        orderFlags: 0,
        clobPairId: 0
    };
}
exports.IndexerOrderId = {
    typeUrl: "/nemo_network.indexer.protocol.v1.IndexerOrderId",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subaccountId !== undefined) {
            subaccount_1.IndexerSubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseIndexerOrderId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = subaccount_1.IndexerSubaccountId.decode(reader, reader.uint32());
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
        var message = createBaseIndexerOrderId();
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.IndexerSubaccountId.fromPartial(object.subaccountId) : undefined;
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : 0;
        message.orderFlags = (_b = object.orderFlags) !== null && _b !== void 0 ? _b : 0;
        message.clobPairId = (_c = object.clobPairId) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseIndexerOrderId();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.IndexerSubaccountId.fromAmino(object.subaccount_id);
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
        obj.subaccount_id = message.subaccountId ? subaccount_1.IndexerSubaccountId.toAmino(message.subaccountId) : undefined;
        obj.client_id = message.clientId === 0 ? undefined : message.clientId;
        obj.order_flags = message.orderFlags === 0 ? undefined : message.orderFlags;
        obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.IndexerOrderId.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.IndexerOrderId.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexerOrderId.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.protocol.v1.IndexerOrderId",
            value: exports.IndexerOrderId.encode(message).finish()
        };
    }
};
function createBaseIndexerOrder() {
    return {
        orderId: exports.IndexerOrderId.fromPartial({}),
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
exports.IndexerOrder = {
    typeUrl: "/nemo_network.indexer.protocol.v1.IndexerOrder",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderId !== undefined) {
            exports.IndexerOrderId.encode(message.orderId, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseIndexerOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = exports.IndexerOrderId.decode(reader, reader.uint32());
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
        var message = createBaseIndexerOrder();
        message.orderId = object.orderId !== undefined && object.orderId !== null ? exports.IndexerOrderId.fromPartial(object.orderId) : undefined;
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
        var message = createBaseIndexerOrder();
        if (object.order_id !== undefined && object.order_id !== null) {
            message.orderId = exports.IndexerOrderId.fromAmino(object.order_id);
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
        obj.order_id = message.orderId ? exports.IndexerOrderId.toAmino(message.orderId) : undefined;
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
        return exports.IndexerOrder.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.IndexerOrder.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexerOrder.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.protocol.v1.IndexerOrder",
            value: exports.IndexerOrder.encode(message).finish()
        };
    }
};
