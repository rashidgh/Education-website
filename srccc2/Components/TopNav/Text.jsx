import React from 'react'
import { SlEnvelopeOpen } from "react-icons/sl";

import Topcss from "./TopNav.module.css" 

const Text = () => {
  return (
    <>
      <SlEnvelopeOpen className={Topcss.topicon}style={{}}/> 
      <a className={Topcss.anchor} href='hello@testyantraglobal.com' target={'_blank'}>hello@testyantraglobal.com</a>
    </>
  )
}

export default Text
