import React from 'react'
import '../ComponentCSS/About2.css'
import { Eternity } from '../assets/assests'

const About2 = () => {
    return (
        <>
            <div className="AboutHisSword" id='AboutSecondSection'>
                <h1>Zenitsu's Sword Power</h1>
                <div className="AboutBoxStory">
                    <div className="Storyinfo">
                        <p><b>Appearance:</b> Zenitsu's Nichirin Blade has a distinct yellow color, symbolizing his Thunder Breathing style. The blade’s edge is bright yellow with lightning-like patterns running along its length, representing the speed and power of thunder.</p>
                        <br />
                        <p><b>Guard Design:</b> His tsuba (sword guard) is a circular shape with four-pointed indentations, resembling a thunderbolt. It is golden in color, further emphasizing his lightning theme and fast combat style.</p>
                        <br />
                        <p><b>Meaning of the Color:</b> Nichirin swords change color based on the user’s breathing technique. The yellow blade reflects electricity, energy, and agility, matching Zenitsu’s lightning-fast movements and his Thunder Breathing mastery.</p>
                        <br />
                        <p><b>Sheath and Handle:</b> The sword’s handle is white with a diamond-patterned wrapping, while the scabbard (sheath) is black with a yellow lining, creating a striking contrast and symbolizing lightning flashing in the dark.</p>
                        <br />
                        <p><b>Combat Style:</b> Zenitsu uses his sword with Iaijutsu-style strikes — unsheathing and slashing in one swift motion. His signature move, Thunderclap and Flash, allows him to dash forward and strike enemies instantly with lightning speed and precision.</p>
                    </div>
                    <div className="ImageBoxAbout">
                        <img src={Eternity.ZenitsuSword} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About2