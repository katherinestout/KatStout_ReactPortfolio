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

      <div className="Portfolio">

      
      <h2 className="title"> Portfolio Projects  </h2> <hr/>
      
      <div className="container-1">
      <div className="box-1 container-1-box">
        <a href ="https://katherinestout.github.io/FloralWordGame/">
        <img src={wordguess} alt="wordguess" className="screenshots"></img>
        </a>
        <p>Hangman Style Game</p>
        <ul className="portfolio-ul">
          <li>
           Hangman Style Game
          </li>
        </ul>
        </div>

        <div className="box-2 container-1-box">
        <a href="https://tranquil-wildwood-40776.herokuapp.com/home">
        <img src={photography} alt="photography" className="screenshots" ></img>
        </a>
        <p>Photography Website</p>
        <ul className="portfolio-ul">
          <li>
           Photography Website
          </li>
        </ul>
        </div>

        <div className="box-3 container-1-box">
        <a href="https://young-dusk-20952.herokuapp.com/">
        <img src={doctorwho} alt="doctorwho" className="screenshots" ></img>
        </a>
        <p>Doctor Who Memory Game</p>
        <ul className="portfolio-ul">
          <li>
           Memory Game
          </li>
        </ul>
        </div>
       
        <div className="box-4 container-1-box">
        <a href="https://katherinestout.github.io/Drinkerator/" >
        <img src={drinkerator} alt="drinkerator" className="screenshots"></img>
        </a>
        <p>Drinkerator</p>
        <ul className="portfolio-ul">
          <li>
           Drinkerator
          </li>
        </ul>

        </div>
          
        <div className="box-5 container-1-box">
         <a href="https://damp-mountain-40245.herokuapp.com/login">
        <img src={clevercap} alt="clevercap" className="screenshots" ></img>
        </a>
        <p>CleverCap</p>
        <ul className="portfolio-ul">
          <li>
           CleverCap
          </li>
        </ul>

         </div>
          
      <div className="box-6">
          <button className="portfoliocode"> 
      <a href="https://github.com/katherinestout/KatStout_ReactPortfolio">
      Portfolio Code</a></button>
      </div>
         
      </div>
      
      </div>

     

 
    );
  }
}

export default PortfolioPeices;