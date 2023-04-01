import React from 'react'
import { CgSearch } from "react-icons/cg";
import maincss from "./MainNav.module.css"

const Menu = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li id={maincss.home1}>Services
          <ul id={maincss.home2}>
            <li>software-development</li>
            <li>software-testing</li>
            <li>Elevate-IT Traning</li>
            <li>IT Services & Managed<br/>Services</li>
          </ul>
        </li>
        <li id={maincss.prod1}>Products
            <ul id={maincss.prod2}>
                <li>SkillRary</li>
            </ul>
        </li>
        <li id={maincss.ind1}>Industries
              <ul id={maincss.ind2}>
                  <li>Banking & Finance</li>
                  <li>Insurance</li>
                  <li>Healthcare</li>
                  <li>Retail & e-commerce</li>
                  <li>Tech & Communication</li>
                  <li>Education</li>
                  <li>Travel</li>
                  <li>Media & Entertainment</li>
              </ul>
        </li>
        <li>Blogs</li>
        <li id={maincss.about1}>About
              <ul id={maincss.about2}>
                  <li>About Us</li>
                  <li>Our purpose & mission</li>
                  <li>Articles</li>
                  <li>Carrers</li>
                  <li>Contacts</li>
              </ul>
        </li>
        <span><CgSearch className={maincss.search}/></span>
      </ul>
      <aside id={maincss.homeDropdown}>
     
      </aside>
    </div>
  )
}

export default Menu
