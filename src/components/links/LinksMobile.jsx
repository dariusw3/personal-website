import React from "react";
import "./LinksMobile.styles.css";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilBehance } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";

function LinksMobile() {
  return (
    <div className="links-container-mobile">
      <div className="links-wrapper-mobile">
        <a
          className="links-link-mobile"
          href="https://www.linkedin.com/in/darius-giurgiu-6a235320b/"
          alt="link to LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <UilLinkedinAlt />
        </a>
        <a
          className="links-link-mobile"
          href="https://www.behance.net/dariusxcele6e1"
          alt="link to Behnace"
          target="_blank"
          rel="noreferrer"
        >
          <UilBehance />
        </a>
        <a
          className="links-link-mobile"
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

export default LinksMobile;
