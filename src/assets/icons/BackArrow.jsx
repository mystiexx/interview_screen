import React from 'react'

const BackArrow = (props) => {
  return (
    <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      opacity={0.3}
      width={2.5}
      height={17.5}
      rx={1}
      transform="matrix(0 -1 -1 0 23.75 16.25)"
      fill="#464E5F"
    />
    <path
      d="M15.884 21.616a1.25 1.25 0 0 1-1.768 1.768l-7.5-7.5a1.25 1.25 0 0 1-.037-1.729l6.875-7.5a1.25 1.25 0 1 1 1.842 1.69L9.23 14.962l6.654 6.654Z"
      fill="#464E5F"
    />
  </svg>
  )
}

export default BackArrow
