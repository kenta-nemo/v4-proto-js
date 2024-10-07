"use strict";
exports.__esModule = true;
exports.QueryAllDowntimeInfoResponse = exports.QueryAllDowntimeInfoRequest = exports.QueryPreviousBlockInfoResponse = exports.QueryPreviousBlockInfoRequest = exports.QueryDowntimeParamsResponse = exports.QueryDowntimeParamsRequest = void 0;
var params_1 = require("./params");
var blocktime_1 = require("./blocktime");
var binary_1 = require("../../binary");
function createBaseQueryDowntimeParamsRequest() {
    return {};
}
exports.QueryDowntimeParamsRequest = {
    typeUrl: "/nemo_network.blocktime.QueryDowntimeParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDowntimeParamsRequest();
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
        var message = createBaseQueryDowntimeParamsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryDowntimeParamsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryDowntimeParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryDowntimeParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryDowntimeParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.QueryDowntimeParamsRequest",
            value: exports.QueryDowntimeParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDowntimeParamsResponse() {
    return {
        params: params_1.DowntimeParams.fromPartial({})
    };
}
exports.QueryDowntimeParamsResponse = {
    typeUrl: "/nemo_network.blocktime.QueryDowntimeParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.DowntimeParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDowntimeParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.DowntimeParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDowntimeParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.DowntimeParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryDowntimeParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.DowntimeParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.DowntimeParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryDowntimeParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryDowntimeParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryDowntimeParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.QueryDowntimeParamsResponse",
            value: exports.QueryDowntimeParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPreviousBlockInfoRequest() {
    return {};
}
exports.QueryPreviousBlockInfoRequest = {
    typeUrl: "/nemo_network.blocktime.QueryPreviousBlockInfoRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPreviousBlockInfoRequest();
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
        var message = createBaseQueryPreviousBlockInfoRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryPreviousBlockInfoRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryPreviousBlockInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPreviousBlockInfoRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPreviousBlockInfoRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.QueryPreviousBlockInfoRequest",
            value: exports.QueryPreviousBlockInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPreviousBlockInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryPreviousBlockInfoResponse = {
    typeUrl: "/nemo_network.blocktime.QueryPreviousBlockInfoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.info !== undefined) {
            blocktime_1.BlockInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPreviousBlockInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = blocktime_1.BlockInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryPreviousBlockInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? blocktime_1.BlockInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryPreviousBlockInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = blocktime_1.BlockInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.info = message.info ? blocktime_1.BlockInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryPreviousBlockInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryPreviousBlockInfoResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryPreviousBlockInfoResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.QueryPreviousBlockInfoResponse",
            value: exports.QueryPreviousBlockInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllDowntimeInfoRequest() {
    return {};
}
exports.QueryAllDowntimeInfoRequest = {
    typeUrl: "/nemo_network.blocktime.QueryAllDowntimeInfoRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllDowntimeInfoRequest();
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
        var message = createBaseQueryAllDowntimeInfoRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryAllDowntimeInfoRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllDowntimeInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllDowntimeInfoRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllDowntimeInfoRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.QueryAllDowntimeInfoRequest",
            value: exports.QueryAllDowntimeInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllDowntimeInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryAllDowntimeInfoResponse = {
    typeUrl: "/nemo_network.blocktime.QueryAllDowntimeInfoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.info !== undefined) {
            blocktime_1.AllDowntimeInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllDowntimeInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = blocktime_1.AllDowntimeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllDowntimeInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? blocktime_1.AllDowntimeInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllDowntimeInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = blocktime_1.AllDowntimeInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.info = message.info ? blocktime_1.AllDowntimeInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllDowntimeInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllDowntimeInfoResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllDowntimeInfoResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.blocktime.QueryAllDowntimeInfoResponse",
            value: exports.QueryAllDowntimeInfoResponse.encode(message).finish()
        };
    }
};
