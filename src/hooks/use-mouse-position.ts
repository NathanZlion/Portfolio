"use client";

import { useState, useEffect } from "react";

export default function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", moveCursor);
        return () => document.removeEventListener("mousemove", moveCursor);
    }, []);

    return position;
}