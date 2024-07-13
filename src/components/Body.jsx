import React from 'react'

const Body = ({children, design}) => {
  return (
    <div className={design}>
        {children}
    </div>
  )
}

export default Body
