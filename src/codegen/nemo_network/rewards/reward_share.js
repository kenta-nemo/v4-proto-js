"use strict";
exports.__esModule = true;
exports.RewardShare = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseRewardShare() {
    return {
        address: "",
        weight: new Uint8Array()
    };
}
exports.RewardShare = {
    typeUrl: "/nemo_network.rewards.RewardShare",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight.length !== 0) {
            writer.uint32(18).bytes(message.weight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRewardShare();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.bytes();
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
        var message = createBaseRewardShare();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.weight = (_b = object.weight) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseRewardShare();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = (0, helpers_1.bytesFromBase64)(object.weight);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.weight = message.weight ? (0, helpers_1.base64FromBytes)(message.weight) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.RewardShare.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.RewardShare.decode(message.value);
    },
    toProto: function (message) {
        return exports.RewardShare.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.rewards.RewardShare",
            value: exports.RewardShare.encode(message).finish()
        };
    }
};
