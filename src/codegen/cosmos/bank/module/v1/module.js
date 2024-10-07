"use strict";
exports.__esModule = true;
exports.Module = void 0;
var binary_1 = require("../../../../binary");
function createBaseModule() {
    return {
        blockedModuleAccountsOverride: [],
        authority: ""
    };
}
exports.Module = {
    typeUrl: "/cosmos.bank.module.v1.Module",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.blockedModuleAccountsOverride; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
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
                    message.blockedModuleAccountsOverride.push(reader.string());
                    break;
                case 2:
                    message.authority = reader.string();
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
        var message = createBaseModule();
        message.blockedModuleAccountsOverride = ((_a = object.blockedModuleAccountsOverride) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.authority = (_b = object.authority) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseModule();
        message.blockedModuleAccountsOverride = ((_a = object.blocked_module_accounts_override) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.blockedModuleAccountsOverride) {
            obj.blocked_module_accounts_override = message.blockedModuleAccountsOverride.map(function (e) { return e; });
        }
        else {
            obj.blocked_module_accounts_override = message.blockedModuleAccountsOverride;
        }
        obj.authority = message.authority === "" ? undefined : message.authority;
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
            typeUrl: "/cosmos.bank.module.v1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
