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

    it("when there are no transactions prints an empty statement", () => {
        const mockDeposit1 = { format: ()=> '10/01/2023 || 1000.00 || || 1000.00' }
        const mockDeposit2 = { format: ()=> '13/01/2023 || 2000.00 || || 3000.00' }
        const mockWithdrawal1 = { format: ()=> '14/01/2023 || || 500.00 || 2500.00' }
        const transactions = [mockDeposit1, mockDeposit2, mockWithdrawal1]
        const statement = new Statement(transactions);
        expect(statement.print()).toStrictEqual(`date || credit || debit || balance\n`+
        `14/01/2023 || || 500.00 || 2500.00\n`+
        `13/01/2023 || 2000.00 || || 3000.00\n`+
        `10/01/2023 || 1000.00 || || 1000.00`)
    })
})