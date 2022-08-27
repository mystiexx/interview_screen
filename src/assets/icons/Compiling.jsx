import React from "react";

const Compiling = ({ color, props }) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.56 10.682a1.5 1.5 0 0 0 0 2.121l2.122 2.122a1.5 1.5 0 0 0 2.121 0l2.122-2.122a1.5 1.5 0 0 0 0-2.121L6.803 8.561a1.5 1.5 0 0 0-2.121 0l-2.121 2.121Zm12 0a1.5 1.5 0 0 0 0 2.121l2.122 2.122a1.5 1.5 0 0 0 2.121 0l2.122-2.122a1.5 1.5 0 0 0 0-2.121l-2.122-2.121a1.5 1.5 0 0 0-2.121 0l-2.121 2.121Z"
          fill={color || "#D54A39"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.56 4.682a1.5 1.5 0 0 0 0 2.121l2.122 2.122a1.5 1.5 0 0 0 2.121 0l2.122-2.122a1.5 1.5 0 0 0 0-2.121l-2.122-2.121a1.5 1.5 0 0 0-2.121 0L8.561 4.682Zm0 12a1.5 1.5 0 0 0 0 2.121l2.122 2.122a1.5 1.5 0 0 0 2.121 0l2.122-2.122a1.5 1.5 0 0 0 0-2.121l-2.122-2.121a1.5 1.5 0 0 0-2.121 0l-2.121 2.121Z"
          fill={color || "#D54A39"}
        />
      </svg>
    </div>
  );
};

export default Compiling;
