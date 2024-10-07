"use strict";
exports.__esModule = true;
exports.UserStats = exports.GlobalStats = exports.EpochStats_UserWithStats = exports.EpochStats = exports.StatsMetadata = exports.BlockStats_Fill = exports.BlockStats = void 0;
var timestamp_1 = require("../../google/protobuf/timestamp");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseBlockStats() {
    return {
        fills: []
    };
}
exports.BlockStats = {
    typeUrl: "/nemo_network.stats.BlockStats",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.fills; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.BlockStats_Fill.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockStats();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fills.push(exports.BlockStats_Fill.decode(reader, reader.uint32()));
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
        var message = createBaseBlockStats();
        message.fills = ((_a = object.fills) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.BlockStats_Fill.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseBlockStats();
        message.fills = ((_a = object.fills) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.BlockStats_Fill.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.fills) {
            obj.fills = message.fills.map(function (e) { return e ? exports.BlockStats_Fill.toAmino(e) : undefined; });
        }
        else {
            obj.fills = message.fills;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BlockStats.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.BlockStats.decode(message.value);
    },
    toProto: function (message) {
        return exports.BlockStats.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.BlockStats",
            value: exports.BlockStats.encode(message).finish()
        };
    }
};
function createBaseBlockStats_Fill() {
    return {
        taker: "",
        maker: "",
        notional: BigInt(0)
    };
}
exports.BlockStats_Fill = {
    typeUrl: "/nemo_network.stats.Fill",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.taker !== "") {
            writer.uint32(10).string(message.taker);
        }
        if (message.maker !== "") {
            writer.uint32(18).string(message.maker);
        }
        if (message.notional !== BigInt(0)) {
            writer.uint32(24).uint64(message.notional);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockStats_Fill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taker = reader.string();
                    break;
                case 2:
                    message.maker = reader.string();
                    break;
                case 3:
                    message.notional = reader.uint64();
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
        var message = createBaseBlockStats_Fill();
        message.taker = (_a = object.taker) !== null && _a !== void 0 ? _a : "";
        message.maker = (_b = object.maker) !== null && _b !== void 0 ? _b : "";
        message.notional = object.notional !== undefined && object.notional !== null ? BigInt(object.notional.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseBlockStats_Fill();
        if (object.taker !== undefined && object.taker !== null) {
            message.taker = object.taker;
        }
        if (object.maker !== undefined && object.maker !== null) {
            message.maker = object.maker;
        }
        if (object.notional !== undefined && object.notional !== null) {
            message.notional = BigInt(object.notional);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.taker = message.taker === "" ? undefined : message.taker;
        obj.maker = message.maker === "" ? undefined : message.maker;
        obj.notional = message.notional !== BigInt(0) ? ((_a = message.notional) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BlockStats_Fill.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.BlockStats_Fill.decode(message.value);
    },
    toProto: function (message) {
        return exports.BlockStats_Fill.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.Fill",
            value: exports.BlockStats_Fill.encode(message).finish()
        };
    }
};
function createBaseStatsMetadata() {
    return {
        trailingEpoch: 0
    };
}
exports.StatsMetadata = {
    typeUrl: "/nemo_network.stats.StatsMetadata",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.trailingEpoch !== 0) {
            writer.uint32(8).uint32(message.trailingEpoch);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatsMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trailingEpoch = reader.uint32();
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
        var message = createBaseStatsMetadata();
        message.trailingEpoch = (_a = object.trailingEpoch) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStatsMetadata();
        if (object.trailing_epoch !== undefined && object.trailing_epoch !== null) {
            message.trailingEpoch = object.trailing_epoch;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.trailing_epoch = message.trailingEpoch === 0 ? undefined : message.trailingEpoch;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StatsMetadata.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StatsMetadata.decode(message.value);
    },
    toProto: function (message) {
        return exports.StatsMetadata.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.StatsMetadata",
            value: exports.StatsMetadata.encode(message).finish()
        };
    }
};
function createBaseEpochStats() {
    return {
        epochEndTime: new Date(),
        stats: []
    };
}
exports.EpochStats = {
    typeUrl: "/nemo_network.stats.EpochStats",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.epochEndTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.epochEndTime), writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.stats; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.EpochStats_UserWithStats.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEpochStats();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.stats.push(exports.EpochStats_UserWithStats.decode(reader, reader.uint32()));
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
        var message = createBaseEpochStats();
        message.epochEndTime = (_a = object.epochEndTime) !== null && _a !== void 0 ? _a : undefined;
        message.stats = ((_b = object.stats) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.EpochStats_UserWithStats.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseEpochStats();
        if (object.epoch_end_time !== undefined && object.epoch_end_time !== null) {
            message.epochEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.epoch_end_time));
        }
        message.stats = ((_a = object.stats) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.EpochStats_UserWithStats.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.epoch_end_time = message.epochEndTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.epochEndTime)) : undefined;
        if (message.stats) {
            obj.stats = message.stats.map(function (e) { return e ? exports.EpochStats_UserWithStats.toAmino(e) : undefined; });
        }
        else {
            obj.stats = message.stats;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EpochStats.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EpochStats.decode(message.value);
    },
    toProto: function (message) {
        return exports.EpochStats.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.EpochStats",
            value: exports.EpochStats.encode(message).finish()
        };
    }
};
function createBaseEpochStats_UserWithStats() {
    return {
        user: "",
        stats: undefined
    };
}
exports.EpochStats_UserWithStats = {
    typeUrl: "/nemo_network.stats.UserWithStats",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.user !== "") {
            writer.uint32(10).string(message.user);
        }
        if (message.stats !== undefined) {
            exports.UserStats.encode(message.stats, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEpochStats_UserWithStats();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.stats = exports.UserStats.decode(reader, reader.uint32());
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
        var message = createBaseEpochStats_UserWithStats();
        message.user = (_a = object.user) !== null && _a !== void 0 ? _a : "";
        message.stats = object.stats !== undefined && object.stats !== null ? exports.UserStats.fromPartial(object.stats) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEpochStats_UserWithStats();
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        }
        if (object.stats !== undefined && object.stats !== null) {
            message.stats = exports.UserStats.fromAmino(object.stats);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.user = message.user === "" ? undefined : message.user;
        obj.stats = message.stats ? exports.UserStats.toAmino(message.stats) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EpochStats_UserWithStats.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EpochStats_UserWithStats.decode(message.value);
    },
    toProto: function (message) {
        return exports.EpochStats_UserWithStats.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.UserWithStats",
            value: exports.EpochStats_UserWithStats.encode(message).finish()
        };
    }
};
function createBaseGlobalStats() {
    return {
        notionalTraded: BigInt(0)
    };
}
exports.GlobalStats = {
    typeUrl: "/nemo_network.stats.GlobalStats",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.notionalTraded !== BigInt(0)) {
            writer.uint32(8).uint64(message.notionalTraded);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGlobalStats();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notionalTraded = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGlobalStats();
        message.notionalTraded = object.notionalTraded !== undefined && object.notionalTraded !== null ? BigInt(object.notionalTraded.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGlobalStats();
        if (object.notional_traded !== undefined && object.notional_traded !== null) {
            message.notionalTraded = BigInt(object.notional_traded);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.notional_traded = message.notionalTraded !== BigInt(0) ? ((_a = message.notionalTraded) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GlobalStats.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.GlobalStats.decode(message.value);
    },
    toProto: function (message) {
        return exports.GlobalStats.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.GlobalStats",
            value: exports.GlobalStats.encode(message).finish()
        };
    }
};
function createBaseUserStats() {
    return {
        takerNotional: BigInt(0),
        makerNotional: BigInt(0)
    };
}
exports.UserStats = {
    typeUrl: "/nemo_network.stats.UserStats",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.takerNotional !== BigInt(0)) {
            writer.uint32(8).uint64(message.takerNotional);
        }
        if (message.makerNotional !== BigInt(0)) {
            writer.uint32(16).uint64(message.makerNotional);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUserStats();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerNotional = reader.uint64();
                    break;
                case 2:
                    message.makerNotional = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseUserStats();
        message.takerNotional = object.takerNotional !== undefined && object.takerNotional !== null ? BigInt(object.takerNotional.toString()) : BigInt(0);
        message.makerNotional = object.makerNotional !== undefined && object.makerNotional !== null ? BigInt(object.makerNotional.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseUserStats();
        if (object.taker_notional !== undefined && object.taker_notional !== null) {
            message.takerNotional = BigInt(object.taker_notional);
        }
        if (object.maker_notional !== undefined && object.maker_notional !== null) {
            message.makerNotional = BigInt(object.maker_notional);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.taker_notional = message.takerNotional !== BigInt(0) ? ((_a = message.takerNotional) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.maker_notional = message.makerNotional !== BigInt(0) ? ((_b = message.makerNotional) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.UserStats.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.UserStats.decode(message.value);
    },
    toProto: function (message) {
        return exports.UserStats.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.UserStats",
            value: exports.UserStats.encode(message).finish()
        };
    }
};
