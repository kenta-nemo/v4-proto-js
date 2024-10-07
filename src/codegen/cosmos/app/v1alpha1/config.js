"use strict";
exports.__esModule = true;
exports.GolangBinding = exports.ModuleConfig = exports.Config = void 0;
var any_1 = require("../../../google/protobuf/any");
var binary_1 = require("../../../binary");
function createBaseConfig() {
    return {
        modules: [],
        golangBindings: []
    };
}
exports.Config = {
    typeUrl: "/cosmos.app.v1alpha1.Config",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.modules; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.golangBindings; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.GolangBinding.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modules.push(exports.ModuleConfig.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.golangBindings.push(exports.GolangBinding.decode(reader, reader.uint32()));
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
        var message = createBaseConfig();
        message.modules = ((_a = object.modules) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModuleConfig.fromPartial(e); })) || [];
        message.golangBindings = ((_b = object.golangBindings) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.GolangBinding.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseConfig();
        message.modules = ((_a = object.modules) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModuleConfig.fromAmino(e); })) || [];
        message.golangBindings = ((_b = object.golang_bindings) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.GolangBinding.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.modules) {
            obj.modules = message.modules.map(function (e) { return e ? exports.ModuleConfig.toAmino(e) : undefined; });
        }
        else {
            obj.modules = message.modules;
        }
        if (message.golangBindings) {
            obj.golang_bindings = message.golangBindings.map(function (e) { return e ? exports.GolangBinding.toAmino(e) : undefined; });
        }
        else {
            obj.golang_bindings = message.golangBindings;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Config.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Config",
            value: exports.Config.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Config.decode(message.value);
    },
    toProto: function (message) {
        return exports.Config.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.Config",
            value: exports.Config.encode(message).finish()
        };
    }
};
function createBaseModuleConfig() {
    return {
        name: "",
        config: undefined,
        golangBindings: []
    };
}
exports.ModuleConfig = {
    typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.config !== undefined) {
            any_1.Any.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.golangBindings; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.GolangBinding.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.config = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.golangBindings.push(exports.GolangBinding.decode(reader, reader.uint32()));
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
        var message = createBaseModuleConfig();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.config = object.config !== undefined && object.config !== null ? any_1.Any.fromPartial(object.config) : undefined;
        message.golangBindings = ((_b = object.golangBindings) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.GolangBinding.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseModuleConfig();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = any_1.Any.fromAmino(object.config);
        }
        message.golangBindings = ((_a = object.golang_bindings) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GolangBinding.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.config = message.config ? any_1.Any.toAmino(message.config) : undefined;
        if (message.golangBindings) {
            obj.golang_bindings = message.golangBindings.map(function (e) { return e ? exports.GolangBinding.toAmino(e) : undefined; });
        }
        else {
            obj.golang_bindings = message.golangBindings;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ModuleConfig.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ModuleConfig",
            value: exports.ModuleConfig.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ModuleConfig.decode(message.value);
    },
    toProto: function (message) {
        return exports.ModuleConfig.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
            value: exports.ModuleConfig.encode(message).finish()
        };
    }
};
function createBaseGolangBinding() {
    return {
        interfaceType: "",
        implementation: ""
    };
}
exports.GolangBinding = {
    typeUrl: "/cosmos.app.v1alpha1.GolangBinding",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.interfaceType !== "") {
            writer.uint32(10).string(message.interfaceType);
        }
        if (message.implementation !== "") {
            writer.uint32(18).string(message.implementation);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGolangBinding();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceType = reader.string();
                    break;
                case 2:
                    message.implementation = reader.string();
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
        var message = createBaseGolangBinding();
        message.interfaceType = (_a = object.interfaceType) !== null && _a !== void 0 ? _a : "";
        message.implementation = (_b = object.implementation) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGolangBinding();
        if (object.interface_type !== undefined && object.interface_type !== null) {
            message.interfaceType = object.interface_type;
        }
        if (object.implementation !== undefined && object.implementation !== null) {
            message.implementation = object.implementation;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.interface_type = message.interfaceType === "" ? undefined : message.interfaceType;
        obj.implementation = message.implementation === "" ? undefined : message.implementation;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GolangBinding.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GolangBinding",
            value: exports.GolangBinding.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GolangBinding.decode(message.value);
    },
    toProto: function (message) {
        return exports.GolangBinding.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.GolangBinding",
            value: exports.GolangBinding.encode(message).finish()
        };
    }
};
