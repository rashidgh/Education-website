import React from 'react'
import TopNav from './Components/TopNav/TopNav'
import MainNav from "./Components/MainNav/MainNav"
import Body from "./Components/Body/Body"
import "./global.css"
import Comp1 from './Components/Comp1/Comp1'
import Comp2 from './Components/Comp2/Comp2'
import Comp3 from './Components/Comp3/Comp3'
import Comp4 from './Components/Comp4/Comp4'
import Footertop from './Components/FooterTop/Footertop'
import FootLow from './Components/FootLow/FootLow'
import Header from './Components/header/Header';
import AppBar from './Components/appbar/AppBar';



const App = () => {
  return (
    <div>
      <Header />
      <AppBar />
      {/* <Body/>
      <Comp1/>
      <Comp2/>
      <Comp3/>
      <Comp4/>
      <Footertop/>
      <FootLow/> */}
    </div>
  )
}
export default App
