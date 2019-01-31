import React, { Component } from 'react';
import  "./style/portfolio.css";
import clevercap from "./screenshots/clevercap.png";
import crystal from "./screenshots/crystal.png";
import drinkerator from "./screenshots/drinkerator.png";
import todo from "./screenshots/todolist.png";
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
        <a href ="https://katherinestout.github.io/PoliticsGame/">
        <img src={wordguess} alt="wordguess" className="screenshots"></img>
        </a>
   
        <a href="https://katherinestout.github.io/Todo_Redux/">
        <img src={todo} alt="todo" className="screenshots" ></img>
        </a>
      
        <a href="https://katherinestout.github.io/crystalgame/">
        <img src={crystal} alt="crystal" className="screenshots" ></img>
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

      <button className="portfoliocode"> <a href="https://github.com/katherinestout/portfolio">
      Click here to see my Portfolio code!</a></button>
      </div>
      </div>

 
    );
  }
}

export default PortfolioPeices;