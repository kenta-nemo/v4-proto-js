"use strict";
exports.__esModule = true;
exports.SubaccountOpenPositionInfo = exports.SubaccountLiquidationInfo = exports.PerpetualLiquidationInfo = void 0;
var subaccount_1 = require("../subaccounts/subaccount");
var binary_1 = require("../../binary");
function createBasePerpetualLiquidationInfo() {
    return {
        subaccountId: subaccount_1.SubaccountId.fromPartial({}),
        perpetualId: 0
    };
}
exports.PerpetualLiquidationInfo = {
    typeUrl: "/nemo_network.clob.PerpetualLiquidationInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subaccountId !== undefined) {
            subaccount_1.SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.perpetualId !== 0) {
            writer.uint32(16).uint32(message.perpetualId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerpetualLiquidationInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.perpetualId = reader.uint32();
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
        var message = createBasePerpetualLiquidationInfo();
        message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? subaccount_1.SubaccountId.fromPartial(object.subaccountId) : undefined;
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePerpetualLiquidationInfo();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = subaccount_1.SubaccountId.fromAmino(object.subaccount_id);
        }
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subaccount_id = message.subaccountId ? subaccount_1.SubaccountId.toAmino(message.subaccountId) : undefined;
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PerpetualLiquidationInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PerpetualLiquidationInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.PerpetualLiquidationInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.PerpetualLiquidationInfo",
            value: exports.PerpetualLiquidationInfo.encode(message).finish()
        };
    }
};
function createBaseSubaccountLiquidationInfo() {
    return {
        perpetualsLiquidated: [],
        notionalLiquidated: BigInt(0),
        quantumsInsuranceLost: BigInt(0)
    };
}
exports.SubaccountLiquidationInfo = {
    typeUrl: "/nemo_network.clob.SubaccountLiquidationInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.perpetualsLiquidated; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(v);
        }
        writer.ldelim();
        if (message.notionalLiquidated !== BigInt(0)) {
            writer.uint32(16).uint64(message.notionalLiquidated);
        }
        if (message.quantumsInsuranceLost !== BigInt(0)) {
            writer.uint32(24).uint64(message.quantumsInsuranceLost);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubaccountLiquidationInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.perpetualsLiquidated.push(reader.uint32());
                        }
                    }
                    else {
                        message.perpetualsLiquidated.push(reader.uint32());
                    }
                    break;
                case 2:
                    message.notionalLiquidated = reader.uint64();
                    break;
                case 3:
                    message.quantumsInsuranceLost = reader.uint64();
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
        var message = createBaseSubaccountLiquidationInfo();
        message.perpetualsLiquidated = ((_a = object.perpetualsLiquidated) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.notionalLiquidated = object.notionalLiquidated !== undefined && object.notionalLiquidated !== null ? BigInt(object.notionalLiquidated.toString()) : BigInt(0);
        message.quantumsInsuranceLost = object.quantumsInsuranceLost !== undefined && object.quantumsInsuranceLost !== null ? BigInt(object.quantumsInsuranceLost.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseSubaccountLiquidationInfo();
        message.perpetualsLiquidated = ((_a = object.perpetuals_liquidated) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        if (object.notional_liquidated !== undefined && object.notional_liquidated !== null) {
            message.notionalLiquidated = BigInt(object.notional_liquidated);
        }
        if (object.quantums_insurance_lost !== undefined && object.quantums_insurance_lost !== null) {
            message.quantumsInsuranceLost = BigInt(object.quantums_insurance_lost);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        if (message.perpetualsLiquidated) {
            obj.perpetuals_liquidated = message.perpetualsLiquidated.map(function (e) { return e; });
        }
        else {
            obj.perpetuals_liquidated = message.perpetualsLiquidated;
        }
        obj.notional_liquidated = message.notionalLiquidated !== BigInt(0) ? ((_a = message.notionalLiquidated) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.quantums_insurance_lost = message.quantumsInsuranceLost !== BigInt(0) ? ((_b = message.quantumsInsuranceLost) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SubaccountLiquidationInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SubaccountLiquidationInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.SubaccountLiquidationInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.SubaccountLiquidationInfo",
            value: exports.SubaccountLiquidationInfo.encode(message).finish()
        };
    }
};
function createBaseSubaccountOpenPositionInfo() {
    return {
        perpetualId: 0,
        subaccountsWithLongPosition: [],
        subaccountsWithShortPosition: []
    };
}
exports.SubaccountOpenPositionInfo = {
    typeUrl: "/nemo_network.clob.SubaccountOpenPositionInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        for (var _i = 0, _a = message.subaccountsWithLongPosition; _i < _a.length; _i++) {
            var v = _a[_i];
            subaccount_1.SubaccountId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.subaccountsWithShortPosition; _b < _c.length; _b++) {
            var v = _c[_b];
            subaccount_1.SubaccountId.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubaccountOpenPositionInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    message.subaccountsWithLongPosition.push(subaccount_1.SubaccountId.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.subaccountsWithShortPosition.push(subaccount_1.SubaccountId.decode(reader, reader.uint32()));
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
        var message = createBaseSubaccountOpenPositionInfo();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.subaccountsWithLongPosition = ((_b = object.subaccountsWithLongPosition) === null || _b === void 0 ? void 0 : _b.map(function (e) { return subaccount_1.SubaccountId.fromPartial(e); })) || [];
        message.subaccountsWithShortPosition = ((_c = object.subaccountsWithShortPosition) === null || _c === void 0 ? void 0 : _c.map(function (e) { return subaccount_1.SubaccountId.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseSubaccountOpenPositionInfo();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        message.subaccountsWithLongPosition = ((_a = object.subaccounts_with_long_position) === null || _a === void 0 ? void 0 : _a.map(function (e) { return subaccount_1.SubaccountId.fromAmino(e); })) || [];
        message.subaccountsWithShortPosition = ((_b = object.subaccounts_with_short_position) === null || _b === void 0 ? void 0 : _b.map(function (e) { return subaccount_1.SubaccountId.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        if (message.subaccountsWithLongPosition) {
            obj.subaccounts_with_long_position = message.subaccountsWithLongPosition.map(function (e) { return e ? subaccount_1.SubaccountId.toAmino(e) : undefined; });
        }
        else {
            obj.subaccounts_with_long_position = message.subaccountsWithLongPosition;
        }
        if (message.subaccountsWithShortPosition) {
            obj.subaccounts_with_short_position = message.subaccountsWithShortPosition.map(function (e) { return e ? subaccount_1.SubaccountId.toAmino(e) : undefined; });
        }
        else {
            obj.subaccounts_with_short_position = message.subaccountsWithShortPosition;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SubaccountOpenPositionInfo.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SubaccountOpenPositionInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.SubaccountOpenPositionInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.SubaccountOpenPositionInfo",
            value: exports.SubaccountOpenPositionInfo.encode(message).finish()
        };
    }
};
