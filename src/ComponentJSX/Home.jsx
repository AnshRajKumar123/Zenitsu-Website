import React from 'react'

import Hero from './Hero'
import About from './About'
import Navbar from './Navbar'
import ZenitsuSword from './ZenitsuSword'
import TeamInfo from './TeamInfo'
import ThunderBreathing from './ThunderBreathing'
import Cursor from './Cursor'

const Home = () => {
    return (
        <div className="ZenitsuLandingApp">
            <div id="HomeHeroSection">
                <Hero />
            </div>

            <div id="AboutFirstSection">
                <About />
            </div>

            <div><ZenitsuSword /></div>

            <div id="TeamInfoSection">
                <TeamInfo />
            </div>
            
            <div><ThunderBreathing /></div>
        </div>
    )
}

export default Home