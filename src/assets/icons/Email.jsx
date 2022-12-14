import React from "react";

const Email = ({ color, props }) => {
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
          d="m13 10.81 8.494-5.297a1.797 1.797 0 0 0-.282-.024H4.789c-.096 0-.19.01-.282.024L13 10.81Z"
          fill={color || "#49333C"}
        />
        <path
          d="M13.535 12.857c-.012.008-.024.012-.036.02l-.038.019a1.004 1.004 0 0 1-.205.08l-.022.005c-.077.018-.155.029-.233.029H13c-.078 0-.156-.011-.233-.03l-.022-.004a1.029 1.029 0 0 1-.243-.1c-.012-.007-.025-.011-.036-.019L3.028 6.972c-.017.1-.028.201-.028.306v9.444c0 .988.8 1.789 1.789 1.789H21.21c.988 0 1.789-.801 1.789-1.789V7.278c0-.105-.01-.206-.028-.306l-9.437 5.885Z"
          fill={color || "#AD6460"}
        />
      </svg>
    </div>
  );
};

export default Email;
