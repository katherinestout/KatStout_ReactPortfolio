import React, { Component } from 'react';
import "./style/navbar.css";


class NavBar extends Component {
  constructor(){
    super();
    this.state ={
      scrolled: false
    };
  }

/* For sticky navbar, will stick to top when Y is less than ___ */
/* When Y is less than the length of the image */

  componentDidMount(){
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 900;
      if(isTop !== true){
        this.setState({scrolled: true});
      } else {
        this.setState({scrolled: false});
      }
    });
  }
  componentWillUnmount(){
    window.removeEventListener('scroll');
  }
  render() {
    return (
      <div className = {this.state.scrolled ? 't scrolled' : 't'}>

      <div className="NavBar bar t-text">
      <div className="thisContainer">
  
      <div className="thisBox animated fadeIn navabout">
      <a href="#about">
      ABOUT 
      </a>
      </div>
      <div className="thisBox animated fadeIn navskills">
      <a href="#skills">
      SKILLS
      </a>
      </div>
      <div className="thisBox animated fadeIn navportfolio">
      <a href="#portfolio">
      PORTFOLIO</a>
      </div>
      <div className="thisBox animated fadeIn navcontact">
      <a href="#contact">
      CONTACT
      </a>
      </div>
     
  
      </div>
      </div>
      </div>
    );
  }
}

export default NavBar;