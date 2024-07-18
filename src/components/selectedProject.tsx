import projectsData from "./right/projects/projectsData";
import { ProjectsDataType } from "../dataTypes/types";
import { FaEye } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./css/selectedProject.css";

const SelectedProject: React.FC<{ data: ProjectsDataType }> = ({ data }) => {
  const closeSeletedProject = () => {
    let target = document.getElementById(
      "selected-project-data"
    ) as HTMLElement;
    target.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  };

  const {
    image,
    heading,
    description,
    giticon,
    liveicon,
    live,
    link,
  }: ProjectsDataType = data;
  return (
    <div id="selected-project-data">
      <div id="selected-project-cross">
        <RxCross2 onClick={() => closeSeletedProject()} />
      </div>

      <div id="selected-project">
        {/* image */}
        <div id="selected-project-img">
          <img src={image}></img>
        </div>
        {/* heading */}
        <div id="selected-project-heading">
          <h1>{heading}</h1>
        </div>
        {/* description */}
        <div id="selected-project-desc">
          <p>{description}</p>
        </div>
        {/* Action Button */}
        <div id="selected-project-actionButton">
          <a href={link} target="_blank">
            {giticon}
          </a>
          <a href={live} target="_blank">
            {liveicon}
          </a>
        </div>
      </div>
    </div>
  );
};
export default SelectedProject;
