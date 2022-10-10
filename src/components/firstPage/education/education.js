import React from "react";
import { EducationalData } from "./allEducationData";
import "./css/education.css";

export const Education = () => {
  return (
    <section id="education">
      <p id="education-heading">Education</p>

      {EducationalData.map((value, index) => {
        const { title, period, institution, description } = value;
        return (
          <div key={index}>
            <div id="education-school">
              <h1>{title}</h1>
              <p>{period}</p>
            </div>
            <p id="education-college">{institution}</p>
            <p id="education-description">{description}</p>
          </div>
        );
      })}
      <hr></hr>
    </section>
  );
};
