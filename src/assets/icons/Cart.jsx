import React from "react";

const Cart = ({ color, props }) => {
  return (
    <div>
      <svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity={0.3}
          d="M15 5.703 9.71 12.05a1.25 1.25 0 1 1-1.92-1.6l6.25-7.5c.5-.6 1.42-.6 1.92 0l6.25 7.5a1.25 1.25 0 1 1-1.92 1.6L15 5.703Z"
          fill={color || "#3699FF"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.887 11.25a1 1 0 0 0-.92 1.392l4.256 9.98a3 3 0 0 0 2.76 1.822h6.035a3 3 0 0 0 2.76-1.823l4.254-9.979a1 1 0 0 0-.92-1.392H5.887Zm11.613 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          fill={color || "#3699FF"}
        />
      </svg>
    </div>
  );
};

export default Cart;
