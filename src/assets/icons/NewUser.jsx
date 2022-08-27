import React from "react";

const NewUser = ({ color, props }) => {
  return (
    <div>
      <svg
        width={35}
        height={35}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.125 16.042a5.833 5.833 0 1 1 0-11.667 5.833 5.833 0 0 1 0 11.667Zm14.125 0a1 1 0 0 1-1-1v-3.375h-3.375a1 1 0 0 1-1-1V9.75a1 1 0 0 1 1-1h3.375V5.375a1 1 0 0 1 1-1h.917a1 1 0 0 1 1 1V8.75h3.375a1 1 0 0 1 1 1v.917a1 1 0 0 1-1 1h-3.375v3.375a1 1 0 0 1-1 1h-.917Z"
          fill={color || "#8A50FC"}
        />
        <path
          d="M.001 29.457c.565-6.96 6.214-10.499 13.1-10.499 6.982 0 12.719 3.345 13.146 10.5.017.285 0 1.167-1.096 1.167H1.061c-.366 0-1.09-.789-1.06-1.168Z"
          fill={color || "#8A50FC"}
        />
      </svg>
    </div>
  );
};

export default NewUser;
