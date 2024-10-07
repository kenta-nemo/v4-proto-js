"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.nextDelayedMessageId = this.nextDelayedMessageId.bind(this);
        this.message = this.message.bind(this);
        this.blockMessageIds = this.blockMessageIds.bind(this);
    }
    QueryClientImpl.prototype.nextDelayedMessageId = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryNextDelayedMessageIdRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.delaymsg.Query", "NextDelayedMessageId", data);
        return promise.then(function (data) { return query_1.QueryNextDelayedMessageIdResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.message = function (request) {
        var data = query_1.QueryMessageRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.delaymsg.Query", "Message", data);
        return promise.then(function (data) { return query_1.QueryMessageResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.blockMessageIds = function (request) {
        var data = query_1.QueryBlockMessageIdsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.delaymsg.Query", "BlockMessageIds", data);
        return promise.then(function (data) { return query_1.QueryBlockMessageIdsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        nextDelayedMessageId: function (request) {
            return queryService.nextDelayedMessageId(request);
        },
        message: function (request) {
            return queryService.message(request);
        },
        blockMessageIds: function (request) {
            return queryService.blockMessageIds(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
