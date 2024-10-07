"use strict";
exports.__esModule = true;
exports.PerpetualPosition = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBasePerpetualPosition() {
    return {
        perpetualId: 0,
        quantums: new Uint8Array(),
        fundingIndex: new Uint8Array(),
        quoteBalance: new Uint8Array()
    };
}
exports.PerpetualPosition = {
    typeUrl: "/nemo_network.subaccounts.PerpetualPosition",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        if (message.quantums.length !== 0) {
            writer.uint32(18).bytes(message.quantums);
        }
        if (message.fundingIndex.length !== 0) {
            writer.uint32(26).bytes(message.fundingIndex);
        }
        if (message.quoteBalance.length !== 0) {
            writer.uint32(34).bytes(message.quoteBalance);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerpetualPosition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    message.quantums = reader.bytes();
                    break;
                case 3:
                    message.fundingIndex = reader.bytes();
                    break;
                case 4:
                    message.quoteBalance = reader.bytes();
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
        var message = createBasePerpetualPosition();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.quantums = (_b = object.quantums) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.fundingIndex = (_c = object.fundingIndex) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.quoteBalance = (_d = object.quoteBalance) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBasePerpetualPosition();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        if (object.quantums !== undefined && object.quantums !== null) {
            message.quantums = (0, helpers_1.bytesFromBase64)(object.quantums);
        }
        if (object.funding_index !== undefined && object.funding_index !== null) {
            message.fundingIndex = (0, helpers_1.bytesFromBase64)(object.funding_index);
        }
        if (object.quote_balance !== undefined && object.quote_balance !== null) {
            message.quoteBalance = (0, helpers_1.bytesFromBase64)(object.quote_balance);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        obj.quantums = message.quantums ? (0, helpers_1.base64FromBytes)(message.quantums) : undefined;
        obj.funding_index = message.fundingIndex ? (0, helpers_1.base64FromBytes)(message.fundingIndex) : undefined;
        obj.quote_balance = message.quoteBalance ? (0, helpers_1.base64FromBytes)(message.quoteBalance) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PerpetualPosition.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.PerpetualPosition.decode(message.value);
    },
    toProto: function (message) {
        return exports.PerpetualPosition.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.PerpetualPosition",
            value: exports.PerpetualPosition.encode(message).finish()
        };
    }
};
