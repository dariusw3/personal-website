import React, { useContext } from "react";
import "./MouseAnimation.styles.css";
import { ColorThemeContext } from "../../context/ColorTheme.context";

function MouseAnination() {
  const { colorTheme } = useContext(ColorThemeContext);
  return (
    <div>
      <div
        className={`${
          colorTheme === "light" ? "mouse-body" : "mouse-body-dark"
        }`}
      >
        <div
          className={`${
            colorTheme === "light" ? "mouse-cursor" : "mouse-cursor-dark"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default MouseAnination;
