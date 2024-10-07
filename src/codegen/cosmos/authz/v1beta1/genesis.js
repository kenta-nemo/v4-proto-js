"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var authz_1 = require("./authz");
var binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        authorization: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.authz.v1beta1.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.authorization; _i < _a.length; _i++) {
            var v = _a[_i];
            authz_1.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.authorization.push(authz_1.GrantAuthorization.decode(reader, reader.uint32()));
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
        var message = createBaseGenesisState();
        message.authorization = ((_a = object.authorization) === null || _a === void 0 ? void 0 : _a.map(function (e) { return authz_1.GrantAuthorization.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.authorization = ((_a = object.authorization) === null || _a === void 0 ? void 0 : _a.map(function (e) { return authz_1.GrantAuthorization.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map(function (e) { return e ? authz_1.GrantAuthorization.toAmino(e) : undefined; });
        }
        else {
            obj.authorization = message.authorization;
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
            typeUrl: "/cosmos.authz.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
