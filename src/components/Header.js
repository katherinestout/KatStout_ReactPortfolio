import React, { Component } from 'react';
import "./style/header.css";
//import profilepic from './profile/profilepic.JPG'

class Header extends Component {
  render() {
    return (
    <div className="Header">
    <div className="Main">
  

 <div className="pointer"></div>
    <h1> <div className="Emphasis Hello animated slideInLeft">Hello! </div> 

      <div className="Name animated slideInLeft">
        I am Katherine Stout. 
        </div>
        
      </h1>

    <h2 className="Emphasis animated slideInLeft">Full Stack Developer</h2>
    </div>
  
    </div>
   
    );
  }
}

export default Header;