const BankAccount = require("./BankAccount");

describe('Bank Account', () => {
    it('starts with an empty statement', () => {
        const Account = new BankAccount();
        expect(Account.printStatement()).toStrictEqual("date || credit || debit || balance")
    });
});

