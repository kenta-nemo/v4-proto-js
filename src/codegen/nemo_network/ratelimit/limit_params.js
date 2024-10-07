"use strict";
exports.__esModule = true;
exports.Limiter = exports.LimitParams = void 0;
var duration_1 = require("../../google/protobuf/duration");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseLimitParams() {
    return {
        denom: "",
        limiters: []
    };
}
exports.LimitParams = {
    typeUrl: "/nemo_network.ratelimit.LimitParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        for (var _i = 0, _a = message.limiters; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Limiter.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLimitParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.limiters.push(exports.Limiter.decode(reader, reader.uint32()));
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
        var message = createBaseLimitParams();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.limiters = ((_b = object.limiters) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Limiter.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseLimitParams();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        message.limiters = ((_a = object.limiters) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Limiter.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        if (message.limiters) {
            obj.limiters = message.limiters.map(function (e) { return e ? exports.Limiter.toAmino(e) : undefined; });
        }
        else {
            obj.limiters = message.limiters;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LimitParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LimitParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.LimitParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.LimitParams",
            value: exports.LimitParams.encode(message).finish()
        };
    }
};
function createBaseLimiter() {
    return {
        period: duration_1.Duration.fromPartial({}),
        baselineMinimum: new Uint8Array(),
        baselineTvlPpm: 0
    };
}
exports.Limiter = {
    typeUrl: "/nemo_network.ratelimit.Limiter",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.period !== undefined) {
            duration_1.Duration.encode(message.period, writer.uint32(10).fork()).ldelim();
        }
        if (message.baselineMinimum.length !== 0) {
            writer.uint32(26).bytes(message.baselineMinimum);
        }
        if (message.baselineTvlPpm !== 0) {
            writer.uint32(32).uint32(message.baselineTvlPpm);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLimiter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.baselineMinimum = reader.bytes();
                    break;
                case 4:
                    message.baselineTvlPpm = reader.uint32();
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
        var message = createBaseLimiter();
        message.period = object.period !== undefined && object.period !== null ? duration_1.Duration.fromPartial(object.period) : undefined;
        message.baselineMinimum = (_a = object.baselineMinimum) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.baselineTvlPpm = (_b = object.baselineTvlPpm) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseLimiter();
        if (object.period !== undefined && object.period !== null) {
            message.period = duration_1.Duration.fromAmino(object.period);
        }
        if (object.baseline_minimum !== undefined && object.baseline_minimum !== null) {
            message.baselineMinimum = (0, helpers_1.bytesFromBase64)(object.baseline_minimum);
        }
        if (object.baseline_tvl_ppm !== undefined && object.baseline_tvl_ppm !== null) {
            message.baselineTvlPpm = object.baseline_tvl_ppm;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.period = message.period ? duration_1.Duration.toAmino(message.period) : undefined;
        obj.baseline_minimum = message.baselineMinimum ? (0, helpers_1.base64FromBytes)(message.baselineMinimum) : undefined;
        obj.baseline_tvl_ppm = message.baselineTvlPpm === 0 ? undefined : message.baselineTvlPpm;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Limiter.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Limiter.decode(message.value);
    },
    toProto: function (message) {
        return exports.Limiter.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.Limiter",
            value: exports.Limiter.encode(message).finish()
        };
    }
};
