'use client'

import { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { sysmon_web } from './proto/msg';

import { formatBytes, uptimeToString } from './util';

import Plot from './plot';

export default function Home() {
    const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8080/stats");
    const [stats, setStats] = useState<sysmon_web.msg.Stat>();
    const [points, setPoints] = useState<[[number]] | []>([]);

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

    useEffect(() => {
        if (stats) {
            stats.cpuUsage.forEach((usage, i, _) => {
                if (!points[i]) {
                    points[i] = [0];
                }

                if (points[i].length >= 100) {
                    points[i].shift();
                }

                points[i].push(usage * 100);
                setPoints(points);
            });
        }
    }, [stats])

    function getMemoryUsage() {
        if (stats) {
            return formatBytes(stats.memTotal - stats.memAvailable) + " / " + formatBytes(stats.memTotal);
        }
    }

    return (
        <div style={{ color: '#aaa' }}>
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
                <div className="grid grid-cols-2 gap-1" style={{ width: "fit-content" }}>
                    {points.map((_, i) =>
                        <div style={{ borderColor: "#aaa", borderStyle: "solid", borderWidth: 1, width: 300 }}>
                            <Plot label={"cpu" + (i + 1)} color="#068691" points={points[i]} height={40} width={300} pointsX={100} pointsY={100} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
