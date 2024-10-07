"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.evidence = this.evidence.bind(this);
        this.allEvidence = this.allEvidence.bind(this);
    }
    QueryClientImpl.prototype.evidence = function (request) {
        var data = query_1.QueryEvidenceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
        return promise.then(function (data) { return query_1.QueryEvidenceResponse.decode(new binary_1.BinaryReader(data)); });
    };
    QueryClientImpl.prototype.allEvidence = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllEvidenceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
        return promise.then(function (data) { return query_1.QueryAllEvidenceResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        evidence: function (request) {
            return queryService.evidence(request);
        },
        allEvidence: function (request) {
            return queryService.allEvidence(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
