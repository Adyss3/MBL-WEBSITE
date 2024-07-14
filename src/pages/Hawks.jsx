import React from 'react'
import MblLogo from "../assets/mbl/mbl small.png"
import BucksLogo from "../assets/bucks/bucks small.png"
import HawksLogo from "../assets/hawks/hawks small.png"
import EaglesLogo from "../assets/eagles/eagles small.png"
import HornetsLogo from "../assets/hornets/hornets small.png"
import PelicansLogo from "../assets/pelicans/pelicans small.png"
import Button from "../components/Button"
import ToolTip from "../components/ToolTip"
import {Link} from "react-router-dom"
import TeamNavbar from "../components/TeamNavbar"

const Hawks = () => {
  return (
    <div>
      <TeamNavbar navdesign="navbar navbar-expand-lg navbar-dark  bg-hawksteamnav">
      <div className="container-fluid align-items-center ">
                <Link className="navbar-brand" to="/"> <img src={MblLogo} alt="" />MBL</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                
                    <div className="navbar-nav me-auto ms-auto">
                        <Link className="nav-link " to="/bucks"><img src={BucksLogo} alt="" /></Link>
                        <Link className="nav-link bg-white logo" to="/hawks"><img src={HawksLogo} alt="" /></Link>
                        <Link className="nav-link " to="/eagles"><img src={EaglesLogo} alt="" /></Link>
                        <Link className="nav-link" to="/hornets"><img src={HornetsLogo} alt="" /></Link>
                        <Link className="nav-link" to="/pelicans"><img src={PelicansLogo} alt="" /></Link>
                    </div>
                    
                    <Button content={<Link to="https://forms.gle/vNK9SKegbToKVUq5A" className='link'>
                      REGISTER
                    </Link>} design="btn btn-nav text-white" />
                </div>

            </div>
      </TeamNavbar>
    </div>
  )
}

export default Hawks
