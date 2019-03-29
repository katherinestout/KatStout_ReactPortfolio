import React, { Component } from 'react';
import  "./style/portfolio.css";
import clevercap from "./screenshots/clevercap.png";
import doctorwho from "./screenshots/doctorwho.png";
import drinkerator from "./screenshots/drinkerator.png";
import photography from "./screenshots/photography.png";
import wordguess from "./screenshots/wordguess.png";
import projectPlanner from "./screenshots/ProjectPlanner.png";
import BigProjectLinks from './links/BigProjectLinks';
import SmallProjectLinks from './links/SmallProjectLinks';





class PortfolioPeices extends Component {
  render() {
    return (

      <div className="Portfolio" id="portfolio">
      <div className="space">
      <h2> Portfolio Projects  </h2> <hr/>
      <div className="projects">
        <a href ="https://katherinestout.github.io/FloralWordGame/">
        <img src={wordguess} alt="wordguess" className="screenshots"></img>
        </a>
   
        <a href="https://tranquil-wildwood-40776.herokuapp.com/home">
        <img src={photography} alt="photography" className="screenshots" ></img>
        </a>
      
        <a href="https://young-dusk-20952.herokuapp.com/">
        <img src={doctorwho} alt="doctorwho" className="screenshots" ></img>
        </a>
   
        <SmallProjectLinks/>
    
        <a href="https://katprojectplan.firebaseapp.com/signin">
        <img src={projectPlanner} alt="projectPlanner" className="screenshots"></img>
        </a>

        <a href="https://katherinestout.github.io/Drinkerator/" >
        <img src={drinkerator} alt="drinkerator" className="screenshots"></img>
        </a>
    
        <a href="https://damp-mountain-40245.herokuapp.com/login">
        <img src={clevercap} alt="clevercap" className="screenshots" ></img>
        </a>
      
        
        <BigProjectLinks/>
      </div>

      <button className="portfoliocode"> 
      <a href="https://github.com/katherinestout/KatStout_ReactPortfolio">
      Click here to see my Portfolio code!</a></button>
      </div>
      </div>

 
    );
  }
}

export default PortfolioPeices;