import React, { useState, useEffect } from "react";

//importing all the components
import { FirstPage } from "../firstPage/firstPage";
import { Footer } from "../footer/footer";
import { Projects } from "../projects/projects";
import { Loading } from "./loading";

const Completed = () => {
  return (
    <div id="starting">
      <FirstPage></FirstPage>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export const Complete = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  // This will run one time after the component mounts
  useEffect((value) => {
    const onPageLoad = () => {
      setPlayAnimation(value);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      console.log("already done");
      onPageLoad(false);
    } else {
      window.addEventListener("load", onPageLoad(true));
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad(false));
    }
  }, []);

  return playAnimation ? <Loading></Loading> : <Completed></Completed>;
};
