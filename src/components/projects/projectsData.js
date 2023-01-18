import { BsGithub } from "react-icons/bs";
import { RiLiveFill } from "react-icons/ri";

//
import project0 from "./images/project0.png";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";

const projectData = [
  {
    image: project0,
    heading: " Sorting Algorithm Visualiser",
    description:
      "Developed a web app in which you can visualize the sorting Algorithm with Reach, js, scss",
    giticon: <BsGithub></BsGithub>,
    liveicon: <RiLiveFill></RiLiveFill>,
    link: "https://github.com/sharmanikhil23/algorithmVisualiser",
    live: "https://sorting-algorithm-visualiser-react.netlify.app/",
  },
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
  {
    image: project3,
    heading: "Weather Api",
    description:
      "A Custom build api used to fetch weather and also running live so you can try it. Instructions are avaliable on gitHub",
    giticon: <BsGithub></BsGithub>,
    liveicon: <RiLiveFill></RiLiveFill>,
    live: "https://sharmanikhil-weather-app.herokuapp.com/",
    link: "https://github.com/sharmanikhil23/weatherApp",
  },
];

export default projectData;
