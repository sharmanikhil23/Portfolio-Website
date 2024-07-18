import React, { useState, useEffect } from "react";
import "../css/contactMe.css";
import Loader from "../../loader";
import AboutPage from "../aboutPage/about";
import ContactMeForm from "./contactMeForm";

const ContactMe = () => {
  return (
    <div id="contactMe-start">
      <Map></Map>
      <ContactMeForm></ContactMeForm>
    </div>
  );
};

const Map = () => {
  const [mapLoading, setMapLoading] = useState<boolean>(true);

  useEffect(() => {
    const iFrame = document.getElementById(
      "contactMe-map-iframe"
    ) as HTMLIFrameElement;

    const handleLoad = () => {
      setMapLoading(false); // Set loading state to false when iframe content is loaded
      iFrame.style.opacity = ".8";
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
    <div id="contactMe-map-iframe-area">
      {mapLoading && <Loader />}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165273.9725862778!2d-75.78378647700141!3d45.421106463676085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b9b3a7dc8f%3A0x420b04a5a8851eb9!2sOttawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
        loading="lazy"
        id="contactMe-map-iframe"
      ></iframe>
    </div>
  );
};

export default ContactMe;
