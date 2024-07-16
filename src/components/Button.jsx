import React from 'react'
import {Link} from "react-router-dom"

const Button = ({content, design,desitnation}) => {
  return (
    <Link className={design} to={desitnation}>
      {content}
    </Link>
  )
}

export default Button
