'use client'

import { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { sysmon_web } from './proto/msg';

import { formatBytes, uptimeToString } from './util';

import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });

export default function Home() {
    const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8080/stats");
    const [stats, setStats] = useState<sysmon_web.msg.Stat>();


    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    useEffect(() => {
        const updateStats = async () => {
            if (lastMessage) {
                let array = new Uint8Array(await lastMessage.data.arrayBuffer());
                let decoded = sysmon_web.msg.Stat.decode(array);

                setStats(decoded);
            }
        }
        updateStats();
    }, [lastMessage]);

    function getMemoryUsage() {
        if (stats) {
            return formatBytes(stats.memTotal - stats.memAvailable) + " / " + formatBytes(stats.memTotal);
        }
    }

    return (
        <div>
            <div>
                <span>The WebSocket is currently {connectionStatus}</span>
            </div>
            <div>
                {stats ? <span>Uptime: {uptimeToString(stats.uptime)}</span> : null}
            </div>
            <div>
                {stats ? <span>Memory: {getMemoryUsage()}</span> : null}
            </div>
            <div>
                <GaugeComponent style={{ width: 250 }} arc={{

                    subArcs: [
                        {
                            limit: 25,
                            color: '#5BE12C',
                        },
                        {
                            limit: 50,
                            color: '#F5CD19',
                        },
                        {
                            limit: 75,
                            color: '#F58B19',
                        },
                        {
                            limit: 100,
                            color: '#EA4228',
                        },
                    ]
                }} labels={{ valueLabel: { maxDecimalDigits: 0 }, tickLabels: { hideMinMax: true } }} value={stats ? stats.cpuUsage[0] * 100 : 0} />
            </div>
        </div>
    );
}
