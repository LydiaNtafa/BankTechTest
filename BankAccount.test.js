const BankAccount = require("./BankAccount");

describe('Bank Account', () => {
    it('starts with an empty statement', () => {
        const Account = new BankAccount();
        expect(Account.statement).toStrictEqual([])
    });
});
// ```
// When a new account is created
// the bank statement should be an empty array
// ```

// ```
// When a new account is created 
// and the printed statement should look like this
// date || credit || debit || balance
// ```