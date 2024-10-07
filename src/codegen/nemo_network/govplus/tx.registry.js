"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.govplus.MsgSlashValidator", tx_1.MsgSlashValidator]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        slashValidator: function (value) {
            return {
                typeUrl: "/nemo_network.govplus.MsgSlashValidator",
                value: tx_1.MsgSlashValidator.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        slashValidator: function (value) {
            return {
                typeUrl: "/nemo_network.govplus.MsgSlashValidator",
                value: value
            };
        }
    },
    fromPartial: {
        slashValidator: function (value) {
            return {
                typeUrl: "/nemo_network.govplus.MsgSlashValidator",
                value: tx_1.MsgSlashValidator.fromPartial(value)
            };
        }
    }
};
