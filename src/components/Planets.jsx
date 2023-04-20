import React, { useState } from 'react'
import './Planets.css' 
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'


const Planets = () => {

  const [tabPlanets, setTabPlanets] = useState(1)

  const toggleTabPlanets = (index) => {
     setTabPlanets(index)
  }

  return (
    <div className='planets'>
      <h1 className='title_planets white'><span className='number-2'>01</span>Pick your destination</h1>
      <div className='content'>
        <img src={tabPlanets === 1 ? moon : ''} alt="planet-img" 
        className={tabPlanets === 1 ? 'planet-img-active' : 'planet-img'} />
        <img src={tabPlanets === 2 ? mars : ''} alt="planet-img" 
        className={tabPlanets === 2 ? 'planet-img-active' : 'planet-img'} />
        <img src={tabPlanets === 3 ? europa : ''} alt="planet-img"
        className={tabPlanets === 3 ? 'planet-img-active' : 'planet-img'} />
        <img src={tabPlanets === 4 ? titan : ''} alt="planet-img" 
        className={tabPlanets === 4 ? 'planet-img-active' : 'planet-img'} />
        <div className='text'>
          <ul className='underline-indicators_planets planets-list'>
            <li className={tabPlanets === 1 ? 'active_planets planets-list-item' : 'planets-list-item'}
            onClick={() =>  toggleTabPlanets(1)}
            >MOON</li>
            <li className={tabPlanets === 2 ? 'active_planets planets-list-item' : 'planets-list-item'}
            onClick={() =>  toggleTabPlanets(2)}
            >MARS</li>
            <li className={tabPlanets === 3 ? 'active_planets planets-list-item' : 'planets-list-item'}
            onClick={() =>  toggleTabPlanets(3)}
            >EUROPA</li>
            <li className={tabPlanets === 4 ? 'active_planets planets-list-item' : 'planets-list-item'}
            onClick={() =>  toggleTabPlanets(4)}
            >TITAN</li>
          </ul>
          <div className={tabPlanets === 1 ? 'content_planets_active' : 'content_planets'}>
          <h1 className='planet-name'>MOON</h1>
          <p className='planet-p'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className='info'>
              <div>
                <h2 className='info-title'>AVG. DISTANCE</h2>
                <h1 className='info-text'>384,400 km</h1>
              </div>
              <div>
                <h2 className='info-title'>Est. travel time</h2>
                <h1 className='info-text'>3 days</h1>
              </div>
            </div>
          </div>
          <div className={tabPlanets === 2 ? 'content_planets_active' : 'content_planets'}>
          <h1 className='planet-name'>MARS</h1>
          <p className='planet-p'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            <div className='info'>
              <div>
                <h2 className='info-title'>AVG. DISTANCE</h2>
                <h1 className='info-text'>225 MIL. km</h1>
              </div>
              <div>
                <h2 className='info-title'>Est. travel time</h2>
                <h1 className='info-text'>9 months</h1>
              </div>
            </div>
          </div>
          <div className={tabPlanets === 3 ? 'content_planets_active' : 'content_planets'}>
          <h1 className='planet-name'>EUROPA</h1>
          <p className='planet-p'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            <div className='info'>
              <div>
                <h2 className='info-title'>AVG. DISTANCE</h2>
                <h1 className='info-text'>628 MIL. km</h1>
              </div>
              <div>
                <h2 className='info-title'>Est. travel time</h2>
                <h1 className='info-text'>3 years</h1>
              </div>
            </div>
          </div>
          <div className={tabPlanets === 4 ? 'content_planets_active' : 'content_planets'}>
          <h1 className='planet-name'>TITAN</h1>
          <p className='planet-p'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
            <div className='info'>
              <div>
                <h2 className='info-title'>AVG. DISTANCE</h2>
                <h1 className='info-text'>1.6 BIL. km</h1>
              </div>
              <div>
                <h2 className='info-title'>Est. travel time</h2>
                <h1 className='info-text'>7 years</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planets