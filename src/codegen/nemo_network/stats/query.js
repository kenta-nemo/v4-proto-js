"use strict";
exports.__esModule = true;
exports.QueryUserStatsResponse = exports.QueryUserStatsRequest = exports.QueryGlobalStatsResponse = exports.QueryGlobalStatsRequest = exports.QueryStatsMetadataResponse = exports.QueryStatsMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
var params_1 = require("./params");
var stats_1 = require("./stats");
var binary_1 = require("../../binary");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/nemo_network.stats.QueryParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/nemo_network.stats.QueryParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryStatsMetadataRequest() {
    return {};
}
exports.QueryStatsMetadataRequest = {
    typeUrl: "/nemo_network.stats.QueryStatsMetadataRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStatsMetadataRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQueryStatsMetadataRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryStatsMetadataRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryStatsMetadataRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryStatsMetadataRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryStatsMetadataRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.QueryStatsMetadataRequest",
            value: exports.QueryStatsMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryStatsMetadataResponse() {
    return {
        metadata: undefined
    };
}
exports.QueryStatsMetadataResponse = {
    typeUrl: "/nemo_network.stats.QueryStatsMetadataResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.metadata !== undefined) {
            stats_1.StatsMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStatsMetadataResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = stats_1.StatsMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryStatsMetadataResponse();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? stats_1.StatsMetadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryStatsMetadataResponse();
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = stats_1.StatsMetadata.fromAmino(object.metadata);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.metadata = message.metadata ? stats_1.StatsMetadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryStatsMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryStatsMetadataResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryStatsMetadataResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.QueryStatsMetadataResponse",
            value: exports.QueryStatsMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGlobalStatsRequest() {
    return {};
}
exports.QueryGlobalStatsRequest = {
    typeUrl: "/nemo_network.stats.QueryGlobalStatsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGlobalStatsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQueryGlobalStatsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryGlobalStatsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryGlobalStatsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryGlobalStatsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryGlobalStatsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.QueryGlobalStatsRequest",
            value: exports.QueryGlobalStatsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGlobalStatsResponse() {
    return {
        stats: undefined
    };
}
exports.QueryGlobalStatsResponse = {
    typeUrl: "/nemo_network.stats.QueryGlobalStatsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.stats !== undefined) {
            stats_1.GlobalStats.encode(message.stats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGlobalStatsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stats = stats_1.GlobalStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryGlobalStatsResponse();
        message.stats = object.stats !== undefined && object.stats !== null ? stats_1.GlobalStats.fromPartial(object.stats) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryGlobalStatsResponse();
        if (object.stats !== undefined && object.stats !== null) {
            message.stats = stats_1.GlobalStats.fromAmino(object.stats);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.stats = message.stats ? stats_1.GlobalStats.toAmino(message.stats) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryGlobalStatsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryGlobalStatsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryGlobalStatsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.QueryGlobalStatsResponse",
            value: exports.QueryGlobalStatsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUserStatsRequest() {
    return {
        user: ""
    };
}
exports.QueryUserStatsRequest = {
    typeUrl: "/nemo_network.stats.QueryUserStatsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.user !== "") {
            writer.uint32(10).string(message.user);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUserStatsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
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
        var message = createBaseQueryUserStatsRequest();
        message.user = (_a = object.user) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryUserStatsRequest();
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.user = message.user === "" ? undefined : message.user;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryUserStatsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryUserStatsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryUserStatsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.QueryUserStatsRequest",
            value: exports.QueryUserStatsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUserStatsResponse() {
    return {
        stats: undefined
    };
}
exports.QueryUserStatsResponse = {
    typeUrl: "/nemo_network.stats.QueryUserStatsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.stats !== undefined) {
            stats_1.UserStats.encode(message.stats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUserStatsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stats = stats_1.UserStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryUserStatsResponse();
        message.stats = object.stats !== undefined && object.stats !== null ? stats_1.UserStats.fromPartial(object.stats) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryUserStatsResponse();
        if (object.stats !== undefined && object.stats !== null) {
            message.stats = stats_1.UserStats.fromAmino(object.stats);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.stats = message.stats ? stats_1.UserStats.toAmino(message.stats) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryUserStatsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryUserStatsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryUserStatsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.stats.QueryUserStatsResponse",
            value: exports.QueryUserStatsResponse.encode(message).finish()
        };
    }
};
