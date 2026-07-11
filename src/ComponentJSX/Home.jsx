import React from 'react'
import Hero from './Hero'
import About from './About'
import ZenitsuSword from './ZenitsuSword'
import TeamInfo from './TeamInfo'

const Home = () => {
    return (
        <>
            <section id='HomeHeroSection'>
                <Hero />
            </section>

            <section id='AboutFirstSection'>
                <About />
            </section>

            <section id='Zenitsu Sword Section'>
                <ZenitsuSword />
            </section>

            <section id='TeamInfoSection'>
                <TeamInfo />
            </section>
        </>
    )
}

export default Home