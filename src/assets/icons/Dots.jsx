import React from "react";

const Dots = ({ color, props }) => {
  return (
    <div>
      <svg
        width={17}
        height={6}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x={11} width={6} height={6} rx={2} fill={color || "#B5B5C3"} />
        <rect width={6} height={6} rx={2} fill="#B5B5C3" fillOpacity={0.7} />
      </svg>
    </div>
  );
};

export default Dots;
