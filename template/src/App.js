import React from 'react';
import logo from './logo.svg';
import './App.css';

import Part1Comp from './components/Part1Comp';
import Part2Comp from './components/Part2Comp';

function App() {
  return (
    <div className="App">
      <h2>I am in control of this application and my name is Brent</h2>

      <Part1Comp />
      <Part2Comp />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
