"use strict";
exports.__esModule = true;
exports.MarketPriceUpdate = exports.ExchangePrice = exports.UpdateMarketPricesResponse = exports.UpdateMarketPricesRequest = void 0;
var timestamp_1 = require("../../../google/protobuf/timestamp");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBaseUpdateMarketPricesRequest() {
    return {
        marketPriceUpdates: []
    };
}
exports.UpdateMarketPricesRequest = {
    typeUrl: "/nemo_network.daemons.pricefeed.UpdateMarketPricesRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.marketPriceUpdates; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MarketPriceUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMarketPricesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketPriceUpdates.push(exports.MarketPriceUpdate.decode(reader, reader.uint32()));
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
        var message = createBaseUpdateMarketPricesRequest();
        message.marketPriceUpdates = ((_a = object.marketPriceUpdates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MarketPriceUpdate.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseUpdateMarketPricesRequest();
        message.marketPriceUpdates = ((_a = object.market_price_updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MarketPriceUpdate.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.marketPriceUpdates) {
            obj.market_price_updates = message.marketPriceUpdates.map(function (e) { return e ? exports.MarketPriceUpdate.toAmino(e) : undefined; });
        }
        else {
            obj.market_price_updates = message.marketPriceUpdates;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.UpdateMarketPricesRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.UpdateMarketPricesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.UpdateMarketPricesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.daemons.pricefeed.UpdateMarketPricesRequest",
            value: exports.UpdateMarketPricesRequest.encode(message).finish()
        };
    }
};
function createBaseUpdateMarketPricesResponse() {
    return {};
}
exports.UpdateMarketPricesResponse = {
    typeUrl: "/nemo_network.daemons.pricefeed.UpdateMarketPricesResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMarketPricesResponse();
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
        var message = createBaseUpdateMarketPricesResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseUpdateMarketPricesResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.UpdateMarketPricesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.UpdateMarketPricesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.UpdateMarketPricesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.daemons.pricefeed.UpdateMarketPricesResponse",
            value: exports.UpdateMarketPricesResponse.encode(message).finish()
        };
    }
};
function createBaseExchangePrice() {
    return {
        exchangeId: "",
        price: BigInt(0),
        lastUpdateTime: undefined
    };
}
exports.ExchangePrice = {
    typeUrl: "/nemo_network.daemons.pricefeed.ExchangePrice",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.exchangeId !== "") {
            writer.uint32(10).string(message.exchangeId);
        }
        if (message.price !== BigInt(0)) {
            writer.uint32(16).uint64(message.price);
        }
        if (message.lastUpdateTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastUpdateTime), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExchangePrice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeId = reader.string();
                    break;
                case 2:
                    message.price = reader.uint64();
                    break;
                case 3:
                    message.lastUpdateTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBaseExchangePrice();
        message.exchangeId = (_a = object.exchangeId) !== null && _a !== void 0 ? _a : "";
        message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
        message.lastUpdateTime = (_b = object.lastUpdateTime) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseExchangePrice();
        if (object.exchange_id !== undefined && object.exchange_id !== null) {
            message.exchangeId = object.exchange_id;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = BigInt(object.price);
        }
        if (object.last_update_time !== undefined && object.last_update_time !== null) {
            message.lastUpdateTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_update_time));
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.exchange_id = message.exchangeId === "" ? undefined : message.exchangeId;
        obj.price = message.price !== BigInt(0) ? ((_a = message.price) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.last_update_time = message.lastUpdateTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastUpdateTime)) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ExchangePrice.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ExchangePrice.decode(message.value);
    },
    toProto: function (message) {
        return exports.ExchangePrice.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.daemons.pricefeed.ExchangePrice",
            value: exports.ExchangePrice.encode(message).finish()
        };
    }
};
function createBaseMarketPriceUpdate() {
    return {
        marketId: 0,
        exchangePrices: []
    };
}
exports.MarketPriceUpdate = {
    typeUrl: "/nemo_network.daemons.pricefeed.MarketPriceUpdate",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.marketId !== 0) {
            writer.uint32(8).uint32(message.marketId);
        }
        for (var _i = 0, _a = message.exchangePrices; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ExchangePrice.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketPriceUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint32();
                    break;
                case 2:
                    message.exchangePrices.push(exports.ExchangePrice.decode(reader, reader.uint32()));
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
        var message = createBaseMarketPriceUpdate();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : 0;
        message.exchangePrices = ((_b = object.exchangePrices) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ExchangePrice.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseMarketPriceUpdate();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.exchangePrices = ((_a = object.exchange_prices) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ExchangePrice.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.market_id = message.marketId === 0 ? undefined : message.marketId;
        if (message.exchangePrices) {
            obj.exchange_prices = message.exchangePrices.map(function (e) { return e ? exports.ExchangePrice.toAmino(e) : undefined; });
        }
        else {
            obj.exchange_prices = message.exchangePrices;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketPriceUpdate.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketPriceUpdate.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketPriceUpdate.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.daemons.pricefeed.MarketPriceUpdate",
            value: exports.MarketPriceUpdate.encode(message).finish()
        };
    }
};
