import React from 'react'
import {Link} from "react-router-dom"


const DropDownLink = () => {
  return (
    <div >
      <ul>
        <li className="dropdown list-unstyled ">
          <small className="dropdown-toggle text-white list-style-none "  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
            TEAM SCHEDULE
          </small>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link className="dropdown-item" to="/hornets">OLORIN HORNETS SCHEDULE</Link></li>
            <li><Link className="dropdown-item" to="#">ADESHINA HAWKS SCHEDULE</Link></li>
            <li><Link className="dropdown-item" to="#">ABIALA BUCKS SCHEDULE</Link></li>
            <li><Link className="dropdown-item" to="#">OLUKOYA EAGLES SCHEDULE</Link></li>
            <li><Link className="dropdown-item" to="#">YOUNG PELICANS SCHEDULE</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default DropDownLink
