import React from 'react';

class Part2Comp extends React.Component {
    constructor() {
        super();
        this.count2 = 40;
    }

    onButtonClick = () => {
        console.log("You pushed Button 2", this.count2);
        this.count2 = this.count2 + 1;
    }

    render() {

        return (
            <div>
                <h1>This is from Part2Comp</h1>
                <h2>The count is {this.count2}</h2>
                <button onClick={this.onButtonClick}>Push Button 2</button>
            </div>
        );
    }
}

export default Part2Comp;

