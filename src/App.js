import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { useState } from 'react';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">

     
        <Header />
        <Home />
        <About/>
        <Skills />
        <Projects />
        <Contact />
        <Footer/>




    </div>
  );
}

export default App;
