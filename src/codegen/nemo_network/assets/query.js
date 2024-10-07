"use strict";
exports.__esModule = true;
exports.QueryAllAssetsResponse = exports.QueryAllAssetsRequest = exports.QueryAssetResponse = exports.QueryAssetRequest = void 0;
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var asset_1 = require("./asset");
var binary_1 = require("../../binary");
function createBaseQueryAssetRequest() {
    return {
        id: 0
    };
}
exports.QueryAssetRequest = {
    typeUrl: "/nemo_network.assets.QueryAssetRequest",
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
        var message = createBaseQueryAssetRequest();
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
        var message = createBaseQueryAssetRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAssetRequest();
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
        return exports.QueryAssetRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAssetRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAssetRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.assets.QueryAssetRequest",
            value: exports.QueryAssetRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAssetResponse() {
    return {
        asset: asset_1.Asset.fromPartial({})
    };
}
exports.QueryAssetResponse = {
    typeUrl: "/nemo_network.assets.QueryAssetResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.asset !== undefined) {
            asset_1.Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAssetResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = asset_1.Asset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAssetResponse();
        message.asset = object.asset !== undefined && object.asset !== null ? asset_1.Asset.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAssetResponse();
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = asset_1.Asset.fromAmino(object.asset);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.asset = message.asset ? asset_1.Asset.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAssetResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAssetResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAssetResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.assets.QueryAssetResponse",
            value: exports.QueryAssetResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllAssetsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllAssetsRequest = {
    typeUrl: "/nemo_network.assets.QueryAllAssetsRequest",
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
        var message = createBaseQueryAllAssetsRequest();
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
        var message = createBaseQueryAllAssetsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAllAssetsRequest();
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
        return exports.QueryAllAssetsRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllAssetsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllAssetsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.assets.QueryAllAssetsRequest",
            value: exports.QueryAllAssetsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllAssetsResponse() {
    return {
        asset: [],
        pagination: undefined
    };
}
exports.QueryAllAssetsResponse = {
    typeUrl: "/nemo_network.assets.QueryAllAssetsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.asset; _i < _a.length; _i++) {
            var v = _a[_i];
            asset_1.Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllAssetsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset.push(asset_1.Asset.decode(reader, reader.uint32()));
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
        var message = createBaseQueryAllAssetsResponse();
        message.asset = ((_a = object.asset) === null || _a === void 0 ? void 0 : _a.map(function (e) { return asset_1.Asset.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseQueryAllAssetsResponse();
        message.asset = ((_a = object.asset) === null || _a === void 0 ? void 0 : _a.map(function (e) { return asset_1.Asset.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.asset) {
            obj.asset = message.asset.map(function (e) { return e ? asset_1.Asset.toAmino(e) : undefined; });
        }
        else {
            obj.asset = message.asset;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAllAssetsResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryAllAssetsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAllAssetsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.assets.QueryAllAssetsResponse",
            value: exports.QueryAllAssetsResponse.encode(message).finish()
        };
    }
};
