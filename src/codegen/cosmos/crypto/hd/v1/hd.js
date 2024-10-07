"use strict";
exports.__esModule = true;
exports.BIP44Params = void 0;
var binary_1 = require("../../../../binary");
function createBaseBIP44Params() {
    return {
        purpose: 0,
        coinType: 0,
        account: 0,
        change: false,
        addressIndex: 0
    };
}
exports.BIP44Params = {
    typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.purpose !== 0) {
            writer.uint32(8).uint32(message.purpose);
        }
        if (message.coinType !== 0) {
            writer.uint32(16).uint32(message.coinType);
        }
        if (message.account !== 0) {
            writer.uint32(24).uint32(message.account);
        }
        if (message.change === true) {
            writer.uint32(32).bool(message.change);
        }
        if (message.addressIndex !== 0) {
            writer.uint32(40).uint32(message.addressIndex);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBIP44Params();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purpose = reader.uint32();
                    break;
                case 2:
                    message.coinType = reader.uint32();
                    break;
                case 3:
                    message.account = reader.uint32();
                    break;
                case 4:
                    message.change = reader.bool();
                    break;
                case 5:
                    message.addressIndex = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseBIP44Params();
        message.purpose = (_a = object.purpose) !== null && _a !== void 0 ? _a : 0;
        message.coinType = (_b = object.coinType) !== null && _b !== void 0 ? _b : 0;
        message.account = (_c = object.account) !== null && _c !== void 0 ? _c : 0;
        message.change = (_d = object.change) !== null && _d !== void 0 ? _d : false;
        message.addressIndex = (_e = object.addressIndex) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseBIP44Params();
        if (object.purpose !== undefined && object.purpose !== null) {
            message.purpose = object.purpose;
        }
        if (object.coin_type !== undefined && object.coin_type !== null) {
            message.coinType = object.coin_type;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.change !== undefined && object.change !== null) {
            message.change = object.change;
        }
        if (object.address_index !== undefined && object.address_index !== null) {
            message.addressIndex = object.address_index;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.purpose = message.purpose === 0 ? undefined : message.purpose;
        obj.coin_type = message.coinType === 0 ? undefined : message.coinType;
        obj.account = message.account === 0 ? undefined : message.account;
        obj.change = message.change === false ? undefined : message.change;
        obj.address_index = message.addressIndex === 0 ? undefined : message.addressIndex;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BIP44Params.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "crypto/keys/hd/BIP44Params",
            value: exports.BIP44Params.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.BIP44Params.decode(message.value);
    },
    toProto: function (message) {
        return exports.BIP44Params.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
            value: exports.BIP44Params.encode(message).finish()
        };
    }
};
