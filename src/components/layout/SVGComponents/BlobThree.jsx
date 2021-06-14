import React from "react";

function BlobThree(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#B8D8BA"
        d="M38.7,-46.8C45.5,-31.9,43.1,-15.9,40.2,-2.9C37.3,10.2,33.9,20.3,27.1,21.8C20.3,23.2,10.2,15.9,-5.6,21.6C-21.4,27.2,-42.9,45.7,-58,44.3C-73.1,42.9,-81.8,21.4,-77.2,4.6C-72.6,-12.2,-54.6,-24.4,-39.5,-39.3C-24.4,-54.2,-12.2,-71.9,1.9,-73.7C15.9,-75.6,31.9,-61.7,38.7,-46.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export default BlobThree;
