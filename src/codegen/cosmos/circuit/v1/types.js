"use strict";
exports.__esModule = true;
exports.GenesisState = exports.GenesisAccountPermissions = exports.Permissions = exports.permissions_LevelToJSON = exports.permissions_LevelFromJSON = exports.Permissions_LevelAmino = exports.Permissions_LevelSDKType = exports.Permissions_Level = void 0;
var binary_1 = require("../../../binary");
/** Level is the permission level. */
var Permissions_Level;
(function (Permissions_Level) {
    /**
     * LEVEL_NONE_UNSPECIFIED - LEVEL_NONE_UNSPECIFIED indicates that the account will have no circuit
     * breaker permissions.
     */
    Permissions_Level[Permissions_Level["LEVEL_NONE_UNSPECIFIED"] = 0] = "LEVEL_NONE_UNSPECIFIED";
    /**
     * LEVEL_SOME_MSGS - LEVEL_SOME_MSGS indicates that the account will have permission to
     * trip or reset the circuit breaker for some Msg type URLs. If this level
     * is chosen, a non-empty list of Msg type URLs must be provided in
     * limit_type_urls.
     */
    Permissions_Level[Permissions_Level["LEVEL_SOME_MSGS"] = 1] = "LEVEL_SOME_MSGS";
    /**
     * LEVEL_ALL_MSGS - LEVEL_ALL_MSGS indicates that the account can trip or reset the circuit
     * breaker for Msg's of all type URLs.
     */
    Permissions_Level[Permissions_Level["LEVEL_ALL_MSGS"] = 2] = "LEVEL_ALL_MSGS";
    /**
     * LEVEL_SUPER_ADMIN - LEVEL_SUPER_ADMIN indicates that the account can take all circuit breaker
     * actions and can grant permissions to other accounts.
     */
    Permissions_Level[Permissions_Level["LEVEL_SUPER_ADMIN"] = 3] = "LEVEL_SUPER_ADMIN";
    Permissions_Level[Permissions_Level["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Permissions_Level = exports.Permissions_Level || (exports.Permissions_Level = {}));
exports.Permissions_LevelSDKType = Permissions_Level;
exports.Permissions_LevelAmino = Permissions_Level;
function permissions_LevelFromJSON(object) {
    switch (object) {
        case 0:
        case "LEVEL_NONE_UNSPECIFIED":
            return Permissions_Level.LEVEL_NONE_UNSPECIFIED;
        case 1:
        case "LEVEL_SOME_MSGS":
            return Permissions_Level.LEVEL_SOME_MSGS;
        case 2:
        case "LEVEL_ALL_MSGS":
            return Permissions_Level.LEVEL_ALL_MSGS;
        case 3:
        case "LEVEL_SUPER_ADMIN":
            return Permissions_Level.LEVEL_SUPER_ADMIN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Permissions_Level.UNRECOGNIZED;
    }
}
exports.permissions_LevelFromJSON = permissions_LevelFromJSON;
function permissions_LevelToJSON(object) {
    switch (object) {
        case Permissions_Level.LEVEL_NONE_UNSPECIFIED:
            return "LEVEL_NONE_UNSPECIFIED";
        case Permissions_Level.LEVEL_SOME_MSGS:
            return "LEVEL_SOME_MSGS";
        case Permissions_Level.LEVEL_ALL_MSGS:
            return "LEVEL_ALL_MSGS";
        case Permissions_Level.LEVEL_SUPER_ADMIN:
            return "LEVEL_SUPER_ADMIN";
        case Permissions_Level.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.permissions_LevelToJSON = permissions_LevelToJSON;
function createBasePermissions() {
    return {
        level: 0,
        limitTypeUrls: []
    };
}
exports.Permissions = {
    typeUrl: "/cosmos.circuit.v1.Permissions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.level !== 0) {
            writer.uint32(8).int32(message.level);
        }
        for (var _i = 0, _a = message.limitTypeUrls; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePermissions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.level = reader.int32();
                    break;
                case 2:
                    message.limitTypeUrls.push(reader.string());
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
        var message = createBasePermissions();
        message.level = (_a = object.level) !== null && _a !== void 0 ? _a : 0;
        message.limitTypeUrls = ((_b = object.limitTypeUrls) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBasePermissions();
        if (object.level !== undefined && object.level !== null) {
            message.level = object.level;
        }
        message.limitTypeUrls = ((_a = object.limit_type_urls) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.level = message.level === 0 ? undefined : message.level;
        if (message.limitTypeUrls) {
            obj.limit_type_urls = message.limitTypeUrls.map(function (e) { return e; });
        }
        else {
            obj.limit_type_urls = message.limitTypeUrls;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Permissions.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Permissions",
            value: exports.Permissions.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Permissions.decode(message.value);
    },
    toProto: function (message) {
        return exports.Permissions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.Permissions",
            value: exports.Permissions.encode(message).finish()
        };
    }
};
function createBaseGenesisAccountPermissions() {
    return {
        address: "",
        permissions: undefined
    };
}
exports.GenesisAccountPermissions = {
    typeUrl: "/cosmos.circuit.v1.GenesisAccountPermissions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.permissions !== undefined) {
            exports.Permissions.encode(message.permissions, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisAccountPermissions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.permissions = exports.Permissions.decode(reader, reader.uint32());
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
        var message = createBaseGenesisAccountPermissions();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.permissions = object.permissions !== undefined && object.permissions !== null ? exports.Permissions.fromPartial(object.permissions) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGenesisAccountPermissions();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = exports.Permissions.fromAmino(object.permissions);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.permissions = message.permissions ? exports.Permissions.toAmino(message.permissions) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisAccountPermissions.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GenesisAccountPermissions",
            value: exports.GenesisAccountPermissions.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GenesisAccountPermissions.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisAccountPermissions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.GenesisAccountPermissions",
            value: exports.GenesisAccountPermissions.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        accountPermissions: [],
        disabledTypeUrls: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.circuit.v1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.accountPermissions; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.GenesisAccountPermissions.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.disabledTypeUrls; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountPermissions.push(exports.GenesisAccountPermissions.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.disabledTypeUrls.push(reader.string());
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
        var message = createBaseGenesisState();
        message.accountPermissions = ((_a = object.accountPermissions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GenesisAccountPermissions.fromPartial(e); })) || [];
        message.disabledTypeUrls = ((_b = object.disabledTypeUrls) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.accountPermissions = ((_a = object.account_permissions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GenesisAccountPermissions.fromAmino(e); })) || [];
        message.disabledTypeUrls = ((_b = object.disabled_type_urls) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.accountPermissions) {
            obj.account_permissions = message.accountPermissions.map(function (e) { return e ? exports.GenesisAccountPermissions.toAmino(e) : undefined; });
        }
        else {
            obj.account_permissions = message.accountPermissions;
        }
        if (message.disabledTypeUrls) {
            obj.disabled_type_urls = message.disabledTypeUrls.map(function (e) { return e; });
        }
        else {
            obj.disabled_type_urls = message.disabledTypeUrls;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
