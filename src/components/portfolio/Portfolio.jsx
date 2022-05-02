import React from 'react'
import "./portfolio.scss"
export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Featured</li>
          <li>Mobile App</li>
          <li>Web App</li>
          <li>Iot Project</li>
          <li>Branding</li>
        </ul>
        <div className="container">
          <div className="item">
            <img src="aseets/cooking.png" alt="" />
            <h3>Cooking Racipy</h3>
          </div>
        </div>
    </div>
  )
}
