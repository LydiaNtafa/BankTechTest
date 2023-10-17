const Statement = require("./Statement");

describe('Statement', () =>{
    it("creates a header variable with required format date || credit || debit || balance", () => {
        const statement = new Statement();
        expect(statement.header).toStrictEqual('date || credit || debit || balance')
    })
})