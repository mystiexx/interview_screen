import React from "react";

const FilePlus = ({ props }) => {
  return (
    <div>
      {" "}
      <svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity={0.3}
          d="M7.321 2.5h9.987a1.5 1.5 0 0 1 .968.355l6.193 5.237A1.5 1.5 0 0 1 25 9.238v15.866c0 2.238-.026 2.396-2.321 2.396H7.32C5.026 27.5 5 27.342 5 25.104V4.896C5 2.658 5.026 2.5 7.321 2.5Z"
          fill="#0ABB87"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.75 17.5h-2.5a1.25 1.25 0 1 1 0-2.5h2.5v-2.5a1.25 1.25 0 1 1 2.5 0V15h2.5a1.25 1.25 0 0 1 0 2.5h-2.5V20a1.25 1.25 0 0 1-2.5 0v-2.5Z"
          fill="#0ABB87"
        />
      </svg>
    </div>
  );
};

export default FilePlus;
