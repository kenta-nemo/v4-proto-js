"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.slashValidator = this.slashValidator.bind(this);
    }
    MsgClientImpl.prototype.slashValidator = function (request) {
        var data = tx_1.MsgSlashValidator.encode(request).finish();
        var promise = this.rpc.request("nemo_network.govplus.Msg", "SlashValidator", data);
        return promise.then(function (data) { return tx_1.MsgSlashValidatorResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
