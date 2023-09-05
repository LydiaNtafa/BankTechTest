const BankAccount = require("./BankAccount");

describe('Bank Account', () => {
    it('starts with an empty statement', () => {
        const Account = new BankAccount();
        expect(Account.printStatement()).toStrictEqual("date || credit || debit || balance")
    });

    it('allows the user to make a deposit', () => {
        const Account = new BankAccount();
        expect(Account.deposit(1000)).toStrictEqual("Transaction complete. New Account balance: 1000.00")
    });
});

