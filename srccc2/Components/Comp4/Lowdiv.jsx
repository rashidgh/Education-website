import React from 'react'
import img1 from "../../Assets/Automate-Software-Testing-1280x800.jpg"
import img2 from "../../Assets/4_salesforce-720x800.jpg"
import img3 from "../../Assets/3_devops-1280x800.jpg"
import { BiChevronRightCircle } from "react-icons/bi";


const Lowdiv = () => {
  return (
    <section className='lowdiv1'>
        <article>
            <div>
                <span className='divup'>
                    <img src={img1} alt=""/>
                    <p>February 21, 2023</p>
                    <h3>Automated software<br/>testing -101</h3>
                    <p>read more</p>
                </span>
            </div>
            <div>
                <span className='cimg'>
                    <img src={img2} alt=""/>
                </span>
            </div>
            <div>
                <span className='divup'>
                    <img src={img3} alt=""/>
                    <p>February 21, 2023</p>
                    <h3>Test Automation and<br/>Performance Testing<br/>for DevOps Platform</h3>
                    <p>read more</p>
                </span>
            </div>
        </article>
    </section>
  )
}

export default Lowdiv
