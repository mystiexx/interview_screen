import React from "react";

const Notification = ({ color, props }) => {
  return (
    <div>
      <svg
        width={18}
        height={23}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M0 9a9 9 0 1 1 18 0v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V9Z"
          fill={color || "#D54A39"}
        />
        <circle cx={9} cy={21} r={2} fill="#F2C9C4" />
      </svg>
    </div>
  );
};

export default Notification;
