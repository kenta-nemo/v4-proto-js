"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.setMarketsHardCap = this.setMarketsHardCap.bind(this);
        this.createMarketPermissionless = this.createMarketPermissionless.bind(this);
        this.setListingVaultDepositParams = this.setListingVaultDepositParams.bind(this);
    }
    MsgClientImpl.prototype.setMarketsHardCap = function (request) {
        var data = tx_1.MsgSetMarketsHardCap.encode(request).finish();
        var promise = this.rpc.request("nemo_network.listing.Msg", "SetMarketsHardCap", data);
        return promise.then(function (data) { return tx_1.MsgSetMarketsHardCapResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.createMarketPermissionless = function (request) {
        var data = tx_1.MsgCreateMarketPermissionless.encode(request).finish();
        var promise = this.rpc.request("nemo_network.listing.Msg", "CreateMarketPermissionless", data);
        return promise.then(function (data) { return tx_1.MsgCreateMarketPermissionlessResponse.decode(new binary_1.BinaryReader(data)); });
    };
    MsgClientImpl.prototype.setListingVaultDepositParams = function (request) {
        var data = tx_1.MsgSetListingVaultDepositParams.encode(request).finish();
        var promise = this.rpc.request("nemo_network.listing.Msg", "SetListingVaultDepositParams", data);
        return promise.then(function (data) { return tx_1.MsgSetListingVaultDepositParamsResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
