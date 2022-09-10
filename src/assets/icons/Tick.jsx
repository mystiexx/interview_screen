import React from 'react'

const Tick = ({ props, color }) => {
  return (
    <svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.563.65c-.451-.242-.954.226-1.25.504-.676.66-1.249 1.423-1.891 2.117-.712.764-1.371 1.528-2.1 2.274-.417.417-.868.868-1.146 1.389-.624-.608-1.162-1.268-1.857-1.806C.816 4.747-.017 4.47 0 5.388c.035 1.198 1.094 2.483 1.875 3.298.33.348.763.712 1.267.73.607.034 1.232-.695 1.596-1.094.643-.694 1.163-1.475 1.753-2.187.764-.937 1.545-1.857 2.291-2.812.469-.59 1.944-2.048.781-2.672Zm-8.8 4.67c-.016 0-.034 0-.069.017a.844.844 0 0 1-.19-.07c.052-.034.138-.017.26.052Z"
      fill={color || "#fff" }
    />
  </svg>
  )
}

export default Tick