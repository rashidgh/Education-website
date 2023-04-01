import React from 'react'
import img1 from "../../Assets/portfolio_01-1280x960.jpg"
import img2 from "../../Assets/training_01-1280x960.jpg"
import img3 from "../../Assets/post_07-1280x960.jpg"
import img4 from "../../Assets/consulting-1280x960.jpg"
import { BiChevronRightCircle } from "react-icons/bi";

const RightComp = () => {
  return (
    <div className='Rightcomp'>
        <div className="mid">
            <div className='card1'> 
              <div className='img1'>
                <img src={img1}></img>
              </div>
              <div className='info'>
                  <h3>Software Design and <br/> Development</h3>
                  <p>We deliver IT solutions in a<br/> wide variety of verticals and<
                    br/>elevate businesses to the next<br/>level.</p>
                  <p className='read'>read more <BiChevronRightCircle className='rightarrow'/></p>
              </div>
            </div>
            <div className='card2'>
              <div className='img2'>
                  <img src={img2}></img>
                </div>
                <div className='info'>
                  <h3>Elevate IT - IT Skills<br/>Development</h3>
                  <p>Our customized and curated<br/>training models help<br/>organizations elevate their IT<br/>quotient.</p>
                  <p className='read'>read more <BiChevronRightCircle className='rightarrow'/></p>
              </div>
            </div>
        </div>
        <div className='right'>
             <div className='card3'>
                <div className='img3'>
                      <img src={img3}></img>
                </div>
                <div className='info'>
                  <h3>Software Testing</h3>
                  <p>We offer cost-effective,<br/>reliable and scalable software<br/>testing services.</p>
                  <p className='read'>read more <BiChevronRightCircle className='rightarrow'/></p>
              </div>
            </div>
            <div className='card4'>
                <div className='img1'>
                  <img src={img4}></img>
                </div>
                <div className='info'>
                    <h3>IT Consulting &<br/>Managed Services</h3>
                    <p>Our team of experts help you<br/>craft a winning IT strategy for<br/>your organization</p>
                    <p className='read'>read more <BiChevronRightCircle className='rightarrow'/></p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default RightComp
