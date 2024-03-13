import React from "react";

/**
 * importing information regarding the socials
 *
 */
import socialsData from "./socialsList";

export const Footer = () => {
  return (
    <div id="footer-area-start">
      <section id="footer">
        <h3>
          Feel free to reach out on socials if you're interested in working
          together, being friends or have some suggestion.
        </h3>
        <section id="social-links">
          <Socials></Socials>
        </section>
      </section>
    </div>
  );
};

const Socials = () => {
  return (
    <>
      <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="-nikhilsharma"
        data-version="v1"
      >
        <a
          class="badge-base__link LI-simple-link"
          href="https://ca.linkedin.com/in/-nikhilsharma?trk=profile-badge"
        >
          Nikhil Sharma
        </a>
      </div>

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
