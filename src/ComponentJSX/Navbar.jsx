import React, { useEffect, useState } from 'react'
import '../ComponentCSS/Navbar.css'

const Navbar = () => {

    const [active, setActive] = useState("HomeHeroSection");

    // Scroll to section when clicking nav item
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActive(id);
        }
    };

    useEffect(() => {
        const sections = ["HomeHeroSection", "AboutFirstSection", "AboutSecondSection", "TeamInfoSection"];

        const scrollHandler = () => {
            sections.forEach((sec) => {
                const element = document.getElementById(sec);
                if (!element) return;

                const top = element.getBoundingClientRect().top;

                if (top <= 150 && top >= -300) {
                    setActive(sec);
                }
            });
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <nav>
            <div className="FirstLine">
                <h1>Zenitsu Agatsuma</h1>
            </div>

            <div className="LastLine">
                <h4
                    className={active === "HomeHeroSection" ? "active" : ""}
                    onClick={() => handleScroll("HomeHeroSection")}
                >
                    Home
                </h4>

                <h4
                    className={active === "AboutFirstSection" ? "active" : ""}
                    onClick={() => handleScroll("AboutFirstSection")}
                >
                    About
                </h4>

                <h4
                    className={active === "TeamInfoSection" ? "active" : ""}
                    onClick={() => handleScroll("TeamInfoSection")}
                >
                    His Team
                </h4>

                <h4>Download</h4>
            </div>
        </nav>
    );
};

export default Navbar;