"use strict";
exports.__esModule = true;
exports.Subaccount = exports.SubaccountId = void 0;
var asset_position_1 = require("./asset_position");
var perpetual_position_1 = require("./perpetual_position");
var binary_1 = require("../../binary");
function createBaseSubaccountId() {
    return {
        owner: "",
        number: 0
    };
}
exports.SubaccountId = {
    typeUrl: "/nemo_network.subaccounts.SubaccountId",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.number !== 0) {
            writer.uint32(16).uint32(message.number);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubaccountId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.number = reader.uint32();
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
        var message = createBaseSubaccountId();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSubaccountId();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.number = message.number === 0 ? undefined : message.number;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SubaccountId.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SubaccountId.decode(message.value);
    },
    toProto: function (message) {
        return exports.SubaccountId.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.SubaccountId",
            value: exports.SubaccountId.encode(message).finish()
        };
    }
};
function createBaseSubaccount() {
    return {
        id: undefined,
        assetPositions: [],
        perpetualPositions: [],
        marginEnabled: false
    };
}
exports.Subaccount = {
    typeUrl: "/nemo_network.subaccounts.Subaccount",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== undefined) {
            exports.SubaccountId.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.assetPositions; _i < _a.length; _i++) {
            var v = _a[_i];
            asset_position_1.AssetPosition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.perpetualPositions; _b < _c.length; _b++) {
            var v = _c[_b];
            perpetual_position_1.PerpetualPosition.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.marginEnabled === true) {
            writer.uint32(32).bool(message.marginEnabled);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubaccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.assetPositions.push(asset_position_1.AssetPosition.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.perpetualPositions.push(perpetual_position_1.PerpetualPosition.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.marginEnabled = reader.bool();
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
        var message = createBaseSubaccount();
        message.id = object.id !== undefined && object.id !== null ? exports.SubaccountId.fromPartial(object.id) : undefined;
        message.assetPositions = ((_a = object.assetPositions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return asset_position_1.AssetPosition.fromPartial(e); })) || [];
        message.perpetualPositions = ((_b = object.perpetualPositions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return perpetual_position_1.PerpetualPosition.fromPartial(e); })) || [];
        message.marginEnabled = (_c = object.marginEnabled) !== null && _c !== void 0 ? _c : false;
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseSubaccount();
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.SubaccountId.fromAmino(object.id);
        }
        message.assetPositions = ((_a = object.asset_positions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return asset_position_1.AssetPosition.fromAmino(e); })) || [];
        message.perpetualPositions = ((_b = object.perpetual_positions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return perpetual_position_1.PerpetualPosition.fromAmino(e); })) || [];
        if (object.margin_enabled !== undefined && object.margin_enabled !== null) {
            message.marginEnabled = object.margin_enabled;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id ? exports.SubaccountId.toAmino(message.id) : undefined;
        if (message.assetPositions) {
            obj.asset_positions = message.assetPositions.map(function (e) { return e ? asset_position_1.AssetPosition.toAmino(e) : undefined; });
        }
        else {
            obj.asset_positions = message.assetPositions;
        }
        if (message.perpetualPositions) {
            obj.perpetual_positions = message.perpetualPositions.map(function (e) { return e ? perpetual_position_1.PerpetualPosition.toAmino(e) : undefined; });
        }
        else {
            obj.perpetual_positions = message.perpetualPositions;
        }
        obj.margin_enabled = message.marginEnabled === false ? undefined : message.marginEnabled;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Subaccount.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Subaccount.decode(message.value);
    },
    toProto: function (message) {
        return exports.Subaccount.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.Subaccount",
            value: exports.Subaccount.encode(message).finish()
        };
    }
};
