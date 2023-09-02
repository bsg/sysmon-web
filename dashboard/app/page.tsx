'use client'

import { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { sysmon_web } from './proto/msg';

import {uptimeToString} from './util';

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

    return (
        <div>
            <div>
                <span>The WebSocket is currently {connectionStatus}</span>
            </div>
            <div>
                {stats ? <span>Uptime: {uptimeToString(stats.uptime)}</span> : null}
            </div>
        </div>
    );
}
