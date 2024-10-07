"use strict";
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var binary_1 = require("../../../binary");
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.submitEvidence = this.submitEvidence.bind(this);
    }
    MsgClientImpl.prototype.submitEvidence = function (request) {
        var data = tx_1.MsgSubmitEvidence.encode(request).finish();
        var promise = this.rpc.request("cosmos.evidence.v1beta1.Msg", "SubmitEvidence", data);
        return promise.then(function (data) { return tx_1.MsgSubmitEvidenceResponse.decode(new binary_1.BinaryReader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
