import Account from './Account';

test('TDD testing Account', () => {

    const accountTest = new Account(1, 'BWAN', 50);

    expect(accountTest.accountID).toBe(1);
    expect(accountTest.accountName).toMatch(/BWAN/);
    expect(accountTest.accountBalance).toEqual(50);

    console.log("accountID ", accountTest.accountID);
    console.log("accountName ", accountTest.accountName);
    console.log("accountBalance ", accountTest.accountBalance);

    accountTest.deposit(10);
    expect(accountTest.accountBalance).toEqual(60);
    console.log("accountBalance plus 10", accountTest.accountBalance);

    accountTest.deposit(20);
    expect(accountTest.accountBalance).toEqual(80);
    console.log("accountBalance plus 20", accountTest.accountBalance);

    accountTest.withdraw(50);
    expect(accountTest.accountBalance).toEqual(30);
    console.log("accountBalance minus 50", accountTest.accountBalance);

    accountTest.balance();
    expect(accountTest.accountBalance).toEqual(30);
    console.log("final balance", accountTest.accountBalance);

});
