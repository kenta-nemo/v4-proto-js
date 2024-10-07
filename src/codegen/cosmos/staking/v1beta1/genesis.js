"use strict";
exports.__esModule = true;
exports.LastValidatorPower = exports.GenesisState = void 0;
var staking_1 = require("./staking");
var binary_1 = require("../../../binary");
var helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        params: staking_1.Params.fromPartial({}),
        lastTotalPower: new Uint8Array(),
        lastValidatorPowers: [],
        validators: [],
        delegations: [],
        unbondingDelegations: [],
        redelegations: [],
        exported: false
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.staking.v1beta1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastTotalPower.length !== 0) {
            writer.uint32(18).bytes(message.lastTotalPower);
        }
        for (var _i = 0, _a = message.lastValidatorPowers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.validators; _b < _c.length; _b++) {
            var v = _c[_b];
            staking_1.Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.delegations; _d < _e.length; _d++) {
            var v = _e[_d];
            staking_1.Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _f = 0, _g = message.unbondingDelegations; _f < _g.length; _f++) {
            var v = _g[_f];
            staking_1.UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _h = 0, _j = message.redelegations; _h < _j.length; _h++) {
            var v = _j[_h];
            staking_1.Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
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
                    message.params = staking_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lastTotalPower = reader.bytes();
                    break;
                case 3:
                    message.lastValidatorPowers.push(exports.LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(staking_1.Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbondingDelegations.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(staking_1.Redelegation.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.exported = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? staking_1.Params.fromPartial(object.params) : undefined;
        message.lastTotalPower = (_a = object.lastTotalPower) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.lastValidatorPowers = ((_b = object.lastValidatorPowers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.LastValidatorPower.fromPartial(e); })) || [];
        message.validators = ((_c = object.validators) === null || _c === void 0 ? void 0 : _c.map(function (e) { return staking_1.Validator.fromPartial(e); })) || [];
        message.delegations = ((_d = object.delegations) === null || _d === void 0 ? void 0 : _d.map(function (e) { return staking_1.Delegation.fromPartial(e); })) || [];
        message.unbondingDelegations = ((_e = object.unbondingDelegations) === null || _e === void 0 ? void 0 : _e.map(function (e) { return staking_1.UnbondingDelegation.fromPartial(e); })) || [];
        message.redelegations = ((_f = object.redelegations) === null || _f === void 0 ? void 0 : _f.map(function (e) { return staking_1.Redelegation.fromPartial(e); })) || [];
        message.exported = (_g = object.exported) !== null && _g !== void 0 ? _g : false;
        return message;
    },
    fromAmino: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = staking_1.Params.fromAmino(object.params);
        }
        if (object.last_total_power !== undefined && object.last_total_power !== null) {
            message.lastTotalPower = (0, helpers_1.bytesFromBase64)(object.last_total_power);
        }
        message.lastValidatorPowers = ((_a = object.last_validator_powers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.LastValidatorPower.fromAmino(e); })) || [];
        message.validators = ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map(function (e) { return staking_1.Validator.fromAmino(e); })) || [];
        message.delegations = ((_c = object.delegations) === null || _c === void 0 ? void 0 : _c.map(function (e) { return staking_1.Delegation.fromAmino(e); })) || [];
        message.unbondingDelegations = ((_d = object.unbonding_delegations) === null || _d === void 0 ? void 0 : _d.map(function (e) { return staking_1.UnbondingDelegation.fromAmino(e); })) || [];
        message.redelegations = ((_e = object.redelegations) === null || _e === void 0 ? void 0 : _e.map(function (e) { return staking_1.Redelegation.fromAmino(e); })) || [];
        if (object.exported !== undefined && object.exported !== null) {
            message.exported = object.exported;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.params = message.params ? staking_1.Params.toAmino(message.params) : staking_1.Params.toAmino(staking_1.Params.fromPartial({}));
        obj.last_total_power = message.lastTotalPower ? (0, helpers_1.base64FromBytes)(message.lastTotalPower) : "";
        if (message.lastValidatorPowers) {
            obj.last_validator_powers = message.lastValidatorPowers.map(function (e) { return e ? exports.LastValidatorPower.toAmino(e) : undefined; });
        }
        else {
            obj.last_validator_powers = message.lastValidatorPowers;
        }
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? staking_1.Validator.toAmino(e) : undefined; });
        }
        else {
            obj.validators = message.validators;
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(function (e) { return e ? staking_1.Delegation.toAmino(e) : undefined; });
        }
        else {
            obj.delegations = message.delegations;
        }
        if (message.unbondingDelegations) {
            obj.unbonding_delegations = message.unbondingDelegations.map(function (e) { return e ? staking_1.UnbondingDelegation.toAmino(e) : undefined; });
        }
        else {
            obj.unbonding_delegations = message.unbondingDelegations;
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(function (e) { return e ? staking_1.Redelegation.toAmino(e) : undefined; });
        }
        else {
            obj.redelegations = message.redelegations;
        }
        obj.exported = message.exported === false ? undefined : message.exported;
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
            typeUrl: "/cosmos.staking.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseLastValidatorPower() {
    return {
        address: "",
        power: BigInt(0)
    };
}
exports.LastValidatorPower = {
    typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLastValidatorPower();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = reader.int64();
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
        var message = createBaseLastValidatorPower();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseLastValidatorPower();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        return message;
    },
    toAmino: function (message) {
        var _a;
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.power = message.power !== BigInt(0) ? ((_a = message.power) === null || _a === void 0 ? void 0 : _a.toString).call(_a) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LastValidatorPower.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/LastValidatorPower",
            value: exports.LastValidatorPower.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.LastValidatorPower.decode(message.value);
    },
    toProto: function (message) {
        return exports.LastValidatorPower.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
            value: exports.LastValidatorPower.encode(message).finish()
        };
    }
};
