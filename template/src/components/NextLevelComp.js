import React from 'react';

class NextLevelComp extends React.Component {
    constructor(props) {
        console.log("msg ", props.msg)
        super();
    }
    render() {
        return(
            <div> 
                <h3>This is from NextLevelComp</h3>
                <button onClick={this.props.incFunc}>Next Level Button</button>

                    {/* <p> {console.log("test", this.props.count) } </p> */}
            </div>
        )
    }
}
export default NextLevelComp;

