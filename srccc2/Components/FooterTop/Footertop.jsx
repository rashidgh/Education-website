import React from 'react'
import Sub from "./Sub"
import Search from "./Search"
import "./Footertop.css"
import img from "../../Assets/ty_global_1-1-160x160.png"
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { TfiHeadphone } from "react-icons/tfi";
import { GrMail } from "react-icons/gr";


const Footertop = () => {
  return (
   <section className='footertop'>
        <article>
           <div className='updiv'>
            <div className='footertop1'>
                    <Sub/>
                </div>
                <div className='footertop2'>
                    <Search/>
                </div>
           </div>
           <div className='lowdiv'>
                <div className='fimg'>
                    <img src={img} alt="" />
                </div>
                <div className='footer1'>
                    <div>
                        <h4>Home</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Work With Us</li>
                            <li>Contact</li>
                            <li>Case Studies</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Services</h4>
                            <ul>
                                <li>Software Development</li>
                                <li>Software Testing</li>
                                <li>Elevate – IT training services</li>
                                <li>IT consulting</li>
                            </ul>
                    </div>
                </div>
                <div className='footer1'>
                    <div>
                        <h4>Industries</h4>
                        <ul>
                            <li>Banking & Finance</li>
                            <li>Insurance</li>
                            <li>Healthcare</li>
                            <li>Retail & e-commerce</li>
                            <li>Technology and Communications</li>
                            <li>Education</li>
                            <li>Travel</li>
                            <li>Media and Entertainment</li>
                        </ul>
                    </div>
                </div>
                <div className='footer1'>
                    <div>
                        <h4>Connect</h4>
                        <ul className='icon'>
                            <li> <FaFacebookF className="a1" style={{height:40,  width: 40,padding:8}}/></li>
                            <li> <FaTwitter className= "a1" style={{height:40,width: 40,padding:10}}/></li>
                            <li> <FaInstagram className="a1"  style={{height:40,width: 40,padding:10}}/></li>
                            <li> <FaLinkedinIn className="a1"  style={{height:40,width: 40,padding:10}}/></li>
                        </ul>
                        <p><TfiHeadphone/>  Ph: +1 888 980 7010</p>
                        <p><GrMail/>  hello@testyantraglobal.com</p>
                    </div>
                </div>
           </div>
        </article>
   </section>
  )
}

export default Footertop
