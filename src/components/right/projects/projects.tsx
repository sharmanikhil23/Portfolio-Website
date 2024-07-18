import React, { useEffect, useState } from "react";
import {
  catergoriesType,
  ProjectsDataType,
  SetCurrentSelectedType,
} from "../../../dataTypes/types";
import catergories from "./projectsData";
import "../css/projects.css";
import { SetSelectedProject as SetSelectedProjectType } from "../../../dataTypes/types";
import { FaEye } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Projects: React.FC<{ setSelectedProject: SetSelectedProjectType }> = ({
  setSelectedProject,
}) => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState<number>(0);

  useEffect(() => {
    let data = document.getElementsByClassName("project-area-nav-tab");

    Array.from(data).forEach((element, index) => {
      let htmlElement = element as HTMLElement;
      if (index == currentSelectedTab) {
        htmlElement.classList.add("project-area-nav-tab-item-selected");
      } else {
        htmlElement.classList.remove("project-area-nav-tab-item-selected");
      }
    });
  }, [currentSelectedTab]);

  return (
    <div id="projects-area-start">
      <div id="projects-area-nav-tabs">
        <ProjectCategories
          setCurrentSelectedTab={setCurrentSelectedTab}
        ></ProjectCategories>
      </div>
      <div id="projects-area-nav-tabs-2">
        <ProjectCategories2
          setCurrentSelectedTab={setCurrentSelectedTab}
          currentSelectedTab={currentSelectedTab}
        ></ProjectCategories2>
      </div>

      <div id="projects">
        {catergories.projectData.map((data, index) => {
          if (currentSelectedTab == 0) {
            return (
              <Project
                data={data}
                index={index}
                setSelectedProject={setSelectedProject}
              ></Project>
            );
          } else {
            if (
              data.category.toLowerCase().trim().replace(/\s+/g, "") ===
              catergories.catergories[currentSelectedTab]
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "")
            ) {
              return (
                <Project
                  data={data}
                  index={index}
                  setSelectedProject={setSelectedProject}
                ></Project>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

const ProjectCategories: React.FC<{
  setCurrentSelectedTab: SetCurrentSelectedType;
}> = ({ setCurrentSelectedTab }) => {
  return (
    <>
      {catergories.catergories.map((data: catergoriesType, index: number) => {
        return (
          <p
            key={index}
            onClick={() => setCurrentSelectedTab(() => index)}
            className="project-area-nav-tab"
          >
            {data}
          </p>
        );
      })}
    </>
  );
};

const ProjectCategories2: React.FC<{
  setCurrentSelectedTab: SetCurrentSelectedType;
  currentSelectedTab: number;
}> = ({ setCurrentSelectedTab, currentSelectedTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        id="project-area-nav-bar-toggle-button-area"
        onClick={toggleDropdown}
      >
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {catergories.catergories[currentSelectedTab]}
        </button>
        {isOpen && <FaArrowUp></FaArrowUp>}
        {!isOpen && <FaArrowDown></FaArrowDown>}
      </div>

      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {catergories.catergories.map((data: catergoriesType, index: number) => {
          return (
            <p
              key={index}
              onClick={() => {
                setCurrentSelectedTab(() => index);
                setIsOpen((current) => !current);
              }}
              className="project-area-nav-tab"
            >
              {data}
            </p>
          );
        })}
      </div>
    </>
  );
};

const Project: React.FC<{
  data: ProjectsDataType;
  index: number;
  setSelectedProject: SetSelectedProjectType;
}> = ({ data, index, setSelectedProject }) => {
  let { image, heading, category } = data;
  return (
    <div
      className="project-data-start"
      key={index}
      onClick={() => {
        setSelectedProject(() => catergories.projectData[index]);
        let target = document.getElementById(
          "selected-project-data"
        ) as HTMLElement;

        const windowHeight = window.scrollY;
        document.getElementsByTagName("body")[0].style.overflow = "hidden";

        target.style.top = `${windowHeight}px`;
        target.style.display = "flex";
      }}
    >
      <div className="project-data-image-area">
        <div className="project-data-image-eye-area">
          <FaEye className="project-data-image-eye"></FaEye>
        </div>

        <img src={image}></img>
      </div>
      <div className="project-data-description-area">
        <h3>{heading}</h3>
        <p>{category}</p>
      </div>
    </div>
  );
};

// const SelectedProjects: React.FC<{ data: ProjectsDataType }> = ({ data }) => {
//   const closeSeletedProject = () => {
//     let target = document.getElementById(
//       "selected-project-data"
//     ) as HTMLElement;
//     target.style.display = "none";
//   };

//   const {
//     image,
//     heading,
//     description,
//     giticon,
//     liveicon,
//     live,
//     link,
//   }: ProjectsDataType = data;
//   return (
//     <div id="selected-project-data">
//       <div id="selected-project-cross">
//         <RxCross2 onClick={() => closeSeletedProject()} />
//       </div>

//       <div id="selected-project">
//         {/* image */}
//         <div id="selected-project-img">
//           <img src={image}></img>
//         </div>
//         {/* heading */}
//         <div id="selected-project-heading">
//           <h1>{heading}</h1>
//         </div>
//         {/* description */}
//         <div id="selected-project-desc">
//           <p>{description}</p>
//         </div>
//         {/* Action Button */}
//         <div id="selected-project-actionButton">
//           <a href={link} target="_blank">
//             {giticon}
//           </a>
//           <a href={live} target="_blank">
//             {liveicon}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
export default Projects;
