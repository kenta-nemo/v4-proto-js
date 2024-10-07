"use strict";
exports.__esModule = true;
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
var binary_1 = require("../../../binary");
var stargate_1 = require("@cosmjs/stargate");
var service_1 = require("./service");
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc) {
        this.rpc = rpc;
        this.simulate = this.simulate.bind(this);
        this.getTx = this.getTx.bind(this);
        this.broadcastTx = this.broadcastTx.bind(this);
        this.getTxsEvent = this.getTxsEvent.bind(this);
        this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
        this.txDecode = this.txDecode.bind(this);
        this.txEncode = this.txEncode.bind(this);
        this.txEncodeAmino = this.txEncodeAmino.bind(this);
        this.txDecodeAmino = this.txDecodeAmino.bind(this);
    }
    ServiceClientImpl.prototype.simulate = function (request) {
        var data = service_1.SimulateRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
        return promise.then(function (data) { return service_1.SimulateResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.getTx = function (request) {
        var data = service_1.GetTxRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
        return promise.then(function (data) { return service_1.GetTxResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.broadcastTx = function (request) {
        var data = service_1.BroadcastTxRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
        return promise.then(function (data) { return service_1.BroadcastTxResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.getTxsEvent = function (request) {
        var data = service_1.GetTxsEventRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
        return promise.then(function (data) { return service_1.GetTxsEventResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.getBlockWithTxs = function (request) {
        var data = service_1.GetBlockWithTxsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
        return promise.then(function (data) { return service_1.GetBlockWithTxsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.txDecode = function (request) {
        var data = service_1.TxDecodeRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data);
        return promise.then(function (data) { return service_1.TxDecodeResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.txEncode = function (request) {
        var data = service_1.TxEncodeRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data);
        return promise.then(function (data) { return service_1.TxEncodeResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.txEncodeAmino = function (request) {
        var data = service_1.TxEncodeAminoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data);
        return promise.then(function (data) { return service_1.TxEncodeAminoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    ServiceClientImpl.prototype.txDecodeAmino = function (request) {
        var data = service_1.TxDecodeAminoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data);
        return promise.then(function (data) { return service_1.TxDecodeAminoResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new ServiceClientImpl(rpc);
    return {
        simulate: function (request) {
            return queryService.simulate(request);
        },
        getTx: function (request) {
            return queryService.getTx(request);
        },
        broadcastTx: function (request) {
            return queryService.broadcastTx(request);
        },
        getTxsEvent: function (request) {
            return queryService.getTxsEvent(request);
        },
        getBlockWithTxs: function (request) {
            return queryService.getBlockWithTxs(request);
        },
        txDecode: function (request) {
            return queryService.txDecode(request);
        },
        txEncode: function (request) {
            return queryService.txEncode(request);
        },
        txEncodeAmino: function (request) {
            return queryService.txEncodeAmino(request);
        },
        txDecodeAmino: function (request) {
            return queryService.txDecodeAmino(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
