"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.addPremiumVotes = this.addPremiumVotes.bind(this);
        this.createPerpetual = this.createPerpetual.bind(this);
        this.setLiquidityTier = this.setLiquidityTier.bind(this);
        this.updatePerpetualParams = this.updatePerpetualParams.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    MsgClientImpl.prototype.addPremiumVotes = function (request) {
        var data = tx_1.MsgAddPremiumVotes.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Msg", "AddPremiumVotes", data);
        return promise.then(function (data) { return tx_1.MsgAddPremiumVotesResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.createPerpetual = function (request) {
        var data = tx_1.MsgCreatePerpetual.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Msg", "CreatePerpetual", data);
        return promise.then(function (data) { return tx_1.MsgCreatePerpetualResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.setLiquidityTier = function (request) {
        var data = tx_1.MsgSetLiquidityTier.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Msg", "SetLiquidityTier", data);
        return promise.then(function (data) { return tx_1.MsgSetLiquidityTierResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updatePerpetualParams = function (request) {
        var data = tx_1.MsgUpdatePerpetualParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Msg", "UpdatePerpetualParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdatePerpetualParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.updateParams = function (request) {
        var data = tx_1.MsgUpdateParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.perpetuals.Msg", "UpdateParams", data);
        return promise.then(function (data) { return tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
