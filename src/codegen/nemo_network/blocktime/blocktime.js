"use strict";
exports.__esModule = true;
exports.AllDowntimeInfo_DowntimeInfo = exports.AllDowntimeInfo = exports.BlockInfo = void 0;
var timestamp_1 = require("../../google/protobuf/timestamp");
var duration_1 = require("../../google/protobuf/duration");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseBlockInfo() {
    return {
        height: 0,
        timestamp: new Date()
    };
}
exports.BlockInfo = {
    typeUrl: "/nemo_network.blocktime.BlockInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== 0) {
            writer.uint32(8).uint32(message.height);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint32();
                    break;
                case 2:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBaseBlockInfo();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : 0;
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseBlockInfo();
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.height = message.height === 0 ? undefined : message.height;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BlockInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.BlockInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.BlockInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.BlockInfo",
            value: exports.BlockInfo.encode(message).finish()
        };
    }
};
function createBaseAllDowntimeInfo() {
    return {
        infos: []
    };
}
exports.AllDowntimeInfo = {
    typeUrl: "/nemo_network.blocktime.AllDowntimeInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.infos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AllDowntimeInfo_DowntimeInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAllDowntimeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.infos.push(exports.AllDowntimeInfo_DowntimeInfo.decode(reader, reader.uint32()));
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
        var message = createBaseAllDowntimeInfo();
        message.infos = ((_a = object.infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AllDowntimeInfo_DowntimeInfo.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseAllDowntimeInfo();
        message.infos = ((_a = object.infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AllDowntimeInfo_DowntimeInfo.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.infos) {
            obj.infos = message.infos.map(function (e) { return e ? exports.AllDowntimeInfo_DowntimeInfo.toAmino(e) : undefined; });
        }
        else {
            obj.infos = message.infos;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AllDowntimeInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AllDowntimeInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.AllDowntimeInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.AllDowntimeInfo",
            value: exports.AllDowntimeInfo.encode(message).finish()
        };
    }
};
function createBaseAllDowntimeInfo_DowntimeInfo() {
    return {
        duration: duration_1.Duration.fromPartial({}),
        blockInfo: exports.BlockInfo.fromPartial({})
    };
}
exports.AllDowntimeInfo_DowntimeInfo = {
    typeUrl: "/nemo_network.blocktime.DowntimeInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockInfo !== undefined) {
            exports.BlockInfo.encode(message.blockInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAllDowntimeInfo_DowntimeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blockInfo = exports.BlockInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseAllDowntimeInfo_DowntimeInfo();
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.blockInfo = object.blockInfo !== undefined && object.blockInfo !== null ? exports.BlockInfo.fromPartial(object.blockInfo) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAllDowntimeInfo_DowntimeInfo();
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        if (object.block_info !== undefined && object.block_info !== null) {
            message.blockInfo = exports.BlockInfo.fromAmino(object.block_info);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.block_info = message.blockInfo ? exports.BlockInfo.toAmino(message.blockInfo) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AllDowntimeInfo_DowntimeInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AllDowntimeInfo_DowntimeInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.AllDowntimeInfo_DowntimeInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.DowntimeInfo",
            value: exports.AllDowntimeInfo_DowntimeInfo.encode(message).finish()
        };
    }
};
