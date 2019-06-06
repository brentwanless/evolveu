import React from 'react';
import '../Account.css';
import Account from './Account';

class AccountComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountID: 1,
            accountName: 'BWAN',
            accountBalance: 100,
        }
    }

    newAccount = new Account(1, 'BWAN', 100);

    depositBtn = (e, newAccount) => {

        const transactionAmount = Number(document.getElementById("amount").value);
        let newbal = newAccount.deposit(transactionAmount);
        this.setState({accountBalance: newbal});
        document.getElementById("amount").value = "";
    }

    withdrawBtn = (e, newAccount) => {

        const transactionAmount = Number(document.getElementById("amount").value);
        let newbal = newAccount.withdraw(transactionAmount);
        this.setState({accountBalance: newbal});
        document.getElementById("amount").value = "";
    }

    render() {
        return (
            <div>
                <h1>Welcome To AccountComp</h1>

                <div className = "AccountData">
                    <input id="amount" type="number" placeholder=" Transaction Amount"
                        style={{backgroundColor: 'lightgrey'}}/>
                </div>
                <br />
                
                <button id="amount" className="text-btn" 
                        onClick={(e) => {this.depositBtn(e, this.newAccount)}}>Deposit</button>
                <br />

               <button id="amount" className="text-btn"  
                        onClick={(e) => {this.withdrawBtn(e, this.newAccount)}}>Withdrawal</button>

                <h3>Current Balance: {this.state.accountBalance} </h3>
                {/* {console.log("newbal ", this.state.accountBalance)} */}

            </div>
        )
    }
}

export default AccountComp;
