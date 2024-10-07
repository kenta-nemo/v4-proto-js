"use strict";
exports.__esModule = true;
exports.DecProto = exports.IntProto = exports.DecCoin = exports.Coin = void 0;
var binary_1 = require("../../../binary");
var math_1 = require("@cosmjs/math");
function createBaseCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.Coin = {
    typeUrl: "/cosmos.base.v1beta1.Coin",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCoin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
        var message = createBaseCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseCoin();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.amount = (_a = message.amount) !== null && _a !== void 0 ? _a : "";
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Coin.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Coin",
            value: exports.Coin.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Coin.decode(message.value);
    },
    toProto: function (message) {
        return exports.Coin.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.Coin",
            value: exports.Coin.encode(message).finish()
        };
    }
};
function createBaseDecCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.DecCoin = {
    typeUrl: "/cosmos.base.v1beta1.DecCoin",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.amount, 18).atomics);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDecCoin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        var message = createBaseDecCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDecCoin();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DecCoin.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/DecCoin",
            value: exports.DecCoin.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.DecCoin.decode(message.value);
    },
    toProto: function (message) {
        return exports.DecCoin.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecCoin",
            value: exports.DecCoin.encode(message).finish()
        };
    }
};
function createBaseIntProto() {
    return {
        int: ""
    };
}
exports.IntProto = {
    typeUrl: "/cosmos.base.v1beta1.IntProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.int !== "") {
            writer.uint32(10).string(message.int);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIntProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.int = reader.string();
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
        var message = createBaseIntProto();
        message.int = (_a = object.int) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseIntProto();
        if (object.int !== undefined && object.int !== null) {
            message.int = object.int;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.int = message.int === "" ? undefined : message.int;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.IntProto.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/IntProto",
            value: exports.IntProto.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.IntProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.IntProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.IntProto",
            value: exports.IntProto.encode(message).finish()
        };
    }
};
function createBaseDecProto() {
    return {
        dec: ""
    };
}
exports.DecProto = {
    typeUrl: "/cosmos.base.v1beta1.DecProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.dec !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.dec, 18).atomics);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDecProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dec = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        var message = createBaseDecProto();
        message.dec = (_a = object.dec) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseDecProto();
        if (object.dec !== undefined && object.dec !== null) {
            message.dec = object.dec;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.dec = message.dec === "" ? undefined : message.dec;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DecProto.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/DecProto",
            value: exports.DecProto.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.DecProto.decode(message.value);
    },
    toProto: function (message) {
        return exports.DecProto.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecProto",
            value: exports.DecProto.encode(message).finish()
        };
    }
};
