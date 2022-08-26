import React from "react";
import projectData from "./projectsData";

//importing the project data
import projectsData from "./projectsData";

//importing the css
import "./css/projects.css";

export const Projects = () => {
  return (
    <section id="project-area">
      <h1 id="project-area-title">Projects</h1>
      <Project></Project>
      <hr></hr>
    </section>
  );
};

const Project = () => {
  return (
    <section id="projects">
      {projectData.map(
        ({ image, heading, description, giticon, liveicon, live, link }) => {
          return (
            <section id="project">
              <img src={image}></img>
              <h2>{heading}</h2>
              <p>{description}</p>
              <section>
                <a target="_blank" href={live}>
                  {liveicon}
                </a>
                <a target="_blank" href={link}>
                  {giticon}
                </a>
              </section>
            </section>
          );
        }
      )}
    </section>
  );
};
