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

        msg.Stat = (function() {

            /**
             * Properties of a Stat.
             * @memberof sysmon_web.msg
             * @interface IStat
             * @property {number|null} [uptime] Stat uptime
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
                if (options.defaults)
                    object.uptime = 0;
                if (message.uptime != null && message.hasOwnProperty("uptime"))
                    object.uptime = options.json && !isFinite(message.uptime) ? String(message.uptime) : message.uptime;
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
