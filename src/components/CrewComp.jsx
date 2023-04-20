import React, { useState } from 'react'
import './CrewComp.css'
import douglas from '../assets/crew/image-douglas-hurley.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import anousheh from '../assets/crew/image-anousheh-ansari.png'

const CrewComp = () => {

  const [tabCrew, setTabCrew] = useState(1)

  const toggleTabCrew = (index) => {
     setTabCrew(index)
  }

  return (
    <div className='crew'>
       <h1 className="title_crew white"><span className="number-2">02</span>Meet your crew</h1>
       <div className='content'>
        <div className='text-crew'>
        <div className={tabCrew === 1 ? 'content_crew_active' : 'content_crew'}>
        <h1 className='zvanie'>Commander</h1>
        <h2 className='name'>Douglas Hurley</h2>
        <p className='crew_p'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>
        <div className={tabCrew === 2 ? 'content_crew_active' : 'content_crew'}>
        <h1 className='zvanie'>Mission Specialist </h1>
        <h2 className='name'>MARK SHUTTLEWORTH</h2>
        <p className='crew_p'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
        </div>
        <div className={tabCrew === 3 ? 'content_crew_active' : 'content_crew'}>
        <h1 className='zvanie'>PILOT</h1>
        <h2 className='name'>Victor Glover</h2>
        <p className='crew_p'>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
        </div>
        <div className={tabCrew === 4 ? 'content_crew_active' : 'content_crew'}>
        <h1 className='zvanie'>Flight Engineer</h1>
        <h2 className='name'>Anousheh Ansari</h2>
        <p className='crew_p'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
        </div>
        <ul className='slider-crew'>
          <li className={tabCrew === 1 ? 'slider-crew-item active_crew' : 'slider-crew-item'} 
          onClick={() => toggleTabCrew(1)}
          ></li>
          <li className={tabCrew === 2 ? 'slider-crew-item active_crew' : 'slider-crew-item'} 
          onClick={() => toggleTabCrew(2)}
          ></li>
          <li className={tabCrew === 3 ? 'slider-crew-item active_crew' : 'slider-crew-item'} 
          onClick={() => toggleTabCrew(3)}
          ></li>
          <li className={tabCrew === 4 ? 'slider-crew-item active_crew' : 'slider-crew-item'} 
          onClick={() => toggleTabCrew(4)}
          ></li>
        </ul>
        </div>
        <img src={tabCrew === 1 ? douglas : ''} alt="dude" className={tabCrew === 1 ? 'crew_img-active crew_img-active-d' : 'crew_img'} />
        <img src={tabCrew === 2 ? mark : ''} alt="dude" className={tabCrew === 2 ? 'crew_img-active crew_img-active-m' : 'crew_img'} />
        <img src={tabCrew === 3 ? victor : ''} alt="dude" className={tabCrew === 3 ? 'crew_img-active' : 'crew_img'} />
        <img src={tabCrew === 4 ? anousheh : ''} alt="dude" className={tabCrew === 4 ? 'crew_img-active' : 'crew_img'} />
       </div>
    </div>
  )
}

export default CrewComp