"use strict";
/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.10.0
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or npm scripts command that is used to regenerate this bundle.
*/
exports.__esModule = true;
exports.BinaryWriter = exports.BinaryReader = exports.WireType = void 0;
// Copyright (c) 2016, Daniel Wirtz  All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
// * Redistributions of source code must retain the above copyright
//   notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
//   notice, this list of conditions and the following disclaimer in the
//   documentation and/or other materials provided with the distribution.
// * Neither the name of its author, nor the names of its contributors
//   may be used to endorse or promote products derived from this software
//   without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// ---
// Code generated by the command line utilities is owned by the owner
// of the input file used when generating it. This code is not
// standalone and requires a support library to be linked with it. This
// support library is itself covered by the above license.
var utf8_1 = require("./utf8");
var varint_1 = require("./varint");
var WireType;
(function (WireType) {
    WireType[WireType["Varint"] = 0] = "Varint";
    WireType[WireType["Fixed64"] = 1] = "Fixed64";
    WireType[WireType["Bytes"] = 2] = "Bytes";
    WireType[WireType["Fixed32"] = 5] = "Fixed32";
})(WireType = exports.WireType || (exports.WireType = {}));
var BinaryReader = /** @class */ (function () {
    function BinaryReader(buf) {
        this.buf = buf ? new Uint8Array(buf) : new Uint8Array(0);
        this.pos = 0;
        this.type = 0;
        this.len = this.buf.length;
    }
    BinaryReader.prototype.assertBounds = function () {
        if (this.pos > this.len)
            throw new RangeError("premature EOF");
    };
    BinaryReader.prototype.tag = function () {
        var tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
        if (fieldNo <= 0 || wireType < 0 || wireType > 5)
            throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
        return [fieldNo, wireType, tag];
    };
    BinaryReader.prototype.skip = function (length) {
        if (typeof length === "number") {
            if (this.pos + length > this.len)
                throw indexOutOfRange(this, length);
            this.pos += length;
        }
        else {
            do {
                if (this.pos >= this.len)
                    throw indexOutOfRange(this);
            } while (this.buf[this.pos++] & 128);
        }
        return this;
    };
    BinaryReader.prototype.skipType = function (wireType) {
        switch (wireType) {
            case WireType.Varint:
                this.skip();
                break;
            case WireType.Fixed64:
                this.skip(8);
                break;
            case WireType.Bytes:
                this.skip(this.uint32());
                break;
            case 3:
                while ((wireType = this.uint32() & 7) !== 4) {
                    this.skipType(wireType);
                }
                break;
            case WireType.Fixed32:
                this.skip(4);
                break;
            /* istanbul ignore next */
            default:
                throw Error("invalid wire type " + wireType + " at offset " + this.pos);
        }
        return this;
    };
    BinaryReader.prototype.uint32 = function () {
        return varint_1.varint32read.bind(this)();
    };
    BinaryReader.prototype.int32 = function () {
        return this.uint32() | 0;
    };
    BinaryReader.prototype.sint32 = function () {
        var num = this.uint32();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    };
    BinaryReader.prototype.fixed32 = function () {
        var val = (0, varint_1.readUInt32)(this.buf, this.pos);
        this.pos += 4;
        return val;
    };
    BinaryReader.prototype.sfixed32 = function () {
        var val = (0, varint_1.readInt32)(this.buf, this.pos);
        this.pos += 4;
        return val;
    };
    BinaryReader.prototype.int64 = function () {
        var _a = varint_1.varint64read.bind(this)(), lo = _a[0], hi = _a[1];
        return BigInt((0, varint_1.int64ToString)(lo, hi));
    };
    BinaryReader.prototype.uint64 = function () {
        var _a = varint_1.varint64read.bind(this)(), lo = _a[0], hi = _a[1];
        return BigInt((0, varint_1.uInt64ToString)(lo, hi));
    };
    BinaryReader.prototype.sint64 = function () {
        var _a;
        var _b = varint_1.varint64read.bind(this)(), lo = _b[0], hi = _b[1];
        // zig zag
        _a = (0, varint_1.zzDecode)(lo, hi), lo = _a[0], hi = _a[1];
        return BigInt((0, varint_1.int64ToString)(lo, hi));
    };
    BinaryReader.prototype.fixed64 = function () {
        var lo = this.sfixed32();
        var hi = this.sfixed32();
        return BigInt((0, varint_1.uInt64ToString)(lo, hi));
    };
    BinaryReader.prototype.sfixed64 = function () {
        var lo = this.sfixed32();
        var hi = this.sfixed32();
        return BigInt((0, varint_1.int64ToString)(lo, hi));
    };
    BinaryReader.prototype.float = function () {
        throw new Error("float not supported");
    };
    BinaryReader.prototype.double = function () {
        throw new Error("double not supported");
    };
    BinaryReader.prototype.bool = function () {
        var _a = varint_1.varint64read.bind(this)(), lo = _a[0], hi = _a[1];
        return lo !== 0 || hi !== 0;
    };
    BinaryReader.prototype.bytes = function () {
        var len = this.uint32(), start = this.pos;
        this.pos += len;
        this.assertBounds();
        return this.buf.subarray(start, start + len);
    };
    BinaryReader.prototype.string = function () {
        var bytes = this.bytes();
        return (0, utf8_1.utf8Read)(bytes, 0, bytes.length);
    };
    return BinaryReader;
}());
exports.BinaryReader = BinaryReader;
var Op = /** @class */ (function () {
    function Op(fn, len, val) {
        this.fn = fn;
        this.len = len;
        this.val = val;
    }
    Op.prototype.proceed = function (buf, pos) {
        if (this.fn) {
            this.fn(this.val, buf, pos);
        }
    };
    return Op;
}());
var State = /** @class */ (function () {
    function State(writer) {
        this.head = writer.head;
        this.tail = writer.tail;
        this.len = writer.len;
        this.next = writer.states;
    }
    return State;
}());
var BinaryWriter = /** @class */ (function () {
    function BinaryWriter() {
        this.len = 0;
        // uint64 is the same with int64
        this.uint64 = BinaryWriter.prototype.int64;
        // sfixed64 is the same with fixed64
        this.sfixed64 = BinaryWriter.prototype.fixed64;
        // sfixed32 is the same with fixed32
        this.sfixed32 = BinaryWriter.prototype.fixed32;
        this.head = new Op(null, 0, 0);
        this.tail = this.head;
        this.states = null;
    }
    BinaryWriter.create = function () {
        return new BinaryWriter();
    };
    BinaryWriter.alloc = function (size) {
        if (typeof Uint8Array !== "undefined") {
            return pool(function (size) { return new Uint8Array(size); }, Uint8Array.prototype.subarray)(size);
        }
        else {
            return new Array(size);
        }
    };
    BinaryWriter.prototype._push = function (fn, len, val) {
        this.tail = this.tail.next = new Op(fn, len, val);
        this.len += len;
        return this;
    };
    BinaryWriter.prototype.finish = function () {
        var head = this.head.next, pos = 0;
        var buf = BinaryWriter.alloc(this.len);
        while (head) {
            head.proceed(buf, pos);
            pos += head.len;
            head = head.next;
        }
        return buf;
    };
    BinaryWriter.prototype.fork = function () {
        this.states = new State(this);
        this.head = this.tail = new Op(null, 0, 0);
        this.len = 0;
        return this;
    };
    BinaryWriter.prototype.reset = function () {
        if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
        }
        else {
            this.head = this.tail = new Op(null, 0, 0);
            this.len = 0;
        }
        return this;
    };
    BinaryWriter.prototype.ldelim = function () {
        var head = this.head, tail = this.tail, len = this.len;
        this.reset().uint32(len);
        if (len) {
            this.tail.next = head.next; // skip noop
            this.tail = tail;
            this.len += len;
        }
        return this;
    };
    BinaryWriter.prototype.tag = function (fieldNo, type) {
        return this.uint32(((fieldNo << 3) | type) >>> 0);
    };
    BinaryWriter.prototype.uint32 = function (value) {
        this.len += (this.tail = this.tail.next =
            new Op(varint_1.writeVarint32, (value = value >>> 0) < 128
                ? 1
                : value < 16384
                    ? 2
                    : value < 2097152
                        ? 3
                        : value < 268435456
                            ? 4
                            : 5, value)).len;
        return this;
    };
    BinaryWriter.prototype.int32 = function (value) {
        return value < 0
            ? this._push(varint_1.writeVarint64, 10, (0, varint_1.int64FromString)(value.toString())) // 10 bytes per spec
            : this.uint32(value);
    };
    BinaryWriter.prototype.sint32 = function (value) {
        return this.uint32(((value << 1) ^ (value >> 31)) >>> 0);
    };
    BinaryWriter.prototype.int64 = function (value) {
        var _a = (0, varint_1.int64FromString)(value.toString()), lo = _a.lo, hi = _a.hi;
        return this._push(varint_1.writeVarint64, (0, varint_1.int64Length)(lo, hi), { lo: lo, hi: hi });
    };
    BinaryWriter.prototype.sint64 = function (value) {
        var _a;
        var _b = (0, varint_1.int64FromString)(value.toString()), lo = _b.lo, hi = _b.hi;
        // zig zag
        _a = (0, varint_1.zzEncode)(lo, hi), lo = _a[0], hi = _a[1];
        return this._push(varint_1.writeVarint64, (0, varint_1.int64Length)(lo, hi), { lo: lo, hi: hi });
    };
    BinaryWriter.prototype.fixed64 = function (value) {
        var _a = (0, varint_1.int64FromString)(value.toString()), lo = _a.lo, hi = _a.hi;
        return this._push(varint_1.writeFixed32, 4, lo)._push(varint_1.writeFixed32, 4, hi);
    };
    BinaryWriter.prototype.bool = function (value) {
        return this._push(varint_1.writeByte, 1, value ? 1 : 0);
    };
    BinaryWriter.prototype.fixed32 = function (value) {
        return this._push(varint_1.writeFixed32, 4, value >>> 0);
    };
    BinaryWriter.prototype.float = function (value) {
        throw new Error("float not supported" + value);
    };
    BinaryWriter.prototype.double = function (value) {
        throw new Error("double not supported" + value);
    };
    BinaryWriter.prototype.bytes = function (value) {
        var len = value.length >>> 0;
        if (!len)
            return this._push(varint_1.writeByte, 1, 0);
        return this.uint32(len)._push(writeBytes, len, value);
    };
    BinaryWriter.prototype.string = function (value) {
        var len = (0, utf8_1.utf8Length)(value);
        return len
            ? this.uint32(len)._push(utf8_1.utf8Write, len, value)
            : this._push(varint_1.writeByte, 1, 0);
    };
    return BinaryWriter;
}());
exports.BinaryWriter = BinaryWriter;
function writeBytes(val, buf, pos) {
    if (typeof Uint8Array !== "undefined") {
        buf.set(val, pos);
    }
    else {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    }
}
function pool(alloc, slice, size) {
    var SIZE = size || 8192;
    var MAX = SIZE >>> 1;
    var slab = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, (offset += size));
        if (offset & 7)
            // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " +
        reader.pos +
        " + " +
        (writeLength || 1) +
        " > " +
        reader.len);
}
