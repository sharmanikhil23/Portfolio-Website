import React from "react";
import logo from "./logo.png";

/**
 * importing the css
 */
import "./css/navBar.css";
import "./css/color.css";

/**
 * importing all the components
 */
import { links } from "./navBarLinks";

export const NavBar = () => {
  return (
    <div className="navbar">
      <NavBarLogo className="navbar-logo"></NavBarLogo>
      <MainNavBar></MainNavBar>
      <SecondayNavBar></SecondayNavBar>
    </div>
  );
};

const NavBarLogo = () => {
  return <img src={logo} style={{ color: "white" }}></img>;
};

const NavBarLinks = ({ name, link, target }) => {
  return (
    <h3>
      <a target={target} href={link}>
        {name}
      </a>
    </h3>
  );
};

const MainNavBar = () => {
  return (
    <section className="navbar-links">
      {links.map((data, index) => {
        return <NavBarLinks key={index} {...data}></NavBarLinks>;
      })}
    </section>
  );
};

const SecondayNavBar = () => {
  return (
    <section className="secondary-navbar">
      <section id="hamburger-button" onClick={() => menuButton()}>
        <section id="hamburger"></section>
      </section>
      <section className="secondary-navbar-links">
        {links.map((data, index) => {
          return <NavBarLinks key={index} {...data}></NavBarLinks>;
        })}
      </section>
    </section>
  );
};

let menuButton = () => {
  let hamburgerButton = document.getElementById("hamburger-button");
  let secondayNavBar = document.getElementsByClassName(
    "secondary-navbar-links"
  )[0];

  let length = hamburgerButton.classList.length;
  if (length == 1) {
    hamburgerButton.classList.remove("open");
    secondayNavBar.style.display = "none";
  } else {
    hamburgerButton.classList.add("open");
    secondayNavBar.style.display = "flex";
  }
};
