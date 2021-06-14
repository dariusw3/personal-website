import React, { useRef } from "react";
import "./Contact.styles.css";
import { useIntersection } from "react-use";
import gsap from "gsap";
import { UilLinkedinAlt } from "@iconscout/react-unicons";

import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";

function Contact() {
  const sectionContactRef = useRef(null);

  const intersecion = useIntersection(sectionContactRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  const fadeIn = (element) => {
    gsap.to(element, 0.5, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 0.7, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  intersecion && intersecion.isIntersecting < 0.9
    ? fadeOut(".fadeInContact")
    : fadeIn(".fadeInContact");

  return (
    <div ref={sectionContactRef} id="contact" className="contact-container">
      <div className="skills-title-wrapper">
        <h2 className="skills-title">Contact</h2>
      </div>
      <div className="contact-wrapper">
        <div className="contact-text-wrapper">
          <h4 className="contact-text fadeInContact">
            I'm available for freelance work. Drop me a line if you fancy a
            chat.
          </h4>
        </div>
        <a
          className="contact-email fadeInContact"
          href="mailto:dariusgiurgiu15@gmail.com"
        >
          dariusgiurgiu15@gmail.com
        </a>
        <div className="contact-links-wrapper fadeInContact">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/darius-giurgiu-6a235320b/"
            alt="link to LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <UilLinkedinAlt
              style={{ height: "33px", width: "33px", color: "#e56b6f" }}
            />
          </a>
          <a
            href="https://www.instagram.com/dariusgiurgiu/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <UilInstagram
              style={{ height: "33px", width: "33px", color: "#e56b6f" }}
            />
          </a>
          <div className="contact-link">
            <UilFacebookF
              style={{ height: "33px", width: "33px", color: "#e56b6f" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
