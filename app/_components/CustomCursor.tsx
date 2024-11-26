'use client';

import { useEffect, useContext } from "react";
import { motion, useMotionValue } from "framer-motion";
import { CursorContext } from "../_providers/CursorProvider";

export function CustomCursor() {
    const cursorState = useContext(CursorContext);
    const cursorType = cursorState[0];

    const WIDTH = 16; // Taille de base du curseur
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - WIDTH);
            cursorY.set(e.clientY - WIDTH);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <motion.div
            animate={cursorType}
            className="sm:block hidden fixed left-0 top-0 pointer-events-none z-50"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                width: `${WIDTH * 2}px`,
                height: `${WIDTH * 2}px`,
                scale: 15,
                borderRadius: "50%", 
                background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 65%)",             
                opacity: 0.05,
            }}
        />
    );
}
