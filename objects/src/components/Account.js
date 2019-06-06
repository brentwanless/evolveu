class Account {
    constructor(accountID, accountName, initBalance) {
        this.accountID = accountID;
        this.accountName = accountName;
        this.accountBalance = initBalance;
    }

    deposit(amount) {
        if(amount > 0) {
            this.accountBalance += amount;
        } else {
            alert("Deposit: Invalid dollar amount entered.");
        }
        return this.accountBalance;
    }

    withdraw(amount) {
        if(amount > 0) {
            this.accountBalance -= amount;
        } else {
            alert("Withdrawal: Invalid dollar amount entered.");
        }
        return this.accountBalance;
    }

    balance() {
        return this.accountBalance;
    }
}
export default Account;
