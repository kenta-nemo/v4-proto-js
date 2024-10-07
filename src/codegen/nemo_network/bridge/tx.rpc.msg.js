"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.acknowledgeBridges = this.acknowledgeBridges.bind(this);
        this.completeBridge = this.completeBridge.bind(this);
        this.updateEventParams = this.updateEventParams.bind(this);
        this.updateProposeParams = this.updateProposeParams.bind(this);
        this.updateSafetyParams = this.updateSafetyParams.bind(this);
    }
    MsgClientImpl.prototype.acknowledgeBridges = function (request) {
        var data = tx_1.MsgAcknowledgeBridges.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Msg", "AcknowledgeBridges", data);
        return promise.then(function (data) { return tx_1.MsgAcknowledgeBridgesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.completeBridge = function (request) {
        var data = tx_1.MsgCompleteBridge.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Msg", "CompleteBridge", data);
        return promise.then(function (data) { return tx_1.MsgCompleteBridgeResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateEventParams = function (request) {
        var data = tx_1.MsgUpdateEventParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Msg", "UpdateEventParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateEventParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateProposeParams = function (request) {
        var data = tx_1.MsgUpdateProposeParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Msg", "UpdateProposeParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateProposeParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateSafetyParams = function (request) {
        var data = tx_1.MsgUpdateSafetyParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.bridge.Msg", "UpdateSafetyParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateSafetyParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
