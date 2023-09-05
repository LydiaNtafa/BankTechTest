const BankAccount = require("./BankAccount");

describe('Bank Account', () => {
    it('starts with an empty statement', () => {
        const Account = new BankAccount();
        expect(Account.printStatement()).toEqual("date || credit || debit || balance")
    });

    it('allows the user to make a deposit of 1000', () => {
        const Account = new BankAccount();
        expect(Account.deposit(1000)).toStrictEqual("Transaction complete. New account balance: 1000.00")
    });

    it('allows the user to make a deposit using a float', () => {
        const Account = new BankAccount();
        expect(Account.deposit(0.5)).toStrictEqual("Transaction complete. New account balance: 0.50")
    });

    it('shows a deposit on the printed statement', () => {
        const Account = new BankAccount();
        Account.deposit(1000);
        expect(Account.printStatement()).toStrictEqual(`date || credit || debit || balance\n`+`05/10/2023 || || 1000.00 || 1000.00`)
    });
});

