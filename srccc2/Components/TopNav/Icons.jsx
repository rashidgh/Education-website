import React from 'react'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import Topcss from "./TopNav.module.css"
const Icons = () => {
  return (
    <>
      <div className={Topcss.icons}>
        <FaFacebookF style={{height:14}}/>
      </div>
      <div className={Topcss.icons}>
        <FaTwitter style={{height:14}}/>
      </div>
      <div className={Topcss.icons}>
        <FaInstagram style={{height:14}}/>
      </div>
      <div className={Topcss.icons}>
        <FaLinkedinIn style={{height:14}}/>
      </div>
    </>
  )
}

export default Icons
