"use strict";
exports.__esModule = true;
exports.MsgCreatePeriodicVestingAccountResponse = exports.MsgCreatePeriodicVestingAccount = exports.MsgCreatePermanentLockedAccountResponse = exports.MsgCreatePermanentLockedAccount = exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = void 0;
var coin_1 = require("../../base/v1beta1/coin");
var vesting_1 = require("./vesting");
var binary_1 = require("../../../binary");
function createBaseMsgCreateVestingAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: [],
        endTime: BigInt(0),
        delayed: false
    };
}
exports.MsgCreateVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== BigInt(0)) {
            writer.uint32(32).int64(message.endTime);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endTime = reader.int64();
                    break;
                case 5:
                    message.delayed = reader.bool();
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
        var message = createBaseMsgCreateVestingAccount();
        message.fromAddress = (_a = object.fromAddress) !== null && _a !== void 0 ? _a : "";
        message.toAddress = (_b = object.toAddress) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
        message.delayed = (_d = object.delayed) !== null && _d !== void 0 ? _d : false;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgCreateVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = BigInt(object.end_time);
        }
        if (object.delayed !== undefined && object.delayed !== null) {
            message.delayed = object.delayed;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
        obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        obj.end_time = message.endTime !== BigInt(0) ? ((_a = message.endTime) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.delayed = message.delayed === false ? undefined : message.delayed;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateVestingAccount.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateVestingAccount.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateVestingAccount.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
exports.MsgCreateVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateVestingAccountResponse();
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
        var message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateVestingAccountResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePermanentLockedAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: []
    };
}
exports.MsgCreatePermanentLockedAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePermanentLockedAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseMsgCreatePermanentLockedAccount();
        message.fromAddress = (_a = object.fromAddress) !== null && _a !== void 0 ? _a : "";
        message.toAddress = (_b = object.toAddress) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgCreatePermanentLockedAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
        obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreatePermanentLockedAccount.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgCreatePermLockedAccount",
            value: exports.MsgCreatePermanentLockedAccount.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreatePermanentLockedAccount.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreatePermanentLockedAccount.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
            value: exports.MsgCreatePermanentLockedAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePermanentLockedAccountResponse() {
    return {};
}
exports.MsgCreatePermanentLockedAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePermanentLockedAccountResponse();
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
        var message = createBaseMsgCreatePermanentLockedAccountResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCreatePermanentLockedAccountResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreatePermanentLockedAccountResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
            value: exports.MsgCreatePermanentLockedAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreatePermanentLockedAccountResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreatePermanentLockedAccountResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
            value: exports.MsgCreatePermanentLockedAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePeriodicVestingAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        startTime: BigInt(0),
        vestingPeriods: []
    };
}
exports.MsgCreatePeriodicVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        if (message.startTime !== BigInt(0)) {
            writer.uint32(24).int64(message.startTime);
        }
        for (var _i = 0, _a = message.vestingPeriods; _i < _a.length; _i++) {
            var v = _a[_i];
            vesting_1.Period.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePeriodicVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.startTime = reader.int64();
                    break;
                case 4:
                    message.vestingPeriods.push(vesting_1.Period.decode(reader, reader.uint32()));
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
        var message = createBaseMsgCreatePeriodicVestingAccount();
        message.fromAddress = (_a = object.fromAddress) !== null && _a !== void 0 ? _a : "";
        message.toAddress = (_b = object.toAddress) !== null && _b !== void 0 ? _b : "";
        message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
        message.vestingPeriods = ((_c = object.vestingPeriods) === null || _c === void 0 ? void 0 : _c.map(function (e) { return vesting_1.Period.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgCreatePeriodicVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = BigInt(object.start_time);
        }
        message.vestingPeriods = ((_a = object.vesting_periods) === null || _a === void 0 ? void 0 : _a.map(function (e) { return vesting_1.Period.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
        obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
        obj.start_time = message.startTime !== BigInt(0) ? ((_a = message.startTime) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        if (message.vestingPeriods) {
            obj.vesting_periods = message.vestingPeriods.map(function (e) { return e ? vesting_1.Period.toAmino(e) : undefined; });
        }
        else {
            obj.vesting_periods = message.vestingPeriods;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreatePeriodicVestingAccount.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodVestAccount",
            value: exports.MsgCreatePeriodicVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreatePeriodicVestingAccount.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreatePeriodicVestingAccount.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
            value: exports.MsgCreatePeriodicVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePeriodicVestingAccountResponse() {
    return {};
}
exports.MsgCreatePeriodicVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
        var message = createBaseMsgCreatePeriodicVestingAccountResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCreatePeriodicVestingAccountResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreatePeriodicVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
            value: exports.MsgCreatePeriodicVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreatePeriodicVestingAccountResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreatePeriodicVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
            value: exports.MsgCreatePeriodicVestingAccountResponse.encode(message).finish()
        };
    }
};
