"use strict";
exports.__esModule = true;
exports.InternalOperation = exports.Operation = void 0;
var matches_1 = require("./matches");
var tx_1 = require("./tx");
var order_1 = require("./order");
var order_removals_1 = require("./order_removals");
var binary_1 = require("../../binary");
function createBaseOperation() {
    return {
        match: undefined,
        shortTermOrderPlacement: undefined,
        shortTermOrderCancellation: undefined,
        preexistingStatefulOrder: undefined
    };
}
exports.Operation = {
    typeUrl: "/nemo_network.clob.Operation",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.match !== undefined) {
            matches_1.ClobMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
        }
        if (message.shortTermOrderPlacement !== undefined) {
            tx_1.MsgPlaceOrder.encode(message.shortTermOrderPlacement, writer.uint32(18).fork()).ldelim();
        }
        if (message.shortTermOrderCancellation !== undefined) {
            tx_1.MsgCancelOrder.encode(message.shortTermOrderCancellation, writer.uint32(26).fork()).ldelim();
        }
        if (message.preexistingStatefulOrder !== undefined) {
            order_1.OrderId.encode(message.preexistingStatefulOrder, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOperation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = matches_1.ClobMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.shortTermOrderPlacement = tx_1.MsgPlaceOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.shortTermOrderCancellation = tx_1.MsgCancelOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.preexistingStatefulOrder = order_1.OrderId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseOperation();
        message.match = object.match !== undefined && object.match !== null ? matches_1.ClobMatch.fromPartial(object.match) : undefined;
        message.shortTermOrderPlacement = object.shortTermOrderPlacement !== undefined && object.shortTermOrderPlacement !== null ? tx_1.MsgPlaceOrder.fromPartial(object.shortTermOrderPlacement) : undefined;
        message.shortTermOrderCancellation = object.shortTermOrderCancellation !== undefined && object.shortTermOrderCancellation !== null ? tx_1.MsgCancelOrder.fromPartial(object.shortTermOrderCancellation) : undefined;
        message.preexistingStatefulOrder = object.preexistingStatefulOrder !== undefined && object.preexistingStatefulOrder !== null ? order_1.OrderId.fromPartial(object.preexistingStatefulOrder) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOperation();
        if (object.match !== undefined && object.match !== null) {
            message.match = matches_1.ClobMatch.fromAmino(object.match);
        }
        if (object.short_term_order_placement !== undefined && object.short_term_order_placement !== null) {
            message.shortTermOrderPlacement = tx_1.MsgPlaceOrder.fromAmino(object.short_term_order_placement);
        }
        if (object.short_term_order_cancellation !== undefined && object.short_term_order_cancellation !== null) {
            message.shortTermOrderCancellation = tx_1.MsgCancelOrder.fromAmino(object.short_term_order_cancellation);
        }
        if (object.preexisting_stateful_order !== undefined && object.preexisting_stateful_order !== null) {
            message.preexistingStatefulOrder = order_1.OrderId.fromAmino(object.preexisting_stateful_order);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.match = message.match ? matches_1.ClobMatch.toAmino(message.match) : undefined;
        obj.short_term_order_placement = message.shortTermOrderPlacement ? tx_1.MsgPlaceOrder.toAmino(message.shortTermOrderPlacement) : undefined;
        obj.short_term_order_cancellation = message.shortTermOrderCancellation ? tx_1.MsgCancelOrder.toAmino(message.shortTermOrderCancellation) : undefined;
        obj.preexisting_stateful_order = message.preexistingStatefulOrder ? order_1.OrderId.toAmino(message.preexistingStatefulOrder) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Operation.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Operation.decode(message.value);
    },
    toProto: function (message) {
        return exports.Operation.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.Operation",
            value: exports.Operation.encode(message).finish()
        };
    }
};
function createBaseInternalOperation() {
    return {
        match: undefined,
        shortTermOrderPlacement: undefined,
        preexistingStatefulOrder: undefined,
        orderRemoval: undefined
    };
}
exports.InternalOperation = {
    typeUrl: "/nemo_network.clob.InternalOperation",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.match !== undefined) {
            matches_1.ClobMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
        }
        if (message.shortTermOrderPlacement !== undefined) {
            tx_1.MsgPlaceOrder.encode(message.shortTermOrderPlacement, writer.uint32(18).fork()).ldelim();
        }
        if (message.preexistingStatefulOrder !== undefined) {
            order_1.OrderId.encode(message.preexistingStatefulOrder, writer.uint32(26).fork()).ldelim();
        }
        if (message.orderRemoval !== undefined) {
            order_removals_1.OrderRemoval.encode(message.orderRemoval, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInternalOperation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = matches_1.ClobMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.shortTermOrderPlacement = tx_1.MsgPlaceOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.preexistingStatefulOrder = order_1.OrderId.decode(reader, reader.uint32());
                    break;
                case 4:
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
        var message = createBaseInternalOperation();
        message.match = object.match !== undefined && object.match !== null ? matches_1.ClobMatch.fromPartial(object.match) : undefined;
        message.shortTermOrderPlacement = object.shortTermOrderPlacement !== undefined && object.shortTermOrderPlacement !== null ? tx_1.MsgPlaceOrder.fromPartial(object.shortTermOrderPlacement) : undefined;
        message.preexistingStatefulOrder = object.preexistingStatefulOrder !== undefined && object.preexistingStatefulOrder !== null ? order_1.OrderId.fromPartial(object.preexistingStatefulOrder) : undefined;
        message.orderRemoval = object.orderRemoval !== undefined && object.orderRemoval !== null ? order_removals_1.OrderRemoval.fromPartial(object.orderRemoval) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseInternalOperation();
        if (object.match !== undefined && object.match !== null) {
            message.match = matches_1.ClobMatch.fromAmino(object.match);
        }
        if (object.short_term_order_placement !== undefined && object.short_term_order_placement !== null) {
            message.shortTermOrderPlacement = tx_1.MsgPlaceOrder.fromAmino(object.short_term_order_placement);
        }
        if (object.preexisting_stateful_order !== undefined && object.preexisting_stateful_order !== null) {
            message.preexistingStatefulOrder = order_1.OrderId.fromAmino(object.preexisting_stateful_order);
        }
        if (object.order_removal !== undefined && object.order_removal !== null) {
            message.orderRemoval = order_removals_1.OrderRemoval.fromAmino(object.order_removal);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.match = message.match ? matches_1.ClobMatch.toAmino(message.match) : undefined;
        obj.short_term_order_placement = message.shortTermOrderPlacement ? tx_1.MsgPlaceOrder.toAmino(message.shortTermOrderPlacement) : undefined;
        obj.preexisting_stateful_order = message.preexistingStatefulOrder ? order_1.OrderId.toAmino(message.preexistingStatefulOrder) : undefined;
        obj.order_removal = message.orderRemoval ? order_removals_1.OrderRemoval.toAmino(message.orderRemoval) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.InternalOperation.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.InternalOperation.decode(message.value);
    },
    toProto: function (message) {
        return exports.InternalOperation.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.InternalOperation",
            value: exports.InternalOperation.encode(message).finish()
        };
    }
};
