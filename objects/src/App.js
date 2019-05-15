import React from 'react';
import './App.css';

import ReactHead from './components/ReactHead';
// import Sail2Comp from './components/Sail2Comp'; REPLACED BY 'MathComp'
import Power1Comp from './components/Power1Comp';
import Yacht1Comp from './components/Yacht1Comp';
import Yacht2Comp from './components/Yacht2Comp';

import MathComp from './components/MathComp';

import sail3icon from './graphics/sail-3.jpg';
import sail4icon from './graphics/sail-4.jpg';
import power1 from './graphics/power-1.jpg';
import yacht1 from './graphics/yacht-1.png';
import yacht2 from './graphics/yacht-2.jpg';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
        toDisplay: "home",       // Set default state.toDisplay as "home"
        }
    }
    // Set the toDisplay state from event target 'e'

    setStateFunction = (e) => {
        // console.log("LATEST e event ", e.target.name);
        // console.log("e target ", e);

        this.setState({
            toDisplay: e.target.name,
        });
    }

    render () {

    return (
      
        <div className="App">

            <div className= "Title">
                <h3>Sail Home</h3>
                <h3>Math Sails</h3>
                <h3>Power Works</h3>
                <h3>Yacht Works</h3>
                <h3>Yacht Works 2</h3>
            </div>

            {/* For onClick of icon set event 'name' */}

            <div className= "Title">
                <img src={sail3icon} className="Sail-icon" alt="logo" name = "home" onClick={this.setStateFunction} />
                <img src={sail4icon} className="Sail-icon" alt="logo" name = "sail2" onClick={this.setStateFunction} />
                <img src={power1} className="Power-icon" alt="logo" name = "power1" onClick={this.setStateFunction} />
                <img src={yacht1} className="Yacht-icon" alt="logo" name = "yacht1" onClick={this.setStateFunction} />
                <img src={yacht2} className="Yacht-icon" alt="logo" name = "yacht2" onClick={this.setStateFunction} />
            </div>

            {/* // ternary function - execute component based on the toDisplay 'name' set above */}

            {/* Example ternary:  condition ? value if true : value if false  */}
    
            {(this.state.toDisplay === "home") ? <ReactHead /> : null }
            {(this.state.toDisplay === "sail2") ? <MathComp /> : null }
            {(this.state.toDisplay === "power1") ? <Power1Comp /> : null }
            {(this.state.toDisplay === "yacht1") ? <Yacht1Comp /> : null }        
            {(this.state.toDisplay === "yacht2") ? <Yacht2Comp /> : null }

        </div>
        );
    }
}
export default App;

