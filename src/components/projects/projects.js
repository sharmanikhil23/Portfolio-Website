import React from "react";
import projectData from "./projectsData";

//importing the project data
import projectsData from "./projectsData";

export const Projects = () => {
  return (
    <div id="projects-area-start" className="reveal">
      <h1 id="project-area-title">Projects</h1>
      <Project></Project>
    </div>
  );
};

const Project = () => {
  return (
    <section id="projects" className="reveal">
      {projectData.map(
        ({ image, heading, description, giticon, liveicon, live, link }) => {
          return (
            <section id="project" className="reveal">
              <img src={image}></img>
              <h2>{heading}</h2>
              <p>{description}</p>
              <section id="project-buttons">
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
