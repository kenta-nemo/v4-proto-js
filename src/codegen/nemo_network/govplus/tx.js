"use strict";
exports.__esModule = true;
exports.MsgSlashValidatorResponse = exports.MsgSlashValidator = void 0;
var binary_1 = require("../../binary");
var math_1 = require("@cosmjs/math");
var helpers_1 = require("../../helpers");
function createBaseMsgSlashValidator() {
    return {
        authority: "",
        validatorAddress: "",
        infractionHeight: 0,
        tokensAtInfractionHeight: new Uint8Array(),
        slashFactor: ""
    };
}
exports.MsgSlashValidator = {
    typeUrl: "/nemo_network.govplus.MsgSlashValidator",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.infractionHeight !== 0) {
            writer.uint32(24).uint32(message.infractionHeight);
        }
        if (message.tokensAtInfractionHeight.length !== 0) {
            writer.uint32(34).bytes(message.tokensAtInfractionHeight);
        }
        if (message.slashFactor !== "") {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.slashFactor, 18).atomics);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSlashValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.infractionHeight = reader.uint32();
                    break;
                case 4:
                    message.tokensAtInfractionHeight = reader.bytes();
                    break;
                case 5:
                    message.slashFactor = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMsgSlashValidator();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.infractionHeight = (_c = object.infractionHeight) !== null && _c !== void 0 ? _c : 0;
        message.tokensAtInfractionHeight = (_d = object.tokensAtInfractionHeight) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.slashFactor = (_e = object.slashFactor) !== null && _e !== void 0 ? _e : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgSlashValidator();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.infraction_height !== undefined && object.infraction_height !== null) {
            message.infractionHeight = object.infraction_height;
        }
        if (object.tokens_at_infraction_height !== undefined && object.tokens_at_infraction_height !== null) {
            message.tokensAtInfractionHeight = (0, helpers_1.bytesFromBase64)(object.tokens_at_infraction_height);
        }
        if (object.slash_factor !== undefined && object.slash_factor !== null) {
            message.slashFactor = object.slash_factor;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.infraction_height = message.infractionHeight === 0 ? undefined : message.infractionHeight;
        obj.tokens_at_infraction_height = message.tokensAtInfractionHeight ? (0, helpers_1.base64FromBytes)(message.tokensAtInfractionHeight) : undefined;
        obj.slash_factor = (_a = message.slashFactor) !== null && _a !== void 0 ? _a : "";
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSlashValidator.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSlashValidator.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSlashValidator.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.govplus.MsgSlashValidator",
            value: exports.MsgSlashValidator.encode(message).finish()
        };
    }
};
function createBaseMsgSlashValidatorResponse() {
    return {};
}
exports.MsgSlashValidatorResponse = {
    typeUrl: "/nemo_network.govplus.MsgSlashValidatorResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSlashValidatorResponse();
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
        var message = createBaseMsgSlashValidatorResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgSlashValidatorResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgSlashValidatorResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgSlashValidatorResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgSlashValidatorResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.govplus.MsgSlashValidatorResponse",
            value: exports.MsgSlashValidatorResponse.encode(message).finish()
        };
    }
};
