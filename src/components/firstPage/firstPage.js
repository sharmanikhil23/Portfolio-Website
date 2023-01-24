import React from "react";

/**
 * importing all the components
 */
import { NavBar } from "./navBar/navBar";
import { Name } from "./name/name";
import { Education } from "../education/education";

export const FirstPage = () => {
  return (
    <>
      <div id="main-page">
        <div id="main">
          <NavBar></NavBar>
          <Name></Name>
        </div>
        <div id="bg-animation-start">
          <div class="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
          </div>
        </div>
      </div>
    </>
  );
};
