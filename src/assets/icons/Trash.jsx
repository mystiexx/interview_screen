import React from "react";

const Trash = ({ color, props }) => {
  return (
    <div>
      <svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M4.5 6v9A1.5 1.5 0 0 0 6 16.5h6a1.5 1.5 0 0 0 1.5-1.5V6h-9Z"
          fill={color || "#3699FF"}
        />
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 3.375V3.25a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v.125H4.25a.5.5 0 0 0-.5.5V4a.5.5 0 0 0 .5.5h9.5a.5.5 0 0 0 .5-.5v-.125a.5.5 0 0 0-.5-.5H10.5Z"
          fill={color || "#3699FF"}
        />
      </svg>
    </div>
  );
};

export default Trash;
