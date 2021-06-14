import React, { useState, useContext } from "react";
import "./Skills.styles.css";

import { UilReact } from "@iconscout/react-unicons";
import { UilHtml5Alt } from "@iconscout/react-unicons";
import { UilJavaScript } from "@iconscout/react-unicons";
import { UilHtml3 } from "@iconscout/react-unicons";
import { UilAdobe } from "@iconscout/react-unicons";
import { ReactComponent as FigmaLogo } from "../../../svg/figmal.svg";
import { ColorThemeContext } from "../../../context/ColorTheme.context";

function Skills() {
  const style = { height: "37px", width: "37px", color: "darkgrey" };
  const styletwo = { height: "37px", width: "37px", color: "darkgrey" };

  return (
    <>
      <div id="skills" className="skills-container">
        <div className="skills-title-wrapper">
          <h2 className="skills-title">Skills</h2>
          <h6 className="skills-subtitle">Click to expand</h6>
        </div>
        <Skill index="one" number="1" items={["React", "Redux"]}>
          <UilReact style={style} />
        </Skill>
        <Skill
          index="two"
          number="2"
          items={["Javascript", "NodeJs", "Firebase"]}
        >
          <UilJavaScript style={style} />
        </Skill>
        <Skill index="three" number="3" items={["HTML"]}>
          <UilHtml5Alt style={style} />
        </Skill>
        <Skill
          index="four"
          number="4"
          items={["CSS", "SCSS", "Tailwind", "Bootstrap"]}
        >
          <UilHtml3 style={style} />
        </Skill>
        <Skill
          index="five"
          number="5"
          items={["Photoshop", "Illustrator", "AE", "Premiere"]}
        >
          <UilAdobe style={styletwo} />
        </Skill>
        <Skill index="six" number="6" items={["Figma", "UI/UX"]}>
          <FigmaLogo />
        </Skill>
      </div>
    </>
  );
}

function Skill(props) {
  const [toggle, setToggle] = useState(false);
  const { colorTheme } = useContext(ColorThemeContext);

  return (
    <>
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className={`skills-list-item ${props.index} `}
      >
        {props.children}
      </div>
      <div className={`skills-list-dropdown-${props.number}`}>
        <div className={`skills-section ${toggle ? `active` : ""}`}>
          {props.items.map((item, index) => (
            <div
              key={index}
              className={`${
                colorTheme === "light"
                  ? "skills-section-item"
                  : "skills-section-item-dark"
              } `}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
