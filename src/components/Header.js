import React, { Component } from 'react';
import "./style/header.css";


class Header extends Component {
  render() {

    function ResponsiveImage( { src, width, height } ) {
      return (
        <div
          style={ { 
            width,
          } }
          className="responsive-image">
          <div style={ {
              paddingBottom: ( height / width * 100 ) + '%'
            } } />
          <img
            src={ src }
            className="responsive-image__image"
            alt={src} />
        </div>
      );
    }
    
    
    return (
    <div className="overlay">
    <div>

    <ResponsiveImage
    src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
    alt="headerpic"
    className="headpic"
    width={ 1900 }
    height={ 1100 } />


<div className="column-head">
<h1 className="centered">
<div className='fullstack'>
Katherine Stout
  </div>
 
   <div className='name'>
  Full Stack Web Developer

     </div></h1>
</div>
    </div>
  
    </div>
   
    );
  }
}

export default Header;