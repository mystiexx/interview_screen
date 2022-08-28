import React from 'react'

const Report = ({color, props}) => {
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
      d="m4 9.675 6.88 3.972a.886.886 0 0 0 .231.093v7.704l-6.62-3.918a1 1 0 0 1-.491-.86V9.675Zm16-.106v7.097a1 1 0 0 1-.49.86l-6.621 3.918v-7.771a.889.889 0 0 0 .048-.026L20 9.569Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.216 7.747a.999.999 0 0 1 .314-.262l7-3.728a1 1 0 0 1 .94 0l7 3.728a1 1 0 0 1 .253.191l-7.675 4.431a.89.89 0 0 0-.14.1.895.895 0 0 0-.139-.1l-7.553-4.36Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
  </svg>
    </div>
  )
}

export default Report
