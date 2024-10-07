"use strict";
exports.__esModule = true;
exports.SingletonDescriptor = exports.SecondaryIndexDescriptor = exports.PrimaryKeyDescriptor = exports.TableDescriptor = void 0;
var binary_1 = require("../../../binary");
function createBaseTableDescriptor() {
    return {
        primaryKey: undefined,
        index: [],
        id: 0
    };
}
exports.TableDescriptor = {
    typeUrl: "/cosmos.orm.v1.TableDescriptor",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.primaryKey !== undefined) {
            exports.PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.index; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== 0) {
            writer.uint32(24).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTableDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.primaryKey = exports.PrimaryKeyDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.index.push(exports.SecondaryIndexDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.id = reader.uint32();
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
        var message = createBaseTableDescriptor();
        message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? exports.PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
        message.index = ((_a = object.index) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SecondaryIndexDescriptor.fromPartial(e); })) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseTableDescriptor();
        if (object.primary_key !== undefined && object.primary_key !== null) {
            message.primaryKey = exports.PrimaryKeyDescriptor.fromAmino(object.primary_key);
        }
        message.index = ((_a = object.index) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SecondaryIndexDescriptor.fromAmino(e); })) || [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.primary_key = message.primaryKey ? exports.PrimaryKeyDescriptor.toAmino(message.primaryKey) : undefined;
        if (message.index) {
            obj.index = message.index.map(function (e) { return e ? exports.SecondaryIndexDescriptor.toAmino(e) : undefined; });
        }
        else {
            obj.index = message.index;
        }
        obj.id = message.id === 0 ? undefined : message.id;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.TableDescriptor.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/TableDescriptor",
            value: exports.TableDescriptor.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.TableDescriptor.decode(message.value);
    },
    toProto: function (message) {
        return exports.TableDescriptor.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.v1.TableDescriptor",
            value: exports.TableDescriptor.encode(message).finish()
        };
    }
};
function createBasePrimaryKeyDescriptor() {
    return {
        fields: "",
        autoIncrement: false
    };
}
exports.PrimaryKeyDescriptor = {
    typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.autoIncrement === true) {
            writer.uint32(16).bool(message.autoIncrement);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePrimaryKeyDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.autoIncrement = reader.bool();
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
        var message = createBasePrimaryKeyDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.autoIncrement = (_b = object.autoIncrement) !== null && _b !== void 0 ? _b : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePrimaryKeyDescriptor();
        if (object.fields !== undefined && object.fields !== null) {
            message.fields = object.fields;
        }
        if (object.auto_increment !== undefined && object.auto_increment !== null) {
            message.autoIncrement = object.auto_increment;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.fields = message.fields === "" ? undefined : message.fields;
        obj.auto_increment = message.autoIncrement === false ? undefined : message.autoIncrement;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PrimaryKeyDescriptor.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/PrimaryKeyDescriptor",
            value: exports.PrimaryKeyDescriptor.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.PrimaryKeyDescriptor.decode(message.value);
    },
    toProto: function (message) {
        return exports.PrimaryKeyDescriptor.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
            value: exports.PrimaryKeyDescriptor.encode(message).finish()
        };
    }
};
function createBaseSecondaryIndexDescriptor() {
    return {
        fields: "",
        id: 0,
        unique: false
    };
}
exports.SecondaryIndexDescriptor = {
    typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint32(message.id);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSecondaryIndexDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                case 3:
                    message.unique = reader.bool();
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
        var message = createBaseSecondaryIndexDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        message.unique = (_c = object.unique) !== null && _c !== void 0 ? _c : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSecondaryIndexDescriptor();
        if (object.fields !== undefined && object.fields !== null) {
            message.fields = object.fields;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.unique !== undefined && object.unique !== null) {
            message.unique = object.unique;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.fields = message.fields === "" ? undefined : message.fields;
        obj.id = message.id === 0 ? undefined : message.id;
        obj.unique = message.unique === false ? undefined : message.unique;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SecondaryIndexDescriptor.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SecondaryIndexDescriptor",
            value: exports.SecondaryIndexDescriptor.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SecondaryIndexDescriptor.decode(message.value);
    },
    toProto: function (message) {
        return exports.SecondaryIndexDescriptor.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
            value: exports.SecondaryIndexDescriptor.encode(message).finish()
        };
    }
};
function createBaseSingletonDescriptor() {
    return {
        id: 0
    };
}
exports.SingletonDescriptor = {
    typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSingletonDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
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
        var message = createBaseSingletonDescriptor();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSingletonDescriptor();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SingletonDescriptor.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SingletonDescriptor",
            value: exports.SingletonDescriptor.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SingletonDescriptor.decode(message.value);
    },
    toProto: function (message) {
        return exports.SingletonDescriptor.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
            value: exports.SingletonDescriptor.encode(message).finish()
        };
    }
};
