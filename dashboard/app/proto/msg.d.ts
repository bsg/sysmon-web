import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace sysmon_web. */
export namespace sysmon_web {

    /** Namespace msg. */
    namespace msg {

        /** Properties of a Stat. */
        interface IStat {

            /** Stat uptime */
            uptime?: (number|null);
        }

        /** Represents a Stat. */
        class Stat implements IStat {

            /**
             * Constructs a new Stat.
             * @param [properties] Properties to set
             */
            constructor(properties?: sysmon_web.msg.IStat);

            /** Stat uptime. */
            public uptime: number;

            /**
             * Creates a new Stat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Stat instance
             */
            public static create(properties?: sysmon_web.msg.IStat): sysmon_web.msg.Stat;

            /**
             * Encodes the specified Stat message. Does not implicitly {@link sysmon_web.msg.Stat.verify|verify} messages.
             * @param message Stat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sysmon_web.msg.IStat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Stat message, length delimited. Does not implicitly {@link sysmon_web.msg.Stat.verify|verify} messages.
             * @param message Stat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sysmon_web.msg.IStat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Stat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Stat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sysmon_web.msg.Stat;

            /**
             * Decodes a Stat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Stat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sysmon_web.msg.Stat;

            /**
             * Verifies a Stat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Stat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Stat
             */
            public static fromObject(object: { [k: string]: any }): sysmon_web.msg.Stat;

            /**
             * Creates a plain object from a Stat message. Also converts values to other types if specified.
             * @param message Stat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sysmon_web.msg.Stat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Stat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Stat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
