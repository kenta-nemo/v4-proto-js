"use strict";
exports.__esModule = true;
exports.LimiterCapacity = exports.DenomCapacity = void 0;
var limit_params_1 = require("./limit_params");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseDenomCapacity() {
    return {
        denom: "",
        capacityList: []
    };
}
exports.DenomCapacity = {
    typeUrl: "/nemo_network.ratelimit.DenomCapacity",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        for (var _i = 0, _a = message.capacityList; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDenomCapacity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.capacityList.push(reader.bytes());
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
        var message = createBaseDenomCapacity();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.capacityList = ((_b = object.capacityList) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseDenomCapacity();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        message.capacityList = ((_a = object.capacity_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return (0, helpers_1.bytesFromBase64)(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        if (message.capacityList) {
            obj.capacity_list = message.capacityList.map(function (e) { return (0, helpers_1.base64FromBytes)(e); });
        }
        else {
            obj.capacity_list = message.capacityList;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DenomCapacity.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DenomCapacity.decode(message.value);
    },
    toProto: function (message) {
        return exports.DenomCapacity.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.DenomCapacity",
            value: exports.DenomCapacity.encode(message).finish()
        };
    }
};
function createBaseLimiterCapacity() {
    return {
        limiter: limit_params_1.Limiter.fromPartial({}),
        capacity: new Uint8Array()
    };
}
exports.LimiterCapacity = {
    typeUrl: "/nemo_network.ratelimit.LimiterCapacity",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.limiter !== undefined) {
            limit_params_1.Limiter.encode(message.limiter, writer.uint32(10).fork()).ldelim();
        }
        if (message.capacity.length !== 0) {
            writer.uint32(18).bytes(message.capacity);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLimiterCapacity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limiter = limit_params_1.Limiter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.capacity = reader.bytes();
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
        var message = createBaseLimiterCapacity();
        message.limiter = object.limiter !== undefined && object.limiter !== null ? limit_params_1.Limiter.fromPartial(object.limiter) : undefined;
        message.capacity = (_a = object.capacity) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseLimiterCapacity();
        if (object.limiter !== undefined && object.limiter !== null) {
            message.limiter = limit_params_1.Limiter.fromAmino(object.limiter);
        }
        if (object.capacity !== undefined && object.capacity !== null) {
            message.capacity = (0, helpers_1.bytesFromBase64)(object.capacity);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.limiter = message.limiter ? limit_params_1.Limiter.toAmino(message.limiter) : undefined;
        obj.capacity = message.capacity ? (0, helpers_1.base64FromBytes)(message.capacity) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LimiterCapacity.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LimiterCapacity.decode(message.value);
    },
    toProto: function (message) {
        return exports.LimiterCapacity.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.LimiterCapacity",
            value: exports.LimiterCapacity.encode(message).finish()
        };
    }
};
