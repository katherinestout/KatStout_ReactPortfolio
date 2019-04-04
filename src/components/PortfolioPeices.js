import React, { Component } from 'react';
import  "./style/portfolio.css";
import clevercap from "./screenshots/clevercap.png";
import doctorwho from "./screenshots/doctorwho.png";
import drinkerator from "./screenshots/drinkerator.png";
import photography from "./screenshots/photography.png";
import wordguess from "./screenshots/wordguess.png";
//import BigProjectLinks from './links/BigProjectLinks';
//import SmallProjectLinks from './links/SmallProjectLinks';





class PortfolioPeices extends Component {
  render() {
    return (

      <div className="Portfolio" id="portfolio">
      <div>
      <h2 className="title"> Portfolio Projects  </h2> <hr/>
      <div className="projects">
      <ul>
        <li className="animated slideInLeft">
        <a href ="https://katherinestout.github.io/FloralWordGame/">
        <img src={wordguess} alt="wordguess" className="screenshots"></img>
        </a>
      
        </li>
        <li className="animated slideInLeft">
        <a href="https://tranquil-wildwood-40776.herokuapp.com/home">
        <img src={photography} alt="photography" className="screenshots" ></img>
        </a>
        </li>
        <li>
        <a href="https://young-dusk-20952.herokuapp.com/">
        <img src={doctorwho} alt="doctorwho" className="screenshots" ></img>
        </a>
          </li>
          <li>
          <a href="https://katherinestout.github.io/Drinkerator/" >
        <img src={drinkerator} alt="drinkerator" className="screenshots"></img>
        </a>
          </li>
          <li>
          <a href="https://damp-mountain-40245.herokuapp.com/login">
        <img src={clevercap} alt="clevercap" className="screenshots" ></img>
        </a>
          </li>
          <li>
          <button className="portfoliocode"> 
      <a href="https://github.com/katherinestout/KatStout_ReactPortfolio">
      Click here to see my Portfolio code!</a></button>
          </li>
      </ul>
    
      </div>
      </div>
      </div>

 
    );
  }
}

export default PortfolioPeices;