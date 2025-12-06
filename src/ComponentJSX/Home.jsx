import React from 'react'
import Hero from './Hero'
import About from './About'
import About2 from './About2'
import Hero2 from './Hero2'

const Home = () => {
    return (
        <>
            <section id='HomeHeroSection'>
                <Hero />
            </section>

            <section id='AboutFirstSection'>
                <About />
            </section>

            <section id='AboutSecondSection'>
                <About2 />
            </section>

            <section id='TeamInfoSection'>
                <Hero2 />
            </section>
        </>
    )
}

export default Home