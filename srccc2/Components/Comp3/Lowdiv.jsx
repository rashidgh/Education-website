import React from 'react'
import a from "../../Assets/01-160x160.jpg";
import b from "../../Assets/02-160x160.jpg";
import c from "../../Assets/03-160x160.jpg";
import d from "../../Assets/04-160x160.jpg";

const Lowdiv = () => {
  return (
    <section className='lowdiv'>
        <article >
            <div>
                <img src={a} alt="" />
                <p className='num'>6</p>
                <p className='n'>Contries &<nbps />Growing</p>
            </div>
            <div>
                <img src={b} alt="" />
                <p className='num'>3000+</p>
                <p className='n'>Clients Across Globe</p>
            </div>
            <div>
                <img src={c} alt="" />
                <p className='num'>5000+</p>
                <p className='n'>Team Members</p>
            </div>
            <div>
                <img src={d} alt="" />
                <p className='num'>12000+</p>
                <p className='n'>On Demand Engineers</p>
            </div>
        </article>
    </section>
  )
}

export default Lowdiv
