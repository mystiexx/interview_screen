import React from "react";

const Mic = (props) => {
  return (
    <div>
      <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 13.333a4.167 4.167 0 0 1-4.167-4.166H4.167a5.835 5.835 0 0 0 5.002 5.774.847.847 0 0 0-.002.059v2.5a.833.833 0 0 0 1.666 0V15c0-.02 0-.04-.002-.059a5.835 5.835 0 0 0 5.002-5.774h-1.666A4.167 4.167 0 0 1 10 13.333Z"
          fill="#FFA800"
        />
        <rect
          opacity={0.3}
          x={7.5}
          y={1.667}
          width={5}
          height={10}
          rx={2.5}
          fill="#FFA800"
        />
      </svg>
    </div>
  );
};

export default Mic;
