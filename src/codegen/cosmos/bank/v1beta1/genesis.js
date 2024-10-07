"use strict";
exports.__esModule = true;
exports.Balance = exports.GenesisState = void 0;
var bank_1 = require("./bank");
var coin_1 = require("../../base/v1beta1/coin");
var binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        params: bank_1.Params.fromPartial({}),
        balances: [],
        supply: [],
        denomMetadata: [],
        sendEnabled: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.bank.v1beta1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            bank_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.balances; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.supply; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.denomMetadata; _d < _e.length; _d++) {
            var v = _e[_d];
            bank_1.Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _f = 0, _g = message.sendEnabled; _f < _g.length; _f++) {
            var v = _g[_f];
            bank_1.SendEnabled.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = bank_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balances.push(exports.Balance.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.supply.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.denomMetadata.push(bank_1.Metadata.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sendEnabled.push(bank_1.SendEnabled.decode(reader, reader.uint32()));
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
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? bank_1.Params.fromPartial(object.params) : undefined;
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Balance.fromPartial(e); })) || [];
        message.supply = ((_b = object.supply) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.denomMetadata = ((_c = object.denomMetadata) === null || _c === void 0 ? void 0 : _c.map(function (e) { return bank_1.Metadata.fromPartial(e); })) || [];
        message.sendEnabled = ((_d = object.sendEnabled) === null || _d === void 0 ? void 0 : _d.map(function (e) { return bank_1.SendEnabled.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = bank_1.Params.fromAmino(object.params);
        }
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Balance.fromAmino(e); })) || [];
        message.supply = ((_b = object.supply) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        message.denomMetadata = ((_c = object.denom_metadata) === null || _c === void 0 ? void 0 : _c.map(function (e) { return bank_1.Metadata.fromAmino(e); })) || [];
        message.sendEnabled = ((_d = object.send_enabled) === null || _d === void 0 ? void 0 : _d.map(function (e) { return bank_1.SendEnabled.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? bank_1.Params.toAmino(message.params) : bank_1.Params.toAmino(bank_1.Params.fromPartial({}));
        if (message.balances) {
            obj.balances = message.balances.map(function (e) { return e ? exports.Balance.toAmino(e) : undefined; });
        }
        else {
            obj.balances = message.balances;
        }
        if (message.supply) {
            obj.supply = message.supply.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.supply = message.supply;
        }
        if (message.denomMetadata) {
            obj.denom_metadata = message.denomMetadata.map(function (e) { return e ? bank_1.Metadata.toAmino(e) : undefined; });
        }
        else {
            obj.denom_metadata = message.denomMetadata;
        }
        if (message.sendEnabled) {
            obj.send_enabled = message.sendEnabled.map(function (e) { return e ? bank_1.SendEnabled.toAmino(e) : undefined; });
        }
        else {
            obj.send_enabled = message.sendEnabled;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseBalance() {
    return {
        address: "",
        coins: []
    };
}
exports.Balance = {
    typeUrl: "/cosmos.bank.v1beta1.Balance",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.coins; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBalance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseBalance();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseBalance();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.coins = ((_a = object.coins) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.coins) {
            obj.coins = message.coins.map(function (e) { return e ? coin_1.Coin.toAmino(e) : undefined; });
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Balance.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Balance",
            value: exports.Balance.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Balance.decode(message.value);
    },
    toProto: function (message) {
        return exports.Balance.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Balance",
            value: exports.Balance.encode(message).finish()
        };
    }
};
