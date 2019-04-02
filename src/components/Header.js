import React, { Component } from 'react';
import "./style/header.css";
import profilepic from './profile/profilepic.JPG'

class Header extends Component {
  render() {
    return (
    <div className="Header">
    <div className="Main">
    <img src={profilepic} alt="profile" className="profilepic"></img>
    <h1> <div className="Emphasis Hello animated slideInRight">Hello! </div> 

      <div className="Name animated slideInLeft">
        I am Katherine Stout. 
        </div>
        
      </h1>

    <h2 className="Emphasis animated slideInRight">Full Stack Developer</h2>
   
  
    </div>
      </div>
    );
  }
}

export default Header;