import React from 'react';

import logo from '../logo.svg';

class ReactHead extends React.Component {
    constructor(props) {
        super();
    }

    render () {

        return (
            <div>
                {/* <img src={props.logoImg} className="App-logo" alt="logo" /> */}

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
            </div>
        );
    }
}

export default ReactHead;