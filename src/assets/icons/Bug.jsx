import React from "react";

const Bug = ({ color, props }) => {
  return (
    <div>
      <svg
        width={35}
        height={36}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="m18.526 20.57 4.321-5.877h-3.24V8.815l-6.482 8.816h3.24v2.938H8.75A1.464 1.464 0 0 1 7.292 19.1V4.408c0-.812.653-1.47 1.458-1.47h17.5c.805 0 1.458.658 1.458 1.47V19.1c0 .812-.652 1.47-1.458 1.47h-7.724Z"
          fill={color || "#1BC5BC"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m14.298 16.036-1.173 1.595h3.24v5.877l6.482-8.815h-.299l6.92-5.036a.726.726 0 0 1 1.019.165c.09.125.138.276.138.43v14.725c0 1.623-1.306 2.939-2.917 2.939H7.292c-1.611 0-2.917-1.316-2.917-2.939V10.252c0-.405.326-.734.73-.734.152 0 .302.048.426.139l8.767 6.379Z"
          fill={color || "#1BC5BC"}
        />
      </svg>
    </div>
  );
};

export default Bug;
