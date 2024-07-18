import React from "react";
import "./css/left-part.css";
import logo from "./my-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social from "./data";
import { Socials as SocialDataType } from "../../dataTypes/types";
import { CiCircleChevDown } from "react-icons/ci";

const LeftPart: React.FC = () => {
  return (
    <aside id="left-part">
      <div id="left-part-data">
        <div id="nameAndlogo">
          <section id="logo-section-start">
            <img src={logo} className="App-logo" alt="logo" />
          </section>
          <section id="name-section-start">
            <h1>Nikhil Sharma</h1>
          </section>
          <section id="title-section-start">
            <p>Software Developer</p>
          </section>
          <section id="name-title-section-combined">
            <section id="name-section-start">
              <h1>Nikhil Sharma</h1>
            </section>
            <section id="title-section-start">
              <p>Software Developer</p>
            </section>
          </section>
          <section
            id="showContactButton"
            onClick={() => {
              let elm = document.getElementById("socials") as HTMLElement;
              if (elm.classList.contains("show-contacts")) {
                elm.classList.remove("show-contacts");
              } else {
                elm.classList.add("show-contacts");
              }
            }}
          >
            <p>Show Contacts</p>
            <CiCircleChevDown id="show-contacts-down-arrow" />
          </section>
        </div>
        <div id="socials">
          <div>
            {Social.map((social: SocialDataType) => {
              return <SocialTabs key={social.id} data={social} />;
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

const SocialTabs: React.FC<{ data: SocialDataType }> = ({ data }) => {
  const { id, link, name, icon, value } = data;
  return (
    <section className="social-card-start">
      <section className="social-card-icon-area">{icon}</section>
      <a target="_blank" href={link} className="social-card-text-area">
        <p className="title">{name}</p>
        <p className="value">{value}</p>
      </a>
    </section>
  );
};

export default LeftPart;
