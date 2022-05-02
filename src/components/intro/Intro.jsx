import React from 'react'
import "./intro.scss"
export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="aseets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Apurba Kumar Roy</h1>
          <h3><span>Full Stack</span> Web Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="aseets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
