import React from "react";
import "../styles/css/loader.css";

export const Loading = () => {
  return (
    <div id="loadingStart">
      <div class="loader">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
