import React, { useEffect, useState } from "react";
import "./css/resume.css"; // Adjust path as necessary
import Loader from "../loader"; // Assuming Loader component exists

const Resume = () => {
  const [resumeLoading, setResumeLoading] = useState<boolean>(true);

  useEffect(() => {
    const iFrame = document.getElementById(
      "resumeArea-iframe"
    ) as HTMLIFrameElement;

    const handleLoad = () => {
      setResumeLoading(false); // Set loading state to false when iframe content is loaded
      iFrame.style.opacity = "1";
      iFrame.style.visibility = "visible";
    };

    if (iFrame) {
      iFrame.addEventListener("load", handleLoad);
    }

    return () => {
      if (iFrame) {
        iFrame.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <div id="resumeArea">
      {resumeLoading && <Loader />}
      <ResumeFromDocs />
    </div>
  );
};

const ResumeFromDocs = () => {
  return (
    <iframe
      id="resumeArea-iframe"
      src="https://drive.google.com/file/d/1YSlR4unSJWeuLmh6FEz5FbHm1OM5LTn_/preview"
      title="Resume"
    ></iframe>
  );
};

export default Resume;
