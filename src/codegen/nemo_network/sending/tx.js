"use strict";
exports.__esModule = true;
exports.MsgSendFromModuleToAccountResponse = exports.MsgWithdrawFromSubaccountResponse = exports.MsgDepositToSubaccountResponse = exports.MsgCreateTransferResponse = exports.MsgCreateTransfer = void 0;
var transfer_1 = require("./transfer");
var binary_1 = require("../../binary");
function createBaseMsgCreateTransfer() {
    return {
        transfer: undefined
    };
}
exports.MsgCreateTransfer = {
    typeUrl: "/nemo_network.sending.MsgCreateTransfer",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.transfer !== undefined) {
            transfer_1.Transfer.encode(message.transfer, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateTransfer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfer = transfer_1.Transfer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMsgCreateTransfer();
        message.transfer = object.transfer !== undefined && object.transfer !== null ? transfer_1.Transfer.fromPartial(object.transfer) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgCreateTransfer();
        if (object.transfer !== undefined && object.transfer !== null) {
            message.transfer = transfer_1.Transfer.fromAmino(object.transfer);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.transfer = message.transfer ? transfer_1.Transfer.toAmino(message.transfer) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateTransfer.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateTransfer.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateTransfer.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.sending.MsgCreateTransfer",
            value: exports.MsgCreateTransfer.encode(message).finish()
        };
    }
};
function createBaseMsgCreateTransferResponse() {
    return {};
}
exports.MsgCreateTransferResponse = {
    typeUrl: "/nemo_network.sending.MsgCreateTransferResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateTransferResponse();
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
        var message = createBaseMsgCreateTransferResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCreateTransferResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateTransferResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateTransferResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateTransferResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.sending.MsgCreateTransferResponse",
            value: exports.MsgCreateTransferResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositToSubaccountResponse() {
    return {};
}
exports.MsgDepositToSubaccountResponse = {
    typeUrl: "/nemo_network.sending.MsgDepositToSubaccountResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDepositToSubaccountResponse();
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
        var message = createBaseMsgDepositToSubaccountResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgDepositToSubaccountResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDepositToSubaccountResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgDepositToSubaccountResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDepositToSubaccountResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.sending.MsgDepositToSubaccountResponse",
            value: exports.MsgDepositToSubaccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawFromSubaccountResponse() {
    return {};
}
exports.MsgWithdrawFromSubaccountResponse = {
    typeUrl: "/nemo_network.sending.MsgWithdrawFromSubaccountResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawFromSubaccountResponse();
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
        var message = createBaseMsgWithdrawFromSubaccountResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgWithdrawFromSubaccountResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgWithdrawFromSubaccountResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgWithdrawFromSubaccountResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgWithdrawFromSubaccountResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.sending.MsgWithdrawFromSubaccountResponse",
            value: exports.MsgWithdrawFromSubaccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSendFromModuleToAccountResponse() {
    return {};
}
exports.MsgSendFromModuleToAccountResponse = {
    typeUrl: "/nemo_network.sending.MsgSendFromModuleToAccountResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSendFromModuleToAccountResponse();
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
        var message = createBaseMsgSendFromModuleToAccountResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSendFromModuleToAccountResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSendFromModuleToAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSendFromModuleToAccountResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSendFromModuleToAccountResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.sending.MsgSendFromModuleToAccountResponse",
            value: exports.MsgSendFromModuleToAccountResponse.encode(message).finish()
        };
    }
};
