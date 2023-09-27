class Transaction {
    constructor() {
        this.date = this.#todaysDateAsString();
    }

    #todaysDateAsString() {
        return (new Date()).toLocaleDateString('en-GB');
    }
}

module.exports = Transaction;