"use strict";
exports.__esModule = true;
exports.QueryAllMarketParamsResponse = exports.QueryAllMarketParamsRequest = exports.QueryMarketParamResponse = exports.QueryMarketParamRequest = exports.QueryAllMarketPricesResponse = exports.QueryAllMarketPricesRequest = exports.QueryMarketPriceResponse = exports.QueryMarketPriceRequest = void 0;
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var market_price_1 = require("./market_price");
var market_param_1 = require("./market_param");
var binary_1 = require("../../binary");
function createBaseQueryMarketPriceRequest() {
    return {
        id: 0
    };
}
exports.QueryMarketPriceRequest = {
    typeUrl: "/nemo_network.prices.QueryMarketPriceRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketPriceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
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
        var message = createBaseQueryMarketPriceRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMarketPriceRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketPriceRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketPriceRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketPriceRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.QueryMarketPriceRequest",
            value: exports.QueryMarketPriceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMarketPriceResponse() {
    return {
        marketPrice: market_price_1.MarketPrice.fromPartial({})
    };
}
exports.QueryMarketPriceResponse = {
    typeUrl: "/nemo_network.prices.QueryMarketPriceResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.marketPrice !== undefined) {
            market_price_1.MarketPrice.encode(message.marketPrice, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketPriceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketPrice = market_price_1.MarketPrice.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryMarketPriceResponse();
        message.marketPrice = object.marketPrice !== undefined && object.marketPrice !== null ? market_price_1.MarketPrice.fromPartial(object.marketPrice) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMarketPriceResponse();
        if (object.market_price !== undefined && object.market_price !== null) {
            message.marketPrice = market_price_1.MarketPrice.fromAmino(object.market_price);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.market_price = message.marketPrice ? market_price_1.MarketPrice.toAmino(message.marketPrice) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketPriceResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketPriceResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketPriceResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.QueryMarketPriceResponse",
            value: exports.QueryMarketPriceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllMarketPricesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllMarketPricesRequest = {
    typeUrl: "/nemo_network.prices.QueryAllMarketPricesRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllMarketPricesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllMarketPricesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllMarketPricesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllMarketPricesRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllMarketPricesRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllMarketPricesRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.QueryAllMarketPricesRequest",
            value: exports.QueryAllMarketPricesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllMarketPricesResponse() {
    return {
        marketPrices: [],
        pagination: undefined
    };
}
exports.QueryAllMarketPricesResponse = {
    typeUrl: "/nemo_network.prices.QueryAllMarketPricesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.marketPrices; _i < _a.length; _i++) {
            var v = _a[_i];
            market_price_1.MarketPrice.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllMarketPricesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketPrices.push(market_price_1.MarketPrice.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryAllMarketPricesResponse();
        message.marketPrices = ((_a = object.marketPrices) === null || _a === void 0 ? void 0 : _a.map(function (e) { return market_price_1.MarketPrice.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryAllMarketPricesResponse();
        message.marketPrices = ((_a = object.market_prices) === null || _a === void 0 ? void 0 : _a.map(function (e) { return market_price_1.MarketPrice.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.marketPrices) {
            obj.market_prices = message.marketPrices.map(function (e) { return e ? market_price_1.MarketPrice.toAmino(e) : undefined; });
        }
        else {
            obj.market_prices = message.marketPrices;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllMarketPricesResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllMarketPricesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllMarketPricesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.QueryAllMarketPricesResponse",
            value: exports.QueryAllMarketPricesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMarketParamRequest() {
    return {
        id: 0
    };
}
exports.QueryMarketParamRequest = {
    typeUrl: "/nemo_network.prices.QueryMarketParamRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketParamRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
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
        var message = createBaseQueryMarketParamRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMarketParamRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketParamRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketParamRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketParamRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.QueryMarketParamRequest",
            value: exports.QueryMarketParamRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMarketParamResponse() {
    return {
        marketParam: market_param_1.MarketParam.fromPartial({})
    };
}
exports.QueryMarketParamResponse = {
    typeUrl: "/nemo_network.prices.QueryMarketParamResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.marketParam !== undefined) {
            market_param_1.MarketParam.encode(message.marketParam, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketParamResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = createBaseQueryMarketParamResponse();
        message.marketParam = object.marketParam !== undefined && object.marketParam !== null ? market_param_1.MarketParam.fromPartial(object.marketParam) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMarketParamResponse();
        if (object.market_param !== undefined && object.market_param !== null) {
            message.marketParam = market_param_1.MarketParam.fromAmino(object.market_param);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.market_param = message.marketParam ? market_param_1.MarketParam.toAmino(message.marketParam) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketParamResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketParamResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketParamResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.QueryMarketParamResponse",
            value: exports.QueryMarketParamResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllMarketParamsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllMarketParamsRequest = {
    typeUrl: "/nemo_network.prices.QueryAllMarketParamsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllMarketParamsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllMarketParamsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllMarketParamsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllMarketParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllMarketParamsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllMarketParamsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.QueryAllMarketParamsRequest",
            value: exports.QueryAllMarketParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllMarketParamsResponse() {
    return {
        marketParams: [],
        pagination: undefined
    };
}
exports.QueryAllMarketParamsResponse = {
    typeUrl: "/nemo_network.prices.QueryAllMarketParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.marketParams; _i < _a.length; _i++) {
            var v = _a[_i];
            market_param_1.MarketParam.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllMarketParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketParams.push(market_param_1.MarketParam.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryAllMarketParamsResponse();
        message.marketParams = ((_a = object.marketParams) === null || _a === void 0 ? void 0 : _a.map(function (e) { return market_param_1.MarketParam.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryAllMarketParamsResponse();
        message.marketParams = ((_a = object.market_params) === null || _a === void 0 ? void 0 : _a.map(function (e) { return market_param_1.MarketParam.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.marketParams) {
            obj.market_params = message.marketParams.map(function (e) { return e ? market_param_1.MarketParam.toAmino(e) : undefined; });
        }
        else {
            obj.market_params = message.marketParams;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllMarketParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllMarketParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllMarketParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.prices.QueryAllMarketParamsResponse",
            value: exports.QueryAllMarketParamsResponse.encode(message).finish()
        };
    }
};
