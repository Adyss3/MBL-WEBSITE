import React from 'react'
import Navbar from "../components/Navbar"
import DropDownLink from '../components/DropDownLink'
import Section from "../components/Section"
import Basket from "../assets/courtimg/danny-lines-7yfKErZo5ro-unsplash (1) (2) (6).png"
import Button from "../components/Button"
import Court from "../assets/courtimg/oleksii-s-O2kqxbix4Mw-unsplash.jpg"

const HomePage = () => {












    return (
        <div>
            <Navbar />
            <Section design="bg-black py-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center text">
                        <div className="col-4  text-center ">
                            <Button content="LATEST NEWS" design="text-decoration-none text-white" />
                        </div>
                        <div className="col-4  text-center  d-none d-lg-block px-2">
                        <DropDownLink/>
                        </div>
                        <div className="col-4  text-center ">
                            <Button content="RULES" design="text-decoration-none text-white" />
                        </div>
                    </div>
                </div>
            </Section>
            <Section design="bg-color" >
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Basket} alt="" className='basket' />
                        </div>
                        <div className="col-md-6  py-5 ">
                            <div className="text-center align-items-center">
                                <h1 className='fw-bold sacremento'>Basketball doesn't build character, it reveals it.</h1>
                            </div>
                        </div>
                        <div className="col-md-12  py-2 text-center w-50 m-auto">
                        <p className='fs-3 py-5'>It takes three things to become a special player:<b><u>TALENT</u></b>, <b><u>CHARACTER</u></b> and <b><u>COMPETITIVE FIRE</u></b>
                                </p>
                                <Button content="Register" desitnation="https://forms.gle/vNK9SKegbToKVUq5A" design=' btn btn-nav ' />
                        </div>
                    </div>
                </div>
            </Section>
            <Section style={{
                    backgroundImage: `url(${Court})`,
                }}>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='text-center norms'>STEP INTO THE COURT NOW</h1>
                        </div>
                    </div>
                </div>
            </Section>


        </div>
    )
}

export default HomePage
