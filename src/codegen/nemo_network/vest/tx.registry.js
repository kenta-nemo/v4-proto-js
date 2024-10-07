"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/nemo_network.vest.MsgSetVestEntry", tx_1.MsgSetVestEntry], ["/nemo_network.vest.MsgDeleteVestEntry", tx_1.MsgDeleteVestEntry]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        setVestEntry: function (value) {
            return {
                typeUrl: "/nemo_network.vest.MsgSetVestEntry",
                value: tx_1.MsgSetVestEntry.encode(value).finish()
            };
        },
        deleteVestEntry: function (value) {
            return {
                typeUrl: "/nemo_network.vest.MsgDeleteVestEntry",
                value: tx_1.MsgDeleteVestEntry.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setVestEntry: function (value) {
            return {
                typeUrl: "/nemo_network.vest.MsgSetVestEntry",
                value: value
            };
        },
        deleteVestEntry: function (value) {
            return {
                typeUrl: "/nemo_network.vest.MsgDeleteVestEntry",
                value: value
            };
        }
    },
    fromPartial: {
        setVestEntry: function (value) {
            return {
                typeUrl: "/nemo_network.vest.MsgSetVestEntry",
                value: tx_1.MsgSetVestEntry.fromPartial(value)
            };
        },
        deleteVestEntry: function (value) {
            return {
                typeUrl: "/nemo_network.vest.MsgDeleteVestEntry",
                value: tx_1.MsgDeleteVestEntry.fromPartial(value)
            };
        }
    }
};
