import React from 'react';
import '../ComponentCSS/ZenitsuSword.css';
import { Eternity, swordData } from '../assets/assests';

const ZenitsuSword = () => {

    return (
        <section id="AboutSecondSection" className="SwordSectionCanvas">
            <div className="SwordWrapperInner">

                {/* ⚡ Left Column: High-Fidelity Image Showcase Stage */}
                <div className="SwordVisualStage">
                    <div className="SwordGlassContainer">
                        <img src={Eternity.ZenitsuSwordPhoto} alt="Zenitsu Lightning Nichirin Katana" loading="lazy" />
                    </div>
                    {/* Glowing static accent layers behind the frame */}
                    <div className="SwordElectricBackdrop"></div>
                </div>

                {/* ⚡ Right Column: Specialized Armament Specifications Deck */}
                <div className="SwordDetailsDeck">
                    <span className="SwordTagLine">{swordData.sectionTag}</span>
                    <h2>{swordData.title}</h2>
                    <p className="SwordMainDesc">{swordData.description}</p>

                    <div className="SwordDividerLine"></div>

                    <h3>{swordData.specsTitle}</h3>
                    <div className="SwordSpecsGrid">
                        {swordData.specs.map((spec, idx) => (
                            <div key={idx} className="SwordSpecNode">
                                <span className="SpecNodeLabel">{spec.label}</span>
                                <p className="SpecNodeValue">{spec.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ZenitsuSword;