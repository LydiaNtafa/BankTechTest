class Statement {
    constructor(transactions) {
        this.header = "date || credit || debit || balance"
        this.transactions = transactions
    }

    print() {
        if (this.transactions.length === 0){
            return this.header
        } else {
            const reversedArray = this.transactions.map(transaction => transaction.format()).reverse();
            return this.header+`\n`+`${reversedArray.join('\n')}`;
        }
    }
}

module.exports = Statement;