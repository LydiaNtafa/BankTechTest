class Transaction {
    constructor(transactionType, amount, newBalance) {
        const todaysDateAsString = (new Date()).toLocaleDateString('en-GB');
        this.date = todaysDateAsString;
        this.amount = amount;
        this.newBalance = newBalance;
        this.transactionType = transactionType;
    }

    format() {
        let text = "";
        switch(this.transactionType) {
            case "deposit":
                text = `${this.date} || ${this.amount.toFixed(2)} || || ${this.newBalance.toFixed(2)}`;
                break;
            case "withdraw":
                text = `${this.date} || || ${this.amount.toFixed(2)} || ${this.newBalance.toFixed(2)}`;
                break;
        }
        return text;
    }
}

module.exports = Transaction;