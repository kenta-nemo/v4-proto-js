"use strict";
exports.__esModule = true;
exports.MaxPerNBlocksRateLimit = exports.BlockRateLimitConfiguration = void 0;
var binary_1 = require("../../binary");
function createBaseBlockRateLimitConfiguration() {
    return {
        maxShortTermOrdersPerNBlocks: [],
        maxStatefulOrdersPerNBlocks: [],
        maxShortTermOrderCancellationsPerNBlocks: [],
        maxShortTermOrdersAndCancelsPerNBlocks: []
    };
}
exports.BlockRateLimitConfiguration = {
    typeUrl: "/nemo_network.clob.BlockRateLimitConfiguration",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.maxShortTermOrdersPerNBlocks; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MaxPerNBlocksRateLimit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.maxStatefulOrdersPerNBlocks; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.MaxPerNBlocksRateLimit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _d = 0, _e = message.maxShortTermOrderCancellationsPerNBlocks; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.MaxPerNBlocksRateLimit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _f = 0, _g = message.maxShortTermOrdersAndCancelsPerNBlocks; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.MaxPerNBlocksRateLimit.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockRateLimitConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxShortTermOrdersPerNBlocks.push(exports.MaxPerNBlocksRateLimit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxStatefulOrdersPerNBlocks.push(exports.MaxPerNBlocksRateLimit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.maxShortTermOrderCancellationsPerNBlocks.push(exports.MaxPerNBlocksRateLimit.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.maxShortTermOrdersAndCancelsPerNBlocks.push(exports.MaxPerNBlocksRateLimit.decode(reader, reader.uint32()));
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
        var message = createBaseBlockRateLimitConfiguration();
        message.maxShortTermOrdersPerNBlocks = ((_a = object.maxShortTermOrdersPerNBlocks) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MaxPerNBlocksRateLimit.fromPartial(e); })) || [];
        message.maxStatefulOrdersPerNBlocks = ((_b = object.maxStatefulOrdersPerNBlocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MaxPerNBlocksRateLimit.fromPartial(e); })) || [];
        message.maxShortTermOrderCancellationsPerNBlocks = ((_c = object.maxShortTermOrderCancellationsPerNBlocks) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.MaxPerNBlocksRateLimit.fromPartial(e); })) || [];
        message.maxShortTermOrdersAndCancelsPerNBlocks = ((_d = object.maxShortTermOrdersAndCancelsPerNBlocks) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.MaxPerNBlocksRateLimit.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseBlockRateLimitConfiguration();
        message.maxShortTermOrdersPerNBlocks = ((_a = object.max_short_term_orders_per_n_blocks) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MaxPerNBlocksRateLimit.fromAmino(e); })) || [];
        message.maxStatefulOrdersPerNBlocks = ((_b = object.max_stateful_orders_per_n_blocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MaxPerNBlocksRateLimit.fromAmino(e); })) || [];
        message.maxShortTermOrderCancellationsPerNBlocks = ((_c = object.max_short_term_order_cancellations_per_n_blocks) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.MaxPerNBlocksRateLimit.fromAmino(e); })) || [];
        message.maxShortTermOrdersAndCancelsPerNBlocks = ((_d = object.max_short_term_orders_and_cancels_per_n_blocks) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.MaxPerNBlocksRateLimit.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.maxShortTermOrdersPerNBlocks) {
            obj.max_short_term_orders_per_n_blocks = message.maxShortTermOrdersPerNBlocks.map(function (e) { return e ? exports.MaxPerNBlocksRateLimit.toAmino(e) : undefined; });
        }
        else {
            obj.max_short_term_orders_per_n_blocks = message.maxShortTermOrdersPerNBlocks;
        }
        if (message.maxStatefulOrdersPerNBlocks) {
            obj.max_stateful_orders_per_n_blocks = message.maxStatefulOrdersPerNBlocks.map(function (e) { return e ? exports.MaxPerNBlocksRateLimit.toAmino(e) : undefined; });
        }
        else {
            obj.max_stateful_orders_per_n_blocks = message.maxStatefulOrdersPerNBlocks;
        }
        if (message.maxShortTermOrderCancellationsPerNBlocks) {
            obj.max_short_term_order_cancellations_per_n_blocks = message.maxShortTermOrderCancellationsPerNBlocks.map(function (e) { return e ? exports.MaxPerNBlocksRateLimit.toAmino(e) : undefined; });
        }
        else {
            obj.max_short_term_order_cancellations_per_n_blocks = message.maxShortTermOrderCancellationsPerNBlocks;
        }
        if (message.maxShortTermOrdersAndCancelsPerNBlocks) {
            obj.max_short_term_orders_and_cancels_per_n_blocks = message.maxShortTermOrdersAndCancelsPerNBlocks.map(function (e) { return e ? exports.MaxPerNBlocksRateLimit.toAmino(e) : undefined; });
        }
        else {
            obj.max_short_term_orders_and_cancels_per_n_blocks = message.maxShortTermOrdersAndCancelsPerNBlocks;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BlockRateLimitConfiguration.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.BlockRateLimitConfiguration.decode(message.value);
    },
    toProto: function (message) {
        return exports.BlockRateLimitConfiguration.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.BlockRateLimitConfiguration",
            value: exports.BlockRateLimitConfiguration.encode(message).finish()
        };
    }
};
function createBaseMaxPerNBlocksRateLimit() {
    return {
        numBlocks: 0,
        limit: 0
    };
}
exports.MaxPerNBlocksRateLimit = {
    typeUrl: "/nemo_network.clob.MaxPerNBlocksRateLimit",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.numBlocks !== 0) {
            writer.uint32(8).uint32(message.numBlocks);
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMaxPerNBlocksRateLimit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numBlocks = reader.uint32();
                    break;
                case 2:
                    message.limit = reader.uint32();
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
        var message = createBaseMaxPerNBlocksRateLimit();
        message.numBlocks = (_a = object.numBlocks) !== null && _a !== void 0 ? _a : 0;
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMaxPerNBlocksRateLimit();
        if (object.num_blocks !== undefined && object.num_blocks !== null) {
            message.numBlocks = object.num_blocks;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.num_blocks = message.numBlocks === 0 ? undefined : message.numBlocks;
        obj.limit = message.limit === 0 ? undefined : message.limit;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MaxPerNBlocksRateLimit.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MaxPerNBlocksRateLimit.decode(message.value);
    },
    toProto: function (message) {
        return exports.MaxPerNBlocksRateLimit.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.MaxPerNBlocksRateLimit",
            value: exports.MaxPerNBlocksRateLimit.encode(message).finish()
        };
    }
};
