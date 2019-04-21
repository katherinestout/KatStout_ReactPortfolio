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
      
      <p>
        
        
      I am a Full Stack Web Developer, 
      with a background in Design and Photography. 
      Upon graduating from Hood College in 2017, with my BA in Communications, 
      I started and ran my own photography business. 
      A year later, I dove full force into coding, 
      earning my certificate in Full Stack Web Development 
      from George Washington University. 
        
       
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