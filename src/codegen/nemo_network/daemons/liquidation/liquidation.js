"use strict";
exports.__esModule = true;
exports.LiquidateSubaccountsResponse = exports.LiquidateSubaccountsRequest = void 0;
var subaccount_1 = require("../../subaccounts/subaccount");
var liquidations_1 = require("../../clob/liquidations");
var binary_1 = require("../../../binary");
function createBaseLiquidateSubaccountsRequest() {
    return {
        blockHeight: 0,
        liquidatableSubaccountIds: [],
        negativeTncSubaccountIds: [],
        subaccountOpenPositionInfo: []
    };
}
exports.LiquidateSubaccountsRequest = {
    typeUrl: "/nemo_network.daemons.liquidation.LiquidateSubaccountsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockHeight !== 0) {
            writer.uint32(8).uint32(message.blockHeight);
        }
        for (var _i = 0, _a = message.liquidatableSubaccountIds; _i < _a.length; _i++) {
            var v = _a[_i];
            subaccount_1.SubaccountId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.negativeTncSubaccountIds; _b < _c.length; _b++) {
            var v = _c[_b];
            subaccount_1.SubaccountId.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.subaccountOpenPositionInfo; _d < _e.length; _d++) {
            var v = _e[_d];
            liquidations_1.SubaccountOpenPositionInfo.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidateSubaccountsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint32();
                    break;
                case 2:
                    message.liquidatableSubaccountIds.push(subaccount_1.SubaccountId.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.negativeTncSubaccountIds.push(subaccount_1.SubaccountId.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.subaccountOpenPositionInfo.push(liquidations_1.SubaccountOpenPositionInfo.decode(reader, reader.uint32()));
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
        var message = createBaseLiquidateSubaccountsRequest();
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : 0;
        message.liquidatableSubaccountIds = ((_b = object.liquidatableSubaccountIds) === null || _b === void 0 ? void 0 : _b.map(function (e) { return subaccount_1.SubaccountId.fromPartial(e); })) || [];
        message.negativeTncSubaccountIds = ((_c = object.negativeTncSubaccountIds) === null || _c === void 0 ? void 0 : _c.map(function (e) { return subaccount_1.SubaccountId.fromPartial(e); })) || [];
        message.subaccountOpenPositionInfo = ((_d = object.subaccountOpenPositionInfo) === null || _d === void 0 ? void 0 : _d.map(function (e) { return liquidations_1.SubaccountOpenPositionInfo.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c;
        var message = createBaseLiquidateSubaccountsRequest();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = object.block_height;
        }
        message.liquidatableSubaccountIds = ((_a = object.liquidatable_subaccount_ids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return subaccount_1.SubaccountId.fromAmino(e); })) || [];
        message.negativeTncSubaccountIds = ((_b = object.negative_tnc_subaccount_ids) === null || _b === void 0 ? void 0 : _b.map(function (e) { return subaccount_1.SubaccountId.fromAmino(e); })) || [];
        message.subaccountOpenPositionInfo = ((_c = object.subaccount_open_position_info) === null || _c === void 0 ? void 0 : _c.map(function (e) { return liquidations_1.SubaccountOpenPositionInfo.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.block_height = message.blockHeight === 0 ? undefined : message.blockHeight;
        if (message.liquidatableSubaccountIds) {
            obj.liquidatable_subaccount_ids = message.liquidatableSubaccountIds.map(function (e) { return e ? subaccount_1.SubaccountId.toAmino(e) : undefined; });
        }
        else {
            obj.liquidatable_subaccount_ids = message.liquidatableSubaccountIds;
        }
        if (message.negativeTncSubaccountIds) {
            obj.negative_tnc_subaccount_ids = message.negativeTncSubaccountIds.map(function (e) { return e ? subaccount_1.SubaccountId.toAmino(e) : undefined; });
        }
        else {
            obj.negative_tnc_subaccount_ids = message.negativeTncSubaccountIds;
        }
        if (message.subaccountOpenPositionInfo) {
            obj.subaccount_open_position_info = message.subaccountOpenPositionInfo.map(function (e) { return e ? liquidations_1.SubaccountOpenPositionInfo.toAmino(e) : undefined; });
        }
        else {
            obj.subaccount_open_position_info = message.subaccountOpenPositionInfo;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LiquidateSubaccountsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LiquidateSubaccountsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.LiquidateSubaccountsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.daemons.liquidation.LiquidateSubaccountsRequest",
            value: exports.LiquidateSubaccountsRequest.encode(message).finish()
        };
    }
};
function createBaseLiquidateSubaccountsResponse() {
    return {};
}
exports.LiquidateSubaccountsResponse = {
    typeUrl: "/nemo_network.daemons.liquidation.LiquidateSubaccountsResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidateSubaccountsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseLiquidateSubaccountsResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseLiquidateSubaccountsResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LiquidateSubaccountsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.LiquidateSubaccountsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.LiquidateSubaccountsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.daemons.liquidation.LiquidateSubaccountsResponse",
            value: exports.LiquidateSubaccountsResponse.encode(message).finish()
        };
    }
};
