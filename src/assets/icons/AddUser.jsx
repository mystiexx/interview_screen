import React from "react";

const AddUser = ({ color, props }) => {
  return (
    <div>
      <svg
        width={14}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.25 6.417a2.333 2.333 0 1 1 0-4.667 2.333 2.333 0 0 1 0 4.667Zm5.833 0a.583.583 0 0 1-.583-.584V4.667H9.333a.583.583 0 1 1 0-1.167H10.5V2.333a.583.583 0 1 1 1.167 0V3.5h1.166a.583.583 0 1 1 0 1.167h-1.166v1.166a.583.583 0 0 1-.584.584Z"
          fill={color || "#fff"}
        />
        <path
          d="M0 11.783c.226-2.784 2.486-4.2 5.24-4.2 2.793 0 5.088 1.338 5.259 4.2.007.114 0 .467-.438.467H.424c-.146 0-.436-.316-.424-.467Z"
          fill={color || "#fff"}
        />
      </svg>
    </div>
  );
};

export default AddUser;
