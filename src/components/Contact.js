import React, { Component } from 'react';
import "./style/contact.css";



class Contact extends Component {
  render() {
    return (
    <div className="Contact" id="contact">
      <h2>Contact Me</h2>
    <div className="icons">
    <p>
    <i className="fas fa-envelope-open"></i>  
    kjs14@hood.edu
    <i className="fab fa-linkedin"></i> 
    <a href="https://www.linkedin.com/in/katherinejstout/">
    LinkedIn Profile</a>
      
    <br></br>
      
      <i className="fab fa-github"></i> 
    <a href ="https://www.github.com/katherinestout">
    My Repositories</a>
    <i className="fas fa-phone"></i> 
   3013512408
     
    
    </p> 
    </div>
   






    </div>
    );
  }
}

export default Contact;