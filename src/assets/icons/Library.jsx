import React from "react";

const Library = (props) => {
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
          d="M4.333 2.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-.5Zm4.167 0a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-.5Z"
          fill="#8950FC"
        />
        <rect
          opacity={0.3}
          x={11.231}
          y={3.27}
          width={2.5}
          height={15}
          rx={1}
          transform="rotate(-19 11.231 3.27)"
          fill="#8950FC"
        />
      </svg>
    </div>
  );
};

export default Library;
