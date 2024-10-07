"use strict";
exports.__esModule = true;
exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = void 0;
var coin_1 = require("../../base/v1beta1/coin");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var duration_1 = require("../../../google/protobuf/duration");
var any_1 = require("../../../google/protobuf/any");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBaseBasicAllowance() {
    return {
        spendLimit: [],
        expiration: undefined
    };
}
exports.BasicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.spendLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBasicAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBaseBasicAllowance();
        message.spendLimit = ((_a = object.spendLimit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.expiration = (_b = object.expiration) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseBasicAllowance();
        message.spendLimit = ((_a = object.spend_limit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
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
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.BasicAllowance.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/BasicAllowance",
            value: exports.BasicAllowance.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.BasicAllowance.decode(message.value);
    },
    toProto: function (message) {
        return exports.BasicAllowance.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
            value: exports.BasicAllowance.encode(message).finish()
        };
    }
};
function createBasePeriodicAllowance() {
    return {
        basic: exports.BasicAllowance.fromPartial({}),
        period: duration_1.Duration.fromPartial({}),
        periodSpendLimit: [],
        periodCanSpend: [],
        periodReset: new Date()
    };
}
exports.PeriodicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.basic !== undefined) {
            exports.BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            duration_1.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.periodSpendLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.periodCanSpend; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.periodReset !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.periodReset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriodicAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = exports.BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.periodSpendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.periodCanSpend.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.periodReset = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBasePeriodicAllowance();
        message.basic = object.basic !== undefined && object.basic !== null ? exports.BasicAllowance.fromPartial(object.basic) : undefined;
        message.period = object.period !== undefined && object.period !== null ? duration_1.Duration.fromPartial(object.period) : undefined;
        message.periodSpendLimit = ((_a = object.periodSpendLimit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.periodCanSpend = ((_b = object.periodCanSpend) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.periodReset = (_c = object.periodReset) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBasePeriodicAllowance();
        if (object.basic !== undefined && object.basic !== null) {
            message.basic = exports.BasicAllowance.fromAmino(object.basic);
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = duration_1.Duration.fromAmino(object.period);
        }
        message.periodSpendLimit = ((_a = object.period_spend_limit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        message.periodCanSpend = ((_b = object.period_can_spend) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.period_reset !== undefined && object.period_reset !== null) {
            message.periodReset = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.period_reset));
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.basic = message.basic ? exports.BasicAllowance.toAmino(message.basic) : exports.BasicAllowance.toAmino(exports.BasicAllowance.fromPartial({}));
        obj.period = message.period ? duration_1.Duration.toAmino(message.period) : duration_1.Duration.toAmino(duration_1.Duration.fromPartial({}));
        if (message.periodSpendLimit) {
            obj.period_spend_limit = message.periodSpendLimit.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.period_spend_limit = message.periodSpendLimit;
        }
        if (message.periodCanSpend) {
            obj.period_can_spend = message.periodCanSpend.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.period_can_spend = message.periodCanSpend;
        }
        obj.period_reset = message.periodReset ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.periodReset)) : new Date();
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.PeriodicAllowance.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/PeriodicAllowance",
            value: exports.PeriodicAllowance.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.PeriodicAllowance.decode(message.value);
    },
    toProto: function (message) {
        return exports.PeriodicAllowance.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
            value: exports.PeriodicAllowance.encode(message).finish()
        };
    }
};
function createBaseAllowedMsgAllowance() {
    return {
        allowance: undefined,
        allowedMessages: []
    };
}
exports.AllowedMsgAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.allowedMessages; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAllowedMsgAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allowedMessages.push(reader.string());
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
        var message = createBaseAllowedMsgAllowance();
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        message.allowedMessages = ((_a = object.allowedMessages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseAllowedMsgAllowance();
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = any_1.Any.fromAmino(object.allowance);
        }
        message.allowedMessages = ((_a = object.allowed_messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.allowance = message.allowance ? any_1.Any.toAmino(message.allowance) : undefined;
        if (message.allowedMessages) {
            obj.allowed_messages = message.allowedMessages.map(function (e) { return e; });
        }
        else {
            obj.allowed_messages = message.allowedMessages;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AllowedMsgAllowance.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/AllowedMsgAllowance",
            value: exports.AllowedMsgAllowance.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.AllowedMsgAllowance.decode(message.value);
    },
    toProto: function (message) {
        return exports.AllowedMsgAllowance.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
            value: exports.AllowedMsgAllowance.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
exports.Grant = {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGrant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = any_1.Any.decode(reader, reader.uint32());
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
        var message = createBaseGrant();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseGrant();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = any_1.Any.fromAmino(object.allowance);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.allowance = message.allowance ? any_1.Any.toAmino(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Grant.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Grant",
            value: exports.Grant.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Grant.decode(message.value);
    },
    toProto: function (message) {
        return exports.Grant.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.Grant",
            value: exports.Grant.encode(message).finish()
        };
    }
};
