import React from 'react'
import {Link}from "react-router-dom"
const Alink = ({content, design}) => {
  return (
    <Link className={design}>
      {content}
    </Link>
  )
}

export default Alink
