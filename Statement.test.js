const Statement = require("./Statement");

describe('Statement', () =>{
    it("creates a header variable with required format date || credit || debit || balance", () => {
        const statement = new Statement();
        expect(statement.header).toStrictEqual('date || credit || debit || balance')
    })

    it("when there are no transactions prints an empty statement", () => {
        const transactions = []
        const statement = new Statement(transactions);
        expect(statement.print()).toStrictEqual('date || credit || debit || balance')
    })

    
})