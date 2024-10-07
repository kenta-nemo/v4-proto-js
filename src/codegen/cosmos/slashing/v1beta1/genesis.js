"use strict";
exports.__esModule = true;
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = void 0;
var slashing_1 = require("./slashing");
var binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        params: slashing_1.Params.fromPartial({}),
        signingInfos: [],
        missedBlocks: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signingInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.missedBlocks; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signingInfos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missedBlocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? slashing_1.Params.fromPartial(object.params) : undefined;
        message.signingInfos = ((_a = object.signingInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SigningInfo.fromPartial(e); })) || [];
        message.missedBlocks = ((_b = object.missedBlocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ValidatorMissedBlocks.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = slashing_1.Params.fromAmino(object.params);
        }
        message.signingInfos = ((_a = object.signing_infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SigningInfo.fromAmino(e); })) || [];
        message.missedBlocks = ((_b = object.missed_blocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ValidatorMissedBlocks.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? slashing_1.Params.toAmino(message.params) : slashing_1.Params.toAmino(slashing_1.Params.fromPartial({}));
        if (message.signingInfos) {
            obj.signing_infos = message.signingInfos.map(function (e) { return e ? exports.SigningInfo.toAmino(e) : undefined; });
        }
        else {
            obj.signing_infos = message.signingInfos;
        }
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(function (e) { return e ? exports.ValidatorMissedBlocks.toAmino(e) : undefined; });
        }
        else {
            obj.missed_blocks = message.missedBlocks;
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
            typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseSigningInfo() {
    return {
        address: "",
        validatorSigningInfo: slashing_1.ValidatorSigningInfo.fromPartial({})
    };
}
exports.SigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSigningInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validatorSigningInfo = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
        var message = createBaseSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? slashing_1.ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseSigningInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.validator_signing_info !== undefined && object.validator_signing_info !== null) {
            message.validatorSigningInfo = slashing_1.ValidatorSigningInfo.fromAmino(object.validator_signing_info);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.validator_signing_info = message.validatorSigningInfo ? slashing_1.ValidatorSigningInfo.toAmino(message.validatorSigningInfo) : slashing_1.ValidatorSigningInfo.toAmino(slashing_1.ValidatorSigningInfo.fromPartial({}));
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.SigningInfo.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/SigningInfo",
            value: exports.SigningInfo.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.SigningInfo.decode(message.value);
    },
    toProto: function (message) {
        return exports.SigningInfo.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
            value: exports.SigningInfo.encode(message).finish()
        };
    }
};
function createBaseValidatorMissedBlocks() {
    return {
        address: "",
        missedBlocks: []
    };
}
exports.ValidatorMissedBlocks = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.missedBlocks; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missedBlocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
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
        var message = createBaseValidatorMissedBlocks();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.missedBlocks = ((_b = object.missedBlocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MissedBlock.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseValidatorMissedBlocks();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.missedBlocks = ((_a = object.missed_blocks) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MissedBlock.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(function (e) { return e ? exports.MissedBlock.toAmino(e) : undefined; });
        }
        else {
            obj.missed_blocks = message.missedBlocks;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ValidatorMissedBlocks.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/ValidatorMissedBlocks",
            value: exports.ValidatorMissedBlocks.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.ValidatorMissedBlocks.decode(message.value);
    },
    toProto: function (message) {
        return exports.ValidatorMissedBlocks.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
            value: exports.ValidatorMissedBlocks.encode(message).finish()
        };
    }
};
function createBaseMissedBlock() {
    return {
        index: BigInt(0),
        missed: false
    };
}
exports.MissedBlock = {
    typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.index !== BigInt(0)) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMissedBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.int64();
                    break;
                case 2:
                    message.missed = reader.bool();
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
        var message = createBaseMissedBlock();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.missed = (_a = object.missed) !== null && _a !== void 0 ? _a : false;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMissedBlock();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = object.missed;
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.index = message.index !== BigInt(0) ? ((_a = message.index) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        obj.missed = message.missed === false ? undefined : message.missed;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MissedBlock.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/MissedBlock",
            value: exports.MissedBlock.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.MissedBlock.decode(message.value);
    },
    toProto: function (message) {
        return exports.MissedBlock.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
            value: exports.MissedBlock.encode(message).finish()
        };
    }
};
