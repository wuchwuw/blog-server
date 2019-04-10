import React from 'react'

const Icon = (props) => {
  return (
    <svg style={{
      width: props.width,
      height: props.height,
      fill: 'currentColor',
      overflow: 'hidden'
    }} aria-hidden="true">
      <use xlinkHref={'#' + props.icon}></use>
    </svg>
  )
}

export default Icon