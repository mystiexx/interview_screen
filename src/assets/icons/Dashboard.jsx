import React from "react";

const Dashboard = ({ color, props }) => {
  return (
    <div>
      <svg
        width={25}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M11.469 16.765a1.5 1.5 0 0 0 1.876 0l6.672-5.352.229-.183a1.5 1.5 0 0 0 .003-2.343l-6.904-5.531a1.5 1.5 0 0 0-1.876 0L4.561 8.89a1.5 1.5 0 0 0 0 2.34l.226.182 6.682 5.352Z"
          fill={color || "#fff"}
        />
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.335 19.47a1.5 1.5 0 0 1-1.876 0L5.526 14.72a.941.941 0 1 0-1.163 1.48l7.127 5.492a1.5 1.5 0 0 0 1.831 0l7.124-5.487a.948.948 0 1 0-1.172-1.491l-5.938 4.758Z"
          fill={color || "#fff"}
        />
      </svg>
    </div>
  );
};

export default Dashboard;
