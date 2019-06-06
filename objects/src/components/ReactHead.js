import React from 'react';
import logo from '../graphics/logo.svg';

class ReactHead extends React.Component {
    constructor(props) {
        super();
    }

    render () {

        return (
            <div>
                <h1>This is the Sail Home Page</h1>
                <h2>Select a Boat Icon Above</h2>
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
}

export default ReactHead;