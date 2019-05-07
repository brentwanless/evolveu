import React from 'react';
import NextLevelComp from './NextLevelComp';

class Part1Comp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 20};
    }

    incCount = () => {
        this.setState({
            count: this.state.count +1
          });
    }

    onButtonClick = () => {
        console.log("You pushed Button 1", this.state.count);

        console.log("before ", this.state.count);

        this.setState({
            count: this.state.count +1
          });

          console.log("after ", this.state.count);
    }

    render() {

        return (
            <div>
                <h1>Hello from Part1Comp</h1>
                <h2>The count is {this.state.count}</h2>
                <button onClick={this.onButtonClick}>Push Button 1</button>
                <NextLevelComp msg= "Message from component 1" incFunc = {this.incCount} count = {this.state.count}/>
            </div>
        );
    }
}

export default Part1Comp;
