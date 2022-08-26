import React from "react";

const Write = ({ color, props }) => {
  return (
    <div>
      <svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M14.138 2.986a1.5 1.5 0 0 1 .021 2.1l-5.416 5.641a1.5 1.5 0 0 1-1.05.46l-2.276.049.048-2.291a1.5 1.5 0 0 1 .442-1.032l5.537-5.506a1.5 1.5 0 0 1 2.118.003l.576.576Z"
          fill={color || "#3699FF"}
        />
        <path
          opacity={0.3}
          d="M8.6 1.333a.667.667 0 1 1 0 1.334H4c-.736 0-1.333.597-1.333 1.333v8c0 .736.597 1.333 1.333 1.333h8c.736 0 1.333-.597 1.333-1.333V8.667a.667.667 0 0 1 1.334 0V12A2.667 2.667 0 0 1 12 14.667H4A2.667 2.667 0 0 1 1.333 12V4A2.667 2.667 0 0 1 4 1.333h4.6Z"
          fill={color || "#3699FF"}
        />
      </svg>
    </div>
  );
};

export default Write;
