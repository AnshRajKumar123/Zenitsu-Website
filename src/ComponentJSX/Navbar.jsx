import React, { useEffect, useState } from 'react';
import '../ComponentCSS/Navbar.css';
import { Link } from "react-router-dom";
import { navLinks } from '../assets/assests';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const [active, setActive] = useState("HomeHeroSection");

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
                if (top <= 120 && top >= -350) {
                    setActive(sec);
                }
            });
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <nav className="ZenNavCanvas">
            <div className="NavBrandCore" onClick={() => handleScroll("HomeHeroSection")}>
                <h1>Zenitsu Agatsuma <span>⚡</span></h1>
            </div>

            <div className="NavLinksTrack">
                {navLinks.map((item, idx) => {
                    if (item.isExternal) {
                        return (
                            <Link
                                key={idx}
                                to={item.path}
                                target="_blank"
                                rel="noreferrer"
                                className="ExternalDownloadToken"
                            >
                                {item.label} <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        );
                    }

                    return (
                        <span
                            key={idx}
                            className={`NavLinkItem ${active === item.targetId ? "navActive" : ""}`}
                            onClick={() => handleScroll(item.targetId)}
                        >
                            {item.label}
                        </span>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;