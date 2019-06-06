import React from 'react';
import math from './math';
import '../MathComp.css';

import plusIcon from '../graphics/plus-icon.png';
import minusIcon from '../graphics/minus-icon.png';
import multiplyIcon from '../graphics/multiply-icon.png';
import divideIcon from '../graphics/divide-icon.png';

class MathComp extends React.Component {
    constructor() {
        super();
        this.state = {
            result: ""      // Set initial state to null
        }
    }
    // handle math inputs and operations via (e) setStateFunction argument

    setStateFunction = (e) => {
        // console.log("LATEST e event ", e.target.name);
        // console.log("e target ", e);

        const a = Number(document.getElementById("input1").value);
        const b = Number(document.getElementById("input2").value);

        let operator = e.target.getAttribute("operand");  // "operand" is passed from onClick
        
        // console.log("operand ", operand);

        switch(operator) {
            case 'addition':
                this.setState({result: math.sum (a, b)});
                break;

            case 'subtract':
                this.setState({result: math.subtract (a, b)});
                break;
            
            case 'multiply':
                this.setState({result: math.multiply (a, b)});
                break;

            case 'divide':
                this.setState({result: math.divide (a, b)});
                break;

            default:
                console.log("Unknown math operation");
        }
    }

    render() {
        return (
            <div className = "Calculator">
                <h2>Welcome To MathComp</h2>

                <div className = "MathData">
                    <input id="input1" type="number" placeholder=" Input One"
                        style={{backgroundColor: 'lightgrey'}}/>

                    <input id="input2" type="number" placeholder=" Input Two"
                        style={{backgroundColor: 'lightgrey'}}/>
                </div>


                <img src={plusIcon} className="MathBtn" alt="logo" operand = "addition" onClick={this.setStateFunction} />
                <img src={minusIcon} className="MathBtn" alt="logo" operand = "subtract" onClick={this.setStateFunction} />
                <img src={multiplyIcon} className="MathBtn" alt="logo" operand = "multiply" onClick={this.setStateFunction} />
                <img src={divideIcon} className="MathBtn" alt="logo" operand = "divide" onClick={this.setStateFunction} />

                <hr></hr>

                <h2>Result: {this.state.result}</h2>
            </div>

        );
    }
}
export default MathComp;

