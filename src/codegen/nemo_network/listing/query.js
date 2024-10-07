"use strict";
exports.__esModule = true;
exports.QueryListingVaultDepositParamsResponse = exports.QueryListingVaultDepositParams = exports.QueryMarketsHardCapResponse = exports.QueryMarketsHardCap = void 0;
var params_1 = require("./params");
var binary_1 = require("../../binary");
function createBaseQueryMarketsHardCap() {
    return {};
}
exports.QueryMarketsHardCap = {
    typeUrl: "/nemo_network.listing.QueryMarketsHardCap",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketsHardCap();
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
        var message = createBaseQueryMarketsHardCap();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryMarketsHardCap();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketsHardCap.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketsHardCap.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketsHardCap.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.QueryMarketsHardCap",
            value: exports.QueryMarketsHardCap.encode(message).finish()
        };
    }
};
function createBaseQueryMarketsHardCapResponse() {
    return {
        hardCap: 0
    };
}
exports.QueryMarketsHardCapResponse = {
    typeUrl: "/nemo_network.listing.QueryMarketsHardCapResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.hardCap !== 0) {
            writer.uint32(8).uint32(message.hardCap);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketsHardCapResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hardCap = reader.uint32();
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
        var message = createBaseQueryMarketsHardCapResponse();
        message.hardCap = (_a = object.hardCap) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryMarketsHardCapResponse();
        if (object.hard_cap !== undefined && object.hard_cap !== null) {
            message.hardCap = object.hard_cap;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.hard_cap = message.hardCap === 0 ? undefined : message.hardCap;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryMarketsHardCapResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryMarketsHardCapResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryMarketsHardCapResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.QueryMarketsHardCapResponse",
            value: exports.QueryMarketsHardCapResponse.encode(message).finish()
        };
    }
};
function createBaseQueryListingVaultDepositParams() {
    return {};
}
exports.QueryListingVaultDepositParams = {
    typeUrl: "/nemo_network.listing.QueryListingVaultDepositParams",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryListingVaultDepositParams();
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
        var message = createBaseQueryListingVaultDepositParams();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryListingVaultDepositParams();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryListingVaultDepositParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryListingVaultDepositParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryListingVaultDepositParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.QueryListingVaultDepositParams",
            value: exports.QueryListingVaultDepositParams.encode(message).finish()
        };
    }
};
function createBaseQueryListingVaultDepositParamsResponse() {
    return {
        params: params_1.ListingVaultDepositParams.fromPartial({})
    };
}
exports.QueryListingVaultDepositParamsResponse = {
    typeUrl: "/nemo_network.listing.QueryListingVaultDepositParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            params_1.ListingVaultDepositParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryListingVaultDepositParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.ListingVaultDepositParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryListingVaultDepositParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.ListingVaultDepositParams.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryListingVaultDepositParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.ListingVaultDepositParams.fromAmino(object.params);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? params_1.ListingVaultDepositParams.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryListingVaultDepositParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryListingVaultDepositParamsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryListingVaultDepositParamsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.listing.QueryListingVaultDepositParamsResponse",
            value: exports.QueryListingVaultDepositParamsResponse.encode(message).finish()
        };
    }
};
