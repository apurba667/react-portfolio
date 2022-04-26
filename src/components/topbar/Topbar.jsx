import React from 'react';
import "./topbar.scss";
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro">Apurba.</a>
          <div className="itenContainer">
          
          <span>+8801714345878</span>
        </div>
        <div className="itenContainer">
          
          <span>apurbaanikroy@gmail.com</span>
        </div>
        </div>
        
        <div className="right">
            <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>

            </div>
        </div>
      </div>
    </div>
  )
}
