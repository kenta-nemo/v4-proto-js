"use strict";
exports.__esModule = true;
exports.QueryEpochInfoAllResponse = exports.QueryAllEpochInfoRequest = exports.QueryEpochInfoResponse = exports.QueryGetEpochInfoRequest = void 0;
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var epoch_info_1 = require("./epoch_info");
var binary_1 = require("../../binary");
function createBaseQueryGetEpochInfoRequest() {
    return {
        name: ""
    };
}
exports.QueryGetEpochInfoRequest = {
    typeUrl: "/nemo_network.epochs.QueryGetEpochInfoRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetEpochInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
        var message = createBaseQueryGetEpochInfoRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryGetEpochInfoRequest();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryGetEpochInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryGetEpochInfoRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryGetEpochInfoRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.epochs.QueryGetEpochInfoRequest",
            value: exports.QueryGetEpochInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEpochInfoResponse() {
    return {
        epochInfo: epoch_info_1.EpochInfo.fromPartial({})
    };
}
exports.QueryEpochInfoResponse = {
    typeUrl: "/nemo_network.epochs.QueryEpochInfoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.epochInfo !== undefined) {
            epoch_info_1.EpochInfo.encode(message.epochInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryEpochInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochInfo = epoch_info_1.EpochInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryEpochInfoResponse();
        message.epochInfo = object.epochInfo !== undefined && object.epochInfo !== null ? epoch_info_1.EpochInfo.fromPartial(object.epochInfo) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryEpochInfoResponse();
        if (object.epoch_info !== undefined && object.epoch_info !== null) {
            message.epochInfo = epoch_info_1.EpochInfo.fromAmino(object.epoch_info);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.epoch_info = message.epochInfo ? epoch_info_1.EpochInfo.toAmino(message.epochInfo) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryEpochInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryEpochInfoResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryEpochInfoResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.epochs.QueryEpochInfoResponse",
            value: exports.QueryEpochInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllEpochInfoRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllEpochInfoRequest = {
    typeUrl: "/nemo_network.epochs.QueryAllEpochInfoRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllEpochInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllEpochInfoRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllEpochInfoRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllEpochInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllEpochInfoRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllEpochInfoRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.epochs.QueryAllEpochInfoRequest",
            value: exports.QueryAllEpochInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEpochInfoAllResponse() {
    return {
        epochInfo: [],
        pagination: undefined
    };
}
exports.QueryEpochInfoAllResponse = {
    typeUrl: "/nemo_network.epochs.QueryEpochInfoAllResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.epochInfo; _i < _a.length; _i++) {
            var v = _a[_i];
            epoch_info_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryEpochInfoAllResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochInfo.push(epoch_info_1.EpochInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryEpochInfoAllResponse();
        message.epochInfo = ((_a = object.epochInfo) === null || _a === void 0 ? void 0 : _a.map(function (e) { return epoch_info_1.EpochInfo.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryEpochInfoAllResponse();
        message.epochInfo = ((_a = object.epoch_info) === null || _a === void 0 ? void 0 : _a.map(function (e) { return epoch_info_1.EpochInfo.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.epochInfo) {
            obj.epoch_info = message.epochInfo.map(function (e) { return e ? epoch_info_1.EpochInfo.toAmino(e) : undefined; });
        }
        else {
            obj.epoch_info = message.epochInfo;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryEpochInfoAllResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryEpochInfoAllResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryEpochInfoAllResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.epochs.QueryEpochInfoAllResponse",
            value: exports.QueryEpochInfoAllResponse.encode(message).finish()
        };
    }
};
