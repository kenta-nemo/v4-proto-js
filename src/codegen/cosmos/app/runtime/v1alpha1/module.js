"use strict";
exports.__esModule = true;
exports.StoreKeyConfig = exports.Module = void 0;
var binary_1 = require("../../../../binary");
function createBaseModule() {
    return {
        appName: "",
        beginBlockers: [],
        endBlockers: [],
        initGenesis: [],
        exportGenesis: [],
        overrideStoreKeys: [],
        orderMigrations: [],
        precommiters: [],
        prepareCheckStaters: []
    };
}
exports.Module = {
    typeUrl: "/cosmos.app.runtime.v1alpha1.Module",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.appName !== "") {
            writer.uint32(10).string(message.appName);
        }
        for (var _i = 0, _a = message.beginBlockers; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        for (var _b = 0, _c = message.endBlockers; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(26).string(v);
        }
        for (var _d = 0, _e = message.initGenesis; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(34).string(v);
        }
        for (var _f = 0, _g = message.exportGenesis; _f < _g.length; _f++) {
            var v = _g[_f];
            writer.uint32(42).string(v);
        }
        for (var _h = 0, _j = message.overrideStoreKeys; _h < _j.length; _h++) {
            var v = _j[_h];
            exports.StoreKeyConfig.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _k = 0, _l = message.orderMigrations; _k < _l.length; _k++) {
            var v = _l[_k];
            writer.uint32(58).string(v);
        }
        for (var _m = 0, _o = message.precommiters; _m < _o.length; _m++) {
            var v = _o[_m];
            writer.uint32(66).string(v);
        }
        for (var _p = 0, _q = message.prepareCheckStaters; _p < _q.length; _p++) {
            var v = _q[_p];
            writer.uint32(74).string(v);
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
                    message.appName = reader.string();
                    break;
                case 2:
                    message.beginBlockers.push(reader.string());
                    break;
                case 3:
                    message.endBlockers.push(reader.string());
                    break;
                case 4:
                    message.initGenesis.push(reader.string());
                    break;
                case 5:
                    message.exportGenesis.push(reader.string());
                    break;
                case 6:
                    message.overrideStoreKeys.push(exports.StoreKeyConfig.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.orderMigrations.push(reader.string());
                    break;
                case 8:
                    message.precommiters.push(reader.string());
                    break;
                case 9:
                    message.prepareCheckStaters.push(reader.string());
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
        var message = createBaseModule();
        message.appName = (_a = object.appName) !== null && _a !== void 0 ? _a : "";
        message.beginBlockers = ((_b = object.beginBlockers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.endBlockers = ((_c = object.endBlockers) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.initGenesis = ((_d = object.initGenesis) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.exportGenesis = ((_e = object.exportGenesis) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        message.overrideStoreKeys = ((_f = object.overrideStoreKeys) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.StoreKeyConfig.fromPartial(e); })) || [];
        message.orderMigrations = ((_g = object.orderMigrations) === null || _g === void 0 ? void 0 : _g.map(function (e) { return e; })) || [];
        message.precommiters = ((_h = object.precommiters) === null || _h === void 0 ? void 0 : _h.map(function (e) { return e; })) || [];
        message.prepareCheckStaters = ((_j = object.prepareCheckStaters) === null || _j === void 0 ? void 0 : _j.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseModule();
        if (object.app_name !== undefined && object.app_name !== null) {
            message.appName = object.app_name;
        }
        message.beginBlockers = ((_a = object.begin_blockers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.endBlockers = ((_b = object.end_blockers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.initGenesis = ((_c = object.init_genesis) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.exportGenesis = ((_d = object.export_genesis) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.overrideStoreKeys = ((_e = object.override_store_keys) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.StoreKeyConfig.fromAmino(e); })) || [];
        message.orderMigrations = ((_f = object.order_migrations) === null || _f === void 0 ? void 0 : _f.map(function (e) { return e; })) || [];
        message.precommiters = ((_g = object.precommiters) === null || _g === void 0 ? void 0 : _g.map(function (e) { return e; })) || [];
        message.prepareCheckStaters = ((_h = object.prepare_check_staters) === null || _h === void 0 ? void 0 : _h.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.app_name = message.appName === "" ? undefined : message.appName;
        if (message.beginBlockers) {
            obj.begin_blockers = message.beginBlockers.map(function (e) { return e; });
        }
        else {
            obj.begin_blockers = message.beginBlockers;
        }
        if (message.endBlockers) {
            obj.end_blockers = message.endBlockers.map(function (e) { return e; });
        }
        else {
            obj.end_blockers = message.endBlockers;
        }
        if (message.initGenesis) {
            obj.init_genesis = message.initGenesis.map(function (e) { return e; });
        }
        else {
            obj.init_genesis = message.initGenesis;
        }
        if (message.exportGenesis) {
            obj.export_genesis = message.exportGenesis.map(function (e) { return e; });
        }
        else {
            obj.export_genesis = message.exportGenesis;
        }
        if (message.overrideStoreKeys) {
            obj.override_store_keys = message.overrideStoreKeys.map(function (e) { return e ? exports.StoreKeyConfig.toAmino(e) : undefined; });
        }
        else {
            obj.override_store_keys = message.overrideStoreKeys;
        }
        if (message.orderMigrations) {
            obj.order_migrations = message.orderMigrations.map(function (e) { return e; });
        }
        else {
            obj.order_migrations = message.orderMigrations;
        }
        if (message.precommiters) {
            obj.precommiters = message.precommiters.map(function (e) { return e; });
        }
        else {
            obj.precommiters = message.precommiters;
        }
        if (message.prepareCheckStaters) {
            obj.prepare_check_staters = message.prepareCheckStaters.map(function (e) { return e; });
        }
        else {
            obj.prepare_check_staters = message.prepareCheckStaters;
        }
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
            typeUrl: "/cosmos.app.runtime.v1alpha1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
function createBaseStoreKeyConfig() {
    return {
        moduleName: "",
        kvStoreKey: ""
    };
}
exports.StoreKeyConfig = {
    typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        if (message.kvStoreKey !== "") {
            writer.uint32(18).string(message.kvStoreKey);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStoreKeyConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleName = reader.string();
                    break;
                case 2:
                    message.kvStoreKey = reader.string();
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
        var message = createBaseStoreKeyConfig();
        message.moduleName = (_a = object.moduleName) !== null && _a !== void 0 ? _a : "";
        message.kvStoreKey = (_b = object.kvStoreKey) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseStoreKeyConfig();
        if (object.module_name !== undefined && object.module_name !== null) {
            message.moduleName = object.module_name;
        }
        if (object.kv_store_key !== undefined && object.kv_store_key !== null) {
            message.kvStoreKey = object.kv_store_key;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.module_name = message.moduleName === "" ? undefined : message.moduleName;
        obj.kv_store_key = message.kvStoreKey === "" ? undefined : message.kvStoreKey;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StoreKeyConfig.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/StoreKeyConfig",
            value: exports.StoreKeyConfig.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.StoreKeyConfig.decode(message.value);
    },
    toProto: function (message) {
        return exports.StoreKeyConfig.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig",
            value: exports.StoreKeyConfig.encode(message).finish()
        };
    }
};
