import React from "react";

function BlobOne(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#3772FF"
        d="M42.5,-40.7C58.9,-26,78.9,-13,75.8,-3.1C72.7,6.7,46.5,13.5,30,26.6C13.5,39.6,6.7,59,-8.1,67.1C-22.9,75.1,-45.7,71.9,-58.1,58.8C-70.5,45.7,-72.5,22.9,-67.9,4.6C-63.2,-13.6,-52.1,-27.3,-39.7,-42C-27.3,-56.8,-13.6,-72.7,-0.3,-72.4C13,-72,26,-55.5,42.5,-40.7Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export default BlobOne;
