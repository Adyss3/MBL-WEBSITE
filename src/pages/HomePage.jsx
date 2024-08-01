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
            <div className="container-fluid bg-dark">
                <Navbar />
            </div>
            <div className="container-fluid bg-black">
                <Section design="bg-black pt-3 ">
                    <div className="container">
                        <div className="row d-flex justify-content-evenly">
                            <div className="col-4  col-md- text-center ">
                                <Button content="LATEST NEWS" design="text-decoration-none text-white" />
                            </div>
                            <div className="col-4   text-center align-content-center d-none d-lg-block ">
                                <DropDownLink /> 
                            </div>
                            <div className="col-4  text-center ">
                                <Button content="RULES" design="text-decoration-none text-white" />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
            <div className="container-fluid bg-color">
                
                <Section design="" >
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
            </div>
            <div className="container-fluid bg-color" style={{
                    backgroundImage: `url(${Court})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <Section >
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className='text-center norms'>STEP INTO THE COURT NOW</h1>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>



        </div>
    )
}

export default HomePage
