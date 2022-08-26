import React from "react";

const CheveronRight = ({ props }) => {
  return (
    <div>
      <svg
        width={4}
        height={7}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M.147.853A.5.5 0 1 1 .854.146l3 3a.5.5 0 0 1 .015.692l-2.75 3a.5.5 0 1 1-.737-.676l2.426-2.647L.147.853Z"
          fill="#494B69"
        />
      </svg>
    </div>
  );
};

export default CheveronRight;
