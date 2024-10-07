"use strict";
exports.__esModule = true;
exports.MsgUpdateMarketParamResponse = exports.MsgUpdateMarketParam = exports.MsgUpdateMarketPricesResponse = exports.MsgUpdateMarketPrices_MarketPrice = exports.MsgUpdateMarketPrices = exports.MsgCreateOracleMarketResponse = exports.MsgCreateOracleMarket = void 0;
var market_param_1 = require("./market_param");
var binary_1 = require("../../binary");
function createBaseMsgCreateOracleMarket() {
    return {
        authority: "",
        params: market_param_1.MarketParam.fromPartial({})
    };
}
exports.MsgCreateOracleMarket = {
    typeUrl: "/nemo_network.prices.MsgCreateOracleMarket",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            market_param_1.MarketParam.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateOracleMarket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = market_param_1.MarketParam.decode(reader, reader.uint32());
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
        var message = createBaseMsgCreateOracleMarket();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = object.params !== undefined && object.params !== null ? market_param_1.MarketParam.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgCreateOracleMarket();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = market_param_1.MarketParam.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? market_param_1.MarketParam.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateOracleMarket.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateOracleMarket.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateOracleMarket.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.MsgCreateOracleMarket",
            value: exports.MsgCreateOracleMarket.encode(message).finish()
        };
    }
};
function createBaseMsgCreateOracleMarketResponse() {
    return {};
}
exports.MsgCreateOracleMarketResponse = {
    typeUrl: "/nemo_network.prices.MsgCreateOracleMarketResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateOracleMarketResponse();
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
        var message = createBaseMsgCreateOracleMarketResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgCreateOracleMarketResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgCreateOracleMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgCreateOracleMarketResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgCreateOracleMarketResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.MsgCreateOracleMarketResponse",
            value: exports.MsgCreateOracleMarketResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateMarketPrices() {
    return {
        marketPriceUpdates: []
    };
}
exports.MsgUpdateMarketPrices = {
    typeUrl: "/nemo_network.prices.MsgUpdateMarketPrices",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.marketPriceUpdates; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MsgUpdateMarketPrices_MarketPrice.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateMarketPrices();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketPriceUpdates.push(exports.MsgUpdateMarketPrices_MarketPrice.decode(reader, reader.uint32()));
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
        var message = createBaseMsgUpdateMarketPrices();
        message.marketPriceUpdates = ((_a = object.marketPriceUpdates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MsgUpdateMarketPrices_MarketPrice.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMsgUpdateMarketPrices();
        message.marketPriceUpdates = ((_a = object.market_price_updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MsgUpdateMarketPrices_MarketPrice.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.marketPriceUpdates) {
            obj.market_price_updates = message.marketPriceUpdates.map(function (e) { return e ? exports.MsgUpdateMarketPrices_MarketPrice.toAmino(e) : undefined; });
        }
        else {
            obj.market_price_updates = message.marketPriceUpdates;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateMarketPrices.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateMarketPrices.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateMarketPrices.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.MsgUpdateMarketPrices",
            value: exports.MsgUpdateMarketPrices.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateMarketPrices_MarketPrice() {
    return {
        marketId: 0,
        price: BigInt(0)
    };
}
exports.MsgUpdateMarketPrices_MarketPrice = {
    typeUrl: "/nemo_network.prices.MarketPrice",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.marketId !== 0) {
            writer.uint32(8).uint32(message.marketId);
        }
        if (message.price !== BigInt(0)) {
            writer.uint32(16).uint64(message.price);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateMarketPrices_MarketPrice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint32();
                    break;
                case 2:
                    message.price = reader.uint64();
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
        var message = createBaseMsgUpdateMarketPrices_MarketPrice();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : 0;
        message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateMarketPrices_MarketPrice();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = BigInt(object.price);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        obj.price = message.price !== BigInt(0) ? ((_a = message.price) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateMarketPrices_MarketPrice.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateMarketPrices_MarketPrice.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateMarketPrices_MarketPrice.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.MarketPrice",
            value: exports.MsgUpdateMarketPrices_MarketPrice.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateMarketPricesResponse() {
    return {};
}
exports.MsgUpdateMarketPricesResponse = {
    typeUrl: "/nemo_network.prices.MsgUpdateMarketPricesResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateMarketPricesResponse();
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
        var message = createBaseMsgUpdateMarketPricesResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateMarketPricesResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateMarketPricesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateMarketPricesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateMarketPricesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.MsgUpdateMarketPricesResponse",
            value: exports.MsgUpdateMarketPricesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateMarketParam() {
    return {
        authority: "",
        marketParam: market_param_1.MarketParam.fromPartial({})
    };
}
exports.MsgUpdateMarketParam = {
    typeUrl: "/nemo_network.prices.MsgUpdateMarketParam",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.marketParam !== undefined) {
            market_param_1.MarketParam.encode(message.marketParam, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateMarketParam();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.marketParam = market_param_1.MarketParam.decode(reader, reader.uint32());
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
        var message = createBaseMsgUpdateMarketParam();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.marketParam = object.marketParam !== undefined && object.marketParam !== null ? market_param_1.MarketParam.fromPartial(object.marketParam) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateMarketParam();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.market_param !== undefined && object.market_param !== null) {
            message.marketParam = market_param_1.MarketParam.fromAmino(object.market_param);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.market_param = message.marketParam ? market_param_1.MarketParam.toAmino(message.marketParam) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateMarketParam.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateMarketParam.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateMarketParam.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.MsgUpdateMarketParam",
            value: exports.MsgUpdateMarketParam.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateMarketParamResponse() {
    return {};
}
exports.MsgUpdateMarketParamResponse = {
    typeUrl: "/nemo_network.prices.MsgUpdateMarketParamResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateMarketParamResponse();
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
        var message = createBaseMsgUpdateMarketParamResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateMarketParamResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateMarketParamResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateMarketParamResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateMarketParamResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.MsgUpdateMarketParamResponse",
            value: exports.MsgUpdateMarketParamResponse.encode(message).finish()
        };
    }
};
