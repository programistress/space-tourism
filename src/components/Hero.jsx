import './Hero.css'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='text'>
        <h2 className='title_hero light-blue'>SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className='title-big'>SPACE</h1>
        <p className='hero_p'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <button>
        <a href="/destination" className='hero-button'>
        explore
        </a>
      </button>
    </div>
  )
}

export default Hero