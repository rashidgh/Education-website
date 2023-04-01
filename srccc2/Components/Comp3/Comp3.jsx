import React from 'react';
import Updiv from "./Updiv"
import Lowdiv from "./Lowdiv"
import "./Comp3.css";

const Comp3 = () => {
  return (
    <section className='comp3'>
        <article>
            <div className='updiv'>
                <Updiv/>
            </div>
            <div>
                <Lowdiv/>
            </div>
        </article>
    </section>
  )
}

export default Comp3
