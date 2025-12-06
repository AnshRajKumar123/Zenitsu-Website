import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        // Animate cursor position following the mouse
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "back.out(1.7)",
            });
        };

        window.addEventListener("mousemove", moveCursor);

        // Clean up listener on unmount
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return <div className="cursor"></div>;
};

export default Cursor;