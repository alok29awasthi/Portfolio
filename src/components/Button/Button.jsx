import React from 'react'
import './Button.css'

const Button = ({onClick, name, className, textColor, backgroundColor, borderColor, boxShadowColor, hoverTextColor, hoverBoxShadowColor, hoverBackgroundColor}) => {
  
  const squareStyle = {
    '--text-color': textColor,
    '--background-color': backgroundColor,
    '--border-color': borderColor,
    '--box-shadow-color': boxShadowColor,
    '--hover-text-color': hoverTextColor,
    '--hover-box-shadow-color': hoverBoxShadowColor,
    '--hover-background-color': hoverBackgroundColor
  }

  return (
    <div className={`custom-button ${className}`} style={squareStyle}>
      <button onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button