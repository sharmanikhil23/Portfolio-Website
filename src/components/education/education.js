import React from "react";
import { EducationalData } from "./allEducationData";

export const Education = () => {
  return (
    <section id="education-area">
      <div id="education" className="reveal">
        <div id="education-complete-area">
          <h1 id="education-heading">Education</h1>
          {EducationalData.map((value, index) => {
            const { title, period, institution, description } = value;
            return (
              <div key={index} id="educations">
                <div id="education-school">
                  <h1>{title}</h1>
                  <p>{period}</p>
                </div>
                <p id="education-college">{institution}</p>
                <p id="education-description">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
