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
exports.google = void 0;
var _129 = require("./api/annotations");
var _130 = require("./api/http");
var _131 = require("./protobuf/descriptor");
var _132 = require("./protobuf/any");
var _133 = require("./protobuf/timestamp");
var _134 = require("./protobuf/duration");
var google;
(function (google) {
    google.api = __assign(__assign({}, _129), _130);
    google.protobuf = __assign(__assign(__assign(__assign({}, _131), _132), _133), _134);
})(google = exports.google || (exports.google = {}));
