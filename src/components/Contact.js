import React, { Component } from 'react';
import "./style/contact.css";



class Contact extends Component {
  render() {

    return (
    <div className="Contact">
  

    <div className="title-box">
      <h2>Contact Me:</h2>
      </div>
   
    <div className="container-contact">
   <div className="contact-box">
    <i className="fas fa-envelope-open"></i>  
    <p>   kjs14@hood.edu</p>
 
    </div>

    <div className="contact-box">
    <i className="fab fa-linkedin"></i> 
    <a href="https://www.linkedin.com/in/katherinejstout/">
   <p>LinkedIn Profile</p> 
   </a>
    </div>

      <div className="contact-box">
      <i className="fab fa-github"></i> 
    <a href ="https://www.github.com/katherinestout">
    <p>My Repositories</p>
    </a>
    
    </div>
    </div>
   






    </div>
    );
  }
}

export default Contact;