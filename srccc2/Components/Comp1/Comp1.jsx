import React from 'react'
import "./comp1.css"
import LeftComp from './LeftComp'
import RightComp from './RightComp'
import bgimg from "../../Assets/Wave_White_bottom_right_shape_02.png"

const Comp1 = () => {
  return (
    <section className="comp1">
        <article>
            <div className='leftcomp'>
                <LeftComp/>
            </div>
            <div className='right'>
                <RightComp/>
            </div>
        </article>
    </section>
  )
}

export default Comp1
