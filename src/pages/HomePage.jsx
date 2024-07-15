import React from 'react'
import Navbar from "../components/Navbar"
import Body from "../components/Body"
import LinkSection from '../components/LinkSection'
import { Link } from "react-router-dom"
import DropDownLink from '../components/DropDownLink'
import Section from "../components/Section"
import Basket from "../assets/courtimg/danny-lines-7yfKErZo5ro-unsplash (1) (2) (6).png"
import Button from "../components/Button"
import Court from "../assets/courtimg/oleksii-s-O2kqxbix4Mw-unsplash.jpg"

const HomePage = () => {












    return (
        <div className=''>
            <Navbar />
            <LinkSection design="LS ">
                <div className="pt-2  ">
                    <div className="row  text-center">
                        <div className="col-md-4 ">
                            <Link className="parallelogram-link text-decoration-none text-white">
                                LATEST NEWS
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <div className="parallelogram-link text-decoration-none ">
                                <DropDownLink />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Link className="parallelogram-link text-decoration-none text-white">
                                RULES
                            </Link>
                        </div>
                    </div>
                </div>
            </LinkSection>
            <Body design="">
                <div className="row bg-color">
                    <div className="col-md-6">
                        <Section>
                            <img src={Basket} alt='' className='bodyimg' />
                        </Section>
                    </div>

                    <Section design="col-md-6 text-center  ">
                        <div className="">
                            <h1 className='sacremento text-black-75 pt-5 '>Basketball doesn't build character, it reveals it.</h1>
                            <p className='increase pt-5'>It takes three things to become a special player:{<b><u>TALENT,</u></b>}  {<b><u>CHARACTER</u></b>} and {<b><u>COMPETITIVE FIRE</u></b>}</p>
                        </div>
                        <Button content={<Link to="https://forms.gle/vNK9SKegbToKVUq5A" className='link btn bg-black text-white '>
                            REGISTER
                        </Link>} design=" text-white " />
                    </Section>
                </div>
            </Body >
            <Body style={{
                backgroundImage: `url(${Court})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center",
            }} design="row  ">
                <div className="col-12">
                    <Section design="text-center  ">
                    <h1 className='norms text-dark '>STEP INTO THE COURT NOW!</h1>
                    </Section>
                </div>
            </Body>

        </div>
    )
}

export default HomePage
