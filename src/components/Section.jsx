import React, { Children } from 'react'

const Section = ({design, children}) => {
  return (
    <div className={design}>
      {children}
    </div>
  )
}

export default Section
