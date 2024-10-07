"use strict";
exports.__esModule = true;
exports.MsgSendFromModuleToAccount = exports.MsgWithdrawFromSubaccount = exports.MsgDepositToSubaccount = exports.Transfer = void 0;
var subaccount_1 = require("../subaccounts/subaccount");
var coin_1 = require("../../cosmos/base/v1beta1/coin");
var binary_1 = require("../../binary");
function createBaseTransfer() {
    return {
        sender: subaccount_1.SubaccountId.fromPartial({}),
        recipient: subaccount_1.SubaccountId.fromPartial({}),
        assetId: 0,
        amount: BigInt(0)
    };
}
exports.Transfer = {
    typeUrl: "/nemo_network.sending.Transfer",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.sender !== undefined) {
            subaccount_1.SubaccountId.encode(message.sender, writer.uint32(10).fork()).ldelim();
        }
        if (message.recipient !== undefined) {
            subaccount_1.SubaccountId.encode(message.recipient, writer.uint32(18).fork()).ldelim();
        }
        if (message.assetId !== 0) {
            writer.uint32(24).uint32(message.assetId);
        }
        if (message.amount !== BigInt(0)) {
            writer.uint32(32).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransfer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.recipient = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.assetId = reader.uint32();
                    break;
                case 4:
                    message.amount = reader.uint64();
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
        var message = createBaseTransfer();
        message.sender = object.sender !== undefined && object.sender !== null ? subaccount_1.SubaccountId.fromPartial(object.sender) : undefined;
        message.recipient = object.recipient !== undefined && object.recipient !== null ? subaccount_1.SubaccountId.fromPartial(object.recipient) : undefined;
        message.assetId = (_a = object.assetId) !== null && _a !== void 0 ? _a : 0;
        message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseTransfer();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = subaccount_1.SubaccountId.fromAmino(object.sender);
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = subaccount_1.SubaccountId.fromAmino(object.recipient);
        }
        if (object.asset_id !== undefined && object.asset_id !== null) {
            message.assetId = object.asset_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = BigInt(object.amount);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.sender = message.sender ? subaccount_1.SubaccountId.toAmino(message.sender) : undefined;
        obj.recipient = message.recipient ? subaccount_1.SubaccountId.toAmino(message.recipient) : undefined;
        obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
        obj.amount = message.amount !== BigInt(0) ? ((_a = message.amount) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Transfer.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Transfer.decode(message.value);
    },
    toProto: function (message) {
        return exports.Transfer.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.sending.Transfer",
            value: exports.Transfer.encode(message).finish()
        };
    }
};
function createBaseMsgDepositToSubaccount() {
    return {
        sender: "",
        recipient: subaccount_1.SubaccountId.fromPartial({}),
        assetId: 0,
        quantums: BigInt(0)
    };
}
exports.MsgDepositToSubaccount = {
    typeUrl: "/nemo_network.sending.MsgDepositToSubaccount",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== undefined) {
            subaccount_1.SubaccountId.encode(message.recipient, writer.uint32(18).fork()).ldelim();
        }
        if (message.assetId !== 0) {
            writer.uint32(24).uint32(message.assetId);
        }
        if (message.quantums !== BigInt(0)) {
            writer.uint32(32).uint64(message.quantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDepositToSubaccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.recipient = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.assetId = reader.uint32();
                    break;
                case 4:
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
        var _a, _b;
        var message = createBaseMsgDepositToSubaccount();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.recipient = object.recipient !== undefined && object.recipient !== null ? subaccount_1.SubaccountId.fromPartial(object.recipient) : undefined;
        message.assetId = (_b = object.assetId) !== null && _b !== void 0 ? _b : 0;
        message.quantums = object.quantums !== undefined && object.quantums !== null ? BigInt(object.quantums.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgDepositToSubaccount();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = subaccount_1.SubaccountId.fromAmino(object.recipient);
        }
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
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient ? subaccount_1.SubaccountId.toAmino(message.recipient) : undefined;
        obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
        obj.quantums = message.quantums !== BigInt(0) ? ((_a = message.quantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDepositToSubaccount.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgDepositToSubaccount.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDepositToSubaccount.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.sending.MsgDepositToSubaccount",
            value: exports.MsgDepositToSubaccount.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawFromSubaccount() {
    return {
        sender: subaccount_1.SubaccountId.fromPartial({}),
        recipient: "",
        assetId: 0,
        quantums: BigInt(0)
    };
}
exports.MsgWithdrawFromSubaccount = {
    typeUrl: "/nemo_network.sending.MsgWithdrawFromSubaccount",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.sender !== undefined) {
            subaccount_1.SubaccountId.encode(message.sender, writer.uint32(18).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(10).string(message.recipient);
        }
        if (message.assetId !== 0) {
            writer.uint32(24).uint32(message.assetId);
        }
        if (message.quantums !== BigInt(0)) {
            writer.uint32(32).uint64(message.quantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawFromSubaccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.sender = subaccount_1.SubaccountId.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.assetId = reader.uint32();
                    break;
                case 4:
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
        var _a, _b;
        var message = createBaseMsgWithdrawFromSubaccount();
        message.sender = object.sender !== undefined && object.sender !== null ? subaccount_1.SubaccountId.fromPartial(object.sender) : undefined;
        message.recipient = (_a = object.recipient) !== null && _a !== void 0 ? _a : "";
        message.assetId = (_b = object.assetId) !== null && _b !== void 0 ? _b : 0;
        message.quantums = object.quantums !== undefined && object.quantums !== null ? BigInt(object.quantums.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgWithdrawFromSubaccount();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = subaccount_1.SubaccountId.fromAmino(object.sender);
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
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
        obj.sender = message.sender ? subaccount_1.SubaccountId.toAmino(message.sender) : undefined;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
        obj.quantums = message.quantums !== BigInt(0) ? ((_a = message.quantums) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgWithdrawFromSubaccount.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgWithdrawFromSubaccount.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgWithdrawFromSubaccount.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.sending.MsgWithdrawFromSubaccount",
            value: exports.MsgWithdrawFromSubaccount.encode(message).finish()
        };
    }
};
function createBaseMsgSendFromModuleToAccount() {
    return {
        authority: "",
        senderModuleName: "",
        recipient: "",
        coin: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSendFromModuleToAccount = {
    typeUrl: "/nemo_network.sending.MsgSendFromModuleToAccount",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.senderModuleName !== "") {
            writer.uint32(18).string(message.senderModuleName);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSendFromModuleToAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.senderModuleName = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
        var message = createBaseMsgSendFromModuleToAccount();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.senderModuleName = (_b = object.senderModuleName) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        message.coin = object.coin !== undefined && object.coin !== null ? coin_1.Coin.fromPartial(object.coin) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSendFromModuleToAccount();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.sender_module_name !== undefined && object.sender_module_name !== null) {
            message.senderModuleName = object.sender_module_name;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.sender_module_name = message.senderModuleName === "" ? undefined : message.senderModuleName;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.coin = message.coin ? coin_1.Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSendFromModuleToAccount.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSendFromModuleToAccount.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSendFromModuleToAccount.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.sending.MsgSendFromModuleToAccount",
            value: exports.MsgSendFromModuleToAccount.encode(message).finish()
        };
    }
};
