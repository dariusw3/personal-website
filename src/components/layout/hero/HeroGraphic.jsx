import React, { useState, useContext } from "react";
import "./HeroGraphic.styles.css";
import MainBlob from "../../layout/SVGComponents/MainBlob";
import BlobOne from "../../layout/SVGComponents/BlobOne";
import BlobTwo from "../../layout/SVGComponents/BlobTwo";
import BlobThree from "../../layout/SVGComponents/BlobThree";

import { ColorThemeContext } from "../../../context/ColorTheme.context";

import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 3, y - window.innerHeight / 3];
const trans1 = (x, y) => `translate3d(${x / 18}px,${y / 18}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 20 - 100}px,${y / 20 - 400}px,0)`;

function HeroGraphic() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 90, tension: 1950, friction: 1040 },
  }));

  const [profile, setProfile] = useState("developer");

  const { colorTheme } = useContext(ColorThemeContext);

  return (
    <>
      {profile === "designer" ? (
        <div
          onMouseLeave={() => {
            setProfile("developer");
          }}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
          className="hero-graphic-container"
        >
          <animated.div
            style={{
              transform: props.xy.interpolate(trans1),
            }}
            className="hero-graphic-main-blob"
          >
            <MainBlob height={750} width={550} />
          </animated.div>
          <animated.div
            style={{ transform: props.xy.interpolate(trans2) }}
            className="hero-one-blob"
          >
            <BlobOne height={450} width={250} />
          </animated.div>
          <animated.div
            style={{ transform: props.xy.interpolate(trans3) }}
            className="hero-two-blob"
          >
            <BlobTwo height={250} width={150} />
          </animated.div>
          <animated.div
            style={{ transform: props.xy.interpolate(trans4) }}
            className="hero-three-blob"
          >
            <BlobThree height={250} width={190} />
          </animated.div>
          <animated.div style={{ transform: props.xy.interpolate(trans5) }}>
            <div className="hero-graphic-logo">D</div>
            <div
              className={`${
                colorTheme === "light"
                  ? "hero-graphic-dot"
                  : "hero-graphic-dot-dark"
              }`}
            ></div>
          </animated.div>
          <div className="hero-developer">.Designer</div>
        </div>
      ) : (
        <div
          onMouseEnter={() => {
            setProfile("designer");
          }}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
          className="hero-graphic-container"
        >
          <animated.div
            style={{ transform: props.xy.interpolate(trans1) }}
            className="hero-graphic-main-blob"
          >
            <MainBlob height={750} width={550} />
          </animated.div>
          <animated.div
            style={{ transform: props.xy.interpolate(trans2) }}
            className="hero-one-blob"
          >
            <p className="hero-slash">&#47;</p>
          </animated.div>
          <animated.div
            style={{ transform: props.xy.interpolate(trans3) }}
            className="hero-two-blob"
          >
            <p className="hero-greater">&#60;</p>
          </animated.div>
          <animated.div
            style={{ transform: props.xy.interpolate(trans4) }}
            className="hero-three-blob"
          >
            <p className="hero-brackets"> &#125; </p>
          </animated.div>
          <animated.div style={{ transform: props.xy.interpolate(trans5) }}>
            <div className="hero-graphic-logo">D</div>
            <div
              className={`${
                colorTheme === "light"
                  ? "hero-graphic-dot"
                  : "hero-graphic-dot-dark"
              }`}
            ></div>
          </animated.div>
          <animated.div
            style={{ transform: props.xy.interpolate(trans4) }}
            className=""
          >
            <p className="hero-brackets-open"> &#125; </p>
          </animated.div>
          <div className="hero-developer">.Developer</div>
        </div>
      )}
    </>
  );
}

export default HeroGraphic;
