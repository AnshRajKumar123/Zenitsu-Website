import React from 'react'
import '../ComponentCSS/About.css'
import { Eternity } from '../assets/assests'

const About = () => {
    return (
        <>
            <div className="AboutSet" id='AboutFirstSection'>
                <h1>Back Story</h1>

                <div className="AboutBoxStory">
                    <div className="Storyinfo">
                        <p><b>Ordinary Beginnings:</b> Zenitsu Agatsuma started as a timid boy with little confidence or direction in life. He was tricked into becoming a Demon Slayer apprentice but lacked the courage and belief needed to fight demons.</p>
                        <br />
                        <p><b>Training Under Jigoro Kuwajima:</b> Under the mentorship of Jigoro Kuwajima, the former Thunder Hashira, Zenitsu trained in Thunder Breathing. During his harsh training, he was struck by lightning, turning his black hair yellow and marking a turning point in his life.</p>
                        <br />
                        <p><b>Struggles and Self-Doubt:</b> Zenitsu constantly viewed himself as weak because he mastered only one Thunder Breathing form. However, his master reminded him that mastering one technique perfectly was more valuable than knowing many incompletely.</p>
                        <br />
                        <p><b>Fear and Hidden Power:</b> Zenitsu’s fear of demons often overwhelms him, but when unconscious, his true strength surfaces. In this state, he fights calmly and efficiently, showing the power hidden beneath his fear.</p>
                        <br />
                        <p><b>Transformation Through Friendship:</b> After meeting Tanjiro, Nezuko, and Inosuke, Zenitsu gained courage and purpose. Their support inspired him to grow stronger, proving that bravery is not the absence of fear but the will to fight despite it.</p>
                    </div>
                    <div className="ImageBoxAbout">
                        <img src={Eternity.AboutZentisu} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About