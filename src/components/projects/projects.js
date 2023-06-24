import React, { useState } from "react";
import projectData from "./projectsData";

//importing the project data
import projectsData from "./projectsData";
import catergories from "./projectCategories";

let hambuger = document.querySelector(".hamburger");
let hambugerOpen = false;
hambuger.addEventListener("click", function () {
  if (!hambugerOpen) {
    hambuger.classList.add("hamburgerOpen");
    hambugerOpen = true;
    document.getElementById("projectCategoryAreaSecondary").style.display =
      "block";
  } else {
    hambuger.classList.remove("hamburgerOpen");
    hambugerOpen = false;
    document.getElementById("projectCategoryAreaSecondary").style.display =
      "none";
  }
});

export const Projects = () => {
  const allProjects = projectData;
  const [current, setCurrent] = useState(allProjects);

  const filterProjects = (e, type) => {
    e.preventDefault();
    if (type.toLowerCase() == "all") {
      setCurrent(allProjects);
      return;
    }
    let result = allProjects.filter((data) => {
      let { category } = data;
      category = category.toLowerCase();
      type = type.toLowerCase();
      category = category.replace(/\s/g, "");
      type = type.replace(/\s/g, "");

      if (type === category) {
        return data;
      }
    });

    setCurrent(result);
  };

  return (
    <>
      <div id="projects-area-start" className="reveal secondary">
        <div id="secondary-project-title">
          <h1 id="project-area-title">Projects</h1>
          <div class="hamburger">
            <div class="hamburgerBtn"></div>
            <ProjectTypesSecondary
              filterProjects={filterProjects}
            ></ProjectTypesSecondary>
          </div>
        </div>
        <Project current={current}></Project>
      </div>

      <div id="projects-area-start" className="reveal primary">
        <h1 id="project-area-title">Projects</h1>
        <ProjectTypes filterProjects={filterProjects}></ProjectTypes>
        <Project current={current}></Project>
      </div>
    </>
  );
};

const ProjectTypes = ({ filterProjects }) => {
  return (
    <div id="projectCategoryArea">
      {catergories.map((data, index) => {
        return (
          <div
            key={index}
            className="projectCategories"
            onClick={(e) => filterProjects(e, data)}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

const ProjectTypesSecondary = ({ filterProjects }) => {
  return (
    <div id="projectCategoryAreaSecondary">
      {catergories.map((data, index) => {
        return (
          <div
            key={index}
            className="projectCategoriesSecondary"
            onClick={(e) => filterProjects(e, data)}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

const Project = ({ current }) => {
  {
    return (
      <section
        id="projects"
        className={current.length == 1 ? "single-project" : ""}
      >
        {current.map(
          ({ image, heading, description, giticon, liveicon, live, link }) => {
            return (
              <section id="project">
                <img src={image}></img>
                <h2>{heading}</h2>
                <Description description={description}></Description>
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
  }
};

const Description = ({ description }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <p>
        {description.length < 200 ? (
          description
        ) : readMore == false ? (
          <MoreButton
            description={description}
            readMore={readMore}
            setReadMore={setReadMore}
          />
        ) : (
          <LessButton
            description={description}
            readMore={readMore}
            setReadMore={setReadMore}
          ></LessButton>
        )}
      </p>
    </>
  );
};

const MoreButton = ({ description, readMore, setReadMore }) => {
  return (
    <>
      {description.substring(0, 200)}...
      <button
        onClick={() => setReadMore(!readMore)}
        className="projectDescriptionbutton"
      >
        "Show More"
      </button>
    </>
  );
};

const LessButton = ({ description, readMore, setReadMore }) => {
  return (
    <>
      {description}
      <button
        onClick={() => setReadMore(!readMore)}
        className="projectDescriptionbutton"
      >
        "Show Less"
      </button>
    </>
  );
};
