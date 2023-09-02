import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace sysmon_web. */
export namespace sysmon_web {

    /** Namespace msg. */
    namespace msg {

        /** Properties of a CpuTime. */
        interface ICpuTime {

            /** CpuTime user */
            user?: (number|Long|null);

            /** CpuTime nice */
            nice?: (number|Long|null);

            /** CpuTime system */
            system?: (number|Long|null);

            /** CpuTime idle */
            idle?: (number|Long|null);

            /** CpuTime iowait */
            iowait?: (number|Long|null);

            /** CpuTime irq */
            irq?: (number|Long|null);

            /** CpuTime softirq */
            softirq?: (number|Long|null);

            /** CpuTime steal */
            steal?: (number|Long|null);

            /** CpuTime guest */
            guest?: (number|Long|null);

            /** CpuTime guestNice */
            guestNice?: (number|Long|null);
        }

        /** Represents a CpuTime. */
        class CpuTime implements ICpuTime {

            /**
             * Constructs a new CpuTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: sysmon_web.msg.ICpuTime);

            /** CpuTime user. */
            public user: (number|Long);

            /** CpuTime nice. */
            public nice: (number|Long);

            /** CpuTime system. */
            public system: (number|Long);

            /** CpuTime idle. */
            public idle: (number|Long);

            /** CpuTime iowait. */
            public iowait: (number|Long);

            /** CpuTime irq. */
            public irq: (number|Long);

            /** CpuTime softirq. */
            public softirq: (number|Long);

            /** CpuTime steal. */
            public steal: (number|Long);

            /** CpuTime guest. */
            public guest: (number|Long);

            /** CpuTime guestNice. */
            public guestNice: (number|Long);

            /**
             * Creates a new CpuTime instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CpuTime instance
             */
            public static create(properties?: sysmon_web.msg.ICpuTime): sysmon_web.msg.CpuTime;

            /**
             * Encodes the specified CpuTime message. Does not implicitly {@link sysmon_web.msg.CpuTime.verify|verify} messages.
             * @param message CpuTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sysmon_web.msg.ICpuTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CpuTime message, length delimited. Does not implicitly {@link sysmon_web.msg.CpuTime.verify|verify} messages.
             * @param message CpuTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sysmon_web.msg.ICpuTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CpuTime message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CpuTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sysmon_web.msg.CpuTime;

            /**
             * Decodes a CpuTime message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CpuTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sysmon_web.msg.CpuTime;

            /**
             * Verifies a CpuTime message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CpuTime message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CpuTime
             */
            public static fromObject(object: { [k: string]: any }): sysmon_web.msg.CpuTime;

            /**
             * Creates a plain object from a CpuTime message. Also converts values to other types if specified.
             * @param message CpuTime
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sysmon_web.msg.CpuTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CpuTime to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CpuTime
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Stat. */
        interface IStat {

            /** Stat uptime */
            uptime?: (number|null);

            /** Stat cpuTime */
            cpuTime?: (sysmon_web.msg.ICpuTime[]|null);

            /** Stat memTotal */
            memTotal?: (number|Long|null);

            /** Stat memFree */
            memFree?: (number|Long|null);

            /** Stat memAvailable */
            memAvailable?: (number|Long|null);

            /** Stat cpuUsage */
            cpuUsage?: (number[]|null);
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

            /** Stat cpuTime. */
            public cpuTime: sysmon_web.msg.ICpuTime[];

            /** Stat memTotal. */
            public memTotal: (number|Long);

            /** Stat memFree. */
            public memFree: (number|Long);

            /** Stat memAvailable. */
            public memAvailable: (number|Long);

            /** Stat cpuUsage. */
            public cpuUsage: number[];

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
