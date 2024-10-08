"use strict";
exports.__esModule = true;
exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.methodOptions_IdempotencyLevelToJSON = exports.methodOptions_IdempotencyLevelFromJSON = exports.MethodOptions_IdempotencyLevelAmino = exports.MethodOptions_IdempotencyLevelSDKType = exports.MethodOptions_IdempotencyLevel = exports.fieldOptions_JSTypeToJSON = exports.fieldOptions_JSTypeFromJSON = exports.FieldOptions_JSTypeAmino = exports.FieldOptions_JSTypeSDKType = exports.FieldOptions_JSType = exports.fieldOptions_CTypeToJSON = exports.fieldOptions_CTypeFromJSON = exports.FieldOptions_CTypeAmino = exports.FieldOptions_CTypeSDKType = exports.FieldOptions_CType = exports.fileOptions_OptimizeModeToJSON = exports.fileOptions_OptimizeModeFromJSON = exports.FileOptions_OptimizeModeAmino = exports.FileOptions_OptimizeModeSDKType = exports.FileOptions_OptimizeMode = exports.fieldDescriptorProto_LabelToJSON = exports.fieldDescriptorProto_LabelFromJSON = exports.FieldDescriptorProto_LabelAmino = exports.FieldDescriptorProto_LabelSDKType = exports.FieldDescriptorProto_Label = exports.fieldDescriptorProto_TypeToJSON = exports.fieldDescriptorProto_TypeFromJSON = exports.FieldDescriptorProto_TypeAmino = exports.FieldDescriptorProto_TypeSDKType = exports.FieldDescriptorProto_Type = void 0;
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type = exports.FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = {}));
exports.FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_Type;
exports.FieldDescriptorProto_TypeAmino = FieldDescriptorProto_Type;
function fieldDescriptorProto_TypeFromJSON(object) {
    switch (object) {
        case 1:
        case "TYPE_DOUBLE":
            return FieldDescriptorProto_Type.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return FieldDescriptorProto_Type.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return FieldDescriptorProto_Type.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return FieldDescriptorProto_Type.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return FieldDescriptorProto_Type.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return FieldDescriptorProto_Type.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return FieldDescriptorProto_Type.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return FieldDescriptorProto_Type.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return FieldDescriptorProto_Type.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return FieldDescriptorProto_Type.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return FieldDescriptorProto_Type.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return FieldDescriptorProto_Type.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return FieldDescriptorProto_Type.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return FieldDescriptorProto_Type.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return FieldDescriptorProto_Type.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return FieldDescriptorProto_Type.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return FieldDescriptorProto_Type.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return FieldDescriptorProto_Type.TYPE_SINT64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Type.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
function fieldDescriptorProto_TypeToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case FieldDescriptorProto_Type.TYPE_INT64:
            return "TYPE_INT64";
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return "TYPE_UINT64";
        case FieldDescriptorProto_Type.TYPE_INT32:
            return "TYPE_INT32";
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return "TYPE_BOOL";
        case FieldDescriptorProto_Type.TYPE_STRING:
            return "TYPE_STRING";
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return "TYPE_GROUP";
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return "TYPE_BYTES";
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return "TYPE_UINT32";
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return "TYPE_ENUM";
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return "TYPE_SINT32";
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return "TYPE_SINT64";
        case FieldDescriptorProto_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label = exports.FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = {}));
exports.FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_Label;
exports.FieldDescriptorProto_LabelAmino = FieldDescriptorProto_Label;
function fieldDescriptorProto_LabelFromJSON(object) {
    switch (object) {
        case 1:
        case "LABEL_OPTIONAL":
            return FieldDescriptorProto_Label.LABEL_OPTIONAL;
        case 2:
        case "LABEL_REQUIRED":
            return FieldDescriptorProto_Label.LABEL_REQUIRED;
        case 3:
        case "LABEL_REPEATED":
            return FieldDescriptorProto_Label.LABEL_REPEATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Label.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
function fieldDescriptorProto_LabelToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return "LABEL_OPTIONAL";
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return "LABEL_REQUIRED";
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return "LABEL_REPEATED";
        case FieldDescriptorProto_Label.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode = exports.FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = {}));
exports.FileOptions_OptimizeModeSDKType = FileOptions_OptimizeMode;
exports.FileOptions_OptimizeModeAmino = FileOptions_OptimizeMode;
function fileOptions_OptimizeModeFromJSON(object) {
    switch (object) {
        case 1:
        case "SPEED":
            return FileOptions_OptimizeMode.SPEED;
        case 2:
        case "CODE_SIZE":
            return FileOptions_OptimizeMode.CODE_SIZE;
        case 3:
        case "LITE_RUNTIME":
            return FileOptions_OptimizeMode.LITE_RUNTIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FileOptions_OptimizeMode.UNRECOGNIZED;
    }
}
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
function fileOptions_OptimizeModeToJSON(object) {
    switch (object) {
        case FileOptions_OptimizeMode.SPEED:
            return "SPEED";
        case FileOptions_OptimizeMode.CODE_SIZE:
            return "CODE_SIZE";
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return "LITE_RUNTIME";
        case FileOptions_OptimizeMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType = exports.FieldOptions_CType || (exports.FieldOptions_CType = {}));
exports.FieldOptions_CTypeSDKType = FieldOptions_CType;
exports.FieldOptions_CTypeAmino = FieldOptions_CType;
function fieldOptions_CTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STRING":
            return FieldOptions_CType.STRING;
        case 1:
        case "CORD":
            return FieldOptions_CType.CORD;
        case 2:
        case "STRING_PIECE":
            return FieldOptions_CType.STRING_PIECE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_CType.UNRECOGNIZED;
    }
}
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
function fieldOptions_CTypeToJSON(object) {
    switch (object) {
        case FieldOptions_CType.STRING:
            return "STRING";
        case FieldOptions_CType.CORD:
            return "CORD";
        case FieldOptions_CType.STRING_PIECE:
            return "STRING_PIECE";
        case FieldOptions_CType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType = exports.FieldOptions_JSType || (exports.FieldOptions_JSType = {}));
exports.FieldOptions_JSTypeSDKType = FieldOptions_JSType;
exports.FieldOptions_JSTypeAmino = FieldOptions_JSType;
function fieldOptions_JSTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "JS_NORMAL":
            return FieldOptions_JSType.JS_NORMAL;
        case 1:
        case "JS_STRING":
            return FieldOptions_JSType.JS_STRING;
        case 2:
        case "JS_NUMBER":
            return FieldOptions_JSType.JS_NUMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_JSType.UNRECOGNIZED;
    }
}
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
function fieldOptions_JSTypeToJSON(object) {
    switch (object) {
        case FieldOptions_JSType.JS_NORMAL:
            return "JS_NORMAL";
        case FieldOptions_JSType.JS_STRING:
            return "JS_STRING";
        case FieldOptions_JSType.JS_NUMBER:
            return "JS_NUMBER";
        case FieldOptions_JSType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel = exports.MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = {}));
