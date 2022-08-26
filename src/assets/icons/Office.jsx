import React from "react";

const Office = ({ color, props }) => {
  return (
    <div>
      <svg
        width={16}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M8 0A7.04 7.04 0 0 0 .967 7.033a6.968 6.968 0 0 0 .71 3.081L6.99 20.404a1.136 1.136 0 0 0 2.02 0l5.312-10.286.026-.053c.454-.95.685-1.97.685-3.031A7.04 7.04 0 0 0 8 0Zm0 10.714a3.685 3.685 0 0 1-3.681-3.681A3.685 3.685 0 0 1 8 3.352a3.685 3.685 0 0 1 3.681 3.68A3.685 3.685 0 0 1 8 10.715Z"
          fill={color || "#49333C"}
        />
        <path
          d="M10.709 22.636H5.291a.682.682 0 1 0 0 1.364h5.418a.682.682 0 1 0 0-1.364Z"
          fill={color || "#49333C"}
        />
      </svg>
    </div>
  );
};

export default Office;
