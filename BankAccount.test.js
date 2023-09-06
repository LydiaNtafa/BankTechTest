const BankAccount = require("./BankAccount");

describe('Bank Account', () => {
    describe('printStatement', () => {
        it('starts with an empty statement', () => {
            const Account = new BankAccount();
            expect(Account.printStatement()).toEqual("date || credit || debit || balance")
        });
    });
    
    describe('deposit', () => {
        it('allows the user to make a deposit of 1000', () => {
            const Account = new BankAccount();
            expect(Account.deposit(1000)).toStrictEqual("Transaction complete. New account balance: 1000.00")
        });
    
        it('allows the user to make a deposit using a decimal number', () => {
            const Account = new BankAccount();
            expect(Account.deposit(0.5)).toStrictEqual("Transaction complete. New account balance: 0.50")
        });
    
        it('shows a deposit on the printed statement', () => {
            const Account = new BankAccount();
            Account.deposit(1000);
            todaysDate = (new Date()).toLocaleDateString('en-GB');
            expect(Account.printStatement()).toStrictEqual(`date || credit || debit || balance\n`+`${todaysDate} || 1000.00 || || 1000.00`)
        });

        it('prints an error message if the input is empty', () => {
            const Account = new BankAccount();
            expect(Account.deposit()).toStrictEqual("Please enter the amount you want to deposit")
        });

        it('prints an error message if the input is not a number', () => {
            const Account = new BankAccount();
            expect(Account.deposit("100")).toStrictEqual("Input type needs to be integer or float")
        });
    })
    
    describe('withdraw', () => {
        // need to test for empty entry or string
        it('does not allow withdrawals if balance is 0', () => {
            const Account = new BankAccount();
            expect(Account.withdraw(1000)).toStrictEqual("Cannot complete this transaction due to insufficient balance. Account balance: 0.00")
        });

        it('allows a withdrawal of 100 if balance is 1000', () => {
            const Account = new BankAccount();
            Account.deposit(1000);
            expect(Account.withdraw(100)).toStrictEqual('Transaction complete. New account balance: 900.00')
        });

    })
    
    it('shows a deposit and a withdrawal on the printed statement', () => {
        const Account = new BankAccount();
        Account.deposit(1000);
        Account.deposit(2000);
        Account.withdraw(500);
        todaysDate = (new Date()).toLocaleDateString('en-GB');
        expect(Account.printStatement()).toStrictEqual(`date || credit || debit || balance\n`+
        `${todaysDate} || || 500.00 || 2500.00\n`+
        `${todaysDate} || 2000.00 || || 3000.00\n`+
        `${todaysDate} || 1000.00 || || 1000.00`)
    });

});

