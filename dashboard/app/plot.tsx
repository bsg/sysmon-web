import { useEffect, useRef } from "react";
import { hexToRGBA } from "./util";

interface PlotProps {
    color: string,
    points: number[],
    width: number,
    height: number,
    pointsX: number,
    pointsY: number,
    label?: string,
    drawGauge?: boolean
}

export default function Plot(props: PlotProps) {
    const canvasRef: React.RefObject<HTMLCanvasElement> | null = useRef(null);

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext("2d");
        if (ctx) {
            var plotOffsetX = 0;

            var w = ctx.canvas.width - plotOffsetX;
            var h = ctx.canvas.height;
            
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.fillStyle = hexToRGBA(props.color, 0.4);
            ctx.strokeStyle = hexToRGBA(props.color, 1.0);
            
            if (props.drawGauge) {
                if(props.points.slice(-1)[0] > 40) {
                    ctx.strokeStyle = hexToRGBA("#c42e23", 0.5);
                } else if(props.points.slice(-1)[0] > 80) {
                    ctx.strokeStyle = hexToRGBA("#c4a923", 0.5);
                }

                plotOffsetX = ctx.canvas.height;
                ctx.lineWidth = 20;
                ctx.beginPath();
                ctx.arc(plotOffsetX,
                    plotOffsetX,
                        plotOffsetX - 10,
                        Math.PI,
                        Math.PI + (Math.PI * 1.5 - Math.PI) * props.points.slice(-1)[0] / 100);
                ctx.stroke();
            }
            
            var pixelsPerDivX = w / props.pointsX;
            var pixelsPerDivY = h / props.pointsY;

            ctx.fillStyle = hexToRGBA(props.color, 0.4);
            ctx.strokeStyle = hexToRGBA(props.color, 1.0);
            ctx.lineWidth = 1;
            let prevPoint = [plotOffsetX, h];
            props.points.forEach((val, i, arr) => {
                ctx.beginPath();
                ctx.moveTo(prevPoint[0], prevPoint[1]);
                ctx.lineTo(i * pixelsPerDivX + plotOffsetX, h - val * pixelsPerDivY);
                prevPoint = [i * pixelsPerDivX + plotOffsetX, h - val * pixelsPerDivY];
                ctx.stroke();
                ctx.lineTo(i * pixelsPerDivX + plotOffsetX, h);
                ctx.lineTo(prevPoint[0] - pixelsPerDivX, h);
                ctx.fill();
                // ctx.closePath();
            });

            if (props.label) {
                //ctx.clearRect(0, 0, 12 * 4, 20);
                //ctx.stroke();
                ctx.fillStyle = ctx.strokeStyle;
                ctx.font = "14px monospace";
                ctx.fillText(props.label, 1, 13);
            }
        }
    })

    return (
        <canvas width={props.width} height={props.height} ref={canvasRef} />
    )
}