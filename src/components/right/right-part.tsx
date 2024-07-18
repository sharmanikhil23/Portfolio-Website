import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import "./css/rightPart.css";
import AboutPage from "./aboutPage/about";
import navData from "./navData";
import Resume from "./resume";
import ContactMe from "./contactMePage/contactMe";
import Projects from "./projects/projects";
import { SetSelectedProject } from "../../dataTypes/types";

const RightPart: React.FC<{ setSelectedProject: SetSelectedProject }> = ({
  setSelectedProject,
}) => {
  let [currentSelected, setCurrentSelected] = useState<number>(1);

  useEffect(() => {
    let elm = document.querySelectorAll(".navBar-tabs");
    Array.from(elm).forEach((element, index) => {
      let htmlElement = element as HTMLElement;
      if (index + 1 == currentSelected) {
        htmlElement.classList.add("navBar-item-selected");
      } else {
        htmlElement.classList.remove("navBar-item-selected");
      }
    });

    let rightPart = document.getElementById("right-part-1") as HTMLElement;
    // let leftPart = document.getElementById("left-part") as HTMLElement;

    if (currentSelected == 2) {
      rightPart.style.height = "30" + "rem";
    } else {
      rightPart.style.height = "auto";
    }
  }, [currentSelected]);

  return (
    <div id="right-part-1">
      <NavBar setCurrentSelected={setCurrentSelected}></NavBar>
      <div id="right-part-2">
        <Header currentSelected={currentSelected}></Header>
        {currentSelected == 1 && <AboutPage></AboutPage>}
        {currentSelected == 2 && <Resume></Resume>}
        {currentSelected == 3 && (
          <Projects setSelectedProject={setSelectedProject}></Projects>
        )}
        {currentSelected == 4 && <ContactMe></ContactMe>}
      </div>
    </div>
  );
};

const Header: React.FC<{ currentSelected: number }> = ({ currentSelected }) => {
  return (
    <h1 id="right-area-heading">
      {navData.map((data, index) => {
        if (index + 1 == currentSelected) {
          return data.data;
        }
      })}
    </h1>
  );
};

export default RightPart;
