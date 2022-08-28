import React from 'react'

const Remita = ({color, props }) => {
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
      d="M3.946 8.106a1 1 0 0 0-.87 1.114A8.995 8.995 0 0 0 11 17.048V18h-1a2 2 0 0 0-2 2h8a2 2 0 0 0-2-2h-1v-.952a8.995 8.995 0 0 0 7.94-7.954 1 1 0 0 0-1.988-.216 6.994 6.994 0 0 1-13.891.098 1 1 0 0 0-1.115-.87Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Zm-9.884-.808a.656.656 0 0 1 .7.609c.087 1.248.64 2.184 1.691 2.864a.656.656 0 1 1-.712 1.102c-1.398-.903-2.172-2.214-2.288-3.875a.656.656 0 0 1 .609-.7Z"
      fill={color || "#EB8376" }
      fillOpacity={0.7}
    />
  </svg>
    </div>
  )
}

export default Remita
