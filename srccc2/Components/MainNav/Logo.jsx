import React from 'react';
import logo from "../../Assets/TY_logo_color_70px.png";

import maincss from "./MainNav.module.css"

const Logo = () => {
  return (
    <div className={maincss.logo}>
      <img src={logo}></img>
    </div>
  )
}

export default Logo
