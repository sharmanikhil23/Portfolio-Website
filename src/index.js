import React from "react";
import ReactDOM from "react-dom/client";
import "./components/animation.js/index";

/**
 * Importing all the Css
 */
import "./components/styles/css/index.css";
/**
 * importing Other components
 */

import { Complete } from "./components/complete/complete";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Complete></Complete>
  </>
);
