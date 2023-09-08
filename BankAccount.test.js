const BankAccount = require("./BankAccount");
const originalDate = Date;

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
            global.Date = class extends Date {
                constructor() {
                    super('2019-12-12');
                }
            };
            const Account = new BankAccount();
            Account.deposit(1000);
            expect(Account.printStatement()).toStrictEqual(`date || credit || debit || balance\n`+`12/12/2019 || 1000.00 || || 1000.00`)
            global.Date = originalDate;
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
        it('does not allow withdrawals if balance is 0', () => {
            const Account = new BankAccount();
            expect(Account.withdraw(1000)).toStrictEqual("Cannot complete this transaction due to insufficient balance. Account balance: 0.00")
        });

        it('allows a withdrawal of 100 if balance is 1000', () => {
            const Account = new BankAccount();
            Account.deposit(1000);
            expect(Account.withdraw(100)).toStrictEqual('Transaction complete. New account balance: 900.00')
        });

        it('prints an error message if the input is empty', () => {
            const Account = new BankAccount();
            expect(Account.withdraw()).toStrictEqual("Please enter the amount you want to withdraw")
        });

        it('prints an error message if the input is not a number', () => {
            const Account = new BankAccount();
            expect(Account.withdraw("100")).toStrictEqual("Input type needs to be integer or float")
        });

    })
    
    it('shows a deposit and a withdrawal on the printed statement', () => {
        const Account = new BankAccount();
        global.Date = class extends Date {
            constructor() {
                super('2023-01-10'); 
            }
        };
        Account.deposit(1000);
        global.Date = originalDate;
        global.Date = class extends Date {
            constructor() {
                super('2023-01-13');
            }
        };
        Account.deposit(2000);
        global.Date = originalDate;
        global.Date = class extends Date {
            constructor() {
                super('2023-01-14'); 
            }
        };
        Account.withdraw(500);
        global.Date = originalDate;
        expect(Account.printStatement()).toStrictEqual(`date || credit || debit || balance\n`+
        `14/01/2023 || || 500.00 || 2500.00\n`+
        `13/01/2023 || 2000.00 || || 3000.00\n`+
        `10/01/2023 || 1000.00 || || 1000.00`)
    });

});
