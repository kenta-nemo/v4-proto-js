"use strict";
exports.__esModule = true;
exports.SendAuthorization = void 0;
var coin_1 = require("../../base/v1beta1/coin");
var binary_1 = require("../../../binary");
function createBaseSendAuthorization() {
    return {
        spendLimit: [],
        allowList: []
    };
}
exports.SendAuthorization = {
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.spendLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.allowList; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSendAuthorization();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.allowList.push(reader.string());
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
        var message = createBaseSendAuthorization();
        message.spendLimit = ((_a = object.spendLimit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.allowList = ((_b = object.allowList) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseSendAuthorization();
        message.spendLimit = ((_a = object.spend_limit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        message.allowList = ((_b = object.allow_list) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.spendLimit) {
            obj.spend_limit = message.spendLimit.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.spend_limit = message.spendLimit;
        }
        if (message.allowList) {
            obj.allow_list = message.allowList.map(function (e) { return e; });
        }
        else {
            obj.allow_list = message.allowList;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SendAuthorization.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SendAuthorization",
            value: exports.SendAuthorization.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SendAuthorization.decode(message.value);
    },
    toProto: function (message) {
        return exports.SendAuthorization.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
            value: exports.SendAuthorization.encode(message).finish()
        };
    }
};
