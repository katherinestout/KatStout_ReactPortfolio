import React, { Component } from 'react';
import "./style/navbar.css";

   /*
    <div className="row">
      <div className="column">
      <div className="pics">
      </div>
      </div>
      <div className="column">
      <div className="description">
      </div>
      </div>
      </div>
*/

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar bar">
      <div className="thisContainer">
  
      <div className="thisBox">
      <a href="#about">
      ABOUT 
      </a>
      </div>
      <div className="thisBox">
      <a href="#skills">
      SKILLS
      </a>
      </div>
      <div className="thisBox">
      <a href="#portfolio">
      PORTFOLIO</a>
      </div>
      <div className="thisBox">
      <a href="#contact">
      CONTACT
      </a>
      </div>
     
  
      </div>
      </div>
    );
  }
}

export default NavBar;