import React from "react";

export const Name = () => {
  return (
    <section id="name">
      <p id="name-into">Hey, I'm</p>
      <h1 id="full-name">Nikhil Sharma</h1>
      <Description></Description>
    </section>
  );
};

const Description = () => {
  return (
    <p id="name-description">
      I'm a Software Engineer based in Ottawa, Canada. I enjoy creating things
      that live on the internet, whether that be websites, api, or anything in
      between. I have been building personal projects while studying at the
      Carleton University and I've manage to gain a decent amount of experience
      and valuable knowledge from different kinds of fields throughout my
      projects/work.
    </p>
  );
};
