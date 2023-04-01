import React from 'react'
import Logo from './Logo'
import Menu from "./Menu"
import maincss from "./MainNav.module.css"

const MainNav = () => {
  return (
    <section className={maincss.mainNav}>
      <article >
        <div className={maincss.logo}>
          <Logo/>
        </div>
        <div className={maincss.menu}>
          <Menu/>
        </div>
        </article>
    </section>
  )
}

export default MainNav
