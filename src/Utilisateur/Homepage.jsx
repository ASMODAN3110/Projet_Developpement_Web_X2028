import React from 'react'
import Hero from './Hero';
import Footer from '../PageClient/Footer';
import Section2 from './Section2';
import Section3 from './Section3';
// import {link} from 'react-router-dom';
import Header from '../PageClient/Header';

const Homepage = () => {
    return (
      <div>
        <Header/>
        <Hero />
        <Section2/>
        <hr></hr>
        <Section3/>
        <Footer/>
      </div>
    );
  };


  export default Homepage ; 