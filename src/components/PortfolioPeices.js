import React, { Component } from 'react';
import  "./style/portfolio.css";
import clevercap from "./screenshots/clevercap.png";
import doctorwho from "./screenshots/doctorwho.png";
import drinkerator from "./screenshots/drinkerator.png";
import photography from "./screenshots/photography.png";
import wordguess from "./screenshots/wordguess.png";
import portfolio from "./screenshots/portfolio.png";


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
<div className="box-description">
<h4>Word Guess Game</h4>
        <ul className="portfolio-ul">
        <li>
           A hangman style word-guess game, utilizing Vanilla Javascript and jQuery.
          </li>
          <li>
           Vanilla Javascript, jQuery, Boostrap
          </li>
          <li>   <a href ="https://github.com/katherinestout/FloralWordGame">
                    Code </a></li>
          <li>  <a href ="https://katherinestout.github.io/FloralWordGame/">
                    Deployed
                    </a></li>
       
       
        </ul>
</div>
</div>
</div>



<a href="https://young-dusk-20952.herokuapp.com/">
        <img src={doctorwho} alt="doctorwho" className="screenshots" ></img>
        </a>



<div className="column">
<div className="box-description">
<h4>Doctor Who Memory Game</h4>


        <ul className="portfolio-ul">
      
          <li>
           A memory game built with React.
          </li>
          <li>
           React, ES6
          </li>
          <li> <a href="https://github.com/katherinestout/DoctorWho_ReactGame">
                   Code
                   </a></li>
          <li>   <a href="https://young-dusk-20952.herokuapp.com/">
                    Deployed</a></li>
        
        </ul>
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
<div className="box-description">
<h4>Drinkerator</h4>
        <ul className="portfolio-ul">
        <li>
           Role: Front End team and Design
          </li>
          <li>App designed to come up with the perfect drink, for a person in their early 20's 
                  who is to the bar scene and who does not know what drink to order.</li>
         
          <li>
                  Javascript, jQuery, Bulma
          </li>
          <li>    <a href="https://github.com/katherinestout/Drinkerator">
                    Code
                    </a></li>
          <li>  <a href="https://katherinestout.github.io/Drinkerator/">
                    Deployed</a></li>
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
<div className="box-description">
<h4>Jane Newport Photography Website</h4>
        <ul className="portfolio-ul">
        <li>A photography website designed for the photographer 'Jane Newport.' 
                The site utilizes nodemailer to send emails, and has a scheduling system which uses CRUD methods.</li>
        <li>
           Role: Front End, Back End, and Design
          </li>
          <li>
                  MERN stack, React, Redux, Express, Node, MongoDB, ES6, Javascript, Nodemailer, RESTFUL API
          </li>
          <li>  <a href="https://github.com/katherinestout/PhotoWebsite_PayPal_React">
                    Code
                    </a></li>
          <li>    <a href="https://tranquil-wildwood-40776.herokuapp.com/home">
                    Deployed</a></li>
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
<div className="box-description">
<h4>CleverCap</h4>
        <ul className="portfolio-ul">
        <li>Designed for Instagram users who are looking for unique captions to use 
                for their Instagram photos, who are seeking to maximize their engagement potential.</li>
          <li>
           Role: Front End, Back End, and Design
          </li>
          <li>
        MERN stack, React, Redux, Express, Node, MongoDB, ES6, Javascript, RESTFUL API
          </li>
          <li> <a href="https://github.com/katherinestout/React_MERN">
                   Code
                   </a></li>
          <li> <a href="https://damp-mountain-40245.herokuapp.com/login">
                    Deployed</a></li>
        </ul>
</div>
</div>
</div>

<div className="row">
<div className="column">
<div className="box-5">
<a href="https://github.com/katherinestout/KatStout_ReactPortfolio">
        <img src={portfolio} alt="portfolio" className="screenshots" ></img>
        </a>
</div>
</div>
<div className="column">
<div className="box-description">
<h4>My Portfolio</h4>
        <ul className="portfolio-ul">

        
        
          <li> <a href="https://github.com/katherinestout/KatStout_ReactPortfolio">
                  Portfolio Code
                   </a></li>
         
        </ul>
</div>
</div>
</div>
</div>
</div>

     

 
    );
  }
}

export default PortfolioPeices;