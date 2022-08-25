import React from "react";

/**
 * importing all the components
 */
import { NavBar } from "./navBar/navBar";
import { Name } from "./name/name";
import { Education } from "./education/education";

export const FirstPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Name></Name>
      <Education></Education>
    </>
  );
};
