import React from "react";
import navData from "./navData";
import "./css/navBar.css";
import { SetCurrentSelectedType, NavBarProps } from "../../dataTypes/types";

const NavBar: React.FC<NavBarProps> = ({ setCurrentSelected }) => {
  return (
    <div id="navBar">
      <div>
        {navData.map(({ id, data }, index) => {
          return (
            <p
              onClick={() => {
                setCurrentSelected((current: number) => id);
              }}
              key={id}
              className="navBar-tabs"
            >
              {data}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
