"use strict";
exports.__esModule = true;
exports.QueryCollateralPoolAddressResponse = exports.QueryCollateralPoolAddressRequest = exports.QueryGetWithdrawalAndTransfersBlockedInfoResponse = exports.QueryGetWithdrawalAndTransfersBlockedInfoRequest = exports.QuerySubaccountAllResponse = exports.QueryAllSubaccountRequest = exports.QuerySubaccountResponse = exports.QueryGetSubaccountRequest = void 0;
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var subaccount_1 = require("./subaccount");
var binary_1 = require("../../binary");
function createBaseQueryGetSubaccountRequest() {
    return {
        owner: "",
        number: 0
    };
}
exports.QueryGetSubaccountRequest = {
    typeUrl: "/nemo_network.subaccounts.QueryGetSubaccountRequest",
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
        var message = createBaseQueryGetSubaccountRequest();
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
        var message = createBaseQueryGetSubaccountRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryGetSubaccountRequest();
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
        return exports.QueryGetSubaccountRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryGetSubaccountRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryGetSubaccountRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.QueryGetSubaccountRequest",
            value: exports.QueryGetSubaccountRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountResponse() {
    return {
        subaccount: subaccount_1.Subaccount.fromPartial({})
    };
}
exports.QuerySubaccountResponse = {
    typeUrl: "/nemo_network.subaccounts.QuerySubaccountResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.subaccount !== undefined) {
            subaccount_1.Subaccount.encode(message.subaccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySubaccountResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccount = subaccount_1.Subaccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQuerySubaccountResponse();
        message.subaccount = object.subaccount !== undefined && object.subaccount !== null ? subaccount_1.Subaccount.fromPartial(object.subaccount) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQuerySubaccountResponse();
        if (object.subaccount !== undefined && object.subaccount !== null) {
            message.subaccount = subaccount_1.Subaccount.fromAmino(object.subaccount);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.subaccount = message.subaccount ? subaccount_1.Subaccount.toAmino(message.subaccount) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QuerySubaccountResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QuerySubaccountResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QuerySubaccountResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.QuerySubaccountResponse",
            value: exports.QuerySubaccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllSubaccountRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllSubaccountRequest = {
    typeUrl: "/nemo_network.subaccounts.QueryAllSubaccountRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllSubaccountRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllSubaccountRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllSubaccountRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllSubaccountRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllSubaccountRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllSubaccountRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.QueryAllSubaccountRequest",
            value: exports.QueryAllSubaccountRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountAllResponse() {
    return {
        subaccount: [],
        pagination: undefined
    };
}
exports.QuerySubaccountAllResponse = {
    typeUrl: "/nemo_network.subaccounts.QuerySubaccountAllResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.subaccount; _i < _a.length; _i++) {
            var v = _a[_i];
            subaccount_1.Subaccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySubaccountAllResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccount.push(subaccount_1.Subaccount.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQuerySubaccountAllResponse();
        message.subaccount = ((_a = object.subaccount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return subaccount_1.Subaccount.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQuerySubaccountAllResponse();
        message.subaccount = ((_a = object.subaccount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return subaccount_1.Subaccount.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.subaccount) {
            obj.subaccount = message.subaccount.map(function (e) { return e ? subaccount_1.Subaccount.toAmino(e) : undefined; });
        }
        else {
            obj.subaccount = message.subaccount;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QuerySubaccountAllResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QuerySubaccountAllResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QuerySubaccountAllResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.QuerySubaccountAllResponse",
            value: exports.QuerySubaccountAllResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetWithdrawalAndTransfersBlockedInfoRequest() {
    return {
        perpetualId: 0
    };
}
exports.QueryGetWithdrawalAndTransfersBlockedInfoRequest = {
    typeUrl: "/nemo_network.subaccounts.QueryGetWithdrawalAndTransfersBlockedInfoRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoRequest();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoRequest();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryGetWithdrawalAndTransfersBlockedInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryGetWithdrawalAndTransfersBlockedInfoRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryGetWithdrawalAndTransfersBlockedInfoRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.QueryGetWithdrawalAndTransfersBlockedInfoRequest",
            value: exports.QueryGetWithdrawalAndTransfersBlockedInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetWithdrawalAndTransfersBlockedInfoResponse() {
    return {
        negativeTncSubaccountSeenAtBlock: 0,
        chainOutageSeenAtBlock: 0,
        withdrawalsAndTransfersUnblockedAtBlock: 0
    };
}
exports.QueryGetWithdrawalAndTransfersBlockedInfoResponse = {
    typeUrl: "/nemo_network.subaccounts.QueryGetWithdrawalAndTransfersBlockedInfoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.negativeTncSubaccountSeenAtBlock !== 0) {
            writer.uint32(8).uint32(message.negativeTncSubaccountSeenAtBlock);
        }
        if (message.chainOutageSeenAtBlock !== 0) {
            writer.uint32(16).uint32(message.chainOutageSeenAtBlock);
        }
        if (message.withdrawalsAndTransfersUnblockedAtBlock !== 0) {
            writer.uint32(24).uint32(message.withdrawalsAndTransfersUnblockedAtBlock);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.negativeTncSubaccountSeenAtBlock = reader.uint32();
                    break;
                case 2:
                    message.chainOutageSeenAtBlock = reader.uint32();
                    break;
                case 3:
                    message.withdrawalsAndTransfersUnblockedAtBlock = reader.uint32();
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
        var message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoResponse();
        message.negativeTncSubaccountSeenAtBlock = (_a = object.negativeTncSubaccountSeenAtBlock) !== null && _a !== void 0 ? _a : 0;
        message.chainOutageSeenAtBlock = (_b = object.chainOutageSeenAtBlock) !== null && _b !== void 0 ? _b : 0;
        message.withdrawalsAndTransfersUnblockedAtBlock = (_c = object.withdrawalsAndTransfersUnblockedAtBlock) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoResponse();
        if (object.negative_tnc_subaccount_seen_at_block !== undefined && object.negative_tnc_subaccount_seen_at_block !== null) {
            message.negativeTncSubaccountSeenAtBlock = object.negative_tnc_subaccount_seen_at_block;
        }
        if (object.chain_outage_seen_at_block !== undefined && object.chain_outage_seen_at_block !== null) {
            message.chainOutageSeenAtBlock = object.chain_outage_seen_at_block;
        }
        if (object.withdrawals_and_transfers_unblocked_at_block !== undefined && object.withdrawals_and_transfers_unblocked_at_block !== null) {
            message.withdrawalsAndTransfersUnblockedAtBlock = object.withdrawals_and_transfers_unblocked_at_block;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.negative_tnc_subaccount_seen_at_block = message.negativeTncSubaccountSeenAtBlock === 0 ? undefined : message.negativeTncSubaccountSeenAtBlock;
        obj.chain_outage_seen_at_block = message.chainOutageSeenAtBlock === 0 ? undefined : message.chainOutageSeenAtBlock;
        obj.withdrawals_and_transfers_unblocked_at_block = message.withdrawalsAndTransfersUnblockedAtBlock === 0 ? undefined : message.withdrawalsAndTransfersUnblockedAtBlock;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryGetWithdrawalAndTransfersBlockedInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryGetWithdrawalAndTransfersBlockedInfoResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryGetWithdrawalAndTransfersBlockedInfoResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.QueryGetWithdrawalAndTransfersBlockedInfoResponse",
            value: exports.QueryGetWithdrawalAndTransfersBlockedInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCollateralPoolAddressRequest() {
    return {
        perpetualId: 0
    };
}
exports.QueryCollateralPoolAddressRequest = {
    typeUrl: "/nemo_network.subaccounts.QueryCollateralPoolAddressRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCollateralPoolAddressRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = createBaseQueryCollateralPoolAddressRequest();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryCollateralPoolAddressRequest();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryCollateralPoolAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryCollateralPoolAddressRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryCollateralPoolAddressRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.QueryCollateralPoolAddressRequest",
            value: exports.QueryCollateralPoolAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCollateralPoolAddressResponse() {
    return {
        collateralPoolAddress: ""
    };
}
exports.QueryCollateralPoolAddressResponse = {
    typeUrl: "/nemo_network.subaccounts.QueryCollateralPoolAddressResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.collateralPoolAddress !== "") {
            writer.uint32(10).string(message.collateralPoolAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCollateralPoolAddressResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralPoolAddress = reader.string();
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
        var message = createBaseQueryCollateralPoolAddressResponse();
        message.collateralPoolAddress = (_a = object.collateralPoolAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryCollateralPoolAddressResponse();
        if (object.collateral_pool_address !== undefined && object.collateral_pool_address !== null) {
            message.collateralPoolAddress = object.collateral_pool_address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.collateral_pool_address = message.collateralPoolAddress === "" ? undefined : message.collateralPoolAddress;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryCollateralPoolAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryCollateralPoolAddressResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryCollateralPoolAddressResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.QueryCollateralPoolAddressResponse",
            value: exports.QueryCollateralPoolAddressResponse.encode(message).finish()
        };
    }
};
