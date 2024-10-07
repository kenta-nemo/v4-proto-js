"use strict";
exports.__esModule = true;
exports.LegacyAminoPubKey = void 0;
var any_1 = require("../../../google/protobuf/any");
var binary_1 = require("../../../binary");
function createBaseLegacyAminoPubKey() {
    return {
        threshold: 0,
        publicKeys: []
    };
}
exports.LegacyAminoPubKey = {
    typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (var _i = 0, _a = message.publicKeys; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLegacyAminoPubKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.uint32();
                    break;
                case 2:
                    message.publicKeys.push(any_1.Any.decode(reader, reader.uint32()));
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
        var message = createBaseLegacyAminoPubKey();
        message.threshold = (_a = object.threshold) !== null && _a !== void 0 ? _a : 0;
        message.publicKeys = ((_b = object.publicKeys) === null || _b === void 0 ? void 0 : _b.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseLegacyAminoPubKey();
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        message.publicKeys = ((_a = object.public_keys) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.threshold = message.threshold === 0 ? undefined : message.threshold;
        if (message.publicKeys) {
            obj.public_keys = message.publicKeys.map(function (e) { return e ? any_1.Any.toAmino(e) : undefined; });
        }
        else {
            obj.public_keys = message.publicKeys;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.LegacyAminoPubKey.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "tendermint/PubKeyMultisigThreshold",
            value: exports.LegacyAminoPubKey.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.LegacyAminoPubKey.decode(message.value);
    },
    toProto: function (message) {
        return exports.LegacyAminoPubKey.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
            value: exports.LegacyAminoPubKey.encode(message).finish()
        };
    }
};
