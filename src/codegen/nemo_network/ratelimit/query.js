"use strict";
exports.__esModule = true;
exports.QueryAllPendingSendPacketsResponse = exports.QueryAllPendingSendPacketsRequest = exports.QueryCapacityByDenomResponse = exports.QueryCapacityByDenomRequest = exports.ListLimitParamsResponse = exports.ListLimitParamsRequest = void 0;
var limit_params_1 = require("./limit_params");
var capacity_1 = require("./capacity");
var pending_send_packet_1 = require("./pending_send_packet");
var binary_1 = require("../../binary");
function createBaseListLimitParamsRequest() {
    return {};
}
exports.ListLimitParamsRequest = {
    typeUrl: "/nemo_network.ratelimit.ListLimitParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListLimitParamsRequest();
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
        var message = createBaseListLimitParamsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseListLimitParamsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListLimitParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ListLimitParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListLimitParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.ListLimitParamsRequest",
            value: exports.ListLimitParamsRequest.encode(message).finish()
        };
    }
};
function createBaseListLimitParamsResponse() {
    return {
        limitParamsList: []
    };
}
exports.ListLimitParamsResponse = {
    typeUrl: "/nemo_network.ratelimit.ListLimitParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.limitParamsList; _i < _a.length; _i++) {
            var v = _a[_i];
            limit_params_1.LimitParams.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListLimitParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitParamsList.push(limit_params_1.LimitParams.decode(reader, reader.uint32()));
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
        var message = createBaseListLimitParamsResponse();
        message.limitParamsList = ((_a = object.limitParamsList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return limit_params_1.LimitParams.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseListLimitParamsResponse();
        message.limitParamsList = ((_a = object.limit_params_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return limit_params_1.LimitParams.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.limitParamsList) {
            obj.limit_params_list = message.limitParamsList.map(function (e) { return e ? limit_params_1.LimitParams.toAmino(e) : undefined; });
        }
        else {
            obj.limit_params_list = message.limitParamsList;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ListLimitParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ListLimitParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.ListLimitParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.ListLimitParamsResponse",
            value: exports.ListLimitParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCapacityByDenomRequest() {
    return {
        denom: ""
    };
}
exports.QueryCapacityByDenomRequest = {
    typeUrl: "/nemo_network.ratelimit.QueryCapacityByDenomRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCapacityByDenomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
        var message = createBaseQueryCapacityByDenomRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryCapacityByDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryCapacityByDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryCapacityByDenomRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryCapacityByDenomRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.QueryCapacityByDenomRequest",
            value: exports.QueryCapacityByDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCapacityByDenomResponse() {
    return {
        limiterCapacityList: []
    };
}
exports.QueryCapacityByDenomResponse = {
    typeUrl: "/nemo_network.ratelimit.QueryCapacityByDenomResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.limiterCapacityList; _i < _a.length; _i++) {
            var v = _a[_i];
            capacity_1.LimiterCapacity.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCapacityByDenomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limiterCapacityList.push(capacity_1.LimiterCapacity.decode(reader, reader.uint32()));
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
        var message = createBaseQueryCapacityByDenomResponse();
        message.limiterCapacityList = ((_a = object.limiterCapacityList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return capacity_1.LimiterCapacity.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryCapacityByDenomResponse();
        message.limiterCapacityList = ((_a = object.limiter_capacity_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return capacity_1.LimiterCapacity.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.limiterCapacityList) {
            obj.limiter_capacity_list = message.limiterCapacityList.map(function (e) { return e ? capacity_1.LimiterCapacity.toAmino(e) : undefined; });
        }
        else {
            obj.limiter_capacity_list = message.limiterCapacityList;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryCapacityByDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryCapacityByDenomResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryCapacityByDenomResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.QueryCapacityByDenomResponse",
            value: exports.QueryCapacityByDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllPendingSendPacketsRequest() {
    return {};
}
exports.QueryAllPendingSendPacketsRequest = {
    typeUrl: "/nemo_network.ratelimit.QueryAllPendingSendPacketsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllPendingSendPacketsRequest();
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
        var message = createBaseQueryAllPendingSendPacketsRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryAllPendingSendPacketsRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllPendingSendPacketsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllPendingSendPacketsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllPendingSendPacketsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.QueryAllPendingSendPacketsRequest",
            value: exports.QueryAllPendingSendPacketsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllPendingSendPacketsResponse() {
    return {
        pendingSendPackets: []
    };
}
exports.QueryAllPendingSendPacketsResponse = {
    typeUrl: "/nemo_network.ratelimit.QueryAllPendingSendPacketsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.pendingSendPackets; _i < _a.length; _i++) {
            var v = _a[_i];
            pending_send_packet_1.PendingSendPacket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllPendingSendPacketsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pendingSendPackets.push(pending_send_packet_1.PendingSendPacket.decode(reader, reader.uint32()));
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
        var message = createBaseQueryAllPendingSendPacketsResponse();
        message.pendingSendPackets = ((_a = object.pendingSendPackets) === null || _a === void 0 ? void 0 : _a.map(function (e) { return pending_send_packet_1.PendingSendPacket.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryAllPendingSendPacketsResponse();
        message.pendingSendPackets = ((_a = object.pending_send_packets) === null || _a === void 0 ? void 0 : _a.map(function (e) { return pending_send_packet_1.PendingSendPacket.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.pendingSendPackets) {
            obj.pending_send_packets = message.pendingSendPackets.map(function (e) { return e ? pending_send_packet_1.PendingSendPacket.toAmino(e) : undefined; });
        }
        else {
            obj.pending_send_packets = message.pendingSendPackets;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllPendingSendPacketsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllPendingSendPacketsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllPendingSendPacketsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.QueryAllPendingSendPacketsResponse",
            value: exports.QueryAllPendingSendPacketsResponse.encode(message).finish()
        };
    }
};
