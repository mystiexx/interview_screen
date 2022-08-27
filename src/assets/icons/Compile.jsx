import React from "react";

const Compile = ({ color, props }) => {
  return (
    <div>
      <svg
        width={34}
        height={34}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.186 15.575a1.5 1.5 0 0 0 0 2.12l3.889 3.89a1.5 1.5 0 0 0 2.121 0l3.89-3.89a1.5 1.5 0 0 0 0-2.12l-3.89-3.89a1.5 1.5 0 0 0-2.121 0l-3.89 3.89Zm17 0a1.5 1.5 0 0 0 0 2.12l3.889 3.89a1.5 1.5 0 0 0 2.121 0l3.89-3.89a1.5 1.5 0 0 0 0-2.12l-3.89-3.89a1.5 1.5 0 0 0-2.121 0l-3.89 3.89Z"
          fill={color || "#F65464"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.686 7.074a1.5 1.5 0 0 0 0 2.122l3.889 3.889a1.5 1.5 0 0 0 2.121 0l3.89-3.89a1.5 1.5 0 0 0 0-2.12l-3.89-3.89a1.5 1.5 0 0 0-2.121 0l-3.89 3.89Zm0 17a1.5 1.5 0 0 0 0 2.122l3.889 3.889a1.5 1.5 0 0 0 2.121 0l3.89-3.89a1.5 1.5 0 0 0 0-2.12l-3.89-3.89a1.5 1.5 0 0 0-2.121 0l-3.89 3.89Z"
          fill={color || "#F65464"}
        />
      </svg>
    </div>
  );
};

export default Compile;
