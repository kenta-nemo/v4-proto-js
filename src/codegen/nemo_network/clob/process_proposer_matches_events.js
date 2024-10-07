"use strict";
exports.__esModule = true;
exports.ProcessProposerMatchesEvents = void 0;
var order_1 = require("./order");
var binary_1 = require("../../binary");
function createBaseProcessProposerMatchesEvents() {
    return {
        placedLongTermOrderIds: [],
        expiredStatefulOrderIds: [],
        orderIdsFilledInLastBlock: [],
        placedStatefulCancellationOrderIds: [],
        removedStatefulOrderIds: [],
        conditionalOrderIdsTriggeredInLastBlock: [],
        placedConditionalOrderIds: [],
        blockHeight: 0
    };
}
exports.ProcessProposerMatchesEvents = {
    typeUrl: "/nemo_network.clob.ProcessProposerMatchesEvents",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.placedLongTermOrderIds; _i < _a.length; _i++) {
            var v = _a[_i];
            order_1.OrderId.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.expiredStatefulOrderIds; _b < _c.length; _b++) {
            var v = _c[_b];
            order_1.OrderId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _d = 0, _e = message.orderIdsFilledInLastBlock; _d < _e.length; _d++) {
            var v = _e[_d];
            order_1.OrderId.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _f = 0, _g = message.placedStatefulCancellationOrderIds; _f < _g.length; _f++) {
            var v = _g[_f];
            order_1.OrderId.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _h = 0, _j = message.removedStatefulOrderIds; _h < _j.length; _h++) {
            var v = _j[_h];
            order_1.OrderId.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _k = 0, _l = message.conditionalOrderIdsTriggeredInLastBlock; _k < _l.length; _k++) {
            var v = _l[_k];
            order_1.OrderId.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _m = 0, _o = message.placedConditionalOrderIds; _m < _o.length; _m++) {
            var v = _o[_m];
            order_1.OrderId.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.blockHeight !== 0) {
            writer.uint32(64).uint32(message.blockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProcessProposerMatchesEvents();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placedLongTermOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiredStatefulOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.orderIdsFilledInLastBlock.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.placedStatefulCancellationOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.removedStatefulOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.conditionalOrderIdsTriggeredInLastBlock.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.placedConditionalOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.blockHeight = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseProcessProposerMatchesEvents();
        message.placedLongTermOrderIds = ((_a = object.placedLongTermOrderIds) === null || _a === void 0 ? void 0 : _a.map(function (e) { return order_1.OrderId.fromPartial(e); })) || [];
        message.expiredStatefulOrderIds = ((_b = object.expiredStatefulOrderIds) === null || _b === void 0 ? void 0 : _b.map(function (e) { return order_1.OrderId.fromPartial(e); })) || [];
        message.orderIdsFilledInLastBlock = ((_c = object.orderIdsFilledInLastBlock) === null || _c === void 0 ? void 0 : _c.map(function (e) { return order_1.OrderId.fromPartial(e); })) || [];
        message.placedStatefulCancellationOrderIds = ((_d = object.placedStatefulCancellationOrderIds) === null || _d === void 0 ? void 0 : _d.map(function (e) { return order_1.OrderId.fromPartial(e); })) || [];
        message.removedStatefulOrderIds = ((_e = object.removedStatefulOrderIds) === null || _e === void 0 ? void 0 : _e.map(function (e) { return order_1.OrderId.fromPartial(e); })) || [];
        message.conditionalOrderIdsTriggeredInLastBlock = ((_f = object.conditionalOrderIdsTriggeredInLastBlock) === null || _f === void 0 ? void 0 : _f.map(function (e) { return order_1.OrderId.fromPartial(e); })) || [];
        message.placedConditionalOrderIds = ((_g = object.placedConditionalOrderIds) === null || _g === void 0 ? void 0 : _g.map(function (e) { return order_1.OrderId.fromPartial(e); })) || [];
        message.blockHeight = (_h = object.blockHeight) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseProcessProposerMatchesEvents();
        message.placedLongTermOrderIds = ((_a = object.placed_long_term_order_ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return order_1.OrderId.fromAmino(e); })) || [];
        message.expiredStatefulOrderIds = ((_b = object.expired_stateful_order_ids) === null || _b === void 0 ? void 0 : _b.map(function (e) { return order_1.OrderId.fromAmino(e); })) || [];
        message.orderIdsFilledInLastBlock = ((_c = object.order_ids_filled_in_last_block) === null || _c === void 0 ? void 0 : _c.map(function (e) { return order_1.OrderId.fromAmino(e); })) || [];
        message.placedStatefulCancellationOrderIds = ((_d = object.placed_stateful_cancellation_order_ids) === null || _d === void 0 ? void 0 : _d.map(function (e) { return order_1.OrderId.fromAmino(e); })) || [];
        message.removedStatefulOrderIds = ((_e = object.removed_stateful_order_ids) === null || _e === void 0 ? void 0 : _e.map(function (e) { return order_1.OrderId.fromAmino(e); })) || [];
        message.conditionalOrderIdsTriggeredInLastBlock = ((_f = object.conditional_order_ids_triggered_in_last_block) === null || _f === void 0 ? void 0 : _f.map(function (e) { return order_1.OrderId.fromAmino(e); })) || [];
        message.placedConditionalOrderIds = ((_g = object.placed_conditional_order_ids) === null || _g === void 0 ? void 0 : _g.map(function (e) { return order_1.OrderId.fromAmino(e); })) || [];
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.placedLongTermOrderIds) {
            obj.placed_long_term_order_ids = message.placedLongTermOrderIds.map(function (e) { return e ? order_1.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.placed_long_term_order_ids = message.placedLongTermOrderIds;
        }
        if (message.expiredStatefulOrderIds) {
            obj.expired_stateful_order_ids = message.expiredStatefulOrderIds.map(function (e) { return e ? order_1.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.expired_stateful_order_ids = message.expiredStatefulOrderIds;
        }
        if (message.orderIdsFilledInLastBlock) {
            obj.order_ids_filled_in_last_block = message.orderIdsFilledInLastBlock.map(function (e) { return e ? order_1.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.order_ids_filled_in_last_block = message.orderIdsFilledInLastBlock;
        }
        if (message.placedStatefulCancellationOrderIds) {
            obj.placed_stateful_cancellation_order_ids = message.placedStatefulCancellationOrderIds.map(function (e) { return e ? order_1.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.placed_stateful_cancellation_order_ids = message.placedStatefulCancellationOrderIds;
        }
        if (message.removedStatefulOrderIds) {
            obj.removed_stateful_order_ids = message.removedStatefulOrderIds.map(function (e) { return e ? order_1.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.removed_stateful_order_ids = message.removedStatefulOrderIds;
        }
        if (message.conditionalOrderIdsTriggeredInLastBlock) {
            obj.conditional_order_ids_triggered_in_last_block = message.conditionalOrderIdsTriggeredInLastBlock.map(function (e) { return e ? order_1.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.conditional_order_ids_triggered_in_last_block = message.conditionalOrderIdsTriggeredInLastBlock;
        }
        if (message.placedConditionalOrderIds) {
            obj.placed_conditional_order_ids = message.placedConditionalOrderIds.map(function (e) { return e ? order_1.OrderId.toAmino(e) : undefined; });
        }
        else {
            obj.placed_conditional_order_ids = message.placedConditionalOrderIds;
        }
        obj.block_height = message.blockHeight === 0 ? undefined : message.blockHeight;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ProcessProposerMatchesEvents.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ProcessProposerMatchesEvents.decode(message.value);
    },
    toProto: function (message) {
        return exports.ProcessProposerMatchesEvents.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.ProcessProposerMatchesEvents",
            value: exports.ProcessProposerMatchesEvents.encode(message).finish()
        };
    }
};
