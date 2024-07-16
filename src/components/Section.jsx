import React, { children } from 'react'

const Section = ({ children, design, style}) => {
  return (
    <section className={design} style={style}>
      {children}
    </section>
  )
}

export default Section
