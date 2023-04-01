import React from 'react'
import Updiv from "./Updiv"
import Lowdiv from "./Lowdiv"
import "./Comp4.css";
import Readmore from './Readmore';

const Comp4 = () => {
  return (
    <section className='comp4'>
        <article>
            <div className='updiv'>
                <Updiv/>
            </div>
            <div >
                <Lowdiv/>
            </div>
            <div className='Lread'>
              <Readmore/>
            </div>
        </article>
    </section>
  )
}

export default Comp4
