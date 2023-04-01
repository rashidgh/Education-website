import React from 'react'
import Media from "./Media"
import Text from './Text'
import "./Comp2.css"

const Comp2 = () => {
  return (
   <section className='comp2'>
        <article>
            <div className='media'>
                <Media/>
            </div>
            <div className='text'>
                <Text/>
            </div>
        </article>
   </section>
  )
}

export default Comp2
