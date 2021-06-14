import React, { useState, useRef } from "react";
import "./Projects.styles.css";
import { useIntersection } from "react-use";
import gsap from "gsap";

function Projects() {
  const [menu, setMenu] = useState("des");

  const sectionProjectsRef = useRef(null);

  const intersecion = useIntersection(sectionProjectsRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const fadeInProjects = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0,
      },
    });
  };

  const fadeOutProjects = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -70,
      ease: "power4.out",
      stagger: {
        amount: 0,
      },
    });
  };

  intersecion && intersecion.isIntersecting < 0.2
    ? fadeOutProjects(".fadeInProject")
    : fadeInProjects(".fadeInProject");

  return (
    <div>
      <div id="projects" className="skills-title-wrapper">
        <h2 className="skills-title">Projects</h2>
        {/* <h6 className="skills-subtitle">asd</h6> */}
      </div>
      <ProjectMenu
        style={{ Zindex: "99" }}
        menu={menu}
        handleClick={(menuItem) => {
          setMenu(menuItem);
        }}
      />
      <div ref={sectionProjectsRef} className="projects-container">
        {menu === "web" ? (
          <>
            <ProjectElement
              to="https://realest-live.herokuapp.com/"
              link="https://i.imgur.com/HeQGEVV.png"
              linkActive="http://i.prntscr.com/Y5c7p77CTJCiPPrEx826zw.png"
              position="1"
              description="Real Estate Platform - portofolio Project"
              title="Realest"
            />
            <div className="projects-coming-soon-container">
              <h2 className="projects-coming-soon">More coming soon...</h2>
            </div>
          </>
        ) : (
          <>
            {" "}
            <ProjectElement
              to="https://www.behance.net/gallery/112075115/Cone"
              link="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b18550112075115.603d642303250.jpg"
              linkActive="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bd9b4b112075115.6040cbdfebc99.gif"
              position="1"
              description="Minimal design agency"
              title="Cone"
            />
            <ProjectElement
              to="https://www.behance.net/gallery/97532587/BethanyTheological-High-SchoolSibiu"
              position="2"
              link="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6cdd0397532587.5ec70b3a9e2b7.png"
              linkActive="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b748b997532587.5ec70b3a66415.gif"
              description="BRAND new image for a local highschool"
              title="LTB"
            />{" "}
            <ProjectElement
              position="1"
              link="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2ae25486886147.5da72a4882de0.png"
              linkActive="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c96c586886147.604a06cc4178f.jpg"
              description="Beauty Saloon"
              title="Kallisto"
            />{" "}
            <ProjectElement
              position="2"
              link="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/53e78496360123.5eac6a5cdfadd.gif"
              linkActive="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1eef6396360123.5eac6a5ce01df.gif"
              description="An awesome drummer from Sibiu"
              title="Naughty Drummer"
            />{" "}
            <ProjectElement
              position="1"
              link="https://i.imgur.com/TR22oPl.png"
              linkActive="https://i.imgur.com/ML9MIun.jpg"
              description="Corporate Fishing Team of CBS"
              title="CBS Carp Team"
            />{" "}
            <ProjectElement
              position="2"
              link="https://i.imgur.com/WSGB77O.png"
              linkActive="https://i.imgur.com/gOXQwUB.png"
              description="Fireplace Company"
              title="Seminee Mark"
            />{" "}
          </>
        )}
      </div>
    </div>
  );
}

function ProjectElement(props) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => {
          setActive(true);
        }}
        onMouseLeave={() => setActive(false)}
        className={`project-image-container project-container-position-${props.position} fadeInProject `}
      >
        <a href={props.to} target="_blank" rel="noreferrer">
          <img
            className="project-image"
            src={`${active ? props.linkActive : props.link}`}
            alt="project-image"
          />
          <p className="project-description">{`${
            active ? props.description : props.title
          }`}</p>
        </a>
      </div>
    </>
  );
}

function ProjectMenu({ handleClick, menu }) {
  return (
    <div>
      <div className="project-menu-container">
        <h6
          className={`${
            menu === "web" ? "project-menu-active" : "project-menu-disabled"
          }`}
          onClick={() => {
            handleClick("web");
          }}
        >
          Web Development
        </h6>
        <h6>&nbsp;/&nbsp;</h6>
        <h6
          className={`${
            menu === "des" ? "project-menu-active" : "project-menu-disabled"
          }`}
          onClick={() => {
            handleClick("des");
          }}
        >
          Branding
        </h6>
      </div>
    </div>
  );
}

export default Projects;

//https://mir-s3-cdn-cf.behance.net/project_modules/1400/2ae25486886147.5da72a4882de0.png
//https://i.imgur.com/TR22oPl.png
//https://i.imgur.com/WSGB77O.png
