"use strict";
exports.__esModule = true;
exports.ModuleSchemaDescriptor_FileEntry = exports.ModuleSchemaDescriptor = exports.storageTypeToJSON = exports.storageTypeFromJSON = exports.StorageTypeAmino = exports.StorageTypeSDKType = exports.StorageType = void 0;
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
/** StorageType */
var StorageType;
(function (StorageType) {
    /**
     * STORAGE_TYPE_DEFAULT_UNSPECIFIED - STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent storage where all
     * data is stored in the regular Merkle-tree backed KV-store.
     */
    StorageType[StorageType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    /**
     * STORAGE_TYPE_MEMORY - STORAGE_TYPE_MEMORY indicates in-memory storage that will be
     * reloaded every time an app restarts. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
    /**
     * STORAGE_TYPE_TRANSIENT - STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
     * at the end of every block. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
    StorageType[StorageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StorageType = exports.StorageType || (exports.StorageType = {}));
exports.StorageTypeSDKType = StorageType;
exports.StorageTypeAmino = StorageType;
function storageTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
            return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
        case 1:
        case "STORAGE_TYPE_MEMORY":
            return StorageType.STORAGE_TYPE_MEMORY;
        case 2:
        case "STORAGE_TYPE_TRANSIENT":
            return StorageType.STORAGE_TYPE_TRANSIENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StorageType.UNRECOGNIZED;
    }
}
exports.storageTypeFromJSON = storageTypeFromJSON;
function storageTypeToJSON(object) {
    switch (object) {
        case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
            return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
        case StorageType.STORAGE_TYPE_MEMORY:
            return "STORAGE_TYPE_MEMORY";
        case StorageType.STORAGE_TYPE_TRANSIENT:
            return "STORAGE_TYPE_TRANSIENT";
        case StorageType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.storageTypeToJSON = storageTypeToJSON;
function createBaseModuleSchemaDescriptor() {
    return {
        schemaFile: [],
        prefix: new Uint8Array()
    };
}
exports.ModuleSchemaDescriptor = {
    typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.schemaFile; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleSchemaDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schemaFile.push(exports.ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.prefix = reader.bytes();
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
        var message = createBaseModuleSchemaDescriptor();
        message.schemaFile = ((_a = object.schemaFile) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModuleSchemaDescriptor_FileEntry.fromPartial(e); })) || [];
        message.prefix = (_b = object.prefix) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseModuleSchemaDescriptor();
        message.schemaFile = ((_a = object.schema_file) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModuleSchemaDescriptor_FileEntry.fromAmino(e); })) || [];
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = (0, helpers_1.bytesFromBase64)(object.prefix);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.schemaFile) {
            obj.schema_file = message.schemaFile.map(function (e) { return e ? exports.ModuleSchemaDescriptor_FileEntry.toAmino(e) : undefined; });
        }
        else {
            obj.schema_file = message.schemaFile;
        }
        obj.prefix = message.prefix ? (0, helpers_1.base64FromBytes)(message.prefix) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ModuleSchemaDescriptor.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ModuleSchemaDescriptor",
            value: exports.ModuleSchemaDescriptor.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ModuleSchemaDescriptor.decode(message.value);
    },
    toProto: function (message) {
        return exports.ModuleSchemaDescriptor.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
            value: exports.ModuleSchemaDescriptor.encode(message).finish()
        };
    }
};
function createBaseModuleSchemaDescriptor_FileEntry() {
    return {
        id: 0,
        protoFileName: "",
        storageType: 0
    };
}
exports.ModuleSchemaDescriptor_FileEntry = {
    typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.protoFileName !== "") {
            writer.uint32(18).string(message.protoFileName);
        }
        if (message.storageType !== 0) {
            writer.uint32(24).int32(message.storageType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleSchemaDescriptor_FileEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.protoFileName = reader.string();
                    break;
                case 3:
                    message.storageType = reader.int32();
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
        var message = createBaseModuleSchemaDescriptor_FileEntry();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.protoFileName = (_b = object.protoFileName) !== null && _b !== void 0 ? _b : "";
        message.storageType = (_c = object.storageType) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseModuleSchemaDescriptor_FileEntry();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.proto_file_name !== undefined && object.proto_file_name !== null) {
            message.protoFileName = object.proto_file_name;
        }
        if (object.storage_type !== undefined && object.storage_type !== null) {
            message.storageType = object.storage_type;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.proto_file_name = message.protoFileName === "" ? undefined : message.protoFileName;
        obj.storage_type = message.storageType === 0 ? undefined : message.storageType;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ModuleSchemaDescriptor_FileEntry.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/FileEntry",
            value: exports.ModuleSchemaDescriptor_FileEntry.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ModuleSchemaDescriptor_FileEntry.decode(message.value);
    },
    toProto: function (message) {
        return exports.ModuleSchemaDescriptor_FileEntry.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
            value: exports.ModuleSchemaDescriptor_FileEntry.encode(message).finish()
        };
    }
};
