import React from 'react'
import '../ComponentCSS/Hero.css'
import { Eternity, heroData } from '../assets/assests'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

    useGSAP(() => {
        gsap.to(".HeroTitle", {
            textShadow: "0 0 20px #ffdd55, 0 0 40px #ffaa00",
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "power1.inOut"
        });
    });

    return (
        <section className='HeroWrapper'>
            <div className="MainBackGround">
                <div className="LightningOverlay"></div>
            </div>

            <div className="AboveBlur">
                <div className="CharacterInfo">
                    <div className="ThunderBadge">
                        <i className="ri-flashlight-fill"></i>
                        <span>{heroData.badge}</span>
                    </div>

                    <h1 className="HeroTitle">
                        <span className="FirstName">{heroData.firstName}</span>
                        <span className="LastName">{heroData.lastName}</span>
                    </h1>

                    <div className="DescWrapper">
                        <p>{heroData.description}</p>
                    </div>

                    <button className="ThunderBtn">
                        {heroData.cta} <i className="ri-arrow-right-up-line"></i>
                    </button>
                </div>

                <div className="CharacterImage">
                    <div className="LightningRing RingOuter"></div>
                    <div className="LightningRing RingInner"></div>

                    <div className="PngLightningContainer">
                        <img src={Eternity.LightningAsset1} className="FlashLightning LightTrack-A" alt="" />
                        <img src={Eternity.LightningAsset2} className="FlashLightning LightTrack-B" alt="" />
                    </div>

                    <div className="AuraGlow"></div>
                    <img className="ZenitsuImg" src={Eternity.ZentisuPhoto} alt="Zenitsu Agatsuma" />
                </div>
            </div>
        </section>
    )
}

export default Hero;