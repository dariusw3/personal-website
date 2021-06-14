import React from "react";
import HeroText from "./HeroText";
import "./Hero.styles.css";
import HeroGraphic from "./HeroGraphic";
import MouseAnimation from "../../mouse/MouseAnination";
import Links from "../../links/Links";
import { ReactComponent as Vector } from "../../../png/Vector.svg";

function Hero() {
  return (
    <div className="hero-container">
      <HeroText />
      <HeroGraphic />
      <Links />
      <div className="mouse-container">
        <MouseAnimation />
      </div>
    </div>
  );
}

export default Hero;
