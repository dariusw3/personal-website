import React from "react";

function BlobTwo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#E56B6F"
        d="M19.9,-6.6C34,-5.8,59.2,-2.9,64.9,5.7C70.6,14.3,56.8,28.6,42.7,39C28.6,49.3,14.3,55.8,-0.6,56.4C-15.6,57,-31.1,51.9,-47.1,41.5C-63.1,31.1,-79.5,15.6,-80.1,-0.6C-80.6,-16.7,-65.4,-33.4,-49.4,-34.2C-33.4,-35,-16.7,-19.9,-6.9,-13C2.9,-6.1,5.8,-7.4,19.9,-6.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export default BlobTwo;
