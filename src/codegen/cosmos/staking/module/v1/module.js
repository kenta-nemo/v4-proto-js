"use strict";
exports.__esModule = true;
exports.Module = void 0;
var binary_1 = require("../../../../binary");
function createBaseModule() {
    return {
        hooksOrder: [],
        authority: "",
        bech32PrefixValidator: "",
        bech32PrefixConsensus: ""
    };
}
exports.Module = {
    typeUrl: "/cosmos.staking.module.v1.Module",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.hooksOrder; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        if (message.bech32PrefixValidator !== "") {
            writer.uint32(26).string(message.bech32PrefixValidator);
        }
        if (message.bech32PrefixConsensus !== "") {
            writer.uint32(34).string(message.bech32PrefixConsensus);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModule();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hooksOrder.push(reader.string());
                    break;
                case 2:
                    message.authority = reader.string();
                    break;
                case 3:
                    message.bech32PrefixValidator = reader.string();
                    break;
                case 4:
                    message.bech32PrefixConsensus = reader.string();
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
        var message = createBaseModule();
        message.hooksOrder = ((_a = object.hooksOrder) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.authority = (_b = object.authority) !== null && _b !== void 0 ? _b : "";
        message.bech32PrefixValidator = (_c = object.bech32PrefixValidator) !== null && _c !== void 0 ? _c : "";
        message.bech32PrefixConsensus = (_d = object.bech32PrefixConsensus) !== null && _d !== void 0 ? _d : "";
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseModule();
        message.hooksOrder = ((_a = object.hooks_order) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.bech32_prefix_validator !== undefined && object.bech32_prefix_validator !== null) {
            message.bech32PrefixValidator = object.bech32_prefix_validator;
        }
        if (object.bech32_prefix_consensus !== undefined && object.bech32_prefix_consensus !== null) {
            message.bech32PrefixConsensus = object.bech32_prefix_consensus;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.hooksOrder) {
            obj.hooks_order = message.hooksOrder.map(function (e) { return e; });
        }
        else {
            obj.hooks_order = message.hooksOrder;
        }
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.bech32_prefix_validator = message.bech32PrefixValidator === "" ? undefined : message.bech32PrefixValidator;
        obj.bech32_prefix_consensus = message.bech32PrefixConsensus === "" ? undefined : message.bech32PrefixConsensus;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Module.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Module",
            value: exports.Module.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Module.decode(message.value);
    },
    toProto: function (message) {
        return exports.Module.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.staking.module.v1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
