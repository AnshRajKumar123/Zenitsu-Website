import React from 'react'
import '../ComponentCSS/Hero.css'
import { Eternity } from '../assets/assests'

const Hero = () => {
    return (
        <div className='HeroWrapper'>
            <div className="MainBackGround"></div>

            <div className="AboveBlur">

                <div className="CharacterInfo">
                    <h1 className="HeroTitle">Zenitsu Agatsuma</h1>
                    <p className='HeroHeading'>
                        Zenitsu Agatsuma is a cowardly yet kind-hearted Demon Slayer who often panics and fears death.
                        Despite his timid nature, he light possesses incredible potential when unconscious, becoming calm and deadly.
                        He wields the Thunder Breathing style, mastering only the First Form: Thunderclap and Flash.
                    </p>
                </div>

                <div className="CharacterImage">
                    <img className="ZenitsuImg" src={Eternity.ZentisuPhoto} />
                </div>

            </div>
        </div>
    )
}

export default Hero