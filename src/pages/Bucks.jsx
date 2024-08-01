import React from 'react'
import MblLogo from "../assets/mbl/mbl small.png"
import BucksLogo from "../assets/bucks/bucks small.png"
import BucksLogos from "../assets/bucks/bucks.png"
import HawksLogo from "../assets/hawks/hawks small.png"
import EaglesLogo from "../assets/eagles/eagles small.png"
import HornetsLogo from "../assets/hornets/hornets small.png"
import PelicansLogo from "../assets/pelicans/pelicans small.png"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import TeamNavbar from "../components/TeamNavbar"
import Section from "../components/Section"
import Jiggy from "../assets/jiggy/WhatsApp Video 2024-08-01 at 06.57.58_38bce3f2.mp4"

const Bucks = () => {
  return (
    <div>
      <div className="container-fluid bg-bucksteamnav">
        <TeamNavbar navdesign="navbar navbar-expand-lg navbar-dark bg-bucksteamnav">
          <div className="container-fluid align-items-center ">
            <Link className="navbar-brand" to="/"> <img src={MblLogo} alt="" />MBL</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >

              <div className="navbar-nav me-auto ms-auto">
                <Link className="nav-link bg-white logo my-2 text-center" to="/bucks"><img src={BucksLogo} alt="" /></Link>
                <Link className="nav-link" to="/hawks"><img src={HawksLogo} alt="" /></Link>
                <Link className="nav-link" to="/eagles"><img src={EaglesLogo} alt="" /></Link>
                <Link className="nav-link" to="/hornets"><img src={HornetsLogo} alt="" /></Link>
                <Link className="nav-link" to="/pelicans"><img src={PelicansLogo} alt="" /></Link>
              </div>
              <Link to="https://forms.gle/vNK9SKegbToKVUq5A" className='link'>
                <Button content="REGISTER NOW" design="btn btn-nav " />
              </Link>

            </div>

          </div>
        </TeamNavbar>
      </div>
      <div className="container-fluid bg-black py-2 px-5">
        {/* nav-links */}
        <div className="w-100">
          <Section design="d-flex align-content-center justify-content-between">
            <div>
              <Link to="#" className='text-decoration-none text-white'>
                Latest News
              </Link>
            </div>
            <div>
              <Link to="#" className='text-decoration-none text-white'>
                Schedule
              </Link>
            </div>
            <div>
              <Link to="#" className='text-decoration-none text-white'>
                Standings
              </Link>
            </div>
            <div>
              <Link to="#" className='text-decoration-none text-white'>
                Stats
              </Link>
            </div>
            <div>
              <Link to="#" className='text-decoration-none text-white'>
                Draft Result
              </Link>
            </div>
          </Section>
        </div>
      </div>

      <div className="container-fluid p-5 bg-dark w-100 h-100">
        <Section design="">
          <div className="row">
            <div className="col-md-8 text-white align-content-center">
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active " >
                    <img src={BucksLogos} className='d-block text-center w-100' alt="" />
                  </div>
                  <div className="carousel-item" >
                    <video src={Jiggy} className='d-block w-100 ' autoPlay="true" height="500px" controls="controls" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>OGUNLEYE IYIOLA</h5>
                      <p>potential abiala bucks first round pick already in the lab cooking</p>
                    </div>
                  </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-4 text-white text-lg-end">
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
              </div>
            </div>

          </div>
        </Section>

      </div>



    </div>
  )
}

export default Bucks
