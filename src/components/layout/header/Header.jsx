import React, { useContext, useState } from "react";
import "./Header.styles.css";
import { UilMoon } from "@iconscout/react-unicons";
import { ColorThemeContext } from "../../../context/ColorTheme.context";
import { UilSun } from "@iconscout/react-unicons";
// import BgImage from "../../../png/Vector.png";
// import BgImageLight from "../../../png/Vector-one.png";
import { UilBars } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";

function Header() {
  const { colorTheme, setColorTheme } = useContext(ColorThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu);
  return (
    <div className="header-container">
      {/* <img className="header-bg-image" src={BgImageLight}></img> */}

      <MobileHeader
        toggle={toggleMenu}
        handleClick={() => setToggleMenu(false)}
      />

      <nav className="header-nav">
        <div className="header-logo-wrapper">
          <span className="header-logo">Darius</span>
        </div>
        <ul className="header-list">
          <li className="header-list-item">
            <a href="#about">about</a>
          </li>
          <li className="header-list-item">
            <a href="#skills">skills</a>
          </li>
          <li className="header-list-item">
            <a href="#contact">contact</a>
          </li>
          <li className="header-list-item">
            <a href="#projects">portofolio</a>
          </li>
          <li>
            <MobileButtons
              colorTheme={colorTheme}
              setColorTheme={setColorTheme}
            />
          </li>
        </ul>
        <div className="mobile-menu-wrapper">
          <div className="header-mobile-menu">
            <MobileButtons
              colorTheme={colorTheme}
              setColorTheme={setColorTheme}
            />
            <UilBars
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

function MobileHeader({ handleClick, toggle }) {
  return (
    <div
      className={`${
        toggle
          ? "mobile-header-container"
          : "mobile-header-container menu-closed"
      }`}
    >
      <div className="mobile-header-logo-wrapper">
        <span className="header-logo">Darius</span>
      </div>
      <span className="mobile-header-close">
        <UilMultiply
          onClick={() => {
            handleClick();
          }}
          style={{ height: "30px", width: "30px" }}
        />
      </span>
      <div className="mobile-header-wrapper">
        <div className="mobile-header-list">
          <li
            className="mobile-header-list-item"
            onClick={() => {
              handleClick();
            }}
          >
            <a href="#about">about</a>
          </li>
          <li
            className="mobile-header-list-item"
            onClick={() => {
              handleClick();
            }}
          >
            <a href="#skills">skills</a>
          </li>
          <li
            className="mobile-header-list-item"
            onClick={() => {
              handleClick();
            }}
          >
            <a href="#contact">contact</a>
          </li>
          <li
            className="mobile-header-list-item"
            onClick={() => {
              handleClick();
            }}
          >
            <a href="#projects">portofolio</a>
          </li>
        </div>
      </div>
    </div>
  );
}

function MobileButtons({ colorTheme, setColorTheme }) {
  return (
    <>
      {colorTheme === "light" ? (
        <span
          className="header-change-theme"
          onClick={() => {
            colorTheme === "light"
              ? setColorTheme("dark")
              : setColorTheme("light");
          }}
        >
          <UilMoon />
        </span>
      ) : (
        <span
          className="header-change-theme"
          onClick={() => {
            colorTheme === "light"
              ? setColorTheme("dark")
              : setColorTheme("light");
          }}
        >
          <UilSun />
        </span>
      )}
    </>
  );
}

export default Header;
