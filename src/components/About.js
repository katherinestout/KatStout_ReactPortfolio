import React, { Component } from 'react';
import "./style/about.css";

class About extends Component {
  
  render() {
    
    return (
      <div className="About" id="about">
       
      <h2 className="about-title">About Me</h2>
      <hr/>

      <div className="container-about">
      <div className="about-box-1 about-box">
      
      <p>In 2017 I graduated from Hood College, 
        with a degree in Communications and a Minor in Studio Art.
        During my college years, I discovered two of my greatest passions;
        photography and coding. From 2017 - present I have ran my own photography 
        business. In 2018 I earned my Full Stack Web Development Certificate from George 
        Washington University.
        
       
        </p>
      </div>
     
      </div>
    
        <div className="about-box">
        <p>Download my resume!</p>
        <a href ="https://drive.google.com/file/d/1HZ7uluRVBYfiNid8Jwrd9XaQ2lrD0AJx/view?usp=sharing">
        <button type="button" className="btn btn">
        
        Resume 
   
         <i className="fas fa-file-download download"></i>
        </button>
        </a>
        </div>
        </div>

    );
  }
}

export default About;