"use client";

import { useRef, useEffect, useCallback } from "react";

export default function ClickSpark({
    sparkColor = "#3f538d",
    sparkSize = 40,
    sparkRadius = 40,
    sparkCount = 8,
    duration = 400,
    easing = "ease-out",
    extraScale = 1.0,
    excludeSelector = "[data-no-spark]",
    children,
    }) {
    const canvasRef = useRef(null);
    const sparksRef = useRef([]);
    const startTimeRef = useRef(null);

    // Keep the canvas sized to its parent
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        let resizeTimeout;

        const resizeCanvas = () => {
        const { width, height } = parent.getBoundingClientRect();
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }
        };

        const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 50);
        };

        const ro = new ResizeObserver(handleResize);
        ro.observe(parent);
        resizeCanvas();

        return () => {
        ro.disconnect();
        clearTimeout(resizeTimeout);
        };
    }, []);

    const easeFunc = useCallback(
        (t) => {
        switch (easing) {
            case "linear":
            return t;
            case "ease-in":
            return t * t;
            case "ease-in-out":
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            default:
            return t * (2 - t); // ease-out
        }
        },
        [easing]
    );

    // Animation loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId;

        const draw = (timestamp) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        sparksRef.current = sparksRef.current.filter((spark) => {
            const elapsed = timestamp - spark.startTime;
            if (elapsed >= duration) return false;

            const progress = elapsed / duration;
            const eased = easeFunc(progress);

            const distance = eased * sparkRadius * extraScale;
            const lineLength = sparkSize * (1 - eased);

            const x1 = spark.x + distance * Math.cos(spark.angle);
            const y1 = spark.y + distance * Math.sin(spark.angle);
            const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
            const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

            ctx.strokeStyle = sparkColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            return true;
        });

        animationId = requestAnimationFrame(draw);
        };

        animationId = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(animationId);
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale]);

    const handleClick = (e) => {
        // ✅ ignore clicks inside excluded areas (like your ReactFlow box)
        if (excludeSelector && e.target instanceof Element) {
        if (e.target.closest(excludeSelector)) return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const now = performance.now();
        const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        startTime: now,
        }));

        sparksRef.current.push(...newSparks);
    };

    return (
        <div
        onClick={handleClick}
        style={{
            position: "relative",
            width: "100%",
            minHeight: "100vh",
        }}
        >
        <canvas
            ref={canvasRef}
            style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
            pointerEvents: "none",
            userSelect: "none",
            }}
        />
        {children}
        </div>
    );
}
