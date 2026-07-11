import React from 'react'
import '../ComponentCSS/About.css'
import { Eternity, aboutLore } from '../assets/assests'

const About = () => {

    return (
        <section className="AboutMainCanvas">
            {/* Header Module */}
            <div className="AboutGlobalHeader">
                <span className="ZenLoreTag">{aboutLore.sectionTag}</span>
                <h2>{aboutLore.title}</h2>
                <div className="LoreHeaderLine"></div>
            </div>

            {/* Alternating Cinematic Chapters Layout */}
            <div className="LoreChaptersContainer">
                {aboutLore.chapters.map((chapter, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div 
                            key={chapter.id} 
                            id={chapter.id} 
                            className={`LoreRowNode ${isEven ? 'NormalRow' : 'InvertedRow'}`}
                        >
                            {/* Text Block */}
                            <div className="LoreTextContent">
                                <span className="ChapterTag">{chapter.tag}</span>
                                <h3>{chapter.heading}</h3>
                                <p>{chapter.text}</p>
                            </div>

                            {/* Visual Asset Container Box */}
                            <div className="LoreImageShowcase">
                                <div className="LoreGlassFrame">
                                    <img src={chapter.imgAsset} alt={chapter.heading} loading="lazy" />
                                </div>
                                <div className="ElectricAccentBackground"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default About;