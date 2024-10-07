"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.authorizeCircuitBreaker = this.authorizeCircuitBreaker.bind(this);
        this.tripCircuitBreaker = this.tripCircuitBreaker.bind(this);
        this.resetCircuitBreaker = this.resetCircuitBreaker.bind(this);
    }
    MsgClientImpl.prototype.authorizeCircuitBreaker = function (request) {
        var data = tx_1.MsgAuthorizeCircuitBreaker.encode(request).finish();
        var promise = this.rpc.request("cosmos.circuit.v1.Msg", "AuthorizeCircuitBreaker", data);
        return promise.then(function (data) { return tx_1.MsgAuthorizeCircuitBreakerResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.tripCircuitBreaker = function (request) {
        var data = tx_1.MsgTripCircuitBreaker.encode(request).finish();
        var promise = this.rpc.request("cosmos.circuit.v1.Msg", "TripCircuitBreaker", data);
        return promise.then(function (data) { return tx_1.MsgTripCircuitBreakerResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.resetCircuitBreaker = function (request) {
        var data = tx_1.MsgResetCircuitBreaker.encode(request).finish();
        var promise = this.rpc.request("cosmos.circuit.v1.Msg", "ResetCircuitBreaker", data);
        return promise.then(function (data) { return tx_1.MsgResetCircuitBreakerResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