exports.MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevel;
exports.MethodOptions_IdempotencyLevelAmino = MethodOptions_IdempotencyLevel;
function methodOptions_IdempotencyLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "IDEMPOTENCY_UNKNOWN":
            return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
        case 1:
        case "NO_SIDE_EFFECTS":
            return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
        case 2:
        case "IDEMPOTENT":
            return MethodOptions_IdempotencyLevel.IDEMPOTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
    }
}
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
function methodOptions_IdempotencyLevelToJSON(object) {
    switch (object) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return "IDEMPOTENCY_UNKNOWN";
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return "NO_SIDE_EFFECTS";
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return "IDEMPOTENT";
        case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
function createBaseFileDescriptorSet() {
    return {
        file: []
    };
}
exports.FileDescriptorSet = {
    typeUrl: "/google.protobuf.FileDescriptorSet",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.file; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileDescriptorSet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
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
        var message = createBaseFileDescriptorSet();
        message.file = ((_a = object.file) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FileDescriptorProto.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseFileDescriptorSet();
        message.file = ((_a = object.file) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FileDescriptorProto.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.file) {
            obj.file = message.file.map(function (e) { return e ? exports.FileDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.file = message.file;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FileDescriptorSet.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.FileDescriptorSet.decode(message.value);
    },
    toProto: function (message) {
        return exports.FileDescriptorSet.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.FileDescriptorSet",
            value: exports.FileDescriptorSet.encode(message).finish()
        };
    }
};
function createBaseFileDescriptorProto() {
    return {
        name: "",
        package: "",
        dependency: [],
        publicDependency: [],
        weakDependency: [],
        messageType: [],
        enumType: [],
        service: [],
        extension: [],
        options: undefined,
        sourceCodeInfo: undefined,
        syntax: ""
    };
}
exports.FileDescriptorProto = {
    typeUrl: "/google.protobuf.FileDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        for (var _i = 0, _a = message.dependency; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        writer.uint32(82).fork();
        for (var _b = 0, _c = message.publicDependency; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(90).fork();
        for (var _d = 0, _e = message.weakDependency; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.int32(v);
        }
        writer.ldelim();
        for (var _f = 0, _g = message.messageType; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _h = 0, _j = message.enumType; _h < _j.length; _h++) {
            var v = _j[_h];
            exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _k = 0, _l = message.service; _k < _l.length; _k++) {
            var v = _l[_k];
            exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _m = 0, _o = message.extension; _m < _o.length; _m++) {
            var v = _o[_m];
            exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined) {
            exports.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== "") {
            writer.uint32(98).string(message.syntax);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.package = reader.string();
                    break;
                case 3:
                    message.dependency.push(reader.string());
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.publicDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.publicDependency.push(reader.int32());
                    }
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weakDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.weakDependency.push(reader.int32());
                    }
                    break;
                case 4:
                    message.messageType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sourceCodeInfo = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.syntax = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseFileDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.dependency = ((_c = object.dependency) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.publicDependency = ((_d = object.publicDependency) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.weakDependency = ((_e = object.weakDependency) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        message.messageType = ((_f = object.messageType) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.DescriptorProto.fromPartial(e); })) || [];
        message.enumType = ((_g = object.enumType) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.EnumDescriptorProto.fromPartial(e); })) || [];
        message.service = ((_h = object.service) === null || _h === void 0 ? void 0 : _h.map(function (e) { return exports.ServiceDescriptorProto.fromPartial(e); })) || [];
        message.extension = ((_j = object.extension) === null || _j === void 0 ? void 0 : _j.map(function (e) { return exports.FieldDescriptorProto.fromPartial(e); })) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.FileOptions.fromPartial(object.options) : undefined;
        message.sourceCodeInfo = object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null ? exports.SourceCodeInfo.fromPartial(object.sourceCodeInfo) : undefined;
        message.syntax = (_k = object.syntax) !== null && _k !== void 0 ? _k : "";
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseFileDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = object.package;
        }
        message.dependency = ((_a = object.dependency) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.publicDependency = ((_b = object.public_dependency) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.weakDependency = ((_c = object.weak_dependency) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.messageType = ((_d = object.message_type) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.DescriptorProto.fromAmino(e); })) || [];
        message.enumType = ((_e = object.enum_type) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.EnumDescriptorProto.fromAmino(e); })) || [];
        message.service = ((_f = object.service) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.ServiceDescriptorProto.fromAmino(e); })) || [];
        message.extension = ((_g = object.extension) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.FieldDescriptorProto.fromAmino(e); })) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.FileOptions.fromAmino(object.options);
        }
        if (object.source_code_info !== undefined && object.source_code_info !== null) {
            message.sourceCodeInfo = exports.SourceCodeInfo.fromAmino(object.source_code_info);
        }
        if (object.syntax !== undefined && object.syntax !== null) {
            message.syntax = object.syntax;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.package = message.package === "" ? undefined : message.package;
        if (message.dependency) {
            obj.dependency = message.dependency.map(function (e) { return e; });
        }
        else {
            obj.dependency = message.dependency;
        }
        if (message.publicDependency) {
            obj.public_dependency = message.publicDependency.map(function (e) { return e; });
        }
        else {
            obj.public_dependency = message.publicDependency;
        }
        if (message.weakDependency) {
            obj.weak_dependency = message.weakDependency.map(function (e) { return e; });
        }
        else {
            obj.weak_dependency = message.weakDependency;
        }
        if (message.messageType) {
            obj.message_type = message.messageType.map(function (e) { return e ? exports.DescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.message_type = message.messageType;
        }
        if (message.enumType) {
            obj.enum_type = message.enumType.map(function (e) { return e ? exports.EnumDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.enum_type = message.enumType;
        }
        if (message.service) {
            obj.service = message.service.map(function (e) { return e ? exports.ServiceDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.service = message.service;
        }
        if (message.extension) {
            obj.extension = message.extension.map(function (e) { return e ? exports.FieldDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.extension = message.extension;
        }
        obj.options = message.options ? exports.FileOptions.toAmino(message.options) : undefined;
        obj.source_code_info = message.sourceCodeInfo ? exports.SourceCodeInfo.toAmino(message.sourceCodeInfo) : undefined;
        obj.syntax = message.syntax === "" ? undefined : message.syntax;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FileDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.FileDescriptorProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.FileDescriptorProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.FileDescriptorProto",
            value: exports.FileDescriptorProto.encode(message).finish()
        };
    }
};
function createBaseDescriptorProto() {
    return {
        name: "",
        field: [],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
exports.DescriptorProto = {
    typeUrl: "/google.protobuf.DescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (var _i = 0, _a = message.field; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.extension; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _d = 0, _e = message.nestedType; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _f = 0, _g = message.enumType; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _h = 0, _j = message.extensionRange; _h < _j.length; _h++) {
            var v = _j[_h];
            exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _k = 0, _l = message.oneofDecl; _k < _l.length; _k++) {
            var v = _l[_k];
            exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (var _m = 0, _o = message.reservedRange; _m < _o.length; _m++) {
            var v = _o[_m];
            exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (var _p = 0, _q = message.reservedName; _p < _q.length; _p++) {
            var v = _q[_p];
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nestedType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.oneofDecl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.field = ((_b = object.field) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.FieldDescriptorProto.fromPartial(e); })) || [];
        message.extension = ((_c = object.extension) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.FieldDescriptorProto.fromPartial(e); })) || [];
        message.nestedType = ((_d = object.nestedType) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.DescriptorProto.fromPartial(e); })) || [];
        message.enumType = ((_e = object.enumType) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.EnumDescriptorProto.fromPartial(e); })) || [];
        message.extensionRange = ((_f = object.extensionRange) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.DescriptorProto_ExtensionRange.fromPartial(e); })) || [];
        message.oneofDecl = ((_g = object.oneofDecl) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.OneofDescriptorProto.fromPartial(e); })) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.MessageOptions.fromPartial(object.options) : undefined;
        message.reservedRange = ((_h = object.reservedRange) === null || _h === void 0 ? void 0 : _h.map(function (e) { return exports.DescriptorProto_ReservedRange.fromPartial(e); })) || [];
        message.reservedName = ((_j = object.reservedName) === null || _j === void 0 ? void 0 : _j.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.field = ((_a = object.field) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FieldDescriptorProto.fromAmino(e); })) || [];
        message.extension = ((_b = object.extension) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.FieldDescriptorProto.fromAmino(e); })) || [];
        message.nestedType = ((_c = object.nested_type) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.DescriptorProto.fromAmino(e); })) || [];
        message.enumType = ((_d = object.enum_type) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.EnumDescriptorProto.fromAmino(e); })) || [];
        message.extensionRange = ((_e = object.extension_range) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.DescriptorProto_ExtensionRange.fromAmino(e); })) || [];
        message.oneofDecl = ((_f = object.oneof_decl) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.OneofDescriptorProto.fromAmino(e); })) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.MessageOptions.fromAmino(object.options);
        }
        message.reservedRange = ((_g = object.reserved_range) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.DescriptorProto_ReservedRange.fromAmino(e); })) || [];
        message.reservedName = ((_h = object.reserved_name) === null || _h === void 0 ? void 0 : _h.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        if (message.field) {
            obj.field = message.field.map(function (e) { return e ? exports.FieldDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.field = message.field;
        }
        if (message.extension) {
            obj.extension = message.extension.map(function (e) { return e ? exports.FieldDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.extension = message.extension;
        }
        if (message.nestedType) {
            obj.nested_type = message.nestedType.map(function (e) { return e ? exports.DescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.nested_type = message.nestedType;
        }
        if (message.enumType) {
            obj.enum_type = message.enumType.map(function (e) { return e ? exports.EnumDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.enum_type = message.enumType;
        }
        if (message.extensionRange) {
            obj.extension_range = message.extensionRange.map(function (e) { return e ? exports.DescriptorProto_ExtensionRange.toAmino(e) : undefined; });
        }
        else {
            obj.extension_range = message.extensionRange;
        }
        if (message.oneofDecl) {
            obj.oneof_decl = message.oneofDecl.map(function (e) { return e ? exports.OneofDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.oneof_decl = message.oneofDecl;
        }
        obj.options = message.options ? exports.MessageOptions.toAmino(message.options) : undefined;
        if (message.reservedRange) {
            obj.reserved_range = message.reservedRange.map(function (e) { return e ? exports.DescriptorProto_ReservedRange.toAmino(e) : undefined; });
        }
        else {
            obj.reserved_range = message.reservedRange;
        }
        if (message.reservedName) {
            obj.reserved_name = message.reservedName.map(function (e) { return e; });
        }
        else {
            obj.reserved_name = message.reservedName;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DescriptorProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.DescriptorProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.DescriptorProto",
            value: exports.DescriptorProto.encode(message).finish()
        };
    }
};
function createBaseDescriptorProto_ExtensionRange() {
    return {
        start: 0,
        end: 0,
        options: undefined
    };
}
exports.DescriptorProto_ExtensionRange = {
    typeUrl: "/google.protobuf.ExtensionRange",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescriptorProto_ExtensionRange();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                case 3:
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
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
        var message = createBaseDescriptorProto_ExtensionRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        message.options = object.options !== undefined && object.options !== null ? exports.ExtensionRangeOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDescriptorProto_ExtensionRange();
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.ExtensionRangeOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.start = message.start === 0 ? undefined : message.start;
        obj.end = message.end === 0 ? undefined : message.end;
        obj.options = message.options ? exports.ExtensionRangeOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DescriptorProto_ExtensionRange.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DescriptorProto_ExtensionRange.decode(message.value);
    },
    toProto: function (message) {
        return exports.DescriptorProto_ExtensionRange.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.ExtensionRange",
            value: exports.DescriptorProto_ExtensionRange.encode(message).finish()
        };
    }
};
function createBaseDescriptorProto_ReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
exports.DescriptorProto_ReservedRange = {
    typeUrl: "/google.protobuf.ReservedRange",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescriptorProto_ReservedRange();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
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
        var message = createBaseDescriptorProto_ReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDescriptorProto_ReservedRange();
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.start = message.start === 0 ? undefined : message.start;
        obj.end = message.end === 0 ? undefined : message.end;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DescriptorProto_ReservedRange.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.DescriptorProto_ReservedRange.decode(message.value);
    },
    toProto: function (message) {
        return exports.DescriptorProto_ReservedRange.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.ReservedRange",
            value: exports.DescriptorProto_ReservedRange.encode(message).finish()
        };
    }
};
function createBaseExtensionRangeOptions() {
    return {
        uninterpretedOption: []
    };
}
exports.ExtensionRangeOptions = {
    typeUrl: "/google.protobuf.ExtensionRangeOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExtensionRangeOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        var message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(function (e) { return e ? exports.UninterpretedOption.toAmino(e) : undefined; });
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ExtensionRangeOptions.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ExtensionRangeOptions.decode(message.value);
    },
    toProto: function (message) {
        return exports.ExtensionRangeOptions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.ExtensionRangeOptions",
            value: exports.ExtensionRangeOptions.encode(message).finish()
        };
    }
};
function createBaseFieldDescriptorProto() {
    return {
        name: "",
        number: 0,
        label: 1,
        type: 1,
        typeName: "",
        extendee: "",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "",
        options: undefined
    };
}
exports.FieldDescriptorProto = {
    typeUrl: "/google.protobuf.FieldDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.label !== 1) {
            writer.uint32(32).int32(message.label);
        }
        if (message.type !== 1) {
            writer.uint32(40).int32(message.type);
        }
        if (message.typeName !== "") {
            writer.uint32(50).string(message.typeName);
        }
        if (message.extendee !== "") {
            writer.uint32(18).string(message.extendee);
        }
        if (message.defaultValue !== "") {
            writer.uint32(58).string(message.defaultValue);
        }
        if (message.oneofIndex !== 0) {
            writer.uint32(72).int32(message.oneofIndex);
        }
        if (message.jsonName !== "") {
            writer.uint32(82).string(message.jsonName);
        }
        if (message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFieldDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                case 4:
                    message.label = reader.int32();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.extendee = reader.string();
                    break;
                case 7:
                    message.defaultValue = reader.string();
                    break;
                case 9:
                    message.oneofIndex = reader.int32();
                    break;
                case 10:
                    message.jsonName = reader.string();
                    break;
                case 8:
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseFieldDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : 1;
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 1;
        message.typeName = (_e = object.typeName) !== null && _e !== void 0 ? _e : "";
        message.extendee = (_f = object.extendee) !== null && _f !== void 0 ? _f : "";
        message.defaultValue = (_g = object.defaultValue) !== null && _g !== void 0 ? _g : "";
        message.oneofIndex = (_h = object.oneofIndex) !== null && _h !== void 0 ? _h : 0;
        message.jsonName = (_j = object.jsonName) !== null && _j !== void 0 ? _j : "";
        message.options = object.options !== undefined && object.options !== null ? exports.FieldOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseFieldDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.type_name !== undefined && object.type_name !== null) {
            message.typeName = object.type_name;
        }
        if (object.extendee !== undefined && object.extendee !== null) {
            message.extendee = object.extendee;
        }
        if (object.default_value !== undefined && object.default_value !== null) {
            message.defaultValue = object.default_value;
        }
        if (object.oneof_index !== undefined && object.oneof_index !== null) {
            message.oneofIndex = object.oneof_index;
        }
        if (object.json_name !== undefined && object.json_name !== null) {
            message.jsonName = object.json_name;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.FieldOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.number = message.number === 0 ? undefined : message.number;
        obj.label = message.label === 1 ? undefined : message.label;
        obj.type = message.type === 1 ? undefined : message.type;
        obj.type_name = message.typeName === "" ? undefined : message.typeName;
        obj.extendee = message.extendee === "" ? undefined : message.extendee;
        obj.default_value = message.defaultValue === "" ? undefined : message.defaultValue;
        obj.oneof_index = message.oneofIndex === 0 ? undefined : message.oneofIndex;
        obj.json_name = message.jsonName === "" ? undefined : message.jsonName;
        obj.options = message.options ? exports.FieldOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FieldDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.FieldDescriptorProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.FieldDescriptorProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.FieldDescriptorProto",
            value: exports.FieldDescriptorProto.encode(message).finish()
        };
    }
};
function createBaseOneofDescriptorProto() {
    return {
        name: "",
        options: undefined
    };
}
exports.OneofDescriptorProto = {
    typeUrl: "/google.protobuf.OneofDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOneofDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
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
        var message = createBaseOneofDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.options = object.options !== undefined && object.options !== null ? exports.OneofOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseOneofDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.OneofOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.options = message.options ? exports.OneofOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OneofDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OneofDescriptorProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.OneofDescriptorProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.OneofDescriptorProto",
            value: exports.OneofDescriptorProto.encode(message).finish()
        };
    }
};
function createBaseEnumDescriptorProto() {
    return {
        name: "",
        value: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
exports.EnumDescriptorProto = {
    typeUrl: "/google.protobuf.EnumDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (var _i = 0, _a = message.value; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.reservedRange; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.reservedName; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.reservedName.push(reader.string());
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
        var message = createBaseEnumDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = ((_b = object.value) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.EnumValueDescriptorProto.fromPartial(e); })) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.EnumOptions.fromPartial(object.options) : undefined;
        message.reservedRange = ((_c = object.reservedRange) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.EnumDescriptorProto_EnumReservedRange.fromPartial(e); })) || [];
        message.reservedName = ((_d = object.reservedName) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c;
        var message = createBaseEnumDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.value = ((_a = object.value) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.EnumValueDescriptorProto.fromAmino(e); })) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.EnumOptions.fromAmino(object.options);
        }
        message.reservedRange = ((_b = object.reserved_range) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.EnumDescriptorProto_EnumReservedRange.fromAmino(e); })) || [];
        message.reservedName = ((_c = object.reserved_name) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        if (message.value) {
            obj.value = message.value.map(function (e) { return e ? exports.EnumValueDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.value = message.value;
        }
        obj.options = message.options ? exports.EnumOptions.toAmino(message.options) : undefined;
        if (message.reservedRange) {
            obj.reserved_range = message.reservedRange.map(function (e) { return e ? exports.EnumDescriptorProto_EnumReservedRange.toAmino(e) : undefined; });
        }
        else {
            obj.reserved_range = message.reservedRange;
        }
        if (message.reservedName) {
            obj.reserved_name = message.reservedName.map(function (e) { return e; });
        }
        else {
            obj.reserved_name = message.reservedName;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EnumDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EnumDescriptorProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.EnumDescriptorProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.EnumDescriptorProto",
            value: exports.EnumDescriptorProto.encode(message).finish()
        };
    }
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
exports.EnumDescriptorProto_EnumReservedRange = {
    typeUrl: "/google.protobuf.EnumReservedRange",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumDescriptorProto_EnumReservedRange();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
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
        var message = createBaseEnumDescriptorProto_EnumReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEnumDescriptorProto_EnumReservedRange();
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.start = message.start === 0 ? undefined : message.start;
        obj.end = message.end === 0 ? undefined : message.end;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EnumDescriptorProto_EnumReservedRange.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EnumDescriptorProto_EnumReservedRange.decode(message.value);
    },
    toProto: function (message) {
        return exports.EnumDescriptorProto_EnumReservedRange.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.EnumReservedRange",
            value: exports.EnumDescriptorProto_EnumReservedRange.encode(message).finish()
        };
    }
};
function createBaseEnumValueDescriptorProto() {
    return {
        name: "",
        number: 0,
        options: undefined
    };
}
exports.EnumValueDescriptorProto = {
    typeUrl: "/google.protobuf.EnumValueDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumValueDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
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
        var message = createBaseEnumValueDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.options = object.options !== undefined && object.options !== null ? exports.EnumValueOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseEnumValueDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.EnumValueOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.number = message.number === 0 ? undefined : message.number;
        obj.options = message.options ? exports.EnumValueOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EnumValueDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EnumValueDescriptorProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.EnumValueDescriptorProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.EnumValueDescriptorProto",
            value: exports.EnumValueDescriptorProto.encode(message).finish()
        };
    }
};
function createBaseServiceDescriptorProto() {
    return {
        name: "",
        method: [],
        options: undefined
    };
}
exports.ServiceDescriptorProto = {
    typeUrl: "/google.protobuf.ServiceDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (var _i = 0, _a = message.method; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseServiceDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
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
        var message = createBaseServiceDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = ((_b = object.method) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MethodDescriptorProto.fromPartial(e); })) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.ServiceOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseServiceDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.method = ((_a = object.method) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MethodDescriptorProto.fromAmino(e); })) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.ServiceOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        if (message.method) {
            obj.method = message.method.map(function (e) { return e ? exports.MethodDescriptorProto.toAmino(e) : undefined; });
        }
        else {
            obj.method = message.method;
        }
        obj.options = message.options ? exports.ServiceOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ServiceDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ServiceDescriptorProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.ServiceDescriptorProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.ServiceDescriptorProto",
            value: exports.ServiceDescriptorProto.encode(message).finish()
        };
    }
};
function createBaseMethodDescriptorProto() {
    return {
        name: "",
        inputType: "",
        outputType: "",
        options: undefined,
        clientStreaming: false,
        serverStreaming: false
    };
}
exports.MethodDescriptorProto = {
    typeUrl: "/google.protobuf.MethodDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.inputType !== "") {
            writer.uint32(18).string(message.inputType);
        }
        if (message.outputType !== "") {
            writer.uint32(26).string(message.outputType);
        }
        if (message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.clientStreaming === true) {
            writer.uint32(40).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(48).bool(message.serverStreaming);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMethodDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.inputType = reader.string();
                    break;
                case 3:
                    message.outputType = reader.string();
                    break;
                case 4:
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.clientStreaming = reader.bool();
                    break;
                case 6:
                    message.serverStreaming = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMethodDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.inputType = (_b = object.inputType) !== null && _b !== void 0 ? _b : "";
        message.outputType = (_c = object.outputType) !== null && _c !== void 0 ? _c : "";
        message.options = object.options !== undefined && object.options !== null ? exports.MethodOptions.fromPartial(object.options) : undefined;
        message.clientStreaming = (_d = object.clientStreaming) !== null && _d !== void 0 ? _d : false;
        message.serverStreaming = (_e = object.serverStreaming) !== null && _e !== void 0 ? _e : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMethodDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.input_type !== undefined && object.input_type !== null) {
            message.inputType = object.input_type;
        }
        if (object.output_type !== undefined && object.output_type !== null) {
            message.outputType = object.output_type;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.MethodOptions.fromAmino(object.options);
        }
        if (object.client_streaming !== undefined && object.client_streaming !== null) {
            message.clientStreaming = object.client_streaming;
        }
        if (object.server_streaming !== undefined && object.server_streaming !== null) {
            message.serverStreaming = object.server_streaming;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.input_type = message.inputType === "" ? undefined : message.inputType;
        obj.output_type = message.outputType === "" ? undefined : message.outputType;
        obj.options = message.options ? exports.MethodOptions.toAmino(message.options) : undefined;
        obj.client_streaming = message.clientStreaming === false ? undefined : message.clientStreaming;
        obj.server_streaming = message.serverStreaming === false ? undefined : message.serverStreaming;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MethodDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MethodDescriptorProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.MethodDescriptorProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.MethodDescriptorProto",
            value: exports.MethodDescriptorProto.encode(message).finish()
        };
    }
};
function createBaseFileOptions() {
    return {
        javaPackage: "",
        javaOuterClassname: "",
        javaMultipleFiles: false,
        javaGenerateEqualsAndHash: false,
        javaStringCheckUtf8: false,
        optimizeFor: 1,
        goPackage: "",
        ccGenericServices: false,
        javaGenericServices: false,
        pyGenericServices: false,
        phpGenericServices: false,
        deprecated: false,
        ccEnableArenas: false,
        objcClassPrefix: "",
        csharpNamespace: "",
        swiftPrefix: "",
        phpClassPrefix: "",
        phpNamespace: "",
        phpMetadataNamespace: "",
        rubyPackage: "",
        uninterpretedOption: []
    };
}
exports.FileOptions = {
    typeUrl: "/google.protobuf.FileOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.javaPackage !== "") {
            writer.uint32(10).string(message.javaPackage);
        }
        if (message.javaOuterClassname !== "") {
            writer.uint32(66).string(message.javaOuterClassname);
        }
        if (message.javaMultipleFiles === true) {
            writer.uint32(80).bool(message.javaMultipleFiles);
        }
        if (message.javaGenerateEqualsAndHash === true) {
            writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        }
        if (message.javaStringCheckUtf8 === true) {
            writer.uint32(216).bool(message.javaStringCheckUtf8);
        }
        if (message.optimizeFor !== 1) {
            writer.uint32(72).int32(message.optimizeFor);
        }
        if (message.goPackage !== "") {
            writer.uint32(90).string(message.goPackage);
        }
        if (message.ccGenericServices === true) {
            writer.uint32(128).bool(message.ccGenericServices);
        }
        if (message.javaGenericServices === true) {
            writer.uint32(136).bool(message.javaGenericServices);
        }
        if (message.pyGenericServices === true) {
            writer.uint32(144).bool(message.pyGenericServices);
        }
        if (message.phpGenericServices === true) {
            writer.uint32(336).bool(message.phpGenericServices);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.ccEnableArenas === true) {
            writer.uint32(248).bool(message.ccEnableArenas);
        }
        if (message.objcClassPrefix !== "") {
            writer.uint32(290).string(message.objcClassPrefix);
        }
        if (message.csharpNamespace !== "") {
            writer.uint32(298).string(message.csharpNamespace);
        }
        if (message.swiftPrefix !== "") {
            writer.uint32(314).string(message.swiftPrefix);
        }
        if (message.phpClassPrefix !== "") {
            writer.uint32(322).string(message.phpClassPrefix);
        }
        if (message.phpNamespace !== "") {
            writer.uint32(330).string(message.phpNamespace);
        }
        if (message.phpMetadataNamespace !== "") {
            writer.uint32(354).string(message.phpMetadataNamespace);
        }
        if (message.rubyPackage !== "") {
            writer.uint32(362).string(message.rubyPackage);
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.javaPackage = reader.string();
                    break;
                case 8:
                    message.javaOuterClassname = reader.string();
                    break;
                case 10:
                    message.javaMultipleFiles = reader.bool();
                    break;
                case 20:
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                case 27:
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                case 9:
                    message.optimizeFor = reader.int32();
                    break;
                case 11:
                    message.goPackage = reader.string();
                    break;
                case 16:
                    message.ccGenericServices = reader.bool();
                    break;
                case 17:
                    message.javaGenericServices = reader.bool();
                    break;
                case 18:
                    message.pyGenericServices = reader.bool();
                    break;
                case 42:
                    message.phpGenericServices = reader.bool();
                    break;
                case 23:
                    message.deprecated = reader.bool();
                    break;
                case 31:
                    message.ccEnableArenas = reader.bool();
                    break;
                case 36:
                    message.objcClassPrefix = reader.string();
                    break;
                case 37:
                    message.csharpNamespace = reader.string();
                    break;
                case 39:
                    message.swiftPrefix = reader.string();
                    break;
                case 40:
                    message.phpClassPrefix = reader.string();
                    break;
                case 41:
                    message.phpNamespace = reader.string();
                    break;
                case 44:
                    message.phpMetadataNamespace = reader.string();
                    break;
                case 45:
                    message.rubyPackage = reader.string();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        var message = createBaseFileOptions();
        message.javaPackage = (_a = object.javaPackage) !== null && _a !== void 0 ? _a : "";
        message.javaOuterClassname = (_b = object.javaOuterClassname) !== null && _b !== void 0 ? _b : "";
        message.javaMultipleFiles = (_c = object.javaMultipleFiles) !== null && _c !== void 0 ? _c : false;
        message.javaGenerateEqualsAndHash = (_d = object.javaGenerateEqualsAndHash) !== null && _d !== void 0 ? _d : false;
        message.javaStringCheckUtf8 = (_e = object.javaStringCheckUtf8) !== null && _e !== void 0 ? _e : false;
        message.optimizeFor = (_f = object.optimizeFor) !== null && _f !== void 0 ? _f : 1;
        message.goPackage = (_g = object.goPackage) !== null && _g !== void 0 ? _g : "";
        message.ccGenericServices = (_h = object.ccGenericServices) !== null && _h !== void 0 ? _h : false;
        message.javaGenericServices = (_j = object.javaGenericServices) !== null && _j !== void 0 ? _j : false;
        message.pyGenericServices = (_k = object.pyGenericServices) !== null && _k !== void 0 ? _k : false;
        message.phpGenericServices = (_l = object.phpGenericServices) !== null && _l !== void 0 ? _l : false;
        message.deprecated = (_m = object.deprecated) !== null && _m !== void 0 ? _m : false;
        message.ccEnableArenas = (_o = object.ccEnableArenas) !== null && _o !== void 0 ? _o : false;
        message.objcClassPrefix = (_p = object.objcClassPrefix) !== null && _p !== void 0 ? _p : "";
        message.csharpNamespace = (_q = object.csharpNamespace) !== null && _q !== void 0 ? _q : "";
        message.swiftPrefix = (_r = object.swiftPrefix) !== null && _r !== void 0 ? _r : "";
        message.phpClassPrefix = (_s = object.phpClassPrefix) !== null && _s !== void 0 ? _s : "";
        message.phpNamespace = (_t = object.phpNamespace) !== null && _t !== void 0 ? _t : "";
        message.phpMetadataNamespace = (_u = object.phpMetadataNamespace) !== null && _u !== void 0 ? _u : "";
        message.rubyPackage = (_v = object.rubyPackage) !== null && _v !== void 0 ? _v : "";
        message.uninterpretedOption = ((_w = object.uninterpretedOption) === null || _w === void 0 ? void 0 : _w.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseFileOptions();
        if (object.java_package !== undefined && object.java_package !== null) {
            message.javaPackage = object.java_package;
        }
        if (object.java_outer_classname !== undefined && object.java_outer_classname !== null) {
            message.javaOuterClassname = object.java_outer_classname;
        }
        if (object.java_multiple_files !== undefined && object.java_multiple_files !== null) {
            message.javaMultipleFiles = object.java_multiple_files;
        }
        if (object.java_generate_equals_and_hash !== undefined && object.java_generate_equals_and_hash !== null) {
            message.javaGenerateEqualsAndHash = object.java_generate_equals_and_hash;
        }
        if (object.java_string_check_utf8 !== undefined && object.java_string_check_utf8 !== null) {
            message.javaStringCheckUtf8 = object.java_string_check_utf8;
        }
        if (object.optimize_for !== undefined && object.optimize_for !== null) {
            message.optimizeFor = object.optimize_for;
        }
        if (object.go_package !== undefined && object.go_package !== null) {
            message.goPackage = object.go_package;
        }
        if (object.cc_generic_services !== undefined && object.cc_generic_services !== null) {
            message.ccGenericServices = object.cc_generic_services;
        }
        if (object.java_generic_services !== undefined && object.java_generic_services !== null) {
            message.javaGenericServices = object.java_generic_services;
        }
        if (object.py_generic_services !== undefined && object.py_generic_services !== null) {
            message.pyGenericServices = object.py_generic_services;
        }
        if (object.php_generic_services !== undefined && object.php_generic_services !== null) {
            message.phpGenericServices = object.php_generic_services;
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        if (object.cc_enable_arenas !== undefined && object.cc_enable_arenas !== null) {
            message.ccEnableArenas = object.cc_enable_arenas;
        }
        if (object.objc_class_prefix !== undefined && object.objc_class_prefix !== null) {
            message.objcClassPrefix = object.objc_class_prefix;
        }
        if (object.csharp_namespace !== undefined && object.csharp_namespace !== null) {
            message.csharpNamespace = object.csharp_namespace;
        }
        if (object.swift_prefix !== undefined && object.swift_prefix !== null) {
            message.swiftPrefix = object.swift_prefix;
        }
        if (object.php_class_prefix !== undefined && object.php_class_prefix !== null) {
            message.phpClassPrefix = object.php_class_prefix;
        }
        if (object.php_namespace !== undefined && object.php_namespace !== null) {
            message.phpNamespace = object.php_namespace;
        }
        if (object.php_metadata_namespace !== undefined && object.php_metadata_namespace !== null) {
            message.phpMetadataNamespace = object.php_metadata_namespace;
        }
        if (object.ruby_package !== undefined && object.ruby_package !== null) {
            message.rubyPackage = object.ruby_package;
        }
        message.uninterpretedOption = ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.java_package = message.javaPackage === "" ? undefined : message.javaPackage;
        obj.java_outer_classname = message.javaOuterClassname === "" ? undefined : message.javaOuterClassname;
        obj.java_multiple_files = message.javaMultipleFiles === false ? undefined : message.javaMultipleFiles;
        obj.java_generate_equals_and_hash = message.javaGenerateEqualsAndHash === false ? undefined : message.javaGenerateEqualsAndHash;
        obj.java_string_check_utf8 = message.javaStringCheckUtf8 === false ? undefined : message.javaStringCheckUtf8;
        obj.optimize_for = message.optimizeFor === 1 ? undefined : message.optimizeFor;
        obj.go_package = message.goPackage === "" ? undefined : message.goPackage;
        obj.cc_generic_services = message.ccGenericServices === false ? undefined : message.ccGenericServices;
        obj.java_generic_services = message.javaGenericServices === false ? undefined : message.javaGenericServices;
        obj.py_generic_services = message.pyGenericServices === false ? undefined : message.pyGenericServices;
        obj.php_generic_services = message.phpGenericServices === false ? undefined : message.phpGenericServices;
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        obj.cc_enable_arenas = message.ccEnableArenas === false ? undefined : message.ccEnableArenas;
        obj.objc_class_prefix = message.objcClassPrefix === "" ? undefined : message.objcClassPrefix;
        obj.csharp_namespace = message.csharpNamespace === "" ? undefined : message.csharpNamespace;
        obj.swift_prefix = message.swiftPrefix === "" ? undefined : message.swiftPrefix;
        obj.php_class_prefix = message.phpClassPrefix === "" ? undefined : message.phpClassPrefix;
        obj.php_namespace = message.phpNamespace === "" ? undefined : message.phpNamespace;
        obj.php_metadata_namespace = message.phpMetadataNamespace === "" ? undefined : message.phpMetadataNamespace;
        obj.ruby_package = message.rubyPackage === "" ? undefined : message.rubyPackage;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(function (e) { return e ? exports.UninterpretedOption.toAmino(e) : undefined; });
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FileOptions.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.FileOptions.decode(message.value);
    },
    toProto: function (message) {
        return exports.FileOptions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.FileOptions",
            value: exports.FileOptions.encode(message).finish()
        };
    }
};
function createBaseMessageOptions() {
    return {
        messageSetWireFormat: false,
        noStandardDescriptorAccessor: false,
        deprecated: false,
        mapEntry: false,
        uninterpretedOption: []
    };
}
exports.MessageOptions = {
    typeUrl: "/google.protobuf.MessageOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.messageSetWireFormat === true) {
            writer.uint32(8).bool(message.messageSetWireFormat);
        }
        if (message.noStandardDescriptorAccessor === true) {
            writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.mapEntry === true) {
            writer.uint32(56).bool(message.mapEntry);
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMessageOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageSetWireFormat = reader.bool();
                    break;
                case 2:
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 7:
                    message.mapEntry = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMessageOptions();
        message.messageSetWireFormat = (_a = object.messageSetWireFormat) !== null && _a !== void 0 ? _a : false;
        message.noStandardDescriptorAccessor = (_b = object.noStandardDescriptorAccessor) !== null && _b !== void 0 ? _b : false;
        message.deprecated = (_c = object.deprecated) !== null && _c !== void 0 ? _c : false;
        message.mapEntry = (_d = object.mapEntry) !== null && _d !== void 0 ? _d : false;
        message.uninterpretedOption = ((_e = object.uninterpretedOption) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMessageOptions();
        if (object.message_set_wire_format !== undefined && object.message_set_wire_format !== null) {
            message.messageSetWireFormat = object.message_set_wire_format;
        }
        if (object.no_standard_descriptor_accessor !== undefined && object.no_standard_descriptor_accessor !== null) {
            message.noStandardDescriptorAccessor = object.no_standard_descriptor_accessor;
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        if (object.map_entry !== undefined && object.map_entry !== null) {
            message.mapEntry = object.map_entry;
        }
        message.uninterpretedOption = ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.message_set_wire_format = message.messageSetWireFormat === false ? undefined : message.messageSetWireFormat;
        obj.no_standard_descriptor_accessor = message.noStandardDescriptorAccessor === false ? undefined : message.noStandardDescriptorAccessor;
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        obj.map_entry = message.mapEntry === false ? undefined : message.mapEntry;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(function (e) { return e ? exports.UninterpretedOption.toAmino(e) : undefined; });
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MessageOptions.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MessageOptions.decode(message.value);
    },
    toProto: function (message) {
        return exports.MessageOptions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.MessageOptions",
            value: exports.MessageOptions.encode(message).finish()
        };
    }
};
function createBaseFieldOptions() {
    return {
        ctype: 1,
        packed: false,
        jstype: 1,
        lazy: false,
        deprecated: false,
        weak: false,
        uninterpretedOption: []
    };
}
exports.FieldOptions = {
    typeUrl: "/google.protobuf.FieldOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.ctype !== 1) {
            writer.uint32(8).int32(message.ctype);
        }
        if (message.packed === true) {
            writer.uint32(16).bool(message.packed);
        }
        if (message.jstype !== 1) {
            writer.uint32(48).int32(message.jstype);
        }
        if (message.lazy === true) {
            writer.uint32(40).bool(message.lazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFieldOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctype = reader.int32();
                    break;
                case 2:
                    message.packed = reader.bool();
                    break;
                case 6:
                    message.jstype = reader.int32();
                    break;
                case 5:
                    message.lazy = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 10:
                    message.weak = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseFieldOptions();
        message.ctype = (_a = object.ctype) !== null && _a !== void 0 ? _a : 1;
        message.packed = (_b = object.packed) !== null && _b !== void 0 ? _b : false;
        message.jstype = (_c = object.jstype) !== null && _c !== void 0 ? _c : 1;
        message.lazy = (_d = object.lazy) !== null && _d !== void 0 ? _d : false;
        message.deprecated = (_e = object.deprecated) !== null && _e !== void 0 ? _e : false;
        message.weak = (_f = object.weak) !== null && _f !== void 0 ? _f : false;
        message.uninterpretedOption = ((_g = object.uninterpretedOption) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseFieldOptions();
        if (object.ctype !== undefined && object.ctype !== null) {
            message.ctype = object.ctype;
        }
        if (object.packed !== undefined && object.packed !== null) {
            message.packed = object.packed;
        }
        if (object.jstype !== undefined && object.jstype !== null) {
            message.jstype = object.jstype;
        }
        if (object.lazy !== undefined && object.lazy !== null) {
            message.lazy = object.lazy;
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        if (object.weak !== undefined && object.weak !== null) {
            message.weak = object.weak;
        }
        message.uninterpretedOption = ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.ctype = message.ctype === 1 ? undefined : message.ctype;
        obj.packed = message.packed === false ? undefined : message.packed;
        obj.jstype = message.jstype === 1 ? undefined : message.jstype;
        obj.lazy = message.lazy === false ? undefined : message.lazy;
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        obj.weak = message.weak === false ? undefined : message.weak;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(function (e) { return e ? exports.UninterpretedOption.toAmino(e) : undefined; });
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FieldOptions.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.FieldOptions.decode(message.value);
    },
    toProto: function (message) {
        return exports.FieldOptions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.FieldOptions",
            value: exports.FieldOptions.encode(message).finish()
        };
    }
};
function createBaseOneofOptions() {
    return {
        uninterpretedOption: []
    };
}
exports.OneofOptions = {
    typeUrl: "/google.protobuf.OneofOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOneofOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        var message = createBaseOneofOptions();
        message.uninterpretedOption = ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseOneofOptions();
        message.uninterpretedOption = ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(function (e) { return e ? exports.UninterpretedOption.toAmino(e) : undefined; });
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.OneofOptions.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.OneofOptions.decode(message.value);
    },
    toProto: function (message) {
        return exports.OneofOptions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.OneofOptions",
            value: exports.OneofOptions.encode(message).finish()
        };
    }
};
function createBaseEnumOptions() {
    return {
        allowAlias: false,
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.EnumOptions = {
    typeUrl: "/google.protobuf.EnumOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.allowAlias === true) {
            writer.uint32(16).bool(message.allowAlias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.allowAlias = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        var message = createBaseEnumOptions();
        message.allowAlias = (_a = object.allowAlias) !== null && _a !== void 0 ? _a : false;
        message.deprecated = (_b = object.deprecated) !== null && _b !== void 0 ? _b : false;
        message.uninterpretedOption = ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseEnumOptions();
        if (object.allow_alias !== undefined && object.allow_alias !== null) {
            message.allowAlias = object.allow_alias;
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        message.uninterpretedOption = ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.allow_alias = message.allowAlias === false ? undefined : message.allowAlias;
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(function (e) { return e ? exports.UninterpretedOption.toAmino(e) : undefined; });
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EnumOptions.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EnumOptions.decode(message.value);
    },
    toProto: function (message) {
        return exports.EnumOptions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.EnumOptions",
            value: exports.EnumOptions.encode(message).finish()
        };
    }
};
function createBaseEnumValueOptions() {
    return {
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.EnumValueOptions = {
    typeUrl: "/google.protobuf.EnumValueOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumValueOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        var message = createBaseEnumValueOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.uninterpretedOption = ((_b = object.uninterpretedOption) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseEnumValueOptions();
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        message.uninterpretedOption = ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(function (e) { return e ? exports.UninterpretedOption.toAmino(e) : undefined; });
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.EnumValueOptions.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.EnumValueOptions.decode(message.value);
    },
    toProto: function (message) {
        return exports.EnumValueOptions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.EnumValueOptions",
            value: exports.EnumValueOptions.encode(message).finish()
        };
    }
};
function createBaseServiceOptions() {
    return {
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.ServiceOptions = {
    typeUrl: "/google.protobuf.ServiceOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseServiceOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        var message = createBaseServiceOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.uninterpretedOption = ((_b = object.uninterpretedOption) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseServiceOptions();
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        message.uninterpretedOption = ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(function (e) { return e ? exports.UninterpretedOption.toAmino(e) : undefined; });
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ServiceOptions.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ServiceOptions.decode(message.value);
    },
    toProto: function (message) {
        return exports.ServiceOptions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.ServiceOptions",
            value: exports.ServiceOptions.encode(message).finish()
        };
    }
};
function createBaseMethodOptions() {
    return {
        deprecated: false,
        idempotencyLevel: 1,
        uninterpretedOption: []
    };
}
exports.MethodOptions = {
    typeUrl: "/google.protobuf.MethodOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotencyLevel !== 1) {
            writer.uint32(272).int32(message.idempotencyLevel);
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMethodOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 34:
                    message.idempotencyLevel = reader.int32();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
        var message = createBaseMethodOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.idempotencyLevel = (_b = object.idempotencyLevel) !== null && _b !== void 0 ? _b : 1;
        message.uninterpretedOption = ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMethodOptions();
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        if (object.idempotency_level !== undefined && object.idempotency_level !== null) {
            message.idempotencyLevel = object.idempotency_level;
        }
        message.uninterpretedOption = ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        obj.idempotency_level = message.idempotencyLevel === 1 ? undefined : message.idempotencyLevel;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(function (e) { return e ? exports.UninterpretedOption.toAmino(e) : undefined; });
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MethodOptions.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MethodOptions.decode(message.value);
    },
    toProto: function (message) {
        return exports.MethodOptions.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.MethodOptions",
            value: exports.MethodOptions.encode(message).finish()
        };
    }
};
function createBaseUninterpretedOption() {
    return {
        name: [],
        identifierValue: "",
        positiveIntValue: BigInt(0),
        negativeIntValue: BigInt(0),
        doubleValue: 0,
        stringValue: new Uint8Array(),
        aggregateValue: ""
    };
}
exports.UninterpretedOption = {
    typeUrl: "/google.protobuf.UninterpretedOption",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.name; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.identifierValue !== "") {
            writer.uint32(26).string(message.identifierValue);
        }
        if (message.positiveIntValue !== BigInt(0)) {
            writer.uint32(32).uint64(message.positiveIntValue);
        }
        if (message.negativeIntValue !== BigInt(0)) {
            writer.uint32(40).int64(message.negativeIntValue);
        }
        if (message.doubleValue !== 0) {
            writer.uint32(49).double(message.doubleValue);
        }
        if (message.stringValue.length !== 0) {
            writer.uint32(58).bytes(message.stringValue);
        }
        if (message.aggregateValue !== "") {
            writer.uint32(66).string(message.aggregateValue);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUninterpretedOption();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.identifierValue = reader.string();
                    break;
                case 4:
                    message.positiveIntValue = reader.uint64();
                    break;
                case 5:
                    message.negativeIntValue = reader.int64();
                    break;
                case 6:
                    message.doubleValue = reader.double();
                    break;
                case 7:
                    message.stringValue = reader.bytes();
                    break;
                case 8:
                    message.aggregateValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseUninterpretedOption();
        message.name = ((_a = object.name) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption_NamePart.fromPartial(e); })) || [];
        message.identifierValue = (_b = object.identifierValue) !== null && _b !== void 0 ? _b : "";
        message.positiveIntValue = object.positiveIntValue !== undefined && object.positiveIntValue !== null ? BigInt(object.positiveIntValue.toString()) : BigInt(0);
        message.negativeIntValue = object.negativeIntValue !== undefined && object.negativeIntValue !== null ? BigInt(object.negativeIntValue.toString()) : BigInt(0);
        message.doubleValue = (_c = object.doubleValue) !== null && _c !== void 0 ? _c : 0;
        message.stringValue = (_d = object.stringValue) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.aggregateValue = (_e = object.aggregateValue) !== null && _e !== void 0 ? _e : "";
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseUninterpretedOption();
        message.name = ((_a = object.name) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption_NamePart.fromAmino(e); })) || [];
        if (object.identifier_value !== undefined && object.identifier_value !== null) {
            message.identifierValue = object.identifier_value;
        }
        if (object.positive_int_value !== undefined && object.positive_int_value !== null) {
            message.positiveIntValue = BigInt(object.positive_int_value);
        }
        if (object.negative_int_value !== undefined && object.negative_int_value !== null) {
            message.negativeIntValue = BigInt(object.negative_int_value);
        }
        if (object.double_value !== undefined && object.double_value !== null) {
            message.doubleValue = object.double_value;
        }
        if (object.string_value !== undefined && object.string_value !== null) {
            message.stringValue = (0, helpers_1.bytesFromBase64)(object.string_value);
        }
        if (object.aggregate_value !== undefined && object.aggregate_value !== null) {
            message.aggregateValue = object.aggregate_value;
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        if (message.name) {
            obj.name = message.name.map(function (e) { return e ? exports.UninterpretedOption_NamePart.toAmino(e) : undefined; });
        }
        else {
            obj.name = message.name;
        }
        obj.identifier_value = message.identifierValue === "" ? undefined : message.identifierValue;
        obj.positive_int_value = message.positiveIntValue !== BigInt(0) ? ((_a = message.positiveIntValue) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.negative_int_value = message.negativeIntValue !== BigInt(0) ? ((_b = message.negativeIntValue) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        obj.double_value = message.doubleValue === 0 ? undefined : message.doubleValue;
        obj.string_value = message.stringValue ? (0, helpers_1.base64FromBytes)(message.stringValue) : undefined;
        obj.aggregate_value = message.aggregateValue === "" ? undefined : message.aggregateValue;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.UninterpretedOption.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.UninterpretedOption.decode(message.value);
    },
    toProto: function (message) {
        return exports.UninterpretedOption.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.UninterpretedOption",
            value: exports.UninterpretedOption.encode(message).finish()
        };
    }
};
function createBaseUninterpretedOption_NamePart() {
    return {
        namePart: "",
        isExtension: false
    };
}
exports.UninterpretedOption_NamePart = {
    typeUrl: "/google.protobuf.NamePart",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.namePart !== "") {
            writer.uint32(10).string(message.namePart);
        }
        if (message.isExtension === true) {
            writer.uint32(16).bool(message.isExtension);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUninterpretedOption_NamePart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.namePart = reader.string();
                    break;
                case 2:
                    message.isExtension = reader.bool();
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
        var message = createBaseUninterpretedOption_NamePart();
        message.namePart = (_a = object.namePart) !== null && _a !== void 0 ? _a : "";
        message.isExtension = (_b = object.isExtension) !== null && _b !== void 0 ? _b : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseUninterpretedOption_NamePart();
        if (object.name_part !== undefined && object.name_part !== null) {
            message.namePart = object.name_part;
        }
        if (object.is_extension !== undefined && object.is_extension !== null) {
            message.isExtension = object.is_extension;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name_part = message.namePart === "" ? undefined : message.namePart;
        obj.is_extension = message.isExtension === false ? undefined : message.isExtension;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.UninterpretedOption_NamePart.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.UninterpretedOption_NamePart.decode(message.value);
    },
    toProto: function (message) {
        return exports.UninterpretedOption_NamePart.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.NamePart",
            value: exports.UninterpretedOption_NamePart.encode(message).finish()
        };
    }
};
function createBaseSourceCodeInfo() {
    return {
        location: []
    };
}
exports.SourceCodeInfo = {
    typeUrl: "/google.protobuf.SourceCodeInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.location; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSourceCodeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
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
        var message = createBaseSourceCodeInfo();
        message.location = ((_a = object.location) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SourceCodeInfo_Location.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseSourceCodeInfo();
        message.location = ((_a = object.location) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SourceCodeInfo_Location.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.location) {
            obj.location = message.location.map(function (e) { return e ? exports.SourceCodeInfo_Location.toAmino(e) : undefined; });
        }
        else {
            obj.location = message.location;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SourceCodeInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SourceCodeInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.SourceCodeInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.SourceCodeInfo",
            value: exports.SourceCodeInfo.encode(message).finish()
        };
    }
};
function createBaseSourceCodeInfo_Location() {
    return {
        path: [],
        span: [],
        leadingComments: "",
        trailingComments: "",
        leadingDetachedComments: []
    };
}
exports.SourceCodeInfo_Location = {
    typeUrl: "/google.protobuf.Location",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.path; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (var _b = 0, _c = message.span; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.int32(v);
        }
        writer.ldelim();
        if (message.leadingComments !== "") {
            writer.uint32(26).string(message.leadingComments);
        }
        if (message.trailingComments !== "") {
            writer.uint32(34).string(message.trailingComments);
        }
        for (var _d = 0, _e = message.leadingDetachedComments; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSourceCodeInfo_Location();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                    }
                    else {
                        message.span.push(reader.int32());
                    }
                    break;
                case 3:
                    message.leadingComments = reader.string();
                    break;
                case 4:
                    message.trailingComments = reader.string();
                    break;
                case 6:
                    message.leadingDetachedComments.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSourceCodeInfo_Location();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.span = ((_b = object.span) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.leadingComments = (_c = object.leadingComments) !== null && _c !== void 0 ? _c : "";
        message.trailingComments = (_d = object.trailingComments) !== null && _d !== void 0 ? _d : "";
        message.leadingDetachedComments = ((_e = object.leadingDetachedComments) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c;
        var message = createBaseSourceCodeInfo_Location();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.span = ((_b = object.span) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        if (object.leading_comments !== undefined && object.leading_comments !== null) {
            message.leadingComments = object.leading_comments;
        }
        if (object.trailing_comments !== undefined && object.trailing_comments !== null) {
            message.trailingComments = object.trailing_comments;
        }
        message.leadingDetachedComments = ((_c = object.leading_detached_comments) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.path) {
            obj.path = message.path.map(function (e) { return e; });
        }
        else {
            obj.path = message.path;
        }
        if (message.span) {
            obj.span = message.span.map(function (e) { return e; });
        }
        else {
            obj.span = message.span;
        }
        obj.leading_comments = message.leadingComments === "" ? undefined : message.leadingComments;
        obj.trailing_comments = message.trailingComments === "" ? undefined : message.trailingComments;
        if (message.leadingDetachedComments) {
            obj.leading_detached_comments = message.leadingDetachedComments.map(function (e) { return e; });
        }
        else {
            obj.leading_detached_comments = message.leadingDetachedComments;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SourceCodeInfo_Location.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SourceCodeInfo_Location.decode(message.value);
    },
    toProto: function (message) {
        return exports.SourceCodeInfo_Location.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.Location",
            value: exports.SourceCodeInfo_Location.encode(message).finish()
        };
    }
};
function createBaseGeneratedCodeInfo() {
    return {
        annotation: []
    };
}
exports.GeneratedCodeInfo = {
    typeUrl: "/google.protobuf.GeneratedCodeInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.annotation; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGeneratedCodeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
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
        var message = createBaseGeneratedCodeInfo();
        message.annotation = ((_a = object.annotation) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GeneratedCodeInfo_Annotation.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGeneratedCodeInfo();
        message.annotation = ((_a = object.annotation) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GeneratedCodeInfo_Annotation.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.annotation) {
            obj.annotation = message.annotation.map(function (e) { return e ? exports.GeneratedCodeInfo_Annotation.toAmino(e) : undefined; });
        }
        else {
            obj.annotation = message.annotation;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GeneratedCodeInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.GeneratedCodeInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.GeneratedCodeInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.GeneratedCodeInfo",
            value: exports.GeneratedCodeInfo.encode(message).finish()
        };
    }
};
function createBaseGeneratedCodeInfo_Annotation() {
    return {
        path: [],
        sourceFile: "",
        begin: 0,
        end: 0
    };
}
exports.GeneratedCodeInfo_Annotation = {
    typeUrl: "/google.protobuf.Annotation",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.path; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.int32(v);
        }
        writer.ldelim();
        if (message.sourceFile !== "") {
            writer.uint32(18).string(message.sourceFile);
        }
        if (message.begin !== 0) {
            writer.uint32(24).int32(message.begin);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGeneratedCodeInfo_Annotation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    message.sourceFile = reader.string();
                    break;
                case 3:
                    message.begin = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
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
        var message = createBaseGeneratedCodeInfo_Annotation();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.sourceFile = (_b = object.sourceFile) !== null && _b !== void 0 ? _b : "";
        message.begin = (_c = object.begin) !== null && _c !== void 0 ? _c : 0;
        message.end = (_d = object.end) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGeneratedCodeInfo_Annotation();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        if (object.source_file !== undefined && object.source_file !== null) {
            message.sourceFile = object.source_file;
        }
        if (object.begin !== undefined && object.begin !== null) {
            message.begin = object.begin;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.path) {
            obj.path = message.path.map(function (e) { return e; });
        }
        else {
            obj.path = message.path;
        }
        obj.source_file = message.sourceFile === "" ? undefined : message.sourceFile;
        obj.begin = message.begin === 0 ? undefined : message.begin;
        obj.end = message.end === 0 ? undefined : message.end;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GeneratedCodeInfo_Annotation.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.GeneratedCodeInfo_Annotation.decode(message.value);
    },
    toProto: function (message) {
        return exports.GeneratedCodeInfo_Annotation.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/google.protobuf.Annotation",
            value: exports.GeneratedCodeInfo_Annotation.encode(message).finish()
        };
    }
};
