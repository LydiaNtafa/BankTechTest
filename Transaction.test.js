const Transaction = require("./Transaction");
const originalDate = Date;

describe('Transaction', () => {
    it("creates a transaction object that has a date" , () => {
        global.Date = class extends Date {
            constructor() {
                super('1993-09-22');
            }
        };
        const transaction = new Transaction("deposit", 1000, 4000);
        expect(transaction.date).toStrictEqual(`22/09/1993`);
        global.Date = originalDate;
    })

    it("returns the deposit transaction in the required format date || credit || debit || balance", () => {
        global.Date = class extends Date {
            constructor() {
                super('1993-09-22');
            }
        };
        const transaction = new Transaction("deposit", 1000, 4000);
        expect(transaction.format()).toStrictEqual(`22/09/1993 || 1000.00 || || 4000.00`);
        global.Date = originalDate;
    })

    it("returns the withdraw transaction in the required format date || credit || debit || balance", () => {
        global.Date = class extends Date {
            constructor() {
                super('2000-01-01');
            }
        };
        const transaction = new Transaction("withdraw", 666.6, 333.4);
        expect(transaction.format()).toStrictEqual(`01/01/2000 || || 666.60 || 333.40`);
        global.Date = originalDate;
    })
    
})