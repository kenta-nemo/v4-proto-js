"use strict";
exports.__esModule = true;
exports.MarketMapperRevenueShareParams = void 0;
var binary_1 = require("../../binary");
function createBaseMarketMapperRevenueShareParams() {
    return {
        address: "",
        revenueSharePpm: 0,
        validDays: 0
    };
}
exports.MarketMapperRevenueShareParams = {
    typeUrl: "/nemo_network.revshare.MarketMapperRevenueShareParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.revenueSharePpm !== 0) {
            writer.uint32(16).uint32(message.revenueSharePpm);
        }
        if (message.validDays !== 0) {
            writer.uint32(24).uint32(message.validDays);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketMapperRevenueShareParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.revenueSharePpm = reader.uint32();
                    break;
                case 3:
                    message.validDays = reader.uint32();
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
        var message = createBaseMarketMapperRevenueShareParams();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.revenueSharePpm = (_b = object.revenueSharePpm) !== null && _b !== void 0 ? _b : 0;
        message.validDays = (_c = object.validDays) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMarketMapperRevenueShareParams();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.revenue_share_ppm !== undefined && object.revenue_share_ppm !== null) {
            message.revenueSharePpm = object.revenue_share_ppm;
        }
        if (object.valid_days !== undefined && object.valid_days !== null) {
            message.validDays = object.valid_days;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.revenue_share_ppm = message.revenueSharePpm === 0 ? undefined : message.revenueSharePpm;
        obj.valid_days = message.validDays === 0 ? undefined : message.validDays;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MarketMapperRevenueShareParams.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MarketMapperRevenueShareParams.decode(message.value);
    },
    toProto: function (message) {
        return exports.MarketMapperRevenueShareParams.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.revshare.MarketMapperRevenueShareParams",
            value: exports.MarketMapperRevenueShareParams.encode(message).finish()
        };
    }
};
