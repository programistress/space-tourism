import React, { useState } from 'react'
import './TechnologyComp.css'
import rocket from '../assets/technology/image-launch-vehicle-portrait.jpg'
import rocketmobile from '../assets/technology/image-launch-vehicle-landscape.jpg'
import capsule from '../assets/technology/image-space-capsule-portrait.jpg'
import capsulemobile from '../assets/technology/image-space-capsule-landscape.jpg'
import spaceport from '../assets/technology/image-spaceport-portrait.jpg'
import spaceportmobile from '../assets/technology/image-spaceport-landscape.jpg'

const TechnologyComp = () => {
  const [tabTech, setTabTech] = useState(1)

  const toggleTabTech = (index) => {
     setTabTech(index)
  }

  return (
    <div className='technology'>
      <h1 className='title_tech white'><span className='number-2'>03</span>SPACE LAUNCH 101</h1>
      <div className="content_technology">
          <ul className='slider-tech'>
            <li className={tabTech === 1 ? 'slider-tech-item active_tech' : 'slider-tech-item'}
            onClick={() =>  toggleTabTech(1)}
            >1</li>
            <li className={tabTech === 2 ? 'slider-tech-item active_tech' : 'slider-tech-item'}
            onClick={() =>  toggleTabTech(2)}
            >2</li>
            <li className={tabTech === 3 ? 'slider-tech-item active_tech' : 'slider-tech-item'}
            onClick={() =>  toggleTabTech(3)}
            >3</li>
          </ul>
          <div className={tabTech === 1 ? 'content_tech_active' : 'content_tech'}>
            <h2 className='tech-title light-blue'>THE TERMINOLOGY…</h2>
            <h1 className='tech-text white'>LAUNCH VEHICLE</h1>
            <p className='tech-p'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
          </div>
          <div className={tabTech === 2 ? 'content_tech_active' : 'content_tech'}>
            <h2 className='tech-title light-blue'>THE TERMINOLOGY…</h2>
            <h1 className='tech-text white'>SPACEPORT</h1>
            <p className='tech-p'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
          </div>
          <div className={tabTech === 3 ? 'content_tech_active' : 'content_tech'}>
            <h2 className='tech-title light-blue'>THE TERMINOLOGY…</h2>
            <h1 className='tech-text white'>SPACE CAPSULE</h1>
            <p className='tech-p'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
          </div>
        <div className='tech-img-div'>
          <img src={tabTech === 1 ? rocket : ''} alt="" className={tabTech === 1 ? 'tech-img_active' : 'tech-img'} />
          <img src={tabTech === 2 ? spaceport : ''} alt="" className={tabTech === 2 ? 'tech-img_active' : 'tech-img'} />
          <img src={tabTech === 3 ? capsule : ''} alt="" className={tabTech === 3 ? 'tech-img_active' : 'tech-img'} />
          <img src={tabTech === 1 ? rocketmobile : ''} alt="" className={tabTech === 1 ? 'tech-img_active-mobile' : 'tech-img'} />
          <img src={tabTech === 2 ? spaceportmobile : ''} alt="" className={tabTech === 2 ? 'tech-img_active-mobile' : 'tech-img'} />
          <img src={tabTech === 3 ? capsulemobile : ''} alt="" className={tabTech === 3 ? 'tech-img_active-mobile' : 'tech-img'} />
        </div>
      </div>
    </div>
  )
}

export default TechnologyComp