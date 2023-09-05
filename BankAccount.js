class BankAccount {
    #statement = [];
    #balance = 0;
    
    printStatement() {
        return `date || credit || debit || balance`;
    }

    deposit(amount) {
        this.#balance = amount + this.#balance;
        return `Transaction complete. New account balance: ${this.#balance.toFixed(2)}`
    }

    
};

module.exports = BankAccount;