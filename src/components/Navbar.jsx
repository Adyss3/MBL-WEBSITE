import React from 'react'
import MblLogo from "../assets/mbl/mbl small.png"
import BucksLogo from "../assets/bucks/bucks small.png"
import HawksLogo from "../assets/hawks/hawks small.png"
import EaglesLogo from "../assets/eagles/eagles small.png"
import HornetsLogo from "../assets/hornets/hornets small.png"
import PelicansLogo from "../assets/pelicans/pelicans small.png"
import Button from "./Button"
import ToolTip from "./ToolTip"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <div className="container-fluid align-items-center ">
                <Link className="navbar-brand" to="/"> <img src={MblLogo} alt="" />MBL</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                
                    <div className="navbar-nav me-auto ms-auto">
                        <Link className="nav-link" to="/bucks"><img src={BucksLogo} alt="" /></Link>
                        <Link className="nav-link" to="/hawks"><img src={HawksLogo} alt="" /></Link>
                        <Link className="nav-link" to="/eagles"><img src={EaglesLogo} alt="" /></Link>
                        <Link className="nav-link" to="/hornets"><img src={HornetsLogo} alt="" /></Link>
                        <Link className="nav-link" to="/pelicans"><img src={PelicansLogo} alt="" /></Link>
                        <div><b type="button" className="btn-tooltip" data-bs-toggle="tooltip" data-bs-html="true" title="MBL TEAM LINKS">
                        <ToolTip/>
                        </b></div>
                    </div>
                    
                    <Button content="Register" desitnation="https://forms.gle/vNK9SKegbToKVUq5A" design=' btn btn-nav'/>
                    
                </div>

            </div>
        </nav>
    )
}

export default Navbar
