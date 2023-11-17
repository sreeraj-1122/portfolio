import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { useState } from 'react';
import About from './Components/About';
import Skills from './Components/Skills';

function App() {
  
  return (
    <div className="App">
      
      <Header />  
      <Home  />
      <About/>
      <Skills/>


    </div>
  );
}

export default App;
