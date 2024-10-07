"use strict";
exports.__esModule = true;
exports.SubaccountAssetPosition = exports.SubaccountPerpetualPosition = exports.StreamSubaccountUpdate = void 0;
var subaccount_1 = require("./subaccount");
var binary_1 = require("../../binary");
function createBaseStreamSubaccountUpdate() {
    return {
        subaccountId: undefined,
        updatedPerpetualPositions: [],
        updatedAssetPositions: [],
        snapshot: false
    };
}
exports.StreamSubaccountUpdate = {
    typeUrl: "/nemo_network.subaccounts.StreamSubaccountUpdate",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.updatedPerpetualPositions; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SubaccountPerpetualPosition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.updatedAssetPositions; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.SubaccountAssetPosition.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.snapshot === true) {
            writer.uint32(32).bool(message.snapshot);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStreamSubaccountUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updatedPerpetualPositions.push(exports.SubaccountPerpetualPosition.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.updatedAssetPositions.push(exports.SubaccountAssetPosition.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.snapshot = reader.bool();
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
        var message = createBaseStreamSubaccountUpdate();
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.subaccountId) : undefined;
        message.updatedPerpetualPositions = ((_a = object.updatedPerpetualPositions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SubaccountPerpetualPosition.fromPartial(e); })) || [];
        message.updatedAssetPositions = ((_b = object.updatedAssetPositions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.SubaccountAssetPosition.fromPartial(e); })) || [];
        message.snapshot = (_c = object.snapshot) !== null && _c !== void 0 ? _c : false;
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseStreamSubaccountUpdate();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.SubaccountId.fromAmino(object.subaccount_id);
        }
        message.updatedPerpetualPositions = ((_a = object.updated_perpetual_positions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SubaccountPerpetualPosition.fromAmino(e); })) || [];
        message.updatedAssetPositions = ((_b = object.updated_asset_positions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.SubaccountAssetPosition.fromAmino(e); })) || [];
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = object.snapshot;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subaccount_id = message.subaccountId ? subaccount_1.SubaccountId.toAmino(message.subaccountId) : undefined;
        if (message.updatedPerpetualPositions) {
            obj.updated_perpetual_positions = message.updatedPerpetualPositions.map(function (e) { return e ? exports.SubaccountPerpetualPosition.toAmino(e) : undefined; });
        }
        else {
            obj.updated_perpetual_positions = message.updatedPerpetualPositions;
        }
        if (message.updatedAssetPositions) {
            obj.updated_asset_positions = message.updatedAssetPositions.map(function (e) { return e ? exports.SubaccountAssetPosition.toAmino(e) : undefined; });
        }
        else {
            obj.updated_asset_positions = message.updatedAssetPositions;
        }
        obj.snapshot = message.snapshot === false ? undefined : message.snapshot;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.StreamSubaccountUpdate.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.StreamSubaccountUpdate.decode(message.value);
    },
    toProto: function (message) {
        return exports.StreamSubaccountUpdate.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.StreamSubaccountUpdate",
            value: exports.StreamSubaccountUpdate.encode(message).finish()
        };
    }
};
function createBaseSubaccountPerpetualPosition() {
    return {
        perpetualId: 0,
        quantums: BigInt(0)
    };
}
exports.SubaccountPerpetualPosition = {
    typeUrl: "/nemo_network.subaccounts.SubaccountPerpetualPosition",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        if (message.quantums !== BigInt(0)) {
            writer.uint32(16).uint64(message.quantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubaccountPerpetualPosition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    message.quantums = reader.uint64();
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
        var message = createBaseSubaccountPerpetualPosition();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.quantums = object.quantums !== undefined && object.quantums !== null ? BigInt(object.quantums.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSubaccountPerpetualPosition();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        if (object.quantums !== undefined && object.quantums !== null) {
            message.quantums = BigInt(object.quantums);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        obj.quantums = message.quantums !== BigInt(0) ? ((_a = message.quantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SubaccountPerpetualPosition.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SubaccountPerpetualPosition.decode(message.value);
    },
    toProto: function (message) {
        return exports.SubaccountPerpetualPosition.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.SubaccountPerpetualPosition",
            value: exports.SubaccountPerpetualPosition.encode(message).finish()
        };
    }
};
function createBaseSubaccountAssetPosition() {
    return {
        assetId: 0,
        quantums: BigInt(0)
    };
}
exports.SubaccountAssetPosition = {
    typeUrl: "/nemo_network.subaccounts.SubaccountAssetPosition",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.assetId !== 0) {
            writer.uint32(8).uint32(message.assetId);
        }
        if (message.quantums !== BigInt(0)) {
            writer.uint32(16).uint64(message.quantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubaccountAssetPosition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint32();
                    break;
                case 2:
                    message.quantums = reader.uint64();
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
        var message = createBaseSubaccountAssetPosition();
        message.assetId = (_a = object.assetId) !== null && _a !== void 0 ? _a : 0;
        message.quantums = object.quantums !== undefined && object.quantums !== null ? BigInt(object.quantums.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSubaccountAssetPosition();
        if (object.asset_id !== undefined && object.asset_id !== null) {
            message.assetId = object.asset_id;
        }
        if (object.quantums !== undefined && object.quantums !== null) {
            message.quantums = BigInt(object.quantums);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
        obj.quantums = message.quantums !== BigInt(0) ? ((_a = message.quantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SubaccountAssetPosition.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SubaccountAssetPosition.decode(message.value);
    },
    toProto: function (message) {
        return exports.SubaccountAssetPosition.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.SubaccountAssetPosition",
            value: exports.SubaccountAssetPosition.encode(message).finish()
        };
    }
};
