import React from 'react';
import './App.css';

import ReactHead from './components/ReactHead';
import Sail2Comp from './components/Sail2Comp';
import Power1Comp from './components/Power1Comp';
import Yacht1Comp from './components/Yacht1Comp';
import Yacht2Comp from './components/Yacht2Comp';

import sail3icon from './graphics/sail-3.jpg';
import sail4icon from './graphics/sail-4.jpg';
import power1 from './graphics/power-1.jpg';
import yacht1 from './graphics/yacht-1.png';
import yacht2 from './graphics/yacht-2.jpg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDisplay: "home",
    }
  }

  anyFunction = (e) => {
    console.log("e event ", e.target.name);

    this.setState({
      toDisplay: e.target.name,
    });
  }

  render () {

    // let body;
    // if (this.state.toDisplay === "home") {
    //   body = <ReactHead />
    // } else {
    //   body = <h1>Not sure whats next</h1>
    // }

    return (
      
      <div className="App">
    
        {/* <Sail1  /> */}

        <img src={sail3icon} className="Sail-icon" alt="logo" name = "home" onClick={this.anyFunction} />
        <img src={sail4icon} className="Sail-icon" alt="logo" name = "sail2" onClick={this.anyFunction} />
        <img src={power1} className="Power-icon" alt="logo" name = "power1" onClick={this.anyFunction} />
        <img src={yacht1} className="Yacht-icon" alt="logo" name = "yacht1" onClick={this.anyFunction} />
        <img src={yacht2} className="Yacht-icon" alt="logo" name = "yacht2" onClick={this.anyFunction} />
        
        {(this.state.toDisplay === "home") ? <ReactHead /> : null }
        {(this.state.toDisplay === "sail2") ? <Sail2Comp /> : null }
        {(this.state.toDisplay === "power1") ? <Power1Comp /> : null }

        {(this.state.toDisplay === "yacht1") ? <Yacht1Comp /> : null }        
        {(this.state.toDisplay === "yacht2") ? <Yacht2Comp /> : null }

      </div>
    );
  }
}
export default App;
