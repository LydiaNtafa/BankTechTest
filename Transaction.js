class Transaction {
    constructor(transactionType, amount, newBalance) {
        this.date = this.#todaysDateAsString();
        this.amount = amount;
        this.newBalance = newBalance;
    }

    #todaysDateAsString() {
        return (new Date()).toLocaleDateString('en-GB');
    }

    format() {
        return `${this.date} || ${this.amount.toFixed(2)} || || ${this.newBalance.toFixed(2)}`
    }
}

module.exports = Transaction;