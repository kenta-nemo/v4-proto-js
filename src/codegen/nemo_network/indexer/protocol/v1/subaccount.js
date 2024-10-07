"use strict";
exports.__esModule = true;
exports.IndexerAssetPosition = exports.IndexerPerpetualPosition = exports.IndexerSubaccountId = void 0;
var binary_1 = require("../../../../binary");
var helpers_1 = require("../../../../helpers");
function createBaseIndexerSubaccountId() {
    return {
        owner: "",
        number: 0
    };
}
exports.IndexerSubaccountId = {
    typeUrl: "/nemo_network.indexer.protocol.v1.IndexerSubaccountId",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.number !== 0) {
            writer.uint32(16).uint32(message.number);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIndexerSubaccountId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.number = reader.uint32();
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
        var message = createBaseIndexerSubaccountId();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseIndexerSubaccountId();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.number = message.number === 0 ? undefined : message.number;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.IndexerSubaccountId.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.IndexerSubaccountId.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexerSubaccountId.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.protocol.v1.IndexerSubaccountId",
            value: exports.IndexerSubaccountId.encode(message).finish()
        };
    }
};
function createBaseIndexerPerpetualPosition() {
    return {
        perpetualId: 0,
        quantums: new Uint8Array(),
        fundingIndex: new Uint8Array(),
        fundingPayment: new Uint8Array()
    };
}
exports.IndexerPerpetualPosition = {
    typeUrl: "/nemo_network.indexer.protocol.v1.IndexerPerpetualPosition",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        if (message.quantums.length !== 0) {
            writer.uint32(18).bytes(message.quantums);
        }
        if (message.fundingIndex.length !== 0) {
            writer.uint32(26).bytes(message.fundingIndex);
        }
        if (message.fundingPayment.length !== 0) {
            writer.uint32(34).bytes(message.fundingPayment);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIndexerPerpetualPosition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    message.quantums = reader.bytes();
                    break;
                case 3:
                    message.fundingIndex = reader.bytes();
                    break;
                case 4:
                    message.fundingPayment = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseIndexerPerpetualPosition();
        message.perpetualId = (_a = object.perpetualId) !== null && _a !== void 0 ? _a : 0;
        message.quantums = (_b = object.quantums) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.fundingIndex = (_c = object.fundingIndex) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.fundingPayment = (_d = object.fundingPayment) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseIndexerPerpetualPosition();
        if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
            message.perpetualId = object.perpetual_id;
        }
        if (object.quantums !== undefined && object.quantums !== null) {
            message.quantums = (0, helpers_1.bytesFromBase64)(object.quantums);
        }
        if (object.funding_index !== undefined && object.funding_index !== null) {
            message.fundingIndex = (0, helpers_1.bytesFromBase64)(object.funding_index);
        }
        if (object.funding_payment !== undefined && object.funding_payment !== null) {
            message.fundingPayment = (0, helpers_1.bytesFromBase64)(object.funding_payment);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
        obj.quantums = message.quantums ? (0, helpers_1.base64FromBytes)(message.quantums) : undefined;
        obj.funding_index = message.fundingIndex ? (0, helpers_1.base64FromBytes)(message.fundingIndex) : undefined;
        obj.funding_payment = message.fundingPayment ? (0, helpers_1.base64FromBytes)(message.fundingPayment) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.IndexerPerpetualPosition.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.IndexerPerpetualPosition.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexerPerpetualPosition.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.protocol.v1.IndexerPerpetualPosition",
            value: exports.IndexerPerpetualPosition.encode(message).finish()
        };
    }
};
function createBaseIndexerAssetPosition() {
    return {
        assetId: 0,
        quantums: new Uint8Array(),
        index: BigInt(0)
    };
}
exports.IndexerAssetPosition = {
    typeUrl: "/nemo_network.indexer.protocol.v1.IndexerAssetPosition",
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
        var message = createBaseIndexerAssetPosition();
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
        var message = createBaseIndexerAssetPosition();
        message.assetId = (_a = object.assetId) !== null && _a !== void 0 ? _a : 0;
        message.quantums = (_b = object.quantums) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseIndexerAssetPosition();
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
        return exports.IndexerAssetPosition.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.IndexerAssetPosition.decode(message.value);
    },
    toProto: function (message) {
        return exports.IndexerAssetPosition.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.indexer.protocol.v1.IndexerAssetPosition",
            value: exports.IndexerAssetPosition.encode(message).finish()
        };
    }
};
