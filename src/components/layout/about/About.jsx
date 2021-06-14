import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import "./About.styles.css";

function About() {
  const sectionRef = useRef(null);

  const intersecion = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.2,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
      stagger: {
        amount: 0.2,
      },
    });
  };

  intersecion && intersecion.isIntersecting < 0.5
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <div id="about" className="about-container">
      <div className="about-wrapper">
        <div className="skills-title-wrapper">
          <h2 className="skills-title">About me</h2>
          <h4 className="about-main">
            I am an{" "}
            <span className="about-highlight fadeIn">
              experienced freelance designer
            </span>{" "}
            and{" "}
            <span className="about-highlight fadeIn">
              junior front-end developer
            </span>
            , occasional debater, avid reader, and a fine exemplar of a{" "}
            <span className="about-highlight fadeIn">modern-day Sisyphus </span>
            .
          </h4>
          <h6 className="about-secondary fadeIn fadeIn">
            I started creating logos and other digital products while living in
            the UK, where I got my BA in Business and Marketing. This path has
            led me to web development, which for the past year has kept my mind
            busy and fingers sore. I am currently looking for an awesome team to
            help further my knowledge and sharpen my skills
          </h6>
        </div>
        <div ref={sectionRef}></div>
      </div>
    </div>
  );
}

export default About;
