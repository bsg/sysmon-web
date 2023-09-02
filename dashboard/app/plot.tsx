import { useEffect, useRef } from "react";
import { hexToRGBA } from "./util";

interface PlotProps {
    color: string,
    points: number[],
    width: number,
    height: number,
    pointsX: number,
    pointsY: number,
    label?: string
}

export default function Plot(props: PlotProps) {
    const canvasRef: React.RefObject<HTMLCanvasElement> | null = useRef(null);

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext("2d");
        if (ctx) {
            var width = ctx.canvas.width;
            var height = ctx.canvas.height;

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.fillStyle = hexToRGBA(props.color, 0.4);
            ctx.strokeStyle = hexToRGBA(props.color, 1.0);
            ctx.lineWidth = 2;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';


            var pixelsPerDivX = width / props.pointsX;
            var pixelsPerDivY = height / props.pointsY;

            let prevPoint = [0, height];
            props.points.forEach((val, i, arr) => {
                ctx.beginPath();
                ctx.moveTo(prevPoint[0], prevPoint[1]);
                ctx.lineTo(i * pixelsPerDivX, height - val * pixelsPerDivY);
                prevPoint = [i * pixelsPerDivX, height - val * pixelsPerDivY];
                ctx.stroke();
                ctx.lineTo(i * pixelsPerDivX, height);
                ctx.lineTo(prevPoint[0] - pixelsPerDivX, height);
                ctx.fill();
            });

            if (props.label) {
                //ctx.clearRect(0, 0, 12 * 4, 20);
                //ctx.stroke();
                ctx.fillStyle = ctx.strokeStyle;
                ctx.font = "14px monospace";
                ctx.fillText(props.label, 0, 14);
            }
        }
    })

    return (
        <canvas width={props.width} height={props.height} ref={canvasRef} />
    )
}