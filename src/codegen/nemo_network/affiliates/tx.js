"use strict";
exports.__esModule = true;
exports.MsgUpdateAffiliateTiersResponse = exports.MsgUpdateAffiliateTiers = exports.MsgRegisterAffiliateResponse = exports.MsgRegisterAffiliate = void 0;
var affiliates_1 = require("./affiliates");
var binary_1 = require("../../binary");
function createBaseMsgRegisterAffiliate() {
    return {
        referee: "",
        affiliate: ""
    };
}
exports.MsgRegisterAffiliate = {
    typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliate",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.referee !== "") {
            writer.uint32(10).string(message.referee);
        }
        if (message.affiliate !== "") {
            writer.uint32(18).string(message.affiliate);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRegisterAffiliate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referee = reader.string();
                    break;
                case 2:
                    message.affiliate = reader.string();
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
        var message = createBaseMsgRegisterAffiliate();
        message.referee = (_a = object.referee) !== null && _a !== void 0 ? _a : "";
        message.affiliate = (_b = object.affiliate) !== null && _b !== void 0 ? _b : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgRegisterAffiliate();
        if (object.referee !== undefined && object.referee !== null) {
            message.referee = object.referee;
        }
        if (object.affiliate !== undefined && object.affiliate !== null) {
            message.affiliate = object.affiliate;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.referee = message.referee === "" ? undefined : message.referee;
        obj.affiliate = message.affiliate === "" ? undefined : message.affiliate;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgRegisterAffiliate.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgRegisterAffiliate.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgRegisterAffiliate.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliate",
            value: exports.MsgRegisterAffiliate.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterAffiliateResponse() {
    return {};
}
exports.MsgRegisterAffiliateResponse = {
    typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliateResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRegisterAffiliateResponse();
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
        var message = createBaseMsgRegisterAffiliateResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgRegisterAffiliateResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgRegisterAffiliateResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgRegisterAffiliateResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgRegisterAffiliateResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.MsgRegisterAffiliateResponse",
            value: exports.MsgRegisterAffiliateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateAffiliateTiers() {
    return {
        authority: "",
        tiers: undefined
    };
}
exports.MsgUpdateAffiliateTiers = {
    typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.tiers !== undefined) {
            affiliates_1.AffiliateTiers.encode(message.tiers, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateAffiliateTiers();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.tiers = affiliates_1.AffiliateTiers.decode(reader, reader.uint32());
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
        var message = createBaseMsgUpdateAffiliateTiers();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.tiers = object.tiers !== undefined && object.tiers !== null ? affiliates_1.AffiliateTiers.fromPartial(object.tiers) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseMsgUpdateAffiliateTiers();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.tiers !== undefined && object.tiers !== null) {
            message.tiers = affiliates_1.AffiliateTiers.fromAmino(object.tiers);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.tiers = message.tiers ? affiliates_1.AffiliateTiers.toAmino(message.tiers) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateAffiliateTiers.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateAffiliateTiers.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateAffiliateTiers.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiers",
            value: exports.MsgUpdateAffiliateTiers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateAffiliateTiersResponse() {
    return {};
}
exports.MsgUpdateAffiliateTiersResponse = {
    typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiersResponse",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateAffiliateTiersResponse();
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
        var message = createBaseMsgUpdateAffiliateTiersResponse();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseMsgUpdateAffiliateTiersResponse();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.MsgUpdateAffiliateTiersResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.MsgUpdateAffiliateTiersResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.MsgUpdateAffiliateTiersResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.MsgUpdateAffiliateTiersResponse",
            value: exports.MsgUpdateAffiliateTiersResponse.encode(message).finish()
        };
    }
};
