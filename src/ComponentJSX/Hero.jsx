import React from 'react'
import '../ComponentCSS/Hero.css'
import { Eternity, heroData } from '../assets/assests'

const Hero = () => {

    return (
        <section className='HeroWrapper'>
            {/* Cinematic Blurred Background + Dark Lightning Overlay */}
            <div className="MainBackGround">
                <div className="LightningOverlay"></div>
            </div>

            <div className="AboveBlur">

                {/* ⚡ Left Column: Kinetic Typography Deck */}
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

                {/* ⚡ Right Column: Dynamic Character Showcase */}
                <div className="CharacterImage">
                    {/* Concentric Charging Energy Rings */}
                    <div className="LightningRing RingOuter"></div>
                    <div className="LightningRing RingInner"></div>

                    {/* 🌟 Dynamic PNG Lightning Matrix Layers */}
                    <div className="PngLightningContainer">
                        <img src={Eternity.LightningAsset1} className="FlashLightning LightTrack-A" alt="" />
                        <img src={Eternity.LightningAsset2} className="FlashLightning LightTrack-B" alt="" />
                    </div>

                    {/* Focal Breathing Aura Center Core */}
                    <div className="AuraGlow"></div>

                    {/* Floating Main Character Sprite */}
                    <img className="ZenitsuImg" src={Eternity.ZentisuPhoto} alt="Zenitsu Agatsuma" />
                </div>

            </div>
        </section>
    )
}

export default Hero;