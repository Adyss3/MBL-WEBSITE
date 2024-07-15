import React from 'react'

const Body = ({children, design, style}) => {
  return (
    <div className={design} style={style}>
        {children}
    </div>
  )
}

export default Body
