"use strict";
exports.__esModule = true;
exports.AllAffiliateTiersResponse = exports.AllAffiliateTiersRequest = exports.ReferredByResponse = exports.ReferredByRequest = exports.AffiliateInfoResponse = exports.AffiliateInfoRequest = void 0;
var affiliates_1 = require("./affiliates");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
function createBaseAffiliateInfoRequest() {
    return {
        address: ""
    };
}
exports.AffiliateInfoRequest = {
    typeUrl: "/nemo_network.affiliates.AffiliateInfoRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAffiliateInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        var message = createBaseAffiliateInfoRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAffiliateInfoRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AffiliateInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AffiliateInfoRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.AffiliateInfoRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.AffiliateInfoRequest",
            value: exports.AffiliateInfoRequest.encode(message).finish()
        };
    }
};
function createBaseAffiliateInfoResponse() {
    return {
        tier: 0,
        feeSharePpm: 0,
        referredVolume: new Uint8Array(),
        stakedAmount: new Uint8Array()
    };
}
exports.AffiliateInfoResponse = {
    typeUrl: "/nemo_network.affiliates.AffiliateInfoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.tier !== 0) {
            writer.uint32(8).uint32(message.tier);
        }
        if (message.feeSharePpm !== 0) {
            writer.uint32(16).uint32(message.feeSharePpm);
        }
        if (message.referredVolume.length !== 0) {
            writer.uint32(26).bytes(message.referredVolume);
        }
        if (message.stakedAmount.length !== 0) {
            writer.uint32(34).bytes(message.stakedAmount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAffiliateInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tier = reader.uint32();
                    break;
                case 2:
                    message.feeSharePpm = reader.uint32();
                    break;
                case 3:
                    message.referredVolume = reader.bytes();
                    break;
                case 4:
                    message.stakedAmount = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseAffiliateInfoResponse();
        message.tier = (_a = object.tier) !== null && _a !== void 0 ? _a : 0;
        message.feeSharePpm = (_b = object.feeSharePpm) !== null && _b !== void 0 ? _b : 0;
        message.referredVolume = (_c = object.referredVolume) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.stakedAmount = (_d = object.stakedAmount) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAffiliateInfoResponse();
        if (object.tier !== undefined && object.tier !== null) {
            message.tier = object.tier;
        }
        if (object.fee_share_ppm !== undefined && object.fee_share_ppm !== null) {
            message.feeSharePpm = object.fee_share_ppm;
        }
        if (object.referred_volume !== undefined && object.referred_volume !== null) {
            message.referredVolume = (0, helpers_1.bytesFromBase64)(object.referred_volume);
        }
        if (object.staked_amount !== undefined && object.staked_amount !== null) {
            message.stakedAmount = (0, helpers_1.bytesFromBase64)(object.staked_amount);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.tier = message.tier === 0 ? undefined : message.tier;
        obj.fee_share_ppm = message.feeSharePpm === 0 ? undefined : message.feeSharePpm;
        obj.referred_volume = message.referredVolume ? (0, helpers_1.base64FromBytes)(message.referredVolume) : undefined;
        obj.staked_amount = message.stakedAmount ? (0, helpers_1.base64FromBytes)(message.stakedAmount) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AffiliateInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AffiliateInfoResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.AffiliateInfoResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.AffiliateInfoResponse",
            value: exports.AffiliateInfoResponse.encode(message).finish()
        };
    }
};
function createBaseReferredByRequest() {
    return {
        address: ""
    };
}
exports.ReferredByRequest = {
    typeUrl: "/nemo_network.affiliates.ReferredByRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseReferredByRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        var message = createBaseReferredByRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseReferredByRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ReferredByRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ReferredByRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.ReferredByRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.ReferredByRequest",
            value: exports.ReferredByRequest.encode(message).finish()
        };
    }
};
function createBaseReferredByResponse() {
    return {
        affiliateAddress: ""
    };
}
exports.ReferredByResponse = {
    typeUrl: "/nemo_network.affiliates.ReferredByResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.affiliateAddress !== "") {
            writer.uint32(10).string(message.affiliateAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseReferredByResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.affiliateAddress = reader.string();
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
        var message = createBaseReferredByResponse();
        message.affiliateAddress = (_a = object.affiliateAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseReferredByResponse();
        if (object.affiliate_address !== undefined && object.affiliate_address !== null) {
            message.affiliateAddress = object.affiliate_address;
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.affiliate_address = message.affiliateAddress === "" ? undefined : message.affiliateAddress;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.ReferredByResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.ReferredByResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.ReferredByResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.ReferredByResponse",
            value: exports.ReferredByResponse.encode(message).finish()
        };
    }
};
function createBaseAllAffiliateTiersRequest() {
    return {};
}
exports.AllAffiliateTiersRequest = {
    typeUrl: "/nemo_network.affiliates.AllAffiliateTiersRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAllAffiliateTiersRequest();
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
        var message = createBaseAllAffiliateTiersRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseAllAffiliateTiersRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AllAffiliateTiersRequest.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AllAffiliateTiersRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.AllAffiliateTiersRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.AllAffiliateTiersRequest",
            value: exports.AllAffiliateTiersRequest.encode(message).finish()
        };
    }
};
function createBaseAllAffiliateTiersResponse() {
    return {
        tiers: affiliates_1.AffiliateTiers.fromPartial({})
    };
}
exports.AllAffiliateTiersResponse = {
    typeUrl: "/nemo_network.affiliates.AllAffiliateTiersResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.tiers !== undefined) {
            affiliates_1.AffiliateTiers.encode(message.tiers, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAllAffiliateTiersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = createBaseAllAffiliateTiersResponse();
        message.tiers = object.tiers !== undefined && object.tiers !== null ? affiliates_1.AffiliateTiers.fromPartial(object.tiers) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAllAffiliateTiersResponse();
        if (object.tiers !== undefined && object.tiers !== null) {
            message.tiers = affiliates_1.AffiliateTiers.fromAmino(object.tiers);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.tiers = message.tiers ? affiliates_1.AffiliateTiers.toAmino(message.tiers) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AllAffiliateTiersResponse.fromAmino(object.value);
    },
    fromProtoMsg: function (message) {
        return exports.AllAffiliateTiersResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.AllAffiliateTiersResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/nemo_network.affiliates.AllAffiliateTiersResponse",
            value: exports.AllAffiliateTiersResponse.encode(message).finish()
        };
    }
};
