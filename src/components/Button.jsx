import React from 'react'

const Button = ({name, isTransparent, size}) => {

    // const buttonStyle = {
    //     backgroundColor: bg || "hsl(0, 100%, 71%)",
    //     color: color || "#ffffff",
    //     fontWeight: "bold",
    //     borderRadius: "8px",
    // }
    
  return (
    <button type="button" className={`btn custom-btn ${isTransparent ? "clear-btn" : ""}`} style={{fontSize: `${size}px`}}>{name}</button>

  )
}

export default Button
