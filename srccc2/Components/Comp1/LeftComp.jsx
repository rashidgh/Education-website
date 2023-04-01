import React from 'react'
import { BiCheckCircle } from "react-icons/bi";

const LeftComp = () => {
  return (
   <div>
    <h1 className='head'>Our Services & <br/>Industries</h1>
    <div className='content'>
    We provide industry-specific services and solutions <br/>expertise to Global brands across a range of verticals.
    <br/>
    <br/>
    Some of the industries that we have worked with are :
    </div>
    <ul className='list' >
        <li><BiCheckCircle className='check'/>  <nbps />Banking and Finance</li>
        <li><BiCheckCircle className='check'/>  <nbps />Insurance</li>
        <li><BiCheckCircle className='check'/>  <nbps />Retail and E-commerce</li>
        <li><BiCheckCircle className='check'/>  <nbps />Healthcare</li>
        <li><BiCheckCircle className='check'/>  <nbps />Infromation,Communication,Technologu(ICT)</li>
        <li><BiCheckCircle className='check'/>  <nbps />Education</li>
        <li><BiCheckCircle className='check'/>  <nbps />Travel</li>
        <li><BiCheckCircle className='check'/>  <nbps />Media and Entertainment</li>
    </ul>
   
   </div>
  )
}

export default LeftComp
