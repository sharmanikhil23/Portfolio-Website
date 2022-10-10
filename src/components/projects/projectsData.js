import { BsGithub } from "react-icons/bs";
import { RiLiveFill } from "react-icons/ri";

//
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";

const projectData = [
  {
    image: project1,
    heading: " Portfolio Website",
    description:
      "Build the frountEnd Website using the React Framework, html, css, scss",
    giticon: <BsGithub></BsGithub>,
    liveicon: <RiLiveFill></RiLiveFill>,
    live: "https://nikhil-sharma-portfolio.netlify.app/",
    link: "https://github.com/sharmanikhil23/Portfolio-Website",
  },
  {
    image: project2,
    heading: "To-Do App",
    description:
      "Build the complete full stack website with the help of the MERN stack by using NodeJs, Express in the back end along with the mongoDb and on the frount end using the html, css, js, React, Scss with authentication system which will keep your notes personal. \n To test it you can use any email eg nikhil@abc.ca and any passwords 123456789",
    giticon: <BsGithub></BsGithub>,
    liveicon: <RiLiveFill></RiLiveFill>,
    live: "https://to-do-list-by-nikhil.netlify.app",
    link: "https://github.com/sharmanikhil23/To-Do-FrountEnd",
  },
];

export default projectData;
