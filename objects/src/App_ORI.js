import React from 'react';
import logo from './logo.svg';
import './App.css';

import Sail1 from './components/Sail1';
import sail1icon from './components/sail-1.jpg';
import sail2icon from './components/sail-2.jpg';
import power1 from './components/power-1.jpg';
import yacht1 from './components/yacht-1.png';
import yacht2 from './components/yacht-2.jpg';
import ReactHead from './components/ReactHead';


function App() {
  return (
    
    <div className="App">
 
      <Sail1  />

      <img src={sail1icon} className="Sail1-icon" alt="logo" />
      <img src={sail2icon} className="Sail1-icon" alt="logo" />
      <img src={power1} className="Power1-icon" alt="logo" />
      <img src={yacht1} className="Yacht1-icon" alt="logo" />
      <img src={yacht2} className="Yacht1-icon" alt="logo" />

      <header className="App-header">

      {/* logoImg = <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <ReactHead logoImg = { <img src={logo} className="App-logo" alt="logo"} /> */}
   
      <ReactHead />
      
      </header>
    </div>
  );
}

export default App;



      /*{ <img src={logo} className="App-logo" alt="logo" />
 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> }*/