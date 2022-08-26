import React from "react";

//importing all the components
import { FirstPage } from "../firstPage/firstPage";
import { Footer } from "../footer/footer";
import { Projects } from "../projects/projects";

export const Complete = () => {
  return (
    <>
      <FirstPage></FirstPage>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
};
