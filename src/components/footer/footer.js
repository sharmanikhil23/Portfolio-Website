import React from "react";

/**
 * importing information regarding the socials
 *
 */
import socialsData from "./socialsList";

/**
 * importing Css
 */
import "./css/footer.css";

export const Footer = () => {
  return (
    <section id="footer">
      <h3>
        Feel free to reach out on socials if you're interested in working
        together, being friends or have some suggestion.
      </h3>
      <section id="social-links">
        <Socials></Socials>
      </section>
    </section>
  );
};

const Socials = () => {
  return (
    <>
      {socialsData.map((data) => {
        let { id, link, name, icon } = data;

        return (
          <section key={id}>
            <a target="_blank" href={link}>
              <span>{icon}</span>
              {name}
            </a>
          </section>
        );
      })}
    </>
  );
};
