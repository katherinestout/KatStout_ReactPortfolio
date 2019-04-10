import React, { Component } from 'react';
import  "./style/portfolio.css";
import clevercap from "./screenshots/clevercap.png";
import doctorwho from "./screenshots/doctorwho.png";
import drinkerator from "./screenshots/drinkerator.png";
import photography from "./screenshots/photography.png";
import wordguess from "./screenshots/wordguess.png";

class PortfolioPeices extends Component {
  render() {
    return (

      <div className="Portfolio" id="portfolio">
      <h2 className="title-box-portfolio"> Portfolio Projects  
      </h2> <hr/>
      <div className="portfolio-wrapper">

<div className="row">
<div className="column">
<div className="box-1">
<a href ="https://katherinestout.github.io/FloralWordGame/">
        <img src={wordguess} alt="wordguess" className="screenshots"></img>
        </a>
</div>
</div>
<div className="column">
<div className="box-1-description">
<p>Hangman Style Game</p>
        <ul className="portfolio-ul">
        <li>
           Short Description/ Purpose
          </li>
          <li>
           Vanilla Javascript, jQuery, Boostrap
          </li>
       
       
        </ul>
</div>
</div>
</div>

<div className="row">
<div className="column">
<div className="box-2">
<a href="https://young-dusk-20952.herokuapp.com/">
        <img src={doctorwho} alt="doctorwho" className="screenshots" ></img>
        </a>
</div>
</div>
<div className="column">
<div className="box-2-description">
<p>Doctor Who Memory Game</p>
        <ul className="portfolio-ul">
        
          <li>
           Short Description/ Purpose
          </li>
          <li>
           React, 
          </li>
        
        </ul>
</div>
</div>
</div>
<div className="row">
<div className="column">
<div className="box-3">
<a href="https://katherinestout.github.io/Drinkerator/" >
        <img src={drinkerator} alt="drinkerator" className="screenshots"></img>
        </a>
</div>
</div>
<div className="column">
<div className="box-3-description">
   <p>Drinkerator</p>
        <ul className="portfolio-ul">
        <li>
           Role: Front End team and Design
          </li>
          <li>
           Project Difficulties:
          </li>
          <li>
           My Solution:
          </li>
          <li>
                  Javascript, jQuery, Bulma
          </li>
        </ul>
</div>
</div>
</div>
<div className="row">
<div className="column">
<div className="box-4">
<a href="https://tranquil-wildwood-40776.herokuapp.com/home">
        <img src={photography} alt="photography" className="screenshots" ></img>
        </a>
</div>
</div>
<div className="column">
<div className="box-4-description">
<p>Jane Newport Photography Website</p>
        <ul className="portfolio-ul">
        <li>
           Role: Front End, Back End, and Design
          </li>
          <li>
           Project Difficulties:
          </li>
          <li>
           My Solution:
          </li>
          <li>
                  MERN stack, React, Redux, Express, Node, MongoDB, ES6, Javascript
          </li>
        </ul>
</div>
</div>
</div>
<div className="row">
<div className="column">
<div className="box-5">
<a href="https://damp-mountain-40245.herokuapp.com/login">
        <img src={clevercap} alt="clevercap" className="screenshots" ></img>
        </a>
</div>
</div>
<div className="column">
<div className="box-5-description">
<p>CleverCap</p>
        <ul className="portfolio-ul">
          <li>
           Role: Front End, Back End, and Design
          </li>
          <li>
           Project Difficulties:
          </li>
          <li>
           My Solution:
          </li>
          <li>
        MERN stack, React, Redux, Express, Node, MongoDB, ES6, Javascript, RESTFUL API
          </li>
        </ul>
</div>
</div>
</div>

      <div className="column">
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