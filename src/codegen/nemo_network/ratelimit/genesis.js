"use strict";
exports.__esModule = true;
exports.GenesisState = void 0;
var limit_params_1 = require("./limit_params");
var binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        limitParamsList: []
    };
}
exports.GenesisState = {
    typeUrl: "/nemo_network.ratelimit.GenesisState",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.limitParamsList; _i < _a.length; _i++) {
            var v = _a[_i];
            limit_params_1.LimitParams.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.limitParamsList.push(limit_params_1.LimitParams.decode(reader, reader.uint32()));
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
        message.limitParamsList = ((_a = object.limitParamsList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return limit_params_1.LimitParams.fromPartial(e); })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.limitParamsList = ((_a = object.limit_params_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return limit_params_1.LimitParams.fromAmino(e); })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.limitParamsList) {
            obj.limit_params_list = message.limitParamsList.map(function (e) { return e ? limit_params_1.LimitParams.toAmino(e) : undefined; });
        }
        else {
            obj.limit_params_list = message.limitParamsList;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto: function (message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.ratelimit.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
