'use client'

import { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { sysmon_web } from './proto/msg';

import { formatBytes, uptimeToString } from './util';

import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });

import Plot from './plot';

export default function Home() {
    const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8080/stats");
    const [stats, setStats] = useState<sysmon_web.msg.Stat>();
    const [points, setPoints] = useState([0]);

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
        if (stats) {
            if(points.length >= 100) {
                points.shift();
            }
                setPoints(points.concat([stats.cpuUsage[0] * 100]));
        }
    }, [lastMessage]);

    function getMemoryUsage() {
        if (stats) {
            return formatBytes(stats.memTotal - stats.memAvailable) + " / " + formatBytes(stats.memTotal);
        }
    }

    return (
        <div style={{ color: '#ddd' }}>
            <div>
                <span>The WebSocket is currently {connectionStatus}</span>
            </div>
            <div>
                {stats ? <span>Uptime: {uptimeToString(stats.uptime)}</span> : null}
            </div>
            <div>
                {stats ? <span>Memory: {getMemoryUsage()}</span> : null}
            </div>
            <div style={{ width: 200 }}>
                <GaugeComponent minValue={0} maxValue={100} value={stats ? stats.cpuUsage[0] * 100 : 0} labels={{ tickLabels: { hideMinMax: true }, valueLabel: { maxDecimalDigits: 0 } }} />
            </div>
            <div>
                <Plot color="#c00" points={points} divX={100} divY={100} />
            </div>
        </div>
    );
}
