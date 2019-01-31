import React, { Component } from 'react';
import "./style/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg navbar-collapse ml-auto">
      <div className="container-fluid">

      <ul className="nav navbar">
      <li className="nav-item">
      <a href="#about">
      ABOUT 
      </a>
      </li>
      <li className="nav-item">
      <a href="#skills">
      SKILLS
      </a>
      </li>
      <li className="nav-item">
      <a href="#portfolio">
      PORTFOLIO</a>
      </li>
      <li className="nav-item">
      <a href="#contact">
      CONTACT
      </a>
      </li>
      </ul>
</div>
      </nav>
      </div>
    );
  }
}

export default NavBar;