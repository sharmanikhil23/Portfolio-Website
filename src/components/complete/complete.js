import React, { useState, useEffect } from "react";

//importing all the components
import { FirstPage } from "../firstPage/firstPage";
import { Footer } from "../footer/footer";
import { Projects } from "../projects/projects";
import { Loading } from "./loading";
import $ from "jquery";
const Completed = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 500);
  }, []);

  return playAnimation === true ? <Loading></Loading> : <Data></Data>;

  //const [playAnimation, setPlayAnimation] = useState(true);
  // const temp = (
  //   <div
  //     id="starting"
  //     onLoad={() => {
  //       setPlayAnimation(false);
  //     }}
  //   >
  //     <FirstPage></FirstPage>
  //     <Projects></Projects>
  //     <Footer></Footer>
  //   </div>
  // );
  // if (playAnimation) {
  //   return <Loading></Loading>;
  // }
  // return (
  // <>
  //   <FirstPage></FirstPage>
  //   <Projects></Projects>
  //   <Footer></Footer>
  // </>
  // );
};

export const Complete = () => {
  return <Completed></Completed>;
};

const Data = () => {
  return (
    <div id="completeDoc">
      <FirstPage></FirstPage>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};
