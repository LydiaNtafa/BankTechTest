class Transaction {
    constructor(transactionType, amount, newBalance) {
        const todaysDateAsString = (new Date()).toLocaleDateString('en-GB');
        this.date = todaysDateAsString;
        this.amount = amount.toFixed(2);
        this.newBalance = newBalance.toFixed(2);
        this.transactionType = transactionType;
    }

    format() {
        let text = "";
        switch(this.transactionType) {
            case "deposit":
                text = `${this.date} || ${this.amount} || || ${this.newBalance}`;
                break;
            case "withdraw":
                text = `${this.date} || || ${this.amount} || ${this.newBalance}`;
                break;
        }
        return text;
    }
}

module.exports = Transaction;