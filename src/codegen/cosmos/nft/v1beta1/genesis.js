"use strict";
exports.__esModule = true;
exports.Entry = exports.GenesisState = void 0;
var nft_1 = require("./nft");
var binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        classes: [],
        entries: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.nft.v1beta1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.classes; _i < _a.length; _i++) {
            var v = _a[_i];
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.entries; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Entry.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.entries.push(exports.Entry.decode(reader, reader.uint32()));
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
        var message = createBaseGenesisState();
        message.classes = ((_a = object.classes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return nft_1.Class.fromPartial(e); })) || [];
        message.entries = ((_b = object.entries) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Entry.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.classes = ((_a = object.classes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return nft_1.Class.fromAmino(e); })) || [];
        message.entries = ((_b = object.entries) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Entry.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(function (e) { return e ? nft_1.Class.toAmino(e) : undefined; });
        }
        else {
            obj.classes = message.classes;
        }
        if (message.entries) {
            obj.entries = message.entries.map(function (e) { return e ? exports.Entry.toAmino(e) : undefined; });
        }
        else {
            obj.entries = message.entries;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseEntry() {
    return {
        owner: "",
        nfts: []
    };
}
exports.Entry = {
    typeUrl: "/cosmos.nft.v1beta1.Entry",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (var _i = 0, _a = message.nfts; _i < _a.length; _i++) {
            var v = _a[_i];
            nft_1.NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
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
        var message = createBaseEntry();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.nfts = ((_b = object.nfts) === null || _b === void 0 ? void 0 : _b.map(function (e) { return nft_1.NFT.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseEntry();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.nfts = ((_a = object.nfts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return nft_1.NFT.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        if (message.nfts) {
            obj.nfts = message.nfts.map(function (e) { return e ? nft_1.NFT.toAmino(e) : undefined; });
        }
        else {
            obj.nfts = message.nfts;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.Entry.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/Entry",
            value: exports.Entry.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.Entry.decode(message.value);
    },
    toProto: function (message) {
        return exports.Entry.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.Entry",
            value: exports.Entry.encode(message).finish()
        };
    }
};
