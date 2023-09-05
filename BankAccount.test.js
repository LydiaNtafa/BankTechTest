const BankAccount = require("./BankAccount");

describe('Bank Account', () => {
    describe('printStatement', () => {
        it('starts with an empty statement', () => {
            const Account = new BankAccount();
            expect(Account.printStatement()).toEqual("date || credit || debit || balance")
        });
    });
    
    describe('deposit', () => {
        // needs edge cases 
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
            todaysDate = (new Date()).toLocaleDateString('en-GB');
            expect(Account.printStatement()).toStrictEqual(`date || credit || debit || balance\n`+`${todaysDate} || 1000.00 || || 1000.00`)
        });
    })
    
    describe('withdrawal', () => {
        // needs edge cases
        it('does not allow withdrawals if balance is 0', () => {
            const Account = new BankAccount();
            expect(Account.withdrawal(1000)).toStrictEqual("Cannot complete this transaction due to insufficient balance. Account balance: 0.00")
        });

        it('allows a withdrawal of 100 if balance is 1000', () => {
            const Account = new BankAccount();
            Account.deposit(1000);
            expect(Account.withdrawal(100)).toStrictEqual('Transaction complete. New account balance: 900.00')
        });

    })
    
    it('shows a deposit and a withdrawal on the printed statement', () => {
        const Account = new BankAccount();
        Account.deposit(1000);
        Account.deposit(2000);
        Account.withdrawal(500);
        todaysDate = (new Date()).toLocaleDateString('en-GB');
        expect(Account.printStatement()).toStrictEqual(`date || credit || debit || balance\n`+
        `${todaysDate} || || 500.00 || 2500.00\n`+
        `${todaysDate} || 2000.00 || || 3000.00\n`+
        `${todaysDate} || 1000.00 || || 1000.00`)
    });

});

