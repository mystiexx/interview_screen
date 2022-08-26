import React from "react";

const Collections = ({ color, props }) => {
  return (
    <div>
      <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 3a4 4 0 1 0 0 8h10a4 4 0 0 0 0-8H7Zm2 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          fill={color || "#EB8376"}
          fillOpacity={0.7}
        />
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 13a4 4 0 0 0 0 8h10a4 4 0 0 0 0-8H7Zm12 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          fill={color || "#EB8376"}
          fillOpacity={0.7}
        />
      </svg>
    </div>
  );
};

export default Collections;
