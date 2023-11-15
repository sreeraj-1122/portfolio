import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { useState } from 'react';
import About from './Components/About';

function App() {
  
  return (
    <div className="App">
      
      <Header />  
      <Home  />
      <About/>


    </div>
  );
}

export default App;
