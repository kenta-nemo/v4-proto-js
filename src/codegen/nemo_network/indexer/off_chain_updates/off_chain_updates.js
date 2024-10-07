"use strict";
exports.__esModule = true;
exports.OffChainUpdateV1 = exports.OrderReplaceV1 = exports.OrderUpdateV1 = exports.OrderRemoveV1 = exports.OrderPlaceV1 = exports.orderRemoveV1_OrderRemovalStatusToJSON = exports.orderRemoveV1_OrderRemovalStatusFromJSON = exports.OrderRemoveV1_OrderRemovalStatusAmino = exports.OrderRemoveV1_OrderRemovalStatusSDKType = exports.OrderRemoveV1_OrderRemovalStatus = exports.orderPlaceV1_OrderPlacementStatusToJSON = exports.orderPlaceV1_OrderPlacementStatusFromJSON = exports.OrderPlaceV1_OrderPlacementStatusAmino = exports.OrderPlaceV1_OrderPlacementStatusSDKType = exports.OrderPlaceV1_OrderPlacementStatus = void 0;
var clob_1 = require("../protocol/v1/clob");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
/**
 * OrderPlacementStatus is an enum for the resulting status after an order is
 * placed.
 */
var OrderPlaceV1_OrderPlacementStatus;
(function (OrderPlaceV1_OrderPlacementStatus) {
    /** ORDER_PLACEMENT_STATUS_UNSPECIFIED - Default value, this is invalid and unused. */
    OrderPlaceV1_OrderPlacementStatus[OrderPlaceV1_OrderPlacementStatus["ORDER_PLACEMENT_STATUS_UNSPECIFIED"] = 0] = "ORDER_PLACEMENT_STATUS_UNSPECIFIED";
    /**
     * ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED - A best effort opened order is one that has only been confirmed to be
     * placed on the dYdX node sending the off-chain update message.
     * The cases where this happens includes:
     * - The dYdX node places an order in it's in-memory orderbook during the
     *   CheckTx flow.
     * A best effort placed order may not have been placed on other dYdX
     * nodes including other dYdX validator nodes and may still be excluded in
     * future order matches.
     */
    OrderPlaceV1_OrderPlacementStatus[OrderPlaceV1_OrderPlacementStatus["ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED"] = 1] = "ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED";
    /**
     * ORDER_PLACEMENT_STATUS_OPENED - An opened order is one that is confirmed to be placed on all dYdX nodes
     * (discounting dishonest dYdX nodes) and will be included in any future
     * order matches.
     * This status is used internally by the indexer and will not be sent
     * out by protocol.
     */
    OrderPlaceV1_OrderPlacementStatus[OrderPlaceV1_OrderPlacementStatus["ORDER_PLACEMENT_STATUS_OPENED"] = 2] = "ORDER_PLACEMENT_STATUS_OPENED";
    OrderPlaceV1_OrderPlacementStatus[OrderPlaceV1_OrderPlacementStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderPlaceV1_OrderPlacementStatus = exports.OrderPlaceV1_OrderPlacementStatus || (exports.OrderPlaceV1_OrderPlacementStatus = {}));
exports.OrderPlaceV1_OrderPlacementStatusSDKType = OrderPlaceV1_OrderPlacementStatus;
exports.OrderPlaceV1_OrderPlacementStatusAmino = OrderPlaceV1_OrderPlacementStatus;
function orderPlaceV1_OrderPlacementStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_PLACEMENT_STATUS_UNSPECIFIED":
            return OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_UNSPECIFIED;
        case 1:
        case "ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED":
            return OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED;
        case 2:
        case "ORDER_PLACEMENT_STATUS_OPENED":
            return OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_OPENED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderPlaceV1_OrderPlacementStatus.UNRECOGNIZED;
    }
}
exports.orderPlaceV1_OrderPlacementStatusFromJSON = orderPlaceV1_OrderPlacementStatusFromJSON;
function orderPlaceV1_OrderPlacementStatusToJSON(object) {
    switch (object) {
        case OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_UNSPECIFIED:
            return "ORDER_PLACEMENT_STATUS_UNSPECIFIED";
        case OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED:
            return "ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED";
        case OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_OPENED:
            return "ORDER_PLACEMENT_STATUS_OPENED";
        case OrderPlaceV1_OrderPlacementStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderPlaceV1_OrderPlacementStatusToJSON = orderPlaceV1_OrderPlacementStatusToJSON;
/**
 * OrderRemovalStatus is an enum for the resulting status after an order is
 * removed.
 */
var OrderRemoveV1_OrderRemovalStatus;
(function (OrderRemoveV1_OrderRemovalStatus) {
    /** ORDER_REMOVAL_STATUS_UNSPECIFIED - Default value, this is invalid and unused. */
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["ORDER_REMOVAL_STATUS_UNSPECIFIED"] = 0] = "ORDER_REMOVAL_STATUS_UNSPECIFIED";
    /**
     * ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED - A best effort canceled order is one that has only been confirmed to be
     * removed on the dYdX node sending the off-chain update message.
     * The cases where this happens includes:
     * - the order was removed due to the dYdX node receiving a CancelOrder
     *   transaction for the order.
     * - the order was removed due to being undercollateralized during
     *   optimistic matching.
     * A best effort canceled order may not have been removed on other dYdX
     * nodes including other dYdX validator nodes and may still be included in
     * future order matches.
     */
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED"] = 1] = "ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED";
    /**
     * ORDER_REMOVAL_STATUS_CANCELED - A canceled order is one that is confirmed to be removed on all dYdX nodes
     * (discounting dishonest dYdX nodes) and will not be included in any future
     * order matches.
     * The cases where this happens includes:
     * - the order is expired.
     */
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["ORDER_REMOVAL_STATUS_CANCELED"] = 2] = "ORDER_REMOVAL_STATUS_CANCELED";
    /** ORDER_REMOVAL_STATUS_FILLED - An order was fully-filled. Only sent by the Indexer for stateful orders. */
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["ORDER_REMOVAL_STATUS_FILLED"] = 3] = "ORDER_REMOVAL_STATUS_FILLED";
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderRemoveV1_OrderRemovalStatus = exports.OrderRemoveV1_OrderRemovalStatus || (exports.OrderRemoveV1_OrderRemovalStatus = {}));
exports.OrderRemoveV1_OrderRemovalStatusSDKType = OrderRemoveV1_OrderRemovalStatus;
exports.OrderRemoveV1_OrderRemovalStatusAmino = OrderRemoveV1_OrderRemovalStatus;
function orderRemoveV1_OrderRemovalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_REMOVAL_STATUS_UNSPECIFIED":
            return OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_UNSPECIFIED;
        case 1:
        case "ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED":
            return OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED;
        case 2:
        case "ORDER_REMOVAL_STATUS_CANCELED":
            return OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_CANCELED;
        case 3:
        case "ORDER_REMOVAL_STATUS_FILLED":
            return OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_FILLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderRemoveV1_OrderRemovalStatus.UNRECOGNIZED;
    }
}
exports.orderRemoveV1_OrderRemovalStatusFromJSON = orderRemoveV1_OrderRemovalStatusFromJSON;
function orderRemoveV1_OrderRemovalStatusToJSON(object) {
    switch (object) {
        case OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_UNSPECIFIED:
            return "ORDER_REMOVAL_STATUS_UNSPECIFIED";
        case OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED:
            return "ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED";
        case OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_CANCELED:
            return "ORDER_REMOVAL_STATUS_CANCELED";
        case OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_FILLED:
            return "ORDER_REMOVAL_STATUS_FILLED";
        case OrderRemoveV1_OrderRemovalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderRemoveV1_OrderRemovalStatusToJSON = orderRemoveV1_OrderRemovalStatusToJSON;
function createBaseOrderPlaceV1() {
    return {
        order: undefined,
        placementStatus: 0,
        timeStamp: undefined
    };
}
exports.OrderPlaceV1 = {
    typeUrl: "/nemo_network.indexer.off_chain_updates.OrderPlaceV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.order !== undefined) {
            clob_1.IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.placementStatus !== 0) {
            writer.uint32(16).int32(message.placementStatus);
        }
        if (message.timeStamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timeStamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderPlaceV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = clob_1.IndexerOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.placementStatus = reader.int32();
                    break;
                case 3:
                    message.timeStamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBaseOrderPlaceV1();
        message.order = object.order !== undefined && object.order !== null ? clob_1.IndexerOrder.fromPartial(object.order) : undefined;
        message.placementStatus = (_a = object.placementStatus) !== null && _a !== void 0 ? _a : 0;
        message.timeStamp = (_b = object.timeStamp) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOrderPlaceV1();
        if (object.order !== undefined && object.order !== null) {
            message.order = clob_1.IndexerOrder.fromAmino(object.order);
        }
        if (object.placement_status !== undefined && object.placement_status !== null) {
            message.placementStatus = object.placement_status;
        }
        if (object.time_stamp !== undefined && object.time_stamp !== null) {
            message.timeStamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time_stamp));
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order = message.order ? clob_1.IndexerOrder.toAmino(message.order) : undefined;
        obj.placement_status = message.placementStatus === 0 ? undefined : message.placementStatus;
        obj.time_stamp = message.timeStamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timeStamp)) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrderPlaceV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrderPlaceV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrderPlaceV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.off_chain_updates.OrderPlaceV1",
            value: exports.OrderPlaceV1.encode(message).finish()
        };
    }
};
function createBaseOrderRemoveV1() {
    return {
        removedOrderId: undefined,
        reason: 0,
        removalStatus: 0,
        timeStamp: undefined
    };
}
exports.OrderRemoveV1 = {
    typeUrl: "/nemo_network.indexer.off_chain_updates.OrderRemoveV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.removedOrderId !== undefined) {
            clob_1.IndexerOrderId.encode(message.removedOrderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.reason !== 0) {
            writer.uint32(16).int32(message.reason);
        }
        if (message.removalStatus !== 0) {
            writer.uint32(24).int32(message.removalStatus);
        }
        if (message.timeStamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timeStamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderRemoveV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.removedOrderId = clob_1.IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reason = reader.int32();
                    break;
                case 3:
                    message.removalStatus = reader.int32();
                    break;
                case 4:
                    message.timeStamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBaseOrderRemoveV1();
        message.removedOrderId = object.removedOrderId !== undefined && object.removedOrderId !== null ? clob_1.IndexerOrderId.fromPartial(object.removedOrderId) : undefined;
        message.reason = (_a = object.reason) !== null && _a !== void 0 ? _a : 0;
        message.removalStatus = (_b = object.removalStatus) !== null && _b !== void 0 ? _b : 0;
        message.timeStamp = (_c = object.timeStamp) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOrderRemoveV1();
        if (object.removed_order_id !== undefined && object.removed_order_id !== null) {
            message.removedOrderId = clob_1.IndexerOrderId.fromAmino(object.removed_order_id);
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        if (object.removal_status !== undefined && object.removal_status !== null) {
            message.removalStatus = object.removal_status;
        }
        if (object.time_stamp !== undefined && object.time_stamp !== null) {
            message.timeStamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time_stamp));
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.removed_order_id = message.removedOrderId ? clob_1.IndexerOrderId.toAmino(message.removedOrderId) : undefined;
        obj.reason = message.reason === 0 ? undefined : message.reason;
        obj.removal_status = message.removalStatus === 0 ? undefined : message.removalStatus;
        obj.time_stamp = message.timeStamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timeStamp)) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrderRemoveV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrderRemoveV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrderRemoveV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.off_chain_updates.OrderRemoveV1",
            value: exports.OrderRemoveV1.encode(message).finish()
        };
    }
};
function createBaseOrderUpdateV1() {
    return {
        orderId: undefined,
        totalFilledQuantums: BigInt(0)
    };
}
exports.OrderUpdateV1 = {
    typeUrl: "/nemo_network.indexer.off_chain_updates.OrderUpdateV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderId !== undefined) {
            clob_1.IndexerOrderId.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalFilledQuantums !== BigInt(0)) {
            writer.uint32(16).uint64(message.totalFilledQuantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderUpdateV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = clob_1.IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.totalFilledQuantums = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseOrderUpdateV1();
        message.orderId = object.orderId !== undefined && object.orderId !== null ? clob_1.IndexerOrderId.fromPartial(object.orderId) : undefined;
        message.totalFilledQuantums = object.totalFilledQuantums !== undefined && object.totalFilledQuantums !== null ? BigInt(object.totalFilledQuantums.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOrderUpdateV1();
        if (object.order_id !== undefined && object.order_id !== null) {
            message.orderId = clob_1.IndexerOrderId.fromAmino(object.order_id);
        }
        if (object.total_filled_quantums !== undefined && object.total_filled_quantums !== null) {
            message.totalFilledQuantums = BigInt(object.total_filled_quantums);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.order_id = message.orderId ? clob_1.IndexerOrderId.toAmino(message.orderId) : undefined;
        obj.total_filled_quantums = message.totalFilledQuantums !== BigInt(0) ? ((_a = message.totalFilledQuantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrderUpdateV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrderUpdateV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrderUpdateV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.off_chain_updates.OrderUpdateV1",
            value: exports.OrderUpdateV1.encode(message).finish()
        };
    }
};
function createBaseOrderReplaceV1() {
    return {
        oldOrderId: undefined,
        order: undefined,
        placementStatus: 0,
        timeStamp: undefined
    };
}
exports.OrderReplaceV1 = {
    typeUrl: "/nemo_network.indexer.off_chain_updates.OrderReplaceV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.oldOrderId !== undefined) {
            clob_1.IndexerOrderId.encode(message.oldOrderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.order !== undefined) {
            clob_1.IndexerOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        if (message.placementStatus !== 0) {
            writer.uint32(24).int32(message.placementStatus);
        }
        if (message.timeStamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timeStamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderReplaceV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oldOrderId = clob_1.IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.order = clob_1.IndexerOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.placementStatus = reader.int32();
                    break;
                case 4:
                    message.timeStamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBaseOrderReplaceV1();
        message.oldOrderId = object.oldOrderId !== undefined && object.oldOrderId !== null ? clob_1.IndexerOrderId.fromPartial(object.oldOrderId) : undefined;
        message.order = object.order !== undefined && object.order !== null ? clob_1.IndexerOrder.fromPartial(object.order) : undefined;
        message.placementStatus = (_a = object.placementStatus) !== null && _a !== void 0 ? _a : 0;
        message.timeStamp = (_b = object.timeStamp) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOrderReplaceV1();
        if (object.old_order_id !== undefined && object.old_order_id !== null) {
            message.oldOrderId = clob_1.IndexerOrderId.fromAmino(object.old_order_id);
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = clob_1.IndexerOrder.fromAmino(object.order);
        }
        if (object.placement_status !== undefined && object.placement_status !== null) {
            message.placementStatus = object.placement_status;
        }
        if (object.time_stamp !== undefined && object.time_stamp !== null) {
            message.timeStamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time_stamp));
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.old_order_id = message.oldOrderId ? clob_1.IndexerOrderId.toAmino(message.oldOrderId) : undefined;
        obj.order = message.order ? clob_1.IndexerOrder.toAmino(message.order) : undefined;
        obj.placement_status = message.placementStatus === 0 ? undefined : message.placementStatus;
        obj.time_stamp = message.timeStamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timeStamp)) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OrderReplaceV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OrderReplaceV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.OrderReplaceV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.off_chain_updates.OrderReplaceV1",
            value: exports.OrderReplaceV1.encode(message).finish()
        };
    }
};
function createBaseOffChainUpdateV1() {
    return {
        orderPlace: undefined,
        orderRemove: undefined,
        orderUpdate: undefined,
        orderReplace: undefined
    };
}
exports.OffChainUpdateV1 = {
    typeUrl: "/nemo_network.indexer.off_chain_updates.OffChainUpdateV1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.orderPlace !== undefined) {
            exports.OrderPlaceV1.encode(message.orderPlace, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderRemove !== undefined) {
            exports.OrderRemoveV1.encode(message.orderRemove, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderUpdate !== undefined) {
            exports.OrderUpdateV1.encode(message.orderUpdate, writer.uint32(26).fork()).ldelim();
        }
        if (message.orderReplace !== undefined) {
            exports.OrderReplaceV1.encode(message.orderReplace, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOffChainUpdateV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderPlace = exports.OrderPlaceV1.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderRemove = exports.OrderRemoveV1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderUpdate = exports.OrderUpdateV1.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.orderReplace = exports.OrderReplaceV1.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseOffChainUpdateV1();
        message.orderPlace = object.orderPlace !== undefined && object.orderPlace !== null ? exports.OrderPlaceV1.fromPartial(object.orderPlace) : undefined;
        message.orderRemove = object.orderRemove !== undefined && object.orderRemove !== null ? exports.OrderRemoveV1.fromPartial(object.orderRemove) : undefined;
        message.orderUpdate = object.orderUpdate !== undefined && object.orderUpdate !== null ? exports.OrderUpdateV1.fromPartial(object.orderUpdate) : undefined;
        message.orderReplace = object.orderReplace !== undefined && object.orderReplace !== null ? exports.OrderReplaceV1.fromPartial(object.orderReplace) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOffChainUpdateV1();
        if (object.order_place !== undefined && object.order_place !== null) {
            message.orderPlace = exports.OrderPlaceV1.fromAmino(object.order_place);
        }
        if (object.order_remove !== undefined && object.order_remove !== null) {
            message.orderRemove = exports.OrderRemoveV1.fromAmino(object.order_remove);
        }
        if (object.order_update !== undefined && object.order_update !== null) {
            message.orderUpdate = exports.OrderUpdateV1.fromAmino(object.order_update);
        }
        if (object.order_replace !== undefined && object.order_replace !== null) {
            message.orderReplace = exports.OrderReplaceV1.fromAmino(object.order_replace);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.order_place = message.orderPlace ? exports.OrderPlaceV1.toAmino(message.orderPlace) : undefined;
        obj.order_remove = message.orderRemove ? exports.OrderRemoveV1.toAmino(message.orderRemove) : undefined;
        obj.order_update = message.orderUpdate ? exports.OrderUpdateV1.toAmino(message.orderUpdate) : undefined;
        obj.order_replace = message.orderReplace ? exports.OrderReplaceV1.toAmino(message.orderReplace) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OffChainUpdateV1.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OffChainUpdateV1.decode(message.value);
    },
    toProto: function (message) {
        return exports.OffChainUpdateV1.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.off_chain_updates.OffChainUpdateV1",
            value: exports.OffChainUpdateV1.encode(message).finish()
        };
    }
};
