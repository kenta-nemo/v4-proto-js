"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.proposedOperations = this.proposedOperations.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.batchCancel = this.batchCancel.bind(this);
        this.createClobPair = this.createClobPair.bind(this);
        this.updateClobPair = this.updateClobPair.bind(this);
        this.updateEquityTierLimitConfiguration = this.updateEquityTierLimitConfiguration.bind(this);
        this.updateBlockRateLimitConfiguration = this.updateBlockRateLimitConfiguration.bind(this);
        this.updateLiquidationsConfig = this.updateLiquidationsConfig.bind(this);
    }
    MsgClientImpl.prototype.proposedOperations = function (request) {
        var data = tx_1.MsgProposedOperations.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Msg", "ProposedOperations", data);
        return promise.then(function (data) { return tx_1.MsgProposedOperationsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.placeOrder = function (request) {
        var data = tx_1.MsgPlaceOrder.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Msg", "PlaceOrder", data);
        return promise.then(function (data) { return tx_1.MsgPlaceOrderResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.cancelOrder = function (request) {
        var data = tx_1.MsgCancelOrder.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Msg", "CancelOrder", data);
        return promise.then(function (data) { return tx_1.MsgCancelOrderResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.batchCancel = function (request) {
        var data = tx_1.MsgBatchCancel.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Msg", "BatchCancel", data);
        return promise.then(function (data) { return tx_1.MsgBatchCancelResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.createClobPair = function (request) {
        var data = tx_1.MsgCreateClobPair.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Msg", "CreateClobPair", data);
        return promise.then(function (data) { return tx_1.MsgCreateClobPairResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateClobPair = function (request) {
        var data = tx_1.MsgUpdateClobPair.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Msg", "UpdateClobPair", data);
        return promise.then(function (data) { return tx_1.MsgUpdateClobPairResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateEquityTierLimitConfiguration = function (request) {
        var data = tx_1.MsgUpdateEquityTierLimitConfiguration.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Msg", "UpdateEquityTierLimitConfiguration", data);
        return promise.then(function (data) { return tx_1.MsgUpdateEquityTierLimitConfigurationResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateBlockRateLimitConfiguration = function (request) {
        var data = tx_1.MsgUpdateBlockRateLimitConfiguration.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Msg", "UpdateBlockRateLimitConfiguration", data);
        return promise.then(function (data) { return tx_1.MsgUpdateBlockRateLimitConfigurationResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateLiquidationsConfig = function (request) {
        var data = tx_1.MsgUpdateLiquidationsConfig.encode(request).finish();
        var promise = this.rpc.request("nemo_network.clob.Msg", "UpdateLiquidationsConfig", data);
        return promise.then(function (data) { return tx_1.MsgUpdateLiquidationsConfigResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
