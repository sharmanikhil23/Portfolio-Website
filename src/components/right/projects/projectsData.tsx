import { BsGithub } from "react-icons/bs";
import { RiLiveFill } from "react-icons/ri";

import project0 from "./images/project0.png";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import weatherChrome from "./images/weather-chrome.png";
import cPlus from "./images/cplus.jpeg";
import c from "./images/c.png";
import { catergoriesType, ProjectsDataType } from "../../../dataTypes/types";

const catergories: catergoriesType[] = [
  "All",
  "Full Stack",
  "C",
  "C++",
  "ReactJS",
  "NodeJS",
];

const projectData: ProjectsDataType[] = [
  {
    image: c,
    heading: "AES inspired Encryption / Decryption Algorithm",
    description:
      "Implemented a unique encryption algorithm in C programming language inspired by the Counter (CTR) mode of AES encryption, utilizing an incrementing counter to encrypt characters. Employed a chaining method similar to Cipher block chaining (CBC) for enhanced security, demonstrating proficiency in encryption algorithms and software development.",
    giticon: <BsGithub></BsGithub>,
    liveicon: <RiLiveFill></RiLiveFill>,
    link: "https://github.com/sharmanikhil23/private",
    live: "https://chrome.google.com/webstore/detail/weather-tracker/onjkdpaohoakdfepjkonohdjdiopncim",
    category: "c",
  },
  {
    image: cPlus,
    heading: "Veterinary Clinic Management System",
    description:
      "Developed a comprehensive veterinary clinic management system in C++ by incorporating OOP concepts like inheritance, polymorphism, and operator overloading to streamline data organization and improve efficiency. Implemented a collection class template with a simplified design pattern, utilizing inheritance and polymorphism, along with behavior classes to optimize functionality and ensure a user-friendly experience for staff and clients.",
    giticon: <BsGithub></BsGithub>,
    liveicon: <RiLiveFill></RiLiveFill>,
    link: "https://github.com/sharmanikhil23/private",
    live: "https://chrome.google.com/webstore/detail/weather-tracker/onjkdpaohoakdfepjkonohdjdiopncim",
    category: "c++",
  },
  {
    image: weatherChrome,
    heading: "Weather Chrome Extension",
    description:
      "Developed a minimalist and user-friendly Chrome Extension using HTML, CSS, SCSS, Vanilla JS, Node.js, and APIs, providing real-time weather information with one click. This project demonstrates proficiency in web development, API integration, and has attracted six global users.",
    giticon: <BsGithub></BsGithub>,
    liveicon: <RiLiveFill></RiLiveFill>,
    link: "https://github.com/sharmanikhil23/weather-chrome-extension",
    live: "https://chrome.google.com/webstore/detail/weather-tracker/onjkdpaohoakdfepjkonohdjdiopncim",
    category: "full stack",
  },
  {
    image: project0,
    heading: " Sorting Algorithm Visualiser",
    description:
      "Developed a web app in which you can visualize the sorting Algorithm with Reach, js, scss",
    giticon: <BsGithub></BsGithub>,
    liveicon: <RiLiveFill></RiLiveFill>,
    link: "https://github.com/sharmanikhil23/algorithmVisualiser",
    live: "https://sorting-algorithm-visualiser-react.netlify.app/",
    category: "ReactJS",
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
    category: "ReactJS",
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
    category: "full stack",
  },
  {
    image: project3,
    heading: "Weather Api",
    description:
      "A Custom build api used to fetch weather and also running live so you can try it. Instructions are avaliable on gitHub",
    giticon: <BsGithub></BsGithub>,
    liveicon: <RiLiveFill></RiLiveFill>,
    live: "https://gleaming-lion-wetsuit.cyclic.app/",
    link: "https://github.com/sharmanikhil23/weather-api",
    category: "Node Js",
  },
];

export default { projectData, catergories };
