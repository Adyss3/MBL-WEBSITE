import React from 'react'

const LinkSection = ({children, design}) => {
  return (
    <div className={design}>
      {children}
    </div>
  )
}

export default LinkSection
