"use strict";
exports.__esModule = true;
exports.MigrateFromInfo = exports.PackageReference = exports.ModuleDescriptor = void 0;
var binary_1 = require("../../../binary");
function createBaseModuleDescriptor() {
    return {
        goImport: "",
        usePackage: [],
        canMigrateFrom: []
    };
}
exports.ModuleDescriptor = {
    typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.goImport !== "") {
            writer.uint32(10).string(message.goImport);
        }
        for (var _i = 0, _a = message.usePackage; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.canMigrateFrom; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.goImport = reader.string();
                    break;
                case 2:
                    message.usePackage.push(exports.PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.canMigrateFrom.push(exports.MigrateFromInfo.decode(reader, reader.uint32()));
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
        var message = createBaseModuleDescriptor();
        message.goImport = (_a = object.goImport) !== null && _a !== void 0 ? _a : "";
        message.usePackage = ((_b = object.usePackage) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.PackageReference.fromPartial(e); })) || [];
        message.canMigrateFrom = ((_c = object.canMigrateFrom) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.MigrateFromInfo.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseModuleDescriptor();
        if (object.go_import !== undefined && object.go_import !== null) {
            message.goImport = object.go_import;
        }
        message.usePackage = ((_a = object.use_package) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.PackageReference.fromAmino(e); })) || [];
        message.canMigrateFrom = ((_b = object.can_migrate_from) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MigrateFromInfo.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.go_import = message.goImport === "" ? undefined : message.goImport;
        if (message.usePackage) {
            obj.use_package = message.usePackage.map(function (e) { return e ? exports.PackageReference.toAmino(e) : undefined; });
        }
        else {
            obj.use_package = message.usePackage;
        }
        if (message.canMigrateFrom) {
            obj.can_migrate_from = message.canMigrateFrom.map(function (e) { return e ? exports.MigrateFromInfo.toAmino(e) : undefined; });
        }
        else {
            obj.can_migrate_from = message.canMigrateFrom;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ModuleDescriptor.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ModuleDescriptor",
            value: exports.ModuleDescriptor.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ModuleDescriptor.decode(message.value);
    },
    toProto: function (message) {
        return exports.ModuleDescriptor.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
            value: exports.ModuleDescriptor.encode(message).finish()
        };
    }
};
function createBasePackageReference() {
    return {
        name: "",
        revision: 0
    };
}
exports.PackageReference = {
    typeUrl: "/cosmos.app.v1alpha1.PackageReference",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePackageReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.revision = reader.uint32();
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
        var message = createBasePackageReference();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.revision = (_b = object.revision) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePackageReference();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.revision !== undefined && object.revision !== null) {
            message.revision = object.revision;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.revision = message.revision === 0 ? undefined : message.revision;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PackageReference.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/PackageReference",
            value: exports.PackageReference.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.PackageReference.decode(message.value);
    },
    toProto: function (message) {
        return exports.PackageReference.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.PackageReference",
            value: exports.PackageReference.encode(message).finish()
        };
    }
};
function createBaseMigrateFromInfo() {
    return {
        module: ""
    };
}
exports.MigrateFromInfo = {
    typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMigrateFromInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
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
        var message = createBaseMigrateFromInfo();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMigrateFromInfo();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.module = message.module === "" ? undefined : message.module;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MigrateFromInfo.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MigrateFromInfo",
            value: exports.MigrateFromInfo.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MigrateFromInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.MigrateFromInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
            value: exports.MigrateFromInfo.encode(message).finish()
        };
    }
};
