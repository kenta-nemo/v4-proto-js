"use strict";
exports.__esModule = true;
exports.MarketMapperRevShareDetails = void 0;
var binary_1 = require("../../binary");
function createBaseMarketMapperRevShareDetails() {
    return {
        expirationTs: BigInt(0)
    };
}
exports.MarketMapperRevShareDetails = {
    typeUrl: "/nemo_network.revshare.MarketMapperRevShareDetails",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.expirationTs !== BigInt(0)) {
            writer.uint32(8).uint64(message.expirationTs);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketMapperRevShareDetails();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.expirationTs = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMarketMapperRevShareDetails();
        message.expirationTs = object.expirationTs !== undefined && object.expirationTs !== null ? BigInt(object.expirationTs.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketMapperRevShareDetails();
        if (object.expiration_ts !== undefined && object.expiration_ts !== null) {
            message.expirationTs = BigInt(object.expiration_ts);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.expiration_ts = message.expirationTs !== BigInt(0) ? ((_a = message.expirationTs) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketMapperRevShareDetails.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketMapperRevShareDetails.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketMapperRevShareDetails.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.MarketMapperRevShareDetails",
            value: exports.MarketMapperRevShareDetails.encode(message).finish()
        };
    }
};
