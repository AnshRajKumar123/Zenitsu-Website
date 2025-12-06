import React from 'react'
import '../ComponentCSS/Hero2.css'
import { Eternity } from '../assets/assests'

const Hero2 = () => {
    return (
        <div id='TeamInfoSection'>
            <div className="TeamHeroSection"></div>
            <div className="AboveHeroSect2">
                <h1>His Team Info</h1>

                <div className='ArrageBoxSect'>
                    <div className="TeamMember1">
                        <div className="boxImg">
                            <img src={Eternity.TanjiroPhoto} />
                        </div>
                        <div className="InfoAboutSectCh">
                            <p>Tanjiro Kamado is the main protagonist of Demon Slayer: Kimetsu no Yaiba. Kind-hearted and determined, he becomes a Demon Slayer after demons kill his family and turn his sister Nezuko into one. Skilled in Water and Sun Breathing techniques.</p>
                        </div>
                    </div>
                    <div className="TeamMember1">
                        <div className="InfoAboutSectCh">
                            <p>Nezuko Kamado is Tanjiro’s younger sister in Demon Slayer: Kimetsu no Yaiba. After being turned into a demon, she retains her humanity and strong bond with her brother. Unlike other demons, she survives without consuming humans. Nezuko possesses immense strength, regeneration.</p>
                        </div>
                        <div className="boxImg">
                            <img src={Eternity.NezukoPhoto} />
                        </div>
                    </div>
                    <div className="TeamMember1">
                        <div className="boxImg">
                            <img src={Eternity.InsukePhoto} />
                        </div>
                        <div className="InfoAboutSectCh">
                            <p>Inosuke Hashibira is a fierce and wild Demon Slayer in Demon Slayer: Kimetsu no Yaiba. Raised by boars, he wears a boar’s head and fights with dual Nichirin swords using Beast Breathing. Though hot-headed and competitive, Inosuke is brave, loyal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2