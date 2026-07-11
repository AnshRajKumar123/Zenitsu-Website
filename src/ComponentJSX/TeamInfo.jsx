import React from 'react';
import '../ComponentCSS/TeamInfo.css';
import { Eternity, teamLore } from '../assets/assests';

const TeamInfo = () => {

    return (
        <section id="TeamInfoSection" className="TeamSectionCanvas">
            {/* Global Section Header */}
            <div className="TeamGlobalHeader">
                <span className="TeamTagLine">{teamLore.sectionTag}</span>
                <h2>{teamLore.title}</h2>
                <div className="TeamHeaderLine"></div>
            </div>

            {/* ⚡ Step-by-Step Character Roster Track */}
            <div className="TeamRosterContainer">
                {teamLore.members.map((member, idx) => (
                    <div key={idx} className="TeamMemberCard">
                        
                        {/* Left Content Column */}
                        <div className="MemberInfoDeck">
                            <span className="MemberIndex">Profile // 0{idx + 1}</span>
                            <h3 className="MemberName">{member.name}</h3>
                            
                            <div className="MemberBadgeGroup">
                                <span className="MemberBadge role">{member.role}</span>
                                <span className="MemberBadge bond">{member.relationship}</span>
                            </div>

                            <p className="MemberDesc">{member.description}</p>
                        </div>

                        {/* Right Visual Image Column */}
                        <div className="MemberVisualStage">
                            <div className="MemberGlassWrapper">
                                <img src={member.imgAsset} alt={member.name} loading="lazy" />
                            </div>
                            <div className="MemberElectricAura"></div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamInfo;