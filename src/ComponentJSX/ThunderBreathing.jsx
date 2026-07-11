import React, { useState } from 'react';
import '../ComponentCSS/ThunderBreathing.css';
import { breathingData } from '../assets/assests'

const ThunderBreathing = () => {
    const [activeForm, setActiveForm] = useState(0);

    return (
        <section id="ThunderFormsSection" className="BreathingSectionCanvas">
            <div className="BreathingInnerWrapper">

                {/* Global Section Header */}
                <div className="BreathingHeaderBlock">
                    <span className="BreathingTag">{breathingData.sectionTag}</span>
                    <h2>{breathingData.title}</h2>
                    <div className="BreathingHeaderLine"></div>
                    <p>{breathingData.subtitle}</p>
                </div>

                {/* ⚡ Split Catalog System Layout */}
                <div className="BreathingCatalogGrid">

                    {/* Left Column: Interactive Form Select Track */}
                    <div className="FormsSelectorTrack">
                        {breathingData.forms.map((form, idx) => (
                            <div
                                key={idx}
                                className={`FormSelectNode ${activeForm === idx ? 'nodeSelected' : ''}`}
                                onClick={() => setActiveForm(idx)}
                            >
                                <span className="FormNodeNum">{form.num}</span>
                                <div className="FormNodeMeta">
                                    <h4>{form.name}</h4>
                                    <span>{form.japanese}</span>
                                </div>
                                <i className="ri-flashlight-line nodeBoltIcon"></i>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: High-End Live Details Panel Display */}
                    <div className="FormDisplayPanelStage">
                        <div className="DisplayPanelGlass">
                            <span className="DisplayTag">Form // {breathingData.forms[activeForm].num}</span>
                            <h3 className="DisplayNameMain">{breathingData.forms[activeForm].name}</h3>
                            <span className="DisplayKanji">{breathingData.forms[activeForm].japanese}</span>

                            <div className="DisplayPanelDivider"></div>

                            <p className="DisplayDescText">{breathingData.forms[activeForm].desc}</p>

                            <div className="DisplayFooterMetrics">
                                <span className="MetricLabel">Combat Metric:</span>
                                <p className="MetricValueText">{breathingData.forms[activeForm].lethality}</p>
                            </div>
                        </div>
                        {/* Static underlying yellow aura layer */}
                        <div className="DisplayPanelAuraBackdrop"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ThunderBreathing;