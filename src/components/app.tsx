import React, { useState } from "react";
import "./css/app.css";
import LeftPart from "./left/left-part";
import RightPart from "./right/right-part";
import { ProjectsDataType, SetSelectedProject } from "../dataTypes/types";
import SelectedProjects from "./selectedProject";
import { Link } from "react-router-dom";
import navData from "./right/navData";

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsDataType>({
    image: "project3",
    heading: "Weather Api",
    description:
      "A Custom build api used to fetch weather and also running live so you can try it. Instructions are avaliable on gitHub",
    giticon: "",
    liveicon: "",
    live: "https://gleaming-lion-wetsuit.cyclic.app/",
    link: "https://github.com/sharmanikhil23/weather-api",
    category: "Node Js",
  });

  return (
    <>
      <SelectedProjects data={selectedProject}></SelectedProjects>

      <div id="main-start-1">
        <div id="main-start-2">
          <LeftPart></LeftPart>
          <RightPart setSelectedProject={setSelectedProject}></RightPart>
        </div>
      </div>
    </>
  );
};

const MainScreen: React.FC<{ setSelectedProject: SetSelectedProject }> = ({
  setSelectedProject,
}) => {
  return (
    <>
      <div id="main-start-1">
        <div id="main-start-2">
          <LeftPart></LeftPart>
          <RightPart setSelectedProject={setSelectedProject}></RightPart>
        </div>
      </div>
    </>
  );
};

export default App;
