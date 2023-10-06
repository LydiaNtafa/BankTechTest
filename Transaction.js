class Transaction {
    constructor(transactionType, amount, newBalance) {
        const todaysDateAsString = (new Date()).toLocaleDateString('en-GB');
        this.date = todaysDateAsString;
        this.amount = amount;
        this.newBalance = newBalance;
        this.transactionType = transactionType;
    }

    format() {
        if (this.transactionType === "deposit") {
            return `${this.date} || ${this.amount.toFixed(2)} || || ${this.newBalance.toFixed(2)}`
        }
        return `${this.date} || || ${this.amount.toFixed(2)} || ${this.newBalance.toFixed(2)}`
    }
}

module.exports = Transaction;