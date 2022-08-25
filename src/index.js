import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Importing all the Css
 */
import "./css/index.css";

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
