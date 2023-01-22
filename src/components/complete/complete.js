import React, { useState, useEffect } from "react";

//importing all the components
import { FirstPage } from "../firstPage/firstPage";
import { Footer } from "../footer/footer";
import { Projects } from "../projects/projects";
import { Loading } from "./loading";

const Completed = () => {
  const [playAnimation, setPlayAnimation] = useState(true);
  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return playAnimation === true ? (
    <Loading></Loading>
  ) : (
    <>
      <FirstPage></FirstPage>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );

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
