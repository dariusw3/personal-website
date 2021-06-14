import React, { useContext } from "react";
import "./HeroText.styles.css";
import { ReactComponent as MobileImageLight } from "../../../svg/MobileImageLight.svg";
import { ReactComponent as MobileImageDark } from "../../../svg/MobileImageDark.svg";

import { ColorThemeContext } from "../../../context/ColorTheme.context";
import LinksMobile from "../../links/LinksMobile";

function HeroText() {
  const { colorTheme } = useContext(ColorThemeContext);

  return (
    <div className="hero-text-container">
      <div className="hero-image-container">
        {colorTheme === "light" ? <MobileImageLight /> : <MobileImageDark />}
      </div>
      <div className="hero-links-mobile">
        <LinksMobile />
      </div>
      <h6 className="hero-text-lead">HI THERE 👋, I'M</h6>
      <h1 className="hero-text-header">Darius</h1>
      {/* <img className="hero-profile-picture" src={profilePicture}></img> */}
      <h6 className="hero-text-lead">DESIGNER + DEVELOPER</h6>
      <p className="hero-text-paragraph">
        I’m a design minded front end developer based In Sibiu, Romania{" "}
      </p>
    </div>
  );
}

export default HeroText;
