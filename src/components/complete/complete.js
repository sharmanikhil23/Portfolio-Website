import React, { useState, useEffect } from "react";

//importing all the components
import { FirstPage } from "../firstPage/firstPage";
import { Footer } from "../footer/footer";
import { Projects } from "../projects/projects";
import { Loading } from "./loading";
import { Education } from "../education/education";
import $ from "jquery";
const Completed = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  useEffect(() => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 1000);
  }, []);

  return playAnimation === true ? <Loading></Loading> : <Data></Data>;
};

export const Complete = () => {
  return <Completed></Completed>;
};

const Data = () => {
  return (
    <>
      <FirstPage></FirstPage>
      <Education></Education>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
};
