import React from "react";

const ArrowDoubleRight = ({ color, props }) => {
  return (
    <div>
      <svg
        width={26}
        height={26}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12.272 18.29a1 1 0 1 0 1.409 1.42l6.023-5.976a1 1 0 0 0 .036-1.383l-5.476-6.022a1 1 0 0 0-1.48 1.346l4.832 5.313-5.344 5.302Z"
          fill={color || "#D54A39"}
        />
        <path
          opacity={0.3}
          d="M5.272 18.262a1 1 0 1 0 1.409 1.42l6.023-5.976a1 1 0 0 0 .036-1.383L7.264 6.302a1 1 0 1 0-1.48 1.345l4.832 5.313-5.344 5.302Z"
          fill={color || "#D54A39"}
        />
      </svg>
    </div>
  );
};

export default ArrowDoubleRight;
