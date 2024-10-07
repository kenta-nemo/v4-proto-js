"use strict";
exports.__esModule = true;
exports.MsgPruneAllowancesResponse = exports.MsgPruneAllowances = exports.MsgRevokeAllowanceResponse = exports.MsgRevokeAllowance = exports.MsgGrantAllowanceResponse = exports.MsgGrantAllowance = void 0;
var any_1 = require("../../../google/protobuf/any");
var binary_1 = require("../../../binary");
function createBaseMsgGrantAllowance() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
exports.MsgGrantAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgGrantAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = any_1.Any.decode(reader, reader.uint32());
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
        var message = createBaseMsgGrantAllowance();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgGrantAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = any_1.Any.fromAmino(object.allowance);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.allowance = message.allowance ? any_1.Any.toAmino(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgGrantAllowance.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowance",
            value: exports.MsgGrantAllowance.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgGrantAllowance.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgGrantAllowance.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: exports.MsgGrantAllowance.encode(message).finish()
        };
    }
};
function createBaseMsgGrantAllowanceResponse() {
    return {};
}
exports.MsgGrantAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgGrantAllowanceResponse();
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
        var message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgGrantAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowanceResponse",
            value: exports.MsgGrantAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgGrantAllowanceResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgGrantAllowanceResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
            value: exports.MsgGrantAllowanceResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeAllowance() {
    return {
        granter: "",
        grantee: ""
    };
}
exports.MsgRevokeAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRevokeAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
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
        var message = createBaseMsgRevokeAllowance();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgRevokeAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgRevokeAllowance.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowance",
            value: exports.MsgRevokeAllowance.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgRevokeAllowance.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgRevokeAllowance.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: exports.MsgRevokeAllowance.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeAllowanceResponse() {
    return {};
}
exports.MsgRevokeAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRevokeAllowanceResponse();
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
        var message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgRevokeAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowanceResponse",
            value: exports.MsgRevokeAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgRevokeAllowanceResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgRevokeAllowanceResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
            value: exports.MsgRevokeAllowanceResponse.encode(message).finish()
        };
    }
};
function createBaseMsgPruneAllowances() {
    return {
        pruner: ""
    };
}
exports.MsgPruneAllowances = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pruner !== "") {
            writer.uint32(10).string(message.pruner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgPruneAllowances();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pruner = reader.string();
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
        var message = createBaseMsgPruneAllowances();
        message.pruner = (_a = object.pruner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgPruneAllowances();
        if (object.pruner !== undefined && object.pruner !== null) {
            message.pruner = object.pruner;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pruner = message.pruner === "" ? undefined : message.pruner;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgPruneAllowances.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgPruneAllowances",
            value: exports.MsgPruneAllowances.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgPruneAllowances.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgPruneAllowances.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
            value: exports.MsgPruneAllowances.encode(message).finish()
        };
    }
};
function createBaseMsgPruneAllowancesResponse() {
    return {};
}
exports.MsgPruneAllowancesResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgPruneAllowancesResponse();
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
        var message = createBaseMsgPruneAllowancesResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgPruneAllowancesResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgPruneAllowancesResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MsgPruneAllowancesResponse",
            value: exports.MsgPruneAllowancesResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MsgPruneAllowancesResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgPruneAllowancesResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse",
            value: exports.MsgPruneAllowancesResponse.encode(message).finish()
        };
    }
};
