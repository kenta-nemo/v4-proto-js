"use strict";
exports.__esModule = true;
exports.EquityTierLimit = exports.EquityTierLimitConfiguration = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseEquityTierLimitConfiguration() {
    return {
        shortTermOrderEquityTiers: [],
        statefulOrderEquityTiers: []
    };
}
exports.EquityTierLimitConfiguration = {
    typeUrl: "/nemo_network.clob.EquityTierLimitConfiguration",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.shortTermOrderEquityTiers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.EquityTierLimit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.statefulOrderEquityTiers; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.EquityTierLimit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEquityTierLimitConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shortTermOrderEquityTiers.push(exports.EquityTierLimit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.statefulOrderEquityTiers.push(exports.EquityTierLimit.decode(reader, reader.uint32()));
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
        var message = createBaseEquityTierLimitConfiguration();
        message.shortTermOrderEquityTiers = ((_a = object.shortTermOrderEquityTiers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.EquityTierLimit.fromPartial(e); })) || [];
        message.statefulOrderEquityTiers = ((_b = object.statefulOrderEquityTiers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.EquityTierLimit.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseEquityTierLimitConfiguration();
        message.shortTermOrderEquityTiers = ((_a = object.short_term_order_equity_tiers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.EquityTierLimit.fromAmino(e); })) || [];
        message.statefulOrderEquityTiers = ((_b = object.stateful_order_equity_tiers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.EquityTierLimit.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.shortTermOrderEquityTiers) {
            obj.short_term_order_equity_tiers = message.shortTermOrderEquityTiers.map(function (e) { return e ? exports.EquityTierLimit.toAmino(e) : undefined; });
        }
        else {
            obj.short_term_order_equity_tiers = message.shortTermOrderEquityTiers;
        }
        if (message.statefulOrderEquityTiers) {
            obj.stateful_order_equity_tiers = message.statefulOrderEquityTiers.map(function (e) { return e ? exports.EquityTierLimit.toAmino(e) : undefined; });
        }
        else {
            obj.stateful_order_equity_tiers = message.statefulOrderEquityTiers;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EquityTierLimitConfiguration.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EquityTierLimitConfiguration.decode(message.value);
    },
    toProto: function (message) {
        return exports.EquityTierLimitConfiguration.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.EquityTierLimitConfiguration",
            value: exports.EquityTierLimitConfiguration.encode(message).finish()
        };
    }
};
function createBaseEquityTierLimit() {
    return {
        usdTncRequired: new Uint8Array(),
        limit: 0
    };
}
exports.EquityTierLimit = {
    typeUrl: "/nemo_network.clob.EquityTierLimit",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.usdTncRequired.length !== 0) {
            writer.uint32(10).bytes(message.usdTncRequired);
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEquityTierLimit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.usdTncRequired = reader.bytes();
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
        var message = createBaseEquityTierLimit();
        message.usdTncRequired = (_a = object.usdTncRequired) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEquityTierLimit();
        if (object.usd_tnc_required !== undefined && object.usd_tnc_required !== null) {
            message.usdTncRequired = (0, helpers_1.bytesFromBase64)(object.usd_tnc_required);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.usd_tnc_required = message.usdTncRequired ? (0, helpers_1.base64FromBytes)(message.usdTncRequired) : undefined;
        obj.limit = message.limit === 0 ? undefined : message.limit;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EquityTierLimit.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EquityTierLimit.decode(message.value);
    },
    toProto: function (message) {
        return exports.EquityTierLimit.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.EquityTierLimit",
            value: exports.EquityTierLimit.encode(message).finish()
        };
    }
};
