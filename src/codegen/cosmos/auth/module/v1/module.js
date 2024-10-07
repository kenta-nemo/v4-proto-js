"use strict";
exports.__esModule = true;
exports.ModuleAccountPermission = exports.Module = void 0;
var binary_1 = require("../../../../binary");
function createBaseModule() {
    return {
        bech32Prefix: "",
        moduleAccountPermissions: [],
        authority: ""
    };
}
exports.Module = {
    typeUrl: "/cosmos.auth.module.v1.Module",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.bech32Prefix !== "") {
            writer.uint32(10).string(message.bech32Prefix);
        }
        for (var _i = 0, _a = message.moduleAccountPermissions; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ModuleAccountPermission.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.authority !== "") {
            writer.uint32(26).string(message.authority);
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
                    message.bech32Prefix = reader.string();
                    break;
                case 2:
                    message.moduleAccountPermissions.push(exports.ModuleAccountPermission.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        var _a, _b, _c;
        var message = createBaseModule();
        message.bech32Prefix = (_a = object.bech32Prefix) !== null && _a !== void 0 ? _a : "";
        message.moduleAccountPermissions = ((_b = object.moduleAccountPermissions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ModuleAccountPermission.fromPartial(e); })) || [];
        message.authority = (_c = object.authority) !== null && _c !== void 0 ? _c : "";
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseModule();
        if (object.bech32_prefix !== undefined && object.bech32_prefix !== null) {
            message.bech32Prefix = object.bech32_prefix;
        }
        message.moduleAccountPermissions = ((_a = object.module_account_permissions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModuleAccountPermission.fromAmino(e); })) || [];
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.bech32_prefix = message.bech32Prefix === "" ? undefined : message.bech32Prefix;
        if (message.moduleAccountPermissions) {
            obj.module_account_permissions = message.moduleAccountPermissions.map(function (e) { return e ? exports.ModuleAccountPermission.toAmino(e) : undefined; });
        }
        else {
            obj.module_account_permissions = message.moduleAccountPermissions;
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
            typeUrl: "/cosmos.auth.module.v1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
function createBaseModuleAccountPermission() {
    return {
        account: "",
        permissions: []
    };
}
exports.ModuleAccountPermission = {
    typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        for (var _i = 0, _a = message.permissions; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleAccountPermission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.permissions.push(reader.string());
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
        var message = createBaseModuleAccountPermission();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.permissions = ((_b = object.permissions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseModuleAccountPermission();
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        message.permissions = ((_a = object.permissions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.account = message.account === "" ? undefined : message.account;
        if (message.permissions) {
            obj.permissions = message.permissions.map(function (e) { return e; });
        }
        else {
            obj.permissions = message.permissions;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ModuleAccountPermission.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ModuleAccountPermission",
            value: exports.ModuleAccountPermission.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ModuleAccountPermission.decode(message.value);
    },
    toProto: function (message) {
        return exports.ModuleAccountPermission.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission",
            value: exports.ModuleAccountPermission.encode(message).finish()
        };
    }
};
