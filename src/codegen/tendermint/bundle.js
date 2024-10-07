"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.tendermint = void 0;
var _252 = require("./abci/types");
var _253 = require("./crypto/keys");
var _254 = require("./crypto/proof");
var _255 = require("./libs/bits/types");
var _256 = require("./p2p/types");
var _257 = require("./types/block");
var _258 = require("./types/evidence");
var _259 = require("./types/params");
var _260 = require("./types/types");
var _261 = require("./types/validator");
var _262 = require("./version/types");
var tendermint;
(function (tendermint) {
    tendermint.abci = __assign({}, _252);
    tendermint.crypto = __assign(__assign({}, _253), _254);
    var libs;
    (function (libs) {
        libs.bits = __assign({}, _255);
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = __assign({}, _256);
    tendermint.types = __assign(__assign(__assign(__assign(__assign({}, _257), _258), _259), _260), _261);
    tendermint.version = __assign({}, _262);
})(tendermint = exports.tendermint || (exports.tendermint = {}));
