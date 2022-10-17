import React from "react";
import "../css/loading.css";
export const Loading = () => {
  return (
    <div id="loading-animations">
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
  );
};
