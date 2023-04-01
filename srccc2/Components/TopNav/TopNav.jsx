import React from 'react';
import Text from "./Text"
import Icons from './Icons';  

import Topcss from "./TopNav.module.css"  

const TopNav = () => {
  return (
    <section className={Topcss.topnav} >
        <div className={Topcss.a1}>
            <div className={Topcss.leftdiv}>
                <Text/>
            </div>
            <div className={Topcss.rightdiv}>
                <Icons/>
            </div>
        </div>
    </section>
  )
}

export default TopNav
  