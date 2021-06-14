import React from "react";
import "./Links.styles.css";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilBehance } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";

function Links() {
  return (
    <div className="links-container">
      <div className="links-wrapper">
        <a
          className="links-link"
          href="https://www.linkedin.com/in/darius-giurgiu-6a235320b/"
          alt="link to LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <UilLinkedinAlt />
        </a>
        <a
          className="links-link"
          href="https://www.behance.net/dariusxcele6e1"
          alt="link to Behnace"
          target="_blank"
          rel="noreferrer"
        >
          <UilBehance />
        </a>
        <a
          className="links-link"
          href="https://github.com/dariusw3"
          alt="link to GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <UilGithubAlt />
        </a>
      </div>
    </div>
  );
}

export default Links;
