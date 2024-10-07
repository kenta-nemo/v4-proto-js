"use strict";
exports.__esModule = true;
exports.QueryVestEntryResponse = exports.QueryVestEntryRequest = void 0;
var vest_entry_1 = require("./vest_entry");
var binary_1 = require("../../binary");
function createBaseQueryVestEntryRequest() {
    return {
        vesterAccount: ""
    };
}
exports.QueryVestEntryRequest = {
    typeUrl: "/nemo_network.vest.QueryVestEntryRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.vesterAccount !== "") {
            writer.uint32(10).string(message.vesterAccount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVestEntryRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vesterAccount = reader.string();
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
        var message = createBaseQueryVestEntryRequest();
        message.vesterAccount = (_a = object.vesterAccount) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryVestEntryRequest();
        if (object.vester_account !== undefined && object.vester_account !== null) {
            message.vesterAccount = object.vester_account;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.vester_account = message.vesterAccount === "" ? undefined : message.vesterAccount;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryVestEntryRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryVestEntryRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryVestEntryRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vest.QueryVestEntryRequest",
            value: exports.QueryVestEntryRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVestEntryResponse() {
    return {
        entry: vest_entry_1.VestEntry.fromPartial({})
    };
}
exports.QueryVestEntryResponse = {
    typeUrl: "/nemo_network.vest.QueryVestEntryResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.entry !== undefined) {
            vest_entry_1.VestEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVestEntryResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entry = vest_entry_1.VestEntry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryVestEntryResponse();
        message.entry = object.entry !== undefined && object.entry !== null ? vest_entry_1.VestEntry.fromPartial(object.entry) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryVestEntryResponse();
        if (object.entry !== undefined && object.entry !== null) {
            message.entry = vest_entry_1.VestEntry.fromAmino(object.entry);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.entry = message.entry ? vest_entry_1.VestEntry.toAmino(message.entry) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryVestEntryResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.QueryVestEntryResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryVestEntryResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vest.QueryVestEntryResponse",
            value: exports.QueryVestEntryResponse.encode(message).finish()
        };
    }
};
