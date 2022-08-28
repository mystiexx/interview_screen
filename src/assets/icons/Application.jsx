import React from 'react'

const Application = ({ color, props }) => {
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
      d="M2 19.5A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 7H10L7.44 4.44A1.5 1.5 0 0 0 6.378 4H3.5A1.5 1.5 0 0 0 2 5.5v14Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="m4 19 6-8 6 8H4Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11 19 4-5 4 5h-8Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
  </svg>
    </div>
  )
}

export default Application
