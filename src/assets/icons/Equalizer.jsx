import React from 'react'

const Equalizer = ({color, props }) => {
  return (
    <div>
       <svg
    width={39}
    height={39}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      opacity={0.3}
      x={21.125}
      y={6.5}
      width={4.875}
      height={26}
      rx={2}
      fill={color || "#FFA800" }
    />
    <rect
      x={13}
      y={14.625}
      width={4.875}
      height={17.875}
      rx={2}
      fill={color || "#FFA800" }
    />
    <rect
      x={29.25}
      y={17.875}
      width={4.875}
      height={14.625}
      rx={2}
      fill={color || "#FFA800" }
    />
    <rect
      x={4.875}
      y={21.125}
      width={4.875}
      height={11.375}
      rx={2}
      fill={color || "#FFA800" }
    />
  </svg>
    </div>
  )
}

export default Equalizer
