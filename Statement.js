class Statement {
    constructor(transactions) {
        this.header = "date || credit || debit || balance"
        this.transactions = transactions
    }

    print() {
        return this.header;
    }
}

module.exports = Statement;