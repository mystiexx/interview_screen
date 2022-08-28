import React from 'react'

const Settings = ({ color, props }) => {
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 4A1.5 1.5 0 0 0 4 5.5v1A1.5 1.5 0 0 0 5.5 8h4A1.5 1.5 0 0 0 11 6.5v-1A1.5 1.5 0 0 0 9.5 4h-4Zm9 12a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-4Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 4A1.5 1.5 0 0 0 13 5.5v7a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 18.5 4h-4Zm-9 6A1.5 1.5 0 0 0 4 11.5v7A1.5 1.5 0 0 0 5.5 20h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 9.5 10h-4Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
  </svg>
    </div>
  )
}

export default Settings
