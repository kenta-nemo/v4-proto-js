"use strict";
exports.__esModule = true;
exports.MsgSetVestEntryResponse = exports.MsgSetVestEntry = exports.MsgDeleteVestEntryResponse = exports.MsgDeleteVestEntry = void 0;
var vest_entry_1 = require("./vest_entry");
var binary_1 = require("../../binary");
function createBaseMsgDeleteVestEntry() {
    return {
        authority: "",
        vesterAccount: ""
    };
}
exports.MsgDeleteVestEntry = {
    typeUrl: "/nemo_network.vest.MsgDeleteVestEntry",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.vesterAccount !== "") {
            writer.uint32(18).string(message.vesterAccount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDeleteVestEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a, _b;
        var message = createBaseMsgDeleteVestEntry();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.vesterAccount = (_b = object.vesterAccount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgDeleteVestEntry();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.vester_account !== undefined && object.vester_account !== null) {
            message.vesterAccount = object.vester_account;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.vester_account = message.vesterAccount === "" ? undefined : message.vesterAccount;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDeleteVestEntry.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgDeleteVestEntry.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDeleteVestEntry.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vest.MsgDeleteVestEntry",
            value: exports.MsgDeleteVestEntry.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteVestEntryResponse() {
    return {};
}
exports.MsgDeleteVestEntryResponse = {
    typeUrl: "/nemo_network.vest.MsgDeleteVestEntryResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDeleteVestEntryResponse();
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
        var message = createBaseMsgDeleteVestEntryResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgDeleteVestEntryResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgDeleteVestEntryResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgDeleteVestEntryResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgDeleteVestEntryResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vest.MsgDeleteVestEntryResponse",
            value: exports.MsgDeleteVestEntryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetVestEntry() {
    return {
        authority: "",
        entry: vest_entry_1.VestEntry.fromPartial({})
    };
}
exports.MsgSetVestEntry = {
    typeUrl: "/nemo_network.vest.MsgSetVestEntry",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.entry !== undefined) {
            vest_entry_1.VestEntry.encode(message.entry, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetVestEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        var _a;
        var message = createBaseMsgSetVestEntry();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.entry = object.entry !== undefined && object.entry !== null ? vest_entry_1.VestEntry.fromPartial(object.entry) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSetVestEntry();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.entry !== undefined && object.entry !== null) {
            message.entry = vest_entry_1.VestEntry.fromAmino(object.entry);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.entry = message.entry ? vest_entry_1.VestEntry.toAmino(message.entry) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetVestEntry.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetVestEntry.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetVestEntry.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vest.MsgSetVestEntry",
            value: exports.MsgSetVestEntry.encode(message).finish()
        };
    }
};
function createBaseMsgSetVestEntryResponse() {
    return {};
}
exports.MsgSetVestEntryResponse = {
    typeUrl: "/nemo_network.vest.MsgSetVestEntryResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetVestEntryResponse();
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
        var message = createBaseMsgSetVestEntryResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSetVestEntryResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSetVestEntryResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSetVestEntryResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSetVestEntryResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.vest.MsgSetVestEntryResponse",
            value: exports.MsgSetVestEntryResponse.encode(message).finish()
        };
    }
};
