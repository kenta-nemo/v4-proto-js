"use strict";
exports.__esModule = true;
exports.DisabledListResponse = exports.QueryDisabledListRequest = exports.AccountsResponse = exports.QueryAccountsRequest = exports.AccountResponse = exports.QueryAccountRequest = void 0;
var pagination_1 = require("../../base/query/v1beta1/pagination");
var types_1 = require("./types");
var binary_1 = require("../../../binary");
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
exports.QueryAccountRequest = {
    typeUrl: "/cosmos.circuit.v1.QueryAccountRequest",
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
        var message = createBaseQueryAccountRequest();
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
        var message = createBaseQueryAccountRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAccountRequest();
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
        return exports.QueryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/QueryAccountRequest",
            value: exports.QueryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.QueryAccountRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.QueryAccountRequest",
            value: exports.QueryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseAccountResponse() {
    return {
        permission: undefined
    };
}
exports.AccountResponse = {
    typeUrl: "/cosmos.circuit.v1.AccountResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.permission !== undefined) {
            types_1.Permissions.encode(message.permission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAccountResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permission = types_1.Permissions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseAccountResponse();
        message.permission = object.permission !== undefined && object.permission !== null ? types_1.Permissions.fromPartial(object.permission) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseAccountResponse();
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = types_1.Permissions.fromAmino(object.permission);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.permission = message.permission ? types_1.Permissions.toAmino(message.permission) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AccountResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/AccountResponse",
            value: exports.AccountResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.AccountResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.AccountResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.AccountResponse",
            value: exports.AccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAccountsRequest = {
    typeUrl: "/cosmos.circuit.v1.QueryAccountsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAccountsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var message = createBaseQueryAccountsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/QueryAccountsRequest",
            value: exports.QueryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.QueryAccountsRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryAccountsRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.QueryAccountsRequest",
            value: exports.QueryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
exports.AccountsResponse = {
    typeUrl: "/cosmos.circuit.v1.AccountsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.accounts; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.GenesisAccountPermissions.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAccountsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(types_1.GenesisAccountPermissions.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GenesisAccountPermissions.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GenesisAccountPermissions.fromAmino(e); })) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(function (e) { return e ? types_1.GenesisAccountPermissions.toAmino(e) : undefined; });
        }
        else {
            obj.accounts = message.accounts;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.AccountsResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/AccountsResponse",
            value: exports.AccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.AccountsResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.AccountsResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.AccountsResponse",
            value: exports.AccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDisabledListRequest() {
    return {};
}
exports.QueryDisabledListRequest = {
    typeUrl: "/cosmos.circuit.v1.QueryDisabledListRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDisabledListRequest();
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
        var message = createBaseQueryDisabledListRequest();
        return message;
    },
    fromAmino: function (_) {
        var message = createBaseQueryDisabledListRequest();
        return message;
    },
    toAmino: function (_) {
        var obj = {};
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.QueryDisabledListRequest.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/QueryDisabledListRequest",
            value: exports.QueryDisabledListRequest.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.QueryDisabledListRequest.decode(message.value);
    },
    toProto: function (message) {
        return exports.QueryDisabledListRequest.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.QueryDisabledListRequest",
            value: exports.QueryDisabledListRequest.encode(message).finish()
        };
    }
};
function createBaseDisabledListResponse() {
    return {
        disabledList: []
    };
}
exports.DisabledListResponse = {
    typeUrl: "/cosmos.circuit.v1.DisabledListResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.disabledList; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDisabledListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disabledList.push(reader.string());
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
        var message = createBaseDisabledListResponse();
        message.disabledList = ((_a = object.disabledList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    fromAmino: function (object) {
        var _a;
        var message = createBaseDisabledListResponse();
        message.disabledList = ((_a = object.disabled_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    toAmino: function (message) {
        var obj = {};
        if (message.disabledList) {
            obj.disabled_list = message.disabledList.map(function (e) { return e; });
        }
        else {
            obj.disabled_list = message.disabledList;
        }
        return obj;
    },
    fromAminoMsg: function (object) {
        return exports.DisabledListResponse.fromAmino(object.value);
    },
    toAminoMsg: function (message) {
        return {
            type: "cosmos-sdk/DisabledListResponse",
            value: exports.DisabledListResponse.toAmino(message)
        };
    },
    fromProtoMsg: function (message) {
        return exports.DisabledListResponse.decode(message.value);
    },
    toProto: function (message) {
        return exports.DisabledListResponse.encode(message).finish();
    },
    toProtoMsg: function (message) {
        return {
            typeUrl: "/cosmos.circuit.v1.DisabledListResponse",
            value: exports.DisabledListResponse.encode(message).finish()
        };
    }
};
