import React from "react";

const Search = ({ color, props }) => {
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
          opacity={0.3}
          d="M14.293 16.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1-1.414 1.414l-4-4Z"
          fill={color || "#D54A39"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 11a7 7 0 1 0 14 0 7 7 0 0 0-14 0Zm12 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
          fill={color || "#D54A39"}
        />
      </svg>
    </div>
  );
};

export default Search;
