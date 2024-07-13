import React from 'react'

const TeamNavbar = ({children, navdesign}) => {
  return (
    <nav className={navdesign}>
      {children}
    </nav>
  )
}

export default TeamNavbar
