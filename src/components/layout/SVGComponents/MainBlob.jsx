import React, { useContext } from "react";
import { ColorThemeContext } from "../../../context/ColorTheme.context";

function MainBlob(props: React.SVGProps<SVGSVGElement>) {
  const { colorTheme } = useContext(ColorThemeContext);
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill={`${colorTheme === "light" ? "#F2F4F8" : "#172a46"}`}
        d="M50.8,-59.3C58.5,-43,52.5,-21.5,50.3,-2.2C48.2,17.2,49.8,34.3,42.1,50.7C34.3,67.1,17.2,82.8,0.3,82.4C-16.5,82.1,-32.9,65.7,-47.9,49.3C-62.9,32.9,-76.5,16.5,-72.1,4.4C-67.7,-7.7,-45.3,-15.3,-30.3,-31.7C-15.3,-48,-7.7,-72.9,6.9,-79.8C21.5,-86.7,43,-75.6,50.8,-59.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export default MainBlob;
