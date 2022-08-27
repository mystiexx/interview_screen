import React from "react";

const Blocks = ({ color, props }) => {
  return (
    <div>
      <svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x={5} y={5} width={8.75} height={8.75} rx={1.5} fill="#1BC5BD" />
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.25 6.5a1.5 1.5 0 0 1 1.5-1.5h5.75A1.5 1.5 0 0 1 25 6.5v5.75a1.5 1.5 0 0 1-1.5 1.5h-5.75a1.5 1.5 0 0 1-1.5-1.5V6.5ZM5 17.75a1.5 1.5 0 0 1 1.5-1.5h5.75a1.5 1.5 0 0 1 1.5 1.5v5.75a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 23.5v-5.75Zm12.75-1.5a1.5 1.5 0 0 0-1.5 1.5v5.75a1.5 1.5 0 0 0 1.5 1.5h5.75a1.5 1.5 0 0 0 1.5-1.5v-5.75a1.5 1.5 0 0 0-1.5-1.5h-5.75Z"
          fill={color || "#1BC5BD"}
        />
      </svg>
    </div>
  );
};

export default Blocks;
