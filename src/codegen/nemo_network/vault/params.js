"use strict";
exports.__esModule = true;
exports.Params = exports.VaultParams = exports.QuotingParams = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseQuotingParams() {
    return {
        layers: 0,
        spreadMinPpm: 0,
        spreadBufferPpm: 0,
        skewFactorPpm: 0,
        orderSizePctPpm: 0,
        orderExpirationSeconds: 0,
        activationThresholdQuoteQuantums: new Uint8Array()
    };
}
exports.QuotingParams = {
    typeUrl: "/nemo_network.vault.QuotingParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.layers !== 0) {
            writer.uint32(8).uint32(message.layers);
        }
        if (message.spreadMinPpm !== 0) {
            writer.uint32(16).uint32(message.spreadMinPpm);
        }
        if (message.spreadBufferPpm !== 0) {
            writer.uint32(24).uint32(message.spreadBufferPpm);
        }
        if (message.skewFactorPpm !== 0) {
            writer.uint32(32).uint32(message.skewFactorPpm);
        }
        if (message.orderSizePctPpm !== 0) {
            writer.uint32(40).uint32(message.orderSizePctPpm);
        }
        if (message.orderExpirationSeconds !== 0) {
            writer.uint32(48).uint32(message.orderExpirationSeconds);
        }
        if (message.activationThresholdQuoteQuantums.length !== 0) {
            writer.uint32(58).bytes(message.activationThresholdQuoteQuantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuotingParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.layers = reader.uint32();
                    break;
                case 2:
                    message.spreadMinPpm = reader.uint32();
                    break;
                case 3:
                    message.spreadBufferPpm = reader.uint32();
                    break;
                case 4:
                    message.skewFactorPpm = reader.uint32();
                    break;
                case 5:
                    message.orderSizePctPpm = reader.uint32();
                    break;
                case 6:
                    message.orderExpirationSeconds = reader.uint32();
                    break;
                case 7:
                    message.activationThresholdQuoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseQuotingParams();
        message.layers = (_a = object.layers) !== null && _a !== void 0 ? _a : 0;
        message.spreadMinPpm = (_b = object.spreadMinPpm) !== null && _b !== void 0 ? _b : 0;
        message.spreadBufferPpm = (_c = object.spreadBufferPpm) !== null && _c !== void 0 ? _c : 0;
        message.skewFactorPpm = (_d = object.skewFactorPpm) !== null && _d !== void 0 ? _d : 0;
        message.orderSizePctPpm = (_e = object.orderSizePctPpm) !== null && _e !== void 0 ? _e : 0;
        message.orderExpirationSeconds = (_f = object.orderExpirationSeconds) !== null && _f !== void 0 ? _f : 0;
        message.activationThresholdQuoteQuantums = (_g = object.activationThresholdQuoteQuantums) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQuotingParams();
        if (object.layers !== undefined && object.layers !== null) {
            message.layers = object.layers;
        }
        if (object.spread_min_ppm !== undefined && object.spread_min_ppm !== null) {
            message.spreadMinPpm = object.spread_min_ppm;
        }
        if (object.spread_buffer_ppm !== undefined && object.spread_buffer_ppm !== null) {
            message.spreadBufferPpm = object.spread_buffer_ppm;
        }
        if (object.skew_factor_ppm !== undefined && object.skew_factor_ppm !== null) {
            message.skewFactorPpm = object.skew_factor_ppm;
        }
        if (object.order_size_pct_ppm !== undefined && object.order_size_pct_ppm !== null) {
            message.orderSizePctPpm = object.order_size_pct_ppm;
        }
        if (object.order_expiration_seconds !== undefined && object.order_expiration_seconds !== null) {
            message.orderExpirationSeconds = object.order_expiration_seconds;
        }
        if (object.activation_threshold_quote_quantums !== undefined && object.activation_threshold_quote_quantums !== null) {
            message.activationThresholdQuoteQuantums = (0, helpers_1.bytesFromBase64)(object.activation_threshold_quote_quantums);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.layers = message.layers === 0 ? undefined : message.layers;
        obj.spread_min_ppm = message.spreadMinPpm === 0 ? undefined : message.spreadMinPpm;
        obj.spread_buffer_ppm = message.spreadBufferPpm === 0 ? undefined : message.spreadBufferPpm;
        obj.skew_factor_ppm = message.skewFactorPpm === 0 ? undefined : message.skewFactorPpm;
        obj.order_size_pct_ppm = message.orderSizePctPpm === 0 ? undefined : message.orderSizePctPpm;
        obj.order_expiration_seconds = message.orderExpirationSeconds === 0 ? undefined : message.orderExpirationSeconds;
        obj.activation_threshold_quote_quantums = message.activationThresholdQuoteQuantums ? (0, helpers_1.base64FromBytes)(message.activationThresholdQuoteQuantums) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QuotingParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QuotingParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.QuotingParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.QuotingParams",
            value: exports.QuotingParams.encode(message).finish()
        };
    }
};
function createBaseVaultParams() {
    return {
        status: 0,
        quotingParams: undefined
    };
}
exports.VaultParams = {
    typeUrl: "/nemo_network.vault.VaultParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.quotingParams !== undefined) {
            exports.QuotingParams.encode(message.quotingParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVaultParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.quotingParams = exports.QuotingParams.decode(reader, reader.uint32());
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
        var message = createBaseVaultParams();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.quotingParams = object.quotingParams !== undefined && object.quotingParams !== null ? exports.QuotingParams.fromPartial(object.quotingParams) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseVaultParams();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.quoting_params !== undefined && object.quoting_params !== null) {
            message.quotingParams = exports.QuotingParams.fromAmino(object.quoting_params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.status = message.status === 0 ? undefined : message.status;
        obj.quoting_params = message.quotingParams ? exports.QuotingParams.toAmino(message.quotingParams) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.VaultParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.VaultParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.VaultParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.VaultParams",
            value: exports.VaultParams.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        layers: 0,
        spreadMinPpm: 0,
        spreadBufferPpm: 0,
        skewFactorPpm: 0,
        orderSizePctPpm: 0,
        orderExpirationSeconds: 0,
        activationThresholdQuoteQuantums: new Uint8Array()
    };
}
exports.Params = {
    typeUrl: "/nemo_network.vault.Params",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.layers !== 0) {
            writer.uint32(8).uint32(message.layers);
        }
        if (message.spreadMinPpm !== 0) {
            writer.uint32(16).uint32(message.spreadMinPpm);
        }
        if (message.spreadBufferPpm !== 0) {
            writer.uint32(24).uint32(message.spreadBufferPpm);
        }
        if (message.skewFactorPpm !== 0) {
            writer.uint32(32).uint32(message.skewFactorPpm);
        }
        if (message.orderSizePctPpm !== 0) {
            writer.uint32(40).uint32(message.orderSizePctPpm);
        }
        if (message.orderExpirationSeconds !== 0) {
            writer.uint32(48).uint32(message.orderExpirationSeconds);
        }
        if (message.activationThresholdQuoteQuantums.length !== 0) {
            writer.uint32(58).bytes(message.activationThresholdQuoteQuantums);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.layers = reader.uint32();
                    break;
                case 2:
                    message.spreadMinPpm = reader.uint32();
                    break;
                case 3:
                    message.spreadBufferPpm = reader.uint32();
                    break;
                case 4:
                    message.skewFactorPpm = reader.uint32();
                    break;
                case 5:
                    message.orderSizePctPpm = reader.uint32();
                    break;
                case 6:
                    message.orderExpirationSeconds = reader.uint32();
                    break;
                case 7:
                    message.activationThresholdQuoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseParams();
        message.layers = (_a = object.layers) !== null && _a !== void 0 ? _a : 0;
        message.spreadMinPpm = (_b = object.spreadMinPpm) !== null && _b !== void 0 ? _b : 0;
        message.spreadBufferPpm = (_c = object.spreadBufferPpm) !== null && _c !== void 0 ? _c : 0;
        message.skewFactorPpm = (_d = object.skewFactorPpm) !== null && _d !== void 0 ? _d : 0;
        message.orderSizePctPpm = (_e = object.orderSizePctPpm) !== null && _e !== void 0 ? _e : 0;
        message.orderExpirationSeconds = (_f = object.orderExpirationSeconds) !== null && _f !== void 0 ? _f : 0;
        message.activationThresholdQuoteQuantums = (_g = object.activationThresholdQuoteQuantums) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseParams();
        if (object.layers !== undefined && object.layers !== null) {
            message.layers = object.layers;
        }
        if (object.spread_min_ppm !== undefined && object.spread_min_ppm !== null) {
            message.spreadMinPpm = object.spread_min_ppm;
        }
        if (object.spread_buffer_ppm !== undefined && object.spread_buffer_ppm !== null) {
            message.spreadBufferPpm = object.spread_buffer_ppm;
        }
        if (object.skew_factor_ppm !== undefined && object.skew_factor_ppm !== null) {
            message.skewFactorPpm = object.skew_factor_ppm;
        }
        if (object.order_size_pct_ppm !== undefined && object.order_size_pct_ppm !== null) {
            message.orderSizePctPpm = object.order_size_pct_ppm;
        }
        if (object.order_expiration_seconds !== undefined && object.order_expiration_seconds !== null) {
            message.orderExpirationSeconds = object.order_expiration_seconds;
        }
        if (object.activation_threshold_quote_quantums !== undefined && object.activation_threshold_quote_quantums !== null) {
            message.activationThresholdQuoteQuantums = (0, helpers_1.bytesFromBase64)(object.activation_threshold_quote_quantums);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.layers = message.layers === 0 ? undefined : message.layers;
        obj.spread_min_ppm = message.spreadMinPpm === 0 ? undefined : message.spreadMinPpm;
        obj.spread_buffer_ppm = message.spreadBufferPpm === 0 ? undefined : message.spreadBufferPpm;
        obj.skew_factor_ppm = message.skewFactorPpm === 0 ? undefined : message.skewFactorPpm;
        obj.order_size_pct_ppm = message.orderSizePctPpm === 0 ? undefined : message.orderSizePctPpm;
        obj.order_expiration_seconds = message.orderExpirationSeconds === 0 ? undefined : message.orderExpirationSeconds;
        obj.activation_threshold_quote_quantums = message.activationThresholdQuoteQuantums ? (0, helpers_1.base64FromBytes)(message.activationThresholdQuoteQuantums) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.Params.decode(message.value);
    },
    toProto: function (message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vault.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
