'use client'

import { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { sysmon_web } from './proto/msg';

import { formatBytes, uptimeToString } from './util';

import Plot from './plot';

export default function Home() {
    const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8080/stats");
    const [stats, setStats] = useState<sysmon_web.msg.Stat>();

    // TODO this better be a circular buffer next time I check
    // NOTE idx 0 is avg
    const [cpuUsagePoints, setCpuUsagePoints] = useState<[[number]]>([[0]]);
    // TODO this better be a circular buffer next time I check
    const [memUsagePoints, setMemUsagePoints] = useState<[number]>([0]);

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
            var sum = 0;
            stats.cpuUsage.forEach((usage, i, _) => {
                if (!cpuUsagePoints[i + 1]) {
                    cpuUsagePoints[i + 1] = [0];
                }

                // NOTE shift cpuavg as well
                if (cpuUsagePoints[i].length >= 60) {
                    cpuUsagePoints[i].shift();
                }

                cpuUsagePoints[i + 1].push(usage * 100);
                sum += usage;
            });

            cpuUsagePoints[0].push(sum / stats.cpuUsage.length * 100);
            setCpuUsagePoints(cpuUsagePoints);

            if (memUsagePoints.length >= 60) {
                memUsagePoints.shift();
            }
            var memPercent = (stats.memTotal - stats.memAvailable) / stats.memTotal * 100;
            memUsagePoints.push(memPercent);
            setMemUsagePoints(memUsagePoints);
        }
    }, [stats])

    function getMemoryUsage() {
        if (stats) {
            return formatBytes(stats.memTotal - stats.memAvailable) + " / " + formatBytes(stats.memTotal);
        }
    }

    return (
        <div style={{ color: '#aaa' }}>
            {/* <div>
                <span>The WebSocket is currently {connectionStatus}</span>
            </div>
            <div>
                {stats ? <span>Uptime: {uptimeToString(stats.uptime)}</span> : null}
            </div>
            <div>
                {stats ? <span>Memory: {getMemoryUsage()}</span> : null}
            </div> */}
            <div className='grid grid-cols-4 gap-0 items-center'>
                <div></div>
                <div className="grid gri-cols-2 gap-2 col-span-2" style={{ width: "fit-content" }}>
                    <div>
                        {stats ? <span>Uptime: {uptimeToString(stats.uptime)}</span> : null}
                    </div>
                    <div className="col-span-2" style={{ borderColor: "#aaa", borderStyle: "solid", borderWidth: 1, width: "fit-content", height: "fit-content" }}>
                        <Plot label={"cpuavg"} color="#068691" points={cpuUsagePoints[0]} height={80} width={850} pointsX={60} pointsY={100} drawGauge={true}/>
                    </div>
                    {cpuUsagePoints.filter((_v, i, _) => i > 0).map((_, i) =>
                        <div style={{ borderColor: "#aaa", borderStyle: "solid", borderWidth: 1, width: "fit-content", height: "fit-content" }}>
                            <Plot label={"cpu" + (i + 1)} color="#068691" points={cpuUsagePoints[i]} width={420} height={40} pointsX={60} pointsY={100} />
                        </div>
                    )}
                    <div className="col-span-2" style={{ borderColor: "#aaa", borderStyle: "solid", borderWidth: 1, width: "fit-content", height: "fit-content" }}>
                        <Plot label={"mem"} color="#eb9b34" points={memUsagePoints} height={80} width={850} pointsX={60} pointsY={100} />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}
