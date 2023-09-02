/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.sysmon_web = (function() {

    /**
     * Namespace sysmon_web.
     * @exports sysmon_web
     * @namespace
     */
    var sysmon_web = {};

    sysmon_web.msg = (function() {

        /**
         * Namespace msg.
         * @memberof sysmon_web
         * @namespace
         */
        var msg = {};

        msg.CpuTime = (function() {

            /**
             * Properties of a CpuTime.
             * @memberof sysmon_web.msg
             * @interface ICpuTime
             * @property {number|Long|null} [user] CpuTime user
             * @property {number|Long|null} [nice] CpuTime nice
             * @property {number|Long|null} [system] CpuTime system
             * @property {number|Long|null} [idle] CpuTime idle
             * @property {number|Long|null} [iowait] CpuTime iowait
             * @property {number|Long|null} [irq] CpuTime irq
             * @property {number|Long|null} [softirq] CpuTime softirq
             * @property {number|Long|null} [steal] CpuTime steal
             * @property {number|Long|null} [guest] CpuTime guest
             * @property {number|Long|null} [guestNice] CpuTime guestNice
             */

            /**
             * Constructs a new CpuTime.
             * @memberof sysmon_web.msg
             * @classdesc Represents a CpuTime.
             * @implements ICpuTime
             * @constructor
             * @param {sysmon_web.msg.ICpuTime=} [properties] Properties to set
             */
            function CpuTime(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CpuTime user.
             * @member {number|Long} user
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.user = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CpuTime nice.
             * @member {number|Long} nice
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.nice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CpuTime system.
             * @member {number|Long} system
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.system = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CpuTime idle.
             * @member {number|Long} idle
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.idle = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CpuTime iowait.
             * @member {number|Long} iowait
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.iowait = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CpuTime irq.
             * @member {number|Long} irq
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.irq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CpuTime softirq.
             * @member {number|Long} softirq
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.softirq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CpuTime steal.
             * @member {number|Long} steal
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.steal = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CpuTime guest.
             * @member {number|Long} guest
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.guest = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CpuTime guestNice.
             * @member {number|Long} guestNice
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             */
            CpuTime.prototype.guestNice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new CpuTime instance using the specified properties.
             * @function create
             * @memberof sysmon_web.msg.CpuTime
             * @static
             * @param {sysmon_web.msg.ICpuTime=} [properties] Properties to set
             * @returns {sysmon_web.msg.CpuTime} CpuTime instance
             */
            CpuTime.create = function create(properties) {
                return new CpuTime(properties);
            };

            /**
             * Encodes the specified CpuTime message. Does not implicitly {@link sysmon_web.msg.CpuTime.verify|verify} messages.
             * @function encode
             * @memberof sysmon_web.msg.CpuTime
             * @static
             * @param {sysmon_web.msg.ICpuTime} message CpuTime message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CpuTime.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.user);
                if (message.nice != null && Object.hasOwnProperty.call(message, "nice"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.nice);
                if (message.system != null && Object.hasOwnProperty.call(message, "system"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.system);
                if (message.idle != null && Object.hasOwnProperty.call(message, "idle"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.idle);
                if (message.iowait != null && Object.hasOwnProperty.call(message, "iowait"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.iowait);
                if (message.irq != null && Object.hasOwnProperty.call(message, "irq"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.irq);
                if (message.softirq != null && Object.hasOwnProperty.call(message, "softirq"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.softirq);
                if (message.steal != null && Object.hasOwnProperty.call(message, "steal"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.steal);
                if (message.guest != null && Object.hasOwnProperty.call(message, "guest"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.guest);
                if (message.guestNice != null && Object.hasOwnProperty.call(message, "guestNice"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.guestNice);
                return writer;
            };

            /**
             * Encodes the specified CpuTime message, length delimited. Does not implicitly {@link sysmon_web.msg.CpuTime.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sysmon_web.msg.CpuTime
             * @static
             * @param {sysmon_web.msg.ICpuTime} message CpuTime message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CpuTime.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CpuTime message from the specified reader or buffer.
             * @function decode
             * @memberof sysmon_web.msg.CpuTime
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sysmon_web.msg.CpuTime} CpuTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CpuTime.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sysmon_web.msg.CpuTime();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.user = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.nice = reader.uint64();
                            break;
                        }
                    case 3: {
                            message.system = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.idle = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.iowait = reader.uint64();
                            break;
                        }
                    case 6: {
                            message.irq = reader.uint64();
                            break;
                        }
                    case 7: {
                            message.softirq = reader.uint64();
                            break;
                        }
                    case 8: {
                            message.steal = reader.uint64();
                            break;
                        }
                    case 9: {
                            message.guest = reader.uint64();
                            break;
                        }
                    case 10: {
                            message.guestNice = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CpuTime message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sysmon_web.msg.CpuTime
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sysmon_web.msg.CpuTime} CpuTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CpuTime.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CpuTime message.
             * @function verify
             * @memberof sysmon_web.msg.CpuTime
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CpuTime.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user"))
                    if (!$util.isInteger(message.user) && !(message.user && $util.isInteger(message.user.low) && $util.isInteger(message.user.high)))
                        return "user: integer|Long expected";
                if (message.nice != null && message.hasOwnProperty("nice"))
                    if (!$util.isInteger(message.nice) && !(message.nice && $util.isInteger(message.nice.low) && $util.isInteger(message.nice.high)))
                        return "nice: integer|Long expected";
                if (message.system != null && message.hasOwnProperty("system"))
                    if (!$util.isInteger(message.system) && !(message.system && $util.isInteger(message.system.low) && $util.isInteger(message.system.high)))
                        return "system: integer|Long expected";
                if (message.idle != null && message.hasOwnProperty("idle"))
                    if (!$util.isInteger(message.idle) && !(message.idle && $util.isInteger(message.idle.low) && $util.isInteger(message.idle.high)))
                        return "idle: integer|Long expected";
                if (message.iowait != null && message.hasOwnProperty("iowait"))
                    if (!$util.isInteger(message.iowait) && !(message.iowait && $util.isInteger(message.iowait.low) && $util.isInteger(message.iowait.high)))
                        return "iowait: integer|Long expected";
                if (message.irq != null && message.hasOwnProperty("irq"))
                    if (!$util.isInteger(message.irq) && !(message.irq && $util.isInteger(message.irq.low) && $util.isInteger(message.irq.high)))
                        return "irq: integer|Long expected";
                if (message.softirq != null && message.hasOwnProperty("softirq"))
                    if (!$util.isInteger(message.softirq) && !(message.softirq && $util.isInteger(message.softirq.low) && $util.isInteger(message.softirq.high)))
                        return "softirq: integer|Long expected";
                if (message.steal != null && message.hasOwnProperty("steal"))
                    if (!$util.isInteger(message.steal) && !(message.steal && $util.isInteger(message.steal.low) && $util.isInteger(message.steal.high)))
                        return "steal: integer|Long expected";
                if (message.guest != null && message.hasOwnProperty("guest"))
                    if (!$util.isInteger(message.guest) && !(message.guest && $util.isInteger(message.guest.low) && $util.isInteger(message.guest.high)))
                        return "guest: integer|Long expected";
                if (message.guestNice != null && message.hasOwnProperty("guestNice"))
                    if (!$util.isInteger(message.guestNice) && !(message.guestNice && $util.isInteger(message.guestNice.low) && $util.isInteger(message.guestNice.high)))
                        return "guestNice: integer|Long expected";
                return null;
            };

            /**
             * Creates a CpuTime message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sysmon_web.msg.CpuTime
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sysmon_web.msg.CpuTime} CpuTime
             */
            CpuTime.fromObject = function fromObject(object) {
                if (object instanceof $root.sysmon_web.msg.CpuTime)
                    return object;
                var message = new $root.sysmon_web.msg.CpuTime();
                if (object.user != null)
                    if ($util.Long)
                        (message.user = $util.Long.fromValue(object.user)).unsigned = true;
                    else if (typeof object.user === "string")
                        message.user = parseInt(object.user, 10);
                    else if (typeof object.user === "number")
                        message.user = object.user;
                    else if (typeof object.user === "object")
                        message.user = new $util.LongBits(object.user.low >>> 0, object.user.high >>> 0).toNumber(true);
                if (object.nice != null)
                    if ($util.Long)
                        (message.nice = $util.Long.fromValue(object.nice)).unsigned = true;
                    else if (typeof object.nice === "string")
                        message.nice = parseInt(object.nice, 10);
                    else if (typeof object.nice === "number")
                        message.nice = object.nice;
                    else if (typeof object.nice === "object")
                        message.nice = new $util.LongBits(object.nice.low >>> 0, object.nice.high >>> 0).toNumber(true);
                if (object.system != null)
                    if ($util.Long)
                        (message.system = $util.Long.fromValue(object.system)).unsigned = true;
                    else if (typeof object.system === "string")
                        message.system = parseInt(object.system, 10);
                    else if (typeof object.system === "number")
                        message.system = object.system;
                    else if (typeof object.system === "object")
                        message.system = new $util.LongBits(object.system.low >>> 0, object.system.high >>> 0).toNumber(true);
                if (object.idle != null)
                    if ($util.Long)
                        (message.idle = $util.Long.fromValue(object.idle)).unsigned = true;
                    else if (typeof object.idle === "string")
                        message.idle = parseInt(object.idle, 10);
                    else if (typeof object.idle === "number")
                        message.idle = object.idle;
                    else if (typeof object.idle === "object")
                        message.idle = new $util.LongBits(object.idle.low >>> 0, object.idle.high >>> 0).toNumber(true);
                if (object.iowait != null)
                    if ($util.Long)
                        (message.iowait = $util.Long.fromValue(object.iowait)).unsigned = true;
                    else if (typeof object.iowait === "string")
                        message.iowait = parseInt(object.iowait, 10);
                    else if (typeof object.iowait === "number")
                        message.iowait = object.iowait;
                    else if (typeof object.iowait === "object")
                        message.iowait = new $util.LongBits(object.iowait.low >>> 0, object.iowait.high >>> 0).toNumber(true);
                if (object.irq != null)
                    if ($util.Long)
                        (message.irq = $util.Long.fromValue(object.irq)).unsigned = true;
                    else if (typeof object.irq === "string")
                        message.irq = parseInt(object.irq, 10);
                    else if (typeof object.irq === "number")
                        message.irq = object.irq;
                    else if (typeof object.irq === "object")
                        message.irq = new $util.LongBits(object.irq.low >>> 0, object.irq.high >>> 0).toNumber(true);
                if (object.softirq != null)
                    if ($util.Long)
                        (message.softirq = $util.Long.fromValue(object.softirq)).unsigned = true;
                    else if (typeof object.softirq === "string")
                        message.softirq = parseInt(object.softirq, 10);
                    else if (typeof object.softirq === "number")
                        message.softirq = object.softirq;
                    else if (typeof object.softirq === "object")
                        message.softirq = new $util.LongBits(object.softirq.low >>> 0, object.softirq.high >>> 0).toNumber(true);
                if (object.steal != null)
                    if ($util.Long)
                        (message.steal = $util.Long.fromValue(object.steal)).unsigned = true;
                    else if (typeof object.steal === "string")
                        message.steal = parseInt(object.steal, 10);
                    else if (typeof object.steal === "number")
                        message.steal = object.steal;
                    else if (typeof object.steal === "object")
                        message.steal = new $util.LongBits(object.steal.low >>> 0, object.steal.high >>> 0).toNumber(true);
                if (object.guest != null)
                    if ($util.Long)
                        (message.guest = $util.Long.fromValue(object.guest)).unsigned = true;
                    else if (typeof object.guest === "string")
                        message.guest = parseInt(object.guest, 10);
                    else if (typeof object.guest === "number")
                        message.guest = object.guest;
                    else if (typeof object.guest === "object")
                        message.guest = new $util.LongBits(object.guest.low >>> 0, object.guest.high >>> 0).toNumber(true);
                if (object.guestNice != null)
                    if ($util.Long)
                        (message.guestNice = $util.Long.fromValue(object.guestNice)).unsigned = true;
                    else if (typeof object.guestNice === "string")
                        message.guestNice = parseInt(object.guestNice, 10);
                    else if (typeof object.guestNice === "number")
                        message.guestNice = object.guestNice;
                    else if (typeof object.guestNice === "object")
                        message.guestNice = new $util.LongBits(object.guestNice.low >>> 0, object.guestNice.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a CpuTime message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sysmon_web.msg.CpuTime
             * @static
             * @param {sysmon_web.msg.CpuTime} message CpuTime
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CpuTime.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.user = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.user = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.nice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.nice = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.system = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.system = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.idle = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.idle = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.iowait = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.iowait = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.irq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.irq = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.softirq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.softirq = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.steal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steal = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.guest = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.guest = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.guestNice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.guestNice = options.longs === String ? "0" : 0;
                }
                if (message.user != null && message.hasOwnProperty("user"))
                    if (typeof message.user === "number")
                        object.user = options.longs === String ? String(message.user) : message.user;
                    else
                        object.user = options.longs === String ? $util.Long.prototype.toString.call(message.user) : options.longs === Number ? new $util.LongBits(message.user.low >>> 0, message.user.high >>> 0).toNumber(true) : message.user;
                if (message.nice != null && message.hasOwnProperty("nice"))
                    if (typeof message.nice === "number")
                        object.nice = options.longs === String ? String(message.nice) : message.nice;
                    else
                        object.nice = options.longs === String ? $util.Long.prototype.toString.call(message.nice) : options.longs === Number ? new $util.LongBits(message.nice.low >>> 0, message.nice.high >>> 0).toNumber(true) : message.nice;
                if (message.system != null && message.hasOwnProperty("system"))
                    if (typeof message.system === "number")
                        object.system = options.longs === String ? String(message.system) : message.system;
                    else
                        object.system = options.longs === String ? $util.Long.prototype.toString.call(message.system) : options.longs === Number ? new $util.LongBits(message.system.low >>> 0, message.system.high >>> 0).toNumber(true) : message.system;
                if (message.idle != null && message.hasOwnProperty("idle"))
                    if (typeof message.idle === "number")
                        object.idle = options.longs === String ? String(message.idle) : message.idle;
                    else
                        object.idle = options.longs === String ? $util.Long.prototype.toString.call(message.idle) : options.longs === Number ? new $util.LongBits(message.idle.low >>> 0, message.idle.high >>> 0).toNumber(true) : message.idle;
                if (message.iowait != null && message.hasOwnProperty("iowait"))
                    if (typeof message.iowait === "number")
                        object.iowait = options.longs === String ? String(message.iowait) : message.iowait;
                    else
                        object.iowait = options.longs === String ? $util.Long.prototype.toString.call(message.iowait) : options.longs === Number ? new $util.LongBits(message.iowait.low >>> 0, message.iowait.high >>> 0).toNumber(true) : message.iowait;
                if (message.irq != null && message.hasOwnProperty("irq"))
                    if (typeof message.irq === "number")
                        object.irq = options.longs === String ? String(message.irq) : message.irq;
                    else
                        object.irq = options.longs === String ? $util.Long.prototype.toString.call(message.irq) : options.longs === Number ? new $util.LongBits(message.irq.low >>> 0, message.irq.high >>> 0).toNumber(true) : message.irq;
                if (message.softirq != null && message.hasOwnProperty("softirq"))
                    if (typeof message.softirq === "number")
                        object.softirq = options.longs === String ? String(message.softirq) : message.softirq;
                    else
                        object.softirq = options.longs === String ? $util.Long.prototype.toString.call(message.softirq) : options.longs === Number ? new $util.LongBits(message.softirq.low >>> 0, message.softirq.high >>> 0).toNumber(true) : message.softirq;
                if (message.steal != null && message.hasOwnProperty("steal"))
                    if (typeof message.steal === "number")
                        object.steal = options.longs === String ? String(message.steal) : message.steal;
                    else
                        object.steal = options.longs === String ? $util.Long.prototype.toString.call(message.steal) : options.longs === Number ? new $util.LongBits(message.steal.low >>> 0, message.steal.high >>> 0).toNumber(true) : message.steal;
                if (message.guest != null && message.hasOwnProperty("guest"))
                    if (typeof message.guest === "number")
                        object.guest = options.longs === String ? String(message.guest) : message.guest;
                    else
                        object.guest = options.longs === String ? $util.Long.prototype.toString.call(message.guest) : options.longs === Number ? new $util.LongBits(message.guest.low >>> 0, message.guest.high >>> 0).toNumber(true) : message.guest;
                if (message.guestNice != null && message.hasOwnProperty("guestNice"))
                    if (typeof message.guestNice === "number")
                        object.guestNice = options.longs === String ? String(message.guestNice) : message.guestNice;
                    else
                        object.guestNice = options.longs === String ? $util.Long.prototype.toString.call(message.guestNice) : options.longs === Number ? new $util.LongBits(message.guestNice.low >>> 0, message.guestNice.high >>> 0).toNumber(true) : message.guestNice;
                return object;
            };

            /**
             * Converts this CpuTime to JSON.
             * @function toJSON
             * @memberof sysmon_web.msg.CpuTime
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CpuTime.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CpuTime
             * @function getTypeUrl
             * @memberof sysmon_web.msg.CpuTime
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CpuTime.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/sysmon_web.msg.CpuTime";
            };

            return CpuTime;
        })();

        msg.Stat = (function() {

            /**
             * Properties of a Stat.
             * @memberof sysmon_web.msg
             * @interface IStat
             * @property {number|null} [uptime] Stat uptime
             * @property {Array.<sysmon_web.msg.ICpuTime>|null} [cpuTime] Stat cpuTime
             * @property {number|Long|null} [memTotal] Stat memTotal
             * @property {number|Long|null} [memFree] Stat memFree
             * @property {number|Long|null} [memAvailable] Stat memAvailable
             * @property {Array.<number>|null} [cpuUsage] Stat cpuUsage
             */

            /**
             * Constructs a new Stat.
             * @memberof sysmon_web.msg
             * @classdesc Represents a Stat.
             * @implements IStat
             * @constructor
             * @param {sysmon_web.msg.IStat=} [properties] Properties to set
             */
            function Stat(properties) {
                this.cpuTime = [];
                this.cpuUsage = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Stat uptime.
             * @member {number} uptime
             * @memberof sysmon_web.msg.Stat
             * @instance
             */
            Stat.prototype.uptime = 0;

            /**
             * Stat cpuTime.
             * @member {Array.<sysmon_web.msg.ICpuTime>} cpuTime
             * @memberof sysmon_web.msg.Stat
             * @instance
             */
            Stat.prototype.cpuTime = $util.emptyArray;

            /**
             * Stat memTotal.
             * @member {number|Long} memTotal
             * @memberof sysmon_web.msg.Stat
             * @instance
             */
            Stat.prototype.memTotal = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Stat memFree.
             * @member {number|Long} memFree
             * @memberof sysmon_web.msg.Stat
             * @instance
             */
            Stat.prototype.memFree = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Stat memAvailable.
             * @member {number|Long} memAvailable
             * @memberof sysmon_web.msg.Stat
             * @instance
             */
            Stat.prototype.memAvailable = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Stat cpuUsage.
             * @member {Array.<number>} cpuUsage
             * @memberof sysmon_web.msg.Stat
             * @instance
             */
            Stat.prototype.cpuUsage = $util.emptyArray;

            /**
             * Creates a new Stat instance using the specified properties.
             * @function create
             * @memberof sysmon_web.msg.Stat
             * @static
             * @param {sysmon_web.msg.IStat=} [properties] Properties to set
             * @returns {sysmon_web.msg.Stat} Stat instance
             */
            Stat.create = function create(properties) {
                return new Stat(properties);
            };

            /**
             * Encodes the specified Stat message. Does not implicitly {@link sysmon_web.msg.Stat.verify|verify} messages.
             * @function encode
             * @memberof sysmon_web.msg.Stat
             * @static
             * @param {sysmon_web.msg.IStat} message Stat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uptime != null && Object.hasOwnProperty.call(message, "uptime"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.uptime);
                if (message.cpuTime != null && message.cpuTime.length)
                    for (var i = 0; i < message.cpuTime.length; ++i)
                        $root.sysmon_web.msg.CpuTime.encode(message.cpuTime[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.memTotal != null && Object.hasOwnProperty.call(message, "memTotal"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.memTotal);
                if (message.memFree != null && Object.hasOwnProperty.call(message, "memFree"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.memFree);
                if (message.memAvailable != null && Object.hasOwnProperty.call(message, "memAvailable"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.memAvailable);
                if (message.cpuUsage != null && message.cpuUsage.length) {
                    writer.uint32(/* id 6, wireType 2 =*/50).fork();
                    for (var i = 0; i < message.cpuUsage.length; ++i)
                        writer.double(message.cpuUsage[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified Stat message, length delimited. Does not implicitly {@link sysmon_web.msg.Stat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sysmon_web.msg.Stat
             * @static
             * @param {sysmon_web.msg.IStat} message Stat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Stat message from the specified reader or buffer.
             * @function decode
             * @memberof sysmon_web.msg.Stat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sysmon_web.msg.Stat} Stat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sysmon_web.msg.Stat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.uptime = reader.double();
                            break;
                        }
                    case 2: {
                            if (!(message.cpuTime && message.cpuTime.length))
                                message.cpuTime = [];
                            message.cpuTime.push($root.sysmon_web.msg.CpuTime.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.memTotal = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.memFree = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.memAvailable = reader.uint64();
                            break;
                        }
                    case 6: {
                            if (!(message.cpuUsage && message.cpuUsage.length))
                                message.cpuUsage = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.cpuUsage.push(reader.double());
                            } else
                                message.cpuUsage.push(reader.double());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Stat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sysmon_web.msg.Stat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sysmon_web.msg.Stat} Stat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Stat message.
             * @function verify
             * @memberof sysmon_web.msg.Stat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Stat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uptime != null && message.hasOwnProperty("uptime"))
                    if (typeof message.uptime !== "number")
                        return "uptime: number expected";
                if (message.cpuTime != null && message.hasOwnProperty("cpuTime")) {
                    if (!Array.isArray(message.cpuTime))
                        return "cpuTime: array expected";
                    for (var i = 0; i < message.cpuTime.length; ++i) {
                        var error = $root.sysmon_web.msg.CpuTime.verify(message.cpuTime[i]);
                        if (error)
                            return "cpuTime." + error;
                    }
                }
                if (message.memTotal != null && message.hasOwnProperty("memTotal"))
                    if (!$util.isInteger(message.memTotal) && !(message.memTotal && $util.isInteger(message.memTotal.low) && $util.isInteger(message.memTotal.high)))
                        return "memTotal: integer|Long expected";
                if (message.memFree != null && message.hasOwnProperty("memFree"))
                    if (!$util.isInteger(message.memFree) && !(message.memFree && $util.isInteger(message.memFree.low) && $util.isInteger(message.memFree.high)))
                        return "memFree: integer|Long expected";
                if (message.memAvailable != null && message.hasOwnProperty("memAvailable"))
                    if (!$util.isInteger(message.memAvailable) && !(message.memAvailable && $util.isInteger(message.memAvailable.low) && $util.isInteger(message.memAvailable.high)))
                        return "memAvailable: integer|Long expected";
                if (message.cpuUsage != null && message.hasOwnProperty("cpuUsage")) {
                    if (!Array.isArray(message.cpuUsage))
                        return "cpuUsage: array expected";
                    for (var i = 0; i < message.cpuUsage.length; ++i)
                        if (typeof message.cpuUsage[i] !== "number")
                            return "cpuUsage: number[] expected";
                }
                return null;
            };

            /**
             * Creates a Stat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sysmon_web.msg.Stat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sysmon_web.msg.Stat} Stat
             */
            Stat.fromObject = function fromObject(object) {
                if (object instanceof $root.sysmon_web.msg.Stat)
                    return object;
                var message = new $root.sysmon_web.msg.Stat();
                if (object.uptime != null)
                    message.uptime = Number(object.uptime);
                if (object.cpuTime) {
                    if (!Array.isArray(object.cpuTime))
                        throw TypeError(".sysmon_web.msg.Stat.cpuTime: array expected");
                    message.cpuTime = [];
                    for (var i = 0; i < object.cpuTime.length; ++i) {
                        if (typeof object.cpuTime[i] !== "object")
                            throw TypeError(".sysmon_web.msg.Stat.cpuTime: object expected");
                        message.cpuTime[i] = $root.sysmon_web.msg.CpuTime.fromObject(object.cpuTime[i]);
                    }
                }
                if (object.memTotal != null)
                    if ($util.Long)
                        (message.memTotal = $util.Long.fromValue(object.memTotal)).unsigned = true;
                    else if (typeof object.memTotal === "string")
                        message.memTotal = parseInt(object.memTotal, 10);
                    else if (typeof object.memTotal === "number")
                        message.memTotal = object.memTotal;
                    else if (typeof object.memTotal === "object")
                        message.memTotal = new $util.LongBits(object.memTotal.low >>> 0, object.memTotal.high >>> 0).toNumber(true);
                if (object.memFree != null)
                    if ($util.Long)
                        (message.memFree = $util.Long.fromValue(object.memFree)).unsigned = true;
                    else if (typeof object.memFree === "string")
                        message.memFree = parseInt(object.memFree, 10);
                    else if (typeof object.memFree === "number")
                        message.memFree = object.memFree;
                    else if (typeof object.memFree === "object")
                        message.memFree = new $util.LongBits(object.memFree.low >>> 0, object.memFree.high >>> 0).toNumber(true);
                if (object.memAvailable != null)
                    if ($util.Long)
                        (message.memAvailable = $util.Long.fromValue(object.memAvailable)).unsigned = true;
                    else if (typeof object.memAvailable === "string")
                        message.memAvailable = parseInt(object.memAvailable, 10);
                    else if (typeof object.memAvailable === "number")
                        message.memAvailable = object.memAvailable;
                    else if (typeof object.memAvailable === "object")
                        message.memAvailable = new $util.LongBits(object.memAvailable.low >>> 0, object.memAvailable.high >>> 0).toNumber(true);
                if (object.cpuUsage) {
                    if (!Array.isArray(object.cpuUsage))
                        throw TypeError(".sysmon_web.msg.Stat.cpuUsage: array expected");
                    message.cpuUsage = [];
                    for (var i = 0; i < object.cpuUsage.length; ++i)
                        message.cpuUsage[i] = Number(object.cpuUsage[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Stat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sysmon_web.msg.Stat
             * @static
             * @param {sysmon_web.msg.Stat} message Stat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Stat.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.cpuTime = [];
                    object.cpuUsage = [];
                }
                if (options.defaults) {
                    object.uptime = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.memTotal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.memTotal = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.memFree = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.memFree = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.memAvailable = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.memAvailable = options.longs === String ? "0" : 0;
                }
                if (message.uptime != null && message.hasOwnProperty("uptime"))
                    object.uptime = options.json && !isFinite(message.uptime) ? String(message.uptime) : message.uptime;
                if (message.cpuTime && message.cpuTime.length) {
                    object.cpuTime = [];
                    for (var j = 0; j < message.cpuTime.length; ++j)
                        object.cpuTime[j] = $root.sysmon_web.msg.CpuTime.toObject(message.cpuTime[j], options);
                }
                if (message.memTotal != null && message.hasOwnProperty("memTotal"))
                    if (typeof message.memTotal === "number")
                        object.memTotal = options.longs === String ? String(message.memTotal) : message.memTotal;
                    else
                        object.memTotal = options.longs === String ? $util.Long.prototype.toString.call(message.memTotal) : options.longs === Number ? new $util.LongBits(message.memTotal.low >>> 0, message.memTotal.high >>> 0).toNumber(true) : message.memTotal;
                if (message.memFree != null && message.hasOwnProperty("memFree"))
                    if (typeof message.memFree === "number")
                        object.memFree = options.longs === String ? String(message.memFree) : message.memFree;
                    else
                        object.memFree = options.longs === String ? $util.Long.prototype.toString.call(message.memFree) : options.longs === Number ? new $util.LongBits(message.memFree.low >>> 0, message.memFree.high >>> 0).toNumber(true) : message.memFree;
                if (message.memAvailable != null && message.hasOwnProperty("memAvailable"))
                    if (typeof message.memAvailable === "number")
                        object.memAvailable = options.longs === String ? String(message.memAvailable) : message.memAvailable;
                    else
                        object.memAvailable = options.longs === String ? $util.Long.prototype.toString.call(message.memAvailable) : options.longs === Number ? new $util.LongBits(message.memAvailable.low >>> 0, message.memAvailable.high >>> 0).toNumber(true) : message.memAvailable;
                if (message.cpuUsage && message.cpuUsage.length) {
                    object.cpuUsage = [];
                    for (var j = 0; j < message.cpuUsage.length; ++j)
                        object.cpuUsage[j] = options.json && !isFinite(message.cpuUsage[j]) ? String(message.cpuUsage[j]) : message.cpuUsage[j];
                }
                return object;
            };

            /**
             * Converts this Stat to JSON.
             * @function toJSON
             * @memberof sysmon_web.msg.Stat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Stat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Stat
             * @function getTypeUrl
             * @memberof sysmon_web.msg.Stat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Stat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/sysmon_web.msg.Stat";
            };

            return Stat;
        })();

        return msg;
    })();

    return sysmon_web;
})();

module.exports = $root;
