"use strict";
exports.__esModule = true;
exports.FillablePriceConfig = exports.SubaccountBlockLimits = exports.PositionBlockLimits = exports.LiquidationsConfig = void 0;
var binary_1 = require("../../binary");
function createBaseLiquidationsConfig() {
    return {
        maxLiquidationFeePpm: 0,
        positionBlockLimits: exports.PositionBlockLimits.fromPartial({}),
        subaccountBlockLimits: exports.SubaccountBlockLimits.fromPartial({}),
        fillablePriceConfig: exports.FillablePriceConfig.fromPartial({})
    };
}
exports.LiquidationsConfig = {
    typeUrl: "/nemo_network.clob.LiquidationsConfig",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.maxLiquidationFeePpm !== 0) {
            writer.uint32(8).uint32(message.maxLiquidationFeePpm);
        }
        if (message.positionBlockLimits !== undefined) {
            exports.PositionBlockLimits.encode(message.positionBlockLimits, writer.uint32(18).fork()).ldelim();
        }
        if (message.subaccountBlockLimits !== undefined) {
            exports.SubaccountBlockLimits.encode(message.subaccountBlockLimits, writer.uint32(26).fork()).ldelim();
        }
        if (message.fillablePriceConfig !== undefined) {
            exports.FillablePriceConfig.encode(message.fillablePriceConfig, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidationsConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxLiquidationFeePpm = reader.uint32();
                    break;
                case 2:
                    message.positionBlockLimits = exports.PositionBlockLimits.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subaccountBlockLimits = exports.SubaccountBlockLimits.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fillablePriceConfig = exports.FillablePriceConfig.decode(reader, reader.uint32());
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
        var message = createBaseLiquidationsConfig();
        message.maxLiquidationFeePpm = (_a = object.maxLiquidationFeePpm) !== null && _a !== void 0 ? _a : 0;
        message.positionBlockLimits = object.positionBlockLimits !== undefined && object.positionBlockLimits !== null ? exports.PositionBlockLimits.fromPartial(object.positionBlockLimits) : undefined;
        message.subaccountBlockLimits = object.subaccountBlockLimits !== undefined && object.subaccountBlockLimits !== null ? exports.SubaccountBlockLimits.fromPartial(object.subaccountBlockLimits) : undefined;
        message.fillablePriceConfig = object.fillablePriceConfig !== undefined && object.fillablePriceConfig !== null ? exports.FillablePriceConfig.fromPartial(object.fillablePriceConfig) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseLiquidationsConfig();
        if (object.max_liquidation_fee_ppm !== undefined && object.max_liquidation_fee_ppm !== null) {
            message.maxLiquidationFeePpm = object.max_liquidation_fee_ppm;
        }
        if (object.position_block_limits !== undefined && object.position_block_limits !== null) {
            message.positionBlockLimits = exports.PositionBlockLimits.fromAmino(object.position_block_limits);
        }
        if (object.subaccount_block_limits !== undefined && object.subaccount_block_limits !== null) {
            message.subaccountBlockLimits = exports.SubaccountBlockLimits.fromAmino(object.subaccount_block_limits);
        }
        if (object.fillable_price_config !== undefined && object.fillable_price_config !== null) {
            message.fillablePriceConfig = exports.FillablePriceConfig.fromAmino(object.fillable_price_config);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.max_liquidation_fee_ppm = message.maxLiquidationFeePpm === 0 ? undefined : message.maxLiquidationFeePpm;
        obj.position_block_limits = message.positionBlockLimits ? exports.PositionBlockLimits.toAmino(message.positionBlockLimits) : undefined;
        obj.subaccount_block_limits = message.subaccountBlockLimits ? exports.SubaccountBlockLimits.toAmino(message.subaccountBlockLimits) : undefined;
        obj.fillable_price_config = message.fillablePriceConfig ? exports.FillablePriceConfig.toAmino(message.fillablePriceConfig) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LiquidationsConfig.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LiquidationsConfig.decode(message.value);
    },
    toProto: function (message) {
        return exports.LiquidationsConfig.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.LiquidationsConfig",
            value: exports.LiquidationsConfig.encode(message).finish()
        };
    }
};
function createBasePositionBlockLimits() {
    return {
        minPositionNotionalLiquidated: BigInt(0),
        maxPositionPortionLiquidatedPpm: 0
    };
}
exports.PositionBlockLimits = {
    typeUrl: "/nemo_network.clob.PositionBlockLimits",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.minPositionNotionalLiquidated !== BigInt(0)) {
            writer.uint32(8).uint64(message.minPositionNotionalLiquidated);
        }
        if (message.maxPositionPortionLiquidatedPpm !== 0) {
            writer.uint32(16).uint32(message.maxPositionPortionLiquidatedPpm);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePositionBlockLimits();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minPositionNotionalLiquidated = reader.uint64();
                    break;
                case 2:
                    message.maxPositionPortionLiquidatedPpm = reader.uint32();
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
        var message = createBasePositionBlockLimits();
        message.minPositionNotionalLiquidated = object.minPositionNotionalLiquidated !== undefined && object.minPositionNotionalLiquidated !== null ? BigInt(object.minPositionNotionalLiquidated.toString()) : BigInt(0);
        message.maxPositionPortionLiquidatedPpm = (_a = object.maxPositionPortionLiquidatedPpm) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePositionBlockLimits();
        if (object.min_position_notional_liquidated !== undefined && object.min_position_notional_liquidated !== null) {
            message.minPositionNotionalLiquidated = BigInt(object.min_position_notional_liquidated);
        }
        if (object.max_position_portion_liquidated_ppm !== undefined && object.max_position_portion_liquidated_ppm !== null) {
            message.maxPositionPortionLiquidatedPpm = object.max_position_portion_liquidated_ppm;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.min_position_notional_liquidated = message.minPositionNotionalLiquidated !== BigInt(0) ? ((_a = message.minPositionNotionalLiquidated) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.max_position_portion_liquidated_ppm = message.maxPositionPortionLiquidatedPpm === 0 ? undefined : message.maxPositionPortionLiquidatedPpm;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PositionBlockLimits.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PositionBlockLimits.decode(message.value);
    },
    toProto: function (message) {
        return exports.PositionBlockLimits.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.PositionBlockLimits",
            value: exports.PositionBlockLimits.encode(message).finish()
        };
    }
};
function createBaseSubaccountBlockLimits() {
    return {
        maxNotionalLiquidated: BigInt(0),
        maxQuantumsInsuranceLost: BigInt(0)
    };
}
exports.SubaccountBlockLimits = {
    typeUrl: "/nemo_network.clob.SubaccountBlockLimits",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.maxNotionalLiquidated !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxNotionalLiquidated);
        }
        if (message.maxQuantumsInsuranceLost !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxQuantumsInsuranceLost);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubaccountBlockLimits();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxNotionalLiquidated = reader.uint64();
                    break;
                case 2:
                    message.maxQuantumsInsuranceLost = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseSubaccountBlockLimits();
        message.maxNotionalLiquidated = object.maxNotionalLiquidated !== undefined && object.maxNotionalLiquidated !== null ? BigInt(object.maxNotionalLiquidated.toString()) : BigInt(0);
        message.maxQuantumsInsuranceLost = object.maxQuantumsInsuranceLost !== undefined && object.maxQuantumsInsuranceLost !== null ? BigInt(object.maxQuantumsInsuranceLost.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSubaccountBlockLimits();
        if (object.max_notional_liquidated !== undefined && object.max_notional_liquidated !== null) {
            message.maxNotionalLiquidated = BigInt(object.max_notional_liquidated);
        }
        if (object.max_quantums_insurance_lost !== undefined && object.max_quantums_insurance_lost !== null) {
            message.maxQuantumsInsuranceLost = BigInt(object.max_quantums_insurance_lost);
        }
        return message;
    },
    toAmino: function (message) {
        var _a, _b;
        var obj = {};
        obj.max_notional_liquidated = message.maxNotionalLiquidated !== BigInt(0) ? ((_a = message.maxNotionalLiquidated) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.max_quantums_insurance_lost = message.maxQuantumsInsuranceLost !== BigInt(0) ? ((_b = message.maxQuantumsInsuranceLost) === null || _b === void 0 ? void 0 : _b.toString).call(_b) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SubaccountBlockLimits.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.SubaccountBlockLimits.decode(message.value);
    },
    toProto: function (message) {
        return exports.SubaccountBlockLimits.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.SubaccountBlockLimits",
            value: exports.SubaccountBlockLimits.encode(message).finish()
        };
    }
};
function createBaseFillablePriceConfig() {
    return {
        bankruptcyAdjustmentPpm: 0,
        spreadToMaintenanceMarginRatioPpm: 0
    };
}
exports.FillablePriceConfig = {
    typeUrl: "/nemo_network.clob.FillablePriceConfig",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.bankruptcyAdjustmentPpm !== 0) {
            writer.uint32(8).uint32(message.bankruptcyAdjustmentPpm);
        }
        if (message.spreadToMaintenanceMarginRatioPpm !== 0) {
            writer.uint32(16).uint32(message.spreadToMaintenanceMarginRatioPpm);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFillablePriceConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bankruptcyAdjustmentPpm = reader.uint32();
                    break;
                case 2:
                    message.spreadToMaintenanceMarginRatioPpm = reader.uint32();
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
        var message = createBaseFillablePriceConfig();
        message.bankruptcyAdjustmentPpm = (_a = object.bankruptcyAdjustmentPpm) !== null && _a !== void 0 ? _a : 0;
        message.spreadToMaintenanceMarginRatioPpm = (_b = object.spreadToMaintenanceMarginRatioPpm) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseFillablePriceConfig();
        if (object.bankruptcy_adjustment_ppm !== undefined && object.bankruptcy_adjustment_ppm !== null) {
            message.bankruptcyAdjustmentPpm = object.bankruptcy_adjustment_ppm;
        }
        if (object.spread_to_maintenance_margin_ratio_ppm !== undefined && object.spread_to_maintenance_margin_ratio_ppm !== null) {
            message.spreadToMaintenanceMarginRatioPpm = object.spread_to_maintenance_margin_ratio_ppm;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.bankruptcy_adjustment_ppm = message.bankruptcyAdjustmentPpm === 0 ? undefined : message.bankruptcyAdjustmentPpm;
        obj.spread_to_maintenance_margin_ratio_ppm = message.spreadToMaintenanceMarginRatioPpm === 0 ? undefined : message.spreadToMaintenanceMarginRatioPpm;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.FillablePriceConfig.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.FillablePriceConfig.decode(message.value);
    },
    toProto: function (message) {
        return exports.FillablePriceConfig.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.clob.FillablePriceConfig",
            value: exports.FillablePriceConfig.encode(message).finish()
        };
    }
};
