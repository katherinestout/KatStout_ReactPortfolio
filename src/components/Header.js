import React, { Component } from 'react';
import "./style/header.css";
//import profilepic from './profile/profilepic.JPG'

//<div className="Emphasis Hello animated slideInLeft">Hello! </div> 

class Header extends Component {
  render() {
    return (
    <div className="Header">
    <div className="Main">

    <h1> 
   
      <div className="Name animated slideInLeft">
  Katherine Stout. 
        </div>
        
      </h1>

    <h2 className="Emphasis dev animated slideInLeft">Full Stack Developer</h2>
    </div>
  
    </div>
   
    );
  }
}

export default Header;