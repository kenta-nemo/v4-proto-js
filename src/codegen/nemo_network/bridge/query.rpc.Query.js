"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.eventParams = this.eventParams.bind(this);
        this.proposeParams = this.proposeParams.bind(this);
        this.safetyParams = this.safetyParams.bind(this);
        this.acknowledgedEventInfo = this.acknowledgedEventInfo.bind(this);
        this.recognizedEventInfo = this.recognizedEventInfo.bind(this);
        this.delayedCompleteBridgeMessages = this.delayedCompleteBridgeMessages.bind(this);
    }
    QueryClientImpl.prototype.eventParams = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryEventParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Query", "EventParams", data);
        return promise.then(function (data) { return query_1.QueryEventParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.proposeParams = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryProposeParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Query", "ProposeParams", data);
        return promise.then(function (data) { return query_1.QueryProposeParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.safetyParams = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QuerySafetyParamsRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Query", "SafetyParams", data);
        return promise.then(function (data) { return query_1.QuerySafetyParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.acknowledgedEventInfo = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryAcknowledgedEventInfoRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Query", "AcknowledgedEventInfo", data);
        return promise.then(function (data) { return query_1.QueryAcknowledgedEventInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.recognizedEventInfo = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryRecognizedEventInfoRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Query", "RecognizedEventInfo", data);
        return promise.then(function (data) { return query_1.QueryRecognizedEventInfoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.delayedCompleteBridgeMessages = function (request) {
        var data = query_1.QueryDelayedCompleteBridgeMessagesRequest.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Query", "DelayedCompleteBridgeMessages", data);
        return promise.then(function (data) { return query_1.QueryDelayedCompleteBridgeMessagesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        eventParams: function (request) {
            return queryService.eventParams(request);
        },
        proposeParams: function (request) {
            return queryService.proposeParams(request);
        },
        safetyParams: function (request) {
            return queryService.safetyParams(request);
        },
        acknowledgedEventInfo: function (request) {
            return queryService.acknowledgedEventInfo(request);
        },
        recognizedEventInfo: function (request) {
            return queryService.recognizedEventInfo(request);
        },
        delayedCompleteBridgeMessages: function (request) {
            return queryService.delayedCompleteBridgeMessages(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
