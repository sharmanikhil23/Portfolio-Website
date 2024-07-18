import React from "react";
import skillsData from "../skillsData";

const AboutPage: React.FC = () => {
  return (
    <div>
      <p id="right-area-about">
        I'm a Software Engineer based in Ottawa, Canada. I enjoy creating things
        that live on the internet, whether that be websites, api, or anything in
        between. I have been building personal projects while studying at the
        Carleton University and I've manage to gain a decent amount of
        experience and valuable knowledge from different kinds of fields
        throughout my projects/work.
      </p>
      <Skills></Skills>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skill-section-start">
      <div id="skill-section-heading-area">
        <h1>Skills</h1>
      </div>
      <div id="skill-section-skill-tabs-area">
        {skillsData.map((data) => {
          return (
            <div className="skill-section-skill-tabs">
              <div className="skill-section-skill-tab-icon">{data.icon}</div>
              <div className="skill-section-skill-text">
                <h3>{data.name}</h3>
                <p>{data.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AboutPage;
