import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimationSector = () => {

    window.scrollTo(0, 0);
    
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".FirstLine h1", {
            y: 50,
            opacity: 0,
            delay: 0.2,
            duration: 0.7,
        });

        tl.from("h4", {
            y: 50,
            opacity: 0,
            duration: 0.7,
            stagger: 0.3,
        });

        tl.from(".ZenitsuImg", {
            scale: 20,
            rotate: 100,
            duration: 1,
        });

        tl.from(".HeroTitle", {
            opacity: 0,
            y: 80,
            duration: 0.7,
            ease: "power3.out",
        });

        // 🔹 STEP 1: Split Hero Heading text into spans
        const heroHeading = document.querySelector(".CharacterInfo p");
        if (heroHeading) {
            const text = heroHeading.textContent;
            heroHeading.innerHTML = text.split("").map(ch => `<span>${ch}</span>`).join("");
        }

        // 🔹 STEP 2: Animate BrokenText (Hero Heading)
        tl.from(".HeroHeading span", {
            opacity: 0,
            duration: 0.3,
            stagger: 0.01,
            ease: "back.out(1.7)",
        });

        gsap.to(".HeroTitle", {
            textShadow: "0 0 20px #ffdd55, 0 0 40px #ffaa00",
            repeat: -1,
            yoyo: true,
            duration: 1.2,
        });

    });

    return null; // no JSX needed here
};

export default AnimationSector;