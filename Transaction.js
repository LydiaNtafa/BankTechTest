class Transaction {
    constructor(transactionType, amount, newBalance) {
        const todaysDateAsString = (new Date()).toLocaleDateString('en-GB');
        this.date = todaysDateAsString;
        this.amount = amount.toFixed(2);
        this.newBalance = newBalance.toFixed(2);
        this.transactionType = transactionType;
    }

    format() {
        let transactionData = "";
        switch(this.transactionType) {
            case "deposit":
                transactionData = `${this.date} || ${this.amount} || || ${this.newBalance}`;
                break;
            case "withdrawal":
                transactionData = `${this.date} || || ${this.amount} || ${this.newBalance}`;
                break;
        }
        return transactionData;
    }
}

module.exports = Transaction;