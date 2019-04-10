import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import PortfolioPeices from './components/PortfolioPeices';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

class Home extends Component {

  render() {
    return (
   
      <div className="Home">
 

      <Header/>
      <NavBar/>
      <About/>
      <Skills/>
      <PortfolioPeices/>
      <Contact/>
      <Footer/>
      </div>

    
    );
  }
}

export default Home;