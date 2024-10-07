"use strict";
exports.__esModule = true;
exports.AssetPosition = void 0;
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseAssetPosition() {
    return {
        assetId: 0,
        quantums: new Uint8Array(),
        index: BigInt(0)
    };
}
exports.AssetPosition = {
    typeUrl: "/nemo_network.subaccounts.AssetPosition",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.assetId !== 0) {
            writer.uint32(8).uint32(message.assetId);
        }
        if (message.quantums.length !== 0) {
            writer.uint32(18).bytes(message.quantums);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(24).uint64(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAssetPosition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint32();
                    break;
                case 2:
                    message.quantums = reader.bytes();
                    break;
                case 3:
                    message.index = reader.uint64();
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
        var message = createBaseAssetPosition();
        message.assetId = (_a = object.assetId) !== null && _a !== void 0 ? _a : 0;
        message.quantums = (_b = object.quantums) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAssetPosition();
        if (object.asset_id !== undefined && object.asset_id !== null) {
            message.assetId = object.asset_id;
        }
        if (object.quantums !== undefined && object.quantums !== null) {
            message.quantums = (0, helpers_1.bytesFromBase64)(object.quantums);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
        obj.quantums = message.quantums ? (0, helpers_1.base64FromBytes)(message.quantums) : undefined;
        obj.index = message.index !== BigInt(0) ? ((_a = message.index) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AssetPosition.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AssetPosition.decode(message.value);
    },
    toProto: function (message) {
        return exports.AssetPosition.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.subaccounts.AssetPosition",
            value: exports.AssetPosition.encode(message).finish()
        };
    }
};
