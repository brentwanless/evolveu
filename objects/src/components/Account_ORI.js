import React from 'react';
import '../Account.css';

class Account extends React.Component {
    constructor(initBalance, accountName) {
        super();
        this.initBalance = initBalance;
        this.accountName = accountName;
    }

// SHOULD THIS GO HERE OR IN A DIFERENT COMPONENT

    handleButtonDeposit = () => {
        const amount = Number(document.getElementById("amount").value);
        this.setState({accBalance: this.state.myAccount.depositAmt(amount)})
    }

// HOW CAN THIS WORK HERE AS A FUNCTION OR ARROW FUNCTION

    function Deposit() {
        return (
            <div>
                <h2>Hello from inside Deposit</h2>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1>In Sail2Comp</h1>
                <button id="depAmt" className="text-btn" onClick={this.handleButtonDeposit}>Deposit</button>
            </div>
        )
    }
}

export default Account;
