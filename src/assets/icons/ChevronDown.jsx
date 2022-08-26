import React from "react";

const ChevronDown = (props) => {
  return (
    <div>
      <svg
        width={10}
        height={6}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M8.862.862a.667.667 0 0 1 .943.943l-4 4a.667.667 0 0 1-.922.02l-4-3.667a.667.667 0 0 1 .901-.983l3.53 3.235L8.862.862Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default ChevronDown;
