import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AboutMe from '../../routes/AboutMe'; 
import Contact from '../../routes/Contact';
import Skills from '../../routes/Skills'; 
import Projects from '../../routes/Projects'; 
import PortfolioCss from './Styles/Portfolio.module.css'
import { Presentacion } from './Presentacion';
const Portfolio = () => {
  return (
    <div className={PortfolioCss.Portfolio}>
      <Navbar />
      <Presentacion/>
      <AboutMe />
        <Skills /> 
      <Projects /> 
      <Contact /> 
      <Footer />
    </div>
  );
};

export default Portfolio;
