import React from 'react'

const Button = ({content, design}) => {
  return (
    <div className={design}>
      {content}
    </div>
  )
}

export default Button
