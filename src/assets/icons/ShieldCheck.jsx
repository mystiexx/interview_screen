import React from "react";

const ShieldCheck = (props) => {
  return (
    <div>
      <svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.667 3.667 10.63 2.36a2 2 0 0 1 .738 0l6.964 1.306v6.736a11 11 0 0 1-5.17 9.328l-1.633 1.021a1 1 0 0 1-1.06 0l-1.633-1.02a11 11 0 0 1-5.17-9.329V3.667Z"
          fill="#D54A39"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.244 13.52a.867.867 0 0 1-.615-.263L7.872 11.5a.85.85 0 0 1 0-1.23c.351-.35.922-.35 1.23 0l1.142 1.143 2.899-2.9a.85.85 0 0 1 1.23 0 .85.85 0 0 1 0 1.23l-3.514 3.514a.867.867 0 0 1-.615.264Z"
          fill="#D54A39"
        />
      </svg>
    </div>
  );
};

export default ShieldCheck;
